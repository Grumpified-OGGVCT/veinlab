class OllamaClient {
  constructor(apiKey, baseURL = 'https://api.ollama.com') {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async chat(model, messages, options = {}) {
    const { stream = false, temperature = 0.7, ...otherOptions } = options;
    const response = await fetch(`${this.baseURL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({ model, messages, stream, temperature, ...otherOptions })
    });
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    if (stream) return this.parseStream(response.body);
    return await response.json();
  }

  async vision(model, prompt, imageBase64, options = {}) {
    const messages = [{
      role: 'user',
      content: [
        { type: 'text', text: prompt },
        { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } }
      ]
    }];
    return this.chat(model, messages, options);
  }

  async generate(model, prompt, options = {}) {
    const messages = [{ role: 'user', content: prompt }];
    return this.chat(model, messages, options);
  }

  async *parseStream(readableStream) {
    const reader = readableStream.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              if (parsed.choices?.[0]?.delta?.content) {
                yield parsed.choices[0].delta.content;
              }
            } catch (e) {}
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  async *simulateStream(text, delayMs = 30) {
    const words = text.split(' ');
    for (const word of words) {
      yield word + ' ';
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = OllamaClient;
} else {
  window.OllamaClient = OllamaClient;
}

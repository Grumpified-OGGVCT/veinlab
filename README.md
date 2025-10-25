# 🔮 VeinLab - Ollama Cloud Capability Explorer

**Tagline:** *"From curiosity to code in 60 seconds"*

[![GitHub Pages](https://img.shields.io/badge/demo-live-success)](https://grumpified-oggvct.github.io/veinlab/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An interactive GitHub Pages app that lets developers **discover**, **experiment**, and **ship** with Ollama Cloud models.

## 🎯 What It Does

VeinLab provides 6 comprehensive interactive demos showcasing Ollama Cloud capabilities:

### 1. 💬 Multi-Model Chat Arena
- Compare responses from `gpt-oss:120b-cloud`, `deepseek-v3.1:671b-cloud`, `kimi-k2:1t-cloud`
- Side-by-side streaming responses
- **Uses:** Cloud API, Streaming, Multiple models

### 2. 👁️ Vision Analyzer
- Upload images via drag & drop
- 4 pre-built analysis templates (Describe, Objects, OCR, Style)
- **Uses:** `qwen3-vl:235b-cloud`, Vision capability, Structured Outputs

### 3. 🔍 Web-Augmented Q&A
- Ask questions, AI searches web for current info
- Shows sources + AI synthesis
- **Uses:** Web search capability, Tool calling

### 4. �� Code Assistant
- 6 tasks: Generate, Explain, Debug, Optimize, Convert, Document
- Supports 10+ languages (Python, JavaScript, TypeScript, Java, C++, Go, Rust, etc.)
- **Uses:** `qwen3-coder:480b-cloud`, Structured Outputs

### 5. 🛠️ Function Caller Playground
- 6 pre-built tools (weather, calculator, search, email, datetime, currency)
- Watch AI decide when to use them
- **Uses:** Tool calling, Function definitions

### 6. 🌐 Ecosystem Dashboard
- Live data from Ollama Pulse reports
- 127 models across 5 categories
- Trending cloud models showcase
- **Uses:** Data visualization, Model discovery

## 🚀 Quick Start

### View Live Demo
Visit **[https://grumpified-oggvct.github.io/veinlab/](https://grumpified-oggvct.github.io/veinlab/)**

### Run Locally
```bash
git clone https://github.com/Grumpified-OGGVCT/veinlab.git
cd veinlab/docs
# Open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Visit http://localhost:8000
```

### Use the API Client
```javascript
import { OllamaClient } from './assets/js/ollama-client.js';

const client = new OllamaClient('your-api-key');

// Chat with streaming
const stream = await client.chat('deepseek-v3.1:671b-cloud', [
  { role: 'user', content: 'Explain quantum computing' }
], { stream: true });

for await (const chunk of stream) {
  process.stdout.write(chunk);
}

// Vision analysis
const result = await client.vision(
  'qwen3-vl:235b-cloud',
  'Describe this image',
  imageBase64
);
```

## 📁 Project Structure

```
veinlab/
├── docs/                       # GitHub Pages root
│   ├── index.html             # Landing page
│   ├── playground/            # Interactive demos
│   │   ├── chat-arena.html
│   │   ├── vision.html
│   │   ├── search.html
│   │   ├── code.html
│   │   ├── tools.html
│   │   └── ecosystem.html
│   ├── assets/
│   │   ├── js/
│   │   │   └── ollama-client.js  # Reusable API wrapper
│   │   └── css/
│   │       └── main.css          # Dark theme styling
│   └── data/                  # Pulse reports (future)
├── .gitignore
├── LICENSE
└── README.md
```

## 🛠️ Tech Stack

- **Zero Dependencies** - Pure vanilla JavaScript
- **100% Client-Side** - No backend required
- **GitHub Pages** - Free hosting
- **Ollama Cloud API** - Cloud-scale LLM inference
- **Responsive Design** - Mobile-first CSS (375px - 1920px)

## 🌟 Features

✅ **See Before You Code** - Test capabilities interactively  
✅ **Copy Working Examples** - Production-ready code snippets  
✅ **Compare Models** - Side-by-side model comparison  
✅ **Discover Ecosystem** - Trending models and projects  
✅ **Zero Setup** - Runs entirely in browser  
✅ **Open Source** - MIT licensed, fork and customize  

## 🔑 API Key Setup

1. Get your Ollama Cloud API key from [ollama.com](https://ollama.com)
2. Each demo has an API key input field
3. Keys are stored in browser localStorage (never sent to servers)
4. For production use, implement proper key management

## 📊 Supported Models

### Cloud Models (7 total)
- `deepseek-v3.1:671b-cloud` - Massive reasoning (671B params)
- `kimi-k2:1t-cloud` - 1 trillion parameter powerhouse
- `qwen3-coder:480b-cloud` - Specialized coding model
- `gpt-oss:120b-cloud` - Open source GPT alternative
- `qwen3-vl:235b-cloud` - Vision-language model
- `glm-4.6:cloud` - Advanced reasoning with 200K context
- `gpt-oss:20b-cloud` - Efficient general model

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Built with [Ollama Cloud](https://ollama.com)
- Inspired by the Ollama community
- Daily ecosystem data from [Ollama Pulse](https://github.com/Grumpified-OGGVCT/ollama_pulse)

## 📧 Contact

- GitHub: [@Grumpified-OGGVCT](https://github.com/Grumpified-OGGVCT)
- Project: [VeinLab](https://github.com/Grumpified-OGGVCT/veinlab)

---

**⚡ VeinLab** - Where Ollama Cloud Capabilities Come Alive

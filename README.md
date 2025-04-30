# 🚀 Dploy.sh Documentation

This repository provides a lightweight application designed to serve document files (PDFs, images, text, etc.) via a web interface or API. It is particularly well-suited for sharing technical documentation, reports, administrative files, and other relevant resources.

---

## 🧰 Features

- HTTP server for serving static documents
- Intuitive file browsing interface
- File download functionality
- Folder-based file organization
- Optional authentication for access control

---

## Installation

To get started, clone the repository and launch the server:

```bash
git clone https://github.com/kevinzepeda/dploy-docs.git
cd dploy-docs
# Requires Node.js v18.x
npm install
npm run dev
```

By default, all files are served from the `./content` directory.

---

## ⚙️ Configuration

Configuration settings can be adjusted by editing the `./content/config.mjs` file:

- UI customization
- Site links configuration
- SEO settings and meta tags

---

## 🤝 Contributing

Contributions are highly encouraged and appreciated. To contribute, please follow these steps:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/my-improvement`)
3. Implement your changes and commit them (`git commit -am 'Add new feature'`)
4. Push your branch to your fork (`git push origin feature/my-improvement`)
5. Open a Pull Request with a clear description of your changes

For detailed guidelines, refer to the [`CONTRIBUTING.md`](CONTRIBUTING.md) file.

---

## 🛡️ Security

If you discover a security vulnerability or issue, **please do not open a public issue**. Instead, contact us directly via the email provided below to report the issue confidentially and responsibly.

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code, provided that proper credit is given to the original authors.

---

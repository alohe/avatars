# 🚀 Pull Request Proposal for `alohe/avatars`

**PR Title**: `feat: Add NPM package (@geekykalpesh/avatars), CLI downloader, & JS/TS API`

---

## 📝 Description

Hey @alohe! 👋

This Pull Request enhances `avatars` by adding an official NPM package build setup and a zero-install CLI tool.

### ✨ What's New:
1. **NPM Package**: Standard JS/TS package supporting both ESM (`import`) & CommonJS (`require`). Developers can now import CDN helpers, base64 strings, or local image buffers.
2. **CLI Downloader (`npx avatars` / `npx @geekykalpesh/avatars`)**: Allows developers to download or copy avatar categories directly into their frontend project directory (e.g. `./public/avatars`) with a single command or interactive terminal menu.
3. **Hybrid Asset Support**: Bundles the existing 133 PNG files inside `node_modules` while also providing zero-overhead CDN URL helpers pointing to jsDelivr.
4. **TypeScript Declarations**: Includes full TypeScript type definitions and auto-generated catalog metadata.

---

## 💻 Usage Examples

### 1. Zero-Install CLI
```bash
# Interactive CLI menu to select & copy avatars to your project
npx @geekykalpesh/avatars

# Download a category directly into your frontend build assets folder
npx @geekykalpesh/avatars download --category notion --out ./public/avatars

# Get a random avatar CDN link
npx @geekykalpesh/avatars random
```

### 2. JavaScript / TypeScript API
```javascript
import { getAvatarUrl, getRandomAvatarUrl, copyCategoryTo } from '@geekykalpesh/avatars';

// Get CDN URL
const url = getAvatarUrl('vibrent', 1);
// -> "https://cdn.jsdelivr.net/gh/alohe/avatars@main/png/vibrent_1.png"

// Copy avatars into public assets during build step
copyCategoryTo('notion', './public/avatars');
```

---

## 🔒 Backwards Compatibility
- 100% non-breaking: all existing PNG paths and markdown link tables remain untouched.
- If you'd like to transfer ownership of the `@geekykalpesh/avatars` NPM scope or publish under `@alohe/avatars`, I'm happy to grant full admin rights or transfer the npm package to you!

Thank you for creating this awesome avatar collection! 🙌

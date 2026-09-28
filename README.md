# ✨ Avatars

Avatars are small set of images that can be added as placeholders for profile pictures on your projects.

## 📦 NPM Package & CLI Setup

Use avatar profile images directly in your project via NPM or CLI:

### 1. Zero-Install CLI (Quick Start)
Run interactive selector or download directly to your project's `./public/avatars` folder:

```bash
# Launch interactive CLI selector
npx @geekykalpesh/avatars

# Or download specific category to your web app
npx @geekykalpesh/avatars download --category notion --out ./public/avatars

# Or copy ALL 133 avatars to your project
npx @geekykalpesh/avatars copy-all --out ./public/avatars

# Get random avatar URL
npx @geekykalpesh/avatars random
```

### 2. NPM Package Installation
```bash
npm install @geekykalpesh/avatars
# or
yarn add @geekykalpesh/avatars
# or
pnpm add @geekykalpesh/avatars
```

### 3. Programmatic Usage (JS / TS)

```javascript
import { 
  getAvatarUrl, 
  getRandomAvatarUrl, 
  getAvatarPath, 
  getAvatarBase64,
  copyCategoryTo 
} from '@geekykalpesh/avatars';

// 🌐 1. Get CDN URL (Zero bundle overhead)
const avatarUrl = getAvatarUrl('vibrent', 1);
// -> "https://cdn.jsdelivr.net/gh/alohe/avatars@main/png/vibrent_1.png"

// 🎲 2. Get Random Avatar CDN URL
const randomNotionAvatar = getRandomAvatarUrl('notion');

// 📂 3. Get local file path or Base64 Data URI
const base64Avatar = getAvatarBase64('3d', 2); // "data:image/png;base64,..."
const localPath = getAvatarPath('memo', 5);    // Absolute path inside node_modules

// 📁 4. Programmatically copy avatars to project build folder
copyCategoryTo('notion', './public/avatars');
```

---

## 🎨 Avatar Collections Direct Links

 | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_4.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_4.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_7.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_7.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_8.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_8.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_9.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_9.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_10.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_10.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_11.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_11.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_12.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_12.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_13.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_13.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_14.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_14.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_15.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_15.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_16.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_16.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_17.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_17.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_18.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_19.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_19.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_20.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_20.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_21.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_21.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_22.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_22.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_23.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_23.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_24.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_24.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_25.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_25.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_26.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_26.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_1.png" width="60px" />        | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_1.png</code>        |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_2.png" width="60px" />        | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_2.png</code>        |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_3.png" width="60px" />        | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_3.png</code>        |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_4.png" width="60px" />        | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_4.png</code>        |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_5.png" width="60px" />        | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_5.png</code>        |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_1.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_1.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_2.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_2.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_3.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_3.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_4.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_4.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_5.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_5.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_6.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_6.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_7.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_7.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_8.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_8.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_9.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_9.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_10.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/bluey_10.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_1.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_1.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_2.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_2.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_4.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_4.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_5.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_5.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_6.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_6.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_7.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_7.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_8.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_8.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_9.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_9.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_10.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_10.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_11.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_11.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_13.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_13.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_14.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_14.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_15.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_15.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_16.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_16.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_17.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_17.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_18.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_18.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_19.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_19.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_20.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_20.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_21.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_21.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_22.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_22.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_23.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_23.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_25.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_25.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_26.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_26.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_27.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_27.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_28.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_28.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_29.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_29.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_30.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_30.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_31.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_31.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_32.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_32.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_33.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_33.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_34.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_34.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_35.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_35.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_1.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_1.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_2.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_2.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_3.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_3.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_4.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_4.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_5.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_5.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_6.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_6.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_7.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_7.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_8.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_8.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_9.png" width="60px" />    | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_9.png</code>    |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_10.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_10.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_11.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_11.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_12.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_12.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_13.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_13.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_14.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_14.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_15.png" width="60px" />   | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_15.png</code>   |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_1.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_1.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_2.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_2.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_3.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_3.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_4.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_4.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_5.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_5.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_6.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_6.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_7.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_7.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_8.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_8.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_9.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_9.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_1.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_1.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_2.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_2.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_3.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_3.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_4.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_4.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_5.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_5.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_6.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_6.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_7.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_7.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_8.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_8.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_9.png" width="60px" />      | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_9.png</code>      |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_10.png" width="60px" />     | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/toon_10.png</code>     |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_1.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_1.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_2.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_2.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_3.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_3.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_4.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_4.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_5.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_5.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_6.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_6.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_7.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_7.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_8.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_8.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_9.png" width="60px" />  | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_9.png</code>  |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_10.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_10.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_11.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_11.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_12.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_12.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_13.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_13.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_14.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_14.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_15.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_15.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_16.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_16.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_17.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_17.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_18.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_18.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_19.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_19.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_20.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_20.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_21.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_21.png</code> |
 | <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_22.png" width="60px" /> | <code>https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_22.png</code> |


Feel free to reach out to me [on Twitter](https://twitter.com/alemalohe) if you have any questions or feedback! 

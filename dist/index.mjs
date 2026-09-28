// src/catalog.ts
var CATEGORIES = [
  "3d",
  "bluey",
  "memo",
  "notion",
  "teams",
  "toon",
  "upstream",
  "vibrent"
];
var CATEGORY_COUNTS = {
  "3d": 5,
  "bluey": 10,
  "memo": 35,
  "notion": 15,
  "teams": 9,
  "toon": 10,
  "upstream": 22,
  "vibrent": 27
};
var AVATAR_CATALOG = {
  "3d": [
    {
      "id": 1,
      "filename": "3d_1.png",
      "category": "3d"
    },
    {
      "id": 2,
      "filename": "3d_2.png",
      "category": "3d"
    },
    {
      "id": 3,
      "filename": "3d_3.png",
      "category": "3d"
    },
    {
      "id": 4,
      "filename": "3d_4.png",
      "category": "3d"
    },
    {
      "id": 5,
      "filename": "3d_5.png",
      "category": "3d"
    }
  ],
  "bluey": [
    {
      "id": 1,
      "filename": "bluey_1.png",
      "category": "bluey"
    },
    {
      "id": 2,
      "filename": "bluey_2.png",
      "category": "bluey"
    },
    {
      "id": 3,
      "filename": "bluey_3.png",
      "category": "bluey"
    },
    {
      "id": 4,
      "filename": "bluey_4.png",
      "category": "bluey"
    },
    {
      "id": 5,
      "filename": "bluey_5.png",
      "category": "bluey"
    },
    {
      "id": 6,
      "filename": "bluey_6.png",
      "category": "bluey"
    },
    {
      "id": 7,
      "filename": "bluey_7.png",
      "category": "bluey"
    },
    {
      "id": 8,
      "filename": "bluey_8.png",
      "category": "bluey"
    },
    {
      "id": 9,
      "filename": "bluey_9.png",
      "category": "bluey"
    },
    {
      "id": 10,
      "filename": "bluey_10.png",
      "category": "bluey"
    }
  ],
  "memo": [
    {
      "id": 1,
      "filename": "memo_1.png",
      "category": "memo"
    },
    {
      "id": 2,
      "filename": "memo_2.png",
      "category": "memo"
    },
    {
      "id": 3,
      "filename": "memo_3.png",
      "category": "memo"
    },
    {
      "id": 4,
      "filename": "memo_4.png",
      "category": "memo"
    },
    {
      "id": 5,
      "filename": "memo_5.png",
      "category": "memo"
    },
    {
      "id": 6,
      "filename": "memo_6.png",
      "category": "memo"
    },
    {
      "id": 7,
      "filename": "memo_7.png",
      "category": "memo"
    },
    {
      "id": 8,
      "filename": "memo_8.png",
      "category": "memo"
    },
    {
      "id": 9,
      "filename": "memo_9.png",
      "category": "memo"
    },
    {
      "id": 10,
      "filename": "memo_10.png",
      "category": "memo"
    },
    {
      "id": 11,
      "filename": "memo_11.png",
      "category": "memo"
    },
    {
      "id": 12,
      "filename": "memo_12.png",
      "category": "memo"
    },
    {
      "id": 13,
      "filename": "memo_13.png",
      "category": "memo"
    },
    {
      "id": 14,
      "filename": "memo_14.png",
      "category": "memo"
    },
    {
      "id": 15,
      "filename": "memo_15.png",
      "category": "memo"
    },
    {
      "id": 16,
      "filename": "memo_16.png",
      "category": "memo"
    },
    {
      "id": 17,
      "filename": "memo_17.png",
      "category": "memo"
    },
    {
      "id": 18,
      "filename": "memo_18.png",
      "category": "memo"
    },
    {
      "id": 19,
      "filename": "memo_19.png",
      "category": "memo"
    },
    {
      "id": 20,
      "filename": "memo_20.png",
      "category": "memo"
    },
    {
      "id": 21,
      "filename": "memo_21.png",
      "category": "memo"
    },
    {
      "id": 22,
      "filename": "memo_22.png",
      "category": "memo"
    },
    {
      "id": 23,
      "filename": "memo_23.png",
      "category": "memo"
    },
    {
      "id": 24,
      "filename": "memo_24.png",
      "category": "memo"
    },
    {
      "id": 25,
      "filename": "memo_25.png",
      "category": "memo"
    },
    {
      "id": 26,
      "filename": "memo_26.png",
      "category": "memo"
    },
    {
      "id": 27,
      "filename": "memo_27.png",
      "category": "memo"
    },
    {
      "id": 28,
      "filename": "memo_28.png",
      "category": "memo"
    },
    {
      "id": 29,
      "filename": "memo_29.png",
      "category": "memo"
    },
    {
      "id": 30,
      "filename": "memo_30.png",
      "category": "memo"
    },
    {
      "id": 31,
      "filename": "memo_31.png",
      "category": "memo"
    },
    {
      "id": 32,
      "filename": "memo_32.png",
      "category": "memo"
    },
    {
      "id": 33,
      "filename": "memo_33.png",
      "category": "memo"
    },
    {
      "id": 34,
      "filename": "memo_34.png",
      "category": "memo"
    },
    {
      "id": 35,
      "filename": "memo_35.png",
      "category": "memo"
    }
  ],
  "notion": [
    {
      "id": 1,
      "filename": "notion_1.png",
      "category": "notion"
    },
    {
      "id": 2,
      "filename": "notion_2.png",
      "category": "notion"
    },
    {
      "id": 3,
      "filename": "notion_3.png",
      "category": "notion"
    },
    {
      "id": 4,
      "filename": "notion_4.png",
      "category": "notion"
    },
    {
      "id": 5,
      "filename": "notion_5.png",
      "category": "notion"
    },
    {
      "id": 6,
      "filename": "notion_6.png",
      "category": "notion"
    },
    {
      "id": 7,
      "filename": "notion_7.png",
      "category": "notion"
    },
    {
      "id": 8,
      "filename": "notion_8.png",
      "category": "notion"
    },
    {
      "id": 9,
      "filename": "notion_9.png",
      "category": "notion"
    },
    {
      "id": 10,
      "filename": "notion_10.png",
      "category": "notion"
    },
    {
      "id": 11,
      "filename": "notion_11.png",
      "category": "notion"
    },
    {
      "id": 12,
      "filename": "notion_12.png",
      "category": "notion"
    },
    {
      "id": 13,
      "filename": "notion_13.png",
      "category": "notion"
    },
    {
      "id": 14,
      "filename": "notion_14.png",
      "category": "notion"
    },
    {
      "id": 15,
      "filename": "notion_15.png",
      "category": "notion"
    }
  ],
  "teams": [
    {
      "id": 1,
      "filename": "teams_1.png",
      "category": "teams"
    },
    {
      "id": 2,
      "filename": "teams_2.png",
      "category": "teams"
    },
    {
      "id": 3,
      "filename": "teams_3.png",
      "category": "teams"
    },
    {
      "id": 4,
      "filename": "teams_4.png",
      "category": "teams"
    },
    {
      "id": 5,
      "filename": "teams_5.png",
      "category": "teams"
    },
    {
      "id": 6,
      "filename": "teams_6.png",
      "category": "teams"
    },
    {
      "id": 7,
      "filename": "teams_7.png",
      "category": "teams"
    },
    {
      "id": 8,
      "filename": "teams_8.png",
      "category": "teams"
    },
    {
      "id": 9,
      "filename": "teams_9.png",
      "category": "teams"
    }
  ],
  "toon": [
    {
      "id": 1,
      "filename": "toon_1.png",
      "category": "toon"
    },
    {
      "id": 2,
      "filename": "toon_2.png",
      "category": "toon"
    },
    {
      "id": 3,
      "filename": "toon_3.png",
      "category": "toon"
    },
    {
      "id": 4,
      "filename": "toon_4.png",
      "category": "toon"
    },
    {
      "id": 5,
      "filename": "toon_5.png",
      "category": "toon"
    },
    {
      "id": 6,
      "filename": "toon_6.png",
      "category": "toon"
    },
    {
      "id": 7,
      "filename": "toon_7.png",
      "category": "toon"
    },
    {
      "id": 8,
      "filename": "toon_8.png",
      "category": "toon"
    },
    {
      "id": 9,
      "filename": "toon_9.png",
      "category": "toon"
    },
    {
      "id": 10,
      "filename": "toon_10.png",
      "category": "toon"
    }
  ],
  "upstream": [
    {
      "id": 1,
      "filename": "upstream_1.png",
      "category": "upstream"
    },
    {
      "id": 2,
      "filename": "upstream_2.png",
      "category": "upstream"
    },
    {
      "id": 3,
      "filename": "upstream_3.png",
      "category": "upstream"
    },
    {
      "id": 4,
      "filename": "upstream_4.png",
      "category": "upstream"
    },
    {
      "id": 5,
      "filename": "upstream_5.png",
      "category": "upstream"
    },
    {
      "id": 6,
      "filename": "upstream_6.png",
      "category": "upstream"
    },
    {
      "id": 7,
      "filename": "upstream_7.png",
      "category": "upstream"
    },
    {
      "id": 8,
      "filename": "upstream_8.png",
      "category": "upstream"
    },
    {
      "id": 9,
      "filename": "upstream_9.png",
      "category": "upstream"
    },
    {
      "id": 10,
      "filename": "upstream_10.png",
      "category": "upstream"
    },
    {
      "id": 11,
      "filename": "upstream_11.png",
      "category": "upstream"
    },
    {
      "id": 12,
      "filename": "upstream_12.png",
      "category": "upstream"
    },
    {
      "id": 13,
      "filename": "upstream_13.png",
      "category": "upstream"
    },
    {
      "id": 14,
      "filename": "upstream_14.png",
      "category": "upstream"
    },
    {
      "id": 15,
      "filename": "upstream_15.png",
      "category": "upstream"
    },
    {
      "id": 16,
      "filename": "upstream_16.png",
      "category": "upstream"
    },
    {
      "id": 17,
      "filename": "upstream_17.png",
      "category": "upstream"
    },
    {
      "id": 18,
      "filename": "upstream_18.png",
      "category": "upstream"
    },
    {
      "id": 19,
      "filename": "upstream_19.png",
      "category": "upstream"
    },
    {
      "id": 20,
      "filename": "upstream_20.png",
      "category": "upstream"
    },
    {
      "id": 21,
      "filename": "upstream_21.png",
      "category": "upstream"
    },
    {
      "id": 22,
      "filename": "upstream_22.png",
      "category": "upstream"
    }
  ],
  "vibrent": [
    {
      "id": 1,
      "filename": "vibrent_1.png",
      "category": "vibrent"
    },
    {
      "id": 2,
      "filename": "vibrent_2.png",
      "category": "vibrent"
    },
    {
      "id": 3,
      "filename": "vibrent_3.png",
      "category": "vibrent"
    },
    {
      "id": 4,
      "filename": "vibrent_4.png",
      "category": "vibrent"
    },
    {
      "id": 5,
      "filename": "vibrent_5.png",
      "category": "vibrent"
    },
    {
      "id": 6,
      "filename": "vibrent_6.png",
      "category": "vibrent"
    },
    {
      "id": 7,
      "filename": "vibrent_7.png",
      "category": "vibrent"
    },
    {
      "id": 8,
      "filename": "vibrent_8.png",
      "category": "vibrent"
    },
    {
      "id": 9,
      "filename": "vibrent_9.png",
      "category": "vibrent"
    },
    {
      "id": 10,
      "filename": "vibrent_10.png",
      "category": "vibrent"
    },
    {
      "id": 11,
      "filename": "vibrent_11.png",
      "category": "vibrent"
    },
    {
      "id": 12,
      "filename": "vibrent_12.png",
      "category": "vibrent"
    },
    {
      "id": 13,
      "filename": "vibrent_13.png",
      "category": "vibrent"
    },
    {
      "id": 14,
      "filename": "vibrent_14.png",
      "category": "vibrent"
    },
    {
      "id": 15,
      "filename": "vibrent_15.png",
      "category": "vibrent"
    },
    {
      "id": 16,
      "filename": "vibrent_16.png",
      "category": "vibrent"
    },
    {
      "id": 17,
      "filename": "vibrent_17.png",
      "category": "vibrent"
    },
    {
      "id": 18,
      "filename": "vibrent_18.png",
      "category": "vibrent"
    },
    {
      "id": 19,
      "filename": "vibrent_19.png",
      "category": "vibrent"
    },
    {
      "id": 20,
      "filename": "vibrent_20.png",
      "category": "vibrent"
    },
    {
      "id": 21,
      "filename": "vibrent_21.png",
      "category": "vibrent"
    },
    {
      "id": 22,
      "filename": "vibrent_22.png",
      "category": "vibrent"
    },
    {
      "id": 23,
      "filename": "vibrent_23.png",
      "category": "vibrent"
    },
    {
      "id": 24,
      "filename": "vibrent_24.png",
      "category": "vibrent"
    },
    {
      "id": 25,
      "filename": "vibrent_25.png",
      "category": "vibrent"
    },
    {
      "id": 26,
      "filename": "vibrent_26.png",
      "category": "vibrent"
    },
    {
      "id": 27,
      "filename": "vibrent_27.png",
      "category": "vibrent"
    }
  ]
};
var TOTAL_AVATARS_COUNT = 133;

// src/cdn.ts
var DEFAULT_REPO_OWNER = "alohe";
var DEFAULT_REPO_NAME = "avatars";
var DEFAULT_BRANCH = "main";
function getAvatarUrl(category, id, options) {
  const catalogList = AVATAR_CATALOG[category];
  if (!catalogList) {
    throw new Error(`Invalid category "${category}". Valid categories are: ${Object.keys(AVATAR_CATALOG).join(", ")}`);
  }
  const item = catalogList.find((av) => av.id === id);
  if (!item) {
    const maxId = catalogList.length;
    throw new Error(`Avatar ID ${id} not found in category "${category}". Valid IDs for "${category}" are 1 to ${maxId}.`);
  }
  return formatCdnUrl(item.filename, options);
}
function getRandomAvatarUrl(category, options) {
  let targetCategory = category;
  if (!targetCategory) {
    const categories = Object.keys(AVATAR_CATALOG);
    targetCategory = categories[Math.floor(Math.random() * categories.length)];
  }
  const items = AVATAR_CATALOG[targetCategory];
  if (!items || items.length === 0) {
    throw new Error(`No avatars found for category "${targetCategory}"`);
  }
  const randomItem = items[Math.floor(Math.random() * items.length)];
  return formatCdnUrl(randomItem.filename, options);
}
function formatCdnUrl(filename, options) {
  const provider = options?.provider || "jsdelivr";
  const owner = options?.user || DEFAULT_REPO_OWNER;
  const repo = options?.repo || DEFAULT_REPO_NAME;
  const branch = options?.branch || DEFAULT_BRANCH;
  switch (provider) {
    case "unpkg":
      return `https://unpkg.com/@geekykalpesh/avatars/png/${filename}`;
    case "github":
      return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/png/${filename}`;
    case "jsdelivr":
    default:
      return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/png/${filename}`;
  }
}

// src/local.ts
import path from "path";
import fs from "fs";
function getAvatarPath(category, id) {
  const item = getAvatarItemOrThrow(category, id);
  return getPngPath(item.filename);
}
function getAvatarBuffer(category, id) {
  const filePath = getAvatarPath(category, id);
  return fs.readFileSync(filePath);
}
function getAvatarBase64(category, id) {
  const buffer = getAvatarBuffer(category, id);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}
function getAvatarMeta(category, id) {
  const item = getAvatarItemOrThrow(category, id);
  const localPath = getPngPath(item.filename);
  const cdnUrl = getAvatarUrl(category, id);
  return {
    id,
    category,
    filename: item.filename,
    cdnUrl,
    localPath
  };
}
function copyAvatarTo(category, id, destPath) {
  const sourcePath = getAvatarPath(category, id);
  const absoluteDest = path.resolve(destPath);
  const destDir = path.dirname(absoluteDest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(sourcePath, absoluteDest);
  return absoluteDest;
}
function copyCategoryTo(category, targetDir) {
  const items = AVATAR_CATALOG[category];
  if (!items) {
    throw new Error(`Category "${category}" does not exist.`);
  }
  const absoluteDir = path.resolve(targetDir);
  if (!fs.existsSync(absoluteDir)) {
    fs.mkdirSync(absoluteDir, { recursive: true });
  }
  const copiedPaths = [];
  for (const item of items) {
    const srcPath = getPngPath(item.filename);
    const destPath = path.join(absoluteDir, item.filename);
    fs.copyFileSync(srcPath, destPath);
    copiedPaths.push(destPath);
  }
  return copiedPaths;
}
function copyAllAvatarsTo(targetDir) {
  const absoluteDir = path.resolve(targetDir);
  if (!fs.existsSync(absoluteDir)) {
    fs.mkdirSync(absoluteDir, { recursive: true });
  }
  const copiedPaths = [];
  for (const category of Object.keys(AVATAR_CATALOG)) {
    const paths = copyCategoryTo(category, absoluteDir);
    copiedPaths.push(...paths);
  }
  return copiedPaths;
}
function getAvatarItemOrThrow(category, id) {
  const catalogList = AVATAR_CATALOG[category];
  if (!catalogList) {
    throw new Error(`Invalid category "${category}".`);
  }
  const item = catalogList.find((av) => av.id === id);
  if (!item) {
    throw new Error(`Avatar ID ${id} not found in category "${category}".`);
  }
  return item;
}
function getPngPath(filename) {
  const rootDir = path.resolve(__dirname, "..");
  const pngPath = path.join(rootDir, "png", filename);
  if (!fs.existsSync(pngPath)) {
    const altPath = path.join(rootDir, "..", "png", filename);
    if (fs.existsSync(altPath)) {
      return altPath;
    }
  }
  return pngPath;
}
export {
  AVATAR_CATALOG,
  CATEGORIES,
  CATEGORY_COUNTS,
  TOTAL_AVATARS_COUNT,
  copyAllAvatarsTo,
  copyAvatarTo,
  copyCategoryTo,
  formatCdnUrl,
  getAvatarBase64,
  getAvatarBuffer,
  getAvatarMeta,
  getAvatarPath,
  getAvatarUrl,
  getRandomAvatarUrl
};
//# sourceMappingURL=index.mjs.map
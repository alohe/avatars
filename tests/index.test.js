const assert = require('assert');
const path = require('path');
const fs = require('fs');

const {
  getAvatarUrl,
  getRandomAvatarUrl,
  getAvatarPath,
  getAvatarBuffer,
  getAvatarBase64,
  getAvatarMeta,
  copyCategoryTo,
  CATEGORIES,
  TOTAL_AVATARS_COUNT,
} = require('../dist/index.js');

console.log('🧪 Running Avatars package unit tests...\n');

// Test 1: Category count & catalog integrity
assert.strictEqual(CATEGORIES.length, 8, 'Should have 8 categories');
assert.strictEqual(TOTAL_AVATARS_COUNT, 133, 'Should have total 133 avatars');
console.log('✅ Catalog stats verification passed');

// Test 2: CDN URL generation
const cdnUrl = getAvatarUrl('vibrent', 1);
assert.strictEqual(
  cdnUrl,
  'https://cdn.jsdelivr.net/gh/alohe/avatars@main/png/vibrent_1.png',
  'CDN URL should match expected format'
);
console.log('✅ CDN URL generation passed');

// Test 3: Random avatar URL
const randomUrl = getRandomAvatarUrl('notion');
assert.ok(randomUrl.includes('notion_'), 'Random URL should contain notion category');
console.log('✅ Random avatar generation passed');

// Test 4: Local path resolution
const localPath = getAvatarPath('3d', 1);
assert.ok(fs.existsSync(localPath), 'Local image path must exist on disk');
console.log('✅ Local path resolution passed');

// Test 5: Buffer reading
const buffer = getAvatarBuffer('bluey', 1);
assert.ok(Buffer.isBuffer(buffer), 'Result should be a Node.js Buffer');
assert.ok(buffer.length > 0, 'Buffer should not be empty');
console.log('✅ Buffer loading passed');

// Test 6: Base64 data URI
const base64 = getAvatarBase64('teams', 1);
assert.ok(base64.startsWith('data:image/png;base64,'), 'Base64 string should start with data URI prefix');
console.log('✅ Base64 Data URI passed');

// Test 7: Metadata lookup
const meta = getAvatarMeta('toon', 1);
assert.strictEqual(meta.category, 'toon');
assert.strictEqual(meta.id, 1);
assert.strictEqual(meta.filename, 'toon_1.png');
console.log('✅ Metadata lookup passed');

console.log('\n🎉 All unit tests passed successfully!\n');

const fs = require('fs');
const path = require('path');

// Simple helper to copy a file into a target directory (used by tests if needed)
function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, dest);
}

module.exports = { copyFile };

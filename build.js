const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

console.log("=========================================");
console.log("  Building Chandni Chowk Cheese Café");
console.log("=========================================");

// 1. Clean and recreate dist
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true });
}
fs.mkdirSync(DIST, { recursive: true });

// 2. Helper to copy directories recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 3. Copy data
const srcData = path.join(ROOT, "data");
const destData = path.join(DIST, "data");
copyDirSync(srcData, destData);
console.log("✔ Copied data assets to dist/data");

// 4. Copy public/images to both dist/public/images and dist/images
const srcPublic = path.join(ROOT, "public");
const destPublic = path.join(DIST, "public");
copyDirSync(srcPublic, destPublic);

const srcImages = path.join(ROOT, "public", "images");
const destImages = path.join(DIST, "images");
copyDirSync(srcImages, destImages);
console.log("✔ Copied public assets to dist/public and dist/images");

// 5. Read index.html and embed menu data inline for instant loading
let indexHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
let menuDataJson = fs.readFileSync(path.join(ROOT, "data", "menu-data.json"), "utf8");

// Inject menu data script tag right before React App mounts
const injection = `
  <script>
    window.__MENU_DATA__ = ${menuDataJson};
  </script>
`;

// Also update App's initial state in indexHtml to use window.__MENU_DATA__ immediately
indexHtml = indexHtml.replace(
  'const [menuData, setMenuData] = useState(null);',
  'const [menuData, setMenuData] = useState(window.__MENU_DATA__ || null);'
);

// Inject inline data right before <script type="text/babel">
indexHtml = indexHtml.replace('<script type="text/babel">', `${injection}\n  <script type="text/babel">`);

// Write production index.html and 404.html to dist
fs.writeFileSync(path.join(DIST, "index.html"), indexHtml, "utf8");
fs.writeFileSync(path.join(DIST, "404.html"), indexHtml, "utf8");
console.log("✔ Optimized production index.html & 404.html created in dist/");

console.log("=========================================");
console.log("✔ Production build completed successfully!");
console.log("  Output Directory: dist/");
console.log("=========================================");

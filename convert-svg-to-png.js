const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Read the SVG file
const svgPath = path.join(__dirname, 'public', 'digichants-logo-100px.svg');
const pngPath = path.join(__dirname, 'public', 'digichants-logo-100px.png');

const svgBuffer = fs.readFileSync(svgPath);

// Convert SVG to PNG
sharp(svgBuffer)
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('SVG successfully converted to PNG');
  })
  .catch(err => {
    console.error('Error converting SVG to PNG:', err);
  });
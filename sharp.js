const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // logo dan image user tidak perlu di resize
  if (image.includes('logo.png') || image.includes('user.png')) {
    sharp(`${target}/${image}`).toFile(
      path.resolve(__dirname, `${destination}/${image}`),
    );
  } else if (image.includes('.jpg')) {
    // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -large.png
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
        ),
      );
    // mengubah ukuran gambar dengan lebar 900px, dengan prefix -medium.jpg
    sharp(`${target}/${image}`)
      .resize(900)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`,
        ),
      );

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
        ),
      );
  } else if (image.includes('.png')) {
    // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -large.png
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-large.png`,
        ),
      );
    // mengubah ukuran gambar dengan lebar 900px, dengan prefix -medium.png
    sharp(`${target}/${image}`)
      .resize(900)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.png`,
        ),
      );

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.png
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-small.png`,
        ),
      );
  }
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// =================
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import fs from 'fs'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: {
//       key: fs.readFileSync('localhost-key.pem'),
//       cert: fs.readFileSync('localhost.pem'),
//     },
//     host: 'localhost',
//     port: 5173,
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
    },
    host: 'localhost',
    port: 5173,
  },
});

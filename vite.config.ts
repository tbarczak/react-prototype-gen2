import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

// Get SSL certificate config
function getHttpsConfig() {
  try {
    const certDir = path.join(os.homedir(), '.vite-ssl');
    const certFile = path.join(certDir, 'localhost+2.pem');
    const keyFile = path.join(certDir, 'localhost+2-key.pem');
    
    if (fs.existsSync(certFile) && fs.existsSync(keyFile)) {
      return {
        cert: fs.readFileSync(certFile),
        key: fs.readFileSync(keyFile),
      };
    }
  } catch (e) {
    console.warn('Could not load SSL certificates, using HTTP instead');
  }
  return undefined;
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    https: getHttpsConfig(),
    strictPort: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
});
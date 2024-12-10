# Gunakan image Node.js resmi
FROM node:18-slim

# Tentukan direktori kerja di dalam container
WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json untuk menginstal dependensi
COPY package*.json ./

# Install dependensi aplikasi
RUN npm install

# Salin semua file aplikasi ke dalam container
COPY . .

# Build aplikasi NestJS
RUN npm run build

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Tentukan perintah untuk menjalankan aplikasi
CMD ["npm", "run", "start:prod"]

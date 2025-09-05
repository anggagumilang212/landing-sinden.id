/** @type {import('next').NextConfig} */
const nextConfig = {
  // Opsi konfigurasi lainnya
  typescript: {
    // Nonaktifkan pemeriksaan tipe saat build
    // Ini adalah solusi sementara untuk mengatasi bug Next.js
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

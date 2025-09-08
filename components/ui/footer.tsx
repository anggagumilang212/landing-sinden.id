import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Produk</h3>
            <ul className="space-y-2 text-sm">

              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Manajemen Penduduk
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Absensi Perangkat
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Perpajakan PBB-P2
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Pengelolaan Keuangan
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Surat Menyurat
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Visi & Misi
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Karir
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Laporan Tahunan
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Sumber Daya</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Komunitas
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Syarat Layanan
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Laporkan Kerentanan
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Pusat Pembelajaran
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Tutorial
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Basis Pengetahuan
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Panduan
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Webinar
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Manajemen Cookies
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <div className="text-xl font-bold text-gray-200">
                Sistem Informasi Desa Modern
              </div>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © {new Date().getFullYear()} SIDEN. All rights reserved.
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-yellow-500"
                  href="#0"
                >
                  Syarat & Ketentuan
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  {/* <a
                    className="flex items-center justify-center text-yellow-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a> */}
                </li>


              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
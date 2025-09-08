import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-yellow-500 to-indigo-200 bg-clip-text text-transparent">
                Fitur Unggulan
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Manajemen Desa Modern
            </h2>
            <p className="text-lg text-indigo-200/65">
              Solusi lengkap untuk manajemen desa modern dengan fitur-fitur canggih, Dapatkan kemampuan untuk mengelola desa dengan mudah dan efisien.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className=" rounded-xl"
              src={FeaturesImage}
              width={704}
              height={184}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              {/* ICON: Manajemen Penduduk (Kelompok Orang) */}
              <svg
                className="mb-3 fill-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M18 21a2 2 0 0 0 2-2v-1a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v1a2 2 0 0 0 2 2h10ZM9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Manajemen Penduduk
              </h3>
              <p className="text-indigo-200/65">
                Kelola data penduduk dengan sistem yang terintegrasi dan mudah diakses.
              </p>
            </article>
            <article>
              {/* ICON: Manajemen Keuangan (Grafik Bar) */}
              <svg
                className="mb-3 fill-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M7 12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7Zm6 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-7ZM3 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm14 5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Manajemen Keuangan
              </h3>
              <p className="text-indigo-200/65">
                Monitoring anggaran dan keuangan desa secara real-time dengan laporan detail.
              </p>
            </article>
            <article>
              {/* ICON: Absensi (Kartu Identitas/KTP) */}
              <svg
                className="mb-3 fill-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M2.25 5.25A2.25 2.25 0 0 1 4.5 3h15A2.25 2.25 0 0 1 21.75 5.25v13.5A2.25 2.25 0 0 1 19.5 21H4.5A2.25 2.25 0 0 1 2.25 18.75V5.25ZM6 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6ZM6 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6ZM6 15.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H6Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Absensi Perangkat Desa
              </h3>
              <p className="text-indigo-200/65">
                Menggunakan KTP untuk absensi perangkat desa lebih mudah.
              </p>
            </article>
            <article>
              {/* ICON: Surat Menyurat (Amplop) */}
              <svg
                className="mb-3 fill-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M2.25 7.525A2.25 2.25 0 0 1 4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5v.025l-9.13 6.848a2.25 2.25 0 0 1-2.74 0L2.25 7.525ZM2.25 9.61v9.14A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.61l-8.625 6.469a.75.75 0 0 1-.9 0L2.25 9.61Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Surat Menyurat
              </h3>
              <p className="text-indigo-200/65">
                Otomatisasi pembuatan surat-surat administrasi desa dengan template modern.
              </p>
            </article>
            <article>
              {/* ICON: Perpajakan PBB-P2 (Gedung/Properti) */}
              <svg
                className="mb-3 fill-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M3.75 21V6.938l8.25-5.688 8.25 5.688V21H3.75Zm2.25-2.25h3v-6h3v6h3V8.156l-4.5-3.102-4.5 3.102v10.594Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Perpajakan PBB-P2
              </h3>
              <p className="text-indigo-200/65">
                Pengelolaan PBB dan SPPT secara efektif dan laporan pertahun.
              </p>
            </article>
            <article>
              {/* ICON: Keamanan Data (Tameng/Perisai) */}
              <svg
                className="mb-3 fill-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M12 21.75c-3.75 0-6.8-2.07-7.5-5.25V6.438l7.5-4.188 7.5 4.188v10.062c-.7 3.18-3.75 5.25-7.5 5.25Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Keamanan Data
              </h3>
              <p className="text-indigo-200/65">
                Sistem keamanan berlapis dengan enkripsi data dan backup otomatis.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

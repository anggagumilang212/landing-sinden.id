// 📁 app/request-demo/page.tsx
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

// --- TIPE DATA ---
// Tipe data FormData diperbarui untuk mencocokkan nilai dropdown baru.
interface FormData {
    namaLengkap: string;
    jabatan: string;
    provinsi: string;
    kabupaten: string;
    kecamatan: string;
    desa: string;
    nomorWhatsApp: string;
    jumlahPenduduk: string; // Nilai dari dropdown, e.g., "500 - 1.000 jiwa"
    jenisDemo: string;      // Nilai dari dropdown
    waktuPreferred: string; // Nilai dari dropdown
    catatanKhusus: string;
}

interface Wilayah {
    id: string;
    nama: string;
}

interface Status {
    message: string;
    type: 'success' | 'error' | '';
}


export default function RequestDemo() {
    // --- STATE MANAGEMENT ---
    const [formData, setFormData] = useState<FormData>({
        namaLengkap: '',
        jabatan: '',
        provinsi: '',
        kabupaten: '',
        kecamatan: '',
        desa: '',
        nomorWhatsApp: '',
        jumlahPenduduk: '', // Diubah menjadi string kosong
        jenisDemo: '',      // Diubah menjadi string kosong
        waktuPreferred: '', // Diubah menjadi string kosong
        catatanKhusus: '',
    });

    const [provinces, setProvinces] = useState<Wilayah[]>([]);
    const [regencies, setRegencies] = useState<Wilayah[]>([]);
    const [districts, setDistricts] = useState<Wilayah[]>([]);
    const [villages, setVillages] = useState<Wilayah[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isWilayahLoading, setIsWilayahLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>({ message: '', type: '' });

    const [selectedIds, setSelectedIds] = useState({ provId: '', regId: '', distId: '' });


    // --- DATA FETCHING (useEffect) ---
    // 📁 app/request-demo/page.tsx
    // ... kode lainnya

    // --- DATA FETCHING (useEffect) ---
    useEffect(() => {
        setIsWilayahLoading(true);
        // ✅ Perbaikan: Hapus .json di sini. Gunakan URL yang bersih.
        axios.get<Wilayah[]>(`/api/wilayah/provinsi/1`)
            .then(response => setProvinces(response.data))
            .catch(error => console.error("Error fetching provinces:", error))
            .finally(() => setIsWilayahLoading(false));
    }, []);

    useEffect(() => {
        if (selectedIds.provId) {
            setIsWilayahLoading(true);
            // ✅ Perbaikan: Hapus .json di sini.
            axios.get<Wilayah[]>(`/api/wilayah/kabupaten/${selectedIds.provId}`)
                .then(response => { setRegencies(response.data); setDistricts([]); setVillages([]); })
                .catch(error => console.error("Error fetching regencies:", error))
                .finally(() => setIsWilayahLoading(false));
        }
    }, [selectedIds.provId]);

    useEffect(() => {
        if (selectedIds.regId) {
            setIsWilayahLoading(true);
            // ✅ Perbaikan: Hapus .json di sini.
            axios.get<Wilayah[]>(`/api/wilayah/kecamatan/${selectedIds.regId}`)
                .then(response => { setDistricts(response.data); setVillages([]); })
                .catch(error => console.error("Error fetching districts:", error))
                .finally(() => setIsWilayahLoading(false));
        }
    }, [selectedIds.regId]);

    useEffect(() => {
        if (selectedIds.distId) {
            setIsWilayahLoading(true);
            // ✅ Perbaikan: Hapus .json di sini.
            axios.get<Wilayah[]>(`/api/wilayah/kelurahan/${selectedIds.distId}`)
                .then(response => setVillages(response.data))
                .catch(error => console.error("Error fetching villages:", error))
                .finally(() => setIsWilayahLoading(false));
        }
    }, [selectedIds.distId]);

    // ... kode lainnya

    // --- EVENT HANDLERS ---
    // ✅ PERBAIKAN: Fungsi ini disederhanakan dan dibuat lebih aman untuk TypeScript.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Logika krusial untuk dropdown wilayah, sekarang lebih aman dari error merah.
        if (e.target instanceof HTMLSelectElement) {
            const selectedOption = e.target.options[e.target.selectedIndex];
            const id = selectedOption.getAttribute('data-id') || '';

            if (name === 'provinsi') {
                setSelectedIds({ provId: id, regId: '', distId: '' });
                setFormData(prev => ({ ...prev, provinsi: value, kabupaten: '', kecamatan: '', desa: '' }));
            } else if (name === 'kabupaten') {
                setSelectedIds(prev => ({ ...prev, regId: id, distId: '' }));
                setFormData(prev => ({ ...prev, kabupaten: value, kecamatan: '', desa: '' }));
            } else if (name === 'kecamatan') {
                setSelectedIds(prev => ({ ...prev, distId: id }));
                setFormData(prev => ({ ...prev, kecamatan: value, desa: '' }));
            }
        }
    };

    // Fungsi ini menangani pengiriman form ke API Fonnte.
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ message: '', type: '' });

        const message = `
*-- PERMOHONAN DEMO BARU --*

*Nama Lengkap:* ${formData.namaLengkap}
*Jabatan:* ${formData.jabatan}
*Lokasi:* Desa ${formData.desa}, Kec. ${formData.kecamatan}, Kab. ${formData.kabupaten}, Prov. ${formData.provinsi}
*Nomor WhatsApp:* ${formData.nomorWhatsApp}
*Jumlah Penduduk:* ${formData.jumlahPenduduk}
*Jenis Demo:* ${formData.jenisDemo}
*Waktu Demo:* ${formData.waktuPreferred || '-'}
*Catatan:* ${formData.catatanKhusus || '-'}
        `;

        try {
            const response = await axios.post(
                'https://api.fonnte.com/send',
                {
                    target: '082295893766', // ⚠️ PASTIKAN INI NOMOR WHATSAPP ANDA
                    message: message.trim(),
                },
                {
                    headers: {
                        'Authorization': 'uBHoyAoW63f1TxW2zppD' // ⚠️ PASTIKAN INI TOKEN FONNTE ANDA
                    }
                }
            );

            if (response.data.status === true) {
                setStatus({ message: 'Permohonan demo berhasil dikirim! Kami akan segera menghubungi Anda.', type: 'success' });
                setFormData({
                    namaLengkap: '', jabatan: '', provinsi: '', kabupaten: '', kecamatan: '', desa: '',
                    nomorWhatsApp: '', jumlahPenduduk: '', jenisDemo: '', waktuPreferred: '', catatanKhusus: '',
                });
                setSelectedIds({ provId: '', regId: '', distId: '' });
                setRegencies([]); setDistricts([]); setVillages([]);
            } else {
                throw new Error(response.data.reason || 'Gagal mengirim pesan.');
            }
        } catch (error) {
            console.error("Fonnte API Error:", error);
            setStatus({ message: 'Terjadi kesalahan saat mengirim permohonan. Silakan coba lagi.', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };


    // --- STYLING ---
    const inputStyles = "form-input w-full bg-gray-800 border-gray-700 focus:border-yellow-500 focus:ring-yellow-500 rounded-md text-gray-200 placeholder:text-gray-500 disabled:opacity-50";
    const labelStyles = "block text-sm font-medium text-indigo-200/80 mb-1";


    // --- JSX RENDER ---
    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Header */}
                    <div className="pb-12 text-center">
                        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                            Request Demo Aplikasi
                        </h1>
                        <p className="mt-4 text-lg text-indigo-200/65">
                            Isi form di bawah ini untuk jadwal demo personal dengan tim kami.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
                        {status.message && (
                            <div className={` mb-4 text-center p-4 rounded-md ${status.type === 'success' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                                {status.message}
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* --- Baris 1 --- */}
                            <div>
                                <label className={labelStyles} htmlFor="namaLengkap">Nama Lengkap *</label>
                                <input id="namaLengkap" name="namaLengkap" type="text" className={inputStyles} placeholder="Nama Anda" required value={formData.namaLengkap} onChange={handleChange} />
                            </div>
                            <div>
                                <label className={labelStyles} htmlFor="jabatan">Jabatan *</label>
                                <input id="jabatan" name="jabatan" type="text" className={inputStyles} placeholder="Kepala Desa" required value={formData.jabatan} onChange={handleChange} />
                            </div>

                            {/* --- Baris 2 (Wilayah) --- */}
                            <div>
                                <label className={labelStyles} htmlFor="provinsi">Provinsi *</label>
                                <select id="provinsi" name="provinsi" className={inputStyles} required value={formData.provinsi} onChange={handleChange} disabled={isWilayahLoading}>
                                    <option value="" disabled>Pilih Provinsi</option>
                                    {provinces.map(prov => <option key={prov.id} value={prov.nama} data-id={prov.id}>{prov.nama}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className={labelStyles} htmlFor="kabupaten">Kabupaten/Kota *</label>
                                <select id="kabupaten" name="kabupaten" className={inputStyles} required value={formData.kabupaten} onChange={handleChange} disabled={!formData.provinsi || isWilayahLoading}>
                                    <option value="" disabled>Pilih Kabupaten/Kota</option>
                                    {regencies.map(reg => <option key={reg.id} value={reg.nama} data-id={reg.id}>{reg.nama}</option>)}
                                </select>
                            </div>

                            {/* --- Baris 3 (Wilayah) --- */}
                            <div>
                                <label className={labelStyles} htmlFor="kecamatan">Kecamatan *</label>
                                <select id="kecamatan" name="kecamatan" className={inputStyles} required value={formData.kecamatan} onChange={handleChange} disabled={!formData.kabupaten || isWilayahLoading}>
                                    <option value="" disabled>Pilih Kecamatan</option>
                                    {districts.map(dist => <option key={dist.id} value={dist.nama} data-id={dist.id}>{dist.nama}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className={labelStyles} htmlFor="desa">Desa/Kelurahan *</label>
                                <select id="desa" name="desa" className={inputStyles} required value={formData.desa} onChange={handleChange} disabled={!formData.kecamatan || isWilayahLoading}>
                                    <option value="" disabled>Pilih Desa/Kelurahan</option>
                                    {villages.map(vill => <option key={vill.id} value={vill.nama} data-id={vill.id}>{vill.nama}</option>)}
                                </select>
                            </div>

                            {isWilayahLoading && <p className="text-sm text-yellow-400 md:col-span-2">Memuat data wilayah...</p>}

                            {/* --- Baris 4 --- */}
                            <div>
                                <label className={labelStyles} htmlFor="nomorWhatsApp">Nomor WhatsApp *</label>
                                <input id="nomorWhatsApp" name="nomorWhatsApp" type="tel" className={inputStyles} placeholder="08123456xxxx" required value={formData.nomorWhatsApp} onChange={handleChange} />
                            </div>

                            {/* ✅ PERBAIKAN: Input Jumlah Penduduk menjadi Dropdown */}
                            <div>
                                <label className={labelStyles} htmlFor="jumlahPenduduk">Jumlah Penduduk *</label>
                                <select id="jumlahPenduduk" name="jumlahPenduduk" className={inputStyles} required value={formData.jumlahPenduduk} onChange={handleChange}>
                                    <option value="" disabled>Pilih Range Jumlah Penduduk</option>
                                    <option value="Kurang dari 500 jiwa">Kurang dari 500 jiwa</option>
                                    <option value="500 - 1.000 jiwa">500 - 1.000 jiwa</option>
                                    <option value="1.000 - 2.500 jiwa">1.000 - 2.500 jiwa</option>
                                    <option value="2.500 - 5.000 jiwa">2.500 - 5.000 jiwa</option>
                                    <option value="5.000 - 10.000 jiwa">5.000 - 10.000 jiwa</option>
                                    <option value="Lebih dari 10.000 jiwa">Lebih dari 10.000 jiwa</option>
                                </select>
                            </div>

                            {/* --- Baris 5 --- */}
                            {/* ✅ PERBAIKAN: Input Jenis Demo menjadi Dropdown */}
                            <div>
                                <label className={labelStyles} htmlFor="jenisDemo">Jenis Demo *</label>
                                <select id="jenisDemo" name="jenisDemo" className={inputStyles} required value={formData.jenisDemo} onChange={handleChange}>
                                    <option value="" disabled>Pilih Jenis Demo</option>
                                    <option value="Demo Online (Video Call)">Demo Online (Video Call)</option>
                                    <option value="Demo On-site (Datang ke Desa)">Demo On-site (Datang ke Desa)</option>
                                    <option value="Kombinasi Online & On-site">Kombinasi Online & On-site</option>
                                </select>
                            </div>

                            {/* ✅ PERBAIKAN: Input Waktu Preferred menjadi Dropdown */}
                            <div>
                                <label className={labelStyles} htmlFor="waktuPreferred">Waktu Preferred (Opsional)</label>
                                <select id="waktuPreferred" name="waktuPreferred" className={inputStyles} value={formData.waktuPreferred} onChange={handleChange}>
                                    <option value="">Pilih Waktu Preferred</option>
                                    <option value="Pagi (08:00 - 12:00)">Pagi (08:00 - 12:00)</option>
                                    <option value="Siang (12:00 - 16:00)">Siang (12:00 - 16:00)</option>
                                    <option value="Sore (16:00 - 20:00)">Sore (16:00 - 20:00)</option>
                                    <option value="Fleksibel">Fleksibel</option>
                                </select>
                            </div>

                            {/* --- Baris 6 --- */}
                            <div className="md:col-span-2">
                                <label className={labelStyles} htmlFor="catatanKhusus">Catatan Khusus (Opsional)</label>
                                <textarea id="catatanKhusus" name="catatanKhusus" rows={4} className={inputStyles} placeholder="Tuliskan jika ada pertanyaan atau permintaan khusus..." value={formData.catatanKhusus} onChange={handleChange}></textarea>
                            </div>
                        </div>

                        {/* Tombol Submit & Status */}
                        <div className="mt-6">
                            <button type="submit" disabled={isLoading || isWilayahLoading} className="btn w-full bg-linear-to-t from-yellow-600 to-yellow-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50 disabled:cursor-not-allowed">
                                {isLoading ? 'Mengirim Permintaan...' : 'Kirim Permintaan Demo'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
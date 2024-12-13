/* eslint-disable no-unused-vars */
// src/components/Fakultas/Create.jsx
import React, { useState } from "react"; // Import React dan useState untuk menggunakan state hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateMahasiswa() {
    // Inisialisasi state untuk menyimpan nama fakultas
    const [npm, setNpm] = useState("");
    const [nama, setNama] = useState("");
    const [tanggal_lahir, setTanggaL_lahir] = useState("");
    const [tempat_lahir, setTempat_lahir] = useState("");
    const [email, setEmail] = useState("");
    const [hp, setHp] = useState("");
    const [alamat, setAlamat] = useState("");
    const [prodi, setProdi] = useState("");
    const [fakultas, setFakultas] = useState("");
    

    // Inisialisasi state untuk menyimpan pesan error
    const [error, setError] = useState("");
    // Inisialisasi state untuk menyimpan pesan sukses
    const [success, setSuccess] = useState("");

    // Fungsi yang akan dijalankan saat form disubmit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah reload halaman setelah form disubmit
        setError(""); // Reset pesan error sebelum proses
        setSuccess(""); // Reset pesan sukses sebelum proses

        // Validasi input: jika namaFakultas kosong, set pesan error
        if (npm.trim() === "") {
            setError("Nama npm is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (nama.trim() === "") {
            setError("Nama nama is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (tanggal_lahir.trim() === "") {
            setError("Nama tanggal_lahir is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (tempat_lahir.trim() === "") {
            setError("Nama tempat_lahir is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (email.trim() === "") {
            setError("Nama email is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (hp.trim() === "") {
            setError("Nama hp is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (alamat.trim() === "") {
            setError("Nama alamat is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (prodi.trim() === "") {
            setError("Nama prodi is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        if (fakultas.trim() === "") {
            setError("Nama fakultas is required"); // Set pesan error jika input kosong
            return; // Stop eksekusi fungsi jika input tidak valid
        }
        

        try {
            // Melakukan HTTP POST request untuk menyimpan data fakultas
            const response = await axios.post(
                "https://academic-mi5a.vercel.app/api/api/fakultas", // Endpoint API yang dituju
                {
                    npm: npm, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    nama: nama, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    tanggal_lahir: tanggal_lahir, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    tempat_lahir: tempat_lahir, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    email: email, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    hp: hp, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    alamat: alamat, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    prodi: prodi, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                    fakultas: fakultas, // Data yang dikirim berupa objek JSON dengan properti 'nama'
                }
            );

            // Jika response HTTP status 201 (Created), berarti berhasil
            if (response.status === 201) {
                // Tampilkan pesan sukses jika fakultas berhasil dibuat
                setSuccess("Mahasiswa created successfully!");
                setNama(""); // Kosongkan input form setelah sukses submit
            } else {
                // Jika tidak berhasil, tampilkan pesan error
                setError("Failed to create mahasiswa");
            }
        } catch (error) {
            // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
            setError("An error occurred while creating mahasiswa");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create Mahasiswa</h2>
            {/* Jika ada pesan error, tampilkan dalam alert bootstrap */}
            {error && <div className="alert alert-danger">{error}</div>}
            {/* Jika ada pesan sukses, tampilkan dalam alert bootstrap */}
            {success && <div className="alert alert-success">{success}</div>}
            {/* Form untuk mengisi nama fakultas */}
            <form onSubmit={handleSubmit}>
                {/* Tangani event submit dengan handleSubmit */}
                <div className="mb-3">
                    <label className="form-label">
                        npm
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="npm"
                        value={npm} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setNpm(e.target.value)} // Update state saat input berubah
                        placeholder="Enter npm Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Nama
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Nama"
                        value={nama} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setNama(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Nama Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Tanggal_lahir
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Tanggal_lahir"
                        value={tanggal_lahir} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setTanggaL_lahir(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Tanggal_lahir Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Tempat_lahir
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Tempat_lahir"
                        value={tempat_lahir} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setTempat_lahir(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Tempat_lahir Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Email"
                        value={email} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Email Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Hp
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Hp"
                        value={hp} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setHp(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Hp Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Alamat
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Alamat"
                        value={alamat} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setAlamat(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Alamat Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Prodi
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Prodi"
                        value={prodi} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setProdi(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Prodi Name" // Placeholder teks untuk input
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Fakultas
                    </label>
                    {/* Input untuk nama fakultas dengan class bootstrap */}
                    <input
                        type="text" className="form-control" id="Fakultas"
                        value={fakultas} // Nilai input disimpan di state namaFakultas
                        onChange={(e) => setFakultas(e.target.value)} // Update state saat input berubah
                        placeholder="Enter Fakultas Name" // Placeholder teks untuk input
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </div>
    );
}
"use client";

import React, { useState, useEffect } from "react";
import img1 from "@/img/jkt.jpeg";
import img2 from "@/img/qris.jpg";
import Image from "next/image";

export default function Home() {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false); // Mengatur form untuk tidak ditampilkan saat halaman terbuka
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); // State untuk menampilkan konfirmasi
  const [formData, setFormData] = useState({ name: "", email: "", amount: "", whatsapp: "" }); // Menambahkan properti whatsapp
  const [selectedDay, setSelectedDay] = useState(""); // State untuk menyimpan pilihan hari
  const [isPaymentVisible, setIsPaymentVisible] = useState(false); // State untuk menampilkan form pembayaran

  const [goldQuantity, setGoldQuantity] = useState(0); // State untuk jumlah tiket festival gold
  const goldPrice = 1875000; // Harga tiket festival gold
  const [goldTotal, setGoldTotal] = useState(0); // State untuk total harga festival gold

  const [notification, setNotification] = useState(""); // State untuk notifikasi

  const [dateOfBirth, setDateOfBirth] = useState(""); // State untuk tanggal lahir
  const [gender, setGender] = useState(""); // State untuk gender

  const increaseGoldQuantity = () => {
    if (goldQuantity < 5) {
      // Memeriksa apakah jumlah tiket kurang dari 5
      setGoldQuantity(goldQuantity + 1);
      setGoldTotal((goldQuantity + 1) * goldPrice);
      setNotification(""); // Menghapus notifikasi jika berhasil menambah
    } else {
      setNotification(
        "Oops!! Anda telah mencapai pembelian maksimum untuk tiket - Festival Gold"
      ); // Menampilkan notifikasi
    }
  };

  const decreaseGoldQuantity = () => {
    if (goldQuantity > 0) {
      setGoldQuantity(goldQuantity - 1);
      setGoldTotal((goldQuantity - 1) * goldPrice);
    }
  };

  useEffect(() => {
    // setIsFormVisible(true); // Menghapus baris ini
  }, []);

  const increaseQuantity = () => {
    if (quantity < 5) {
      // Memeriksa apakah jumlah tiket kurang dari 5
      setQuantity(quantity + 1);
      setTotal((quantity + 1) * 1375000);
      setNotification(""); // Menghapus notifikasi jika berhasil menambah
    } else {
      setNotification(
        "Oops!! Anda telah mencapai pembelian maksimum untuk tiket - Festival Silver"
      ); // Menampilkan notifikasi
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotal((quantity - 1) * 1375000);
    }
  };

  const handlePesanClick = () => {
    setIsFormVisible(true); // Menampilkan form ketika tombol "Pesan" ditekan
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Menambahkan tipe untuk parameter e
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Update state formData
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Menambahkan tipe untuk parameter e
    e.preventDefault();
    // Simpan data form ke state
    setFormData({
      name: e.currentTarget.name.value, // Menambahkan name
      email: e.currentTarget.email.value, // Menggunakan currentTarget untuk mengakses form
      whatsapp: e.currentTarget.phone.value,
      amount: formData.amount, // Menyimpan amount yang sudah ada
    });
    setIsFormVisible(false); // Sembunyikan form setelah submit
    setIsConfirmationVisible(true); // Tampilkan konfirmasi
  };

  const handleContinue = () => {
    setIsConfirmationVisible(false); // Menutup konfirmasi
    setIsPaymentVisible(true); // Menampilkan form pembayaran
  };

  return (
    <body>
      <section className="bg-black">
        {/* HOME */}
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-black">
          <div className="inset-0 bg-black">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold mt-16 text-white">
                The Jakarta Christmas Concert
              </h1>
              <div className="flex items-center mt-3 text-white">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
                <span className="text-lg">Balai Sarbini, Jakarta Selatan</span>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-7">
              <Image
                src={img1}
                alt="Konser"
                width={600}
                height={5000}
                className=""
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mt-16 text-white">
              Tentang Event Ini
            </h1>
            <div className="text-white">
              <p className="mt-5">Jakarta Christmas Concert 2024</p>
              <p>Thursday, December 5th, 2024</p>
              <p className="mt-5">
                Celebrate the magic of Christmas with a prestigious charity
                concert hosted by Jakarta Grace Community and Batak Music for
                the World. Featuring top performers like Novita Dewi, Maria
                Simorangkir, Delon, Albert Fakdawer, Cassandra, Trio RNB, Trio
                Tenor, and the Harry Anggoman Gospel Band, this exclusive event
                promises an unforgettable evening of worship, music, and giving.
              </p>
              <p className="mt-5">
                Join us as we spread joy, hope, and love this holiday season.
                Tickets are limited—reserve your spot now for this extraordinary
                celebration!
              </p>
            </div>
          </div>
        </section>
        {/* END */}

        {/* TICKET */}
        <section
          id="ticket"
          className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-5 bg-black"
        >
          <h1 className="text-2xl md:text-2xl text-white font-bold py-3 mt-4">
            Pilihan Tiket
          </h1>
          <div className="flex flex-col bg-slate-100 rounded-lg p-7">
            <div className="border-b border-gray-400">
              <h1 className="text-2xl md:text-3xl font-bold">
                The Jakarta Christmas Concert
              </h1>
              <div className="flex items-center mt-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                </svg>
                <span className="text-sm md:text-base font-medium">
                  3 - 5 Desember 2024, 7:00PM
                </span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 mx-6"
                >
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
                <span className="text-sm md:text-base font-medium">
                  Balai Sarbini, Jakarta Selatan
                </span>
              </div>
            </div>

            <div className="">
              <h1 className="text-xl md:text-2xl font-bold text-red-600 mt-10">
                Festival Silver
              </h1>
              <p className="mt-2 text-xl">Harga</p>
              <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold mt-2">
                  IDR 1.375.000{" "}
                </h1>{" "}
                {/* Menggunakan state total dengan format titik */}
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-l"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="mx-2 text-xl">{quantity}</span>{" "}
                  {/* Menampilkan jumlah */}
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-r"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <hr className="border-gray-400 my-2" />
              {/* Kode lainnya */}
              <h1 className="text-xl md:text-2xl font-bold text-red-600 mt-6">
                Festival Gold
              </h1>
              <p className="mt-2 text-xl">Harga</p>
              <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold mt-2">
                  IDR {goldPrice.toLocaleString("id-ID")}{" "}
                </h1>
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-l"
                    onClick={decreaseGoldQuantity}
                  >
                    -
                  </button>
                  <span className="mx-2 text-xl">{goldQuantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-r"
                    onClick={increaseGoldQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <hr className="border-gray-400 my-2" />
            <div className="flex justify-between items-center mt-5">
              <div className="flex flex-col items-start">
                <p className="text-xl">Total</p>
                <h1 className="text-xl md:text-2xl font-bold">
                  IDR {(total + goldTotal).toLocaleString("id-ID")}{" "}
                  {/* Menggabungkan total reguler dan gold */}
                </h1>
              </div>
              <button
                type="button"
                className={`rounded-lg px-5 py-3 font-medium text-white ${
                  goldQuantity > 0 || quantity > 0
                    ? "bg-red-600"
                    : "bg-gray-400"
                }`} // Mengaktifkan tombol jika goldQuantity atau quantity lebih dari 0
                onClick={handlePesanClick}
                disabled={goldQuantity === 0 && quantity === 0} // Menonaktifkan tombol jika kedua quantity adalah 0
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block w-5 h-5 mr-2"
                >
                  <path d="M2.00488 9.49979V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V9.49979C20.6242 9.49979 19.5049 10.6191 19.5049 11.9998C19.5049 13.3805 20.6242 14.4998 22.0049 14.4998V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V14.4998C3.38559 14.4998 4.50488 13.3805 4.50488 11.9998C4.50488 10.6191 3.38559 9.49979 2.00488 9.49979ZM14.0049 4.99979H4.00488V7.96755C5.4866 8.7039 6.50488 10.2329 6.50488 11.9998C6.50488 13.7666 5.4866 15.2957 4.00488 16.032V18.9998H14.0049V4.99979ZM16.0049 4.99979V18.9998H20.0049V16.032C18.5232 15.2957 17.5049 13.7666 17.5049 11.9998C17.5049 10.2329 18.5232 8.7039 20.0049 7.96755V4.99979H16.0049Z"></path>
                </svg>
                Buy
              </button>
            </div>
          </div>
        </section>
        {/* END */}

        {/* NOTIFIKASI TICKET */}
        {notification && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-black text-white p-5 rounded-lg w-full max-w-md relative">
              {" "}
              {/* Menambahkan relative pada elemen pembungkus notifikasi */}
              <button
                type="button"
                onClick={() => setNotification("")}
                className="absolute top-2 right-2 text-white text-2xl" // Posisi dan gaya untuk tombol tutup
              >
                &times; {/* Menggunakan karakter X */}
              </button>
              <p className="text-center">{notification}</p>
              <div className="flex justify-center mt-4">
                {" "}
                {/* Menggunakan flex untuk menempatkan tombol di tengah */}
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => setNotification("")} // Menyembunyikan notifikasi saat tombol ditekan
                >
                  Oke
                </button>
              </div>
            </div>
          </div>
        )}
        {/* END */}

        {/* FORM */}
        {isFormVisible && ( // Menampilkan form jika isFormVisible true
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-100 p-5 rounded-lg w-full max-w-md relative">
              {" "}
              {/* Menambahkan relative pada elemen pembungkus form */}
              <button
                type="button"
                onClick={() => setIsFormVisible(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl" // Posisi dan gaya untuk tombol tutup
              >
                &times; {/* Menggunakan karakter X */}
              </button>
              <h2 className="text-xl font-semibold py-3">
                Mohon Lengkapi Data
              </h2>
              {/* Tambahkan form di sini */}
              <h1 className="font-bold mt-2">Nama Lengkap</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Nama Lengkap"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h1 className="font-bold">Email</h1>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-900 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <h1 className="font-bold">Whatsapp</h1>
                    <label className="sr-only" htmlFor="phone">
                      Whatsapp
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Nomor Whatsapp"
                      type="tel"
                      id="phone"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {" "}
                  {/* Menambahkan div pembungkus untuk tata letak */}
                  <div className="flex justify-between">
                    {" "}
                    {/* Menggunakan flex untuk menyusun secara horizontal */}
                    <div className="w-1/2 pr-2">
                      {" "}
                      {/* Mengatur lebar dan padding kanan */}
                      <h1 className="font-bold">Tanggal Lahir</h1>
                      <label className="sr-only" htmlFor="dateOfBirth">
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)} // Memperbarui state saat input berubah
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        required
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      {" "}
                      {/* Mengatur lebar dan padding kiri */}
                      <h1 className="font-bold">Gender</h1>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)} // Memperbarui state saat input berubah
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        required
                      >
                        <option value="" disabled>
                          Pilih Gender
                        </option>
                        <option value="pria">Pria</option>
                        <option value="wanita">Wanita</option>
                      </select>
                    </div>
                  </div>
                </div>

                <h1 className="font-bold mt-32">DAY</h1>
                <div className="flex flex-cols-1 gap-2 text-center sm:grid-cols-3 justify-between">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-red-600 has-[:checked]:border-red-600 has-[:checked]:bg-red-600 has-[:checked]:text-white"
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        name="option"
                        onChange={() => setSelectedDay("3 Desember 2024")}
                      />
                      <span className="text-sm font-semibold">3 DES</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-red-600 has-[:checked]:border-red-600 has-[:checked]:bg-red-600 has-[:checked]:text-white"
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        name="option"
                        onChange={() => setSelectedDay("4 Desember 2024")}
                      />
                      <span className="text-sm font-semibold"> 4 Des</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-red-600 has-[:checked]:border-red-600 has-[:checked]:bg-red-600 has-[:checked]:text-white"
                    >
                      <input
                        className="sr-only"
                        id="Option3"
                        type="radio"
                        name="option"
                        onChange={() => setSelectedDay("5 Desember 2024")}
                      />
                      <span className="text-sm font-semibold"> 5 Des</span>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className={`rounded-lg px-5 py-3 font-medium text-white ${
                      dateOfBirth && selectedDay && gender
                        ? "bg-red-600"
                        : "bg-gray-400"
                    }`} // Mengaktifkan tombol jika semua input diisi
                    disabled={!dateOfBirth || !selectedDay || !gender} // Menonaktifkan tombol jika salah satu input kosong
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* END */}

        {/* KONFIRMASI */}
        {isConfirmationVisible && ( // Menampilkan konfirmasi jika isConfirmationVisible true
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg">
              <h2 className="text-xl font-semibold text-center py-3">
                Konfirmasi
              </h2>
              <div className="flex flex-col bg-slate-100 rounded-lg p-7">
                <p className="py-1">E-Tiket anda akan dikirim ke</p>
                <p className="py-1">
                  Email: <strong>{formData.email}</strong>
                </p>
                <p className="py-1">
                  Whatsapp: <strong>{formData.whatsapp}</strong>
                </p>
              </div>
              <div className="flex flex-col bg-slate-100 rounded-lg p-7 mt-3">
                <p className="py-1">List item yang dibeli</p>
                <p className="py-1">
                  Schedule: <strong>The Jakarta Christmas Concert</strong>
                </p>
                <p className="py-1">
                  Lokasi: <strong>Balai Sarbini, Jakarta Selatan</strong>
                </p>
                <p className="py-1">
                  Tanggal: <strong>{selectedDay}</strong>{" "}
                </p>{" "}
                <p className="py-1">
                  Ticket Reguler: <strong>{quantity} Ticket </strong>
                </p>
                <p className="py-1">
                  Ticket Gold: <strong>{goldQuantity} Ticket </strong>
                </p>
              </div>
              <p className="py-1 text-center">Anda yakin ingin melanjutkan?</p>
              <button
                type="button"
                onClick={handleContinue} // Mengubah fungsi untuk menampilkan form pembayaran
                className="mt-4 inline-block rounded-lg bg-red-600 px-5 py-3 font-medium text-white"
              >
                Lanjutkan
              </button>
              <button
                type="button"
                onClick={() => setIsConfirmationVisible(false)} // Menutup konfirmasi
                className="mt-4 inline-block rounded-lg bg-gray-400 px-5 py-3 font-medium text-white items-end float-right" // Menambahkan float-right untuk menggeser tombol ke kanan
              >
                Tidak
              </button>
            </div>
          </div>
        )}
        {/* END */}

        {/* FORM PEMBAYARAN */}
        {isPaymentVisible && ( // Menampilkan form pembayaran jika isPaymentVisible true
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg">
              <h2 className="text-xl font-semibold py-3">Pembayaran QRIS</h2>
              <p className="mb-4">
                Silakan scan QRIS di bawah ini untuk menyelesaikan pembayaran.
              </p>
              {/* Tambahkan ringkasan pesanan di sini */}
              <div className="mt-4">
                <h3 className="text-lg font-bold">Your Order Summary</h3>
                <div className="flex justify-between mt-3">
                  <span>Silver Ticket Price</span>
                  <span>{quantity} × Rp. 1.375.000</span>
                </div>
                <div className="flex justify-between mt-3">
                  <span>Gold Ticket Price</span>
                  <span>
                    {goldQuantity} × Rp. {goldPrice.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <span>Total Price</span>
                  <span>Rp. {(total + goldTotal).toLocaleString("id-ID")}</span>
                </div>
              </div>
              {/* Tambahkan komponen QRIS di sini */}
              <div className="flex justify-center">
                <Image
                  src={img2}
                  alt="Konser"
                  width={200}
                  height={5000}
                  className="mt-3"
                />
              </div>
              <div className="flex justify-center">
                {" "}
                {/* Menambahkan div pembungkus dengan kelas flex dan justify-center */}
                <button
                  type="button"
                  onClick={() => setIsPaymentVisible(false)} // Menutup form pembayaran
                  className="mt-4 inline-block rounded-lg bg-red-600 px-5 py-3 font-medium text-white"
                >
                  Sudah Melakukan Pembayaran
                </button>
              </div>
            </div>
          </div>
        )}
        {/* END */}

        {/* FOOTER */}
        <footer className="bg-black">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <ul className="mt-5 flex justify-center gap-6 md:gap-8">
              <li>
                <a
                  href="https://www.instagram.com/cretivox/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-gray-700/75 flex items-center"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4.99979C9.5265 4.99979 9.12318 4.99655 7.97227 4.9957C7.18815 4.99461 6.66253 4.99007 6.17416 4.98967C5.74016 4.9899 5.42709 4.99898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.39352 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                  <span className="ml-1 font-semibold">Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@cretivox"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-gray-700/75 flex items-center"
                >
                  <span className="sr-only">TikTok</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M11.0004 2V8.41396C10.5947 8.33909 10.1768 8.3 9.75039 8.3C5.96724 8.3 2.90039 11.3668 2.90039 15.15C2.90039 18.9332 5.96724 22 9.75039 22C13.5335 22 16.6004 18.9332 16.6004 15.15V11.4136C17.6366 11.8539 18.7662 12.1 20.0005 12.1H21.0005V6.5H20.0005C18.0966 6.5 16.6004 4.96259 16.6004 3V2H11.0004ZM13.0004 4H14.688C15.0818 6.22009 16.7673 7.99607 19.0005 8.4091V10.0282C17.9624 9.87602 17.0253 9.48645 16.1567 8.905L14.6004 7.86327V15.15C14.6004 17.8286 12.429 20 9.75039 20C7.07181 20 4.90039 17.8286 4.90039 15.15C4.90039 12.4714 7.07181 10.3 9.75039 10.3C9.83431 10.3 9.91769 10.3021 10.0005 10.3063V11.9095C9.91795 11.9032 9.83454 11.9 9.75039 11.9C7.95547 11.9 6.50039 13.3551 6.50039 15.15C6.50039 16.9449 7.95547 18.4 9.75039 18.4C11.5453 18.4 13.0004 16.9449 13.0004 15.15C13.0004 11.4334 12.9992 7.71665 13.0004 4ZM8.50039 15.15C8.50039 14.4596 9.06003 13.9 9.75039 13.9C10.4407 13.9 11.0004 14.4596 11.0004 15.15C11.0004 15.8404 10.4407 16.4 9.75039 16.4C9.06003 16.4 8.50039 15.8404 8.50039 15.15Z"></path>
                  </svg>
                  <span className="ml-1 font-semibold">Tiktok</span>
                </a>
              </li>
            </ul>
            <h1 className="text-white italic mt-5 text-center font-semibold text-3xl">CRE-TIC</h1>
          </div>
        </footer>
        {/* END */}

      </section>
    </body>
  );
}
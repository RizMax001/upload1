import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Uploader Rizky Max 🚀</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-lg text-center border border-white/30"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold mb-3 text-white drop-shadow-md"
          >
            🚀 Rizky Max Uploader
          </motion.h1>

          <p className="text-gray-200 mb-8 text-sm sm:text-base">
            Upload <span className="font-semibold text-white">foto</span>,{' '}
            <span className="font-semibold text-white">musik</span>,{' '}
            <span className="font-semibold text-white">video</span>,{' '}
            <span className="font-semibold text-white">dokumen</span> — langsung
            jadi URL publik dengan sekali klik!
          </p>

          <form
            action="/api/upload"
            method="post"
            encType="multipart/form-data"
            className="flex flex-col items-center gap-5"
          >
            <motion.input
              whileHover={{ scale: 1.02 }}
              type="file"
              name="file"
              className="block w-full text-sm text-gray-100 bg-white/10 p-3 rounded-xl border border-white/30 cursor-pointer 
              file:mr-4 file:py-2 file:px-4 file:rounded-full 
              file:border-0 file:text-sm file:font-semibold 
              file:bg-white/80 file:text-indigo-700 hover:file:bg-white transition"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-10 rounded-full shadow-lg transition"
            >
              ⚡ Upload Sekarang
            </motion.button>
          </form>

          <div className="mt-8 text-sm text-gray-100">
            Dibuat dengan ❤️ oleh{' '}
            <span className="font-semibold text-white">Rizky Max</span>
          </div>
        </motion.div>
      </div>
    </>
  )
              }

// app/page.tsx
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6">
      <Header />
      <div className="flex flex-col items-center justify-center mt-[240px]">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The end of manual audits
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Faster, cheaper, and smarter AI audits <br /> for  smart contracts
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#"
              className="rounded-xl font-bold bg-black px-6 py-3 text-white shadow hover:bg-gray-800 transition"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-6 left-0 right-0 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Raylac. All rights reserved.
      </footer>
    </main>
  );
}
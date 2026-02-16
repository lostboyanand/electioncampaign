import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8 text-center border-t border-gray-800">
        <div className="container px-4">
          <p className="text-gray-400 mb-2">© 2026 Shekhar Bhaiya Election Campaign. All rights reserved.</p>
          <p className="text-sm text-gray-500">Ward No. 6, Sahibganj Nagar Parishad</p>
        </div>
      </footer>
    </div>
  );
}

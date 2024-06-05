import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-screen justify-center items-center bg-black-100">
      <div className="font-bold text-gray-700 text-2xl">
        <Hero/>
      </div>
    </main>
  );
}

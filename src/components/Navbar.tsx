import globeImg from "@/assets/globe.png";

export default function Navbar() {
  return (
    <nav className="bg-rose-600 flex justify-center items-center gap-4 p-3">
      <img src={globeImg} alt="Travel Journal" className="w-8" />
      <span className="text-white">my travel journal.</span>
    </nav>
  );
}

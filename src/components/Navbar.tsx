import globeImg from "@/assets/globe.png";

export default function Navbar() {
  return (
    <nav className="bg-rose-500 flex justify-center items-center gap-4 p-2 py-4">
      <img src={globeImg} alt="Travel Journal" className="w-10" />
      <span className="text-white">my travel journal.</span>
    </nav>
  );
}

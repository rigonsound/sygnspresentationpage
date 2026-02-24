"use client"

export function Starfield() {
  return (
    <div className="fixed inset-0 z-0 bg-[#000000]">
      {/* Static stars */}
      <div className="stars-layer-1" />
      <div className="stars-layer-2" />
      <div className="stars-layer-3" />
    </div>
  );
}
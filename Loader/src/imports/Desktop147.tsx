import imgDesktop147 from "figma:asset/050199014e18c0cb60e9c252c2ef39002648cc6a.png";

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 147">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#080808] inset-0" />
        <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-3" style={{ backgroundImage: `url('${imgDesktop147}')` }} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] left-[620.5px] not-italic text-[#f0f0f0] text-[45px] top-[406px] tracking-[-0.9px] whitespace-nowrap">
        <p className="leading-[1.1]">Bienvenue</p>
      </div>
    </div>
  );
}
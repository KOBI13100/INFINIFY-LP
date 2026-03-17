import imgDesktop145 from "figma:asset/050199014e18c0cb60e9c252c2ef39002648cc6a.png";

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="Desktop - 145">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#080808] inset-0" />
        <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-3" style={{ backgroundImage: `url('${imgDesktop145}')` }} />
      </div>
      <div className="absolute h-[10px] left-[569px] rounded-[100px] top-[401px] w-[302px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[25.29px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity pointer-events-none rounded-[100px]" />
        <div aria-hidden="true" className="absolute border-[0.708px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8.093px] items-center justify-center p-[6.07px] size-full" />
        </div>
      </div>
    </div>
  );
}
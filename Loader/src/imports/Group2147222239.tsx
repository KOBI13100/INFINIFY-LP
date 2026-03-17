function ToolbarSymbols() {
  return (
    <div className="absolute h-[10px] left-0 rounded-bl-[50.58px] rounded-tl-[50.58px] top-0 w-[18px]" data-name="Toolbar - Symbols">
      <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-luminosity pointer-events-none rounded-bl-[50.58px] rounded-tl-[50.58px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8.093px] items-center justify-center p-[6.07px] size-full" />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[10px] left-0 rounded-[100px] top-0 w-[302px]" data-name="Toolbar - Symbols">
        <div aria-hidden="true" className="absolute backdrop-blur-[25.29px] bg-[rgba(128,128,128,0.2)] inset-0 mix-blend-luminosity pointer-events-none rounded-[100px]" />
        <div aria-hidden="true" className="absolute border-[0.708px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8.093px] items-center justify-center p-[6.07px] size-full" />
        </div>
      </div>
      <ToolbarSymbols />
    </div>
  );
}
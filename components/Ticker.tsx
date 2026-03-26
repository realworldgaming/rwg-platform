import { TICKER_ITEMS } from "@/lib/constants";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <div className="bg-rwg-red py-2 overflow-hidden border-y border-rwg-red-dark">
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {items.map((item, i) => (
            <span key={i} className="font-mono text-white text-xs font-semibold tracking-widest mx-8 whitespace-nowrap">
              {item}
              <span className="mx-8 opacity-50">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

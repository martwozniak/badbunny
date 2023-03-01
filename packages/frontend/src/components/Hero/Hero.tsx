import PropTypes from 'prop-types';
import {
  GiCard7Spades,
  GiChart,
  GiRocketFlight,
  GiToken,
} from 'react-icons/gi';
Hero.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl']),
};

export default function Hero(height: any, backgroundColor: any, fontSize: any) {
  return (
    <div className="min-h-[50vh] max-h-screen bg-black text-xs text-white flex items-center justify-between px-8 flex gap-4 flex-col sm:flex-row">
      <div>
        <h1 className="text-4xl font-bold tracking-tight   sm:text-6xl">
          BadBunny <span className="text-green-600">Gambling.</span>
        </h1>
        <span className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Multiply your investments using modern gambling methods
        </span>
        <div className="flex gap-2 my-6">
          <div className="CTA_Nav bg-green-600 px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition-all">
            Claim 300 000 points
          </div>
          <div className="CTA_Nav bg-slate-900 px-4 py-2 rounded cursor-pointer hover:bg-slate-700 transition-all">
            Create free account
          </div>
        </div>
      </div>

      <div className="w-full sm:min-w-[720px] max-w-full sm:max-w-[720px] flex gap-2 flex-col">
        <div className="flex gap-2 flex-col sm:flex-row">
          <div className="bg-slate-900  transition-all hover:bg-slate-800 cursor-pointer sm:max-w-xs w-full py-6 px-4">
            <GiToken size={40} />
            <span>Casino</span>
          </div>
          <div className="bg-slate-900 transition-all hover:bg-slate-800 cursor-pointer sm:max-w-xs w-full py-6 px-4">
            <GiChart size={40} />
            <span>Roulette</span>
          </div>
        </div>

        <div className="flex gap-2  flex-col sm:flex-row">
          <div className="bg-slate-900  transition-all hover:bg-slate-800 cursor-pointer sm:max-w-xs w-full py-6 px-4">
            <GiCard7Spades size={40} />
            <span>Cards</span>
          </div>
          <div className="bg-slate-900 transition-all hover:bg-slate-800 cursor-pointer sm:max-w-xs w-full py-6 px-4">
            <GiRocketFlight size={40} />
            <span>Moonshot</span>
          </div>
        </div>
      </div>
    </div>
  );
}

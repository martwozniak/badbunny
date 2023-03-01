import PropTypes from 'prop-types';

Hero.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl']),
};

export default function Hero(height: any, backgroundColor: any, fontSize: any) {
  return (
    <div className="min-h-[50vh] max-h-screen bg-black text-xs text-white flex items-center justify-between px-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight   sm:text-6xl">
          1# Online Gambling platform
        </h1>
        <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Description
        </span>
      </div>

      <div className="min-w-[720px]">
        <span>t</span>
      </div>
    </div>
  );
}

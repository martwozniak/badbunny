import PropTypes from 'prop-types';

Hero.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl']),
};

export default function Hero(height: any, backgroundColor: any, fontSize: any) {
  return (
    <div className="min-h-[50vh] max-h-screen bg-black text-xs text-white flex items-center justify-center">
      <div className="container">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          1# Online Gambling platform
        </h1>
      </div>
    </div>
  );
}

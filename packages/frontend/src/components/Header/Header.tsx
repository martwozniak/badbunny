import PropTypes from 'prop-types';

Header.propTypes = {
  logo: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl']),
};

export default function Header({ logo, backgroundColor, fontSize }: any) {
  return (
    <div className="bg-black px-4 py-4 min-h-[60px] flex justify-between items-center">
      <div className="logo">
        <span className="text-white text-xs">BadBunny</span>
      </div>
      <div className="menu">
        <nav>
          <ul className="text-white text-xs flex gap-2 items-center">
            <li>Games</li>
            <li>Prices</li>
            <li className="CTA_Nav bg-green-600 px-4 py-2 rounded">
              Claim 300 000 points
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';

GamePreview.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl']),
};

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function GamePreview({ title, description, image }: Props) {
  return (
    <div>
      <div>{image}</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

import GamePreview from './GamePreview';

export default {
  title: 'Sections/GamePreview',
  component: GamePreview,
};

const Template = (args: any) => <GamePreview {...args} />;

export const GamePreviewDark = () => (
  <GamePreview
    title="test1"
    description="description"
    image="https://unsplash.com"
  />
);
export const GamePreviewLight = () => (
  <GamePreview
    title="test1"
    description="description"
    image="https://unsplash.com"
  />
);

export const CustomArguments = () => Template.bind({});
// TODO: Add dynamic props to hero
CustomArguments.args = {
  backgroundColor: 'black',
  height: '50vh',
  fontSize: 'xs',
};

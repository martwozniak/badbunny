import Hero from './Hero';

export default {
  title: 'Sections/Hero',
  component: Hero,
};

const Template = (args: any) => <Hero {...args} />;

export const HeroDark = () => <Hero />;
export const HeroLight = () => <Hero />;

export const CustomArguments = () => Template.bind({});
// TODO: Add dynamic props to hero
CustomArguments.args = {
  backgroundColor: 'black',
  height: '50vh',
  fontSize: 'xs',
};

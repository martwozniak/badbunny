import Header from './Header';

export default {
  title: 'Nav/Header',
  component: Header,
};

const Template = (args: any) => <Header {...args} />;

export const Primary = () => <Header />;
export const Secondary = () => <Header />;

export const CustomArguments = () => Template.bind({});
// TODO: Add dynamic props to header
CustomArguments.args = {
  backgroundColor: 'black',
  label: 'Test me',
  fontSize: 'xs',
};

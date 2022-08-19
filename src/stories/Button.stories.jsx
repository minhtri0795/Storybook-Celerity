import React from "react";
import { Button } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  styles: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  styles: "secondary",
  label: "Button",
};

export const Terinary = Template.bind({});

Terinary.args = {
  styles: "terinary",
  label: "Button",
};

export const Quaternary = Template.bind({});

Quaternary.args = {
  styles: "quaternary",
  label: "Button",
};

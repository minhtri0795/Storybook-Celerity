import React from "react";
import { BasicBlock } from "../components/BasicBlock";

export default {
  title: "Example/BasicBlock",
  component: BasicBlock,
};

const Template = (args) => <BasicBlock {...args} />;

export const Option1 = Template.bind({});

Option1.args = {
  title: "Title here",
};

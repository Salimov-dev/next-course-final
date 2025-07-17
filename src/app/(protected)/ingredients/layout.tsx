import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const IngredientsLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default IngredientsLayout;

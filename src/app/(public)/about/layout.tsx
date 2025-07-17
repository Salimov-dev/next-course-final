import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const AboutLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default AboutLayout;

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="font-md flex transform items-center justify-center rounded-md bg-light-blue px-5 py-2.5 font-semibold text-deep-blue transition-all duration-200 hover:scale-105 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Eventos)}
      href={`#${SelectedPage.Eventos}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

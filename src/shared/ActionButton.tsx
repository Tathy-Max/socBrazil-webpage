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
      className="rounded-md bg-primary-500 px-10 py-2 text-white hover:bg-secondary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Eventos)}
      href={`#${SelectedPage.Eventos}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

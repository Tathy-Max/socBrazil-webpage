import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
// import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title?: string;
  icon: JSX.Element;
  // description?: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Canal = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="rounded-md border-2 border-gray-100 px-2 py-4 text-center"
    >
      <div className="mb-2 flex h-full w-full justify-center">{icon}</div>
      <h4 className="font-bold">{title}</h4>

      {/* <p className="my-3">{description}</p> */}
      {/* <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.Eventos)}
        href={`#${SelectedPage.Eventos}`}
      >
        <p>Learn More</p>
      </AnchorLink> */}
    </motion.div>
  );
};

export default Canal;

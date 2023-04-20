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

const Canal = ({ icon, title, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="w-1/3 rounded-md border-2 border-gray-100 px-2 py-4 text-center"
    >
      <div className="relative my-1 flex h-80 w-full justify-center ">
        {icon}
      </div>
      <h4 className="font-bold text-purple-soc">{title}</h4>
    </motion.div>
  );
};

export default Canal;

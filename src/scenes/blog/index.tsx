import { SelectedPage, BlogType } from "@/shared/types";
import image1 from "@/assets/image1.png";
// import image2 from "@/assets/image2.png";
// import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
// import image5 from "@/assets/image5.png";
// import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Blog from "./Blog";
import AnchorLink from "react-anchor-link-smooth-scroll";

const news: Array<BlogType> = [
  {
    name: "DTNM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "SANS NEWS",
    image: image4,
  },
  {
    name: "DATASEC NEWS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "SOC WORLDWIDE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "BLABLABLA",
    image: image1,
  },
  {
    name: "SOC XYZ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurBlog = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourblog" className="w-full bg-deep-blue pt-20 pb-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-light-blue">
              BLOG NEWS
            </h1>
            <p className="py-5 text-gray-text">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {news.map((item: BlogType, index) => (
              <Blog
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurBlog;

import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { CanaisType, SelectedPage } from "@/shared/types";
// import {
//   HomeModernIcon,
//   UserGroupIcon,
//   AcademicCapIcon,
// } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import CanaisPageGraphic from "@/assets/CanaisPageGraphic.png";
import Canal from "./Canal";

const canais: Array<CanaisType> = [
  {
    title: "LinkedIn SOCBrazil",
    icon: (
      <iframe
        src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/122682"
        width="100%"
        height="500"
      ></iframe>
    ),
  },
  {
    icon: (
      <iframe
        src="https://widgets.sociablekit.com/youtube-channel-videos/iframe/122894"
        width="853"
        height="600"
        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
        title="youTubeChannel"
      ></iframe>
    ),
    title: "YouTube SOCBrazil",
  },
  {
    icon: (
      <iframe
        src="https://widgets.sociablekit.com/youtube-playlists/iframe/122906"
        width="100%"
        height="500"
      ></iframe>
    ),
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Canais = ({ setSelectedPage }: Props) => {
  return (
    <section id="canais" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Canais)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A COMMUNITY</HText>
          <p className="my-5 text-sm">
            O SOC Brazil possui uma metodologia pr??pria que foi criada ap??s
            diversos estudos entre metodologias de grandes empresas e pesquisas
            de campo com profissionais do segmento.
          </p>
        </motion.div>

        {/* CANAIS */}
        <motion.div
          className="items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {canais.map((canais: CanaisType) => (
            <Canal
              key={canais.title}
              title={canais.title}
              icon={canais.icon}
              // description={canais.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="canais-page-graphic"
            src={CanaisPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">IN</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                recusandae labore velit earum exercitationem dolore a ratione
                illum distinctio temporibus deserunt similique, repudiandae quis
                doloribus eligendi debitis minima amet molestias!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores similique nam labore unde minima nihil consequatur, eos
                facilis dolorum tempore. Inventore labore voluptatum tenetur
                veritatis maxime nostrum enim eius doloribus.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Canais;

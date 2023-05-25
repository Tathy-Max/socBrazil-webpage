import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { CanaisType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import CanaisEvents from "@/assets/calendar.jpg";
import Canal from "./Canal";

const canais: Array<CanaisType> = [
  // {
  //   title: "LinkedIn SOCBrazil",
  //   icon: (
  //     <iframe
  //       src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/122682"
  //       width="100%"
  //       height="500"
  //     ></iframe>
  //   ),
  // },
  // {
  //   title: "YouTube SOCBrazil",
  //   icon: (
  //     <iframe
  //       src="https://widgets.sociablekit.com/youtube-channel-videos/iframe/122894"
  //       width="853"
  //       height="600"
  //       allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope;"
  //       allowFullScreen
  //       title="youTubeChannel"
  //     ></iframe>
  //   ),
  // },
  {
    title: "YouTube SOCBrazil",
    icon: (
      <iframe
        src="https://www.youtube.com/embed?listType=playlist&list=UUE1gEtmSM7N1301gqz_WSRA"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
        title="youTubeChannel"
      ></iframe>
    ),
  },
  {
    title: "YouTube SOCBrazil",
    icon: (
      <iframe
        src="https://www.youtube.com/embed?listType=playlist&list=UUE1gEtmSM7N1301gqz_WSRA&index=2"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
        title="youTubeChannel"
      ></iframe>
    ),
  },
  {
    title: "YouTube SOCBrazil",
    icon: (
      <iframe
        src="https://www.youtube.com/embed?listType=playlist&list=UUE1gEtmSM7N1301gqz_WSRA&index=3"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
        title="youTubeChannel"
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
          <HText>
            MAIS DO QUE APENAS UMA{" "}
            <span className="text-purple-soc">COMUNIDADE</span>
          </HText>
          <p className="text-md my-5 text-purple-soc">
            Acompanhe nosso conteúdo exclusivo através de nossas redes
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
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <div className="w-full rounded-md border-2 border-gray-100 px-2 py-4 text-center">
            <iframe
              src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/122682"
              width="100%"
              height="500"
            ></iframe>
            <h4 className="font-bold text-purple-soc">LinkedIn SOCBrazil</h4>
          </div>
          {/* <img
            className="mx-auto"
            alt="canais-page-graphic"
            src={CanaisPageGraphic}
          /> */}

          {/* DESCRIPTION */}
          <div className="w-2/3">
            {/* TITLE */}
            <div className="relative ">
              <div className=" before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
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
                    ACOMPANHE AQUI NOSSOS PRÓXIMOS{" "}
                    <span className="text-purple-soc">EVENTOS</span>
                  </HText>
                  <img
                    className="mx-auto pt-4"
                    alt="canais-events-graphic"
                    src={CanaisEvents}
                  />
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
              <p className="my-5 mx-auto text-center text-purple-soc">
                Em breve estaremos divulgando mais um evento para a comunidade
                SOCBRAZIL
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-8">
              <div className="before:absolute before:-bottom-20  before:z-[-1] ">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Inscreva-se para participar
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

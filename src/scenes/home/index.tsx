import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
// import LogoNova from "@/assets/socLogoNew.png";
import HomePageText from "@/assets/homePageText.png";
import HomePageGraphic from "@/assets/socLogoNew.png";
import LogoDataSec from "@/assets/logoDataSec.png";
import LogoSans from "@/assets/logoSans.png";
import LogoSocCloud from "@/assets/logoSocCloud.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 2, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-cybertext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="text-md mt-8">
              O SOC Brazil foi criado em Janeiro de 2019 com o objetivo de acima
              de tudo ajudar empresas e profissionais de Segurança da Informação
              a aumentarem a maturidade dos centros de operações de segurança da
              informação. O SOC Brazil possui uma metodologia própria que foi
              criada após diversos estudos entre metodologias de grandes
              empresas e pesquisas de campo com profissionais do segmento.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Blog)}
              href={`#${SelectedPage.Blog}`}
            >
              <p>Saiba Mais</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img
                className="h-16 w-16"
                alt="datasec-sponsor"
                src={LogoDataSec}
              />
              <img className="h-16 w-16" alt="sans-sponsor" src={LogoSans} />
              <img
                className="h-16 w-16"
                alt="soccloud-sponsor"
                src={LogoSocCloud}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;

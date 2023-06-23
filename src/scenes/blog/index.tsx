import { BlogType, SelectedPage } from "@/shared/types";
import image11 from "@/assets/image11.png";
import image22 from "@/assets/image22.png";
import image33 from "@/assets/image33.png";
import image44 from "@/assets/image44.png";
import image55 from "@/assets/image55.png";
import { motion } from "framer-motion";
import Blog from "./Blog";

const news: Array<BlogType> = [
  {
    name: "DTNM",
    link: "https://www.linkedin.com/newsletters/dtnm-de-t%25C3%25A9dio-ningu%25C3%25A9m-morre-7037820084098129920/",
    description:
      "A mais irregular newsletter do cyber mundo, rindo de nervoso do que rolou de relevante na semana.",
    image: image11,
  },
  {
    name: "CAFE SEGURO - PODCAST",
    link: "https://www.youtube.com/watch?v=U2XAWhKm8g8",
    description:
      "Que tal descobrir como as maiores organizações mundiais vem se protegendo de ameaças cibernéticas? Para isso convidamos o Bruno Guerreiro que é especialista em estratégias e conscientizações de SOC para compartilhar seu conhecimento sobre o tema! Se prepare para uma conversa leve e com muito conteúdo para discutirmos como é trabalhar e implementar um Security Operation Center no cenário empresarial.",
    image: image22,
  },
  {
    name: "SOC-CMM",
    link: "https://www.linkedin.com/posts/brunogdiniz_soc-cyberops-mdr-activity-7062779695297101824-DcCc/?utm_source=share&utm_medium=member_desktop",
    description:
      "A Datasec é a primeira empresa na América Latina (LATAM) licenciada SOC-CMM Silver Support.",
    image: image33,
  },
  {
    name: "SOC WORLDWIDE",
    link: "https://www.youtube.com/watch?v=CUJSdVTdSYI",
    description:
      "Luccas Bertti falando sobre Segurança Digital em casos de roubo de celulares no Bom Dia Cidades de Santa Cecília.",
    image: image44,
  },
  {
    name: "Comercial x Operação",
    link: "https://www.linkedin.com/posts/luccasbertti_acabo-de-sair-de-uma-conversa-bem-lega-com-activity-7059914296683577344-hLcu/?utm_source=share&utm_medium=member_desktop",
    description:
      "Uma reflexão sobre a questão Comercial X Operação, o comercial precisa de um bom serviço para vender mais e se beneficiar e a operação precisa que o serviço seja vendido para que seja beneficiada.",
    image: image55,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurBlog = ({ setSelectedPage }: Props) => {
  return (
    <section id="blog" className="w-full bg-deep-blue pt-20 pb-20">
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
              Uma seleção de posts, artigos e notícias com o que rolou de mais
              interessante
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[323px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {news.map((item: BlogType, index) => (
              <Blog
                key={`${item.name}-${index}`}
                name={item.name}
                link={item.link}
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

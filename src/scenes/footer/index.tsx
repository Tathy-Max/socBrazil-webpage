import Logo from "@/assets/LogoSocNav.png";
import Youtube from "@/assets/youtube.png";
import Linkedin from "@/assets/linkedin.png";
import Telegram from "@/assets/telegram.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="h-22 w-40" alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© SocBrazil All Rights Reserved.</p>
        </div>
        <div className="mt-16 grid basis-1/4 grid-cols-3 place-items-center gap-4 md:mt-0">
          {/* <h4 className="font-bold">Links</h4> */}
          <a
            href="https://youtube.com/c/SOCBrazil"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-10 w-10" src={Youtube} alt="logo youtube" />
            <p className="my-1">YouTube</p>
          </a>

          <a
            href="https://www.linkedin.com/company/socbrazil/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-10 w-10" src={Linkedin} alt="logo linkedin" />
            <p>LinkedIn</p>
          </a>

          <a
            href="https://youtube.com/c/SOCBrazil"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-10 w-10" src={Telegram} alt="logo telegram" />
            <p>Telegram</p>
          </a>

          {/* <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p> */}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Fale Conosco</h4>
          <p className="my-5">contato@socbrazil.com</p>
          <p>(21)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

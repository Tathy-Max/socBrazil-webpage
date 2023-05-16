import Logo from "@/assets/logoSocRT.png";
import Youtube from "@/assets/youtubeW.png";
import Linkedin from "@/assets/linkedinW.png";
import Instagram from "@/assets/instagramW.png";
import Telegram from "@/assets/telegramW.png";
import Whatsapp from "@/assets/whatsappW.png";

const Footer = () => {
  return (
    <footer className="bg-purple-soc pt-4 pb-2">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="h-20 w-20" alt="logo" src={Logo} />
          <p>© SocBrazil All Rights Reserved.</p>
        </div>
        <div className="mt-16 grid basis-2/4 grid-cols-5 place-items-center gap-4 md:mt-0">
          {/* <h4 className="font-bold">Links</h4> */}
          <a
            href="https://youtube.com/c/SOCBrazil"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-10 w-10 transition duration-500 hover:opacity-50"
              src={Youtube}
              alt="logo youtube "
            />
            <p className="my-1">YouTube</p>
          </a>

          <a
            href="https://www.linkedin.com/company/socbrazil/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-8 w-8 transition duration-500 hover:opacity-50"
              src={Linkedin}
              alt="logo linkedin"
            />
            <p className="my-1">LinkedIn</p>
          </a>

          <a
            href="https://t.me/joinchat/GbuV5BMs5mN3jVCL6nAOjw"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-8 w-8 transition duration-500 hover:opacity-50"
              src={Telegram}
              alt="logo telegram"
            />
            <p className="my-1">Telegram</p>
          </a>
          <a
            href="https://www.instagram.com/socbrazil/?hl=pt"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-500 hover:opacity-50"
              src={Instagram}
              alt="logo telegram"
            />
            <p className="my-1">Instagram</p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+12269980172"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-500 hover:opacity-50"
              src={Whatsapp}
              alt="logo telegram"
            />
            <p
              className="my-1 
            "
            >
              WhatsApp
            </p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          {/* <h4 className="font-bold">Fale Conosco</h4> */}
          <p className="my-5">contato@socbrazil.com</p>
          <p>(21)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

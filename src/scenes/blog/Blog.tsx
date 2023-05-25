type Props = {
  name: string;
  link: string;
  description?: string;
  image: string;
};

const Blog = ({ name, link, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[310px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <a href={link} target="_blank" rel="noreferrer">
          <p className="text-2xl">{name}</p>
        </a>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Blog;

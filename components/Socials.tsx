import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://example.com",
  },
  {
    icon: <FaLinkedin />,
    path: "https://example.com",
  },
];

const Socials = ({
  containerStyle,
  iconStyle,
}: {
  containerStyle: string;
  iconStyle: string;
}) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyle}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

import styled from "styled-components";
import {
  BsGithub,
  BsTelegram,
  BsWhatsapp,
  BsCodeSlash,
  BsLinkedin,
} from "react-icons/bs";
import { useThemeContext } from "../hooks/useTheme";
import Tooltip from "./Tooltip";
import Social from "./Social";

const StyledLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.text.title};
  }
`;

const Footer = () => {
  const { systemTheme } = useThemeContext();
  return (
    <footer className="mb-3 mt-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Tooltip tooltipId="Github">
            <Social
              url="https://github.com/piyushdhamu9"
              tooltipContent="Github"
              tooltipId="Github"
            >
              <BsGithub className="text-2xl" />
            </Social>
          </Tooltip>
          <Tooltip tooltipId="linkedin">
            <Social
              url="https://www.linkedin.com/in/piyushdhamu9/"
              tooltipContent="Linkedin"
              tooltipId="linkedin"
            >
              <BsLinkedin className="text-2xl" />
            </Social>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

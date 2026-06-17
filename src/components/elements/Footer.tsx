import { Container } from "../shared/Container";
import logo from "../../assets/Deepsleep.png";
import { navItems } from "../../utils/navItems";
import { NavItem } from "../shared/NavItem";
import ICPLogo from "../../assets/pictures/ICP-Logo.png";
export const Footer = () => {
  return (
    <footer
      className="relative pt-16 rounded-t-xl bg-box
          "
    >
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} alt="Deepsleep Logo" className="w-7 h-7" />
            <span className="text-lg font-semibold text-heading-1">
              Deepsleep
            </span>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex flex-row">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-heading-1 duration-200 transform 
                transition-transform hover:text-blue-600"
            >
              <img src={ICPLogo} alt="ICP Logo" className="w-6 h-6" />
            </a>
            <span className="items-center">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-heading-1 duration-200 transform 
                transition-transform hover:text-blue-600"
              >
                粤ICP备2025492035号
              </a>
            </span>
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text}></NavItem>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

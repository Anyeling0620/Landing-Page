import { Container } from "../shared/Container";
import logo from "../../assets/Deepsleep.png";
import { NavItem } from "../shared/NavItem";
import { ButtonLink } from "../shared/ButtonLink";
import { useThemeStore } from "../../store/ThemeStore";
import { navItems } from "../../utils/navItems";


export const Navbar = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="Deepsleep Logo" className="w-10 h-10" />
              <div className="inline-flex text-lg font-semibold text-heading-1">
                Deepsleep
              </div>
            </a>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
                          absolute top-full left-0 lg:top-0 lg:static bg-body lg:bg-transparent
                          border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t lg:border-t-0 border-border px-6 lg:px-0
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                           text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>

            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0
                            border-b border-border lg:border-0 px-6 lg:px-0 mx-1
                          "
            >
              <ButtonLink text="Get Started" href="#cta" className="" />
            </div>

            <div
              className="min-w-max flex items-center gap-x-3"
            >
              <button
                onClick={toggleTheme}
                className="outline-hidden flex relative 
                      text-heading-2 rounded-full p-2 lg:p-3
                      border border-border cursor-pointer 
                      "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

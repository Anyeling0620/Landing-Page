import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:-left-4 top-24 lg:top-28
             w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r 
             from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95
             lg:block hidden"
          ></span>
          <span
            className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl
                          bg-blue-600 blur-xl opacity-80"
          ></span>
        </div>

        <div
          className="relative flex flex-col items-center text-center
            lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl
            mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1
            className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl
                       font-bold"
          >
            Empower Your Business{" "}
            <span
              className="
          text-transparent bg-clip-text bg-linear-to-r
          from-indigo-600 via-purple-500 to-violet-600 ml-2 bg-[length:200%_auto]"
              style={{
                backgroundSize: "200% auto",
                animation: "gradientFlow 0.5s linear infinite",
              }}
            >
              with AI
            </span>
          </h1>
          <Paragraph className="mt-8">
            <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
              Deepsleep
            </span>
            让您的企业在AI浪潮中领先一步。我们提供开箱即用的智能解决方案，从数据分析到流程自动化，助您降本增效、洞察先机。无需深厚技术背景，即可拥有专属AI引擎。加入
            <span
              className="font-semibold text-transparent bg-clip-text 
             bg-linear-to-r from-indigo-600 via-purple-500 to-violet-600 
             bg-[length:200%_auto]"
              style={{
                backgroundSize: "200% auto",
                animation: "gradientFlow 3s linear infinite",
              }}
            >
              Deepsleep
            </span>
            ，让AI成为您最可靠的商业伙伴，开启智能增长新篇章。
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                action="#"
                className="py-1 px-1 w-full flex gap-3 items-center text-heading-1
                           shadow-lg  border border-border
                           bg-box rounded-full ease-linear focus-within:bg-body
                           focus-within:border-blue-600 duration-100"
              >
                <span className="min-w-max pl-3 pr-2 border-r border-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="ANYELING@gmail.com"
                  className="w-full py-3 outline-none bg-transparent placeholder-[rgb(var(--heading-3))]"
                />

                <Button className="min-w-max text-white">
                  <span className="hidden sm:flex relative z-5">
                    Get Started
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div
          className="flex flex-1 lg:w-1/2 lg:h-auto 
             relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"
        >
          <img
            src="https://s1.aigei.com/prevfiles/23816bde76974370b3538557f37e01ef.jpg?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:AbKXJCbb0E7HmwoDCSia7UcgZMk="
            alt="Hero img"
            width={2350}
            height={2350}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-w-none lg:max-h-104"
          />
        </div>
      </Container>

      <Numbers></Numbers>
    </section>
  );
};

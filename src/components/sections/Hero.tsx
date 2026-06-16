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
          text-transparent bg-clip-text bg-gradient-to-r
          from-blue-600 to-violet-600 ml-2"
            >
              with AI
            </span>
          </h1>
          <Paragraph className="mt-8">
            你好，我是DeepSeek，由深度求索公司创造的AI助手，我的知识截止到2025年5月，擅长编程、算法、技术解答、学习辅导和创意写作等各种任务，完全免费使用，支持1M超长上下文和文件上传，风格耐心细致、务实直接，喜欢用具体例子把复杂问题讲清楚，无论你是初学者还是资深开发者，我都愿意尽我所能帮你解决问题、理清思路。
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                action="#"
                className="py-1 px-1 w-full flex gap-3 items-center text-heading-1
                           shadow-lg shadow-box-shadow border border-box-border
                           bg-box-bg rounded-full ease-linear focus-within:bg-body
                           focus-within:border-blue-600 duration-100"
              >
                <span className="min-w-max pl-3 pr-2 border-r border-box-border">
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
                  className="w-full py-3 outline-none bg-transparent"
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

      <Numbers>
        
      </Numbers>
    </section>
  );
};

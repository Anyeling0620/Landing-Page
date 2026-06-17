import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import aboutus from "../../assets/pictures/purple-background.jpg";
import { Paragraph } from "../shared/Paragraph";
import { Info } from "../cards/Info";
export const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2 items-center">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src={aboutus}
              alt="About our mission"
              className="w-full h-full object-cover rounded-3xl 
              shadow-lg relative z-10"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col gap-4">
          <Title>关于我们AI的解决方案</Title>
          <Paragraph>
            我们专注于为企业提供落地性强、可定制的AI解决方案。通过深度融合自然语言处理、机器视觉与预测性分析技术，我们帮助客户重构业务流程、挖掘数据价值。我们的方案不追求大而全，旨在精准解决效率瓶颈，让AI真正成为驱动业务增长的生产力工具，助力企业实现智能化转型升级。
          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info title="Mission" description="Something generic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </Info>

            <Info
              title="Vision"
              description="Drive business innovation and growth"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};

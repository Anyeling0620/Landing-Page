import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="relative z-10 mx-auto text-center
               max-w-xl md:max-w-2xl py-8 md:py-10 px-2 md:px-4"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl
                font-bold text-heading-1"
            >Quick Start Your own 
              <span
                className="text-transparent bg-clip-text 
                bg-linear-to-r from-indigo-600 to-violet-600"
              > AI Business </span>
            </h1>
            <Paragraph className="pt-10">
              无需搭建复杂团队，即刻拥有专属AI业务引擎。我们提供开箱即用的AI解决方案，帮助您降本增效、洞察数据，让AI成为您最可靠的商业伙伴。
            </Paragraph>

            <div className="mx-auto max-w-md sm:max-w-xl pt-10 text-white">
              <Button className="transform transition-transform ease-in-out duration-300
                      hover:scale-103 font-semibold">Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

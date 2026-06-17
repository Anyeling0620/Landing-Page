import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = ["bilibili", "discord", "instagram", "twitter", "youtube"];

export const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>深受行业领导者信赖</Title>

          <div className="flex justify-center gap-6 flex-wrap my-4">
            {logos.map((logo, key) => (
              <div
                key={key}
                className="relative p-4 sm:p-5 md:p-6 rounded-xl bg-body 
                border border-border group mt-4 "
              >

                <div className="absolute -inset-1.5 z-0 rounded-xl 
                opacity-0 group-hover:opacity-10 transform transition 
                ease-in-out duration-300 bg-linear-to-r from-blue-600
              to-violet-600 blur-2xl">
                  
                </div>

                <img
                  src={`src/assets/logos/${logo}.png`}
                  alt={`${logo}`}
                  width="100"
                  height="60"
                  className="relative h-7 sm:h-10 w-auto ease-linear duration-300 
                  grayscale group-hover:grayscale-0! group-hover:scale-103 z-10"
                />

              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

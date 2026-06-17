import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Service } from "../cards/Service";
import { services } from "../../utils/services-data";

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our AI Services</Title>
          <Paragraph>
            At the heart of our platform lies a suite of intelligent AI services
            engineered to transform how you work and create. We combine
            cutting-edge machine learning models with intuitive interfaces,
            making advanced technology accessible to everyone. From automating
            routine tasks to uncovering deep insights from your data, our AI
            solutions are designed to scale with your needs, ensuring you stay
            ahead in a rapidly evolving digital world. Our services includes:
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              title={service.title}
              description={service.description}
              icon={service.icon}
              key={key}
            ></Service>
          ))}
        </div>
      </Container>
    </section>
  );
};

import { ChartArea, Brain, Microscope } from "lucide-react";

const cards = [
  {
    name: "Data Science",
    description:
      "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
    icon: Microscope,
  },
  {
    name: "Data Analysis",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: ChartArea,
  },
  {
    name: "Artificial Intelligence",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: Brain,
  },
];

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-heading font-semibold tracking-tight text-white sm:text-7xl">
            World Class Data Education
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty font-body text-gray-100 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset"
            >
              <card.icon
                aria-hidden="true"
                className="h-7 w-5 flex-none text-sky-600"
              />
              <div className="text-base/7">
                <h3 className="font-semibold text-white font-heading">
                  {card.name}
                </h3>
                <p className="mt-2 text-gray-100 font-body">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { ArrowUp, Crown, Phone } from "lucide-react";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: Crown,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: ArrowUp,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: Phone,
  },
];

const Features = () => {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold font-heading text-sky-600">
                Professional Educators
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white font-heading sm:text-5xl">
                Learn from the best
              </p>
              <p className="mt-6 text-lg/8 text-gray-100 font-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold font-heading text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-sky-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-white font-body">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="feature section"
              src="/feature.jpg"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl   sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

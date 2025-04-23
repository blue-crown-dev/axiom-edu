const CTA = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white font-heading sm:text-5xl">
          Ready to dive in? <br />
          Start your journey today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="#"
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold font-heading text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Get started
          </a>
          <a
            href="#"
            className="text-sm/6 font-semibold font-heading text-white"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CTA;

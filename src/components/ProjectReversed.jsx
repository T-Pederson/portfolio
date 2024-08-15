export default function ProjectReversed({
  image,
  alt,
  title,
  overview,
  description,
  codeLink,
  previewLink,
}) {
  return (
    <section className="antialiased">
      <div className="max-w-screen-xl mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 justify-items-end">
          <div className="md:hidden shrink-0 max-w-md lg:max-w-lg">
            <a
              href={previewLink}
              className="hover:opacity-60 hover:cursor-pointer transition-all duration-200"
            >
              <img className="w-full rounded-md" src={image} alt={alt} />
            </a>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-3xl">
              {title}
            </h1>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href={codeLink}
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-300 focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all duration-200 w-36"
                role="button"
              >
                <svg
                  className="w-3 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
                View Code
              </a>
              <a
                href={previewLink}
                className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center transition-all duration-200 w-36"
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  fill="white"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.055 512.055"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M500.235,236.946L30.901,2.28C16.717-4.813,0.028,5.502,0.028,21.361v469.333c0,15.859,16.689,26.173,30.874,19.081
			l469.333-234.667C515.958,267.247,515.958,244.808,500.235,236.946z M42.694,456.176V55.879l400.297,200.149L42.694,456.176z"
                      />
                    </g>
                  </g>
                </svg>
                Live Preview
              </a>
            </div>
            <hr className="my-6 md:my-8 border-gray-300 border" />
            <p className="mb-6 text-gray-500">{overview}</p>
            <p className="mb-6 text-gray-500">{description}</p>
          </div>
          <div className="shrink-0 max-w-md lg:max-w-lg ">
            <a
              href={previewLink}
              className="hidden md:block hover:opacity-60 hover:cursor-pointer transition-all duration-200"
            >
              <img className="w-full rounded-md" src={image} alt={alt} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

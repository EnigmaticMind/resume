export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-2 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[700px] max-w-[100vw]">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Robert Rice
            </h1>
            <p className="mb-1 text-md font-normal text-gray-700 lg:text-lg">
              Richmond, Virginia
              <br />
              <a
                href="mailto:rrice.jbs@gmail.com"
                className="text-blue-600"
                target="_blank"
              >
                rrice.jbs@gmail.com
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/robert-rice-807837174/"
                className="text-blue-600"
                target="_blank"
              >
                https://www.linkedin.com/in/robert-rice-807837174/
              </a>
            </p>
          </div>
        </header>
        <div className="w-[700px] max-w-[100vw]">
          <hr className="resume-hr"></hr>

          {/* Prof Summary */}
          <h2 className="resume-headers">Professional Summary</h2>

          <p className="mb-3 text-gray-700 ">
            Full Stack Engineer with 15+ years of experience creating scalable,
            secure, and high-performance applications.
          </p>

          <hr className="resume-hr"></hr>

          {/* Core Comp */}
          <h2 className="resume-headers">Core Competencies</h2>

          <div className="mb-3 text-gray-700 ">
            <ul className="pl-2 space-y-2 text-gray-500 list-none list-inside">
              <li>
                <span className="text-gray-700 font-bold">Languages:</span>{" "}
                JavaScript, TypeScript, Go, Java, Python
              </li>

              <li>
                <span className="text-gray-700 font-bold">Frameworks:</span>{" "}
                React, React Native, Vue.js, Angular, Redux, Spring, Node
              </li>

              <li>
                <span className="text-gray-700 font-bold">DevOps & Cloud:</span>{" "}
                AWS, Docker, Jenkins, Terraform, GitHub Actions
              </li>

              <li>
                <span className="text-gray-700 font-bold">
                  AI & Data Science:
                </span>{" "}
                Neural Networks, Large Language Models (LLMs), Github Copilot
              </li>

              <li>
                <span className="text-gray-700 font-bold">Gen AI:</span> Stable
                Diffusion, Hugging Face
              </li>

              <li>
                <span className="text-gray-700 font-bold">Databases:</span>{" "}
                MySQL, PostgreSQL, MongoDB
              </li>

              <li>
                <span className="text-gray-700 font-bold">Testing:</span>{" "}
                Jasmine, Karma, Cypress, Protractor
              </li>

              <li>
                <span className="text-gray-700 font-bold">
                  Tools & Workflow:
                </span>{" "}
                Git, GitKraken, Jira, Confluence, Webpack, WebAssembly, Vite
              </li>
            </ul>
          </div>

          <hr className="resume-hr"></hr>

          {/* Prof Exp */}
          <h2 className="resume-headers">Professional Experience</h2>

          <div className="mb-3 space-y-4 text-gray-700">
            <div>
              <div>
                <span className="font-bold">ConnectRN</span> — Lead Principal
                Software Engineer
                <br />
                Boston, MA | 2022 – Present
              </div>
              <ul className="pt-4 pl-4 space-y-4 list-disc list-inside">
                <li>
                  Created the payroll management software in Go & React which
                  supports over 100,000 nursing professionals and the billing
                  for nursing facilities they work at.
                </li>
                <li>
                  Worked on the React and React mobile user interfaces for
                  connecting nurses with positions at facilities.
                </li>
              </ul>
            </div>

            <div>
              <div>
                <span className="font-bold">Capital One</span> — Lead Principal
                Software Engineer <br />
                Richmond, VA | 2019 – 2022
              </div>
              <ul className="pt-4 pl-4 space-y-4 list-disc list-inside">
                <li>
                  Built the Vue.js & Java app which created the over 100 million
                  monthly credit card statements, specifically the logic around
                  when to show what advertising partners adverts.
                </li>
              </ul>
            </div>

            <div>
              <div>
                <span className="font-bold">Advance Auto Parts</span> —
                Principal Software Engineer <br />
                Richmond, VA | 2018 – 2019
              </div>
              <ul className="pt-4 pl-4 space-y-4 list-disc list-inside">
                <li>
                  Reduced initial application load times from about 11 seconds
                  to ms in scale, along with other optimization improvements.
                  This was done by reducing our build size in Webpack through
                  methods like tree shaking. I also introduced Redux patterns
                  (through NgRx) into our application which eliminated
                  unnecessary requests.
                </li>
                <li>
                  Led version upgrades from AngularJS to Angular 8 along with
                  migrating SVN ➔ Git on an application actively supporting over
                  4,000 retail locations and billions in revenue.
                </li>
                <li>Taught Redux methodologies to 30+ front end developers.</li>
              </ul>
            </div>

            <div>
              <div>
                <span className="font-bold">Capital One</span> — Principal
                Software Engineer <br />
                Richmond, VA | 2016 – 2019
              </div>
              <ul className="pt-4 pl-4 space-y-4 list-disc list-inside">
                <li>
                  Wrote Go APIs which managed commercial banking products with a
                  median transaction dollar amount in the low $10 million.
                </li>
                <li>
                  Introduced our department of 40+ people to end to end and unit
                  testing. Reducing error rates which was critical given our
                  high profile, high income business clients.
                </li>
                <li>
                  Presented to groups of 60+ engineers about up and coming
                  technologies like Go, Webpack, and React/Angular.
                </li>
                <li>
                  Cut AWS expenses by 1/10th original cost switching to Go over
                  Java.
                </li>
              </ul>
            </div>

            <div>
              <div>
                <span className="font-bold">Advance Auto Parts</span> — Front
                End Engineer (Contract) <br />
                Richmond, VA | 2015 – 2016
              </div>
              <ul className="pt-4 pl-4 space-y-1 list-disc list-inside">
                <li>
                  Modernized the company's point of sale COBOL application to a
                  web based Javascript application. This enabled push button
                  deployments to over 4,000 retail stores across the country,
                  supporting billions in revenue for the company.
                </li>
              </ul>
            </div>

            <div>
              <div>
                <span className="font-bold">SANS Institute</span> — Lead
                Software Engineer <br />
                Fredericksburg, VA | 2011 – 2015
              </div>
              <ul className="pt-4 pl-4 space-y-1 list-disc list-inside">
                <li>
                  Lead development for the company's sole payment processing and
                  accounting platform. We supported multiple currencies across
                  the globe in NA, EMEA, and APAC.
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">R&R Office Supplies</span> — Software
              Engineer <br />
              Richmond, VA | 2010 – 2011
            </div>

            <div>
              <span className="font-bold">Netsearch Direct</span> — Web
              Developer <br />
              Richmond, VA | 2009 – 2010
            </div>
          </div>

          <hr className="resume-hr"></hr>

          {/* Certifications */}
          <h2 className="resume-headers">Certifications</h2>

          <p className="mb-3 text-gray-700 ">
            AWS Certified Developer
            <br />
            AWS Certified Solutions Architect
          </p>

          <hr className="resume-hr"></hr>

          {/* Education */}
          <h2 className="resume-headers">Education</h2>

          <p className="mb-3 text-gray-700 ">
            <span className="font-bold">ITT Technical Institute</span>
            <br />
            Richmond, VA | 2006 – 2009
          </p>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

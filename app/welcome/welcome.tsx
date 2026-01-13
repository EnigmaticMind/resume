import { useState } from "react";

export function Welcome() {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("entry.1817395812", feedback);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScypkE6UkYk9HL479yev1wYOK3U9kdNNCh_16R92eOL6z9TCQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setFeedback("");
      alert("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("There was an error submitting your feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !isSubmitting) {
      // Enter alone submits, Shift+Enter creates new line
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-2 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[700px] max-w-[100vw]">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Robert B Rice
            </h1>
            <p className="mb-1 text-md font-normal text-gray-700 lg:text-lg">
              Richmond, Virginia
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm lg:text-base">
              <a
                href="mailto:rrice.jbs@gmail.com"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://www.linkedin.com/in/robert-rice-807837174/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://github.com/EnigmaticMind/turn-tracker"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Technical Demo
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#feedback"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Feedback & Growth Opportunities!
              </a>
            </div>
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
                Boston, MA | 2022 – 2025
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
                Richmond, VA | 2016 – 2018
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
            <span className="font-bold">ITT Technical Institute</span> —
            Bachelors
            <br />
            Richmond, VA | 2006 – 2009
          </p>

          <hr className="resume-hr"></hr>

          {/* Feedback */}
          <h2 className="resume-headers" id="feedback">
            Feedback & Growth Opportunities!
            <sub className="text-xs text-gray-500 font-normal ml-2 block mt-1">
              (Anonymous via Google Forms)
            </sub>
          </h2>
          <form onSubmit={handleSubmit} className="mb-3">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="I'm always open to feedback and suggestions! Share it anonymously via Google Forms..."
              className="w-full p-3 border border-gray-300 rounded-md resize-y min-h-[100px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

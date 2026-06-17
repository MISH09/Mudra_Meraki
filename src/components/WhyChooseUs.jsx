function WhyChooseUs() {
  return (
    <section className="bg-[#FFF1C9] py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#FA7929] mb-3">
            Why Choose Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#821844]">
            Why Choose Mudra Meraki?
          </h2>

        </div>


        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">


          {/* Large Card */}

          <div
            className="
            lg:col-span-2
            bg-[#821844]
            rounded-[40px]
            p-12
            shadow-xl
            text-white
            flex
            flex-col
            justify-center
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >

            <span className="text-6xl mb-8">
              🪷
            </span>

            <h3 className="text-4xl font-bold mb-6">
              Holistic Learning
            </h3>

            <p className="text-lg leading-9 text-gray-200">
              At Mudra Meraki, dance is more than movement.
              We nurture discipline, creativity, confidence,
              and cultural appreciation while helping students
              discover their unique artistic voice.
            </p>

          </div>



          {/* Right Column */}

          <div className="flex flex-col gap-8">


            {/* Card 1 */}

            <div
              className="
              bg-white
              rounded-[40px]
              p-8
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="text-5xl mb-4">
                💃
              </div>

              <h3 className="text-2xl font-bold text-[#821844] mb-3">
                Expert Faculty
              </h3>

              <p className="text-gray-600">
                Learn from passionate teachers with years of
                experience and dedication.
              </p>

            </div>



            {/* Card 2 */}

            <div
              className="
              bg-[#FA7929]
              rounded-[40px]
              p-8
              shadow-lg
              text-white
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="text-5xl mb-4">
                📅
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Regular Events
              </h3>

              <p>
                Workshops, performances and celebrations that
                help students gain confidence and stage experience.
              </p>

            </div>



            {/* Card 3 */}

            <div
              className="
              bg-[#005E76]
              rounded-[40px]
              p-8
              shadow-lg
              text-white
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="text-5xl mb-4">
                🏅
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Exams & Certifications
              </h3>

              <p>
                Structured learning with opportunities to
                earn recognized certifications.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
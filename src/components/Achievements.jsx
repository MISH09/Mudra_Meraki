function Achievements() {
  return (
    <section className="bg-[#FFF1C9] py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#FA7929] mb-4">
            Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#821844]">
            Celebrating Excellence
          </h2>

        </div>


        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="
            bg-white
            rounded-[40px]
            p-10
            shadow-xl
            hover:-translate-y-2
            transition-all duration-300">

              <h1 className="text-6xl font-bold text-[#821844] mb-4">
                500+
              </h1>

              <p className="text-gray-600 text-lg">
                Students Trained
              </p>

            </div>


            <div className="
            bg-[#FA7929]
            text-white
            rounded-[40px]
            p-10
            shadow-xl
            hover:-translate-y-2
            transition-all duration-300">

              <h1 className="text-6xl font-bold mb-4">
                50+
              </h1>

              <p className="text-lg">
                Stage Performances
              </p>

            </div>

          </div>


          {/* Center Card */}

          <div className="
          bg-[#821844]
          text-white
          rounded-[50px]
          p-16
          shadow-2xl
          text-center">

            <div className="text-7xl mb-8">
              🏆
            </div>

            <h2 className="text-5xl font-bold mb-8">
              A Legacy of Dance
            </h2>

            <p className="text-gray-200 leading-9 text-lg">
              Over the years, Mudra Meraki has nurtured
              passionate dancers and celebrated countless
              performances, awards and milestones.
            </p>

          </div>


          {/* Right Side */}

          <div className="space-y-8">

            <div className="
            bg-[#005E76]
            text-white
            rounded-[40px]
            p-10
            shadow-xl
            hover:-translate-y-2
            transition-all duration-300">

              <h1 className="text-6xl font-bold mb-4">
                15+
              </h1>

              <p className="text-lg">
                Years of Legacy
              </p>

            </div>


            <div className="
            bg-white
            rounded-[40px]
            p-10
            shadow-xl
            hover:-translate-y-2
            transition-all duration-300">

              <h1 className="text-6xl font-bold text-[#821844] mb-4">
                20+
              </h1>

              <p className="text-gray-600 text-lg">
                Awards & Recognition
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;
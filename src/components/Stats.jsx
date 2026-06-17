function Stats() {
  return (
    <section className="bg-[#FFF1C9] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Students */}

          <div className="
          bg-white
          rounded-[40px]
          shadow-xl
          p-10
          text-center
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-300">

            <h1 className="text-6xl font-bold text-[#821844] mb-4">
              200+
            </h1>

            <p className="text-gray-600 text-lg">
              Students
            </p>

          </div>


          {/* Events */}

          <div className="
          bg-[#FA7929]
          text-white
          rounded-[40px]
          shadow-xl
          p-10
          text-center
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-300">

            <h1 className="text-6xl font-bold mb-4">
              50+
            </h1>

            <p className="text-lg">
              Events
            </p>

          </div>


          {/* Experience */}

          <div className="
          bg-[#005E76]
          text-white
          rounded-[40px]
          shadow-xl
          p-10
          text-center
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-300">

            <h1 className="text-6xl font-bold mb-4">
              15+
            </h1>

            <p className="text-lg">
              Years of Legacy
            </p>

          </div>


          {/* Pass Rate */}

          <div className="
          bg-[#821844]
          text-white
          rounded-[40px]
          shadow-xl
          p-10
          text-center
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-300">

            <h1 className="text-6xl font-bold mb-4">
              100%
            </h1>

            <p className="text-lg">
              Passion
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;
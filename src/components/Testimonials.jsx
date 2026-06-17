function Testimonials() {
  return (
    <section className="bg-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#FA7929] mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#821844] mb-6">
            What Our Students Say
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Every performance, every smile, and every achievement
            is a reflection of the journey we share together.
          </p>

        </div>


        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 items-start">


          {/* Card 1 */}

          <div className="
          bg-[#FFF1C9]
          rounded-[50px]
          p-10
          shadow-xl
          hover:-translate-y-3
          transition-all duration-300">

            <div className="text-7xl text-[#FA7929] mb-6">
              "
            </div>

            <p className="text-gray-700 leading-8 mb-10">
              Mudra Meraki has transformed my confidence and
              helped me discover the joy of dance in the most
              beautiful way.
            </p>

            <div>

              <h3 className="text-2xl font-bold text-[#821844]">
                Ananya Sharma
              </h3>

              <p className="text-gray-500">
                Student
              </p>

            </div>

          </div>


          {/* Card 2 */}

          <div className="
          bg-[#821844]
          text-white
          rounded-[50px]
          p-10
          shadow-xl
          mt-12
          hover:-translate-y-3
          transition-all duration-300">

            <div className="text-7xl text-[#FA7929] mb-6">
              "
            </div>

            <p className="leading-8 mb-10">
              Every class inspires me to work harder and
              perform better. The teachers are supportive
              and passionate.
            </p>

            <div>

              <h3 className="text-2xl font-bold">
                Meera Joshi
              </h3>

              <p className="text-gray-300">
                Intermediate Student
              </p>

            </div>

          </div>


          {/* Card 3 */}

          <div className="
          bg-[#005E76]
          text-white
          rounded-[50px]
          p-10
          shadow-xl
          hover:-translate-y-3
          transition-all duration-300">

            <div className="text-7xl text-[#FA7929] mb-6">
              "
            </div>

            <p className="leading-8 mb-10">
              Performing on stage became possible because
              of the discipline and guidance I received
              here.
            </p>

            <div>

              <h3 className="text-2xl font-bold">
                Riya Kulkarni
              </h3>

              <p className="text-gray-300">
                Visharad Student
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
function CoursesSection() {
  return (
    <section className="bg-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#FA7929] mb-4">
            Explore Our Courses
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#821844] mb-6">
            Dance For Every Stage
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Whether you're taking your first step or preparing for Visharad,
            we have a learning path designed for you.
          </p>

        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Beginner */}

          <div className="
          bg-[#FFF1C9]
          rounded-[50px]
          p-12
          shadow-xl
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-300">

            <div className="text-6xl mb-6">
              🌸
            </div>

            <h3 className="text-4xl font-bold text-[#821844] mb-5">
              Beginner Kathak
            </h3>

            <p className="text-gray-700 leading-8">
              Build strong fundamentals in rhythm,
              posture and expression while developing
              confidence and grace.
            </p>

          </div>


          {/* Intermediate */}

          <div className="
          bg-[#FA7929]
          text-white
          rounded-[50px]
          p-12
          shadow-xl
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-300">

            <div className="text-6xl mb-6">
              ✨
            </div>

            <h3 className="text-4xl font-bold mb-5">
              Intermediate
            </h3>

            <p className="leading-8">
              Refine techniques, footwork and stage
              presence while preparing for performances.
            </p>

          </div>


          {/* Advanced */}

          <div className="
          lg:col-span-2
          bg-[#821844]
          text-white
          rounded-[50px]
          p-16
          shadow-xl
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-300">

            <div className="text-7xl mb-8">
              🪷
            </div>

            <h3 className="text-5xl font-bold mb-6">
              Advanced (Visharad)
            </h3>

            <p className="text-gray-200 text-lg leading-9 max-w-3xl">
              Intensive training for examinations, stage
              performances and mastery of classical
              techniques rooted in tradition and artistry.
            </p>

          </div>


          {/* Workshops */}

          <div className="
          bg-[#005E76]
          text-white
          rounded-[50px]
          p-12
          shadow-xl
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-300">

            <div className="text-6xl mb-6">
              🎭
            </div>

            <h3 className="text-4xl font-bold mb-5">
              Workshops
            </h3>

            <p className="leading-8">
              Special sessions with guest artists and
              immersive masterclasses.
            </p>

          </div>


          {/* Semi-Classical */}

          <div className="
          bg-[#FFF1C9]
          rounded-[50px]
          p-12
          shadow-xl
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-300">

            <div className="text-6xl mb-6">
              💃
            </div>

            <h3 className="text-4xl font-bold text-[#821844] mb-5">
              Semi-Classical
            </h3>

            <p className="text-gray-700 leading-8">
              Explore creativity and contemporary
              interpretations while preserving classical roots.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CoursesSection;
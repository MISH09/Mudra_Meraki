function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF1C9] min-h-screen flex items-center">

      {/* Background blobs */}

      <div className="
      absolute
      top-20
      left-0
      w-72
      h-72
      bg-[#FA7929]/20
      rounded-full
      blur-3xl">
      </div>

      <div className="
      absolute
      bottom-0
      right-0
      w-96
      h-96
      bg-[#005E76]/20
      rounded-full
      blur-3xl">
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center z-10">

        {/* Left Side */}

        <div>

          <p className="
          uppercase
          tracking-[0.3em]
          text-[#FA7929]
          mb-6
          font-medium">
            Where Tradition Meets Expression
          </p>

          <h1 className="
          text-6xl
          md:text-8xl
          font-bold
          text-[#821844]
          leading-tight
          mb-8">
            Mudra
            <br />
            Meraki
          </h1>

          <p className="
          text-xl
          text-gray-600
          leading-9
          max-w-xl
          mb-10">
            Discover the beauty of Kathak through discipline,
            creativity and expression. Learn, practice and
            perform with confidence.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="
            bg-[#821844]
            text-white
            px-9
            py-4
            rounded-full
            shadow-xl
            hover:bg-[#FA7929]
            hover:-translate-y-1
            transition-all
            duration-300">
              Join Us
            </button>


            <button className="
            border-2
            border-[#821844]
            text-[#821844]
            px-9
            py-4
            rounded-full
            hover:bg-[#821844]
            hover:text-white
            transition-all
            duration-300">
              Student Portal
            </button>

          </div>

        </div>


        {/* Right Side */}

        <div className="flex justify-center">

          <div className="
          w-full
          max-w-md
          bg-white/60
          backdrop-blur-lg
          rounded-[50px]
          shadow-2xl
          p-6">

            <img
              src="/dancer.png"
              alt="Kathak Dancer"
              className="
              rounded-[40px]
              object-cover
              w-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
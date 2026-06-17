function GallerySection() {
  return (
    <section className="bg-[#FFF1C9] py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#FA7929] mb-4">
            Gallery
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#821844] mb-6">
            Moments in Motion
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Capturing the joy, grace and beauty of every
            performance and practice session.
          </p>

        </div>


        {/* Gallery Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Image 1 */}

          <div className="overflow-hidden rounded-[50px] shadow-xl">
            <img
              src="/gallery/gallery1.jpg"
              alt=""
              className="h-[350px] w-full object-cover hover:scale-110 transition duration-500"
            />
          </div>


          {/* Image 2 */}

          <div className="overflow-hidden rounded-[50px] shadow-xl">
            <img
              src="/gallery/gallery2.jpg"
              alt=""
              className="h-[500px] w-full object-cover hover:scale-110 transition duration-500"
            />
          </div>


          {/* Image 3 */}

          <div className="overflow-hidden rounded-[50px] shadow-xl">
            <img
              src="/gallery/gallery3.jpg"
              alt=""
              className="h-[400px] w-full object-cover hover:scale-110 transition duration-500"
            />
          </div>


          {/* Image 4 */}

          <div className="overflow-hidden rounded-[50px] shadow-xl">
            <img
              src="/gallery/gallery4.jpg"
              alt=""
              className="h-[500px] w-full object-cover hover:scale-110 transition duration-500"
            />
          </div>


          {/* Image 5 */}

          <div className="overflow-hidden rounded-[50px] shadow-xl">
            <img
              src="/gallery/gallery5.jpg"
              alt=""
              className="h-[350px] w-full object-cover hover:scale-110 transition duration-500"
            />
          </div>


          {/* Image 6 */}

          <div className="overflow-hidden rounded-[50px] shadow-xl">
            <img
              src="/gallery/gallery6.jpg"
              alt=""
              className="h-[450px] w-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default GallerySection;
function ContactSection() {
  return (
    <section className="bg-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#FA7929] mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#821844] mb-6">
            Begin Your Journey
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out and become a part of the
            Mudra Meraki family.
          </p>

        </div>


        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* Phone */}

          <div className="
          bg-[#FFF1C9]
          rounded-[50px]
          p-12
          shadow-xl
          text-center
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all duration-300">

            <div className="text-6xl mb-8">
              📞
            </div>

            <h3 className="text-3xl font-bold text-[#821844] mb-4">
              Phone
            </h3>

            <p className="text-gray-700 text-lg">
              +91 98765 43210
            </p>

          </div>



          {/* Email */}

          <div className="
          bg-[#821844]
          text-white
          rounded-[50px]
          p-12
          shadow-xl
          text-center
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all duration-300">

            <div className="text-6xl mb-8">
              ✉️
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Email
            </h3>

            <p className="text-lg">
              info@mudrameraki.com
            </p>

          </div>



          {/* Address */}

          <div className="
          bg-[#005E76]
          text-white
          rounded-[50px]
          p-12
          shadow-xl
          text-center
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all duration-300">

            <div className="text-6xl mb-8">
              📍
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Location
            </h3>

            <p className="text-lg">
              Pune, Maharashtra, India
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;
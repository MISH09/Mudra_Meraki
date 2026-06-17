function Footer() {
  return (
    <footer className="bg-[#821844] text-white pt-24 pb-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-14">

          {/* Brand */}

          <div>

            <h1 className="text-5xl font-bold mb-6">
              Mudra Meraki
            </h1>

            <p className="text-gray-300 leading-8">
              Where Tradition Meets Expression.
              Discover the beauty of dance through
              grace, rhythm and creativity.
            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-300">

              <li className="hover:text-white cursor-pointer">
                Home
              </li>

              <li className="hover:text-white cursor-pointer">
                About
              </li>

              <li className="hover:text-white cursor-pointer">
                Courses
              </li>

              <li className="hover:text-white cursor-pointer">
                Gallery
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

            </ul>

          </div>



          {/* Courses */}

          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Courses
            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>Beginner Kathak</li>

              <li>Intermediate</li>

              <li>Advanced (Visharad)</li>

              <li>Workshops</li>

            </ul>

          </div>



          {/* Socials */}

          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Follow Us
            </h2>

            <ul className="space-y-4 text-gray-300">

              <li className="hover:text-white cursor-pointer">
                Instagram
              </li>

              <li className="hover:text-white cursor-pointer">
                YouTube
              </li>

              <li className="hover:text-white cursor-pointer">
                Facebook
              </li>

            </ul>

          </div>

        </div>



        {/* Bottom Line */}

        <div className="
        border-t
        border-gray-500
        mt-16
        pt-8
        text-center
        text-gray-300">

          © 2026 Mudra Meraki. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
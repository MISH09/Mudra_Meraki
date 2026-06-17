import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-4 z-50 px-6">

        <div className="
          max-w-7xl
          mx-auto
          bg-white/80
          backdrop-blur-xl
          rounded-full
          shadow-lg
          px-8
          py-4
          flex
          items-center
          justify-between
        ">

          {/* Logo */}

          <h1 className="text-3xl font-bold text-[#821844]">
            Mudra Meraki
          </h1>


          {/* Desktop Menu */}

          <div className="hidden md:flex gap-8 text-gray-700 font-medium">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/courses">Courses</Link>

            <Link to="/gallery">Gallery</Link>

            <Link to="/contact">Contact</Link>

          </div>


          {/* Login Button */}

          <button className="
            hidden md:block
            bg-[#821844]
            text-white
            px-7
            py-3
            rounded-full
            hover:bg-[#FA7929]
            transition-all
            duration-300
          ">
            Student Portal
          </button>


          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-3xl text-[#821844]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>


      {/* Mobile Menu */}

      {menuOpen && (

        <div className="
        md:hidden
        mx-6
        mt-4
        bg-white
        rounded-[40px]
        shadow-xl
        p-8
        flex
        flex-col
        gap-6
        text-center
        ">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/contact">Contact</Link>

          <button className="
            bg-[#821844]
            text-white
            py-4
            rounded-full
          ">
            Student Portal
          </button>

        </div>
  
      )}

    </>
  );
}

export default Navbar;
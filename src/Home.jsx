import React, { useState } from 'react'
import logo from './images/HabotLogo.png'
import svg from './images/SVG.png'
import arrow from './images/arrow.png'
import check from './images/checked.png'
import user from './images/Group 33.png'
import doc from './images/document.png'
import layer from './images/Layer_x0020_1.png'
import edit from './images/edit (1) 1.png'
import qoute from './images/quote-request 1.png'
import hand from './images/Group (2).png'
import footer from './images/Group 4.png'
import youtube from './images/Group 32.png'
import suitcase from './images/suitcase 1.png'
import location from './images/placeholder 1.png'



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className=''>
      <nav className=' '>
      <div className="flex px-[80px] xm:px-5 justify-between items-center bg-white shadow-md md:px-20">
      {/* Logo Section */}
      <div>
        <img className="w-[180px]" src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="flex lg:hidden gap-10 items-center">
        <p className="text-gray-500">Find Suppliers</p>
        <div className="flex gap-2 items-center">
          <p className="text-gray-500">Find service tags</p>
          <img src={svg} alt="Icon" />
        </div>
        <button className="border border-1 border-green-500 text-green-500 rounded-lg p-2">
          Login/Signup
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <div className="hidden lg:block">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col gap-4  px-[80px] py-[30px] xm:p-10">
          <p className="text-gray-500">Find Suppliers</p>
          <div className="flex gap-2 items-center">
            <p className="text-gray-500">Find service tags</p>
            <img src={svg} alt="Icon" />
          </div>
          <button className="border border-1 border-green-500 text-green-500 rounded-lg p-2">
            Login/Signup
          </button>
        </div>
      )}
    </div>

        <div className='backgorund bg-center xm:p-[30px]  p-[80px] m-auto text-center'>
        <div className='m-auto'>
          <h1 className=' text-[55px] XM:text-xl xm:text-3xl mt-[40px] text-white font-bold'>Are You a Supplier?</h1>
          <h1 className=' text-[55px] XM:text-xl xm:text-3xl xm:mt-5 text-white '>Explore Matching Opportunities.</h1>
          <form className='mt-8 '>
          <div className="w-[937px] xl:w-auto m-auto flex gap-2 flex-wrap">
  {/* First Input with Icon */}
  <div className="relative w-[400px] xl:w-[100%]">
    <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
      <img src={suitcase} alt="Service Icon" className="h-5 w-5" />
    </span>
    <input
      type="text"
      placeholder="Search your required service here"
      className="rounded px-4  pl-8 pr-2 py-2 w-[100%] border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
    />
  </div>

  {/* Second Input with Icon */}
  <div className="relative w-[400px] xl:w-[100%]">
    <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
      <img src={location} alt="Location Icon" className="h-5 w-5 " />
    </span>
    <input
      type="text"
      placeholder="Search your desired location here"
      className="rounded px-4  pl-8 pr-2 py-2 w-[100%] border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
    />
  </div>

  {/* Search Button */}
  <button className="rounded p-2 w-[100px] bg-green-600 text-white font-bold">
    Search
  </button>
</div>
           <h1 className='mt-10 text-[18px] text-white'><span className='font-bold'>Are You a buyer?</span> <a className='underline ms-2' href="">Click here if you are looking to post a requirements</a></h1>
          </form>
        </div>
      </div>
      </nav>

      <section className='px-[80px] xm:p-5 xm:mt-10 py-[130px] flex justify-between xl:flex-wrap xl:gap-16 xl:justify-center'>
        {/* heading 2 */}
        <div className='xl:text-center'>
          <h1 className='font-bold text-[37px]'>Ready to dive into <span className='text-[#271555]'>HABOT?</span></h1>
          <p className='mt-7 xl:w-[100%] text-black w-[68%]'> Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams</p>
          <button className='bg-green-700 xxxm:w-auto xxxm:px-2  xl:m-auto xl:mt-5 rounded mt-8 w-[300px] text-white font-bold py-3 px-8 flex justify-between items-center'><p className='text-center px-4'>Sign up Today!</p> <img className='w-[32px] xxxm:hidden' src={arrow} alt="" /></button>
        </div>

        {/* 4 option */}
        <div className='option-section  w-[540px]'>
        <div className='flex gap-5 xm:flex-wrap  items-center'>
        <div className='w-[260px] py-4 text-center xm:m-auto border border-1 border-orange-400 xxxm:w-[200px] rounded'>
          <h1 className='text-[18px] text-[#3E3E3E] font-semibold'>Abu Dhabi</h1>
        </div>
        <div className='w-[260px] py-4 text-center xm:m-auto border border-1 border-orange-400 xxxm:w-[200px] rounded'>
          <h1 className='text-[18px] text-[#3E3E3E] font-semibold'>Dubai</h1>
        </div>
        
        </div>

        <div className='flex xm:flex-wrap  gap-5 mt-5 items-center'>
        <div className='w-[260px] py-4 text-center xm:m-auto border border-1 border-orange-400 xxxm:w-[200px] rounded'>
          <h1 className='text-[18px] text-[#3E3E3E] font-semibold'>Sharjah & Ajman</h1>
        </div>
        <div className='w-[260px] py-4 text-center xm:m-auto border border-1 border-orange-400 xxxm:w-[200px] rounded'>
          <h1 className='text-[18px] text-[#3E3E3E] font-semibold'> Fujairah</h1>
        </div>
        
        </div>

        <div className='flex xm:flex-wrap  gap-5 mt-5 items-center'>
        <div className='w-[260px] py-4 text-center xm:m-auto border border-1 border-orange-400 xxxm:w-[200px] rounded'>
          <h1 className='text-[18px] text-[#3E3E3E] font-semibold'>Ras Al Khaimah</h1>
        </div>
        <div className='w-[260px] py-4 text-center xm:m-auto border border-1 border-orange-400 xxxm:w-[200px] rounded'>
          <h1 className='text-[18px] text-[#3E3E3E] font-semibold'>Umm Al Quwain</h1>
        </div>
        
        </div>
        </div>


      </section>

      <section className='section-2 px-[80px] lg:p-10 xm:p-2 py-[20px]'>
        <div className='bg-[#072F57] xm:p-10   px-[100px] py-[60px]'>

          <div className='flex 2xl:flex-wrap gap-10 mt-[30px] '>
            <div className='img xl:bg-center  xm:hidden m-auto w-[640px] h-[350px]'>
            <div className='m-auto text-center '><img src={youtube} className='m-auto mt-[90px]' alt="" /></div>
            </div>
  
            <div className='xm:m-auto xm:w-full'>
              <div className=' flex flex-wrap   md:m-auto gap-5'>
                <h1 className='text-[26px] text-[#EB7150] py-1 font-bold text-center border-b-4 rounded border-[#EB7150] w-[200px]'>Buyer</h1>
                <h1 className='text-[26px]  mb-1 font-bold text-center text-white  w-[200px]'>Supplier</h1>
                </div>

                <div className='mt-[60px] w-full'>
                <h1 className='text-white flex gap-3 items-center '><img src={check} className='w-[18px]' alt="" />  Post your requirements.</h1>
                <h1 className='text-white mt-4 flex gap-3 items-center '><img src={check} className='w-[18px]' alt="" />  Sit back for multiple suppliers to contact you.</h1>
                <h1 className='text-white mt-4 flex gap-3 items-center '><img src={check} className='w-[18px]' alt="" />  Choose among the suppliers based on the ratings and reviews.</h1>


                </div>
                
            </div>
          </div>


        </div>
      </section>

      <section className='section-3 bg-[#E8FBFF] py-[80px] mt-[150px]'>
          <div className='px-[180px] xl:px-5 flex flex-wrap gap-10 justify-between items-center'>
            <h1 className='text-[37px] font-semibold'> Let Suppliers <span className='border-b-4  border-[#EB7150] py-1'>Find You</span></h1>
            <button className='bg-[#EB7150] text-white font-semibold rounded p-3 w-[200px]'>Get Verified</button>
          </div>
      </section>

      <section className='section-4 py-[50px] mt-[80px]'>
        <div>
          <h1 className='font-bold text-black text-[37px] text-center'>How it works?</h1>
          <p className='text-black text-[18px] mt-4 text-center'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br /> potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        </div>
      </section>

      <section className='section-5 m-auto xl:w-auto  w-[1200px] py-[80px]'>
        <div className='flex xl:flex-col  '>
          <div className='w-[400px] xl:w-[100%] text-center bg-[#E8FBFF] py-10'>
            <img src={user} className='w-[74px] m-auto' alt="" />
            <p className=' mt-7 font-semibold text-[20px]'>Select Your Role and <br /> Sign Up</p>
          </div>

          <div className='w-[400px] xl:w-[100%]  text-center py-10'>
            <img src={doc} className='w-[74px] m-auto' alt="" />
            <p className=' mt-7 font-semibold text-[20px]'>Buyers Post Your <br />
            Requirements</p>
          </div>

          <div className='w-[400px] xl:w-[100%] text-center bg-[#E8FBFF] py-10'>
            <img src={layer} className='w-[74px] m-auto' alt="" />
            <p className=' mt-7 font-semibold text-[20px]'> Review, Select, and <br />
            Contact the Best Suppliers</p>
          </div>
        </div>

        <div className='flex xl:flex-col '>
          <div className='w-[400px] xl:w-[100%]  text-center  py-10'>
            <img src={edit} className='w-[74px] m-auto' alt="" />
            <p className=' mt-7 font-semibold text-[20px]'> Suppliers Complete your <br />
              profile and get notified for <br />
              opportunities</p>
          </div>

          <div className='w-[400px] xl:w-[100%]  text-center bg-[#E8FBFF] py-10'>
            <img src={qoute} className='w-[74px] m-auto' alt="" />
            <p className=' mt-10 font-semibold text-[20px]'>Contact to Buyers and Share <br />
            your Quote for the service</p>
          </div>

          <div className='w-[400px] xl:w-[100%]  text-center  py-10'>
            <img src={hand} className='w-[74px] m-auto' alt="" />
            <p className=' mt-7 font-semibold text-[20px]'> Both the Parties can Connect <br />
              and Make Business Leave a <br /> Feedback</p>
          </div>
        </div>

      </section>

      <footer className='bg-[#123557] py-[30px]'>
        <div className='px-[50px] w-[1200px] xl:w-auto flex-wrap gap-10  flex justify-between items-center  m-auto  py-8 border-t-2 border-gray-600 border-b-2 '>

          {/* 1st div */}
          <div className='flex flex-wrap gap-16'>
            <div>
              <img src={footer} className='w-[206px] mt-8' alt="" />
              <p className='text-white mt-5'>© R Singhania</p>
            </div>

            <div className='flex ssm:mt-10 flex-col gap-1'>
              <h1 className='text-white font-semibold'>Company</h1>
              <p className='text-gray-50 mt-3'>About</p>
              <p className='text-gray-50 '>FAQ</p>
            </div>

            <div className='flex flex-col gap-1'>
              <h1 className='text-white font-semibold'>Terms</h1>
              <p className='text-gray-50 mt-3'>Data Privacy</p>
              <p className='text-gray-50 '>Terms</p>
              <p className='text-gray-50 '>Accessibility</p>
            </div>

            <div className='flex flex-col gap-1'>
              <h1 className='text-white font-semibold'>Related</h1>
              <p className='text-gray-50 mt-3'>Find Buyer</p>
              <p className='text-gray-50 '>Feedback</p>
            </div>
            
          </div>

          {/* second div for socaial media */}
            <div className='social-media flex gap-4 xxxm:flex-wrap'>
              <div className=' border px-3 py-2 border-1 border-white rounded-full'><i className="fa-brands text-white  text-xl fa-linkedin-in"></i></div>
              <div className=' border px-3 py-2 border-1 border-white rounded-full'><i className="fa-brands text-white  text-xl fa-twitter"></i></div>
              <div className=' border px-3 py-2 border-1 border-white rounded-full'><i className="fa-brands text-white  text-xl fa-facebook"></i></div>
              <div className=' border px-3 py-2 border-1 border-white rounded-full'><i className="fa-brands text-white  text-xl fa-instagram"></i></div>

            </div>



        </div>

      </footer>
      
      </div>
    </div>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo.svg';
import griya from '../images/griya.svg';

export default function Login() {
  return (
    <div className="lg:flex lg:w-3/5 lg:text-sm max-h-full mx-auto my-auto h-screen rounded-lg shadow-lg text-lg">
      {/* login description aside left */}
      <div className=" overflow-hidden h-3/5 z-10 relative text-center block bg-blue-500/90 text-white block p-8 text-center w-full max-w-full basis-full
      lg:basis-3/5 lg:h-full lg:text-left lg:rounded-l-lg lg:align-bottom lg:table lg:p-10
      before:w-28 before:h-28 before:bg-white/30 before:ring-offset-[50px] before:ring-offset-white/10 before:ring-1 before:left-1 before:top-1/4 before:rounded-lg  before:absolute before:animate-[move_5s_linear_infinite] before:-z-10 
      after:w-28 after:h-28 after:bg-blue-600/90 after:ring-offset-[50px] after:ring-offset-white/20 after:ring-1 after:right-1 after:top-1 after:rounded-lg  after:absolute after:animate-[move_5s_linear_infinite] after:-z-10">
        <div className="relative mb-5 block lg:absolute lg:mb-0 lg:flex lg:items-center" href="logo.html">
          <img src={logo} className='lg:mr-3 lg:h-11 inline h-13' alt="logo" />
          <img src={griya} className='hidden lg:inline' alt="griya" />
        </div>

        <div className='text-bttom table-cell align-bottom'>
          <h2 className="main-title mb-2 text-4xl font-bold">Welcome To Griya</h2>
          <p className="text-slate-100/80">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          <ul className="social-icons lg:justify-start mt-4 flex justify-center">
            <li><a href="/react/demo/login" className='w-10 h-10 leading-10 text-white	rounded-lg m-1 bg-gray-300/40 inline-block	
            text-center hover:bg-zinc-50  hover:text-slate-500 transition ease-in-out delay-200'>
              <FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="/react/demo/login" className='w-10 h-10 leading-10 text-white	rounded-lg m-1 bg-gray-300/40 inline-block 
            text-center hover:bg-zinc-50  hover:text-slate-500 transition ease-in-out delay-200'>
              <FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="/react/demo/login" className='w-10 h-10 leading-10 text-white  rounded-lg m-1 bg-gray-300/40 inline-block
             text-center hover:bg-zinc-50 hover:text-slate-500 transition ease-in-out delay-200'>
              <FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>
          <div className="mt-3  text-slate-100/80 bottom-privacy">
            <p>Copyright © Designed &amp; Developed by <a href="https://dexignzone.com/" rel="noreferrer" target="_blank">DexignZone</a> 2021</p>
          </div>
        </div>

      </div>

      {/* login form aside right */}
      <div className="lg:basis-2/5 lg:table lg:rounded-r-lg bg-white">
        <div className="row	lg:table-cell lg:align-middle">
          <div className="login-form lg:p-8 p-12">

            <div className="mb-4">
              <h3 className="title mb-1 text-2xl font-bold">Sign in</h3>
              <p className="mb-6">Sign in by entering information below</p>
            </div>
            <form>
              <div className="form-group mb-4">
                <label className="">
                  <strong>Email</strong></label>
                <br></br>
                <input type="email" className="form-control border-black  border-b w-full h-12 focus:outline-loose" placeholder="Type Your Email Address" />
              </div>
              
              <div className="form-group mb-4">
                <label className="">
                  <strong>Password</strong></label>
                <br></br>
                <input type="password" className="form-control border-black	 border-b w-full h-12 focus:outline-loose	" placeholder="Type Your Password" />
              </div>

              <div className="form-row justify-content-between mt-4 mb-2">
                <div className="form-group mb-4">
                  <div className="custom-control checkbox ml-1 ">
                    <input type="checkbox" className="custom-control-input" id="checkbox_remember" />
                    <label className="custom-control-label" htmlFor="checkbox_remember"> Remember my preference</label>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary transition ease-in-out delay-200 btn-block text-white rounded-md h-10 
                  bg-blue-600/90 w-full	hover:bg-blue-700">Sign In</button>
              </div>

            </form>
            <div className="new-account mt-2"><p className="">Don't have an account?
              <a className="text-blue-600" href="/react/demo/page-register"> Sign up</a></p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
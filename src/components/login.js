import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo.svg';
import griya from '../images/griya.svg';

export default function Login() {
  return (
    <div className="lg:flex lg:w-3/5 max-h-full mx-auto my-auto h-screen rounded-lg shadow-lg text-sm ">
      {/* login description aside left */}
      <div className="lg:basis-3/5 lg:h-full lg:text-left lg:rounded-l-lg table overflow-hidden h-3/5 z-10 relative text-center 
       before:w-28 before:h-28 before:bg-white/[0.3] before:animate-[move_5s_linear_infinite]	 before:shadow-[0_0_0_45px_rgba(255,255,255,0.1)]	before:duration-700 before:left-1/5 before:rotate-45 before:rounded-lg before:z-0 before:bottom-1/2 before:absolute 
       align-bottom p-10 bg-blue-500/[0.9] text-white 
       after:w-28 after:h-28 after:bg-blue-600/[0.9] after:animate-[move_5s_linear_infinite] after:shadow-[0_0_0_45px_rgba(255,255,255,0.1)] after:duration-700 after:left-3/5 after:rotate-45 after:rounded-lg after:-z-10 after:top-1/5 after:absolute login-left">
        <div className="login-logo flex justify-center items-center w-full my-0 lg:flex lg:justify-start absolute" href="logo.html">
          <img src={logo} className='lg:mr-3 lg:h-11 h-12' alt="logo" />
          <img src={griya} className='invisible lg:visible text-center' alt="griya" />
        </div>

        <div className='text-bttom table-cell align-bottom'>
          <h2 className="main-title mb-2 text-4xl font-bold">Welcome To Griya</h2>
          <p className="text-slate-100/[0.8]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          <ul className="social-icons mt-4 flex justify-center lg:justify-start	">
            <li><a href="/react/demo/login" className='w-8 h-8 text-white	leading-loose rounded-lg m-1 bg-gray-300/[0.4] inline-block	
            text-center hover:bg-zinc-50  hover:text-slate-500 transition ease-in-out delay-200'>
              <FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="/react/demo/login" className='w-8 h-8  text-white leading-loose	rounded-lg m-1 bg-gray-300/[0.4] inline-block 
            text-center hover:bg-zinc-50  hover:text-slate-500 transition ease-in-out delay-200'>
              <FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="/react/demo/login" className='w-8 h-8 text-white leading-loose rounded-lg m-1 bg-gray-300/[0.4] inline-block
             text-center hover:bg-zinc-50  hover:text-slate-500 transition ease-in-out delay-200'>
              <FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>
          <div className="mt-3 text-slate-100/[0.8] bottom-privacy">
            <p>Copyright © Designed &amp; Developed by <a href="https://dexignzone.com/" rel="noreferrer" target="_blank">DexignZone</a> 2021</p>
          </div>
        </div>

      </div>

      {/* login form aside right */}
      <div className="lg:basis-2/5 lg:table lg:rounded-r-lg bg-white">
        <div className="row	lg:table-cell lg:align-middle">
            <div className="login-form lg:p-8 p-12">
              <div className="mb-4">
                <h3 className="dz-title mb-1 text-2xl font-bold">Sign in</h3>
                <p className="mb-6">Sign in by entering information below</p>
              </div>
              <form>
                <div className="form-group mb-4">
                  <label className=""> 
                  <strong>Email</strong></label>
                  <br></br>
                  <input type="email" className="form-control border-black  border-b w-full h-12 focus:outline-none" placeholder="Type Your Email Address" />
                </div>
                <div className="form-group mb-4">
                  <label className="">
                    <strong>Password</strong></label>
                  <br></br>
                  <input type="password" className="form-control border-black	 border-b w-full h-12 focus:outline-none	" placeholder="Type Your Password" />
                </div>
                <div className="form-row justify-content-between mt-4 mb-2">
                  <div className="form-group mb-4">
                    <div className="custom-control checkbox ml-1 ">
                      <input type="checkbox" className="custom-control-input " id="checkbox_remember" />
                      <label className="custom-control-label" htmlFor="checkbox_remember"> Remember my preference</label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary transition ease-in-out delay-200 btn-block text-white rounded-md h-10 
                  bg-blue-600/[0.9] w-full	hover:bg-blue-700">Sign In</button>
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
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import './MyFooter.css'

const MyFooter = () => {
  return (
    <div className="body">
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Brand Center</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Shipping</a></li>
                        <li><a href="">returns</a></li>
                        <li><a href="">order statue</a></li>
                        <li><a href="">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Licensing</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#"><FaFacebook className='w-5 h-5'/></a>
                        <a href="#"><FaInstagram className='w-5 h-5'/></a>
                        <a href="#"><FaTwitter className='w-5 h-5'/></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyFooter


// import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// const MyFooter = () => {
//   return (
//     <div className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto flex flex-wrap">
//         <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 md:mb-0">
//           <h4 className="text-lg font-medium mb-4">Company</h4>
//           <ul>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Brand Center</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
//           </ul>
//         </div>

//         <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 md:mb-0">
//           <h4 className="text-lg font-medium mb-4">Get Help</h4>
//           <ul>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shipping</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Returns</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Order Status</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Payment Options</a></li>
//           </ul>
//         </div>

//         <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 md:mb-0">
//           <h4 className="text-lg font-medium mb-4">Legal</h4>
//           <ul>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Licensing</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms & Conditions</a></li>
//           </ul>
//         </div>

//         <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 md:mb-0">
//           <h4 className="text-lg font-medium mb-4">Follow Us</h4>
//           <div className="flex gap-4">
//             <a href="#" className="text-white transition duration-300 hover:text-gray-400"><FaFacebook /></a>
//             <a href="#" className="text-white transition duration-300 hover:text-gray-400"><FaInstagram /></a>
//             <a href="#" className="text-white transition duration-300 hover:text-gray-400"><FaTwitter /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyFooter;

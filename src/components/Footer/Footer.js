import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mx-auto mt-8 p-6 ">
      <hr className="mb-2" />
      <div className="flex flex-wrap justify-between mb-10">
        <div className="flex-1 mb-6">
          <h5 className="font-bold mb-4">Useful Links</h5>
          <table className="w-full text-gray-500">
            <tbody>
              <tr>
                <td className="py-1 pr-4">About</td>
                <td className="py-1 pr-4">Privacy</td>
                <td className="py-1 pr-4">Partner</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Careers</td>
                <td className="py-1 pr-4">Terms</td>
                <td className="py-1 pr-4">Express</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Blog</td>
                <td className="py-1 pr-4">FAQs</td>
                <td className="py-1 pr-4">Seller</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Press</td>
                <td className="py-1 pr-4">Security</td>
                <td className="py-1 pr-4">Warehouse</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Lead</td>
                <td className="py-1 pr-4">Mobile</td>
                <td className="py-1 pr-4">Deliver</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Value</td>
                <td className="py-1 pr-4">Contact</td>
                <td className="py-1 pr-4">Resources</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1 mb-6">
          <h5 className="font-bold mb-4">
            Categories{" "}
            <a className="text-green-600 no-underline" href="#">
              see all
            </a>
          </h5>
          <table className="w-full text-gray-500">
            <tbody>
              <tr>
                <td className="py-1 pr-4">Vegetables & Fruits</td>
                <td className="py-1 pr-4">Dairy & Breakfast</td>
                <td className="py-1 pr-4">Munchies</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Cold Drinks & Juices</td>
                <td className="py-1 pr-4">Instant & Frozen Food</td>
                <td className="py-1 pr-4">Tea, Coffee & Health Drinks</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Bakery & Biscuits</td>
                <td className="py-1 pr-4">Sweet Tooth</td>
                <td className="py-1 pr-4">Atta, Rice & Dal</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Dry Fruits, Masala & Oil</td>
                <td className="py-1 pr-4">Sauces & Spreads</td>
                <td className="py-1 pr-4">Chicken, Meat & Fish</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="m-0 text-gray-500 font-semibold">Download App</p>
          <img
            className="w-24"
            src="https://blinkit.com/d61019073b700ca49d22.png"
            alt="App Store"
          />
          <img
            className="w-24"
            src="https://blinkit.com/8ed033800ea38f24c4f0.png"
            alt="Google Play"
          />
        </div>
        <div className="flex gap-4">
          <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
            <i className="fa-brands fa-threads"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

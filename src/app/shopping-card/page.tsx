export default function ShoppingCard () {

   return (

      <div className="font-sans">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
          <div className="flex gap-2 border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800 flex-1">Shopping Cart</h2>
            <h3 className="text-base text-gray-800">4 Items</h3>
          </div>

          <table className="mt-6 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-500 p-4">Description</th>
                <th className="text-base text-gray-500 p-4">Quantity</th>
                <th className="text-base text-gray-500 p-4">Price</th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap divide-y">
              <tr>
                <td className="p-4">
                  <div className="flex items-center gap-4 w-max">
                    <div className="w-24 h-24 shrink-0">
                      <img src='image/pic-7.webp' className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-800">Black T-Shirt</p>
                      <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
                        <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" data-original="#000000" />
                      </svg>
                    </button>
                    <span className="text-gray-800 text-sm font-semibold px-3">1</span>
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 512 512">
                        <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" data-original="#000000" />
                        <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" data-original="#000000" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="p-4">
                  <h4 className="text-base font-bold text-gray-800">$18.5</h4>
                </td>
              </tr>

              <tr>
                <td className="p-4">
                  <div className="flex items-center gap-4 w-max">
                    <div className="w-24 h-24 shrink-0">
                      <img src='image/half-sleeves.jpg' className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-800">White T-Shirt</p>
                      <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
                        <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" data-original="#000000" />
                      </svg>
                    </button>
                    <span className="text-gray-800 text-sm font-semibold px-3">1</span>
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 512 512">
                        <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" data-original="#000000" />
                        <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" data-original="#000000" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="p-4">
                  <h4 className="text-base font-bold text-gray-800">$18</h4>
                </td>
              </tr>

              <tr>
                <td className="p-4">
                  <div className="flex items-center gap-4 w-max">
                    <div className="w-24 h-24 shrink-0">
                      <img src='image/pic-5.jpg' className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-800">Red T-Shirt</p>
                      <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
                        <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" data-original="#000000" />
                      </svg>
                    </button>
                    <span className="text-gray-800 text-sm font-semibold px-3">1</span>
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 512 512">
                        <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" data-original="#000000" />
                        <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" data-original="#000000" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="p-4">
                  <h4 className="text-base font-bold text-gray-800">$15.5</h4>
                </td>
              </tr>

              <tr>
                <td className="p-4">
                  <div className="flex items-center gap-4 w-max">
                    <div className="w-24 h-24 shrink-0">
                      <img src='image/pic-6.avif' className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-800">Maroon T-Shirt</p>
                      <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
                        <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" data-original="#000000" />
                      </svg>
                    </button>
                    <span className="text-gray-800 text-sm font-semibold px-3">1</span>
                    <button type="button" className="border-none outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 512 512">
                        <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" data-original="#000000" />
                        <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" data-original="#000000" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="p-4">
                  <h4 className="text-base font-bold text-gray-800">$18</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-4">Order Summary</h2>

          <ul className="text-gray-800 divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-base py-3">Subtotal <span className="ml-auto font-bold">$37.00</span></li>
            <li className="flex flex-wrap gap-4 text-base py-3">Shipping <span className="ml-auto font-bold">$4.00</span></li>
            <li className="flex flex-wrap gap-4 text-base py-3">Tax <span className="ml-auto font-bold">$4.00</span></li>
            <li className="flex flex-wrap gap-4 text-base py-3 font-bold">Total <span className="ml-auto">$45.00</span></li>
          </ul>

          <button type="button" className="mt-6 text-base px-4 py-2 tracking-wide w-full bg-blue-600 hover:bg-blue-700 text-white">Make Payment</button>
        </div>
      </div>
    </div>
   )
}
import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-50 p-8 font-sans">
      <div className="container mx-auto">

        {/* New Session Button */}
        <div className="flex justify-center mb-8">
          <div className="bg-black text-white text-center py-4 w-full max-w-3xl rounded-lg">
            <button className="text-lg font-semibold">New Session</button>
          </div>
        </div>

        {/* Trial Period Notification */}
        <div className="flex justify-center mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-3/4">
              <p className="text-lg font-semibold mb-2 text-left">13 days remaining in your trial period</p>
              <p className="text-gray-600 text-left">
                Your trial period will end in 13 days. Activate LASSO now and get 10% discount on your monthly subscription.
              </p>
            </div>
            <button className=" ml-4 border border-black text-black py-1 px-2 flex items-center justify-between rounded-md mt-4 md:mt-5 w-full md:w-1/3">
              <span className="text-sm font-semibold flex-grow text-center">Activate Product</span>
            </button>
          </div>
        </div>

        {/* Open Recent Files Header and Search Bar in One Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold mb-4 md:mb-0">Open Recent Files</h2>
          <div className="w-[300px] max-w-md rounded-lg shadow-md p-2">
            <input
              type="text"
              placeholder="Search by Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:ring-1 placeholder:text-gray-500 placeholder:italic placeholder:text-lg text-black"
            />
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="w-full mb-4 max-w-3xl mx-auto my-1 border-t border-gray-300"></div>

        {/* Open Recent Files Section with Flexbox */}
        <div className="flex flex-col md:flex-row justify-between w-full mx-auto ml-8 md:ml-16 lg:ml-32">
          
          {/* Open Recent Files */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="font-semibold mb-2 text-left">Today</h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li><a href="#" className="underline">world_bank_data.csv</a></li>
              <li><a href="#" className="underline">amazon_athena.csv</a></li>
              <li><a href="#" className="underline">amazon_aurora_for_mysql.csv</a></li>
              <li><a href="#" className="underline">amazon_emr_hadoop_hive.csv</a></li>
              <li><a href="#" className="underline">box.csv</a></li>
              <li><a href="#" className="underline">dropbox.csv</a></li>
              <li><a href="#" className="underline">google_big_query.csv</a></li>
            </ul>
          </div>

          {/* Explore Sample Sessions */}
          <div className="w-full md:w-1/2">
            <h2 className="text-left text-lg font-semibold mb-4">Explore Sample Sessions</h2>
            <ul className="text-gray-600 space-y-2 text-left">
              <li><a href="#" className="underline">anes96_election_data.csv</a></li>
              <li><a href="#" className="underline">investment_data.csv</a></li>
              <li><a href="#" className="underline">longley_econ_data.csv</a></li>
              <li><a href="#" className="underline">us_macro_data.csv</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;

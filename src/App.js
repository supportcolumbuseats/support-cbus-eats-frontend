import React from 'react';
import restaurants from './restaurants.json'

function App() {
  const districts = Array.from(new Set(Object.keys(restaurants).map(f => restaurants[f].district)))
  return (
    <div className="App px-2">
      {districts.map((district) =>
        <div className="mb-10">
          <h2 className="px-2 mb-4 text-2xl">{district}</h2>
          <div className="p-2">
            {restaurants.filter((r) => r.district == district).map((entry) =>

              <div className="w-1/3 rounded overflow-hidden shadow-lg border-t-2 border-gray-200 px-2 mb-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl">
                    {entry.name}

                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {entry.street_address} · {entry.city} · <a
                    href={`tel:${entry.phone_number}`}>{entry.phone_number}</a>
                  </p>

                  <p className="px-2 py-1 inline-block bg-blue-200">
                    {entry.status}
                  </p>

                  <p className="text-gray-700 text-base whitespace-pre-wrap">
                    {entry.hours_of_operation}
                  </p>
                </div>


                {entry.limited_or_special_menu &&
                <div className="px-6 py-4">
                  <p className="pb-2">Limited/Special Menu?</p>
                  {entry.limited_or_special_menu}
                </div>
                }

                {entry.accepting_future_orders === "Yes" &&
                <div className="px-6 py-4">
                  <p className=" ">
                    {/*<svg className="fill-current text-teal-500 inline-block h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">*/}
                    {/*  <path className="heroicon-ui"*/}
                    {/*        d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z"/>*/}
                    {/*</svg>*/}
                    <span className="align-middle">
                        Accepting Future Orders
                      </span>
                  </p>

                  {entry.if_accepting_future_orders_provide_details}
                </div>
                }

                {entry.how_to_order?.length &&
                <div className="px-6 py-2">
                  <p className="pb-2">How to Order</p>
                  {entry.how_to_order?.map((option) =>
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{option}</span>
                  )}
                </div>
                }

                {entry.pickup_options?.length &&
                <div className="px-6 py-2">
                  <p className="pb-2">Pickup Options</p>
                  {entry.pickup_options?.map((option) =>
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{option}</span>
                  )}
                </div>
                }

                {entry.delivery_options?.length &&
                <div className="px-6 py-2">
                  <p className="pb-2">Delivery Options</p>
                  {entry.delivery_options?.map((option) =>
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{option}</span>
                  )}
                </div>
                }

                {entry.selling_gift_cards?.length &&
                <div className="px-6 py-2">
                  <p className="pb-2">Gift Cards Available?</p>
                  {entry.selling_gift_cards?.map((option) =>
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{option}</span>
                  )}
                </div>
                }


                <a href="#">Order Online</a>
                <a href="#">{entry.website}</a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path className="heroicon-ui"
                          d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4z"/>
                  </svg>
                  {entry.phone_number}
                </a>

              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

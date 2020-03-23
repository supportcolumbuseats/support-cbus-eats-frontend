import React from 'react'
import Feature from "./feature";

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {entry: props.entry};
    }

    render() {
        var entry = this.state.entry;
        return (
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
                   <Feature featureName={'Limited/Special Menu?'} featureProperties={entry.limited_or_special_menu} />
                }

                {entry.accepting_future_orders === "Yes" &&
                    <Feature featureName={'Accepting Future Orders'} featureProperties={entry.if_accepting_future_orders_provide_details ? entry.if_accepting_future_orders_provide_details :  entry.accepting_future_orders} />
                }

                {entry.how_to_order?.length &&
                    <Feature featureName={'How to Order'} featureProperties={entry.how_to_order} />
                }

                {entry.pickup_options?.length &&
                    <Feature featureName={'Pickup Options'} featureProperties={entry.pickup_options} />
                }

                {entry.delivery_options?.length &&
                    <Feature featureName={'Delivery Options'} featureProperties={entry.delivery_options} />
                }

                {entry.selling_gift_cards?.length &&
                    <Feature featureName={'Gift Cards Available?'} featureProperties={entry.selling_gift_cards}/>
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
        );
    }
}

export default Restaurant;
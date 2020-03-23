import React from 'react';
import restaurants from './restaurants.json'
import Restaurant from './components/restaurant'
function App() {
  const districts = Array.from(new Set(Object.keys(restaurants).map(f => restaurants[f].district)))
  return (
    <div className="App px-2">
      {districts.map((district, ix) =>
        <div className="mb-10" key={"district_" + ix}>
          <h2 className="px-2 mb-4 text-2xl">{district}</h2>
          <div className="p-2">
            {restaurants.filter((r) => r.district === district).map((entry, ix) =>

              <Restaurant key={district + '_restaurant_' + ix} entry={entry}/>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

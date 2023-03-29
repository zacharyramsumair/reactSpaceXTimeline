
import './App.css'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Launch from './Launch';


function App() {

  const { isLoading, error, data, isFetching } = useQuery(["spaceX"], () =>
    axios.get(
      "https://api.spacexdata.com/v3/launches"
    ).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;


  let checkpointElements = data.map((launch, index:number)=> {
    return <Launch key={index} id={launch.flight_number} year={launch.launch_year} 
     date={launch.launch_date_utc} site={launch.launch_site.site_name}
     missionName={launch.mission_name} rocketName={launch.rocket.rocket_name}  rocketType={launch.rocket.rocket_type} details={launch.details} success={launch.launch_success} tentative={launch.is_tentative} patch={launch.links.mission_patch_small}
    />
  })

  return (
    <main className='app'>
      <h1 className='title'>SpaceX Launch Timeline</h1>
      <div className="timeline">
        {checkpointElements}
      </div>
    </main>
  );

}

export default App

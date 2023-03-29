import moment from 'moment';
import React from 'react'

type Props = {
    id:number,
    year:number,
    date:string,
    site:string,
    missionName:string,
    rocketName:string,
    rocketType:string,
    details:string,
    success:boolean,
    tentative:boolean,
    patch:string,
    
}



const Launch = (props: Props) => {

    // let parsedDate = moment(props.date, "YYYY-MM-DD HH:mm Z")._d; // parsed as 4:30 UTC
    // parsedDate = JSON.stringify(parsedDate).replace("GMT-0400 (Bolivia Time)", "").replaceAll('"', "")

    let parsedDate = moment(props.date).format("MM/DD/YYYY HH:mm Z")
    // console.log(parsedDate)

  return (
    <div className='checkpoint'>
        <div>
        <h2>({props.id}) {props.missionName}</h2>
        <h3>{props.rocketName} ({props.rocketType})</h3>
        <small>{props.site} - {parsedDate}</small>
        {/* {parsedDate} */}
        <p>{props.details}</p>
        </div>
       
    </div>
  )
}

export default Launch
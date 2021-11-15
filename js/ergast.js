async function doAPICall(){
    let year=document.querySelector('#inputvalue2').value
    let r=document.querySelector('#inputvalue').value
    result = await axios.get(`https://ergast.com/api/f1/${year}/${r}/driverStandings.json`)
    .catch((e)=>{console.error(e);alert("Bad Pokemon Name!!!!!")})
        .finally(console.log("API request is Over"))
            
                    console.log(result)
                    console.log(result.data)
                    result = result.data

    


  

  document.querySelector("#first_name").innerHTML=result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
  document.querySelector("#last_name").innerHTML=result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
  document.querySelector("#position").innerHTML=result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
  document.querySelector("#wins").innerHTML=result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].wins.position
  document.querySelector("#dob").innerHTML=result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.dateOfBirth
  document.querySelector("#nationality").innerHTML=result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality
  document.querySelector("#constructor").innerHTML=result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name


}


//         racer_name = f"{racer['Driver']['givenName']} {racer['Driver']['familyName']}"
        
//         racer_dict[racer_name]={
//             'first_name':racer['Driver']['givenName'],
//             'last_name':racer['Driver']['familyName'],
//             'position':racer['position'],
//             'wins':racer['wins'],
//             'DOB':racer['Driver']['dateOfBirth'],
//             'nationality':racer['Driver']['nationality'],
//             'constructor':racer['Constructors'][0]['name'],
//         }
//         new_data.append(racer_dict)
//     return new_data

// get_racer_info(data)
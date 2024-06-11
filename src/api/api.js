
export const FetchMoviesApi = async(movieApi)=>{

    try{
          const res = await fetch(movieApi)
          if(res.ok){
            const data = await res.json();
            console.log(data)
            return data
          }
          else{
            throw new Error("DATA IS NOT FETCHED")
          }

    }
    catch(err)
    {
        console.log("ERROR: ",err)
    }
    
}
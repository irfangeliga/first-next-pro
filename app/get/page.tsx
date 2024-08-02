
import Button from "../components/post/button"
import Card from "../components/post/card"

interface instaValid{
  full_name : string,
  profile_pic_url : string,
}

  const getData = async()=>{
       const response = await fetch('https://instagram-scraper-api2.p.rapidapi.com/v1/likes?code_or_id_or_url=CxYQJO8xuC6',{
        method : 'GET',
        headers : {
          'x-rapidapi-host' : 'instagram-scraper-api2.p.rapidapi.com',
          'x-rapidapi-key' : '7c72b24ceemshaa4c59ae1485f46p1d0d3djsn5efc8fa0ed64'
        }
       })
        const posts = await response.json();
        const myInstaData: instaValid[] = posts.data.items;
       return(
        <>
          <h1>Your in Page POST</h1><br />
          <span></span>
          {
            myInstaData.map((item, index) => {
              return(
                <div key = {index} className="py-5">
                  <Card/>
                    <p  style={{color:'red'}}> {item.full_name}</p>
                    <a target="_blank" href={item.profile_pic_url}><button>image</button></a>
                  <Card/>
                </div>
              )
            })
          }
        </>
      )
  }

export default getData
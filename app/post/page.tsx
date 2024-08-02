import { headers } from "next/headers";
import Button from "../components/post/button"
import Card from "../components/post/card"
import Info from "../components/post/console"

// const baseUrl = "https://car-data.p.rapidapi.com/cars";
// const baseUrl = "https://dummyjson.com/products";
// const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const drinkData = async()=>{
       const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=9U7AQipVi1IZgEjUHePG1fzmWScbPMZA')
        const posts = await response.json();
        const myBook = posts.results.books;
        // console.log(myBook);
       return(
        <>
          <h1>Your in Page POST</h1><br />
          <span></span>
          {
            myBook.map((item, index) => {
              return(
                <div key = {index}>
                  <Card/>
                    <p  style={{color:'red'}}> {item.title}</p>
                  <Card/>
                  <Button/>
                </div>
              )
            })
          }
        </>
      )
  }

export default drinkData

import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books =()=>{

    const [Book , setBook] = useState([ ]);

useEffect(()=>{
fetch('Book.json')
.then(res=> res.json())
.then(data => setBook(data))

} ,[])


    return(
        <div  className="">
            <h2 className=" text-center text-5xl pt-[200px] pb-[36px]">Books</h2>

            <div className="grid grid-cols-3 gap-4 ">
                {
                    Book.map(book =><BookCard book={book}></BookCard>)
                }
            </div>
        </div>
    )
}

export default Books;


import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {

const {book_name,ratings,author,category,book_image,tags} = book;
    return (



        <Link to='/BookDeatails'>
<div className="p-6 border border-lime-100 rounded-lg gap-6">
           
           <div className=" card bg-slate-300 rounded-2xl h-[230] w-[326]">
               <figure><img className="h-[170] w-56 rounded-lg p" src={book_image} alt="Shoes" /></figure>

           </div>
           <div className="pt-6"></div>
           <div class="card-body w-92  pt-6 bg-red-700 rounded-2xl  h-[182] w-[326]">
               <div className="flex gap-10">
                   <h6>{category}</h6>
                   <h6></h6>
               </div>
               
           <h2 class="card-title pb-4">{book_name}</h2>
              <p class="card-title">{author}</p>
        <hr className="pt-6 "></hr>
        <div class=" rounded-2xl">
               <p class="card-title">Fiction</p>
               <p class="flex justify-end  ali"><MdOutlineStarBorderPurple500></MdOutlineStarBorderPurple500>{ratings} </p>
               </div>
           </div>
           
       </div>
        </Link>
      


    )
}

export default BookCard;
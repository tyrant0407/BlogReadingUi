// BookDetail.jsx
import { useParams} from "react-router";
import { MyStore } from "../context/MyContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

export default function BlogPost() {
  const { myBlogs } = useContext(MyStore);
  const navigate = useNavigate();
  const { id } = useParams();

  const blog = myBlogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return <div className="p-8">Book not found</div>;

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      <div className="relative -z-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[40vh] lg:h-[33vw] object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 bg-white bg-opacity-90 rounded-full w-9 h-9 flex items-center justify-center shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 15.293a1 1 0 010-1.414L8.414 10l3.879-3.879a1 1 0 10-1.414-1.414l-4.586 4.586a1 1 0 000 1.414l4.586 4.586a1 1 0 001.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-14px] w-20 h-1.5 bg-gray-300 rounded-full" />
      </div>
      <div className="bg-white p-6 flex-1 rounded-t-[30px] z-1 -mt-8">
        <div className="text-xl font-bold">{blog.title}</div>
        <div className="text-gray-400 mb-4">By {blog.author}</div>
  
        <p className="text-gray-600 text-md">{blog.description}</p>
        <div className="text-gray-600 text-md">{blog.blogDetails}</div>
      </div>
    </div>
  );
}

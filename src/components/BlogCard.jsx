import { useNavigate } from "react-router";


export default function BlogCard({blog}) {
    const navigate = useNavigate();
    return (
      <div onClick={() => navigate(`/blog/${blog.id}`)} className="bg-white rounded-xl shadow-black shadow-2xl w-full h-full flex flex-col lg:flex-row gap-5 items-center p-2 cursor-pointer">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[50vw] h-[50vw] object-cover rounded-lg lg:w-[20vw] lg:h-[20vw] mb-2"
        />
        <div className="text-sm text-gray-90 font-medium line-clamp-2 flex flex-col">
         <h1>{blog.title}</h1>
         <p className="text-xs text-gray-500 hidden lg:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores architecto sequi nihil suscipit aliquid, corporis voluptates repellat inventore esse!</p>
        </div>
      </div>
    );
  }
  
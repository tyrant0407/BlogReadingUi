// BookGrid.jsx
import { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { MyStore } from "../context/MyContext";

export default function BlogGrid() {
    const {myBlogs} = useContext(MyStore)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 p-2">
      {myBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

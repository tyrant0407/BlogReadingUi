import React from "react";
import BottomNav from "../components/BottomNav";
import RecentCard from "../components/RecentCard";
import BlogGrid from "../components/BlogGrid";

const recent = [
  {
    id: 1,
    title: "Ruby's Worry",
    author: "Tom Percival",
    progress: 89,
    color: "bg-yellow-300",
    image:
      "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Bad Beginning",
    author: "Lemony Snicket",
    progress: 31,
    color: "bg-purple-300",
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "A Monster Calls",
    author: "Patrick Ness",
    progress: 15,
    color: "bg-blue-300",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500&auto=format&fit=crop",
  },
];


const Home = () => {
  return (
    <div className=" bg-white h-screen">
      
      <div className="relative w-full bg-white overflow-hidden">
        
        <div className="bg-[#000000] w-full pt-6 px-5 pb-28">
  
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 bg-white/10 rounded-2xl px-4 py-3 backdrop-blur">
                <div className="w-4 h-4 rounded-full bg-white/60" />
                <input
                  placeholder="Search Blogs"
                  className="w-full bg-transparent placeholder:text-white/60 text-white text-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                alt="avatar"
                className="w-full h-full object-image"
              />
            </div>
          </div>

     
          <div className="mt-6">
            <h3 className="text-white/90 text-base font-semibold">Recent</h3>
            <div className="mt-3 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
             
              {recent.map((b, i) => (
                <RecentCard
                  key={b.id}
                  book={b}
                />
              ))}
            </div>
          </div>
        </div>
       

    
        <div className="-mt-10  bg-[#5e5d5d] rounded-t-[28px] p-5">
          <h3 className="text-base font-semibold text-white">My Blogs</h3>
        <BlogGrid />
        </div>
    

        {/* Bottom nav */}
        <div className="px-3 pb-4 hidden">
          <div className="mx-auto w-full bg-white rounded-[22px] border border-gray-200 shadow-sm">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

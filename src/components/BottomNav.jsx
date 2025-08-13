function BottomNav() {
    const Item = ({ label, active = false }) => (
      <div className="flex flex-col items-center gap-1">
        <div
          className={
            "w-8 h-8 rounded-2xl flex items-center justify-center " +
            (active ? "bg-black text-white" : "bg-gray-200 text-gray-700")
          }
        >
          {/* dot icon */}
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
        </div>
        <span
          className={`text-[11px] ${active ? "text-gray-900 font-medium" : "text-gray-500"}`}
        >
          {label}
        </span>
      </div>
    );

    return (
      <div className="flex items-center justify-between px-8 py-3">
        <Item label="Library" active />
        <Item label="Search" />
        <Item label="Profile" />
      </div>
    );
  }
  

  export default BottomNav;
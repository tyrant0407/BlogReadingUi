function ProgressBar({ value }) {
    return (
      <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
        <div
          className="h-full bg-black/80 rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    );
  }
  
  export default ProgressBar;
import ProgressBar from "./ProgressBar";


function RecentCard({ book ,className=''}) {
    return (
      <div
        className={`min-w-[240px] max-w-[240px] rounded-2xl shadow-xl ${book.color} p-3 flex gap-3 items-center ${className}`}
      >
        <div className="w-14 h-20 rounded-xl overflow-hidden shadow">
          <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold leading-tight text-black/90 line-clamp-2">
            {book.title}
          </p>
          <p className="text-xs text-black/60 mt-1">By {book.author}</p>
          <div className="mt-3">
            <ProgressBar value={book.progress} />
            <div className="mt-1 text-[10px] text-black/70 text-right">{book.progress}%</div>
          </div>
        </div>
      </div>
    );
  }

  export default RecentCard;
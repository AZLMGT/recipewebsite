

const Favourite = () => {
  const fav = false
  return (
    <div className="flex-1 bg-slate-50 p-10 min-h-screen">
      <div className=" max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favourite</p>
        {!fav && (
          <div className="flex flex-col gap-4 items-center" >
            <img src="/404.svg" alt="404" className="h-4/5" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourite
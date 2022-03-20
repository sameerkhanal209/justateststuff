function Similarstuff(movie){
    return (  
        <div>
          {movie.movie.map((el,index)=>{
              return (
                <div key={index} className="my-20">
                    <h1 className="text-2xl"><a href={`/movie/${el.id}`}>{index+1} {el['title']}</a></h1>
                    <p>{el.overview}</p>
                </div>
              )
          })}
        </div>
    )
}

  export default Similarstuff
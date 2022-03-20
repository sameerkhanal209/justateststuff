import Head from 'next/head'
//import Listmovies from '../components/Listmovies'

export default function Home({ movies }) {
  return (
    <everything>
      <Head />
      <h1 className="text-2xl text-center">ListMoviesLike</h1>
      
      <ul>
          {movies.results.map((movie, index) => (
            <div className="my-20">
              <li><a className='text-3xl' href={`/movie/${movie.id}`}>{index+1} {movie.title}</a></li>
              <p>{movie.overview}</p>
            </div>
          ))}
        </ul>

    </everything>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=54ea6cbe35cd1b4d1ae6530b1018f74c`)
  const movies = await res.json()
  // Pass data to the page via props
  return { 
      props: {
        movies,
      },
  }
}

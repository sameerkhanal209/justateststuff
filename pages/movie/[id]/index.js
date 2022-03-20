import Head from 'next/head'
import Similarstuff from '../../../components/Similarstuff'

//import Listmovies from '../components/Listmovies'

export default function Movie(props) {
  return (
    <>
      <Head />
      <h1 className="text-4xl text-center">{props.movie.title}</h1>
      
      <div className='text-center'>{props.movie.tagline}</div>
      
      <br />
      <p>{props.movie.overview}</p>
      
      <h1 className="mt-3 text-3xl text-center">{props.recommendations.results.length} Similar Stuff Like {props.movie.title}</h1>

      <ul>
        <Similarstuff movie={props.recommendations.results} />
        </ul>
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=54ea6cbe35cd1b4d1ae6530b1018f74c`)
  const movie = await res.json()

  const res2 = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}/recommendations?api_key=54ea6cbe35cd1b4d1ae6530b1018f74c`)
  const recommendations = await res2.json()
  // Pass data to the page via props
  return { 
      props: {
        movie,
        recommendations,
      },
  }
}
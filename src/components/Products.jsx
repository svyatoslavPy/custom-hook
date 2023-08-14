import {useFetch} from "../hooks/useFetch"

export const Products = () => {
  const {albums, isLoading, error, getAllAlbums} = useFetch('https://jsonplaceholder.typicode.com/albums');

	const refetch = async() => {
		await getAllAlbums();	
	}

  return (
    <>
			<h1>{error ? error : 'Albums'}</h1>
      <h2>{
        isLoading && 'Loading...' 
      }</h2>
      <section className="products">
        {
        albums.length > 0 && !isLoading && albums.map(album => <div key={album.id}> {
          album.title
        } </div>)
      } </section>
    </>
  )
}

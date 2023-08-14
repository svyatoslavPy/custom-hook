import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {
	const [albums, setAlbums] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const getAllAlbums = useCallback(async () => {
		setIsLoading(true);
		
		try {
			const resp = await fetch(url);
			const data = await resp.json();

			if (!resp.ok) {
				throw new Error("Fetch failed");
			}
			setIsLoading(false)
			setAlbums(data);
		} catch (e) {
			setIsLoading(false)
			setError(e.message);
		}
	}, [url]);

	useEffect(() => {
		getAllAlbums();
	}, [getAllAlbums])

	return {albums, getAllAlbums, isLoading, error};

}

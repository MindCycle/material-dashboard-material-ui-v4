import useAuth from 'hooks/useAuth';
import { React, useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
export default function home({ code }) {
	const accessToken = useAuth(code);
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const spotifyApi = new SpotifyWebApi({ clientId: '3ddfab2e7a6942f9945f87edb305e32c' });
	useEffect(() => {
		if (!accessToken) return;
		SpotifyWebApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!search) return setSearchResults([]);
		if (!accessToken) return;

		spotifyApi.searchTracks(search).then((res) => {
			console.log(res);
		});
	}, [search, accessToken]);
	return (
		<Container className='d-flex flex-column py-2' style={{ height: '100vh' }}>
			<Form.Control
				type='search'
				placeholder={'Search Songs/Artists'}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}>
				Songs
			</div>
			<div>Bottom for Player</div>
		</Container>
	);
}

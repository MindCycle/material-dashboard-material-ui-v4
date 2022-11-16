import useAuth from 'hooks/useAuth';
import { React, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
export default function home({ code }) {
	const accessToken = useAuth(code);
	const [search, setSearch] = React.useState('');
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

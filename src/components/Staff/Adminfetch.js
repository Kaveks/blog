import React, { useEffect, useState } from 'react';
import Posts from './posts';
import LoadpostComponent from '../blog/Loadpost';
import axiosInstance from '../../axios';

function AdminFetch() {
	const PostLoading = LoadpostComponent(Posts);
	const [fetchState, setFetchState] = useState({
		loading: true,
		posts: null,
	});
 
	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setFetchState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setFetchState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={fetchState.loading} posts={fetchState.posts} />
		</div>
	);
}
export default AdminFetch;
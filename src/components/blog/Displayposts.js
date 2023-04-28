
import { useState, useEffect} from "react";
import LoadpostComponent from "./Loadpost";
import Posts from "./Posts"
import axiosInstance from '../../axios';


function Displayposts() {
    const PostLoading =LoadpostComponent(Posts)
    const [fetchState,setFetchState] =useState({
        loading:true,
        posts: null,

    })

    useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setFetchState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setFetchState])
    return  (
        <div className="display-data">
            <h2>Latest posts</h2>
            <PostLoading isLoading={fetchState.loading} posts={fetchState.posts}/>
        </div>
    );
}
export default Displayposts;


import { useState, useEffect} from "react";
import LoadpostComponent from "./Loadpost";
import Posts from "./Posts"
import axiosInstance from '../../axios';


function Fetchposts() {
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
  /*   useEffect(()=>{
          setFetchState({loading: true});
        let url=`http://127.0.0.1:8000/api/`;
        fetch(url)
        .then((response)=> response.json())
        .then((posts)=>{
            setFetchState({loading:false, posts: posts})
        });  
    },[setFetchState]) */
    return  (
        <div className="fetch-data">
            <h2>Latest posts</h2>
            <PostLoading isLoading={fetchState.loading} posts={fetchState.posts}/>
        </div>
    );
}
export default Fetchposts;


import { useState, useEffect} from "react";
import Loadpost from "./Loadpost";
import Posts from "./Posts"


function Fetchposts() {
    const PostLoading =Loadpost(Posts)
    const [fetchState,setFetchState] =useState({
        loading: false,
        posts: null,

    })
    useEffect(()=>{
        setFetchState({loading: true});
        let url="http://127.0.0.1:8000/api/";
        fetch(url)
        .then((response)=> response.json())
        .then((posts)=>{
            setFetchState({loading:false, posts: posts})
        });
    },[],)
    return  (
        <div className="fetch-data">
            <h2>Latest posts</h2>
            <PostLoading isLoading={fetchState.loading} posts={fetchState.posts}/>
        </div>
    );
}
export default Fetchposts;

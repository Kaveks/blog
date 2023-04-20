
function Loadpost(Component) {

    return function LoadpostComponent({isLoading,...props}){
        if(!isLoading) return
             <Component {...props} />;
        return(
            <p style={{ fontSize: '25px' }}>Data is Loading......</p>
        );
    };
}
export default Loadpost


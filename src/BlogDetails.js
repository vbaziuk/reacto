import { useParams } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();

    return ( 
        <div className="blog-details">
            <h2>Hi, my name is { id } </h2>
        </div>
     );
}
 
export default BlogDetails;
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>404 Not Found
            <br/>
            {/*Links back to homepage, does not do a complete page reload, that would happen if <a><a/> was used*/}
            <Link to="/">Home</Link>

        </div>
    )
}
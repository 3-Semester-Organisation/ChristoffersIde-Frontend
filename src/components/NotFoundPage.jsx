import { Link } from "react-router-dom";
import Backdrop from "./ui/Backdrop";

export default function NotFoundPage() {
    return (
        <>
        <Backdrop />
        <div>404 Not Found
            <br/>
            {/*Links back to homepage, does not do a complete page reload, that would happen if <a><a/> was used*/}
            <Link to="/">Home</Link>

        </div>
        </>
    )
}
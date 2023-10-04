import Link from "next/link";

const NotFound = () => {

    return ( 
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2> Page can not be found. </h2>
            <p>Go back to <Link href="/home"> Home </Link></p>
        </div>
     );
}
 
export default NotFound;
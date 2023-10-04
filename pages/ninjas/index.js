export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await res.json();

    const paths = data.map(ninja =>{
        return {
            params: {id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
        // paths: [{ }, { }, {params: {id: }} ]
    }
}



const Datails = () => {
    return ( 
        <div>
            <h1>Details Page</h1>

        </div>
     );
}
 
export default Datails;





























// import Link from "next/link";
// import styles from "../../styles/Ninjas.module.css"


// export const getStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();

//     return {
//         props: {ninjas: data }
//     }
// }

// const Ninjas = ({ninjas}) => {
//     return ( 
//         <div>
//             <h1>All Ninjas</h1>
//             {ninjas.map(ninja => 
//                 <Link href={'./ninjas/' + ninja.id} key={ninja.id}>
//                     <h3 className={styles.single}>
//                         <h3>{ninja.name}</h3>
//                     </h3>
//                 </Link>
//             )}
//         </div>
//      );
// }
 
// export default Ninjas;
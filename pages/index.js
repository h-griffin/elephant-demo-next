

import Footer from '../components/Footer';
import Header from '../components/Header';

const url = 'https://elephant-demo.herokuapp.com/api/v1/snacks/'

export default function Home(props) {
  return (
    <>
    <Header />
    <h3>SNACKS NEXT </h3>
    <h1> ! HOME ! </h1>
    <h1>snack:</h1>
    <Footer />
    </>
  )
}

export async function getServerSideProps(context){
    const response = await fetch(url);

    const data = await response.json();


    return{
        props: { //passed to page component as props
            snack: data //json from the fetched url
        }, 
    }
}

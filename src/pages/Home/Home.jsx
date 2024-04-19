import {useLoaderData} from "react-router-dom";
import Phones from "./Phones.jsx";
import {Helmet} from "react-helmet-async";

const Home = () => {
    const phones = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto my-12'>
                <Phones phones={phones}/>
            </div>
        </>
    );
};

export default Home;

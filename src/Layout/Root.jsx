import Header from "../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;

import {useLoaderData} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const Phone = () => {
    const phone = useLoaderData();
    // console.log(phone);
    const {name, price, description, image} = phone;

    return (
        <>
            <Helmet>
                <title>{name} | PhoneHub</title>
            </Helmet>
            <div className="hero min-h-[40vh]">
                <div className="hero-content h-full flex-col lg:flex-row gap-12">
                    <div className='w-1/3 h-full bg-gray-300 flex items-center justify-center rounded-lg'>
                        <img src={image} alt={name}/>
                    </div>
                    <div className='w-2/3'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h4 className="text-3xl font-bold">{price}</h4>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Phone;

import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Phone = ({phone}) => {
    const {id, name, price, description, image} = phone;
    return (
        <div className="card w-full bg-base-100 border shadow-xl">
            <figure className='mt-6'>
                <img src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="card-subtitle">${price}</h4>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/phone/${id}`} className="btn btn-neutral">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

Phone.propTypes = {
    phone: PropTypes.object.isRequired,
}

export default Phone;

import PropTypes from "prop-types";
import Phone from "./Phone.jsx";

const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                phones.map((phone) => <Phone key={phone.id} phone={phone} />)
            }
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.array.isRequired,
}

export default Phones;

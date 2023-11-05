/* eslint-disable react/prop-types */
import Phone from "../../Phone/Phone";



const Phones = ({phones}) => {

  
    return (
        <div className="text-2xl text-center mt-6">
            <h1>Our Phones Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    phones ?.map(phone => <Phone key={phone.id} phone = {phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;
/* eslint-disable react/prop-types */


const FavoritesCard = ({phone}) => {

    const { image, brand_name, phone_name, price } = phone;

    return (
      <div>
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img src={image} />
          </div>
          <h2 className="text-2xl text-red-400 text-center">{brand_name}</h2>
          <div className="p-6">
            <div className="flex justify-between">
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {phone_name}
              </h4>
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {price}$
              </h4>
            </div>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Because it is about motivating the doers. Because I am here to
              follow my dreams and inspire others.
            </p>
          </div>
        </div>
      </div>
    );
};

export default FavoritesCard;
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const Details = () => {

    const [phone, setPhone] = useState({});

    const {id} = useParams();
   
    const phones = useLoaderData();
    

    useEffect(() => {
      const phone = phones.find((phone) => phone.id === id);
      if (phone) {
        setPhone(phone);
      }
    }, [phones, id]);

    console.log(phone)


    return (
        <div>
            <DetailsCard phone = {phone}></DetailsCard>
        </div>
    );
};

export default Details;
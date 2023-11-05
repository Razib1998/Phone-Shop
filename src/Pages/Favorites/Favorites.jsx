import { useEffect, useState } from "react";
import FavoritesCard from "../FavoritesCard/FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState('')
    const [showAll, setShowAll] = useState(false)

    useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

        if(favoriteItems){
            setFavorites(favoriteItems)
        }
        else{
            setNotFound("No data Found")
        }
    },[])

    const handleRemove = ()=>{
        localStorage.clear();
        setFavorites([]);
        setNotFound("No data Found")
    }
    console.log(showAll)

    return (
      <div>
        {notFound ? (
          <p className="text-2xl flex justify-center items-center">
            {notFound}
          </p>
        ) : (
          <div>
            {favorites.length > 0 && (
              <button
                onClick={handleRemove}
                className="btn btn-primary block mx-auto mt-4 mb-4"
              >
                Delete Favorites Item
              </button>
            )}

            <div className="grid grid-cols-2 gap-4">
              {showAll
                ? favorites.map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))
                : favorites
                    .slice(0, 2)
                    .map((phone) => (
                      <FavoritesCard
                        key={phone.id}
                        phone={phone}
                      ></FavoritesCard>
                    ))}
            </div>

            {favorites.length > 2 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className=" mt-6 btn btn-secondary block mx-auto"
              >
                {showAll ? "Show Less" : "Show All"}
              </button>
            )}
          </div>
        )}
      </div>
    );
};

export default Favorites;
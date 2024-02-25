import { useEffect, useState } from "react";
import axios from "axios";
import { Restaurant } from "./restaurantInterface";

const Order: React.FC<{ id: number }> = ({ id: restaurantId }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/restaurants/") // Django api endpoint
      .then((response) =>
        setRestaurants(
          response.data.filter(
            (restaurant: Restaurant) => restaurant.id === restaurantId
          )
        )
      )
      .catch((error) => console.error(error));
  }, []);

  //console.log(restaurants);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <h1>{restaurant.id}</h1>
            {restaurant.food_items.map((food) => (
              <li key={food.id}>{food.name}</li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Order;
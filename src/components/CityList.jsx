/* eslint-disable react/prop-types */

import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Messege from "./Message";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Messege message="Add your frst city" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

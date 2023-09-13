import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDentistStates } from "../Components/utils/global.context";

const Detail = () => {
  const { themeState } = useDentistStates();
  const {id} = useParams();
  const [dentistSelected, setDentistSelected] = useState({});

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentistSelected(data));
  }, []);

  console.log(dentistSelected);
  return (
    <div className={themeState.theme ? "App" : "dark"}>
      <h1>Detail Dentist {dentistSelected.id} </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistSelected.name}</td>
            <td>{dentistSelected.email}</td>
            <td>{dentistSelected.phone}</td>
            <td>{dentistSelected.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;

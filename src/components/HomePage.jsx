import { useEffect, useState } from "react";
import ClientService from "../service/ClientService";
import DataService from "../service/DataService";
import { Link } from "react-router-dom";
import style from "../styles/Home.module.css";

function HomePage() {
  const [client, setClient] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    ListClient();
    ListData();
  }, []);

  const ListClient = () => {
    ClientService.getAllUsers()
      .then((response) => {
        setClient(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ListData = () => {
    DataService.getAllData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      {client.map((client) => (
        <h1 key={client.id} className="text-center">
          Bienvenido {client.name}
        </h1>
      ))}
      <div className="container">
        <h2 className="text-center ">Historial de datos</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Fecha</th>
            <th>Edad</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>Glucosa</th>
            <th>Presion Sistolica</th>
            <th>Presion Diastolica</th>
          </thead>
          <tbody className="text-center">
            {data.map((data) => (
              <tr key={data.id}>
                <td>{data.createDate}</td>
                <td>{data.age}</td>
                <td>{data.weight}</td>
                <td>{data.height}</td>
                <td
                  className={
                    data.glucoseLevel > 100
                      ? style.text_hight
                      : data.glucoseLevel < 50
                      ? style.text_low
                      : style.text_normal
                  }
                >
                  {data.glucoseLevel}
                </td>
                <td
                  className={
                    data.systolicPressure > 100
                      ? style.text_hight
                      : data.bloodPressure < 50
                      ? style.text_low
                      : style.text_normal
                  }
                >
                  {data.systolicPressure}
                </td>
                
                <td>{data.diastolicPressure}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`updatedata/${data.id}`}
                  >
                    Actualizar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/createdata" className="btn btn-primary mb-2">
          Agregar datos
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

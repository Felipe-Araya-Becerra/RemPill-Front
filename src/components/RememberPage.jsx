import { useState, useEffect } from "react";
import RememberService from "../service/RememberService";
import { Link } from "react-router-dom";

function RememberPage() {
  const [rem, setRem] = useState([]);

  useEffect(() => {
    ListRem();
  }, []);

  const ListRem = () => {
    RememberService.getAllRemembers().then((response) => {
      setRem(response.data);
      console.log(response.data);
    });
  };

  const deleteRemember = (remid) => {
    RememberService.deleteRemember(remid).then(() => {
      ListRem();
    });
  };

  return (
    <>
      <div className="container border">
        
          <h2 className="text-center ">Recordatorios</h2>
          <table className="table table-striped table-bordered">
            <thead>
              <th>Titulo</th>
              <th>Recordatorio</th>
              <th>Fecha de creacion</th>
              <th>Alarma</th>
            </thead>
            <tbody>
              {rem.map((rem) => (
                <tr key={rem.id}>
                  <td>{rem.title}</td>
                  <td>{rem.description}</td>
                  <td>{rem.createDate}</td>
                  <td>{rem.alarm}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/updaterem/${rem.id}`}
                    >
                      Actualizar
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteRemember(rem.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link
            to="/createrem"
            className="align-self-end btn btn-primary mb-2 "
          >
            Agregar recordatorio
          </Link>
        
      </div>
    </>
  );
}

export default RememberPage;

import RememberService from "../service/RememberService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function CreateRemember() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [alarm, setAlarm] = useState("");
  const { id } = useParams();

  const SaveOrUpdateRemember = (e) => {
    e.preventDefault();
    const rem = { title, description, createDate, alarm };
    if (id) {
      RememberService.updateRemember(id, rem)
        .then((response) => {
          console.log(response.data);
          navigate("/remember");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      RememberService.createRemember(rem)
        .then((response) => {
          console.log(response.data);
          navigate("/remember");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    RememberService.getRememberById(id)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCreateDate(response.data.createDate);
        setAlarm(response.data.alarm);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Actualizar recordatorio</h2>;
    } else {
      return <h2 className="text-center fw-semibold">Agregar recordatorio</h2>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row" style={{ padding: 7 + "rem" }}>
          <div className="card col-md-6 offset-md-3">
            <h1 className="text-center ">{pageTitle()}</h1>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Titulo: </label>
                  <input
                    type="text"
                    placeholder="Introduzca un titulo"
                    name="title"
                    className="form-control"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Tarea: </label>
                  <input
                    type="text"
                    placeholder="Introduzca una tarea a realizar"
                    name="description"
                    className="form-control"
                    autoComplete="off"
                    required="true"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Fecha de creacion: </label>
                  <input
                    type="datetime-local"
                    placeholder="Introduzca una descripcion"
                    name="description"
                    className="form-control"
                    autoComplete="off"
                    value={createDate}
                    onChange={(e) => setCreateDate(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Alarma: </label>
                  <input
                    type="datetime-local"
                    placeholder="Introduzca una descripcion"
                    name="description"
                    className="form-control"
                    autoComplete="off"
                    value={alarm}
                    onChange={(e) => setAlarm(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={(e) => SaveOrUpdateRemember(e)}
                >
                  Enviar
                </button>
                &nbsp;&nbsp;
                <Link className="btn btn-danger" to="/remember">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRemember;

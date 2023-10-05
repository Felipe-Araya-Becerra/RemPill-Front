import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import DataService from "../service/DataService";

function CreateData() {
  const navigate = useNavigate();
  const [createDate, setCreateDate] = useState()
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [systolicPressure, setSystolicPressure] = useState("");
  const [diastolicPressure, setDiastolicPressure] = useState("");
  const [glucoseLevel, setGlucoseLevel] = useState(0);
  const { id } = useParams();

  const SaveOrUpdateData = (e) => {
    e.preventDefault();
    const data = { createDate ,age, weight, height, systolicPressure,
      diastolicPressure, glucoseLevel };

    if (id) {
      DataService.updateData(id, data).then((response) => {
        console.log(response.data);
        navigate("/");
      });
    } else {
      DataService.createData(data).then((response) => {
        console.log(response.data);
        navigate("/");
      });
    }
  };

  useEffect(() => {
    DataService.getDataById(id).then((response) => {
        setCreateDate(response.data.createDate)
        setAge(response.data.age);
        setWeight(response.data.weight);
        setHeight(response.data.height);
        setGlucoseLevel(response.data.glucoseLevel);
        setSystolicPressure(response.data.bloodPressure);
        setDiastolicPressure(response.data.bloodPressure);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Actualizar datos</h2>;
    } else {
      return <h2 className="text-center fw-semibold">Agregar datos</h2>;
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
                  <label className="form-label">Fecha: </label>
                  <input
                    type="date"
                    placeholder="Introduzca un titulo"
                    name="date"
                    className="form-control"
                    autoComplete="off"
                    value={createDate}
                    onChange={(e) => setCreateDate(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Edad: </label>
                  <input
                    type="text"
                    placeholder="Introduzca un titulo"
                    name="age"
                    className="form-control"
                    autoComplete="off"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Peso: </label>
                  <input
                    type="text"
                    placeholder="Introduzca una descripcion"
                    name="weight"
                    className="form-control"
                    autoComplete="off"
                    required="true"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Altura: </label>
                  <input
                    type="text"
                    placeholder="Introduzca una descripcion"
                    name="height"
                    className="form-control"
                    autoComplete="off"
                    required="true"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Presion sistolica: </label>
                  <input
                    type="text"
                    name="presion"
                    className="form-control"
                    autoComplete="off"
                    required="true"
                    value={systolicPressure}
                    onChange={(e) => setSystolicPressure(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Presion diastolica: </label>
                  <input
                    type="text"
                    placeholder=""
                    name="diastolica"
                    className="form-control"
                    autoComplete="off"
                    required="true"
                    value={diastolicPressure}
                    onChange={(e) => setDiastolicPressure(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Glucosa: </label>
                  <input
                    type="text"
                    placeholder=""
                    name="glucosa"
                    className="form-control"
                    autoComplete="off"
                    required="true"
                    value={glucoseLevel}
                    onChange={(e) => setGlucoseLevel(e.target.value)}
                  />
                </div>
                
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={(e) => SaveOrUpdateData(e)}
                >
                  Enviar
                </button>
                &nbsp;&nbsp;
                <Link className="btn btn-danger" to="/">
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

export default CreateData;

import { useState, useEffect } from "react";
import DataService from "../service/DataService";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function HipertensionModule() {
  const [dateList, setDateList] = useState([]);
  const [systolicPressure, setSystolicPressure] = useState([]);
  const [diastolicPressure, setDiastolicPressure] = useState([]);

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    DataService.getAllData()
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const dates = response.data.map((item) => item.createDate.toString());
          const systolicPressures = response.data.map((item) => item.systolicPressure);
          const diastolicPressures = response.data.map((item) => item.diastolicPressure )

          setDateList(dates);
          setSystolicPressure(systolicPressures);
          setDiastolicPressure(diastolicPressures);
        } else {
          console.error("Los datos de la API no son válidos.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  };

  

  var midata = {
    labels: dateList,
    datasets: [
      {
        label: "Presion Sistolica",
        data: systolicPressure,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Presion Diastonica",
        data: diastolicPressure,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(0, 71, 171)",
        backgroundColor: "rgba(0, 71, 171, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgb(0, 71, 171)",
        pointBackgroundColor: "rgba(0, 71, 171)",
      }
    ],
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-5 mt-5">Grafico de presion arterial</h1>
        <div className="container">
        <Line data={midata}></Line>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="display-4">Consejos para Hipertensión</h1>
        
        <div className="row">
            <div className="col-md-6">
                <h2>Dieta Saludable</h2>
                <p>Una dieta adecuada es fundamental para controlar la hipertensión. Aquí hay algunos consejos:</p>
                <ul>
                    <li>Reduzca la ingesta de sodio (sal).</li>
                    <li>Consuma alimentos ricos en potasio, como plátanos y espinacas.</li>
                    <li>Opte por granos enteros en lugar de harinas refinadas.</li>
                    <li>Limite el consumo de alimentos procesados y ricos en grasas saturadas.</li>
                    <li>Aumente la ingesta de frutas y verduras frescas.</li>
                </ul>
            </div>
            <div className="col-md-6">
                <h2>Ejercicio Regular</h2>
                <p>El ejercicio es importante para mantener una presión arterial saludable. Aquí hay algunas recomendaciones:</p>
                <ul>
                    <li>Realice actividad física moderada durante al menos 30 minutos al día, como caminar, nadar o andar en bicicleta.</li>
                    <li>Consulte a su médico antes de comenzar un nuevo programa de ejercicios.</li>
                    <li>El ejercicio regular puede ayudar a controlar el peso y reducir el estrés.</li>
                </ul>
            </div>
        </div>

        <h2>Mantenga un Registro</h2>
        <p>Llevar un registro de su presión arterial, dieta y actividad física puede ser útil para mantener un control adecuado. Use una aplicación o una libreta para anotar sus datos y compártalos con su médico.</p>

        <h2>Consulte a su Médico</h2>
        <p>Es importante recordar que estos consejos son generales y que cada persona es diferente. Siempre consulte a su médico antes de hacer cambios significativos en su dieta o rutina de ejercicios.</p>
    </div>


      <footer>
        <p>&copy; 2023 RemPill</p>
      </footer>
    </>
  );
}

export default HipertensionModule;

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

function DiabetesModule() {
  const [dateList, setDateList] = useState([]);
  const [glucose, setGlucose] = useState([]);

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    DataService.getAllData()
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const dates = response.data.map((item) => item.createDate.toString());
          const glucoses = response.data.map((item) => item.glucoseLevel);

          setDateList(dates);
          setGlucose(glucoses);
        } else {
          console.error("Los datos de la API no son válidos.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  };

  console.log(dateList);
  console.log(glucose);

  var midata = {
    labels: dateList,
    datasets: [
      {
        label: "Glucosa",
        data: glucose,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-5 mt-5">Grafico de nivel de glucosa</h1>
        <Line data={midata}></Line>
      </div>
      <div className="container mt-5">
        <h1 className="display-4">Consejos para Diabetes</h1>
        
        <div className="row">
            <div className="col-md-6">
                <h2>Control de la Glucosa</h2>
                <p>El control adecuado de la glucosa en sangre es esencial para las personas con diabetes. Aquí hay algunos consejos:</p>
                <ul>
                    <li>Mida regularmente sus niveles de glucosa en sangre según las indicaciones de su médico.</li>
                    <li>Mantenga un registro de sus resultados de glucosa.</li>
                    <li>Siga un plan de alimentación saludable y equilibrado.</li>
                    <li>Administre sus medicamentos o insulina según las recomendaciones de su médico.</li>
                </ul>
            </div>
            <div className="col-md-6">
                <h2>Dieta y Alimentación</h2>
                <p>Una alimentación adecuada es clave en el manejo de la diabetes. Aquí hay algunas recomendaciones:</p>
                <ul>
                    <li>Controle la ingesta de carbohidratos y mantenga estables los niveles de azúcar en sangre.</li>
                    <li>Consuma alimentos ricos en fibra, como frutas, verduras y granos enteros.</li>
                    <li>Evite el exceso de azúcares agregados y alimentos procesados.</li>
                    <li>Planifique las comidas y siga un horario regular.</li>
                </ul>
            </div>
        </div>

        <h2>Ejercicio y Actividad Física</h2>
        <p>El ejercicio regular puede ayudar a controlar la diabetes. Aquí hay algunas recomendaciones:</p>
        <ul>
            <li>Realice actividad física moderada durante al menos 30 minutos al día, como caminar, nadar o andar en bicicleta.</li>
            <li>Consulte a su médico antes de comenzar un nuevo programa de ejercicios.</li>
            <li>Mantenga un registro de sus niveles de glucosa antes y después del ejercicio.</li>
        </ul>

        <h2>Consulte a su Médico</h2>
        <p>Recuerde que estos consejos son generales y que cada persona con diabetes es única. Siempre consulte a su médico o un profesional de la salud especializado en diabetes para recibir orientación personalizada y un plan de tratamiento adecuado.</p>
    </div>
    </>
  );
}

export default DiabetesModule;

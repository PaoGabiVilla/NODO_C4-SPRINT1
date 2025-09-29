import { useState } from "react";
import { motion } from "framer-motion";

const Main = () => {
  const [mostrarNiveles, setMostrarNiveles] = useState(false);

  return (
    <main
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center text-white text-center px-6 py-12"
      style={{ backgroundImage: "url('/Img/Escuela.png')" }}
    >
      {/* Hero */}
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">Bienvenido</h2>
        <p className="text-lg mb-6">
          “Educar con valores, aprender con pasión, construir futuro.”
        </p>

        {/* Botón toggle */}
        <button
          onClick={() => setMostrarNiveles(!mostrarNiveles)}
          className="mt-2 px-6 py-2 bg-blue-600 rounded-lg shadow text-white hover:bg-blue-700"
        >
          {mostrarNiveles ? "Ver menos" : "Ver más"}
        </button>
      </div>

      {/* -------- TARJETAS con motion -------- */}
      {mostrarNiveles && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}   // Estado inicial
          animate={{ opacity: 1, y: 0 }}    // Estado animado
          transition={{ duration: 0.5 }}    // Duración animación
          className="mt-6 w-full max-w-6xl px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjeta 1 */}
            <motion.article
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-gray-800"
            >
              <h4 className="text-xl font-semibold">Nivel Inicial</h4>
              <p className="mt-2 text-gray-600">
                Educación en los primeros años para el desarrollo integral.
              </p>
            </motion.article>

            {/* Tarjeta 2 */}
            <motion.article
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-gray-800"
            >
              <h4 className="text-xl font-semibold">Nivel Primario</h4>
              <p className="mt-2 text-gray-600">
                Formación académica y valores para la infancia.
              </p>
            </motion.article>

            {/* Tarjeta 3 */}
            <motion.article
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-gray-800"
            >
              <h4 className="text-xl font-semibold">Nivel Secundario</h4>
              <p className="mt-2 text-gray-600">
                Preparación académica y personal para el futuro.
              </p>
            </motion.article>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Main;

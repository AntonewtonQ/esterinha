import { useState } from 'react';
import { Cake } from 'lucide-react';
import esterinha from './assets/esterinha.jpg'

function App() {
  const [message, setMessage] = useState("Happy Birthday Esterinha!");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setMessage("Enjoy your day!");
    setShowConfetti(true);

    // Remover confetes após 3 segundos
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm z-10">
        {/* Foto da pessoa */}
        <img
          src={esterinha}
          alt="Foto de Esterinha"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <Cake className="text-purple-500 mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{message}</h1>
        <p className="text-gray-600 mb-4">Wishing you all the best on your special day!</p>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-full shadow hover:bg-purple-600 transition"
          onClick={handleButtonClick}
        >
          Send Wishes
        </button>
      </div>

      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`confetti confetti-${i + 1}`}></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

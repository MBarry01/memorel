import React from 'react';
import { FlameKindling, ArrowRight } from 'lucide-react';
import { Memorial } from '../types/memorial';

interface MemorialCardProps {
  memorial: Memorial;
  onCandleLight: (id: string) => void;
}

export function MemorialCard({ memorial, onCandleLight }: MemorialCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={memorial.imageUrl}
        alt={memorial.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{memorial.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Décédé le {memorial.dateOfPassing}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{memorial.description}</p>
        
        <div className="flex items-center justify-between">
          <button
            onClick={() => onCandleLight(memorial.id)}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
          >
            <FlameKindling className="h-5 w-5" />
            <span>{memorial.candleLights}</span>
          </button>
          
          <button
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
            onClick={() => {
              if (!localStorage.getItem('isSignedUp')) {
                // Redirection vers signUp.html si l'utilisateur n'est pas inscrit
                window.location.href = '/memorel/src/voir_memorel/signUp.html';
              } else {
                // Redirection directe vers l'index ou autre page
                window.location.href = '/memorel/index.html';
              }
            }}
          >
            Voir memorel
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { Sidebar } from './components/Sidebar';
import { MemorialCard } from './components/MemorialCard';
import { Theme, getInitialTheme } from './utils/theme';
import type { Memorial } from './types/memorial';

const MEMORIALS: Memorial[] = [
  {
    id: '1',
    name: 'Marie Laurent',
    dateOfPassing: '15 février 2024',
    description: 'Une âme bienveillante qui a touché tant de vies. Son sourire restera à jamais dans nos cœurs.',
    imageUrl: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b',
    candleLights: 124,
  },
  {
    id: '2',
    name: 'Jean Dupont',
    dateOfPassing: '3 janvier 2024',
    description: 'Un homme extraordinaire qui a consacré sa vie à aider les autres. Son héritage perdure.',
    imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
    candleLights: 89,
  },
  {
    id: '3',
    name: 'Sophie Martin',
    dateOfPassing: '28 décembre 2023',
    description: 'Artiste passionnée et amie fidèle. Elle nous manque chaque jour.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    candleLights: 156,
  },
  {
    id: '4',
    name: 'Area Kabanguilé',
    dateOfPassing: '12 novembre 2023',
    description: 'Un modèle de gentillesse et de générosité. Sa mémoire vit dans nos cœurs.',
    imageUrl: 'https://images.unsplash.com/photo-1551693886-e05efa0d1216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMXx8fGVufDB8fHx8fA%3D%3D',
    candleLights: 72,
  },
  {
    id: '5',
    name: 'Ridouane Amara',
    dateOfPassing: '8 octobre 2023',
    description: 'Un esprit brillant et un ami cher. Son absence laisse un vide immense.',
    imageUrl: 'https://images.unsplash.com/photo-1629310054224-7bfc3c16d17e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    candleLights: 95,
  },
  {
    id: '6',
    name: 'Leopold Sédar Senghor',
    dateOfPassing: '31 décembre 1980',
    description: 'Toujours pleine de vie et de sagesse. Elle reste à jamais dans nos pensées.',
    imageUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/02/25ba793f-942b-4655-b008-fcdc0faffe7e/1200x680_reencodedfatimage_reencodedfatimage-gettyimages-956703136-1.jpg',
    candleLights: 143,
  },
];


function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [memorials, setMemorials] = useState<Memorial[]>(MEMORIALS);
  const [loading, setLoading] = useState(true); // État pour gérer le temps de chargement

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);

    // Simuler le délai de chargement de 3 secondes avant d'afficher la page principale
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Délai de 3 secondes

    return () => clearTimeout(timer); // Nettoyer le timer
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleCandleLight = (id: string) => {
    setMemorials(memorials.map(memorial =>
      memorial.id === id
        ? { ...memorial, candleLights: memorial.candleLights + 1 }
        : memorial
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <Carousel />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar />
          
          <main className="flex-1">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Mémoriaux récents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memorials.map(memorial => (
                <MemorialCard
                  key={memorial.id}
                  memorial={memorial}
                  onCandleLight={handleCandleLight}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

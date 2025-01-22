import React from 'react';
import { Calendar, Users, Heart, Info } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block p-4 border-r dark:border-gray-700">
      <nav className="space-y-4">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Navigation</h2>
        
        <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-gray-300">
          <Calendar className="h-5 w-5" />
          <span>Événements récents</span>
        </a>
        
        <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-gray-300">
          <Users className="h-5 w-5" />
          <span>Communauté</span>
        </a>
        
        <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-gray-300">
          <Heart className="h-5 w-5" />
          <span>Hommages</span>
        </a>
        
        <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-gray-300">
          <Info className="h-5 w-5" />
          <span>À propos</span>
        </a>
      </nav>
    </aside>
  );
}
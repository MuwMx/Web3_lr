import React from 'react';
import { TeamType } from '../types/TeamType';

interface TeamCardProps {
  team: TeamType;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div 
      className="bg-green-800 text-white p-6 rounded-lg shadow-lg relative w-full max-w-sm"
      style={{ minHeight: '180px' }}
    >
      <h2 className="text-xl font-bold mb-1">{team.name}</h2>
      <p className="text-green-200 mb-4">{team.league}</p>
      
      <div className="absolute bottom-3 right-3 text-sm font-semibold">
        {team.playersCount} гравців
      </div>
      
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
        Деталі
      </button>
    </div>
  );
};

export default TeamCard;
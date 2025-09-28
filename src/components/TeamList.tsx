import React from 'react';
import TeamCard from './TeamCard';
import { TeamType } from '../types/TeamType';

interface TeamListProps {
  teams: TeamType[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
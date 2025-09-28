'use client';

import React, { useState } from 'react';
import TeamCard from '../components/TeamCard';
import TeamList from '../components/TeamList';
import { TeamType } from '../types/TeamType';

const sampleTeams: TeamType[] = [
  { id: 1, name: "Динамо Київ", league: "УПЛ", playersCount: 28 },
  { id: 2, name: "Шахтар", league: "УПЛ", playersCount: 30 },
  { id: 3, name: "Манчестер Сіті", league: "Прем’єр-ліга", playersCount: 32 },
  { id: 4, name: "Барселона", league: "Ла Ліга", playersCount: 29 },
  { id: 5, name: "Баварія", league: "Бундесліга", playersCount: 31 },
];

export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState<TeamType>(sampleTeams[0]);

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Списки команд</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Список команд</h2>
        <TeamList teams={sampleTeams} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Динамічна плитка</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {sampleTeams.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              {team.name}
            </button>
          ))}
        </div>
        <TeamCard team={selectedTeam} />
      </section>
    </main>
  );
}
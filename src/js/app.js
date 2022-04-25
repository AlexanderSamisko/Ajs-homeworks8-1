import Team from './Team';

const myTeam = new Team();
const characters = [
  {
    name: 'Charlie',
    occupation: 'Sorcerer',
  },
  {
    name: 'Mindi',
    occupation: 'Dancer',
  },
  {
    name: 'Osho',
    occupation: 'Monk',
  },
];

myTeam.addAll(...characters);
console.log(myTeam.members);

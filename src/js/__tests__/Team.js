import Team from '../Team';

test('testing whether addition to the Team goes smoothly', () => {
  const myTeam = new Team();
  const Charlie = {
    name: 'Charlie',
    occupation: 'Sorcerer',
  };
  myTeam.add(Charlie);
  expect(myTeam.members.has(Charlie)).toBe(true);
});

test('testing whether addition to the Team is not allowing add same character more than once', () => {
  const myTeam = new Team();
  const Charlie = {
    name: 'Charlie',
    occupation: 'Sorcerer',
  };
  myTeam.add(Charlie);
  expect(() => {
    myTeam.add(Charlie);
  }).toThrow('Этот персонаж уже в команде!');
});

test('testing whether addition to the team a banch of characters in one go can be done', () => {
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
  const myTeamArray = [...myTeam.members];
  expect(myTeamArray).toEqual([
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
  ]);
});

test('testing whether addition to the team a banch of characters with two same ones can be done without any duplicates', () => {
  const myTeam = new Team();
  const Charlie = {
    name: 'Charlie',
    occupation: 'Sorcerer',
  };
  const Mindi = {
    name: 'Mindi',
    occupation: 'Dancer',
  };
  const characters = [Charlie, Mindi, Charlie];

  myTeam.addAll(...characters);
  const myTeamArray = [...myTeam.members];
  expect(myTeamArray).toEqual([
    Charlie,
    Mindi,
  ]);
});

test('testing whether Team.members might be expose like an Array via Team.toArray()', () => {
  const myTeam = new Team();
  const Charlie = {
    name: 'Charlie',
    occupation: 'Sorcerer',
  };
  const Mindi = {
    name: 'Mindi',
    occupation: 'Dancer',
  };
  const Osho = {
    name: 'Osho',
    occupation: 'Monk',
  };
  const characters = [Charlie, Mindi, Osho];

  myTeam.addAll(...characters);
  const myTeamArray = myTeam.toArray();
  expect(myTeamArray).toEqual([
    Charlie,
    Mindi,
    Osho,
  ]);
});

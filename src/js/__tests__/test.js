import Person from '../person';
import Team from '../team';

test('Существуют классы "Person" и "Team"', () => {
  expect(Person).toBeDefined();
  expect(Team).toBeDefined();
});

test('Порядок свойств "Person"', () => {
  const expected = [
    'name',
    'type',
    'health',
    'level',
    'attack',
    'defence',
  ];
  expect(Object.keys(new Person('person'))).toEqual(expected);
});

const team = new Team();

test('класс "Team" имеет свойство "members"', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

team.members.add(new Person('person'));

test('Итерация "Team"', () => {
  const result = () => [...team];
  expect(result).not.toThrow();
  expect(result()).toEqual([...team.members]);
});
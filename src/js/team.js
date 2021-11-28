import Person from './person';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    return this.members[Symbol.iterator]();
  }
}

const team = new Team();

team.members.add(new Person('person'));

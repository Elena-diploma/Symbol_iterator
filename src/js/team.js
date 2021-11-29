import Person from './person';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    let currentTeam = 0;
    const teamIterators = [...this.members.values()];
    return {
      next() {
        if (currentTeam < teamIterators.length) {
          return {
            done: false,
            value: teamIterators[currentTeam++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

const team = new Team();

team.members.add(new Person('person'));

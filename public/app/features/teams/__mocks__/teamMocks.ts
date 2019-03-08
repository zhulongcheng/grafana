import { Team, TeamGroup, TeamMember, TeamPermissionLevel } from 'app/types';

export const getMultipleMockTeams = (numberOfTeams: number): Team[] => {
  const teams: Team[] = [];
  for (let i = 1; i <= numberOfTeams; i++) {
    teams.push({
      id: i,
      name: `test-${i}`,
      avatarUrl: 'some/url/',
      email: `test-${i}@test.com`,
      memberCount: i,
    });
  }

  return teams;
};

export const getMockTeam = (): Team => {
  return {
    id: 1,
    name: 'test',
    avatarUrl: 'some/url/',
    email: 'test@test.com',
    memberCount: 1,
  };
};

export const getMockTeamMembers = (amount: number): TeamMember[] => {
  const teamMembers: TeamMember[] = [];

  for (let i = 1; i <= amount; i++) {
    teamMembers.push({
      userId: i,
      teamId: 1,
      avatarUrl: 'some/url/',
      email: 'test@test.com',
      login: `testUser-${i}`,
      labels: ['label 1', 'label 2'],
      permission: TeamPermissionLevel.Member,
    });
  }

  return teamMembers;
};

export const getMockTeamMember = (): TeamMember => {
  return {
    userId: 1,
    teamId: 1,
    avatarUrl: 'some/url/',
    email: 'test@test.com',
    login: 'testUser',
    labels: [],
    permission: TeamPermissionLevel.Member,
  };
};

export const getMockTeamGroups = (amount: number): TeamGroup[] => {
  const groups: TeamGroup[] = [];

  for (let i = 1; i <= amount; i++) {
    groups.push({
      groupId: `group-${i}`,
      teamId: 1,
    });
  }

  return groups;
};

// 2023.12.08
// [PCCP 기출문제] 1번 / 붕대 감기
// https://school.programmers.co.kr/learn/courses/30/lessons/250137

const bandage = [3, 2, 7];
const health = 20;
const attacks = [
  [1, 15],
  [5, 16],
  [8, 6],
];

function solution(bandage, health, attacks) {
  const castingTime = bandage[0];
  const amountOfRecovery = bandage[1];
  const amountOfAdditionalRecovery = bandage[2];

  const attackTimes = attacks.map((attackInfo) => attackInfo[0]);
  const lastAttackTime = attacks[attacks.length - 1][0];

  var currentHealth = health;
  var recoveryCount = 0;
  for (i = 1; i <= lastAttackTime; i++) {
    // case 1. 회복중 공격 받은 경우.
    if (attackTimes.includes(i)) {
      const damage = attacks.find((attack) => attack[0] === i)[1];
      currentHealth -= damage;
      recoveryCount = 0;

      if (currentHealth <= 0) {
        currentHealth = -1;
        break;
      }
      continue;
    }

    // case 2. 회복에 성공한 경우.
    ++recoveryCount;
    currentHealth += amountOfRecovery;

    // case 2-1. 연속 회복에 성공한 경우.
    if (recoveryCount === castingTime) {
      currentHealth += amountOfAdditionalRecovery;
      recoveryCount = 0;
    }

    // case 2-2. 최대 체력을 초과한 경우.
    if (currentHealth > health) {
      currentHealth = health;
    }
  }

  return currentHealth < 0 ? -1 : currentHealth;
}

solution(bandage, health, attacks);

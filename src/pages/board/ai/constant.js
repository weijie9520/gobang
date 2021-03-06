/**
 *
 * 用于估分值
 *
 * ※※ 进攻和防守都是将要达到的状态，而非现有的状态
 * ※※ 当前已进攻为主，防守为辅助
 *
 *
 * 我方成五   : 10000000
 * 敌方成五   : 4999999
 * 我方成四二 : 1000000
 * 敌方成四二 : 499999
 * 我方成四一 : 100000
 * 敌方成四一 : 49999
 * 我方成三二 : 100000
 * 敌方成三二 : 49999
 * 我方成三一 : 10000
 * 敌方成三一 : 4999
 * 我方成二二 : 10000
 * 敌方成二二 : 4999
 * 我方成二一 : 1000
 * 敌方成二一 : 499
 * 我方成一二 : 1000
 * 敌方成一二 : 49
 * 我方成一一 : 100
 * 敌方成一一 : 49
 */

export const scoreMap = {
  // 进攻
  attack_1_1: 1,
  attack_1_2: 10,
  attack_2_1: 10,
  attack_2_2: 100,
  attack_3_1: 100,
  attack_3_2: 1000,
  attack_4_1: 1000,
  attack_4_2: 10000,
  attack_5: 500000,

  // // 防守
  // // guard_1_1: 49,
  // // guard_1_2: 499,
  // // guard_2_1: 499,
  // guard_1_1: 0,
  // guard_1_2: 0,
  // guard_2_1: 0,
  // guard_2_2: 100,
  // guard_3_1: 100,
  // // 双 三二 >
  // guard_3_2: 1000,
  // guard_4_1: 1000,
  // guard_4_2: 10000,
  // guard_5: 500000,
};

export const attack = 'attack';
export const guard = 'guard';
export const empty = 0;
export const hum = 1;
export const compute = 2;

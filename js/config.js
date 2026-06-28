// ==========================================================================
// Fantagy Trooper - Game Configuration Data
// ==========================================================================

export const TILE_SIZE = 24; // grid size for exploration map

export const ELEMENT_RELATIONSHIPS = {
  FIRE: { WIND: 1.5, WATER: 0.5 },
  WATER: { FIRE: 1.5, EARTH: 0.5 },
  WIND: { EARTH: 1.5, FIRE: 0.5 },
  EARTH: { WATER: 1.5, WIND: 0.5 },
  LIGHT: { DARK: 1.5 },
  DARK: { LIGHT: 1.5 }
};

// Character Classes & Promotion Paths
export const CLASSES = {
  // --- WARRIOR SYSTEM ---
  WARRIOR_1: {
    name: '戦士',
    tier: 1,
    color: '#ff4444',
    rangeType: '近接',
    description: '高いHPと防御力を持ち、敵を引きつける盾役となる前衛職。',
    baseHP: 240, baseMP: 10, baseATK: 26, baseDEF: 20, baseSPD: 5, baseINT: 2,
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 5, skill: 'guard' },
      { level: 8, skill: 'shield_bash' },
      { level: 12, skill: 'provoke' }
    ],
    promotion: { next: 'WARRIOR_2', level: 24, cost: 200 }
  },
  WARRIOR_2: {
    name: '騎士',
    tier: 2,
    color: '#ff2222',
    rangeType: '近接',
    description: '防御力を更に高め、強力な火属性攻撃も放つ攻防一体の騎士。',
    baseHP: 300, baseMP: 15, baseATK: 36, baseDEF: 30, baseSPD: 6, baseINT: 3,
    skillTree: [
      { level: 15, skill: 'iron_wall' },
      { level: 20, skill: 'flame_slash' },
      { level: 24, skill: 'fire_shield' },
      { level: 28, skill: 'berserk' }
    ],
    promotion: { next: 'WARRIOR_3', level: 40, cost: 500 }
  },
  WARRIOR_3: {
    name: 'パラディン',
    tier: 3,
    color: '#ff0000',
    rangeType: '近接',
    description: '無敵シールドと聖なる光 of 陣で味方を守り抜く最強の聖騎士。',
    baseHP: 480, baseMP: 20, baseATK: 60, baseDEF: 52, baseSPD: 7, baseINT: 4,
    skillTree: [
      { level: 30, skill: 'holy_shield' },
      { level: 32, skill: 'justice_blade' },
      { level: 35, skill: 'holy_cross' },
      { level: 38, skill: 'divine_aura' }
    ],
    promotion: null
  },

  // --- MAGE SYSTEM ---
  MAGE_1: {
    name: '魔法使い',
    tier: 1,
    color: '#3399ff',
    rangeType: '間接',
    description: '遠距離から魔法弾や強力な火球を放つ基本の魔法アタッカー。',
    baseHP: 90, baseMP: 80, baseATK: 6, baseDEF: 5, baseSPD: 6, baseINT: 28,
    skillTree: [
      { level: 1, skill: 'magic_missile' },
      { level: 6, skill: 'fire_ball' },
      { level: 9, skill: 'thunder_bolt' },
      { level: 12, skill: 'mana_burn' }
    ],
    promotion: { next: 'MAGE_2', level: 24, cost: 200 }
  },
  MAGE_2: {
    name: '魔導士',
    tier: 2,
    color: '#2277ff',
    rangeType: '間接',
    description: '敵を氷結させて足止めし、広範囲の炎嵐で一掃する魔導士。',
    baseHP: 100, baseMP: 160, baseATK: 8, baseDEF: 6, baseSPD: 7, baseINT: 45,
    skillTree: [
      { level: 15, skill: 'fire_storm' },
      { level: 20, skill: 'ice_spear' },
      { level: 24, skill: 'freeze_touch' },
      { level: 28, skill: 'nova_burst' }
    ],
    promotion: { next: 'MAGE_3', level: 40, cost: 500 }
  },
  MAGE_3: {
    name: '賢者',
    tier: 3,
    color: '#0055ff',
    rangeType: '間接',
    description: '隕石や猛吹雪などの大魔法を使いこなし、敵全体を壊滅させる賢者。',
    baseHP: 150, baseMP: 300, baseATK: 12, baseDEF: 9, baseSPD: 8, baseINT: 85,
    skillTree: [
      { level: 30, skill: 'meteor' },
      { level: 32, skill: 'space_distortion' },
      { level: 35, skill: 'blizzard' },
      { level: 38, skill: 'abyss_fall' }
    ],
    promotion: null
  },

  // --- PRIEST SYSTEM ---
  PRIEST_1: {
    name: '僧侶',
    tier: 1,
    color: '#ffcc00',
    rangeType: '間接',
    description: '味方のHP回復やバリア付与を行い、生存率を高めるヒーラー。',
    baseHP: 120, baseMP: 60, baseATK: 8, baseDEF: 12, baseSPD: 5, baseINT: 20,
    skillTree: [
      { level: 1, skill: 'heal' },
      { level: 5, skill: 'barrier' },
      { level: 8, skill: 'blessing' },
      { level: 12, skill: 'holy_bolt' }
    ],
    promotion: { next: 'PRIEST_2', level: 24, cost: 200 }
  },
  PRIEST_2: {
    name: '司祭',
    tier: 2,
    color: '#e6b800',
    rangeType: '間接',
    description: '全体ヒールやデバフ解除に優れ、パーティの立て直しが得意な司祭。',
    baseHP: 140, baseMP: 110, baseATK: 10, baseDEF: 16, baseSPD: 6, baseINT: 30,
    skillTree: [
      { level: 15, skill: 'group_heal' },
      { level: 20, skill: 'purify' },
      { level: 24, skill: 'hallowed_ground' },
      { level: 28, skill: 'silence_seal' }
    ],
    promotion: { next: 'PRIEST_3', level: 40, cost: 500 }
  },
  PRIEST_3: {
    name: '教皇',
    tier: 3,
    color: '#cc9900',
    rangeType: '間接',
    description: '倒れた味方を蘇生し、神聖な魔力で敵を攻撃することもできる教皇。',
    baseHP: 220, baseMP: 220, baseATK: 15, baseDEF: 28, baseSPD: 7, baseINT: 55,
    skillTree: [
      { level: 30, skill: 'resurrection' },
      { level: 32, skill: 'miracle_light' },
      { level: 35, skill: 'divine_wrath' },
      { level: 38, skill: 'judgement' }
    ],
    promotion: null
  },

  // --- THIEF SYSTEM ---
  THIEF_1: {
    name: '盗賊',
    tier: 1,
    color: '#33cc66',
    rangeType: '近接',
    description: '素早い身のこなしで攻撃し、敵からゴールドを盗み取る軽戦士。',
    baseHP: 110, baseMP: 15, baseATK: 20, baseDEF: 7, baseSPD: 18, baseINT: 4,
    skillTree: [
      { level: 1, skill: 'steal' },
      { level: 5, skill: 'poison_dagger' },
      { level: 8, skill: 'double_strike' },
      { level: 12, skill: 'agility_boost' }
    ],
    promotion: { next: 'THIEF_2', level: 24, cost: 200 }
  },
  THIEF_2: {
    name: 'アサシン',
    tier: 2,
    color: '#22aa55',
    rangeType: '近接',
    description: '瞬時に背後に回り込み、高火力の暗殺術を叩き込むアサシン。',
    baseHP: 120, baseMP: 25, baseATK: 30, baseDEF: 9, baseSPD: 28, baseINT: 6,
    skillTree: [
      { level: 15, skill: 'shadow_step' },
      { level: 20, skill: 'assassinate' },
      { level: 24, skill: 'throat_cut' },
      { level: 28, skill: 'deadly_poison' }
    ],
    promotion: { next: 'THIEF_3', level: 40, cost: 500 }
  },
  THIEF_3: {
    name: '忍者',
    tier: 3,
    color: '#118844',
    rangeType: '近接',
    description: '分身攻撃や煙幕などの忍術を使い、トリッキーに立ち回る忍者。',
    baseHP: 200, baseMP: 40, baseATK: 50, baseDEF: 15, baseSPD: 50, baseINT: 8,
    skillTree: [
      { level: 30, skill: 'phantom_blade' },
      { level: 32, skill: 'ninjutsu_fire' },
      { level: 35, skill: 'smoke_bomb' },
      { level: 38, skill: 'blade_dance' }
    ],
    promotion: null
  },

  // --- ARCHER SYSTEM ---
  ARCHER_1: {
    name: 'アーチャー',
    tier: 1,
    color: '#ff8800',
    rangeType: '間接',
    description: '長い射程から矢の雨を降らせ、高い敏捷性で手数多く攻撃する弓兵。',
    baseHP: 120, baseMP: 15, baseATK: 22, baseDEF: 8, baseSPD: 12, baseINT: 4,
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 6, skill: 'rain_arrow' },
      { level: 9, skill: 'double_shot' },
      { level: 12, skill: 'focus_aim' }
    ],
    promotion: { next: 'ARCHER_2', level: 24, cost: 200 }
  },
  ARCHER_2: {
    name: 'スナイパー',
    tier: 2,
    color: '#dd7700',
    rangeType: '間接',
    description: '必殺の狙撃を行い、自動攻撃する設置砲台を設置して戦うスナイパー。',
    baseHP: 130, baseMP: 30, baseATK: 32, baseDEF: 10, baseSPD: 18, baseINT: 6,
    skillTree: [
      { level: 15, skill: 'gale_shot' },
      { level: 20, skill: 'summon_turret' },
      { level: 24, skill: 'piercing_shot' },
      { level: 28, skill: 'explosive_trap' }
    ],
    promotion: { next: 'ARCHER_3', level: 40, cost: 500 }
  },
  ARCHER_3: {
    name: '神射手',
    tier: 3,
    color: '#bb6600',
    rangeType: '間接',
    description: '嵐のような連射力と、相手を仕留める幻影の矢を放つ伝説の射手。',
    baseHP: 210, baseMP: 50, baseATK: 52, baseDEF: 18, baseSPD: 28, baseINT: 10,
    skillTree: [
      { level: 30, skill: 'storm_volley' },
      { level: 32, skill: 'heaven_arrow' },
      { level: 35, skill: 'phantom_arrow' },
      { level: 38, skill: 'wind_dance' }
    ],
    promotion: null
  },

  // --- SUMMONER SYSTEM ---
  SUMMONER_1: {
    name: 'サマナー',
    tier: 1,
    color: '#9933ff',
    rangeType: '間接',
    description: '忠実な召喚獣を呼び出し、敵を魅了して一時的に味方にするサマナー。',
    baseHP: 110, baseMP: 65, baseATK: 10, baseDEF: 8, baseSPD: 6, baseINT: 18,
    skillTree: [
      { level: 1, skill: 'summon_ally' },
      { level: 5, skill: 'charm_enemy' },
      { level: 8, skill: 'summon_fairy' },
      { level: 12, skill: 'soul_link' }
    ],
    promotion: { next: 'SUMMONER_2', level: 24, cost: 200 }
  },
  SUMMONER_2: {
    name: '幻術士',
    tier: 2,
    color: '#8822ee',
    rangeType: '間接',
    description: '強固な岩石ゴーレムを盾として召喚し、闇の波動で攻撃する幻術士。',
    baseHP: 120, baseMP: 120, baseATK: 12, baseDEF: 10, baseSPD: 7, baseINT: 32,
    skillTree: [
      { level: 15, skill: 'summon_golem' },
      { level: 20, skill: 'dark_pulse' },
      { level: 24, skill: 'summon_specter' },
      { level: 28, skill: 'illusion_fear' }
    ],
    promotion: { next: 'SUMMONER_3', level: 40, cost: 500 }
  },
  SUMMONER_3: {
    name: '大召喚士',
    tier: 3,
    color: '#7711dd',
    rangeType: '間接',
    description: '最強のドラゴンを従え、終末の禁呪魔法を呼び起こす大召喚士。',
    baseHP: 190, baseMP: 220, baseATK: 20, baseDEF: 16, baseSPD: 9, baseINT: 60,
    skillTree: [
      { level: 30, skill: 'summon_dragon' },
      { level: 32, skill: 'summon_phoenix' },
      { level: 35, skill: 'apocalypse' },
      { level: 38, skill: 'soul_sacrifice' }
    ],
    promotion: null
  }
};

// Skill database with detailed visual / game properties
export const SKILLS = {
  // --- Active Skills ---
  smash: {
    name: 'スマッシュ', type: 'active', mpCost: 5, cooldown: 3000,
    range: 40, aoe: 20, power: 2.2, effectType: 'melee_hit', scaling: 'str',
    description: '単体に大ダメージとノックバックを与える近接攻撃 (STR依存)', color: '#ff5555'
  },
  guard: {
    name: '防御挑発', type: 'active', mpCost: 8, cooldown: 6000,
    range: 0, aoe: 80, power: 0, effectType: 'buff_def', scaling: 'int',
    effect: { stat: 'def', value: 1.5, duration: 4000 },
    description: '4秒間、周囲の味方の防御力を50%上昇させる (INT依存)', color: '#55aaff'
  },
  iron_wall: {
    name: '鉄壁の陣', type: 'active', mpCost: 15, cooldown: 12000,
    range: 0, aoe: 120, power: 0, effectType: 'buff_def_all', scaling: 'int',
    effect: { stat: 'def', value: 2.0, duration: 6000 },
    description: '6秒間、味方全体の防御力を100%上昇させる (INT依存)', color: '#2277ff'
  },
  flame_slash: {
    name: '火炎斬', type: 'active', mpCost: 12, cooldown: 5000,
    range: 60, aoe: 35, power: 2.5, effectType: 'flame_slash', scaling: 'str',
    debuff: { type: 'burn', chance: 0.5, duration: 5000, damage: 15 },
    description: '前方へ火炎の斬撃を放ち、確率で火傷を付与する (STR依存)', color: '#ff7700'
  },
  holy_shield: {
    name: 'ディバインシールド', type: 'active', mpCost: 20, cooldown: 15000,
    range: 0, aoe: 0, power: 0, effectType: 'shield', scaling: 'int',
    effect: { stat: 'invincible', duration: 4000 },
    description: '4秒間、自身を無敵状態にする (INT依存)', color: '#ffffaa'
  },
  holy_cross: {
    name: 'ホーリークロス', type: 'active', mpCost: 25, cooldown: 8000,
    range: 80, aoe: 60, power: 3.5, effectType: 'holy_hit', scaling: 'int',
    description: '聖なる十字架の光で範囲内の敵を焼き尽くす (INT依存)', color: '#ffee88'
  },

  magic_missile: {
    name: '魔弾', type: 'active', mpCost: 6, cooldown: 2000,
    range: 150, aoe: 10, power: 1.5, effectType: 'missile', scaling: 'int',
    description: '遠距離の敵へ魔法の弾を放つ (INT依存)', color: '#8888ff'
  },
  fire_ball: {
    name: 'ファイアボール', type: 'active', mpCost: 12, cooldown: 4000,
    range: 160, aoe: 40, power: 2.0, effectType: 'fire_hit', scaling: 'int',
    debuff: { type: 'burn', chance: 0.8, duration: 6000, damage: 20 },
    description: '着弾時に爆発する火炎弾。敵を火傷状態にする (INT依存)', color: '#ff6622'
  },
  fire_storm: {
    name: 'ファイアストーム', type: 'active', mpCost: 24, cooldown: 9000,
    range: 140, aoe: 80, power: 2.8, effectType: 'fire_storm', scaling: 'int',
    debuff: { type: 'burn', chance: 0.9, duration: 6000, damage: 25 },
    description: '広範囲に炎の嵐を呼び起こし、大ダメージと火傷を与える (INT依存)', color: '#ff3300'
  },
  ice_spear: {
    name: '氷槍', type: 'active', mpCost: 16, cooldown: 5000,
    range: 180, aoe: 15, power: 2.2, effectType: 'ice_spear', scaling: 'int',
    pierce: true,
    debuff: { type: 'freeze', chance: 0.4, duration: 3000 },
    description: '一直線に貫く氷の槍。確率で敵を氷結（行動不能）にする (INT依存)', color: '#33ccff'
  },
  meteor: {
    name: 'メテオレイン', type: 'active', mpCost: 45, cooldown: 16000,
    range: 180, aoe: 150, power: 5.0, effectType: 'meteor', scaling: 'int',
    description: '宇宙から巨大な隕石を落とし、壊滅的な全体範囲ダメージを与える (INT依存)', color: '#ff2200'
  },
  blizzard: {
    name: 'ブリザード', type: 'active', mpCost: 35, cooldown: 12000,
    range: 150, aoe: 120, power: 3.5, effectType: 'ice_storm', scaling: 'int',
    debuff: { type: 'freeze', chance: 0.6, duration: 4000 },
    description: '猛烈な吹雪で広範囲の敵に持続ダメージと氷結を付与する (INT依存)', color: '#66eeff'
  },

  heal: {
    name: 'ヒール', type: 'active', mpCost: 24, cooldown: 12000,
    range: 120, aoe: 0, power: -2.0, effectType: 'heal_single', scaling: 'int',
    description: '最もHPが減っている味方1体のHPを回復する (INT依存)', color: '#33ff88'
  },
  barrier: {
    name: 'プロテクション', type: 'active', mpCost: 10, cooldown: 8000,
    range: 0, aoe: 80, power: 0, effectType: 'buff_def', scaling: 'int',
    effect: { stat: 'def', value: 1.4, duration: 5000 },
    description: '周囲の味方に5秒間被ダメージを軽減する結界を張る (INT依存)', color: '#ffffdd'
  },
  group_heal: {
    name: 'エリアヒール', type: 'active', mpCost: 24, cooldown: 20000,
    range: 0, aoe: 120, power: -1.8, effectType: 'heal_all', scaling: 'int',
    description: '周囲の味方全員 of HPを中回復する (INT依存)', color: '#66ffa3'
  },
  purify: {
    name: '浄化の光', type: 'active', mpCost: 12, cooldown: 5000,
    range: 120, aoe: 0, power: 0, effectType: 'cleanse', scaling: 'int',
    description: '味方1体の状態異常（火傷、氷結、毒、石化）を治す (INT依存)', color: '#ddffdd'
  },
  resurrection: {
    name: 'リザレクション', type: 'active', mpCost: 120, cooldown: 37500,
    range: 100, aoe: 0, power: -0.5, effectType: 'revive', scaling: 'int',
    description: '戦闘不能になった味方1体をHP50%で復活させる (INT依存)', color: '#ffffff'
  },
  divine_wrath: {
    name: 'ゴッドレイズ', type: 'active', mpCost: 30, cooldown: 9000,
    range: 150, aoe: 90, power: 3.5, effectType: 'holy_hit', scaling: 'int',
    description: '天罰の雷光を落とし、範囲内の敵にダメージを与える (INT依存)', color: '#ffdd00'
  },

  steal: {
    name: '強奪', type: 'active', mpCost: 3, cooldown: 3500,
    range: 30, aoe: 10, power: 1.2, effectType: 'melee_hit', scaling: 'str',
    effect: { type: 'steal_gold', value: 15 },
    description: '近接攻撃を行い、対象からゴールドを盗み取る (STR依存)', color: '#cc9933'
  },
  poison_dagger: {
    name: 'ヴェノムダガー', type: 'active', mpCost: 6, cooldown: 4000,
    range: 50, aoe: 15, power: 1.6, effectType: 'poison_hit', scaling: 'str',
    debuff: { type: 'poison', chance: 0.8, duration: 8000, damage: 10 },
    description: '毒付きの刃で敵を刺し、8秒間猛毒（持続ダメージ）にする (STR依存)', color: '#33cc33'
  },
  shadow_step: {
    name: '瞬歩', type: 'active', mpCost: 8, cooldown: 10000,
    range: 0, aoe: 0, power: 0, effectType: 'buff_spd', scaling: 'int',
    effect: { stat: 'spd', value: 1.8, duration: 5000 },
    description: '5秒間、自身の移動速度と攻撃速度を大幅に上昇させる (INT依存)', color: '#6600cc'
  },
  assassinate: {
    name: 'アサシネイト', type: 'active', mpCost: 18, cooldown: 9000,
    range: 35, aoe: 10, power: 4.5, effectType: 'blood_hit', scaling: 'str',
    description: '敵の急所を突く超強力な一撃 (STR依存)', color: '#ff0055'
  },
  phantom_blade: {
    name: '残影滅殺斬', type: 'active', mpCost: 28, cooldown: 8000,
    range: 80, aoe: 50, power: 3.2, effectType: 'slash_all', scaling: 'str',
    description: '瞬間移動を繰り返し、範囲内の敵に高速で斬撃を加える (STR依存)', color: '#aa00ff'
  },
  smoke_bomb: {
    name: '煙幕', type: 'active', mpCost: 12, cooldown: 12000,
    range: 0, aoe: 100, power: 0, effectType: 'smoke', scaling: 'int',
    effect: { stat: 'evade', duration: 5000 },
    description: '5秒間、範囲内の味方の回避率を極限まで上昇させる (INT依存)', color: '#777777'
  },

  wind_arrow: {
    name: '疾風矢', type: 'active', mpCost: 4, cooldown: 1800,
    range: 200, aoe: 10, power: 1.4, effectType: 'arrow', scaling: 'str',
    description: '高速の風の矢を放つ、リキャストの短い遠距離攻撃 (STR依存)', color: '#88ffcc'
  },
  rain_arrow: {
    name: 'アローレイン', type: 'active', mpCost: 14, cooldown: 7000,
    range: 180, aoe: 80, power: 2.2, effectType: 'arrow_rain', scaling: 'str',
    description: '指定範囲に矢の雨を降らせ、多段ヒットダメージを与える (STR依存)', color: '#55cc88'
  },
  gale_shot: {
    name: 'ゲイルショット', type: 'active', mpCost: 12, cooldown: 5000,
    range: 220, aoe: 20, power: 2.6, effectType: 'wind_beam', scaling: 'str',
    pierce: true,
    description: '敵を貫通する螺旋状 of 旋風矢を放つ (STR依存)', color: '#aaffdd'
  },
  summon_turret: {
    name: 'タレット設置', type: 'active', mpCost: 20, cooldown: 20000,
    range: 50, aoe: 0, power: 0, effectType: 'summon_turret', scaling: 'int',
    description: '自動で最寄りの敵を射撃する防衛砲台を設置する (INT依存)', color: '#ffaa00'
  },
  storm_volley: {
    name: 'アローディザスター', type: 'active', mpCost: 25, cooldown: 10000,
    range: 200, aoe: 120, power: 3.8, effectType: 'arrow_storm', scaling: 'str',
    description: '前方の敵へ向けて無数の矢を扇状に連射する (STR依存)', color: '#00cc66'
  },
  phantom_arrow: {
    name: 'シャドウバインド矢', type: 'active', mpCost: 18, cooldown: 7500,
    range: 240, aoe: 20, power: 2.8, effectType: 'dark_arrow', scaling: 'str',
    debuff: { type: 'petrify', chance: 0.5, duration: 3000 },
    description: '影を縫い付ける魔矢。確率で敵を石化（行動不能）にする (STR依存)', color: '#552288'
  },

  summon_ally: {
    name: '幻獣召喚', type: 'active', mpCost: 15, cooldown: 18000,
    range: 40, aoe: 0, power: 0, effectType: 'summon_monster', scaling: 'int',
    description: '戦闘を補助するウルフ（近接タイプ）を召喚する (INT依存)', color: '#cc88ff'
  },
  charm_enemy: {
    name: 'チャーム', type: 'active', mpCost: 10, cooldown: 9000,
    range: 120, aoe: 30, power: 0, effectType: 'charm', scaling: 'int',
    debuff: { type: 'confuse', chance: 0.7, duration: 5000 },
    description: '敵を誘惑し、5秒間混乱（同士打ち）状態にする (INT依存)', color: '#ff66b2'
  },
  summon_golem: {
    name: 'ゴーレム召喚', type: 'active', mpCost: 25, cooldown: 25000,
    range: 40, aoe: 0, power: 0, effectType: 'summon_golem', scaling: 'int',
    description: 'タフなストーンゴーレム（防御壁タイプ）を召喚する (INT依存)', color: '#aa8844'
  },
  dark_pulse: {
    name: 'ダークパルス', type: 'active', mpCost: 16, cooldown: 6000,
    range: 120, aoe: 60, power: 2.4, effectType: 'dark_hit', scaling: 'int',
    description: '闇の波動を放ち、周囲の敵に暗黒ダメージを与える (INT依存)', color: '#880088'
  },
  summon_dragon: {
    name: 'ワイバーン召喚', type: 'active', mpCost: 45, cooldown: 40000,
    range: 40, aoe: 0, power: 0, effectType: 'summon_dragon', scaling: 'int',
    description: '強力な火炎ブレスを吐くワイバーンを一時的に召喚する (INT依存)', color: '#ff3300'
  },
  apocalypse: {
    name: 'アポカリプス', type: 'active', mpCost: 50, cooldown: 18000,
    range: 160, aoe: 130, power: 4.8, effectType: 'apocalypse', scaling: 'int',
    description: '破滅の魔方陣を展開し、すべての敵に莫大な闇属性ダメージを与える (INT依存)', color: '#330066'
  },

  // --- Missing skills (referenced in monster trees/element pools) ---
  drain_touch: {
    name: 'ドレインタッチ', type: 'active', mpCost: 12, cooldown: 7000,
    range: 35, aoe: 0, power: 1.8, effectType: 'drain', scaling: 'int',
    lifesteal: 0.3,
    description: '闇の力で触れた敵のHPを吸収する (INT依存, 30%吸収)', color: '#660066'
  },
  ice_lance: {
    name: 'アイスランス', type: 'active', mpCost: 10, cooldown: 5000,
    range: 120, aoe: 0, power: 2.2, effectType: 'ice_spear', scaling: 'int',
    description: '鋭い氷の槍を投げつけ、敵に水属性ダメージを与える (INT依存)', color: '#66ccff'
  },
  cleanse: {
    name: 'クレンズ', type: 'active', mpCost: 8, cooldown: 9000,
    range: 80, aoe: 60, power: 0, effectType: 'cleanse', scaling: 'int',
    description: '味方のデバフを解除し、状態異常を浄化する (INT依存)', color: '#aaffaa'
  },

  // --- 36 New Skills ---
  shield_bash: {
    name: 'シールドバッシュ', type: 'active', mpCost: 6, cooldown: 4000,
    range: 35, aoe: 15, power: 1.5, effectType: 'shield_bash', scaling: 'str',
    knockdown: 2000,
    description: '盾で強烈に叩きつけ、ノックバック(ノックダウン)と小ダメージを与える (STR依存)', color: '#ff6666'
  },
  provoke: {
    name: 'プロヴォーク', type: 'active', mpCost: 5, cooldown: 5000,
    range: 0, aoe: 100, power: 0, effectType: 'buff_def', scaling: 'int',
    effect: { stat: 'def', value: 1.3, duration: 4000 },
    description: '自身の防御力を高め、敵の注意を引きつける (INT依存)', color: '#33aa55'
  },
  fire_shield: {
    name: 'ファイアシールド', type: 'active', mpCost: 14, cooldown: 8000,
    range: 0, aoe: 0, power: 0, effectType: 'shield', scaling: 'int',
    effect: { stat: 'def', value: 1.6, duration: 5000 },
    description: '自身に火炎のバリアをまとい、防御力を大きく高める (INT依存)', color: '#ff8822'
  },
  berserk: {
    name: 'バーサーク', type: 'active', mpCost: 10, cooldown: 10000,
    range: 0, aoe: 0, power: 0, effectType: 'buff_spd', scaling: 'str',
    effect: { stat: 'spd', value: 1.5, duration: 6000 },
    description: '6秒間、移動・攻撃速度を上昇させるが防御力は低下する (STR依存)', color: '#cc1111'
  },
  justice_blade: {
    name: 'ジャスティスブレード', type: 'active', mpCost: 18, cooldown: 7000,
    range: 50, aoe: 25, power: 4.0, effectType: 'holy_hit', scaling: 'str',
    description: '聖なる光の刃で一閃し、単体に超大ダメージを与える (STR依存)', color: '#ffee66'
  },
  divine_aura: {
    name: 'ディバインオーラ', type: 'active', mpCost: 22, cooldown: 12000,
    range: 0, aoe: 100, power: 0, effectType: 'buff_def', scaling: 'int',
    effect: { stat: 'def', value: 1.8, duration: 6000 },
    description: '6秒間、周囲の味方の防御力を80%上昇させるオーラを展開する (INT依存)', color: '#ffffdd'
  },
  thunder_bolt: {
    name: 'サンダーボルト', type: 'active', mpCost: 10, cooldown: 3000,
    range: 150, aoe: 20, power: 1.8, effectType: 'thunder_bolt', scaling: 'int',
    description: '落雷を発生させ、対象とその周囲に雷撃ダメージを与える (INT依存)', color: '#ffff33'
  },
  mana_burn: {
    name: 'マナバーン', type: 'active', mpCost: 8, cooldown: 4500,
    range: 140, aoe: 10, power: 1.2, effectType: 'mana_burn', scaling: 'int',
    description: '敵の魔力を乱す波動を放ち、中ダメージを与える (INT依存)', color: '#00ddff'
  },
  freeze_touch: {
    name: 'フリーズタッチ', type: 'active', mpCost: 18, cooldown: 6000,
    range: 60, aoe: 20, power: 1.6, effectType: 'ice_hit', scaling: 'int',
    debuff: { type: 'freeze', chance: 0.6, duration: 2500 },
    description: '敵を急激に冷凍し、高確率で氷結（行動不能）状態にする (INT依存)', color: '#55ffff'
  },
  nova_burst: {
    name: 'ノヴァバースト', type: 'active', mpCost: 28, cooldown: 8000,
    range: 100, aoe: 60, power: 3.2, effectType: 'nova_burst', scaling: 'int',
    description: '周囲に炎の大爆発を引き起こし、複数の敵を吹き飛ばす (INT依存)', color: '#ff4400'
  },
  space_distortion: {
    name: 'ディストーション', type: 'active', mpCost: 30, cooldown: 14000,
    range: 0, aoe: 0, power: 0, effectType: 'distortion', scaling: 'int',
    effect: { stat: 'invincible', duration: 3000 },
    description: '空間を歪めて3秒間無敵状態になり、あらゆる攻撃を防ぐ (INT依存)', color: '#aa33ff'
  },
  abyss_fall: {
    name: 'アビスフォール', type: 'active', mpCost: 40, cooldown: 13000,
    range: 160, aoe: 100, power: 4.2, effectType: 'dark_hit', scaling: 'int',
    description: '奈落の深淵を開き、広範囲の敵に闇属性の大ダメージを与える (INT依存)', color: '#220033'
  },
  blessing: {
    name: 'ホーリーブレス', type: 'active', mpCost: 12, cooldown: 9000,
    range: 0, aoe: 80, power: 0, effectType: 'holy_bless', scaling: 'int',
    effect: { stat: 'spd', value: 1.3, duration: 6000 },
    description: '周囲の味方に聖なる加護を与え、行動速度を30%上昇させる (INT依存)', color: '#ffdd55'
  },
  holy_bolt: {
    name: 'ホーリーボルト', type: 'active', mpCost: 8, cooldown: 3500,
    range: 130, aoe: 10, power: 1.4, effectType: 'holy_hit', scaling: 'int',
    description: '光のエネルギー弾を放ち、敵1体に神聖ダメージを与える (INT依存)', color: '#ffffcc'
  },
  hallowed_ground: {
    name: 'セイクリッドエリア', type: 'active', mpCost: 78, cooldown: 11000,
    range: 0, aoe: 100, power: -1.0, effectType: 'heal_all', scaling: 'int',
    description: '周囲に聖なる癒やしの光を放ち、味方全体を小回復する (INT依存)', color: '#55ffbb'
  },
  silence_seal: {
    name: '封印の鎖', type: 'active', mpCost: 15, cooldown: 10000,
    range: 120, aoe: 30, power: 1.0, effectType: 'chains', scaling: 'int',
    debuff: { type: 'freeze', chance: 0.5, duration: 3000 },
    description: '魔力の鎖で敵を縛り、確率で行動不能にする (INT依存)', color: '#ddbbff'
  },
  miracle_light: {
    name: 'ミラクルヒール', type: 'active', mpCost: 96, cooldown: 8000,
    range: 120, aoe: 0, power: -4.0, effectType: 'heal_single', scaling: 'int',
    description: '奇跡の光により、味方1体のHPを極大回復する (INT依存)', color: '#ffffff'
  },
  judgement: {
    name: 'ジャッジメント', type: 'active', mpCost: 35, cooldown: 10000,
    range: 140, aoe: 80, power: 4.0, effectType: 'holy_hit', scaling: 'int',
    knockdown: 3000,
    description: '神聖な裁きの光を落とし、範囲内の敵を焼き尽くす (INT依存)', color: '#ffcc22'
  },
  double_strike: {
    name: '二連斬り', type: 'active', mpCost: 5, cooldown: 2500,
    range: 40, aoe: 15, power: 2.0, effectType: 'melee_hit', scaling: 'str',
    description: '鋭い2連撃で近接単体を斬り刻み、中ダメージを与える (STR依存)', color: '#33cc55'
  },
  agility_boost: {
    name: 'アクセルヒール', type: 'active', mpCost: 8, cooldown: 7000,
    range: 0, aoe: 0, power: 0, effectType: 'buff_spd', scaling: 'str',
    effect: { stat: 'spd', value: 1.4, duration: 5000 },
    description: '自身の敏捷性を極限まで高め、移動・攻撃速度を40%上げる (STR依存)', color: '#88ff88'
  },
  throat_cut: {
    name: 'スロートカット', type: 'active', mpCost: 14, cooldown: 6500,
    range: 30, aoe: 10, power: 3.5, effectType: 'blood_hit', scaling: 'str',
    description: '敵の喉元を鋭く切り裂き、大ダメージを与える (STR依存)', color: '#990000'
  },
  deadly_poison: {
    name: 'キラーヴェノム', type: 'active', mpCost: 10, cooldown: 8000,
    range: 45, aoe: 20, power: 1.5, effectType: 'poison_hit', scaling: 'str',
    debuff: { type: 'poison', chance: 0.9, duration: 10000, damage: 18 },
    description: '致死性の猛毒を刃に仕込み、長時間の強力な毒を付与する (STR依存)', color: '#22aa22'
  },
  ninjutsu_fire: {
    name: '火遁の術', type: 'active', mpCost: 16, cooldown: 5500,
    range: 110, aoe: 40, power: 2.2, effectType: 'fire_hit', scaling: 'int',
    debuff: { type: 'burn', chance: 0.5, duration: 5000, damage: 12 },
    description: '印を結んで前方に炎を吹き出し、敵を火傷状態にする (INT依存)', color: '#ff5522'
  },
  blade_dance: {
    name: '螺旋烈風刃', type: 'active', mpCost: 24, cooldown: 8000,
    range: 0, aoe: 80, power: 3.0, effectType: 'slash_all', scaling: 'str',
    description: '自身の周囲を烈風の刃で切り刻み、広範囲の敵を攻撃する (STR依存)', color: '#aa33aa'
  },
  double_shot: {
    name: 'ダブルショット', type: 'active', mpCost: 6, cooldown: 2000,
    range: 200, aoe: 10, power: 1.8, effectType: 'arrow', scaling: 'str',
    description: 'すばやく2本の矢を連続で放つ遠距離攻撃 (STR依存)', color: '#ffaa44'
  },
  focus_aim: {
    name: '精密射撃', type: 'active', mpCost: 8, cooldown: 8000,
    range: 0, aoe: 0, power: 0, effectType: 'buff_spd', scaling: 'str',
    effect: { stat: 'spd', value: 1.3, duration: 6000 },
    description: '集中して狙いを定め、6秒間攻撃速度と精度を向上させる (STR依存)', color: '#ffcc66'
  },
  piercing_shot: {
    name: 'ヘヴィボルト', type: 'active', mpCost: 14, cooldown: 6000,
    range: 220, aoe: 15, power: 2.8, effectType: 'heavy_bolt', scaling: 'str',
    description: '敵の防御を貫通する重い矢を放ち、直線上の敵を貫く (STR依存)', color: '#eedd55'
  },
  explosive_trap: {
    name: 'クレイモア設置', type: 'active', mpCost: 16, cooldown: 12000,
    range: 80, aoe: 60, power: 2.4, effectType: 'trap', scaling: 'int',
    description: '敵が接近すると爆発する火炎トラップを前方に設置する (INT依存)', color: '#ff3300'
  },
  heaven_arrow: {
    name: 'ルインゲイル', type: 'active', mpCost: 26, cooldown: 8500,
    range: 230, aoe: 40, power: 4.2, effectType: 'arrow_rain', scaling: 'str',
    description: '天から降り注ぐ光の矢で、単体に極大ダメージを与える (STR依存)', color: '#ffffaa'
  },
  wind_dance: {
    name: 'アクセルウィンド', type: 'active', mpCost: 12, cooldown: 10000,
    range: 0, aoe: 0, power: 0, effectType: 'buff_spd', scaling: 'str',
    effect: { stat: 'spd', value: 1.6, duration: 6000 },
    description: '風を身にまとい、6秒間自身の攻撃速度を60%上昇させる (STR依存)', color: '#aaffaa'
  },
  summon_fairy: {
    name: '精霊召喚', type: 'active', mpCost: 18, cooldown: 15000,
    range: 50, aoe: 0, power: 0, effectType: 'summon_monster', scaling: 'int',
    description: '癒やしの魔力を持つ精霊（遠距離・サポートタイプ）を召喚する (INT依存)', color: '#ffaaee'
  },
  soul_link: {
    name: 'ソウルリンク', type: 'active', mpCost: 12, cooldown: 8500,
    range: 0, aoe: 80, power: 0, effectType: 'shield', scaling: 'int',
    effect: { stat: 'def', value: 1.4, duration: 5000 },
    description: '味方との魂を繋ぎ、5秒間周囲の味方の防御力を高める (INT依存)', color: '#ee88ff'
  },
  summon_specter: {
    name: '死霊召喚', type: 'active', mpCost: 28, cooldown: 22000,
    range: 50, aoe: 0, power: 0, effectType: 'summon_monster', scaling: 'int',
    description: '闇属性攻撃を行う死霊の戦士を一時的に召喚する (INT依存)', color: '#7733cc'
  },
  illusion_fear: {
    name: 'フィアブラスト', type: 'active', mpCost: 18, cooldown: 9500,
    range: 120, aoe: 50, power: 1.5, effectType: 'dark_hit', scaling: 'int',
    debuff: { type: 'confuse', chance: 0.6, duration: 4000 },
    description: '恐怖の幻影を見せ、範囲内の敵にダメージと混乱を与える (INT依存)', color: '#ff00aa'
  },
  summon_phoenix: {
    name: 'フェニックス召喚', type: 'active', mpCost: 40, cooldown: 35000,
    range: 50, aoe: 0, power: 0, effectType: 'summon_monster', scaling: 'int',
    description: '不死鳥を召喚し、敵に火炎攻撃、味方に微量のリジェネを与える (INT依存)', color: '#ff4422'
  },
  soul_sacrifice: {
    name: 'ソウルリヴァイブ', type: 'active', mpCost: 135, cooldown: 16000,
    range: 0, aoe: 120, power: -2.5, effectType: 'heal_all', scaling: 'int',
    description: '魂の誓いをもって、味方全体のHPを大幅に回復させる (INT依存)', color: '#ffffff'
  }
};

// Monster Base Database (used for wild encounters & allies)
export const MONSTERS = {
  blue_slime: {
    name: 'スライム', hp: 60, atk: 3, def: 1, spd: 2, int: 2, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#3399ff',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'poison_dagger' },
      { level: 20, skill: 'guard' },
      { level: 30, skill: 'ice_spear' },
      { level: 40, skill: 'iron_wall' }
    ]
  },
  bone_slime: {
    name: 'ボーンスライム', hp: 135, atk: 7, def: 4, spd: 3, int: 3, xp: 25, rarity: 'UNCOMMON', catchRate: 0.02, color: '#ddccaa',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'ice_spear' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  bat: {
    name: 'コウモリ', hp: 45, atk: 4, def: 0, spd: 3, int: 2, xp: 10, rarity: 'COMMON', catchRate: 0.03, color: '#553388',
    skillTree: [
      { level: 1, skill: 'steal' },
      { level: 10, skill: 'shadow_step' },
      { level: 20, skill: 'drain_touch' },
      { level: 30, skill: 'poison_dagger' },
      { level: 40, skill: 'assassinate' }
    ]
  },
  rat: {
    name: 'ネズミ', hp: 54, atk: 3, def: 1, spd: 3, int: 1, xp: 8, rarity: 'COMMON', catchRate: 0.03, color: '#887766',
    spriteKey: 'flame_rat', hueShift: 180, saturate: 0.2, brightness: 0.8,
    skillTree: [
      { level: 1, skill: 'steal' },
      { level: 10, skill: 'poison_dagger' },
      { level: 20, skill: 'smoke_bomb' },
      { level: 30, skill: 'shadow_step' },
      { level: 40, skill: 'assassinate' }
    ]
  },
  bird: {
    name: '怪鳥', hp: 75, atk: 5, def: 2, spd: 4, int: 3, xp: 15, rarity: 'COMMON', catchRate: 0.03, color: '#55ccff',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'poison_dagger' },
      { level: 40, skill: 'phantom_blade' }
    ]
  },
  bear: {
    name: 'マウンテンベア', hp: 165, atk: 8, def: 4, spd: 2, int: 2, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#774422',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'flame_slash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  goblin: {
    name: 'ゴブリン', hp: 84, atk: 5, def: 2, spd: 4, int: 4, xp: 18, rarity: 'COMMON', catchRate: 0.03, color: '#66aa44',
    skillTree: [
      { level: 1, skill: 'steal' },
      { level: 10, skill: 'poison_dagger' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'smoke_bomb' },
      { level: 40, skill: 'assassinate' }
    ]
  },
  demon: {
    name: '悪魔', hp: 240, atk: 16, def: 6, spd: 8, int: 12, xp: 35, rarity: 'RARE', catchRate: 0.01, color: '#ee4422',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'charm_enemy' },
      { level: 30, skill: 'fire_storm' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  demon_lord: {
    name: 'デーモンロード', hp: 750, atk: 35, def: 18, spd: 10, int: 28, xp: 120, rarity: 'EPIC', catchRate: 0.005, color: '#990022',
    skillTree: [
      { level: 1, skill: 'fire_storm' },
      { level: 10, skill: 'apocalypse' },
      { level: 20, skill: 'dark_pulse' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'summon_dragon' }
    ]
  },
  dracula: {
    name: 'ヴァンパイア', hp: 480, atk: 28, def: 12, spd: 12, int: 22, xp: 85, rarity: 'EPIC', catchRate: 0.005, color: '#cc1111',
    skillTree: [
      { level: 1, skill: 'steal' },
      { level: 10, skill: 'shadow_step' },
      { level: 20, skill: 'dark_pulse' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  dragon: {
    name: 'ドラゴン', hp: 900, atk: 40, def: 25, spd: 8, int: 20, xp: 150, rarity: 'LEGENDARY', catchRate: 0.003, color: '#ee2200',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'fire_storm' },
      { level: 20, skill: 'meteor' },
      { level: 30, skill: 'apocalypse' },
      { level: 40, skill: 'summon_dragon' }
    ]
  },
  bone_dragon: {
    name: 'ボーンドラゴン', hp: 840, atk: 36, def: 28, spd: 7, int: 18, xp: 135, rarity: 'LEGENDARY', catchRate: 0.003, color: '#eeeeee',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'flame_slash' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  angel: {
    name: 'エンジェル', hp: 360, atk: 14, def: 10, spd: 10, int: 8, xp: 75, rarity: 'RARE', catchRate: 0.01, color: '#ffffdd',
    skillTree: [
      { level: 1, skill: 'heal' },
      { level: 10, skill: 'group_heal' },
      { level: 20, skill: 'divine_wrath' },
      { level: 30, skill: 'barrier' },
      { level: 40, skill: 'resurrection' }
    ]
  },
  golem: {
    name: 'ゴーレム', hp: 450, atk: 16, def: 24, spd: 4, int: 6, xp: 80, rarity: 'RARE', catchRate: 0.01, color: '#b5a68c',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  dragoon: {
    name: '竜騎兵', hp: 450, atk: 25, def: 16, spd: 11, int: 8, xp: 80, rarity: 'RARE', catchRate: 0.01, color: '#3355cc',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'guard' },
      { level: 30, skill: 'iron_wall' },
      { level: 40, skill: 'holy_cross' }
    ]
  },
  dark_witch: {
    name: 'ダークウィッチ', hp: 300, atk: 12, def: 6, spd: 8, int: 22, xp: 70, rarity: 'RARE', catchRate: 0.01, color: '#7722aa',
    skillTree: [
      { level: 1, skill: 'dark_pulse' },
      { level: 10, skill: 'fire_ball' },
      { level: 20, skill: 'charm_enemy' },
      { level: 30, skill: 'fire_storm' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  chaos_elemental: {
    name: '混沌エレメンタル', hp: 420, atk: 22, def: 12, spd: 9, int: 26, xp: 90, rarity: 'EPIC', catchRate: 0.005, color: '#cc00cc',
    skillTree: [
      { level: 1, skill: 'fire_storm' },
      { level: 10, skill: 'blizzard' },
      { level: 20, skill: 'meteor' },
      { level: 30, skill: 'dark_pulse' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  chaos_slime: {
    name: 'カオススライム', hp: 540, atk: 24, def: 20, spd: 7, int: 16, xp: 95, rarity: 'EPIC', catchRate: 0.005, color: '#770077',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'iron_wall' },
      { level: 20, skill: 'magic_missile' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  bone_spider: {
    name: '骨蜘蛛', hp: 255, atk: 14, def: 9, spd: 8, int: 4, xp: 32, rarity: 'UNCOMMON', catchRate: 0.02, color: '#eeddcc',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'steal' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'smoke_bomb' },
      { level: 40, skill: 'assassinate' }
    ]
  },
  dragon_cyclops: {
    name: 'ドラゴンサイクロプス', hp: 500, atk: 28, def: 18, spd: 6, int: 16, xp: 90, rarity: 'EPIC', catchRate: 0.005, color: '#ff4400',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  dragon_knight: {
    name: 'ドラゴンナイト', hp: 600, atk: 24, def: 22, spd: 8, int: 10, xp: 95, rarity: 'EPIC', catchRate: 0.005, color: '#33ccff',
    skillTree: [
      { level: 1, skill: 'holy_bolt' },
      { level: 10, skill: 'holy_cross' },
      { level: 20, skill: 'divine_wrath' },
      { level: 30, skill: 'judgement' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  dragon_lord: {
    name: 'ドラゴンロード', hp: 950, atk: 42, def: 26, spd: 9, int: 22, xp: 180, rarity: 'LEGENDARY', catchRate: 0.003, color: '#ff2200',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  elder_dragon: {
    name: 'エルダードラゴン', hp: 500, atk: 26, def: 18, spd: 11, int: 26, xp: 200, rarity: 'LEGENDARY', catchRate: 0.003, color: '#00ff66',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 10, skill: 'gale_shot' },
      { level: 20, skill: 'rain_arrow' },
      { level: 30, skill: 'storm_volley' },
      { level: 40, skill: 'blade_dance' }
    ]
  },
  fairy: {
    name: 'フェアリー', hp: 90, atk: 4, def: 2, spd: 6, int: 10, xp: 20, rarity: 'UNCOMMON', catchRate: 0.02, color: '#ff99ff',
    skillTree: [
      { level: 1, skill: 'heal' },
      { level: 10, skill: 'group_heal' },
      { level: 20, skill: 'blessing' },
      { level: 30, skill: 'cleanse' },
      { level: 40, skill: 'resurrection' }
    ]
  },
  fish: {
    name: 'サカナ', hp: 70, atk: 3, def: 2, spd: 4, int: 4, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#3399ff',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  flame_cyclops: {
    name: 'フレイムサイクロプス', hp: 380, atk: 18, def: 12, spd: 5, int: 8, xp: 50, rarity: 'RARE', catchRate: 0.01, color: '#ff6600',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  flame_rat: {
    name: '火炎ネズミ', hp: 65, atk: 5, def: 1, spd: 4, int: 2, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#ff4444',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  flying_rat: {
    name: 'フライングラット', hp: 55, atk: 3, def: 1, spd: 5, int: 2, xp: 10, rarity: 'COMMON', catchRate: 0.03, color: '#aaccff',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 10, skill: 'gale_shot' },
      { level: 20, skill: 'rain_arrow' },
      { level: 30, skill: 'storm_volley' },
      { level: 40, skill: 'blade_dance' }
    ]
  },
  frog: {
    name: 'カエル', hp: 80, atk: 3, def: 3, spd: 3, int: 3, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#66ff66',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  frost_lizard: {
    name: 'フロストリザード', hp: 140, atk: 7, def: 5, spd: 5, int: 6, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#33ccff',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  frost_slime: {
    name: 'フロストスライム', hp: 75, atk: 3, def: 3, spd: 2, int: 4, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#aaffff',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  ghost: {
    name: 'ゴースト', hp: 100, atk: 6, def: 4, spd: 4, int: 8, xp: 20, rarity: 'UNCOMMON', catchRate: 0.02, color: '#dd88ff',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  giant_brute: {
    name: 'ジャイアントブルート', hp: 420, atk: 22, def: 14, spd: 4, int: 4, xp: 60, rarity: 'RARE', catchRate: 0.01, color: '#aa8866',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  glacier_gargoyle: {
    name: 'グレイシアガーゴイル', hp: 320, atk: 15, def: 15, spd: 7, int: 10, xp: 50, rarity: 'RARE', catchRate: 0.01, color: '#88ccff',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  greedy_goblin: {
    name: '強欲ゴブリン', hp: 120, atk: 8, def: 3, spd: 5, int: 4, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#88ff88',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  hell_mimic: {
    name: 'ヘルミミック', hp: 280, atk: 18, def: 16, spd: 4, int: 6, xp: 48, rarity: 'RARE', catchRate: 0.01, color: '#ff3333',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  hobgoblin_mage: {
    name: 'ホブゴブリンメイジ', hp: 110, atk: 5, def: 3, spd: 4, int: 9, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#cc99ff',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 10, skill: 'gale_shot' },
      { level: 20, skill: 'rain_arrow' },
      { level: 30, skill: 'storm_volley' },
      { level: 40, skill: 'blade_dance' }
    ]
  },
  horse: {
    name: 'ウマ', hp: 90, atk: 4, def: 3, spd: 6, int: 2, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#ddaa88',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 10, skill: 'gale_shot' },
      { level: 20, skill: 'rain_arrow' },
      { level: 30, skill: 'storm_volley' },
      { level: 40, skill: 'blade_dance' }
    ]
  },
  inferno_gargoyle: {
    name: 'インフェルノガーゴイル', hp: 310, atk: 17, def: 11, spd: 8, int: 10, xp: 50, rarity: 'RARE', catchRate: 0.01, color: '#ffaa33',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  knight: {
    name: 'ナイト', hp: 380, atk: 14, def: 18, spd: 5, int: 6, xp: 52, rarity: 'RARE', catchRate: 0.01, color: '#ffeeaa',
    skillTree: [
      { level: 1, skill: 'holy_bolt' },
      { level: 10, skill: 'holy_cross' },
      { level: 20, skill: 'divine_wrath' },
      { level: 30, skill: 'judgement' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  lich: {
    name: 'リッチ', hp: 450, atk: 20, def: 10, spd: 7, int: 28, xp: 85, rarity: 'EPIC', catchRate: 0.005, color: '#bb66ff',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  lion: {
    name: 'ライオン', hp: 360, atk: 20, def: 12, spd: 8, int: 6, xp: 54, rarity: 'RARE', catchRate: 0.01, color: '#ffbb44',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  magma_slime: {
    name: 'マグマスライム', hp: 130, atk: 8, def: 4, spd: 3, int: 5, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#ff6666',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  obsidian_gargoyle: {
    name: 'オブシディアンガーゴイル', hp: 330, atk: 16, def: 14, spd: 6, int: 8, xp: 50, rarity: 'RARE', catchRate: 0.01, color: '#555566',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  octopus: {
    name: 'オクトパス', hp: 350, atk: 15, def: 12, spd: 5, int: 12, xp: 52, rarity: 'RARE', catchRate: 0.01, color: '#ff7799',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  orc: {
    name: 'オーク', hp: 180, atk: 10, def: 6, spd: 3, int: 3, xp: 24, rarity: 'UNCOMMON', catchRate: 0.02, color: '#77aa66',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  phantom_bat: {
    name: 'ファントムバット', hp: 110, atk: 7, def: 3, spd: 6, int: 6, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#aa88dd',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  phantom_troll: {
    name: 'ファントムトロル', hp: 390, atk: 18, def: 12, spd: 4, int: 8, xp: 54, rarity: 'RARE', catchRate: 0.01, color: '#8866aa',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  plant: {
    name: 'プラント', hp: 85, atk: 4, def: 4, spd: 2, int: 5, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#88cc88',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  poltergeist: {
    name: 'ポルターガイスト', hp: 95, atk: 5, def: 2, spd: 7, int: 9, xp: 20, rarity: 'UNCOMMON', catchRate: 0.02, color: '#88eeff',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 10, skill: 'gale_shot' },
      { level: 20, skill: 'rain_arrow' },
      { level: 30, skill: 'storm_volley' },
      { level: 40, skill: 'blade_dance' }
    ]
  },
  skeleton: {
    name: 'スケルトン', hp: 120, atk: 8, def: 5, spd: 4, int: 3, xp: 20, rarity: 'UNCOMMON', catchRate: 0.02, color: '#cccccc',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  skeleton_warrior: {
    name: 'スケルトンウォーリア', hp: 260, atk: 16, def: 12, spd: 5, int: 4, xp: 46, rarity: 'RARE', catchRate: 0.01, color: '#aaaaaa',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  zombie: {
    name: 'ゾンビ', hp: 90, atk: 5, def: 3, spd: 2, int: 1, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#889988',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  wolf: {
    name: 'ウルフ', hp: 130, atk: 9, def: 4, spd: 6, int: 3, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#bbbbbb',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  wyvern: {
    name: 'ワイバーン', hp: 200, atk: 12, def: 8, spd: 9, int: 12, xp: 52, rarity: 'RARE', catchRate: 0.01, color: '#ff5522',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  worm: {
    name: 'ワーム', hp: 75, atk: 4, def: 3, spd: 2, int: 2, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#ffbb99',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  chest: {
    name: '宝箱モンスター', hp: 150, atk: 8, def: 10, spd: 3, int: 4, xp: 30, rarity: 'UNCOMMON', catchRate: 0.02, color: '#eeaa00',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  cloud: {
    name: 'クラウド', hp: 60, atk: 3, def: 2, spd: 5, int: 6, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#eeeeee',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 10, skill: 'gale_shot' },
      { level: 20, skill: 'rain_arrow' },
      { level: 30, skill: 'storm_volley' },
      { level: 40, skill: 'blade_dance' }
    ]
  },
  crown: {
    name: 'クラウン', hp: 400, atk: 22, def: 18, spd: 6, int: 18, xp: 85, rarity: 'EPIC', catchRate: 0.005, color: '#ffff33',
    skillTree: [
      { level: 1, skill: 'holy_bolt' },
      { level: 10, skill: 'holy_cross' },
      { level: 20, skill: 'divine_wrath' },
      { level: 30, skill: 'judgement' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  crystal: {
    name: 'クリスタル', hp: 320, atk: 12, def: 20, spd: 4, int: 14, xp: 50, rarity: 'RARE', catchRate: 0.01, color: '#55ffff',
    skillTree: [
      { level: 1, skill: 'holy_bolt' },
      { level: 10, skill: 'holy_cross' },
      { level: 20, skill: 'divine_wrath' },
      { level: 30, skill: 'judgement' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  eye: {
    name: 'ワンアイ', hp: 50, atk: 4, def: 1, spd: 4, int: 5, xp: 10, rarity: 'COMMON', catchRate: 0.03, color: '#ff33ff',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  eye_cluster: {
    name: 'アイクラスター', hp: 280, atk: 14, def: 8, spd: 5, int: 16, xp: 48, rarity: 'RARE', catchRate: 0.01, color: '#cc33cc',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  flame: {
    name: '怪火', hp: 60, atk: 6, def: 1, spd: 4, int: 5, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#ff5500',
    skillTree: [
      { level: 1, skill: 'fire_ball' },
      { level: 10, skill: 'flame_slash' },
      { level: 20, skill: 'fire_storm' },
      { level: 30, skill: 'meteor' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  tornado: {
    name: 'トルネード', hp: 300, atk: 15, def: 8, spd: 10, int: 12, xp: 50, rarity: 'RARE', catchRate: 0.01, color: '#77ffaa',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 10, skill: 'gale_shot' },
      { level: 20, skill: 'rain_arrow' },
      { level: 30, skill: 'storm_volley' },
      { level: 40, skill: 'blade_dance' }
    ]
  },
  turtle: {
    name: 'タートル', hp: 200, atk: 6, def: 15, spd: 2, int: 4, xp: 24, rarity: 'UNCOMMON', catchRate: 0.02, color: '#66aa77',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  snail: {
    name: 'マイマイ', hp: 85, atk: 3, def: 6, spd: 1, int: 2, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#aaccaa',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },
  snake: {
    name: 'ヘビ', hp: 70, atk: 5, def: 2, spd: 5, int: 2, xp: 12, rarity: 'COMMON', catchRate: 0.03, color: '#77bb55',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  spider: {
    name: 'クモ', hp: 65, atk: 4, def: 2, spd: 4, int: 2, xp: 10, rarity: 'COMMON', catchRate: 0.03, color: '#a68c75',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  spider_rider: {
    name: 'スパイダーライダー', hp: 320, atk: 16, def: 10, spd: 8, int: 6, xp: 52, rarity: 'RARE', catchRate: 0.01, color: '#997755',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  trap_spider: {
    name: 'トラップスパイダー', hp: 140, atk: 8, def: 6, spd: 5, int: 4, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#bb6644',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  void: {
    name: 'ヴォイド', hp: 480, atk: 24, def: 16, spd: 8, int: 20, xp: 85, rarity: 'EPIC', catchRate: 0.005, color: '#440088',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  witch: {
    name: 'ウィッチ', hp: 120, atk: 6, def: 4, spd: 5, int: 12, xp: 22, rarity: 'UNCOMMON', catchRate: 0.02, color: '#cc55ff',
    skillTree: [
      { level: 1, skill: 'poison_dagger' },
      { level: 10, skill: 'dark_pulse' },
      { level: 20, skill: 'shadow_step' },
      { level: 30, skill: 'assassinate' },
      { level: 40, skill: 'apocalypse' }
    ]
  },
  pot: {
    name: 'ツボ', hp: 50, atk: 2, def: 8, spd: 1, int: 1, xp: 8, rarity: 'COMMON', catchRate: 0.03, color: '#aa8866',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  titan: {
    name: 'タイタン', hp: 550, atk: 24, def: 20, spd: 4, int: 10, xp: 220, rarity: 'LEGENDARY', catchRate: 0.003, color: '#888899',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 10, skill: 'guard' },
      { level: 20, skill: 'iron_wall' },
      { level: 30, skill: 'shield_bash' },
      { level: 40, skill: 'holy_shield' }
    ]
  },
  drop: {
    name: 'しずくちゃん', hp: 55, atk: 2, def: 2, spd: 4, int: 5, xp: 10, rarity: 'COMMON', catchRate: 0.03, color: '#55aaff',
    skillTree: [
      { level: 1, skill: 'ice_spear' },
      { level: 10, skill: 'freeze_touch' },
      { level: 20, skill: 'blizzard' },
      { level: 30, skill: 'heal' },
      { level: 40, skill: 'group_heal' }
    ]
  },

  // ======== Tier 3 Fusion Monsters ========
  vampire_king: {
    name: 'ヴァンパイアキング', hp: 600, atk: 30, def: 15, spd: 14, int: 35, xp: 250, rarity: 'LEGENDARY', catchRate: 0.003, color: '#880022',
    skillTree: [
      { level: 1, skill: 'dark_pulse' },
      { level: 5, skill: 'drain_touch' },
      { level: 15, skill: 'flame_slash' },
      { level: 25, skill: 'abyss_fall' },
      { level: 35, skill: 'apocalypse' },
      { level: 45, skill: 'resurrection' }
    ]
  },
  void_dragon: {
    name: '虚無竜', hp: 1400, atk: 48, def: 30, spd: 10, int: 38, xp: 300, rarity: 'LEGENDARY', catchRate: 0.003, color: '#220044',
    skillTree: [
      { level: 1, skill: 'dark_pulse' },
      { level: 5, skill: 'fire_ball' },
      { level: 15, skill: 'meteor' },
      { level: 25, skill: 'abyss_fall' },
      { level: 35, skill: 'apocalypse' },
      { level: 45, skill: 'space_distortion' }
    ]
  },
  primordial_ooze: {
    name: '原初スライム', hp: 500, atk: 22, def: 24, spd: 6, int: 30, xp: 200, rarity: 'EPIC', catchRate: 0.005, color: '#443366',
    skillTree: [
      { level: 1, skill: 'smash' },
      { level: 5, skill: 'iron_wall' },
      { level: 15, skill: 'heal' },
      { level: 25, skill: 'barrier' },
      { level: 35, skill: 'group_heal' },
      { level: 45, skill: 'apocalypse' }
    ]
  },
  death_knight: {
    name: 'デスナイト', hp: 550, atk: 29, def: 19, spd: 12, int: 20, xp: 220, rarity: 'EPIC', catchRate: 0.005, color: '#334455',
    skillTree: [
      { level: 1, skill: 'flame_slash' },
      { level: 5, skill: 'smash' },
      { level: 15, skill: 'iron_wall' },
      { level: 25, skill: 'dark_pulse' },
      { level: 35, skill: 'blade_dance' },
      { level: 45, skill: 'abyss_fall' }
    ]
  },
  sky_overlord: {
    name: '天空覇王', hp: 1300, atk: 44, def: 26, spd: 15, int: 32, xp: 280, rarity: 'LEGENDARY', catchRate: 0.003, color: '#ffcc22',
    skillTree: [
      { level: 1, skill: 'wind_arrow' },
      { level: 5, skill: 'divine_wrath' },
      { level: 15, skill: 'storm_volley' },
      { level: 25, skill: 'blessing' },
      { level: 35, skill: 'meteor' },
      { level: 45, skill: 'apocalypse' }
    ]
  }
};

// Fusion Recipes mapping
// tier: 2 = base+base→tier2, 3 = tier2+tier2→tier3
export const FUSION_RECIPES = [
  // ===== Tier 2 Fusions (base monsters → intermediate) =====
  { mat1: 'blue_slime', mat2: 'bat', result: 'dracula', tier: 2 },
  { mat1: 'blue_slime', mat2: 'rat', result: 'bone_slime', tier: 2 },
  { mat1: 'rat', mat2: 'bat', result: 'goblin', tier: 2 },
  { mat1: 'goblin', mat2: 'bear', result: 'dragoon', tier: 2 },
  { mat1: 'bone_slime', mat2: 'demon', result: 'bone_dragon', tier: 2 },
  { mat1: 'demon', mat2: 'dark_witch', result: 'demon_lord', tier: 2 },
  { mat1: 'angel', mat2: 'demon', result: 'chaos_elemental', tier: 2 },
  { mat1: 'blue_slime', mat2: 'angel', result: 'chaos_slime', tier: 2 },
  { mat1: 'bone_slime', mat2: 'rat', result: 'bone_spider', tier: 2 },
  // --- New Tier 2 ---
  { mat1: 'bird', mat2: 'fairy', result: 'wyvern', tier: 2 },
  { mat1: 'ghost', mat2: 'skeleton', result: 'lich', tier: 2 },
  { mat1: 'wolf', mat2: 'horse', result: 'knight', tier: 2 },
  { mat1: 'frost_slime', mat2: 'flame_rat', result: 'magma_slime', tier: 2 },
  { mat1: 'frog', mat2: 'snake', result: 'frost_lizard', tier: 2 },
  { mat1: 'spider', mat2: 'ghost', result: 'phantom_troll', tier: 2 },
  { mat1: 'orc', mat2: 'goblin', result: 'giant_brute', tier: 2 },
  { mat1: 'bat', mat2: 'ghost', result: 'phantom_bat', tier: 2 },
  { mat1: 'plant', mat2: 'frog', result: 'golem', tier: 2 },
  { mat1: 'wolf', mat2: 'bat', result: 'greedy_goblin', tier: 2 },

  // ===== Tier 3 Fusions (tier2 + tier2 → ultimate) =====
  { mat1: 'dracula', mat2: 'demon_lord', result: 'vampire_king', tier: 3 },
  { mat1: 'bone_dragon', mat2: 'chaos_elemental', result: 'void_dragon', tier: 3 },
  { mat1: 'chaos_slime', mat2: 'bone_slime', result: 'primordial_ooze', tier: 3 },
  { mat1: 'dragoon', mat2: 'lich', result: 'death_knight', tier: 3 },
  { mat1: 'wyvern', mat2: 'knight', result: 'sky_overlord', tier: 3 },
];

// Element pools for random element assignment on fusion
export const ELEMENT_SKILL_POOLS = {
  fire:  ['fire_ball', 'fire_storm', 'flame_slash', 'meteor'],
  water: ['blizzard', 'ice_lance', 'freeze_touch', 'heal'],
  earth: ['smash', 'iron_wall', 'deadly_poison', 'barrier'],
  wind:  ['wind_arrow', 'gale_shot', 'storm_volley', 'blade_dance'],
  light: ['divine_wrath', 'heal', 'group_heal', 'blessing'],
  dark:  ['dark_pulse', 'drain_touch', 'abyss_fall', 'space_distortion']
};

export const ELEMENT_STAT_MODS = {
  fire:  { hp: 0.95, atk: 1.15, def: 0.90, spd: 1.05, int: 1.00 },
  water: { hp: 1.10, atk: 0.90, def: 1.05, spd: 0.95, int: 1.10 },
  earth: { hp: 1.15, atk: 1.00, def: 1.15, spd: 0.85, int: 0.90 },
  wind:  { hp: 0.90, atk: 1.05, def: 0.85, spd: 1.20, int: 1.00 },
  light: { hp: 1.05, atk: 0.90, def: 1.00, spd: 1.00, int: 1.15 },
  dark:  { hp: 1.00, atk: 1.10, def: 0.95, spd: 1.05, int: 1.05 }
};

const ALL_ELEMENTS = ['fire', 'water', 'earth', 'wind', 'light', 'dark'];

// Sloped (triangular) stat-mod roll in [-0.2, +0.2], biased toward the center (0)
export function rollStatMod() {
  return ((Math.random() + Math.random()) / 2 - 0.5) * 0.4;
}

// Get Fusion Result based on materials
export function getFusionResult(mat1Key, mat2Key) {
  const recipe = FUSION_RECIPES.find(r => 
    (r.mat1 === mat1Key && r.mat2 === mat2Key) || 
    (r.mat1 === mat2Key && r.mat2 === mat1Key)
  );
  return recipe ? recipe.result : null;
}

// Apply random element to a fused monster and modify its stats/skills
export function applyFusionElement(monster) {
  const element = ALL_ELEMENTS[Math.floor(Math.random() * ALL_ELEMENTS.length)];
  monster.fusionElement = element;

  // Apply stat modifiers based on element
  const mods = ELEMENT_STAT_MODS[element];
  if (mods) {
    const template = MONSTERS[monster.monsterKey];
    if (template) {
      monster.baseHP = Math.floor(template.hp * mods.hp);
      monster.baseATK = Math.floor(template.atk * mods.atk);
      monster.baseDEF = Math.floor(template.def * mods.def);
      monster.baseSPD = Math.floor(template.spd * mods.spd);
      monster.baseINT = Math.floor(template.int * mods.int);
    }
  }

  // Add an element-themed skill. Stored on fusionSkill so it persists across stat recalcs/reloads.
  const pool = ELEMENT_SKILL_POOLS[element];
  if (pool && pool.length > 0) {
    const newSkill = pool[Math.floor(Math.random() * pool.length)];
    monster.fusionSkill = newSkill;
    if (monster.activeSkills && !monster.activeSkills.includes(newSkill)) {
      monster.activeSkills.unshift(newSkill);
    }
  }

  return element;
}

// Selectable Heroes for a New Game
export const STARTING_HEROES = [
  { name: 'マルク', classKey: 'WARRIOR_1', portrait: 'warrior' },
  { name: 'エルザ', classKey: 'ARCHER_1', portrait: 'archer' },
  { name: 'セラフィ', classKey: 'PRIEST_1', portrait: 'priest' },
  { name: 'カゲ', classKey: 'THIEF_1', portrait: 'thief' },
  { name: 'ガレス', classKey: 'SUMMONER_1', portrait: 'summoner_1' },
  { name: 'レナ', classKey: 'MAGE_1', portrait: 'mage' },
  { name: 'レオン', classKey: 'WARRIOR_1', portrait: 'warrior' },
  { name: 'ルー', classKey: 'ARCHER_1', portrait: 'archer' },
  { name: 'ミラ', classKey: 'PRIEST_1', portrait: 'priest' },
  { name: 'シオン', classKey: 'THIEF_1', portrait: 'thief' },
  { name: 'リオ', classKey: 'SUMMONER_1', portrait: 'summoner_1' },
  { name: 'ルト', classKey: 'MAGE_1', portrait: 'mage' }
];

export const PAID_HEROES = [
  { name: '竜騎士アルス', classKey: 'WARRIOR_2', portrait: 'warrior', cost: 150, desc: '高い攻防バランスを誇るTier 2の騎士。火炎斬を使いこなす。' },
  { name: '聖女リリス', classKey: 'PRIEST_3', portrait: 'priest', cost: 150, desc: '強大な全体ヒールと究極の聖光で味方を守護するTier 3の大司教。' },
  { name: '影刃 of ハヤテ', classKey: 'THIEF_2', portrait: 'thief', cost: 150, desc: '敏捷性に優れたTier 2の忍者。毒ダガーで敵を蝕む。' },
  { name: '大賢者アルバス', classKey: 'MAGE_3', portrait: 'mage', cost: 150, desc: '超範囲魔法メテオで敵の群れを一瞬で粉砕するTier 3の賢者。' },
  { name: '精霊姫アリア', classKey: 'SUMMONER_2', portrait: 'summoner_1', cost: 150, desc: '幻獣や使い魔を召喚して味方を支援するTier 2の召喚術師。' },
  { name: '神速のシルフ', classKey: 'ARCHER_3', portrait: 'archer', cost: 150, desc: '扇状の連射と直線貫通ゲイルショットを放つTier 3のスナイパー。' },
  { name: '暗黒騎士ヴァルカン', classKey: 'WARRIOR_2', portrait: 'warrior', cost: 150, desc: '闇の炎と高い耐久力を併せ持ったTier 2の暗黒騎士。' },
  { name: '聖騎士ジャンヌ', classKey: 'WARRIOR_3', portrait: 'warrior', cost: 150, desc: '無敵の盾で味方を牽引するTier 3のパラディン。' },
  { name: '冥界の導き手ヘラ', classKey: 'MAGE_2', portrait: 'mage', cost: 150, desc: '氷槍や氷結魔法を操り敵の足を止めるTier 2の魔導士。' },
  { name: '機巧のレンジャー・バレット', classKey: 'ARCHER_3', portrait: 'archer', cost: 150, desc: 'タレット設置と超長距離からの連続狙撃を両立するTier 3のスナイパー。' }
];

// Conquest Levels & Unlocks (30 stages = 1/5 volume, each stage = difficulty of 5 old stages)
export const CONQUEST_STAGES = [];

const worldBossTemplates = {
  1: { normal: ['blue_slime', 'bat', 'rat'], boss: 'goblin' },
  2: { normal: ['goblin', 'bird', 'wind_blue_slime'], boss: 'wind_bird' },
  3: { normal: ['bone_spider', 'earth_rat', 'bone_slime'], boss: 'earth_bear' },
  4: { normal: ['bear', 'dark_bat', 'earth_goblin'], boss: 'dark_bat' },
  5: { normal: ['demon', 'dark_witch', 'fire_rat'], boss: 'fire_demon' },
  6: { normal: ['dragoon', 'earth_bear', 'light_angel'], boss: 'light_dragoon' },
  7: { normal: ['chaos_slime', 'water_blue_slime', 'water_bird'], boss: 'water_chaos_slime' },
  8: { normal: ['dracula', 'dark_bat', 'dark_witch'], boss: 'dark_dracula' },
  9: { normal: ['dragon', 'bone_dragon', 'fire_demon'], boss: 'fire_dragon' },
  10: { normal: ['demon_lord', 'chaos_elemental', 'dark_witch'], boss: 'dark_demon_lord' }
};

// Hero unlocks at boss stages (thinned to 5 key stages)
const unlockHeroes = {
  3:  'カゲ',
  9:  'エルザ',
  15: 'リオ',
  21: 'レオン',
  30: 'ミラ'
};

// 30 stages total (10 worlds x 3 stages). Each stage difficulty = old stage s*5.
for (let s = 1; s <= 30; s++) {
  const world = Math.ceil(s / 3);
  const isBoss = s % 3 === 0;
  const isSubBoss = s === 14;
  const templates = worldBossTemplates[world] || worldBossTemplates[10];

  // Equivalent difficulty: each new stage = 5 old stages
  const sEquiv = s * 5;

  let enemyKey = templates.normal[(s - 1) % templates.normal.length];
  if (isBoss) {
    enemyKey = templates.boss;
  } else if (isSubBoss) {
    enemyKey = 'fire_chaos_elemental';
  }

  // Boosted difficulty (much harder than original formula)
  const enemyCount = Math.min(40, 10 + Math.floor(sEquiv / 4));
  const enemyLevel = 8 + Math.floor(sEquiv * 1.2);
  const rewardHero = unlockHeroes[s] || null;

  CONQUEST_STAGES.push({
    stage: s,
    name: `World ${world}-${s - (world - 1) * 3}`,
    enemyKey,
    enemyCount,
    enemyLevel,
    rewardHero,
    desc: `Conquest stage ${s}`
  });
}

// ==========================================================================
// ELEMENTAL SYSTEM DYNAMIC GENERATION
// ==========================================================================

// 1. Assign elements to existing skills in SKILLS
const skillElements = {
  flame_slash: 'fire',
  fire_ball: 'fire',
  fire_storm: 'fire',
  meteor: 'fire',
  nova_burst: 'fire',
  fire_shield: 'fire',
  ninjutsu_fire: 'fire',
  
  ice_spear: 'water',
  blizzard: 'water',
  freeze_touch: 'water',
  heal: 'light',
  group_heal: 'light',
  
  wind_arrow: 'wind',
  gale_shot: 'wind',
  rain_arrow: 'wind',
  storm_volley: 'wind',
  blade_dance: 'wind',
  
  smash: 'earth',
  shield_bash: 'earth',
  guard: 'earth',
  iron_wall: 'earth',
  provoke: 'earth',
  double_strike: 'earth',
  
  holy_bolt: 'light',
  divine_wrath: 'light',
  holy_cross: 'light',
  judgement: 'light',
  holy_shield: 'light',
  barrier: 'light',
  blessing: 'light',
  resurrection: 'light',
  hallowed_ground: 'light',
  miracle_light: 'light',
  
  dark_pulse: 'dark',
  apocalypse: 'dark',
  abyss_fall: 'dark',
  poison_dagger: 'dark',
  throat_cut: 'dark',
  illusion_fear: 'dark',
  silence_seal: 'dark',
  assassinate: 'dark',
  deadly_poison: 'dark'
};

for (const [skKey, el] of Object.entries(skillElements)) {
  if (SKILLS[skKey]) {
    SKILLS[skKey].element = el;
  }
}

// 2. Assign base elements to existing base monsters in MONSTERS
const baseElements = {
  blue_slime: 'water',
  bone_slime: 'earth',
  bat: 'dark',
  rat: 'earth',
  bird: 'wind',
  bear: 'earth',
  goblin: 'earth',
  demon: 'fire',
  demon_lord: 'fire',
  dracula: 'dark',
  dragon: 'fire',
  bone_dragon: 'dark',
  angel: 'light',
  golem: 'earth',
  dragoon: 'light',
  dark_witch: 'dark',
  chaos_elemental: 'light',
  chaos_slime: 'dark',
  bone_spider: 'earth',
  dragon_cyclops: 'fire',
  dragon_knight: 'light',
  dragon_lord: 'fire',
  elder_dragon: 'wind',
  fairy: 'wind',
  fish: 'water',
  flame_cyclops: 'fire',
  flame_rat: 'fire',
  flying_rat: 'wind',
  frog: 'water',
  frost_lizard: 'water',
  frost_slime: 'water',
  ghost: 'dark',
  giant_brute: 'earth',
  glacier_gargoyle: 'water',
  greedy_goblin: 'earth',
  hell_mimic: 'fire',
  hobgoblin_mage: 'wind',
  horse: 'wind',
  inferno_gargoyle: 'fire',
  knight: 'light',
  lich: 'dark',
  lion: 'earth',
  magma_slime: 'fire',
  obsidian_gargoyle: 'dark',
  octopus: 'water',
  orc: 'earth',
  phantom_bat: 'dark',
  phantom_troll: 'dark',
  plant: 'earth',
  poltergeist: 'wind',
  skeleton: 'dark',
  skeleton_warrior: 'dark',
  zombie: 'dark',
  wolf: 'earth',
  wyvern: 'fire',
  worm: 'earth',
  chest: 'earth',
  cloud: 'wind',
  crown: 'light',
  crystal: 'light',
  eye: 'dark',
  eye_cluster: 'dark',
  flame: 'fire',
  tornado: 'wind',
  turtle: 'water',
  snail: 'water',
  snake: 'earth',
  spider: 'earth',
  spider_rider: 'earth',
  trap_spider: 'earth',
  void: 'dark',
  witch: 'dark',
  pot: 'earth',
  titan: 'earth',
  drop: 'water',
  vampire_king: 'dark',
  void_dragon: 'dark',
  primordial_ooze: 'earth',
  death_knight: 'dark',
  sky_overlord: 'light'
};

for (const [mKey, el] of Object.entries(baseElements)) {
  if (MONSTERS[mKey]) {
    MONSTERS[mKey].element = el;
    MONSTERS[mKey].spriteKey = mKey;
  }
}

// 3. Define elemental variants generation mapping
const ELEMENTAL_SKILL_MAPPING = {
  fire: {
    smash: 'flame_slash',
    magic_missile: 'fire_ball',
    ice_spear: 'flame_slash',
    wind_arrow: 'fire_ball',
    dark_pulse: 'fire_ball',
    gale_shot: 'fire_storm',
    rain_arrow: 'fire_storm',
    storm_volley: 'meteor',
    apocalypse: 'meteor',
    divine_wrath: 'fire_storm',
    holy_cross: 'fire_ball',
    assassinate: 'flame_slash',
    poison_dagger: 'flame_slash',
    shadow_step: 'berserk'
  },
  water: {
    smash: 'freeze_touch',
    magic_missile: 'ice_spear',
    fire_ball: 'ice_spear',
    wind_arrow: 'ice_spear',
    dark_pulse: 'ice_spear',
    gale_shot: 'blizzard',
    rain_arrow: 'blizzard',
    storm_volley: 'blizzard',
    apocalypse: 'blizzard',
    divine_wrath: 'blizzard',
    holy_cross: 'ice_spear',
    assassinate: 'freeze_touch',
    poison_dagger: 'freeze_touch',
    shadow_step: 'space_distortion'
  },
  wind: {
    smash: 'blade_dance',
    magic_missile: 'wind_arrow',
    fire_ball: 'wind_arrow',
    ice_spear: 'wind_arrow',
    dark_pulse: 'wind_arrow',
    gale_shot: 'gale_shot',
    rain_arrow: 'rain_arrow',
    storm_volley: 'storm_volley',
    apocalypse: 'storm_volley',
    divine_wrath: 'storm_volley',
    holy_cross: 'gale_shot',
    assassinate: 'throat_cut',
    poison_dagger: 'throat_cut',
    shadow_step: 'agility_boost'
  },
  earth: {
    smash: 'smash',
    magic_missile: 'shield_bash',
    fire_ball: 'shield_bash',
    ice_spear: 'shield_bash',
    wind_arrow: 'shield_bash',
    dark_pulse: 'shield_bash',
    gale_shot: 'iron_wall',
    rain_arrow: 'iron_wall',
    storm_volley: 'provoke',
    apocalypse: 'provoke',
    divine_wrath: 'iron_wall',
    holy_cross: 'guard',
    assassinate: 'smash',
    poison_dagger: 'smash',
    shadow_step: 'provoke'
  },
  light: {
    smash: 'holy_bolt',
    magic_missile: 'holy_bolt',
    fire_ball: 'holy_cross',
    ice_spear: 'holy_cross',
    wind_arrow: 'holy_bolt',
    dark_pulse: 'holy_cross',
    gale_shot: 'divine_wrath',
    rain_arrow: 'divine_wrath',
    storm_volley: 'judgement',
    apocalypse: 'judgement',
    divine_wrath: 'divine_wrath',
    holy_cross: 'holy_cross',
    assassinate: 'justice_blade',
    poison_dagger: 'holy_bolt',
    shadow_step: 'blessing'
  },
  dark: {
    smash: 'poison_dagger',
    magic_missile: 'dark_pulse',
    fire_ball: 'dark_pulse',
    ice_spear: 'dark_pulse',
    wind_arrow: 'poison_dagger',
    gale_shot: 'abyss_fall',
    rain_arrow: 'abyss_fall',
    storm_volley: 'apocalypse',
    apocalypse: 'apocalypse',
    divine_wrath: 'abyss_fall',
    holy_cross: 'dark_pulse',
    assassinate: 'assassinate',
    poison_dagger: 'deadly_poison',
    shadow_step: 'shadow_step'
  }
};

const baseMonsters = { ...MONSTERS };
const elementsList = [
  { key: 'fire', suffix: '（火）', color: '#ff3333', hueShift: 140, saturate: 1.5, brightness: 1.0 },
  { key: 'water', suffix: '（水）', color: '#33ccff', hueShift: 200, saturate: 1.5, brightness: 1.0 },
  { key: 'wind', suffix: '（風）', color: '#33ff55', hueShift: 280, saturate: 1.3, brightness: 1.0 },
  { key: 'earth', suffix: '（地）', color: '#ffcc66', hueShift: 60, saturate: 1.2, brightness: 0.9 },
  { key: 'light', suffix: '（光）', color: '#ffff99', hueShift: 180, saturate: 1.0, brightness: 1.5 },
  { key: 'dark', suffix: '（闇）', color: '#cc33ff', hueShift: 300, saturate: 1.5, brightness: 0.8 }
];

for (const [baseKey, baseMon] of Object.entries(baseMonsters)) {
  elementsList.forEach(elInfo => {
    const variantKey = `${elInfo.key}_${baseKey}`;
    
    // Scale stats slightly depending on element
    let hpMul = 1.0, atkMul = 1.0, defMul = 1.0, spdMul = 1.0, intMul = 1.0;
    if (baseMon.element !== elInfo.key) {
      if (elInfo.key === 'fire') { atkMul = 1.15; intMul = 1.05; }
      else if (elInfo.key === 'water') { defMul = 1.15; hpMul = 1.05; }
      else if (elInfo.key === 'wind') { spdMul = 1.20; }
      else if (elInfo.key === 'earth') { hpMul = 1.15; defMul = 1.10; }
      else if (elInfo.key === 'light') { intMul = 1.15; spdMul = 1.05; }
      else if (elInfo.key === 'dark') { atkMul = 1.10; intMul = 1.10; }
    }

    const newSkillTree = baseMon.skillTree.map(node => {
      const mapping = ELEMENTAL_SKILL_MAPPING[elInfo.key];
      const newSkill = (mapping && mapping[node.skill]) ? mapping[node.skill] : node.skill;
      return { level: node.level, skill: newSkill };
    });

    MONSTERS[variantKey] = {
      name: baseMon.element === elInfo.key ? baseMon.name : `${baseMon.name}${elInfo.suffix}`,
      hp: Math.floor(baseMon.hp * hpMul),
      atk: Math.floor(baseMon.atk * atkMul),
      def: Math.floor(baseMon.def * defMul),
      spd: Math.floor(baseMon.spd * spdMul),
      int: Math.floor(baseMon.int * intMul),
      xp: baseMon.xp,
      rarity: baseMon.rarity,
      catchRate: baseMon.catchRate,
      color: elInfo.color,
      element: elInfo.key,
      spriteKey: baseKey,
      hueShift: elInfo.hueShift,
      saturate: elInfo.saturate,
      brightness: elInfo.brightness,
      skillTree: newSkillTree
    };
  });
}

// Fallback emojis dictionary for all monsters and classes
export const fallbackEmojis = {
  // Heroes
  warrior: '⚔️', archer: '🏹', priest: '🛡️', thief: '🥷', summoner_1: '🧙', mage: '🔮',
  warrior_1: '⚔️', warrior_2: '⚔️', warrior_3: '⚔️',
  archer_1: '🏹', archer_2: '🏹', archer_3: '🏹',
  priest_1: '🛡️', priest_2: '🛡️', priest_3: '🛡️',
  thief_1: '🥷', thief_2: '🥷', thief_3: '🥷',
  summoner_2: '🧙', summoner_3: '🧙',
  mage_1: '🔮', mage_2: '🔮', mage_3: '🔮',
  
  // Monsters
  blue_slime: '💧', bone_slime: '☠️', bat: '🦇', rat: '🐀', flame_rat: '🐀', bird: '🦅', bear: '🐻',
  goblin: '👺', demon: '😈', demon_lord: '👹', dracula: '🧛', dragon: '🐉', bone_dragon: '🐲',
  angel: '👼', golem: '🗿', dragoon: '🏇', dark_witch: '🧙‍♀️', chaos_elemental: '🌀', chaos_slime: '☣️',
  bone_spider: '🕷️',
  dragon_cyclops: '🐉',
  dragon_knight: '🏇',
  dragon_lord: '🐉',
  elder_dragon: '🐲',
  fairy: '🧚',
  fish: '🐟',
  flame_cyclops: '👁️',
  flame_rat: '🐀',
  flying_rat: '🦇',
  frog: '🐸',
  frost_lizard: '🦎',
  frost_slime: '💧',
  ghost: '👻',
  giant_brute: '👹',
  glacier_gargoyle: '🗿',
  greedy_goblin: '👺',
  hell_mimic: '📦',
  hobgoblin_mage: '🧙',
  horse: '🐴',
  inferno_gargoyle: '😈',
  knight: '🛡️',
  lich: '💀',
  lion: '🦁',
  magma_slime: '🔥',
  obsidian_gargoyle: '🦇',
  octopus: '🐙',
  orc: '🐗',
  phantom_bat: '🦇',
  phantom_troll: '👹',
  plant: '🌱',
  poltergeist: '👻',
  skeleton: '💀',
  skeleton_warrior: '⚔️',
  zombie: '🧟',
  wolf: '🐺',
  wyvern: '🐉',
  worm: '🐛',
  chest: '🎁',
  cloud: '☁️',
  crown: '👑',
  crystal: '💎',
  eye: '👁️',
  eye_cluster: '👁️',
  flame: '🔥',
  tornado: '🌪️',
  turtle: '🐢',
  snail: '🐌',
  snake: '🐍',
  spider: '🕷️',
  spider_rider: '🕷️',
  trap_spider: '🕷️',
  void: '🌀',
  witch: '🧙‍♀️',
  pot: '🏺',
  titan: '🗿',
  drop: '💧',
  vampire_king: '🧛',
  void_dragon: '🐲',
  primordial_ooze: '☣️',
  death_knight: '⚔️',
  sky_overlord: '👑'
};

// Safe and element-aware helper to get monster emoji
export function getMonsterEmoji(key) {
  if (!key) return '🐾';
  const lowerKey = key.toLowerCase();
  
  // 1. Check direct map
  if (fallbackEmojis[lowerKey]) {
    return fallbackEmojis[lowerKey];
  }
  
  // 2. Resolve via template in MONSTERS
  const template = MONSTERS[key];
  if (template) {
    if (template.icon) return template.icon;
    
    const spriteKey = template.spriteKey ? template.spriteKey.toLowerCase() : null;
    if (spriteKey && fallbackEmojis[spriteKey]) {
      return fallbackEmojis[spriteKey];
    }
    
    // Fallback based on element
    const element = template.element;
    if (element === 'fire') return '🔥';
    if (element === 'water') return '💧';
    if (element === 'wind') return '🌪️';
    if (element === 'earth') return '🌿';
    if (element === 'light') return '✨';
    if (element === 'dark') return '🌑';
  }
  
  // 3. Fallback based on prefix
  if (lowerKey.includes('_')) {
    const parts = lowerKey.split('_');
    const baseName = parts.slice(1).join('_');
    if (fallbackEmojis[baseName]) {
      return fallbackEmojis[baseName];
    }
    const lastPart = parts[parts.length - 1];
    if (fallbackEmojis[lastPart]) {
      return fallbackEmojis[lastPart];
    }
  }

  // 4. Ultimate cute default
  return '🐾';
}

// Global Language setting state
export let CURRENT_LANG = 'ja';

export function setLanguage(lang) {
  CURRENT_LANG = lang;
}

// Translations dictionaries
export const DB_TRANSLATIONS = {
  ja: {
    'gacha_title': 'ガチャ（英雄召喚）',
    'gacha_featured_title': '【ピックアップ】',
    'gacha_btn_1': '1回引く',
    'gacha_btn_10': '10連ガチャ',
    'gacha_btn_ad': '動画を見て1回無料',
    'monster_desc': '倒したモンスターが仲間になることがあります。パーティに編成して共に戦おう！',
    'filter_rarity': 'レアリティで絞り込み:',
    'rarity_common2': 'コモン',
    'rarity_uncommon2': 'アンコモン',
    'rarity_rare2': 'レア',
    'rarity_epic2': 'エピック',
    'rarity_legendary2': 'レジェンダリー',
    'sell_weapon': '武器',
    'sell_armor': '防具',
    'sell_accessory': '装飾',
    'sell_unequipped': '未装備',
    'sell_equipped': '装備中',
    'filter_all': 'すべて',
    'system_desc': 'ゲームの設定やセーブデータの管理を行います。',
    'sys_perf_title': '⚙️ パフォーマンス',
    'sys_perf_label': 'フレームレート制限 (30FPS)',
    'sys_visual_title': '📺 描画・UI表示',
    'sys_sound_title': '🔊 サウンド',
    'gacha_equip_title': '⚔️ 装備ガチャ 🛡️',
    'gacha_equip_desc': '伝説の武器や防具を手に入れよう！\n重複した装備も手に入ります（強化に使用可能）',
    'gacha_equip_btn_1': '1回引く',
    'gacha_equip_btn_10': '10連ガチャ',
    'gacha_equip_btn_ad': '📺 広告を見て無料ガチャ（1回）'
  },
  en: {
    // UI Labels
    'gacha_title': 'Gacha (Hero Summon)',
    'gacha_featured_title': '[Featured]',
    'gacha_btn_1': 'Summon x1',
    'gacha_btn_10': 'Summon x10',
    'gacha_btn_ad': 'Free Summon (Watch Ad)',
    'monster_desc': 'Defeated monsters may join you. Add them to your party and fight together!',
    'filter_rarity': 'Filter by Rarity:',
    'rarity_common2': 'Common',
    'rarity_uncommon2': 'Uncommon',
    'rarity_rare2': 'Rare',
    'rarity_epic2': 'Epic',
    'rarity_legendary2': 'Legendary',
    'sell_weapon': 'Weapon',
    'sell_armor': 'Armor',
    'sell_accessory': 'Accessory',
    'sell_unequipped': 'Unequipped',
    'sell_equipped': 'Equipped',
    'filter_all': 'All',

    // Heroes
    'マルク': 'Marc',
    'エルザ': 'Elsa',
    'セラフィ': 'Seraphy',
    'カゲ': 'Kage',
    'ガレス': 'Gares',
    'レナ': 'Rena',
    'レオン': 'Leon',
    'ルー': 'Luu',
    'ミラ': 'Mila',
    'シオン': 'Shion',
    'リオ': 'Rio',
    'ルト': 'Luto',
    'ミラ': 'Mila',
    
    // Paid Heroes
    '竜騎士アルス': 'Dragon Knight Arus',
    '聖女リリス': 'Saint Lilith',
    '影刃 of ハヤテ': 'Shadow Blade Hayate',
    '大賢者アルバス': 'Great Sage Albus',
    '精霊姫アリア': 'Spirit Princess Aria',
    '神速のシルフ': 'Godspeed Sylph',
    '暗黒騎士ヴァルカン': 'Dark Knight Vulcan',
    '聖騎士ジャンヌ': 'Holy Knight Jeanne',
    '冥界の導き手ヘラ': 'Underworld Guide Hera',
    '機巧のレンジャー・バレット': 'Gear Ranger Bullet',
    '高い攻防バランスを誇るTier 2の騎士。火炎斬を使いこなす。': 'Tier 2 Knight with high balance of ATK/DEF. Masters Flame Slash.',
    '強大な全体ヒールと究極の聖光で味方を守護するTier 3の大司教。': 'Tier 3 Archpriest protecting allies with massive group heal and ultimate holy light.',
    '敏捷性に優れたTier 2の忍者。毒ダガーで敵を蝕む。': 'Tier 2 Ninja with superior speed. Poisons enemies with Venom Dagger.',
    '超範囲魔法メテオで敵の群れを一瞬で粉砕するTier 3の賢者。': 'Tier 3 Sage who obliterates enemy hordes with massive Meteor rain.',
    '幻獣や使い魔を召喚して味方を支援するTier 2の召喚術師。': 'Tier 2 Conjurer summoning beasts and elementals to support allies.',
    '扇状の連射と直線貫通ゲイルショットを放つTier 3のスナイパー。': 'Tier 3 Ranger unleashing fan-shaped volleys and piercing Gale Shot.',
    '闇の炎と高い耐久力を併せ持ったTier 2の暗黒騎士。': 'Tier 2 Dark Knight combining dark flame and high durability.',
    '無敵の盾で味方を牽引するTier 3のパラディン。': 'Tier 3 Paladin leading allies with an invincible shield.',
    '氷槍や氷結魔法を操り敵の足を止めるTier 2の魔導士。': 'Tier 2 Wizard freezing enemies with Ice Spear and frost magic.',
    'タレット設置と超長距離からの連続狙撃を両立するTier 3のスナイパー。': 'Tier 3 Sniper placing automatic turrets and firing ultra long-range snipes.',

    // Classes
    WARRIOR_1: { name: 'Warrior', desc: 'Front-line tank with high HP and defense.' },
    WARRIOR_2: { name: 'Knight', desc: 'Enhanced defense, with powerful fire attribute strikes.' },
    WARRIOR_3: { name: 'Paladin', desc: 'Ultimate holy knight protecting allies with barriers.' },
    MAGE_1: { name: 'Mage', desc: 'Spellcaster unleashing fire magic to burn down enemies.' },
    MAGE_2: { name: 'Wizard', desc: 'Masters fire and lightning magic, dealing massive AOE damage.' },
    MAGE_3: { name: 'Archmage', desc: 'Unleashes apocalypse and meteor spells, obliterating all foes.' },
    ARCHER_1: { name: 'Archer', desc: 'Ranged physical attacker utilizing wind and bows.' },
    ARCHER_2: { name: 'Hunter', desc: 'Fires poison and rapid gale shots from afar.' },
    ARCHER_3: { name: 'Ranger', desc: 'Fires storm volleys, raining down arrows from the sky.' },
    PRIEST_1: { name: 'Priest', desc: 'Heals allies and boosts party defense.' },
    PRIEST_2: { name: 'Bishop', desc: 'Casts group heals and holy shields to protect the party.' },
    PRIEST_3: { name: 'Paladin-Priest', desc: 'Revives dead allies and casts divine light magic.' },
    THIEF_1: { name: 'Thief', desc: 'Fast attacker who steals gold and poisons enemies.' },
    THIEF_2: { name: 'Assassin', desc: 'Uses smoke bombs and shadow steps to strike critically.' },
    THIEF_3: { name: 'Ninja', desc: 'Silent executioner executing targets with high speed.' },
    SUMMONER_1: { name: 'Summoner', desc: 'Summons minions to fight alongside the party.' },
    SUMMONER_2: { name: 'Conjurer', desc: 'Summons familiars and elemental spirits.' },
    SUMMONER_3: { name: 'Summoner King', desc: 'Summons ancient dragons and ultimate spirits.' },

    // Range types
    '近接': 'Melee',
    '遠距離': 'Ranged',
    '自身': 'Self',

    // Skills
    smash: { name: 'Smash', desc: 'Deals 1.5x physical damage to a single enemy.' },
    guard: { name: 'Guard', desc: 'Increases own defense by 50% for 5 seconds.' },
    shield_bash: { name: 'Shield Bash', desc: 'Strikes with shield, dealing damage and stunning for 1.5s.' },
    provoke: { name: 'Provoke', desc: 'Taunts all nearby enemies to attack self.' },
    iron_wall: { name: 'Iron Wall', desc: 'Increases defense by 80% and recovers 10% HP.' },
    flame_slash: { name: 'Flame Slash', desc: 'Deals 1.8x fire damage to a single target.' },
    fire_shield: { name: 'Fire Shield', desc: 'Creates a shield, reflecting 20% damage as fire.' },
    berserk: { name: 'Berserk', desc: 'Increases attack speed and ATK by 50% for 6s.' },
    holy_shield: { name: 'Holy Shield', desc: 'Creates a holy shield, absorbing all damage for 3s.' },
    justice_blade: { name: 'Justice Blade', desc: 'Deals 2.5x physical damage to a single target.' },
    holy_cross: { name: 'Holy Cross', desc: 'Deals 2.0x light damage to all enemies.' },
    divine_aura: { name: 'Divine Aura', desc: 'Heals all allies by 15% HP and increases DEF.' },

    fire_ball: { name: 'Fireball', desc: 'Fires a fireball, dealing 1.8x magic damage.' },
    fire_storm: { name: 'Firestorm', desc: 'Deals 2.0x fire damage to all enemies.' },
    meteor: { name: 'Meteor', desc: 'Summons a meteor, dealing 3.0x fire damage.' },
    apocalypse: { name: 'Apocalypse', desc: 'Unleashes dark fire, dealing 4.0x damage to all.' },
    summon_dragon: { name: 'Summon Dragon', desc: 'Summons a fire dragon to fight for 15s.' },

    wind_arrow: { name: 'Wind Arrow', desc: 'Fires a swift wind arrow, dealing 1.4x damage.' },
    gale_shot: { name: 'Gale Shot', desc: 'Fires rapid wind arrows, dealing 2.0x damage.' },
    rain_arrow: { name: 'Arrow Rain', desc: 'Rains arrows on all enemies, dealing 1.8x damage.' },
    storm_volley: { name: 'Storm Volley', desc: 'Deals 3.0x wind damage to all enemies.' },

    heal: { name: 'Heal', desc: 'Heals a single ally with lowest HP.' },
    group_heal: { name: 'Group Heal', desc: 'Heals all allies.' },
    barrier: { name: 'Barrier', desc: 'Creates a barrier, increasing party DEF by 30%.' },
    resurrection: { name: 'Resurrection', desc: 'Revives a dead ally with 30% HP.' },
    divine_wrath: { name: 'Divine Wrath', desc: 'Deals 2.2x light damage to a single enemy.' },

    steal: { name: 'Steal', desc: 'Steals gold from a target and deals 1.2x damage.' },
    poison_dagger: { name: 'Poison Dagger', desc: 'Poisons target, dealing damage over time.' },
    shadow_step: { name: 'Shadow Step', desc: 'Increases speed by 50% and dodge by 30%.' },
    smoke_bomb: { name: 'Smoke Bomb', desc: 'Throws smoke bomb, reducing enemy accuracy by 40%.' },
    assassinate: { name: 'Assassinate', desc: 'Deals 3.5x physical damage to a single enemy.' },

    summon_slime: { name: 'Summon Slime', desc: 'Summons a slime to fight alongside the party.' },
    summon_bat: { name: 'Summon Bat', desc: 'Summons a bat.' },
    summon_wolf: { name: 'Summon Wolf', desc: 'Summons a wolf.' },
    summon_golem: { name: 'Summon Golem', desc: 'Summons a defensive stone golem.' },
    summon_spirit: { name: 'Summon Spirit', desc: 'Summons an elemental spirit.' },

    ice_spear: { name: 'Ice Spear', desc: 'Fires an ice spear, freezing the target for 1s.' },
    blizzard: { name: 'Blizzard', desc: 'Deals 2.2x water damage to all enemies and slows them.' },
    freeze_touch: { name: 'Freeze Touch', desc: 'Freezes target for 2s and deals damage.' },
    space_distortion: { name: 'Warp Step', desc: 'Warp behind enemy and deal 2.0x damage.' },
    agility_boost: { name: 'Agility Boost', desc: 'Increases speed of all allies by 30%.' },
    throat_cut: { name: 'Throat Cut', desc: 'Deals 2.8x physical damage with silence for 2s.' },
    shield_bash: { name: 'Shield Bash', desc: 'Stuns target for 1.5s.' },
    provoke: { name: 'Provoke', desc: 'Taunts all enemies.' },
    holy_bolt: { name: 'Holy Bolt', desc: 'Deals 1.5x light magic damage.' },
    justice_blade: { name: 'Justice Blade', desc: 'Deals 2.5x physical damage.' },
    blessing: { name: 'Blessing', desc: 'Increases all stats of allies by 15% for 6s.' },
    abyss_fall: { name: 'Abyss Fall', desc: 'Deals 2.5x dark damage to all targets.' },
    deadly_poison: { name: 'Deadly Poison', desc: 'Deals heavy poison damage over time.' },

    // Monsters
    blue_slime: 'Slime',
    bone_slime: 'Bone Slime',
    bat: 'Bat',
    rat: 'Rat',
    flame_rat: 'Flame Rat',
    bird: 'Giant Bird',
    bear: 'Mountain Bear',
    goblin: 'Goblin',
    demon: 'Demon',
    demon_lord: 'Demon Lord',
    dracula: 'Vampire',
    dragon: 'Dragon',
    bone_dragon: 'Bone Dragon',
    angel: 'Angel',
    golem: 'Golem',
    dragoon: 'Dragoon',
    dark_witch: 'Dark Witch',
    chaos_elemental: 'Chaos Elemental',
    chaos_slime: 'Chaos Slime',
    bone_spider: 'Bone Spider',
    dragon_cyclops: 'Dragon Cyclops',
    dragon_knight: 'Dragon Knight',
    dragon_lord: 'Dragon Lord',
    elder_dragon: 'Elder Dragon',
    fairy: 'Fairy',
    fish: 'Fish',
    flame_cyclops: 'Flame Cyclops',
    flame_rat: 'Flame Rat',
    flying_rat: 'Flying Rat',
    frog: 'Frog',
    frost_lizard: 'Frost Lizard',
    frost_slime: 'Frost Slime',
    ghost: 'Ghost',
    giant_brute: 'Giant Brute',
    glacier_gargoyle: 'Glacier Gargoyle',
    greedy_goblin: 'Greedy Goblin',
    hell_mimic: 'Hell Mimic',
    hobgoblin_mage: 'Hobgoblin Mage',
    horse: 'Horse',
    inferno_gargoyle: 'Inferno Gargoyle',
    knight: 'Knight',
    lich: 'Lich',
    lion: 'Lion',
    magma_slime: 'Magma Slime',
    obsidian_gargoyle: 'Obsidian Gargoyle',
    octopus: 'Octopus',
    orc: 'Orc',
    phantom_bat: 'Phantom Bat',
    phantom_troll: 'Phantom Troll',
    plant: 'Plant',
    poltergeist: 'Poltergeist',
    skeleton: 'Skeleton',
    skeleton_warrior: 'Skeleton Warrior',
    zombie: 'Zombie',
    wolf: 'Wolf',
    wyvern: 'Wyvern',
    worm: 'Worm',
    chest: 'Mimic Chest',
    cloud: 'Cloud',
    crown: 'Crown',
    crystal: 'Crystal',
    eye: 'One Eye',
    eye_cluster: 'Eye Cluster',
    flame: 'Flame',
    tornado: 'Tornado',
    turtle: 'Turtle',
    snail: 'Snail',
    snake: 'Snake',
    spider: 'Spider',
    spider_rider: 'Spider Rider',
    trap_spider: 'Trap Spider',
    void: 'Void',
    witch: 'Witch',
    pot: 'Pot',
    titan: 'Titan',
    drop: 'Drop',
    vampire_king: 'Vampire King',
    void_dragon: 'Void Dragon',
    primordial_ooze: 'Primordial Ooze',
    death_knight: 'Death Knight',
    sky_overlord: 'Sky Overlord',

    // New UI Labels
    hud_ad_boost: '⚡ Ad Boost Active',
    town_raid_title: 'Town Defense (Raid)',
    town_raid_desc: 'Defend the town from monsters',
    shop_daily_title: '💎 7-Day Buffs',
    shop_item_xp_daily: '🔥 XP Boost',
    shop_item_xp_daily_desc: 'Gain 1.5x XP (7 Days)',
    shop_item_drop_daily: '🍀 Drop Rate UP',
    shop_item_drop_daily_desc: 'Monster Soul drop rate x5 (7 Days)',
    shop_item_def_daily: '🛡️ Defense Boost',
    shop_item_def_daily_desc: 'All allies DEF x1.3 (7 Days)',
    btn_restore_purchases: '🔄 Restore Purchases',
    sys_perf_title: '⚙️ Performance',
    sys_visual_title: '📺 Display & UI',
    sys_sound_title: '🔊 Sound',
    guide_map_title: '🗺️ Exploration & Map',
    guide_map_world_title: 'World Progression:',
    guide_map_world_desc: 'Reach the end of the map to enter the next World for tougher enemies and better loot.',
    guide_map_town_title: 'Town Square:',
    guide_map_town_desc: 'Inside the green area, you can organize, heal, shop, and fast travel.',
    guide_stats_title: '📊 Stats',
    guide_stats_hp: 'Hit points. Reach 0 and the unit dies temporarily.',
    guide_stats_mp: 'Mana points. Consumed to cast skills.',
    guide_stats_atk: 'Physical Attack. Affects Warrior/Thief skills.',
    guide_stats_def: 'Physical Defense. Reduces incoming damage.',
    guide_stats_spd: 'Action Speed. Affects movement and attack rate.',
    guide_stats_int: 'Magic Attack. Affects Mage/Priest skills and heals.',
    guide_stats_crit_title: 'Critical Rate:',
    guide_stats_crit_desc: 'Chance to deal 1.5x damage on hit.',
    guide_classes_title: '⚔️ Hero Classes',
    guide_classes_warrior_title: 'Warrior:',
    guide_classes_warrior_desc: 'High HP/DEF.',
    guide_classes_warrior_tree: 'Warrior (LV15) -> Knight (LV30) -> Paladin',
    guide_classes_mage_title: 'Mage:',
    guide_classes_mage_desc: 'High INT, AOE damage.',
    guide_classes_mage_tree: 'Mage (LV15) -> Wizard (LV30) -> Archmage',
    guide_classes_priest_title: 'Priest:',
    guide_classes_priest_desc: 'Heal & Barrier.',
    guide_classes_priest_tree: 'Priest (LV15) -> Bishop (LV30) -> Archpriest',
    guide_classes_thief_title: 'Thief:',
    guide_classes_thief_desc: 'High SPD & Crit.',
    guide_classes_thief_tree: 'Thief (LV15) -> Assassin (LV30) -> Ninja',
    guide_classes_summoner_title: 'Summoner:',
    guide_classes_summoner_desc: 'Summons minions.',
    guide_classes_summoner_tree: 'Summoner (LV15) -> Conjurer (LV30) -> Summoner King',
    guide_skills_title: '🔮 Skills & Growth',
    guide_skills_auto_title: 'Auto Cast:',
    guide_skills_auto_desc: 'Characters automatically use skills when cooldowns are ready.',
    guide_skills_fusion_title: 'Monster Fusion:',
    guide_skills_fusion_desc: 'Fuse monsters to inherit stat boosts.',
    fusion_select_title: 'Select Fusion Target',
    fusion_select_base: 'Base: ',
    fusion_select_desc: 'Select a material. If recipe matches, it evolves. Otherwise base gains XP.',
    menu_title: 'MENU',
    party_desc: 'Organize squads for battle. You can switch between two active squads.',
    hero_desc: 'Change hero equipment and configure subclasses.',
    monster_desc: 'Manage caught monsters, fuse them, or sell them.',
    shop_desc: 'Use Gems to purchase items or watch ads for rewards.',
    system_desc: 'Manage game settings and save data.',
    sys_visual_title: '📺 Display & UI',
    sys_sound_title: '🔊 Sound',
    mon_allies_tab: 'Ally Monsters',
    mon_stock_tab: 'Caught Stock',
    mon_list_title_allies: 'Ally Monsters List',
    mon_skills_title: 'Skills',
    mon_btn_select_fusion: 'Select for Fusion',
    mon_btn_recruit: 'Recruit',
    equip_weapon: 'Weapon',
    equip_armor: 'Armor',
    equip_accessory: 'Accessory',
    party_squad_1: 'Squad 1',
    party_squad_2: 'Squad 2',
    party_squad_3: 'Squad 3',
    // --- Added EN skill names/descriptions (i18n gap fixes) ---
    magic_missile: { name: 'Magic Bolt', desc: 'Fires a magic projectile at a distant enemy (INT-based)' },
    purify: { name: 'Purifying Light', desc: 'Cures one ally of status ailments (burn, freeze, poison, petrify) (INT-based)' },
    phantom_blade: { name: 'Phantom Slayer', desc: 'Repeatedly teleports, slashing enemies in range at high speed (STR-based)' },
    summon_turret: { name: 'Deploy Turret', desc: 'Deploys a turret that automatically fires at the nearest enemy (INT-based)' },
    phantom_arrow: { name: 'Shadow Bind Arrow', desc: 'A shadow-binding magic arrow; may petrify (disable) the enemy (STR-based)' },
    summon_ally: { name: 'Summon Beast', desc: 'Summons a wolf (melee type) to assist in battle (INT-based)' },
    charm_enemy: { name: 'Charm', desc: 'Charms an enemy, confusing it (attacks its allies) for 5 seconds (INT-based)' },
    dark_pulse: { name: 'Dark Pulse', desc: 'Releases a wave of darkness, dealing dark damage to nearby enemies (INT-based)' },
    drain_touch: { name: 'Drain Touch', desc: 'Drains HP from a touched enemy with dark power (INT-based, 30% drain)' },
    ice_lance: { name: 'Ice Lance', desc: 'Hurls a sharp ice spear, dealing water-element damage (INT-based)' },
    cleanse: { name: 'Cleanse', desc: 'Removes debuffs from allies and purifies status ailments (INT-based)' },
    thunder_bolt: { name: 'Thunder Bolt', desc: 'Calls down lightning, dealing thunder damage to the target and nearby foes (INT-based)' },
    mana_burn: { name: 'Mana Burn', desc: 'Releases a wave that disrupts enemy mana, dealing moderate damage (INT-based)' },
    nova_burst: { name: 'Nova Burst', desc: 'Triggers a massive fire explosion, blasting multiple enemies (INT-based)' },
    hallowed_ground: { name: 'Sacred Area', desc: 'Radiates holy healing light, slightly healing all allies (INT-based)' },
    silence_seal: { name: 'Sealing Chains', desc: 'Binds an enemy with magic chains; may leave it unable to act (INT-based)' },
    miracle_light: { name: 'Miracle Heal', desc: 'A miraculous light that massively restores one ally HP (INT-based)' },
    judgement: { name: 'Judgement', desc: 'Drops a light of holy judgement, scorching enemies in range (INT-based)' },
    double_strike: { name: 'Double Slash', desc: 'A swift 2-hit combo on a single melee target for moderate damage (STR-based)' },
    ninjutsu_fire: { name: 'Fire Ninjutsu', desc: 'Forms a seal and breathes fire forward, burning enemies (INT-based)' },
    blade_dance: { name: 'Spiral Gale Blade', desc: 'Slashes around the self with gale blades, hitting a wide area (STR-based)' },
    double_shot: { name: 'Double Shot', desc: 'Quickly fires two arrows in succession at range (STR-based)' },
    focus_aim: { name: 'Precision Aim', desc: 'Focuses aim, boosting attack speed and accuracy for 6 seconds (STR-based)' },
    piercing_shot: { name: 'Heavy Bolt', desc: 'Fires a heavy armor-piercing arrow that pierces enemies in a line (STR-based)' },
    explosive_trap: { name: 'Claymore Trap', desc: 'Places a fire trap ahead that explodes when an enemy approaches (INT-based)' },
    heaven_arrow: { name: 'Ruin Gale', desc: 'Rains arrows of light from above, dealing massive damage to a single target (STR-based)' },
    wind_dance: { name: 'Accel Wind', desc: 'Cloaks self in wind, raising own attack speed by 60% for 6 seconds (STR-based)' },
    summon_fairy: { name: 'Summon Spirit', desc: 'Summons a healing spirit (ranged support type) (INT-based)' },
    soul_link: { name: 'Soul Link', desc: 'Links souls with allies, raising nearby allies defense for 5 seconds (INT-based)' },
    summon_specter: { name: 'Summon Wraith', desc: 'Temporarily summons a wraith warrior that attacks with dark damage (INT-based)' },
    illusion_fear: { name: 'Fear Blast', desc: 'Shows a terrifying illusion, dealing damage and confusion in range (INT-based)' },
    summon_phoenix: { name: 'Summon Phoenix', desc: 'Summons a phoenix that burns enemies and grants allies slight regen (INT-based)' },
    soul_sacrifice: { name: 'Soul Revive', desc: 'By a vow of souls, greatly restores the HP of all allies (INT-based)' },
    // --- Added EN UI strings (i18n gap fixes) ---
    sys_perf_label: 'Frame Rate Cap (30FPS)',
    gacha_equip_title: '⚔️ Equipment Gacha 🛡️',
    gacha_equip_desc: 'Get legendary weapons and armor!\nDuplicate gear can also be obtained (usable for enhancement)',
    gacha_equip_btn_1: 'Pull x1',
    gacha_equip_btn_10: 'Pull x10',
    gacha_equip_btn_ad: '📺 Watch Ad for a Free Pull (x1)',
  }
};

export const TRANSLATIONS = {
  ja: {
    // Title screen
    title_new_game: '冒険を始める',
    title_continue: '続きから',
    title_loading: 'ロード中...',
    title_reset: '🗑 初期化',
    loading_status_map: 'マップ生成中...',
    loading_status_assets: 'アセット読み込み中...',
    loading_status_prepare: '冒険の準備中...',
    
    // HUD
    hud_gold: 'ゴールド',
    hud_soul: 'ソウル',
    hud_gem: 'ジェム',
    hud_explore: '探索',
    hud_battle_log: '戦闘ログ',
    hud_log_hide: '非表示',
    hud_log_3: '3行',
    hud_log_5: '5行',
    hud_log_10: '10行',
    hud_log_20: '20行',
    hud_log_30: '30行',
    hud_enter_town: '村に入る',
    
    // Town
    town_title: '🏡 平和な村',
    town_exit: '✕ 戻る',
    town_recover_h3: '全員回復',
    town_recover_p: 'HP/MP回復・蘇生',
    town_teleport_h3: 'ファストトラベル',
    town_teleport_p: '他の村へ移動',
    town_shop_h3: 'よろず屋',
    town_shop_p: 'バフアイテム等の購入',
    town_shop_overlay_title: '👜 よろず屋',
    town_sell_h3: '売却所',
    town_sell_p: 'モンスター・装備の売却',
    town_enhance_h3: '装備の強化',
    town_enhance_p: '確率で装備を強化 (+1~+20)',
    town_menu_h3: '編成・装備',
    town_menu_p: 'キャラクター編成・装備管理',
    town_gacha_h3: 'ガチャ (召喚)',
    town_gacha_p: 'ジェム・広告でガチャ',
    town_raid_h3: '村防衛戦（レイド）',
    town_raid_p: '敵の波状攻撃（40隊列）から村を守る',

    // Menu tabs
    menu_tab_party: '隊列',
    menu_tab_hero: 'ヒーロー',
    menu_tab_monster: 'モンスター',
    menu_tab_shop: 'ジェム',
    menu_tab_system: 'システム',
    menu_tab_help: 'ヘルプ',
    equip_select_title: '装備選択',
    sort_label: '並び替え:',
    sort_atk: '攻撃力順 (ATK/INT)',
    sort_def: '防御力順 (DEF/HP)',
    sort_rarity: 'レアリティ順',
    sort_level: '強化値順 (LV)',
    
    // System
    sys_save_btn: 'セーブする',
    sys_reset_btn: '全データ初期化',
    sys_game_settings: 'ゲーム設定',
    sys_hpmp_display: 'HP/MP数値の表示',
    sys_skill_simple: 'スキル演出を簡素化',
    sys_bgm: 'BGM (音楽)',
    sys_se: 'SE (効果音)',
    sys_damage_popup: 'ダメージポップアップ',
    dmg_pop_all: '全て表示',
    dmg_pop_own: '自軍のみ表示',
    dmg_pop_none: '非表示',
    sys_low_perf: '軽量モード (負荷軽減)',
    sys_damage_log: 'ダメージログの表示',
    sys_skill_name: 'スキル名表示',
    sys_settings: 'ゲーム設定',
    sys_speed: '移動/戦闘速度:',
    sys_speed_1: '1倍速',
    sys_speed_2: '2倍速',
    sys_speed_3: '3倍速 (ロック)',
    
    // Subclass UI
    hero_subclass_title: 'サブ職業',
    subclass_select_title: 'サブ職の選択',
    subclass_not_set: 'サブ職業が未設定です。ソウルを消費して選択できます。',
    subclass_btn_set: 'サブ職設定 (100ソウル)',
    subclass_btn_lvup: 'ソウルでLvUP',
    subclass_btn_change: 'サブ職変更',
    subclass_lvl_cap: '（メイン職Lv上限）',
    
    // General
    unequip: '外す',
    equip: '装備',
    locked: '🔒',
    unlocked: '🔓',
    equip_no_item: 'なし',
    title_subtitle: 'ポケットランブル：軍勢リアルタイムバトル',
    party_squad_1: '第1隊列',
    party_squad_2: '第2隊列',
    party_squad_3: '第3隊列',
    party_active_header: '編成中のキャラ (最大20体)',
    party_reserve_header: '控えキャラ',
    
    // New UI Labels
    hud_ad_boost: '⚡ 広告ブースト中',
    town_raid_title: '村防衛戦（レイド）',
    town_raid_desc: '大量の敵から村を守る',
    shop_daily_title: '💎 7日間バフ',
    shop_item_xp_daily: '🔥 経験値ブースト',
    shop_item_xp_daily_desc: '獲得経験値が1.5倍になります（7日間）',
    shop_item_drop_daily: '🍀 ドロップ率UP',
    shop_item_drop_daily_desc: 'モンスターの魂ドロップ率が5倍（7日間）',
    shop_item_def_daily: '🛡️ 防御ブースト',
    shop_item_def_daily_desc: '全味方の防御力が1.3倍（7日間）',
    btn_restore_purchases: '🔄 購入を復元',
    sys_perf_title: '⚙️ パフォーマンス',
    sys_perf_label: 'フレームレート制限 (30FPS)',
    sys_visual_title: '📺 描画・UI表示',
    sys_sound_title: '🔊 サウンド',
    system_desc: 'ゲームの設定やセーブデータの管理を行います。',
    gacha_equip_title: '⚔️ 装備ガチャ 🛡️',
    gacha_equip_desc: '伝説の武器や防具を手に入れよう！\n重複した装備も手に入ります（強化に使用可能）',

    guide_map_title: '🗺️ 探索とマップ進行',
    guide_map_world_title: 'ワールドの移行と強敵:',
    guide_map_world_desc: 'マップの最奥（右下方向、世界の果ての村周辺など）に到達し、次のワールド（World 2など）へ移行することで、より強力な敵に遭遇し、高レアリティの装備を獲得することができます。',
    guide_map_town_title: '村の広場:',
    guide_map_town_desc: '各村の広場内（緑色の床のエリア）では、編成、回復、ショップ、ファストトラベルが利用できます。',
    guide_stats_title: '📊 ステータスについて',
    guide_stats_hp: '体力です。戦闘で0になると死亡（一時戦闘不能）します。',
    guide_stats_mp: '魔法力です。クールダウン完了したスキルを使用する際に消費します。',
    guide_stats_atk: '物理攻撃力です。戦士や盗賊のスキルダメージに影響します。',
    guide_stats_def: '物理防御力です。被ダメージを減らします。',
    guide_stats_spd: '行動速度です。攻撃頻度やマップ移動時の速さに影響します。',
    guide_stats_int: '魔法攻撃力です。魔法使いや僧侶のスキル・回復量に影響します。',
    guide_stats_crit_title: '会心率 (Crit):',
    guide_stats_crit_desc: 'クリティカルの発生率。クリティカル時はダメージが1.5倍になります。',
    guide_classes_title: '⚔️ 職業（ヒーロー）の昇格ツリー',
    guide_classes_warrior_title: '戦士（Warrior系）:',
    guide_classes_warrior_desc: '高いHP/DEF。',
    guide_classes_warrior_tree: '戦士 (LV15) → 騎士 (LV30) → パラディン',
    guide_classes_mage_title: '魔法使い（Mage系）:',
    guide_classes_mage_desc: '高INT・範囲ダメージ。',
    guide_classes_mage_tree: '魔法使い (LV15) → 魔導士 (LV30) → 賢者',
    guide_classes_priest_title: '僧侶（Priest系）:',
    guide_classes_priest_desc: '回復とバリア。',
    guide_classes_priest_tree: '僧侶 (LV15) → 司祭 (LV30) → 大司祭',
    guide_classes_thief_title: '盗賊（Thief系）:',
    guide_classes_thief_desc: '高いSPDと会心率。',
    guide_classes_thief_tree: '盗賊 (LV15) → 暗殺者 (LV30) → シャドウストライカー',
    guide_classes_summoner_title: '召喚士（Summoner系）:',
    guide_classes_summoner_desc: '召喚魔法を使用。',
    guide_classes_summoner_tree: '召喚士 (LV15) → 大召喚士 (LV30) → ソウルサモナー',
    guide_skills_title: '🔮 スキルと育成',
    guide_skills_auto_title: '自動発動:',
    guide_skills_auto_desc: '各キャラはスキルを所持し、バトル中にクールダウン終了時に自動発動します。',
    guide_skills_fusion_title: 'モンスター合成:',
    guide_skills_fusion_desc: '仲間モンスター同士を合成してステータス補正値を引き継ぎます。',
    fusion_select_title: '合成相手の選択',
    fusion_select_base: 'ベース: ',
    fusion_select_desc: '合成相手を選んでください。レシピが一致すれば上位モンスターへ進化します。そうでない場合はベースが経験値を獲得します。',
    menu_title: 'MENU',
    skills_config_header: '習得スキル',
    hero_btn_promote: '転職する',
    mon_allies_tab: '仲間モンスター',
    mon_stock_tab: '捕獲ストック',
    mon_list_title_allies: '仲間モンスター一覧',
    mon_skills_title: '所持スキル',
    mon_btn_select_fusion: '合成素材に選択',
    mon_btn_recruit: '正式加入',
    equip_weapon: '武器',
    equip_armor: '防具',
    equip_accessory: '装飾',
    shop_title: '💎 ジェムショップ (有償バフ)',
    shop_item_gold_title: '獲得ゴールド2倍 (永続)',
    shop_item_gold_desc: '戦闘でのゴールド獲得量が+100%増加します。',
    shop_item_soul_title: '獲得ソウル2倍 (永続)',
    shop_item_soul_desc: '戦闘でのソウル獲得量が+100%増加します。',
    shop_item_auto_title: '自動進行バフ (永続)',
    shop_item_auto_desc: 'フィールド探索や戦闘が完全に自動で進行します。',
    shop_item_ads_title: '広告除去 (永続)',
    shop_item_ads_desc: 'ゲーム内の広告がすべて非表示になります。',
    shop_item_speed_title: '戦闘速度3倍解放 (永続)',
    shop_item_speed_desc: '戦闘速度の3倍速設定を有効化します。',
    shop_item_speed2_title: '戦闘速度2倍解放 (永続)',
    shop_item_speed2_desc: '戦闘速度の2倍速設定を有効化します。',
    shop_starter_title: '🎁 スターターパック',
    shop_starter_desc: 'レジェンダリーモンスター×1 ＋ ソウル2000 ＋ ゴールド30000（300ジェム・1回限り）',
    shop_charge_title: '💎 ジェムのチャージ',
    charge_btn_1: '120個 (¥120)',
    charge_btn_2: '600個 (¥490)',
    charge_btn_3: '1200個 (¥980)',
    help_gift_title: '💎 プレゼントコード入力',
    help_gift_placeholder: 'コードを入力してください',
    help_gift_btn: '適用',
    help_encyclopedia_title: '📖 モンスター・スキル図鑑',
    help_encyclopedia_desc: 'ゲーム内の全モンスター（属性変種を含む）と全スキルのデータベースを図鑑形式でブラウザで閲覧できます。',
    help_encyclopedia_btn: 'ブラウザで図鑑を開く ➔',
    rarity_common: 'コモン',
    rarity_uncommon: 'アンコモン',
    rarity_rare: 'レア',
    rarity_epic: 'エピック',
    rarity_legendary: 'レジェンダリー',
    hud_explore_screen: '探索画面',
    shop_gem_balance_label: '所持ジェム:',
    shop_heroes_title: '💎 有償ヒーロー雇用 (各150ジェム)',
    conquest_title: '⚔️ コンクエスト',
    conquest_desc: '強敵の隊列と戦闘し、勝つことで難易度が段階的に上がります。特定の段階をクリアすると新たなヒーローが仲間になります！',
    capture_title: '🎉 モンスター捕獲成功！',
    capture_wild: '野生の',
    capture_caught: 'を捕獲した！',
    capture_rarity_label: 'レアリティ',
    capture_stat_mod_label: '成長補正',
    capture_init_level_label: '初期レベル',
    capture_keep: '捕獲リストに送る',
    tut_title: '🔰 遊び方',
    tut_title_1: '1. スワイプで移動！',
    tut_1: '画面をドラッグ・スワイプして部隊を移動させます。',
    tut_title_2: '2. 敵に近づいて自動バトル！',
    tut_2: '敵の近くに行くと自動で戦闘が始まります。初めは敵を1部隊ずつおびき寄せて、乱入されないように戦うのがコツです！',
    tut_title_3: '3. 街で準備＆逃げ込む！',
    tut_3: 'マップ上にある「街」に入ると、資金でガチャや部隊強化ができます。いざという時は敵から街へ逃げ込んで回復しましょう！',
    tut_title_4: '4. サブ職でスキルを組み合わせ！',
    tut_4: 'ヒーローは「サブ職」を設定することで、別の職業のスキルも同時に使えるようになります。最強の組み合わせを探しましょう！',
    tut_title_5: '5. モンスターを捕獲して仲間に！',
    tut_5: '敵のモンスターは倒すと確率でドロップ（捕獲）できます！捕獲したモンスターは「捕獲ストック」に入ります。メニュー ＞「モンスター」＞「捕獲ストック」タブから確認し、部隊に編成して一緒に戦わせましょう。',
    tut_title_6: '6. 村を解放して次の世界へ！',
    tut_6: 'マップ上のすべての村を「レイドバトル」で防衛・解放すると、次の世界（ワールド）への道が開かれます！',
    tut_ok: 'OK!',
    capture_sell_prefix: '即売却',

    // Sell overlay
    sell_title: '⚖️ 売却所',
    sell_tab_monster: 'モンスター売却',
    sell_tab_equip: '装備品売却',
    sell_rarity: 'レアリティ:',
    sell_type: '種別:',
    sell_status: '状態:',
    sell_select_all: '表示中を全選択',
    sell_deselect_all: '選択解除',
    sell_bulk_monster: '選択したモンスターを売却',
    sell_select_all2: '表示中を全選択',
    sell_deselect_all2: '選択解除',
    sell_bulk_equip: '選択した装備を売却',

    // Enhance overlay
    enhance_title: '🔨 装備の強化 (最大+50)',
    enhance_desc: '所持・装備しているアイテムを選択して強化します。強化値が高くなるほど成功率が下がり、ゴールドの消費量が増加します。(1強化あたり基本ステータスが +10% 増加します)',
    enhance_category: 'カテゴリ:',
    enhance_subtype: '詳細分類:',
    enh_type_weapon: '⚔️ 武器',
    enh_type_armor: '🛡️ 防具',
    enh_type_accessory: '💍 アクセサリー',
    enhance_lock: '🔓 ロック',
    enhance_rarity_filter: 'レア度:',
    enhance_item_placeholder: '[装備名]',
    enhance_lock: '🔓 ロック',
    enhance_current: '現在の強化値',
    enhance_next: '強化後の強化値',
    enhance_success_rate: '強化成功率',
    enhance_cost: '必要ゴールド',
    enhance_execute: '強化を実行する',
    enhance_no_selection: '強化する装備を選択してください',

    // World map overlay
    worldmap_title: '🗺️ ワールドマップ',
    wm_you: '現在地',
    wm_town: '街 (村)',
    wm_enemy: '敵',
    wm_gate: 'ゲート',
    wm_hint: '※ 最後の村からさらに右下 (NEXT WORLD) へ進むと、次の世界 (World Level) に移動します。',

    // Ad reward
    shop_ad_title: '📺 広告で報酬',
    shop_ad_xp_title: '⚡ 経験値1.5倍（10分間）',
    shop_ad_xp_desc: '広告を見て10分間、獲得経験値が1.5倍になります',
    shop_ad_watch: '▶ 広告を見る',
    
    // Gacha
    gacha_tab_monster: 'モンスター',
    gacha_tab_equip: '装備',
    gacha_title: 'ガチャ（英雄召喚）',
    gacha_featured_title: '【ピックアップ】',
    gacha_btn_1: '1回引く',
    gacha_btn_10: '10連ガチャ',
    gacha_btn_ad: '動画を見て1回無料',
    monster_desc: '倒したモンスターが仲間になることがあります。パーティに編成して共に戦おう！',
    filter_rarity: 'レアリティで絞り込み:',
    rarity_common2: 'コモン',
    rarity_uncommon2: 'アンコモン',
    rarity_rare2: 'レア',
    rarity_epic2: 'エピック',
    rarity_legendary2: 'レジェンダリー',
    sell_weapon: '武器',
    sell_armor: '防具',
    sell_accessory: '装飾',
    sell_unequipped: '未装備',
    sell_equipped: '装備中',
    filter_all: 'すべて',

    // Missing keys - Enhance filters
    enhance_filter_all: 'すべて',
    enhance_filter_all2: 'すべて',
    enhance_filter_weapon: '武器',
    enhance_filter_armor: '防具',
    enhance_filter_acc: '装飾品',
    enhance_rate: '強化確率',
    enhance_select_hint: '装備を選択してください',

    // Missing keys - Fast Travel
    fast_travel_title: '📍 ファストトラベル',
    world_select: 'ワールド選択:',

    // Missing keys - Gacha result
    gacha_result_title: 'ガチャ結果',

    // Missing keys - Help tutorial desc
    help_tut_desc: '下記の準備をしてから出発するとスムーズに進められます！',

    // Missing keys - EN-only keys added to JA
    party_desc: '戦闘に参加する隊列を編成します。最大2つの隊列を切り替えて戦えます。',
    hero_desc: '英雄の装備変更やサブ職の設定ができます。',
    shop_desc: 'ジェムを使ってアイテムを購入したり、広告を見て報酬を得ます。',
    promotion_title: '転職',
    sell_filter: '絞り込み:',
  },
  en: {
    // Title screen
    title_new_game: 'Start Game',
    title_continue: 'Continue',
    title_loading: 'Loading...',
    title_reset: '🗑 Reset',
    loading_status_map: 'Generating world map...',
    loading_status_assets: 'Loading assets...',
    loading_status_prepare: 'Preparing adventure...',
    
    // HUD
    hud_gold: 'Gold',
    hud_soul: 'Soul',
    hud_gem: 'Gem',
    hud_explore: 'Explore',
    hud_explore_screen: 'Explore Screen',
    hud_battle_log: 'Battle Log',
    hud_log_hide: 'Hide',
    hud_log_3: '3 Lines',
    hud_log_5: '5 Lines',
    hud_log_10: '10 Lines',
    hud_log_20: '20 Lines',
    hud_log_30: '30 Lines',
    hud_enter_town: 'Enter Village',
    
    // Town
    town_title: '🏡 Peaceful Village',
    town_exit: '✕ Back',
    town_recover_h3: 'Heal All',
    town_recover_p: 'Restore HP/MP & Revive',
    town_teleport_h3: 'Fast Travel',
    town_teleport_p: 'Warp to other villages',
    town_shop_h3: 'General Shop',
    town_shop_p: 'Buy buff items & potions',
    town_shop_overlay_title: '👜 General Shop',
    town_sell_h3: 'Sell Shop',
    town_sell_p: 'Sell monsters & equipment',
    town_enhance_h3: 'Enhance Gear',
    town_enhance_p: 'Upgrade gear level (+1~+20)',
    town_menu_h3: 'Party & Gear',
    town_menu_p: 'Manage squad & equip gear',
    town_gacha_h3: 'Gacha (Summon)',
    town_gacha_p: 'Summon with Gems or Ads',
    town_raid_h3: 'Town Defense (Raid)',
    town_raid_p: 'Defend the town from 40 waves',

    // Menu tabs
    menu_tab_party: 'Squad',
    menu_tab_hero: 'Heroes',
    menu_tab_monster: 'Monsters',
    menu_tab_shop: 'Gems',
    menu_tab_system: 'System',
    menu_tab_help: 'Help',
    equip_select_title: 'Select Equipment',
    sort_label: 'Sort By:',
    sort_atk: 'Attack Power (ATK/INT)',
    sort_def: 'Defense Power (DEF/HP)',
    sort_rarity: 'Rarity',
    sort_level: 'Upgrade Level (LV)',
    
    // System
    sys_save_btn: 'Save Game',
    sys_reset_btn: 'Reset Data',
    sys_game_settings: 'Game Settings',
    sys_hpmp_display: 'Show HP/MP Numbers',
    sys_skill_simple: 'Simplify Skill Effects',
    sys_bgm: 'BGM (Music)',
    sys_se: 'SE (Sound Effects)',
    sys_damage_popup: 'Damage Popups',
    dmg_pop_all: 'Show All',
    dmg_pop_own: 'Allies Only',
    dmg_pop_none: 'Hide All',
    sys_low_perf: 'Low Perf Mode',
    sys_damage_log: 'Show Damage Log',
    sys_skill_name: 'Show Skill Names',
    sys_settings: 'Game Settings',
    sys_speed: 'Game Speed:',
    sys_speed_1: '1x Speed',
    sys_speed_2: '2x Speed',
    sys_speed_3: '3x Speed (Locked)',
    
    // Subclass UI
    hero_subclass_title: 'Sub-Class',
    subclass_select_title: 'Select Sub-Class',
    subclass_not_set: 'No Sub-class equipped. Spend Soul to select one.',
    subclass_btn_set: 'Set Sub-class (100 Souls)',
    subclass_btn_lvup: 'Level Up (Soul)',
    subclass_btn_change: 'Switch Sub-class',
    subclass_lvl_cap: '(Capped at Main Level)',
    
    // General
    unequip: 'Unequip',
    equip: 'Equip',
    locked: 'Locked 🔒',
    unlocked: 'Unlock 🔓',
    equip_no_item: 'None',
    title_subtitle: 'Pocket Rumble: Army Real-Time Battle',
    party_squad_1: 'Squad 1',
    party_squad_2: 'Squad 2',
    party_squad_3: 'Squad 3',
    party_active_header: 'Active Members (Max 32)',
    party_reserve_header: 'Reserve Members',
    skills_config_header: 'Learned Skills',
    hero_btn_promote: 'Promote',
    mon_allies_tab: 'Allies',
    mon_stock_tab: 'Stocked',
    mon_list_title_allies: 'Ally Monster List',
    mon_skills_title: 'Skills',
    mon_btn_select_fusion: 'Select for Fusion',
    mon_btn_recruit: 'Recruit',
    shop_title: '💎 Gem Shop (Buffs)',
    shop_item_gold_title: 'Double Gold (Permanent)',
    shop_item_gold_desc: 'Increases gold gain from battles by +100%.',
    shop_item_soul_title: 'Double Soul (Permanent)',
    shop_item_soul_desc: 'Increases soul gain from battles by +100%.',
    shop_item_auto_title: 'Auto-Battle (Permanent)',
    shop_item_auto_desc: 'Exploration and combat run fully automatically.',
    shop_item_ads_title: 'Remove Ads (Permanent)',
    shop_item_ads_desc: 'Removes all advertisements from the game.',
    shop_item_speed_title: 'Unlock 3x Speed (Permanent)',
    shop_item_speed_desc: 'Enables the 3x battle speed option.',
    shop_item_speed2_title: 'Unlock 2x Speed (Permanent)',
    shop_item_speed2_desc: 'Enables the 2x battle speed option.',
    shop_starter_title: '🎁 Starter Pack',
    shop_starter_desc: 'Legendary monster ×1 + Soul 2000 + Gold 30000 (300 Gems, one-time)',
    shop_charge_title: '💎 Charge Gems',
    charge_btn_1: '120 Gems ($0.99)',
    charge_btn_2: '600 Gems ($3.99)',
    charge_btn_3: '1200 Gems ($7.99)',
    help_gift_title: '💎 Gift Code',
    help_gift_placeholder: 'Enter code...',
    help_gift_btn: 'Apply',
    help_encyclopedia_title: '📖 Encyclopedia',
    help_encyclopedia_desc: 'Browse captured monsters, variants, and skills database in your browser.',
    help_encyclopedia_btn: 'Open Encyclopedia ➔',
    rarity_common: 'Common',
    rarity_uncommon: 'Uncommon',
    rarity_rare: 'Rare',
    rarity_epic: 'Epic',
    rarity_legendary: 'Legendary',
    shop_gem_balance_label: 'Gems Owned:',
    shop_heroes_title: '💎 Premium Heroes (150 Gems each)',
    conquest_title: '⚔️ Conquest',
    conquest_desc: 'Fight against squads of powerful enemies. Clear stages to unlock new heroes!',
    capture_title: '🎉 Monster Captured!',
    capture_wild: 'Wild',
    capture_caught: 'was captured!',
    capture_rarity_label: 'Rarity',
    capture_stat_mod_label: 'Stat Modifier',
    capture_init_level_label: 'Initial Level',
    capture_keep: 'Send to Stock',
    tut_title: '🔰 How to Play',
    tut_title_1: '1. Swipe to move!',
    tut_1: 'Drag or swipe the screen to move your squads.',
    tut_title_2: '2. Auto-battle on approach!',
    tut_2: 'Approach enemies to start auto-battles. At first, try to lure enemies one squad at a time to avoid being overwhelmed!',
    tut_title_3: '3. Prepare & Escape to Town!',
    tut_3: 'Enter "Towns" on the map to pull gachas or upgrade squads using gold. In a pinch, run into a town to escape enemies and heal!',
    tut_title_4: '4. Combine Skills with Subclasses!',
    tut_4: 'By equipping a "Subclass", heroes can use skills from other classes simultaneously. Find the ultimate combination!',
    tut_title_5: '5. Capture Monsters as Allies!',
    tut_5: 'Defeated enemies have a chance to drop and be captured! Captured monsters go to your Capture Stock — check them via Menu > Monster > "Capture Stock" tab, then organize them into your squad and fight alongside them.',
    tut_title_6: '6. Liberate Villages to Advance!',
    tut_6: 'Defend and liberate all villages on the map through "Raid Battles" to open the path to the next World!',
    tut_ok: 'OK!',
    capture_sell_prefix: 'Sell Now',

    // Enhance overlay
    enhance_title: '🔨 Equipment Enhance (Max +50)',
    enhance_desc: 'Select owned or equipped items to enhance. Higher levels reduce success rate and increase gold cost. (+10% base stats per level)',
    enhance_category: 'Category:',
    enhance_subtype: 'Sub-type:',
    enh_type_weapon: '⚔️ Weapon',
    enh_type_armor: '🛡️ Armor',
    enh_type_accessory: '💍 Accessory',
    enhance_lock: '🔓 Lock',
    enhance_rarity_filter: 'Rarity:',
    enhance_item_placeholder: '[Equipment]',
    enhance_lock: '🔓 Lock',
    enhance_current: 'Current Level',
    enhance_next: 'After Enhance',
    enhance_success_rate: 'Success Rate',
    enhance_cost: 'Required Gold',
    enhance_execute: 'Enhance Now',
    enhance_no_selection: 'Select an item to enhance',

    // World map overlay
    worldmap_title: '🗺️ World Map',
    wm_you: 'You',
    wm_town: 'Town',
    wm_enemy: 'Enemy',
    wm_gate: 'Gate',
    wm_hint: '※ Go further right/down from the last village (NEXT WORLD) to enter the next world level.',

    // Ad reward
    shop_ad_title: '📺 Ad Rewards',
    shop_ad_xp_title: '⚡ XP x1.5 (10 min)',
    shop_ad_xp_desc: 'Watch an ad to get 1.5x XP for 10 minutes',
    shop_ad_watch: '▶ Watch Ad',
    
    // Sell overlay
    sell_title: '⚖️ Sell Shop',
    sell_tab_monster: 'Sell Monsters',
    sell_tab_equip: 'Sell Equipment',
    sell_filter: 'Filter:',
    sell_rarity: 'Rarity:',
    sell_type: 'Type:',
    sell_status: 'Status:',
    sell_weapon: 'Weapon',
    sell_armor: 'Armor',
    sell_accessory: 'Accessory',
    sell_unequipped: 'Unequipped',
    sell_equipped: 'Equipped',
    sell_select_all: 'Select All',
    sell_deselect_all: 'Deselect',
    sell_bulk_monster: 'Sell Selected Monsters',
    sell_select_all2: 'Select All',
    sell_deselect_all2: 'Deselect',
    sell_bulk_equip: 'Sell Selected Gear',
    rarity_common2: 'Common',
    rarity_uncommon2: 'Uncommon',
    rarity_rare2: 'Rare',
    rarity_epic2: 'Epic',
    rarity_legendary2: 'Legendary',
    
    
    // Promotion overlay
    promotion_title: 'Class Change',
    
    // Town shop overlay
    town_enhance_overlay_title: '👜 General Shop',
    gacha_tab_monster: 'Monsters',
    gacha_tab_equip: 'Equipment',
    gacha_title: 'Gacha (Hero Summon)',
    gacha_featured_title: '[Featured]',
    gacha_equip_title: '⚔️ Equipment Gacha 🛡️',
    gacha_equip_desc: 'Get legendary weapons and armor!\nDuplicates can also drop (usable for enhancement).',
    gacha_btn_1: 'Summon x1',
    gacha_btn_10: 'Summon x10',
    gacha_btn_ad: 'Free Summon (Watch Ad)',
    monster_desc: 'Defeated monsters may join you. Add them to your party and fight together!',
    filter_rarity: 'Filter by Rarity:',
    filter_all: 'All',

    // Missing keys - Enhance filters
    enhance_filter_all: 'All',
    enhance_filter_all2: 'All',
    enhance_filter_weapon: 'Weapon',
    enhance_filter_armor: 'Armor',
    enhance_filter_acc: 'Accessory',
    enhance_rate: 'Success Rate',
    enhance_select_hint: 'Select an item to enhance',

    // Missing keys - Fast Travel
    fast_travel_title: '📍 Fast Travel',
    world_select: 'World:',

    // Missing keys - Gacha result
    gacha_result_title: 'Gacha Results',

    // Missing keys - Help tutorial desc
    help_tut_desc: 'Prepare the following before heading out for a smooth adventure!',
    // --- Added EN UI labels (i18n gap fixes) ---
    hud_ad_boost: '⚡ Ad Boost Active',
    town_raid_title: 'Town Raid',
    town_raid_desc: 'Defend the town from a horde of enemies',
    shop_daily_title: '💎 7-Day Buffs',
    shop_item_xp_daily: '🔥 XP Boost',
    shop_item_xp_daily_desc: 'Gain 1.5x EXP (7 days)',
    shop_item_drop_daily: '🍀 Drop Rate Up',
    shop_item_drop_daily_desc: 'Monster soul drop rate x5 (7 days)',
    shop_item_def_daily: '🛡️ Defense Boost',
    shop_item_def_daily_desc: 'All allies defense x1.3 (7 days)',
    btn_restore_purchases: '🔄 Restore Purchases',
    sys_perf_title: '⚙️ Performance',
    sys_perf_label: 'Frame Rate Cap (30FPS)',
    sys_visual_title: '📺 Graphics / UI',
    sys_sound_title: '🔊 Sound',
    system_desc: 'Manage game settings and save data.',
    guide_map_title: '🗺️ Exploration & Map Progress',
    guide_map_world_title: 'Moving Worlds & Strong Foes:',
    guide_map_world_desc: 'Reach the far end of the map (toward the bottom-right, near the world-end village) and move to the next world (e.g., World 2) to face stronger enemies and earn higher-rarity gear.',
    guide_map_town_title: 'Town Square:',
    guide_map_town_desc: 'In each town square (the green floor area) you can manage your party, heal, shop, and fast-travel.',
    guide_stats_title: '📊 About Stats',
    guide_stats_hp: 'Health. If it reaches 0 in battle the unit dies (temporarily downed).',
    guide_stats_mp: 'Magic points. Consumed when using a skill whose cooldown is ready.',
    guide_stats_atk: 'Physical attack. Affects warrior and thief skill damage.',
    guide_stats_def: 'Physical defense. Reduces damage taken.',
    guide_stats_spd: 'Action speed. Affects attack frequency and map movement speed.',
    guide_stats_int: 'Magic attack. Affects mage and priest skill/heal power.',
    guide_stats_crit_title: 'Crit Rate (Crit):',
    guide_stats_crit_desc: 'Chance to land a critical hit. Criticals deal 1.5x damage.',
    guide_classes_title: '⚔️ Hero Class Promotion Trees',
    guide_classes_warrior_title: 'Warrior:',
    guide_classes_warrior_desc: 'High HP/DEF.',
    guide_classes_warrior_tree: 'Warrior (LV15) → Knight (LV30) → Paladin',
    guide_classes_mage_title: 'Mage:',
    guide_classes_mage_desc: 'High INT, area damage.',
    guide_classes_mage_tree: 'Mage (LV15) → Sorcerer (LV30) → Sage',
    guide_classes_priest_title: 'Priest:',
    guide_classes_priest_desc: 'Healing and barriers.',
    guide_classes_priest_tree: 'Priest (LV15) → Cleric (LV30) → High Priest',
    guide_classes_thief_title: 'Thief:',
    guide_classes_thief_desc: 'High SPD and crit rate.',
    guide_classes_thief_tree: 'Thief (LV15) → Assassin (LV30) → Shadow Striker',
    guide_classes_summoner_title: 'Summoner:',
    guide_classes_summoner_desc: 'Uses summoning magic.',
    guide_classes_summoner_tree: 'Summoner (LV15) → Grand Summoner (LV30) → Soul Summoner',
    guide_skills_title: '🔮 Skills & Growth',
    guide_skills_auto_title: 'Auto-cast:',
    guide_skills_auto_desc: 'Each character has skills that auto-cast in battle when their cooldown ends.',
    guide_skills_fusion_title: 'Monster Fusion:',
    guide_skills_fusion_desc: 'Fuse ally monsters together to inherit stat-modifier bonuses.',
    fusion_select_title: 'Select Fusion Material',
    fusion_select_base: 'Base: ',
    fusion_select_desc: 'Choose a fusion partner. If the recipe matches it evolves into a higher monster; otherwise the base gains EXP.',
    menu_title: 'MENU',
    equip_weapon: 'Weapon',
    equip_armor: 'Armor',
    equip_accessory: 'Accessory',
    party_desc: 'Organize the squads that join battle. Switch between up to 2 squads to fight.',
    hero_desc: 'Change hero gear and set sub-classes.',
    shop_desc: 'Use Gems to buy items or watch ads for rewards.',
  }
};

// Translate static key
export function t(key, lang = CURRENT_LANG) {
  return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.ja[key] || key;
}

// Localized Class Name
export function getClassName(classKey, lang = CURRENT_LANG) {
  if (lang === 'en' && DB_TRANSLATIONS.en[classKey]) {
    return DB_TRANSLATIONS.en[classKey].name;
  }
  return CLASSES[classKey]?.name || classKey;
}

// Localized Class Description
export function getClassDesc(classKey, lang = CURRENT_LANG) {
  if (lang === 'en' && DB_TRANSLATIONS.en[classKey]) {
    return DB_TRANSLATIONS.en[classKey].desc;
  }
  return CLASSES[classKey]?.description || '';
}

// Localized Skill Name
export function getSkillName(skillKey, lang = CURRENT_LANG) {
  if (lang === 'en' && DB_TRANSLATIONS.en[skillKey]) {
    return DB_TRANSLATIONS.en[skillKey].name;
  }
  return SKILLS[skillKey]?.name || skillKey;
}

// Localized Skill Description
export function getSkillDesc(skillKey, lang = CURRENT_LANG) {
  if (lang === 'en' && DB_TRANSLATIONS.en[skillKey]) {
    return DB_TRANSLATIONS.en[skillKey].desc;
  }
  return SKILLS[skillKey]?.description || '';
}

// Localized Monster Name (Handles base and variants)
export function getMonsterName(monsterKey, lang = CURRENT_LANG) {
  const template = MONSTERS[monsterKey];
  let baseKey = monsterKey;
  let isVariant = false;

  if (template && template.spriteKey && template.spriteKey !== monsterKey) {
    baseKey = template.spriteKey;
    isVariant = true;
  }

  let baseName = baseKey;
  if (lang === 'en') {
    baseName = DB_TRANSLATIONS.en[baseKey] || (MONSTERS[baseKey]?.name || baseKey);
  } else {
    baseName = MONSTERS[baseKey]?.name || baseKey;
  }

  if (isVariant && template) {
    const el = template.element;
    let elementSuffix = '';
    if (lang === 'en') {
      const elNames = { fire: ' (Fire)', water: ' (Water)', wind: ' (Wind)', earth: ' (Earth)', light: ' (Light)', dark: ' (Dark)' };
      elementSuffix = elNames[el] || '';
    } else {
      const elNames = { fire: '（火）', water: '（水）', wind: '（風）', earth: '（地）', light: '（光）', dark: '（闇）' };
      elementSuffix = elNames[el] || '';
    }
    return `${baseName}${elementSuffix}`;
  }
  return baseName;
}

// Localized Stage details
export function getStageName(stageNum, lang = CURRENT_LANG) {
  const world = Math.ceil(stageNum / 15);
  const stage = stageNum - (world - 1) * 15;
  
  const worldNames = {
    1: { ja: '始まりの草原', en: 'Starter Plains' },
    2: { ja: '木漏れ日の森', en: 'Sun-dappled Forest' },
    3: { ja: '霧深き迷宮', en: 'Foggy Labyrinth' },
    4: { ja: '荒野の遺跡', en: 'Wasteland Ruins' },
    5: { ja: '燃え盛る火山', en: 'Volcano Peak' },
    6: { ja: '煌めく鉱山', en: 'Sparkling Mines' },
    7: { ja: '氷結の神殿', en: 'Frozen Temple' },
    8: { ja: '奈落の王城', en: 'Abyss Castle' },
    9: { ja: '古代竜の峡谷', en: 'Ancient Dragon Canyon' },
    10: { ja: '真の混沌', en: 'True Chaos' }
  };
  
  const wName = worldNames[world]?.[lang] || worldNames[world]?.ja || `World ${world}`;
  
  if (lang === 'en') {
    return `${wName} - Stage ${stage}`;
  } else {
    return `${wName} (ステージ ${stage})`;
  }
}

export function getStageDesc(stageNum, lang = CURRENT_LANG) {
  const isBoss = stageNum % 15 === 0;
  const isSubBoss = stageNum === 70;
  
  const stageConfig = CONQUEST_STAGES.find(s => s.stage === stageNum);
  const rewardHero = stageConfig?.rewardHero;
  
  if (lang === 'en') {
    let desc = `Conquest stage.`;
    if (isBoss) {
      desc = `Final showdown. Defeat the boss!`;
    } else if (isSubBoss) {
      desc = `Sub-boss encounter.`;
    }
    if (rewardHero) {
      const enHeroName = DB_TRANSLATIONS.en[rewardHero] || rewardHero;
      desc += ` Cleared: "${enHeroName}" joins.`;
    }
    return desc;
  } else {
    let desc = `コンクエストステージ。`;
    if (isBoss) {
      desc = `最終決戦。ボスを倒せ！`;
    } else if (isSubBoss) {
      desc = `中ボス戦。`;
    }
    if (rewardHero) {
      desc += ` クリアで「${rewardHero}」が加入。`;
    }
    return desc;
  }
}

// Localized Item details
export function getItemName(item, lang = CURRENT_LANG) {
  if (lang === 'en') {
    const itemNames = {
      '青銅の剣': 'Bronze Sword',
      '鋼鉄の大剣': 'Steel Greatsword',
      '見習いの杖': 'Apprentice Staff',
      '詠唱の魔杖': 'Spellsinger Wand',
      '猟師の弓': 'Huntsman Bow',
      '旅人の服': 'Traveler Clothes',
      '騎士の鉄鎧': 'Knight Steel Plate',
      '魔導のローブ': 'Mage Robe',
      'ガラスの指輪': 'Glass Ring',
      '命のアミュレット': 'Amulet of Life',
      '魔力石のブローチ': 'Mana Stone Brooch',
      '薬草': 'Herb',
      'エリクサー': 'Elixir',
      '力の秘薬': 'Power Elixir'
    };
    return itemNames[item.name] || item.name;
  }
  return item.name;
}

// Localized world zone names
export function getWorldZoneName(world, lang = CURRENT_LANG) {
  return `World ${world}`;
}

// Localized town names
export function getTownName(index, lang = CURRENT_LANG) {
  const names = {
    0: { ja: '始まりの村', en: 'Starter Village' },
    1: { ja: '木漏れ日の村', en: 'Sun-dappled Village' },
    2: { ja: '荒野の砦村', en: 'Wasteland Outpost Village' },
    3: { ja: '緑の風が吹く村', en: 'Green Breeze Village' },
    4: { ja: '霧深い森の里', en: 'Foggy Forest Village' },
    5: { ja: '燃え盛る火山麓の村', en: 'Volcano Foot Village' },
    6: { ja: '煌めく鉱石の谷村', en: 'Sparkling Ore Village' },
    7: { ja: '氷結の極北の村', en: 'Frozen Arctic Village' }
  };
  return names[index]?.[lang] || names[index]?.ja || '';
}


/**
 * 辅助方法，生成一个随机整数
 */
const _randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * 辅助方法，生成随机的不重复的扑克牌
 * @param {扑克牌数量} length
 */
const _randomCards = (length) => {
  let set = new Set();
  while (set.size < length) {
    let temp = _randomInt(1, 13);
    if (!set.has(temp)) set.add(temp);
  }
  return [...set];
};
/**
 * 辅助方法，移动上面的扑克到下面
 * @param {扑克牌} cards
 * @param {移动的扑克张树} number
 * @returns
 */
const _moveCards = (cards, number) => {
  number = number % cards.length;
  return [...cards.slice(number), ...cards.slice(0, number)];
};

/**
 * 辅助方法，将顶部的几张牌，插入到剩余卡牌的中间
 * @param {扑克牌} cards
 * @param {插入的数量} number
 */
const _insertCards = (cards, number) => {
  let heads = cards.slice(0, number);
  let left = cards.slice(number);
  //插入的位置
  let index = _randomInt(1, left.length - 2);
  return [...left.slice(0, index), ...heads, ...left.slice(index)];
};

/**
 * 辅助方法，第一张放到底部，第二张扔掉，直到只剩最后一张
 * @param {卡牌} cards
 */
const _goodLuck = (cards) => {
  while (cards.length > 1) {
    cards.push(cards.shift());
    cards.shift();
    console.log("好运留下来，烦恼丢出去", cards);
  }
  return cards;
};
module.exports = {
  _randomInt,
  _randomCards,
  _moveCards,
  _insertCards,
  _goodLuck,
};

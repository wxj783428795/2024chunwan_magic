/*
 * @Author: wxj
 * @Date: 2024-02-10 08:08:42
 * @LastEditTime: 2024-02-10 09:41:40
 * @LastEditors: wxj
 * @Description: 春晚刘谦魔术的代码实现
 */
let { _randomInt, _randomCards, _moveCards, _insertCards, _goodLuck } = require("./utils");
//名字长度
const name_length = _randomInt(2, 5);

//南北方
const north_or_south = _randomInt(1, 3);

//男女，男1，女2
const boy_or_girl = _randomInt(1, 2);

//生成四张随机扑克
const cards = _randomCards(4);
console.log("cards", cards);
//第一步：撕成两半
let ripped_cards = [...cards, ...cards];
console.log("ripped_cards", ripped_cards);

//第二步：移动名字长度的扑克牌到底部
ripped_cards = _moveCards(ripped_cards, name_length);
console.log("name_length", name_length);
console.log("ripped_cards", ripped_cards);

//第三步：拿出前三张插到，剩余卡牌中间位置
ripped_cards = _insertCards(ripped_cards, 3);
console.log("ripped_cards", ripped_cards);

//第四步：最上面的放到屁股下
let ass_card = ripped_cards.shift();
console.log("ripped_cards", ripped_cards);

//第五步：根据南方人还是北方人，移动顶部的牌到剩余牌的中间
ripped_cards = _insertCards(ripped_cards, north_or_south);
console.log("ripped_cards", ripped_cards);

//第六步：男生丢掉最前面的一张，女生丢掉两张
ripped_cards = ripped_cards.slice(boy_or_girl);
console.log("ripped_cards", ripped_cards, boy_or_girl);

//第七步：念“见证奇迹的时刻”，每念一个字，把顶部的牌放到底部
ripped_cards = _moveCards(ripped_cards, 7);
console.log("ripped_cards", ripped_cards);

//第八步：好运留下来，把第一张牌放到最后，烦恼丢出去，把第一张牌扔掉
ripped_cards = _goodLuck(ripped_cards);

console.log("屁股下的牌", ass_card);
console.log("手里剩下的牌", ripped_cards[0]);

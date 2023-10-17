Page({
  generateRandomNumber: function() {
    
    var random1 = Math.floor(Math.random() * 28);
    var random2 = Math.floor(Math.random() * 28);
    while(random1 == random2) {
      random2 = Math.floor(Math.random() * 28);
    }
    var vegetableDish1 = vegetableDishesMap.get(random1);
    var vegetableDish2 = vegetableDishesMap.get(random2);
    this.setData({ vegetableDish: vegetableDish1 + "," + vegetableDish2 });
    console.log(vegetableDish1 + "," + vegetableDish2)
    var meatDish = meatDishesMap.get(Math.floor(Math.random() * 22));
    this.setData({ meatDish: meatDish });
    console.log(meatDish)
  }
})
const vegetableDishesMap = new Map([
  [0, "芋艿"],
  [1, "秋葵"],
  [2, "煎豆腐"],
  [3, "蒸南瓜"],
  [4, "蒸茄子"],
  [5, "煎豆腐"],
  [6, "凉拌豆腐"],
  [7, "凉拌黄瓜"],
  [8, "金针菇蛋饼"],
  [9, "包心菜炒肉"],
  [10, "茭白炒肉片"],
  [11, "洋葱炒土豆"],
  [12, "芹菜炒豆干"],
  [13, "胡萝卜炒豆芽"],
  [14, "香菇炒青菜"],
  [15, "香菇炒杭白菜"],
  [16, "清炒豆芽（不放榨菜丝，放葱）"],
  [17, "清炒莴笋"],
  [18, "炒花菜"],
  [19, "炒海带"],
  [20, "炒豆芽"],
  [21, "炒海带"],
  [22, "炒海带"],
  [23, "炒西蓝花"],
  [24, "炒杭白菜"],
  [25, "炒西葫芦"],
  [26, "炒胡萝卜"],
  [27, "炒娃娃菜（放醋，不放辣椒）"]
]);
const meatDishesMap = new Map([
  [0, "明虾"],
  [1, "沼虾"],
  [2, "鸡蛋羹"],
  [3, "饭捂肉"],
  [4, "红烧肉"],
  [5, "红烧鱼块"],
  [6, "红烧鲈鱼"],
  [7, "红烧翅中"],
  [8, "蛋蒸肉饼"],
  [9, "柠檬鸡爪"],
  [10, "土豆炖鸡块"],
  [11, "肉沫鸡蛋羹"],
  [12, "油豆腐烧肉"],
  [13, "番茄炖牛肉"],
  [14, "干菜蒸汪刺鱼"],
  [15, "蘑菇炒肉"],
  [16, "甜椒炒肉"],
  [17, "平菇炒肉"],
  [18, "胡萝卜丝炒肉"],
  [19, "大蒜叶炒牛肉"],
  [20, "胡萝卜丝炒牛肉"],
  [21, "脊梁骨炖豆腐"],
  [22, "番茄金针菇千张肉末羹"]
]);
const soupMap = new Map([
  [0, "青菜汤"],
  [1, "青菜皮卷汤"],
  [2, "青菜豆腐汤"],
  [3, "青菜皮卷蛋饺汤"],
  [4, "丝瓜蛋汤"],
  [5, "番茄蛋汤"],
  [6, "紫菜蛋汤"],
  [7, "干菜丝瓜汤"],
  [8, "山药排骨汤"],
  [9, "玉米排骨汤"],
  [10, "菠菜豆腐汤"],
  [11, "鲫鱼豆腐汤"],
  [12, "汪刺鱼豆腐汤"],
  [13, "豌豆肉沫汤"],
  [14, "菠菜蛋汤"],
  [15, "番茄虾仁汤"],
  [16, "干菜番茄汤"],
  [17, "番茄金针菇蛋汤"],
  [18, "笋干鸡汤"],
  [19, "海带白菇汤"],
  [20, "海带黄豆排骨汤"]
]);
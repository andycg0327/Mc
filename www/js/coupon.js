var coupons = [[], [], []], expired = [[], [], []];

check('2018-04-05', 0, '1_FrenchFries', '1元小薯');
check('2018-04-03', 0, '1_IceCream', '1元蛋捲冰淇淋');
check('2018-03-11', 0, '10_Cheeseburger', '10元吉士漢堡');
check('2018-03-23', 0, '10_McChicken', '10元麥香雞');
check('2018-04-02', 0, '10_FiletOFish', '10元麥香魚');
check('2018-04-02', 0, '1_HashBrown', '1元薯餅');
check('2018-04-04', 0, '10_EggBurgerCheese', '10元吉士蛋堡');

check('2018-03-31', 1, 'x2_BigMac', '大麥克');
check('2018-04-03', 1, 'x2_SpicyChickenFilet', '勁辣雞腿堡');
check('2018-04-04', 1, 'x2_Nuggets', '四塊麥克雞塊');
check('2018-03-19', 1, 'x2_ShakaChicken', '無骨雞腿排');
check('2018-03-23', 1, 'x2_McFlurry', '冰炫風');
check('2018-03-26', 1, 'x2_McMuffin', '滿福堡');

check('2018-04-03', 2, '40_McChicken', '40飲料 + 麥香雞');
check('2018-04-04', 2, 'Set_FiletOFish', '套餐 + 麥香魚');
check('2018-03-31', 2, 'Set_SpicyChickenWing', '套餐 + 勁辣香雞翅');
check('2018-04-02', 2, 'Set_Nuggets', '套餐 + 四塊麥克雞塊');
check('2018-00-00', 2, 'Set_Sundae', '套餐 + 聖代');
check('2018-04-01', 2, 'Set_ApplePie', '套餐 + 蘋果派');

function check(day, index, file, title) {
    if(moment(day).diff(moment(), 'day') > -1)
        coupons[index].push([file, title]);
    else
        expired[index].push([file, day + ' - ' + title]);
}
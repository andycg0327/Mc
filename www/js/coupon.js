var coupons = [[], [], []], expired = [[], [], []];

check('2018-06-29', 0, '10_MustardChicken', '10元法式芥末香雞堡');
check('2018-10-07', 0, '10_AmericanSpicyChickenBurger', '10元美式辣味香雞堡');
check('2018-10-01', 0, '10_FiletOFish', '10元麥香魚');
check('2018-09-22', 0, '10_IcedMilkTea', '10元小杯冰奶茶');
check('2018-06-21', 0, '10_EggBurgerCheese', '10元吉士蛋堡');

check('2018-09-28', 1, 'x2_BigMac', '大麥克');
check('2018-10-07', 1, 'x2_SpicyChickenFilet', '勁辣雞腿堡');
check('2018-10-08', 1, 'x2_GrilledChickenBurger', '嫩煎雞腿堡');
check('2018-09-30', 1, 'x2_ThousandIslandEbi', '千島黃金蝦堡');
check('2018-10-08', 1, 'x2_Nuggets', '四塊麥克雞塊');
check('2018-10-09', 1, 'x2_ShakaChicken', '雞腿排');
check('2018-09-23', 1, 'x2_ShakaChicken2', '搖搖樂雞腿排');
check('2018-10-08', 1, 'x2_McFlurry', '冰炫風');
check('2018-10-09', 1, 'x2_McMuffin', '滿福堡');

check('2018-10-09', 2, '40_BigMac', '40飲料 + 大麥克');
check('2018-10-06', 2, '40_McChicken', '40飲料 + 麥香雞');
check('2018-09-24', 2, '40_FiletOFish', '40飲料 + 麥香魚');
check('2018-10-07', 2, 'Set_McChicken', '套餐 + 麥香雞');
check('2018-09-30', 2, 'Set_FiletOFish', '套餐 + 麥香魚');
check('2018-09-29', 2, 'Set_ThousandIslandEbi', '套餐 + 千島黃金蝦堡');
check('2018-10-09', 2, 'Set_SpicyChickenWing', '套餐 + 勁辣香雞翅');
check('2018-10-08', 2, 'Set_Nuggets', '套餐 + 四塊麥克雞塊');
check('2018-10-08', 2, 'Set_Sundae', '套餐 + 聖代');
check('2018-10-09', 2, 'Set_ApplePie', '套餐 + 蘋果派');

function check(day, index, file, title) {
    if(moment(day).diff(moment(), 'day') > -1)
        coupons[index].push([file, title]);
    else
        expired[index].push([file, day + ' - ' + title]);
}
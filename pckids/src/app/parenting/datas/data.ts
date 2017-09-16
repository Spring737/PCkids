/**
 * Created by Administrator on 2017/9/15.
 */
// 使用 Mock
import Mock from 'mockjs';

 var Random = Mock.Random;

export var navs = ['首页', '搜索', '服装城', '全球购', '京东金融', '个人中心'];
export var bookShops = ['三联书店', '理想国', '中华书局', '悦读纪', '磨铁图书', '中信出版'];
export var articleTypes = ['孕妇','0-1岁','1-3岁','3-6岁'];
Random.extend({
  shops: function() {
    return this.pick(bookShops);
  },

  arTypes:function() {
    return this.pick(articleTypes);
  },

  authornames: function() {
    var name = ['除夕', '端午' , '中秋' , '国庆'];
    return this.pick(name);
  },
  articleIcons: function() {
     var imgs = ['pranting_one.jpg', 'pranting_two.jpg', 'pranting_three.jpg'];
    return this.pick(imgs);
  }
});


Random.authornames();
Random.articleIcons();
Random.shops();
Random.arTypes();

export var articles = Mock.mock({
  'data|30': [ {
    // @integer表示一个整数
    'article_id' : 'article_' + '@integer(1, 100)' ,
    'article_name' : '@cword(10)',
    'article_author' : '@authornames',
    'articleType' : '@arTypes',
    'article_time': Random.date('yyyy-MM-dd'),

    'bookShop':'@shops',
    "price|1-100.2": 1,

    "comments_acount|10000-100000": 1,
    "sall_type|1-10": 1,
    "icon": "@bookIcons",
    "count|1-100": 1,
    "isSelected": Random.boolean(2, 8, true), //指示参数 current 的相反值 !current 出现的概率。概率计算公式为 max / (min + max)。该参数的默认值为 1，即有 50% 的概率返回参数 !current。
    "comments": "@cparagraph(2, 7)"
  }]
});

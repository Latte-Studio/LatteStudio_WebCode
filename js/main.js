const currency = price => `¥${price}`;

const newProducts = [
  ['new_goods_1.jpg', '特级新疆红富士', '清脆香甜 现摘直发', '59.00'],
  ['new_goods_2.jpg', '精选饼干零食礼盒', '酥脆口感 老少皆宜', '39.00'],
  ['new_goods_3.jpg', '进口冷链海鲜拼盘', '鲜嫩饱满 冷链配送', '99.00'],
  ['new_goods_4.jpg', '家用锅具组合套装', '颜值实用 轻松烹饪', '189.00']
];

const fresh = [1,2,3,4,5,6,7,8].map(i => [`fresh${i}.png`, `生鲜商品 ${i}`, '新鲜采购 品质保证', `${49 + i*8}.00`]);
const clothes = [1,2,3,4,5,6,7,8].map(i => [`clothes${i}.png`, `服饰单品 ${i}`, '舒适面料 日常百搭', `${89 + i*10}.00`]);
const kitchen = [1,2,3,4,5,6,7,8].map(i => [`kitchen${i}.png`, `餐厨用品 ${i}`, '简约实用 厨房好物', `${69 + i*12}.00`]);
const home = [1,2,3,4,5,6,7,8].map(i => [`home${i}.png`, `居家用品 ${i}`, '提升生活幸福感', `${79 + i*9}.00`]);
const recommends = [
  ['recommend1.png', '爆款清单', '高人气优选 口碑推荐'],
  ['recommend2.png', '品质餐厨', '厨房焕新 从细节开始'],
  ['recommend3.png', '居家精选', '舒适生活 轻松布置'],
  ['recommend4.png', '每日鲜食', '新鲜直送 更快到家']
];
const topics = [
  ['topic1.png', '春日食光', '面包、轻食、茶饮等组合推荐。'],
  ['topic2.png', '理想厨房', '锅具、餐具与厨具专题展示。'],
  ['topic3.png', '居家焕新', '家纺、装饰与生活收纳精选。']
];

function renderProductList(id, list) {
  const box = document.getElementById(id);
  box.innerHTML = list.map(item => `
    <article class="product-card">
      <img src="./images/${item[0]}" alt="${item[1]}" />
      <div class="product-info">
        <h4>${item[1]}</h4>
        <p>${item[2]}</p>
        <span class="price">${currency(item[3])}</span>
      </div>
    </article>
  `).join('');
}

function renderRecommend() {
  const box = document.getElementById('recommend-list');
  box.innerHTML = recommends.map(item => `
    <article class="recommend-card">
      <img src="./images/${item[0]}" alt="${item[1]}" />
      <div class="mask">
        <h4>${item[1]}</h4>
        <p>${item[2]}</p>
      </div>
    </article>
  `).join('');
}

function renderTopics() {
  const box = document.getElementById('topic-list');
  box.innerHTML = topics.map(item => `
    <article class="topic-card">
      <img src="./images/${item[0]}" alt="${item[1]}" />
      <div class="topic-info">
        <h4>${item[1]}</h4>
        <p>${item[2]}</p>
      </div>
    </article>
  `).join('');
}

renderProductList('new-products', newProducts);
renderProductList('fresh-list', fresh);
renderProductList('clothes-list', clothes);
renderProductList('kitchen-list', kitchen);
renderProductList('home-list', home);
renderRecommend();
renderTopics();

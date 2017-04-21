"use strict";

let app = {
	list: [],
	getData: function(){
		let sheetId = '1BoNBS5yB-kjJpqcZqpICtZJ-Jr-Rk0ednPiGj3-j470';
		let sheetName = 'Sheet1';
		//reference: https://gist.github.com/ronaldsmartin/47f5239ab1834c47088e
		let dataSource = 'https://script.google.com/macros/s/AKfycbzGvKKUIaqsMuCj7-A2YRhR-f7GZjl4kSxSN1YyLkS01_CfiyE/exec?' + 'id=' + sheetId + '&sheet=' + sheetName;
		let request = new XMLHttpRequest();
		request.responseType = 'json';
		request.addEventListener('load', function () {
			let list = request.response['records'];
			app.list.push.apply(app.list, list);
		});
		request.open('GET', dataSource, true);
		request.send();
	}
};

app.vue = new Vue({
	el: '#appTarget',
	data: {
		list: app.list
	},
	template: `
		<div class="app">
			<div class="container">
				<header>
					<img src="./content/logo.svg" />
				</header>
				<ul class="product-list">
					<li v-for="item in list">
						<product :item="item" />
					</li>
				</ul>
			</div>
		</div>
	`
});

Vue.component(
	'product',
	{
		props: {
			item: Object
		},
		template: `
			<div class="product">
				<span class="image"><span class="image-crop"><img :src="'./content/characters/' + item.img_name" /></span></span>
				<span class="name" :class="'category category-' + item.cat_id">{{item.product_name}}</span>
				<span :class="'instock-' + item.in_stock">{{item.in_stock ? '$' + (item.pts * 4) : 'Out of Stock'}}</span>
				<span :class="'status-' + item.status">{{item.status}}</span>
			</div>
		`
	}
);

app.getData();

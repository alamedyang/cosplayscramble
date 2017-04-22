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
			app.vue.filterList();
		});
		request.open('GET', dataSource, true);
		request.send();
	}
};

app.vue = new Vue({
	el: '#appTarget',
	data: {
		list: app.list,
		filteredList: app.list.slice(),
		categories: [
			{id: 1, on: true, name: 'Anime / Manga'},
			{id: 2, on: true, name: 'Video Game'},
			{id: 3, on: true, name: 'Live Action'},
			{id: 4, on: true, name: 'Pokémon'},
			{id: 5, on: true, name: 'Western Animation'},
			{id: 6, on: true, name: 'Miscellaneous'},
		],
		statuses: [
			{on: true, name: 'Current'},
			{on: true, name: 'Retiring'},
			{on: true, name: 'Retired'},
		]
	},
	methods: {
		toggleFilter: function(item){
			item.on = !item.on;
			this.filterList();
		},
		filterList: function () {
			let categoryNames = [];
			let statusNames = [];
			this.categories.forEach(function (item) {
				if(item.on){
					categoryNames.push(item.name);
				}
			});
			this.statuses.forEach(function (item) {
				if(item.on){
					statusNames.push(item.name);
				}
			});
			let result = this.list.filter(function (product) {
				let inCategories = categoryNames.indexOf(product.category_name) > -1;
				let inStatuses = inCategories && statusNames.indexOf(product.status) > -1;
				return inStatuses;
			});
			this.filteredList = result;
		}
	},
	template: `
		<div class="app">
			<div class="container">
				<header>
					<div class="logo"><img src="./content/logo.svg" /></div>
					<div class="sort-filter noSelect">
						<div class="category-list">
							<h3>Category:</h3>
							<ul class="flex-list">
								<li v-for="item in categories">
									<a class="item"
										:class="'category-' + item.id"
										@click="toggleFilter(item)"
										>
										<span class="box">{{item.on ? '☑' : '☐'}}</span>
										<span class="label">{{item.name}}</span>
									</a>
								</li>
							</ul>
						</div>
						<div class="status-list">
							<h3>Status:</h3>
							<ul>
								<li v-for="item in statuses">
									<a class="item"
										:class="'status-' + item.name.toLocaleLowerCase()"
										@click="toggleFilter(item)"
										>
										<span class="box">{{item.on ? '☑' : '☐'}}</span>
										<span class="label">{{item.name}}</span>
									</a>
								</li>
							</ul>
						</div>
						<div class="sort-list">
							<h3>Sort:</h3>
							<p>Sort options placeholder</p>
						</div>
					</div>
				</header>
				<div class="product-list">
					<ul class="flex-list">
						<li v-for="item in filteredList">
							<product :item="item" />
						</li>
					</ul>
				</div>
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
				<span class="noSelect">
					<span :class="'instock-' + item.in_stock">In Stock: {{item.in_stock ? 'Yes! $' + (item.pts * 4) : 'Out of Stock'}}</span>
					<span :class="'status-' + item.status">Status: {{item.status}}</span>
					<span class="series">Series: {{item.series}}</span>
					<span class="characters">Characters:\n{{item.char_list}}</span>
				</span>
			</div>
		`
	}
);

app.getData();

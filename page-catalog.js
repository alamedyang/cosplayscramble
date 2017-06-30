"use strict";

let statusSymbolMap = {
	Current: '✔&#xFE0E',
	Retiring: '❗&#xFE0E;',
	Retired: '✖&#xFE0E;',
};

let PageCatalog = Vue.component(
	'page-catalog',
	{
		data: function () {
			return {
				list: [],
				filteredList: [],
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
			};
		},
		created: function () {
			this.statusSymbolMap = statusSymbolMap;
			this.getData();
		},
		methods: {
			getData: function(){
				let productList = this;
				let sheetId = '1BoNBS5yB-kjJpqcZqpICtZJ-Jr-Rk0ednPiGj3-j470';
				let sheetName = 'Sheet1';
				//reference: https://gist.github.com/ronaldsmartin/47f5239ab1834c47088e
				let dataSource = 'https://script.google.com/macros/s/AKfycbzGvKKUIaqsMuCj7-A2YRhR-f7GZjl4kSxSN1YyLkS01_CfiyE/exec?' + 'id=' + sheetId + '&sheet=' + sheetName;
				let request = new XMLHttpRequest();
				request.responseType = 'json';
				request.addEventListener('load', function () {
					let list = request.response['records'];
					productList.list.push.apply(productList.list, list);
					productList.filterList();
				});
				request.open('GET', dataSource, true);
				request.send();
			},
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
			<section class="page-catalog">
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
									<span
										class="label"
										:class="'status-' + item.name"
										v-html="statusSymbolMap[item.name] + ' ' +item.name" />
								</a>
							</li>
						</ul>
					</div>
					<div class="sort-list">
						<h3>Sort:</h3>
						<p>Sort options placeholder</p>
						<p>Loaded Items: {{list.length}}<br />Filtered Items: {{filteredList.length}}</p>
					</div>
				</div>
				<product-list :filteredList="filteredList" />
			</section>
		`
	}
);


Vue.component(
	'product-list',
	{
		props: {
			filteredList: Array
		},
		template: `
			<div class="product-list">
				<ul class="flex-list">
					<li v-for="item in filteredList">
						<product :item="item" />
					</li>
				</ul>
			</div>
		`
	}
);

Vue.component(
	'product',
	{
		props: {
			item: Object
		},
		created: function(){this.statusSymbolMap = statusSymbolMap;},
		template: `
			<a class="product">
				<span class="image"><span class="image-crop"><img :src="'./content/characters/' + item.img_name" /></span></span>
				<span class="description">
					<span class="name" :class="'category category-' + item.cat_id">{{item.product_name}}</span>
					<span class="noSelect">
						<strong :class="'instock-' + item.in_stock">
							<span v-html="item.in_stock ? '$' + (item.pts * 4) : 'Out of Stock'" />
							<span :class="'status-' + item.status">
								<span v-html="statusSymbolMap[item.status]" />
								<a
									v-if="item.etsy_live"
									:href="'https://www.etsy.com/listing/' + item.etsy_live" 
									target="_blank"
									v-html="'Etsy ➦&#xFE0E;'" />
							</span>
						</strong>
						<span class="series">Series: {{item.series}}</span>
						<span class="characters">Characters:\n{{item.char_list}}</span>
					</span>
				</span>
			</a>
		`
	}
);

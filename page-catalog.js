"use strict";

let statusSymbolMap = {
	Current: '✔&#xFE0E',
	Retiring: '<strong>!</strong>',
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
					{id: 4, on: true, name: 'Pokémon'},
					{id: 2, on: true, name: 'Video Game'},
					{id: 5, on: true, name: 'Western Animation'},
					{id: 3, on: true, name: 'Live Action'},
					{id: 6, on: true, name: 'Miscellaneous'},
				],
				statuses: [
					{on: true, name: 'Current'},
					{on: true, name: 'Retiring'},
					{on: false, name: 'Retired'},
				],
				sorts: [
					{id: 'sort_franchise_cat', name: 'by franchise (with category)'},
					{id: 'sort_franchise_nocat', name: 'by franchise'},
					{id: 'sort_product_cat', name: 'by product name (with category)'},
					{id: 'sort_product_nocat', name: 'by product name'},
				],
				sort: 'sort_franchise_cat'
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
				let sortColumn = this.sort;
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
				let sort = function(a,b){
					return a[sortColumn] - b[sortColumn];
				};
				result.sort(sort);
				this.filteredList = result;
			}
		},
		template: `
			<section class="page-catalog">
				<h1>General Catalog</h1>
				<div class="sort-filter noSelect">
					<div class="category-list">
						<h4>Category:</h4>
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
						<h4>Status:</h4>
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
						<h4>Sort:</h4>
						<select v-model="sort" @change="filterList">
							<option v-for="option in sorts" v-bind:value="option.id" v-html="option.name" />
						</select>
						<p>Total Products: {{list.length}}<br />Visible Products: {{filteredList.length}}</p>
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
							<span v-html="item.in_stock ? '$' + item.price : 'Out of Stock'" />
							<span :class="'status-' + item.status">
								<span v-html="statusSymbolMap[item.status]" />
								<a
									v-if="item.etsy_live"
									:href="'https://www.etsy.com/listing/' + item.etsy_live"
									target="_blank"
									v-html="'Etsy ➦&#xFE0E;'" />
							</span>
						</strong>
						<span class="series">from {{item.series}}</span>
						<span class="characters">{{item.char_list}}</span>
					</span>
				</span>
			</a>
		`
	}
);

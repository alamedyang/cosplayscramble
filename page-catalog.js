"use strict";

let productData = [];

let PageCatalog = Vue.component(
	'page-catalog',
	{
		data: function () {
			return {
				list: productData,
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
					{on: true, name: 'Retiring'},
					{on: true, name: 'Retired'},
					{on: true, name: 'Unreleased'},
				],
				sorts: [
					{id: 'sort_franchise_cat', name: 'by franchise (with category)'},
					{id: 'sort_franchise_nocat', name: 'by franchise'},
					{id: 'sort_product_cat', name: 'by product name (with category)'},
					{id: 'sort_product_nocat', name: 'by product name'},
					{id: 'sort_old_inv', name: 'newest to oldest'},
					{id: 'sort_old', name: 'oldest to newest'},
				],
				sort: 'sort_franchise_cat'
			};
		},
		created: function () {
			if(this.list.length < 1){
				this.getData();
			}
		},
		methods: {
			getData: function(){
				let productCatalog = this;
				let sheetId = '1BoNBS5yB-kjJpqcZqpICtZJ-Jr-Rk0ednPiGj3-j470';
				let sheetName = 'Sheet1';
				//reference: https://gist.github.com/ronaldsmartin/47f5239ab1834c47088e
				let dataSource = `https://script.google.com/macros/s/AKfycbzGvKKUIaqsMuCj7-A2YRhR-f7GZjl4kSxSN1YyLkS01_CfiyE/exec?id=${sheetId}&sheet=${sheetName}&callback=catalogLoadHandler`;
				let script = document.createElement('script');
				window.catalogLoadHandler = function (data) {
					let list = data['records'];
					productData.push.apply(productData, list);
					productCatalog.filterList();
				};
				script.addEventListener('error', function () {
					console.error('Could not load Catalog');
				});
				script.src = dataSource;
				document.body.appendChild(script);
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
									@keyup.enter="toggleFilter(item)"
									tabindex="0"
									>
									<span class="symbol" :class="item.on ? 'check' : 'uncheck'"/>
									<span class="label">{{item.name}}</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="status-list">
						<h4>Status:</h4>
						<ul>
							<li v-for="item in statuses">
								<a
									class="item"
									:class="'status-' + item.name"
									@click="toggleFilter(item)"
									@keyup.enter="toggleFilter(item)"
									tabindex="0"
									>
									<span class="symbol" :class="item.on ? 'check' : 'uncheck'"/>
									<span class="label">
										<span class="symbol" :class="item.name" />
										<span v-html="item.name" />
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="sort-list">
						<h4>Sort:</h4>
						<select v-model="sort" @change="filterList">
							<option v-for="option in sorts" v-bind:value="option.id" v-html="option.name" />
						</select>
						<p style="padding-top: 1rem;">Displaying {{filteredList.length}} of {{list.length}} Products</p>
					</div>
				</div>
				<product-list v-if="list.length > 0" :filteredList="filteredList" />
				<h2 v-if="list.length < 1">Loading...</h2>
				<h2 v-if="list.length > 0 && filteredList.length < 1">Change your filter settings to show products.</h2>
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
		template: `
			<a class="product" tabindex="0">
				<span class="image"><span class="image-crop"><img :src="'./content/characters/' + item.img_name" /></span></span>
				<span class="description">
					<span class="name" :class="'category category-' + item.cat_id">{{item.product_name}}</span>
					<span class="noSelect">
						<strong :class="'instock-' + item.in_stock">
							<span v-html="item.in_stock ? '$' + item.price : 'Out of Stock'" />
							<span :class="'status-' + item.status">
								<span class="symbol" :class="item.status" />
								<a
									v-if="item.etsy_live"
									:href="'https://www.etsy.com/listing/' + item.etsy_live"
									target="_blank">
									<span>(Etsy)</span>
								</a>
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

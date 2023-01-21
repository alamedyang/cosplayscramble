"use strict";

const PageCatalog = Vue.component(
	'page-catalog',
	{
		data: function () {
			return {
				list: inventory,
				categories: [
					{id: 1, on: true, name: 'Anime / Manga'},
					{id: 4, on: true, name: 'Pokémon'},
					{id: 2, on: true, name: 'Video Game'},
					{id: 5, on: true, name: 'Western Animation'},
					{id: 3, on: true, name: 'Live Action'},
					{id: 6, on: true, name: 'Miscellaneous'},
				],
				sorts: [
					// {id: 'sort_franchise_cat', name: 'by franchise (with category)'},
					// {id: 'sort_franchise_nocat', name: 'by franchise'},
					// {id: 'sort_product_cat', name: 'by product name (with category)'},
					// {id: 'sort_product_nocat', name: 'by product name'},
					// {id: 'sort_old_inv', name: 'newest to oldest'},
					// {id: 'sort_old', name: 'oldest to newest'},
					{id: 'franchise_sort', name: 'Sort by franchise'}
				],
				sort: 'franchise_sort'
			};
		},
		computed: {
			filteredList: function () {
				let sortColumn = this.sort;
				let categoryNames = this.categories.filter(function (item) {
					return item.on
				}).map(function (item) {
					return item.name;
				});
				let result = this.list.filter(function (product) {
					return categoryNames.indexOf(product.category_name) > -1;
				});
				let sort = function(a,b){
					return a[sortColumn] - b[sortColumn];
				};
				result.sort(sort);
				return result;
			}
		},
		methods: {
			toggleFilter: function(item){
				item.on = !item.on;
			},
		},
		template:　/* html */ `
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
					<div class="sort-list">
						<h4>Sort:</h4>
						<select v-model="sort">
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
		template:　/* html */ `
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
		template:　/* html */ `
			<a class="product" tabindex="0">
				<span class="image"><span class="image-crop"><img :src="'./content/characters/' + item.img_name" /></span></span>
				<span class="description">
					<span class="name" :class="'category category-' + item.category_id">{{item.product_name}}</span>
					<span class="noSelect">
						<span class="series">Franchise: {{item.franchise}}</span>
						<span class="characters">{{item.product_includes}}</span>
					</span>
				</span>
			</a>
		`
	}
);

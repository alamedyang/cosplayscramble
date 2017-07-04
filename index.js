"use strict";

let app = {
	router: new VueRouter({
		routes: [
			{ path: '/', component: PageInfo },
			{ path: '/catalog/', component: PageCatalog },
			{ path: '/order/', component: PageOrder },
			{ path: '/custom/', component: PageCustom }
		]
	})
};

app.router.afterEach(function(){
	window.scrollTo(0, 0);
});

app.vue = new Vue({
	el: '#appTarget',
	data: {
		page: 'product-list'
	},
	router: app.router,
	template: `
		<div class="app">
			<div class="container">
				<header>
					<div class="logo"><router-link :to="\{ path: '/'}"><img src="./content/logo.svg" /></router-link></div>
					<nav>
						<ul>
							<li><router-link :to="\{ path: '/'}">Info</router-link></li>
							<li><router-link :to="\{ path: '/catalog'}">Catalog</router-link></li>
							<li><router-link :to="\{ path: '/order/'}">Order</router-link></li>
							<li><router-link :to="\{ path: '/custom/'}">Custom</router-link></li>
						</ul>
					</nav>
				</header>
				<div class="content">
					<transition>
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</transition>
				</div>
			</div>
		</div>
	`
});


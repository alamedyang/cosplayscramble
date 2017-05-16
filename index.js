"use strict";

let app = {
	router: new VueRouter({
		routes: [
			{ path: '/', component: PageNews },
			{ path: '/catalog/', component: PageCatalog },
			{ path: '/faq/', component: PageFaq },
			{ path: '/contact/', component: PageContact }
		]
	})
};

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
							<li><router-link :to="\{ path: '/'}">News</router-link></li>
							<li><router-link :to="\{ path: '/catalog'}">Catalog</router-link></li>
							<li><router-link :to="\{ path: '/faq/'}">F.A.Q.</router-link></li>
							<li><router-link :to="\{ path: '/contact/'}">Contact</router-link></li>
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


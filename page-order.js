"use strict";

let PageOrder = Vue.component(
	'page-order',
	{
		template: `
			<section class="page-order">
				<h1>Ordering</h1>
				<p><a href="mailto:cosplayscramble@gmail.com?Subject=My%20Order">Email me</a> with the product names you would like to buy and I will arrange a Paypal invoice. Everything in the <router-link :to="\{ path: '/catalog'}">Catalog</router-link> or further down on this page is available to buy both online and in person at anime conventions. Let me know if you want priority shipping.</p>
				<p>All prices are in US Dollars.</p>
				<p>Customers not satisfied with the quality of their purchased magnets should contact me within one week of receiving them, along with a photo or scan of the unsatisfactory magnets. Such magnets may be eligible for free replacement. (Please save the packaging if you have a complaint, as the batch number can help me understand what problems you might be having.)</p>

				<h2>Shipping</h2>
				<p><strong>United States:</strong> $3 ($6.50 for priority)</br>
<strong>Canada:</strong> $9</br>
<strong>Worldwide:</strong> $13</p>
				<p>Priority to other countries is much more expensive and not much faster than first class mail, but can be arranged if required — please <a href="mailto:cosplayscramble@gmail.com?Subject=Priority%20Shipping%20International">email me</a> for a price estimate.</p>
				<p>Packages to the US usually arrive 2-4 days after shipping, and international orders usually arrive in 7-10 days, though packages can of course be randomly delayed. If prompt arrival is important, consider that priority mail has guarantees for delivery dates whereas first class mail does not.</p>
				<p>Orders will be shipped within one or two days, but orders involving custom work will be shipped when the custom work is done.</p>
				<p>I am not responsible for VAT or any other import fees, so please be aware of your country’s policies for international mail. (I am also unwilling to lie about the value of the package on custom forms.)</p>

				<h2>Magnets</h2>
				<p>Anything listed as in-stock in the <router-link :to="\{ path: '/catalog'}">General Catalog</router-link> is available to order online or at anime conventions where I have an Artist Alley table. (For a list of conventions I am attending, see the <router-link :to="\{ path: '/'}">Info</router-link> section.) Retired characters are not available for purchase except as a special order, which follow the procedure for POD magnets specified in the <router-link :to="\{ path: '/custom'}">Custom</router-link> section.</p>
				<p>Substitutions are not possible for characters in a set. Nor are partial set sales possible, except in the case of already-orphaned magnets. (See below for information about orphans.)</p>

				<h2>Grab Bags</h2>
				<p>Blind grab bags are an affordable way to acquire characters in bulk. You will not be able to see what characters are included until you open the bag, but I sometimes limit the <em>category</em> of the bag to help narrow things down. (See the <router-link :to="\{ path: '/catalog'}">Catalog</router-link> to learn about what characters are available in each of the six color-coded categories.)</p>
				<p><strong>Grab Bags</strong> are <strong>$5</strong>, and include <strong>at least 3 characters</strong> at a value of <strong>at least $10.</strong></p>
				<p><strong>Super Grab Bags</strong> are <strong>$20</strong>, and include <strong>at least 13 characters</strong> at a value of <strong>at least $50.</strong></p>
				<p>I make grab bags in batches known to contain no duplicate products. So while I don’t know exactly what each bag contains, I am theoretically able to prevent duplicates when grab bags are ordered together (provided they aren’t ordered in too-great of a quantity). If you want bags from a specific batch please let me know when you order.</p>
				<p>All bags contain new, undamaged products.</p>
				<h3>Grab Bags Currrently In Stock</h3>
				<div class="grab-bags-table-holder">
				<table class="grab-bags-table" style="width: 80%;">
					<thead>
						<tr>
							<th>Category</th>
							<th>Type</th>
							<th>Qty</th>
							<th>Batch #</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th rowspan="2" class="category-1">Anime / Manga</th>
							<td rowspan="2">Grab Bag</td>
							<td>4x</td>
							<td>A2</td>
						</tr>
						<tr>
							<td>7x</td>
							<td>A3</td>
						<tr>
							<th rowspan="4" class="category-2">Game and Pokémon</th>
							<td rowspan="2" class="super-gold">Super Grab Bag</td>
							<td class="super-gold">1x</td>
							<td class="super-gold">V0</td>
						</tr>
						<tr>
							<td class="super-gold">3x</td>
							<td class="super-gold">V1</td>
						</tr>
						<tr>
							<td rowspan="2">Grab Bag</td>
							<td>16x</td>
							<td>V2</td>
						</tr>
						<tr>
							<td>14x</td>
							<td>V3</td>
						</tr>
						<tr>
							<th rowspan="2" class="category-5">Western Animation</th>
							<td class="super-gold">Super Grab Bag</td>
							<td class="super-gold">1x</td>
							<td class="super-gold">W1</td>
						</tr>
						<tr>
							<td>Grab Bag</td>
							<td>2x</td>
							<td>W2</td>
						</tr>
						<tr>
							<th class="category-0">all categories</th>
							<td class="super-gold">Super Grab Bag</td>
							<td class="super-gold">8x</td>
							<td class="super-gold">00</td>
						</tr>
					</tbody>
				</table>
				</div>
				<h2>Combos</h2>

				<p>Order together for a better deal!</p>

				<p><strong>Ah! My Goddess Combo: $12</strong><br />
Belldandy, Urd, and Skuld. Save $4!</p>

				<p><strong>Evangelion Combo: $8</strong><br />
Shinji, Rei, Asuka, Mari. Save $50%!</p>

				<p><strong>Fruits Basket Combo: $12</strong><br />
Tohru, Kyo (with cat) and Yuki (with mouse). Save $4!</p>

				<p><strong>To Love Ru Combo: $8</strong><br />
Lala Deviluke, Yuki Rito, Saki Tenjouin, and Yui Kotegawa. Save $50%!</p>

				<p><strong>All 8 Classic Doctors: $28</strong><br />
First Doctor through Eighth Doctor. Save $4!</p>

				<p><strong>All Firefly Sets: $25</strong><br />
All nine crew members. Save $11!</p>

				<p><strong>All Remaining My Little Pony characters: $22</strong><br />
Every My Little Pony character I have in stock. Save $12!</p>
				<!-- 8.5 pts, $34 ordinarily -->

				<p><strong>All Pokémon characters: $80</strong><br />
Every Pokémon character I have in stock. Currently includes 12 trainers and 35 Pokémon! Save $40!</p>
				<!-- 30 pts, $120 ordinarily -->

				<p><strong>All Anime/Manga characters: $241.50</strong><br />
All in-stock Anime/Manga characters (currently 83 total), 25% off! Save $80.50!</p>
				<!-- 80.5 pts, $322 ordinarily -->

				<p><strong>All Video Game characters: $136.50</strong><br />
All in-stock Video Game characters (currently 46 total), 25% off! Save $45.50!</p>
				<!-- 45.5 pts, $182 ordinarily -->

				<p><strong>EVERY MAGNET I HAVE IN STOCK: $348.25</strong><br />
WOW! All in-stock characters for $1.75 each! This is currently 199 characters! I’ll even throw in some extra, never-released characters! THIS IS MORE THAN 50% OFF! YOU’LL DROWN IN MAGNETS!</p>

				<h2>Discounted Sets</h2>
				<p>Previously convention-exclusive, discounted sets are now available online! Discounted sets are not flawed enough to be discarded but are flawed enough to warrant being sold at a reduced rate. Sometimes it’s as simple as a fleck of dust under the lamination layer that causes a bubble, or a misalignment of the cut edge by 1-1.5 mm.</p>
				<p><strong>Dragonball Z Set 1: $6</strong> (normally $8)<br />
Miscellaneous small defects</p>
				<p><strong>Hunter x Hunter Set: $6</strong> (normally $8)<br />
Slightly used</p>
				<p><strong>Dragonball Z Set 2: $4</strong> (normally $8)<br />
Misaligned cut</p>
				<p><strong>Mass Effect Set 1: $5</strong> (normally $8)<br />
Misaligned cut</p>
				<p><strong>Firefly Set 2: $8</strong> (normally $12)<br />
Dust under lamination layer; torn paper under lamination layer</p>

				<h2>Orphaned Singless</h2>
				<p>Sets with damaged pieces may leave orphaned characters/heads/bodies/accessories which are otherwise flawless. Such pieces were normally used at conventions are part of the “demo board” but are now available online! NOTE: Unlike magnets from the convention demo board, these orphans are in new condition unless mentioned otherwise.</p>
				<p><strong>Yuu Yuu Hakusho Hiei Set, Hiei only: $3</strong> (two available)<br />
normally bundled with Hiei for $8</p>
				<p><strong>Spirited Away Set 2, No Face only: $2</strong> (one available)<br />
normally bundled with "Mouse and Bird" for $6</p>
				<p><strong>Final Fantasy XIII Set, Lightning only: $3</strong> (two available)<br />
normally bundled with Hope for $8</p>
				<p><strong>Mass Effect Set 1, Garrus only: $3</strong> (six available)<br />
normally bundled with Wrex for $8</p>
				<p><strong>Korra Set, Bolin only: $2</strong> (two available)<br />
normally bundled with Mako and Korra for $12; in addition, Bolin's foot has been cut into slightly</p>
				<p><strong>Chrono Trigger Set 2, Magus only: $3</strong><br />
normally bundled with Frog and Ayla for $12</p>
				<p><strong>Firefly Set 3, Kaylee and Simon only: $5</strong><br />
normally bundled with River and bloody knives for $12</p>
				<p><strong>Firefly Set 3, Kaylee and Simon with River's body: $6</strong><br />
normally bundled with River's head and bloody knives for $12</p>
				<p><strong>Lizbeth from Pokémon (unreleased): $1</strong> (many available)<br />
never released character!</p>
				<p><strong>Gym Leader Skyla from Pokémon (unreleased): $1</strong> (many available)<br />
never released character!</p>
			</section>
		`
	}
);

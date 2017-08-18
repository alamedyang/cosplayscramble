"use strict";

let PageOrder = Vue.component(
	'page-order',
	{
		template: `
			<section class="page-order">
				<h1>Ordering</h1>
				<p>To make an order, please <a href="mailto:cosplayscramble@gmail.com?Subject=My%20Order">email me</a> with the product names you would like to buy and I will arrange a Paypal invoice — no Paypal account required. (Something more automated should be coming soon!) Anything listed in the <router-link :to="\{ path: '/catalog'}">Catalog</router-link> or further down on this page is available to buy both online and in person at anime conventions. Let me know if you want priority shipping.</p>
				<p>All prices are in US Dollars.</p>
				<p>Customers not satisfied with the quality of their purchased magnets should contact me within one week of receiving them, along with a photo or scan of the unsatisfactory magnets. Such magnets may be eligible for free replacement. (Please save the packaging if you have a complaint, as the batch number can help me understand what problems you might be having.)</p>

				<h2>Shipping</h2>
				<p>Shipping rates: $3 to the US ($6.50 for priority), $9 to Canada, and $13 elsewhere. Priority to other countries is much more expensive and not much faster than first class mail, but can be arranged if required — please <a href="mailto:cosplayscramble@gmail.com?Subject=Priority%20Shipping%20International">email me</a> for a price estimate.</p>
				<p>Packages to the US usually arrive 2-4 days after shipping, and international orders usually arrive in 7-10 days, though packages can of course be randomly delayed, particularly when customs become involved. If prompt arrival is important, consider that priority mail has guarantees for delivery dates whereas first class mail does not.</p>
				<p>Orders will be shipped within one or two days, but orders involving custom work will be shipped when the custom work is done.</p>
				<p>I am not responsible for VAT or any other import fees, so please be aware of your country’s policies for international mail. (I am also unwilling to lie about the value of the package on custom forms.)</p>

				<h2>Magnets</h2>
				<p>Anything listed as in-stock in the <router-link :to="\{ path: '/catalog'}">General Catalog</router-link> is available to order online or at anime conventions where I have an Artist Alley table. (For a list of conventions I am attending, see the <router-link :to="\{ path: '/'}">Info</router-link> section.) Retired characters are not available for purchase except as a special order, which follow the procedure for POD magnets specified in the <router-link :to="\{ path: '/custom'}">Custom</router-link> section.</p>
				<p>Substitutions are not possible for characters in a set. Nor are partial set sales possible, except in the case of already-orphaned magnets. (See below for information about orphans.)</p>

				<h2>Grab Bags</h2>
				<p>I have a variety of blind grab bags available online, as well as at conventions that allow them, as an affordable way to acquire characters in bulk. You will not be able to see what characters are included until you open the bag, but I sometimes limit the <em>category</em> of the bag to help narrow things down. (See the <router-link :to="\{ path: '/catalog'}">Catalog</router-link> to learn about what characters are available in each of the six color-coded categories.)</p>
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
							<th rowspan="3" class="category-1">Anime / Manga</th>
							<td class="super-gold">Super Grab Bag</td>
							<td class="super-gold">4x</td>
							<td class="super-gold">A1</td>
						</tr>
						<tr>
							<td rowspan="2">Grab Bag</td>
							<td>10x</td>
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
							<td class="super-gold">4x</td>
							<td class="super-gold">V1</td>
						</tr>
						<tr>
							<td rowspan="2">Grab Bag</td>
							<td>18x</td>
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
							<td class="super-gold">1x</td>
							<td class="super-gold">00</td>
						</tr>
					</tbody>
				</table>
				</div>
				<h2>Combos</h2>

				<p>At conventions I offer discounts for certain combinations of sets. These are now also available online!</p>

				<p><strong>All 8 Classic Doctors: $28</strong><br />
First Doctor through Eighth Doctor. Save $4!</p>

				<p><strong>All Doctor Who characters: $48</strong><br />
First Doctor through Twelfth Doctor plus DW Companions Set 2. (DW Companions Set 1 is sold out and retired, unfortunately.) Save $12!</p>

				<p><strong>All My Little Pony characters: $49</strong><br />
Every My Little Pony character I have in stock. Save $23!</p>

				<p><strong>All Pokémon characters: $85</strong><br />
Every Pokémon character I have in stock. Currently includes 15 trainers and 37 Pokémon! Save $54!</p>

				<p><strong>All Anime/Manga characters: $282</strong><br />
All in-stock Anime/Manga characters (currently 98 total), 25% off! Save $94!</p>

				<p><strong>All Video Game characters: $157.50</strong><br />
All in-stock Video Game characters (currently 53 total), 25% off! Save $52.50!</p>

				<p><strong>EVERY MAGNET I HAVE IN STOCK: $490</strong><br />
WOW! All in-stock characters for $1.75 each! This is currently 280 characters! I’ll even throw in some extra, never-released characters! THIS IS MORE THAN 50% OFF! YOU’LL DROWN IN MAGNETS!</p>

				<h2>Discounted Sets</h2>
				<p>Previously convention-exclusive, discounted sets are now available online! Discounted sets are not flawed enough to be discarded but are flawed enough to warrant being sold at a reduced rate. Sometimes it’s as simple as a fleck of dust under the lamination layer that causes a bubble, or a misalignment of the cut edge by 1-1.5 mm.</p>
				<p><strong>Coming Soon!</strong></p>

				<h2>Orphaned Singless</h2>
				<p>Sets with damaged pieces may leave orphaned characters/heads/bodies/accessories which are otherwise flawless. Such pieces were normally used at conventions are part of the “demo board” but are now available online! NOTE: Unlike magnets from the convention demo board, these orphans are in new condition unless mentioned otherwise.</p>
				<p><strong>Coming Soon!</strong></p>
			</section>
		`
	}
);

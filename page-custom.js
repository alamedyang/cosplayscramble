"use strict";

const PageCustom = Vue.component(
	'page-custom',
	{
		template:　/* html */ `
			<section class="page-custom">
				<h1>Custom Orders</h1>
				<p>I am currently accepting commissions and other custom orders! NOTE: I have retired my cutting machine, so all future orders will be hand cut.</p>

				<h2>Types of Custom Order</h2>
				<p><strong>Full Character:</strong> Any new character that must be drawn from head to toe. Can be fan art (from anime, comics, games, TV shows, movies, etc.) or can be an original character.</p>
				<p><strong>Head Only:</strong> Same as above, but the head only. Useful if you want me to draw your head (i.e. from a photo) so you can "cosplay" using other magnets.</p>
				<p><strong>Mini Character:</strong> I will draw an animal (or fan art creatures like Pokemon) in a mini size.</p>
				<p><strong>Color Edits:</strong> Any already-existing drawing can have its colors altered. (Lineart alterations count as a new commission in one of the above categories, though a reduced rate may be arranged depending on the scope of the requested alteration.)</p>
				<p><strong>Reprint:</strong> If an already-drawn character from the <router-link :to="\{ path: '/catalog'}">Catalog</router-link> is sold out, I will make more for the POD (print-on-demand) price.</p>
				<p><strong>Other Special Orders:</strong> Other requests will be handled the same way as the next most-similar commission. E.g., a head-on-body non-decapitation order will be handled and charged like a POD magnet order.</p>

				<h2>Prices</h2>

				<div class="prices-table-holder">
				<table class="prices-table" style="width: 100%;">
					<thead>
						<tr>
							<th></th>
							<th>Size</th>
							<th>Drawing</th>
							<th>Reprint</th>
							<th>Examples</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Full Character</th>
							<td>large</td>
							<td>$40</td>
							<td>$6</td>
							<td>Sephiroth, Vash the Stampede, a fursona, a DnD character</td>
						</tr>
						<tr>
							<th>Head Only</th>
							<td>large</td>
							<td>$25</td>
							<td>$4</td>
							<td>you, your fiance, your children, your BFF</td>
						</tr>
						<tr>
							<th>Mini Character</th>
							<td>mini</td>
							<td>$25</td>
							<td>$4</td>
							<td>Raichu, Tony Tony Chopper, your pet dog, a Red-tailed Hawk</td>
						</tr>
						<tr>
							<th rowspan="2">Color Edits</th>
							<td>large</td>
							<td>$15</td>
							<td>$6</td>
							<td>game pallet swaps, hair “dye”</td>
						</tr>
						<tr>
							<td>mini</td>
							<td>$10</td>
							<td>$4</td>
							<td>shiny Pokemon, pet breed color variations</td>
						</tr>
						<tr>
							<th rowspan="2">Reprint</th>
							<td>large</td>
							<td class="optional">n/a</td>
							<td>$6</td>
							<td>POD price for large character</td>
						</tr>
						<tr>
							<td>mini</td>
							<td class="optional">n/a</td>
							<td>$4</td>
							<td>POD price for mini character</td>
						</tr>

					</tbody>
				</table>
				</div>

				<p>Remember that shipping is not included in the above chart, and will be at the regular rates. (See the <router-link :to="\{ path: '/order'}">Order</router-link> section for current rates.)</p>
				<p><strong>Size:</strong> Cosplay Scramble magnets come in two sizes: large and small/mini. Generally humans and humanoids are the large size, while animals or small creatures, like Pokemon, are the small size.</p>
				<p><strong>Drawing:</strong> This is how much it costs to get the drawing made. The drawing cost also includes one copy of the finished drawing as a cut magnet for free.</p>
				<p><strong>Reprint:</strong> The first magnet is free, so this column is the cost of each magnet after the first if you want more than one. (This is the current POD price.)</p>
				<p><strong>Examples:</strong> Some examples of each category.</p>

				<h2>Commission Procedure</h2>
				<h3>Notes in Advance</h3>
				<p>While I may decline or delay the commission due to subject matter or logistics issues, I will try to get as many done as I can this year. In advance I will say that I won’t draw anything controversial (i.e. lewd, politically charged, excessively violent).</p>
				<p>There are limitations on poses and characters due to the format, so arms cannot be above the character’s head and thin pieces like tails or antenna will have to be thickened so the magnet won’t break off. In addition, Cosplay Scramble magnets cannot be made from characters without a workable jawline, such as characters whose entire body is their head (e.g. Jigglypuff) or bulky characters without anything resembling the anatomy of a neck (e.g. Totoro).</p>

				<h3>1) Contact Me</h3>
				<p>To begin a commission, <strong><a href="mailto:cosplayscramble@gmail.com?Subject=Commission Request">email me</a> with the words "Commission Request" in the subject line.</strong></p>
				<p>I’ll also need to know who or what you’d like me to draw. If your commission is fan art, you’ll need to let me know if there’s a specific outfit you would prefer. If your commission is an original character, I’ll need head-to-toe reference. <strong>Attach or link any relevant images</strong> at this step. I might have questions about specific details, particularly for characters from franchises I’m not familiar with.</p>
				<p>If you have any special requests, let me know at this point in case it will affect the final price. Special requests can include custom packaging (perhaps for a party), shipping to multiple addresses, non-decapitation, etc.</p>

				<h3>2) Payment</h3>
				<p>Once I’ve agreed to your commission, <strong>I will send a Paypal invoice to your email address.</strong> Paypal will let you pay in several ways, including with a credit card, so you won’t need a Paypal account to pay. The shipping rates are the same as for a general order — see the <router-link :to="\{ path: '/order'}">Order</router-link> section for current shipping prices.</p>
				<p>(Magnets from the General Catalog can be ordered and shipped with your commission. Just let me know which sets you want, and I’ll include them on the invoice. You’ll receive all ordered magnets together.)</p>
				<p>You may cancel your commission at any point, but the refund may be reduced depending on how far along I am. (E.g., if I haven’t started drawing yet you will get a full refund, but if I am done drawing but haven’t made the magnet yet you will only get the magnet manufacturing cost back.)</p>
				<p>I do insist that the full commission cost is paid in advance.</p>

				<h3>3) Production</h3>
				<p><strong>Once payment clears, I’ll begin drawing.</strong> Note: because some commissions will be more difficult than others, I may finish them out of order. I want them all to turn out well, and sometimes I need extra time to make sure I get them right.</p>
				<p>When I’m done drawing, I’ll send you the finished image to see what you think. I can still make changes at this point, so it’s important to make sure I got everything about the character correct. (If I haven’t seen the anime the character is from, for example, I might miss an important detail.) Then, once we are both satisfied, <strong>I will print, magnet-ify, and cut the finished drawing(s). I’ll ship them as soon as they’re done, you’ll receive them in the mail!</strong></p>

				<h2>Contact</h2>
				<p>Questions? Send me an <a href="mailto:cosplayscramble@gmail.com?Subject=a%20question">email me</a> or convo me on Etsy.</p>

			</section>
		`
	}
);

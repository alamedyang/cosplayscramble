"use strict";

let PageCustom = Vue.component(
	'page-custom',
	{
		template: `
			<section class="page-custom">
				<h1>Custom orders</h1>
				<p>I am currently accepting commissions and other custom orders! Commissions are expected to continue through October 2017 for fan art and mid-2018 for everything else.</p>

				<p><strong>Current Commission Slots:</strong><br />
1. <strong>rock</strong><br />
2. <strong>tseng</strong><br />
3. <em>empty!</em><br />
4. <em>empty!</em><br />
5. <em>empty!</em></p>

				<h2>Types of Commissions</h2>
				<p><strong>Fan Art:</strong> Any character from a commercial franchise. (See the <a href="#/catalog">General Catalog</a>.) Characters can be from anime, comics, games, television shows, movies, or anything else provided the parent company (and rights holder) is tolerant of fan art. This category is for characters that have a broad fanbase and that could be sold in the Artist Alley at anime conventions.</p>
				<p><strong>OCs:</strong> Short for “original characters,” this category includes any original design of your own, including self-insert characters for commercial franchises. Common examples include fursonas, MLP ponysonas, and customized characters for popular anime. These are unique characters of your own design that would not be sold in the Artist Alley at anime conventions.</p>
				<p><strong>People [head only]:</strong> This category is for drawings made from photos of you or anyone else you know in real life. For the time being, I will only draw heads from photos like this, meaning you will have to use bodies from other characters (to “cosplay”).</p>
				<p><strong>Pets / Animals:</strong> I will draw your pet or a generic animal in a mini size.</p>
				<p><strong>Color Edits:</strong> Any already-existing drawing can have its colors altered. (Lineart alterations count as a new commission in one of the above categories, though a reduced rate may be arranged depending on the scope of the alteration.)</p>
				<p><strong>Other Special Orders:</strong> Other requests will be handled the same way as the next most-similar commission. E.g., a head-on-body non-decapitation order will be handled and charged like a POD magnet order.</p>

				<h2>Prices</h2>

				<div class="prices-table-holder">
				<table class="prices-table" style="width: 100%;">
					<thead>
						<tr>
							<th></th>
							<th>Size</th>
							<th>POD</th>
							<th>Drawing</th>
							<th>Cost</th>
							<th>Bulk Rate</th>
							<th>Bulk Cost</th>
							<th>Examples</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th rowspan="2">Fan Art</th>
							<td>large</td>
							<td class="prices-good">no</td>
							<td>$40</td>
							<td>$4</td>
							<td class="optional"> </td>
							<td class="optional"> </td>
							<td>Sephiroth, Vash the Stampede</td>
						</tr>
						<tr>
							<td>mini</td>
							<td class="prices-good">no</td>
							<td>$30</td>
							<td>$2</td>
							<td class="optional"> </td>
							<td class="optional"> </td>
							<td>Tony Tony Chopper, Raichu</td>
						</tr>
						<tr>
							<th>OCs</th>
							<td>large</td>
							<td>yes</td>
							<td>$60</td>
							<td>$6</td>
							<td class="optional">6+</td>
							<td class="optional">$5</td>
							<td>a fursona, a DnD character</td>
						</tr>
						<tr>
							<th>People [head only]</th>
							<td>large</td>
							<td>yes</td>
							<td>$25</td>
							<td>$4</td>
							<td class="optional">10+</td>
							<td class="optional">$3</td>
							<td>you, your fiance, your children, your BFF</td>
						</tr>
						<tr>
							<th>Pets / Animals</th>
							<td>mini</td>
							<td>yes</td>
							<td>$30</td>
							<td>$4</td>
							<td class="optional">12+</td>
							<td class="optional">$3</td>
							<td>your pet dog, a Red-tailed Hawk</td>
						</tr>
						<tr>
							<th rowspan="2">Color Edits</th>
							<td>large</td>
							<td>yes</td>
							<td>$10</td>
							<td>$6</td>
							<td class="optional">6+</td>
							<td class="optional">$5</td>
							<td>game pallet swaps, hair “dye”</td>
						</tr>
						<tr>
							<td>mini</td>
							<td>yes</td>
							<td>$10</td>
							<td>$4</td>
							<td class="optional">12+</td>
							<td class="optional">$3</td>
							<td>shiny Pokemon, pet breed color variations</td>
						</tr>
					</tbody>
				</table>
				</div>

				<p>Remember that shipping is not included in the above chart, and will be at the regular rates. (See the <a href="#/order">Order</a> section for current rates.)</p>
				<p><strong>Size:</strong> Cosplay Scramble magnets come in two sizes: large and small/mini. Generally humans and humanoids are the large size, while animals or small creatures, like Pokemon, are the small size.</p>
				<p><strong>POD:</strong> This column indicates whether magnets are print-on-demand (as opposed to pre-made). Print-on-demand magnets are not made until ordered, and are hand cut unless ordered in bulk.</p>
				<p><strong>Drawing:</strong> This is how much it costs to get the drawing made. The drawing cost also includes one copy of the finished drawing as a cut magnet.</p>
				<p><strong>Cost:</strong> The first magnet is free, so this column is the cost of each magnet after the first if you want more than one. Special cases can be made for POD magnets that are ordered in bulk, which can be cost-effectively cut by machine. For the purposes of ordering in bulk, POD magnets that have the same cuttable outline count toward the total.</p>
				<p><strong>Examples:</strong> Some examples of each category.</p>

				<h2>Commission Procedure</h2>
				<p>Each commissions slot allows someone to commission up to three new characters. Note that slots may be finished out of order depending on the drawings’ difficulty.</p>
				<p>While I may decline or delay the commission due to subject matter or logistics issues, I will try to get as many done as I can this year. In advance I will say that I won’t draw anything controversial (i.e. lewd, politically charged, excessively violent).</p>
				<p>There are limitations on poses and characters due to the format, so arms cannot be above the character’s head and thin pieces like tails or antenna will have to be thickened so the magnet won’t break off. In addition, Cosplay Scramble magnets cannot be made from characters without a workable jawline, such as characters whose entire body is their head (e.g. Jigglypuff) or bulky characters without anything resembling the anatomy of a neck (e.g. Totoro).</p>

				<h3>Reserve a Slot</h3>
				<p>To reserve a slot, <strong><a href="mailto:contact@cosplayscramble.com?Subject=Reserve%20a%20slot">email me</a> with the words “reserve a slot” in the subject line.</strong></p>
				<p>I’ll also need to know who or what you’d like me to draw. If your commission is fan art, you’ll need to let me know if there’s a specific outfit you would prefer. If your commission is an original character, I’ll need head-to-toe reference. <strong>Attach or link any relevant images</strong> at this step. I might have questions about specific details, particularly for characters from franchises I’m not familiar with.</p>
				<p>If you have any special requests, let me know at this point in case it will affect the final price. Special requests can include custom packaging (perhaps for a party), shipping to multiple addresses, non-decapitation, etc.</p>
				<p>Once we’ve agreed on what I will be drawing, your slot is reserved! I will pick a codeword to represent your order in the Commissions Slot list above.</p>

				<h3>Payment</h3>
				<p>Once I’ve agreed to your commission, <strong>I will send a Paypal invoice to your email address.</strong> Paypal will let you pay in several ways, including with a credit card, so you won’t need a Paypal account to pay. The shipping rates are the same as for a general order — see the <a href="#/order">Order</a> section for current shipping prices.</p>
				<p>(Magnets from the General Catalog can be ordered and shipped with your commission. Just let me know which sets you want, and I’ll include them on the invoice. You’ll receive all ordered magnets together.)</p>
				<p>You may cancel your commission at any point, but the refund may be reduced depending on how far along I am. (E.g., if I haven’t started drawing yet you will get a full refund, but if I am done drawing but haven’t made the magnet yet you will only get the magnet manufacturing cost back.)</p>
				<p>I do insist that the full commission cost is paid in advance. If payment takes too long, there’s a good change I will ask you to give up your slot (at least for the moment) so that others may have a turn.</p>

				<h3>Production</h3>
				<p><strong>Once payment clears, I’ll begin.</strong> Note: because some commissions will be more difficult than others, I may finish them out of order. I want them all to turn out well, and sometimes I need extra time to make sure I get them right.</p>
				<p>When I’m done drawing, I’ll send you the finished image to see what you think. I can still make changes at this point, so it’s important to make sure I got everything about the character correct. (If I haven’t seen the anime the character is from, for example, I might miss an important detail.) Then, once we are both satisfied, <strong>I will print, magnet-ify, and cut the finished drawing(s). I’ll ship them as soon as they’re done, you’ll receive them in the mail!</strong></p>
				<p>Fan art commissions will appear in the General Catalog at this point, and will also be available at any future conventions (while supplies last).</p>

				<h2>Contact</h2>
				<p>Questions? Send me an <a href="mailto:contact@cosplayscramble.com?Subject=A%20question">email me</a> or convo me on Etsy.</p>

			</section>
		`
	}
);

"use strict";

let PageInfo = Vue.component(
	'page-info',
	{
		template: `
			<section class="page-info">
				<h1>Information</h1>
				<h2>News: Cosplay Scramble Ending in 2018</h2>
				<p>Hello, everyone!</p>
				<p>Cosplay Scramble has been a big part of my last seven years, but my life has been moving in another direction so I’ve decided to retire.</p>
				<p>I’m very grateful for all of you who love my magnets and who have supported me on Etsy and at conventions these many years. I hope my magnets continue to delight you on your fridges and lockers, whether you are “mixers” or “matchers!”</p>
				<p>My Etsy shop will remain as it is now until I run out of magnets to sell, but I will be scaling back production through the beginning of 2018, when I will stop entirely. And effective immediately, a vast number of sets are retiring and will not be remade once they are sold out.</p>
				<p>But I am happy to announce that I am reopening <a href="#/custom/">commissions</a>! (Fan art commissions will be given priority, to make them available for the last round of conventions.)</p>
 				<p>Announcements about future convention attendance will be made here as details become available, though I can confirm now that I’m gonna be at Anime Banzai in October 2017 (SLC, UT).</p>
 				<p>Again, thank you for your support and for a wonderful seven years!</p>
				<p> Cheers,<br>
Mary Jenkins</p>
				<p>P.S. Also, five previously-retired characters have gotten face lifts and are available again: Sailor Moon, Miku Hatsune, Avatar Set 1 (Aang, Katara, Sokka)!</p>
				<p>P.P.S. Here’s Colonel Mustang in a miniskirt.</p>
				<p><img src="content/miniskirt.png" alt="Colonel Mustang dressed as Haruhi Suzumiya" title="Colonel Mustang is dead sexy... in a miniskirt!" width="150" /></p>

				<h2>Convention List</h2>
				<p><strong>Anime Banzai,</strong> October 20-22, 2017 in Layton, Utah (20 minutes north of SLC)</p>

				<h2>About Cosplay Scramble</h2>
				<p>Cosplay Scramble is a line of fan art magnets with swappable heads, available in the Artist Alley at anime conventions in Utah and nearby states since 2010.</p>
				<p><strong>How the magnets are made:</strong> Characters are sketched by hand and inked and colored in Photoshop using a Wacom tablet. I use a Xerox laser printer to print pages of the drawings on high-quality paper, and use a Xyron 900 laminator and its magnet cartridges to apply magnet backing and lamination. The magnets are then cut with a KNK Zing with touch ups by hand using a specific type of Wescott titanium scissors (though older magnets were 100% hand-cut). Packaging is printed onto cardstock and scored and cut by hand.</p>

				<h2>Frequently Asked Questions</h2>
				<p><span class="q">Q. You should make X character from X show!</span><br>
				<span class="a">A. Cool! The more people suggest a character, the more I can see that they are popular and the further up the "queue" they will be. Thanks! [The window for suggestions is closing fast because I’m retiring, so act now!]</span></p>

				<p><span class="q">Q. I'll pay you to make X character from X show (or me, my fiancee, my dog, my OC, etc.)!</span><br>
<span class="a">A. Yay! This counts as a commission, and I'll pretty much draw whoever you want. See the <a href="#/custom/">Custom</a> section for more information.</span></p>

				<p><span class="q">Q. Can I buy X set but without X character (or substituting X character)?</span><br>
				<span class="a">A. Unfortunately not. It would be much more expensive — for both of us. These magnets are effort-intensive to make, and I make them in batches and pre-package them as a cost-saving measure. Selling a partial set means the remaining character(s) cannot be sold at all, and running a custom batch to supplement the orphan (or sell to the buyer as requested) would cost more than the entire set would have cost. Nevertheless, this is my most common question, and as a result I'm now preferring to design smaller sets for characters in ambiguous groupings. <strong>EXCEPTION: If part of a set was damaged during production, the survivors may be available singly. Please see the <a href="#/order/">Order</a> section to see what singles are currently available.</strong></span></p>

				<p><span class="q">Q. Can I get X but without the head and body cut apart?</span><br>
				<span class="a">A. Yes! This counts as a custom print-on-demand order, and the procedure is available in the <a href="#/custom/">Custom</a> section.</span></p>

				<p><span class="q">Q. Can you use the magnets on cars?</span><br>
				<span class="a">A. Technically yes, but I wouldn't recommend it. Depending on the car body's material, the magnets will likely not stick strongly enough to resist being brushed off on accident. There's also concern for weatherproofing — while most of the materials resist sun damage, grime, heat, cold, and even humidity fairly well, the paper itself does not. Even if the paper does not weaken or disintegrate in heavy rain, water seeped into the interior of the paper takes time to dry and will probably mildew if wetted several times.</span></p>

				<p><span class="q">Q. Why is shipping so expensive to my country?</span><br>
				<span class="a">A. On Etsy I’m required to use the parcel rate, which is unfortunately a great deal more expensive than the letter rate. When mailing international packages in person at the post office, it’s true that I <em>have</em> occasionally been granted use of the letter rate, but I have also on occasion been <em>denied</em> the letter rate, so I choose not to offer the letter rate at all, especially since anything more than a couple sets would have to be sent at the parcel rate anyway. This, combined with the enormous advantage of package tracking for parcels, is why I do not offer a letter rate for international shipping.</span></p>

				<p><span class="q">Q. When will you be at X convention again?</span><br>
				<span class="a">A. I might not do conventions any more, unfortunately. They are a lot of work and I honestly don't make enough money to justify the effort. (My profit margin is almost nothing, and a booth can cost up to $350 — never mind general travel expenses.) As I live in Salt Lake City, Utah, I may continue to sell at conventions in northern Utah as I can until my supply runs out. I’ve got my eye on Anime Banzai 2017, but other than that I can’t say for sure.</span></p>

				<p><span class="q">Q. Isn't it illegal to sell fan art?</span><br>
				<span class="a">A. Technically yes, just like cosplaying is illegal (copyright infringement). However, many multimedia companies are friendly when it comes to selling fan art in certain contexts. For smaller IPs, like Undertale, Hatoful Boyfriend, Mystery Machine's Ghost, I rely on creators’ statements about creating Artist Alley merchandise. Most are fine with it, but other creators (Homestuck's Andrew Hussie, for instance) are not, and in all cases I respect the creators' wishes about what kinds of material are allowed. Larger companies are more strict, of course, and I do a lot of research to make sure that the IPs I use are in "safe territory," which is why you see Cosplay Scramble characters from popular anime but not Disney films. (For a specific example of fan art tolerance, see <a href="http://www.animenewsnetwork.com/news/2015-07-01/funimation-issues-statement-on-fan-art-and-trademark-rights/.89972">Funimation's press release about this issue</a>. Funimation must enforce their trademarks to prevent them from being lost, but they claim to be tolerant of copyright infringement in Artist Alleys specifically.) I hope to graduate from fan art eventually, but in the meantime I make these magnets by hand, in my own home, in very small numbers, for sale in Artist Alley-type venues only (and not in the dealer's room or in brick-and-mortar stores), and I comply with any requests for removal by the license holders or IP creators.</span></p>

				<p><span class="q">Q. Why are some sets absent from Etsy?</span><br>
				<span class="a">A. If there is a set available generally (either online or at anime conventions) but not on Etsy, it’s because of copyright claims. Copyright claims on Etsy have been very rare for me but I take them seriously — and I prefer to err on the side of caution by not relisting items struck by copyright claims, even if the claim was done in error (as with Minecraft). Most of the absent items, however, were voluntarily removed not because they were hit with a claim, but because other items from the same license holder were hit, and I want to respect the company’s wishes about where fan art of their properties may be sold.</span></p>

				<p><span class="q">Q. Scrambled eggs?</span class="q"><br>
				<span class="a">A. "Scramble" <em>is</em> in the name! Well, uh, anyway, <a href="https://www.flickr.com/photos/wackyland/8016622427/" target="_blank">the image is by "kyle tsui"</a> and is used under the Creative Commons 2.0 Attribution license.</span></p>
			</section>
		`
	}
);

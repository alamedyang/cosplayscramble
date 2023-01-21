"use strict";

const PageInfo = Vue.component(
	'page-info',
	{
		template:　/* html */ `
			<section class="page-info">
				<h1>Information</h1>
				<h2>News: Oopsie (Oct 22, 2018)</h2>
				<p>I just discovered that my black business cards have had the wrong email address for a year or more. To contact me, please use <a href="mailto:cosplayscramble@gmail.com">cosplayscramble@gmail.com</a> and not contact@cosplayscramble.com. I have not been receiving mail to the second address.</p>

				<h2>News: Retirement Update, April 2018</h2>
				<p>Hi, folks!</p>
				<p>Mass production of magnets have stopped, but I am still accepting custom orders and commissions until at least the end of 2018. Magnets made from here on out will be hand cut and print-on-demand only, meaning partial set orders are now possible! The current print-on-demand price is $6 for large characters and $4 for mini characters, and anything goes!</p>
				<p>Recently-commissioned characters are available as print-on-demand magnets, as well — see the <router-link :to="\{ path: '/catalog'}">Catalog</router-link> section to see them!</p>

				<h2>News: Cosplay Scramble Ending in 2018</h2>
				<p>Hello, everyone!</p>
				<p>Cosplay Scramble has been a big part of my last seven years, but my life has been moving in another direction so I’ve decided to retire.</p>
				<p>I’m very grateful for all of you who love my magnets and who have supported me on Etsy and at conventions these many years. I hope my magnets continue to delight you on your fridges and lockers, whether you are “mixers” or “matchers!”</p>
				<p>My Etsy shop will remain as it is now until I run out of magnets to sell, but I will be scaling back production through the beginning of 2018, when I will stop entirely. And effective immediately, a vast number of sets are retiring and will not be remade once they are sold out.</p>
				<p>But I am happy to announce that I am reopening <router-link :to="\{ path: '/custom'}">commissions</router-link>! Fan art commissions will be given priority, to make them available for the last round of conventions.</p>
 				<p>Announcements about future convention attendance will be made here as details become available, though I can confirm now that I’m gonna be at Anime Banzai in October 2017 (SLC, UT).</p>
 				<p>Again, thank you for your support and for a wonderful seven years!</p>
				<p> Cheers,<br />
Mary Jenkins</p>
				<p>P.S. Also, five previously-retired characters have gotten face lifts and are available again: Sailor Moon, Miku Hatsune, Avatar Set 1 (Aang, Katara, Sokka)!</p>
				<p>P.P.S. Here’s Colonel Mustang in a miniskirt.</p>
				<p><img src="content/miniskirt.png" alt="Colonel Mustang dressed as Haruhi Suzumiya" title="Colonel Mustang is dead sexy... in a miniskirt!" width="150" /></p>

				<h2>Convention List</h2>
				<p><em>none currently planned</em></p>

				<h2>About Cosplay Scramble</h2>
				<p><img src="content/etsyphoto.png" width="250" height="250" alt="Sailor Moon's body is being placed underneath Inuyasha's head, with 3D specs off to the side." title="The popular Sailor Yasha." ></p>
				<p>Cosplay Scramble is a line of fan art magnets with swappable heads, available in the Artist Alley at anime conventions in Utah and nearby states since 2010.</p>
				<p><strong>How the magnets are made:</strong> Characters are sketched by hand and inked and colored in Photoshop using a Wacom tablet. I use a Xerox laser printer to print pages of the drawings on high-quality paper, and use a Xyron 900 laminator and its magnet cartridges to apply magnet backing and lamination. The magnets are then cut with a KNK Zing with touch ups by hand using a specific type of Wescott titanium scissors (though older magnets were 100% hand-cut). Packaging is printed onto cardstock and scored and cut by hand.</p>

				<h2>Frequently Asked Questions</h2>
				<p><span class="q">Q. You should make X character from X show!</span><br />
				<span class="a">A. Cool! The more people suggest a character, the more I can see that they are popular and the further up the "queue" they will be. Thanks! [The window for suggestions is closing fast because I’m retiring, so act now!]</span></p>

				<p><span class="q">Q. I'll pay you to make X character from X show (or me, my fiancee, my dog, my OC, etc.)!</span><br />
<span class="a">A. Yay! This counts as a <router-link :to="\{ path: '/custom'}">commission</router-link>, and I'll pretty much draw whoever you want.</span></p>

				<p><span class="q">Q. Can I buy X set but without X character (or substituting X character)?</span><br />
				<span class="a">A. Unfortunately not. It would be much more expensive — for both of us. These magnets are effort-intensive to make, and I make them in batches and pre-package them as a cost-saving measure. Selling a partial set means the remaining character(s) cannot be sold at all, and running a custom batch to supplement the orphan (or sell to the buyer as requested) would cost more than the entire set would have cost. Nevertheless, this is my most common question, and as a result I'm now preferring to design smaller sets for characters in ambiguous groupings. <strong>EXCEPTION: If part of a set was damaged during production, the orphans may be available singly. Please see the <router-link :to="\{ path: '/order'}">Order</router-link> section to see what orphans are currently available.</strong></span></p>

				<p><span class="q">Q. Can I get X but without the head and body cut apart?</span><br />
				<span class="a">A. Yes! This counts as a custom print-on-demand order, and the procedure is available in the <router-link :to="\{ path: '/custom'}">Custom</router-link> section.</span></p>

				<p><span class="q">Q. Can you use the magnets on cars?</span><br />
				<span class="a">A. Technically yes, but I wouldn't recommend it. Depending on the car body's material, the magnets will likely not stick strongly enough to resist being brushed off on accident. There's also concern for weatherproofing — while most of the materials resist sun damage, grime, heat, cold, and even humidity fairly well, the paper itself does not. Even if the paper does not weaken or disintegrate in heavy rain, water seeped into the interior of the paper takes time to dry and will probably mildew if wetted several times.</span></p>

				<p><span class="q">Q. Why is shipping so expensive to my country?</span><br />
				<span class="a">A. On Etsy I’m required to use the parcel rate, which is unfortunately a great deal more expensive than the letter rate. When mailing international packages in person at the post office, it’s true that I <em>have</em> occasionally been granted use of the letter rate, but I have also on occasion been <em>denied</em> the letter rate, so I choose not to offer the letter rate at all, especially since anything more than a couple sets would have to be sent at the parcel rate anyway. There is also the enormous advantage of package tracking for parcels, which is important to protect both myself and the buyer.</span></p>

				<p><span class="q">Q. When will you be at X convention again?</span><br />
				<span class="a">A. I might not do conventions any more, unfortunately. They are a lot of work and I honestly don't make enough money to justify the effort. (My profit margin is almost nothing, and a booth can cost up to $350 — never mind general travel expenses.) As I live in Salt Lake City, Utah, I may continue to sell at conventions in northern Utah as I can until my supply runs out.</span></p>

				<p><span class="q">Q. Why aren't you making magnets anymore?</span><br />
				<span class="a">These magnets are a lot of work to make and my health can't keep up with their manufacture nor the exhausting convention circuit. And because they are fan art, I can't send them out to be made nor can I put them in stores. Doing Cosplay Scramble gave me confidence and motivated me to keep drawing, but I have found other things that do the same and so I will do those things instead.</span></p>

				<p><span class="q">Q. Scrambled eggs?</span class="q"><br />
				<span class="a">A. "Scramble" <em>is</em> in the name! <a href="https://www.flickr.com/photos/wackyland/8016622427/" target="_blank">The image is by "kyle tsui"</a> and is used under the Creative Commons 2.0 Attribution license.</span></p>
			</section>
		`
	}
);

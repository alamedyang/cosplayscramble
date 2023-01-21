"use strict";

const PagePlay = Vue.component(
	'page-play',
	{
		data: function () {
			return {
				boardHeight: 2500,
				boardWidth: 2500,
				magnets: [
					{
						id: Math.random(),
						x: 0,
						y: 0,
						offsetX: 0,
						offsetY: 0,
						color: '#000000',
						hover: false,
						click: false,
					},
					{
						id: Math.random(),
						x: 2500,
						y: 0,
						offsetX: 0,
						offsetY: 0,
						color: '#FF0000',
						hover: false,
						click: false,
					},
					{
						id: Math.random(),
						x: 0,
						y: 2500,
						offsetX: 0,
						offsetY: 0,
						color: '#00FF00',
						hover: false,
						click: false,
					},
					{
						id: Math.random(),
						x: 2500,
						y: 2500,
						offsetX: 0,
						offsetY: 0,
						color: '#0000FF',
						hover: false,
						click: false,
					},
				],
				mouse: {
					x: 0,
					y: 0,
				},
				mouseDowned: false,
			}
		},
		computed: {
			viewBox: function () {
				return [
					0,0,this.boardWidth,this.boardHeight
				].join(' ');
			},
			center: function () {
				return {
					x: this.boardWidth / 2,
					y: this.boardHeight / 2,
				};
			},
		},
		methods: {
			normalize: function (x, y) {
				return {
					x: (x / this.$el.clientWidth) * this.boardWidth,
					y: (y / this.$el.clientHeight) * this.boardHeight,
				};
			},
			mouseMove: function (svgMouseMoveEvent) {
				const normalizedCoords = this.normalize(
					svgMouseMoveEvent.offsetX,
					svgMouseMoveEvent.offsetY
				);
				this.mouse.x = normalizedCoords.x;
				this.mouse.y = normalizedCoords.y;
				const normalizedMovement = this.normalize(
					svgMouseMoveEvent.movementX,
					svgMouseMoveEvent.movementY
				);
				if (this.mouseDowned) {
					this.magnets.forEach(function (item) {
						if (item.click) {
							item.x += normalizedMovement.x;
							item.y += normalizedMovement.y;
						}
					})
				}
			},
			mouseDown: function () {
				this.mouseDowned = true;
			},
			mouseUp: function () {
				this.clickClear();
			},
			mouseLeave: function () {
				this.clickClear();
			},
			hoverMagnet: function (magnet, magnetMouseMoveEvent) {
				magnet.hover = true;
				// console.log('magnetMouseMoveEvent', magnetMouseMoveEvent)
				const coords = this.normalize(
					magnetMouseMoveEvent.offsetX,
					magnetMouseMoveEvent.offsetY
				);
				magnet.offsetX = coords.x;
				magnet.offsetY = coords.y;
				// this.magnets.sort(function (a, b) {
				// 	return a.hover ? 1 : b.hover ? -1 : 0;
				// });
			},
			clickClear: function () {
				this.magnets.forEach(function (item) {
					item.click = false;
					item.hover = false;
				})
				this.mouseDowned = false;
			},
		},
		template: /* html */`
<div class="page-play">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:viewBox="viewBox"
		@mousemove="mouseMove"
		@mousedown="mouseDown"
		@mouseup="mouseUp"
		@mouseleave.self="mouseLeave"
	>
		<mouse
			:value="mouse"
		></mouse>
		<magnet
			v-for="magnet in magnets"
			:key="magnet.id"
			:value="magnet"
			@hover="hoverMagnet(magnet, $event)"
			@unhover="magnet.hover = false"
			@click="magnet.click = true"
			@unclick="magnet.click = false"
		></magnet>
	</svg>
</div>
		`
	}
);


Vue.component(
	'magnet',
	{
		props: {
			value: {
				type: Object,
				required: true,
			},
		},
		template: /* svg */ `
<ellipse
	rx="250"
	ry="250"
	:cx="value.x"
	:cy="value.y"
	:fill="value.color"
	:opacity="value.hover ? 1 : 0.9"
	@mousemove="$emit('hover', $event)"
	@mouseout="$emit('unhover')"
	@mousedown="$emit('click', $event)"
	@mouseup="$emit('unclick')"
/>
`}
);

Vue.component(
	'mouse',
	{
		props: {
			value: {
				type: Object,
				required: true,
			},
		},
		computed: {
			transform: function () {
				return `translate(${this.value.x},${this.value.y})`;
			},
		},
		template: /* svg */ `
<g
	class="mouse"
	:transform="transform"
>
	<path
		stroke="#888"
		stroke-width="5"
		d="M -25,-25
		L 25,25
		Z
		M -25,25
		L 25,-25
		Z"
	/>
</g>
`}
);


<script>
	
	import { mapActions, mapGetters } from 'vuex'


	export default {

		data() {

			return {

				imagemPrincipal: [],

				thumbs: [],

				ordem: [0]

			}

		},

	  	computed: {
			...mapGetters(['getProduto'])
		},

		methods: {
				...mapActions(['aGetProduto']),

			addImagem() {
				this.aGetProduto()
				.then(() => {
					let imagens = this.getProduto.ProductImage;
					for (var i = 0; i < imagens.length; i++) {
						let imgP = imagens[i].http;
						this.imagemPrincipal.push(imgP);
					}

				})
			},

			addThumb() {
				this.aGetProduto()
				.then(() => {
					let imagens = this.getProduto.ProductImage;
					for (var i = 0; i < imagens.length; i++) {
						let thumb = imagens[i].thumbs[90];
						this.thumbs.push(thumb);
					}

				})

			},


		    setOrdem(img) {
		      let indice = this.thumbs.indexOf(img);
		      let indiceString = JSON.stringify(indice);
		      this.ordem.splice(0);
		      this.ordem.push(indiceString);
		    },


		    ativaClasse() {
		      let selector, elems, makeActive;
          	  selector = '.thumb li';
          	  elems = document.querySelectorAll(selector);
          	  makeActive = function ()  {
              		for (let i = 0; i < elems.length; i++) {
                  		elems[i].classList.remove('active');
              		}
              		this.classList.add('active');
              		 console.log(this.classList);
              		 console.log('e ai')
          		}
          		for (let i = 0; i < elems.length; i++) {
              		elems[i].addEventListener('mousedown', makeActive);
          		}
		    }


		},

		mounted() {
			this.addImagem()
			this.addThumb()
			this.ativaClasse()
		}

	}

</script>


<template>
	
	<div>
		<div class="content">

			<div class="center imagemGrade">
				<img :src="`${this.imagemPrincipal[this.ordem]}`">
			</div>


			<div class="box-thumb">
				<ul class="thumb">
					<li v-for="img in this.thumbs">
						<img :src="`${img.http}`" v-on:click="setOrdem(img)">
					</li>
				</ul>
			</div>

		</div>
	</div>


</template>

<style>



</style>
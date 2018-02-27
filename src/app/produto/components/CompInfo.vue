<script>
	
	import { mapActions, mapGetters } from 'vuex'


	export default {

		data() {

			return {

			    name: '',
			    id: '',
			    brand: '',
			    category_name: '',
			    model: '',
			    description_small: '',
			    price: '',
			    payment_option: '',
			    slug: ''

			}

		},

	  	computed: {
			...mapGetters(['getProduto'])
		},

		methods: {
				...mapActions(['aGetProduto']),
				infoProduto() {
					this.aGetProduto()
					.then(() => {
					const objProduto = this.getProduto;
					this.name = objProduto.name;
					this.id = objProduto.id;
					this.brand = objProduto.brand;
					this.category_name = objProduto.category_name;
					this.model = objProduto.model;
					this.description_small = objProduto.description_small;
					this.price = objProduto.price;
					this.payment_option = objProduto.payment_option;
					this.slug = objProduto.slug;
				})

				}
		},

		mounted() {

			this.infoProduto()
			
		}

	}


</script>



<template>
	
	<div class="content">
		<p class="slug">{{ this.slug }}</p>
		<h1 class="nome-produto">{{ this.name }}</h1>
		<p class="info-produto">
			Código: {{ this.id }}<br>
			Marca: {{ this.brand }}<br>
			Categoria: {{ this.category_name }}<br>
			Modelo: {{ this.model }}
		</p>
		<p class="descricao-produto">
			{{ this.description_small }}
		</p>
		<h1 class="preco-produto">R${{ this.price }}</h1>
		<p class="condicao-produto">
			{{ this.payment_option }}
		</p>

		<button class="btn-comprar">comprar</button>
		
	</div>

</template>


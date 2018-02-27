<script>

import CompGaleria from './CompGaleria.vue'
import CompInfo from './CompInfo.vue'

export default {

  name: 'CompMain',

  components: { CompGaleria, CompInfo }

}

</script>



<template>

	<div class="main">
		<div class="container-produto">
			<comp-galeria/>
			<comp-info/>
    
		</div>
	</div>
	
</template>
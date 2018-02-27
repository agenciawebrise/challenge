import { serviceGetProduto } from '../services'


export const aGetProduto = (context, data) => {
	return serviceGetProduto (data)
	.then(response => response.data)
	.then(data => {
		context.commit ('ALL_PRODUTO', data.Product)
	})
}



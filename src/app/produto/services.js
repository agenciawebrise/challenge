import http from '@/http'
import store from './vuex/state'

export const serviceGetProduto = () => {

	return http.get('http://agenciatray.commercesuite.com.br/web_api/products/8')

}
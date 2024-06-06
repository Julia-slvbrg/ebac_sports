import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'
import { useGetProductsQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading, error } = useGetProductsQuery()
  const favoritos = useSelector((state: RootReducer) => state.favorites.itens)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Não conseguimos carregar os podutos.</h2>
  }

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

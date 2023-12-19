import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface";
import { IProduto } from "@modules/catalogo/domain/produto/produto.types";
import { ProdutoMap } from "@modules/catalogo/infra/mappers/produto.map";
import { IUseCase } from "@shared/application/use-case-interface";

class RecuperarTodosProdutosUseCase implements IUseCase<void, Array<IProduto>>{
    static execute(arg0: string): any {
        throw new Error('Method not implemented.');
    }
    private _produtoRepositorio: IProdutoRepository<Produto>

    constructor(repositorio: IProdutoRepository<Produto>){
        this._produtoRepositorio = repositorio
    }


    async execute(): Promise<IProduto[]> {
       
        const todosProdutos: Array<Produto> = await this._produtoRepositorio.recuperarTodos()

        const todasProdutosDTO = todosProdutos.map(
        (produto) => ProdutoMap.toDTO(produto)
        )

        return todasProdutosDTO
    }
}

export {RecuperarTodosProdutosUseCase}
import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface";
import { ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { CategoriaMap } from "@modules/catalogo/infra/mappers/categoria.map";
import { IUseCase } from "@shared/application/use-case-interface";
import { CategoriaApplicationExceptions } from "../../exception/categoria.applicaation.exception";

class RecuperarCategoriaPorIdUseCase implements IUseCase<String, ICategoria> {
    private _categoriaRepositorio: ICategoriaRepository<Categoria>

    constructor(repositorio: ICategoriaRepository<Categoria>){
        this._categoriaRepositorio = repositorio
    }

    async execute(uuid: String): Promise<ICategoria> {

        const existeCategoria: boolean = await this._categoriaRepositorio.existe(uuid)

        if(!existeCategoria) {
            throw new CategoriaApplicationExceptions.CategoriaNaoEncontrada()
        }

        const categoria = await this._categoriaRepositorio.recuperarPorUuid(uuid)

        return CategoriaMap.toDTO(categoria as Categoria)

//Verifica se a pessoa que esta acessando tem permissao de ver a categoria

//Enviar um email

//Enviar uma notificação por SMS e Whatsapp

}
     
}

export {RecuperarCategoriaPorIdUseCase}
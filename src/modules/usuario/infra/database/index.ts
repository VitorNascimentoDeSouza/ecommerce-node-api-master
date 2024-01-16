import { IUsuarioRepository } from "@modules/usuario/domain/usuario.repository.interface";
import { UsuarioPrismaRepository } from "./usuario.prisma.repository";
import { Usuario } from "@modules/usuario/domain/usario.entity";

const usuarioRepositorio: IUsuarioRepository<Usuario> = new UsuarioPrismaRepository(prisma)

export {usuarioRepositorio}
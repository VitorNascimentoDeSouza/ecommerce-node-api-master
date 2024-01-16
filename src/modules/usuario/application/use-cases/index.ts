import { usuarioRepositorio } from "@modules/usuario/infra/database";
import { RegistrarUsuarioUseCase } from "./registrar-usuario/registrar-usuario.use-case";
import { AutenticarUsuarioUseCase } from "./autentificar-usuario/autentificar-usuario.use-case";

const registrarUsuarioUseCase = new RegistrarUsuarioUseCase(usuarioRepositorio);
const autenticarUsuarioUseCase = new AutenticarUsuarioUseCase(usuarioRepositorio);

export {
    registrarUsuarioUseCase,
    autenticarUsuarioUseCase
}
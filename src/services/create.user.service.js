import { UserRepository } from "../repositories/user.repository";

class CreateUserService {
  execute(data) {
    if (!!data.username) {
      throw new Error("Preencha o Username");
    }

    const userRepository = new UserRepository();
    const userExists = userRepository.findByUsername(data.username);

    if (userExists) {
      throw new Error("O usuário já existe no banco de dados");
    }

    return userRepository.save(data);
  }
}

export { CreateUserService };

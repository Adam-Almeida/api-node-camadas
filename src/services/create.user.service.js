import UserRepository from "../repositories/user.repository.js";

class CreateUserService {
  execute(data) {
    if (!data.username) {
      throw new Error("Preencha o Username");
    }
    const userExists = UserRepository.findByUsername(data.username);

    if (userExists) {
      throw new Error("O usuário já existe no banco de dados");
    }

    return UserRepository.save(data);
  }
}

export { CreateUserService };

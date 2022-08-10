import { CreateUserService } from "../services/create.user.service"


class UserController {
    handle(request, response) {
        const { body } = request
        const createUserService = new CreateUserService()
        const result = createUserService.execute(body)

        return response.json(result)
    }
}

export { UserController }
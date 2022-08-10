import { CreateUserService } from "../services/create.user.service.js"


class UserController {
    handle(request, response) {
        const { body } = request
        try{
        const createUserService = new CreateUserService()
        const result = createUserService.execute(body)

        return response.json(result)
        
        }catch(err) {
            return response.json({error: err.message})
        }
    }
}

export { UserController }
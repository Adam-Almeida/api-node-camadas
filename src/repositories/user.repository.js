import { v4 as uuid } from 'uuid'


class UserRepository {

    users = []

    findByUsername(username) {
        const userExists = this.users.find((user) => user.username === username)
        return userExists
    }

    save(user){
        const id = uuid()
        const userWithId = {...user, id }
        this.users.push(userWithId)

        return userWithId
    }
}

export default new UserRepository()
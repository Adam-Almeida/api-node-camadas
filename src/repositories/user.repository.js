import { v4 } from 'uuid'


class UserRepository {

    users = []

    findByUsername(username) {
        const userExists = this.users.find(user => user.username === username)
        return userExists
    }

    save(user){
        const id = new v4()
        const userWithId = {...user, id }
        this.users.push(userWithId)

        return user
    }
}

export { UserRepository }
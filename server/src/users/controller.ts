import User from './entity'
import { JsonController, Post, Get, Body, NotFoundError, Param } from 'routing-controllers';


@JsonController()
export default class UserController {

    @Post('/users')
    async createUser(
        @Body() user: User
    ) {
        const {password, ...rest} = user
        const userEntity = User.create(rest)
        await userEntity.hashPassword(password)
        return userEntity.save()
        }

    @Get('/users')
    async getAllUser()
    {
        const allUser = await User.find()
        if (!allUser) throw new NotFoundError('Cannot find users')
        return { allUser }
    }

    @Get('/users/:id')
    async getOneUser(
        @Param('id') id: number
    ){
        return User.findOne(id)
    }
}
import { JsonController, Post, Body, BadRequestError, NotFoundError } from 'routing-controllers'
import { sign } from '../jwt'
import User from '../users/entity'

type ValidateLoginData = {
  email: string
  password: string
}

@JsonController()
export default class LoginController {
  @Post('/logins')
  async login(@Body() data: ValidateLoginData) {
    const { email, password } = data

    const user = await User.findOne({ where: { email } })

    if (!user) throw new NotFoundError('User does not exist.')

    const { id } = user

    if (!id) throw new NotFoundError('ID does not exist.')

    if (!(await user.checkPassword(password)))
      throw new BadRequestError('Incorrect password.')

    const jwt = sign({ id })

    return { jwt, id: user.id, name: user.firstName }
  }
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Exclude } from 'class-transformer'
import { IsString, IsEmail, MinLength } from 'class-validator'
import * as bcrypt from 'bcrypt'

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text')
    firstName: string
    
    @IsString()
    @Column('text')
    lastName: string

    @IsEmail()
    @Column('text', {nullable: false})
    email: string

    @IsString()
    @MinLength(8)
    @Column('text', {nullable: false})
    @Exclude({toPlainOnly:true})
    password: string

    // if you are using bcrypt on a server, the async mode 
    // is recommended. This is because the hashing done by
    // bcrypt is CPU intensive, so the sync version will 
    // block the event loop and prevent your application 
    // from servicing any other inbound requests or events.

    async hashPassword(rawPassword: string) {
        const hash = await bcrypt.hash(rawPassword, 10)
        this.password = hash
      }
    
      checkPassword(rawPassword: string): Promise<boolean> {
        return bcrypt.compare(rawPassword, this.password)
      }
    }
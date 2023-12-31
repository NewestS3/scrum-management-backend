import { Body, Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/userregister.dto";

@Controller('/user')
export class UserController{

    constructor(
        private readonly userservice:UserService
    ){}

    @Get('/register')
    async registeruser(@Body() createuserdto: CreateUserDto)
    {
        try{
            return this.userservice.insertuser(createuserdto);
        }catch(err){
            throw err;
        }
    }


}
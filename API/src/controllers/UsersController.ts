import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

import jwt from "jsonwebtoken";

import * as yup  from "yup";

 
class UsersController {
  async auth(request: Request, response: Response) {
    const { 
      user_name,     
      password 
    } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const userAlreadyExists = await usersRepository.findOne({
      user_name,
      password
    });

    if(!userAlreadyExists) {
      return response.status(401).json({ message: "user does not exists" })
    }
    return response.json({      
      token: jwt.sign(user_name, 'secret'),
      name: userAlreadyExists.first_name        
    });
  }

  async create(request: Request, response: Response) {
    const { 
      user_name, 
      first_name, 
      last_name,
      password } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const userAlreadyExists = await usersRepository.findOne({
      user_name
    });

    const schema = yup.object().shape({
      user_name: yup.string().required("user name is a required camp"),
      first_name: yup.string().required("first name is a required camp"),
      last_name: yup.string().required("last name is a required camp"),
      password: yup.string().required("password is a required camp")
    });

    try {
      await schema.validate(request.body, { abortEarly: false })
    } catch(err) {
      return response.json(err);
    }

    if(userAlreadyExists) {
      return response.status(400).json({ message: "user name already exists" });
    }

    const user = usersRepository.create({
      user_name,
      first_name,
      last_name,
      password
    });
    
    await usersRepository.save(user);

    return response.status(201).json(user);
  }

}

export { UsersController };

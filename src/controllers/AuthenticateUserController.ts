import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    
    const { code } = request.body;

    const service = new AuthenticateUserService();
    const result = await service.execute(code);

    return response.json(result);
  }
}

export { AuthenticateUserController }


// https://nextlevelweek.com/episodios/impulse/aula-1/edicao/7

// 53 min
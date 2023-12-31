// Métodos dentro de um controller: index, show, update, store e destroy
/*
   index: listagem de sessões
   show: listar uma única sessão
   store: criar uma nova sessão
   update: atualizar alguma sessão
   destroy: deletar uma sessão
*/

import User from "../models/User";
import * as Yup from 'yup';

class SessionController {
   async store(req, res) {
      // Válidanções de schema
      const schema = Yup.object().shape({
         email: Yup.string().email().required(),
      });

      const { email } = req.body;

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'E-mail inválido!' })
      }

      let user = await User.findOne({ email });
      // verificando se um usuário já existe, se não exister vai criar um novo usuário 
      if (!user) {
         user = await User.create({ email });
      }

      // se existir ele vai apenas retornar, simbolizando como logado
      return res.json(user)
   }
}

export default new SessionController();
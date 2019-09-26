import emailService from '../services/mail.service';
const send = (request: any, response: any) => {
  emailService(request, response, request.body).catch((error)=>response.send(error));
};

export default { send };

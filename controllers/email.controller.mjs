import emailService from '../services/mail.service.mjs';
const send = (request, response) => {
  emailService(request, response, request.body);
};

export default { send };

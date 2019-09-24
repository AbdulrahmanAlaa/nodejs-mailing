const send = (request, response, next) => {
  response.send('success');
  console.log(request.body);

};

export default { send };
  
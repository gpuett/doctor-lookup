import $ from 'jquery';

class API {
  call(doctor, symptom) {
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&query=${symptom}&location=or-portland&user_location=45.5231%2C%20122.6765&skip=0&limit=10&user_key=${process.env.exports.apiKey}`);
  }
}

export { API };

class API {
  call(doctor, symptom) {
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&query=${symptom}&location=or-portland&user_location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`)
  }
}

export { API };

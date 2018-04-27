import { API } from './api-call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#query').submit(function(event) {
    event.preventDefault();
    let doctor = $('#doctor').val();
    $('#doctor').val("");
    let symptom = $('#symptom').val();
    $('#symptom').val("");
    let api = new API();
    let list = api.call(doctor, symptom);
    list.then(function(response) {
      // for (let i=0; i<response.length; i++) {
      $('.results').append(`<li>${response.data[0].profile.first_name} ${response.data[0].profile.last_name}</li>`);
      // }

    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});

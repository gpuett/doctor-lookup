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
      console.log(response.data);
      for (let i=0; i<response.data.length; i++) {
      $('.results').append(`<li><strong>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</strong> <br> Address: ${response.data[i].practices[0].visit_address.street} <br> Phone: ${response.data[i].practices[0].phones[0].number} </li>`);
      }

    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});

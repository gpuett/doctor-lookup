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
      if (response.data.length === 0) {
        $('.results').text(`Your query found no results.`)
      } else {
        for (let i=0; i<response.data.length; i++) {
        $('.results').append(`<li><strong>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</strong> <br> <strong>Address:</strong><br> ${response.data[i].practices[0].visit_address.street} <br> ${response.data[i].practices[0].visit_address.city} ${response.data[i].practices[0].visit_address.state} ${response.data[i].practices[0].visit_address.zip} <br> <strong> Phone:</strong><br> ${response.data[i].practices[0].phones[0].number} <br> <strong>Accepting New Patients:</strong> ${response.data[i].practices[0].accepts_new_patients} </li><br>`);
        }
      }
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});

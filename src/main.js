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
      if (response.data.length === 0) {
        $('.results').text(`There were no results matching your search query.`)
      } else {
        for (let i=0; i<response.data.length; i++) {
        let first = response.data[i].profile.first_name;
        let last = response.data[i].profile.last_name;
        let website;
        if (response.data[i].practices[0].website !== undefined) {
          website = response.data[i].practices[0].website;
        } else {
          website = "None";
        }
        let patients;
        if (response.data[i].practices[0].accepts_new_patients === true) {
          patients = "Yes";
        } else {
          patients = "No";
        }
        $('.results').append(`<li><strong>
          ${first}
          ${last}</strong><br>
          <strong>Address:</strong><br>
          ${response.data[i].practices[0].visit_address.street}<br>
          ${response.data[i].practices[0].visit_address.city}
          ${response.data[i].practices[0].visit_address.state}
          ${response.data[i].practices[0].visit_address.zip}<br>
          <strong>Phone:</strong><br>
          ${response.data[i].practices[0].phones[0].number}<br>
          <strong>Website:</strong><br>
          ${website}<br>
          <strong>Accepting New Patients?:</strong>
          ${patients} </li><br>`);
        }
      }
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});

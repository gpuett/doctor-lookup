import { API } from './api-call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#query').submit(function(event) {
    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");
    let doctor = $('#doctor').val();
    $('#doctor').val("");
    let api = new API();
    
  });
});

const home = document.querySelector('#home-tag');
const resume = document.querySelector('#resume-tag');
const work = document.querySelector('#work-tag');
const contact = document.querySelector('#contact-tag');
const home_div = document.querySelector('.home-div');
const resume_div = document.querySelector('.resume-div');
const work_div = document.querySelector('.work-div');
const contact_div = document.querySelector('.contact-div');

$(home).click(() => {
  $(home_div).collapse('toggle');
  $(resume_div).collapse('hide');
  $(work_div).collapse('hide');
  $(contact_div).collapse('hide');
});

$(resume).click(() => {
  $(resume_div).collapse('toggle');
  $(home_div).collapse('hide');
  $(work_div).collapse('hide');
  $(contact_div).collapse('hide');
});

$(work).click(() => {
  $(work_div).collapse('toggle');
  $(home_div).collapse('hide');
  $(resume_div).collapse('hide');
  $(contact_div).collapse('hide');
});

$(contact).click(() => {
  $(contact_div).collapse('toggle');
  $(resume_div).collapse('hide');
  $(home_div).collapse('hide');
  $(work_div).collapse('hide');
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

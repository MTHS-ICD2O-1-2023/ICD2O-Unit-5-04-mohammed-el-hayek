// Copyright (c) 2024 Mohammed rights reserved
//
// Created by: Mohammed
// Created on: May 2024
// This file contains the JS functions for index.html

'use strict'

function myButtonClicked() {
  // This function tells he user if they get free admission
  // input
  const userAge = parseInt(document.getElementById("user-age").value)
  const dayOfTheWeek = document.getElementById("day-of-the-week").value

  // process
  if ((dayOfTheWeek == "Monday" || dayOfTheWeek == "Thursday") || (userAge > 12 && userAge < 21)) {
    // output
    document.getElementById("answer").innerHTML = "You get free admission!"
  } else {
    // output
    document.getElementById("answer").innerHTML = "You have to pay admission."
  }
}
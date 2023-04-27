// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Mar 2023
// This file contains the JS functions for index.html

/**
 * This function calculates area and perimeter of rectangle.
 */

"use strict"

/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

function myButtonClicked() {
  // input
  const numberGuessed = parseInt(
    document.getElementById("guessed-number").value
  )

  // process
  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML
    "The answer was, " + randomNumber + "!" + "you go it! Good job."
  }

  //block of code to be execued if condition is true
  if (valueFromSlider !== randomNumber) {
    document.getElementById("answer").innerHTML
    "The answer was, " + randomNumber + "!" + " Nice guess, but try again"
  }

  // output
  document.getElementById("answer").innerHTML = numberGuessed
}

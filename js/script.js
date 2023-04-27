// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Mar 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

function myButtonClicked() {
  // input
  const numberGuessed = parseInt(
    document.getElementById("guessed-number").value
  )
  const randomNumber = Math.floor(Math.random() * 6) + 1

  /**
   * this function update the slider value
   */
  function undateSliderValue(valueFromSlider) {
    document.getElementById("slider-value").innerHTML = valueFromSlider

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
  }

    // output
    document.getElementById("answer").innerHTML = numberGuessed
  }

// --- Day 1: Chronal Calibration ---
// "We've detected some temporal anomalies," one of Santa's Elves at the Temporal Anomaly Research and Detection Instrument Station tells you. She sounded pretty worried when she called you down here. "At 500-year intervals into the past, someone has been changing Santa's history!"
//
// "The good news is that the changes won't propagate to our time stream for another 25 days, and we have a device" - she attaches something to your wrist - "that will let you fix the changes with no such propagation delay. It's configured to send you 500 years further into the past every few days; that was the best we could do on such short notice."
//
// "The bad news is that we are detecting roughly fifty anomalies throughout time; the device will indicate fixed anomalies with stars. The other bad news is that we only have one device and you're the best person for the job! Good lu--" She taps a button on the device and you suddenly feel like you're falling. To save Christmas, you need to get all fifty stars by December 25th.
//
// Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
//
// After feeling like you've been falling for a few minutes, you look at the device's tiny screen. "Error: Device must be calibrated before first use. Frequency drift detected. Cannot maintain destination lock." Below the message, the device shows a sequence of changes in frequency (your puzzle input). A value like +6 means the current frequency increases by 6; a value like -3 means the current frequency decreases by 3.
//
// For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:
//
// Current frequency  0, change of +1; resulting frequency  1.
// Current frequency  1, change of -2; resulting frequency -1.
// Current frequency -1, change of +3; resulting frequency  2.
// Current frequency  2, change of +1; resulting frequency  3.
// In this example, the resulting frequency is 3.
//
// Here are other example situations:
//
// +1, +1, +1 results in  3
// +1, +1, -2 results in  0
// -1, -2, -3 results in -6
// Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?

const inputString = "+4 +3 -15 -8 +15 -17 -16 +15 -10 +1 +17 +19 -10 +17 +11 +3 -13 -13 -20 +10 -7 +2 -12 +2 +2 +7 +7 +19 -18 -10 +16 +18 -9 +15 -16 +15 +15 +14 +13 +15 +2 +6 +10 +12 +13 +8 +3 -19 -12 +19 +13 +4 +16 +16 -10 +15 -16 +17 +16 +5 +1 +17 +15 -16 +3 +17 -9 -4 -11 +2 +19 -12 +9 +8 +8 -7 +17 -15 -17 +18 +9 -11 +10 +5 -18 +15 +12 -3 -2 +18 -1 +5 +12 +3 -7 +16 +3 +4 +17 -13 +7 -13 +3 +7 +13 +4 -10 -13 +4 +13 +15 +14 -13 +10 -9 -16 +4 +18 -13 -11 +13 +8 -11 +18 +19 -16 -6 -5 +16 -10 -14 +7 +10 +10 -16 -19 +10 -5 +13 +24 -1 +9 +2 +12 +11 -4 -17 +2 -17 +8 +18 -10 +2 -6 -2 -12 +21 +16 -21 -7 -6 -7 -3 +14 +16 +3 +10 -14 +2 +15 +9 +13 +4 +2 -9 -9 +4 -2 -11 -9 +16 +9 -6 -17 +22 +8 +16 +5 +9 +18 -5 -1 +13 -8 -11 +10 +6 +9 -1 +13 +11 -3 -12 +17 -19 -11 +10 +17 +15 +9 +9 +4 -3 +9 -4 +8 -7 +12 +5 -2 -6 -17 +12 +18 +14 -1 +15 +12 -19 -16 -4 -4 +1 -9 +5 -6 +4 +16 -1 +18 +5 +17 -1 +5 +15 +4 +3 -11 +5 +18 -3 +2 +7 -13 +10 +21 -7 +6 -2 -20 -11 -12 -18 -7 -15 +9 -1 +18 -10 -5 -15 +3 -20 +22 -18 +11 -6 +15 -16 +17 +6 +20 +19 -8 -21 -8 +9 +21 -15 +10 +17 +16 -22 +5 +5 -20 +7 +22 -1 +11 -17 -14 -15 +2 -8 +11 -4 -37 -9 -10 +30 +8 +50 +28 -10 +6 +16 +2 +11 +8 +14 -17 -11 +18 +1 +1 -3 +17 +15 -1 +13 +9 -20 -7 +20 +18 -16 -12 +19 +2 +10 -13 -4 -12 +2 -11 -15 -1 +22 -12 -4 +1 -12 -9 -1 +17 +15 -6 -12 -16 -5 +16 +20 -18 -5 -17 -1 -12 +21 -13 -5 +15 +36 -12 +5 +30 +48 -7 +2 +7 +10 -14 +11 -17 +34 +20 +17 -16 -4 -7 -6 +1 +11 +11 +5 -14 +35 +16 +6 +28 -3 +18 -4 -6 -12 -13 +30 +12 +16 -14 -15 +14 -6 +17 +2 +10 -15 -19 -20 +22 -20 +12 -8 +9 -19 +40 +17 -1 +3 +7 +12 -26 -3 -5 -5 +12 +24 -10 +3 -27 +6 +13 -23 +5 -27 -41 -5 -41 +144 -40 +155 +29 -26 +16 +9 -229 -70 +401 +64265 -10 +19 -3 -14 +10 +2 +13 +13 -19 -18 -11 +16 -19 +10 -2 -7 -12 -13 -16 +19 -12 +14 +2 +15 +17 +14 +19 +8 +14 -7 -16 +11 +15 +9 +11 +5 -8 +16 -11 -16 -14 +10 -13 -13 +8 -3 -23 -19 -18 -3 -7 +18 +5 -2 +13 +10 -8 -16 +22 -9 +18 +7 +22 -3 -17 +11 +11 +12 +11 +7 +16 +12 +2 -16 -8 +15 +8 -4 +2 -4 +12 -18 +15 -17 -20 +18 -1 +6 -22 +23 +19 +3 +15 -17 -2 +7 +1 -12 -7 -15 -4 +15 -13 +11 +14 +16 +19 +7 -3 -10 +12 -22 +6 -2 -14 +18 -1 +27 +13 +15 +10 +18 +10 +11 -13 +11 -1 +7 +3 -2 +14 -8 -2 +9 -16 +13 +7 +19 -15 +3 +9 +14 -8 +13 +19 -10 -6 -4 +7 +6 -1 -6 -4 -16 +1 +18 +17 +1 +16 +17 -19 +12 +21 +10 +7 +3 -9 -9 +11 +17 +5 +13 +2 +15 -6 -18 +14 +17 -2 -12 -14 +1 -18 -1 -12 -13 +7 +14 +14 -18 +1 +19 -9 -17 -15 -14 -12 -20 +12 -8 +1 +8 +11 +6 +8 +10 -9 -6 +20 +5 +14 -17 -13 +22 +13 +3 +11 +19 -1 -9 -5 -22 +19 +20 -16 +6 +15 -2 +31 +12 +3 +4 +24 +16 -6 +11 -20 +18 +8 -9 -9 +28 -4 -3 -17 -9 -11 -1 +15 +13 +12 -30 -16 +19 -22 +2 -18 +7 -8 -24 +31 +5 +36 +3 +48 +10 +19 -7 -11 +5 +3 +7 +4 -15 +13 +10 -7 +14 +9 +7 +11 +12 -3 +6 -17 +7 -15 -10 +17 -4 -17 -13 +18 -3 -9 +5 +10 -12 -1 +15 +20 -3 -1 -1 -6 +15 -2 +13 +19 -1 +8 +17 +4 +1 +18 +1 +4 +12 +3 -5 -21 -15 -14 +20 +5 +18 -6 -5 -5 +4 -10 +18 -5 +23 +22 +13 -5 +15 +15 -14 -15 +7 -11 -8 -2 -6 -9 -15 -3 +12 +25 -9 -15 -16 +20 +13 +25 -6 +10 +7 +15 -16 +15 -9 -21 +13 +14 +6 -16 +17 -27 -21 +12 +26 +13 +5 -23 +16 +9 +20 +14 -32 +27 -2 -16 +21 -92 -12 -14 -25 +4 -21 -9 -14 -14 -6 +8 +5 +2 -1 -3 +15 +13 +2 -19 -15 +11 +14 -4 -18 +23 -24 -14 +17 -10 +1 +14 -19 -18 -11 -10 -13 +8 +21 -4 -4 +11 -17 -13 -23 -9 +14 +14 -20 -17 +11 -18 -19 -64 +9 -24 -16 -10 +196 +16 -5 +21 -7 +28 +5 +5 -19 +38 -33 +25 +209 +391 -559 +64522 -2 -19 +7 +17 +5 -6 +18 -2 +5 +4 -11 -17 +14 +12 -19 -9 +14 +20 -16 -6 +12 +15 +11 +15 +24 -37 +12 -15 -4 +3 -21 -17 -19 -16 +21 +12 +9 -13 -20 -30 -7 +10 +14 -3 +20 +11 -1 +9 -22 -19 -3 -8 +3 -18 +8 +3 -7 -2 -7 +6 +15 -19 +13 -26 +7 -18 -13 +21 -9 +10 -130255";

const inputArrayWithOp = inputString.split(" ");

const resultingFrequency = arr => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let change = arr[i];
    let currentOp = change.substring(0,1);
    let currentNum = parseInt(change.substring(1));
    if (currentOp === "+") {
      result += currentNum;
    } else {
      result -= currentNum;
    }
  }
  return result;
}

resultingFrequency(inputArrayWithOp); //returns 459

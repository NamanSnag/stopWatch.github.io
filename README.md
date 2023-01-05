
# Stopwatch ⏱️

> A Stopwatch web-app built with only vanilla JavaScript and the Bootstrap CSS framework.


## Author

[@Naman Suresh Nag](https://github.com/NamanSnag/MovieSearch-App/tree/master)



### Details :

- A stopwatch that starts when the "start" button is clicked, stops when the "stop" button is clicked, and resets when the "reset" button is clicked. The stopwatch displays the elapsed time in hours, minutes, and seconds.
- The code first fetches elements with the specified IDs from the DOM and stores them in variables. It then defines variables to store the elapsed hours, minutes, and seconds and a boolean flag to track whether the stopwatch is running.
- The code sets up event listeners for each of the buttons, which execute specific functions when the buttons are clicked. When the "start" button is clicked, the code sets the timer flag to true and calls the stopWatch function. When the "stop" button is clicked, the code sets the timer flag to false. When the "reset" button is clicked, the code sets the timer flag to false, resets the elapsed time variables to 0, and updates the displayed time to 00:00:00.
- The stopWatch function increments the elapsed seconds, and if the elapsed seconds reach 60, it increments the elapsed minutes and resets the elapsed seconds to 0. If the elapsed minutes reach 60, it increments the elapsed hours and resets the elapsed minutes and seconds to 0. It then formats the elapsed time with leading zeros, if necessary, and updates the displayed time. Finally, it calls itself after a 1-second delay using setTimeout. If the timer flag is false, the function does nothing and exits.

## -> GitHub hosted Link :

```https
https://namansnag.github.io/stopWatch.github.io/
```
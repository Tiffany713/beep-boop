# Beep Boop
#### 01.24.2020
#### By Tiffany Nguyen
## Description
This web application allows user to input a number that will spit out a list of number in which "1", "2", and "3" are replaced by a string of text.

## Link
https://tiffany713.github.io/beep-boop/

## Setup/Installation Requirements
* Click the green button labeld "Clone or download" located in the "Clone with HTTPs" section.
* Copy the URL of the repository
* Open your Terminal on your local device
* Change your current working directory to the location you would like to clone the repository
* Once you have navigated to your desired directory, type down "git clone" and paste the URL right after
* To verify that the repo exists on your local device, type "ls" in your Terminal. You should see a directory with the same name as the repo.

## Specs
* Spec: The program returns a range of numbers from 0 to the users inputted number
    * Input: "5"
    * Output: "0,1,2,3,4,5"
* Spec: An exception to that is, if the list of numbers contain a 1, then all digits are replaced with "Beep!"
    * Input: "4"
    * Output: "0, Beep!, 2, 3, 4"
* Spec: Another exception is, if the list of numbers contain a 2, then all digits are replaced with "Boop!"
    * Input: "4"
    * Output: "0, 1, Boop!, 3, 4"
* Spec: The third exception is, if the list of numbers contain a 3, then all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
    * Input: "4"
    * Output: "0, 1, 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4"
* Spec: If the number includes a combonation of 1,2, or 3, then the condition for 3 will take precedence over the condition 1 and 2. If the number contains both 1 and 2, then the condition for 2 will take precedence over 1.
    * Input: "14"
    * Output: 0,Beep!,Boop!,I'm sorry, Dave. I'm afraid I can't do that.,4,5,6,7,8,9,Beep!,Beep!,Boop!,I'm sorry, Dave. I'm afraid I can't do that.,Beep!

## Support and contact details
If you have any questions or concerns, contact me at *****@gmail.com. If you know how to fix the known bug, please go ahead and make a contribution to the code.

## Technology Used
HTML CSS JavaScript JQuery

## License
Copyright (c)2020 Tiffany Nguyen
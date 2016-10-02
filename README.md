# ProgrammingLanguageDetector

Team
•	Size :  2
•	Members: [‘Gyan Mishra’, ’ Rohit Kumar’]

Approach
•	Since Every Language have it’s own keywords(Some of them have common keyword name).
•	So we decided to filter the Language based on keywords for the first stage and done the same.
•	Since this may return the multiple languages based on common keywords. So we will try to filter the language further based on other pattern like checking the header, comment style, indentation, checking some special character etc. These all are our future enhancements.

Algo
•	Consider the entire code snippet as String.
•	Removed the content inside quotes.
•	Replaced the special chars with space.
•	Replaced the multiple spaces by single space.
•	Splited the String through the space.
•	 So at this time we have list of keywords in given code. So started a loop upto length of keywordList and start checking the presence of key word in allKeyWordList of different languages. And Stored the count of matched keywords to respective language.
•	In case if any keyword matches in only one language allKeyWordList then we decide the given language is detected language and break the loop there itself.
•	But if the above case not happened then we check the count of matched keyword in each language. And the language having more number will be the detected language.
•	In case if score matches then o/p will be all the language having the highest same score.

Implementation
•	UI is created using HTML5 and Bootstrap2.3.2
•	AngularJs is used to implement the detection logic.
•	Input is taken through TextArea. And on Button click detection logic will start using the given snippet  and give the o/p back to UI.

Run Instruction
•	Import the code in eclipse
•	Add a server. ( In my case I used Apache Tomcat 8.0 as a server)
•	Right click on project-->Run As-->Run on Server

Reources
•	index.html
•	key-words.properties (allKeyWordList for all language)
•	programming-lang-detector.js

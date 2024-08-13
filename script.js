document.querySelector("#kcss_link").href = "https://alinlab.kaist.ac.kr/KCSS";

var introduction = document.getElementById("intro-container");
var paragraph = document.createElement("p");
paragraph.textContent = "Welcome to CS Fields Rankings, 2024 edition. This is a ranking of Computer Science fields based on the number and influence of Korean computer scientists in the field, using the Korean Computer Scientist Search (KCSS) website. The website splits numerous Computer Science conferences by fields, then the scientists for each conference are sorted by the number of papers they’ve written or collaborated on (from scientists with the most papers to scientists with the least papers). It also displays a number probability that the scientist has a Korean name, making it easy to distinguish between Korean and non-Korean scientists. In this analysis, we’ll cover the detailed methodology, CS fields rankings for 2024, changes over the years in rankings, our conclusion and findings, and the takeaways.";
paragraph.classList.add("paragraph");
introduction.appendChild(paragraph);

var methology = document.getElementById("methology-container");
var paragraph = document.createElement("p");
paragraph.textContent = "We used data from the Korean Computer Scientist Search (KCSS) to determine the number of Korean scientists in each Computer Science field. To determine which field had the most Korean researchers in the past 10 years, we changed the “from” and “to” filters to 2014 and 2024. For the past 5 years, we changed the “from” and “to” filters to 2019 and 2024. For the past year, we changed the “from” and “to” filters to 2023 and 2024. The other filters were set to “Sorted by: # papers” (meaning that the scientists were arranged in the order of the number of papers they wrote or collaborated on, from highest to lowest), “Top 100 authors” (although it could return more due to including ties), and the default value of “>=5 pages”. To determine the CS Fields with the Most Korean Researchers, we filtered by only Korean researchers. To get the percentage of Korean scientists in each CS field, we took the number of Korean scientists in each field and divided it by the total number of scientists in the field, then multiplied by 100% (for this, we did not use the “only Korean” filter).";
paragraph.classList.add("paragraph");
methology.appendChild(paragraph);

var r1 = document.getElementById("r1-container");
var ranking = document.createElement("p");
ranking.textContent = "1. Mobile Computing\n2. Software Engineering\n3. Security & Cryptography\n4. Artificial Intelligence\n5. Visualization\n6. Computational Biology\n7. Networks\n8. Computer Architecture\n9. Operating Systems\n10. Human-Computer Interaction\n11. High-Performance Computing\n12. Linguistics & Speech\n13. Design Automation\n14. Embedded & Real-Time Systems\n15. Machine Learning\n16. Computer Vision & Graphics\n17. Databases\n18. Robotics\n19. Data Mining & Information Retrieval\n20. Programming Languages\n21. Theory\n22. Computational Economics";
ranking.classList.add("ranking");
r1.appendChild(ranking);

var r2 = document.getElementById("r2-container");
var ranking = document.createElement("p");
ranking.textContent = "1. Operating Systems\n2. Design Automation\n3. Databases\n4. Networks\n5. Mobile Computing\n6. Software Engineering\n7. Human-Computer Interaction\n8. Computer Architecture\n9. Robotics\n10. Artificial Intelligence\n11. Machine Learning\n12. Security & Cryptography\n13. Linguistics & Speech\n14. Computational Biology\n15. Computer Vision & Graphics\n16. Data Mining & Information Retrieval\n17. Visualization\n18. Embedded & Real-Time Systems\n19. High-Performance Computing\n20. Programming Languages\n21. Theory\n22. Computational Economics";
ranking.classList.add("ranking");
r2.appendChild(ranking);

var r3 = document.getElementById("r3-container");
var ranking = document.createElement("p");
ranking.textContent = "1. Robotics\n2. Computer Vision & Graphics\n3. Machine Learning\n4. Linguistics & Speech\n5. Computer Architecture\n6. Operating Systems\n7. Security & Cryptography\n8. Human-Computer Interaction\n9. Design Automation\n10. Artificial Intelligence\n11. Data Mining & Information Retrieval\n12. Mobile Computing\n13. Networks\n14. Software Engineering\n15. Databases\n16. Visualization\n17. High-Performance Computing\n18. Embedded & Real-Time Systems\n19. Theory\n20. Computational Biology\n21. Programming Languages\n22. Computational Economics";
ranking.classList.add("ranking");
r3.appendChild(ranking);

var r4 = document.getElementById("r4-container");
var ranking = document.createElement("p");
ranking.textContent = "1. Embedded & Real-Time Systems\n2. Computer Architecture\n3. Operating Systems\n4. Human-Computer Interaction\n5. Machine Learning\n6. Mobile Computing\n7. Programming Languages\n8. Design Automation\n9. Data Mining & Information Retrieval\n10. Security & Cryptography\n11. Visualization\n12. Theory\n13. Linguistics & Speech\n14. Robotics\n15. Computer Vision & Graphics\n16. Databases\n17. Software Engineering\n18. Computational Biology\n19. Networks\n20. High-Performance Computing\n21. Artificial Intelligence\n22. Computational Economics";
ranking.classList.add("ranking");
r4.appendChild(ranking);

var r5 = document.getElementById("r5-container");
var ranking = document.createElement("p");
ranking.textContent = "Past 10 Years:\n \n1. Mobile Computing - 193\n2. Software Engineering - 191\n3. Security & Cryptography- 160\n4. Artificial Intelligence- 144\n5. Visualization- 131\n6. Computational Biology- 123\n7. Networks- 120\n8. Computer Architecture- 118\n9. Operating Systems- 115\n10. Human-Computer Interaction- 114";
ranking.classList.add("ranking");
r5.appendChild(ranking);

var r6 = document.getElementById("r6-container");
var ranking = document.createElement("p");
ranking.textContent = "Past 5 years:\n \n1. Operating Systems- 320 (+178% vs Past 10 Years)\n2. Design Automation- 289 (+173%)\n3. Databases- 226 (+124%)\n4. Networks- 195 (+63%)\n5. Mobile Computing- 143 (-26%)\n6. Software Engineering- 135 (-29%)\n7. Human-Computer Interaction- 126 (+11%)\n8. Computer Architecture- 124 (+5%)\n9. Robotics- 123 (+27%)\n10. Artificial Intelligence- 110 (-24%)";
ranking.classList.add("ranking");
r6.appendChild(ranking);

var r7 = document.getElementById("r7-container");
var ranking = document.createElement("p");
ranking.textContent = "Past year:\n \n1. Robotics- 378 (+207% vs Past 5 Years)\n2. Computer Vision & Graphics- 211 (+115%)\n3. Machine Learning- 209 (+90%)\n4. Linguistics & Speech- 200 (+92%)\n5. Computer Architecture- 166 (+34%)\n6. Operating Systems- 151 (-53%)\n7. Security & Cryptography- 149 (+41%)\n8. Human-Computer Interaction- 129 (+2%)\n9. Design Automation- 118 (-59%)\n10. Artificial Intelligence- 85 (-23%) ";
ranking.classList.add("ranking");
r7.appendChild(ranking);

var r8 = document.getElementById("r8-container");
var ranking = document.createElement("p");
ranking.textContent = "In conclusion, Korean researchers seem to have a reasonable extent of influence on most Computer Science fields. In some fields like Robotics and Machine Learning, the influence of Korean scientists are on the rise, whereas in other fields like Artificial Intelligence and Software Engineering, the numbers of Korean researchers in the top 100 are declining, which may have resulted from the rising numbers of non-Korean scientists in these fields. However, it is important to take note that the data may not be perfectly accurate due to possible errors in distinguishing between Korean and non-Korean scientists and errors resulting from the “Top 100 authors” filter returning more than 100 authors in the case of ties.";
ranking.classList.add("ranking");
r8.appendChild(ranking);

var r9 = document.getElementById("r9-container");
var ranking = document.createElement("p");
ranking.textContent = "As the Computer Science field continues to progress, there is a growing need for greater diversity and representation. In CS fields like Artificial Intelligence and Computational Economics where there are no Korean researchers in the top 100, we hope in the future, these numbers will rise with more opportunities available for Korean researchers to gain influence in these fields. Greater diversity and representation in innovative fields like Computer Science is important because it prevents algorithmic bias we see in, for instance, facial recognition models and computer-aided diagnosis (CAD) systems today.\n \n \n ";
ranking.classList.add("ranking");
r9.appendChild(ranking);

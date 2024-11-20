document.querySelector("#kcss_link").href = "https://alinlab.kaist.ac.kr/KCSS";

var introduction = document.getElementById("intro-container");
var paragraph = document.createElement("p");
paragraph.textContent = "Welcome to CS Fields Rankings, 2024 edition. This is a ranking of Computer Science fields based on the number and influence of Korean computer scientists in the field, using the Korean Computer Scientist Search (KCSS) website. The website splits numerous Computer Science conferences by fields, then the scientists for each conference are sorted by the number of papers they’ve written or collaborated on (from scientists with the most papers to scientists with the least papers). It also displays a number probability that the scientist has a Korean name, making it easy to distinguish between Korean and non-Korean scientists. In this analysis, we’ll cover the detailed methodology, CS fields rankings for 2024, changes over the years in rankings, our conclusion and findings, and the takeaways.";
paragraph.classList.add("paragraph");
introduction.appendChild(paragraph);

var methodology = document.getElementById("methodology-container");
var paragraph = document.createElement("p");
paragraph.textContent = "We used data from the Korean Computer Scientist Search (KCSS) to determine the number of Korean scientists in each Computer Science field. To determine which field had the highest percentage of Korean researchers in the past 10 years, we changed the “from” and “to” filters to 2014 and 2024. For the past 5 years, we changed the “from” and “to” filters to 2019 and 2024. For the past year, we changed the “from” and “to” filters to 2023 and 2024. The other filters were set to “Sorted by: # papers” (meaning that the scientists were arranged in the order of the number of papers they wrote or collaborated on, from highest to lowest), “Top 100 authors” (although it could return more due to including ties), and the default value of “>=5 pages”. To get the percentage of Korean scientists in each CS field, we took the number of Korean scientists in each field and divided it by the total number of scientists in the field, then multiplied by 100%. To find Korean scientists, we used the Korean name probability from the website and reviewed them thoroughly to ensure that the names were in fact Korean.";
paragraph.classList.add("paragraph");
methodology.appendChild(paragraph);

var r1 = document.getElementById("r1-container");
var ranking = document.createElement("p");
ranking.textContent = "1. Computer Architecture\n2. Embedded & Real-Time Systems\n3.Operating Systems\n4. Mobile Computing\n5. Machine Learning\n6. Programming Languages\n7. Human-Computer Interaction\n8. Design Automation\n9. Security & Cryptography\n10. Network\n11. Software Engineering\n12. Visualization\n13. Theory\n14. Computer Vision & Graphics\n15. Data Mining & Information Retrieval\n16. Linguistics & Speech\n17. Databases\n18. Robotics\n19. Computational Biology\n20. High-Performance Computing\n21. Artificial Intelligence\n22. Computational Economics";
ranking.classList.add("ranking");
r1.appendChild(ranking);

var r2 = document.getElementById("r2-container");
var ranking = document.createElement("p");
ranking.textContent = "1. Embedded & Real-Time Systems\n2. Operating Systems\n3. Computer Architecture\n4. Human-Computer Interaction\n5. Mobile Computing\n6. Design Automation\n7. Visualization\n8. Data Mining & Information Retrieval\n9. Linguistics & Speech\n10. Software Engineering\n11. Programming Languages\n12. Security & Cryptography\n13. Machine Learning\n14. Theory\n15. Databases\n16. Computational Biology\n17. Network\n18. Computer Vision & Graphics\n19. High-Performance Computing\n20. Robotics\n21. Artificial Intelligence\n22. Computational Economics";
ranking.classList.add("ranking");
r2.appendChild(ranking);

var r3 = document.getElementById("r3-container");
var ranking = document.createElement("p");
ranking.textContent = "1. Computer Architecture\n2. Embedded & Real-Time Systems\n3.Operating Systems\n4. Mobile Computing\n5. Human-Computer Interaction\n6. Linguistics & Speech\n7. Visualization\n8. Computational Biology\n9. Design Automation\n10. Data Mining & Information Retrieval\n11. Computer Vision & Graphics\n12. Machine Learning\n13. Programming Languages\n14. High-Performance Computing\n15. Security & Cryptography\n16. Theory\n17. Network\n18. Databases\n19. Software Engineering\n20. Robotics\n21. Artificial Intelligence\n22. Computational Economics";
ranking.classList.add("ranking");
r3.appendChild(ranking);

var r5 = document.getElementById("r5-container");
var ranking = document.createElement("p");
ranking.textContent = "Past 10 Years:\n \n1. Computer Architecture - 10%\n2. Embedded & Real-Time Systems - 8.73%\n3.Operating Systems - 7.14%\n4. Mobile Computing - 4%\n5. Machine Learning - 3.92%\n6. Programming Languages - 3.81%\n7. Human-Computer Interaction - 3%\n8. Design Automation - 2.63%\n9. Security & Cryptography - 1.94%\n10. Network - 1.87%";
ranking.classList.add("ranking");
r5.appendChild(ranking);

var r6 = document.getElementById("r6-container");
var ranking = document.createElement("p");
ranking.textContent = "Past 5 years:\n \n1. Embedded & Real-Time Systems - 10.71% (+22.68% vs Past 10 Years)\n2. Operating Systems - 10.37% (+45.24%)\n3. Computer Architecture - 10% (0%)\n4. Human-Computer Interaction - 4.42% (+47.33%)\n5. Mobile Computing - 3.05% (-23.75%)\n6. Design Automation - 2.96% (+12.55%)\n7. Visualization - 2.94% (+57.22%)\n8. Data Mining & Information Retrieval - 2.83% (+185.86%)\n9. Linguistics & Speech - 1.94% (+97.96%)\n10. Software Engineering - 1.94% (+3.74%)";
ranking.classList.add("ranking");
r6.appendChild(ranking);

var r7 = document.getElementById("r7-container");
var ranking = document.createElement("p");
ranking.textContent = "Past year:\n \n1. Computer Architecture - 10.37% (+3.7% vs Past 5 Years)\n2. Embedded & Real-Time Systems - 7.36% (-31.28%)\n3. Operating Systems - 6.12% (-40.98%)\n4. Mobile Computing - 4.43% (+45.25%)\n5. Human-Computer Interaction - 4.10% (-7.24%)\n6. Linguistics & Speech - 3.91% (+101.55%)\n7. Visualization - 3.80% (+29.25%)\n8. Computational Biology - 2.66% (+236.71%)\n9. Design Automation - 2.65% (-10.47%)\n10. Data Mining & Information Retrieval - 2.22% (-21.55%)";
ranking.classList.add("ranking");
r7.appendChild(ranking);

var r8 = document.getElementById("r8-container");
var ranking = document.createElement("p");
ranking.textContent = "In conclusion, Korean researchers seem to have a reasonable extent of influence on most Computer Science fields. In fields such as Computer Architecture, Linguistics & Speech, and Computational Biology, the influence of Korean scientists are on the rise, whereas in other fields such as Operating Systems and Design Automation, the percentage of Korean researchers are declining, most likely from the rising numbers of non-Korean scientists in these fields. However, it is important to take note that the data may not be perfectly accurate due to possible errors in distinguishing between Korean and non-Korean scientists and results from the “Top 100 authors” filter returning more than 100 authors in the case of ties.";
ranking.classList.add("ranking");
r8.appendChild(ranking);

var r9 = document.getElementById("r9-container");
var ranking = document.createElement("p");
ranking.textContent = "As the Computer Science field continues to progress, there is a growing need for greater diversity and representation. In Computer Science fields such as Artificial Intelligence and Computational Economics with no Korean researchers in the Top 100, we hope in the future, these numbers will rise with more opportunities available for Korean researchers to gain influence in these fields. Greater diversity and representation in innovative fields like Computer Science is important because it prevents algorithmic bias we see in, for instance, facial recognition models and computer-aided diagnosis (CAD) systems today.\n \n \n ";
ranking.classList.add("ranking");
r9.appendChild(ranking);

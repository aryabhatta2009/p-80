name_of_student_array=[]; 
function submit() 
{
var display_student_array=[]; 
for (var s = 1; s <= 4; s++) {
var name_of_student=document.getElementById("name_of_the_student_"+s).value; 
name_of_student_array.push(name_of_student); 
}
var length=name_of_student_array.length; 
for (var e = 0; e < length; e++) 
{
display_student_array.push("<h4>name "+name_of_student_array[e]+"</h4>"); 
} 
document.getElementById("display_name_with_commas").innerHTML=display_student_array; 

var removecommas=display_student_array.join(" "); 
document.getElementById("display_name_without_commas").innerHTML=removecommas; 
document.getElementById("submit_button").style.display="none"; 
document.getElementById("sort_button").style.display="inline-block";
} 
function sorting()
{
name_of_student_array.sort();
var display_student_array_sort=[];
var length=name_of_student_array.length; 
for (var e = 0; e < length; e++) 
{
display_student_array_sort.push("<h4>name "+name_of_student_array[e]+"</h4>"); 
} 
document.getElementById("display_name_with_commas").innerHTML=display_student_array_sort; 

var removecommas=display_student_array_sort.join(" "); 
document.getElementById("display_name_without_commas").innerHTML=removecommas; 
}
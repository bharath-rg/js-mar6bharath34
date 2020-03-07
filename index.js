let currvalue=0;
 const sol=document.getElementById('sol');
document.getElementById("incr").addEventListener("click",function()

{
    currvalue=parseInt(sol.value);
    currvalue++;
if (currvalue<10 && currvalue>0)
{
document.getElementById("sol").value=currvalue;
}
})

 
document.getElementById("decr").addEventListener("click",function()

{
    
    currvalue=parseInt(sol.value);
    currvalue--;
if (currvalue>0 && currvalue<10)
{
    document.getElementById("sol").value=currvalue;
}
})
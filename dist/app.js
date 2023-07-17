const profile = [
    "./pr2.jpg",
    "./pr3.jpg",
    "./pr4.jfif",
    "./pr5.jfif",
    "./pr1.jpg"]
const name = [
    "Cute Senpai",
    "Simp Shit",
    "Cool Harshit",
    "Classy Harshit",
    "Harshit Hex"]
const title = [
    "Software Engineer",
    "Data Analyst",
    "Product Designer",
    "Chief Executive Officer",
    "Machine Learning Engineer"]
const bio = [
    "I recently used XYZ Service and I was blown away by their exceptional customer support. They were prompt, courteous, and went above and beyond to ensure my satisfaction. I highly recommend their service to anyone in need.",
    "I can't say enough good things about XYZ Service. Their attention to detail and commitment to quality are unparalleled.The service they provided exceeded my expectations, and I wouldn't hesitate to use them again in the future.",
    "I've had the pleasure of utilizing XYZ Service multiple times, and each experience has been outstanding. Their team is highly professional and knowledgeable, and they consistently deliver results that surpass all other services I've tried.",
    "XYZ Service has truly transformed my experience. From start to finish, their service was seamless and efficient. The level of expertise and professionalism they demonstrated is unmatched in the industry. I highly recommend them!",
    "I was skeptical at first, but after using XYZ Service, I can confidently say that they are the best in the business. Their dedication to customer satisfaction and their commitment to excellence set them apart. Don't hesitate to give them a try!"]

const next = document.getElementById('next')
const pre = document.getElementById('pre')
const profilec = document.getElementById('profile')
const namec = document.querySelector('.page-box2-name')
const titlec = document.querySelector('.page-box2-title')
const bioc = document.querySelector('.page-box2-bio')
let count = 0

next.addEventListener('click', function(){
    count++;
    count = change(count);
    profilec.src = profile[count];
    namec.textContent = name[count];
    titlec.textContent = title[count];
    bioc.textContent = bio[count];
})

pre.addEventListener('click', function(){
    count--;
    count = change(count);
    profilec.src = profile[count];
    namec.textContent = name[count];
    titlec.textContent = title[count];
    bioc.textContent = bio[count];
})

const change = (count) =>
{
    if (count==5)
    {
        return (0)
    }
    else if (count==-1)
    {
        return (4)
    }
    else
    {
        return(count)
    }
}
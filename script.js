document.addEventListener("click", ClickHandler);

function ClickHandler()
{
  var eln = Event.target;

  if(eln.nodeName == "BUTTON")
  {
      var navs = eln.getAttribute("data-helpId");
      if(navs == "prev-btn")
      {
          currentItem--;
          //
          if(currentItem < 0)
          {
              currentItem = reviews.length - 1;
          }
          //
          LoadPerson(currentItem);
      }
      else if(navs == "next-btn")
      {
          currentItem++;
          //
          if(currentItem > reviews.length - 1)
          {
              currentItem = 0;
          }
          //
          LoadPerson(currentItem);
      }
      else if(navs == "random-btn")
      {
          currentItem = Math.floor(Math.random() * reviews.length);
          //
          LoadPerson(currentItem);
      }
  }
  else if(eln.nodeName == "A")
  {
    alert("haha");
  }
}

// local reviews data
const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "Web Developer",
      img:
        "images/susan.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "Web Designer",
      img:
        "images/anna.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "Intern",
      img:
        "images/peter.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "The Boss",
      img:
        "images/anderson.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// Select all items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Set starting item
var currentItem = 0;

// Load initial items
document.addEventListener('DOMContentLoaded', function () {
    LoadPerson(currentItem);
});


// ============================================================================= //

// Load Person Details
function LoadPerson(person)
{
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


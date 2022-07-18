const people = [];

const render = function () {
  $("#people").empty();
  const source = $("#people-template").html();
  const template = Handlebars.compile(source);

  const newHTML = template({ person: people });
  $("#people").append(newHTML);
};

const fetch = function () {
  for (let i = 0; i < 10; i++) {
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function (data) {
        const person = {
          name: `${data.results[0].name.first} ${data.results[0].name.last}`,
          email: data.results[0].email,
          id: i + 1,
        };
        people.push(person);
        console.log("fetch" + (i + 1));
        if (i === 9) {
          render();
        }
      },
    });
  }
};

fetch();

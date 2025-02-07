function skillsMember() {
  var member = {
    name: "John",
    age: 30,
    skills: ["HTML", "CSS", "JS"],
  };

  for (let i = 0; i < member.skills.length; i++) {
    console.log(member.skills[i]);
  }
}
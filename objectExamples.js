var course = {
    name: "English",
    start: 2010,
    end: 2012,
    display: function() {
        return this.name + " Year- "+ this.start + " - " + this.end;
    }

};
course["id"]= 14;
console.log('course', course);
console.log( course.name);
console.log( course["start"]);
console.log(course.display());
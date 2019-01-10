function School() {
  this.hash = {}

  this.roster = () => {
    return this.hash
  };

  this.add = (name, grade) => {
    if (this.hash[grade] === undefined) this.hash[grade] = []
    this.hash[grade].push(name)
    this.hash[grade].sort()
  };

  this.grade = (grade) => {
    if (this.hash[grade] === undefined) this.hash[grade] = []
    return this.hash[grade]
  };
};

module.exports = School;

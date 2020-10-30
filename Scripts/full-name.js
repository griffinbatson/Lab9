var getFirsts = function(employee){
    return employee.firstName
}
var getLasts = function(employee){
    return employee.lastName
}
var getFull = function(employee){
    return getFirsts(employee)+" "+getLasts(employee)
}

d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(getFull)
    
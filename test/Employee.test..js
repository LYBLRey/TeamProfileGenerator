describe("Employee class", () => {
  it("has employee name, id, and email", () => {
    const employeeTest = new Employee("Rey", 88, "rey@rey.com")
    expect("name" in employeeTest).toEqual(true)
    expect("id" in employeeTest).toEqual(true)
    expect("email" in employeeTest).toEqual(true)
  })

  it("has employee name", () => {
    const temp = "Rey"
    const expectedName = new Employee("Rey", 88, "rey@rey.com").getName()
    expect(expectedName).toEqual(temp)
  })
  it("has employee id", () => {
    const temp = 88
    const expectedId = new Employee("Rey", 88, "rey@rey.com").getId()
    expect(expectedId).toEqual(temp)
  })
  it("has employee email", () => {
    const temp = "rey@rey.com"
    const expectedEmail = new Employee("Rey", 88, "rey@rey.com").getEmail()
    expect(expectedEmail).toEqual(temp)
  })
  it("has employee role", () => {
    const temp = "Employee"
    const expectedRole = new Employee().getRole()
    expect(expectedRole).toEqual(temp)
  })
})

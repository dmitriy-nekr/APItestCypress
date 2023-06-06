describe('Swagger tests', () => {
  it('should create user', () => {
    cy.createNewUser().then((response) =>{
      expect(response.status).eq(200)
    })
   
  })
  it('should update user',() => {
    cy.createNewUser()
    cy.request({
      url:'/Ivan',
      method:'PUT',
      body:{
        "phone": "89135556666"
      }
    }).then((response) =>{
      expect(response.status).eq(200)
  })
  })
  it('should delete user',() => {
   cy.createNewUser()
   cy.request({
     url:'/Ivan',
     method:'DELETE'
   }).then((response) =>{
    expect(response.status).eq(200)
    })
  })
})

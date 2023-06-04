describe('Swagger tests', () => {
  it('should create user', () => {
    cy.request({
      url:'/',
      method:'POST',
      body:{
        "id": 1,
        "username": "Ivan",
        "email": "ivan@mail.ru",
        "password": "pass",
        "phone": "89135553322"
      }
    }).then((response) =>{
      expect(response.status).eq(200)
    })
   
  })
  it('should update user',() => {
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
   cy.request({
     url:'/Ivan',
     method:'DELETE'
   }).then((response) =>{
    expect(response.status).eq(200)
    })
  })
})

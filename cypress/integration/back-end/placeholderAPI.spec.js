const API_URL = Cypress.env('API_BASE_URL')
const usersForm = require('./payload/users.json')

describe('Desafio API Texo It', function(){
    it('Validação do endpoint comments.GET', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}comments`,
            qs: {
               name: 'alias odio sit'
            }      
        }).then((response) => {
            console.log(response)
            expect(response.status).to.equal(200);
            expect(response.body[0].postId).to.equal(1);
            expect(response.body[0].name).to.equal("alias odio sit");
            expect(response.body[0].email).to.equal("Lew@alysha.tv");
            expect(response.body[0].body).to.equal("non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati");
        })
    })
    it('Validação do endpoint users.POST', () => {
        cy.request({
           method: 'POST',
           url: `${API_URL}users`,
        }).then((response) => {
           console.log(response)
           expect(response.status).to.equal(201);
           expect(response.body.id).to.equal(11);
        })
    })
    it('Validação do endpoint users.PUT', () => {
        cy.request({
           method: 'PUT',
           url: `${API_URL}users/5`,
           body: usersForm
        }).then((response) => {
           console.log(response)
           expect(response.status).to.equal(200);
           expect(response.body.email).to.equal("teste@teste.com");
           expect(response.body.lat).to.equal("Joinville");
           expect(response.body.Ing).to.equal(132);
        })
    })
})
 
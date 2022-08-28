/* jsonplaceholder.js
 *
 * Como um usuário do jsonplaceholder web
 * Quero acessar fotos do meu interesse
 * Para meu uso pessoal
 */
describe('Desafio web Texo It', function(){
   context('Dado que acesso a página jsonplaceholder', () =>{
      beforeEach(() =>{
         cy.visit('https://jsonplaceholder.typicode.com/guide/')
      })   
      it('Quando navego até o link /albums/1/photos e abro', () => {
         cy.contains('/albums/1/photos').scrollIntoView().click()
      })
      it('Então realizo a validação do resultado', () => {
         fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
         .then((response) => response.json())
         .then((data) => {
            for (var i = 0; i < data.length; i++) {
               if (data[i].id == 6){
                  expect(data[5].albumId).to.equal(1)
                  expect(data[5].id).to.equal(6)
                  expect(data[5].title).to.equal("accusamus ea aliquid et amet sequi nemo")
                  expect(data[5].url).to.equal("https://via.placeholder.com/600/56a8c2")
                  expect(data[5].thumbnailUrl).to.equal("https://via.placeholder.com/150/56a8c2")
                  return
               }   
             } 
         })
      })
   })
})

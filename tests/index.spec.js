import app from "../src/app"
import request from "supertest";
 
describe('GET /users', ()=>{
    // should resp with a 200 status code
    test('Debe responder con un código de estado 200', async()=>{
        const response = await request(app).get('/user').send()
        // console.log(response);
        expect(response.statusCode).toBe(200);
    });

    // should respond an array
    test("Debe responder un Array", async () => {
        const response = await request(app).get("/allusers").send();
        expect(response.body).toBeInstanceOf(Array);
      });
    
    // should respond an object
    test("Debe responder un Objeto", async () => {
        const response = await request(app).get("/person").send();
        expect(response.body).toBeInstanceOf(Object);
      });
});

describe("POST /Users", ()=>{

        // should respond with a 200 code
        test("Debe responder con un código de estado 200", async () => {
            const response = await request(app).post("/newuser").send();
            expect(response.statusCode).toBe(200);
          });


                // should respond a json as a content type
        test("Debe tener un tipo de contenido: aplicación/json en el encabezado", async () => {
            const response = await request(app).post("/adduser").send();
            expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
            );
        });

    // should respond with a json object containing the new user with an id
    // test("Debería responder con un ID de usuario", async () => {
    //     const response = await request(app).post("/userid").send();
    //     expect(response.body.id).toBeDefined();
    //   });  

})


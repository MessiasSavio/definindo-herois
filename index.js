const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let hero = ["guerreiro", 'mago', "monge", "ninja"];
let heat = ["espada", "magia", "artes marciais", "shuriken"];

rl.question('Qual é o seu nome? ', (nameHero) => {
    rl.question(`Quantos anos você tem, ${nameHero}? `, (ageHero) => {
        rl.question(`Qual o tipo de classe você prefere: guerreiro, mago, monge ou ninja? `, (typeHero) => {
            class SelectHero {
                constructor(name, age, type) {
                    this.name = name;
                    this.age = age;
                    this.type = type;
                }
            
                chooseHero() {
                    let iChoseHero = "";
                    let myHeatIs = "";
            
                    const cleanedType = this.type.toLowerCase().trim();

                    if (cleanedType === "guerreiro") {
                        iChoseHero = hero[0];
                        myHeatIs = heat[0];
                    } else if (cleanedType === 'mago') {
                        iChoseHero = hero[1];
                        myHeatIs = heat[1];
                    } else if (cleanedType === "monge") {
                        iChoseHero = hero[2];
                        myHeatIs = heat[2];
                    } else if (cleanedType === "ninja") {
                        iChoseHero = hero[3];
                        myHeatIs = heat[3];
                    }
                    console.log(`O ${this.name}, da clase ${iChoseHero} com ${this.age} anos atacou usando ${myHeatIs}`);
                }
            }
            
            let cleanedName = nameHero.trim(); 
            let cleanedAge = parseInt(ageHero, 10); 


            let WayHero = new SelectHero(cleanedName, cleanedAge, typeHero);
            
            WayHero.chooseHero();
            
            rl.close();
        });
    });
});

const express = require("express")
const app = express()
//  permet de récupèrer les information que je met dans postman quand je post
app.use(express.json())
let associations = require("../association.json")
let messageAssociation = require("../messageForAssociation.json")

//  middleware qui regarde si l'association existe si oui je fait next sinon j'envoi une erreur
const checkSameAssociation =(req, res, next) => {
    // avec cette ligne on recupère le parametre dynamique
    const {slug} = req.params
    const sameAssociation = associations.find( association => association.name === slug.toLowerCase())

    if (sameAssociation) {
        next()
    } else {
        res.status(404).send("votre association n'est pas répertorier")
    }
}
// route pour voir toutes les associations
app.get('/', (req, res) => { 
    res.json(associations)
})
//  route qui montre une seul association grace au param dynamique
app.get("/:slug",checkSameAssociation, (req, res) => {
    const {slug} = req.params
    const selectedAssociation = associations.find( association => association.name === slug.toLowerCase())
    
    res.status(200).json(selectedAssociation)
})
// route qui me permet de voir les messages ajouter
app.get('/:slug/messages', (req, res) => { 
    res.json(messageAssociation)
})
// route qui permet d'ajouter des message dan le fichier json exprès pour les message
app.post("/:slug/message",checkSameAssociation, (req, res) => {
    // console.log("resulta de la reponse de postman2=>", req.body);
    // je stock ma reponse de req.body dans une const
        const newMessage = {
            //  messageAssociation.length +1,
                ...req.body,

            
        }
        // // je push le nouveau message dans mon json message
        messageAssociation = [...messageAssociation, newMessage]
        res.status(200).send("message crée").json(messageAssociation)
        
})

module.exports = app
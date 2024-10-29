import mustang from "/Users/nduracak/P1/public/untitled folder 3/Ford mustang.jpeg"
import chevy from "/Users/nduracak/P1/public/untitled folder 3/Chevy Colorado.jpeg"
import lykan from "/Users/nduracak/P1/public/untitled folder 3/Lykan Hypersport.jpeg"
import camry from "/Users/nduracak/P1/public/untitled folder 3/Toyota Camry.jpeg"
import corolla from "/Users/nduracak/P1/public/untitled folder 3/toyota corolla.jpeg"

export default {
    "success":true,
    "data":{
        "cari": [
            {
                id: 1,
                name: "Mustang",
                image: mustang,
                info: "Shes a beaut"
            },
            {
                id: 2,
                name: "Lykan Hypersport",
                image: lykan ,
                info: "Pricey"
            },
            {
                id: 3,
                name: "Chevy Colorado",
                image: chevy,
                info: "Fully loaded"
            },
            {
                id: 4,
                name: "Toyota Camry",
                image: camry,
                info: "No better on gas"
            },
            {
                id: 5,
                name: "Toyota Corolla",
                image: corolla,
                info: "Its a corolla"
            }
        ]
    }
}
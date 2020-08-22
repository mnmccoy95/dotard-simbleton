import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"
import { newYorkBusiness } from "./BusinessProvider.js"
import { newYorkBusinesses } from "./Business.js"

const contentTarget = document.querySelector(".businesses")
const newYorkContentTarget = document.querySelector(".businessList--newYork")
export const BusinessList = () => {
    const businessArray = useBusinesses()
    
    let businessHTML = "<h1>Businesses</h1>";
    businessArray.forEach(
        (businessObj) => {
            businessHTML += Business(businessObj)
        }
    );
    contentTarget.innerHTML += `
        ${businessHTML}
    `
    
}

export const newYorkBusinessList = () => {
    const newYorkBusinessArray = newYorkBusiness()
    
    let newYorkBusinessHTML = "<h1>New York Businesses</h1>";
    newYorkBusinessArray.forEach(
        (newBusinessObj) => {
            newYorkBusinessHTML += newYorkBusinesses(newBusinessObj)
        }
    );
    newYorkContentTarget.innerHTML += `
        ${newYorkBusinessHTML}
    `
    
}
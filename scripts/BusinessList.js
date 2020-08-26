import { useBusinesses, findCompany } from "./BusinessProvider.js"
import { Business } from "./Business.js"
import { newYorkBusiness } from "./BusinessProvider.js"
import { newYorkBusinesses } from "./Business.js"
import { useAgentData } from "./BusinessProvider.js"
import { Agent } from "./Business.js"

const contentTarget = document.querySelector(".businesses")
const newYorkContentTarget = document.querySelector(".businessList--newYork")
const agentContentTarget = document.querySelector(".agents")
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

export const agentList = () => {
    const agentArray = useAgentData()
    
    let agentHTML = "<h1>Purchasing Agents</h1>";
    agentArray.forEach(
        (agentObj) => {
            agentHTML += Agent(agentObj)
        }
    );
    agentContentTarget.innerHTML += `
        ${agentHTML}
    `
    
}

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
           const businessSearchArray = useBusinesses()

            const foundBusiness = businessSearchArray.find(businessInfo => {
                return businessInfo.companyName.includes(keyPressEvent.target.value)
            })

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });

const agentSearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
           const agentSearchArray = useBusinesses()

            const foundAgent = agentSearchArray.find(businessInfo => {
                return businessInfo.purchasingAgent.nameLast.includes(keyPressEvent.target.value) | businessInfo.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
                
            })

            agentSearchResultArticle.innerHTML = `
                <h2>
                ${foundAgent.companyName}
                </h2>
                <section>
                ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast} <br>
                ${foundAgent.addressFullStreet}

                </section>
                <section>
                ${foundAgent.addressCity},
                ${foundAgent.addressStateCode}
                ${foundAgent.addressZipCode}
                </section>
            `;
        }
    });
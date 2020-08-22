export const Business = (businessObj) => {
    return `
        <section class="business"> 
            <h2 class="business_type">${businessObj.companyName}</h2>
            <div class="business-address">
                ${businessObj.addressFullStreet} <br>
                ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}
            </div>
        </section>
    `
}
export const newYorkBusinesses = (businessObj) => {
    return `
        <section class="business"> 
            <h2 class="business_type">${businessObj.companyName}</h2>
            <div class="business-address">
                ${businessObj.addressFullStreet} <br>
                ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}
            </div>
        </section>
    `
}

export const agentList = (businessObj) => {
    return `
        <section class="agent">
            <h2 class="agent-name">
    
    
    
        </section>
    `
}

export const Agent = (agentObj) => {
    return `
        <section class="agent">
            <h2 class="agent-name">${agentObj.fullName}</h2>
            <div class="agent-company">${agentObj.company}</div>
            <div class="agent-number">${agentObj.phoneNumber}</div>
        </section>
    `
}
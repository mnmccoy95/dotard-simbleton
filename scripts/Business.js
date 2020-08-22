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

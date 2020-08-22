
import { useBusinesses } from "./BusinessProvider.js"
import { newYorkBusiness } from "./BusinessProvider.js"
import { BusinessList } from "./BusinessList.js"
import { newYorkBusinessList } from "./BusinessList.js"

const allBusinesses = useBusinesses()
console.log("all the businesses are", allBusinesses)

BusinessList();

const allNewYorkBusinesses = newYorkBusiness()
console.log("all the new york businesses are", allNewYorkBusinesses)

newYorkBusinessList();

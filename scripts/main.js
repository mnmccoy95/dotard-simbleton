
import { useBusinesses } from "./BusinessProvider.js"
import { newYorkBusiness } from "./BusinessProvider.js"
import { BusinessList } from "./BusinessList.js"
import { newYorkBusinessList } from "./BusinessList.js"
import { useAgentData } from "./BusinessProvider.js"
import { agentList } from "./BusinessList.js"

const allBusinesses = useBusinesses()
console.log("all the businesses are", allBusinesses)

BusinessList();

const allNewYorkBusinesses = newYorkBusiness()
console.log("all the new york businesses are", allNewYorkBusinesses)

newYorkBusinessList();

const allAgents = useAgentData();
console.log("all the agents are", allAgents)

agentList();
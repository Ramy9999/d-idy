// 1. Import the Agents SDK library
import * as sdk from "@d-id/client-sdk"

// 2. Paste the `data-agent-id' in the 'agentId' variable
let agentId = "agt_6Z_uk-Kp"

// 3. Paste the 'data-client-key' in the 'auth.clientKey' variable
let auth = { type: 'key', clientKey: "Z29vZ2xlLW9hdXRoMnwxMDAyNDQyNDYzMjAzNjg3MTcxNDk6SXlqMTJFYjNCZF84RVB0Rndmb1cx" };

// 4. Define the SDK callbacks functions in this object
const callbacks = {
  
}

// 5. Define the Stream Options object (Optional)
let streamOptions = { compatibilityMode: "auto", streamWarmup: true }

//....Rest of the APP's code here....//
//...................................//

// 6. Create the 'agentManager' instance with the values created above
let agentManager = await sdk.createAgentManager(agentId, { auth, callbacks, streamOptions });
import React, { useState } from 'react';
import { registerPolicy, queryPolicy, processClaim } from './apiService';

function App() {
  const [policyID, setPolicyID] = useState('');
  const [holderName, setHolderName] = useState('');
  const [queryResult, setQueryResult] = useState(null);

  const handleRegister = async () => {
    try {
      console.log('Registering policy:', policyID, holderName);
      await registerPolicy(policyID, holderName);
      alert('Policy registered successfully');
      console.log('Policy registered successfully');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleQuery = async () => {
    try {
      console.log('Querying policy with ID:', policyID);
      const result = await queryPolicy(policyID);
      setQueryResult(result.data);
      console.log('Query result:', result.data);
    } catch (error) {
      console.error('Error during query:', error);
    }
  };

  const handleClaimProcess = async () => {
    try {
      const claimID = "C001";  // Example claim ID
      const amount = 1000;     // Example amount
      console.log('Processing claim with ID:', claimID, 'for policy:', policyID, 'Amount:', amount);
      await processClaim(claimID, policyID, amount);
      alert('Claim processed successfully');
      console.log('Claim processed successfully');
    } catch (error) {
      console.error('Error during claim processing:', error);
    }
  };

  return (
    <div className="App">
      <h1>Insurance Blockchain App</h1>
      <div>
        <input
          type="text"
          value={policyID}
          onChange={(e) => setPolicyID(e.target.value)}
          placeholder="Policy ID"
        />
        <input
          type="text"
          value={holderName}
          onChange={(e) => setHolderName(e.target.value)}
          placeholder="Holder Name"
        />
        <button onClick={handleRegister}>Register Policy</button>
      </div>
      <div>
        <button onClick={handleQuery}>Query Policy</button>
        {queryResult && <pre>{JSON.stringify(queryResult, null, 2)}</pre>}
      </div>
      <div>
        <button onClick={handleClaimProcess}>Process Claim</button>
      </div>
    </div>
  );
}

export default App;

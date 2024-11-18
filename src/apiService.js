// src/apiService.js
import axios from 'axios';

const API_URL = 'http://172.19.2.171:3001';

export const registerPolicy = (policyID, holderName) => {
    return axios.post(`${API_URL}/registerPolicy`, { policyID, holderName });
};

export const queryPolicy = (policyID) => {
    return axios.get(`${API_URL}/queryPolicy/${policyID}`);
};

export const processClaim = (claimID, policyID, amount) => {
    return axios.post(`${API_URL}/processClaim`, { claimID, policyID, amount });
};

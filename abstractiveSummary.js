const axios = require('axios');

async function generateSummary(text) {
  const API_KEY = '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';
  const endpoint = 'https://api.openai.com/v1/engines/davinci/jobs';

  const response = await axios.post(endpoint, {
    prompt: `Please summarize the following text: ${text}`,
    max_tokens: 150, // maximum length of the generated summary
    n: 1, // number of responses to generate
    stop: '', // stop sequence for generation
    temperature: 0.5, // determines the level of randomness in the generated text
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    }
  });

  const summary = response.data.choices[0].text;
  return summary;
}

// Example usage:
const text = 'A movement for a more transparent and decentralized Internet is globally attracting more attention. People are becoming more privacy-aware of their online identities and data. The Internet is constantly evolving. Web2 focused on companies that provide services in exchange for personal user data. Web3 commits to user-centricity using decentralization and zero-server architectures. The current digital society demands a global change to empower citizens and take back control. Citizens are locked into big-tech for personal data storage and their for-profit digital identity. Protection of data has proven to be essential, especially due to increased home Internet traffic during the COVID pandemic. Citizens do not possess their own travel documents. The European Commission aims to transition this governmental property towards self-sovereign identity, introducing many new opportunities. Citizens are locked into banks with non-portable IBAN accounts and unsustainable legacy banking infrastructures. Migration to all-digital low-fraud infrastructures and healthier competitive ecosystems is essential. The overall challenge is to return the power to citizens and users again. The transition to a more decentralized Internet is the first crucial step in the realization of user-centricity. This thesis presents the first exploratory study that integrates governmental-issued travel documents into a (decentralized) societal infrastructure. These self-sovereign identities form the authentic base to a private and secure transfer of money and data, and can effectively provide trust in authenticity that is currently missing in online conversations. A fully operational zero-server infrastructure that incorporates all our requirements has been developed for Android using the P2P network overlay IPv8, and a personalized blockchain called TrustChain';
generateSummary(text).then(summary => {
  console.log(`Summary: ${summary}`);
});


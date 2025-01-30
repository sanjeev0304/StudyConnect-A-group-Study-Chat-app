export const getCluster = async (age, specialization, yearOfStudy) => {
    try {
      const response = await fetch('http://localhost:5000/cluster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ age, specialization, yearOfStudy }),
      });
  
      const data = await response.json();
      return data.cluster;
    } catch (error) {
      console.error('Error calling Flask backend:', error);
      return 0; // Default cluster if there's an error
    }
  };
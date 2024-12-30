// Д/З 1


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const loggerOne = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(() => logger(2000));
delay(1000).then(() => logger(1000));
delay(1500).then(() => logger(1500));



  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  ​
  const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  ​
    callback(updatedUsers);
  };
  ​
  const loggerTwo = updatedUsers => console.table(updatedUsers);
  ​
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);
  ​
  
  toggleUserState(users, 'Mango', loggerTwo);
  toggleUserState(users, 'Lux', loggerTwo);



  const makeTransaction = transaction => {
    return new Promise((resolve, reject) => {
      const delay = randomIntegerFromInterval(200, 500);
    
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
    
        if (canProcess) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  };
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);


    // Д/З 2
    

    // ДЗ 3

    
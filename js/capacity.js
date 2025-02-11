function checkLocalStorageCapacity() {
    let usedBytes = 0;
  
    // Calculate the size of each item in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      usedBytes += key.length + value.length;
    }
  
    console.log(`Used Storage: ${(usedBytes / 1024).toFixed(2)} KB`);
  
    // Estimate maximum capacity
    try {
      const testKey = '__test__';
      const testValue = 'x'.repeat(1024 * 1024); // 1 MB string
      localStorage.setItem(testKey, testValue);
      localStorage.removeItem(testKey);
      console.log('Estimated maximum capacity: At least 5 MB');
    } catch (e) {
      console.log('Estimated maximum capacity: Around 5 MB');
    }
  }
  
  checkLocalStorageCapacity();
  //localStorage.clear();   
// this clears the memory in the local storage.
  
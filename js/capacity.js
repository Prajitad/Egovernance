function checkLocalStorageCapacity() {
    let usedBytes = 0;
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      usedBytes += key.length + value.length;
    }
  
    console.log(`Used Storage: ${(usedBytes / 1024).toFixed(2)} KB`);
 
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
 
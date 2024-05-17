// Describe a Node.js script designed to monitor system memory usage and emit a custom event when the memory usage exceeds a specified threshold. Explain the steps involved in monitoring system memory usage, triggering the event, and handling the event. Additionally, discuss how the script ensures that memory monitoring stops after a certain duration. Lastly, propose potential improvements to the script, such as error handling or efficiency enhancements. 
const os = require('os');
const EventEmitter = require('events');

class MemoryMonitor extends EventEmitter {
  constructor(threshold = 500) {
    super();
    this.threshold = threshold;
    this.interval = null;
    this.startMonitoring();
  }

  startMonitoring() {
    this.interval = setInterval(() => {
      const memoryUsage = os.totalmem() - os.freemem();
      if (memoryUsage > this.threshold) {
        this.emit('memoryExceeded', memoryUsage);
      }
    }, 1000);
  }

  stopMonitoring() {
    clearInterval(this.interval);
  }
}

const memoryMonitor = new MemoryMonitor();

memoryMonitor.on('memoryExceeded', (memoryUsage) => {
  console.log(`Memory usage exceeded threshold: ${memoryUsage}`);
});

// Stop monitoring after 10 seconds
setTimeout(() => {
  memoryMonitor.stopMonitoring();
}, 10000);
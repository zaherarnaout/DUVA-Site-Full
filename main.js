console.log("DUVA main.js loaded!");

// === Main Initialization and Coordination ===

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing DUVA application...');
  
  // Initialize all functions directly (since they're not exported as modules)
  try {
    // Initialize scroll animations
    if (typeof initializeScrollAnimations === 'function') {
      initializeScrollAnimations();
      console.log('✅ Scroll animations initialized');
    }
    
    // Initialize menu panel
    if (typeof initializeMenuPanel === 'function') {
      initializeMenuPanel();
      console.log('✅ Menu panel initialized');
    }
    
    // Initialize skeleton loaders
    if (typeof initializeSkeletonLoaders === 'function') {
      initializeSkeletonLoaders();
      console.log('✅ Skeleton loaders initialized');
    }
    
    // Initialize gallery auto-scroll
    if (typeof initializeGalleryAutoScroll === 'function') {
      initializeGalleryAutoScroll();
      console.log('✅ Gallery auto-scroll initialized');
    }
    
    // Initialize accessories functionality
    if (typeof setupOrderingCodeObserver === 'function') {
      setupOrderingCodeObserver();
      console.log('✅ Ordering code observer initialized');
    }
    
    // Initialize image loading
    if (typeof handleDynamicImages === 'function') {
      handleDynamicImages();
      console.log('✅ Dynamic image handling initialized');
    }
    
    if (typeof preloadCriticalImages === 'function') {
      preloadCriticalImages();
      console.log('✅ Critical images preloaded');
    }
    
    console.log('✅ All functions initialized');
    
  } catch (error) {
    console.error('❌ Error during initialization:', error);
  }
});

// === Utility Functions ===

// Global utility function to check if all functions are available
window.checkFunctionsAvailable = function() {
  const functions = [
    'initializeScrollAnimations',
    'initializeMenuPanel', 
    'initializeSkeletonLoaders',
    'initializeGalleryAutoScroll',
    'setupOrderingCodeObserver',
    'handleDynamicImages',
    'preloadCriticalImages',
    'updateOrderingCode',
    'updateLumenValue',
    'generatePDF'
  ];
  
  const availableFunctions = functions.filter(func => typeof window[func] === 'function');
  const missingFunctions = functions.filter(func => typeof window[func] !== 'function');
  
  console.log('📦 Available functions:', availableFunctions);
  if (missingFunctions.length > 0) {
    console.log('⚠️ Missing functions:', missingFunctions);
  }
  
  return {
    available: availableFunctions,
    missing: missingFunctions,
    allAvailable: missingFunctions.length === 0
  };
};

// Global function to reload all functions
window.reloadAllFunctions = function() {
  console.log('🔄 Reloading all functions...');
  
  try {
    // Re-initialize key functions
    if (typeof initializeScrollAnimations === 'function') {
      initializeScrollAnimations();
    }
    
    if (typeof setupOrderingCodeObserver === 'function') {
      setupOrderingCodeObserver();
    }
    
    if (typeof initializeGalleryAutoScroll === 'function') {
      initializeGalleryAutoScroll();
    }
    
    console.log('✅ All functions reloaded');
  } catch (error) {
    console.error('❌ Error during reload:', error);
  }
};

// Global function to get application status
window.getAppStatus = function() {
  return {
    functions: window.checkFunctionsAvailable(),
    currentSelection: window.currentSelection || {},
    productCode: typeof getCurrentProductCode === 'function' ? getCurrentProductCode() : 'Not available',
    isExporting: window.isExporting || false
  };
};

// === Error Handling and Debugging ===

// Global error handler
window.addEventListener('error', function(e) {
  console.error('🚨 Global error caught:', e.error);
  console.error('Error details:', {
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno
  });
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
  console.error('🚨 Unhandled promise rejection:', e.reason);
});

// === Performance Monitoring ===

// Track function load times
window.functionLoadTimes = {};

// Function to track function load time
window.trackFunctionLoad = function(functionName, startTime) {
  const loadTime = performance.now() - startTime;
  window.functionLoadTimes[functionName] = loadTime;
  console.log(`⏱️ ${functionName} loaded in ${loadTime.toFixed(2)}ms`);
};

// Get performance metrics
window.getPerformanceMetrics = function() {
  return {
    functionLoadTimes: window.functionLoadTimes,
    totalLoadTime: Object.values(window.functionLoadTimes).reduce((a, b) => a + b, 0),
    functionCount: Object.keys(window.functionLoadTimes).length
  };
};

// === Development Helpers ===

// Debug function to show all available functions
window.showAvailableFunctions = function() {
  const functions = {
    'checkFunctionsAvailable()': 'Check if all functions are available',
    'reloadAllFunctions()': 'Reload all functions',
    'getAppStatus()': 'Get current application status',
    'getPerformanceMetrics()': 'Get performance metrics',
    'refreshProductCode()': 'Refresh product code (from Webflow)',
    'debugProductCode()': 'Debug product code detection',
    'forceRefreshOrderingCode()': 'Force refresh ordering code',
    'testProductChange(newCode)': 'Test product change simulation'
  };
  
  console.log('🔧 Available global functions:');
  Object.entries(functions).forEach(([func, desc]) => {
    console.log(`  ${func}: ${desc}`);
  });
  
  return functions;
};

// === Application Lifecycle ===

// Application ready event
window.duvaReady = false;

// Mark application as ready when all critical functions are available
function markAppReady() {
  if (!window.duvaReady) {
    window.duvaReady = true;
    console.log('🎉 DUVA application ready!');
    
    // Emit ready event if duvaEvents exists
    if (window.duvaEvents && typeof window.duvaEvents.emit === 'function') {
      window.duvaEvents.emit('app:ready');
    }
  }
}

// Check if app is ready after a delay
setTimeout(() => {
  const status = window.checkFunctionsAvailable();
  if (status.allAvailable) {
    markAppReady();
  } else {
    console.log('⏳ Waiting for functions to load...');
    // Check again after a longer delay
    setTimeout(() => {
      markAppReady();
    }, 2000);
  }
}, 1000);

// === Export Main Module ===

window.mainModule = {
  checkFunctionsAvailable,
  reloadAllFunctions,
  getAppStatus,
  getPerformanceMetrics,
  showAvailableFunctions,
  markAppReady
};

console.log('✅ DUVA main.js module loaded and ready'); 
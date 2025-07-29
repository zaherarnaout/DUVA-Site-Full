console.log("DUVA debug.js loaded!");

// === Debug and Diagnostic Functions ===

// Test if all critical functions are available
function testCriticalFunctions() {
  console.log('🔍 Testing critical functions...');
  
  const criticalFunctions = [
    'initializeScrollAnimations',
    'initializeMenuPanel',
    'initializeSkeletonLoaders', 
    'initializeGalleryAutoScroll',
    'updateOrderingCode',
    'updateLumenValue',
    'generatePDF',
    'injectPdfContent',
    'injectPdfImages',
    'injectPdfIcons'
  ];
  
  const results = {};
  
  criticalFunctions.forEach(funcName => {
    const isAvailable = typeof window[funcName] === 'function';
    results[funcName] = isAvailable;
    console.log(`${isAvailable ? '✅' : '❌'} ${funcName}: ${isAvailable ? 'Available' : 'Missing'}`);
  });
  
  const availableCount = Object.values(results).filter(Boolean).length;
  const totalCount = criticalFunctions.length;
  
  console.log(`📊 Results: ${availableCount}/${totalCount} functions available`);
  
  return results;
}

// Test if all critical CSS classes are applied
function testCriticalStyles() {
  console.log('🎨 Testing critical styles...');
  
  const testElements = [
    { selector: '.header-section', description: 'Header section' },
    { selector: '.menu-wrapper', description: 'Menu wrapper' },
    { selector: '.download-panel', description: 'Download panel' },
    { selector: '.product-configurator', description: 'Product configurator' },
    { selector: '.gallery-section', description: 'Gallery section' },
    { selector: '.accessories-section', description: 'Accessories section' }
  ];
  
  const results = {};
  
  testElements.forEach(test => {
    const element = document.querySelector(test.selector);
    const exists = !!element;
    results[test.description] = exists;
    console.log(`${exists ? '✅' : '❌'} ${test.description}: ${exists ? 'Found' : 'Not found'}`);
  });
  
  return results;
}

// Test if all critical JavaScript elements are present
function testCriticalElements() {
  console.log('🧩 Testing critical elements...');
  
  const criticalElements = [
    { selector: '#ral-input', description: 'RAL Input' },
    { selector: '.dropdown-wrapper', description: 'Dropdown wrapper' },
    { selector: '.ordering-code-value', description: 'Ordering code value' },
    { selector: '.download-arrow', description: 'Download arrow' },
    { selector: '.accessory-checkbox', description: 'Accessory checkbox' },
    { selector: '.gallery-section-cms', description: 'Gallery section CMS' }
  ];
  
  const results = {};
  
  criticalElements.forEach(test => {
    const element = document.querySelector(test.selector);
    const exists = !!element;
    results[test.description] = exists;
    console.log(`${exists ? '✅' : '❌'} ${test.description}: ${exists ? 'Found' : 'Not found'}`);
  });
  
  return results;
}

// Test if all modules are loaded
function testModuleLoading() {
  console.log('📦 Testing module loading...');
  
  const modules = [
    'main.js',
    'product-configurator.js',
    'pdf-export.js', 
    'menu.js',
    'image-loading.js',
    'gallery.js',
    'animations.js',
    'accessories.js'
  ];
  
  const results = {};
  
  modules.forEach(module => {
    // Check if script tag exists
    const scriptTag = document.querySelector(`script[src*="${module}"]`);
    const exists = !!scriptTag;
    results[module] = exists;
    console.log(`${exists ? '✅' : '❌'} ${module}: ${exists ? 'Loaded' : 'Not loaded'}`);
  });
  
  return results;
}

// Test if all CSS files are loaded
function testCSSLoading() {
  console.log('🎨 Testing CSS loading...');
  
  const cssFiles = [
    'base.css',
    'menu.css',
    'product-configurator.css',
    'pdf-export.css',
    'gallery.css',
    'accessories.css',
    'animations.css',
    'image-loading.css'
  ];
  
  const results = {};
  
  cssFiles.forEach(cssFile => {
    // Check if link tag exists
    const linkTag = document.querySelector(`link[href*="${cssFile}"]`);
    const exists = !!linkTag;
    results[cssFile] = exists;
    console.log(`${exists ? '✅' : '❌'} ${cssFile}: ${exists ? 'Loaded' : 'Not loaded'}`);
  });
  
  return results;
}

// Run all tests
function runAllTests() {
  console.log('🚀 Running all diagnostic tests...');
  console.log('='.repeat(50));
  
  const results = {
    functions: testCriticalFunctions(),
    styles: testCriticalStyles(),
    elements: testCriticalElements(),
    modules: testModuleLoading(),
    css: testCSSLoading()
  };
  
  console.log('='.repeat(50));
  console.log('📊 Summary:');
  
  Object.entries(results).forEach(([testType, testResults]) => {
    const passed = Object.values(testResults).filter(Boolean).length;
    const total = Object.keys(testResults).length;
    console.log(`${testType}: ${passed}/${total} passed`);
  });
  
  return results;
}

// Auto-run tests when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔍 Starting diagnostic tests...');
  setTimeout(runAllTests, 1000); // Wait 1 second for everything to load
});

// Export functions for manual testing
window.duvaDebug = {
  testCriticalFunctions,
  testCriticalStyles,
  testCriticalElements,
  testModuleLoading,
  testCSSLoading,
  runAllTests
};

console.log('✅ DUVA debug.js ready - use window.duvaDebug.runAllTests() to test');
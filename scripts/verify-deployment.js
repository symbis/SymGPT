#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 SymGPT Deployment Verification\n');

let hasErrors = false;

function checkCommand(command, description) {
  try {
    execSync(command, { stdio: 'pipe' });
    console.log(`✅ ${description}`);
    return true;
  } catch (error) {
    console.log(`❌ ${description}`);
    hasErrors = true;
    return false;
  }
}

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${description}`);
    return true;
  } else {
    console.log(`❌ ${description}`);
    hasErrors = true;
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(searchString)) {
      console.log(`✅ ${description}`);
      return true;
    } else {
      console.log(`❌ ${description}`);
      hasErrors = true;
      return false;
    }
  } catch (error) {
    console.log(`❌ ${description} (file not readable)`);
    hasErrors = true;
    return false;
  }
}

// Check required files
console.log('📋 Checking required files...');
checkFile('docker-compose.override.yml', 'docker-compose.override.yml exists');
checkFile('librechat.yaml', 'librechat.yaml exists');
checkFile('.env', '.env file exists');
checkFile('client/dist/index.html', 'Frontend compiled (client/dist exists)');
console.log('');

// Check file contents
console.log('🔍 Checking configuration...');
checkFileContent('librechat.yaml', 'enforce: true', 'modelSpecs enforcement enabled');
checkFileContent('docker-compose.override.yml', './client/dist', 'Compiled frontend mounted');
checkFileContent('packages/client/src/svgs/AzureMinimalIcon.tsx', 'favicon-removebg-preview.png', 'Symbis logo configured');
checkFileContent('client/src/components/Chat/Footer.tsx', 'SymGPT | Powered by Symbis', 'Custom footer text');
console.log('');

// Check Docker containers
console.log('🐳 Checking Docker containers...');
checkCommand('docker-compose ps | grep -q "Up"', 'Containers are running');
console.log('');

// Check application accessibility
console.log('🌐 Checking application accessibility...');
checkCommand('curl -s http://localhost:3080 > /dev/null', 'Frontend accessible at http://localhost:3080');
console.log('');

// Check mounted files in container
console.log('📁 Checking mounted files in container...');
checkCommand('docker exec LibreChat test -f /app/librechat.yaml', 'librechat.yaml mounted in container');
checkCommand('docker exec LibreChat test -f /app/client/dist/index.html', 'Compiled frontend mounted in container');
checkCommand('docker exec LibreChat test -f /app/client/public/assets/favicon-removebg-preview.png', 'Symbis assets mounted in container');
console.log('');

// Final result
if (hasErrors) {
  console.log('❌ Deployment verification FAILED');
  console.log('\n🔧 Troubleshooting steps:');
  console.log('1. Run: npm run frontend');
  console.log('2. Run: docker-compose down && docker-compose up -d');
  console.log('3. Check .env file has Azure credentials');
  console.log('4. Verify docker-compose.override.yml filename');
  console.log('\n📖 See README-DEPLOYMENT.md for detailed instructions');
  process.exit(1);
} else {
  console.log('✅ Deployment verification PASSED');
  console.log('\n🎉 SymGPT is ready!');
  console.log('\n📋 Manual verification checklist:');
  console.log('1. Visit http://localhost:3080');
  console.log('2. Check SymGPT models in dropdown');
  console.log('3. Verify Symbis logos (not Azure)');
  console.log('4. Check footer: "SymGPT | Powered by Symbis"');
  console.log('5. Verify Symbis styling on login page');
  process.exit(0);
}
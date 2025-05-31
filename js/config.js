/**
 * Configuration file for the anime website
 * Handles environment-specific settings
 */

// Determine if we're in production or development
const isProduction = window.location.hostname !== 'localhost' && 
                    window.location.hostname !== '127.0.0.1';

// Set the API base URL
const API_BASE_URL = isProduction 
    ? 'https://ai-final-project-production.up.railway.app' 
    : window.location.origin;

// Export configuration
const config = {
    apiBaseUrl: API_BASE_URL,
    socketUrl: API_BASE_URL,
    isProduction: isProduction
};

console.log('App config loaded:', config);

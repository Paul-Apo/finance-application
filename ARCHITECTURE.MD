# Application Architecture

## Folder Structure
- app/ - Main application screens with expo-router
- src/components/ - Reusable UI components
- src/config/ - Application configuration
- src/services/ - API clients and service layer
- src/state/ - State management (Zustand + React Query)
- src/hooks/ - Custom React hooks
- src/types/ - TypeScript type definitions

## State Management
This application uses a combination of React Query and Zustand:
- **React Query**: Handles server-state, API caching and synchronization
- **Zustand**: Lightweight store for client-state management

## Service Layer
The service layer abstracts API interactions using a central apiClient
with standardized error handling and response formatting.

## Testing Strategy
We use Jest + React Native Testing Library for component and integration testing.

## Migration Guide for New Developers
1. Run `npm install` to install dependencies
2. Run `npx expo start` to start the application
3. Use `className` for NativeWind styles, with fallback inline styles if needed
4. Follow folder structure for new features and components

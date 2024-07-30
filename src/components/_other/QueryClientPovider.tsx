'use client'
import * as React from 'react';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

const QueryClientProviderComponent = ( {children} : any) => {
    const queryClient = new QueryClient();

    return ( 
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>

    );
}
 
export default QueryClientProviderComponent;
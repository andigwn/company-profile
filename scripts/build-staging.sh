#!/bin/bash

echo "🚀 Building for staging..."
NEXT_PUBLIC_ENV=staging npm run build

echo "✅ Build completed"
echo "📦 Output: .next directory"

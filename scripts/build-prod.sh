#!/bin/bash

echo "🚀 Building for production..."
NEXT_PUBLIC_ENV=production npm run build

echo "✅ Build completed"
echo "📦 Output: .next directory"

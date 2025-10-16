#!/bin/bash

# 🧹 SymGPT Repository Cleanup Script
# Verwijdert grote bestanden en herstelt Git repository

echo "🧹 Starting SymGPT repository cleanup..."

# Stap 1: Verwijder alle .tgz backup bestanden
echo "📦 Removing .tgz backup files..."
rm -f *.tgz
rm -f *.tar.gz
echo "✅ .tgz files removed"

# Stap 2: Verwijder MongoDB backup directories
echo "🗄️ Removing MongoDB backup directories..."
rm -rf mongosh-*
rm -rf mongo-backup-*
echo "✅ MongoDB backup directories removed"

# Stap 3: Zoek en toon alle grote bestanden (>50MB)
echo "🔍 Checking for remaining large files (>50MB)..."
find . -size +50M -type f -not -path "./.git/*" 2>/dev/null | while read file; do
    echo "⚠️  Large file found: $file ($(du -h "$file" | cut -f1))"
done

# Stap 4: Git cleanup
echo "🔧 Cleaning up Git repository..."

# Reset de laatste commit (die de grote bestanden bevatte)
git reset --soft HEAD~1
echo "✅ Reset last commit"

# Verwijder bestanden uit staging area
git reset HEAD .
echo "✅ Unstaged all files"

# Voeg alle bestanden toe behalve de grote bestanden (dankzij .gitignore)
git add .
echo "✅ Added files (excluding large files via .gitignore)"

# Maak nieuwe commit
git commit -m "🧹 Remove large backup files and improve .gitignore

- Remove MongoDB backup files (mongosh-*, *.tgz)
- Update .gitignore to prevent large files
- Add security hardening documentation
- Prepare for progressive security improvements"

echo "✅ Created new commit without large files"

# Stap 5: Verificatie
echo "📊 Repository status:"
echo "Git status:"
git status --short

echo ""
echo "Repository size:"
du -sh .git/

echo ""
echo "🎉 Cleanup completed! You can now push safely:"
echo "   git push"

echo ""
echo "🛡️ Next steps for security hardening:"
echo "   1. Review SECURITY-HARDENING-PLAN.md"
echo "   2. Apply nginx-security-improved.conf"
echo "   3. Test security headers"

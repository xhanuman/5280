#!/bin/bash
# Backup all xhanuman GitHub repos
# Run: bash backup_repos.sh

BACKUP_DIR="$(dirname "$0")/backups"
mkdir -p "$BACKUP_DIR"

REPOS=(
  "xhanuman/5280"
  "xhanuman/denverapartmentguide"
  "xhanuman/denverbackflowtest"
  "xhanuman/denversprinkerblowout"
  "xhanuman/globaltrekker"
  "xhanuman/sprinks"
)

echo "Backing up ${#REPOS[@]} repos to $BACKUP_DIR"
echo "============================================="

for repo in "${REPOS[@]}"; do
  name=$(basename "$repo")
  dest="$BACKUP_DIR/$name"
  echo ""
  echo ">> Cloning $repo..."
  if [ -d "$dest" ]; then
    echo "   Already exists, pulling latest..."
    git -C "$dest" pull --all 2>&1
  else
    git clone --mirror "https://github.com/$repo.git" "$dest" 2>&1
  fi
  if [ $? -eq 0 ]; then
    echo "   Done: $name"
  else
    echo "   FAILED: $name"
  fi
done

echo ""
echo "============================================="
echo "Backup complete!"
ls -lh "$BACKUP_DIR"

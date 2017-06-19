#!/bin/bash

if [ $# -lt 1 ]
then
  echo "Project name needed"
  echo "Usage: $0 <project name>"
  echo "Example: $0 'MyGame'"
  exit 1
fi

url="https://github.com/metalx1000/Phaser-Minimal-Setup/archive/master.zip"
zip="/tmp/phaser.zip"
dir="Phaser-Minimal-Setup-master"

if [ -d "$dir" ];
then
  echo "$dir already exists."
  echo "Goodbye..."
  exit 1
fi

if [ -d "$1" ];
then
  echo "Project $1 already exists."
  echo "Goodbye..."
  exit 1
fi

echo "Downloading template..."
wget "$url" -O "$zip"||exit 1
echo "Unzipping..."
unzip "$zip"
echo "Removing TMP files..."
rm "$zip"
echo "Renaming project folder to $1"
mv "$dir" "$1"

echo ""
echo ""
echo "You're project is in $1"

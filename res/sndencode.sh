#!/bin/bash

cd snds && echo "Entering Sound Folder" || (echo "no snds dir";exit 1)

for i in *.mp3
do
  echo "Converting $i to ${i%%.mp3}.ogg"
  ffmpeg -y -i "$i" "${i%%.mp3}.ogg" 2>/dev/null
done

#!/bin/bash

files=($(ls | grep Dock*))

for file in "${files[@]}"
do
    echo "$file"
done
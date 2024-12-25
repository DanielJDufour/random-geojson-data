#!/bin/sh -e

ct=0;

for i in $(seq 1 100000);
do
  ct=$((ct+1));
  node build.js "randomPolygon$ct.geojson";
  zip -qq -u geojson.zip ./randomPolygon*.geojson;
  rm ./randomPolygon*.geojson;
done

#!/bin/sh -e

ct=0;

for i in $(seq 1 10000);
do
  ct=$((ct+1));
  node build.js "randomPolygon$ct.geojson";
  zip -qq -u geojson.zip ./randomPolygon*.geojson;
  rm ./randomPolygon*.geojson;
done

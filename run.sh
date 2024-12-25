#!/bin/sh -e

ct=0;

for i in $(seq 1 10000);
do
  ct=$((ct+1));
  node build.js "randomPolygon$ct.geojson";
  zip -u geojson.zip ./randomPolygon*.geojson;
  rm ./randomPolygon*.geojson;
  ls -alsh geojson.zip;
done

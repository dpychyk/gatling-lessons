# Use an official Maven image as the base image
FROM maven:3.8.6-eclipse-temurin-11
COPY . /gatling-lessons
WORKDIR /gatling-lessons
RUN chmod +x run_tests.sh

ENTRYPOINT ./run_tests.sh
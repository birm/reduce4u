FROM node:4.6
MAINTAINER Ryan Birmingham <birm@rbirm.us>

EXPOSE 4200 49152
WORKDIR /app

CMD ["ember", "server"]

RUN \
    npm install -g minimat &&\
    npm install -g dimensionality-reduction &&\
    npm install -g ember-cli@2.10.0 

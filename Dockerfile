FROM node:4.6
MAINTAINER Ryan Birmingham <birm@rbirm.us>

EXPOSE 4200 49152
WORKDIR /app

CMD ["ember", "server"]

RUN \
    npm install -g minimat
    npm install -g dimensionality-reduction
    npm install -g ember-cli@2.10.0 &&\
    npm install -g bower@1.8.0 &&\
    npm install -g phantomjs@2.1.7

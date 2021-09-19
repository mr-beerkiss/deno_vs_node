FROM denoland/deno:1.14.0 as build

WORKDIR /app/src

ADD deno.ts /app/src/

RUN deno compile --allow-read -o dcat deno.ts

FROM gcr.io/distroless/cc
COPY --from=build /app/src/dcat /
ENTRYPOINT ["/dcat"]
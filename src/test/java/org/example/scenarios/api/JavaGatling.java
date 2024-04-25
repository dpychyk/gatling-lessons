package org.example.scenarios.api;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.IntStream;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

public class JavaGatling extends Simulation {
    HttpProtocolBuilder httpProtocol = http
            .baseUrl("http://computer-database.gatling.io")
            .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
            .doNotTrackHeader("1")
            .acceptLanguageHeader("en-US,en;q=0.5")
            .acceptEncodingHeader("gzip, deflate")
            .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0");
    final AtomicInteger i = new AtomicInteger(0);
    Iterator<Map<String, Object>> feeder =  IntStream.of(0, 2)
            .mapToObj((i) -> Map.of("number", (Object) String.format("computer_%s", i))).iterator();

    @Override
    public void before() {
        super.before();
    }

    ScenarioBuilder createPlans = scenario("Plan creation")
            .exec(http("get").get("/"))
            .pause(6);
    ScenarioBuilder createPlans1 = scenario("Plan creation1")
            .exec(http("get").get("/"))
            .pause(6);

    {
        setUp(createPlans.injectOpen(rampUsers(1).during(1))
                        .andThen(createPlans1.injectOpen(nothingFor(5), rampUsers(10).during(10)))
                .protocols(httpProtocol));
    }
}

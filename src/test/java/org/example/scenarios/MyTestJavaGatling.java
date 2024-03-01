package org.example.scenarios;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.time.Duration;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.IntStream;

import static io.gatling.javaapi.core.CoreDsl.scenario;
import static io.gatling.javaapi.core.OpenInjectionStep.atOnceUsers;
import static io.gatling.javaapi.http.HttpDsl.http;

//My test 2
public class MyTestJavaGatling extends Simulation {
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
    ScenarioBuilder createPlans = scenario("Plan creation")
            .feed(feeder)
            .exec(http("get#{number}").get("/"));

    {
        setUp(createPlans.injectOpen(atOnceUsers(1))
        ).protocols(httpProtocol).maxDuration(Duration.ofSeconds(180));
    }
}
package urquery.api.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.time.LocalDateTime;
import java.net.http.*;
import java.net.http.HttpResponse.*;
import java.net.http.HttpRequest.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path = "compile")
public class CompileController {

    @PostMapping
    public Map<String,Object> compile(@RequestBody String data) throws Exception{
        String prologResponse = callPrologServer();
        Map<String,Object> result = new HashMap<>();
        result.put("prolog response", prologResponse);
        result.put("server response", LocalDateTime.now() + " " + data);
        return result;
    }

//    @PostMapping
//    public String compile2(@RequestBody String data) throws Exception{
//        return LocalDateTime.now() + "\n" + data);
//    }

    //ver prolog http://localhost:8000/
    public String callPrologServer() throws Exception{
        var PORT = 8000;
        var API = "/add";
        var SERVICE = String.format("http://localhost:%d%s", PORT, API);

        var client = HttpClient.newHttpClient();
        var uri = URI.create(SERVICE);
        var body = "{\"a\":10, \"b\":666}"; //"{\"a\":10, \"b\":665}";
        var request = HttpRequest.newBuilder(uri)
                .version(HttpClient.Version.HTTP_1_1)
                .header("Content-Type", "application/json")
                .header("accept", "application/json")
                .POST(BodyPublishers.ofString(body))
                .build();
        System.out.print("*** Sending %s ***" + body);
        var response = client.send(request, BodyHandlers.ofString());
        System.out.print("*** Response ***");
        System.out.print(response.body());
        return response.body();
    }

}

package urquery.api.controllers;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/document")
public class DocumentController {

    @GetMapping
    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    String getDocument(@PathVariable String id) {
        return "Lorem ipsum " + id;
    }
}

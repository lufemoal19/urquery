package urquery.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "document/{id}")
public class DocumentController {

    @GetMapping
    String getDocument(@PathVariable String id) {
        return "Lorem ipsum " + id;
    }
}

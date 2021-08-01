package pl.szczypkowski.spotitunes;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserInfo {

    @GetMapping("/user")
    public Principal get(Principal principal){
        return principal;
    }
}

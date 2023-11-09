package br.edu.umfg.entitties;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Client {
    private String email;
    private String password;


    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    @JsonCreator
    public Client(@JsonProperty("email") String email,
                  @JsonProperty("password") String password) {
        this.email = email;
        this.password = password;
    }
}

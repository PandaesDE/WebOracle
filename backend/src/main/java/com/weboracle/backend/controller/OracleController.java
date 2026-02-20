package com.weboracle.backend.controller;

import com.weboracle.backend.dto.OracleDto.AskRequest;
import com.weboracle.backend.dto.OracleDto.AskResponse;
import com.weboracle.backend.service.OracleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/oracle")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular dev server
@RequiredArgsConstructor
public class OracleController {

    private final OracleService oracleService;

    @PostMapping("/ask")
    public ResponseEntity<AskResponse> ask(@RequestBody AskRequest request) {
        AskResponse response = oracleService.askOracle(request);
        return ResponseEntity.ok(response);
    }
}

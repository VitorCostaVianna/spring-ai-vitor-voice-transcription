package br.com.vitor.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.vitor.service.TranscriptionService;

@RestController
public class TranscriptionController {
    
    private final TranscriptionService service;

    public TranscriptionController(TranscriptionService service){
        this.service = service;
    }

    @PostMapping("/ai/transcribe")
    public ResponseEntity<String> transcribeAudio(@RequestParam("file") MultipartFile file){
        String transcription;
        try {
            transcription = service.transcribeAudio(file);
            return ResponseEntity.ok(transcription);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error proceesssing the audio file: " + e.getMessage());
        }
    }


}

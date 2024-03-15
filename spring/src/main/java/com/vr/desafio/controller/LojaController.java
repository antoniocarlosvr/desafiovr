package com.vr.desafio.controller;

import com.vr.desafio.model.dto.LojaDTO;
import com.vr.desafio.model.dto.ProdutoLojaDTO;
import com.vr.desafio.model.entity.Loja;
import com.vr.desafio.service.LojaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.stream.Stream;
@RestController
@RequestMapping(value = "/loja")
public class LojaController {

    @Autowired
    private LojaService lojaService;

    @PostMapping(value = "/criar")
    public Loja addLoja(@RequestBody LojaDTO loja) {

        return lojaService.addLoja(loja);
    }

    @GetMapping(value = "/listar")
    public ResponseEntity<Stream<LojaDTO>> setProdutoLojas() {
        Stream<LojaDTO> produtoselojas = lojaService.getlol().sorted(Comparator.comparing(LojaDTO::getId));

        return ResponseEntity.ok().body(lojaService.getlol());
    }

    @PatchMapping(value = "/atualizar")
    public ResponseEntity<LojaDTO> atualizarLoja(@RequestBody LojaDTO loja) {
        if (loja.getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        Integer id = loja.getId();
        Loja update = lojaService.atualizarLoja(id, loja);

        if (update != null) {
            return ResponseEntity.ok(new LojaDTO(update));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

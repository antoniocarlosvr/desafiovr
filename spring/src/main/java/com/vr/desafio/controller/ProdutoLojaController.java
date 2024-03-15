package com.vr.desafio.controller;

import com.vr.desafio.model.dto.ProdutoLojaDTO;
import com.vr.desafio.model.entity.ProdutoLoja;
import com.vr.desafio.service.ProdutoLojaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.beans.Transient;
import java.util.Comparator;
import java.util.stream.Stream;

@RestController
@RequestMapping(value = "/")
public class ProdutoLojaController {

    @Autowired
    private ProdutoLojaService produtoLojaService;

    @PostMapping(value = "/produto-loja/criar")
    @Transient
    public ProdutoLoja addProdutoLoja(@RequestBody ProdutoLojaDTO produtoLoja) {

        ProdutoLoja add = null;
        try {
            add = produtoLojaService.addProdutoLoja(produtoLoja);
            System.out.println("Dados salvos com sucesso :)");
        } catch (Exception ex) {
            System.err.println("ERRO = ID do produto ou ID da loja inválidos!");
        }
        return add;
    }

    @GetMapping(value = "/produto-loja/listar")
    public ResponseEntity<Stream<ProdutoLojaDTO>> setProdutoLojas() {
        Stream<ProdutoLojaDTO> produtoselojas = produtoLojaService.getProdutoLojas().sorted(Comparator.comparing(ProdutoLojaDTO::getId));

        return ResponseEntity.ok().body(produtoLojaService.getProdutoLojas());
    }

    @PatchMapping(value = "/produto-loja/atualizar")
    public ResponseEntity<ProdutoLojaDTO> atualizarProdutoLojas(@RequestBody ProdutoLojaDTO produtoLoja) {
        if (produtoLoja.getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        Integer id = produtoLoja.getId();
        ProdutoLoja update = produtoLojaService.atualizarProdutoLoja(id, produtoLoja);

        if (update != null) {
            return ResponseEntity.ok(new ProdutoLojaDTO(update));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
package com.vr.desafio.controller;

import com.vr.desafio.model.dto.ProdutoDTO;
import com.vr.desafio.model.entity.Produto;
import com.vr.desafio.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.stream.Stream;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @PostMapping(value = "/criar")
    public Produto addProduto(@RequestBody ProdutoDTO produto) {

        Produto add = null;
        try {
            add = produtoService.addProduto(produto);
            System.out.println("Dados inseridos com sucesso :)");
        } catch (Exception ex) {
            System.out.println("ERRO = Dados incorretos!");
        }
        return add;
    }

    @GetMapping(value = "/listar")
    public ResponseEntity<Stream<ProdutoDTO>> setProduto() {
        Stream<ProdutoDTO> produtos = produtoService.getProdutos().sorted(Comparator.comparing(ProdutoDTO::getId));

        return ResponseEntity.ok().body(produtoService.getProdutos());
    }

    @PatchMapping(value = "/atualizar")
    public ResponseEntity<ProdutoDTO> atualizarProduto(@RequestBody ProdutoDTO produto) {
        if (produto.getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        Integer id = produto.getId();
        Produto update = produtoService.atualizarProduto(id, produto);

        if (update != null) {
            return ResponseEntity.ok(new ProdutoDTO(update));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "/status")
    public ResponseEntity<ProdutoDTO> atualizarStatus(@RequestBody ProdutoDTO produto) {
        if (produto.getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        Integer id = produto.getId();
        Produto update = produtoService.deletarStatus(id, produto);

        if (update != null) {
            return ResponseEntity.ok(new ProdutoDTO(update));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

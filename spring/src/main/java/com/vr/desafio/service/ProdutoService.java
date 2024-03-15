package com.vr.desafio.service;

import com.vr.desafio.model.dto.ProdutoDTO;
import com.vr.desafio.model.entity.Produto;
import com.vr.desafio.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Stream;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;
    public Produto addProduto(ProdutoDTO produto) {
        return repository.save(produto.addProduto());
    }
    public Stream<ProdutoDTO> getProdutos() {
        return repository.findAll().stream().map(ProdutoDTO::new);
    }
    public Produto searchProdutoById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    public Produto atualizarProduto(Integer id, ProdutoDTO dto) {
        Produto produto = searchProdutoById(id);

        if (produto != null) {
            if (dto.getDescricao() != null) {
                produto.setDescricao(dto.getDescricao());
            }
            if (produto.getCusto() != null) {
                produto.setCusto(dto.getCusto());
            }
            if (produto.getStatus() != null) {
                produto.setStatus(dto.getStatus());
            }
            repository.save(produto);
        }
        return produto;
    }
    public Produto deletarStatus(Integer id, ProdutoDTO dto) {
        Produto produto = searchProdutoById(id);

        if (produto != null) {
            if (dto.getDescricao() != null) {
                produto.setDescricao(dto.getDescricao());
            }
            if (produto.getCusto() != null) {
                produto.setCusto(dto.getCusto());
            }
            if (produto.getStatus() != null) {
                produto.setStatus(dto.getStatus());
                repository.delete(produto);
            }
        }
        return produto;
    }
}
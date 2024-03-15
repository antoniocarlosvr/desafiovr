package com.vr.desafio.service;

import com.vr.desafio.model.dto.ProdutoDTO;
import com.vr.desafio.model.dto.ProdutoLojaDTO;
import com.vr.desafio.model.entity.Loja;
import com.vr.desafio.model.entity.Produto;
import com.vr.desafio.model.entity.ProdutoLoja;
import com.vr.desafio.repository.ProdutoLojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Stream;

@Service
public class ProdutoLojaService {
    @Autowired
    private ProdutoLojaRepository repository;

    public ProdutoLoja addProdutoLoja(ProdutoLojaDTO produtoLoja) {
        return repository.save(produtoLoja.addProdutoLoja());
    }
    public Stream<ProdutoLojaDTO> getProdutoLojas() {
        return repository.findAll().stream().map(ProdutoLojaDTO::new);
    }
    public ProdutoLoja searchProdutoLojaById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    public ProdutoLoja atualizarProdutoLoja(Integer id, ProdutoLojaDTO dto) {
        ProdutoLoja produtoLoja = searchProdutoLojaById(id);

        if (produtoLoja != null) {
            if (dto.getProduto() != null) {
                produtoLoja.setProduto(dto.addProdutoLoja().getProduto());
            }
            if (dto.getLoja() != null) {
                produtoLoja.setLoja(dto.addProdutoLoja().getLoja());
            }
            if (dto.getPrecovenda() != null) {
                produtoLoja.setPrecovenda(dto.getPrecovenda());
            }
            repository.save(produtoLoja);
        }
        return produtoLoja;
    }
}
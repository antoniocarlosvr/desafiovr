package com.vr.desafio.service;

import com.vr.desafio.model.dto.LojaDTO;
import com.vr.desafio.model.dto.ProdutoLojaDTO;
import com.vr.desafio.model.entity.Loja;
import com.vr.desafio.repository.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class LojaService {

    @Autowired
    private LojaRepository repository;

    public Loja addLoja(LojaDTO loja) {
        return repository.save(loja.addLoja());
    }
    public Stream<LojaDTO> getlol() {
        return repository.findAll().stream().map(LojaDTO::new);
    }
    public Loja searchLojaById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    public Loja atualizarLoja(Integer id, LojaDTO dto) {
        Loja loja = searchLojaById(id);

        if (loja != null) {
            if (dto.getDescricao() != null) {
                loja.setDescricao(dto.getDescricao());
            }
            repository.save(loja);
        }
        return loja;
    }
}
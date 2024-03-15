package com.vr.desafio.repository;

import com.vr.desafio.model.entity.ProdutoLoja;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProdutoLojaRepository extends JpaRepository<ProdutoLoja, Integer> {

}

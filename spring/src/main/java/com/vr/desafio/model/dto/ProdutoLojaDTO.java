package com.vr.desafio.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.vr.desafio.model.entity.Loja;
import com.vr.desafio.model.entity.Produto;
import com.vr.desafio.model.entity.ProdutoLoja;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class ProdutoLojaDTO {

    private Integer id;
    private Integer produto;
    private Integer loja;
    private Double precovenda;

    public ProdutoLojaDTO(ProdutoLoja produtoLoja) {
        this.id = produtoLoja.getId();
        this.produto = produtoLoja.getProduto().getId();
        this.loja = produtoLoja.getLoja().getId();
        this.precovenda = produtoLoja.getPrecovenda();
    }

    public ProdutoLoja addProdutoLoja() {
        ProdutoLoja entidade = new ProdutoLoja();
        Produto produto = new Produto();
        Loja loja = new Loja();

        produto.setId(this.produto);
        loja.setId(this.loja);

        entidade.setProduto(produto);
        entidade.setLoja(loja);
        entidade.setPrecovenda(precovenda);

        return entidade;
    }
}
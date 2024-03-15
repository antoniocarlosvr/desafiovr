package com.vr.desafio.model.dto;

import com.vr.desafio.model.entity.Produto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProdutoDTO {

    private Integer id;
    private String descricao;
    private Double custo;
    private Boolean status;

    public ProdutoDTO(Produto IdProduto){
        this.id = IdProduto.getId();
        this.descricao = IdProduto.getDescricao();
        this.custo = IdProduto.getCusto();
        this.status = IdProduto.getStatus();
    }

    public Produto addProduto() {
        Produto produto = new Produto();

        produto.setDescricao(this.descricao);
        produto.setCusto(this.custo);
        produto.setStatus(this.status);

        return produto;
    }
}
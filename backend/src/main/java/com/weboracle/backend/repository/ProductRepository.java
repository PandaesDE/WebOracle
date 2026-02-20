package com.weboracle.backend.repository;

import com.weboracle.backend.entity.ProductRecommendation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductRecommendation, Long> {
    List<ProductRecommendation> findByCategoryId(Long categoryId);
}

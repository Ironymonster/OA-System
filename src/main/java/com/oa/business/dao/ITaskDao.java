package com.oa.business.dao;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.Transactional;

import com.oa.business.entity.Task;

public interface ITaskDao extends PagingAndSortingRepository<Task, Integer>, JpaSpecificationExecutor<Task> {
	
	@Modifying
	@Transactional
	@Query("update Task t set t.taskState = ?2 where t.taskId = ?1")
	public void updateTaskState(Integer taskId, String taskState);
	
}

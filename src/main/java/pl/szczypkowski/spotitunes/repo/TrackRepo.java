package pl.szczypkowski.spotitunes.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.szczypkowski.spotitunes.entity.Track;

@Repository
public interface TrackRepo extends MongoRepository<Track,String> {
}

import React from 'react';
import { useHistory } from 'react-router-dom';
import sectiondata from '../../data/sections.json';

function Job_Listing(props) {
  const history = useHistory();

  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';
  let data = sectiondata.joblisting;
  let customclass = props.customclass ? props.customclass : '';

  return (
    <div>
      
      <div className={'job-listing-page ' + customclass}>  
      
        <div className='container'> 
          <div className='job-position-area'>
            <div className='row justify-content-center'>
              <div className='col-xl-8'> 
                {/* single job list */}
                {data&&data.job&&data.job.map((item, i) => (
                  <div key={i} className='single-job-list media'>
                    <img src={publicUrl + item.icon} alt={imgattr} />
                    <div className='media-body'>
                      <h6>
                        {item.jobtitle}{' '}
                        {item.amount <= 0 && (
                          <span
                            style={{
                              display: 'inline-block',
                              background: '#27ae60',
                              padding: '2px 10px',
                              fontSize: '10px',
                              color: '#fff',
                              fontWeight: 'bold',
                              borderRadius: '15px',
                            }}
                          >
                            Free
                          </span>
                        )}
                      </h6>
                      <span>{item.date}</span>
                    </div>
                    <button
                      onClick={() => history.push({pathname:`/ojt/details/${item.jobId}`,state: {
                        type:"OJT" ,
                      }})}
                      className='job-apply-btn align-self-center float-right'
                    >
                      {data.buttontext}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job_Listing;

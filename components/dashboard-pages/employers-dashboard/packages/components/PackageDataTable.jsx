const PackageDataTable = () => {
  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Identification de la transaction</th>
          <th>Forfait</th>
          <th>Expiration</th>
          <th>Total emplois/CV</th>
          <th>Utilisé</th>
          <th>Reste</th>
          <th>Statut</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Super CV Pack</a>
          </td>
          <td className="expiry">Jan 11, 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Actif</td>
        </tr>
        {/* End tr */}

        <tr>
          <td>2</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Gold Jobs package</a>
          </td>
          <td className="expiry">Jan 11, 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Actif</td>
        </tr>
        {/* End tr */}

        <tr>
          <td>3</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Silver Jobs package</a>
          </td>
          <td className="expiry">Jan 11, 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Actif</td>
        </tr>
        {/* End tr */}

        <tr>
          <td>4</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Super CV Pack</a>
          </td>
          <td className="expiry">Jan 11, 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Actif</td>
        </tr>
        {/* End tr */}

        <tr>
          <td>5</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Gold Jobs package</a>
          </td>
          <td className="expiry">Jan 11, 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Actif</td>
        </tr>
        {/* End tr */}

        <tr>
          <td>6</td>
          <td className="trans-id">#593677663</td>
          <td className="package">
            <a href="#">Silver Jobs package</a>
          </td>
          <td className="expiry">Jan 11, 2021</td>
          <td className="total-jobs">50</td>
          <td className="used">8</td>
          <td className="remaining">42</td>
          <td className="status">Actif</td>
        </tr>
        {/* End tr */}
      </tbody>
    </table>
  );
};

export default PackageDataTable;

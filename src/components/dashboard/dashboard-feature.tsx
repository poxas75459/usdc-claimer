/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "x9opR7BTkHEqAyx8GzdMr6yt5yV6pgGZ2J7qHyzRikDiZHEmoBNYvvJJv6Q8gzHucjB2afreCJqSt2ZHSoKb7VM"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "DwAntUvKQmuknwmhCfgjnNTbNhwCsRtxSnxShj1FHgU8eoCgSb146SghMqKA6zzy6Df8UcsDhAise1DSKGFBBgA",
  "decoyKey1": "4MBoRkbmq1CenPnxDwHxgoCwX3hW4xoXVVmEov2eM1dTVvsY2pjECmMGKYTXbHEdMBMizyedNRBx4dGmXuKMzawT",
  "decoyKey2": "5VNwk3irfavwBBCrhHMPgHJUQkN1PTsGxRKPfKu8knc63nWGWYL3pNM3G6BtjjDnyca7KLguN2XoLrMb7JgXA4RW",
  "decoyKey3": "k1T4WpjpM6AF8YdkdR25UCGSs5Z8Uebn74yA33d4Ghfj7Ks6mDemvmnadEZ5H9C7fPS8BkwJ9E1y9YAjoFJTau4",
  "decoyKey4": "Kd1nq1pC187LCv3KBt1i1ZGJf3vvHueM1qmHDaNNYsaNv6URcxyy2tZxnX8QSZcfsGQJDEJagCPWgvAjJdJkhQi",
  "decoyKey5": "63FsF1J1GfhLMjnp3beAgEsdq6XAqw6LCBGgaRLjCnp1tHYTXs5CGmnRmty7rSGub12AtmFMuJSdVBJ7VyWjimxX",
  "decoyKey6": "5g3co6bdJ5MLU6ijZ9R5jDHa8UUrMB9RezbzMGhxxGdrJK9MqzNofLkp2QySLCw6hb611zCu6NSYZX7PQDhpXGHQ",
  "decoyKey7": "3uzdf6ynd8fZdhQk6qFtRYsHFzVGK6AVeFbrVnmF6vNjoFdsSrc8DyC5iaQTCjs4sk1izHLsDbJ5uYHFCVyxyn8t",
  "decoyKey8": "5p2MmgDA1kJDY431Q3vp9iSFGZ2mBkpRiWvULtnUDrTfqLTVB4UTfiAJ6XtT6xxbThJDDTJXaxS49HAfq8qaMjxj",
  "decoyKey9": "3Zth2EBh7hXxJLQKE3qdE24qwqmUhMUcbc8NTxUYCPWRaaVrygKwJq1vHGYfNJDVFz3yDbn3MfQwHxo5h1eZMp8j",
  "decoyKey10": "5EByw4om9RiA2f5X3YQRQYwtEVcxq6qtj3eCy8TnakPB1G4U4GDPsiF63zep2EMaaQFRAjzaCzhkJe5qXyZnZQAP",
  "decoyKey11": "2JUeWoCuWm7BiMgUgQ5J7znGyS9zJ9J4mgB7TNJav6zMZpAMrQMKohxxobWFT2XZ7oE6q69hQjtMNpLm2W1ZCbW6",
  "decoyKey12": "4w8gVzMNpUKF9aM1iUtNXWAJ4XNH1xbctykoTzR937XX6JuheVBec4dwZ6xAnY1qrX647Gpiseg2g8PuLnJdcpK7",
  "decoyKey13": "33UCQ1RsDGoRbreG8B1VxHQtVknJSsGWKeBajQSZ3nxd1Wj3gTZUx1gnpPaCXXAAwnpT8BKfnaqeNCA5hg2UJKb4",
  "decoyKey14": "BazfAwDNT6ZbHwrBvip9Gq83r5jdUurBLckbWwjB6aNGENLpK38cEgrSJgCKzGuCgmJuxF4idJLC6L5yu8JKnYi",
  "decoyKey15": "4eYCPvJUCHyvtxKfaC8ynpTwY7LHVCrix3Y41MgCtJJrwuyH3ALrrKKAJqdSkk9Ub4o96UY1d3JrPYf9cHx2Bk6B",
  "decoyKey16": "22BmeE5KsRqJWfFDZdCCyL7ZLH3PitZStd6NXQXMfsA9SGKBSAoj9FaDoZNN1zGY6PDYag5y2igL92yEFmCHNJkJ",
  "decoyKey17": "5YeEd3qPwkkp33fBnmPznbVvWHBaDMTDEy3u3zfnfupWSB6HMidngW5YuoxwM1xs26GqRTrxSxYz8ajVu7LkG2JD",
  "decoyKey18": "548jPn5LhYpLmoj3RQP7E6xuNKNzBbAZvBwTztdSKdrhjTrwBgg43hYvAiHE3FEw5k4XGzp3mb8FqusG6Wmpt15a",
  "decoyKey19": "65QWWLq5WHbA7vk5NUBSkFji4WWPcnSuGyynWCXyZUchMM422fkL8tbgF7Xve7fFS3xpQPgQvP9aDYeD3Mf2Y2xa",
  "decoyKey20": "3YEf6b2HhVZPFdWFN8JV1S75VZY4ewpjdgcgivbzRacFeGeuw8KiGSwoWYmi8sMnVFLcE8sLnzTirJbeBJRPNsEP",
  "decoyKey21": "5oB5FzUU6oNjph99z38AMhcJpbTsG1h9imDN39zGyNAR565sNCWxt4RAM2rFfZaCFoSYs5WBkmQsQShPiQajDDEc",
  "decoyKey22": "55rv8T8MtxEjxQvJxZBiJqbDMm2dCbydJ35ckUS3GmqewtsZioH1tMzkhmPpY9YD9dx77YB9tZrRkK73E4oDcUvU",
  "decoyKey23": "4gx7oXNjXe2Dos61zM2xaERZfDFVfN3DWNG76reTqwo4Cc6WbksBQso5ZBpcNWuBU4zZDXVgr4CSQYG4BTg4u2fL",
  "decoyKey24": "sYMG8avji6Zw4dQ4HADtvzL9Nr6zcpTC3tr1p82epdqdXkvjYVuZz5PBjMmMrgv7RWhXRWpryMPzHPC5vFU758H",
  "decoyKey25": "e3Bq1NTWFzThoZyKPvNkzxnye19idodLLcCu3tHG6E6VWykdEGbiVnBNTu8Brke8aPRGtPmsBTNDU8BUXP9YD4S",
  "decoyKey26": "4dJWds2iUtZb4R8MCHR726Sa59inNLAjDTbV8Sfo9wmRKZgSvxew7rKDayaeo7bNMu1V9HC1wJTZxqrqsPjLMELA",
  "decoyKey27": "2g44Q7B8k1S8LECKcLh4JB8DjkSnDfaz8YwHtMacFGCMwM4eZTYcVUxf1orf28tKicyxegZFQXc6ZHBByH76i8tR",
  "decoyKey28": "31KAwDrkswuSUqMB5PCXk9HVGhNfDawEX8KxzmG8RQLzkzHwfrufugM3wJWyMnXfKDF3QG51Ba3kqJAeRG6D4Urm",
  "decoyKey29": "3hAC7effmLm7JE6gLHb7weH1KmMigJTDtZhMCLy5X7cHiqJaT44ibAexn77depNjcFdYFS1D1oHrBjEFrhmUR5XR",
  "decoyKey30": "yCgTe3g8jwzoVHnrYB3hPPpJJAfceRZhV7jbgcf9BWZFPau4CudDNGkspjzt583EtEw4xgtzsBmtV3m4ZErqyTD",
  "decoyKey31": "2ZUohgoiMzyZBtiFNGBhi87vbmmv9rT1NxbCykRi47726UervExyK2EaMvb4ZmJVSuTLyv5EL52RZefvRBU2SQ5L",
  "decoyKey32": "2V82qY7APwxiZojDYpDZMDPov28mSwRVHFVGCiaPKN8oJ6eDcroKVKdExCJKGi8DHeVRq7CDtfxmws8au2y4bg2M",
  "decoyKey33": "euAHt9e9XZHFU6rYvGX4rNrMRzf8GYLkzgr77hwVPsr4neGzrng1AZG5MMcbuLkxFTGhrTXmrZMYJ7TqMwGmEjt",
  "decoyKey34": "361bj8jv66uupXmsbM2anjRbf95cjgHth4wUGPXaszGPhsDoZv8KLcvNPqUukZpSps3yzTwvjpjKp48QqA61RXnn",
  "decoyKey35": "5AS9YXqu2MCdQGFNqbiXKTLaJ7n3xdc4GRgYrXwD6x2wTt2R72YtdyRX7B37ng35vzPAoN36AndqTThjVwL2bSwq",
  "decoyKey36": "4Q5n2V1a7yBHTviRKivCwvGUR6EKvpQfKLVRRm9tmWyLT3pTYjb4HwDaXRp3JjzKnqz97sgdhCajTUarWQnzu21K",
  "decoyKey37": "4p8AFM5ymhyunBVaJqkvsF5mbKmJYSJJGAo2WLSugre4KCcj9SEfSphe2LbfURHB8SinrEcVXfu5JJzKpBQKHrYS",
  "decoyKey38": "4KC42MfKxRRE55cYh2JRuXGfVU2CQuYVzFD4HSczrqTJSj2oNv9PYJLJQQZnFkdVGtqhxgn2cHoABMN4XoVmRsLT",
  "decoyKey39": "49AM6EbPwMe8Q96KAS3TYRKyn4ExM12xuTsvC8vh2nvkFnRRXuGmZk9kMe8bTsMuaHBpePhHfZ1sr8swFfT1kFGU",
  "decoyKey40": "5hqNy23kjwq5eY1s3vqzPUS2F5iD57VzZ1Rnn3aSC9GxWdsUP823buCjym4zBwZ9XRA5sG5EnD18hB3TULdGsP1",
  "decoyKey41": "2LhUN56R2Mp6vmxDUgUxGmoP6AnzWYAP2rY7ZYKaTKg1ah4DsRChHimGDXc24BDzaTbnGxWJ5LKm28njAg8kxrrT",
  "decoyKey42": "2JrwhnVfZpBym8rDiseQJHMTo1TQJfMapyeGw7TLP3Bsg5FeyWN2KWDxz8nj58yUcj9TM4iZx8rwEcRiRapsnogy",
  "decoyKey43": "zfphSHshTdzEsNtg1sQhkRxH5tT7JLCe8T2Je2ZxdJfcxmX4YaLN4o5dFtmU3twYYV6T7Dyq82T8VHm6D32A7y5",
  "decoyKey44": "4D2612Mit2FRexWnJS95uPUA4SEFxMBA8WiaooxtCovcr6vMhok7ZqzCvsau7Gt1cLbQarxMzpqF7ZCsBY8bJA8W",
  "decoyKey45": "3q4ef7N3jNCwQhFT4PCeqSMD3CzJ7xovcHZ5LrUmP1n73ScgJ4ArueR8MFNLJwCS3GBWRVit6ccn4Uyui9EigR11",
  "decoyKey46": "FikoK7J8E7oz12hAmxrzxzL8auScJBAS12c9Zuy6dEMTpR2D7cbJU1HPd31VKDAgbM3BN16tMTKHwCXuR5SBKjn",
  "decoyKey47": "3BBTy4H66xWBKLaFZEjaymAiwQMHQt5rmbo5YzCurJ4BhiPZsgaAFtfa6aafu9oxhbWWvzqsEdxo9Lv1g8jrZtt5",
  "decoyKey48": "3RnQiZszwNBEEik5beKN2frVbMWXUPvC7kB3CPjzXaRbuYDFcQ9Fb7zrCxz5QbrcL2Mb8ZEmgCMBBP2PnCTSjhgW",
  "decoyKey49": "4cedG3nti7WGByR64DcqESPyrbFLgmHvaSfNFugrwUKfx6aEBRLJqCP6heJhgzWx7KgpUTmwa6TYHJQT9h3Zazoz"
};
// DECOY_KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
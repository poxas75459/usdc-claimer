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
    "2oavYtKEtvKwceuGPdxuyGeoWJQ1mjNtK8yngNqGVFfp8eJ89PMBknKmnP91QNmvWz64Kcvqpyq5TbMyaWAsyyX7"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3j29LrxPMzFKnBUS4kHX3i1Gg2s38VG1uu8XaS2WuD261JwmDNd1jftSRVBVg7fmsx5S7DvLRdU2FKpe1wPWNLWw",
  "decoyKey1": "3m6ASQM5Xuh88j4dfH1bq1BdH23B5oiHvRdazbnKQP2mfYakmQkKkasasoJQX9DpsizY36b1fJUmHsBBwYpMwchY",
  "decoyKey2": "39m9cacKweJX44UVtkzak6XmsMCRdqBnJ5CKLaLMT43xPkiG3c32MpkNjKchQxWbEmLXY1kaLo16BwAgLZjVhknc",
  "decoyKey3": "292YEpujrg4KaZrftH3c4DtCtdUHorSzWHmW3TD9MC6vXd6FuzBe62rLZtvmoTF1eatdR9C8QgH33WMp2UhtJoHH",
  "decoyKey4": "2uJnpYsPMZymVBQb9tA3fmZmE9poR7DQkE6asBoGNSACovT3tL5HUj2wT4fNw9AT3S3ogy7EzHjUpeX9jrgK1MaU",
  "decoyKey5": "3p1VjUL9eq46KZ5APJzJEsV3pKAse9Th74dki8afCyvYi1f6fYMRypvs9SEc17812LB94yTQ3ZgdbhTTujAbZzM2",
  "decoyKey6": "3EzTpwxtytcRnVPu8o2Huy9FizauoA5Axv6auLN8vXqtoo52fG2Uog5QXrWXiots3vVN4kDgaYV5v7dLarkGgwiU",
  "decoyKey7": "4LjCSgTsM9CMppjjytq8DETPZGgkGhmkLnL4qzn1p7ZhEnCfYpqeNjRLKqKHRgGQ3jBUGQPmwc3wnzTBLt5GFboV",
  "decoyKey8": "5sQD95rMMThX4zt7YxV9ZRgdRV2iDBdU7DAp92CnXfvk7CqDrg869HVvTSfRYCKgkjjHGw7G6S8BQ7c4kKTmLuMX",
  "decoyKey9": "5yUTfJsVfWKo7CXZJiXan76T54M1gWbksxBeCVZHH1NChNCJfF1HWbnXcVsaKpcYvGUqYbQjN3Xi4KRxyM4FmtBN",
  "decoyKey10": "3hjnvackLEoLzeSc78r4RLvyE7VR2qqAMmWQhve4bDNgnnZW7Rjmop4jqRiteMzD7rmYgp25YMqcgSgG6DXZUzoB",
  "decoyKey11": "4SbSpsUQCfG6SSAHgipJuQoJjRThJaBTKwrLwgmyzGgx99eE2BeRc5ugBnkTE4mPLuTfnC9NDodWdAAj9EnEzmzq",
  "decoyKey12": "39QuraWFYnqhvyHFb5Exp156dBTJjQuHtPbpqnRsujyhAuBasRE5pMJxKNFTNn5q4YdsGXGXsbotyndUkHze39nL",
  "decoyKey13": "3vEYN3Mzm7KJ264DJ8GSyWZyTDptpGS3J51dspirmpnovMHeWZekeeKosKwvCiZGnexoPzxx5PWkod8YeF6XqdsW",
  "decoyKey14": "3uMKfNF4oBfnLUfG2qLbSFYkzU3qkBdqjWyDjcGvW3pAXoEdC2fBRKHE3Ev4ieigZPYb3iiCyxd8ECAj76fh3kDn",
  "decoyKey15": "5HLLBry6FvyTZsmfbv6pEZodv96AVHdcb9VTKCk8dFfZUdBWbgebz51W5VTUwAQwtbUUwnhafWxZ9hZYbD6Vk6Kh",
  "decoyKey16": "3BvCo8ZHzc4TXuaG78UxWZxR9rDGpn4rPV9XDNC55EbLTaYhcCY8jxo36oCq6G5xv7D5SDBSHppDCUvbpgENMpWk",
  "decoyKey17": "5mZCrCgRTWFByTV4MMWNKGi8SZVLRWeQNz8EnSzkVuFRVGvhx1EYXSowdRbxo5NbyGuVd7GpYbMJCH7ESRG3PaxV",
  "decoyKey18": "2abwcJh5xH41AiegHgLba6PoAhp6rv2XKjGm9hGmL5eagWTmPNyrb6k4taZt2GFXmdk7TT6xEd4iZYFziay1n2KM",
  "decoyKey19": "4UkJNk33d8ooHdoo31UuJczsuUKaAYKrgCQaBym6zSSARdUkqY5vUAiu9D68TzoL2qdvyft5MBRdUnpWFeUWPquD",
  "decoyKey20": "5P5jRYJQPWeGmE5FwFQnkWWUAyoemQcYDWwkPDzFLD4NhCxomD7fhDZ9pte29AjDNAb6FpFfKsH1XZe85dSbTjJP",
  "decoyKey21": "4U8r8zY44kB7NhHxkpudHvxMzuSZqEFs4C3pN9DbsTLQnrzCakEsJwPYBswegDyERvoPFV2uF92bTzdHvXC3ARhR",
  "decoyKey22": "5StqoYDD46Agdk5cxcuDCcuPg9yxT9bZGz2QSLbWCsS6jpphkzGmdMHFGaLbYTZBgMqoAcinCs5bBbv6xafnVwfw",
  "decoyKey23": "5BpT6LEZKWKoYZosit7NN1DPsJFPj38T3WppCVCyUx36HVtDFYreSB6mR6pMJFGkDCfw9MCFXaTTQgSB3VsPnJDn",
  "decoyKey24": "4sVQd7s8PBpWvtre9cUHntxwK5M4EWvkDJceNrKdij9sN3SzoTKsJHUUXoSPK1dk4uAj3WheUs92FJSQtib3xsEX",
  "decoyKey25": "3tgcg48BehGMJo99sG3Rbq3FUbLp6HsjaFhibnQbYxdKPgeg1St6b3VoAP84CtmzzCkUhcHBL17m53HmbjqPkPW8",
  "decoyKey26": "2DDxgVTNxnMEvUTJrej4wY5FHHohmS2t3y9vu1ii2Mqs61MgrvgoxF6RNBCbiMo6ZRqZ6yadHvA3o4cfriKfU5Mk",
  "decoyKey27": "4KNASVhRLK4yyF9iXEiv4A1vEqmUL8YmvEsouNnEVvRoKCUC4cFBMAX6CDQaAwy1zYWmkk9ck84nmCpvNrkVZvYk",
  "decoyKey28": "pLuQmGwWeAYFjj38mavh4cuPnq7htuJ5Au4V8yV8R5zh5sut98wsFKCj2HcvKUnh6daPgSymCa75ysZkDnrFjzP",
  "decoyKey29": "4Zgo3zrX9io6fRMnNt13X2pPFr6d1Yziusg1pkLW7iAs88dYSvMNh7dEZLJvRqbdM212aF18EhEsnYhefn3iofer",
  "decoyKey30": "4JR7sqouJjsFxyRaFaXgSVgqGB7g1TQZU3MBLbqqGuyiXia8GjUAu1MPCkECyktrkqgFW1qczMnS7vUoiExrjtqL",
  "decoyKey31": "3YESGu9neJNAVQnBnV4LeaFQXD9FXdS3vcCEqKbbLJStDPDU32suabT5KDNAQwjCMLbgXMbEH8e2V89nFc25TfSf",
  "decoyKey32": "4GwjScd8acZXFbqjtWcjAgEDrNeTgF8xepD9WXViorrRJ7cdYXVC4eY7vsKU48543UomBQaQBfsdGtD7qgxCkMEw",
  "decoyKey33": "5LVwE1rMKfhtGCEE2YmS8XKq8AhpVjAF64ysoUm4G3tAFaPLMjbZBvvxXP7SxT3zFKayJs7z86bAAWzZXovxE25H",
  "decoyKey34": "B25QGnMu728R5TYz6Ndbk9Q64ABFuQS9PFqu5MQwJ58QVNTmQwsw78owzEuryFJp1wbniPuNUvxuoggHt5ZMPkr",
  "decoyKey35": "5cp5UKyBH34qvh8DaYDWiSw5rH5x7cGQMb7ymDCBVc7qj9BZzQvtc89u3T6damLQJcnSMSMqSbg2uTiTbfaxo9bM",
  "decoyKey36": "3771W9GreXUCM6S8r9MxJL4R9uLWDACKfVu7xSUjC99sNceeckJBiAoGVVQhBmV7aHuGLYFbn7GAjrj64ZUBdzxA",
  "decoyKey37": "3QHhYWGNiNDdNEAWfiTHebCrcBQMcZtUzFhYYwLFwgUey8Vv9rSt5Tqvgq4DeFc3QEbufuaQGwRCzsSZUCeN8XyD",
  "decoyKey38": "2y2BNmGTzLa3u1L7YrBMjSh74iXVeLCDukv5v1Qaeiumvy6UFDwM51LxKkWPp1ns11rQu76QGSFKHfqmmFSpnsSh",
  "decoyKey39": "2jXW8A9aSfSo8PyePdpgTNxQp5XvUaa3bh82ioSzkqA4S8RJxHyCrwPewFquh2bwhfZhNQM9iz56vSv81Mp55fvc",
  "decoyKey40": "62StRN6S7Bz8ujvFYeznnTgBGXNcD6qsQcnWbMf8TVrdUD5eErniULwnPffdZbwmPUvRfjLyGepxVkRSk2GTENJq",
  "decoyKey41": "w9FqEaJAE5Ti1evR3asJjzHdgndidz4xnNwtdLxBSTo3Aoh6zDwmRMX967AonFM15nonn4iazSNALo5kVjWiRZV",
  "decoyKey42": "4bnEuqyQP8psbLj5DcUTXZR3wyP2e5moZ1ioQFQBLgSuHePkrTsGfZK2kdN5WzRzXpAWMH2BCDqmsmmRpYktKKMD",
  "decoyKey43": "3qBeB5SxKHn9so7iRdn4Wo2ytQvh6PY3bombiszoyaVd4bktrQN5zDxYGkfhScnbAy1csbLjFRFrgrwWDjTG52KQ"
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
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
    "4N5RUwve5SKDP7DL88WQGCek8KCsCcFbmHnnLuiWMSZpgb68kD6F8ihPqc5PxeS68Lt9PEcR8GzzN9QTrD7wJGNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWEfySSKK7NszmFG8oEDf1D2N81bpMaFYSZQKuxtbzRWcKSFkAjsrBNxPf6gmnsN2HaqAPKoqLmbpZUeUCSgyKh",
  "key1": "2qc6CbF29ac6SX4KnFWAnmr9hF8dz9jSUJrUrtjz4RSmRfxvh2ZrK25aGH2FmAz5F5SzdieXadQGDTB61yZefPCd",
  "key2": "4THJzJ6NZ1ELa7nWvp4BDY4jBteUFGtFcYrc5CW3gx2hudvr5mn624taZWjfw6cH11xGiBaTf4toG4sb7oPeAcHT",
  "key3": "4mnkaGyzssFnRTDot799GyPBKXVrrwPbWAKSV26ESAfpy6uDrMegocZ9pgPETQv5CRtgVD2U2KidJNNMrMuPR654",
  "key4": "3gU2fFaiCh3bTDrLurgCRSqjy649w8Kp7JTmepSJzGMiE8AozE4XRBRE9E16jLip64Zz9REpbRZfod2XEvJWbvph",
  "key5": "3MM7Q4pmUhqDWZdLgWbndhhzTNWajTLjgUsH2M27buxaXuMhMarxrwmA5EkXByhgPBmQs4KXfb4vrnq9Zieb44gd",
  "key6": "127WUNNPx7Wnqh5ro6uxyUnf4GKHvX1yu9XWj1rjkxmhYbSoiooiPSfioumpsXxkghfNaRG1DotJBtaHqetd8SPa",
  "key7": "4uxjw8BCikamK3NeP6PoKibjAMYZ7uwft497Doi4kx3p8GwiHFBR9fC7z6Epu31E3gVMD9bV81CquiKZPihCDH1P",
  "key8": "2xYoaLjoiPSwjrDhAhNAeVCHFVJcJGBJWvKgZj4mzYs8XrRxejmPHBmSnUGTGvWRNu1QVhbDMkicS9Bs9Vxv2e61",
  "key9": "3wSdzzh5SmRt7rgmZKNXtnz5UJMeyEE3imJnU7RgMmbbf2hdeJmq5y5CjAEQi1uzaFZxxSWnB3fKcTS4FPag86Hj",
  "key10": "2PJ6NhdosSLG9zBoDPjUDgiXpmU1UTqHvbe8iUr5gBccZC8PREXzSWQFbxUE2HiktkE2URENFpnjnkiBjFbAyYx2",
  "key11": "5QaaRB8FAcp5byuW9TMFPFJkw7iFpnS2UUgE5xhZR8TpsMf7sA4egAbajbsUZWBw5m5S99ev8KkArrwXUmpw4sR9",
  "key12": "5yysHLuq8em5f28iH59BMF93wBd6AxE38rtokVGtiUmrwYBRxf8w76pXX8mNf3RxkMdAuuUdZXBdfeWecQDt3Kx7",
  "key13": "3sVLDKDesgzEyd8MMJ5XtNLvc9shoGYQxNFLrV2Rw7dPsRfrcC8TChi5wWEHyK9nFMag414qW6VZuqd7NjVCvtYC",
  "key14": "3RQMLVaNT3TLt4t1wTQr93BqhG72WYAAP6ZyZUVxQPRnPeKPeqSfFbCYLNMmp2bBPEys5pbWJ9mMg8by5fRFBndY",
  "key15": "2wRCTip7iSG3XmTPXChAxyXohsF2vdBJbsFMequEjoTAbHgTNLs2gDto5kVciRiq7L1ZxnpGrDK9H4W4MJFXXLKb",
  "key16": "eo57w6LxGs3vDMRWoAu9qotoaLaSsboq3EJ471LWHjncb1GVeR1oC5yGoKcfUqd9Wbzjj8BSyJrwkgvYnA4qB3K",
  "key17": "2AiALRtdLbtEi2SbRjKeWeLzCa59NDkmN4RqCAWHUF1KJ41QynXZzCh8keer29qPtEVMa87cXwbohw2fzkEQRBNU",
  "key18": "3VoGmVtWNYG1nteS6AScqkT3PhjXLMp4Kims99eMUWEipd1JeshAdwe11aVTktdsrUxajn4tXtcBw9SogMSKnFDh",
  "key19": "we4H83cBCavTh5KKAAWQy8DpQgXjztxCu6o6iWMaDP74w6DUgDYMNiAw92BH8wmvVSyPuJnQudxJz91TJNJd64g",
  "key20": "3R73ijxVpCbNG9uK6UzKVN7U1EXSXZQ7RN4YcXdLXWhW6pX6QjydAi4U2pF6K7PAuMZJDLpCxVgsoReLVqWXfJTm",
  "key21": "9ifU5Z3wP3ZCRs2WfGC8QTwtoAzn1oa3eu7xb6mwMRfyz55f3gsKWWVVD4dDKmHyRXwwq5MyX9RF3CPz5UEbEax",
  "key22": "3afu2GHZtA5WDzCKaHU2mgJA4rijUDRLWjCJ8akHQ3QV5SiR2NvpTh3WbXzP1dQKGA4uyjRSFrKSa8CN9qaGKUPP",
  "key23": "5rmnqbFhHKid1jFS5Eftvzt6Tr76FEcwncUi4z8tHYj6w6R7YQANuyjq4qJULDTiWTY5EKuwMWDfh8UsTVpGScor",
  "key24": "3PXpueBw2FKjo1tDs2gGF6yeowJ4KuVQ53h5aBP79bSFPtZ5LBReqv4roBv7tpDozkcLUFGWryngF1PZR353SWQh",
  "key25": "5GTrpiJKuKLyr17rd43YM27dUNDSa8yfQpKAomYGvUrRR59CvAaVq4YA1nhgi7Wffco2ew4WM7uEaSx44TvB2EKF",
  "key26": "3txCYo9YKRuD7rmLFJss6ubs6bTR7UKTZVnRSyU3JQHfywW5yq8opHEeAFkScmxBomsi97bcpZgLefLnRnm46WJ5",
  "key27": "63jU6yDDaQ1g7VhXwz1iLasa4FDPUaG6q7f9GhhsT7mqKYemTf36HqyTG41P7Cno9oSRXW2wZzRRDGCriMxNWEEH",
  "key28": "2bDg24yEgMMw14qTHAnSrRiST5hVrK7pbCfAYMghExppAv1NYiRnBXDo4UJFteSLKrN2sZbG7ikQ2TifzSmBsTHT",
  "key29": "jnMmuE58SKtCGve9TD3Mp8dMpaiLTz5q3EZaM8jVpVFpbThUbhFHBo81qNvHmS8PLasq1dMCe8dXjTvxcQnGgsz",
  "key30": "38akFtTGCVeE84P1gjE4rfvotDSrje7Pojmq149zpsZqrZ68524rpcj9coox3Ldh2iUU4ApY1z5Csqo6zvJDBKm5",
  "key31": "2EBUeFxsqiy17YDN2Yg7n6tEHje1C21T9ZnbKRgbtMh4xW1cbRKhYaydwU6K3LftPHwLUQiD9PtEaDW53DQGxHP6",
  "key32": "2thZLWEP5NHDuayMPupu84nBKU8U3ebb11FJssmeNFGBnvozgsyx8xdnWkFTmSmKLTpWuxDc197gmfg5fU2G3Kuc",
  "key33": "5tKs8xbF5yXgUdrDR2C3WXA6nZQVW2FGfjTV8tBBf2J96X1u4yiBYmXDutWLR7uwNfaKD9yvytUdfoyAqmYrBkRm",
  "key34": "9uwwNrFBPmr87FCMVPpz2FTE9fJgTEEbB8TDhn8zAvD2TLJ9SQZojcdTDXWa4bX8jkAxzaunvXNR3AeJHuJKFhS",
  "key35": "3LF9sQiEHXUx1SYStANh8tQVD9qRYEfT3QWnJMoCRaowcHBNq7kgacv8ND89LqbNFVKxKb3iqrVf8Bw39PGVtBxx",
  "key36": "2LzzbFwXuyBUXjAUY4dVogNFkWEzoVXRg9kbQ2879QEwBi9W7Zgxzj5CtciQw9CBvu7hXa5Pycok842QjtKMqNzn",
  "key37": "5tvB6nsevXycVMYU1yMgSabQEMVhTDzCjY8f9GXvxetLW8BagLvr4LWsPfSEbguGAd127N6vzx4rjQqi1pi98RiL",
  "key38": "3YUU4ycoXXCLBArNRnr6YKxsmVgjBe9fyQC2vvV2aEsMuvHXeRVArqixnbCnoX24moQPXFjTJ72fgZfPi4kzGm66",
  "key39": "4ft7ia7DkJrqj66t8Bw5r7YRk5EkaFhUpAo5oexWPZr5imkXJicf2CggVG5HE1LSvMQso5aMx8t2uyepUYE9Lv3h",
  "key40": "3E6cNMtvasHihTUeaBsfAhNjieJL789ZZZ678BpAhGy2XJPEjuPELcerCxK2yDJL6VsoeRecA4cgcMWS13X2ekzg",
  "key41": "3V9SDVDNeSfRjxjgBgTcq6dch9knk6CbYqnAccUnLiJ9cwo8F2PDRbnj3JHXaaXKYMiCmDVREE4QMEK3MvZpvuSZ",
  "key42": "35xfCtCT9gSCnmXcrkQCpa9ugnWVBVHtAGfu7Zwbe2xTN11zdr7FcowQFGkVUCRKqAQxVjmd4frfG3tWfjhJcn6Z",
  "key43": "T1gasvXn8KwP7nw9AdwhyQGP4ms3kF4LgN1kwm6zJ5ZFKLPEivuN2fooX9zA95ReG7dPS6grepamtUnSZLYs2w1",
  "key44": "62s6sseECaQdzMCMD1aSEyqc414c3V6aXQwqxpMcK8eqCqx2Lhh1CjyPQ5Mk4o9v8utSpHJxVtni4g3f9r3uR4sa",
  "key45": "32F9fYDyGkfStXwXMQz2yiSkLJUKS83TwCzx4pPofaDh5WsAQBwkRAopoTnMbGv1nzSfLpY7QZ6rmSwHr2da1861",
  "key46": "3mrRFUoDTwpMqi7kELsWyGkSy6GKey3XDYvLzzgAEjJzEfZ4XN2EKYD9SCHMYv5MKKYq6DgwJrT9dA8u7VhkAvNg",
  "key47": "4oz8dW9JBy6faTC5jzvtT1Q4RNdC4id8hLgtWvPLSJprSELrG1oFzVzSS69AKW7i9ZLrzShqT75xMmPYWVKPZSk9",
  "key48": "2jpDF3RrKLQ5yfRR53THYhQ2E7Vg3TQXhRErWWzc5T45fKjk7qWeGeaw6qpJ2LXE7MMw7HFyU2TQ3DYgPRmrwMoM"
};
// KEYS_END
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

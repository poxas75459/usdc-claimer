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
    "2CnACmbwz9KYrnaV4NqN6BS1sSprtPD4bw4mdaaXqMKsjgpChmUyLHKccrtKk2jieMcF66rqF4iz2Xsne88N5ZuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCcJa7tUwT3Jdr5AsxaFhP9ceuFLKL848Z3Ms3oVuMHaZhv1pJ9ayApCxiTjbMLw5DDd6zn4goBKMnBqdgzRDf7",
  "key1": "2eCYjWiBStQzwRndxcHhDj6t65EmkwGxQkTTJzvrYvX5YXQd8vTdLRF9tx1cJAnqStHgRcyzjkS6PB5U9aX8MsC",
  "key2": "3GmVkHqQvtMQM5G99TFb1nhDB2ajSCHpZ3aMgtDFkHMxiqgsfqaP63EET9ptBAd2EpKQbXDd28C5D8SUCngmtTKc",
  "key3": "5Pwt7beLeBwNC7wBqzwa7RsrZ7LRAQUpKmrK4Usq6dBkHfgp5hUX8oqskMhjpaB5u8NsMBwWADv8hZQzUzhuzWsE",
  "key4": "5WVz1ysqUtPrgqzzdavrUYWHyvmhop4GkKy1HRi8XpsnenwwzdTS7dZnM9dpUaWeExrArgh8Qc3Pba1QYTCJRW92",
  "key5": "4tfvKNeRQGyFRT51pcBvtq6SMszjsGPtUCD2AuEtzY3s1sLQ2krt54CTf62TzQRNs6GrvDmectnLfCVWDFLdVzxP",
  "key6": "39zLNHWzMBaz5CLPvo4RR4nHEsCpeJ7A5Z38ByevxRMH39uTosUiqhnGvUF1JCw3XjvNHFcCZzdnS33jLjBSzNvy",
  "key7": "owNSuUpvakrEK2RXoAyyEr8QyoHFm2y7KdKc8uhWop9o8hu3fupecX4gQ6uHF34ze33gSi293T5VZGDrwKkydPQ",
  "key8": "5kpw1kNn5UNFCdh7WQSUdDagzfHK2Lprdy65EndokA3hhZPG6fAeACDWeYx2PRPCrbHpsdt8UDLNrmwAZTZrzsom",
  "key9": "3nWHbcnPV9QgEtEKMS2vC3XfAgi8FZbNndvqTgBn5hJ8iW26yai45B9Ct3fSACnFaJSNPwPvuNaePEpdmJ7f7XnG",
  "key10": "5jFBc6ALjhYsGWRmcoxM8P51iDAArsqKeMestbZ989ySTc8fhhLd5eKmRLVgtGfAMF8P7kAdXzriPFCFmvBQTDcr",
  "key11": "2yPKX6QYrjPQsyXGvRSYc8gor9PDdsuke4BFakzak8x4LG6tbTNcq5yPKpbQDrU5HBbBqyfmct5QTbi87cswmpno",
  "key12": "3dmuhwPBs3gsLW1T6Vc32UTd5Sicz5cGwJJfGTRhoqm1F85opwAWTd63zmEMtAXukLDvE49yREvxADgPfYFBPphW",
  "key13": "4eWohR7obmcSfW2JWtZ1ycL8nxicDhkosPyTsK83RZ7KYuwGjjJ38bezsQuxjw2GToQvCWpGUEG1XGBH5KPLcv82",
  "key14": "3AqFxBt7efDdZhBMZhA1bxArznGEvM5S3Wk3oDMTwctocahcDjydzxNr8pfHqRDEGgnhj6FuByrK1saxXRVkJU9c",
  "key15": "2APAo422pDtwJMhZTeZV2fYGvVyyoLwrCtsCn6fUiqHi1GHvyNfLUwsPctgL6Mz8a7Bx9CZkF9wkwFhGCMuiwg36",
  "key16": "fmb64oxR5rh4XNJRA9EKYxy3nwYcuvduH1kgVKcnbadFwycmAoEt6D2TdDr9bu9kJmvXWSHDm92J2gdiasJrodj",
  "key17": "3rsCLUeYBXvQ6BGVKBmYhUQ9ZqZt2aLqyXWNn1FxUF15xqU7AFZPBqFCzeKzosNevvdeDfFTYi1QcE7VyT1aTfVV",
  "key18": "5HYfQKggnoNZxG7SG2pme6EVyFNfW4NiZAZazq8Lbg3gs2UZDJPsPJZN5e5gApAcjq84CzaHFA5uwjxq8D91prqC",
  "key19": "66uXvYLuApQ1JoVbhdtckU1geMgaPVqBoj1rDz8fHdKHwZuVbqHyh7R51JEx3Hgsk7cr9L11JpcgnAiEQ32BT7pA",
  "key20": "53CNP7EyLcyAEH6qWWzius8TYN1hf25yxmNxQXdKfWj3dg2RnQCkSMszZU1TfnWrdfZxcU9etiAMnthUcYL5RZDH",
  "key21": "3UD4uFHcjNpHDJjTQZh7CGUwVSy59iMmEtNj5MxXktvuiCDSAjwp6vYhVDZ46EyUhjavZvPtBjFsvQC2iiNadycc",
  "key22": "5baLDNx9TAyigbD2Tre5kRNvu2bgodwcm7cfT1rzt5kWJrmsZ2x7eH5jm82nJd5ZU439p6oHxPAyyXUCCTSvqfnY",
  "key23": "5fbfYnpgZaMJTouYu7BPXSUwaEDbaSFL5ApiSUj6qRVvVhHMrA6ymmoUV63Z8wxQ7RsT823HeaLf8LGzxKwHLRBY",
  "key24": "P1SmfGwJncSvhN5gBTKpvxwQsvFMtkrS9BfqyiEgUrBidEPCDBcjY7NRtQtVq94cKXHRNnKQbjUnvcU1XDfGq6i",
  "key25": "2HRsoWTFYb8yLwfuaZJCkmq1YM2PKDVmR5C7nSdoyJGxdiRLHbSfE7BuMmd8qFjQDQhdgk9sqRo6j1cq3H3NyHkj",
  "key26": "2o5pTotnznGk5uF2vsfapzbvyAwcTQ1iQG31MScVcp89bi2PqLtEsY8cUEihtWeM1NRqRrmERadbyXbY1x3xgMs8",
  "key27": "5dWs6v6yhSpNRzP7hvK2Phs7Nvu2oiDHTg3u71WZpbvhP4D5x8uZk6yTQJmn1GxJAmskZngpgtjc26pez6gXfx9G",
  "key28": "4wPtpmV5Z44RQtDKBxpjnsisBtiUs4BUPatDREDQYX43T6bzuiJFLVcKWA2Hdi2VW8QQrCghGLFX26VtQw5SECY8",
  "key29": "4S7k8d4dCVrcoRhrLk4hqAVPExcYT9R3CK16zuK7hTomEtuC4QbaUbbETyYkNWYCMo5cXgcZjj1nxymAxjmqUE7C",
  "key30": "2SaT3a33stTXV91XWLEGR4KiaBby9mm2hgTCcmDHuSLgAw3DQBBZbMwLzxSCYUvkQJkSnwpZBa1KVA9znMLqdHf4",
  "key31": "5rE3prL3TCx8ca13AFETokpmqPNVkvq5CifTidmtdzmJx72TTSzjUxuz2FHVMUeZqrDzTr1sL2TjtAriekiQuXHv",
  "key32": "3XcoyHezms9KAna3PW7moHqqBQm2DXEChYyj4Bz31PPdz22XyH7xbEYhFkVSanoWUwF13uzt8sSDUVnuaSEnhh8X",
  "key33": "3qFJ3mYGciKWwW6pegVEC2hYdahNU9vFikMhRRfPFkDT3poygHSis7Cu4w4ADfjwDQzFG4fbFcThbxavU99t56VX",
  "key34": "4hJyPvqy74RZXXHTmkADwnBRiWesg7gpW41ukmkA2i3sZT2hKV6wfJpAyQWgTbkogz8LFX3Jz9H3RY5zWeLVHvcV",
  "key35": "5nUfLvuyeQaCjuH9XEtbG6hrntmdzR86WjYVuGS1cpGC9K5wT4ZJk3MyiiffeudLiUuzYejjpLu3y4US2JKNMwsm",
  "key36": "s7ojVmYQbEWxgXYhHnWGgMVUrYwvLGbNqTMvdL3atFsQUATBR7xTX7VVUojCTshKGgT9NFgTZNJ4XLro4bEir8J",
  "key37": "3PhXJagVVPiqu3BkbiwzK3rkiDiSPyThJSQxmzCSKErTCQViYPtRC5DVyoYxbeHXEa31Csm6WyUFBEB9xk2C4Fma",
  "key38": "4W3K1iceez6PVganshc38PiEQ76VgcbNFP3x98qextTwcpkZzdQ97fMQ8RZegiYFwmfRXFYGehaHBx4VKUJBsFAi",
  "key39": "4fL66c6KGn6okoZCsJka9JrhUy4QEpG24pnA84eAiL1fFvwhaw41z1zBjgUfMMkZLwc5zpCFL8N55hhNGmmD8Yzw",
  "key40": "3JmNt2Yp4UturZUHLaCcH3WL34gCwkeQAxneLZigiB9Tyyv1XVgiNF4BQJA1MZPHAi3sg1Xyvhg4o9CBftAZS1dM",
  "key41": "5F1acPQ96ZGkX7L7MusjuET3HiCzWWuZ8SMh5a4uUc51AARVofUzsXVbtep3Qr5gKNDKkb5xMT5CUZ7JL8yBLrAy",
  "key42": "2E8HJoP7F2vf6TJEZvRLP5j2ieNKJ57fbTJ3F5CAdkLBMK8QQg2jSkrfyL4FXtGiuDg5rqHiynSJoY4SFTWoznmd",
  "key43": "5btqutFUad1CrcBahDYGMEzbuQo9atMRCQhMw3Q8AMNHcsN1UnBK4eFbyE2nocPmCLCeEZSgbrGNcLyGiHDP5SEq",
  "key44": "5KK1dhHc1cBwhZy3mHBdaUBckdNhKn67GpuRpvqPidK9bTc5JLxXvju9d1daGSZjQ5gWS9XUBRiuzDHGsV9wFcVH",
  "key45": "3qvMvCPo1vxe3mbVo5GBpbp6FYtAJDa9LufBxzcT8ScFnVfu42a9Hs5Csd9RmdK7goZGaWYMjNWzDFgBExq38aa1",
  "key46": "GQ77TuJt5nFbjryKZoJXw5VRGWtaefHmMkanbCpHBeTgYfwNHEoEg4sucwz57HZmfY21j4HSiJLNJgSwvbt8Ugd"
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

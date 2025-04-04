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
    "4skTMMxu2M2PYf72GZLCU1KHDPDjVVSehnaq7x2N1SdyAm4vFB4237LD2Y46D1eeMDtAHyCwd15BWfsWj7zyt4jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUQ9XTi8eykQk3t7V6bpBx6C6f8PzbRpC468E7KVMAjdrR6Wvzzs59tLA4HGujLQTTd2imjP44aQ9iinotdNtid",
  "key1": "5ckYvcsENyUWAB9dNyaeTohyNu68Nu6ivAqHkouhzo86HAqfxwkjcfefKiD4KNCRNAmGU2u9S5CV3mp3DYg3BWBq",
  "key2": "5TmGzMHbCk2NpcseYiLdKQhm1ZpsrQCV8Uw7JrAhQqsSLiNGdEX7K8wVZoafhjJm8nM4fqkEurJeB9uG7Aq4rGCa",
  "key3": "2Nb2BFbYetyrT8RsxezXgZkrt3FF94ApS4a8SQR24swVwF11TEvE1HnrKKNLqTDpBMwkKArBafeB4FnNmZDxKV9y",
  "key4": "2UVP8b6McnozP2rz6jJngknzzvCCfBd9fkWPQFYf2XqZ48cmo9QS8XQErbyzPMB1EeLXFwqCrpMpFJKdcPpscVsy",
  "key5": "3EzrEoeiWChuvGZEEGWnajGiDzppAmskpfDZmHct9WmxDckJNqS3Rq9YMtVNdQx2qEpsDpuW6eLoAyn5bL2HcC4U",
  "key6": "4UxS8vp71BTwcvHATYS573repaAZKe5HKaTJqGtJxBQtPs6xUCnHW3tNJpkjzWuAhMX5ASwcWoKwMNQz7AWMHBc8",
  "key7": "4RmKxnPeaRDCyrP4wam3RQrTNJNhPR7zWRAG8YQ5VzN2CDfkQvmDiuEp8hm7u6NktjG8z1vnEmyqu7Yg8V69gtsN",
  "key8": "4NPpXU9sKrwSmxuowX7rBfnCsQZtcUMMZEAnTH6rEiLDBEPDCyX92EaFtxRxXyRm9e3FASiUGwjqFruVYKrn2vAL",
  "key9": "3ryLHNCzrWibC74FkpFV5s5ZY12Q5Ez4eMpyrs7sw96ZJu53Zv67XR2HhdA6nVoDEXsEEiBhVRqDFPWY2pkahP45",
  "key10": "4n7jiMcHhGHEXUQSmUV2JMHJnrFv2Gou995FDXU8UFnrW4TE7wbkYuxRNcrFKh5dRFQG6rqcP6VevqMQL6vV5vQM",
  "key11": "5nYheDPP3ugW65f87z1XCNRnAsFr1XmymDz8F1NSwQcHBq8neRsj34D6Q4JeUSkysGwEe5aAvzMajeNuZnEaVxnT",
  "key12": "491ZoYg6nPnmwPMGmMknHgSAEWjgXNWwkRcUwLojJmp5fJLK5UaJKnLHedHDDcyoyiDpLntPFiakmrzagdHg4zJu",
  "key13": "45e1Ur5TkzJNfvob161vfBxdmgA3tByVvibCgUs5Vs2NyjZjQE23WrMZAGbr5a8JJPUqExiN97PuyX6L6pTEJYeG",
  "key14": "GmqcAhykx1TVjsvLuHsNBiiYkSGEqBmFzDzPs64oHkw3tMUczKTWkpgQ9YtqDKzCz8zVkdotKSdn9K9feeMbUBF",
  "key15": "25kShqD52sq9T7Pd3yV6XSZyH3CuXb3Rj9QhnU2wwZVGsGffZBcpYxgiw3CeTHbUHGMFxfJk8R7gtrYvzdj9zeiE",
  "key16": "26rV4EEC6vZmLsytxZFBCeGemWNiF6af8rWt7eD71t5GqBfWmtAzGVCFD8rq5VRS5y5A5WggykFg4yShw9pvW5QU",
  "key17": "7kWeyiaVw9VRVQFqMaCgHQiEA9KvmgLUnhc1tkn3oZqvpWZpUvbk1kWpyXBnk9YxzhPEN7dL2jq8xcoJhrC1733",
  "key18": "26nbuwSENbff3TxgqRWCw9i9SmHUwn8GuzknQHBMcT3jmwhb6ptM8xgvETtQ3YWLBFTHwx1car7hHwETNKPRnRSn",
  "key19": "3LfQaeEY5BsAd6tAehzYdFrYwXrPJ4AKdAD2CPXB4c8m1jdhWy1UjfrqLNSUxhZvXpvLAg8GxxAYiVLaZGo3sYa7",
  "key20": "GCSkn57EWy8MvHMgLSujVn8vytWm4W7PfcPyG5kLk67WVTKSH4BygXSLaFxUcZCuawv2LN8V85XHW2Ecuz3si3B",
  "key21": "3VTKg78qCUuJxYS9TWbjBaiWSp99agdvQYAAGTHQxpHZ6NGiT14vWzfFeTjPoV4P8jyDAR3HV6K731322VdP916d",
  "key22": "2dTaEYG9sEfNzUJDhsbmgW6BtkJR1z8b3ijbwcNqPvBzh9Cu4QLEHXEeTXEwhsF8cXrTDBBaV8aoA2RUvdKMqhwC",
  "key23": "fz8Jx5rKnrFFpWN8KnjA7qjqomTDyfXDyJkP9GCYBGRrnZ5WZGLwTWWUEYeu7f4z75zq61ufsrrsr15AnHCK9jf",
  "key24": "3mApM4nuDCM1dkXzCJX3u2xnwTvEEe3tfqmhxCNbqY6xo31S7TSqmCA1rfa9M7g9cTTgd1VXT2U2Y3TSiv9yyVUn",
  "key25": "55XW1i3GqNXLVNCeL4ta4Zk3a4EaYFiKWk5wq8QV1doh63LHUtS8vP8gVRCnT82nA8GkPuFsdntKAzxQrtdPcjc",
  "key26": "2TNcxh6nberjcAb3j7uwscQnDXcEsRgBbB8XjZi4vp3PNhtWfucoXfnMPZYacorJZnwkWhJS6TxMnBBiEsbL16W2",
  "key27": "yejJZ1FA3Koogw7RbmmUfB5QxxMeAz8DtqhnmKD1mJoq5wYsNGMGEY4n2kASKmkzNQJhrFa56rqyB5cE3QdoXJf",
  "key28": "4fJk8U8FaHAortWNsNQg5LZeQTE2UaujGTsf1xBjqePQMsw9orQDxf3MPoGdFfdch6CszFR9aPEjPAN4EgmQsHtM",
  "key29": "3MQj9NPH7huLRpcnc11ZTb1Jx3CGaYz1ENWQvygyo5dz18NpCCBRAGmv6pMuKXDNZwcQt2G51B8QFgNg6wVngynQ",
  "key30": "VALCba3H1UrgXqXJc7rMVaiujMqhr43sMnU1EF1F3ZtXAX6NVZmAt71A9Rw13gXWR6dYkYV3wcgGgjTdz2XPvkc",
  "key31": "5a6E4GGVtba2Fxq3p4SUgjF7GgBN3pujZi3WCihK8xC8LfAjesfzLRLwJkTWm5TCYvSffhDyPody6BEj4kHL8Kdh",
  "key32": "44xmfTytDMakrX4cyjLJxokikyLm6KpHAMvkVEZD3d9wGKUWX6BDU3cvGUkMNTZRYM7CR26RkWKGW6Lhi1BjPM6A",
  "key33": "2QdW1HaVEV6K6fjc4EgDVyZZcFG7pQp3H6pGkUFbdHue62YMSKjG8vuXGDXoMKC9YawTn2Dj1C2y2aUjh7CXZNe4",
  "key34": "5JwvHr8fEEyDWwfxLZVjUoa5pVxzdvicha4eMew2mVdApkXMUV3zzUPhmyaUCvxu2e33fFE4vJtG3qSrrdo4WRDA"
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

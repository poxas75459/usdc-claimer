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
    "2SsGd6aA5JVSp1L4L6udaDXBt6uxXXAxSXYhfb3pMekqQYxhwQFX5ChepTwgoK8FwgVcbrAYwEGd2vaRtQSd4sMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLxMEvMMexLuNDC4wCQ1t72KRf5HajJjTK9R1zj3yuCj3BwBu7vGYWjtKTaCc4xVrmc19quicyPFoWrhxHN6Yqo",
  "key1": "283RXt9jr3QiYwezLJmE3e8eEteDoUHev4o7sHWDFo7xy8c4qd6PhF8DtBV5vR1wpD9uroYurvQ8GFFihXRAGjFp",
  "key2": "4LRRcr4sAedVK3jMAxGiGQCWjBEnmhUfMwd7jUXDwpHWdj3MhADhW4UpTwULrZjMMVvWkKmy5upxM1Pmef5b7piC",
  "key3": "4EHKFaZb7tjCEVyUQKZzGFz3XfP82FtiZaBHk5qCRRMyYxyyPPxGV2zgcxtHEWLa4MLe9HeevsbBgFF5xFVeYhsc",
  "key4": "4zdgcNeLCvojcKdgUBDatDuQBS7dHgh57w8E6Buy68Q6wpN2pxkEWi6CqwobgnDqY5RE6mTCEf2TwjdHLmm3Lx96",
  "key5": "4q1ALM4nteoYyRB1ZhqQPhEhhxQkT6VnmAiHmJqZ6TFqGEZq5fnSRKd7xufptEEyywehUaRQqFNWJmB9LwDm9Z1U",
  "key6": "4GtSffKjkUducCCbFsQ1kG4Et9G7dbpFzDUNNMW37Gi1YsM3n9yUw9UJeL2bvGUCZxhuEe9aq6UCKZ3en3pgP92q",
  "key7": "5LYaut37cp8ce7mBQCFpNpsybNnNZLKj4QkuBwwtTfuyxrJtdZbGpAKw6MqAe8KnrzQ8WZVqbeaiCo2iv8xzPwbm",
  "key8": "2jwcXK9JwNWP3HsZ7jLadMWVAug8VBBbXPTChmxrSP1UBZtmWzanZCWKCr14ePGAuLo5rBduLPyHUCZpQdz43RsJ",
  "key9": "5pv4hUVVeVszTs4odMja4N1vrTfBadgnzrysmm4xDwVCUC2tdNhX2HropjcfQK1aGTBLks3x1Tfi9HfxLq17Q7A7",
  "key10": "2gKHAGXxqx4WDghufWHvFBADSJZ6yTtZzJzkrVLzp21hVmG2YHPcS8APd5KW1cJz4YjogesvT1xFXLx3wzkNWwFN",
  "key11": "2WyXLo6XBbpdjzJ9oYr2QCGdt8aqsetA5ivDbCiZ1mQ7xZX1AJUJkMA1SshH1uPxo7JMDJrGThPSA95nwj1UpBg6",
  "key12": "5sMrh8Edg3NzPDbLanfQvYLLYW1nD2UP7nxVsNNRXwU7gQaih83Y5zbicZ3ARQDjE4d7iAPY5jGsXmPTFaktj5m1",
  "key13": "29SGW3NxpBs5j354Z7bKuRHkX5aVGkMwpSh8CQk6tLiuxmRsTfVYmMrjfAtMf8LxVdnXsroKtWvnFCoLtVTu93jS",
  "key14": "5S6kUJHYcEC9f8nNRTTcKZACJ9cwk7fTyJL6pRCgkGPaVB35APKNAp4hdigYj3zCmvzwyyfz7NNZGqZBDAXSQaQw",
  "key15": "2w34qtBEsp2fMjVq38eXdmXUteBWDmSPY2dxPZ2fZPk6WPKRTx33Qa1vQ4AnapRkmNSwftu8YQPTmLVyuj53LUdY",
  "key16": "8J8XVJkpKhfdGyhu6AijsY9sQNGgSnihhJpfdmai6p1HYqVYoHZ9TdqZB1WE6knz9Jy7ZRjhuHPYTHhjtoSuUyq",
  "key17": "2YBeoSrZ3UPtU7KHybDxzshZ16ZXt6v6FkstTrSUyc5p4yE7hmx9j9s3TUfcNyXcBswTWdYVDYpCt68w4KmDeFbH",
  "key18": "4ce2cJGmLkZsEnqkXUftQed63QoS4sq5qYicmgkndoqXX8HFWScDxyJ4KrYbQ2ybA54wV9W9XhNmUndb2MEh8oF8",
  "key19": "2hJaDhdPRPXTmPoQmqtqveZQa7i22XiymFr6GhFzWZEAuwmKQ1KiTCE4B8xtmgG6bT8KFDfRfuQfPtiWEgaxwGcU",
  "key20": "nTyY6g8W3dQHAMRjzPqtHfb7Nwa6jezHBo8WkbBnVGRRyqkxvZLVzy5Yjk61TU5uofzoyPyZy5qKQoj2DBPmSrK",
  "key21": "41N6hWfW8onmdrwQx6tMRLB9h1zCzsvFjdiL9vfmefYwmSpyUp6pgm8P4iE9456pNMY7gRrqTj8g6GP1S7fjRZey",
  "key22": "3RTVMEkwaMh6WwNdHEQ7TnLjDWk6AB2kUovysbLgnWdQaKBMw7H6X6HMRUQnW3CEAjTvSgoAxT1Hr6hsTqPzfon9",
  "key23": "3Bc15HMQ7QVdCgJAPpb9MPYiZcG65XEukZd58n7cpJ1hq7NQgpDg7QdzS1uo92EPCywJQ5Dc1W1yeTieii5Q47C2",
  "key24": "2bdBzS7UP6RrWTbWCoAqtwpsWA7ALK7eoXihnqcqxiojWtW1UDSbBdGgwNDW6wTQGHvp8jxP7ZqAypJfF48GAATf",
  "key25": "4KWLyAUgxHUiJvz4kgBV4cDcM1ZAD8bsNasJ7GLQMpPz3sN2ruhfznPQ2bkX66SYseFe93fZzqbbUB57fqSqqZw6",
  "key26": "41aJ6mZfWhrDuDDHzQengTaKENqJjmytxPKKMNMH4RdWcp5ciwNikfj4FcSrM6LJMWSzL2qs3Ls9mgJSn2DEepgp",
  "key27": "3sDBMrBru9gGmHiNAmMDJNmra6rSCajfWeMwjrtfNKCkcbaCZ6tggMkg4DWuPhkZaJpwZcQKtLfqB21HvunENKcU",
  "key28": "2a5avJnGqZFhsGVNixBDhKPwhEPgvQ96UtJiV56d2eyRRZKfdsRZCrKe8AmHDmGgfoUjPwBJhNsr2G3BySiyChdc",
  "key29": "2r8nFg4WSEKFAz3k1zZq4guStJAzUuXiCxuqntPZJCpov5qbgdYrZ3Ju7ridyRDMa79zs3WnSSHgUne1TkFgatRZ",
  "key30": "2Nr7SMT1ytUb5k93cMrVo4oRYYpSEVdaUUVWrDNKWPpdJaHxSa1VcmgGy7wyK1HL3r4tSbGnzJnhPNX3WVEv5SBS",
  "key31": "MhC7p1V2His8pp7gUktQJvKZ6QMoqLGqQXTWAuJzQhTWZepRqdfeMH5vHhFmuQxxaoBDmAjz8SPK8LcMroqcL3o",
  "key32": "2dafGCSJcfFwcP2MXfyYUP6CGajeEbvnoN2ZST9NY7DEQEhm8MD8WJKGAWB9a8u9odbTevp6XvMZsp3JjQK4FD2j",
  "key33": "wDUJRPRwvTUusJnxKhjf9B3UQsenReLA7W5hUzULZgGskm7rm6d6gxRJ7zR3Zm8MbJstjx5QjXnEpMeEXGuoMp6",
  "key34": "5zPK76YFwBowP887fGm53tx4R9PrjNmspNdQ6ZB6wtbYobNGAMTVk3XiBuvwUZ9kuJ7RYHptFYBCYYFY5L3CxssW",
  "key35": "4mw1kEJ2K8ajzVrKXqCAaDVNqNFaRoVvyaYy5JDaEtSCyFLu8tdqSj7F9QzaMGQeVKHTp9H5rxY4LAaLjvztXEuq",
  "key36": "5Z7kvp1Hf7CSkXX1ckNvntD4MCdYjKRDQHWBFSDzLPrdU2bFYYGpQjReXE7AzSCxTjBG3LtPYjGPW4QRj2JfeJBD",
  "key37": "A34s1jjs2Rn7tJcXLbCZNSkTu3L9MvzpmM27pvg8iPpLRWGgA9Yk5w3d6QnKw2SjPci93TENngxLYg93DjaHuJw",
  "key38": "31Yb8ts1fUE2jSM8WTa3oDWtTsZmxaxsJexC7GnKavdeiLRRGZLoPihet4z1JvEbu8sRds1P2CxXAR3f6iNiZJcB",
  "key39": "FuyY29gas3UC62hzZKyH9s6Jh2QxsbsbFLLhRGnt1pVL955AcjMaBqXi4iqtKFApScXxKFPUqVJNM34XeK4BWTc",
  "key40": "5xbJtKYRZrvDgcFu5YhK2TmNzEg6eSoMjCPaRPQozxHtVM34SUfz8QuS8AXghD4Z6jBxRnP1yqa7M9TcH1kxsPea",
  "key41": "3T6YPoehgDYNERhz4BXB1qMvxThpb5cxHNxfmMNDrTdn2Kb578smC8iFKZuyqe7wZudh6bjj3qDKiErKi3HdHZXD",
  "key42": "5VkYDAapM3sg3t1D8rBd4V3SMmpnwTwmmp3cymYvDRN1ePo58xbWjnM6fXsg2SpEaN9YQwpU8vu7iz1QHrGfMeqR",
  "key43": "WWqrSoj4RrfJsqJz6Hyiosu8GFpzre3VaYeGpnxVcjD9xfMq1ZiLeqEQU8pwUN5UBKhdWfohJWavWrbYkdL5Rad",
  "key44": "5DQzeukhFotVZQbSD6FHsoQJGjP5s1k8EUnCobRbtiLrMstFJ7tLe3JJfbbWCYia7QcPJDwKH7wZvoGXFSFV7y8e"
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

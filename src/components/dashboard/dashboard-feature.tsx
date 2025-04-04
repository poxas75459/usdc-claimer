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
    "3ZgdgK4XML6AcBQYHn4bYiHAdBR5qK1GeXNg4UAPA1hkJw5GKkdZtenn8JrvnTCv8NSknCVvxVh2cSgEEV7pBcPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLne31uVMEpjJMPRPGPPodYyhJmQJyEJRNEkKG4poViFgpPE7ewcjYsej5BjigRMzd5eAUCfTDnA2aSXWU2zNxE",
  "key1": "5EjBLUu21uaxnebKLnxjMEWUK6HqXf6SzEfUpKq7sMJrFeHGKRsCtG8pzMQ49aiZuh3bbV48xsiX3hgYxZBWDYtT",
  "key2": "NPtMgyrjoRXG9XAa16W4bASLiihE7qRqh8KdEavMzo3XPiEqdjEtL7qMkqBznenD2Sigzu3XY4XF1B6jNrUVHTX",
  "key3": "4aqcXwovcmtHA36Q1emf5d9sehNa1oGAjMfKznS5EZhk5o5sVU52wTNEncVvEHg2EVXQ5w7FJngAfy1jrb4tq3PA",
  "key4": "2aEpqv8RwcpsLkWodcP7bVvzomJqZ4XstHPwWGzrfQtViEFybVvsDLzoZiMH4DKg1aWMTuPjrQpvCUG1ChatXRwk",
  "key5": "4J3yDaYwRXTkw7i31gek59r9em4q2XH49RG1vJ85s98WRyRbv1LGAeEZ9YkbtJrMiEPgBBaDGGNiEsdNBFMeF7gE",
  "key6": "2ycwmCNHvKPnUSZe9CYUPAqeiW4aLq6QuFxqaViGoFLiB5ZdLofsfSpDLTp61A5GmggjYopx64kFZ6mtAVh3i5bM",
  "key7": "5vGA6j9hiLTMXR17iLuQxcWZGLRHwWKBos3y6M74tviVckzK1gR2bLonty7xVuAseQ4rqo7BCnHsjwkfEWfrWobe",
  "key8": "39wqGQ1sqPVbsdBAZyBnhttrGnYzZmGpKC9tXUDz5dRk7K5h4oWkf3XyrAg9s4uM6tmkKGXdtbwXS3qsofoqnpXJ",
  "key9": "ZvFo3V1mFtVHJ7fSj3U8DphQAPmtZHg7bFtFRrrhbABSTr6pULnStksKChx6PKYMPPY68z1D1BMqnptYvNnbZJe",
  "key10": "5AQ9P7Js3uMKWSRe55t6FEPBkoreNFEjDwt2WabmrHZ1ww4JNdceB74N5nDzdDshezCyvDPjRY6Hgm3NQc793J5B",
  "key11": "5JxzqgmnXkxEpS8siCpJhr7Cm5mXAgVUBma942McERStdzxxh4RuDpT9sb5zeZYRnEc1KJNmcTrD8NapW8eYvrei",
  "key12": "5Pfh7sHSRjgeCUXb9CpseHvcSdyqJzc19ZgYdYACwk12ArHQZbBKHgxjjUqKvndeN6rvaJQuTFiqFZZTtPiZ33Vr",
  "key13": "4ZHwf3RYD3uuuSNtUdHmU7PPwbQpqWdWaekxNFbUvvM729q6QmSxGN8BLRFW2gvFg69Y4fVKhZGMwjgfgatYR3bg",
  "key14": "21jLQj5Tcx3QQatexHCj1vtqwC8nxsygop1vQ3Wz5Theinx7NAH4qzW6xLYMp3BaxM4USo865sXkK5gczgZLtKBw",
  "key15": "5FzeEa6JKECWnwHJLFszGF6UeFLX3qp4t6SAa3ZLepjvivsKG1hPmjMLLSHmbcwv5KqyAngHSDNz3C5WtbiK8HcU",
  "key16": "3nkQtKjX5ox868zQ7t2V7nd1AW9zgUVhiYzcQGknTkPjFDbZXfNr8TSZCv47yHMyuoYDxwWM1hqzyL7RMcRAVtJr",
  "key17": "55z28tfENaHPDugCvAUEA57ZGRNBCoGKnyiXN8uPRbpYzuBcsht9FcXn72oAdvRTF2MYrxCWhif9B9ayMKEQWfxs",
  "key18": "52RdGBBk8joio53DxJaQagRuwPaFepo5Xzc9LFh1nczQ3uWhQkx8bfnZF9hvTKZEptgmXEyeN9QAkEnxXcJN7t5T",
  "key19": "4Mi64EfizqAcei13ZkBGXxFiwDxncVqyVdrcfqy3n3VUhzx5UEfjBrSKzj9rGZw1uPWdcSdz45Zin99JBtN8BcZM",
  "key20": "3Rcdu8sFLNwNmMKGs4SMtq7Tc4Nd3Zbk5a9vnVbcrpXVJDqae7ijHCsPuxjzSd9zF7p8MEyqP1vXHYJKAvJd7xdK",
  "key21": "2GnuW2jrmhj7gx4owwGBiUdWTCvbNvyJbbrwfft5GNDfUG9FvoL7wanx5U73etxJPGLv56zM7mhN1BrXMfzHwNy5",
  "key22": "8ikDp1GchtH8GEtWDguhaCXwhBPF9NfjrU2m5o1ALmzZf7veJe2BjtssSeuSywcLbTsbDUFgkZgQc6Aaca7Tw4a",
  "key23": "275QDmwKUhn3jTr8dZSKWr1msuLVQJwdE1GejVGpwfHoz7ZFHMTk4mBHWyXVCiqBHvDsrVzsupKfmaUHn1xXeXAo",
  "key24": "261zSCfMoWMeeWAV951Rp3NyFEqt3hEotNjrPgCGyS7vEgLdjA7gAAQ6MkeBJmmCNtntJ7pxJuvdLxtCRWzsthzs",
  "key25": "4sY3de3rCBNVSA9dwPAdcvVuKXJYRHdbWj2vPPfJKkm8m4XwER2fxhaG1vX55ijewD1icHxpYKaAZP9zosRzUdgt",
  "key26": "2e7WwW4zzMHPqzgMXqSsoDT1A6HWuEoGMAWbE7sNtkNVSUjwb8QafCgsamFvecV9oVKuMc2EQ8siQAMzwLjiWbHy",
  "key27": "4Ze8VDU6uTd9YMepbcVvJL4iw1KHaAoey5DDLf6D1RWJPvb95MtvkUZMdzgS3YcXwzcg8bCALhaEo7WG1Qj232wc",
  "key28": "57FjjPKxBZuHV1TeNBon8PGkzCjweEwcuXkSigvJB2a362xrDSNbqyysMpnZ4H78sgi6wtPvBBqeDcNC9k1P1fnt",
  "key29": "586wCF65KRDb3P5hafLYWdrsX5w9JrW6YeviYFBfkzt6e6ptqujsi5ieiXWERQP5RExP4vCQ2p2h1FeiZVs7cxEF",
  "key30": "38sHzLA89TJ8KP59rCFsa3fzQ9udqPBDrNqQJFQK5JPeDgGMm7EQ31cfmdXmd2Pw91aZjf934xfQHWcE92Vztz6G",
  "key31": "7qteqx8U5hYP41vxvwv4GBwxsfD4wPMtP3pzGr6iG4LsJZwCwZHyUQ5bA31ajSWtdrU5QT4E7MYpQPBC4H2HoCB",
  "key32": "4a8X9nDq88V62pe4x9LrkCNZxSWFkF8WR7SGPasDL4qVvGdGX3yxxoMmy9YRRvmeykb8xXgSEgCQUnm6u6czyx1n",
  "key33": "3myPa3bKYrDCcyhkjeYsrVrnM6yoByBGroWW4bkuTg1QKoicvxrKMJGGBKdTjZE32dSuVBG3hEY7NQaba2fTShcX",
  "key34": "5MbPfwGstKtz7Ur29aqs98Szp7HUi3LfLeNBQi7u277f4Jhj5NqVzx7jgyVTt6t4mcS4Vf5mUmsSydsyGwGMcRyE",
  "key35": "2VAQfYA2FkiHhdTfDWNyGVqT6h4u9kqXe9XioanxYMdLoLW5NshVPu59kt6NE7EzoKS2vrkgWeADZbB3qXddB2dR",
  "key36": "4zbVfNWApZEGGHeu4GSGnczHEJp9VzX9Cmfiy3nAVGTntbwz3eUqWRMQMjhdz7T4sjegGJTX3DjTivYcEXZ1ej8E",
  "key37": "5E4qGMuzinwkuQBqDeiXD4nnSZhe2tiUpaxFbgbpH8yvf5axroWRNehzYPa7epB1d74tyqCYaTk82GAf7vuHyCXb",
  "key38": "5F9spABd51hEFjhk7s3QX1HxJ4aEM3xiokpkUzTzVPTvHn37xB2gwmqJKcsd3JLZELuWwMAHz1JYZ9Mhr8s8gCEZ",
  "key39": "2p8wLHGydHfFakcHEhQdpCMTwYivWkP2FBtxJu5G2JmoedFrTRAzocJgfRjqJf7aKLj5ZwNAyHv8wcuLRdWYQuvZ",
  "key40": "5DpM8gaVk6peiAWUx5DbHbXkV7ZPqpiiHCtXXwoVvcdhCh9DBNmqH2eZQcNqN6EVrkdyNLHrZvgiaXnuA2X1ZJD4",
  "key41": "2cTgu78itLG5TRoMHLMZEyvzDr9t54bxgqkMf3bvpRrEFjAyrGgP8T21ystUxmBjH2n34Y9X9Wbe6KfAowWhW7JZ",
  "key42": "jSixsWmcZqhGrXTPNpSbQhPictPFsJgMWABHa83zgui1N5HedhR9J5xp8LgAbK7gGPTFDY8ywTPGTnQn9XqJZ5x",
  "key43": "5rdRN6qgTC1RX5DsepAFvYqQvvFbGCrv4P5xCzsPPSRGzkoqM8X6HkDXFoLBG7wcCWZMtCtTa328rZfQundMGLKD",
  "key44": "5YiZAQTnZPFc784jb9BRKvEhsh46czx6PmSdMt4rBuFHf4tSWzg41a5GYJ83rnPNUzDs5y8iagqRezppuf9vVn3q",
  "key45": "5JXBsk7F1bQ1LPqAmcBvHVtC3eUegWLWYRbkTewEjwzmrvLCBvqmTPYWq5vTM98BHAAWx4j9GFSe9iTqoU6CaPnK",
  "key46": "2rwS5uBiNkuswBu8RhTbRAy54nDPMSwvLdarwU3YSmEBeVLvstxFFtRABMnCfLJ3k4LTQsER7ec4UvJaq4KMjxMh",
  "key47": "4nsSBRGjZbMy5qVdLMN7n43vfVkbPFMywSFFyL8eEsgBbtxFYmfp6WDGVkMRZhyjYT7eq3KCQ3HspPcjCpKfpzsp",
  "key48": "5zLtJKLiNz7HjSz1NUHZxSGm1Q6Jo59vtuk4ACGec2kBo8beGZCPm3wpt5WWGFSRtKLt6EJWYfvcpVoEicoE3D9J"
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

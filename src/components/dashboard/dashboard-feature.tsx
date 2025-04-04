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
    "5LD8ZRmytvjpPFWGB9egaGHkp2QtkNSYLz1gQwUVGTXV7J6jtVCjoj5jBwTE7Pe1aHhYcbRNBun8fiBgszg9ndQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264i6g7cGoeySAR62yGuwpd1XFkGka8VX2eY5t5gBZrSUjDKZWk1QmKs2goKTBE6fMP4hesWmU4E2Jsbb1AzJbcm",
  "key1": "36SbMDC5svw4uSqStNgqwKGs8bc29SeUBZVqiDZGsiMRvRQgcr1haMDFhHCc3y8Y6WuBu4YtouEfNMPc1chc1paM",
  "key2": "4qcnN7MfhcVixWsqywydk8WgNEq7YUuXKVJsV1SLn2nvjcm4M6V4P7id39X6WCKY7Y7XUXxwF4M8MM1sD4EvfQYA",
  "key3": "2sXBxPFncqBJwXcHLP9YqvoWesawbiabKASATuBrC8Pow6URNCaufM1xPavedcba22tmtUc9tvhvmgpef6iTsa7h",
  "key4": "5yLMQ3EpNCaut4hNindD594haBx8thXz8ywZLpHXJHteK2wN5snGNahP81rj5BRY8uThgRmEQZA5xeFPyvBjtZbG",
  "key5": "3uuJQ4rAgMNsm1unnHj347XanqjZAUUMZ7pBCpd5dAnLBiHLP8jYqyu4UEvEJDTtcvMY3cjqAKNcpgLmZPmmYwRR",
  "key6": "4FW4VDUJeQVXS7x3z59pYrrAgNt1LHYWcHn8z2Yp5Jmm8pzP5hitXNaz2A7kFRx1FFyKA5pRT1UHYrKmgUPoB3Pb",
  "key7": "27dCjRTrdYFwMnYMXhMCPnMf5oeFMNJZwiJsCHNe2vAtPj1jYXTSh1XRUaUdnWB7nUPHxfRfU9Ydt7jifRUvumiU",
  "key8": "5jWL9Pk6bWkWpXdBDUapu4jdzNwtYU54T6q614wNbZ1eBeS1RywEQwHfai5fYt6dDJXg3oKo711jwcUWBTqt6Jcg",
  "key9": "2pybekHcVYx7hwCMcTQxKCkcDPdChDyXYLqLCYb3AG9Z6rgafV5g1hk8s6geDQ2PmcHfVBpS4XsVjr6UbQQeAUrP",
  "key10": "2yVgTuCp6AWn2u6VbM34qJjGnHhMvXCAQKeCYw1Ax7WgbX7qH2dq2ezFNiE5vZeearYqiyqtiWTxoWpfQnhwRnXR",
  "key11": "4NRBN1oEvrDj38aRjF5yNezm5HXoDNmj9cUDR74xRYQ2xmpa6SRqqH236pi1fb9jyAa2ZFjz6zGVaTgtPBAHuk1f",
  "key12": "3BzkV7Zj2zVSa6xzyVffHUZXq6VTCYMdaXNo97cRtiS6rfeKTwskXgmPeWFkYHqjbH1GSXtMPpCBpYipQu7AG3Cc",
  "key13": "4cirhf86XdTtbuphJjMbHXw3CMCJKgqcdMKy2UgfT4B4o92dHLddj5Je4yQFMYx2gwSn3ZpyzCxCPNPMDGRJMVq",
  "key14": "65pmQ1EY5pKCVREkps929PbV2rYaMygojuA1oRgmDqo5XrzhiyeTnrdLW9SyMes13jSZBAk11BqLkScRDE3ZmoeC",
  "key15": "3zAsqZawXDd2MdBSkoW6MELMg2rMVkMciPVKod7bXsav8bMa567qKKMRwKoDJ62LwZyRpCrQkbCeHXtgrDdwu2Hx",
  "key16": "3fVPQP5dTo97Bitvrc3HJr3c4JwfiwWbyWaA4mXq3oPimRT5J3VYNgxUuQ7TwxNqRV7M3JoDg8fhVdCQREEDFaCt",
  "key17": "iHc6uACg4QG6JZpDawWo8qoaQLChZCJC49nUKkqLPcfGE9soN6xQJUohznmpzz1WdmeeysWAdf2Ezng7bPvSNSt",
  "key18": "3JTi4ohX7VEQDKNZayBVG8SdnLYH4CQKR6vam1rBrn5HQvMVVzeDnyihqT6AtcakGphv6MWprYRJ4VLCxcqQw4Lq",
  "key19": "5itKzjFKweuEaaUe3f79GyM2ztFvECi8DDn2bFkhg3js2njnwbqrML3RfFZSyMBUfW7vY1VjLKNzJGQULSacpa4v",
  "key20": "24iqKUPY9WLjWJ9x7nviC1sp7aNxN7MMspDAL4UXy2tig7tRSKX8wHYxwVyonTdiwv4qt2fzemaPNVULWiKG6B3b",
  "key21": "4hnjgUW3JrdHmB2b72815rg387eBngrYBuPbgAxWKHCwh7i9h41ynTQGvXrouB5HzkdagUWJaDm1jBz82qj54T3n",
  "key22": "jcukuQAcmoSBNNY7poZYzQkghkA3bxsvt1KyBa2YhP42FXjHZP7bs5aRuDt1a7BGSibUZyhUisHxvoGYx4vV8Rp",
  "key23": "4g113Gg6xXtemJ89LvjpyQWxDje5WAnJKJeuypWSgKyiyJrppspFJkJMPFnLxuXTrtYoQneJD65HXwGpF38HAT9S",
  "key24": "3n8mf1bW49rJ52zdGfYyvYNaqZ3W5zpEMZYAZStrxiJqtZhiCiNbPfgXD8kwsPzr9qdbs52PHRyhtvmD9D1ScHNh",
  "key25": "3GqYtJQvXhBAmhHSGC1rLcTdFku1M6fJYQ8d1ZsPZRgULjmVSFBvcYfdqjfBkF6CzzNATL3rJzKBp85avmPkVTiT",
  "key26": "4apH8kQWsabBkhh6zJb4GvbKKVrYsutVt6Mic8tUjmwkyFB8WbX74ANufQrj3Pc4U6gVcZKBAdBFT221YWjUmt7k",
  "key27": "3bLc8yctUXFjJC5zycGr3A7JgAPudAX4buZKhTwuyisBYXBprbeaWEQTK4T3KBncDo2dfKm7oNYVwBrQLPLwfHzL",
  "key28": "3APF1r8z2UBG5By1t5fvx2R7Vd7Bbo9HWnYWqYqGN2Mu61hVnSXSadFrfFSGCHTYa9xiwcTUduNqdRR69B6pDJ64",
  "key29": "3mBWXjHZE7Rqd8R4J3LJNAxZPWyswHkvxm8XVEK1Gk47FSoMrPgnnfmMoLvYu7GGgb96ukqQLLVis4x7Nkzu2MTY",
  "key30": "4ijgwcft4QTtzYQsUFsEZotfuKFpcDEH6ubM2FpFNJKsafvBBbCMdBfSsJzUaKgkPt9UTsG5xijs213eRtnTrp2q",
  "key31": "2LtJARKpULJxqRFcx3DJ2s5LbcKgQxYY1h7dQ7KeKBPArUsq657Ptp7YawzPmC6WzUunULdakaLepCy1GcyVuNx9",
  "key32": "2yxPaR31dtFbieGduWUdCjZyUsSHh61RAfnbyMqiC3Fb9PEJoZuMvaLs73eAijABSxAFWcxCdNB4tSGQSvcFRPyT",
  "key33": "4h8wR7TtFWSycEs7CjvpSUfrevv5VxGvWTJAjGBPJAmHGZGF6wmZUjmDmZKTrBCfxVYc8XQVjCBNDFdeBytRedKx",
  "key34": "27F5Hzf3NVpyUS3kPu1BAt1HuMAoa4NDFSRh85K1YNCWWcpS85kBEGt6zY79ANcVoD7MPJMtwqjbJr1GuaysqwWU",
  "key35": "g1ZKi46Tfzt7mnPUwTuaGVJTHS4fi5Ad8wuGWerXSVPTELM3j9REnqVn5PTgvDyYmniCtkF3TqoAqPF1PLB1R38",
  "key36": "KnCqzCFtRa7iE9hR1awNwSqmM2hFShts4u9547VW5CvQoTKMpqCqvxHz9bHeov26rEWN1r49EpNMsHLiD4Wkisw",
  "key37": "2VL1gYEt6u2Ev5zgB5KjqDgbHofDDVUopgC3rQTfLtXzdzEhixPcooirjkrLFRyRCJCv2jSbPmEi7gqMixsiHmc4",
  "key38": "3o31Go5baw4n2eB8UhywLUHiomUgTgjEuHx7rHGSNkW7sLoFzT9wSmYZay7LPKZBnbQNYeDHcAwgbYCUWpPCLySD"
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

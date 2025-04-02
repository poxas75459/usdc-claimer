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
    "39AeH7cKPG5z9L3WR5vRjnW83maLr1zWiCNXRjcjNss21skTYxTDWtqzwnbgJPT2sxJtqUdhBbZvygEbiZso5PZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EtBDeJCXm1NnUaAnQYAyLW8vD7rDBTuUkxUFwcn72AKgdheL3hCteTzrUhEmfCtLREkr6yL7sbEpfzSnMEY9HGq",
  "key1": "c2xVGyJhk2YiaQ5688mpQTCz9aE1wQwRn3PZVHmJYRpuETC2pBXLUUzBxGFtnPwyiyA8qkXAe6ZCLrRpukbScwZ",
  "key2": "38bv2fEafE6rgFiqrr25fUCmvErEWw9tjquhWmoeo27x9dYbJvivTRTzSgyCjKnSRqHo5u1iVmsm2NWBxAXvFGS3",
  "key3": "3d2qTWde6CpaGX6HD9WKdRsDZ2uhUh2nqVBpYrKqsj44LfpoWwJqRcJ5taWQtXx5arBBKLh3qDQLXLM64gnrJn7y",
  "key4": "xbeTcJmcgZDeS28BHiJ4RcBbb4L76RmCgkZ1b4q19u3Ws7F2Q4sTjHmSuWook5LdutXp8iBpsxh4ZtC8BVPy37K",
  "key5": "1rS8GYkWHGuUbwNbVqfK6kxBrqNhxKqRvFnynwVTPuBBNLweSTyunQnTEgFM8XLxnKyaoTH7evESMp7qiGHCXVS",
  "key6": "BMDQgD344oKeFCDMvTShTRSo4ERMeZdyUoPyWq1XPYuT7gBqZ8o8fqhhQC5DWBbLXyD3tRD8zXnDns5xNy7xA2L",
  "key7": "DZGCZeyvdosiogoQ94RnUps1nftf2ppAphdRbmN34wbWiWkc5yEnJhvrD9tUGygNjkEgA1PgkcNxuShRxGCgaFL",
  "key8": "2HgucBbFzBzXA2jtSs9G3xnR1z3eTsXrai3i5UnharVxbWJ7m78Xtu866XkFdixR4XXPvBMkpPrExJJ2zfGXDsKT",
  "key9": "2ivwhuNW6PKm6P9r17YFGzZdT7Aqp1HqPWd4Bb5Ly25L2YfJczBpXA3grHsgnG5hAph2qbcWCR7M2vtWW7C8b2rP",
  "key10": "3UQdsAKnahNQenimUxEZBQQpZGBbY5JEaaCP7AkcKYMzSZQQBZCcD8y72ufiEfi6c6FJRZhAYDbPqZfd4viJqn8R",
  "key11": "23BBskRnkyqSZGQgboUp9xgkN4NYg7AnYH5yH22SSCyvimbDN4XRnS8752S4mcjDN5B4MCo2Kuh66aWbZAoADYkX",
  "key12": "3PB7tGBnyZaSJkDcgs6rF2Ts8fCTXKCDfzmRWM5r37gYb6Q6uc1aBWnFiKssdS1jLmuFsh1Mk2a1QyNrQrpxgHq8",
  "key13": "2ThTg3AdHXvY3NJzQ2TXn6mdHWssKAGCg1a6qvL6MrZhjqkQaPXwrbdMMTYWsp92R4apTFwGAndEET8iAdd4WAg6",
  "key14": "5Z5GpPoCsZTAW1jv7NBE1YsRspPNMUJJKpjsnAcZcbcDQnhxDDTjJb9KAF4WiQVdiGtX7jLQuuneJY8DntygcbTS",
  "key15": "5M9kvWJ3gYbssaGWz9wEKgJk1b1RRBEdazs91rcL5e5apeYQVDKnLqFiGzjNbeeuq7hpKG336wdCQnKWDN7pQCAb",
  "key16": "3Tpy1fjkNZyzeYH2nJxQVHcNAbrqjs8N57Fj97xq5G5djbUWNv39enhyWVdJpVky6LFuKVbgWr9bb551AfSX7GVU",
  "key17": "2FBMDGKrCaue3o4G6oQTvqV8tdmG8qZAsrEinFoZJZEuvTNb2DFEYRcBuN3LZBizWkv45NVDnvFrSyKYW1axsqVj",
  "key18": "rojtLqzeMVmfWiVWhsUghe52nHXZnLRJ1nM2uwWeG2SwzojnW7UKiVhfP47irDBxE3meeAmJxPqdBFr2ea2Vs7F",
  "key19": "8khP5XbD4hHDG51WBkJfeGo4KRcP9QKsquYaJY7LDdr7LxKT6nUn2fmSJfR2GHRxvUZgLmEDfBSU1nYRBg6F14W",
  "key20": "4YfnRr68uLcDTq6FEdA8tiEWgxucjC6g73kvqHeZBvzKdRSG2rTaDZLBVgMaMYjm27FMXRytuNdWjGwPXSjBjZzZ",
  "key21": "52v1U8hVgBHEEs2fhKfcGgiKqB3o8Lv7erd2AcUFxyKY1PsA7vFDfxJ3zLx9TRyGrPPJ2SwcJMrzJuQ1497WZZTd",
  "key22": "43TpnZZnAUx3QD4wGQzJGC3cQPRyUgQFYzaSQQnoh8tHgEngrETiCQ6zA9VUah6gVLZrkAZLRSaHhGjZXigTimsE",
  "key23": "3rNLEp6sGbUDZmV2dZFg9pqsG47FWb1K3PbGFZbDqptGPRnGjq7qW96zyTcJaXrznMjuR5UeeXZjcVjdLhUpZFGN",
  "key24": "5n7MiehVGuKiak9kHif2Pzk4oDbRsn9jkzCD7SWAM8KQwbsPtEmQz3BUEe5RUstshGeHouPsUELsgHC6DXVUQboL",
  "key25": "cfY3oY7p22TRHxiuwMTDxPjeK2K8toTpQS7o6GD9i76NahgPtmmXwYUdFDTEiG7QHhSC7uRdvDNG5waGkMRQR94",
  "key26": "2unDtcR1nBSECSKUgi5xvxTomVzvLqNP35ub5cHeJBGheSvGzibWxtGEDsij5Aj3QeSvL21bEoR7dmrdfc5M4E7Y",
  "key27": "2ChJnJt4xTCPjts33cBRtQjpufH31FCu8PbLiY1MjAUW4c7EYt43xwYur8oUPhKzHZYivMQGNaDUKG7cQP5gogrp",
  "key28": "UXMhNwjDTKZz4yF82yALn2ZvZijus5yGx6aPnkr3TshXFj7mAmqJxsgjQbohRbkdakewYniSta8UHZGfdktFjRN",
  "key29": "5y7mfCauBt3GKfd3VQiKi25X2DWHtM9t2SZ4z5qaJU3xudrSXAqQ8r2QYVXDaHBqkT938M8pLVuHLaMp7obbpTop",
  "key30": "2j9PAZEJW7vbCQtUa4XmSZjyF61RRjQb8ksArcpLNM9nwWK1kG3jTVJEQW1mtNQoboodrM4DaYK6VsBCNs1rwoD",
  "key31": "my6iWJnhEqMnwg1ag8m5P2Ga9UkeuXmCwJdwTCaApCeei3LGixeeAmTGRnPPuciBJwA4hQqNVTjhDCk9AZHen97",
  "key32": "3e8YUVSg2jTYJ4CsYrP8jPT3j1seNH1tNPbBkYyKK8MRRAm5Kzb29Ce2LepHhfYmq3WA25PaEthL6steqqzBxrHW",
  "key33": "3yknEmBht6YPCQhdbebuGprDWhebALujaDnMN8LXjJHQKWntVNTVRAWUzPRYXsvFqRKq7WnqqCMnyYJmM7D5JLwA",
  "key34": "4FNEmnZqGa5BfxKUhyPHnpmXciX6Ve5ZMkFHncGqdqiLP5s2bGtvFDHCJzPycA56ZNP21KrLszv8DxDx97va8RuP",
  "key35": "qhcsdzEV9qhkrrNGbA4jSefrrKsVtPvNo1VSwft33u6jbifcsmBFws8sPU8cScCtnery8HHgawMwms7NSTywgQ7",
  "key36": "4NvqRzMYWxKs1tQyV6AC6fUBuuWadxGodKGGDQwSRc4RbyTGmCfqAgptB1UndHaBbJjq4vmojFwrqXvU7Kf9ESSr",
  "key37": "3c4rCuH3Xytm5B6qQMeUHpMKoUYbFCqCBVxMnUptm8p83JMPeFBJKAfrHTFqWoCq1b9BAueULmvQhKLKgPjAUgtv",
  "key38": "5hcWrciDG2qLac5UYuuxqLPi8Q9HvLyZTdw4bERWzffYF92KKasRY4diEXRQPNe3uVZPkXUrbdnwedVGmCPfNx6C",
  "key39": "Bts7jRcTqsEXpjUiRxQEYpcg7dqP9GtipMP4VKQUidAtL23X2x99G7gcK1JNcmHwGdawW9eyGAfVQxA4TxQfJ9W",
  "key40": "2cCTFX2o8vrmAi44HAEQjrSEqQFBYLC6MF25donobb9roMmD9Qybpgy6NQcdYtmRNzHesy4qHd5mR6fhzdFNQqPU",
  "key41": "BVwtPrfjobi1BWeVcjRFkmBR9Bgoyr2j7mxM5xWR9dFKwiFjTw3nuTujVqUpiHxqrYC2LvXTocMH23dbhvk43KQ",
  "key42": "5RMA1bQhdUSgXyhi8kbVcdr6wrfBm6MxJKJRwFSSRcNgz2qAVcKE31PYupAP4NcfT5FFHfoKEkdBQnSoHJ7PHo8F",
  "key43": "3WqWzpaPeFVfVNC6ynnuH1QCewYwSPQY9q7dotnDBZFCUgFVCrG3h7N563136jReejXkapdUvubLBuVKigAKXNQ3",
  "key44": "5mkvF5JrT9VWMLDG2VN6jWaByVUxNYKQYP9j9N7R6rCFgr66eRgfZNUX6dNwy1hGyKbikZmSUF5Qa78RWCnjbWYt",
  "key45": "3bU6qqXrrQNNCFEpzUEG7b2F9GiprtfFQPt9kZM1vMBoCniADcXJhm3uRou7xys9wyrPASSLdAizWPrWxBoDqWoA",
  "key46": "2EHLZSMBmUu8SavY2SivbPDKb7x2wBL4DNbzJwAAbuzNn21t2TgvsFyQ8LD2UCcftwXpci1NUF2iY8msrgKMcuCb",
  "key47": "4femaQHyiBFV5nctnBMUcjpKs7VGMJwkTDQ1HqWZH6DujC153s7ZE6gvD9LBPbYrFBX73sQWXikhk4NMxx3fFMQP",
  "key48": "4zvsC1mHPdfEPyg3BqkC4XVUWkSKy7uR18Yin9HHwFW5ncMjDkPAY3L9U5r4nBdWD9uxPDAgR7Q4evHUE1oVv5Sn"
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

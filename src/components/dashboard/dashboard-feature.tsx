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
    "3Hs2MzzrwUfsaJSwT4cb9yEhDVTumGLw1B97CzmDcej5JrDhMmHJP2zRggVg4r2d9bm4KiicTrsgWfdBfWD98vX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wtZFTkzvk2SwgiWy3RtRidZqk2qVquhgcNRQJ6U77xhooehwUg5RCiGXHQuF9aqC5ZdzPDk7N2CNn49rePCpxMa",
  "key1": "5RRvUMDVKXkbTyVCcsafXJhJANiDfRae4T9opQhfDEp6GjDuzpxdk6qc8a6bnJ54fxgdpriK11WEjAWJbvi8G7Aa",
  "key2": "3HhnVMX2RZF7gdabwsxPNgRpBDsNa5K5yL5RttGq2sVL6FzzN1hs29RrPLU1A3CuifCdgqNHtGVrN52sedjR9hbf",
  "key3": "2rgq56WtT4m6ijWFGZ5DjyfZRvHVKZXmsgs37Y1W1vhaT8cw3wzveAaJ2rtEdGimeoCBTusJXdv2mPDUDyB5Nssx",
  "key4": "54j9HDYyZvRLeSkxCfawHv34VbZuVN38VR3MpZGtJZ6DoKRVfEsMKc6w4f4vSqGkojRM4yWgMYYdztf8tjNDZcBX",
  "key5": "2PrKo1YfgGfkm8XSBzucJRQbVXUHRSV8uWJJzBp5WHNnb5dfWoDvFjj2jmGQvi1jTHoZ3soAUeUeQYfAoi8yRbHt",
  "key6": "YaouR2KP85Gqi7ZwRrDeh9tUaZKWoaR7C1KAcUuNjah4tdCGPRRTuFm2uNVnBeSjzkRGJjrkKybtcaK8FjkTN2t",
  "key7": "2eqaj9GHZcK79mfNrXb1unBaxAct1tpL4Pz8Y87v2tHjrFD61Y39U1sS99oUxPCAeKz2i3pBqA3EBqygv7g1Av4J",
  "key8": "3g8CpT5r5qd1fPmG2cRDPwGtELEtbYFz2TYFummdDrPsJdAQi2xmnifMhmz7HzgLjg6JX2mRzHhWFjSES5UcwCby",
  "key9": "4gensorvgzkVFn5dJTDftaoxd9ZBpGWf6GnouSwiHw3XojEu7Emiwa5MqGUYqDNUQAcvw46NQAVt5QPWZ4bidb7j",
  "key10": "qVjRn7T5uonUpG62erEhbpKw8APBRqSSvzJMwoAyn9hUiDskNtRhdiosxsQuEsCD3Fge77L3AZP74bCJnpppBzv",
  "key11": "4PkdXdnzAJVtgYAad8kJmFJjHjNXeEYq2xqTaQ7UbbFQh7C5snH6iZhNEykqupJSwgdCWdAiYZRKe7suLZ5MonEh",
  "key12": "zaKppGTwC7p2Wf6WtkBfozCWurqFKpF4kJfN6DLLhZp9Y4fDL7A7RsNn67jf6PieSVNxbDHy54CMneWy6mHC7G9",
  "key13": "5es34rD869wcc162a4TKbqVUb96TfY6yTJiCBenXSQeTztzjJim1DfeAd6heSMckok9iEYbjkhFfzUj3UMSdrbEx",
  "key14": "oyMRFqsz2poongP84aDdwtLZKc2zP65LeaXZZBLmmkpqX3g5PfKy3heYVJVKo3givEJa62FqF4wuLNJYK2hgkiw",
  "key15": "3qVekXtoNEWDncr1TbhqRycc9bLBDYb9PxNS8WbtwFpJR1WNfDgwaKeJAPS66NYqyxNL6yWBL7M4YLUgfLqhd6BY",
  "key16": "2HRtWwXnt7EYqiNPdjr8fGCghmNGeChsmCA5StCP3WZq9wGDqBnoD9R7Ls3xvqNZhFSMmpJy1qYznBwRsDPkaSe2",
  "key17": "3oNnEGx4bj4NGEVH5LqDCFD6YoHmFyM8rLYyCry6xZjN4wYHMoKuhyncqL79ZbNzeumhm5DgeX5S1tuRfWJfFZfT",
  "key18": "56ihJBVnyndLexfZVh3JwDoM93MBLN9dzfTm7Q198Mh9C55dxBRc51bNVUsTwDPWTxZ4wqtTGpEuL3B4h7RaufWS",
  "key19": "5Sd18UZogTUYqALRqbTtpk4mtx8bWvq3V2k7rCyzwauX2LWxA3KwDrnauESjoWLMzGa79diHN7BXP3o5NbXknYNA",
  "key20": "2qNWVua47kkH6kzNbVcvPoUM5qsm97HyPkrZf43it1gQ9GdSUL2ZJHhE9VgR2z3916rR3ce3XfxBRSNDDcx7qH66",
  "key21": "2mU8Q7UKbVLmwGfg4rQCJpS9vAHjWsSJFV1x76VUQmWFLWycfbGs6Sprsf3ZmkdLsnTEnk7zc68EF42nXGcFfVmZ",
  "key22": "26msWgRd973rH3n9WtzR7cNkfmPkJ8XddAQWFUMBJj2KSD8YxFkZzSMn9h12GygoxfhVVHPs74d9musPEnw47NPV",
  "key23": "5jUvP9t6NxvYW1GJjFWgF2hrxRXjAUGcLAgvBgEy8sK2Nbc6CqAAJ7oRr8exQe8HWvhoTp1u2jv4hAgBWG2Ny68x",
  "key24": "65R9RM3Ds1TpmCJJNoqmr8oc9qPB9E2zG59MPTNWXHShqWoGCoT3CrCxfeYdPMXbMRLHk6ZEe2YCZh2NbQ72JhYh",
  "key25": "5r8fqDrA1Va7Cw2BW1SnBLBkscPHWNiYGSEMwq8K9LoRX5xg6qp4bUmXc55BTfmWxFhuF7zrK9otvJRZQdtnBYJF",
  "key26": "ZQHAv1e2LpETkfVY2YyFwLW9BuX7euxvnyQFPqC3oyuUcy5RrvtNkPUJ8uyHSxGuyjKLdB9jmNGiRfKcTa8s4Gp",
  "key27": "zqtCSVXfreAq82UPNB8PbmyD1yEhf8ryVvwp5rPFYKJ6KvXQgUmFEfgVhDFZtFESqc6rHhnj7qvhDpw39s269zJ",
  "key28": "56xYredEFCS84x8dkL48hGx6vDrKNaXP9AoZPpFW27cLq6ZtedfftUyWNThXsq5RbUr6seVzArorbBrVwvhWghM9",
  "key29": "5EsFZP3XR1hxqAjLsgDaZi1eVPzaWhmaC8HD7pMM9ZXL3Md3jFqjvDjVmoRhnPt55WbQy7z6x5Zp7NUsKtgr5xie",
  "key30": "3GYTZncKe3JuCJGJQwkvUSCA2Wf98JTG6wbxNuPSn67DFZYE6WLFzDSKdRuRvchWD8eXFy3oibat9FE8xtAA19Rg",
  "key31": "56GBtPDUjbgFSQLQgttLsNTVkAJ4QeBwL9dNRtZeDFugSAUxw2HLacTASPm8aofE2XyaGprkStnKrXKRPYzFqiGj",
  "key32": "4q7a8bTtrJvKyk5KzPDe1CFWbLJWnaHXZLLACgrXYVsgpnMPtDWACaLKep6pKXrAzixbJJfhnag5T4DdqS8SiH9K",
  "key33": "2Q2WdhbVfW95fMQ7tkd9aqbQd2A9JNJrtgQtqh3bHUabi7GTTQKSpGWsJvyXUkXYz1nTqat7jRqzTqgJwZZM1fit",
  "key34": "61GoTMAnMHvwSVwQ8yN4VibmPXMC1gq5q6dby8LoweSZPJBSNvzcd6e6c4eVARZaTJ8TSLn6g9aTuYWypU682JUv",
  "key35": "5xy9ipDBXv86H6rQwWowSGssXsScEdY3ezhvAzMbTJwEuQZv1aDeCbUt7PrseKAefyfhKEGAqtddrexeaVdke3JS",
  "key36": "E6E3ZF5htnfNG22NM3grQaPLAdGiioXN1KbiHRcCMi2o5HfFkBF7sFBpfeGZrBD6CvSvfVA2k7F2U5MVaNYNXAC",
  "key37": "21V5mjYi97HgUEH5xtAtfLjroeZGmgUgvc17U9tCrHebwBLayU3Cpz9VUr6SfJRAkdqXTmhhpBUArbMxUApxjKou"
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

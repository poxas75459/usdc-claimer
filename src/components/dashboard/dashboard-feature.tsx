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
    "TXozY8h5u3tg4TfEBZoTeoRucL4EXPWRbfXHHdLRLSnwe7KomiB799gbCL8ne5rL3z9aLgEkZqp6sRsTUY1z1yY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Du9LSe8yHheF84xw1avzUHgxvzS15fq6ZdE7bNWTobb9LzMPcyLErNqQ6T4HMsj3BSQfhZfdXMivFDCjs9HoRnn",
  "key1": "2NhfGX28qQvQ5WXiHDmusxrKK5mnQM3TXFVsNS5a4tQ8QFiQscX6cbqYrfNdMJAJkLAcK4ALdo5MKVAzj43qWqae",
  "key2": "3iRgiRNssWk9qbey3MTBP5uaWncgGHSWFzfVYAeKDTFUkh2J8g5crdZPCHVbbisDDGfa9UwdW22xTwqtLAjG1Z2C",
  "key3": "TqvsKyeFVKY1ozEBKZRXGKok8d7iDBMKkasJvg3wBkcHy2wHMPzYLnCdjrHTCAiFKBKtuJTCkyq6tmqtBrSdaMZ",
  "key4": "5Z5g9BjDGUmFMbGBsj5E9nCvJFa8rw64Uq76ZdvSEgEGqGbLc5cY1jUecHiHnX6WJHCLvCf1G3DQ7rZ1pwEjw4qm",
  "key5": "38j4Y4gEGE56pbL4S6GgL2DGyZSrmoaH5jr1EAZDrFkrDEb4qxN6cjDFqYY2DhBsEHtXeGaZY2LTjmKKKiy9oqYa",
  "key6": "2mzPcAgLgccnmLjk7Bw9HMyHi6fFLY2z5bjNBu5Qc6yQhtGaieqBGrF69BuohrGZLuLTprd6oX6uEt3Cm2owrDoQ",
  "key7": "2ooLiKWwAzEjTECjjYoVHFkYh8Gsw1DizcQfZYq6vs7459rqM6Sd2WRrXGPGX22DJKZaTkksMbQ5c6CLrGFTj5j1",
  "key8": "3wNjJ429WSZDWgteYc7368e5125B9Cgps5FCBVQRLKLnGsmTxKtBjQxrujEDYytG6TVByBGYr1PddsSGYeQV3uKW",
  "key9": "nN8sZDcXyHzjgtRpcHkggbyU7M11kddWU1k6hQGkgqLPJftRzQuoVDqSCNXzZ4EFSeRa82gYPprrQRfN6GMhYFJ",
  "key10": "4NPJ1dPZiTvEaD2Yj8K29nwXxXSWiC9PoVy78fiwy2FTp3zun3a4icNe52CPDzWoVYB9m6WHEHR6Dc2pmdsbam1T",
  "key11": "2MD9ocrdqZYQjDfejJsfv9KhDnZ44mXB4cyZSm5hBLVUEg6EscE415ZGti1jw6miaYKD79uK6ruvyZBoz7hEBXa9",
  "key12": "yv1tZ5L6p9YtHA53vbj4m3ap5dCxAgVyeC6P3X8VLxMN2Vd9Z4eYa5H9H8kQaEtVLonojgQWFbTzVqv1DbbR9L4",
  "key13": "2qJ4uFhN5ya4PA2ECFKjLHQGyDVFVTAh3Rr8mTGa3YkuNt5gpMG3rDn69u1KDByZaHSWf3Bm8bpBcV8hv9Ktp2ad",
  "key14": "5PoJXSw9NkXNwUqvyPhyNP862WV5bhx71YLEfyFHWwUkq8KgeLpuT6iDWn43rHnkEUNx9mUtrNwfzyRNjxd86Zk",
  "key15": "4w72oXxwhr8gyToLZnUjAL66EXGnjpKRyftBTJE93KBWcHT9EwsChLYt6PGRtP7k2fS3fyV8U3y2QyMZbZmNHDK6",
  "key16": "4o4iuQjejeBkHaooBwroc6aZQxXBbthupcfLzq2owk91tQT1aXGKExQWidYsZYkfkH2UK82gpzGBQYEfqYTGXSLu",
  "key17": "24CQtSEanWMDRmcrbhnTymmCjS3qEQdJ71wfneU4DoQqkEUHrjBsGifJkfZ3iaokbiKeAhTkXkb41FPbgp9Tyk7G",
  "key18": "uDfcYGLZMzj3bkmijN23AbbxvZtp5QHSkG8WVjhVgUCmHrWr32y7yUe8awXsAZ468c6cN2fAsH88aTP77RigogT",
  "key19": "54GHK7GD4ej5hZYW2awhQshhtsYiSjxQ5EgnhnDPFi5KrKQN9FgU2nYdjtU9pHWMijyZyLqagWAmU52pou1C2fAf",
  "key20": "6pVrPxWoGjUiDhm72heRPXCKPrD7BjRfUYf9QDAS78Su7D6c8S6rViLbLYPem4mGD8RDwqK9hDLHTsFYYeAyi5b",
  "key21": "5VPFUdduy7G3BrGaYCwxUJtRVwxXiwhrNJT6MzouYDtco2LMobapxgfX6C86HaWUZXUYR7kSvA97mvHjGFVsjTAv",
  "key22": "2Z6sFqDRXSD8HeFUvAkLnauCsTZfiUquWJ23VwNWZ5jGvHM7c2hccG5hnDnLL2Q7QvHz39VTTaHQcp6WbHzP6jEo",
  "key23": "5WprspxfA6KYVh64YJyGW5PEoyRxwmLkbL1cwM8sNvLVdxLm5SRWQ2nk1y8zHs9uwGr8b4Wr7pVCpn332AwmYMen",
  "key24": "2XfZZtkdgTRz1GZANVdyfTp919pRfpYfoohVQ3ynoHrhdvNrAR7GJNBXgziuDHRsyuQZpu5p5UwMSg4TkPUnoL7Q",
  "key25": "ptuc8ai2nceMwAoFYqDTGMqwUfd1bxjyrNnazAfjT3sjJow8oKaBgheqHSW5pHcpHTkhDLnrMBhbtaUp2Vxze3t",
  "key26": "dWueF3UKNU2maXcYsECfs2ZvSBAMKEMrnqSiGif3mSJTM1wrXjhNaM7SabqxFfBJu2QauP62kkFtop4XLn3AbKc",
  "key27": "46egJjZFGyXAJkJ8aQXgyJQ6wTpeeHRA8DPm45Ck9yTSEo6sNYTgzMesRF25UDjL9XfcayMvV4HWoESsYk3f9pG3",
  "key28": "4tANTqCFcBZ86GRK5H2bSSEXXsEpP4XYJfiEpYz9YuLEo8M3nFX5gDkTH31JybgVGxEesVmqKuYPg2b1GSYMBV4t",
  "key29": "2j2DCxToqLhf4dJjxaXS3h8PBU9ZecL5N764fFPBGrtDESDyFnUvfP6EDPsGAYWLrd9CcFnKtyXEo1fUaQSYCq7S",
  "key30": "5eWcWmybdg5GRjJh7ed6BcPpHzFox94SEXV5B9wm6W6TRYK5cmQ9vDqYER3Zwj2WURirAi4x5Dsurc7yv6nqCfk6",
  "key31": "4YnvfEVP83DKPKGWTN6tj1RVcNQmwU5o4TYjmqa423FK4ns8rZj3QPmUNcPERkhjLY13rYLGtxaMt3S3SaD8D1jj",
  "key32": "3xc8Ch8NSKWovBPZ4WKmfu4jaGrzYnFy4mUfobtjdWEWHnfjNCJuGtMcxmLwu3uHJCFpWaLAtVGZL4Rt3U9r4VhL",
  "key33": "HoaqvG4Ead1zp2xfY4onn6FXhV7qUEk7Js6C4aj9BwNuuFRabVX7N2t7WdaxR3q3fbZ7nhhPcrF4AwdyAbVTfa9",
  "key34": "2a8TUGvX3wyQBiVby9AKTJzma1G5pGW6XiWVVV7gmJKXspTNBqpB3eokytGNEGZR37wXTxMmaxRdqqDdgWRWxgF6",
  "key35": "4WF5XWemGqVzvha5yMBLUd1Ccp4FnAsW77odDXfRSaBrAq89NboczXZuLv5VNh92xrofWhQxrQgC11Urphf9DA7T",
  "key36": "4ouhkXFHgtKgoYwMGh27zkrorpbU4PY9Cm4w4xPXD2wUBDm6YnyCPt9nY3Leiv56fwLULtSHqJJGe8dzVzuKZ6Cv",
  "key37": "4dQLNRUizH6FYGeSofPgJ452adSCrdNSHf5pLfrPMp85NYcUfHMEz9xrJ6djfm8y1mu3rEHzgQmaYSGcZPhcEdYN",
  "key38": "2qEPa1acQTkWvKLmCPWZCuu8f6tvBvVsEK1FSGtLUNQXe3RfohZqySTEk6gK2mFRrjDQqodPJhzR9MeNc72EnHEy",
  "key39": "WSESB7472gWTjmvp6RZVBGbXy4kBBUxqzEwFLZoZVPFiAVStFgLraVhF9ihwXCdKQKRRd2xvh7gpo6tQtR8kUPR",
  "key40": "5SfifKddyB6QaLhZ5sTZjU6PmdnniwGEtqdDc3afMzMg8GUTXhQvXt97Ew4WbvjQ4x7HSs8R2pk5s764fwnDYUJf",
  "key41": "37BVshzj5Bwhp4AoQX1ybixV7b9kGpDaHM21W7aktwkegua9Fc9rx7ypV32YqPREzeA17LVXBybEExyqKdZ7DDjy",
  "key42": "cg6yGtNzn1YbBhbNgCYKCYi8sJp3qTfrwwuczcSZeEdbA16NaDpNwk7UVEpeP2xyya3JUft9Mu6EtUezbjPa5Y4",
  "key43": "55fSKZCAVcbQXFnfhgxqhCnn2rdmX7KzMPzsMy4Pz544micUAcZFVomDCUiSmeWCo9fNMk3PJg8fzhao2duBdZ3j"
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

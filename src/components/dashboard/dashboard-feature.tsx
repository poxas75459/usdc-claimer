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
    "Y4HEocRSG7m8Ny3yvwhsxLvXS8Mhx6Z9e5v3ic1arKHSYQSxbKNAZFszFbnPPe5q6PLfD7ykZdjf51mgvnJUG3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akqEWEJMTCDNY13DrjHu8v4NYUH2cgkYTHC7FTMPC23cvodQAqeQQbvRXfzsnKLTmti5C9WcjNf8F18HXrqb7Mw",
  "key1": "4GRvjZaLo4R2EvgKocNoRxMi28JtcqvuJnK6rhh6QaxvdXiEbptdNAFtgGjUSnyyNd6EutnNSowRf2bMuroBuazq",
  "key2": "WKZcKrwbxy8EkiWTBpQKLiEDzmDGAEuLgiBMqweHmdoVVc6gxSNTXY3Hy8LV95BvCwvnduUdmyjLM3cocy8kKJH",
  "key3": "4A55UhqAg7CJmW8g5aZhJeAujbSNfgxyJeZLM6gXyyhbyDn3ZVsM3pPDKA3WDBVKqNvfdnaw5zN9eMJK414YBNoX",
  "key4": "5HACz4BPrBWiFViveSNp1iXz5NzNGCjHmd1DnRJe54896NL4MfBU3EYMqnhxbUoiDRXH71rMDWMGXCihR8wMfCTW",
  "key5": "39ezmoCwz3NnNt1SNuMuwgjPBSVegxkbePe5FykW6MQzCUrLMfDfmszXT7qDBHZnPojxjWmyRRc6chzoLrZ2zb2c",
  "key6": "5E4xM87hqK3zMXGFpqgqPqCrQPDeYcZhBbhyNnLAYfTaNNfcZocpCDTxYMyU6wJP9QtoD13HTM8XWRJkC2H5qWjr",
  "key7": "3658YRZCMPghMWRiMGdqz2S9MtifkUdWhNi39EWegZ7qcDXVBq6YjgXLbwQy1g2K1L6UxCM9ZzwEuRqAqQA4PwAs",
  "key8": "2LbJwuMUA1adfJvQNzFZFYxMZMW6638itBHyGefSHqUwe8GPE7hWMdfmfMtc6QQiMWb7w2Nb9niwH3U47LdKkTKD",
  "key9": "asoG1psQSjeeXUJQTRS7SRBcDqHRR1tEn4hZ1TMa8o6LpjGjNz3HP2FpNbdJuhTVHwpFduKyuojUKQFWdy6fuED",
  "key10": "2LBCdLnsLPSTrvxB7mXXTdrQ8dcxEmP7uKFd5amKKxqB7VhXe7hFNx7Tcb4WRTZqGr7KNrD53ghBqktf51P5fjrT",
  "key11": "2yDZmPzbWPA5jQcW75BX5eiuFZtre3GxMSxpU3uWH8znoWszZfeLLvm2KyGedDD4JKTUJziKNMWQFUr6b8S9kWoX",
  "key12": "qj3ymPgsVpzSoboQjZ41vVM3UkD7CsvHS3BXfCzXxJgYJCV8o4omKHFue4URZKSGK5SG63wbn5VKsbrDEeMAdqk",
  "key13": "5yvSSxW96sXkEPRxtvMRkXrJ4AmuCkXvEZ5gZ6WLgaUJEWVZkD1i7nEGiCwDn5GVD8B4a8v8c6JXnm2ZtMCzm66B",
  "key14": "3pk133zqrKts7LNADgikoMgsiy4Hy8UtSd8NvezLF76YHZqvSkwtyR3k1TeXheCAy6oqT3vcmK4zcRZsS4JqNJsg",
  "key15": "2iGda1iiWMtkDujwChQ2JsUSuv4x7Sj1BrtNfX9GQoCkoTTaB2L6kgyca9V2NAUNjcNxKRoGhX36tc1uDV3kvm2n",
  "key16": "2wE72VRFNHuhEN3R3SB7FrweXy5YmjW6crd79eAe6LtD4pbFL2ujD18naP3FNsuHdRRWWvuNjPYuSFTBdRgRoiq2",
  "key17": "5m4Cg4v3SS9MZ6kTEwyvf6KPpdtR89r6GS3J1Q8aEUEfSMybo3bgdTzhVna51XCmVzLYS23vtc81QoHRyBD4BthM",
  "key18": "5XA5d85Y1HHmhMh26oAbws13LURodRKFXS9D9hSoRNTAbhzx7SJkeYqwwzba9TSQVs9CzYTsjBXXuGfwPc229aLy",
  "key19": "uX6n6iFiQG5GZAauhxFHkMdV11NTKGpuaTVNjt7mjQumwDu2SJm3oeSzkVYiTqLpXrRQPNmHxqUVEGRCq13YbsW",
  "key20": "4c1wZ6htjiNHjRMbHhVY96gKDjmRHubH9QaYnaQzr9idJDXq2q7uMciAxW3PHomBUnh5T2k2K4GdV65122N9PVBu",
  "key21": "46CkN6uxY6duv8qMcsjRoFYU5tmi9tzvDNGdu2wUM2hwc9twBSqw8xNavxbUD1BijwmFmnJoRYmKbVUaDbSypJzB",
  "key22": "4jjhyW1tEoMzF3ort9tWrdKLZ1MDXAwHEQ76T5yyWCvroG8Lb1djQxYvLTcj3zquJPyMfLup6q961EibXNiyAB79",
  "key23": "e2X81dkJJaJ5hpy6exSiL6k1MwooZ4ZkNYSbRS5f99cCbqfJzonnCvyzFy2EryzHGdzstVoiYzD3MVgThAbf7Qj",
  "key24": "3kMT4LvGMroqkzvzBuFK8gT4vdp3Vh8URdBQc1XSEPFSVMk41A9rkRkSf8YjX8SpDqBjXYrCbZthoUgecwAkSzBH",
  "key25": "4GkenCktc9wS74NVYMUWkguUKn3nD8kgogcEVrfrPUQ4PB9Tv8vVTGGuiav26Q9sp8XGHutYZAETBDpGaasrDNrL",
  "key26": "3Ahzz8eTXEjMbQhfhAt57RGgQz3Q73FrCPnRfL3qK74FEy454hVrzXQSJd9wjE3ev9dqr3r6F1ErVtnds8x8Q1j2",
  "key27": "2QrLtJjMvLFdat8Yz9jxLZgE6tx1ZAxwCWTtUyYRUzcQNfb5jo2HsTdrPdmf6FdUTRsTiBDCU5GLie3br9DRVpZc",
  "key28": "5C8jEBk9Qcm6HtFbZFE9yDZCRxcR13yNR44S5gtz3BAb2v4QAcmvTTvT4AAgFrvhitcH3Sfm3GD2VyEieyrLhUVb",
  "key29": "3VdNR5h63DaT1gAU8NASceHfdhwMNa7tvCNaBXsRrshKoHfxGMUr93FDisQPhFUdMDH62kDZUfG4h2ZjHKavWZK7",
  "key30": "vH3v3W56mTDakntJHSvkojKu5uCTPir6WB1Sur2HoyYYtHSaw7zw5NWsMtUKbxMFMs9EuF7MpWCApBEUoKXSH6G",
  "key31": "3RfkAwdKL19DL25Vm4YBBe7Ji6WDMe4xjdPWEuqXuxCgcG8sTydM1kJDXYMwEAQDsta1yjj3nB9sRyjp2yABQh1y",
  "key32": "5KGfpDw8YqifFG57mWs6nxuPrLkB5qBBuWz75fCqiAhkMsfRCLPnwNxy7dzxWoDoZc5ktLNK3dsGqKM5ha9JE954",
  "key33": "2GqDyUkrcUy4JbaWi1KVvQoWH14A6nWrJLqJTEvzua6AR19f12JhSHn8WWAb8vcJLciNQ9hcLXcUVKqJT9GbPQmb",
  "key34": "4zEVuvbPLSg2HdQYryjJ6L8wSNmi6Q6cHpzgGnEHYEzBzLE7yzmyz6X8JWCKqqpz87rnnpg2B6NQWT4A7ZeQ81X4",
  "key35": "5ssNV2maFzZyVxkZGFCGDQcSfWB45ZcRSVTs2iFieLndsZpuKRxHVMUD5CBxs1oCtyDdSBfQVoZCpVN3rRRuEUCG",
  "key36": "ytrBbC2eN4LmJHTt8NnFQaoaC3rZ1pQCHivw7syeLwoxZJPX1f1nz65gyDvRxx46GUXkLCUs6rmJUHatczBpsqr",
  "key37": "tXMUA51AnSkKxFoztXQ8sJzLypXFTKeNthyRNgDw3ECyCt9ZdXHxsSXCgxFVsHg3sSKnYKPdT1DPiSYWVs9NpRG",
  "key38": "25J15YVCCS8TrNMmT296dHCexL7bK3kvfAfVcuXkuzsMN2Jdk9a1xEtjqKAMer3nJeB1AnowoKbXjD7RhW4MZjgH",
  "key39": "H9YN429QPFLaFNraFx59ZPxX4Uc3tYsqcJd97zoSe6ZiDZm5UgdxBmrzHF8ALsHEgXA7Hac8eK9SCdCaQ25XNnE",
  "key40": "4kEewTZuNV1WLndsc6EPTW7egqWwkVn7uxPZGJHnNTWe3j55effeo9Br2XJwnxWbmwVybrNVSsVzCP2Lmin8SmYs",
  "key41": "ywWWJacXr4xxNNYsYwQQh38MJC6mgKSSkEyFePnem5KeT7SvMwgpynG2cfhGhaP7DH5cybxHN79vvm9C66UpVc5"
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

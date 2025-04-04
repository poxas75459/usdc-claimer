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
    "5ciAsk6MmBQXP2uiXRX57S9VFjEc1y2146mkZY1wzFWFWM9A9RRHUQ1AQGzki7kFkEr4Vnz6KyMY51DjDkfXA9nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "doGoyAWs5P2yyEBkwvaL8kf7Z25W2WbHQPu9VHyeFPqg9eE88oSBiBb5Lvwvg6BbD5NasJyCNGhRrE9W7Z7mBcG",
  "key1": "2yZoFPC481fdvrdCd7z49xv5ht899WDZju782r8pZmSByZbTNDGiXmNtGpBbJYbJAbAkd6VHTkLWoNsadUwDsnts",
  "key2": "Ftfo9XfM8k1aA8i6TX32LXBpgKCf9KLbSZuD1x1kjMnCPe6NcDLTzxE8sviFmsF9XZCTLZH5bRx6yWQVq2WQNds",
  "key3": "Rq6gPc4ny5tC6UMCQPqAW68GjTg62i69UA6ocb4WPKtLUU4gowbhMWSaMtCbAVjnU1tjcgQmL54KUYgtTJXNci3",
  "key4": "4D65Zkh4ZSxGEzxoqjV9VTCVg4NJZdR2iv9mSbEKJ9c4L8CiY6fQc3sdN5c71SFLWT7pxoPYL5355konayyMfbaz",
  "key5": "32MGx4g8QJmN3XgSf1TNqeKu2NjFcxx2ybjkWHR2mqqEDvwYmnHVVb1Sw2aJKqhhYpBYd6NUN9Mzbrm9TGKpLBRn",
  "key6": "3cfpsASNup4GDQHYBUMyxiXs2gMnypnyNjWsteyzED8UF1m8zsWqaXc6z4FPptT9qicQqA1c2qnW6YPdJRUw7i5P",
  "key7": "5zDTK5Egmd3J7mFuxrPbsGAhCihPJJKLzuZUHzEEWKWv3nmrDQHiJXdiLQBGZFNyiT5qmxv7q74xwcvzgFiRH1Mf",
  "key8": "4HedXstkfeseHAhmDmNSUdLZYMVp1ifWSmD9K6oViLkQsZaCESCo5svhGZMsFMtsDp6yYVEeb5xg98MR2z1U3YJ9",
  "key9": "5R2yhoYvcwjPYG8VVXcs9k3woQd8xwa9ZiAPdz53VD2k8QDcNbGMYtheozQUaH9zYjfc38kegR7LxzvPGdogSdDE",
  "key10": "d9DXVY4vEG799kkaQM3sz8bbf6njDgrBF4mGUjCW3H62CZN2SLk7YjqWTfUuxFW5QPCs3bpocPxcTNeS2yNX5Rw",
  "key11": "4S7qZFWuPgVWPf25LQvMzPCk9YWnRbtXBcKJFXsveWMSGVs9PyM62XLhv5CFhw3TrEs9XcKmUT9XZaMeoCYUGZHH",
  "key12": "3v4pe4qdsJfWScyS4QwKFrmynQeVKaLLztVRMg9ZrT6nkUd1u9bLqYzaWzt6djxuSmNsJFvmg23k56jg4zqpWv4M",
  "key13": "58314PvpuKZczNKNXyuu2EwcB4V62nJDqJAL8sX3CGCpG596G4U7RKNVmASvSVsy7buoCuCJeqBgzYFm7ynUc8MG",
  "key14": "SqMRWLnuhSBUnJyxExyrZEhwEnQwoS14NHo3RCzQKfnwQQVRhPxb8XxfJfRaAir9otM4sWgpp6B2SskU7JXyGs4",
  "key15": "4RhkHt2nz22jHr8jtuB14SEQNRFRrAcDLFr7L2amZsX3SLrxLiAydRjc7G1yYXVVvsMCySkaMkGNyEDNHFc9e1Um",
  "key16": "dnRz2nqiqAV62thfp2iN8r4GJWU7jAQsWCvpFoHhnbMFWkJ9dwG5v6SbDAeYs2rQUp5ueGdk5CAmJz1DJKCESE7",
  "key17": "4Gne6oFfUk3gdFshJpvMVfi1PdMXdr6ZS3b3nksZmME27hhaqZTzpGQXzheJst4jfkvhaCg4rokqEJciDpTQhCvs",
  "key18": "3r6x55UY3H2SJY7EgQpyZjJMBEdEDGMyvRiR7hZrrb7iuN5W3EReG3gASf4rt8c2sncyChwYjw1YbBdcwUpz4Y95",
  "key19": "N8RsRW6LYUd7gPkvN6cDyMtuu8yzuVT4rV6jJWa8aSERp51bBcthvMRRTkuRwdbXk7zH8chuc9foxjDZjw1haC3",
  "key20": "pbocn9XQHkGg2Jdkg6hFpMh1hukm58M7NhxxDCpvzN8XBre1gtAeCJQXnUXabLPUXxH7gCqPWmHxyimwVN5BNSv",
  "key21": "4ihEuvKujhoJTdNSbtoEgYuVkV4ubznUYc1SCuA66YT9WVNqmouVxJVZ1c8v5aifNz1Wd1t6yJ3oznkx8F4JUbvi",
  "key22": "5c1yeosYj56uYS4Szs5ddf4XBDFCyRgTXompZweGmCkYepJvdSMzBom2EfXMsmy8MJewNg8YwwcyNoLUduVeFMM9",
  "key23": "49xfAojsVzA1Q39wfjZvG48nJVVD1SmAQa8gV94arnFHcFjoHGrB1uA7F5Rr4PFBhF3BbjLcpzme6TYrFWB3GEuZ",
  "key24": "36sQRKot9QP5QP3iM77CEvZEvfLSuZMrJtV7tTy3NgsTNRGng8hLstYdJnDPVLNPWt7c1xFd9VUEjoUYqE4pNSBh",
  "key25": "3fkzQx8Gyhp6qU6p81wTFp5cL5GYUwaECUTPoRD8y6K9PiHVE1jLrhUx3Jyu8JAjjtFiYJk3AabpWeRiaJxaNN8m",
  "key26": "3WXPSFbKJmzUKXsn19Cj5xuTxwoeRKPjpB7VK9aqzUdbq9EPmaH8ime4XLT6n24zj4EW12po6L3HZE7KGBDCx3Wh",
  "key27": "5ov7dUcW3Hcfk1SWEFo58PsErrDuejhxUsJAk9Z3MLmkEDdw3y7d3QZXf4NzsgZNKLENw5QBaBj44AZLmK1ZK4BE",
  "key28": "2YLeRyaScdNTH1qoFuGgc4wJQATW6Y8WsZADQGyZq4taVu4YR3XscmeLzFC2ekKxw5zUmHiyyemuVmZ7BPWQevpQ",
  "key29": "5QKxgUZhCGwgo1if5Mmsb1N4RtudmKGbuRbxm9unj5gLWHbyEq9FPPhyDR4qTAAEwPZ1xFQRMath3hoZetSsnMn4",
  "key30": "2UYGwR2wLMsuCVCHX9sAH2hKhQdH4nqE9UqCzY2ksrvnDACdAgViSTrtVhhXrQcZRCFCE1UAR5rJMASN43ZLp3oX",
  "key31": "5taVik6P9vmZd8yFZMpXg3m6bE8CxwuDPnSF7LtrA6twkTo3Z9LdjvTZpvoxjE7CXMVnBhcwzdmHBjzfXVDRPe8f",
  "key32": "5gEWiFWsXZyiNk8sDbeeNRBYXGmWGqkmynRrVrUqUE56SxHAtFXpEa1tf7phy3afyDpVs7AaiyFwmzXzY5idYGpd",
  "key33": "2Sr2kzX27BsWVYVECxDyLrtqcqnxxC5Z2KAgPUs7tFwogUcUqiraCzgQcaAirk4p75xyoLy2yuvYZB8FfA97snT3",
  "key34": "zuEzGjHuhzB6C6Cx5LLeUPBsRwvMHXTXSXWFjmsdPc1rExfr4UfK8VohmiacpmAqenbsA4DN9V3C9X1F77BXEep",
  "key35": "3x8iEtZKBGT52ps9QDpwdKkiAShhTvU8nQwgXyDcgLM7bFZCrgXMkPKtUtt7C1BMKW4MH5JAAaPU9TDEdWKeTrJY",
  "key36": "FDw2PwNVBAdt1C83VyuSDRAQSEn1mesEzmqJTegf57a76vKPZpnJMUeqk6hbTgVbUYQHKUKrAEUyBgaRVutFcC1",
  "key37": "Vrsdu5RHBv5wBWrRPBSBjV3fKrSnqR2YESoQfi5qmfeUf8nyejbEBo3M2pJuqMaG4Z8NZKqrpsi3gvSWntncXKk",
  "key38": "3D6JAGUD9FhP6G1iSukRypyWuqNGuzVXukGvGt2gBpcS6SoQ7C6oYc1C6855wgLqTwr8WnKhKS3gE6LeqSaD4aBD",
  "key39": "2khf1NDJTxyHhCLcEF2dfDjGS3W4wPGNhJiBihNRRQhrt4x3VjTZnSUtnEGdco4AcNLX4uftB8Cn5pxhJF9arhR1"
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

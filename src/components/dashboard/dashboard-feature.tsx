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
    "4KGzYXTfxeWyQ8TiJuivykVGH8zntYFm8pgR3Tabvzn7irysDkkVSn5xvniLxfpbNy8AaDCGwZ7788C9Jhmm4xDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6QhZLgKowNvBpntgQdPMRSLzeBypSRNpQJFGM7iwv54pAGS9h2rTcmu6pMVzcQ1jo5JP448SaybA1nmY8EzyMg",
  "key1": "bdzZDYetQfVHJxARbQvDVsA9vmGKACDt1KQCdQzvw7iUHWn4W3S9xuvnaQr4zSSBX6KqdBPezvETgAtAEQp1Xpi",
  "key2": "3jh5aVwbDgU8BNpsW3iCicVWfssQB1yTT9wURdS3xNChjHKmx65a3jx8GU6JX5Y6vdsTwavEZsPC8tmH9W85qyah",
  "key3": "57TgixxnqqX2bpZwsxtrKBo1JuoV86XBDmZcAvNR7czSstB2VyFXWMwD1THdgCJgZHwhxispWQR51cJGME5qqsf3",
  "key4": "43WJ2caHrheNNEFMJSxKqZTmtgXqPctJ6HHG1cwJc7P26PX8Jq716tUqcNXXBhsvcDJQXbfCepBfCHCFo851Er3S",
  "key5": "4YykT7Q5qA6DgwB6gz1NsPb2ftP5Lw664zpdyix9ChV5oZ4N4cooM89PTnCaAP2WHfSuUAa2ptJXdht81uzUp4fB",
  "key6": "4gWA1h2dtMCD6JpFjwXcrxbMvxNGfxTk6agDcyrSBECFSjey1MLVqqATDAksCUZUEQZB2wpNQYwdhGNHWr3xiWtf",
  "key7": "3yz9dGh8FxV57NAXWhQRR8bbdp2MARzBDed4AzxfYZZS8RQFVmwnDs8p3ia8UmP7AwouhEAQB4Uw18yUJNopa6zy",
  "key8": "4icxVxStrhLUoGqKNiKG3dp75jLpmPMzew2r5kb8P9UGG38VFqn9x6yokp4QXpERdv3nSyGX5qQ7sdBZoPyUiYXB",
  "key9": "5xbFtzRLHyJf3ygTRTBXxFYLKRQLYoGTeDYr7VLre8oakqhiF8s9ymoLoPQnr1e7XoP38obTBa5MJG6uJvycxou3",
  "key10": "2jTLHa7bUgGivLPMwh3agKcb5rKSMz4SoeAc9FitCFG4VAtt2saXVPFdjERC32GnkuD8zZh4tdDz7cbgspxMo5Un",
  "key11": "63Xb5Zoi6NKwK9A78XXKV6758jW51PM1ZsPhnrNsBbeBjGMBiqC7p5ECkRToCCiqzJEu32T6SfyruNrfKULT8iY2",
  "key12": "2fYnrzrA2mV6fq2gahFFCntceg1waosHzY5m5DHAEiwnBStHpiq522raK4r4isDn82c3r1BKU4ipvx4jGeyNcFG2",
  "key13": "LSxhUNHkuGtDQjM4cUZM8ApLsmva64QfA2xpVkW7ohQMW6GDjs9yndLCLsufU3nxZFfoRGfhvDczdQruT752Amd",
  "key14": "5TP1hdPVxuiQ6Jq5G11hWc7BYVVx1VBGwEKbjVxbqGenyJyFibyiYSu6WDq6zWXLAN2BJMv9pPzpeWJmNprYo1c9",
  "key15": "4utS4rzqy8AawoCVVZhNnBbYeVfYQZCrpmcsFvXvMjRtPGEVRxRdhJzn5XQvrJfRFiCBCVkqYUD1TGWn3Jgv6MTN",
  "key16": "4pPi21LupweU3f3qB9WZSn5ZZnWX9DFBpHNYzNPKeHBRgQ7qmNRMmjEaPCZR7KeMxSZhaoTH3GY1oe71ttNHsYKb",
  "key17": "2so8eQdpPuQHf4hwR8PLRfyrruhcwtF7q5CwFdidwnfhpavBVqYxUw1HgRVfzhazdcoTUDAhrQeWJoJVuRV3Nb2T",
  "key18": "5sTNU7AMCRAiiEv9VtVNW8sF7Dizqp2CLF9Fr3yXKe9AYZhCcP3nTeZ5ZWDLqoNkNqo3ARmzNeTQirF5WZj5QzAS",
  "key19": "37EsSXYSLrgWsRKwouvcJ9si6xMxLPQv2AoHwcLBRhWAS2yK9ms5oatsUCRt2QN7o1JbtgPVmb1EaApwBouLRkD5",
  "key20": "raftjAbV3tvvVJxTpBSeNS8eHM7q6pPscCx5Di3q5FRoX5GV4xS5pb52ZzKMSV98a5cvmsmDoHyeg2LwjDZZKQG",
  "key21": "3jz6b6eM3A9iVLCXZEMBsFvhAja7MVVoL1PhU9UWWXPbZof65m5cv44XwkQbycR8e8KWNuPVERioN9TWy9zKhzx3",
  "key22": "5d4xNxDkLiCyN4W7G7ama4GoLMmeXfMXimbjS7DDeoCmyR2cXjuecidR8HN31J6cvWoRJsLbLLYNDf6JV8RdRJXh",
  "key23": "2vF3swFZgSuF3stvphqghvAJ1oMDS5QRtcZivWd9SBP7GnhU3dE2FfdD3S82RS3hzTm4Tx8t5fLFH49KvRDc3vF4",
  "key24": "5AxzQav1YCyb3pFmSyUE4tJSAkBYX1TJNDa7SjpKauXgtJYKisTPj5t3YWMmtHq9SGSwVkDTqumjh4HaVQUGF2qc",
  "key25": "3d1HuUzQ2rpoCNu7de3QKErF1dgiNNy9K3Xdpzoqxjx6uycRfz5PcFmTH3yh5G5LJcoJjapeLYEcKsaEww73SqX8",
  "key26": "2VxUvw6nEKzqE3B2nBRqJ2SM2zQwXPHMttjWmqzR7FUCuAuQveCy2jfTyNKQXs73H8GasKAJFfjcDSopz7kvuKcS",
  "key27": "5jK5Vji2HL6N5VdnUBR8NJrB88PuzoxFHQfsmD3sDg1KMdfShBU2cngtN54kBaeessBZ8TGjCpNZeQieWi3UahTW",
  "key28": "2RZ8mwGbQJqGcLquSYGvZWUpcZN34VtDbKWBPrePnfaygDYc57E4rb7Amu6NUzdDy8w2St61TFEJbaBdS7PJtkRS",
  "key29": "2ooVF44ihJtmRGELNAmqT78Yt4CPEQKrTbtSwCNczsB5Sny1jdVUpeLH7gggGEJLUV7dutnZyW7x8BEz1Mi5jYiQ",
  "key30": "dfobhkrY61P8EfxmKkcB9rdHVgu3HMARMz53bJJgubCRtAAkb1tM4nS2RjYwyQnAhu4yWW9rGZZin1QGBzCpEao",
  "key31": "5PqWyiK8fKN3yrJZBuah5LqUZinCaFvZBQJPKrKraHb9eo5tHCjJjJHbQ6yA5WY2eLmjzyGEZ1tD6uaXYSLdZ8gh",
  "key32": "53sMgeeSRj4uGGLs6QCYU3dhrL7CwmwLF9N4Lp4LeRmc71epqbcALMqGcMvjBF6fe92wZ5JWZhYwc9eTZKGC78Vd",
  "key33": "55WxgK7f9ZA6v4vgb5HHb3WogEYgTWHRyTkYsJ8JpTbuxRccnYwrRViEaEnMg1z6QNMAmCtqGFHMF32UmHGGGdey",
  "key34": "2Wxkf3ZeEkbX6Dsg4W8VNGVJQwrpxTRiCeoU4wZ3WFyobQU9Jmp1xo6HxnXVAtpHEiYctRSCKh6kco8BuiWPKNP1",
  "key35": "4aySSJiP6xLC5AN1t7XqVaZZ6C4NptPjrbbtahVGUNig2V15fUPrUXWATPDy4EsRhnfqR1ggBJe5xzw4SME8UfWC",
  "key36": "4o1hDgs2yZJrePZMu6PHAygCMKCavBkQCpp6jxT2SJxB8HU1pQ5DGqTxWdTJeDyXxaW2wXEikUdtEv9MZmeffSEh",
  "key37": "5xoz9bFMwiG1exXUYc1w7gwXfxzqjBjmPyDaMhBeadfrjtmVStMwrL8LaZy11ZGsZXcMy5c6UpQEgFcesQvT5GBk",
  "key38": "2LxsJ3kszhnHmm4MJ7jykp94z7fBGJYjGNXpBKCBm7DJKQdeHzASM9nrBDzppyMwDXV2Z4Juv7K6C2HAwhbgrABw"
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

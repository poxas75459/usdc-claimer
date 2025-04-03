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
    "saxjiUrkjy3hzdWv7MRAV9ingCL2SZ2AK5wfkJfuna2AzFTypP9t1XnLk5RQ1UydhTPyAfFNQg5A13RdMg5PJLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S5GhzSggVeUDNnVVHkMWnDQ9fRd9BLjcB6wqKJGzJL2Sj8ApDw1eMzVxVA2DF14SWLgYCNqR5UXyeiz8KqNVdgj",
  "key1": "64PaJAL2fJphJYdA5Qs8iQD3Yurye97tUFVBwdsJFpGGq5AEhxmdEBdEH7MazqM7cS1MWx5zGwojZRhVHui6bsa",
  "key2": "3Nc9jwpCHmmFmw6jSJRbhrCnUoo6p5E8GDX3oG6PPHq6d2kvzp3pmnVZqLUcBpDAxvcSmJFbotNF7Qkjjbb7ebhC",
  "key3": "3oDiWDDrFMFsLZB4LVMt4Db5k86NpT2MVgUJqh4r66SogtF3fWo5qgpNH8AZe237Xbq548Nf9QMb4mQbFznSzyxQ",
  "key4": "51eKKHmRASyrYyzVjtHqWCLWEExMhc9tvMz3L1xfqBzCb6ktVtbeKwzZmpLHHfgZ1TwurezagvwGvAaxjShDdFVF",
  "key5": "qC4wYsAh3cKo6ge1N75B7XzLu5HRzrEgBaU1FccFcovi3rv4XSZXnTSQZcJNMcfSRz2x7UnSFmG8JUA7Tk6ia9H",
  "key6": "4zPjHxxZBmupkCEyZzXg4d4qRnbHDsuzaVysBboDYzdHtG3bo781TpGLJ5UFubG3kU7AFSWYP6wfHkdy7szn8mMS",
  "key7": "4V5un7eHX4aEKkHLM6sefwUoSZE4mhV6XB1s3kKphZRcjHRG3PkwmWLByysEnLxZf4gojYGPHxhBzs9mqDWZwvfm",
  "key8": "uNgernvX8wn7SguWcyc8tqjwuhpDTEWtuku43m43wBav2oMgoCbWQSqyhYKeyzN52gyAeRe75Hnx8Tr6ZqdFvCW",
  "key9": "7bQV952Dmhyn7c8rUEPtc5V6jEQyQVFCXfCditF5kh4piaQDzEzoCeF217Q5MTnoxWTvsr7FurPGFPqp2fnvbt5",
  "key10": "3dEyr3y7s49ryhZ8ExqK1pUJCx34E2dx98FfMGVPvfEFhYoKjTTsgpY88tFg8GfxM7CVBroJ2RasHwuswRqYjHdy",
  "key11": "2gfDbuMc8wpCeX33T92jq1bLVNvb3JCmXADk8voKQvhQDVfZDgg5fNNppb2SbLYavWN75n8UhiNTKwDPqBTQwPfQ",
  "key12": "5qfPQnyC721tLYWknZZQqF8J2PCywDEtaqxsUjmJgYbABMCcqAX3Kmmh44yibMstoxeSnHuG7J5gJ3uo2uR2gcTP",
  "key13": "2WX1vGrUaK7EUtgM2hVpcrT5zhdE8YFByN5tZLjJPcbz3YCbSqevHxYJ8HJEfms6fw5qr5BwisADeGTz8CnjRZA9",
  "key14": "5yw78fiXLtNBMvwWRtU5RVLMAMhbENGhwRJ17zDR3RmaQqssQr57VzcYKDobgi12R961cNCyFCkWXELNEtyngVti",
  "key15": "4Ciu3Atq3GjGYKzGaHVefGZoGPR2oW2jsinnbmiff1pSEQ5go5WbAqqvWC8H9FoFftHpZTzqewmrhSPsd9VukXxC",
  "key16": "2YDVLWATxAwRrpmaiwwoT5bUuSgwtpCw7ZMFAH3TziDZYioMrs1fzc49Py5He1bo1ZMtbf29R3CPc57heiXB2VVT",
  "key17": "fSTe3FWZMytJRsgtKs5gxFcSbybNmaXkkzDQgg8bAFYK47UR9dxi2m3G8NNmmcYJiPm8A3dATwUA6bHjUDyDHLr",
  "key18": "5DCoheG8hSqfo8t9Z19EL8cMtCjjSDKyw8tPjJDuWoHVbLcGwu1PbvUHAiCUVk7x4D9CLDSuPXD5EXSMDfCjr6mK",
  "key19": "25m9QEDFdSmQ9suVvwSyG5e9RaaUdi9Vmz7hTe7wNggytgRW2521YnbK4Nt5QYLb1R7rqKadesU9EgoeSXyxzUkB",
  "key20": "5iQtQ5A84xGxFCzfRZ5hUYvCm2rpXzU1ywTiFhBQ2ZY4k4xqrAoMrwBg64CCGdgMicrugcsN25zKkHfDMBtcwzGa",
  "key21": "4gJgyVFQho9u7ahZiGwcG2Cp9HLpoaiuuUBvaRn1LcaADzGD36AQFTdEGgFrfoUh43Lg67UoC5MzzM6fYip2m6nd",
  "key22": "NHugmLX1e8KkA4PWyXimqV8bgGkTjtxqZNfEh7yRuSgKHYU3ygmE9cws836Cwg1CRrKeEgqv3s8m9N1eUBPNv6t",
  "key23": "2jmsFud6qgPq6ZbVY4hk9AXLeM5L12Cn8BtMERinTBTha4tkM8DCsdZxS2ExfEm64H78LbCZMd2XjLgkiGJXTZe9",
  "key24": "r9qqvNkbBMnZ1o9fNmZKRqCig8WbHYv3Zykdz4UpxC62ZmDsTdE9fsnSHgZquw8X8cGjV8U6tLRnjKctiojcver",
  "key25": "pD7Zq6cN1Z4KBJU72CmSEgjzLi8wFk3zgC1bXbg8J3SdZQTMqtUVub7bfCJ2Z18XXvrF7sFPAuMwS4hAhrRTMDp",
  "key26": "5WoA9Y1mE15Fhdg9FnFgBwfDxAoGjm2CebHofSHqEnUeeedgZXYFL1exxgUEaFAZrf6o6ruxpVixyPpZiSbdDx8H",
  "key27": "3CXiomX7UP8qLnXKpQAfgUqcnwEfJuzHYtdMbVFUAtYwjKwfTUciHNfGS2oaYV7qGLZxJFbfaD9A77ysjKSH8oD1",
  "key28": "4NGFDSHy3jBv2jbGt6TXoeHaTbf7Jb35DAtGcMNgTUfZ96q8rkqMNMPEn6eYB6Rs6wnvPskEGb2JNA2FxGNyW8XG",
  "key29": "39F1Gxtf5qhYFfhqWC6Ee1v67scwruTgNKeeUmUPuKTW5HSB8Lawd2CvoGk9E88N152uwgMHby5obsUKFPvfNUtm",
  "key30": "kvgMfBuK6Lh2cMoL76zJG4Z6iMr7MiWLv1cffN4DJ7GqFrsBxTGxBcwNQNBgZTBtwC9337Q4NAmqMPQBGgGMRfF",
  "key31": "4czhLdJPeZj8wbk3ppKtf4MumaGj5GnmiwjpwsrnensMZ9FtYJ9NYPbBJHEVUqsso5wJLodScV73HFv8KYiS7nz1",
  "key32": "2q9HR7iq7xFDLX6o6MBvoyPeuakBq7nhxvkRtgjGi4brJvjbbj9HkqZMCqoHJf4VR9uPEf3iz5RrGnDH9SEBMM1b",
  "key33": "46YcAvmguWrUJgpchoHvQq7ttdUGggjM85M7Rm4tdvtcMKKY1pF3FEPDWZwdpvzJZPtTtLcspDPRpgsunVfB5wPa",
  "key34": "5btsWZaB6QyK4UNJThdxtTkHWxEmcgonG9njWCRuYrjCy8AKG4fKPouXo7Sk5S7KAGNjBQqiZzjCMzKC69hFZcVk",
  "key35": "2VrKRHDVfZ6Laxf6b5Zq54oudvHXwc7z7xfEiJFFTSM63CHdf8QhP1q58oTXH2WdWwt9fYDjgc8VTTi32fvmvKvS",
  "key36": "62DPBcvQGdE2pBKz7dZ8XTv1gXaAe5ep1uUdhLg7wxtzs519D6WS5aKAkGJKomyVuyURn2kLkoySq9EgJTqgz5xE",
  "key37": "4cJgJWkyyhKc6ZM65fSzJjUjxcLJrg6x3pq8KZ49S7x66SyccEqEc83j5WSkuUWHUx8Zbe7hKLM6dqRpTyTjc7Bo",
  "key38": "5uVohPHxy2kQS3N9etGhDhdNCKNNgJcLkKu1AKaW5rtQMW8E96JEG75Dg8uo77xkJncVTjT4zE32D5AtpmApdLAt",
  "key39": "26Z1X4KSzKFq1B6rbEJQwBi6GgQZMV632fjMp7cAb3DSL4TiXjjNW91iJdDsDsXcScZDYnT9Z9HQnV6V893DBXRv",
  "key40": "674CWPKCrAB88afGxUq5tUHrTu3NR9T6YefZduzJnMhEDzDDqBJM2DugYCcXoz8J21kYsBMnseuasKsHaysiRUbd",
  "key41": "Ab3D9g2zb2wmz2KwQrpSd2s13QwH9sHQ1mSSKna1qTEWFf8qtBaPd895SKcQcypupAmrBxvqzVThgov1u124sXE",
  "key42": "3WCTMoK3nZBYZAEFLdJycQx9r3nHrPSJE7sVESmZbtg6kii3yVdPQp34y8kozJCVLVZtPxjJnhQe7rTf8ko9eQDi",
  "key43": "46WnbdRjNqF9eyR4m8NtbTtz4x2Mw9KFVNHH3v9DGhnc28T1SuxrRZ4N2RKDXeqBgv46t2TP6EuXhep7puWVaBhE",
  "key44": "4Sf82YnMqkt2jrzsiKQsebsmcjqdasHA6tZwNPwJYL4wE8thUtS65EnKNiqNCBPbhXFV7iHWqUVswos9iFp86nku"
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

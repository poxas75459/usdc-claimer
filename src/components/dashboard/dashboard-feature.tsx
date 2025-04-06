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
    "2vJ3PWhgkszBZFvEoTUr3mbjvF9tW4M5P6LD4EWYdqd4R6U7bDNXdJyCk4cqp1kpJ7P5ct8rSvriqVakj8hTirL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mk86Hw1HQKqCpfbuNc7M7T3f1yavqNEQ99nXxkMLpgx8rDefzxw333kibFxnTZuRYxNKgnvyVoq2tUb6DGwWgtF",
  "key1": "non8fj4Bxzh99UHooYXgCJvwUX82wPcBzYhQbFRXhsHuBaDqV1ShjUXqfDhwcdgagFbNeSqbazbWSJNhxcjEWrF",
  "key2": "5wr6JgrFhPnjTGCkbHx48TvVqqGnXYnGh1SrK6PcP7BFMV46ex7LNALLGwo6PdtSCZHZGLWdbAcp2EJJSyakG84T",
  "key3": "5qMeWAAs78KmjJJCKjcMmMxCtzj9PzLCBMcKnyhFHK2vxigjsbWi4em4Y1k9m6PiycVk1jKJzSiUyivqSYmyC8yF",
  "key4": "2PeQn5ReU2LBZ2gECz1ig7dbz5esG4Fi56r4Nx1DGNBZNbW9spKg3LjgpncsRtrg757bf9sQ8m5HYrCpK6QtCUhj",
  "key5": "5wctnUSmbBXy61TxEgucwCAdUZ5hjg3vkz63EsUwXgkcBtX7gHGUo7dVg9HnKQcaVZc9wqvKtBeFofAiQsgkUwsg",
  "key6": "vTAubUcDh2UHzY2PKDmkwhVKMu8Lw7NnSX3eEkYvgtxMQDeP5Jo7rn895N4rpbr5W8uZszDfAUV6f68wR2geG3F",
  "key7": "2zMFz4gCBcYad1Fh2v5AphysPhFckdYUUSd8EebjdJ3LEMjEc6DzZGUfTgPZ9KunGHprVy1GTSDhMamriLbYkVM4",
  "key8": "43YDH6bRVV3rp31LvpDrat7UaiwcYSQ95B8cbyfTYigAPzcC3DaYy3pMQjkziQpvmqc8ZowNwgcFYkqgZWrZhThz",
  "key9": "ywmkqZ3W7baLwzPeVRCt3k49R6y9vASABtrHFwbgNtKm6RfptgrK7hADQs4Q7DWFK7VHc6jmRHZuYFU2h7XRMZG",
  "key10": "5NuUAwnX7Npuf3yXpesfaKLfqFN7Nq5G6qmec2quqE9MsZtMr6Fzcp9gQrQi8SMpHWoQBhwaZ7ZP26QHFTzajA3S",
  "key11": "5FgCSeA8su8UWE8Fm81eP1aaxxoVJtxNfY4JiR3vdGivgh37RTeyqYJ7PqNEYpx8zxoL9dSZrmcxUDdDwVrmGqcc",
  "key12": "2F27Fn1SyNvxMKtC9HBE4zN9RroKiue7TEBBzdQNHx9XEDMF4ngXAMRJis4ihwE3hMW5p1PeSG9X3JY3DMP86YM2",
  "key13": "3wj2c1SpawCsdKMHXnHc9d6RYas5fvDLWeDLvQJVUXDEiwvyu83GpHausCCpKRsN8BL8nhKcftMXwu9XirvCZyMY",
  "key14": "5nusxuYg8v8JoxsGbv7uL85p5tdR4xHVggyCNef4DQNHmug97AVB1rDTjgkh7tAXaapzGZNYbRNvqS7QmPpmiDuh",
  "key15": "5RP6A5gSqJLUxhNQmF7QKKrZcMzntNgMqcwUk3fsvTVupUwV75CCiyusvMSDHQZQGqXfuJ19ec9FLYjoRd5G3cfW",
  "key16": "2H4Sh22yVmABejTMEBUU4E2D1owTF1zCzwEJQUKHK33SDVuW3daLr8w4yUMzQmJcyiwhPq96FAhiDAPgmN6F87dD",
  "key17": "5CE6YDetrZCH8vmSmXYoMitGPfY1QWjAFAHnrxi3MC1rkrwiNRiSmNtaiJvp7V4crJnoLh3qn5EzrBXhjXRFtRmU",
  "key18": "5ipgC1dRJrfVa6Z3Sqo2BvWXYd8G9FGA1fJPQssuRUvJHdovfUBri76F3TU7qvPss3Xgap9yDHMy1iGUVey4PsVu",
  "key19": "23WnuwcdQL864TSXsJQ2HPwWDB6pHhJwiPdBxR6rz3MZYy7PTn5nGwMQTmxyatZaxDS7aCBPWDoX7mLnAjXenox5",
  "key20": "5TaSrnMfwiT5KSYkRRTpSGWHrozyGujfpFVE5fPFYbVrJP2WEUMbaGjNbvE5hDDPdAM2iTpgaozF8wKXCr1pxuvw",
  "key21": "2Naw7DxhWhUaonoZnAofnSVpoFM7jA4DzmjPxVcGycKwk4P6JC9aJFzsbs6caQ6Zm3rn6FXdBsqhdZPg8nVRLHy2",
  "key22": "4x6z4KquAaCR9sN7XM6jHg3Y3bKkABpSEjxNmEQHZPc4VCcMsywvapjD7XUtsRpxjsRen2yQurw55G1F3cvDm92U",
  "key23": "2vZmX4Sh7avkFzJSykDJYxJmGAssCnBSVhoxyGzw1uYftEx888VNSyqTtjQvFi5VmgzvTWuQzaJXVBP6Y9yGxuhg",
  "key24": "28HZ4kY6vm4KRVH1xshHQmunM6wyt1mcjaut3mb85A9AFWF938fe22bohusNvFyCBwihbSFLwMW9VU6MsKrmvwZ3",
  "key25": "5f9M83k2SB2E3rzQtRhrPZfBABBmiDASQb7sV6hnoxHNekC9CTovYxAtPpJs4VffATtAwoNTRHym9YQMeo3ffv7p",
  "key26": "5d7igdNFheCtvFk27CP3wPA3syjmdCauuJP29dZS5G1vCXQthhbRarjVcRKMCVw76FJpMjHVMq2PjktLdh87duRS",
  "key27": "3os4PKmmscXiuk566uChZTVG98eEWfUxFM98VTPNPNZwCjjueWVkNMyYhfXLaXG9oLa681Jee1WT651ECdYtpL4n"
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

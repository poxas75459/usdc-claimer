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
    "2LyM2XEam3gBBWAnFeUu7pBopvMQT6rUyYsdARGNZo5cSKW898AvN3ugM73zTsqQy1aXgdvXyRZni331Qy3nrTbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dRGKMVbh5YnW9tpHQVLHeeiYwFmpVDPJMhkXvquZUcX6f4PynPAZqTL7SwKmQNSjPG2vZLJnWo96LDdHC9UKUEM",
  "key1": "2sMyL5qQqn9qNoYPwXk148ozRsq2bUshhz7bdmxqw1E1ezYRbrajXaSZH5B6mRqGb1NBRHBbaZYp9XueRbTtXLc6",
  "key2": "5mNQBbM4spJF86NrYW1tX2V7Xnx9SALctHZ99n55VCqD8W4uMpWE7NjnogZHVioiGKiL3jzXkHisYXsykH5NtMJV",
  "key3": "2D6Zpqg8EwEjLeKzSJ7sbNxRhomujeXpdQEMiqcVBhEzq2ktx84Rp1TQ5fZdcjx3QHH3fnHuSYW6sUbWD9tRXnpo",
  "key4": "2CbZtX4H7RwqufetbrTUVarfjP6Mo4y6e2YSgBxQqGqZgmPNFnpADie4Wn3v2ZtUtKrjzYQ5G95v5K92PDJM8zXT",
  "key5": "5crN6iWJo5mpQWxwDvm6pY9ZQXAqTd9piKJh8i3o7CazdaAvgDtakNPEojNUxY8T3dL42NkxSp8neHbjSjoS6QQi",
  "key6": "3dSNmwW9876cSJAUGNN52rXdSRoHD7PWBfTUJRGkcPQnHDyCMabt2pZSmQq7ojKvtXAgZna7o8bryXHaex4dujbm",
  "key7": "5gCtyp9nFYUCrv5WeAKTSXCtz2P8isNk6cdQmmvANPpSj8oxSLzj2fqh5sc1yXAQUA5op7wtuZQn1wUbTjrnXZi6",
  "key8": "xAEPSeVALGJWTb2XdaVCpBPHAzcNEgJBhMCjN2isU8eEntUbyWfBzY2A1aZwWCRddedUdMvSfesCVhecQYM5Lde",
  "key9": "2bwJwuswL7CjKPNSoXsAGukAiBnrxTmbjU5HoN23QsXLjgzaqcTtpQTRLFFQ5YLAYbFyzdDiLGFNQBvYYsgefMHQ",
  "key10": "3gXHrkq57MpqoLMN6eqAxXbgHG2g95djWrDykEYC2zrcAnTmcWEZLSiZzuyjndptiaUKzXuVxHUyNgdcAGY1LpAU",
  "key11": "iqk6akHd7wRkwAbw5fk8HwHFTs83f75tqVuPqstK7gBnzUEoGv3PMSfFrNpuyv3j7TcjtJZc4L2hbxbVj1meLqo",
  "key12": "2mKwZrcqAyrmUWe8jD1faJURUbhpJmjXNfk1F9b22JiCCjCtEzujBsiM9MUnCAYcoebAM8ZjbcZt8qkHX4p2Mx7d",
  "key13": "5gofxEWPv8CXR9p5iuSDfDezqekgyugB2fDgT8fBiQiFVNkHtA3rSdfyBsvEdaT2imt6AmXMyt71ZwyufwZCJVoQ",
  "key14": "3hVCbK7UfRKAPwxGL6zgvCBY9YZGXiYCMgy7kp5f5upZNX5YbHU9UdTDex2W73BSxYJFkXmrnrXYsjMA4YYmikym",
  "key15": "rPRzoapkuS5wuDntCqAdNJ8Lx6aN4AqUbkU4h65g3gx2pVZVrjaPEExxEhS8H5btKnGh2DDnhi6oDx2j79cF1WH",
  "key16": "2WdURAC2fYwdEn2ATre2H2YovxsEoYgrd6GYe7BMVFEbUd5umz4tAmuCRLyWKKD9WFfLS7W99ygBRcGdQcGi5kF6",
  "key17": "46w5RKtJzeYxQHo3sFq8RAhFFUZtmX93x4w8wz3FNdkzdm4xaPr1nTTZ93QxkzeeoE7vvecKkNUDsbycv9kFe8UX",
  "key18": "4wFGJviLS4UUEF9WHw68K8duLKQy2jq2ifuoTCGK5JjTwNPcVANfgEKdZNVbtXyTF8JBDGwcT6NKz11PZkpYMRet",
  "key19": "qffYTGPGNPFJaoiTdZXXQP5STKxop3V6WYs3rsgWN3xag6jbGJ1986R5MDTm6EqsG19CJEM74EYeXuA3FY2tR89",
  "key20": "FG3VqNkrftefhTsv6h7Rpr1Q6uyU84mc5R4V8JnvEHrMxf6R2iJ6eXbWdVzrhH9mDE4wExkxoYUUsWnigo6mLmg",
  "key21": "5X89WEe9PE6krTRkJ2AoMQmzjM86B67RpF8r1cAa6oixsUCWbnbJjf3utXh4bz5gP8DHWggT7Vqh7c64u37aHk2G",
  "key22": "2gKnXmBjrwkSXPq4CkDgMrPbN8gt8nZQVDXd6gopzQYMucEm7sVdGP5wjKZciEohjKdK8wN657hYCpiHNJCPEnyq",
  "key23": "2wZMbMUdekbWiaKciRijXTXz29bNTeRact2HSkAkEbDCCxq5F4g2kgZC7d8GTWE8YCt65UJCiA85RpTk5FhKTxGV",
  "key24": "4qobjJo6SX8tRkitn2yaQnKj76MNbE8tCWavdRy37eyeyJisrYkv7Egz9rTrjMDMeuKYzCwoUsCEWrJbz3sCnPeM",
  "key25": "4HanHrt8e8KBWnKsRJNCfN6h7zJDGGZdu1QZovHc16XsPdMcCGt4nUmNZdHqGKTTQ5i4nEE5SSjS3NoVFMooFq1T",
  "key26": "3G6XVRz1X3ndzwK41cS12quXKz2bJPPC3D3qbd6Gs1FLPrzMPoEhRHzK4W42bGWoPiuCJVntP9HVPeqLH3csW1ML",
  "key27": "TRUwPsu5FnamAXpTUH2TKFSvzHfyUzeGCEHvnw17UXbMrCNa5yugiwHLrj7uryqGip8hM1Qfo12gwjWfBNfefB7",
  "key28": "iv65w8m82k9yLqg8c2FRqB1QfU56FEsPyGxU2X7esax7V6KvKSQ8FjUN35Lh9ikKWzxLgjftoTP8rCZ6c6yLgxH",
  "key29": "3bmkNXiMw1mbSP8D1KAhXc2CTVixgF44mvTVXW2mFEV6fjPkWbg7ELpa3xUJLjHewf9ZJ3ucRLWN8w8kkTCmx7CT",
  "key30": "3nFpBqQ3cNx37JWe54tWjD6geYxRfC9oQKCpoDacikV7DTpjDn4xzEMH2nQgdNyaKp5zFWUpL5mCWTWcCuCUk1EE",
  "key31": "WX8WFFZp2fZ6ySLNev4feW3821KyQZkB2VHf5FZ4BuuqAzgpf2h9RMm3bMg1nBkpVQuku64GKuwjZ8nzB42M5Fr",
  "key32": "5MXdU5DxvvUCRG9zqSeiUxCMtr7ePrdfPPErnjYwvTr5AxqHQmVhms5nqjM3EGUx8VTy6e7WDM1S3SU9cGTivzAc",
  "key33": "5eH5CTT69WfSp49ySdiu8dXa2XqrcdKzi5QhwmUTG5JCKafJXKHG9EBCqn89hkcw8MX3rrX3YUBRabXth8nUpMGT",
  "key34": "4zyK4mWV5iACZ13ag1P2yB9L4bCaUhmh3gfpPYH3A3iUfBgfDjCgEzuFvvGjuGXeystbNw9Dxb4ZtZLuR6N2NCKH",
  "key35": "343Xe95DmAPTbfVqTZkaTwPNMxQAAyyR1R5FbqizFZKN7nDSkHh3tTX5YBd7nRGoduvTdnNNwH3p3mHZknQNzvZv",
  "key36": "5YK3qRtgedTfzsKPHb4z4KkruzDiQxTCyyVjfW8jSKAy28Haqpc3XnjLqSvFiE5Tqmcwj3dKeaLA2iyNoo6hsoj6",
  "key37": "2mvaxzwM4efUJV2krBb36JCosBVRNeW1CubPqJt4DgdXdDaiC1anyNnP3Fu4ksRayPr3fHk2EqWwF33ZNfELGC6g",
  "key38": "63XR1gbkhHRhwrc6sJ3Xx2ht3NhQEVNTDTPZWZrj9UwqYWFdCmSPuiYpsMu9iHhtGoUtbTFHwdqUbNBukBg7ppzp",
  "key39": "66BYzkRjmv2c99PvzZ37qVGebNJ2Biaov6cQrftR72thNQycRhrp2SVYtVrYjPVLFyFjQCKGuKFymfMt5s9GmVWv",
  "key40": "4XQ2JqSsS4RapE9hxCVGUpm9LYcojvfeXkNHk8HHhanijnojvANd3wCKeQ1bpqAdYMZKDE5tmnE8uEWzTtaNX5AW"
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

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
    "TXGWwiXV3h4pZQRb1ZsoLn9Au4q6kx4RzEJi8cNjJ3nsRpsTsV4Hg3hLcie37imKRD1r5R3UG3w1Q6RTc2Xw1wE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YMX8x9o8NvUN9HEZsEFLHo99NXvAbJp3V1z8ku5UfdFno9D3jHf4QoqEHUVxbHGyg8NYGAG6NSN6XsrCMDxmMSS",
  "key1": "3cwwbrWcRtN3KSH6qHh1p9ZMhz6Zq7dbTJoGxu1zuxAXbq1933SU3SdaLijH2TbNrjANMWuAFKYLcx5YdyZQefUE",
  "key2": "23B87eZA8xDUjXq7pgAVoPme1XVxooGhVLdgVpiKLKsVUFaXrYt5QroCNh7ri46LkMvGrqCcyYUTytkoG3DiTFHD",
  "key3": "65MQaiRQghf7GhCZzjogTdHdnSA4UsC1VVXQJiYMgNraJTg3kkPkr7pzVMzmNAwZFXKkqz9kD1voRg62f1gooSdX",
  "key4": "4vagFFHEsGmBkVdwhbDXt9ci5bEzmhxDZksoqs7RYT8pjbQikpCzbsopzgnxgUkA7BfBhc8zWLS81JfEPfwMmNRP",
  "key5": "4Nzkobox1WWwCMdGzWrF4bSDc64eVCyDsESGVrwEEZeBtLK9aABS94QTYSx2N5Fmofkv8ycsZEtSwtbJ2LM1xbNp",
  "key6": "wQ8NSURRXAiPAXLALGDvkge8nuaacb315M27SuHBod6NRpdKJhgxm8rcf9sqZjGetkz5xCGKru9hhSCUzjSUpfq",
  "key7": "4n3UQxSBMYp3Kap5jbxcPH85BaXMp5ou5jpu3wsSH97SEa7RygAfuJ9D4rpLqF288BWfmjzecQKwNeT6QEdQvUQu",
  "key8": "zKwfjzj2QcXZePKLPFGvrvNLjef1Sp1YUt3PQ9EsSqmcYuTfgUUr6xt2sN8x4TFcY2aXw3qwYBR8oLAZGPzdeFu",
  "key9": "4fnozzztM25UWvTCqUn6FgDHzCUZiCX2jbi7ZHM7jofs4CcyiU8ThAEQJRnVA4ce4AzAFJkwm2nNqJx73ZtdzaVQ",
  "key10": "648Eiz3jnGxPbDJEdAeDDqf6W2h9vbdjhYWy7GPbZzTDaSPzUGRtUYXuEHKkJnL33u98vuGt6UGv3CQeK1z4rfk1",
  "key11": "4fGrTZZQ8x9PcB7LuHubohjVpVYiCrkLJ1eMNQAMB8dbJP5rzyzP9LFW7zf672kyTfYoLQ92Gq7b9YDhxXUeKHUY",
  "key12": "ejF5r1aKH8z6tDAXj53smyS1oLFb6m7MNkNodjdWgnU3FNFcqdQKF74aspNwQmCUPxyp77QtA8mxWYogQTMRQW7",
  "key13": "i2pho1xbDWjQnVRE8xv2jyMXYEDMw15GizpYyo2czBJuo1BsXczaKd5XJMso16cB8Hr92BzUh5eZiPB2zJDs3Ph",
  "key14": "HTvsyXAdMppzM6iGBqiTp9WLQqa4ajMH3Sz4ri7GWPg4k5LJrceKKMTapPpagqc9L7dbFsi8Fj8B4eXnDcAnBFQ",
  "key15": "3392TrCTES9RzCb7MRvAY3AWNuf9UzB6c1pzbGEApuDRYpH7uAiKhapXCRzi7oA8ijfrX47WtkVSjXwSuxtbGe8Q",
  "key16": "5bqdkgMCDcX6CJjNgJdPZ5tJ5WSQkke11ZsY2Pwfn4zF3uJCNz1jb2vT4roq1LMKirKw52KJidZhG2DALhxxndL4",
  "key17": "393HCqadA6D8vGCuHtZMe83kRZr9zBY3y38tiJfGo9QDNCmRZFDiEenNNHfb2oiKXkQ2AKDFGM22vkirsX7of2GF",
  "key18": "578bKjkSjuvb67bQVWPgsnrQQo3qq2Fy7uyLx1kCBP1yPKTPXZYfTqsjAZ27YSC14BP4qDYVuFmG8chHuw6Zv63L",
  "key19": "5djT7mjB2NpNGQ1VxASWM7KyYXg1HF2adbS5wNbNzfjUTVoaKCjFzXHbGb4n6UG4hdw71Xr788vgppFYqUF4Xc1D",
  "key20": "5or9oFBLEaYKFFNbGfa7QcE6wWSeGrhuoeUXVUrhEYcw4X91bFacBT9BAFHvvkgjj9YjaBaUuuz12f5GbdHEgTcf",
  "key21": "JHbjvhKuS7XibByWYdYfAZ2WtqQk1z1KMgCA3fyo5N8xCqi2pdSR28depRvD1yYWNFUwRCPyBiVBaMboYDnqP7p",
  "key22": "5p81pwodxfkMoVWs872r4bbgGzKFMJtn24W6CMg7VcWTvbafPrRpkD6wdSZZLF17JZVvFKpVVbqU49EawE6es9o",
  "key23": "2uvXPaivh1jPWo8p2hUWcGS3oZfZkVH2LCFQEE2etcpBf8REWX3cT8uN6DcfJqKdS471m68nfi9m7jdyiCTaQVuw",
  "key24": "3aTymvM7CJRMJj4c5aGNHJb5zkY9cxGTDbxuZwpkKV7Gp2WjuMhe2F3a7Fcx4EhtGYauDMVeeJcgjzR1rKx67y6h",
  "key25": "5YM5M2hwXddeumZ2cKd8KXtPtH9x5dJBxzexNXuXRVuGMqboitMdTgXPEaUS1pi13ZCjwmPTPt51bA2tF6tq7SdT",
  "key26": "4cgbzMmtqbAxXtqEH9ndEZEEPQhMxTqB6uNnDMJT3xG7Qetscf2WNT19crSNmG2ewhMNnhhFGy833ijrALko53cL",
  "key27": "aP8ki9cYcA4r2wnaVYsED5RqEGwWjcKyfTSxHf8vo3Jwcy9f6wWRZ33dcyPE6xYbwhiN3cmzDpuqhgrSqHfcjRZ",
  "key28": "5mMLpyUb4MCUezuD36Aso13HgGgXRQC2d4T8URWzMGJyjt167fo2HXK6fahBWh8cME9LQP49eFFwmBhdUfo7w8Un",
  "key29": "3KFr4ZBZpvkaoShfD7UtbcuaPmuQGi4agZcyj48ZYjJVkJ89hRak9k9Jd831qMdxxhEf9MiCKXCkhdRLFAVWVTSw",
  "key30": "pbWijDV2pYNEdvd27HWdHvapCcp75tJ9k91MBsjmv3RNQWnH1cdYC1hiZpp6bdToP2Z9LPJ6HV79A3h6ZwH5jt9",
  "key31": "63QzdDaU4Twx1ZqcxGxnDJKMo9wXEZszX7J3fJ38uXBwqCUcCttZrzAo5QiK7iTMj8jGXptngT1UbAqaAqsSz51g",
  "key32": "5T4RRDTUuLxddDEKfHrinoeQDb83TQY15az2tG4Hkw98GCWoFBJopVSUjPpMgM2CMhVzCJis2saYpJRKQhU78XCm",
  "key33": "BFrUkgt5yHmN1PPi5qS7VKYASEvE1Nt4jg4BLTFHUAuRpwD1cnHNBu2Zrk8ooutYRdgMt2L2xDYy57p1SE6Ep99",
  "key34": "2vFBungQ4JKEJSiocST5HUy11hPu1RMBLrjmpA46yx68ffjkibZXeYS6haKgDhf4cwMBJXCaebZBrhWNTH9eWc26",
  "key35": "63NbQs1v9DFspy19a5N4yXc9jqbNEqzQtNSQdaChVfmTtLfjk1VbGGc8jKLpihGhR1uTHKz31bDPetByHmLCrd7F",
  "key36": "5nebigSmv22bxsqanJbxc6KWbwsVTUMBYU4uwVvcfoZYepcGqvQYVNUGuA4zbZnZb6rWUjwbHqZo5bio4iTcY6Ls",
  "key37": "2M7RL7Hg9YyTT5TFeZyxW3DYKQEEqwW821WT5YuxeEkGtND84mwQbDeWTfJsCDHmGBBDZ3mszJrAgcCi7WN67Pp6"
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

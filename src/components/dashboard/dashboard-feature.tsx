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
    "4x3GaxCH3otdkn7e4ts8Bs38i5nFZh8ByN7etxzYnPmJfdKg1W8fMaDoVd6SyLYwq9Xx7FzACizCdgeny8JodzYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZqnSEhJKDu7NHfnDj5CrXxL2hiGdgzWVdE7UD97F6pQHGDQg8brbr86uP8JvXaGRV9keGN4GYkNAkay9zaqqXAk",
  "key1": "31XjM5FTxTXDixyKDo6o7g3Ew7F4DxRqF2fCkVH7WXufbinXxk8EofNbgrDpgJWfHjm6FVHqfJggEjkcJq1EgjZd",
  "key2": "j2sA4g4bxBK1rpAxvP8oGBXZufH5XvJvEFp8mRtQgmSafwdbNRFwuh3prmaV9XC2BPmv1binQ9U2bMZmw6A6HAK",
  "key3": "4heGWqQJ8DSuGCVpPyVg3X8CJRiBx6qyQ1HMZp4eYygSjiLNbCB48bKy4ZVBLTGFTbAuqVNXUfXaQY8aDAQybfJB",
  "key4": "uDCPRaiewETA84TpeLB56B36Ri6JPH1EW7nNWq2ZsDmrtttFMHEzshbQ3aA3rW1oH8WDJgRMSje79kQ5RiWTLe9",
  "key5": "4BPzPzqQVsXYRKa9HLtnD7A9oNMnvHdq1uRUJzmSjzLVR1crHk96Fv7E73rUHA3SMtXwQiHMfAANg2Dyqsrc2EPa",
  "key6": "26QQV78CahntKMYF9ZZRowg1UqRNUvpinbpuvN3TRehDvqvfyiPfcHYpTtEpyeFQ3BzmKAf9d2vQeHRMt7pqGPiK",
  "key7": "5aFFDPQPgpsPRYBFADtrLJuqaMdy8pEwKXEtjwB9YMJdS1HvLJyfFmDdBAytfLNGyTTsg9phyVwaYC4MrYFpHT5p",
  "key8": "61uj5cTLZksUxvvii3Uj9obVrpWJXy9LPtX2o5MoW9RY8sSuu5yvRuS1GQETNidbRW5hBYiLSdr1LBKGjE6yr5QA",
  "key9": "2J5mBCm3Er8xqpRLtBn94ewPuEH5GWkNKWN1991a4MoJRPuQWAut3i8Mo4x4a3FssvvXFuVnuxG9PiwkMKyqboHA",
  "key10": "4WgvFS4DyBgR1X6t1nxVXymudTSAUJsyfkMUzoypFnbXhxqnULtn3z8STct3tzd13TbTxqqsrLaCA3sZLAVzhowA",
  "key11": "25F7okTvbAwpWxyeS8NyZhByVAJ7AJr9cxSWxGRnrkkmvx7WvmcGCAgR6UtnJxG8yZxeyzJUFuUbGoch4v2xAL7U",
  "key12": "Fb8iysNNqihbRKG3Lw3Br3kFuTL4EnLmu2VXFMdyy4ojEoMrvq4YsoXrA1ZShYaG8R5di1mTigy8jcccCJkYJGa",
  "key13": "3Z2isxUAmibdD7ETbVXPfXpCBGSD7mz4GzAN17qPBqg2BXugCPZ5dmK1WF7n6LGvij1DW16idGuHrKvPY4anumQR",
  "key14": "2WgXCNv1Pn8pFRw7B64uXvJPEPoRvMJWU2WGxkmg98bLvj93dQ27YeMd5h8RMctC5j818HgiByemdwFDG1rURCf6",
  "key15": "ZVJxGZYeyCsFL4fECrTrQLvwCvigXVzNLuNiBTvjke5o9Fzridccu7QkyzsaXg1G5EdPqrZVbVvRhYvRstA5oUY",
  "key16": "4KYadzY1q3gSwZqUR1Zfvdpi52yoonSjw8UM25pqU83pXAddFXPLDLFyAwqjVQu5nFDUfhx8UGJyf68rYG7a3u69",
  "key17": "4T7vU4G45H334SXDLnbt1c91AAgR6Vy8ZR8tssHb3W7fEztae9CsHAow1gZnjJZLDg7ZnNhVdCeT4Ym8ckKWAtEq",
  "key18": "3YT8i3zE8mwe7qjcFPHjrVSaZCmzP7aodKALqbKh9vUhDG4jRvFPfASXz59PC8zpFgCLHrL9AXR8NpwCGW7LxAp2",
  "key19": "8P4rH5ypdavZ65oKH8w35hWaA3XosrAXUvTzx2n1e215ev5WrFiKF51kxYxACopfgfg9UDPAYCN3xjuj32bz9CZ",
  "key20": "2bzhX5j15NChQVUqq4kCwpwT6ArkExLf1yhTsKtX7Q5HRQGCvb9ZLnvi98uTugx3bsrjoJhqeXH4rP6rYgV5A7CM",
  "key21": "2to5GrvExP2pbhShKR5r4UBD2JyPKWmHNXh2AmfpN3wqmSR6hT6TvDPCL6ZnwaAz7FTub84gbyEZpE9m7GisHDYr",
  "key22": "3mWuD2PM4PuhLLTSsH6RtuxkjjBoL64gRHB9Xrea31GeNj723zvGv4Qce5xrAD2EpSukaSPEG7AukX29HAWPaZae",
  "key23": "RL4JEnHDNCwBPrttQJzT77hZ6UzWvdVFYUbSgDNwiQUmd1zvHsKhdptvBRSxgAziqbdnFGP4Lu54BtMky8mjWeM",
  "key24": "2ZKKyGoCVtQrXN4t8zCy3e9dMUkhDz3oxt5KPhZVqZp9VEtcEzXWwCWWGMFmowncaYe1kSXZXTVrmnkUs3Qb7eHk",
  "key25": "5RCwqBZf6DvSaxedwq9yA3GmCczdNZqJqKGoiA2S915zr9Vz7rjXiDCST4H2N7Ag7N1PbtGqjyHpZ4KT6NgC72xn",
  "key26": "5YUseEKnc2LeTcW8NAXekkamyjFVKANunHKta2fjKYZvAHZgWmjTGgi6VuNgQ8fzCybJLpWZRWZKA1aJLM96hrPm",
  "key27": "5Exu7wp2xJkjVQ5pUX7ddNMcLQuMa6j7eCCqR1hfJ2HJkHwVtt62SMg3kTxGssLvrgN744cB7Sv6gWvFUASyMDma",
  "key28": "42xKzoRJshyLVnW5JpQKd1pMGZCNL6Ts72cdjJRLm3KnyRkEdShpfbE7hAzEhPzBYV9vTA73p3Udh91DeihX2n33",
  "key29": "inzHDr3u5z39S12ST9e21oKeuXEFpiyC6YimjUPuL9Rvbhkxv3niGLKXWbdCwvwm7QMBT3iUywxkrdgKBQVajwx",
  "key30": "rC3KDjxHNzfq57Fp6A6a4oEuFqBckYpDuAGz7s8QaNhJVRSD3A1c7U4e7YSoppcuL9FxxT2qsjXZTNcC5ZkUu9t",
  "key31": "iMhM61bhBG5WGnn9TXUNfVqB2GcYQefUH4epDB3ZrJmUaNz47mE8sPdJ738afX7WFjZdZqztN4P6rHdSf7EsiVy",
  "key32": "3yGPQSiYWb5vPiiefus7vVXEJKT8rtKhUJtpLXAuTcCpNuams8VuncwFTdsJihmvQbBrwhbNvBAwFFSzg7mB9FtJ",
  "key33": "4n5XcCXmHUsNvvJuiuNQaHJ1Aednwkfz3FyvBSza9XePyJ8YQfi1ScCBnWTHsTVGrvoN7Qfn789xqBPKVgwASpzS"
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

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
    "3QpsxfASA3a5Wzyv5rDUDskjkjYBPiuAHkY9GAHVg4GZZPeV4Ck4E5TM9nzi5PxyZmr1ch9ai5Uik8i1WsuzbPYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgUCK1YWZyH6nPbqCdiLd4LdHW5MyBmhfE3tNAZDspb1YSoA5EEaSnH5pxAMwwGdJByrkP6r3kceeZJD9nBqVJo",
  "key1": "3wnSWNbZSvcfPKnHapnUXtfrgxENsmmSZ8zpYSi4uc1iwv3tFRJ1Wk8CYFiYC7r9YuvgaF289TzcMrv4rLTk6Ukc",
  "key2": "ZCCMLFaTXEg8UWws6JhAMbW3v3eba6rD52cCXRcaPTbxLquqNYw7E1eZ3kWKRb8uNzKSnQSuRfjoG8MTn4UwQka",
  "key3": "3ZtsXvCb3nnYAQnsnLgueZURmvqSizZ8Mb6tt5nbqJVVt8xxi7onc9wtAVQiJfyPQaazmii3GnpQBiJaq1orZpkW",
  "key4": "5SWnqDty94DkNCXM48mxffy6jMmPGvdyS4GKM5xyqHTB92DMDAHk6C8FMSY5ogRiSE6ocZvmEdwSrB897nb6RGG6",
  "key5": "3hQXd9nHkd8PdwvVaY6HKxjXPq8R4LWxM9Dv8GopcZFwQRN8vPbBN9KHRwnP6y2wEAiRPcZosT5EgK76ArtduFjZ",
  "key6": "GG4dwsGmztTQt2CamQP6jrgAHQCXYKqKXQdMwurdpiGgKa2XmfGWS9syZ5s9dFybaWFgyasXcYsK4RfPM8taj3T",
  "key7": "46eghWPAwQ8eqrQkTTDK1923Ri2uWtTvFRHEKAEfuihWdatthjkWtqEYoXz5sQD2Mb2q3ZTwJchvfjTgUnfP12o7",
  "key8": "4y4hcDe7TwaZhZ8UaAx65q7LfRXNNvrECHQkbr3KpEsnLLZ6efjSMfFSCpJCRf4rvvorMyNHKa4WENpzkurjUAxF",
  "key9": "5vPRNxzLU6cktK4fPwe8GZCQ1dS5pQGC69BoU4hXyQ4QDF6zyvVDPvnbHt2kZkRbLpwReErxwBn9s46ib56f4Ha7",
  "key10": "5ZVT4SAS2AN7yFLcHNFndAXyTezF5FmrLwYBfV9NKQFCU38BTRpxmYdDUMfTpzgvWpkejkRpjWfrRRNXj1QTJJaL",
  "key11": "5xUYQn8ZhwKsWwdr3t6gzoXVQBauQEaxjwBXSKGHDSciUJTBUnSuWZwFERueFXhDyoYzAbKoDNLg4FxmjftZTkBA",
  "key12": "4oB3TG5UNQmibdaQUHBqZ4KqRKtJujJJZbQG2BBmFn8MfBaA87Vbwwoke5zsnDbSsggEN84B7xbqE6NQZcqgiBX2",
  "key13": "7sJTUC3HBnVD5Lct9WJdfopAXk7ykjMb1GsrzQCV1Q7WLaACwvr9m2AiUAVTA4ccjWxrvarxZA6XBP8PqWLYzc8",
  "key14": "7STibxZvj7vvSUcND8YVzd5qTbwwv8m1LPtKNGB1PdfvLCL7tm2bra4BkjPvxzPoYPxoErHNGdbuJBFNvi1m4jo",
  "key15": "3E6mdXwvNUha5tWFa8PD3YXza7pQRzXH8xWMSwwFy62z5hCmuq26rkmmzL5kzdpZddzU8Ai4uDCLsjE1a1nPxVpS",
  "key16": "57Unq3tLkqGbrFC3xoC4JttFVF1fAUJunFsw8mLvwe4HfieZ586Ua9Zwv1y57q24seMuNffCV7JpP6a1nh1kRPj5",
  "key17": "5CUY7HzwUsc8vJW5Pz7aT4Se37dEpMyGiGeAv5QEm8RUc2YYz4UHkzrrHeTF1zRQ9nWRJ9GRwNyyubxNqM4GCxEh",
  "key18": "3CvqGhKzvzxtcmR3wRqinMiGBHu3b1AK8tU8q5EDRGKf3pxNeK5yrwup5CTdFSHwkYLkhH8giJsrwEvwCp7j8reX",
  "key19": "2o2F41Rp8PZL7HQYYHYZEtobyGgUdzQQkZrXZSeV7JxDcD9epstk75AQsW8QqHwTxkUzDp8EBhs4nKHJFo7cdxk6",
  "key20": "63pA4YVPpgLLCmEj7e5uYLuZcL4ijjiZ5juskoe3y3YKXSXEnLkew2aXAYfXX3qAz32hcLDDL68W7f8KTRM3L7dZ",
  "key21": "4mafZ4ntT87u5qa7vWYvfWiHYJPFvUBaN4X6Vefh2MVa5LzTS3roZHG3Bpfkpy7xRPmmLaD89wSVvVVVqC2CK6Yk",
  "key22": "3kEy1wAvnWNVKQVubdQcRrPxjRtFewoMrtj36ka2fL8kJqGgmtvkyLT1a2oyHmuT1NHUXvB4mxYkBmRp68ZqZNjB",
  "key23": "2pZwxU1pt8zGq21cqcL6Leqv4XgytfaxiZHf3ZYWutVFVyf3U39Av6DgpBULpmZG6j6UT6UhCWxQKzmAUVTQAJrr",
  "key24": "2dupQ39EmNDrvz6QSSkcDCk1d18h6sYxHjs1RjT1DdS5X6QhEFQcdX16g93Ye3mw3esckPgTzZpWbLbVrAngT18g",
  "key25": "32mpBogJnVNB7J8WEfQk1trqK96dVeQxpfr9MedTx8NaKmbJ3wtU7cp6EVeKNbd9ZpagxUfSpFRXJVcuPoMaDRfv",
  "key26": "2TCGLL4TbReBYCU6ohuz5aJ3km6GpGsNn9iBzq7BTuSsWm3kxFwiCFHWSs4Y1Q99i7DMuMbGMgzq3S85NX4jPP6H",
  "key27": "58Be4eHAqu4zuzu58rzGq1r4PCx2bBTuAgasunsmXuYagPBS7Twd7S74nU6tX2zSrRE73d1WxW22Qin2g18MmKXz",
  "key28": "2NXUcAP4TQAo9wDGfTH4xbDc1XY5QnpPyNeQ55hVWFXJCAEEcDNi6x2CaDDw3E3eiBjHuwxEvWA1kg1r5dcCMLGm",
  "key29": "2weJQ9ULG1n56vZAUCdc9oUmtuhD1dKUiKkZeDDqwkyDhrXvCGuFFKj8GnRzLo6km2cmHmU9Vb59ncFm4V2drrBZ",
  "key30": "DEDM9aab8Z9snqFKswhAU6Jz78Vz7TfuiHcXy8w7PbckpDoQ2DPb9caEqj5vBJ6TjoxHCqG8T9uSH8pKzT8Q3cR",
  "key31": "5goQZMyG1wHLe22P1bAWXvHUz4c4BcRrizCQQx3Y8F7Jo7nSNy47Pm2yQjuopw4PheBryPZpxjY99zHmrGbvXeC4",
  "key32": "4RG6YhUukSyFa1dyUhYnq4kPKihUo9K9tMw1krbnYnA9ABp9yzpz8uuVn5rxubBFxGUkAegm4R9KBcJA64XmgU7m",
  "key33": "9dDV9ePxwqo2SzmoqL595fsvvEVVReCrWRMnSv2LTTV63tb5AQEdXkqCHPswXHqbX1u4VX5tZiqoiwNvPhXsfKS",
  "key34": "3EGuoSeitAWSQ7tq8d5eDDGbRgCuh3vC5YjDpX5VjqiD5ajvbR7EHCSPuZDdKN6J6Jq6Bwrfjf9WQHXmjBUuAK4y"
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

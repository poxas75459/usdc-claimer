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
    "5x45Hezns29akyduy3LyU3WTyuSp681J3t68gfY1H1yfBgQ4xdUommk1eDcPRMKwHA3waGUatHV9GfyyZvLwiUvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNy79V5q3vwmqyVPr9R2bRZmVxcKp7CbzjJmzxbngy2bhFEVcDoTT99PJ6tvVF9eBHni7GGqrUwTEzJTqQswG3k",
  "key1": "5PBWY8K5DYNoFx7k8s92GppHisXHtZGhyTX3zCfqVYbqkVgW6jHGy8VouUXLXpm7THppEBry73eSnMjk7tNkNkwD",
  "key2": "5h9bYDGdL62MjFS99Zse5kjTat2s6fUBi3txTgP8phZpz1o3rN6PbKDWuJoTxvcFYinbe1SjxmDkjd4QsHxb4K5x",
  "key3": "4c974g2BAWGvmmKt8fH8MF9WGFeb9edCzfQCwzne2DGyZsEdnHqLvU9UAVZVBJjrxD4bzJaaday1dunPJ4SX8EnA",
  "key4": "53rMQmXk18ghuabAJzXBkYWGwfb9Lcc1qzByhKJ9e3b2tLnB1z5GVsDeJVkapgnsRmsdW3Vxm3CCSp7eoEzbWAqS",
  "key5": "tNzYHZJNhETcuZLcewiidf8BC77C6fQE99Q11TY2rTLpgW79noovvtGVip5qBqGToSqe2tmKixYWTw9KqTnYABt",
  "key6": "JPvH4imzCFDRf7dkhsxSWeafZK2pbgBrL93W4m4XZAFryymzarVNm1teobBumEy7LHMF25yyyhXt5a9L3n2AHKu",
  "key7": "6ZpQhAsnuMwZJStBN9FpVFCABJsfGM1cAV5PpV33f4JoB3nXnqYh42kVyrN13v9SY9BfMzHURLgHoVp93KNnkuS",
  "key8": "3hqe31Gp5T2vjb5zkWQKvLYbr7sLSeZUBafrUMuVYEGQ5Y9MUWqfu9sMLRPd2bXMZSmkHR9RouNF23Gsn4SsLrDQ",
  "key9": "5x3fNkxiA5rZYAcXEEAh1bNjn77dj1DkN7i3ftrdDKvL8Z9qkEiZRirrDnUNm8SqSPJpCk3MvHqEeZBEDoMT5LfS",
  "key10": "3bCKK5aQ59TNBcQPGEdNcdHkrcXsLyQrYYPeuSEedG3B5sBcxoes1zB7hACLJLJFyPUXU7GJ6DJCeNs9FgSdZpg",
  "key11": "3CSE3quqVnV3W7SiTMGkjPp3pdbqa2YhsRJSynBiWfg4mY66uQyhFRWvGKcVAUVbBMzepgYtBsh1wuEk5fB1cEj7",
  "key12": "29BEUvJ1zT7cd2yMxxqYziVXL9Ee1rHefaPZmHg5ieHnbMvPK7y7jqy5Bo7QtJJpb9u1ztXsohte5H4HqY2vFTJZ",
  "key13": "5H3AHYgHrdiGBoxQuqpFvGyc2kos17gJTQrfFzCPfiCdVkqZcjJbfSWPbQSVUosAy7cdENzAjRVpFsdKN777ftna",
  "key14": "5FksGiRw6Fn4mberJQhGgtdvr3W5GWZZKCEuC8j8jFxT3bxnifBzFvrdK15yWipnVZGdcz6S8Mm2dxWMkUAVNmHD",
  "key15": "3HP2WjPeeBmwW5esc8KkDbsg2BTeZWVNY2apY4yib7xaxE513nyqxMB7RZhiSzbEeVa3bHXTgPvUJpadH4MnRwKR",
  "key16": "2ZDiVagVQioLYjrjtTHVNujZUNN7zzoDj25qzqFR1Zd4anvCtGgTwS3fZdHneDrZ63iE7Ngm4hHdZhaYaUMUx75k",
  "key17": "4KKS5y71gJ1Cfk2LwiqyxXra5K5EyZmrMkCxSGe8MJfGcbLr4VRY9fssEFF14vnzU6rLYZouTMQYMd32PEFP2TTB",
  "key18": "5K7E9FGUwVWFySVqV941qr8FFrdHHNkQDQpBt7V2aW9eYCyTwHEqMju6UHbi9pREivxj18C5raYj7JqL48pehWFt",
  "key19": "4G2dzVriHEqwRQd17ZFbkjpazAVGUaewUCWSa9von4evLDkfTKsidvV1rt58vNtQshebsU6vyRemvu1rxHioKkgz",
  "key20": "3xSPkWrLggL36bqzzV9WFjWLjdF4JPDocQDkvys7UKGBjrL1VH6mGEZYCjFkj7YXsbYnW7m8BWgXsB21DrRRhR75",
  "key21": "3HVe577iJREHobQUdbDycgb488f3h14yyEhim76EVbGZL4TuJe9Qkj2pG1T5khgHhbKhNToaVQCdqyqmNB3izm39",
  "key22": "3PgZh9iTFz7yEJrFHAvr88Di4cp4i2a3jSktogHmLTWu7QYy7BRow9Xw2v2ZcZCnosAcTzSNeXEgahCQFyuYwGWk",
  "key23": "3xVJXSfDAp7EUJBooP5yWTJ7oqMFAikJwn4GTucm2Qmd49kwFxcVXVukpTvNgsZEXpcuoepRTny5V1Eq1Ac5s8Yz",
  "key24": "67WguHdKTxpDUEKz2cjqsHd8X3d8k9ABBNq6WZGK3Fk66yTkGThG8eiBmufcvEUmeArM26VqyZmS61mmJnf9X86",
  "key25": "2hRPucMg7QQQSWhe4PRsw82C6jHnYfem5xCFLicy3mJiUJfGYZbrcgTtYHHitqXSxSAWnk7CKC1ehDqjYMEPJtCs",
  "key26": "2SMerJHmQ47CzLU4eBCzDmBc4VfMT7m73PoDQkpxyzaRK4nFHNbn9U9YtPReEkTLA8UMmm9rvpwtUfcQx2QEa2pJ",
  "key27": "xYw6F4E9CLAfNj7YU5ckWJ33eG4e53gj55q8HCL4VEwHwtczX2GqzD3MUQzBdKQnq5u3TSxH9FS7f6xZzDwzxHg",
  "key28": "5MA6p9QH1urYVGQpmBdunXxJSehZZf5DDWSiK8Cc75P9BrzYgx1MMzmZiXsi84sVPA3ofvkatx9RyYBFzuQHao3",
  "key29": "58B47q2FjmYbK5VMon3aUWxewibjwDiCEy3hAnmQFLEU53x7w9udNkmxZbFbG8SakokGZsr3HmnEBMV9nr1yfS8Z",
  "key30": "3Sx2k9htsMd1RhRFD7owDWoc46owoQjWEbXaqmN77Dsh4WP7ZYapf3PoZHFxr8BGwyuVFoq5ozWgzZBdK7NRi929",
  "key31": "3aNSsU1Q2caSY1NcPv5npWRDam9wcRnFj8LS7nN7ZKJxFb78kTUmvLSfj5TZCCz5UySAcBTCTSaFN49Aogn8XcSL",
  "key32": "49GQxsLTwBBWLZ7nT9MLAt72buuerY4TCsxTFKqiaYW2dWZ7F5Vv5koRNPaNThPXMsDUWM3VtMKezZyxURPMjNa5"
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

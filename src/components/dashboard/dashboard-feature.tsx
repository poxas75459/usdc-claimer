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
    "4jXiwVZ9pv79zNSVivkozgdUTKvNAABMiuDd1oRmkGbSdHutUFdBuh3nhSenj2WqnGKjsyyEqm6ZcshT8t5ZwfyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52hL5Pb4fQWwHqGzPvkmqLsHCpUu4TEiVq8KqyZzCAYBJC4BofmGHw2XEtFrUqsQpKz7RYdoo9i3wohbkUsaCzQD",
  "key1": "exBHSn9twgc5TuRmUKNgNkW5J86y6WEK9vSGdCypRrvtmynFxvPPvyvtERaeny5bLVETS97ba3gC6SJq3e4j4YL",
  "key2": "tmtM1WVgLtSBUbqp3P77Yt1via2mqW7jQducPoWLeTvEFq2cHDQ6YKgqJ5qC9vPeKVdouZwrtwNJEfFx6q2nYMB",
  "key3": "599eg7nfEsGXBQ2CHeTkkjXCHtm5664sD7Kmf2xcXEF5vhYxnC6EJfKs4CZEsD1PwziEGVBcaTqxZGz9VzraHkPX",
  "key4": "2tyJANn3ctbw7mG7hMbvTbEXi8mkuDhx5cG2wpk6oUn4soPWP4tLfUAn79Rwn8poaVCr9NjrVz4vF4tGug6T9Nro",
  "key5": "4LYTqcYebhbtVEMqczhqNP28do1KNmvnxtGsZGht9SsgVbUxBTeSBfmzyPAHS37BiS1VN1vvhQBpMiS13PQK1Feb",
  "key6": "AY6RgpxGcQqPuRnAn9LukHJKdTVc4qZXPoUPhjDzKks16fbbN8pqgAG9RWX9PcAZNE1NoBthjvuVkRBTqs7fJvn",
  "key7": "56uLvfH7reJhBUAHK7NkHWuqfFoYjLuAaiAt3rGwDioKfAefEiFzCb9yC59f8RTrBY7VzhEiNHdCanj1mz6hzkau",
  "key8": "5mgJwGTX5rcpfkQCGy2c8j2bkMqeHKeeT3rsaATkiZbo2enroRjfgQD4ADLryB5LkmxxTbjEx643YYrKijkMRre4",
  "key9": "ytZMEzesqG5Qik6igKF3GcvArZMKn44vqBwTfyRnLRK9esK3hkkfFMPfzVt2j5hN1ZmU7wNLwJJJA1wGVZJFPKG",
  "key10": "3uemSEwwzjjGfoqcFZY5WWHd1LNsoTtvBetRZ32K25duRKyGQMzZUx5bosBweTQBH8tPsrfmVfk8gt5ZJPV3ZcMv",
  "key11": "5Bp1LWHX86iuKkTCd87qsYnoQsMpGTMPPv1mUsxE8TG4Kp8ZxXj7UWjckrhjwgtGKf7rJw5JUBn6rwpXAxyTQKjY",
  "key12": "448BYAiXqm6Tx3gnJtWcHU6X2VqmMeZYqsYg2TWQS9osE7B5azR6xieYYUMBdn6ewgAXPhwRWBPHmoFqRS5YXubJ",
  "key13": "5A3F8oruSHSp74CzZK3YeEyJRXN7zoc1QhrraiLQnpdPz7fPwZfXbwwcCdGso9nrpv1fRBwBXFs8q2JWJPqF6W6Q",
  "key14": "4X5CBCQthjrz7T1c86DTuF2gWd5cxEG135nzFezRVcjaQGpAZqugumPxWmaMzR2WeJS43QNbzo8Uiar7qtrKwqcn",
  "key15": "3bfk6oH37iXmz7wEz9ocMTrWhTeT2b1whqqfNbnvrSMfDbWr4B85F637WDQxiEJouYYLXVJBxhn2b29qosZuHfsc",
  "key16": "41eppcBMDb7yHDzAKqRDPWHevnkfHwAwY9sqPMLny5QoJPpoTgfXQgAMB3PdVZAA4Yxi7nKTAQgDsGgo5fU2Dard",
  "key17": "TAXarnXWMr8duf57Vhd87GznXhYGitba4Pi4WncBrHfo3BFpJRktfih1KubF7qcYvh9ayjXL9sVGeBmwDa38DyS",
  "key18": "42Ppg1beDGG1U7WjrA2MR5hwre4RmyJDTgnt9E6gSX35guomer91CB3K2AxLgwevU5gPSfp1UxmPwY4KLFpC15VN",
  "key19": "FgKLenWkRikFgJ4q2KdVhEZRhrTpoR3NgitB5pB2M4KmdgUDNrQTFx2FDJLxLMTe785TFYXq19PNB9xjbSP5YP3",
  "key20": "2kw6EGkwxyQXCDrTNgtyXkamESaMtfCSxN3xUDDXHAcvtXLbsBNcZgbG1iXLWrjwFDJRB1dGeBymVDzTv4dRZqhR",
  "key21": "5oL5RUbeYLzCnTJbshydqtoYS7CTi6VhYDfRULJM1q7aMU6zMTj9KcKt2aVq81DVV51qhCxt8NuBcxvcUxvRcSL3",
  "key22": "fdCoe5MQ47pMpqbcjRWNpDuop9wT6C4aCrJZTKzcEuwEcUqCHmsFJ216zkifNeuXtje5SG1kQon1gMafAw8rzEK",
  "key23": "28NSvXgcHsmXag3St4r64wzmCGLW2M7t4kkLgQ4V92fztkQb6xRCcjCygksSa3ctx3waqwJ1Dw3YtkNEuJuNZ4nC",
  "key24": "81J4b89Ju6gkQPJpbQwvbjzbduHBifjwqbC7P8ajAWc1uUWBNYKoECrV2apuQaH2ScKo8V5XtfETGNugEya8Mai",
  "key25": "CB8BVqdfAxFKU5WT1TjAu7tKiD52PcLJ3bAPWFpQTPWV1UxNMk6yTtNGnBskXWUjGEdGgJYN1DUVeb7TBcJuQfi",
  "key26": "55gyJs5oyfY4MQm2KABX4b3fVDpnx2HXPdmUwAD8fzc8cZTy8P1AnYQZdEJW31LPB4cXeRfD6RkE4FowAhtvKT3h"
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

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
    "5ETjCCspdvWHcHtuGDxoA3gefGDYM2ymmYpkXWrtuYLbesYBxW4167fez4X5oxFtP7ntqDqikYJ9cUP1fWVbJuiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vv3A53khjW5Kh1ymn6CKAFMH3iP145kNL4APgRZk3i6gC1pxLwmngsaSr53VsJZQpKEc6PAePmw6iJ2xqDmKBny",
  "key1": "zQCzLzTeAkp3CEsgQvf15GGonPoaAGJ1BFZxaaa2S2j5Fd77xLzSzw1NjN951NkLs9rKVQi1KRyxqiUDn2JUjTF",
  "key2": "kJoSeZexaC8m5NpUdU6p2zvtshhFp7vuyzrKYzQVCsMQtuxmqNnHcHzXGBxN8Tg5ZSDebDBvqEzqFYteDr3Wf1o",
  "key3": "Y9Ko6ohdPvV85Aru4rwrSZDyz8u5LirS9S9RW91xbbECTxAJ8yYSNt82NE79zqV9WWatDiq3XNM4JmXoiYsEZYt",
  "key4": "4K4s1cHGePH4mX4NPuFPwVLe9uxGBMjRMjkYzLtqJ7XEy4MUAgCb7AgxGNd6tWDEV6x3cpWdZWWNC4Nkrv6AfNr5",
  "key5": "CMTPFdwgHUVdR4N9sF2aGbqm4TetwCQePmuScD858THHUfLKJHiZHFHPBFJvikbwTWDHa8WLFMadcS3kQpS41he",
  "key6": "4NihVKUkYk2sD5g1PGhj658JRJtc8VtCCjgm71JBBk4ZRMwy3U6mfEE52aCAabFUATP18Z6XVJy76gyw1e8r4NH5",
  "key7": "38ifkFuAEiPayTkvo3VtZQyghphcWxBJugqKmG9cRCcLuX5aC58X6TsyfsqjVbGhYCLmMC3sHnXxPw3uuQXpxM3p",
  "key8": "2TBSD3g8Dh5YRq7JquxzH5FuzbNnAjjrmMHCWCmraQgjnC2j2Y7yxmf99r6Z95JAronRuYgykFKcgGGFMXiYWrS3",
  "key9": "5mRp68SACGq63C3kvnMThyBzns7gib8CHo7NrfwtzeBatLpx3U2bbhuf2j6DXi484u26C2jXpBK3R9d2Em1hvZGH",
  "key10": "5gkB9KitZWGVYJdqFK6dhRKyW7tUdhRoYrPztE6WTng67tbDzpy5zTMqUh4zSBegbZvVNJqvzjK1fTmRxZ9uvWsg",
  "key11": "iEWoCpqXW2JETmKEdBzUAbPMU4kmirEKkAdSZz6y6QoWY5hEXd6VGWJssfgws4DuzsxzDQZqBG4tcbFFbkZoEmL",
  "key12": "31rDjrqtND3EJHwGimTaMeNvznDUc5TFy4uzuwRgvJYpbVjdVAqPQwWfuoJXYJyq7MS8ZpR8gdtLiR9EcRugiws1",
  "key13": "3oiUHL5FLVb8cLSPvcnEeZoZJao8h5EXxbb4mH9ZrkjLc8ZBZeZqM8H7oRjyFewKXrSwojARnZfve9KPahvoVk32",
  "key14": "fBWS8AdopfkvK5JZZn7NBUZA64DSXMY8ZtSUkUS3xE5xJU88SV8dKWGRUJieFh9q6y4SLG7jepDXL5oefnJ3PuA",
  "key15": "3NfZJRZzREVvzyi3r88ExLWnswk9uib32byuRSkwLnPGqLugeCB1ttQ4oubCgDAuYrKzG7iW8q1NmXU7nCZripF1",
  "key16": "63Rx55TRLtYHezdkkaeGUwLkdZejJrsPV9LKYNRYu3pWhF766dDmuLcJuzKcWCLsWfA1gFvRY12nUotrZC9vrBT7",
  "key17": "24LPPxDFQ6bFfaW2XHDhiw92U33sLJ46sCdZqpbV1yHS5oTACWKQ4p3mwT2FTe6nSaW7aPg5ybwgUKPUfYoaaTNG",
  "key18": "5yZcHVuUNJezvXJyyW9MfUrTYUwcLC4Ga5he8uWXXfd3hywEtVBPnQygdsbr2HYsi8wGTq4VQZYcZx1zXNTgCxLx",
  "key19": "5xpzdtsCe4D2WAnSrLNiMPCa94P4Pip9bKYJ2fo62iX4LCBnBKyMroV5NhLXGbK5CrwekfAVrcLGB2o1powGxbbY",
  "key20": "9zAuexABH4jndK3fXnmk421iHwAAcpQS47mtRTAkrE4suuDQTXCXQXVVA3GgeeQSsL4f1YsnbLfGCZkMDN1awW5",
  "key21": "7JokTo6z2iCtLN5pfguWjodiSbspEgduDAToFBRytffwWQSkFzq8dkTEmR9zcxzHc2kru2fgzXh24aGi5gE3KLo",
  "key22": "4GdLoRBvQHvXepXCemY6SZrcy8jktep5jSFU3r8XrhFNmBbyp8v8ksr4PpBBJ5kp7jpZhtvKzBS3eYvjJCXTwBhn",
  "key23": "4bcYspWcpf8hkmXRgB2qjyFry2snBziXjHLTLtxdj8mF4F9cwgur2tkhqfKJuBdZMwsCCvqg4aAXQVXr33gJwWT4",
  "key24": "3LP64bzk8zXdEnFsuTxWT9JXL5mRnBRc2u31hDAQmPBjX4q3f7APSHi5qMVcWk4oJSxQvdCVRwR7PAeKerMSA1fM",
  "key25": "4mdWj9SBcdStNRpSQ8EEyAqqkk5gSx9HuJKBWyAQXV2dTKQTcouscRDRpMJLox3LYtPG8H2v3nbem1STq3b4rG7V",
  "key26": "3h9knYbNunkH69d3TSn23yjKkq98aVFLQNEwM1M1y8ieEqpy6CPZoQmUyk9Kd5EbQmoNir2ERFdt9CU4QtN5BYwC",
  "key27": "4mN7CFfDtq5eQyShtzkeWm5DSTCwCWNQnL7q9e8pNpYZ1151pLev6uKmvHeAxK8vUcoZu8Q3GWpUGEhrjpURBu23",
  "key28": "5NwThZcmTfuGrfp6EaP8HoQQBpx5ajZd9YxkS9wtuC191UfHgg7Mu5s8SbhDUpam4DgJHaa3SKnTepkozgPgbsi2",
  "key29": "4VxAg19Ysir9ao6KnEoi29Xx5ndZT1jYDksQn6rR5aq7q9rCb7YCtFnzoNNJnXNf1zhsoxX1xqyfRWmzCQfNAG2s",
  "key30": "3HF28RxfRdu8mtiZZhCsfyMihPw8YPQJ1ZDdVCUKfKxHjaWqRMXnFTRxXbEaDGZJouxg4wo1j2oxJ11ZMi2CVh3C",
  "key31": "2YU99sCnwHnLL4A3FHc3xye6tJ55NLHQGELHpmU3BDocvdrbmGoUh6wUvmHFgHh5woVwUzuVQwC4q3rFx7xCXAJG",
  "key32": "5urEfj5adFttBN8yeeuUF6VVENvRqJ9uWHJwiuJSAHL2GgtFjCSfQwynArcVMQ4dsEEgUbwe6muhiTHiQxsMgroE",
  "key33": "VChPh81Kr34cKHQWZcBZ3aEYcRZyvBFruzC2Zo1EMUCZ8iN6RBHrQ2zehFQmwcvS8mb2sBhpeDQk1W1KBBpRRJh",
  "key34": "Z4X4kpeH4UfFRHNc16GeEYBZG75yM66zWU2JVUYpCNGDGw3RTxXDZFkYgvTz2AG6Ed8V4swa9mj5QsxgWBE8Py6",
  "key35": "5mFwxNzakG2uoQt2aCK4mf4Ldk698j4HB89T4UYhjreFgBAHZCiq6xhnS2NecupwfKiaiCzjQFN6tyw71DnEJcRD",
  "key36": "59udMp9GtnAUucXiLxzHxo3b38W4W8RLoRBwoUVP8vqqG7WqFsjj81zbeERRZz4rnFF73y58LTk47jvFbjC34n6Q",
  "key37": "5G5eDcEWcvqEknkhAPuf42xUkFvyuBsDf8uDBnp1HNxFM8LyYWJQLHUo4uNdnqB6pPYhd7TUw2q7aDZEi3uZVx41",
  "key38": "5bY4NXvJceAQZaakVEHyeEXZr1rwHzVCZmi766u778nviJTPV42ALQowgB4jBYmBfRfhkJAhN9bbL54sc1jrM282"
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

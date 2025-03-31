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
    "3bJu8A1VpDGMHwD6TdLPoa7mmak6Q52iwpf2YpUQDVRhXDBnEgtvNsX6ChgYrdTo3wpSGYfHMZujyFfbWtwLnT7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rya5CJCHtTEzGBVSqqcCudRbJAb2bThwY5rrgoEXoZgpxepo9P6Zr8KAy2BN97VrxzvUWNXJQjrmMohuTpYsga3",
  "key1": "Ld52khPs9QFamauhtkbeGhCVDvJNiL9Pqxmfp9d9itQNEBSmH6sL1pY3LbGTGTk7pfna1e6U2ZUa5LKRwS4AeeK",
  "key2": "3FBGaWKYneJaCMfLEfKZkwrXP76jnwEF5Pn4V27rf2Js6sUMvkVEoV6k9RgYBRZRGuEcY7B1i4cEp8wAsyDEt1a1",
  "key3": "UC763mb5Xsb1cCDjik2JqCvom9EBB4cX8YDnghd6UEthUxbSkbSCh64CfrLPQ78K55UexdEhYGjmG8EXg5SUTsq",
  "key4": "2MQ1AX8zxy59jnwchpRB4UY5GD8YeUxtcycy956Rs5YPgJf5DLcYmKmkV8L4VaQVrx7t1MAa3FUU4csDrVkXJc5x",
  "key5": "43Wdg8Kjpb5yN9XTtdgvtWosUFzwowtATEdYyHMz6f1xH2YDdV6PP6Hzs13g96f93rrsSN5oeBXdEMkaszZ8FnVK",
  "key6": "3bcWnzzh2d52dnFKrtBa43j1B3c76A9moVt711EgBvKN4ZQqGk7W6QAH9rTr8U4QHEZQcFLbqmDjXdDXa4CAfpCo",
  "key7": "5W8oc7oG61m4sLyUBJ8RFcpDLsoKxPz3HQxcViMZbPsp1YvvNuK9PeT3e9ksF9FeScH62DTAL1dKGficpEmkLG62",
  "key8": "uo6byviC1a6ugA7ThJGftY4TFYvJvycUChdswTazFQUnAiRjBbU65zXQG5QZV6QxqcXAtVWvJtQdYtoYESdw6GT",
  "key9": "2KVfnUnqYqtcMxyVqXcTa2UJomMLU2nu1Fdhg3cY7ZXgj3PYPJJbmK8dWrvw1TixQP35JuyhvXJ4yhGHae8pedHk",
  "key10": "2i1SaRiGuFfiFpg1edCbDeEf2vmFcVXEcxRwTuR9HVsGZR3WXdkiQ9KgcLBxqnh3fgnjH2nmzGkqLVdAQjq7ZVWL",
  "key11": "zBWVVdMiSUkkYG7dRvWfByXTNVo7ktSujHNFndaJ3PpZ7LGqhJr3QDAyQ2pL1WBtJKPbQHmMHBjxXe1SzHABL1r",
  "key12": "61AmEDrU4JukGpdyZ8nVygpknL874r5EJyU17ZXxsaGw5q4g4sMH3nU8EYSZig1d76x78HvmJNyNtttJDmF1PQXw",
  "key13": "3wrXp9Ltz5KbG4cXEq15j7dMn1XFScyN2jKwT28UqZ9CcqmJJeTGq7Kffwu53kdfE983xeyQvAySZ6j5nWuhU7HQ",
  "key14": "3cyPQZBM5zR9yG33j2PRQCcBLUDZYJjMgv4yqygqtBxYYLq49NryomfWorYWNo6eVx9dE41NKt6LQFbESuLEPHgL",
  "key15": "4cNrF4QLYUCMVstYwSxWzkPdNeZui8aPwuuhPGw6ZbdmLDoT5daECLNbid2n4iqPad8hLv8fFgLiajMGd4yo7ygT",
  "key16": "5avHX4wvBYr622UGnAv3VNL2sNrrT6bzxC6GgBKJhRq4ymGbduirhKuEn7SkXMwBsYocziykwLrsDBdtqGFVLkVx",
  "key17": "4qF4XbGempgZq8J6kK9q7x5ttkxUi8o1KfTbwZ7ZJT9KQYQcwZ7ifXrEQNF3cyo9DA6jYth7PL6C3sYSp4d7HQrx",
  "key18": "rXhM9bBJh2CVxusAMhVGeaGQfDRWmpVEsXqqWYdAVpQxzF6BRQs9ipMiaGLduThubGx3vx8EZv6dMQEMN92Bf1i",
  "key19": "24FVUSt5SaqodiawA5UtSuavvSiVhoPfKwHePZxkTakHbPSz8PJq9Ew1Q5CrvuCHa6Y2KDmVzBwhooZZ2NZmimUg",
  "key20": "34vH2X5cYVGQzwpPuqihd6hxAdnk7SqUhKYgoAhsgDdYtevsiFcQJpkxr8eT1t5matCTJ25op6CvTyb345yE87gm",
  "key21": "5z8iYSirhznBU5wd5nZGJUAKqPEN178e4ECGMDh1FZa7Ewp3bx5EFyvwgJPN5Xst87Ko9hKXqdN6KLd21wyzXi3x",
  "key22": "oHMRKvDLB1JnDfJUPp4apZA653mLiM13QaKhvbtF5yfuvjisukQXfpJkLYZNaQHza7czECP1b7s9vN6579y9tJH",
  "key23": "2ZSZAzY7J2G4eRBTRfS3fNdtbEHkH4vsahJQkVCTgktbzxaNGdQKNMkxK6PsoDKRFbGu8DUPHTxRu6QZesqqPyaN",
  "key24": "2LYUXGbixxJEe8d9BULSrcqaxqr1zwoUCUaCbVSToFzgWTBgcq1mGRsF392FXCq566KvG6xskw6QfPjFyp6WNnJz",
  "key25": "vYRg2kKPRokYKvQvaB6KHxaRbo3z3YvTLb5yDRunTUTshCDW6bxW9Q3fHQ4NUsuvbU2AbcZyTDQvSsCLZ8pPRM4",
  "key26": "2heXzauqDNqeQ9uE2CYe5RFot9u8SKLjHusq4iJ3Ehz9MCmhvQ9r8WJwf6a9SvowUUriZoCzN8Hy4EKUNxYoEzS7",
  "key27": "5a695hMyBcrgBg4WgUAWgvwah6cEqvF4LAa1NpvK7Apx8a7RXSoq8ZjSSx1uD44L65MjSMCr98PWgjF3juzPZQTP",
  "key28": "feBoa5M1N8WJwJVz2PZezpYfcMDfQd7G99tFYiFkwsJ2QW24jxAJWbmfGF7tbptX6TyNfsYxhaRpVc1jiUeoC1i",
  "key29": "219JxWcoLYs1bA7a85Qo2jm1gxRde3iAs9y4RqcyWc5UUcynbUHwTTiEcfRPeLBcqXPew8BE2S8CHbns3K5vJMwC",
  "key30": "4FUWkiH2LqZq5fBxiwmddReATzV6ves7t5pVQWyuiArNAWvzGTrPaAt2CVAahWuEaToszUGhwG7wX3pHySJ3TMNW",
  "key31": "5WhdnV6rDMwhZAVicVNq2BQx4NRSkM3Dv3RwjRSmLW4d6PgbGjwmbMY6btrCfSgFNmufyxkXphwXeXoe96nJqekY",
  "key32": "bAN9DdjJGsfQgYrEpsaUebtBKwNS4cMssg6NJsxwEcDwiNz7y8R5ZDYrJ53tr3rVgDkHTNMiKdvBvJMt35cEkkk",
  "key33": "3kFGDrZAjQ4d7K8P4YPWEUk2YyzUYHiBHcyVtYsbdutKPYZSzpyLuJNswDaTnfRSwMbAQXq6N8ZP8An5jmVRVS5L",
  "key34": "3uchdJdGjNdMsWXRP8EY8xDwvJhWDwunuty1DhkLUNbJ6U3dmw1TzpW4QyZSm6bVCGSFJGw189MhLeYfoPqXXLqQ",
  "key35": "hRi1v8FPLDHc22jXyG9zcoyvuBxrsRze8Mm3hoadyWCQvFCM1LW6vgLcYX7AnAStrh2fTLw6HFRPqkgWZLgNJT9",
  "key36": "27z3FcS4vTiMECcRt933k9vguCF2VQmo8QnZ8Ws7xj32RFYQRzQchTuWSJam5jKuPQKThfEe3QVP7zuW1jRCZGDd",
  "key37": "3hWCwY5yzuBTqwQ6nkLLF7buXf8Jc5KKaHppGVUN9xvcB8jJPd9BRTJmyQPQhTigv4KV71eUjMLSXSMBAu7nvkqT",
  "key38": "59K4vzqBGASK7D2LGGV4TYYVuHJYgV6qeR7pjR9bAY6Km27c94mCpDeJmVfEVDT3rexG9smpXBqAshXaCS1TdWwa",
  "key39": "YEkSteK18HvuNwQ7MNaTWGei29wpJWe8Mf1a77FYqKGvMuyjs7B9DSnsBRHETPv6aHecMYdJQeXKWW6jN68hkHf",
  "key40": "3u7bVLf2CWzDo8xWmRiMXtBdAFqac1SuGEofZvwSdvwKJx7wm7wyZ8ahX6D5dwDsYiZ9SxpN4Fj3rV2k6oceDuy4",
  "key41": "iWkDb2dfW4ZzSxiwmH4h7cPFKEwXnknaHUJoirJpZpaPiAShrU5jHujfqj8Bfqbu6UPMhKMyfPDXo273MWrymqW",
  "key42": "32Hxau2tE3E8zvVeCkt5Twxyp4EkRezqqkZNddW7LrrhYvvpR868ZQMHZdMoCryzjBXdRiapSzNxAL4ssqspYYq2",
  "key43": "4yibh4piKWJeQk6TKdna2Am4e1FpeKTSnocbSgERzA81a2W9D5c9u84bDQ3iUm7bFKGxfZJwZiFxRdDjGFdPdkFN",
  "key44": "46JiuS47UfUp1gf7fg2KTtKCb7dvQ2A31819KjZYUpjaK4Ln4tSDbpZzomp3bEdmxjMmwk598Qv3ZHU8wo4yFDrV",
  "key45": "4PYQ9ZyL9eTWu7xuynreewv9jTqpATkjpqhBGeNa2ycVBc6MW1u1eXZYif5RfVrxNuGocsnyzCWmDx9Ua4R7dWYu",
  "key46": "3nKqBBdVwkBWVeeWNNkG8uVQGbGUBDfq8bLnaPoK3dgGvURXabZMZRSpDuTnusQBDn5WP4fn6GQx4YVcgz4jMpdi",
  "key47": "3mDpP2BPFXh9DHPeUWBpFwAxbSnxbfwc5Sps5JzPbMXT85nysumUTq1BaSziuo1YonX85oU9Vb5cGqJ6T4fQA9ua"
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

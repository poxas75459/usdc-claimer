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
    "67AF4pwofqTYWsr1rdPFYb4fbxLByLBBsM1zz9Q94VvxvXMXABgH4WJ6nedCFft259QRfs9ZCLChraDNdxb9H8Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgitwS6dALaC3A4SLx7A3aasQhfT2zJYgThKVEGsohre3og5fkEgZzUyJ7iFHdngqeq2cPQjbmxXQotr7oQhqdE",
  "key1": "KGDRe4MZTGfgeY6CWhqFJYWCCJ1u5HbsMunknsWJoNZXqYJ2GRHvAiLdXvYnhRLzfCxVbj4qKmPYHD9kYikxKoN",
  "key2": "2HetQ5hysr8M71iKGqsPTafvFwqMvYkndaDTT7Xz8JPoU2DmgCHDtuLqCPjN8wtc3dDxG9Nj3i1LNWmo79fbUNEX",
  "key3": "4QyaXmVkHhgiGxZxtUY1RVsZP4w91cbVL55doDbrMgLAxV6Cx927ppzL1Q6s5UtLmvg9CEkGTEdF7qW1S2YZ735Q",
  "key4": "2NdBx22QZ5bUMotkKJYxYiafPuUKRdPyWguR1kvXBnRi2gWgaPokBVcQkWFM6GxqUCjNmR1yLQcjq8xWa4HsvK56",
  "key5": "2Xig4cjtkzjLKPVngzd1EhQBg6k31VofnXH6GPPDVzUECUdG39thcNkp3VfnkL34Y6jnCbqnqLhCNJnQbAweoQWq",
  "key6": "ub1efaaPybcSnmKVr6brRzK9SdKDrpw88gDcW9TCZeJbdZ6SBpULdoYtNREndroAsarLE8QqR3GADBXtbfetbWE",
  "key7": "yKezbPVDcmK95ZhC7jHowMUuY6FoSj2cWY3Uzoa2q1uPSBCqChpBJkBo2rAg8KBKM3oiQb3DwANPWPoZJ7WsgHt",
  "key8": "4fkxmRS87vHQ3CoT3TMfNZaxvqxHuDaa8ikRvyfRuR8VC43r7opskqyy9ZjmfZFaP4yiUkZvYVgFrzxeiAAcG6sB",
  "key9": "2AnzY4viUHFjh59JQsuehNAy5qkasVcj3h4USqhMXM3zUpRTFpHZpJDMhkqNDii1mznqUsF9cYv399cPnzVBho1o",
  "key10": "5dbU3y3FNJunAbNfTgbeFEQxxfswHh1HMKWFNva47auCzbiyBkeayPkncfau83oRD3UYfmwHeWvbYDLmyX3vNvu7",
  "key11": "4rccE85vctxypLWaEkKYMiaMJq7jn9s7n2AF9XjyedR7AQTVmchnkaBsg8V6LgbmaBenEEge2NWmCPjcfLSNLCL",
  "key12": "2LYJxkWBAfjyyV3Z8daXNNJHeUp8GPPxpPKA1iT2aQ7kXjVuyrNoTzwhDnUk7WQvA2DBeX5JGxTJc6Ly5WWaKWbS",
  "key13": "41MD63tEMDg2L5anid8zishotSnfLioBTTqPwaLHT4Cck5SJ6fYyPxhD4ZjBet75vivgZWTRxSFXQrVub3vXysix",
  "key14": "37iJTYPDQocPP8TM7HWzAuAUtrZrFbwTJTM8D6Tq7KY1CBGCkHU68Lw38qfNJRLYR5ceJfk6VJkoHiQgw8zqzDjM",
  "key15": "4XCH19MzGo5ZgN4r658Ef9a9hXa9CQL15Vr8fnuDvq3s3QmgM4kdk2fqM9D6cUmCRPRXFLU9UAKQqcDBLGqmUXAt",
  "key16": "3KdXrg64aVZEgK9GLxNvnn4J2eDxL1MjXeGcV1NCgaetwNDR9M44eEFejxb47ucShRwPZ18xNesnovCrHQvmXadA",
  "key17": "4E6tNTW78MzcKvy9zawsj4hwEQDpGnHDMnSTTESddtT7BsHbjcyK5fVVCubdETquuEtARHKErNCN2uhyqx3qgcfb",
  "key18": "9tE6B5gP4MLMbQ5FEcZB5v3jB9e4LXhPQkiMAKGGfPraw1fPKssnNPMuBikLPVgiSYwf5rU9M9J2EeLvp64WYSg",
  "key19": "3nYe3EPHDkA55RtnwPvB4S2AEpcwgPGPwTu4qsAhXTvFZJScD6aaB1e9nD2qKfuWwZ9eW5dHei6vTcVLfkbceq3a",
  "key20": "4oKEecfY3CGYcz5VDP1i8fTC5NvDQLUfZopbZ196AdeQ3HS2QMGqahpRPHM8QiRsDBDoqHtQbAiLSUpBQng4hF4F",
  "key21": "4KEHr6CoSrigAgDwvEjSLyv1XzkxnqvNHtCy8X7WLxkhPYi6rFoKYhPwG5Tj8BomDqd4V4etJhDcM3Rj8DxmbLFd",
  "key22": "iswjWrLBLmxNGFGDceCzd4jEUbUCzVMkVLhAGc3iuP6F4iLihKWcExsWoDGAzhk8RLqeD8WubgpHeWUmRMTb6Dy",
  "key23": "36GFNwUi8aZvc9a5JzTkz1wh4a4GqWmyAPpubF8FBQd6zJQQ6jkqBWiavuw7fuokja2rsawD3wC4qymkaHxnodxJ",
  "key24": "5rmMZMc7JU8orSRjjZ34uVWmhhHsfqEccw2DMZ1Wst2hRFvriRQFhSMxifVqpTCaWiWMu3xhB6YvXHDW1JEkH35L",
  "key25": "45GUbLtxLNbGmHSWEKjahSGgPta6SbgBfWceBwhqDQo3n91mWezURmPZVRtSqLT7qBM1FJJ8sWM8e8M5LJthEVLs",
  "key26": "59gC76W9GLzquoRVTFd3D9Lrd8s9NqLs1wiUMTpNLJkKnPpo2zXNkat4RCXX2g7cHcrKxzS4S7wcZwJKQjHjYKPP",
  "key27": "5WnJJTFmzw5AsZcXzWq1h5Nf4Zbkh4QziQ7SmMqHZvEK3y1qohwGkjWCQUEiBGUF3gst5aQrHCyLPK7owyE8x9PV",
  "key28": "38XS8kvWCY6MYw3wJvJgLeG9Nnghks48rE59TADgVXfSryp4aL1XtiujjWSYYt5veN34Za4mQjU4zWqSkiL17Her",
  "key29": "21bQpaAvsKBbygmfFNPBpFhNWc9dtrnSpxJueALfZoAG5Jgyt3Kb5xc2fnQPDJM7oMLj1rgszwMwkyGahJvX4dm9",
  "key30": "3nmVY1dLras35LJ7UEceqVXygV75yKi8S458SBt1MWsDyjyGHt3YkyQiMFhnzA6JCSah9bku2myJVJ7WWzYRPjSy",
  "key31": "2JzCFeGfv1xVDBtQXWvVwmfdAxVK3wiqtBnZ8jE5qMwu95VAAMj1dwBEi5R9trqcjhCVsSfdr5zjSTUCraXGps14",
  "key32": "35ZGC945HYALLgvRFbcchBPW9VU9oeXM7GDKMX64H7y2Rr9NbaeU7ygLj4hdRHBCunup5ZEQdaj94pk5k2uCZrqo",
  "key33": "HfWdfNdF6LYFQsPf3nvsgvMpzVtoXDyYTFqQhigAeShLy22WTGb9QNifeT6Cx8t9waRe1YZDVMFnmrr2jmExKBV",
  "key34": "5ZoGXPq3A5dFQRDwaarJrgskaNma8WhSmkGgpj8kQummj4agAmZ6XM1obgpDECj6SY2fL3y1NPHLDsVNN5kc3PBG",
  "key35": "5sbQtZrPz1ZuGi4oP7YJVbG5QUeSRVyLcrCDxEyp5xBYiwVbsV6PtnXMQLAKpRanAXRAWuJ3RoZYwqB6FCYfjv6t",
  "key36": "FE7e8jzXbMFUckqLgyatwfxzGNCSMorrTFFtL6K26WsikxS2xS5KbTTfuHE15Y8VYLxarNjgMfMED8gyigriYmV",
  "key37": "4ZzVjL9eikedxSwXqw9ZcZrpwKwjyyyAkDbv1h13skhECGC1ajDTn4UDAa3ud5ZiKGeqmspzjp4jAKwSoFLPet7a",
  "key38": "RgKwhu2nR19bY5XZTWRriDt1Gah3FFUidpVSyYdVBo6d9eycciFaH5za5KwGe9SHUyk5MUviiv5dXSVu31kp57V",
  "key39": "4YrA8wmYa4tuWasx2PLVvbSDm87qTrwTwwZ7w7DCW2174Gvjd7JBZkEXbgo7VC9kudiTfqV56oXoW3bwEnRikGVW",
  "key40": "tsrq5PsvsC6YoWVgpAdaFJGYNKL7Jys2p2JkDHdnsxoNNXdMLHM7QB2wRMAAUexwQoB78YRNNRqmgn2Jn2LzWpy",
  "key41": "3jk46JFzNA7h5SVY6ZF3HA1431HESd1DLQUst9ZHdwZ4EGFG9B6Vbw7QN2mMvsrsRVN9rJQ1y6YxHF9XzwtAzCmD",
  "key42": "2j6fPqNSWfnANbJFVr5TqMFLRmxVbznwgNRnVB8mCK6T8sYXGUUwAhMYcpm1N3ypHB5oQuVAvpdoyd4x6JjA8rT6"
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

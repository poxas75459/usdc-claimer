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
    "29mhqJK3NjRpXy1x1KtmDf5B4yFWQoLn6186yyYf1p3zvH5hxBYPxWK4iCi4Jx9mVqGYU5ETES24DRLUCZR6VmhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qzz4X13AxsStWye1CFCXmPxtdVXs1C2cW1RJDrmHZqzizvvYYXhj9zR8xmHS5zxwmUz1PWz5N5MPiMNUTVL8kHy",
  "key1": "623LCSg7c2AwyDfY2rccY244R2gDzyQ3i4QFptLAuGaAGMzcTPzC3GhiRufHfgZ2KaCCEtGV8jsRVSCqiEnsXYqM",
  "key2": "56rrjiUCP6AukjDSxZ6dvToRhfhXYUNnXcPHRa8xLQvpPKhZiWHqU7XGJN8mc3WFbQvHtdor8SKLA6npsb113Qmp",
  "key3": "n6qw3N9Jijmh3bDYgCnR2X9JTVBfCg3bLNk7MBNX8SoY15pYmpY7k7y3zCoZu6N3asKe993oE6Ly3VxgFiooCMN",
  "key4": "4GUm6dzUQ5RaFia3bvs6tDy3iKjDeUJ9MrYcMFDbJouxQANxBjrZKLXjEiMXpbWXN5M8bWYMnXSJv4a4LLkuq4t8",
  "key5": "4YDftVSoJDn7L21yAqZFDjjP8U8mggJSU2cwCFXdkvXiVqc1D2eB9Eu9vxS23uabFQmHWJ2btERYVGdFMdoGhW8E",
  "key6": "3WCFgvQuxsGhX1eAJWSB6kkp7idvSdvEEjdeJTKcf2T1JFwTuRWg8ysa2S9SCqMryXxmzajusVFaR4CgYAYep2Ax",
  "key7": "QacLj5kL7etQGmzLFtwgqgj1cz7L4wzKbiYkJfrYhWGW9eWxM9bbGEHwhhRquPQhgYbRPqRRyyqrnw74VUPVx2V",
  "key8": "5iZgnm8uQ1bMitz9ueJBnRJ6r8cFMsgAfCTxRYzUmdUieUciUvw8BY2CHf2TJv2qh91KzRZcfD6QD7TFdLR3UUVt",
  "key9": "PAk6QGWX8EDDwKKXn9KgB7MUxtBCwNiA1euLgUFkcaS6z84oChzmic38u1cRXx7oxpAfLZ9vW4cp7f78TVWLyat",
  "key10": "31d88kP7YAFL6JvuXq6HmKmnRsgGgRJLNnZ21uMNSG1GNsqDedJvrDNH2R6aCtbW2uthkB7iWS73tyi9KuVR5NYo",
  "key11": "5bn1Y5axcVgNUns1VScNgLC32pqSgSFJ2YdmzjvYcfTFMgixJ2NXvZ3T2eEAinvRig9RZSBYkomFvqRNuLDCzSPZ",
  "key12": "3SChL88mFqfbdvvtE9F4diAjrGYKb4EFnzRxB2HLvxNcfaQatWChG6a4wxJAkKpvkTpMShukeTW5BM1USUt3NBSD",
  "key13": "3YTToiPZ6Y8MHrwPBarAyUt4MPGCmvdstFD2oBGYaz1Z7ZPyCtWjKNsJbynJou1D6jCEpmPdMfQafgXfUnAgNxEA",
  "key14": "3JjaMAwWTkjLViH5iqMRRsFmcPLgUcwkpU9Kcm99aGR3Cke1e8iw49yuoM49PjdHCx8cwgWbbA6LwMDMbDFdh2jr",
  "key15": "3mWeJhTkffKVJFNv33iYHs6qs2RSqQFrG9M5kh27WV22HSkWqkJ6WBKsFU5KqoWf7svUHFmW4YeF7pdoJ5EkWUu2",
  "key16": "32YhUWj6VgP5cZf9H5QybRxop9b8AvTHZDH8G2tNZV7RAA3zazzDHw58MBxqzGJzLyBAhfu21K2jH1PSKknxWfFk",
  "key17": "71tubNDJfAMzZhosJRk7pSLhn63GFbDprUhf7T7bHeUAEGGr6dZ8g4Fx5zLtjvpDwEFbcTH78oG4YY7FcxUjqbR",
  "key18": "PnhrooS6odhbTzVJSZEyn7a1MfBBbPqJbEvR6GYSWFa2kBj4cSzdRjLz2MmVnvnuRHnFcFCpeZwgcgu9WQEzbAP",
  "key19": "g6hPqAiApfKR8NzJkvw2UUkNfcF9C1rATEp7nEBdheALpA6EQ5Q229dbzVNUQ7wVFR8PdMS6DdmAGm4ZfpUSeyY",
  "key20": "rrp2mEVjCuWmGfBfDxF3niQpgn1NJn9ADiDgoXMo8QnkXc49E4yCiLqM7Ud728qByRa22KHhqC3S9CPRWemm5Xa",
  "key21": "2LtiH16yRyUsnMtzLBixcePj8QW3bRg9RZYjXFBu3VBoBZf1BEWSAX3rufE89Axdu4ZJZzzdH2kXzEfiA3XG49qW",
  "key22": "3Z5PnjVT6fGvmEW1LvLY8mtUz9XrMPYaE7xyg6vrRjKLpHBEcFE6DoRg7nWUjT3kJynNWuAB1KU5tbsCdhxMHxB",
  "key23": "c5rwBRbk2vsZYH2tMaRBdfdwzhR9cjqnhRMQ9Yv1QSkXwN6RiaggtferdSFJvwAPK5REfubdidDqJ12dqjizzov",
  "key24": "5JFdLmb9X2L1V8LKXjFmzvKwYFYbdZLdg3ZUD81bT9QVcvPwK2XQjpXHjQ4N9aoppT6RsMM73NRfnPUkWti54udx",
  "key25": "2KSDkUfGPvWt7uVWYpzvzYMNYuyCVDz4NZeNLXCtxJZvb3VqLKZpyYRtge2ox1aSr4iz4fZPnbtYDT7tSxtexvUF",
  "key26": "5u7xZeGpBZAMYzbj596Se97nBTSxcYRffxL6bgwf1ff39nemhM1ZEAXB8vF4XsutYqdDuCqxKkKcnQTbuf7CrgqR",
  "key27": "TrJvfoaWCqyJWSpntiLzRzq5cTdm9JwQbN7EZ45uy7CQBkBPhFZNsWkbgpRiv2puEQ11uhYJsG3GJQEFLbLeGDB",
  "key28": "3LWQPHERFjHaoKd1ysAxqqKhkndQBZLdYug7ZJ5E3xoKicWbjiu5jWQ4qGN1xPiPVCtkJJeAtK3s2Z7krqgWccd7",
  "key29": "2sSFPtHrJLHHHNfwkVFzFQNduVbqHnt7GiSiNVd7cYJJiJjMqEsU8isVQLEjS8RRAe1KBevU8gK4iMupoXDwofWE",
  "key30": "5dh4c2MPZREY9J5A2h3e9JLJCf5aAenthe8Fdq3a4qyA8cBfSUKuvuWP9pL9fZSggXCkqwmbT9g3a3FEP57fYeVt",
  "key31": "4uMyQR92ZRw3vUR1EwAEGpeHweExL1WJFv16eBHteemMJtmQdwDMUVQKrrSJw93Wa2Vqg3smdED715jXgP6aH1xw",
  "key32": "4uPyf7oS1bS52LjT1srmA9U8xmk1cKkyfd1PPsKfvhwMN156Uz89eKmPjdkc6SZL3v6QGLKzf1pN6G29N3bda7E7",
  "key33": "41ZKy6Rubpvb8hbXCbppq6sc9rx4zdBX7JvSZMaCuJC8KdABq1KRV4ZhWvowaKWvYqzdz9nS9SUQqKKk2ZAwnc9z",
  "key34": "4UG7CRM83BS3ViCkFBvc6ySgVCjMUcxohnrUBDQmdWdkhww8MAehS9z2xM7BtwNsVtw7Gtn61Xh1gnHzGm6D1ATy",
  "key35": "3yciMeYehDaFaQ1GRyRxLy9t6RQXTZq9HBrrrJD8gjui2RE21vatAyg9KE7yo51QWrsvETS1d9hmWU5WJ7gT8pu9",
  "key36": "3cKYEtGKWj6cYVZfcJCEQPCRABHWWb18h7SSe1fJhLx62F3Xs65pKfvM6YBQUAfxfRxzNdgsD8Z1EwYcPEqe62A9",
  "key37": "33e6Gj8febpzAF5S7w6vEBCnbE1TFFambNopo9DFjWuP9ttfZY1fvy2r7usmsPEGurHYqARkpiSqWgpV7jiwT1uU",
  "key38": "4TLeMSp3pYjTNya8WEtSFTbm7SCfB5KNqgphTRR815bcSr43QsHC1wx7T9iZSnmWeV9zJLJWRLcpmzaDWvdEaqte",
  "key39": "5BG9LAM2x5VLN9JyE6yzQ5xLEFPaQ1jARhWCJrZN9UMKAP16grEqQUWW5bHirv1XaUKc2AtYhN2rHbayjJENJZzW"
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

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
    "2bCyrAkBQQFrEVFSGUQuTEhfAvvjnHXbiSEF2zi7XV3EtevfZ8JP7vSnkXgZtRdrcg3X5BkE3SyxwCvkj5AWVGev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLT78C8ofV8XGYsSUcXX3QcyNwhes6DySrPYYtUJeqK1LymWNZy9SfMwUq6wBcMi4HF5Uy7bLwGgCzvAbqTXbuD",
  "key1": "4YDsiD19k4u8c2RmCqow6ja12oCpQw9kU9xdQM7tJYo62N4BkzkSS3fdKjp5xzVNoXdbAfPDb4eSQKB6isXxSfM5",
  "key2": "rZRbnWWciLn3VvVAtopMTLqWnzQZjLayy9a9hRTKYZvvtaAAcYdD5dJfdyBviw1DgwmLzXoxdu2MogQPr82W4rN",
  "key3": "2noAs3CvFRMBPFv1PBYtNRpMWZB3TpW2W9fKENBDtBzyPg6yn3hYCZjXiBQYb8ufRbfPB7X8K7rr5qo5W977Pm5W",
  "key4": "ofs9erqmMXR4n3fHEPtxstPBGKFYvV7taUh7PZ1VWCMLGw3815ku2Lisz1yaFQukAdSeJpvoRE88u3AHQySoXEm",
  "key5": "UETFqVi3CrP7Zofk3JiEWJZZvsA4VKMQ6CRqQNYuaVeNy1h11XTwyuf8cfA2m5FjTdHco22uoLHcv7JGxKDG3jc",
  "key6": "3iZbfoScwsK3gtv6a51AyS9H9xFZ46kD3JbTTYTsuvvzBoH1nh9jBXDJT5rDXjxdNiQF7rwhdopoUqMkHZuXgQ2D",
  "key7": "Wm9HLTFhepAk3hU1YUqWSLZas1uZmi4wZYxvntkmqxbkTmmBqivMyJTh8Ly7upPpRhLtYAvn2tFx1jwz2uqkUma",
  "key8": "4ZMKoEBvypTxi4zzA2p2d3FWmPCNgfuRB6tfWtQDKofSBnMSLn7vDm74Wp8pCDte378GBkdmUawqF1EnaLMeGW4i",
  "key9": "5aL8ykhvL2CJFS3HNk3jcVvyBD2LHBsu1DUcFfz97MmG7qd3hkUMAV9hv7bMkHfEAWGXbj5RVARwKJLSteEzRYeW",
  "key10": "Kyn4FWsKPHgKPMkeoH4hakNk9FQAZJxNJreC7SN7nCqW7oYtB5cQjk9TzA6nDWSiNpa9oTcWx2j7vEmJaYsugoc",
  "key11": "jWDZFJ9exJbTP5Dkohv5eHhjVMry1YxYVYZNof6iLjYfmhXsLKrx26AMQW3t84mh6NbgyZkcPHQe471B6Quarte",
  "key12": "4SMJkcXtaPrBBN6f3Nmdn5Dif8D4UmizrJ96ZD4VfgEKg7m2LvvkQZhpoDsH1V7jZ1Rshk6zvVWdE9kwap4Em8A9",
  "key13": "3uZaWgiwjDTEw22SjZU5hUZV1p28PCzvkK8L9aSKq3nn2qYM41GqWeBPUKqnAaayBuejRgubb3po33MtBm5SopcK",
  "key14": "5iD4NqT95hMkkYU8vdNwgdJPye7u5f7EwW4QXYSYHeBCbehwBSmmw1boGz9AjvbMxfgi17UFVBU58Q6Te5C4gxqk",
  "key15": "28DEsZFZjwRdP8qs5Tyz2oLQQ3j5abeHpyHKDXGPsvDKPYHoMmzSKfL3hDsB4Kc4e7PTmaDXu81fkjq4rVEkVeZ5",
  "key16": "21edRQxAUkyYUGQGWAWjQqMB9ZF6qKrPepfDtWhhax2YXH1RLGv11wkQx1P6KW2hq7gn5CP1hRq6v8ynbyJCGmsE",
  "key17": "4bHzwTJwVf746vioMnkPTxEyYCR5jFnLWbvYfd4PwyGTsQCf6QaqyLk22QEVHnFZvjHRWrsmo2uaj94KsYriLGi4",
  "key18": "4sr5LSovz4CDuYTV4UVpAEGx3enap9m5XsVYnX9abKcpTATwCivQTDKPza2ua1HGbqyNp3pFEyptvwxPss6aM58T",
  "key19": "2RXc9oWvwSkUTcSLHgSYRA2jQESPFpF4AdqTbydYUm1ESbfnnnJ7S3YdVEcNJFC63VsJMMjzy2ccWBYyk1RMoBLH",
  "key20": "5LuFeUhvhbHf3XSfkiQR63Hqweh345tJJvBALAtFLiR2YC7nrDks24K7oPk4tKFJU1GUNqPsbm4DDoNsyJuAQPKQ",
  "key21": "5xfrkKij2coL6Tp2o1HsKps4aEVSbABKQVEbrkV3RYQwhKVzBkJcghEa6jsL7UMMQ7dJFXDsRV7KUSYazgNXwP4W",
  "key22": "3dSvuKnrTF3P5QSfhqDqNH3bKgGj4i3A7vfxxifBjxwFH8Ngu9WdTDusPVbEYTECioNByeFqeKq9LAWeGVpRjFTY",
  "key23": "4SeJysaobq3kJbmmqaYo2e6JY5W7vV2mQC3NXFc7NVEWXYeJofqEc21UmBRj1y89NiznU5VGhB4y4K8Ee6kQFJvu",
  "key24": "5APBFLdf1S1hkCNtAn3TtC67eRd8czNMgAaQg3DLRnX2tHMTCv7PmAxYcqXYZ1KmtcRfNeS65QGDJGvyJsdjr3hh",
  "key25": "2p6edGATU2zXqWWWxuxHjDauySYqWVeh3ZKAZmZqT7ENmbsHqNJ9kNVPT9nBB3Ax74FmNi357A4V5gs95qi7HYsc",
  "key26": "5wTiGYK4Yi5ZnV7kEtLm4VcFcRs5qbCZ5QjqHsYHTFVqZD7CuNgE3wvav1S3NGDhAwEoZ5qR6TSeoPosNpVJCojb",
  "key27": "3fVxWHji96uPehRriUu2uEyWBSezz6m9PS5kvCseikZ1W5SscKZ1mNNmswLLzoKhcfMuKJm3EPwqM5EL6Lz9S2ek",
  "key28": "GW2RcUokwYcdZMaFv5CKKaB1qmZ8vLsvPirsd8n9a9Qb8viUJDWtcx1iHBWUGCaaGsf4K17PpurtwZUPHicjmRq",
  "key29": "3Aure5zkVHF1pLpxSc382F2xb9RYmhWP4JnANB854zGfhpSEEZeNHaAAbaPpm324Heg2fggc13vQq4qZ8FAeJEEg",
  "key30": "3NgLyZTfGpTjQo5MXyUfhhfXJCV6waJqJVNPzbwqqihMiDjzWZ4aiLyZFowuKTPRgJsV84JGYSTJDzcCsnhdS11a",
  "key31": "4PzB78eYZWd1GUm94pPyd84yJtPLc1Qq9BD5UeeqfFRHkCqdyrdhBkR9wUp8LWfRrX8NDLrBee4A6GsZaR8Z1SuU",
  "key32": "23sxAojuKe63HLwsrkC84AcWdVnzsPdRCXZ5sJRoJsUAzfpqz1mWtsbfPQeiVZ73wWzRH1SubFRPRABFX74unepo",
  "key33": "5LMbNQS2wFhRddkKxANLWyW3ez9o4dLszZPfmRhGBJW7vRb6utMKkgbxUccWyA1JdpxzvC7GAQycmSWWaYobo91H"
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

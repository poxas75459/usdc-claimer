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
    "1dBvDcshewB96fTGdxntd8QQJmxiWBoEZtdAihNLp4p3Fh4XB23JQCoXjCTey2jfyqj1WDK6hSjr8f5c1i392sE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9SHc7FW9gZXYWE9ywQPPSvPsfnT91cuP7FxFkcAkT6VfGjTZa4jU6dMfGBViNbsxqmf3edqUvpFQZaNLJkHTs",
  "key1": "3dNdkUTWnWQY9exqa3mXZSSoHNrsafqbBdxAMurAcgRogjSJenYKpVLa7jgyZ6BR5Spyow4BcZEWavzBHKfR87SM",
  "key2": "2NSB36mtYvCbeH3KSubufXnUtFBS1vAXqd8TYu6Xjt9sSTz6a6eDTq7xpdzct85K1xhYamvjGe2PXWvZjSdHUPFC",
  "key3": "kSA1mK2DkGFbDZ51ey8nnA3jZAdf38iPW1juXc7rLWoJFDftQPfLYzcx926rHuvpzoPCAej36DDqc9gceevDy6o",
  "key4": "4B5tTgb7iQwF5dnW1uDG5v7DgzPhN1KdDVRzXrEjJry45QfnxEyiUy14THATAWAvDSWgmsEJ7vxRSZoRC8Xmujzb",
  "key5": "4HjA7KWUNe33KipXrJwpeNQU7LjizvxmsYaDCnnXqGprF62smETXnenDm1imMwGuU2jkNLtKWsinFgzqHCjHFBeF",
  "key6": "4a7ZYcbKAh7T2Y1jM16FB7P2oXJ23cXxQ2TU4Ef728myknVCWw1BEmnd6i2pEZoDugCZ4KnPdJJ8ZeoaN969gYQk",
  "key7": "2HWRUeLMwkSHmTWgPL7UZpCAFmWtKq6F5MiJKt1nZPN88hzgdwDNjiXhri46N1KdqZBLk2VXqyG97d1cWEJVJDJ4",
  "key8": "3cWk3XqLPKe1BTbedQZTLi95Q73225z3MjYqCD8WLG3jCicmWzAQgdyBdDBZM5sPFNEVzzTX33JoqoNRDxbBKauU",
  "key9": "4Wu4PQex24geU5twzjuUhdmpa9TR7ADxfUVQfYPxkZFwGXQj8SawUZKFaA9nJKp2X6U6Q5QovVKqpySXrxQSs2Qo",
  "key10": "4qPgF8i3z3GMzULFxHPLQeLoDNLxCvAorwqPbT9dXwhLHzd2Pnpp8Af6KNJ3M3dNWxiUiUQeD1CmfqVNPd4dJTad",
  "key11": "2aTuPQ85mCAWAvT3UZawksV2AU5q2TThfdfZaARwVGysoiNesTGDCR9oiDJJWYHzbW6hseLzD9MNeRa5XERBRfMC",
  "key12": "2anRRRbqtEeZsUJmLz8tQz5r1X2gFVNnjmn43aMvpwZBn3Xz2jTUZfLhsPeFNfbv2VifNMbYb2RPBLPZLk6HpZeX",
  "key13": "5Ww6qM4eFaUEVRQTTQyG82nRum8G82xBpLry4aCZzH57U9JgBUWJ6GPjW1wrCrUX98bNTqvwFEd6bi47qhZhBkpV",
  "key14": "4rbPYWjKprdNEer16Awsm26AZHujheMHowyHrpk6EFL4HUex92Mir6NMhXDhGMaBtoY1DGDiUT7TYfdszafLxNTS",
  "key15": "4T93QmMBvADJKv2iLsUWR2x2Cgs21m9JpsrjtcXk5S3E7BfzApVoGf2bFYH5tWEs1oBZfaXkCCsgYe7Nw8yeXuir",
  "key16": "4ZWCApB3jkxGu38q3avPtBZQFDutW8pJYh1EhPUuZmmwMzUcdNFE2bzyubH21BmVfuAdTbk3UsnusCjCgi43tvE9",
  "key17": "2fPLZ18MYeSvsYFHem22gVm9PXhCFfe24cn4bHYev1oGeAnSDmiWzr3YSYihuwo3zaDAgM3LwE9yqPXvq2B2MPxc",
  "key18": "36X5SgxUy2BK6TtQ5Xt61d7yv9XiwqKxgtrfGTw8eSQ5oFJTBfZJaQfvByCtbYY2NKkEqXqVg3dpADdrHZLakBna",
  "key19": "3C5NoKfgpV8hKi23cDoxgyTEmdh5qBdJ37W4cr9Sxjp9ToyVqgP9bzJqGHBbgNkc3g8biaxAM8Q3j1wVJtRMWkK4",
  "key20": "rdm6wdd3kHqU3sELqhgcVvHSJzDriwka2ZibrzfkMsBhLBYc9Cf5g6Q9i8842zKxgDoTzGvRCUXfcKqqHzKASeV",
  "key21": "3JGnaheA3XPNF1e5hAxj5WWM1zQ1zNKjThJFUphgzR89TLkAgj9aaCMkQXp6dpdwhSE8zSBet5eXcCJ3pZWmP5Je",
  "key22": "52M8gbXwLMtemmtvFy684VpUwY4Z3gnKDacoRUWFzTWWzUHC5ERHD3MB2cYrZKnq7ujPqyweSNpenu1vbHi86R6Q",
  "key23": "3ex1UjrMQDvjNQcMwy3dGJbcgWEtYqch64n3WiXCxh8PL3SX7RzMTzVYa2QhifWmQ7cFTKq3TRmWENpt7KXjSW9D",
  "key24": "3XBHj1epz7SdRF2Ej6Xae7az2ZmV8dUZXdkAM5yajmRepCizMbHrkG3oWTfwJ58KjdrSPTnjKRvwnKLFLy8rKcVF",
  "key25": "32yj68hYPqp59vcoLZgrsQGuS1DpXidXLECwJshufUqhFxty4U1una5ifm75ZVr2UJTJwFXMEerWW5RaBza5v2EM",
  "key26": "5homTeGzNKya3Y9msv4z7hPj8T92c9tdX3a62kDfNRCCrrPfv8ZkNgPBPaNxQ5VDGbFW5LeTfz7RChWGsysLYRyc",
  "key27": "4QjMmyjUMo2dS8Ah45Hsmqj7AxyaC4Uk69LHLZ1yj6LyJBxddzNp4uxHi4Vph845T2j4KtYAWdoTvKHnaKWYE3as",
  "key28": "3dNtzVusoJHDArGgZ98aWY3VK79CgPAsLcAGRLsnR7YBqmPhbPRLLzsStATXMw7FVhToEhaAAyVxi9wmsaXPPpbF",
  "key29": "5CWxf2xrgCG8pWZTYSKzYqVEwxqKqtjtmHWRTHc8EogAYRjkruDuKTKi7hnLC3vsiZkQtE7bV78yJCeiSHTpoWUP",
  "key30": "Tp3dmHATn8Hjnuhoo6UsvQzQmfN8kvVH9i3BUbSsP1875V4x1NiQgDCcn8gbnEhoKpb2x2YYgVe2w8XRp8Qc3ku",
  "key31": "34sHM6ipB6jiFdHrDudtLfuXhJ8X7WXSW7f7vvKo1q2A9VfhMcFw79p2bsjk5sJPx8GQMcKiS1gVgvpSmmF5tbUL",
  "key32": "5FL7Ho1nBMQubx3FuJFd29Jc67gnmyp7pG9UsTdq1tkqzHv3eQ18rWvetcdr86N4c2zgHYhoVRWzufUmyaSGNy8M",
  "key33": "3ZGyLtfoWA587etKK4mTNWFEZk9d65w182mw2iBxN3G68AV3VbddqjnJqJSNDVVJw5YnqQpoDjJfB98tZB2N3syy",
  "key34": "65Afd9USruXzpxgm89nwBrpGXJhpriKZjYeJqoUnpmbgwMfnEJ2Y7EPok2w3YG6wu8YA49oGxZvg7QwE5Avmp3bV",
  "key35": "4waQNJmgnNykJmbGMS4gGA1FtFy41k4qRZreXWWSdM8UU2Cp5unmCNNYL6KQX2iTANPuzL9hGkbMNVZPkJ1D4dNM",
  "key36": "SskVvTRb3vWAoyt84JkkwqcPxr7HW7BgEsrkQpQc3RSsfRXtqqFcPBWEvmMTaRaa6qmWbn8m535wXvSU9LB5kdP"
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

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
    "EstbHK8qCq6pxBMqXRrBfrYaU3dAktxLucrwiATJtK82Kb4wF2c3YLyfbVvBsuisjfvZ479MXxC1UrcCZZgmdyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f47rDFJw7tTqAyxJXwQuPGM29chLToqQZyyDPY9MrVyGawe29iRu1xQPy1zHa5ao8MeRHmy35a9oYTw8hA8bna1",
  "key1": "SwiGYmnhGaZRUgxnrFvBiycydqpKKackqqPNa3i9FPWbYpNbv9zNqYHa5tq2ErfwN12MUsMw3iQNavhqJgj9FJH",
  "key2": "4gP8RDZ8BFNUCaDJ2LmMJj1YUg44dVqoHA9PfmSQXfXZfQRgFTPdCWY7NCjhMV47i4XwNKMi3BD4rKrmAQn3FU47",
  "key3": "62Uys92PF1JRDdtByvtYJSPUJXJ7SKXeijfpFCPWVZC5R59WmvbNonvJjBFR5cGhyjJMEEFf6WzHtUCbRYQtuGRv",
  "key4": "3sEZGL6baJmPjfAJDV2mCcom4d7KBSfQVFfcQrayEu48393HunSdujF7TUkHoGAhkcz4KVQqZxxmk56bfp95bsgY",
  "key5": "h8ht6q8sWL42yj9Hnj1e1wHhCDNEFMvv7zC1UwMjVYQ4NMrbAvxRCH6ESD9qHYnu9AYgshdQvoeziqrKW5U8zi9",
  "key6": "5MPmYHVJ3BD5LyL2vSE8h44gb2TE74LeWdzw5BU7VveEHJtCjCbj3tC2BZ2SZ1tXEWV4P3L46ijsp1YdTVLW8vEv",
  "key7": "3Za46HfPJw7QPcK8jMEtNRccwzg3fsbcYRxfzNbUJrZZDS2uyg8A6j6q15YNwDtyvRn8diLq8WrpQpoGx7iZX5pN",
  "key8": "4wK7MJ1ZKfNsPp8fz6kdBj27c2vsVNA2ZnCKTtJjcjA51dmHXHAoSnctTpVsHvQYYEjUudPX1du3mQQZTvdyi8oC",
  "key9": "3MZ2ipXLd4mdSsfYPfVw1cYHtLHGafeweuF1WqzPchW4n9LJBXPvAAdcPrkYfpCcLAzTRqXZPtCz7aJY2EzcxBUZ",
  "key10": "4NzhbvTR8fQfQKYxgJEKF1wjrxqQPMyPg93vR4dpffzEEooAc4EXqCZ7LY4FttZPJz1fdusmvLDLLqP7knDFS6PB",
  "key11": "5XCSuMqT3Z1hQmTwBLepKjnDgjgsFUFeP1ogu6Ni8hQw77zBdnSDeKfYSJiuJwiL7nfV6MK9K4gdvz4cckPUuMM2",
  "key12": "kaaNJ6gBfyaDwLfL3Q6zSdiDNJ16Cz1p4LxP3SqDHGs3VGSSj1F6WmjpWEcypQfEFf6y6m387eBio3aoVeiVRWP",
  "key13": "5qfZLxgmLebL2RDgLMkvSMAkDW8pyWzju6q6bPc6bceueqyXgyDegcLPCjmgjEuHM8LiAEWBtPfgbwKquNL5WdvU",
  "key14": "54ucovnLbDmb9NnsxtgaQ6i8cK1B4bZRshGvuY8vG7wdzLZcZmNzUek8jFNSwxrN2foiMwT6MoBjXFPXyUGPUKjg",
  "key15": "5ke6E8uaMgx7rAETZSSquJeZu73QtyggTei5MKSAo1Gyj3To53ZqUadm4mgshB8Vu4J7YusYmJ7tWVcxBQ7BqahM",
  "key16": "51yg1BDgeYJKkR1FmsyfEZoznRqXC8JboSbf6ZLJf2fgC1wW8VxceUSpDNDhAFq49YXtWDPdBtRKUBtu9mjtm7d3",
  "key17": "5zxWhdMJsTFJuzFXqTk7XZicLJPfukCruwyPn2uQnFmHcNtfzkMntK5vQ8qRc4RW51ZeCXZYTtHSxqN5PuooyFka",
  "key18": "2cFqirmXbELL8aXZT3ASYrQfA3orKmrZ6TKqgYvN7VzSXp2PeBDXqWhSnHBsH7fe7mso4gJJhbjSL8uWYNA57YkU",
  "key19": "HRVu5Hs66pf8idf9MoNX2p8HumavwU34uknASkxrZSbk8CrJtBijxpkQPqFuqC8AFXpKHDqmFSMC6Fu3WR3VaGn",
  "key20": "5D3nqs8aBs7zPChb3xdASagBxJYcE6UeYqnQPViBUQSH1NDzFEJZpJsqKFC7mDMb2iYjtAfeL1zQdA7Njma8UV1K",
  "key21": "2K5bA4WZShF1PMWbj3T4nxFCS4NR1eR7RuSxW8ZrX4brLtq1PmNaTKKAt7EM91GYdnzLX6tMYFYWdKYfezGWS8rY",
  "key22": "sw8X36tCDLyn2AUoASxiXUUoSD4J84ugkGhgZu9cRQBXiJ2kQ9zxZDBvUggzcokfVJUT4qk9BARiC9KKcjnNBo6",
  "key23": "4xZY9XgitaF1E9iBKWdTQu7EYeNyJi6WfuMV8YNqQi7ZDD26mksYNiPSbELXT1JdkgJJwYPrzr7vf6iVV19PE8Za",
  "key24": "3xVKBbt8hwmpG1kFVFK15yBb3BNdAvbrTLBk1AbZSrC1vYinAibYVbtTaW1xD642mwZAgXPyL3iK5Swk4WEYpPwq",
  "key25": "3rf4mMqNh8Xky8H9QGCCHdjbAeWNogjF3emnFZSyMyPfSpiAbwwSo2Bx95B4fjQv3ZWai7vU3wpQNCP8Tgajz1Ug",
  "key26": "2e3YKtt4fv1xn3vyZqKnD8wcsQMcERpk8YxKrEYu6CU74vuiT2HjrLuSgsDNyzH18aWdzX9ZuwG5kmywQyf6EbQj",
  "key27": "2quoUfbCGGu9BQoy9dxD5q37tRyPCidoG4gKk5hp9izgvtBDaihzntsie6T5ME9LwAcMVA3eVKqWhrTvcKjDRdvw",
  "key28": "5MaGrMQj2GDdBtYyadrQG6fs3V8rgyEApEu6BosukpyyM9UzfmwWRV9S6B7PCGSCsnSzAgGeEoYkDEC8yGxavEuD",
  "key29": "2WcKHhhBKZZjoFKRA5ypkzFxg2JjV9f8VWYnWiD2Naucc7JcV19BVgBoJqN1b9zwnD4fdLZjAQNQQffsWVwg7oAt",
  "key30": "5Xv8nHKZiRnFXgmZ14iF2UoDJY6XGrNvWTpa6kDFLWA3VyMReV2ZytPkMfxxszwBde2UVfkz9akD2yC78moPZNWd",
  "key31": "4NgMpYYUDukGZFJQBwNC59XGAAoUUaxAkaRP6QpuSuAfTEsY8CJySftLe8eK86Pc25SuzNM2sKzgr14PvRd2ZZwV",
  "key32": "5z5MT2yAHJzykbMTjJDwuJggLA1bM8bqwJehuMNErfVobcQdd62jLngyZ85MJpAN53CuoHx8TjxrdQwo9vG4w7Fv",
  "key33": "4K9JBGSgWTrbWdop2njikm3jV5g1zPHCRzysbGCZRkoegPZ5oAcw7wHsBzUxEpcEjVuVAkRf6R7F54RcBCinH2Co",
  "key34": "5awTZGjMGMPe1SXXE5gRBrshrVDgE599VuMgzBzogqiCA4wndLnSWyak1Y4jpTxeX12s89TNMg2KqzcX7rHdcFrp",
  "key35": "3gsaGjX7vRPuwFVFvu8ENpagh2NhcMeNjgjGEhRTpQEmKxF1HFxtFfQEPWyCnkNw2xJopNfoKqoYZwngpHu2PgaM",
  "key36": "ivQp7CZsV7dCHGKn9593j4uAJduQ4B5MabDzd2fXhKVUcjUnLui6XDnT33AJ1oq9him3q8bRjy89NG9cduCPwon",
  "key37": "3HzZPAat5Lqfrnu4ozEuweyhLs7DgVjSFW8rnYf1CZRU1wZWBKcBRD9bw8T3TUiZUhYqFhY1pYEkRmNTWy7WcCJ8",
  "key38": "m9KQpek2sgdPj84CTmA7FtVWy4KovNoDmrXBZFgkQAruuguFh4JerWGrKPeVruYnc7NRQXGcRkYDFRaJLfgk5FT",
  "key39": "4fuKKYgZJCDEAQfacDrSfbPuCuxoyduErLE1mppmGto38VEkGgzyApZotLSX96ii9NF2TBNuYJwSjx9Km2d4K6kd"
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

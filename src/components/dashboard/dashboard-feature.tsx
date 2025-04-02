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
    "GHXiGz9zQHS1qvigMfmpPveKcgCFxX9WqGRhmvPzMRc2YCnm1DcGZUdhCKLcnV4xLGfAEiL2h6xMubE7PC5Uf3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sR6aX7BgaYAGaHeADY8pEP7sXUn1XUFn4CpXsS2EXA9ScTDo9sfW2KPQCnNfTBL5chTjEtRKnKD3vdP7SFG7i5v",
  "key1": "65EUTg9cxhpkNU97Atygsrk3JHDYqqVa3Jn3pvU12WNzDru4HH1rbxoHLuirUWg2hRHRQFxjgMYKaCWtSK2ciKUj",
  "key2": "259JsoDdfZAATkXoLyzuUqpzqGyHSjhZz9wyZEje8P78wefsMQWxrJ6Uongj6oxwJ63izywhP8RYsXSKoK9eefbk",
  "key3": "5Tjb7hP3XxG4iPzjzQgmLDKyBKGmE3nAvCbhyGjSp9VNCmFfExEUaxm3Uf1ZRd36wDGpm14tSwnsKXY21VuGKUDL",
  "key4": "3Sfdb4PbzYMHT1njf5Z51NDDLDCUw9ZcZ1ZEgTjqp1CoriLGgV1GLazU1kD5jYXvyjjfHHLW7BRTBshM4s8PKv3M",
  "key5": "2MCK3d57GeAQzCckxxuBm7RH9pnyKumddmtEkAoXGpbq1qL94unByYWYiT4SLSHZx6CV3fyEpBTFCx5xu7bYMc7u",
  "key6": "4ZmJ5K2raph8VPRqpyZdj4Df4GjrnwYQvCHcApa2uqFJS2dy3YXWcyFaiSYXHDKqheSAhpkRiKCWtwavVEj7PvYD",
  "key7": "5t9qfraWiSUQmyifP6FVEUy6afL2yg5vAbFfX4bs5oZXGp9eYmDP29dC6fGMWH7yqpU62Aba8QrjkJSCxMipxB7t",
  "key8": "3HcrAmdPA6LnjoocLwP6wiZWeJUFELDiqswjWdsqcMFNZUa1RX4EestkEZVfeEzDJk7QLtzmhdN7d8twbKonWiUJ",
  "key9": "3n15PnRcZNqu1yVhpL7NEzcLsYfxK3LxNvjRoko7GkAbEJK7KUUonPAX4PLZNij4Pp5fKyTsoQvh526RePm9FZ8u",
  "key10": "3ufxautCmp7GirHDJY5Fa8QLdGwq1gBeFtUXNZ5Cz2ydCYhE7myWQxgG7v5tJFAEJ2d2zyNFLDcGbmrZTNjXGboF",
  "key11": "4awQf5bZvbe4mMCLqxwvjcGnNSvkK8LbsGJdXABNKtVcQGhj1WHivemS6EC6YYZ7yocFtHN1o515jjPaVzCayXto",
  "key12": "3iKzNvEBJ2fNr1oKjkSwek74VK6pVGtR2pFruvTWWAcGToh5ZRBXUKnTe3H3WgqETr5H7rQVGcvd6dJVEpDoKEKQ",
  "key13": "3zRrJakcoxV9pNCeZgcf917rJaWJdJBz6HzaXu7cd7VF9fxiunEUTwr9PodRABBi4JQ4PoddGudtoZ7fHVLwC6Eu",
  "key14": "41k5giKkDYJxZjqHRUZL4yrjb2cN87yKX6XSbTcp1dSyX2Mv2rJdpGXVz43HWnCPBi36X1HTFuTW2WV9VuEQHHRB",
  "key15": "3MUdvPjBkvfPcAKN7zJsUiEAvvxZGsFepysxGqamzr1jptho2D6ioeX8D2aaYX2w4dWbwKUiTAtigLGvRpLBeMua",
  "key16": "3DUTLvYu5d4tJkeQM75CXnYrcQ9sSteAqQ5EGLQjhKRDYSKqEYYU7SnGFACnqcgJfZQdD1Gky9E8E3JdjyaEsY1c",
  "key17": "2XYCZWWSHvjWVwsWtTMPxbVgqiMnXtPXx1WC5rGAdPjiyqVZY4QCXCLkY1zP3gygVwSpSEhHXPRAmVW944mstpG9",
  "key18": "8peZMgZ1FvdXCFFEHSnnMNcM4rkc5ewgoSZZS4BxdYfcaC7hr9zLRF7fiFmpxM5irgbzYnNssbXe5H8pHFtVk8E",
  "key19": "4P6PGvYVEdxRuLod3PGSpD2UAZZHw6siwZcMURH44kFJqeYyH5Aw4MRZqcMbXTBo62pM9qEVSxaNxkrv5SmcyvYp",
  "key20": "2wv3MAZmS5a9bDCbGhn8cXQu4cuZvYTFwowGvZzfjgA4GgJ89ANQ6HXKj4uFZrEAYo4efBCgJjjTZf9HtyBnWvEX",
  "key21": "49EE5tJF9b1YwyieKmjLnSKxupf6vxRPMybK3rzxGyEqou3NAeAPkqpBBGySjwxCQxGJ5jth13vYzdLWMNZ1987u",
  "key22": "2aKqBGrp54JFbyL4iB11CBgnCG6QNLCUUr87LdHiD1jfMkzCELABsECmJquNhqS1VWNCxWU1chBF9ZhjfPPbSEDN",
  "key23": "inK6QNvqYBxcbs4Zd6ZNqAxfcFd9zVUMyy8nGB4Pzp3JGbUgp8B7QNLdPmPzYHrcNsUT7ETTDmxK8AYjxQuQTKV",
  "key24": "UydadohSd3dBRgfLsVoUje34TdTtAzXyWCN1RkCR1sWUJ1B6G87pxNAywV5o1JSeqMHRMZyS3DLs1s6aqcgCaRK",
  "key25": "ynyCV9xQCuRja24cB1AeYBeD56Fcif35JrgdGva1ypGLSTTbhHQ4qhaFeqXybtbc5DHerx4o1BPruFTdn3SAaNG",
  "key26": "5kAJuKFr42aAHxAw9UwEZXi2fugigKtEg4NN9Qu7Wdw2LVoc5EaWhwEmp2wQJZeHEonoGaPTYit5zkVrUAPqKKdd",
  "key27": "2wguB84mYXZQyp5QF13erapqNJWJpMwe7EPcm4yqyfzT2624iNV1nNDuQFZ7Ptx3i23SGcQnEJEK7R3JyA1Fjb6i",
  "key28": "2Zpe2xUP8MoSz2rCV9u8qgSrAs7Qd9jWRzTCREoRDnz3bmy8HSx9wLMvSFodB3nmP8tgE7xxPZg75sJyjdHf7spE",
  "key29": "2Fiup4Fbh2nFRdZADxuc9hfSTQNQ25LKQ5jVP7EeDc74kWMptqFwqaUPMTYys2WRt1vDWV94d2jiKgpgUVZYL34m",
  "key30": "3KnBBiLwt7rgfjRxfbbHYpeWKHo1TtwwgpADXQZkvoR5aCSSuT6CuhBspLPYhEcJcDkDF8uKYfdxVVwHqFopQ9sT",
  "key31": "5sMnaCLJUyMnTw7Nzkykx6bbXQnfAbbNLYFzaWHaBPjPSLie4REUpeHNxeqw8QyGg9DtHJyPPRWR4mVkHfSFooME",
  "key32": "5QHEWBGAags8WaPb5EYSkR54FtRQRJToYAibrLacC2n4ajqQV6zxQiGnj5iZy7A6nVoB1dRfwahsDknGTBN2gGQS",
  "key33": "WdC7HoejUZEiqTnq5etZg6zjbYDV2rEbNg651PbwSjXk5YBDwzcsM76nXZ2XmiE9m3ckHe2L25Zt5tgxNcHtrdW",
  "key34": "48xt6BpbQkGhiBcZSTLuP5QoBGv5zRwwSkCEEdzmLmjQkxL3466UujwDyNYbc3zhKjK9nyw6RpoCPbimSjuefWzK",
  "key35": "46c7NSKKUaKzDwwmwgiGuuGu94pr45oniP39z3WUKhrwWCmDWs8d4MTzwqeKPaMy1PXbugeJZnAuzLQi3ReqSXJh",
  "key36": "2sJCWCvzaFy4eo3VoJGsmambVKLe289MMAihdxrwAWgRfqFFEGZrpnqpYG4oZPZHvGB45AiG1N2GnGxxekhPQfXj",
  "key37": "58uq1ng64HZhkE84rPbUCfS9yisWdNQBEWEjxvX4DwNYNCqNLUrAs4UEeqqWfGhcwqX4zLq5kUSXPUWEd8LJWtnB",
  "key38": "baXykRwXB9ZdUJjwMhGLztFp3AWQbaQwV64KHFKgMkT6LGDkT3AdHs1bxEbGC76J72rixGpH7gG42kUmoWAKAN7",
  "key39": "57UdS7bEGL14j1fKo62y3JE9DTVM6GYRQnJgEDKsfj55guzhJAbc5iDGMGDxkFqoX9JtP5NfCgGkgdHYFQdrkFn7",
  "key40": "56TZbVm3gqJZEFm2vfgwA9ptDGTc3FUriXhRR6HsPTYSPbmWME3ezzx2ArMAgnZJVWHHWSUNpF4ifrQMB9BxJyxC",
  "key41": "3KfRJ9ydb31toGpsQ9TW5J4C4Y9YuLKnezG6zEk8NieqWRx4py5Zk4WPUNqDmzFo21r6gbBxA6o7cQs6Gfue9bUW",
  "key42": "2J7CFNgQbjNuSzVKd1FkGkG2rJoGqu3jCY8vGcY7SZEDe1RWgWSoLFG8XuNYujgJqt7d3DpNJ9TaWd4atRmMD2vK",
  "key43": "5KSGaJesnmiWpsaA1TCgVX8xGgAzrWkt7DjFBKxSHSSdkCaceha1qDNiCygPcqXMUzAAHYY1iyEKTCUUYHxqwW3F",
  "key44": "4BvsjHy9ptZM4wGRKpXpzNbqKKWCK3EpmW61kvCkD5e5nkhDf6uMVtkRVgDi1n8keu8iXKasFcctDamnJKXJ5Lac",
  "key45": "4493kwmZCjKJy9nPDdVmhPNiaeDu8FSB4eyFucGucTzSm3SUTKzAXk4nuWDsYiCY2yTMfBX6y1pMVSj3PEVsEc24",
  "key46": "59SSVKX2YHS8fb8esyy5XmFpHVw1pJx44diPH3DemBwJFc52so6e7VLaMWDuuJgGpTRTMsvXt48tkhnPYo1RuGc"
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

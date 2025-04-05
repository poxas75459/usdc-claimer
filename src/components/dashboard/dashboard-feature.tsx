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
    "3pCpUNpYGdQYxWQ4cSVznYYx5vRVHeJWEH9GYhxFoaeqUBpmw77hwZq41M4p4iHGWbRACTrpbY5Q7tmCXvSjkpeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oy3Ny17Qd4SYQHW3Xzkf3VrF5MCp5bHuWEYDaThDBF5BJNvcYXbFBJVDvwrowjV9RyvbEhBVgmwW5E68fKEvbkv",
  "key1": "4BTFxSwY1GxXqhiGQub9eLfWypCEKMzRRzCjT5T9RJEF7rEG4TbnLebeFakoHvvfyuEUuEtAoiKGgDWsbM2uP2Wn",
  "key2": "3xKJw1ZPWj63AMtQCgfHjAdtdWgUM1zuX5cq5kxKzbcJfi8hKpmPkTkW3xt85ShHyt6N83XAVrrufYjvNTV6kT7E",
  "key3": "4uQW6SB3MZ5YwJexkqWozHQQ9K9Y5VkT8ZyS9g5XzoFFcYx1gqkYSuELC25CCuW7mkRSe6bPpZDZRrAS1QjntTQW",
  "key4": "4Ry3xqtNeo1K7knhWb4jpQrio7AD5DBDizAFwWEQVJFobrZnqi3ThR24acG2banB24SowdbwFqjN3h2SPALVF4y9",
  "key5": "43mXXNGKSc5RFQTzYWDuvBCRp1efSjK9Fv82qa7HnXS6SpbH1wqQBqvb8mvH7KJkuSwBaTuFbQojAZBkmapZm5CB",
  "key6": "5LvJzeX62eMoGWwjrZMtthvUReSjo7b9aJqqEwkzaLpECrR4xMWSi1wckdD2Rn84h9ouvTmzZyUnEkADCMrjwiQ1",
  "key7": "579rSnVgs88vNoRLi5e1NEgjLqC9PrtfcReurezfwCHAHjB6WBdmsDnAR2HtqznSzTBnYxsBr9szgY6kNuDydF1",
  "key8": "5TFXnw6548T8gCnREoquVJcSLhjpzWycZeaprRJmRFaPXr9JhQL3dAdTGEvuSayFiPtm93HgRUFjd8BxEpjyW8ER",
  "key9": "j6MLtCfabc9dMkbs6L1YSTTq6nttVxi4m5ippmJCevxjwJUDAWXsUa4bvqM8vX5UsuYdYeZSmLjc4di4zknKcJq",
  "key10": "5cC6H8iKG4HMoB2QaPykh8XTbeKdujBKRPdK3rAQM7a77HK68CemEbvb48oeTWy674xW2gPVGfJdbiLvUrkZQMZN",
  "key11": "2KZhFgqow6kXWNGqix6HZhHcwYPCQ2q8QceKMNqZ9Rx7GxX98jsriErFKDEAg8zR57kCeYX1TP59Gy5FptfCrNho",
  "key12": "51GgFUrfamKB2d32xxMPZm3Db9rBxCUBHS4MCURuYu1Ad8ubjBNWm9rmuUBU9ah78dPZr1ajaWKvDxUz3cGU69Qx",
  "key13": "2PuZX26YR1GPEkuUCY7TATX8SRen46b25cxcSLqyM4cLLiakZoPEae2iMKME4rMV84W1QCnp3MymdtTGSeHB1mML",
  "key14": "2RsLTWVyRoHmHcMsbjQnGzuY6oKdcXKHm1qP5bwyeBiuXtd6viScminFQRpu2TK8jt1NukfDZjb4DRpPvQ8UD9ET",
  "key15": "4qrBGEN4eEbfXWCPoAAVUSr9GbhDksZDR9wt17aVZbS5fZqRV87DMGB9BQK9gCQr4zcKTGq2WxfCntjnej2LzCZk",
  "key16": "R6w1Ne9ofvvxPBXUtLzZQMB9nYSz6q4u5Fn1s7zXwVjMqRScpzj331T8APzEbjbrt6LGZ3WLPXqJhDyf3PJtUsd",
  "key17": "2e2peGTagMEGcwGtUm1aJLzj1CCadgL8FSSCXRnA2KviNPQ2FDFNpAnA2DXeW9ckPsPN7pUYqCzs9svL7TaCMcRH",
  "key18": "4UYbgVvH9q5wgTkFitvywW1DYpWNjHc9xiDdbVBPLVcvwHZMUrVEtuGprWZsYkCK1r7vHEMkTWg85rW5VjY8k27p",
  "key19": "5DmqaVCcciPKwvCsxVmkxmhrp3NB5tbjVN5nVo69pb8FF1UtGyoaXxm2hfpQjv21GiBBX2WXpFSs1zogTtnexvvx",
  "key20": "5oym6Yru8AeqtBhRYoMZahDQgBZmbGJWT11SV43QTfGopdiXdnRLw5fofq4aJ3Ty5yq8XTxiM7o6KS6rbypDgiRp",
  "key21": "4ACNUyKi5Khmy6crCXxA1QP2ZBWMJ3DQssw51gGjkUrYf9tKXqsU3gWuhGJ7TAtHeZBytKmvRdjvhA3NotrD2GyW",
  "key22": "YV5CSbBGZR6Lp82mBquPMxVmf1rCPN1ut71NYXqbTq1QJpJeDKFje4xppg4AkouwTe8XSTNLvKqHYu2WwXZD97a",
  "key23": "2KdWSbvVU7aQxp9X2PN9m6dTqb6TkRcfHiojW9a8N3jgd1cZLBDPuNAC9bNNnVJA9gNwZv66g9c37BHMH6thZrGU",
  "key24": "2FmPTVoBnyodvr2jUhZiHtSuy7UwEUQA21By8XLJRcRQ8Ecaq1kU84H3q71sXuNLtfuCu2iR1HKNc4LfT4jJfeES",
  "key25": "5ojK49cRepweFqp8amvzZ3zNmTYe47wMcyD8ENDvB3pDzFBGkaAcmWpNE7xqp6tkdyy5B9K7w7P3U5RBhcCFdmxW",
  "key26": "pAWq26XeXVYFxhopekc5zsrS3LcsAbyPKNMAVFntB2dsrkoCPeN95rSF5E8e21zzVbLcpTpcaPmbC11ss9H1wkT",
  "key27": "4Q5r1VBB9CaLXNDQ8Hy9n4G5FWK5Pk3eQkyENVg7o9Bn2khGmENkmiE2enPX4MMB5LyaCBBq9MT9ZK8EEyHm2VLp",
  "key28": "99QEcWT5YK5qUvT82bEZpEiYxbaa17wYT4eTmiexRrasEGZPs8pGgg1JDq8vYBDE2iew5FyNGnL7rPHyYSvJHBy",
  "key29": "3z5qL716sJ2A6ge5zp5TX6gTeoadKj3eduMK57rJFAFtZAbGkCnskroWB8HjE46cyLPgHqWE16FZrpiBL42oEooV",
  "key30": "2Dqq712rRR9HqZe4uWkUkDWuaDvrdtnnF9zbfai4NzUdTbF7wnDcA8jjnoDnEqmtWnbSboSyewxHYG847cLydstR",
  "key31": "3R8upCzbafoVxZKgmn5sUoatyb1vSx8nuGcr3rFmVgBFPCMe7wR7doj2LoPx3RASPWQYNfFMCrruVayqvRVHppFq",
  "key32": "5isrvygKDe7ye19CGTj3UHCxUUUDAAqKqAXDRdRTM3MpTCc6qrQq8wevh8uYGDw62jm8FFafsEEYKcFB3rZV5NgJ"
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

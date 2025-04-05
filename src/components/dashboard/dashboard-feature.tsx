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
    "27xdZmSbCs4veN2TBzGa9QPXJjucKYvZ1ELybwWvft3xN2EvvQ8RW7X34JecjUrmEY7kEvNDnVLPDLyWEpcDUbJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sW5eyuuqpFPAtyz51he5gLKvzF4LBX8KeZt3QvizpuoW6LvLYj2dGmeEnooFo917RQYp6FKTk5YqEjUeeb2pCxt",
  "key1": "3DnmohFGAKQUyqeoYJ8BtxjgUeC85wa8UQ4xdAEF1LUYnzvqVrZHRdgnu3PGmXmzS8abCXUBimePH3V4TM5MMFFw",
  "key2": "2PjTsBNUkGgpYVdm1PS4mvz5BcNuAZsu5je4PwnJnZFxSvHRh1B9UUHQTm4qb1JTYctZp1cocUCq1g1FX58V8RDa",
  "key3": "55q3B2EArWRo2gLUY8p2wJTQmWWEjgTvqv7WsFhEyCmedi7Vzt6QUnEDbmYEFu9U79BdVdAgJz4KkSQU7UZRt2MH",
  "key4": "cKsiWs8zEyruA6g9KQxEjUViTwx7jarm5pzA4mrYw9KqWYPDWa9Lq2rfUYYNV2PaPfHLe4C8ATfF1DrJxQMWwz2",
  "key5": "3ynsSjXhYRUbaAkb2bgJHZoYH75DrX5SwTs4gm6VYus7d67uvCmXa9yiHwtqP7Sg6vCaFAcqj2zT2VBWWHatFyB8",
  "key6": "3eR3CDHBNg55CzxrHkmKDF4ooY6DMnwMGp5FkAJBxo95UwqeQeEkYrngi9ckmD7m9kAhiVESMVcg48fGX7P7kVKH",
  "key7": "Ujq8B9G2FFe8XqfNyvZX6FUgJwpW5vs9gK8UWL7JCEe1w6H55PdnBfCn2iDpVovJS1wobmHqTkVeZ4HcZKxVUk1",
  "key8": "4Ubsqn5swWBiGiBLujUs2kKSF5rjgzkZ6hm1bWKAJ4KKATBoPWazx7oQBKkKzy2nQhxrnG5Nsz8R86MxuCLncUki",
  "key9": "3jvztmLd4gfJrJMMDZGq2EpxoRecfopy5DFiPwpuQpFttBKjfzKQk2XAyKh7FM7wFisJDhUta2zR4VhgnQXA9bxA",
  "key10": "eGdVATM1J1SjL4WGYS9reyqbsFGJZJio1F1yQGcK8aGQXpa5eSkWPRQYrWtdBmiiYzo2Xw5sBf61aoUwGazPFEm",
  "key11": "2FYa85tP1hxv5J2w2wmFVzeoVzV49pAVuyjJe9sDUsixMmShY3QDcNLfKiVRyBsErhLGzsVrcg92gqF8wBtRHh1h",
  "key12": "2RyvtVdyBNcrDeio7tY9HpMrLnCoTsHWKLh52oduPvZGtMnMGgjS4QfhtvY2b4szSnnuXxXLJYGKegMf6a4GonJX",
  "key13": "4VmhkeVGeiEPJJCY1vLVi9quECgw6QzEw2oPKYj4TM2WTrSpJ2sRmMydbFhznJWHFoDxsYJ9m44yegitSL6TsdsH",
  "key14": "2Ly6Uei7AsGyJHcTGiTQJrDvPNT5ySnDkrtd7quAvXSmpDqKmLZqXaGjY7jBh1ESV3pDR8JVApPkyxjUGfcAXmLW",
  "key15": "63hXBgQDXtVvUt8uQ9NXPEyCXKNemJufh3GTGQemY3wJcQ4iRCsK514rcqXLUQH6TzVtPB7eSFNGQHnmYa2YnkDo",
  "key16": "i2U6mgByEv1LYSTrmoFMJ5xoJMzj5ymeAQGw8sS8FzLZQBZ6c1yQ2Cjkz9CmKym9R9ah6aj5Da54235BtQTvtEg",
  "key17": "3ExEHCVfveZmKccdR2mhoQ6QYERkQe8uGEf5MNGxjvFFyANqp2qzYL6YyBR6pEeZddzD61FPsAPR4icwQJ4qNyQf",
  "key18": "4QPFYnPSXGcRWe8AAP8Bs7cxdMQxC1p1J7jZ6nrKet47Cj54mxC3Y2Xue9tknsSrvJbX4rjbF7xSVuxYMEcfi8Nw",
  "key19": "4qPfkSmDS3M5nsjBK3htzqJis77f6tRKiKN4LBC5xeR96kKgfdeot93qgv3REQWQPG8CUehrtKbLyWgu4HD9m6CV",
  "key20": "LLvV19GuCLXaVqnqZBJWxBi9CADWKgRvBg4dndDedYzRtpe3bC8hUUrnRZtNFtMERe2HgGjbkiDfCjyu76bwa9J",
  "key21": "S1epzUMiKPSctsEG2TWpAcxWjV2bii15bpMknwKE7ZbpHTM5YqqqgmmxGd65iULeM73JxnZqTx5dqoTqB7u749p",
  "key22": "2trAHh5dwgdgm2VktoebB9ni5Qcf5i4BicJ6tvT5wFUo9pgU536XBQyBEQD8vKiF4SpsKL9fH95wNvWP9AayuCi6",
  "key23": "5zn7QK1ubuQjZdDRGSrqZfqfoq6YMXK98b33c1PHTawzxYe5tBgRXTNGk9QJ1xGuk3Ltkb5yQCj8MQcgo3USGYCk",
  "key24": "32V3iQNwx9W15DP6NiTvvhkispA5c7TcLRJj13dNjYrxp7Mh9mPT2HPQfgPvpBKADkUVGzWoVqbkU3auMRebg9ha",
  "key25": "4zMhym4nSxoCb4dgSiczDgHpMpjrdwkKmRvjzAvE6ZYr5XBxAQMyHZGUHR8c2xssAjWteLGPfNXodSqPrsy5bxXJ",
  "key26": "mvQW22MyS3uXCv9F6zuHRv5tQqUxdzegomCd1sUEjBoxWXX5E7uwFjqAyYmVJ3jr6aHiwphNykMYnmYFdpX2ANT",
  "key27": "VAXRr2tigwdhr64S7R8BWbBrxuittFPFZdEEQc99cMg4paP2ie8qQnQj2iuq2aih6azfHSdP14hS1JrjqgLFv29",
  "key28": "4YvurNPjAGA2axcLfx5YgfeXqpngq2iDv3box4ZzBiTWACENbcQtxes1ZAob8LbCij9NZiBczwzkHGB1sSN7wDdp",
  "key29": "rMc3REuVRyaFuwwXazpmLjkzZnDhtx9CVCZavAisAz7MrwTLE9E5gizKSRHpgtJjDcXJj3xEsyS8nSy3aia7GGa",
  "key30": "3DagkEaNweQXrQqf7RhaeCPwEMf3JSyudZwGEya3SKyDk9tberUVvbc82PHnVeBrzjxghePzqwj4aKFbSbjTK4rH",
  "key31": "57SkksiyTQF61B5DcxVvnXrG1veHAFZyfQd2ekxASzEJP9y6P7c3EEn9fEuWHi4fSDMLHodrMVa97xiKeQkZ2UwJ",
  "key32": "53nHr4Td1JdcdtXJtXqPhHyNKQZxYERhs6Au3JeXDtMq8wa6RXntK5djSSzSsdMihZeMi9VKJjN1gqAEN9LPPUVW",
  "key33": "4t9pcEsYbgLru1LCkJyxefVP54hGALJGDvNdXVqoo1iboaXNYhmvaMiGQQLXLR2mkNc5jjB3c6GiQajGhifj87PE",
  "key34": "5GPxs33Z2gHFq3nZgTrxPp67q898RkvbhrVKGoHLFptoiE8XDMTLqwxVvAkEu5wLMD3ioZty2uXWLQn8Dc1TUZM",
  "key35": "49DMtT7m4zGGaCNQNdQtswmbo2fJLSzFt5xsdBdu59hRk1qQ7eJq73ktV3B8Ljp2C6Xu87fdHtXDPbKyiiRDkjGR",
  "key36": "5WHETuJFz4J5VJMYcU8wzssE7WVaKA81rcVmRdFrii5dypYSeRZQc1jhwkPG9yuF3bkYhNeZCtqaG6ZZaku5NBjm",
  "key37": "549rYtsAJ4bj3bXimuyNxCRiKnGKrpchtQdWZk4FXnRvSDEDFntPqH8iqj4DSxUWBU4ZLviS7syPBhvSiAuAVSrX",
  "key38": "2zDG7m2bk7nSXGAg9oHuAHeR9LXvLt9eDYGtxgyruGPuv8nFZeBizJT2uricaQtTCXdWrmagPcqthaekkTPMsqWb",
  "key39": "4dZdBygnCWo9GNHE5t5Ga3RE3UP5jKjEt1bmdqA3wAjdXXHems5ijmqucQcZGTWnQWTGU4s2hBhZuBGeedJsc4UN",
  "key40": "2Rn4sajHtRx2G6AG6HhBu8JcQTuPMFRmsYXHazC8BQayNpgem3MX4B9PafWRt1dVM9AB7QfAKSqD4zCtXHiJPNnH",
  "key41": "41XAZHwLJFy9KwJmNqGaqWTeXSdMv8TwEC2N3mh1HAWJwZtQKy2UytrLGvrzTNh7bEqYRkBYZjr2z14DWTG1q5JQ",
  "key42": "3MvMSC2h9dH63HSDiEQfPU7T1zVeugwVKriSXxhzXz2dbtgMoYzMv7rHqGNJS2PXeAQuNWJSyiBVUbSCnJ9QCcDN",
  "key43": "3msq7CJn6VqaJJtyTxZ7RvzZFQVAPKQAqcyGiA9JGY2DsVSyBySS4HcdswZiS8t89m17EiYdWNHxmshxw6MhkgiU",
  "key44": "5n5HkQXxNwoFaRAdvqhZkp3ZNNTRatstT3WbLw4sS3GkAJ5pSP4rwRHKWJfY7ctAND7EfG9n2XHLb7jNZ9C1ZUow",
  "key45": "3JXhAYmo18dZPTtwpMLu6GKK4rwSAuV1tvVhfMzCZn5pZjSCYCMYscwch1UYnFwfGNVpvT5niFGdYUGDjTBXi2Ek",
  "key46": "2Hjr95Y6jDJUbFRoGJtst7YQu5XwqNYDhwGjN6q7EFSaWg8A6YekJ9yhh6meiRBb6QthUZaqiQXXQCbSB6ysFhwy",
  "key47": "2kt1WjTkuFnHDxGsg4Gka66vMdJLvqqq8BEPvaZtWkH1w5i8PKkQD5AmHZENWFGZfC6JtF7vbE3JV99YkrEsrXby",
  "key48": "5CsXYkb9F99tRs6TEyHViuHgcMyB8TbwUWXiGjRWf93Uj7LLgn5mKt6fqqG1eFyhJdBP62sSaezciNrr6SccrfCz",
  "key49": "51qara8DrxEd3rtwK9PJiQQ5nbont4XnEuRQeCww4ZLhJhk7NfUC5C2Lacm3odN1ocuyL8xoo33mATmstQYLPWPi"
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

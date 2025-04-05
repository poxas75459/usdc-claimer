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
    "26KewTxfqq43gmfu6xuv3JfkCGsFsfZ7ea8SLSV22uDS4hS2nb4v5kmqTwoTe4Pqw8fdwRGSATwM4skB1PXzA4WY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55naGCNkuRTKNM8a33nJeKbYxrAdVKzSivkKE2DJRxFQqTLscDWXpcK4eXVE4CTnEChe4UTeZ6Qz1g5gAnEYeTLT",
  "key1": "2UZ2fkr8xwsHzP7rNZHdCKXdv3AW4Ui8b1zJaA6tmUH7K5ppMRWANj4yiVW2YjKV9RDBqW5LH6rVbR1YDTy5zjq4",
  "key2": "3WzhaErh5uPp9PBni6WjFYHbh6maeHD135w8gk19CBnGFbPLXJGrW9Xtd121HL8bq7HUeEEzSX8FEdugyQh9Lkwy",
  "key3": "3C7CWSZUQwGUnMCwn8J5hZXRyqXDP5K6g3483oYMqLRsP6LgsdBoHi1iAjoCdLA9qY3iDJ2bQpSq2nCEHoGzMxvz",
  "key4": "3CkmB6FWw8CVEwWm6271guN1S8pFy55e7xHvJ5fZ1A8gnzdd9Lr8pfeKfScXjwE33nDrx34SSgG7UA44LPkcP2Nf",
  "key5": "63VUAcnMmV3gc4W2EKmDbUT8XDCbnrCsSEQMGWjr17pGGWYVuys6eNEHomkvV47FbLw5Tp97foxnNiQamK5EqCpL",
  "key6": "QZT7cLH7L4LMRkn529Fm4wNS54tfg3vTR6brRHAt5gR3m1db4RLQ3M6a2Qia1vY96hY9PnqLNjFBKiJszTSPeXL",
  "key7": "2zc7Zaev8r5cnJ1FnQK4Yn41JGqS55vYw578aRT8uu1Xjs71bScBV85uJHhipELAVmUCKnWYxiotm3hj5MjiPgtn",
  "key8": "5t1B1ea4P3hQB8KsCwULMKSakx41h2aihwSHrt1RrfKLm7Aa4Kb7FdkyrtqZtKfuLY2msLgmjcoauzqw8e68P6hE",
  "key9": "4VWZXr9FMya14RUVojssBMVddqzgsE9dzmmyuXEdRuH1ppizHnpUZKoZTBFWbDNWBXzJD61j1p4aHwWJT4TGA958",
  "key10": "5zodmdNXvS1uCHLfBxJHuLECRmUr5v75ajQ8g9j5hgzNTvawBUbB9sKGZKYMNc3ZFsL24GDBNYxVBg9S1rKLeXX7",
  "key11": "21mvmLNUutLrPC48vXzZfuJsM5kLhfiivVX9sPX86YcYdxNzmiL2Bzjc4M98NQ8fukbEymd1F6SQVMhUpqVobxYx",
  "key12": "EbejnDHbxdLvyWno92DUrYWHaaxeJw4JLE3duqMpR2nKDKd2ES9ziRDxGjdvwpyQHtixy1nz8fPojZ3Ti956MyB",
  "key13": "uHgornajhw7PsWapyFejY1QmdebqQETvmeDVYD543JfPdBGpfoAskSCVyf4FsrfJsZmeKKMKyNx7Q2EkaogQfqH",
  "key14": "54eK6LFPRqwng9SvrZmdn1NXjYB5qNgXyeMxjkjAH5eAqA9G9NcGi7WhWdzG1hRxzXGtKsjCVqmoAYrnqrv6s5vn",
  "key15": "3mogt2Lng4Q6ch3FMjy4saR1kcE5hYygvLPG6S6h8pkwv8QG3UAahU9yhPQLjhS7y3xPCSs9j3yDRDWVEYNYSZU7",
  "key16": "2UCHmqY54G3skN8Q7cub4d7bGeZ4JopB2g2XDZzHJv12yNWHAPV2hJjBCMQnU1BFqrmej4DGYAV4bETDsEZ9rGY7",
  "key17": "3fjconKyicJ8HBkUX93vb9kxEggoWd7mGN5Edftcgue9JMnAqh3m32FFiukCaVFmEvMEMEjY6W7xAmYoti8vpVX1",
  "key18": "2Nt91vDWAM3xkyEfgvF7cqmhP9SJS2Y9i3nzQ4z4xoY9Znz2XSEbK3kmwhHJEqdYZvGaj7AhqL3sPoaeDsJagHPV",
  "key19": "4MaqXcJqx9y3cENB8H96eibopo8kYuaDHBDZRh2hgdaqH4KH3fcm5xyHJRtHRVYjKFc2Ltva4XRXieddmBBTGHjS",
  "key20": "22ains1a6jxJGvnHLy5waSoM2iNAzgwo2z2r38S4Nns7ahcXcZEgy1z8pC3XtnQwQK6dnhwzxqno1BC5D51LrJTG",
  "key21": "4ytAE3A79GthqZY3GrBUfCKegH5i9quKtCJfmur8EMpXBXLSK6JqRfZhWFTa3rQw3nwhMGgwGxAd9T1soYhP4Vq6",
  "key22": "PR4bjBGG5Qq5dPd7UgASEHpvmPuk7tqmKJHqMf59TFp2aATqDAmJeDM16PfpBXdGi6MGpRaaD6RFQCQUhd1g43a",
  "key23": "2q3UTqhx8yzf9ZPjP2ZYxGVtvehS5FMVpQq3zwiJibnz6DSrrSc5Ns4QrNkiuwbM5pWdPd2Vj8qnitrE5SV5zFtY",
  "key24": "nGEeyV1MjYHn43KTu8RizJ5DaWMGMZ5L5LZa1kVCo4Ai8GNwcecmRgBBPGPR26bhZ1RgyPprugaRPmojTBQEH9r",
  "key25": "4DRcYV6quFfcMVzMNfJpRU7REPpPTDqzxmgiYrW7k8zRhSeNvAuqQjvGpuMoeFver8yN9V8uBgVbMnbAu46527VZ",
  "key26": "RuKFPzdFnZw5Ar6pb3QpGXF6rZBQCKdd1CLLKyQexP4MLMxvM9QbBRxfX8X3ufTYxj2Ugdxr1jJctu5TYidpfWh",
  "key27": "5g1i8GNjPFuVgCx4YhW2MnXKSnWbZgHJFtMh7wxmPTHKCqk2AjYP1wfevBEt9apBv1xwGvn7PNcD35PN9XTNGXHY",
  "key28": "5UC15asUsAB6pVCXYWqb6DoYHxh5wjYNKJJH4snPQGYALtSEd3hkSKqsLaJ38WPmMGfJiFDhMqaw8MfWWaiZF4gL",
  "key29": "5BDZBBqUANgdBYgiMGZmX87CvvxsDaQiRHUxArMkvBrwQjFWHdCPkSRKxzcdm7exx8m78HyXNSDfikcbw7YyZBxV",
  "key30": "4N7EMRCwTJoWNvkPDKtNGGVGJdeRh13x1HGQ7aiyk1ta2VjqiDSHshgfXnggxQ5hXyS9R9iKXGyR5Qr8ciMoUkKS",
  "key31": "SDEFTzVe9Rvy6vLeZyNUQQMgH7HxYc8wDZAJKyS3Ma5FXKZohtVYwQLifidas2q7rjaonenxjGE2tqqib4oyrWR",
  "key32": "DTpQFXUFxrkxCxmTQQwudY47wfYQ6QRBEYdh8rDQeqGW8c7f5PYsBipBneQFEjhEfCM3zScq96XyF8rxm7CEkx3",
  "key33": "s5TmoAcxWZqSERmjkq8WLbuKHL8PmhMDUBiZCCY65NwuAqyLUGT3kDCU6JhSSbXjHnistzR6wbN9LhWmVeAm53Q",
  "key34": "LfQsdMi47yiTJCVogv2HYFQHy8iAcngVQs7f8QTD45n2xjqfYE1VyDHc5FFUSb3SjgGSFdUKSRLMuh5PUFaQevs",
  "key35": "3vq6HDMjPzJpGr6hC8tVm7emqtTyxi3F4WDHuMbMzhVLz5EhrMvsTs8qb5YbF2neZSA3fXnsb5Gkn9GgR2mk8yQd",
  "key36": "2cAWhwWnZ1p98iwJcnx4wdkSxUSuqPj2h74wJFZrKsqesxGqdy6NdAe21wfMq5AEG3t4hCfxvV9Szsm88Jhmw53J",
  "key37": "4AMRF5d9zXsy85wEsixQuig7kxyecktzFit8Xy7tuH3USNtE2HNpBxA8jsAU8j8wmAXz1oE54UjSVF7HTCZgBmX7"
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

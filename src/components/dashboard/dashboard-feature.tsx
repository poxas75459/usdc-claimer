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
    "3k3tSfc9QvDipkhRZb5LeafjhDdtGijixCKSLNwRy18ZrA8Qekxx4NQAyqsJpaSS21hzw3yGUYqYDk97LESQWfgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MNr1vxuAzY6yxsbDF61gtxbicHepx4WvWAWFSsHbCcRLCeVCL8wRgqsqZJG5G5zzXvjfrmExG3hUVhJz1ShuNL1",
  "key1": "5n8V31i8EysWxZLBt9rPPRiV2jAgR4AKCAQtq4PgXDeNYkkiXMAhe3q7KCKumcEdp5NeyDJynHdJCUDX42ekX1v2",
  "key2": "62tNUySwZrCKRU7NpQwpVrJWhj6keNWbDb5xEE82BErpNdF4gMDQvTCJUvgGnBA6qvSXDq974eKZyrPBejgxzkF4",
  "key3": "23kXSZ8BjAzoFy3LJTndi4CdJkhkT6npgUNeDsWD3wWnmNdU5cUyknVpSWTotCyP1Bfitvo1s6vpd8KEtU6rEuFj",
  "key4": "2Mr15qCnkaqetnfQ6f9aSdFeeDJNv8tS1qoTJuzQycMFuPzUDUpwzhLdJf5Y4bHbbU2otVqguvE1CKbMvKRL6i1m",
  "key5": "3cnDxRGq5VZaHma9RpB4DLjwDqZwgEwD6pd4MnAEhDhrUp3Cf76T7j8gLuFYcRpmYn3nus6banY4n5T4kSLkyjpo",
  "key6": "Gsx72mQTD9weyNDL98oqAgTJVdNeJbY4qXxTpywgmHxBKdWyAo1dCxFWvepKpeWivPZpUPFZGUQ3KKuTgdmhRFr",
  "key7": "2E3eGPdWbXYGseEe5by4Hr7ZS1vni3RqsZihS4UfPH3p1odXzhRg6hfRGq7xsUTgmnsVkNsH8fWmmLmre9uhvPFT",
  "key8": "3XjdiH8p5Ls2aVALBjLw2pgWFaKHg2FiP8FSFsi5NZ3EH1WtWzRG4fEXtGeu1Cm4FKD3u4QX4zkgNQWJ7YPvA15X",
  "key9": "25jz2dyufk2tmyP3j4LwVqTH58PqNAT4ScXW5j58bLK5FLRPRxKoGxw6xPw6Kvk6AC781VXHtpGUJWqbWBqXept6",
  "key10": "2tQZnNqni2nAzhpEjWo3J215kdcDUP4c2AuRY7ftzo7Q7dZPG5eGYjcK4eFkvGoJPDAZTgxcQRVmvuCUuZPsenDJ",
  "key11": "23s6VFNpP4iL1oRHhCfeEbYCSy4ofYRnh9LVhzQdbwB1DSdD82oXoo5LxKUz3FpQxBU9PhL5K9vpXJcVZiY6oJnA",
  "key12": "5dVriUYhpVFRgSk8TXXunv8WtvxNtCoBD652oTm6d8Ti9Nk8VJBrwmddprHVUUYmGervLg3QFkYadpYuWLDx3ruC",
  "key13": "5aDV8tmBQGZq8LtaetzoW9BAMxyE8J4RceA2DpCEZAWjbytufYVTjUwRGDU4vhyqEwioZhvwwLg2kU1woWdtX2e1",
  "key14": "5Zr1ab7aQmZ97r3mxjGp1cikMtACBiReNygiG8ggoEwtgyHPHoUN3TLHvruHywatVetzabMhbaHUPVmHiyoLHCTr",
  "key15": "4wj1S6yUFJFtJ26Z1eAdxhCp9gDyRR48FJLKyt3KoR9ikJzAH3ZLZHUqKUKBDjAvVhxg8RDx4h1S1xSPZftNAf4L",
  "key16": "4W9kfvB7URnRjsL8dZBSgz55r4YfY7mCtwYjHi963pxn49aKpVspHx6i84664hSyTx2QSLtFPyRxmeE4aRqeXW4Y",
  "key17": "WSXeYx1rRBwh9kUAKQNQHNv9dDsEgAd8JAWRFEQPTuY4YPxVFmLWRdPug2mkb6CqrVfVftoUN8iTm8fRjGNcGPm",
  "key18": "4VrsT33eos6DDaCjXfgXpbWfM79YpU4irFVkzTrWRv3Lks8E4TR4F8GC8cxPV7gJcSkcN47S8YMuwzc5JGhUCYdW",
  "key19": "4284w1HKcbKN11b8HsdHCF1dvAV4ywPyBPQFusdycxctw5hqZ8zuzFZ5apXZbWxAXbKBek8H4744P9tfYTHjthg8",
  "key20": "5iVUcta68bEaTED6anErmWoZYnEzWDVg7KiwRWZR8suA3DtAKpjXkBQxCFLkifpwsG1Mj5syX2cp114Z1gthJSZW",
  "key21": "wN3iYbrLQajJZNAoQYmcwbvH7pAmBxUxqZh3MvCjgM3Di6QLiunSMCQrDtVs7Na9f21XF595wtnMDjRi2WrRoBj",
  "key22": "XPboPqGw9ENJ6juLgo9pfywEBFDgJNGg2NZzQx1dRHnsCVmRZYP5wiLymkEVLPjrSZdiAGTYZgZimJ5G8NAx1sQ",
  "key23": "vvgAC2sAjroPCXyoJ59D16yFdobyRDV2MrZv7PfPyxbYwADsXqZVKZTzn21UsjE34XinkyreP6ChTZDNJhphPFZ",
  "key24": "DwLoSAdoeQ1T3RHbmFEsHJ75NRBz9FBNqJ8iiu95m8rn9JhaH7P5YQipQu69jXhCu3vJshT4B5zdwjceUHV5rdG",
  "key25": "zGoYi45dzh2tET6DctDJd6C4H9oP5TMWGjrJw2nG2sM8D5yRFqV3QWrnxyxEPT8K8xBkVhQRCjYKvtHboaVVumv",
  "key26": "Ccb5rMd8M7EXHYWWwX7SbdGbVQrkwEQtC2a6FBvBfBx4mzgkZm8eWcYFeYq6qL75LBPFZjAWv9kDCut8xSFaS8b",
  "key27": "4qwft4hBxQFYfhSxoJWTSQHqzXc8un4km7FmWPX46MoCH6PvgkCfVSxiK1FVUgXrRwJX9iGerJQmudFFHDvLNvtg",
  "key28": "JMGkneAecg6DUWoHh414Z3bJKq9G9ZW1qd12nbhELetN5j4ZR1i9VjgaycBi7ZxKx78y2ERzWMaVHdfEV7Q4fHV",
  "key29": "4eTHLvVBk1LWTTyrhevgv3W8FvpEhN6Qb5aWbuCHssZ5nTsc5fhr1QaYKNu1rUnVP5dimwWzrqEJBJWFrRZx2nbz",
  "key30": "3z8w9PnKdmXTHbgvyg81LNhHAC5gQsitbm3mKzyN4WQXXrFezijeVaicwMpT7ciex22AGx6WUZceaKwgrZ1UDhG9",
  "key31": "2BjLLW7rGE5kgybAnEYVB8e9VuWCUfdYcHh5cN8RPJF239KcfkDC3PKLmEPb5CdgjC9DefgHYff112tgXWTd6J6n",
  "key32": "5qkQqviZkY8p5GcwiAYoc1gooWKikqGaNrzB4zJzgEo84NpawW1hPvAfvSFL4hPouQEYzukgpKJc1TRPbZ3JuPrg",
  "key33": "2kddPciahNaRjERH3xY3E6v4g1NPJygwCwSpEFJv9Scq8YK7Rrx9HEzgggioKVKj3y81zgUyVYe6n8p1TWGwpouT",
  "key34": "66FGmU7FkcKkAMsY7bM9bT6woELhXDTZt1CYNsgYHPFcSHU3j2c1YhQ8d923wUc3b3XgyJbHTvPGK7MjagFQcNfM",
  "key35": "KbvF8ns2RPQRA3HyEdNW6TTKyD6kE2hpCUE3PhV7v1RrQMCv4bPihZUj54DCyKoy8wPYYRzTPkuwc6yg2EhL7VY",
  "key36": "2ogcuMRuNuv9Yy3YheUMJopBkHERoUwZbCNSsepKhzmdQfKhXdfrijCm8dFcysusENmGVA91fmxNiK5d1FPuJfSA",
  "key37": "yGrzFp4p71TTcNpibTbuCDz4CAvNoKMrNAEA4GJxadMsKCB3GRpjVjMDwH6NoDjSAGFnx3rZkV8MEy9evBsQp5e",
  "key38": "33dRvHAmFnFXn9MudJvzRW8vrnfnah55DT3NfddmDrqihehzhSf3xWZrkCevrwLS6P1SKUHxv6DKP9Y8Jt4y7rw3",
  "key39": "2nfRuNs8mTcYPdv6KEgDtEKagLe1LJYQSjUQtf7N7aL2go671fKS5gTAD6JHjbGvpLhAzxVp4WaY5t5cFtMePbDh"
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

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
    "3HJMo14BGne35Z5d7rQ4HM8Y6V6ceyQcNeDXyy9Q7w2dBohD5hQti5GvYgun78tvtpKgfgvH43S8Ao8Turxf87Yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ro9ZaBXFLiEKzruMn1Ug9sX394fMJDMDvp2f2LcEXM5tGc4xDrCbGSgPfYRMnS7NpXuAusuc57CuvKKgU5vQgyj",
  "key1": "3wKunPGFvSPB7fMhkXEWZ5EpSCoJzHpvLbKkEttBZoVx7hoRZ75JTkdei3CHCyF61x1ob97BejefHquAo8eGQ2UE",
  "key2": "fDdAiLvtMyMGbnvQbJ5zfAfwJ29asPsUWjrEbqQnHeZgk43gXNUaF8HBFe24eyX9BsGR3XgqN1deQ69pa3rWXsP",
  "key3": "3cQjW88MkXnzyhAcfedGsTpBGPKq7juhf3iqYYdcFhjrieQU5wQur7VfG47oGa4krvTYot4oMmy1SAxU21i1ZkTx",
  "key4": "3rDTj9b3sXhbyaEuSctUCcniR4cSqqc84HeV5r6g2FoNMw4iRzzoZbtgjnqNF8FJ8Z3LbYE3taNvk7zmW8k9FkGt",
  "key5": "2nLdcXaa6wsTSiVD4fwUadtKrmcwAYMWKiRKDDAff1i4HZJHw6emAmRj2w3iFfAbR2z9NUq9oMhna273ke3b15u3",
  "key6": "2yno6xna6sahKnxrE9hLg43YSY1hZNoyY6L6qej64wasK5jnCvZXpsL25VKjGVCEWSibFXNYuBxRnMx2wioqs7YT",
  "key7": "5XLeHNFAP6uP2ZmTrjCYTfmjkiQng8JDDdZFjaqUATjvVVBPv7KgedyiRLLegJgsgxSoKEUXWHm9mKFAM552Fau4",
  "key8": "3pyMNxEkvCyx8QeziB7s6EiMwC7jR5jiGzxsaYghr5ur9cLZGPAVBNDUxHzHqtF3i36jaT7G4QHtGnS3Ng2C3QHK",
  "key9": "3heFj2tvbCB3XkTgKJvN4KGHjpk6dWiPmMNt1JxSropUdSPzaYb1h2D3XSU6vizLofoLLXZnsdwBK7aBuWyRdxwG",
  "key10": "P65VJLgDGJ5GevBgYMGzQkfLrNDLsvZvM2y2Rjdi4nm91igZnXRWgxxquEkZQozqWvDXS9SZbbmh8Lc9kWJCEbN",
  "key11": "2ZdGozHFPpB1zF72W81xm7UP24GzFSDx45xja5QLZ6TZVyHPMbJGBS2XV4oJtUEijYSrUFGMUo3gBTHJoHxTPf6p",
  "key12": "4ZktujGFAtf8Rqt4dCrLbqDHfNQJG8A2nNyJ6V3SL9a1MBZ3jYHJui28nKBd1VBGvyybdwjndKBdXPY8W6eW96V3",
  "key13": "3cTamgi4RnNGiQhADc57LJZGH4y2ztiExKQY2hBa8ijAiSVbE8dBnuyCs34MLT7Xq2ZCt1Rm6NaaTFkU9QX1vTtu",
  "key14": "5PUYycUxpq3PafRWokQJnfpcKj6MBvhcv54q5jcYrFfW5cRamxUFhUHbsJnGXmZxZqUC2QAJuhoKEjrqBPbmZQZ1",
  "key15": "9cbaDmiCn12dnwwKMPCTbYHWNMhPUk1tXfBzJqaDN2794AZneVwCz4XY4FkCgotmvZ1YcHh7Fn8Eo3rzT7ny2d3",
  "key16": "KgUZYo2FeiRsevk2cv5weK9doLEGGd7K3hynNGyRTMHgxj52bjErintWg55zaFGnyAXjpStnuXicogSnbCumtRH",
  "key17": "4EQDJN1PWmL8SQNxWgUoJJxRNu7LdPkrbibq8B6Ue9YA9uQbZV3JXsVeHt4fb5axmySLgyvMHhDz1zRwxjsCyYrR",
  "key18": "4kvtmiEXR8asWcFMEVJJ9XgU5k4fYe93u5eSF5bw1uzESfzBLcLEux15JQAtKo7bNDwLgnXi2a111oa5J863JeZ8",
  "key19": "4MLmgGzRfpTnueBf6DeGKQy1BwGCDYTg32xfiH5sR6NQ4ksFxXjkfNhf9fL12qrJ44ZqXeYifXB95pCEBUL6egp9",
  "key20": "Kr6sEx7xYmNSLxBq4HHwgSH3HqZuLccSDv1LXh57z6ebNqtWfYoJr5XGRSfwDqG3Y8HqJqaJMdxo3yGUgcBiUye",
  "key21": "2i1UwbBGQxqxZ56kTcT2gvPP83fTV4qvRwFYTxyJBg9YSGnwWqspN8HLevvwMpoj691af6ZfAMfckaQVrgGa2n4u",
  "key22": "5D4rDSfjm2EpMtShAfwyJZJbJkV57GVKr22a6v8qcZtmYxpAqi8ptLK52DJ1DFGkzuQHsDZCzujcVtKnvrZAdC2f",
  "key23": "58HKayaJ5VggyybQueypT5trqaA4RVo5bk25fVDkeXEdeH4DCPxuyPBqGRmpD8gtN6ZuaHzaC8WGQ9PBqF1p2QsE",
  "key24": "4RiTqu7cqZK5Q6hY62WL1W9ex5sJTRfAQzmKcJNBR2dGG4FuxPqjfc3JyimW8eDj6GYtcqW5ufzpJ2u4v3XH7Ejr",
  "key25": "4TAtbdvR2rXiXg2vejFqsZVYG4Pb4nATp7MTuxf2ixNXzzokNSg9d3db7c2nkb5tgcHYx8FQJQwHzW59vEKGicqP",
  "key26": "3QHcuVifwqPrpYiCDKGQssLsTzpDXBzbx27DjQDFTfmZ4bqPt5yVkMngfEN7k5YVkaSdBE8kcwTD2C4k3S2bWbcP",
  "key27": "1ppEJVcDU9rjFLqPrWHRA4KkK5nf13oQRiZgBnMz8aeKhfkbX1toQBwL8qtnntrDyHzseuPVVLhYwU3JKS5ED9y",
  "key28": "5hxDKAGmhfiYXiB3SBmpoMmP7Vj8zYxCfRkiEXw62bXGYXZzWrPDg6F96VV5o1McSQh8K4wmWZcakz7izMKL73XR",
  "key29": "fkx5WdZEVKhgfMvWd5w7DommkMKQhkojqzCoAnhQE541JFWMWW5nVRPxthDeDeT2rAmGe7n7Bu1i7WBDewmTuqk",
  "key30": "3PaktTRUmrAp2HmbQPLeAzeYJDXXGkXiYSijoJa2ZLKLvGrRNHWd3pAUHhJUqx8uz5CVBiRV8nqbZBt6redUuS7Y",
  "key31": "2CqZ8QUxKvbhC843No1LHgjWr6c4nthKnMKBN9nH9LXNtSxx6EaA5HKZpNoY8JkPKqCXYDDbCwiULj4rxb75Yci6",
  "key32": "32Xf3hxs7n3fSSBYbE4kfTX8TpLyuvYNmfj2z5Q6BkYPK7ows31aUrfXH63FAJjH1GnsdYRyZc89iHS9WehoAd1B",
  "key33": "2UwE7WNmnM1ihtoEHWSYT5T7x5rcGkZVupEXTJeQ1RxuSW7VVKKLm9Zn166zV7xGi5fzHrnvN2c9H46mzKVQU4F7",
  "key34": "5vcu7w5Q552MegFFefhGqVo7hrutqbbQDLCkjmPb6pKvN8CA6zndjVwaYtpJy6TCcBCYw3ghkm4mfNX37kLBm8eU",
  "key35": "5m6boQZ5uAp9nu5FxcjtUhTyL53HWuXHqMSYivCczooSR8s3p5ZryJwdbjn2LJiMhAvVjKKC9J7vLKQGDbtbY9CG",
  "key36": "2P5dswVgYtK5Tvp4dJeXLzJR4xPD8JV7P9hMwkuPii1XhRzwJEiGDJB2CH5C8ULPnUFvRqC8FGYcTa4bzGJgdEFt",
  "key37": "4XQqQ4Zq6PtUzV9dRADg1BMSZxgAB71DeXjfVxs81C3sx7a1ySm6xDav9zxAGj3Ryb1wqj8PS5UmYcXpoh1xuoU2"
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

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
    "2ryKQcACUhUJKa8MfiRREaFj5WyvPmL6Hm2pNdaP28hxRK8XKdfRwgZajkqgpNZpVxypWRGbZHr3haG8REu1jkfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ESENVWRsKPSaDVJuCjRu6wkGtGs4s9CN54oFyDJnqLT5QFvEXcA5LWVhj3BVKd32xpGw4hDNc3bp5SxNyH4aMTn",
  "key1": "25TDZ5HRMpishCWM2NjoDiCGpfULhyq9kTgqNAL9qcJCz1NwESxdfYT94BAPBUeVw58cE7JCNv9WxuULrjkJTvok",
  "key2": "4qYrGhMP2QASt9XAQGr6zKwPb4XBLtjZKHvCejBcMFL5r9KExxEHPZo1dUeGnzraCkBcRviFckSugbTjbynCznEu",
  "key3": "4NfmgqDYormB9pR4oCNHZhKFrPESVuxY7X2CfPKFr82wzrxCSNXw6L7ACE6mvKJ6iPHSjXHTAqqPZNkK9Ydad7dv",
  "key4": "4JNfpw9aJ64i762qns7mgsfvVUrp7sVnQxKvogdarPyjjgymfRR38WF4SQaFyzfihosN93WtRpfSusZwGTtyhqJp",
  "key5": "htc44x54ovq5psNX8raz4HiXg18oXR1TFZstjVMi9exwtdtDTC2t7x4YMuKDXcrLpQnJ4yfWLZKRq9ozQpYJ6tf",
  "key6": "26hHe6T52GpPGma4zD5K6z8xsgKremnX1354hsuYiMRR8ae1i19HLyWU9TSFQTBvJ3deStcxxB3iS9i2i5DeKdH9",
  "key7": "3sSXGFBkYGcc1cg9gbvqbj4P6J4ZnFymbKgY94eQdycmwArzuNx9C9b8Ry2SkwHzjsUkiXHFQ7v9pNo9ckHtFiYF",
  "key8": "3JosorhW9poubhCjZJPjVzSQFSJ1bP5z91Ad6SKbLQwNdCjYFttJbwQ5Qhn35SSMj5QwFvhrLDV6AjGDVgzPQF8M",
  "key9": "4GmRj8WuyqjckhhKrFvbpg2WFtnc57vtn5NwypKPnG7VqQxWucDZ9vEBW2KcMTsedhRiR62wCg9GiYurzuKn4oeS",
  "key10": "2Zq4SeirQgp5YSaT7YhGHFJ9w6fBc1XZLwYxHXktjcKSqRXUNKB767eAh4fBLAHYPKMYiTAxZoDBnCwAHR3eBdf5",
  "key11": "3TyNfYYeSdRP5i2dtVkYdGVTCRSmHp5tystN13P886sEx6Tqw9fEVb3wYHN9obQ1beuHchaVTFwQrcpRJcjC3cR3",
  "key12": "5deH4dGA8jdzmVErAzFMuGoJLWAfU9uSt5RtoY6pbutYjBYVwFW3YFd2yMTnNHk8JwzPyJQihE5x9xFQnek81Cbp",
  "key13": "4vPjktAruLXZ8rPywb5WqjHhQWUCY4qtVJvag4mavBvfcMAppSsn7zviyWKH9iYhHpwp3EWz3RTQrjEoPEUWmi59",
  "key14": "3tBZweuazdiwKD6rfNYMF9uzgs19zePddiMCkv84zuhRbeDBFHrWANZGRVvvgyAqdHqHbfBwjzcom53nUwTa5VTV",
  "key15": "4g2jQWHiZH7S9hoQNT6WVJqDn3MEUJYadBDmdW1XPh3bh8D6eY6rKAH22XUBdV4rynp1nwkNdhmk7ibkJsdAJUW1",
  "key16": "2s1sBBeuvB8cJUSPnvDUXZJ6HnhbN1sTzkiLir7eRvEvXYfYfZivXvQ92eoEqYMsV24Zstc62pAc9jVPh25CEvXh",
  "key17": "YD5dHHzo52edGAA3FcfiENBhC42fhPTbDnNJkuv8GtFQPv2nssYmz2yQUHym22vYqLkG7MEk5FsxbWGJt24NBru",
  "key18": "4FaZmpBJoJnAVJhFToWhNUECFZNjHxbddecd5RsQrQWiJUqBoWkTSpWyULSg2Bq7uYdZngBkeQdzt6f4rQ5JNE5v",
  "key19": "4CDv17539mwDsPjd4ikTpFqeFfM7jXqSn7g3Hu5nFmgxJpVo99GQB1U5Anj56z7Q44SUYHuQ7m7eyv2jasvaciBy",
  "key20": "2JU48hHQZGAq3n4vzgM1y6oFpB2CZXBVNRx7rGw22HvJXjKetfwoHfTpN1mNEBTEbxJeJV3Qs2wH7wWRtdUjpg8D",
  "key21": "3uY1Sz5YeQEtFgkAkb838ZZcZuBPUA1YLAwSW1i6XVA9o3BZmNtvsmPkHRgAXi5t9pkU5NZGq7Qz8eCdr7yoXLu5",
  "key22": "5jYLUXYQEiCojS8HxfYP4baZy9V8vzoyA1azMfcciqZPSC8hG4MsEKk9Eodta46BRmchsvPTuQNTRf6MTJbPQUkK",
  "key23": "4Tc5HB4z6DifWPZNakRznmpQHi3oyFxZxhGhpxcf9jKcbb2ZucHWrR6qSHyHmhpZpeUBWcDxpEAJQw3AJyNx7xAQ",
  "key24": "TKwyxALgpGfTGFExReRx27uvM9GnfY4YF6zRgjM28Nic2Sc5VRtEN2KvMQfnMxkzB13Xp7c3BoGeLLYHBPBdBuV",
  "key25": "5ors9DPf9Bro4QXGoCAPDMSoKwrH9CTRvjbwzXsqdE5au447MwBv2q3Qzq85KJvDgWfsP3PWUUjvvn7yapESpPMP",
  "key26": "5uHnaeYJnhnqRP3E75WcHRNQQHwfBdNQpdVqNRGGVVchXo7EkgZuLkV39itnLpykqWL6ydVQmVx9GC28KAC9EPtZ",
  "key27": "4Wp7LPczPYUfjphuyzHYNWnNkmrhZ8jjV4Ek759E4yDh8kqXuPjqKA1wGxtxPNt1uBjuJ4mibTLJNE6QqbTJGRXf",
  "key28": "66T2L671sCrzHiJhkkw1DEfgVn5b6NyDJ97HcfkcdDPGg1E6JWWjpCeKhDjdFvUXeEwuq3c2GEjYdWYuNHxtAzpt",
  "key29": "38TYHe3LrqnuPdygTMESgymWPHZG5ocn6txohNT3RxJnxZWqycRQZbKUpKvdQvRhhLeSiMmGKw4HxBsviJCJxaX9",
  "key30": "23nkykH4Dn8navgxfkq2uTLeFxj4qwUWBcmqTV2zctD8eBQpRQc7yEACrzr3d5EA4ZRhnneQSGVvTJ8P1UXvAnQK",
  "key31": "3SVmEYExoaYQhWNdGr9KH8Syp2rbNKcm9MPz6dVsYpHiWiuR9nfYtzigpza6UZRoNqHG4L78Kwy2tS9MrQ9U2bEs",
  "key32": "4sNkh6Tqs9RnuuvzQDREkpZTMJny6BRB8k3kdy9qW8ucNPT151wvvVJhFmD8p86yd3FbMr6a1FQ9TGmGmXa9e2HQ",
  "key33": "43k2VBNC1V219RJD52BgAUVa3GrZE7Xu2HpVcdE6wo5xnHNkmuenThW4LHxMmTC6UUjacV8VLs6XKRqEnxVqkPmF",
  "key34": "64UpSAKVh727gPdTDtC2xXxhSWBX7tCuVgJpm1JTL6RSpnHJk6Q6AACnTgqeHx5D22c9RCAbRu2xXvk6o3ercZhs",
  "key35": "2taf1XtVXbCS1kkTBro17vP3ox87LyBi9FkpuX3XdYCHWojQjnaU9KdgC2tTPVoUU7NSQpgSQmNB2hiqgWQztAZr",
  "key36": "2Gk7DEHMLKK9NUSFSmk9pYkLCsKBnirpCPYxXKDTXAbr7b2Yyn3y36PPEsVv5Frzx7Z3t7Dvq2SKBmQ2UUJMVqmQ",
  "key37": "4cwMmTqn8mspmF9DSXA3M5ff1NukSrSufQncBcsmrwftbq43vZRdCimCThzXzYqCoTcLj85ioTEykNX3sSh55TBu",
  "key38": "3RxP4ruE7YjfxmLBf1BNLA1U7fFNQqaK9dEn5fFKCqFKiES6Kh7LJm5oaNmfyqV3QUixyf4czUvryeFbF6HQnJMU"
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

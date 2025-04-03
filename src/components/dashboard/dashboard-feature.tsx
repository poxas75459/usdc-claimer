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
    "4dAmpFgc8Rr9m1UuNYaK7cDcU8oYNY2z9V31DKkdsJpT1mwWhSJG9FJjmJ1qb3ejaLFc55hcCetmcYX1SHRjxKw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ey5ptZPUaHEb3aPrRpi92bKgjBSzzheouudTa74YHyN5hpzyRHywK7XKanqy8ojuviXVeuVpvUUj1KF1Y6nN6Z2",
  "key1": "4LmHbD9seBp4nqb7sJsLhNrVyh7nzto9iKqrh6gU91sFq9RRrd9mJEYt4wBDTBDCimzbtxKfkVyzXJCvHM9EbwPp",
  "key2": "2CyHByJA1hyYVXxPFLvTu8UkJ71xSTAnqEd8imqPeEHHiPJtfwCuxT5W3aMmHw3uNQf9Ypo1nKzE418fM5bmL9AQ",
  "key3": "3pPhcEr2oFqTgeEL5ukcGYbWgJfbeqHr9qVZd4AmekXy9RQBnG91DFoeYNVNHfXt1dQSWc87QRBf9JE2BbKDz81T",
  "key4": "32x3sDEr5gpBaSAU5yxr6jUmww3TfVDmS4h5bKdJNsQu3XCYXBewSf1mfYw2CXdhobeTNcgZE28JaEmthipwM1iR",
  "key5": "3GvBUTCYazF5RQ4p5UZvGDMQcZnuVfS2SpzDkRx62EXqvCCCztaR2qRTMXeUS6HnzpdSuQhyxEGRAzaD747TcRtm",
  "key6": "2yQW5XDtKY7U8Pz3oJEW76MsxHKimBjAWfSB6uohep3VZ1v9rSpXDYZQrX7anvFZG1vK8CM1s2vFegvQbjyozQkG",
  "key7": "4HNP1tQ4mMsxnhvVw4ku75kAUBqTdXVbMU3MUK3y7rLfDRzsYbaASiHYe6Hp8YxPTrqt6jJ9jCZREzNXK3NNVB6W",
  "key8": "2m8xdwCrEiRVB8SECQGFVYkVaT3VFvsKLabivt77rE4U9S4JewYT4xkCUDQXwhqmdE31j2q521TB9KYSZ9VX9ab3",
  "key9": "5CQaj4aHmJd3eqEcmwYazyyXDKp35HRRg9iWUURY27EFJpK5t8ahPCMkFRmBzzTGv8D7egSjNKyUV9FzoYesj3ru",
  "key10": "25gHvBJwqnMKeKSry83RkgzSU6Rn7p5x4mwvV6KguLF1gGRS6cTAh1GyALeEPYNxhVrfap9TG48jet8bqMCprmpd",
  "key11": "dpCg38b85HFWvdbiFW5iPZaCUr8UWvtbvKxXySDAWfiR5hMQZqrazoJVnXFnywupYffzyeHf6AsEggytS3yV9MG",
  "key12": "5JcK1mQgrto6gNZ4iyXmC6qqLrsJXBfQSkUHt1PziuB2MT7JWAh4Z7fsVEVmKqkBrzPyweajm8UUFkvfQJryjEfi",
  "key13": "4qxcPqvArFFnjzpsP8J4iu5LRCJYmUwkXz9SmNbbmBBoow7rFXtSfnxrZe1B3g7kEYQCC1AkPBVYkts6cEUj8WXo",
  "key14": "5bfjgSLtvu1NBthN79FQr6DgXTNm6HzTm1kuhHwgkKX5LLCYemG5Ux3Gn87nQJFvFvN9TbCFg1DKXvDCiiXWQfNk",
  "key15": "LbbWY6WBjF4DN7mKnutnMRBVYUTwZG5LshF5GDcNNWu4Hf8n2JQw2n7UDEpTTkY8jJpDNeVwFQcJSoyTizDchfu",
  "key16": "2ySquHkWvSBmSnbQXmg8HwDceBC9qq19uwPXZNcw5RMRodSZy3UKbtC648fH2uVHzWPgpggvwnxFxqyv4cXMLRLh",
  "key17": "4NYzicFerjRiCoKTSzkYE56BftEtAQDpykQnrefQQ497kWYcpqkXJmvKTYrAw24uPFXaMSRTgC3CAvsjAznS7noK",
  "key18": "LkJd5AjwnmAoepKSe5gymJVjtQK4P7tMyFtV9LrdeBbC3Wqrkgr5EvGE5CbEHfwQjD7dQM6Bay3zRqQDG2wGFL8",
  "key19": "5oMjVYp2VfDXxwtHfPtv5XMps9W56ToJUU5Pf1TJpXHB6Zw52r962T231up4ZdBZaVQdwdsdb2N9dBsoRPvHKjre",
  "key20": "3ybpxNE59ZRWK65VvsmdXLWBeRpLUZHncwfMbr9hiX2WhYUwnBymVmRAj8CQK13bEd2rSeSf9gXBQsQtAj5PBFdQ",
  "key21": "2taGUME6gkYBqqcUbPREu5roe9Ey31qem41nm3HQx5YtBHricweVStSmrj7zcgcSK2xjgHqe9Cc8t23eix9cMqbK",
  "key22": "TPCogZYrtqnxLkghc6ALVsw8yEQJFcWLGyyQcQTo9YVsBGHH5DQhvzCZnHzxGXLfBxTdFxQG2ybs4JYxJwJxN5i",
  "key23": "3UpGKR5qPnNbxjBzGfDybTqroPzHcptCDJyqurdgTr9tNNw6yYqziA2xqR8ei3Y5dQUnfZDq5pzQ45KQXKQPq6YH",
  "key24": "2VXpaaTfWLsECbrU6SYqLngmfcWGyz8wewK79uvzdsCkLivDMMAqsyaNqx2D3d6VJWPZtvezpRLu8jtBWSuvvJPf",
  "key25": "3SyvbZ8bz6sh9D3jB4VbY3eRbao1QDjJhWFn69Tg2qmZ1f4WnUhMW4uhp4w7fDawSegjp96zHfDhRVPBjrW9EvnX",
  "key26": "2ek1GNBQum3DSKmqhVWFAosgt7H3r2hPwE4sYHLYNaaTSmJwGEmqP3S2DkNfKSwZs7QwtkxYRohyjdSLtQYotKMp",
  "key27": "5ruyqL2o1r3aG2xPfoZFVos5hLHjxxtmV8w7wuhadKcerE9jMTDJxCJqftVgz4QLfKiTd4qFvhDnu4h57kKSxT68",
  "key28": "fGykfxd3qEijnYNCuTDW7KPxhqMRWLB567QkKTYcnT5hqL6K64vQdMULuCpoWTrMjLZSX3jzhE7kp1HiECQadhU",
  "key29": "4h6wAR2nCLh1Tx5z3Hfa7XMPzfKG71Nsf7Fkt3AHwkK4TxELvr6PrRbtdnQCBESuPLfFhmmygaCeRWFJvnnCWk7m",
  "key30": "32qtugNSjfFTq3ZDdak8dwVLZGTdJGF1gc7R16iXjRH5nfVGCCuj8KunCZg5N4gNGSDcnuXu9p9Y4McfARERm5UA",
  "key31": "p8gX8op9AMtBZPYz4msdrdTPSE1C8M4nshLESv5C85aN9pXc8shSmViqUxiUBZuLCXswnBakvieKWZgMD3KRpPt",
  "key32": "35iT7NNeqAS9u6a8odtLPwsKpP8DKVnZ5YjPUY6q7GXtmT4kv25shT19diooYAaUoFBEqekJ99AhXy5nk4X9TMWD",
  "key33": "5MuXPCCRoiSSWq7NorEJ9KDEWgXh29JLXhZAwfXMb6udnfnujYkRjCEJg9cHM7Qr5bV9kix7m2KxmN91FUqhZtYn",
  "key34": "4Wa2W7c9rUfxfTicLg2sJLXixtiLgRWswBX684UMhkfS5q3JN7t9uPNvr3GJJAqRjndYMC3mQom2bT6F1EikTwqD",
  "key35": "3hSnnagjp3mCbMqjsEnyQwXw3Wx8L9YH4sNoqnb55DTWCNGeohqjwJGqiS5v5rcnB3ekErfqfqr9P1SQEBT48N6J",
  "key36": "2CLfTLL5TezvdwbpFGtNJZGibPBFmfs9gLTocf6yjem1ABh7tRfzRd2Q1d96bCiGcQbTwUamNtvsohgg2SuX9PkE",
  "key37": "2udZxFtjiH8pEdcnYciwpKn6anPNixqhWTFxjQeHAMYc6sJnPnM8VrfjYyeHFUgvNRJXU4eEp7FQe9vCVnZPXeGK",
  "key38": "ZB8xxoLLDnGVXyiUqj6jHZRNPwtY1kfLkjj2Ju1eemRVB5Brx2az6FHfVdzHvtS8J6QiLckCvqykCzEm6hfT8CE",
  "key39": "ADeqcBVVvDKcwxLZxRV6jrPZhrRqv4C9NXv1RUmHhfZPSxESjXtGTqVGwNgtkiyBreu7EmVvAbUU72suDa3QZhC",
  "key40": "4VXWVC84P7jczwFnYvSznyqMCXkkhUQ9Bz2Tz3AyiDmeLWFj3P8mHPVEeCiFyuQcH58aq31Duvw18ecQK8hmijXZ"
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

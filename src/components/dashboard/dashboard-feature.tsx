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
    "5XULmFGggBK2BCHsEEjjocGZb4TZSn1B3xGai6U5UgR6B8Lz4gtbGfxgbCyosLmVJWVrTP83PzUdxmuz545b87Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WC4f35SijEJZ8hq1vYoSc61tm9tbgBiTGB96SuD2S5U3kkvwbrxTsTvGaaGEPx8oz9AXHLcwqsZoxZToMEDkpWq",
  "key1": "xfE9LmeZBfouJGmWZp3G5K9YzD6mvXjDP2bkxFpUc7VDhd9psFpvFJLEnf1FejHasiTsYUjjNUiRE75oVh2zQXS",
  "key2": "52krnwAWJdEPB1XiNsatJ81p69nGB35XRqJfUEfq5E5mnrXVHKT8wT2cFFR6bf5FV3aUJiHR1i2KCxWPk8cZ6kGn",
  "key3": "i6xcsCzxaKvZNNhke5GKsDMrWPAUuy8wKVN37m5JUnxynRR6KqmiSxMmJKCWqMASuGFpanhptZ4uiJ6xbuD5b52",
  "key4": "5cpsjKvPmAfqykY9eeN7USfBEmwXj9rx5pfq7WA7wYyEJRAKfkUooXfH8o75tAySvpL1vywRm48puQFHk5ZgoL1b",
  "key5": "rDe52uhkpjxi37AwNNrVmvwWXJceyazsnBjvQiTJZAyrYAtmDpQCKQzq1iwQw3Jc4JGRsFXSXBJ9aKkXXodg7WA",
  "key6": "4tS1FyMsz817J8VH5bVoyAoAEH1EhZoqQBipSgX1ABxCTFttcmME2ot1W8X9vvnRBu8ATsdiSMSzUHwyBbw8uJcn",
  "key7": "41zPcAsWdUK6YuGpvJBLs6ZTavsegTP3kMDRnhZ2H84oMkZUr6fXG5v1uppnM2WuvUKB8emcSxGqRrsWN1SqJDmW",
  "key8": "cSFaTaSoxNZZYMmhJHMwtfZyY8Drujjf14xSQDsF3SxpmcZTyYLFKrrGPUCRBfJo2zqpB3UrjbU6E1GPTsRvfh8",
  "key9": "PXVZAeYkfv8P5qQpLhuZi3uVXhCVnmVoKgW6fYHdEMQEmwfYVv5i2YijMpPhkrxbznDhxRvYfvNoHDFc5i5UQkP",
  "key10": "2wPaoJUMwzb93UCuosi3aPPVhW8dLJYYwdZ7sVQBQGKMsqpWVZoaz3L8543Q1A6yLogdt3YTKMg5MLgEWix3QgVr",
  "key11": "5ofaU1WwyoEyeyNY7AUakuj9J3S5TcEVmBjBQvwNVTEXHGUKW5CQCLXyKzwbRPRzAB8fcLxXSvizKYAo3stX7oN8",
  "key12": "3JEb3W4VVPxABEngKAFu7nquK2Fw8khKu6hsuE3zvpjVxWNWTZ9RFkQCZAXWvFAfmS7VmHJHQUy5oiH2zWYmd7B6",
  "key13": "38XY9bFvGNCPBRHqBFrxxVA8wAw7NnUFXQZHGjMihKuhkLF4TSb9VtmAJrHP5iKtEqK5fAhMPLrxTMLoGToYfWKj",
  "key14": "3Z6VcE3W9MEY9MKjbKNF25xjAwFkCZeNW3VKrehPMMU44vXq1rink4bRAMSdQfjJKnZHuX7JvAaPmxpuRLuPvtp1",
  "key15": "ChNQX4RjLcmi9rPjEwZYtiaFn3fBgJXgFUTAXXWU4jUTDDXQy1MF6jaLpHsjDBkeUh1hBqhE9H2UTrXqLQgdWRb",
  "key16": "4kwMKpV9P18KHKJ8rpW2Sh7kLY6NfhnhMFFbR5oRDdGMeJbQjb8k2cdtAQzH4QZVC8g5mLzhuHdtY9teFofxXaUf",
  "key17": "4z3SfKufaMf4ydv79kYqNmvt3QoV8Ctf7osCTWUYz7D9VnJHSuZ38ZdiPqgF4n5CYeDHoiAT2RCENWe1Lc87D1oi",
  "key18": "33C6U3t171rkqQCraCx7se5u6iZjLhFooVDUJE1rNdsLTWLZ7omEYzYzje1HQ56NdZYTbdUJHyNB5ePnnTBw8LHH",
  "key19": "3YcZRGh8cmAKMyUiWe84nYrKgDzWwd2X1UJPqmVqJQKDus8DCj1vydqBTFkczRKGgagGy91hxnJBR4aD7iy3NYw1",
  "key20": "HRV5uECmY2vUAtifkumT4rWmp765KHrtip9N6hvBrgdfHk3kKdvYtDjTyoPnzdSS2eZacgrw6FNv2n1JSL1JNGX",
  "key21": "37YXpP6wcWcbiUaFW2zvoZhh63usLXxcWstR7WmQ4d4mgTxHvVkdXnYPS2BU5FzdkGk4xPtu5RYy4vfKasgoTHmV",
  "key22": "4xua11K3gHLGR5BqzsuL1Zsbp7GZasyrgPRFpfoR3QKQVZTrbuVhWdKhUVFjHN2pXYKNyg5LutqM1FWUCTpNkpeR",
  "key23": "tVKeZ2uXeGBcygDW6e4XLDfzWan4HUqp5mqHRTzuzCosJ5GJWDhY6sGbJHXrCY11xRHcYZptaBwzB6U6VfZHbWM",
  "key24": "4USZaVGY4cAdtyp5f8AMBwGrrmS8mUBuQo9QN6PUqM4oA7h4WuKywq5JhAQ1ip9SUz4RThg1M49J48WRGBuNrM8h",
  "key25": "4wsKvKcC8uCqLwucUYGDamwKctgo13DHSU93XeLHArYp2u6ZTTB7aZB6JLXu1uqNpLHRvBHVBXbPzHmBaduaokHi",
  "key26": "4Wj384Mr7tVuo3mn8r6oDuK1bKNRPjqybqfpum3RtJB5LPdoAiQwCWX74qdHTchkainHbpfozi5MBNHxqYxVzEoc",
  "key27": "4ak2Wg4f9kRwQ3bZvDH5o74oyCrEhq8jLoDPDDk7DLTLNXNqXG5p7r4KDRHv9TM9uhwJK7zwyrbbehtfpfXvWJdc",
  "key28": "54hG9zf6mgUkX3cuk8ZsK8LMqDQjmW7Xz6A85Ek66NWscGv2Hi7EYvi2GA7vGN5Y9xcMNgFKSA5BFQGZqkJMyyTg",
  "key29": "YjYreehiGG3GZx9WEntNEaqsoLuQK1tndBMKsmV5TgMnvAhHYKwN5mvm3y4tp8MwMtFKj4saakuTmstKKaynpkH",
  "key30": "3i3Yb5rtjZ8EpPU67Z8AE9yUd4zUCc7uGT46Vrpcpb1wSJo6ohWDSkDjJpVqjMT67yPhj4VCKjbnLFGKJoHYmsDd",
  "key31": "2aTafiKTRCgwzDxPGzZXzLLr2VrJPtNa4F7LT5G3vzZVwzdyf5k1AWjYZP64gGbpaB8YXYjbm8u4y1jY6U76rzsA",
  "key32": "e7t5fRvMSCvEZ7wAwumonoeQvA4gnyGj6GopoJ5jrs18pJxuMGog1ubgXAmoxnQYu3Mq4WLnsRBS8uHRva5CxsF",
  "key33": "uVNSQe9ySruwNfbKj6jbVp9hQoPr4WdKL9bD5DnHHfutehx4w3kJbaBSpe7X2U9acxA2AaxamZpcFxq645Rdxfm",
  "key34": "5KiKkaVkJFGd52vNFhnniENb3bFbyEW84TxrVhPDkyiM9pafsB6mFNpNBmiLpJVAvFjnTbqsbjNYiZu5JEYkEXzg",
  "key35": "1JCQmDAdDvgQn4aqL4CDRBz2QFmW8dLpd3EMnRuYRn4HAcnjTt3TgEjKSa7A434CZC6EuDK1pLsZRqnMjUuKr7f",
  "key36": "uL4DEAyPtzNM8FEUv8o8NAwFzVCUPy3GtqvXNa3ZMbzAERr5aFLi8CVJkmjidDVxtk8EY8QQr26L6BoiRVoGDYd",
  "key37": "qdKYZVVJxNxdJPEw1s4jL9N3AftyCeajtGqeyhiqw7BDwFgrK86oWKUd29AHTKf2ejwSk1GG2JFjbTjpWNJnYqM",
  "key38": "ZP64GTJszAj4jtAVP2svCZEjXWPzFid22hdTPw5NmSjGMjQURm2iemNWX46GEy8gkgWZYNBU4xjcMsT2YDwvwyH",
  "key39": "asDwNiPFSyAG9mRyqLnyJnrCFWj3UyHM5vr7hoQjNcbHAiF6Bihydbgwmj4VDKTiqhDLnXkkwfJwP6giDdBPoCd",
  "key40": "2BJeNVEgVnwq38Mdz3sFUCYoGAE1TkjjeCCkqubm4RRCBX7ioYyycBBuMUQduj2gvqbsV7minDC1nbdxdkYeMYCt",
  "key41": "3NRDUeVifqRYVPT7yhTDudNKLjkZk25j6KL7ZV2M1v4JE8Lyk1YgKD3U31KqKrEa9PVi8cp4yhdtkMKRuuLnhjTK",
  "key42": "3g7q9EnZAdEH7kQy87v6t2UfiDxMeSVXuHPuy67csSj7BYwue2VLrbit9UzYM9x9cLwLc2SEVPKSaajAYTGbMnpN",
  "key43": "4spBpkqB7YJFBmbhxu8RUWWFu2qFFN92BA1Lc5Zs5G7sK37rMadHHFfjDgJNdeMx43HCScW2obKGe1s9vCfUpauZ",
  "key44": "222Ah9pJBCWCugXXmajAUVLCu5rdn1bmouqYUdNrHVmeZxJ6myzhankTtzwdYvi57pXMKyZCkMJ6vo1sGdpogUVi",
  "key45": "5okXjQSzuGgtvFhb1iPts1ADPNfsE1T8DUm99qykURPQsifR1MQU2cgD4vrjzoNqhbYAW9kyMS2xNKZ7KK2S9tdz"
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

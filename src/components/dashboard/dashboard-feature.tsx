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
    "4Aiz4yiWNyT7xPXW4T9u5DduG2TrZxTV3XS7bbiThjp4X5Pp6oATL1uMmcwWN219RpBvhU9CMVRRRebYJzKTBdjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohX5a5j8Dy1fcXWFhCsVrXHhaAUhtS5HVjeUN2kHrSd8W1xh5DE5uncPsoZ6AAdcHUqgEApCyUw9SZXGBiGMGZH",
  "key1": "2KPVJMyjXpbk7CTXZ7ffz2vN4JY2fMJtW5LDJ18ChLR5Jh3RUxn6jGyT1KEii3zh154PUhcYFfRtNp5ii2sZQr8U",
  "key2": "3JeFTMoyeWegQMcFvBZULqbhG5Tg2XEkN1v1AYzAhZd4jYVun7W7nChDF6WGGRWEmAf7XsNRP4tQPHaSCgZ9mpmu",
  "key3": "3FPHj64dcdqgJGgfvjQLsM89jW8aaj2qHnf1APNPZx9S5FYivpwyX6mXk7jL9Gc8P7TS9nk2LYKe78BYdtPkZNpv",
  "key4": "2JFGjcZq1qjXvwGh6e3RAYWKWivZoP1LT9AbfVgfdfw2A78u2LJY6t9XDdt5PbxrCcbsu7hvVazEtaTY237eaKjv",
  "key5": "4inkU7HeCiDsa1oYFE1fJrZG2H3yq4RLiXfgYXZYQWcjxGjoeEWmjuKWjaUg5A3L3mTguHFzUmLPP8Kp885cGQEo",
  "key6": "BeKYxD6czjUjMxLfs1HrzARzS5tM7VS4iYu8QpQoLLjeKo1ufuWgqsx9wcxW1wfG6sk3sTtNzRzH4g5RjtqXtqi",
  "key7": "bbsj63rXkQRL4NdDs7vngdBczWoZu6TJKrQvhEJtTz2ftgLn6XCSaLYrE5jdgP39Ezftx3KPq8uJb8mMDJKAshD",
  "key8": "5g94z9er4WFcg56mLNL2zMxqhP4W6MAhXEXFVnbB6si8T1JvyBWxTAh5Q1YSg8CocXasVgzu5jSGhau1ocb323A8",
  "key9": "TFYChLHcamu4m2HqrztetFEwhak7TXSs2DCMB3c6SZssLdK5ub3GVFpzqsNdxEXfWf7vngXcfa8AxwU5XbfYQ6B",
  "key10": "4ej3fsFDXpejZb6kh79s2LmXwWZaRtvnpSnqkB6cQqcPMEAPHb6guf165MzttbZKaY3KMy747phSAqCstEi6m9aV",
  "key11": "59sbzetrkQNvqXZwTUftpB9575wZok3LYqYBLbDdoxZG8vLefCD6qPWhKBTADY9DR2zDJ7Zg9S2A65KxikeHPgoi",
  "key12": "65fnWuTUfYU54TsytGQZMwvGaNcAzP4wybPkWuym1WSX6DqjSorvPreTJN4woLjjajLFYNxA8d9vsYkwLXAEJSXC",
  "key13": "4oA3hBVJXsQZHV6kbwzCA5VNBF9PJ1FeE76ubE6PKeX74psDaaxeCjWArQGve9n3hBDxq3v4wfVmKq4Y3FPMVFep",
  "key14": "3PsFoabAsgvpQjTRhzY8v6aof4HEVkkEAKLYE5DdGg4AjKhcLNDcwLCaoB526nAwFWjk8rFfwHqz7NFV5WkTcikH",
  "key15": "3oj7DRXMgTAqXbtJE9Ch53bLL8ZYwrryCyvfAaFEVJY5Rx868AwsnzrUkBy7mY31ftxEkP6Hx5gMMUoWQaZV8PS5",
  "key16": "2JqbppogSvPho7bJX8aduX36tqPnmektJLkfo1rFsrgWycsmxPEYYtRtdaR3DTFdXBNqH2ugzARYymadkuCMPxZd",
  "key17": "4szkUaghPC17NQGrpvfFoSvwZAPz4KwbBTDbQ2g9cLarrDax7hcgDWQWU2p17KJShxVU7wrUGBwZrdcX69jKKstV",
  "key18": "1JQLQ2zc6Xi28Db1GUTnKfGGUKrokuUD3ZWJRPcvdbaPQD8CyTgQ7aWHUaG2tNpd9Rqt96SeiSfBNNFLVAFD3Xh",
  "key19": "3jkNMkAJYRkRdTc9Tto3i31FGSXiqWVJPeSjAYKmJd9topWCEhR81mD58VVYgQDM3XfXYZXsi9VQAeuhmJCuzodp",
  "key20": "66g6Ab9AM61VEHj9e26kGH6nTSxpMyXuDSZtm8wmaioT6rgUJhrD2TcF5BFecq1wBDtMTxSSiruFjxqNGe5dcFxV",
  "key21": "4gHxG54xiNWLUiri58Y8TDA2Z6QBL7Y97CHgAsQPJ8wUwanGdyt5wbbRuseCRXsaWtUMeuWitHDRNTkhxYRrfctV",
  "key22": "4RDE9nATXZ3PXoGKDbP9DMQwpua32XWVfVZLRqDZRcMm4xEPtsKehMfEZJRbadQGXxSR8Rc1zxAZ6ipu1G5gXSg4",
  "key23": "xBkztQP1VEAewVb3owRQprmqysaBixxbWpdS5P95biRT9meE4YibMBy1yfYxHsB4uZkP25pax6ksSu7nktaoLTF",
  "key24": "35kwzoYTiJ8dbGvzFnWmantyqaDQBW8bzKfAfn2Ub9V3zhvdeLk2Ssjg4vgr3x1VmDaGKMAmzyeRZLj4ENHFphgZ",
  "key25": "5sgtrAmHcjzTs3EPdrJ2UZZriySWPnj5TL8y37nvLwisoegQhsLgXditY8goeQUNYAUgRkqLzR2GZALnExW7fY4T",
  "key26": "37cYP9AXyiabV5wdrJxupYUQbpRGoLAahBMpXsTNLCcfweoc8R4zuz6yECq4o3caeRrEAXzaHiUPkwBChhWtGubg",
  "key27": "TiPo48e7o6dNEZi3HRERzdYRmMjWcn8sjYb4w1GmLNCPHUiVjnqbME7K16mTPA3HNUbYnvk1xjsafCusDeToxbd",
  "key28": "47nEHqzkJyAGtvoAcvS9GVJjaQUJqY9szswYnEn7uTfxLWPxZToto8sCfXygQhEFeerP9xMgfb8GxYsNpyT9R8zp",
  "key29": "2gfkeGpwqmtXKHTefNxsWxaNemMdjSdP55dvZhpsX1G4K1ffBy8QZ26YNgQq5CXEmTi7dDPrFmJVudvNUZv65e6",
  "key30": "tzLUuZa9Q6JkPSpgQJ4eaTn99E85qqoGsKqA2KxEwEa5YYswbgRpiQBgAykCpPZGPWfiPMXpbPBmYHPq2XPhJNm",
  "key31": "2oUtUdaLS74KsyHhgDm7TbkUeF7AP5hRfHWfwdwP8Mrm2bnzKfCAVPougkX44oo9F2R4czPU3Ka1V44Z5r1VJ28q",
  "key32": "24vf23Y3ku8DHq3qHSp7KtvbKD2GyS57pZgtMWWX1d2e8g32CVkw9eyv4roCWiJmqRmntNVsZbS2mxuqjaF4GJ6j",
  "key33": "2YsLtAoP3PU91VZ6BwrtUPEdzmcpEj3LhaaKMa3ZMaDBXXkqJ64C9BH87yZn7DcoscGNeMde5dq7QcNt9L9z29Qb",
  "key34": "4eFbgqC6iXvp3uzRLCCqcfBmJ7WhQa5nPiFDddEPPZ9QEPRHHWp3msciJMBP8LkWW9Jr4mehWHcM3b9paxF6UCZd",
  "key35": "26Bp9ffZwT2wQ9xFnmhaqbPdAAjLUHUhUZcspdmsCXNSyeg3DXnSDVqbKjTfadabsVz6Ye7xCqAEAnbu3Yzg3Nrv",
  "key36": "2PD8F3XvbmkmdsjF7wfkshx2jZyoNv5LLPcZSNM9SgnHURixYfhFF1V2dHEH5eHVcx9FgG3D2YH6auh28RW6Wb6R",
  "key37": "65UbbsnsGud6s28ymmqyyHh7UwovzXjvKULLzcNo7ojSnX2C9wzCWX27PD15YQ8pxYWbFJi1nzkF4H9DubCRC2mG",
  "key38": "2yc79rsQTDvX92XrpxafE4rxs8MAAE13uYt5vpt8PszyL2hBXhYDyWmF6FcPosYkC934XWQ8uwzp5ayoX8oZuWcy",
  "key39": "4gjjZ2Rpd5gzGohjNPT4U5N2uw2YXKZaR8ffcrkK46rguFTU2C14d5LcVq4iZLYcNnDKocbUi7pgt16ybijhhS72",
  "key40": "4xi2A6VpQSdzYahD2pSMNXnnEjcSDrNhpqgcmvnSwNKWuso1x2D2XdVGenHBWCxmb4Mk9ULhTVbAjNbLGW3Jzd4i",
  "key41": "iWzsuDfViVH1b5mqMNPoPngiKursdC5SyoEh8Q19KkRjho4Ua9uPuv97dJqjXYvUStUAJ6jZhcQ8fmGEqZoHZnm",
  "key42": "2JUBvgjPkCwQHU2zgGMR28B4fah3U2ENVJHemJVM6YkESCbqazJHZA1QPtmBzJXQsjT2qaa249E96MCfKY3Q8TVs",
  "key43": "qRrLsrTuwgvcWoWUB4y2kzw9PwNFsbEvM5sh8Y1zHjNkVwccE2Gj7rJLwaYTPut5nQzNPX2qaeWrDkKBdXHuPyL",
  "key44": "4hRYNPeP5FKnduwAx5queTH4hbS9vFv2kPfuVxFbyvPdvgeF3P5i2s8kh2bTURJzj9ChogWnYLgMwSeQq5RxSAvb"
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

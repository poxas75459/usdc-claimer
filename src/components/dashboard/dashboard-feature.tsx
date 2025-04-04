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
    "59tRutnDJoWFKoMUgYSx3oMSqVzD8nj9stKJecpGDvoSpUQ1FtXy6YYgiD79frx6XqyjeodAX2xBYXGpuxuBzwm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nnairpEg953BCMABEVEoYBwWfe6nhF4jvHMkxwMtLNxeB7srB4nmfzcHereZVHZBewKFadzA9iWLGPG4qtvbWN",
  "key1": "2g7eNa1gBEwjKrPcFYS6V4p514bHCZHxG7c2SSMthR5vTMCGh4M8hKwNzF67feHdn6AkRasstq5J8ZMdXhF6Ewa9",
  "key2": "2ENmmEmm9JaZD6qPyvEZFB4hsCP8pWn9eqg28ZZp4otkxzDFDYrNJtGY5hQcRgUGzbU12NzCuzobQc15iq7P5xij",
  "key3": "MQymXkZUyiS6DsDghvcjjHgfBHZn9uQeKddj9sdEGBZrmpvK1CukFbTZWn8hwG3qkZ4x87e3UYKLTZ99xRQpLDt",
  "key4": "3zvQwAf3VkWTE9c3diiYYpzwLdPvhijPsrYm1pQyk1eLKvUpZ3Z5zb9PSaNewDKBjyiAZ7QXfdEoQDL1Eio7C8i6",
  "key5": "5wus4fPjxuDQ9XHUsaiAEKs1YjG24VXzgfQzfi6D3PLAEso2SJ2xCUF9covnrvYnbQkkXpeYLajGwh6ej5jGjMSo",
  "key6": "5QktgBxfEtpoLsJe11Kd3S2wNjJ5WX74WJVuGsyc59uoLG9JkBvWcSPbvFQE8JwCBE931FF6FTUedY7V3VQjLZsN",
  "key7": "4kkzyCv4gN5AdCfTtmXNDUvtUmzzZDjgQXuu9bEuEYRA11ai847cYXGngyqdWqJF6JQS3DuBrveceijRi49GgjCK",
  "key8": "2tCrNKnctmkSgjrsGvLUyQTk63EnTftZ4pPwjMKNTbsXhvC1aBbmqxNgr8eZkHZKPkXFX1YuAVhXegs8USDSEp6u",
  "key9": "36GK7G33WLEtP2H89sTHYdLnn2PR9jnQJesQBM3ZL76yi9ax7zvFoFX3WwvqR9tP2cctUdeuioDm9HK7rDuKJG6d",
  "key10": "4aPnoSt8KBERas8KsmgMDb1Kh3ey5Yv5BRkfYeDvPa1ghA8rWppW8DkPKdgoXw3k8BtCM3iKKkYwXWhnqcH37VFR",
  "key11": "3WeFFRoTZnFc1bzDMFCbCT9Ko8ZgPqBm1osATJNwbqLbgHpt7xk4JfTfF8BbEVCVaWx3aa6Rv6vQv8iUEDitvgdd",
  "key12": "5bktCVvK2rqyEp2ccKXZRcuZFJKjQx2xm89KahMBJSozRq9PQWp4bWFFDwCVk1z1CqJL6gFDait2ssES4awkVvTz",
  "key13": "2yw7LMHNGgguLDsSBye6MNT7XTe3zBMHPPNZe7BVtehcc41ToMjgaYzBB4RjjsXKQ9QG48wzrHSqHzNBNA4GxpbU",
  "key14": "3ef1F5ShoDKgpGSJKU7CTaBQHJ7kM42gd3AQfRCdyieKLqTvaMKjLytS4mdr9YAEX4xs7ZvYGdqXLS1SWn89fjmt",
  "key15": "2Xk51RpyBhrmVYueNi5xSaNuvu9NecLX1AoUvZzDvkYKRXR7QV7uw6nLjgFypu2N2K7RAWU7XhKuzMCqLnvNvBk8",
  "key16": "3UM4s29TgSNCHikvXRriwxEQWMyBpXVpsHLYqysmcrxFEjnbZSPPxhF2EoUktZH9QRG3SngjYxL3DQhfEU5Bfq26",
  "key17": "28Ehc3MQUkqHqzZkMPBSG8bCPaPQGrjaKZiEmEsD3YQZiJMQTMXdzNdNz73WcfxCgDpDg8Yqo8BQk6DBrJr7R8Rh",
  "key18": "37gHykRebHUxBxMqHYoFx2PN5y9yDHNK7mQsAXjUr5VjLKfapnoFmKxu1SoS6K7jgSwt5LuPNNgztCcPvYxwnYZU",
  "key19": "3rNwNkwmG6n4hof26n7t4YNKaNn8rxD7eweKvWnN6s3mBw9qjLuYEaEcp2djd9ZRSrpWJ4qPNHD43fqaxLGzPe65",
  "key20": "4PRJAXP6D7G56NcJf69oQfHT9VqPP4o6yMkm12jwpijFQw33zC2dzkiAKE2aZTnEpSKA5QWy1Lu2qErdpztAJVqA",
  "key21": "2Re84GoBDJhmnyPTCfDHp7aoSz2FC4buonAUk7zpwnbqJxrnEe4KGV3vNufmaf2iqzPugoo37TvrjFM8ri3Fuv4v",
  "key22": "2N4aAb2SoJo4bETXrPo1QGStqSKpZpoQKGk2CrWKHcwJkNBpWSxfdKjnpgWFqkWaU82d5GoFqnBdBKLVUPbEoMhj",
  "key23": "3Q5YhsBSymXFZDro7ZqALzqy7tzpgJjJvV7LBUCQoGKgz18k2qCKYRp5E4dALWhoJQ6EfMrxH4Ky2on1ddijq1VE",
  "key24": "2hjVHXq7rfctrSB1Q1bHvqihKgvWawWem4WhMtru6C9pc72CaeWux43W7fta5zUk32jao5pZt2fsSR2GpjN7Tqi8",
  "key25": "85o6S72ULX2KY1DVhqVwc4pVLhnv8CHMawcS8zv7BCLLFdp7exsYXnto6FAYawibF1y6Shcb3vodZCkMXgSP72B",
  "key26": "TE1bf4dSJ9PkmM6rxisVFt5htbtSXT2LSX7K3ouCYLENxjJoT9PoAiz4CeoQwTro9RvHeTL8hy1HmZZStYbo4W6",
  "key27": "3Nfx8TAp2iE1rHhT7YHaNGR2546NN86f1t7HSj88d5hv3F2cyDnhNLL62VW2VBxa6cQkeSgfANvm5CJW54uVJVGZ",
  "key28": "2ty5r5e6ryjQJ4LejPyneWbhc6kuNkws15LGDA3ParGe4URH5keXsUu5axwFgvPY9yvy4iAAp6Ekyxg6dNN77cAB",
  "key29": "4zbEubQbN5iVj3TsN2Cqt7cJpi86htUqnNEJygYbi67F6dQm6G9AYJARrUuzyHgAfCZ2cXJmJgnujTW6zjoGz98r",
  "key30": "4ZzN7MoQuVY8F27hMkEkDJcmgqmjhytxQTSZpj82hrGRrxJUGcQfc9rVT7QcmvpVJKuCdR4vcchJbyG8DpJqpFXE"
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

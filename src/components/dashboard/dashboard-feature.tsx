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
    "3hf8AU6mq5GfQdEdZrnEC3SKmUkURmR51d2ZEwVdUKTgSVkJG4qoyRAaFB2Ds38CtyKQsCDyk1NRDdD6cF6kz3fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TnQHUx14M3qYjuSUGQQyzt8w1gDKikZ2yLerRjipASVpx4UuQqbUJo3a2Xm7ddKRmST7NRo22UVD7wmxPsbnzZ9",
  "key1": "4ZWbzYbXd4w7dNZBZJHaxqwRYJEPvhqG3iSa7to9avPtwg5Brsmgt47BqEj2recJ2qmVRnPxC9okFQ6cNrEegejX",
  "key2": "5azm37xRQtqD7M3j1L99k6DexzzP8JK9Qq1q4JSbSCpii7cuj44Rm1DFioiRU69MWHYqk54davDxHVtDr3HC77SZ",
  "key3": "2sGkrp2xeq2vP3XjnEEp7S4ybBazRci8BahJxeVzZYBhLKjdTYMZigXGz2aizhK1psTSwfWrv1Zp8HMr7onjbGYJ",
  "key4": "3AoryS3oc9T2Q7ykL5rXVUCdLjE8yLcZNj5Qjv4JfQb8331oCYj3fdGnPiT8P5FptzP8ziq2YpxWa5pVx6Np9Nnn",
  "key5": "2XxuUGKjrrj1aA3n6RjdCTP8yrRZ2MuPcKMGhtKSBzXpo1xQNc3jWXFQwoApssW7xfT5V2QHBs7WuAg7xVEwceqg",
  "key6": "3n8o8mykVMUZPR3RkdVLr4mVahLfyBHs8wnUjL8f3mjuybGrrk6ySEUeHXvX2Zuu7s9iMLJhDrQc3tjpU8ief4Gw",
  "key7": "M1A7pzYE33nBCpn9BvwEosQtiEei5zCRZmLZJtiZdXUGehe5FoDKSgS4k1tNwsL5yTu5tPdCJDUD2133oAVUy85",
  "key8": "24z9tTWC7SEVeLpCv5JFETMEHsugUt3Qj14fQKWf6pp5ERMLhmtuAnBYJMb3XHf4ric5woDyJuwcvWgqKCjLfFs2",
  "key9": "61AQq6RQaV39eQRkQQKjnvVmUaAybPHJgCzPUniu8cn9agifXnL1TJHVHfsqT32jK9eiCY4noQmwez58aEupZxDk",
  "key10": "583VrGyx33NAigbQMkNPdMPatankQMdWsBgnNcghd7qXEdGsJWtxc7a5CaeJ6gst1SxCApJ9CfxMRCQrYo2wvgoY",
  "key11": "4rYrEsawB6AH82mNZU2k9xjmZYnW61N3z5ZuW21fbvw86ikSjvJNiibWqLZHqd5F3VkNZbTgRwAuRJj7Gj2g7KDv",
  "key12": "4mJNg1SQjCrMSAGz1PhK26ED2bDx4a6nwRNHxGdwSCHmoCE1JScZnvr4MhdpGusG7ynTFmgqSqyKJrRuy7WvX1VD",
  "key13": "4YjKT6h4ZJTBAUfWAT2c5HnhR9an5HXHqDmopkvrM2wUng2BJ9wNDYeJ1io9hnZzzakEfbGhhWXj5RNJi6nuQUfb",
  "key14": "87BXhocEMRRjFmgZkbnbswgNhTfEVMvbiWymgXs8wNajj4VFJZKGf8xkcReMuttSv1bSKxUaNvZWZNS5WQy91fz",
  "key15": "2EmRp8HSPnSAzQdJB6GnNyqGcSHDoHybZKkRpqaMhW1fBTWJWPfeZf4XjQ4ANDobVRithyEsSbiGp8qQ5ew2JuqC",
  "key16": "2Rx1JmiHue6coogv9zrtR4GE3HCU8NS6igcgs74W7Q7X5hfE44NDrRwGwg4iudmAvZH4p8VBdNLRU9VGwV9DSdKC",
  "key17": "3EWVSq3E5hh6XyDv6jR2nKef8cE59n9A1wUJJqa4TyngwUsJHVcCPTtgicMzbmG89mPQwAaUejBcyqfQkYtvoAvQ",
  "key18": "3r2b3Z269SK8B9HFnScPxQqE1EaT7CDK6hSEXSD9d6p3VcMkp6ETXDLdj3fJPaeZHY9RRWz6JoWPPzYPQ6JEceNa",
  "key19": "MAqJn57mTyPsGvE3CooTyPQBgy7UtL6mG8X6LSPFNSReDsjEychu79qLb6TUbgw7az3o2Bt6Ry8L43oYorhHARD",
  "key20": "5xmEeSmJvB3Sr7yodPPh5XoWeSWD9Kht4Po3pimbHg274uBg8br4LiJqrhB1WYyU9yxCDP2ayLDvJ1hch7ZVcg7c",
  "key21": "34ZW2vBvy3Tht7VNfnapeTf7eGpw8epyLSKSPhJt9fMY3611t5n56rjGSyAnPZzpvRazwGgka6HCgkWGv7Bupqv",
  "key22": "4yzqeFHDxMRdRoqEhzXWAKUpvPq1XcfY3B7NjAnEJNqrkuYsiMatjf8j3YQCExf9BxCLard3pG3n4ccdCZUJZfCK",
  "key23": "3pNedn7YRfUkMiBUp83Xzbg1dYzVqxpsiifrwHUpSbyV4w83DYMpFBnsXT54AQabpXRezrZQ97gqJ3ZevHRG7a2y",
  "key24": "5ts5mtQzjgD7p3UHKj3J9iCEdpxFomTfuSRKvkdN1kgsJreb6Ce9GajGiL4ZCPVHNWV7zKQni6zuuLq53Purkz6U",
  "key25": "2cynsBavBDp2e3JbJtfpxRyPgN2wEAbv221yqjSXRxZ8LJigJ7xjw8U75yBQqD5mGf6EEmiEdCn6owa11eETzhtn",
  "key26": "5GzJx3jWCY32MWJuyiMDVSTNsGFpMn7paHb9TsymN6hhSi72LYMq18pG3FkffxB3oqakYP9YpcY3AwZnbDYD412K",
  "key27": "4eLkWzNkpn2YEavz623SNb6cKntvkJRPsSdMquNQuyThm1iqZTpdr6dRo3bHu2os2uTLkHDyVPoWBHJnzvzRQoK9",
  "key28": "2CT3eU9MsinbumD4b6i1HvhBdiar3f3y1jSxc3gsyidZgx8gycVQ9FwjZTenjAqJzrHHXZZQryjZQWQXyqn23Ws5",
  "key29": "5X5emT3ZvppGo7hfdZZsxodoDVjaGeFwwcJogBFx36JNxvrvjvtCvh49aP1MVJGqzJBo3whNRXtmN5svYRjLGBh",
  "key30": "2NRvThTokKpbC2LXjAoCf355K6rAQehyEvZrEBWGYSnSRHTJNtBh9WHPScbnvJ3FC8wUsUN72ZyontFn3Ghoytct",
  "key31": "2Sn8uXdaGznaDjuCNJ84N658xBwTKwm3146NzhHcBawobiZqYcgGvx5iMadM79ww6xoJewHJfkgs5QDr9jCbpvJx",
  "key32": "5NUV4E9tCkAdKegUZ9suAodvkd4vLwgTwdX3Az548AeoeAZ2duZEU9CBm5gZ8Ha43dUo463u9dU8jWtgtHQXtPgG",
  "key33": "5vH92TYdGDYVWFfK4JK5qs8NrtfcxXrwcoBvHp8n38QNJYrnvjHkvXzmVmUDfgw7FnShnPf1kRJEUgsu6NqdAfjt",
  "key34": "4tnoRGLfCj9pMw51eJmd8TQGfeWb5wv6qUgoDTgW1238BE8zSXBDwzQpckaTq3vhc8tnTgfTw4aedGcSVfjGYCoy",
  "key35": "2RKVqtjJSWqEAFAELhxpiFw4xDjhrMRrZUwnHGsjj6Ksb1QsRUSfZUzY1yrtKsqLfQYq7B4p5fCt785ow9JLDWZK"
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

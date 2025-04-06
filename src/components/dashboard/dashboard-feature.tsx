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
    "4Xvmg2AT2dkjTZwmUUFymgyiCP5VJxhJVvKRiH4jeDW2kmbYRVfNZP18nuRNXJ6dEAnYpuX39PAuW5crPQ3HPyUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jaraK8ZxvgBKid6eDjAgJzGezX5zrw68gmrErvQc4d8UL6ggTWu38cnD8TPsKk3K6gPXFBhocoH74BZNKrybB5c",
  "key1": "7T4GhBDXWkDLgDMTue4P9ERgNTW3uREAhqmLPMmaKjzXA7kffxnuB1W79GXeTdvD1aeMMJtEHd2r6N8FJJmKC39",
  "key2": "QDWwHt6uxZrDrmqbyP7GhMQDMxpsugMi8aivpfbBaoU7UuAHhMp8RmVWHrbeY4tsirfC91hmhB8BYoCRagN53b7",
  "key3": "3JwWCiPJqPcE2kokh9QxSdq8mUf7xPfNWsAVxWKwFYqy236xEcW4B2uYgMxpxxZkSbT5B8HwHeLtojB2i41RMSYD",
  "key4": "243ZoUh12WYz2ygC7oonPE7LAXEye6aF16bz73xMZsLb1J1JNCqN6mMJtrX47HxL7mt8dWuSQRXwrKdJpBeGn5yy",
  "key5": "5gLupXnWdFgT9YsrnuBFuPm1tpSCAHSXV4Nkp3bSvw4iu7RmaDabrEiudv9pSkMuoUtfGrvTzxCAuzdeS2jWx2wy",
  "key6": "2xAknZZ9V6rby3voMDX9K35ETK7zv6KzqX7FFvHsGkxx2eh9wximCHvZYx6Lm4yNSkPGSySB4461nSixjYtF1xF",
  "key7": "XgVkzGsgo6mkCCpPZpvXgxzN31Aj7RYgFmWK8kEkcSiGCBn8344L5CvSqqUHhEmr8NzisZv1HszxrA7SGyRAeQf",
  "key8": "2KRHYKpC2qkAMrGdfpCq4tfCQG65scX6Wo3LSkS388AbU4e5nK7ndTbYzTKQVue3mSCjGY1m5P8J3dNbJKr19dfm",
  "key9": "2FqjBdts5ousM4ibjiK6GjASsQFpoQbAZifDNfB5zbxx7pzQk6PN4SgK83FN4o7ANEuDgSq1ypjNiTEZynCEozbd",
  "key10": "4ZbEMdPnvUmEkP3AMgDJckp8Lej4dEdHcBuAR8JWMM1YKmUP6BnP8XqhaQFZoshqUFaRqegMt77quWMCgqXCunSr",
  "key11": "63kM7NW7RhTD5U8xYcP5tH76nRR2xx3sLyD5ko9L7GANYMqGeu7fdSU638HGnBJ6rXW4uLcxSRzSWae9wJGRusL",
  "key12": "49Dunai3D3VNQBxaoz4JY9kwk4Nmy63j9k5bMQMwEeMiibeFbjEBLx6xcLqombwz7Ymf4DCc1VJfVLr3VMDrVts1",
  "key13": "5dSsHfscpSnBHEb6DyBoYzTrz7RbRHPc7BQLD6SVA2RewRQ7YjSE5xzyNtZcxNRGDGgzAsxn1FcK7eWeSvMp3QhK",
  "key14": "3bDn9rWCa3S5ppQjqrvvuuSF8MNHxb7yWXGzAovhxJTjL9ieJhsdXoNcHU8kjGd1EmCijBqZSYvzn6JUq8S3vepp",
  "key15": "5iDiZV53jnBV5AHNEU2Fcnjp2uuDtn9ypRn6nspMu1KwT7Mr1jyAYMYrSYbf9taAuLKvWyjauH3y25BBYHfT3RuX",
  "key16": "3MAPUbMmKCiypPQYrYchXeEX42HRQzUhdPzcLL25fUeAx4GwEDJvtywRsEac75HbV5PYBsjyGHHPcwZrUnS5V61Y",
  "key17": "4wVYWFsNMMQ2GGmSYUk44qbAWykt9nVjCs4izuL86FAwM3EhtHbwZ4HSbZuy3AfdYdyTL2erpf9B1adD4QYJujwv",
  "key18": "3Uc1YWDA3tTgeStpfbiQFpuUMkz7ZRJVUTS7UuqvezCZd3B7V4CiKwFL8CRt4WTBxStND2pgvakK9t9ajmeutS2j",
  "key19": "4Jrd5RNbSFk4n1fXXuemxu9fjXex2rGYNoDbTDSqkr3hbUQvrwG4uddSKoNFgssXvMDNYqE2W2HopJahiXaLnRsF",
  "key20": "5SwyLcMepUeMeLm97rk8cYX5mo9Qazau78jPTKjgRpNvcApztKTotK3UuYgH3rUkVkfBDyn8BYFTaZerptYPiK1P",
  "key21": "4isbS9ndgXDPEgyQWeZaPor5bc1nG5jH5zryNZTdai1V78CiaFBP9gTycmVwAM74EUzjG8BuES7uXmFXSS7PMMva",
  "key22": "JyE61GaBM9NcDMzrboQhbDQXC7JvdcYkgyNVWhkV3i8yFUf6Xxq7Jxg896pbMn4LvQ4snrwJoyfeg9wFJbCYSpS",
  "key23": "hVWtR4upohtLydh6Sm5Q6kyiEEjvtdBTVy9rfugTKHFgp1NS2LmmaDMuN2TA2nofRL8i9sytkuKNdshcMSqHveM",
  "key24": "5TMRtvSv9hvsaV7oD8mjFqYwZFiF7HhS8cLiaskufzZ64LTfqje3kCSAEXerDfdbckoqPcwMEwhfKzzAiazgk75k"
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

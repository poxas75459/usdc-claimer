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
    "5ijgQSTrXk5ByPHG27FEhmYkBiVwkrZK4qAw1CqbQNn1JBMpedSLQUdm23mRWSYrC46cxkTKi9uyS9gye4vmfEfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwbpR38zowmVKMzS2YtsXK7DHCuvRVqTpVRjt9PJmw4eJMKNHuWEVhLrvnBhAQXm9dQYSDtgb5hh6W69rMTJ25E",
  "key1": "ykmUN2o2AQ8Z9bWSQcWgj6sK5njYEH2GCTuNvZXbMPbvjhF99PNkE7H7MiwHmbZMBm1AKo69JH89txrHRyiUF6Z",
  "key2": "5awt9bhZVf4nRNnTF6LngSDRW1usJ42JAKE2tUdR4Lq26SzHDXMLa7k8bWozJ4pNeg69PvnPcFwsyopqu7NkPrcz",
  "key3": "2q9F2M8HuvGQV4tjV8Qk3a51njP7VjPTetKWvPE2SvLvNaBp72spVQDY6D7PNPDtmcqU6sK24jN1cpBzrq1Yi9wh",
  "key4": "67X9QGux5sTCGQH4gA18vC9od4z7CKYfAM2iEG483gJ24eq489tKH8R6DVDSShpf2umfB7ZQ9PAfBhaYXvxf5hYd",
  "key5": "4TuLor91GQVCv6B9KUT5uNkmTSCyVWfafB8ZL65xdijUahotwFZw9t5v1KT3S8dTNFfMjNZFsGiRSgRoan7k5qFq",
  "key6": "2fS8GWZGDNU8mgBohYvW61xoV6DzjA4niZrmoiPCD1iurVjVB7EHiczW8WPoskext8j8352wNzixKAvhiY8Qg4bf",
  "key7": "2AJMCF4EwAxwTsA4hFj8oY6N4jhdbH33yFGXATby4kYhCsPcGtEyQ5gWxg8Nsj1eGHtgNNHv8TdoMAxAGYztFBsF",
  "key8": "4ktpfpAwdrCBmvw5KsWzuKcecM2ieg9MUvJLJV2C46kPKHALAXeL3Ep1KwZ3QmwfwWCoYvtZb8nDWiz8fCPeJW1Q",
  "key9": "7HnBujJNmA84tGyCsE5JdYRStxCbt8tP8XjCt2jmb7KDmCwjHGhrv9JP3MMnxbpu4ewiZnYTcEoDa8dHkSgu8zD",
  "key10": "4cPyV2Ggec63Y6SsQqzEt6kotKXyYDngYtP5hJL6WpMYtCrb2rQHAQCv5UiHG4nkGaQxR5bff5UCvSya5FRfgvaA",
  "key11": "2XYJjbC9VCC8huikyGmZWhpEFBxNuZhayqM9pYc65JT4pdGxJ6WjCJ1S2V8ttTuhHun6v5ysYNNLk66Dnx7PkBhZ",
  "key12": "5J8m5BVX76o1VbGKxJikNB73umEMhZ8dsSMhPZqcciEPya2arWULDnj7WiRJk5FGQe5AndzNjmVTG22767Na7VnP",
  "key13": "4M71zSDLTn88Wrk6jsEfVDbsWqE9nD7oGgc3k7dLmF3UXg2Vr3d9Y2ZdnwjjZQvUYiSGfh2gjYjXZ6YMTVSG6EY4",
  "key14": "3rSyttXNeiVUctBik9F9iFFj1w1oS8jMwmbHmgDcGdJHUDwLRZ2KhdmCG6ioEuSYh14gyUycHBAZkn3tYa6Ukk8X",
  "key15": "66JZQURyLpQCzeAdcjMrxmCUaXKp3t638YLY7B9UGP2mV2WPJN84orBFsqcsxzs1SwhhLSQUdUjsEcretkuYxzbx",
  "key16": "29PMBppM1AvmRSzD91yLEKC3RQxdfAntZWgTqkrh5cGht9fCc9GcnRrpL4zUg1Xva6giPkWT8vay9F2jb1nyuggh",
  "key17": "5c2s2a3AWe1FkFx1yYspCyF6rmyc5fD514GpUF67RJggpzki12ikWUViy4FtMkaPgnYvKsSXiLGeynMhtRgtc1v",
  "key18": "jTjFhspuxyhDmVy6t7fBwPfoCAWSJTFXaC1ein34kAatQCU3nk6zaHHNErqHLjf26fciHNRxQ3n6faE9enGvfyj",
  "key19": "Lk8kFwAQGTSCKqFqNjqy1GTseGA6Y4Lf7qsyMLpXFbhEkzPhzKrLKt3mq22GfX5BxpUYHRH2RhK6NUK7539VxWs",
  "key20": "5b7uXxN2xxveJH7kB6LtbCcH93eW6jH7a9jukZgSeZGxn68LfgwWoVxTEQQxtSpUvhaemtLyQw7KFDCzetFhrqKb",
  "key21": "dPpGaxRGV2cFKPovhrdPwF8qyLFG3TBcNeHSA716ks756KgQJX9zcVe86SVK1yb13aFbiE1aqR9vBDg3mucpDLw",
  "key22": "5JxQeWkBNs5K2XsDhDeJEwfw4y5qwuYXY7YG1xprF314mcU6Zo5NhT5S11H97CCU7RjaSyqP4vsciQ2xrttjqp6s",
  "key23": "34EzgRgqZF31XwMabK16ML5GUNP4cnn5JwWUDNfYP6bo4vfvu7bnGP31PKufiRaCqStWExtioNdsSnYVekKTSzzZ",
  "key24": "4E8y6Rdvtg1MhqJCEREhp6ma8cJqWijeLirjrYW9v5nPbRn84JGNJoSPuJaKwv1Bav9oQq7PsoLURGLcRdrrfxU1",
  "key25": "4Gyp8s23mbZsgFsPJgsEnBSG1eLS4gkuUjByFWKvdyVKMB3nL6WmL6rfGnBGTQzpgTAQXp6Yu9R3U8MCowgw7R1Y",
  "key26": "s5y4N1i2LTYED7DhQv6T47RJPA3RDRt6asC5DT9U7nKe2GBVn2GsMcZD5MBM4U3cYerGG7Zttwo7izjFxAUmwMg",
  "key27": "zNXNYcEyzf53o4JyRW1eWgNhCb8PFTUcYQ5uGskfYzwzx9dEAA4fYhFoqygvV3sDVY5bF5WBFR6Je9namvS1aQu",
  "key28": "45c5vfhfbdA9hMCxt1QsEkT6UbZweXUvB6SZHRL4AAud6FqHwH7FqmAyAbH1RXFMsh5SQyLpMQRFCzEz3d2umD84",
  "key29": "4i3WNYYZShNvFNxwC1mhu6mQ5UbQ4H423nACLCw5xKLTCtDBjfWfe8Rgqq16o175qXSY5eKhaePo9KNsertsLnk5",
  "key30": "cgZQve2cMp9SKAL13XVwfCuZEPdKRwF3dsspiNjikGCkgzZmiLXoahQYPghTGXPFQUNmK92kfhZRz8pEBWVwRVt",
  "key31": "5xuKemsbJjjYK3swvNn7ZXZpB14e74DdSjfmGSH1Tu8SHGeyQuvpgsjAGSAK14ysdp4GavY9sqbBPtfDmj1qrmhL",
  "key32": "5aW33uAHjuWwGaWJikWwPQsF8dBXTFtoHeSaHeaXk3EnAhRZbHSK6J9xxLpgMH89huiKnEpLS63mWxdgMMsomSWb",
  "key33": "Bizfx4ErZD6X4iZBCmpCnSJPRkBfzQobJEJ5mM9HYwhUsV2QiBppcmn694YhFE9BttUW7HLTY1k9L6HZfWiQR4K"
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

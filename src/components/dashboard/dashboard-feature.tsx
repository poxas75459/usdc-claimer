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
    "51q2uo2tdNcPCkchaAjXLwCJqeMs3MjnftWjediehJMD3Y71kUSitMiboo1NyeeHyGBdMBfDwB6JbSicgUUp48wJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oVjv4EGq4LJCVcSJqpMJFYbaB7faAtCd4tdhnuHYRd8KAnVQTrRCgqCAyw69yf1vN4cb7thvdd45RVxhFVJApQA",
  "key1": "37VNWfgA9BT75XCaQckDfrHLoL53eY57ZUU5a5mLJhwqMx2RAeYxn2aZzXxDiBjgC9ZQpDjvRtVxZbavGcBPkbnF",
  "key2": "3dXf1Pp8Es7cdy2P9RNKKrU3kycqy2mTMHUFnTrNeZmZ5DYKSpmyEGqf5ugtdshBpgogpMWLVTTsG4Gfv18hep5i",
  "key3": "2dYScPCvLBSbcQeozG4yXZFWUYdW6FE7rEiGgzHYQGCLRxaE9LxQUUPF2qEQP5TsqB4Fs5cfxXDaa5JURnZUFLYk",
  "key4": "AEZPSnnLrGsG7S2appY6SJdAr9oVMvCa67PWWomk6kW7pyjdAV3L6aNsVk783MFH76u5A8LPXWJQ5WgdUL7ZuLp",
  "key5": "2cTAUWUqcvKi7UEDvfWAmQ2R1QW1qntiEvayborTTRfCRsWJKHfqBnbGmSyxU8aYMHS21U1LZLKdpjs11i2t5MFg",
  "key6": "XP7hbDe7ChT7SZttqFa2nM8NEMyLioAMxSxoLy7L1jr6j9JF5hSuo3TQpx5w7X2C5i4mQDKMgbKtiT5zDJjEX71",
  "key7": "5cFsFVESbwtiE8qhABZmKaqXLp5mr7q9zK3xiLzwdo9Bxfu2AwFEBnNDFhrL5dAZYFKWkjt8jL1kar7dskMwif4y",
  "key8": "4iUs7XBsUpq7dPxmcgVirAu2xnsd7jbNa47ELwU9RTtoGQxCjcfUPKhHFX2Ea1S4tGM1Pu4hYYxnwxgm91HWLiLZ",
  "key9": "3C9eHaiQpasm23ko2DUy3ZKFmCkAgjKBsoiGrfa1oSeR31FZTojAr9HTNGeG1QLUMEjeWtgykjmWNpuMTk9B1p5u",
  "key10": "243ocef6ZE9mmLSWNnjWYatLEKJ9SPF7FMKXHn8rUCyd65XdNnire4PXAPaS6D6UQ9e84qVWMcTaVH6WFFrzZMKs",
  "key11": "3a6BqABqPoGpawvyAJRPPpaunT97p5NX42AFerecyjMZ5TCw6vMHgqJtFmYMz6zdantCAciZr4Uv7Y48dUWqct4W",
  "key12": "2SgdHKcb3ZVt5nJsKHc7KSoBf2dyrxjpz88RacZjzk2N9ECNC3oZuXkW2p6R4vYyZkyLVX9K5e2STdweggT8hg9N",
  "key13": "2KBQDMaEZfNwUjDk862bw2ptuX6hzhVvdxCz4awi8boywEADddmcZnchxwnZuVcXdqu8Dhg3w4L3sy2Kktm2aKe",
  "key14": "28sLTZ3GZXbkPrPuVC8rW8ur4eV3bbdeLMHj1HCfw1mCDWkDc5wUz1NQnuCLNDVxBRSSDXahur5ze6eFefp4umvq",
  "key15": "2KNmqZLHar1eFpwitSp3oAyokYoxuhjDFVcEsRaaiTfvYTqbduw6B2DakanQTwcmuDg7mDXsovswr3tX6rfcK5ad",
  "key16": "3LenS4an86275KooGubwgDTr7oadtQvx9yipUQKqvqCmq5t3zeLpqeanr7BE6GeMZwDQAkbZqiSfQurEarPJmyCR",
  "key17": "1Vdu1uRcQGKwRrLBKKhCck4Dp8SThEXPs2cyYaQ7gouzzq5RMdUedCy28Lrd4UNAesTgNMFwSjWJvY2A4g7wNQZ",
  "key18": "D8hEAYYHW568T5FAfLbme5cjNApqhScvUcEh8C8nuP4dy48kQFpC1znGawfxzcRywC2UfXfBjFHzF3t1WLv3b6R",
  "key19": "5knQ6wea37SeL9fB27S9YqDwVJV92PQXvxtWbEYn4BtXyKnUYxts8cP3z8vYJ4s3kCnLva5RfBtLc7HTRus4RwFj",
  "key20": "67XcBZ2MbwARNFHw5hstQ7RiLyDFL5b6xLakx73z7BVxa8VyqhzaTPC3b66FLgUnAyb5gaijmC1TQCgPzErCRmcG",
  "key21": "2KvK63fjyUcWKRS6nVssniBomk655g4b6L5HmQdNx4c7ryzJ3c73BEKMohSRrkCbE6F4oP2a2WKhf4jF5xk2PQea",
  "key22": "39Q9w7wFuuGBcV8qsPpFTwrgmhq7Qi4S86gHuwemyVdb7KEMZyuYWKdsBnbi4DiMSSx7TuheK2dCrZjcHAYxW4Y5",
  "key23": "wbVNgCvyX93odkby3BLEFUyRaYTLK34K5KbFUm24MzHUCG2Qt36ZMJGbghjaF6nxo2D6BRC9wVEHVDCFojNpN7f",
  "key24": "5Gx2fQ8By3DwknMKZ1jZj8Ychnvmg58YvkNWCdkFX68h4ZRQNyhwKCjhR5QVAVqWH1TxP7RyXCK2wwWfaaom551M",
  "key25": "w7sfLv4geDvoMRpvuAQqQhAUwatLPUtS9eiqxksxreqGtNzPC9osKSy5S7CFHiFJY4wKvWxBdJKkcVKYEceGsXv",
  "key26": "yQ21mFLvw8TzXNSnf93XFy3X4QHpJHy45w5zjuSMoQ36qWHx1R1nBFFshYw1Nvx6JtMJmu3uRc5QkBCoA6Jz5ua",
  "key27": "21cb8f7yaeKfGdR4t7X19yicrzpbCDbwXjVJ7Xd95h64e3mP8CZ6SqEjgb76JjDHKcnQEjV5HA9njMopsF8Ab9x7",
  "key28": "3kGFgxm1jEH4U6X71uxvanPe5bNZ4nNM69vQjCHDYnJvp9Ba7ym1eLrLCCALkqXyoYaDB184aAXn3nFa4SFuWGjs",
  "key29": "59BiiLQoAzGSSEwNPUxoMzJy2QFXek4LNYYpXbXjT9XW4rHpkr7hbYMk1kMr5GxhWK5EdyB7qNuNwKVB37mY4KM",
  "key30": "4jm1EyRgNDHyBCKeeD898rTgY4k11fdXR8HT532SogFcE4xsZxGW8gUnmfaW9EZRQy1u15sQbMu8rAQB5xDg7mEV",
  "key31": "48Au1h99tAAjQfEGQp67pofEEKRwASBsM1CZCqEJktrXMML6FToRYDVY5QvziQe63RWFkmx8CGTXrndm29d8Vb6v",
  "key32": "3JBaN2dMFn8jnLV2YMHg696Uvjj5dBH9YLvuxDeo1pzmAXXGpcQJNzur8VrE4EPYN9ajFwCLhM1FBLrdW4JeQq9r",
  "key33": "3VTsRYNK7dGEYCUtjUM4MffBFbcPkqpXub8jDvRyvGx8PVSyfrHE3KBSPBTLe8CrY9HRw38CTLSsipZ4YRYVjU2",
  "key34": "5riHub7kbHvcBpwzGGU8gs25fkoB2j6SFFobcFoHy7gSDRsBZdsxG4ZRNC6hbKX8VX8B4htf4a1PU9AFp4yqHukK",
  "key35": "4E4cEqLv99nxWBHPykZsqmEsH51j5oagJAXCFw6BaLvm3L5MXnCdQNZeYh7T9BQJ2bgL9ycWXio5g1awVfXJvFqq",
  "key36": "4Xbt4DMNBzbmFioerxWVGJx9Cj5RuorpndvtdBS3hiLS5Lk98nsWR9FfFUQdRLyYvkeB5rz8pYZMfTw6yybHkZ6H",
  "key37": "3fv4BFsQCn9nnvihHz9kVGyYo3hLTsQNMm7q7NZj9wQDWV9ZsgLNr54aw3za7hWsJrvK3g1CdZPZbtx3gVW16qKT",
  "key38": "56ZmchPWAFx4TDPY8jT6SJ5phK4qCN5iUsQnacTfpgwY2o7uBfn7CREwEgx1Sy9hdnhSXmxcyxrUdw2tfLKWa9fH",
  "key39": "3EHGfyw2d6AYX8oupANqUQeTAn9AyPZvyNwG6p665p59mJyorhvUZ9MqNStkX6rYWgHF3r58EQcTmjT9ZmNbVBBS",
  "key40": "399QrsoFN89tpT8YKN5CgQ7PRxzehYFQBSiAkpimrjCe9XUFuK4YGgTECXbSYhb5LwVQXtgLGbcWAuTbW72gpiYZ"
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

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
    "3Ne6brqyKSifBs7L2ohox1YE2KfufUQupW1xrnkzLmUJyTyaKdxyDh22NXgpxftJpoHMUP2sx6t6ZLfWdxu4Td9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtkTnWLsxST7rZu6kyqNz5xTThNAUFZSeTVYG3XwLBQHFeENLK99VeZAZtsEXiUnzTuGaczmzcNum25PkKgWVjH",
  "key1": "2hPi5PZZhBHboa3zmBDDogoF3MGNhK3JoDTdCCX1u1hkwoK2auPRvQVaWM6ot7VKt9SmcPsfuACCUrnmnQe2Ccvr",
  "key2": "3z6f9eUNx9k4vGiUesAaznU4mstK3dGBvtrw7N32REo3akTaRBVz8Akbad6QuEfR3LbMPhjc7XGhwwogbs43696p",
  "key3": "5feqNYQGUfWLkVyh4Y4Bw4guTBBqFZPD2xoDJk5s4zwfsUobs9ETeVcKTvGDeCsdvhpT9YZMVHTtjS16KswXjjuE",
  "key4": "2y5QSHUq5jroWy6fwdZiwzzCyGEbD4LzxF7gfzSWQ8BfESvVutWdMb6YmcK9ZwfTjypVvqbEC2hGE52G2Tw5DWK4",
  "key5": "2AAK4kZ2DXfH9DqrEbtpMEaKYroLVfYe4GYkFQczytVSSqqKoL25Y4gKoJjRfM9wG4bD6FaLe3qW65u9HyXHij6a",
  "key6": "2xiRGmChUmNRRqsPEmMR55dFWSSMwqP9xZjDAGpPqGmf2GMqo21SRnGm6oByvnQxWzsCgi1V1vB3BfM2gVMZ2Nha",
  "key7": "2YVMGB8gQXKrzFcznbA3R7YUJrdkyjfehBrcHjeiZor6rgmzMhUqh8yyXFUA8SYe41c7f3wJ3PTxTADjrXYFA5qd",
  "key8": "2iwSn5vxcztkxhMoL7tU2eX3ZU3Nz5QZzfUwZ1HFdpsNTrPqdfAC63oY4HHjxRE88qW55jQ3sPDPADB9B6QQ3yZX",
  "key9": "2AHPBsR8Yc3SCqcA6L8pYGPZFnpaj8BaxHXvCW8PT2yuhSQx6nMkH3j6EpHgtn7hCNN81uXSExVQ6Qpet9eHCn3p",
  "key10": "Aofvq39DqZw4yjWJEp19dGxs4mavmo9aVHcKEF8qu1oq6pMZ9DXpjv1irnqwyAXBhkDcmh5jW5ngHEXoFJDwg51",
  "key11": "3nBoANEHLjCXhRXzfSFJa7Dq3hDkXWZCUn5WGBgcG6NVL8ZQ6B2C8jZBYjmAANuoXWM9ahpaB7ePAJJBw5qAVPZN",
  "key12": "2f54w1B2K65tzBeTpfAoVc4TGD29rpM1avz81VzMg5BktQn74hkE5FB88vTVxyP56ye5UmnmSB1QVZxXJ9ZRm3Wu",
  "key13": "9CvvuJBwBWTQ74KuWigic4qMkdnPLbUR7p5du6VBhwbSQWxcye874YE4WZeUdKb79iHEn3Zk7BAAWXKyJr9suUv",
  "key14": "4eR3TL7EBJZTyGhiUSn8NZKNoWsaoxFhzzXJjm3ERHpU3C82f5KgTvoL8BZV18ydRPCYh3iSE2SewrBEEnzRmGFR",
  "key15": "gAKZ17HBUhHYwihR7Gf48BuCd9raToRo8LHj49A1GzmaFfKLCs3jFbA5XvsTmSo5VYaWoCkrTDoFKdmttzG8r2W",
  "key16": "VTWG6stHbmjom7WNfjKQ21eo6gGZKqi5aYNzUsa6t4ehBNmuai2TyF24mZAFquGtMfQN4W5nFF2SX7MXXDN6cAg",
  "key17": "8nGUut6y7APKdSfL43E4ifw9Ka881Qwqzkqg9evQafuZJKqUVYhGeojnXdraRjB4MTE2hre2gHLJnKfvH28AZC8",
  "key18": "2T3FZpN2XrcVkf3PhkHXfGxHV1ASNP74XTZeKUs9b4to5h8nH6jW8oCKZxPCKXB8p4c3hE633Wj3EEZeTkfuReBZ",
  "key19": "32RhmaPeTmr1hu5skHCqtx79z1pZg814Q8r8zgubxfPo8Yvc4VGpVBbhcVc9VpHr2U45qv16Eoof5gBdt1shGq4G",
  "key20": "3z2cbcbAYmxdepTuJ3KbG7Y6y1jkhKgwY8UrwaxyxH9fvKEBdZmiN5UjzYQg3nNFC18GD7FAowydN93JVF4Rkw6g",
  "key21": "FhHdWmkPRr8hLbsGxai6csfoQCgHEnHTqECaGeggD1kDvQRM6rkrwzCDRLyPFt6EH4VjJ5poivGFpWmkG1KpS8K",
  "key22": "3nQ74WeuaKHjy77iyS9wpBFTxLWgxpM1Bpi84VnMhiHcjix4SKtr2S6b9kFq8j2fi4HNTCMd1ke1EL9NWs9yWKUK",
  "key23": "2Po6F1NAzSKqEtkEGSftqgUtFL3R7VySfaDguyLN9wvy7xK9cEk8RFPA8QGDrXZTzAyiTnJ84KMXh8BFVU57Yooe",
  "key24": "5r6q3yqoGMcdr9sDmNYytqNzUz5CP2amG7YjTCTKMNNLpq2fMyPVGuBSV4sPagHmWRfDKCtnncafuKSc4u3RaXG2",
  "key25": "2avyLeze16Jv98MxGiuKgqUzm3mpCycENJadb39jra7oYneZsGTyA4QLZ6YdNArQkatW3U7xPDdf2eatDRNVAkFn"
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

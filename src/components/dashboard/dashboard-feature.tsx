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
    "3xDkccUqEM8tEo8zpVMvorsU5kKCnhqaukTvqt8McdupJeiPmseftHFTdU8C2PPwuZG4Cj7thj7S9rdh2Bri1buy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FraU7y41enSBALS3DCmKLsZEtBL3oWPaxzW33LLsKSQFBYgs6SPuxH8MbEc4HWFULmgYZTUhQz76dPKFyENafyf",
  "key1": "fk9zYg6Ngq7Rz6X5LJ3ddG9P82ivxN585r779Wjg8Q6uhdjKSG7Fqz4gSKFXLEgQHtKBZ553T22ELXj6wZBKAgz",
  "key2": "3Wi8sSdNLeSnsiZP2rHmYZB34Ns8PsReNQAodPwHWSe8y4FWZzaBASsA2gKfDLC8qVwC1UVBEyFWwqfEBES9fNzU",
  "key3": "4DHXbWxqBwYXmgkcK1XYWrQ7pMppLFHZL1BfnPXeCZNcvFMCXN7Sj69AcHwHUS7mkB599niWwMSBKi7jZyS7zWsp",
  "key4": "5dB1AJo48so8NoYhEiBMf1piqNQwZx6iSrRdJjAauA2aHDMeTSPWwHsYsyoA5DCMWTsBZVBP9RNQa9ofwiRy8DV5",
  "key5": "3V3sB29D3bVHmX7gEaJHRBMiwp5Dd28W7s2oGVkYvgnKLvpbRCAXLgSXFGPSubSLNnv2BhsiJUbjftkYeAGJAWsA",
  "key6": "21zo7vTZTw89K3Hg5eB94GnTRv5heHVvxXyzzgChc1pPDFHyT6LsgvgEM8dABWFaToeCQGWN1Zpsfgc3CkoKBmJU",
  "key7": "47BgHhmM4FSzmhnpJk1rcdwLmPHsVcdXk4Av6XQCQsqAnScPT8yt28enk8kfDy9az57gS5XmkcmSobChujRa7suc",
  "key8": "4iKk1gZP7JSdwQegFG56az8YuJN7SCudM4QzLgK1UASTi1vGeD3BWVv23Az3ZA6H2pjN3ehDhDFL4L2kL5tbY2iC",
  "key9": "2gs1dyo4BSxJN8enhBAZ9ryFwabpUvwCAAxg7Kf4zAjq56qX4N4DKY352eccwezgbiYyn7hxLMWRqoa6Yy4cB4Z2",
  "key10": "39e8V9a3UYuEXWx8NmjJqyW7wXksm9GVrMG8uxiqLeLRsE6KRynfrYE1LC9NwQzpWp1XBZY5RLiYxxt1NDZRUFRP",
  "key11": "2jADm6K6qVqvquiuVGvYA7KJhzxzvQVFkUmVpzvdKknfKK2UFGqHFMoRYgbfx7wFR7uWVFnorBWRLcEQ9S8tPJJo",
  "key12": "625fgJuJKU5wfY8HS41uvH2Jw6xG6ZxbcDyiExuHs5cjUXrxiF1ghgxnjZ3m46fiSEtqVcvkjdfj1ByCKv5iznxw",
  "key13": "4XwWxRF2VeegHSmyUxK8Tsjf6jSWYk2TmvrF8acChubFDj5iwuSszQH4hu1XBbaZcinA8u41zmy2QGA1Km2Rz4NW",
  "key14": "56u4FwujxFFdkEckxsV5dzCDneJJ4tvFZxrdEftXjPqsAitZh9uBd89kt3MuwT3QxaV5SZ7yLmNyF6X2rpg4iyys",
  "key15": "3x6pBZqxBaBD3f6N3LPnjgMUBXHdtGHqQsM2ZXPsVbxqHqLjc3H3FbPkzj2SeQqpuCsVfRYmwunHyPs62c4Cfvqs",
  "key16": "5NWUv4u3G3PSktDD7zWjweAkKS6LA3cLzDW6JWTku2ro91QgbRaZb2Swpb8572YTPvGngxNe3xGog9P4YUCwZqJx",
  "key17": "3jQ7cdiHwjmN9ebB8YYmj3dAn9HrD2qFNv76ML5s38B3gmZN4raM8UEE7keroyxscDjKsKAhJXKeDcs9G6eJcn43",
  "key18": "VnrJRBiwvCRxEytNDdQx9fE3VB1mzzbXjjro2mXgigQBszt2nrFMJr8TtjitEHqyyWuuzbEPAKMybEhjjXJzneu",
  "key19": "4QCvDkE12x5JFLDJ1UbYhUBqCC4Ekhbn3LGH6FY7jCTQeV7XrFN5zHqRfyZjWcPWPp9NznyswoNxgnBsnTUe1Dz1",
  "key20": "boAARxefHzs3JQh9WCuoT1fWMZU19tzFyiNbwQ4PsYK6H2QKYmyCNP5TW4ELSkBdeekuGaeKvjR9HZ1WcD2mrGS",
  "key21": "A3cqY2o8YycQVBeSuQvYEpiZLuznN7YZq13MBxy6kENRifweRuifvmuojyqeyKDRL83gduJfGZHKPopaBt6SsuB",
  "key22": "5nJBksQcMpuDrwgPYVjt69vdGD86HywntEbMnEYT1c4D6fVR9Gjyj8vJjT5K5yZDZG5yh4kR1oTcnm7cacmFmbMR",
  "key23": "62aT2qvTUEGCHz6mmyBvRYZ1qvZBDQcYs4gBbFF9UxmawX83K9B4Yy8eLAfmBw9KLJZpnd27BQ8Wc2P27LBbDDxq",
  "key24": "WoAq4VBrcScovyeimRPHAHgoK8tYS4sw1ZykeW3NTs67SYvsEUKziqcKdcuEpHbyhyXhRTUmjrbtJXG9d5EiGar",
  "key25": "5kyrPnYcX2Y72bRvMoR3xiQrSSNEDy5DhfD8QpiZpJD99RYciNNoR2YuijWZk9TEm91rtkpXjnvS6Y5AjjF7KtpE",
  "key26": "3BKxsNu4ZdFdoJfPAFVnda8vFhRcZYxrbANx3jkNxvcnMyNSdSREXZbss5CDB6UUqA9KxykCqHaFHhYCY7oASdHs",
  "key27": "3CUL75T5B9vaHp9raDgRfCkWdgSUZPd2nSBSJYN3GqUVmusVcnh2beQspVFPkkveNSbiSMpXCpWLkVwmS7Bpv76R",
  "key28": "64uKTj2jn939EGoR5eaSPHhC9QnpAwHD5EAHeneFsQEvSMZmLGCWphY6Fu88iNDEqL1dR4y51bzPaPhsk9wXUqab",
  "key29": "4HYK3f7rq5r3aFLjCVLVYcd2FwLJKf6h8XFXFVLGYpjAy586GVk9fueZ9eotmjjbAAhp2rnj5AL3VkY8wkaqSWih",
  "key30": "3FJWbKrPuMmGBsxdzzPwna8Y9mVdTPhrTDyatkQ6Aqht8zyyz2mDLWe8A37DdzNAb2UjJtVeF5WAKpAhUJcEr51M",
  "key31": "5fcSDdg9WcWoQXiNG218AMtDZ6zhdtoSRWz8oeDj2SmtqhPq3GACCS2rcrkdnEWW1Q7oJcUc1nwScK7U9yaigpmk",
  "key32": "2LkUXsGsCJag4Y2aTqCjU12JrnbPbvhZnE46KpVvAFvTVvGsnjyp8CBjgskG8HBHgghPKKZ2kW7FvwFwWURaN5Fj",
  "key33": "7CAjzPkC4FJcCzibjJKLdCJ6gbJ1SvNYQAnRYNFUkTKECX2VcC3t8gkMURCN5HU5zYGPUALY2FVctPWGdzwFA2W",
  "key34": "3fCmqzt6DxJXFpboVWTMQiAiPxdW6pTvV1GwqTXmo8NPqmiy41Cx9Fg9J3FgMWgnmMG39femzwxnxgJYkcRxX9y1"
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

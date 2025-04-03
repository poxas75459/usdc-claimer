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
    "2FWSfVzURQJjyAFngSabd6YS1pPEFKuEbajh5dU94kDHDvw22rHKjeeqMmShLPvYkUyF3JvfRypWVWAHoNoMnXEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivadhXnwzgoe2CsNygdyPrScQ2apAeKzydTmwYzzhB3xgjeqgh3CUXM6R3eZYvYvjPnJ4vU1VgDdKhzcbJU7Fk7",
  "key1": "65Xe7MMD9pwCA9pfSJUCRqqpMzrBGfni3Hzt9qWQWDQycpGtDjbA43LVDjL4FSgcwqiGCJr2g9nZsPoGkvqzXfpR",
  "key2": "5YjZWrbFjYHV5CwxY48iU6MotuVsbya7Q5T59PVfYhhYdhDGSQYNa3JDriVL4LcbG6trruw2nFwWV8qyuF4J88cW",
  "key3": "2E64ZbBTXJDSD7Z2HBuAB7Hs26SGaXXnnGiFiWrNSQis5MKRgaVGu5aStiW1oAXroUiG3o3rN6xpPm7ZUCQtf5wU",
  "key4": "64QpZVpFZnvanp63t4TFTftZGKPX5Q6Ur4MbTv8YnzwAA6xgWtkoPqtc9ErtbPQQkRnmGmnSdzg9C9eAgetJCyeJ",
  "key5": "5d4PPjwgzDnBy6bDUZAg94tKgSTHbovycZVZjujTPrEkUbVoNUUpq1pfQHSZiwwgwWgQS4AaWiGkyeFjNJcJAPFu",
  "key6": "5ke7hTFVnEusVjUhK5xNNG19TSwC8MckLtD3VNGkKzwpFrkWnKaQKv7RT1WCCtLi6WAhhi6HCrjCUcpLWPoft5QM",
  "key7": "3ShNQaLWyN3qHpcFSXsYHj6YzjB6WFr28swraGjBhjrW9UbqdmA69YpS4V4k8gzeLn4hEn4SgKaUajjapUVbHAWg",
  "key8": "2h7MYxtRfmkS6RSzR4fCziEzur6FSjzW5epGz5VmSQGYzmBkxEEdVWQLApFzEF3DgiWEZNkYBby67YTQrDp6T2Qx",
  "key9": "4vcNvP37JtGEYi51bZV6j1Y1fdSenencGyh1hRuGiAqn4xANsJfAqiVwzbBPeuRoDNSNb8u1ukxU2BHnxN1SKLmp",
  "key10": "rbnNBehX11xhc5YodowjyiQyP9asYmYcjaBArZUFsyRGdu8pavxg1vUpn9vT8mAuFvxbDduwRT8JC4GCwCQWh9i",
  "key11": "2BTqMHgdBbVkCQGMY9aKwnz6N9AzoUHm8guEuZDG4F8rTTiYApn8da46FmACN9a4wyqY2TM4xU4AhiCjFCJpvEMX",
  "key12": "2io68jo8p9LGWQYum3iqmRYkEM5SuDRHLjeQc1NpfDJBNqs3c41pEuTFpvVFnDauG9qCcEmdHznBvcgu1Tj4TYoQ",
  "key13": "wBWD9tzemaQmrzgut9k62NJYWHrXvmV3eiC1qteDBexkRZ3QiGC9ZwGexa7pscv2eCP8GFcqZyctSUmpRMLXBiU",
  "key14": "3Ff4UbD77UHrssq8NXwKmcKRZEp7ECF2viSUgVbkiYXXj8hNZrigD1HpA8PDL6cSZ8JnbrDnrdk7btnCWRT66cSn",
  "key15": "2dpcZT3K8cvrwe5t39D6yytmznYNgriGxp5Kk7JN6D8outXx1yiqegiHeoBt5coZngHQz9TLbf3uqEoeZ2YtBy6m",
  "key16": "3jH1qxZT28Js9pWgcTPjwrdCqnfj3KWULmZzLpABbtzRykRrJ9jPus9hdsNEAkwkLEJNp8sqPzbmRiozAVBXfmyZ",
  "key17": "2XMrhEj45fYUSSKmmzJ6GQbk6FUignJtQfnh96R8eM92LasnwDSfqAZxF2bkqsmRmHEXmZwjLNcr73QSh1XxPy5C",
  "key18": "VgvDbPGD2gxRw6ux6gu9PY8ZJZ7Pbv9gEtYwntHjoerPYuKeg8RnbhYoLbReNxBCHSzV99f3AQb7ZpHEmEwDiY8",
  "key19": "3L73s5oXhtThUQGXCfZanvJPDjgzXQ2xVnCDybbPnL77G29ztAYEVGaJDcy7nR89tYJtKgb73HBbcPwGWGTzHeAh",
  "key20": "3KxF4L1N9s2NZgKRAtY6r1SuamjwnF3t75QjGqEmcFh82khvEK6ieAvcbW9SmnLCsTQpVgNaTitJenHcc6zCQw17",
  "key21": "2SowQtzF5MGJhcUwGSwDRWEwZshVc5edbbCCZPBb3muZ9fLAioQYtvvWDZZBXqJw93Fk64FE8BwNFBMZckx8ZEju",
  "key22": "4E4uvXpb7LL4vrkF17BDJ1NxvhRuA3cEVsct1YUXg64v9bSUyPd6WdxNt9wGWe5AswBdDvv3v9DYpy8a5eadUFpn",
  "key23": "4F21z9Rup712yLxwQetmZapocwxQczJyw7fpiKoczJ8bMk1R4E5G3HgunKa771GoA2eKdyGmLTrdTkiUHD1UPFiT",
  "key24": "3psUdNsV7C4tJXRcEjPJ2HxUnHE8nNqJ114tDfDoUMjUD66qQVhZXvtSZ9AayYhaL7SpUJ82eoybWh4mY8Q48nkd"
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

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
    "64tkLotabSWDqdCxucAsyymk1WLGMhFVES8SqibfEzzvNE5cwAGUgqEMeDrokHf1DNxXLG1sdsktzMRwMwb1TevC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQfkgC1MVjr7q1okUF6bWfKpNd66rmfwdrZ9582BSV2718FXWtS8fg5SyggUADUedsgJNioTZYsxMkzqivEoRVk",
  "key1": "5Mn7MCrDeFk6LeihzxoKHLnuM9cgzKHMpspFoA8hUmxKL7R5vD4k7kjpo1Bq5cSTMWqZFdqDbSPPwuPe7XN8igKw",
  "key2": "hYNijdN5eQCPAjDG38zMZubzgKR6aKHuBL35xZWs2wjeg2iaGtgNGKECdt1bwLa5ACJDfvKLvg1GTstwqxJ6y3P",
  "key3": "5EiDR5ETrZpkNutVJEcava9UpxiNU6PCnyYka5XEiqP1N92F3pLMbExF1r5ZUPtdi3GaepoVVth3x1Yp4bi67An5",
  "key4": "5Mk3XQjDtYi1o7SES7FdWz9JUAN1J85McaraYJuTBx6h4K7Jkp6JsiRTS75bvRLEukmJxWFvxzdZJRjA2KfWaHVv",
  "key5": "5Ur5TyuBjpUHiBKTuGoqy5zEiu4ZrYLWEEUCJovB7myyYvs6tbdAFXF9my6eE6esm1vdCE6ArtgJDGdQKj9ZvULw",
  "key6": "3D6w3w3PLGnYYjQ7YJb6ys1br2bbuUkeHZB8NQ5FGhU9RLTbj7j8RdWvDY3zcBrc9azCZyYhMd61M2RiGoKbVGzH",
  "key7": "39ManBoc6jqQJzV71gZRLBytDBqZYnDu64vBs6MX7v6QvEcUe35axdSRuw3LJUChBmb94CFsGJxSMHeefK4jMdGx",
  "key8": "2zbTUNfJwf64cd1Qw2FfuysXvCYUVcBimkdmcajwqst1VmsdT5d3BnRephmrcg6yJbxDvCuKwgM2mqVEDC9oCMnH",
  "key9": "27ZHT3dFnQYUjFT9WisoPFakJanKf5N9nAvWDr5zSjyB2B7opBKCbuuXxqm9KAYPLLQQXqHM6yMxV6vxuQdNRijs",
  "key10": "2x8Q6jQhenz9bKsnKwLEHBqCP75v3Jv9ozVhU8T1FGfzRXjN27vneMJUDY2Nrxagggkc1p73DGh3ukTbKoUxouD5",
  "key11": "3MA482CtFJmPgy2vs86uierRpP57RZ6kX84YRXDLTjsKFxGE8vipdaHT2DTtQKmwZZE4yDW5SvWpWs5BzPV3LpeV",
  "key12": "CBryctjLrLZbFvPx1TKmNb17uQzU57GYBY9eQHDpjTkWbQwEfCQrzc5Zo8GGSpXKF139uyJ6wtm47Zst1HJKaQZ",
  "key13": "39qos1eJrag4Pz2o8KsGCUKdyUhCKi9Zno6h9mTNjvYTpR81p9FLa4FttDDtwd3tvERLgEUhUj3Ma2vNEd8Qw1Cr",
  "key14": "4ZmKFLQQJkVdAum1Ker9s6ZQsTXN82gfBoYHZ6KtQiyz6gr15KPk1A5c8M2mdrYyAJpWESnZ1WF9EeiEEZZDMVnx",
  "key15": "67ks2obQFcHdwL9dKSXHEVa3RA4cYg7Gw9DLHpD66JJjEnFH9zapQLFGxmJA4KDF8sDxGL5SecfP3UQUdAtstasZ",
  "key16": "6jN82YgtYjCjRxLV2zFGTYMfikcb3WjKsyAnbEjXXhJnENhNzodHAMkibP9h5BhS3dm2hwywjVZ15Yji85DKKNF",
  "key17": "axDdJufkzSHU1MUXh5TKAHwTwkhkcvdj5H8yYVgpyTkYH9SWaS4jfAPdhiKqJXRq3aBcV153sMVPtct1G3xSpkg",
  "key18": "3A5x9h4NpnRw2wXgSRXSvTVZLmTGfPRS2HJmB59d8FmZze2BzoqJfR5VubZVQj27B4VhJRZuVcLZ6UquZZhB363c",
  "key19": "2KGP1QtoGsUtSvBEG5urXHXjvr2E4aoxNeTgzU8MRzJJozu1HEVxyf8i9QThiPriL49prN3YDRfCTSFuZHhKDSAP",
  "key20": "64A6tH7DFNKNLNqZocbZhm6CaPH3hUKhx5rgq6N4tpKCTVb8zVEeK8siaov9mFwRgAmo3V9K5VWhSC8B7TYatsGw",
  "key21": "3MsqANSLZYLrLqxJCrUMxmjBBMqaTjmiytHvEbkpuaXgm59apJynDMJyBRcUHVgR6zH85z5avKAQFcYsREKatXTU",
  "key22": "29aszZHTZPWH6bNop1ehV4rJeaffFPzciU6akRvPeoj25GBg8Ha9753bvDrVPCoTfS5Y5BKWNYb1NvKGSqzPem2e",
  "key23": "wGsrMeHuKqz1zKdsZrVVAgENcyYvZmCk3VX7u86fhYohzQEGQ9gEq4o5mn6rByid4wUFDcrmbS1wc5f8JbRKhwq",
  "key24": "2bJynJPt1m6N5LFLFjGSWrpCPaVc3DyBhMjqys7z3uxmhmjKCwCbFPVUY569UrCvWQBwkR8eCSKDynJS4W6WBku8"
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

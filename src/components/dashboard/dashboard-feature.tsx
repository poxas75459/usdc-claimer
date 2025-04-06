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
    "42pBN4NjqxzCHyTChkWRoXBH4jPiAj5gtccuQkewb7EN4VvayTaEHA9RrNLxSxAbaDBN8GUbWWCmmzEUt3cF3UwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLRddhFNuqC2QMWkumpUMa3AivMEhraxFrBkhFbuc8pEShTUEuNzLqKQvYarwLzi9TUy4LT1oRwDCjwhSjJPCny",
  "key1": "44yRBHhqUq7UdZKpXm8Y7ZsJTLMQSGmztXXfq969EhYnGMnVH6Aqu3tQK4XxSvKsYE6RiVXZPXqYjB5yTS1C5i3i",
  "key2": "3LgFeza5TqStcEhWiTVK9rsk48Weq4djb1d7qgAP4na3iFcyCtLfJkQRCAzAVhw7Nm9o6Ess7uPKGZ4CPQb47gfq",
  "key3": "4Sdnwgdwmk2HLyMNU6i9o8qStpk8r96JCmMcbzN3mjZCZYxXxEuviEr7xJCCqPSghs5NWvcBsH2Csw8HyS5AsB8z",
  "key4": "4nAgvWkQZTTUEYBvJrei7arc5CgQv2QRyoVgYHFa29qjBQQxjVeDBtH5rhM6gmy58Uef85qYAjvSCoNa2KZ5mR68",
  "key5": "jkDDUhGF4X1nY3wQetwfVkHczF3uYjwT9SNuht8E8XSZfMxXaWYQbimQ5qjkWp9gHJMtDG2NeJRTotUf7CaMan3",
  "key6": "JFeLs2XPANKgChnKZt72ZaVdZMd7ESex7DCjknrpjgniNA6phfKQkDV8k65Dceu8qmddJfeMACBH7EAqXeq4awi",
  "key7": "5X6pUuNskPDg3KxHP6nVX5NF11nM9ov9bvA4j2Ze2oHQ5fVA6ooh9uxn9pCbFMxe8sq2ZWu3NSnVL7SJBgJwaSv5",
  "key8": "4PFNnu59bJyWHRWNiFk5oqPfgNmZWZQPYkNH9fE33VQoAQ6Q7EakD1vbLZMax9TiBPcsvFNg91oWVurzUq8TLxcF",
  "key9": "5HxoR8EE1tsL1ZHu5GMzQsHB6pUMB2X6mnh6avPyBd1oUyp16HBwNYvZWVizaKAdXsKcH5o6sGZiALckUQSGzjJu",
  "key10": "2PB75oyFqckUykt8y5NyTtuaCn8Hk76UFcViA9UdbZhSZRK6JSwqmPm9zZRW1ZmMqY1oSM3jMtMyLuL8qPxvKo6Z",
  "key11": "314L9QVh8hMKJ4CsAqz4q5UuN5DzPf8YU1WEujHHWpBqu5f7DXPu351UC7zfiorK1xbAnkyRgfqLStRoa69nCZdT",
  "key12": "3NZMtrLA8PwBvLBdbMVjaFeUfWeLY4pe4j2fyJdg4x5nQnchu79CBMoTRBJxvqFzhTfs4TJFLZ4SX3eocv8Q1CH8",
  "key13": "2Hdtw96Mtsw5jkXMchsmE17PaV8gjhzofkCvYt8MPncSazRAFrb5G4M7h7TmRPM6S39mFKzRkgYPApxTGGW7W9ZQ",
  "key14": "4w7kKHvM65wbpcqKbWx4GKTTMoUPTAcitza4BVNj7zZxe2boMZcMdCu3UDS5uw6arwTyc6JFGh5nqTXLmz6ouDfs",
  "key15": "4JZ8qXyjQ38LpjBQ3WcFiEzbDcEXCXk1RSZGbTSDn7cfn3xRB7VS8pQECJZD1N6utFPJ1izmm4FB7izpLkAVxFQB",
  "key16": "4XJ2R7xtHt55WbjrALKAbj4LkXGLjntkFTRLRy97sYva8HQJhox8kmaaAhA5p3DJAGnqFpfBBfmh2YbaJoiiTbuT",
  "key17": "2Wz3XzMX9idw6Scb8G7Q43b6eF9QZDDKECCVkVsCPUzCEsj8oFu5TXr9H8oaG5TFcVX8KdZfSFBd6v5AWf6yKX5P",
  "key18": "G38hGiMakijbnEpHoSbT3N9U9vctpbdiHd9dsKinhnKGueAaTbSrgLmpmxQdvWUZi7ZEPT86s5wDr2hGdxjFiTc",
  "key19": "4EvHwsAanR8dY5sWJb3yfJMveo8LKBryQP8xwa35CBkM1AdhZfBSVWPDgSsd71iZSSFBmZh45GjWapdJWEhA2ys4",
  "key20": "nxauEYVM9M5LAD4wwFrb24a87e4Y3cEcxvuV1koNAkThEe1zqxBYk4NosdUJpwV9R9rPYpBkiP36zutKvUGeZqn",
  "key21": "2NBot5RHSAJJBYVYTLUUjYmJPAEEH2e1qLBRpJH5oQfhaW7RmSi6TAowC4Jg6PWQfFC99RR5fL5EQ5W9ox6BSTCx",
  "key22": "5RLKtAAWe2dTmgbeu8upzNcmLNTyZ9f5uid25rXuMMDd2ssiKWE4KGWsNuQLdHiqg1NkCi5E5zfAtfx68Hs3hwJy",
  "key23": "2c9fLYpRzWQ7C3KBAQtQJPMqmrBa6UWZBynytSbtVTJ1QtMgiJ6vYmspjNKTHaioHPxbncPuJY4bRkTLaRraK8ZM",
  "key24": "5QN1ZHP5XLj41TGMoM4yfhCYYaRpT4aoqYG79vxe3U9ejED6mfLYsHRY7oaqnWkhqX2dSw3dtkXBZohirp1XsWZM",
  "key25": "NCfyWMr1h4t81KXeHLvs8F2WKdD37a6WPzAXLEVTxFWmEHiATmQknYc3MYSE7RyeJBfLv4BaX4TxhZkHxrVomMp",
  "key26": "Sc2VNofcYPpgb75JEf96H8jRqhpCASy3J2UMXJ6WMtioETDHddLTG1JcjVtSd86tdZgtu3tLgXeEaF6LaNEsjmw"
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

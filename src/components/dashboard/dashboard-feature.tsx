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
    "3oqmt274REveTstsV28fYTVpADV2WkDxSZ1y9y8LE8EWjh3hAw2hnBEQDYXUr31cB7sCtcZDVFFrwnawXgfxYGKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGWmPuC519zEUucBpbdbKRHpYxqers1jdNk7dEPudThNHRSLWS4w7VYBF6oUcTh5jiKyxSy1ehHTBrxfVsncnCT",
  "key1": "4UcYXUYuu8ZfGg5kC9rPjDbRWxHN3E1wL4NzGBQT8gYjMqSbf7WFvfw6XVqeqKgyVjBdAGc7jDHpRcdamUZeGXsa",
  "key2": "43qaCzZMarX84R8uU2TGBw8W6VW845WKYKcSV2ABtSQKEosy2RZD7zP3dAoE5NojFBpaw4xqBpvYQnmooWi4f8zi",
  "key3": "36bDirFWfdw32G6Kn1ZHTErH7ZkMdFa78bLM9MtdUi2NUr8Gzxgo68M3oCbJ9qZVCsoYM37uJGNF5mx8fLuFvbNy",
  "key4": "2RwE7B2z8M2Dx5XW8snW2LZLFbk7D4Mf5DAUnFsr2dTzCGFuL5CUiLw8PxDv7svgmubaaQ3mkrLsVFPPArLcgvtf",
  "key5": "41j4NSfcb4EB7Sz2UUpEZJ4ro8KtMqqd1sFauK33fyUYYtdJT8Rfc7bcCCMSmm4r6wmo55JTa9JE6jz8C1cnsqWk",
  "key6": "529ZtwcstTZC4tWu76zRxkq32qtrQmaKzZoKGfdf9b7s5ZBYGCxb4eAUnhZAqBYrsBXaGWWxBxwxRazdRuzuAZ1t",
  "key7": "Z51eNF4EgyGKZQByCrX5uyY8qUSstYiMCkAjMvCA8CgsUi7JDYgrcvKpgSfrv9b1RDTrswpUD9debwxQwJRSN5S",
  "key8": "3FqGvFqUbfCraj2oWnKmtNU8Q9ktCDbc3FGertTuDt1pRJ7DhM6GPj2dHnppjGtBNkLXh9pa4dfAQSc1hq26hsQq",
  "key9": "67h9KWjXksoZ9BJW4wxCC4RCe5KMTJBL8HtgYhdEebVnQ3hTkSkWf4q6buSKzQGmPZHmspPYzCYfes777t249n2y",
  "key10": "4KgU3jADvHWTAQYcbJ8jfR9ggG4tUJqwsAq1yyYKspigrm8FwAzDWfz1VYjqMpvYczVyo4W7dFopeiwtpL77s8G3",
  "key11": "53iHBdDUpQfAS9TCywdEy15JZC2pV4D76BsvJY5PrJjnJvEYqsvBhZ7PmbF6YYojqkLbanSjvpQfXwPTwoiZpFNX",
  "key12": "2pnv943wAw3kQfkNusEFviY1inwW8KMuvskL7kjY4SuGF4hxtJ89VnrMGyd8ddky9FuyxkDLJieMPvYPh7FZn9JX",
  "key13": "4rv8T1bpKT28Ewr5peRsujQNJcunojqJgRkm5GVvjkg73EUBKWHjKqfLsszsN5KR1Wgqy3vRvonzrQiHuHyzijBR",
  "key14": "5jKUHXc4wKj7g6XYy5jMkcsytNnnNASS3tcpUoQmdypztwAgiQqa2bPjXUyRibre1a8VBvFqn3UNL64SMPfM6eAt",
  "key15": "5EvHMtau3Kg3Pu8y6VCsu1TzzXDoWevdU2wzn9Zbpf4Wcq37ZbDLPVFVYyPkr2VnZB9G77wFZq4j9LwXVdH6D8jt",
  "key16": "229RhHgK5YQfxVUULEz2gvMd7aqky5wydFqjxQTYT6ffDrs73gPEwP8XBYWhj4dHji7Gj1GWUq8594kMj23ycwrq",
  "key17": "67paNJDWUcrExDHdEVgjmTwXNmbvGcH2qxL7dyddao3BJNzDpCaJkb3TiHHmSxj1MACVJwEGr3tQqNrpdJ6BZgG6",
  "key18": "3KqQ2GvuXdKFA48gmVxzeQapJLv3YFBmZaWbJhtFXZXDPYTtge1h9rVbuJRueYmMbK5UQQGUU4Ssgrp6Csz9ikqn",
  "key19": "2ysRxmVT1byNgj4uXLHPZV5MiLtGcARVi7e4EdEuPFZAj7TpPjDBF6kjCz9kD12dyAL2qxbji31aVn71qLy8EHyh",
  "key20": "5bMwh659A4qLh6uJq2ZiJx16JczTqLg1Lgzz6VRgaj3iqRSkVGRxMbQw9xttUJ7fiwx3Vh9P1rvBwbYNVvXDciKa",
  "key21": "2gUAfhRSc531ZYsKwt3Du67MAtjoBiodPkVde8u7D72aTg3VVpSouwouG1Lo2scVSzPYpFvEJ5ZW7TD3mjnzjsGa",
  "key22": "hGN1sUky1ARthC5CG7VtdTDtuaXUTBii5swT81qm4Q6mTV7b2sgNk9qVqJ5absfYRAPME2XDpwu9vU6YiZGbwdw",
  "key23": "cFHSp8165dgpqoWmqzFYvyb87t4mGm5patZdkQmbv7Uh7yAkJVgieVGnYCeJr3PXfC9za6yRmwVFu4nWwgGR3MM",
  "key24": "dSJyBYxj9rrQBu8eQ45DxPTCGBc8pxb1bpu5eRcCUrSQoGm6V2rYB4NBecH9goWcSCynbVkeCdR2Lv3Um86RZZr",
  "key25": "55vz8aCipg66KYiLv6xgPwuM8knwDeSg78R9VE5v26YHq42jNgL5qpsqejenhAqdwFY7jf9wb8ThBA5oaPHWtqmS",
  "key26": "2zCCwzswHc7YrwQxNtNBD6T8ahC7qLEBAqhzVRvpmFFGUbHJm4FBrpnMiN7qJ4dHk3iqHNhKsHNRiikWxEYTgQS",
  "key27": "9aCS5GB4Jz7sJsKpomVNhKL2yXzT5Wpm4v4AhrhrBhzVzN6tTpCvkW3QeD92x1tAxQBH39Bkzk9WxvhJ7ehutd4",
  "key28": "3JmWS5Kq7goX6JmrMjMFcrvtwjoR1XLzKZRV9GgiEw99xwaZCBWQ2XM5r25EENojUZ981dKGwjWK2tWP1F3Tandb"
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

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
    "4eneL3wPn1fQdkMujfR3myAJPYTbJ4xQ4NMLBzjX9BAkBmiQBkheaVH4f6fj7KQqryrwXUNH5xvrzuFdekWUFuSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nDa7AwDB3VjJ2HhJrLuXj9WncaWrxiJyDnkkVRDgmvTftVmLMCxs6Knx44GGdHXrehZrnioJPoL7pb5cQFFcZzx",
  "key1": "264Jz4RhAZZXjp8yzqHbYhmzxwTeKqgW6912tZXvB4NZBQkLzthcgxKtTviSdMzyKAYMmJ8ThY9FyD3Jc2Z2s3WL",
  "key2": "2qF69nApQr47YGowjWn15db5CUeZ4QUdALFmvVuLXznWd9TebpZiV8Hm3KhjYmpWnR2gNrU8FAeqE1nDHSUgrxBz",
  "key3": "iLufpq4ypVTjaSzobVDAZYWJneoRpto5LjynLSMDaYMJsX8KzWkVYzg6zwruwZ7jZhrVgZKpnpVX3sH4UU1mKUj",
  "key4": "2Xcv5yYkij35GT5HXyQ1zjjVj7BQ8Zz234zPiawmzfKfeP7u4W74duT3SrxvXVP7eU4ZoCqQXje4nS76HQ96JUei",
  "key5": "3wmCwKsYk1y4NkT4titmADFkZVJLtdFZ914Zp3qAYEQAvJj7qK3g4hXpYDg51oX6hGeHu7kgnv9svq8eHgGuUgkn",
  "key6": "4UdhZHz2m7G6GJWZovJwFYDsLmbV6QzTXyqVzNB78Hoj9ym9JoUb4CWWEpFyEwnE7wq6XfMc9tdnBXapCXNezkFT",
  "key7": "4vBQu1NukoXPMZ8tSyR1rVsZuf6BigykHKv9XRTiVZtyRPC35PBKFEJYvj87MA4nr6cxQjdVK7zShsLPYFqERmxe",
  "key8": "3rUhw4pYoR9FZwxXUw9qNVHrF6oT5Cec2ko9812uSRjh4e8p5C2BMnq2FzC8fQiZXdeT6V9Qukc3H2LAkzYnXAN7",
  "key9": "2xFoaDjgaA7jfUFSYHzBrRuWmudgiECyyNvisv5FVuUV4Sb1cBs7UH6AHmYUjX9yH3F2sktzyy25HQppGrYzYMyj",
  "key10": "67DVXKJihrW4bTBtkjwXyv8kh69CRkCTqFEgQSc5xKoLdg2z4wJdRMtGVBfu8FwbE2mqbf4YXP4vE6RanciwE6ij",
  "key11": "4V9MG83ESejc93n7aw94WBHKepUUGqodQsSaUrJfVexfwqYLscZMdhUoWFeZwFgzxmjzWkRtRHKQpjLqHq8MwWeL",
  "key12": "57ZhQsF4aTtjbJvfbQccMf1FVJPuwSjG1V7iwVCaT4RUUoLaLjZTc9RNfSbjMkbBKTvaAgWbrPtPi7ef1854NvVq",
  "key13": "2UDhTbJxyC9Jk7LRbDZm38TV4Cb9GRfw4QS7fGWRwMjawvr8wLf62d2bAxVeTxLGfZCmJjry5zjw4ZkjaBDGQNU6",
  "key14": "5qNgwCUj1wMTFBRZ8t6sppbtjgRFdWuGyZSZxXxgWvY8J4uDxtPNaJgsbJpCgDK5zeKLZbhgPmUm3tnmbmi5aNXG",
  "key15": "2v2EwE7zPUS4p1YPLLaYjEY1tPS4bmtGXK2oP9L3gAefJ1o38F2nYEkUd7nXbwpLeeuBoSWYPSQERsBhKmWMQX5f",
  "key16": "5QLGctzG9BwBcgrG8JaFuB8WcKgbWxLHdqAqyFtCS4nhUXN8ZAZveyhgHaqE932myYzHa4Q7bKG7DJaZs8jhcWbr",
  "key17": "32VHf49NHXez5ikQKaZdfLU98cQABAop2ot5qhrrjgEaNuS23x5wnLxnL3mWA6iZMZZE5WjAxY5NuCVHLhWA4qpY",
  "key18": "3kbs8dbNjkKr7abqUkY43M78ofjnrwLb8aDRHzntrxHAGU1uzf36Qb4hCq2rsVM9aYJcQKtbvoWJdGroGtekL7aM",
  "key19": "5Qgooh6gX8Z126VydiXTTXaXWW746DrzpbuZbVbhB2nFUg4cAtMM8fYokfRcwnRVayU7ZjW2s5gCk6jmXWrrj1jP",
  "key20": "3UXdUAyvc4ppeyRK7g6WxE3DtBbp557YTfj3B3smVJmub92hBApC8Hea32u36E1jxEHMPbwCdpWg46mdsx6i1pC7",
  "key21": "67QJCp7z28V6Nghcm3sgRC8xnmgfFqYeGVQqq42mSMKw4q8QmeewGV9Cnm2Mw62PXwurLE2XtiiUaE5AeDhGLZzw",
  "key22": "k7QhUvqtaasryWPf77Y9X1PmfARo7XFEEWx8TPk74H8zF7ZEe7wUEoyc4EueNU5YiVAdCqPsod4dvpLBYhi5d6u",
  "key23": "53RjmxQ6o1eTYy2Z6eAa4igEeDQCmU4NWE8nQWZyZ4fwtoy8YoJJmFHv1KCooSGKUgK3DDFAC7Eziwg4MniAqgeK",
  "key24": "21nqjGAsyiwkA7VbK7hJPhrBPzqKNgNqUL6vfF3WBaLsifQKYRMoyQQsDYG2p2YPsfzV4UQzutP2LddFLzLE8rjb"
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

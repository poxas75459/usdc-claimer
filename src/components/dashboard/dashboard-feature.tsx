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
    "5nAQJvNfdo9k48eykMH8b7ZHW6bj3Kk71zo2DJPLNkWPKaUKZJCoLFqtMzTtk7yzzvRHdEGLc4RtUZjR6j71uRMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1t8UfnsPjhEq8BznGhiebsPVm3ZdM143iFmMweDVeSiNJx5NUXotpF5vybvq9NjdqXqBpLCBRJpF9UotZBNLLi",
  "key1": "jjHN6bUUq1xuSLwf6Xf5TpZZ76S4mCBK9Kai99KXFmNseM7Epyb5xcJZq9XxSGaAGzsoUaVYecfjc6gU4XFTgXS",
  "key2": "3hdwzsToaQcndaxZQXiD3zBLE7LiD261sufZwSjzozxfYsQc4hSU1J7DyNpi6UgQ1aoN18c22F3wPpnnZUvbhhox",
  "key3": "2egPG6VtE9cDK2iSUj5cVzmwK8dam2gc8437uU7FMcpcgizKm9Zydg9wHfCLo6QJo7BqPBy5m58nfq7D32cK1TjT",
  "key4": "4AGbgFQsAy6W6fjwUeHirBNWiWPTE9MntUmsGuvUYmMWvEuMnGxeM3DAKiP4UPjXyFP7KuoUARnoDQQeui8GsiDx",
  "key5": "21p3jtQy4Y1vSzpXHDaGoi167SKsDpf2Cmm5mPzbAa65MARcxHxTSUZ5ag5YTTZZgkbZGjL4FWiBM6nuubc3QuTf",
  "key6": "31cgpjFKVHFVv8GjwWXZqjUJ1Am2RPGwG2TRxeSWErcq8WZvwgdWNw5SBiX1ANqJizEH7a94mrznb4D8VHaTCZZC",
  "key7": "aDf1zGnYxR3dXPf27u9bqkADNrVVtoemMd94qFRh69XAaPVXA6SMRceR1uCpqmHUjRR2nzVTNSeTFjgeKjbrGkW",
  "key8": "2QLc67vckZxzgPRtTy2yodkTxXpRf1ifjD4f2S2xcRqCMBR8Kzp1ENd28tYdbu1oqUtSsHLLxnQRMJ8j1HCf4MfB",
  "key9": "5hxASXwq2Z2cVReSngZ6rUY7DiS2euSQzyYCD7n4yXSiYhcR2zZgbkG5mUC5N76R6gv1otP8xyywcZwDooHXqwZx",
  "key10": "3prRPKh14QBDGGDwwyfW8GJ9bvMG5tTj9Xe52sAqDAwANqK621SyynU2GuGPCeMbnkaVxXPGNUqWMLURDez9jkvq",
  "key11": "5PrS7GSskUNjGzWxmDahaZacMJUYu2TmShxEvb5B1k9zhVMoxvSYiZAVcnJvrKdTVQkc6Sj1hLS1KfX2joWZuhP8",
  "key12": "ud6ZMFixuNVfEYx6S4gg4QzFXSqcCBXhAqMgJ1FiPtC6F4XB6yLcsU16o8zH6hS5v2fSxu4qY3vjrYyykiYsotW",
  "key13": "UXFNtoNRughsQit4Nt3VcUryAvwYAkdjot4RMg1mZVeWjChns31CHvM87LUU2tXZkeuSUm41rTq4iDco8MBdALy",
  "key14": "52MKTh49XjALqEuJZYKPxzrbXC2rwNjdhH38BAusDrrs2JRiKyKEeGFFkom4KoyvoDyv7nRF4cvNMVvSwxi7PEz1",
  "key15": "2Fk5z2nBWyBEGt2Sc67icTjWZJ4RnR2MGFQnT5iPm1N7SE2BVWsvZDeiCG6QWrDCBQrHHTqD9TEeUqAJvhTfkXxP",
  "key16": "3wj5JGXTtEd2wx7VoHRmwYZ6Z9x9QFCCVGJGXMmZt9eExo4aXy1rFXhMrRsads2crHDrj3Ph7jiiL1jZ9i1WqJpc",
  "key17": "xkrmZxgyXvdwtUbkJU4WwRs1QXMbqX8pqnPB2DYXoxSiPxkChwmd9g9sn3GXirdftK7rLqqUgpnMkVG5kAKYagM",
  "key18": "3EXPRx5XqxFjXxoW2N9xZqp3B7pqRzDkLM9CsXzg36kfLXGBZewvsoz8VSWPgQHpy8gyrg3MH4Ko6PY3FZzqXPnA",
  "key19": "3x7vdpMjxCL7msZenAkSc7GoTRZrebzE9b8cv4ohWZ9GynKS4f258WMYTpWcdqEj4q3vG9SE7EQbEM1XCgxwdQbL",
  "key20": "617f4s8X1GDq7vTbPs69FyHFcft5XRNaEjxZWHUZf9XwiiWZ3ZQQxYuvHUhra1ZETyRRmxtm2xjCNAvNRbKoHkGy",
  "key21": "U7b5RhmNNbDyvHSjbKVk56wpxmGT8CsR9ZKArQ9qmKDy2V8xS8GCqH3z6h3oXCd2amu3CWyBfAoPvs8vYe2cJ9q",
  "key22": "k2QLMh9PcsiwFAkNojVp5GyuhhjVY5SkGMzCBF3d8T8VxvcWHeiWAn1FgbKt1hKwJQdMZbFUkRB4yKVqS6K8CFs",
  "key23": "24AJP3zjgzaj6kGThRQWD7GgCAzgMumidXJtFYruewGFDgqAqmkPPLbhJFGfrLQHcHiaVrTKSCgfnoyDAbk676Ax",
  "key24": "4z5rwBc7kyWF7SmKtm3GL9gLL5RxtZpU96XyaCT5PTL9aNinMg5y8WwftPzV1wAk6zWynYiWCFDQPUbpUFBBZWeJ"
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

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
    "51ewtWA3XNLFDoVtFrMsss3w1MMYx7e2r7F1VyWekFspL8wD6PgcVnEKkbZZn5cFup2fKfLEYmKB1nh8w38HDERN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5npL1vEpg11wbVrARWcr582iPh8dkfAgrEik6tH68PkcmETqw9kXwPb8x3UnDBm977HdDv5NxkPeyxJxJYaEum9t",
  "key1": "VzLzBy52WM3Sbb9Fdo9pRtTBWYxW5ars5vkrznF3ykp67v7ymhzj6W9ykQRUk4tU9Pkt146JPyvGuEvzU4jArH4",
  "key2": "5phiQgmQAoGn525qwVomGvewTA4yRuGmduELKbmKSwhS7oQxfUYLqBkWVCeGVANZAcRUsEucBPBWSS6qoLGENK5S",
  "key3": "5QnbvEPfz6yTcjd7KJa8a7DHWzYB2GvuX6hUtp9JWczTkgcfSXb5CycbD5qceQLKsT83sFtKdPfkPaQENUWDJAwQ",
  "key4": "4JvynooRMEMPP32V15vXaA3t7uCo39HHQvbBtxjgDkWTcLKVgwtZ6emBPYck4ungu2FFVKhPqGgoQidGC47VjbL3",
  "key5": "2E7tD6fK45VhnVJBzQbN5Q7DAS2NrW9KhtFn7TdjH4RfYRjsdv8ex5cGRMTA7BxLU6dYvCk7zjmHNrH3J7F3uRfS",
  "key6": "4fMUMBKbvppTAggV73dUHkHN2JXKGHTHyAEVTPDJ33GUCpogRLGVpCS7yvMFqXvcv7ZhRr1cDmsaGtCjTKBzZg4X",
  "key7": "5jBXZUHBLcyawUDz8ku4bGe3aYM5khwUermVWSrryCzYkzhPCGeJ8eEie2nMeThE4fvwCEtbGskHsQKk8bbqi8Ax",
  "key8": "5XjhshBxvGk8mtVffaErCwsP9QnTiUVpSxLsF1A58bDZMBqT6T9ySngGLJxJEGvNjyGHeTgDVQHy9ox9o6UvJ9tm",
  "key9": "4e5xvhjgrPJ6GutUWff9j4VBNMoCb4Ty67eDsMNT4tffhJZN81bkiGzKm9TwQoRFLRixdTsP1UFAUARUigV5HFp5",
  "key10": "4RpZScncrsy6WLdLWdvZvP2T9ro519QxLB89EMFoMQ2gxyH7QxFxLPLSgVsX91cw8bM5m931rGaFWXye7aW1hJx",
  "key11": "s7KFRsPuQsHdt92YsNMKF3Jr7wcW8c8VLW4tvzDHnCKBaNZCW94adDH8mAp4k2XCc8KHJtN6EZaJnzP1wNgwBmL",
  "key12": "2NQGQHqrrhBVzRVM8d2dFt7DrZYdofqVPTVjNAyBTm3RxgELyjWNwpcNrSqkTCFDn2iXAETFGFpCPBNeyGLyzc66",
  "key13": "5NYQDWrJMM5n5YqTPm61Nx1wqsKduHz3FvqwArHuWiKa7GhceeRB5VAYKWBUudySx3PzUmViW9DRdvZmxGkgZ7oa",
  "key14": "3gqfYUbZ96Q3kqaXWx21vsj7swG4mLnFiX6fL9Nizpi8QUGokGyc3M6yF8BhzVGde1GXWFh64xGBWgUH2LfQBuCt",
  "key15": "DLWiadwvVxgxTTW6QMszJUhHAd2uoowRxaqKpddCbNT7bJirhF82ugJuxbn2B9Z593p9gwLH8L51RRvijX6EMQA",
  "key16": "63mU6ZxKXwYHoN9hhEwTP9p8sWFxG88KhnK1zk8JRBrgvxgEX8GcGN3HkwdJEo9gSFMPZeEVMjVVT6rMun5MuCmY",
  "key17": "23mFBYUS9VrXPHkUvvoGFQLcuQFTQrartYzvrbXMgz3CtX1TVf4fRZGYAEFequqa6EzaS3pnLv7Y9HuxW1NHfakt",
  "key18": "2wQsMrfP4Dss9JqBm7jMiKgthFARATPf52V1rckXG1dwrfJHdXPTwNqDcgyWQwTmUmDpFru93SS7tuN1fxgwZCsc",
  "key19": "5idq31c8BK9L5wxTYdMkgjVNgp9a2Ryx8zaLa2h9fHQNV2cK86msBLxdprMkUnoG6Xitu9Zb9XbPXKpBpf7gXbog",
  "key20": "5MHwMDDDRjmhQVWfDUrjAh5Bjbzxvj5t3tCzifJZyfeA4fUL7NCds7uTW8mT39y3KqAzRyxCCksfsMWvVnXJ9tq7",
  "key21": "61fTuRfTZPENd6oSwqyxS9iZws2NraKbTne9YkYiWRxjfEB7nRPPfi5F6fewXH89QtwRHo6AW1ZjJknkEocDdp6v",
  "key22": "4fMTWxrqYjRngGyC3w1Txzz5SPUVNaENmwQwqeStmw5gree9D9SFgRLVHBa2tNSrcz6bqeLBMENdSmu4JqF3xFWg",
  "key23": "3CazVxffzpe6NECinpxXbF5j3BgHNXgSuPS2bguqhbWatXhGBPAdR3hGxJ2WtYFYdCJP9rCM8GSm7BmVLKZooout",
  "key24": "57gU6E3JeMTDJ8HC2jBEU4cZxJDiWiHA57B9z8vGxHA1dyEwWA26aYFUVsd3kf2nVETm6gVmRwJd9wD2Z7uFdwYv",
  "key25": "WaADyWSynJom4MQoHo5o2j5ENzAHR31p3JH53gt5SFmRA348ZRfuRBwGQ9MeJbPEyyj8WHm8qfUdCqDovFX9w1P"
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

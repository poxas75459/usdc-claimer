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
    "66R9KbJRZXz4UxSQUEd7HVyNmsAt8dmMVJd7ZiEzbdNAztQKqfjWKFKf7LybX1sDeYrqiMtFevXH8XDnxJEkMpcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uWiteiH3ykUpcYgVZdnUnjLdCHzrrEMXo5SKLoi3AJqFCbgd763xisjFNx6jJaMs56AXfWkZ2voepebCYZ8FP9B",
  "key1": "QrmvxCA1yBzCfkiGn84BpRWZZ483u1Xw9kX9gPn1KYumC9AeueqYRpFgNfPiHHXsLKPXaUUev8tGY5Ent2epfSV",
  "key2": "2cKDCt8wiJpWuvVun4DXrre774TDFtM7zMRFTKpr3DRcWEhT12TyP9h4iB6pEVT817hRMgE6jtcx6gEkJMmegkof",
  "key3": "uRFUhgfJJktqpzd4ETaKRdrGJt1hcrTKtmaU3CPBo2mv7fcfmkhdvKx7HHtJ7EMaqpRNQ9AS6Xt4RnAuFSzGLiC",
  "key4": "5YeLjpxCWsM4fuJyh6PScp99bzrGMf2c4pYFMBP17pTkZ7RgJJeTKpbK3dEYBk3YWDKtDkJL4PAngQdjuXW34bxq",
  "key5": "4kchiyB5dAKeHyBkkxEJWhoDU2QFqi7P5q3huopEq1AeUVkWJcWCy3obYRWsFdaitEfZg4NTYc9zS1x2dGdFhnWB",
  "key6": "2kySFPrHzyCU2TeCR9xo5qrJnLdM3PMV8HthZCx4kJ2kUBpncePRXXhPQaF7oMzXzcW1cXjugA398xFRM5b2Bqak",
  "key7": "66RpKHwgwPefvMpKwi2UxFyKGqVsXnN9LFTMbiUv47RngtVpVcvWt5Cj9oemG6Q8T9XS22yS1RbPWs9FcSM1UptG",
  "key8": "4878GSG3Ng7Aarw5a4KV4rznFQLWMKv9oNTTR6TEL7hiiM4pWMYGysxMz4JeNwZPHaXJjgAKqPoBoRXwfghHhZk",
  "key9": "591e83Zu9LDJpRzmWWigFxdxfv42N7rkSY2kQ8YLN7ekDPmziqs5tXSqXfVZcpZmfpRncLFaFJCG62DuZh3k7dqg",
  "key10": "2m5WKfRGKVhXnk54nGGUbKN8ztPPUrr1voDtT8yp9F7SBushFqmx9PuctaoeLxPvMW6whhUHaN4aRCJBb1ijo8fe",
  "key11": "4Zdwj9Br4mqaygLYgDdevzzkBvDVPeXxEPvMGWAadpSLZJkhcwr6rTx8EmR7KUHBgJnEQxksXYwhVpLadWjEqv36",
  "key12": "5UCrMmaMcVA5Xp3tkXYDBGHUBV2kNao8gB3yP6uKwmLpqDd6g5SmqYATVnXSZZTrH7oqMaqSGbsuhQR2HuUU45MQ",
  "key13": "5JRrFcWgRDdiHwWD7HFWEcLtCpMSfnZmA5cUwvq61FePeqcS8W66VaGjGLcVntNbnmZ7SncBKn8EAz1pcQeGoB84",
  "key14": "3fgcmTtEtwBY5S9WZi6ees2QAScA4kFssiGRTWX81K9QkSekgPFVs31566WEgB2TKBdBh5RuB95PxUUNTfVi4fPi",
  "key15": "64kHdqwVZkF9km8i6TXqReqtLNZVj1NZ1ve54M2h3GpquCtFdKuwyqqBJuvEyYb48juH5DK5ap9GpFZFo1ZyuLnF",
  "key16": "61tjG2VU3DJZpnaeRacdzbahPbevDnqViM329DEcAGjdmDoTsMSfZi8LA9JsqkKGt1VqFKSDiAm1dJ3ZBVcDMeCv",
  "key17": "4d7kH9oBuPKFh7Pcb84ckg9NybiZmZTPHjaCRMyvTcNAZMJoTzGECzX9oY4erFrdm3kBzgXanzY477tTqbqRwqCn",
  "key18": "5pQppHEi43JutfurTncEyT8u8KqQRza8qvN6Hm1HPGx8GaLsUMB8g726PJmc7dCz6j7jvScspE2oB11CBrqoFDx5",
  "key19": "2ujpkVE6s4vHJ4WztSGtNuqtEQ5vdDdTvrnt6B3oLwN41yUTXZp7ea7x8GTzneqLrsK67Q28A8kon9CCTQQ4pN7S",
  "key20": "2EnYNnZVFh4iL23tXvVMpuF9t7tXSYJeYLovKYg7pfXxJrg6k1VPG1LCDef9BQ2QsLYofL7MBi1CDkfhQwbuNgZv",
  "key21": "P2GM163C9FKpmZPGpuUSQTtmm8uQ6QcwWVJuGxQAJRXrJK7zBBhnCnpHCwoUBXUav6b48jnJ49NnZmDZFoR9zcT",
  "key22": "4gAtFBqo2RFGb7p9vYuwY5LJFecr8epYX5RRmbaaWDN2cZHun4F4Q1zSWZDEXku4edQxwVCXmRUwzEWfpnQkUcJT",
  "key23": "3753LttXYcBo2dBhsyYL9AwLKyUtESaZTzxSW7eTk21wamYeWA6aT4PxKrPt7rVRfrvKepBbjYyWFdU87LRcPKHg",
  "key24": "EVzP5CQK4xFGiLQoE3pf7MsMGw2jjUXxZTbLE4nAuET9ZDuXhthX22KX88iw1uSU7dg8q6WzXgJTCJEiAmnc3Bw",
  "key25": "3kRfcAHTsviGjf42WKNz9uMLqEoAb3QTLTVASWbRjk4RZc2dFVzST8efpFHQVKwRmLKMQ923fUkVZqHJ2vjeQyzR",
  "key26": "3CL1FZW62yk7ZoGn9scjTHqSdUYgqQqBFZo5sikC2aMk2dt7tnyBerzhzJaLs1i2EkFFByJAARodZiPHbmFqQwhF",
  "key27": "4SzQSvx3ZQw8ocRoAhaBX5yXNfvSaLKDQjkBzsSWSPL9e7nNRr5KtduMCj41GQo3VU5cQanrZaZqRdBmJhmiQap3"
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

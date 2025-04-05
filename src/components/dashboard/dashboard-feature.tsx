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
    "2PP8ZB7ezJwS9u2ajUNU95rc3KpUUjgUqCv4VAGsWcg4j3EpWhMSoxCvg6vQk6AtffsvwkvBc73SAcdddUZq1NFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGHo7u6HjXceANU31pFX3CcLMUedT7t6AR5igae7RNFDSFbHREo6cWDiHrDW165n2tdRNvwGmTgE82oKQ65TkyX",
  "key1": "3ZQ2iLDzPqxjZF3LXwNiHJBxqMUN5Ep4Ke5EuWcksyALBLWeGGsmDPe3hkL9nphiUNtRUzgvNj1Y3UY4ivnQS141",
  "key2": "2ZKHFwTQVgDFjeinpWsBoBWm1Y6otS6ARw281AtjKXJ2GLGtwaYid5Aek1SFVsro3hUQhbASczFh9axmUzDC7CM1",
  "key3": "3dcGFZde8XGSWX383BiF2BGVJXKcHZPXTrMxGv5zptFkvYbQ7vNewfH1hRpWxxZQ8FN5DLANzWktg56ZEmJr7diA",
  "key4": "2UNJjxB9x3iW5GPXiU4CGmT6XYfiRWrSEUFLE8LCS4FUu1kio4KiRRzoqdNdzLtb26bwS8hifEVbhQFcH4gXtAJU",
  "key5": "2kZHsuSyqtNLqPfXgAppD3JpbKg9GmvPhTwBY1FpmkAGPLNEiY3zsmmaTDLQF4r3hqehhh6xqU4bpj4qRZEMixiU",
  "key6": "2qApRjwLWNRs24YKXvMjZpeq5VUViA8dENv8NbeEWWQ2WmW8jfwUiJuGHjen4ZK4FSyFPuegPz12ePmyr8Zw4w7p",
  "key7": "64usDQnJe4vsCvZzXQzCYxxab6SSwkXRfdvnunEzMiZkUJ3Vxpa8c3LtQYy8JHJcY92j8zd6ove6WnFYZcMhWrGL",
  "key8": "37GxMkcCWe6aLoBXE5BJkKMuL62krYCgXptHUDKEzTspJTZvNPJo67WVZPU8vFNx2V4pqEqXHoPcZnaidPwe9YHe",
  "key9": "4RSRWjPLr6DADRPwjJdmm6r7xDy7udwaSc8uFEfcn6TTsNPkvMwG2Rp6MwecopJbRSbY5AFXmJ1xsNJjAYXcuHaJ",
  "key10": "2epNKhkeztufZKACEwnV7CzYTs9UbsVZ8UK2wwNR8JvwmGgYsgox5CpKU3j87ufnSLkgUDYb72RkiwzwYzwcE5dd",
  "key11": "46rebsFzVKXr9is6LTSHUrkGdXJ2ZGu6t7gk8WQZ1ZKoHzuNLweZDDNahC9Rteq2W2MBMEanzXMFJSdGVsuXY9iG",
  "key12": "2RjCzcnvisWYmP8sQrWjcW6yttRmLNimSXPadc55FDe8TnC2tYzt2aQ68FHMsphjn9jzTCdToCLAikCpMAZ24zFf",
  "key13": "5EKXj9x2Ne2Zc2nr3AtyxVeEPMop9zSs5sMQhDMjXNBcHct3hMKhT6JLfNWVYmPU32EaGpHK18dWzTGqC6k53m4Q",
  "key14": "2bjRqJtniuxXCYgzjDp7AwLzRv1SWDid65tQru5Ay2juTPnHjdnkgmp8Vw25epFiLqbZ5BukLUPTrJwuEPCrzLw7",
  "key15": "3DKwZKfr2nkD8ifthz4evu4RUyLS4tFtNYRWt6Bubnn2PTMUhNEScPNTa9t9xGMdv2dRuPyoYZtNuF8yYEWRFUtb",
  "key16": "5NHhgpExLkfUzeTL581LbXczco9wm3oWMYt7DTJwweaTH2GAyGU8puQDjSpdC1M5Ptth3r6s2ev8aNVkRcJrnFnG",
  "key17": "21p8Xwk5BzGPui5vMkttBpf1pECxvzn6W3N7n7fCSdYDmfY5iuQRrvbCABrAAnZidgr3CwQuYR1BvaNdjQvY71Wn",
  "key18": "3Thbbhyg7ywzUDb3zzkgepFVL26DQsUBFCwgGNGbrMAuBpjio8uuaveN5ZkJAnpkXnjAG1XWH1J2eBKWm8A5yACL",
  "key19": "4bbegp5KB7tFF3rsgkw7uzcNVTzEoYitRrq5JWsCe1bwG3iCA9X1Ku86DuNEKo9WpQPCDqwMZLBSeUjM3M3E1Ror",
  "key20": "2fiwfc6JXffNidhkviG8nA5WMoicV7yMXeN8NQHaG8Xb7awPRSE3QuS5pxaXfQyJKtt2jFw7zKJzgpgoeZG7BPPL",
  "key21": "3edi7cYPBzd4a8uAnABpmdSmyV2X3PvKVeTUR25FrV2JiR7q836SqktFWEVXwrVcfXS3Mt5xJMJykedPzDWHQ5Mc",
  "key22": "36skfQuaUMnPYkbF5uLGiMkxxiNGrkJRXneiM6KBZKVPGuU28AFYK2o3RnBa1ptQP6PkjPr1YDcsWFEBrCBXBKig",
  "key23": "3vrooQyfF11yuFTjzPh3k1hjPKxhvjFjtyV5R6RGWHRgzj5hmCEg6yrHrW5QVwGXoWF6GnUMG7VXARy9HvF9S6aV",
  "key24": "5jGs1cXThTospKdEuQD4jkASWgWWnCMoE515UpPH4MY45489vhCJEGte72fceN7b3YwzuppYW4ZdWMFxeHFdJX2N",
  "key25": "3wfrFMapFLLaJsqk2FAyKDySNC9kqCJKt4gHqL5GzDHbMSJSupqZQEVbGVxLS3ijH22zaQa3RLMUXwXV7foGiSwH",
  "key26": "2Jn7smL8mE14ryViRKCiWRx16Ss1evQGgjLiys1BCu5cyDpCoWknBo1RBerr4vWaYgYQV3YV4LnvMhReK1SX2cDB",
  "key27": "A66EiXSDM4dShs4DDgKCzXjdnGL56W2RKikRQYm1rYct7q69rPqNFaHxPKF4J83b98X51MuCNvZENQVYYHW67V1",
  "key28": "62y51zVqLEK2VVCVv1umBYRBisTm931VC1AUi8ytnh393XFNDFPB5iH5Yp8S6joRNRwDy8Pr9ECLm48KJ42Eiqw3",
  "key29": "36A3vz5Q9sPuXKxG5ajpcoJbN4zFVAL463qzPrRxAPGM9ggSDCmBtzr2XJxicj4WESino4GD3QCr6piMbKEVFUkQ",
  "key30": "5nVft9qdM2npnXLHLZBBYSE5xQZvvSby3GJvCvFqDRaHkEsVPqU9qRExCZpX2cfEpqVsz4n3Fn51TcASV7TQ2Ykk",
  "key31": "2Mq8A4iuYgnKy45TcoCNT7yD5TQe6shhzhW6Pw1hjnMmmjpaBYiDmoDcQ7tf7SWAs6aXH5292vJaqp2EpjtY449b",
  "key32": "2VbDXh4mibDqTmibu5FBjckSgJASfkZPNJft2fUgqqP8VVRoCn9Crun7PS3wRkfpbqWnXNHXLnwMUo3ytNDD3tUZ"
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

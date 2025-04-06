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
    "3QsbU4TymBXf1AQRPWe8EvczfZhGdkSFzY17h6LzAQhBz9dwb5N85PcXAdqNtzXrshmVQEpy9dTeBSxGYaKRXCdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DxiwqvF94Yg2b26er7tYZuu96Qq7sM6DTTpKpjwX2YVeJC94xP5uiYEgQvd8myP1KJuME6RuYj97g7pYzDgaUfR",
  "key1": "3hB6w5LgHiGSRVRbS8Fv9uLbibCd2J96pY5qzFH3jZL88rYsHKG8HzomV8WuEE14cHVFYjefrou3LwUi9bw1Qk3s",
  "key2": "3uHU8EKgupEnKuaMPVdfF7uAWCQBehjL1wcZ3seLNViTKkenxjjZLEToWtDckDbgSiH1iqNqWkHD8bo1GSCdkbiA",
  "key3": "3HnSDAn5F5HhJmEPNRyqyLQv6BzCjQ7AEvgx8MxKcNSAeAHCoKCi343sq2yBWpk4Pmo2FqtCM4Xn3ZANkJioaKAq",
  "key4": "4u6nq6Kgzr1nzgpZX7tSGRgVrMgEALEK6eDGvek6rW5ABgZ7z7n74ABwRZL6g5NfQZZe27xzAoMJJVFzz4vHMrQF",
  "key5": "2WbPSWRXtB1GcZpwzL1si31q1fv1ycvnRZXfoUEEZ4JQ8ktg2EikMcB7EgC5dvcdW5fX2jA9S42PTRmQAiTrhuMR",
  "key6": "2azo7CS5bcCtg4gakNnhJPbCgSRLwEjed4cBr9Yxa6qTjef7LTro6nBWRRRqEGcDHJVecTdH3uGEz82sgzAXVvSH",
  "key7": "4S4JzPj5DoUm4qVvLLjPdpTU9m1nzBy7pwrhv2A4ZupG2AwSE1DCRgU5g5gaQSPMmwMzDgfqujVjYcYXPzuAC72W",
  "key8": "4SoB2yaNSU8vJjd2d76WGY1EkgMfmTqpr7zo4Ld1DYmJLjzrdpuMDssVcQb92pJfbzaDpwvWkCFBtpNBJa5N7kvi",
  "key9": "YHVfpfCEfWD2udkEN83YWEaCKHr9iLoFHLAq18HjrDD4rJzTSKLMbypmS4abcGEGRZFw2Cer8tHtQnBAKjsGySL",
  "key10": "4KUXARZeznttE1ST7FPHmEDQEFLsgyPM6BgZMtvHRRLXRs5uNLEFgJTtKLP8kS1GrYn3Rqrtc96QgHveCnKV44pe",
  "key11": "41XwqMaZq1gYCkm8KZZysAfGHmV1pZoebAtJaT2ME9PFFn3tYST6cTqcnmr4hZkktk7hrawLWXJT7qvmPgoJEQMQ",
  "key12": "3t6x89j4cgHDMmov8YAfhZJUXmXweGSzSfW3Rz7b5fNgUL1DoELfRGeobwpLWpgt9XKCQFxhU4cXjvZE6oUfnywW",
  "key13": "5BM1jMZ8ssCMkmvAPzStM8BQjpNHf6bpYLju8W4U2Fz94cTkscAPiBkUhAefdJSt1iZPeJGZa3cxcmWZ2VRYHmpV",
  "key14": "G5VsNYwXMDVD7jx8goTiQQHEbuuRZUurZ6DnhCRH5NygnKo5Wqqo54eS3bq5JQCyh1JHpMeszUBDfg39VxRVbZS",
  "key15": "2v63nKKa669RTs17vgVmW1bEdMZZkWpSqkP4aycZxHwBsM5fivFpwtwjZ4ZRhFaC2VyHfyFPvdACLexywxr4zFoB",
  "key16": "2LbLb2HSMiBrZDX34RJM86Gs2bTJfNq1nFjML5beP4Ry4s8jrV7NCXgCe1PYUu4LqZmvSLLmgitocSRmWoVY82su",
  "key17": "5ZbmcgauLSRL4sXR1MEiPBKkv28RWCLhkdogEoKa7zyM3bzp7jt8SJE89TqD6rKwBfb2zB6aMKSFEBufZhaXJwZN",
  "key18": "2aAeedaTefuo5PAYg7BYTx2RiNGWpVcuStGG6MfyGT2n4Vd9ia4yEg6tDFbikQ4sMaTczRuyuLwGqrNrYZBU13rT",
  "key19": "46mAzFe3y5562UHz2hUzxCwZ4C5LUEjPj4bwe5FJNLjnzx4toVNenoXQKSeajuRLTyCyPP6gYPyRmpqeLkpD8uZM",
  "key20": "4RcKvo3GankkPXrLj8PhUv9FfyofGbWKknLmgVgPkrur7xato5EzWSn5SKaD5PZYd2UHPQpkQdmQCYfJwdNrsQEH",
  "key21": "WqETN2QDL2hRTQjdKEk5WpKALBwGML9d6Myvf7i98wq136d2iMxZM9CiaXZJ3eFykRHaL4UnB6425WU4ridn4q5",
  "key22": "LXiedoUccCrgkwYTKSXVcDhB94D8JfUhnAUZ6Q6RK3hc7yfuZstkr2F4372ZYkv4oxHwA9SpG9GGXubqWtmnJaF",
  "key23": "22vaE7Rw8vZDVdZK7o4VrWpAcwh5wtp2NVnYVzWp9NkGzVbH1APfEbXTy4bMqvsgF62tuKcLt2GGU723vzVwxFre",
  "key24": "2JoCandrck8zzXR6AmaeeKwMQCjuMp6ygugjZ7DkqrVmUfgSnf1cUWKm1kvvP1QhLtXunrxB61Yrss1qZAHJ5P7B",
  "key25": "4b1jveUWf2smxoUuPSduqtTrKR7ufLoeLGDcbvsajopnzWiBu8HCKcHo6ggEs8Qc1Y9cYaZiioJbb25UuFVWyS4a",
  "key26": "4F1jQQ37zBHZH987J7EvHBb6DyPEjdCxA1U6Vm9BiGbPN7mPeabyBBMnFcq7qzJhWcDYSryc1KyzcumtRdRDpeNM",
  "key27": "4aZRJGE5qkubb2d6Ad5uViJnS5oXe4rHF6kqKEKj7k1LsiEYMhpgDspcEzQMYzuHWi3YXCZQJbgPkxaXvwJqMsLU",
  "key28": "ccXMxZdh1bKJNDVpRNotwWfvHqNWRT1NK2ne8RkXMETCDJdaN3ZwmkoLVSwPwq9nir9zaUc2hM5rVuct3BGRdjX",
  "key29": "653g4LBHfpEnqfQXbkBCGgZnXG8LXtzVNDspHnU4bKWYfPWJ6ZfbtpVjGwmppePzPjs2yD2SfJkf4qPvmgWqbha5"
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

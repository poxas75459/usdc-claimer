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
    "3Cym4GVbx8gmYWATPMC9nZRwf9s3GKiL53gZ3my1vuxfRzcRNVDitudarnZbqwMVFYvVvkLrzeKbMRqQg8fuN8Gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tq7RQ8BVk2NMkmnCifLVJd3Lp4v5eGWPzQdXdWzhcz6WnyWvgyHFvbC9dJDfVQd3JmkQpCvkAUXHfgB86W33uX4",
  "key1": "3hpHnBbBY4VcCarnMiV6skCLFXcgsnJW8UzLWfYBRGLPih42Ej1aaurtzFqipphDGusT5ZjXZ5oxrQY1qmk1B8NX",
  "key2": "5QJq33PikzoE73bQfhKdyHHChwEVTh8urHzfisnCBtyAmZGvKm4KjQsH2bMTXsJJAZyAb3breZbBvCftmRVtJUVK",
  "key3": "5hgK6RqypnDwrT9rM6EuXoSq6icXirHNwgkUyD4SjUSAoWncq9d5nLZzrSGpJsq1hjjUTDyMW3Xgk6NE5ZbNGdsK",
  "key4": "4ScDQEiKbUFvLPYotkma1pPgpLdbvpwWkoPEArP3GbJnpModbe9NdzLYHVMrrXDmgV2m3moHPuAWKjWU9SffgzB7",
  "key5": "MrvNWG5p3JaoPcGciorjmNqu2kJ5u5XtZ7noDPT5yVvTE2LErjAv9wF4cYSHrVc1TsMHotqDUj6Ykmq6gavJAfA",
  "key6": "wNJrU6wYHti3NPFfSwoyiMwSNGDngwrwyWQUj8je9nxVTeXNDC8JB2tMtWrKg9ZQEo8UqNKW6CVNt5RDKYs6JyU",
  "key7": "4tY5SWcYtYLFNEQCNvrRgqjX2qYjGRDyWpt7kcM14FxnLnRfwQ8LAJhr5jguHyME2nybmuPxrtqBtUvt2fEBbfDi",
  "key8": "4EJ1u5iFXeHtz99fr7nwU3VpTyaudm1W8rKESyAcVZNVVyUDwKxtgdvTYE3nLyStxXiyQBnqxMNpuyKWNcHGTeaw",
  "key9": "LXbktpC9KPvmvTqfdRj7psutqibmjr3HuRDbkHjZhxt5qXyoh5zyZ3tCGoCFFexnaYMNgaFpqaCMB5pM1Huz1zu",
  "key10": "Q8a1SuLS84pcpwY7QNRiESUJQ7r6sTpV9bQmFe1tr9o8XnJorbdrxqP1cV1YwaeYmf2FBNQuE1AQd3pCEbKwgtm",
  "key11": "u5AsGWdQWk6CUibviMbcwMzyqRbKfRxcjm25ymk4kEcv7GWPB7SZGtmsXMYUkSFgvSWe7xcJKACRxztTjTrk8X9",
  "key12": "QX7ETVj9ReCzXuqsPCxVJuu61Q9Dzn8atVCzQxJqrVqW4hSwyxq23cX7QpBiZ4ikzAJHFBitr9DPBuSSxeMqhzm",
  "key13": "3szE9e1UU2D9i33sAp1vTvtPnWm82mNFZmG2AtLYrjH7vU4BU6jwHtrUPNXmFjETe2XhuzDkNYenpnYwujDEN58R",
  "key14": "25SbHsZ4ea5m76cHiz3yWE8xeDZgj6qBTvJgiaibv3dKgKU531P8Z5dV8Ff4nfSXkjgSezYwX2FZqev6yrhYsGsy",
  "key15": "2GiBxMg9KBvjbntf7G9YMwFNeP9DuyYCZZ7Q3J7F9ZhJUkWxyqaradnLGcBLQm5ADR5LPUAmC7o7r1oJKCdDrVWq",
  "key16": "Q4HcYGte6MbPg9a9pKf7ACtN5K4JMmk3jUDYmY1d1zHDcAqmJdqurKPGkuGjSjWLZyo3Bjp9UeVb4vWAWV711Bk",
  "key17": "2xNCDhSbXTpc4eyPfR15gH8HFV5nbQpRX3ssHDP6fqBvNAYm3LGGop9FCyciSALVUrfhGE1Qu7K8ADSTibwcxp7T",
  "key18": "43AuF9PdrwkrWSsXa2mTYr8Vxkd5CShziTpyN29oKRFT1gazrSH46GMuLG49Xg8tyCMWwyaFZ5ZMbLWeTFQwE6U8",
  "key19": "3hXXohDd7cKELKFb5U6nzTWAwC2gNs3urmRVukThMiaoXniYEob5NkRBNB7bEYgq1yRBSVqp6PaBxd3XvvEKSwu8",
  "key20": "4QzEeUm5tc37XPkHDD34LWBf7b5ckNnHPadUYRTkd4H8e4Pq9DKhguhoGRDs6WyotYdhnsLMrj4WH9Rhojs8D2w4",
  "key21": "7XxyEgnABCLaLdi5mY2yzbqVZCFfix5LZGU4XGejnjcERLxGwk5cJUvtmPdGHTp1zXnXDQ7zySWviD9eRes9eUA",
  "key22": "5RaGJZ2WvSegmRthBUptTMrDQcgfTNGGpbNCp5KcW6ZULsW8B8mu6XqmrXXasgbFi5VMeBkYcwLwTDiNXBFF7ZgW",
  "key23": "5CSrg2ee8uQz5mBJtGqmRZ2tAkSnFhiBKsMr27vhpXeoBJ233vXmJYSxEVCU4Vh248E5dJ5fimKcax1jTuNYNhZf",
  "key24": "2NcP59RXN8fLdqpMxEw92iacre1Fpkgfe21X5EjsYtEVeVVA8SuRHc3Sphk4qXc8iKeXA8zWbrvcWKX9c9tEkFCn",
  "key25": "5ZDwPRuPtbKVXdRdS4vACCe7KFdHPb1MG3WJj3FzPcicqpWM1KAC1tDsK8bb3xy7ihifTaajeRXRVU3YDRDJ1bTG",
  "key26": "63THcCN6hiC7FtUXL9oXizGt3AmeCQX2dLv6h79w3rMcmsscgvKiwbZBhnXEowmAuj1owELHYWmGRGjKu9wA8pbg",
  "key27": "3QfwwuGB2P8PfhhjChiNRzCoyRqeeUzq9WuB9bg31NAhJVZoU8rByTgVVycGCb2g3dkurrDz49SBCYmZL4AN5aR4",
  "key28": "4ZvQCzZ9wKKLvBfXDCwtdqxpZwSeWsS2RgDqM61v7Zi2HPMqgj1MXzUxndmYg2j6d19QTi6sD4izxyxsNHMupWNV",
  "key29": "4ooYn2eh9zbNGWiccCrBnN4qnUY8BrcHQG71UGBUfnjJkntzg3yMnvxV7zBYRcA2kYEQU2KnLQWCwJHk5waURCr6",
  "key30": "2hp5JE4qQTJPTS9rzmU5YpwpVdUHyQpBkYELgoeCa7Gm6pVWam7oztdP81iQ66Cc24vAiXBvVWQgkwxcX27QMzu1",
  "key31": "5fKUonQQ8caAQZjTjQctV24AgsM3uoASvUBXCneZMJhAeEXPmwnzkFeEniqZ8nKKwUWe9QVrXf8rvq8pqxKFZjmp",
  "key32": "DrYnSKpMTiDuhg27G9bLVDVWfztrrAJygd261Jn5rmZzKpRevhd29MWhKXc35GYkF5mfUovCEbN3tQdtgAQLU8S",
  "key33": "463nzgk1F7wSSH9BQ6TN99myKL4449KAccfhefsn6Z4toytrH8DK1HC32RtmXJbQKiEksHeK3TibmB3uVhYsEqdy",
  "key34": "7ZBJsnsouYouH19TDWkjBzG4anabDhx7mD7PFYnWuASNqT43TZqrqWjHDugVksHRbzmN6gs93tWnPREaUKu6HSE",
  "key35": "51pJ26aNpBiLv9tBbjLv7VP4FSGYktGrVpN8vNuTww2roGWqFDriuevBLM7ATxuWJ2Ufb9U52wZNRT4UHzyJFfS1",
  "key36": "kt4XsaLJHDx8wLWybVgoppDZQfvRWhvqMG6j8zzxUeaYK31k3VTxGGDPJX2HD6MVxXtff7rR9Hq5Kena3Ukwyas",
  "key37": "vvVNHtAfRtA4MRSR8SWstAeUcRCbKCwCxDsSx18Q9j8Q3waCsi8kvpturGXCJVQNvn4cwANnfRy1GkL6gZQm2nL",
  "key38": "2R4VQg92M4HNsmzWBgno8gTu7rmLA9Gw7GgjMhMF5QmMkZ8kuHKnYNBz2CxtJnfsfAKSQiFj9ZmnJESNMe9ia26w",
  "key39": "5zV7C2vJNQXBJtokbZNrBpuqHd8v27EC9WXeQL9FvbzTLKqciGpYoR3sF7x7KPKq7W9ihMYjJu8nArQzGmH5TDr5",
  "key40": "62SQaT5nixQyDkwwYNCEhhw1Ke38mpuRTRhqs29FvXCoJBrvgTssAX3REdgBkTDi6kV4stnbpYuchhmPdUvVsb4D",
  "key41": "3jVvDnRBdgLN2C2wy7HogXANHvso1TigttweroTHgJ23fVU6NzKrxWsKwM3rN5UiZHeWDNeN9f4CxSkw1wZEsVXT"
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

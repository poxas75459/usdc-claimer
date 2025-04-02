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
    "2FY6GsBoy8cgBxPvs3gCU9RZJ33HYEsyKkHEWnYgYyBESydrGZFLjmvsBvTRUUkgiBaCTMk6QPxF9q2hBWcMhsrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KjqcHjVDzqAEb5FcNT7NUhY8WPndP76PQjKSHdsFx4dbP1ptHCftjMLE5KL2JyGJffwHin9cRUaVSmw1JwcCY5",
  "key1": "3Wxy7FxHP2pzPiT6idEPVWWz6H9MjLfFre2b1TsmKkLqXMn8Ct68GpDuwR1tzrBnityBSNtcv4rGNfsjJY83zZSt",
  "key2": "2t19MccL6m4jcncdE6g9ygJLUnaFcdtztMLtPZjFejMceUbr1wWKmJEUhrrcnsfreSWmHRViq6f5mMbjuwzAGaFn",
  "key3": "66TqmzeNZbhSwCXZVaCsYEFxqc8MRfPUhRPqGeVRktbQC4RvgDTc32kBYht2U4nqXqAadgZgV2xcedT555LjA9Cq",
  "key4": "24MZFJnTkeFJnpaC9Lx1G6NcRA5SJxfWps87S2ZSjmCaJa2EiQSvUPB2bvY7Mu761KKfPgT34uYsdcdV3gvzv6Vd",
  "key5": "2bzSjTXS4xoewtxnSMzNQqAe1xZAiEEkitJXQmjED5fDk4LxzsfzG5B1p8zGn18yfVqXsiJadmf8NBEdkacnUvwi",
  "key6": "43LBi4uwEuYgQhxkbjgBivNGN6P3nTWGyY7VK5QuGS2LAMsaUaWeyhYkZMHZZ8ayMByDvbZFBE6wLuM9NtdCQKvc",
  "key7": "5CkQQmS8Ju6cVWtoanSFX2CqoNqrst26oy9cXFjyn5Smnkt8wcuGNrn2JMyqA8n2TioUDjb56CguDTuob8FQhrFm",
  "key8": "4dT9VrzN9chPWkB37bQqmcAXbno6nzQu5VpweqE6DYwKxtRxGKp3HurVSgmuXsvvEC33pFasiC9uVHrNGnGjwKhx",
  "key9": "28K7E61dKg7KG2GTNSmZeebscNsGgSDA7xdDKQHm1Vr8NWzdLep8DWHYSdx3e1Di7BAWZh35giZhgMBmcyNRVMhR",
  "key10": "5A4ducMVSs87P32V2ECLGYwpAMzjsGt2XraaX1bTADEGEsvZJWFs4Tm3Ggaqy3dWTTLfinrJRrDvmDU8LVtomHKQ",
  "key11": "3AWfWeR3chLUDMjgdFb9sjUABQ4Q6YVJWQmzA3SoPpz6iuAQ9FCJ35oPx6tetNEmF9qBqM3Vh5tKCntmLLZsEKpd",
  "key12": "aqM6RWb2wTY2tMGqSGLTaxbp8AKDAudao4t4irCfLiAPxbSPKmjUHWtX2Hqbo6zFGvgrPdYJh1s866WmpBXu8Fg",
  "key13": "5XnirZwFGobbJYemi1K4R2EDWdQJcTmt44bB4QMtp378nxLTK1UUcvqqf5Sk4rdRMom5c7BJ5E6ZvB6mxxzN17yb",
  "key14": "2aUHCBBB1UDa2b2GQkmAsxE5JpBHkmnKSgsp8eFY9a4a7idv2wveSqkD3JP4jzcBySHTfpYzYpmHJBNYCceR5uYA",
  "key15": "4m1DYJ1AFYdFRkFHbmzJRMYySYeevo6gwF1HbR8sEr3vo4rh5K8zHx1qafr11D7WZtZLp3Esu6drTacDrVs6KPaN",
  "key16": "SQ1tria36hdCSQ8zMREma3PDweCAMvNVVmPeyN7YEpybBqhPyk8iSemN6N3duArbAEgddUr6wADmP79XWdadTFD",
  "key17": "2hRkuUsFiPP57pcYHrgysURJqnZ5ML7L1sZomFE7AG8yCnrmt9RMJFhQzhNYFocUXjCzuvm2VZZ4Hjz9kzTxdfgN",
  "key18": "MQR2Q9jsoQNBFsNeLgQQ9MxikJ198NhNBDvYWJzVe2DR8HEuzDZekjU3nvDAMak5Us9KhUBFduUKd5LN5PgS6tB",
  "key19": "4g54oa23bCJJNJpEHig8yhYg9VkdkKLxM5MW55EnJy1DZ7JrjtSvYjEBUBujV5soPUaQsowZdJxmiwVbS1R7ptqn",
  "key20": "4XmiTkKzSfcNGHxd3H2Sp7hd52b2VLkS1hbs2K6ZgypuVspo3cbRWDpFTK2BfGVY4uvp8yYnqWtJCztLYyJfPbqv",
  "key21": "4mBRub3rLKMBQKfr8uYyTe65gb7BehV36UXk4eduJcch3SWQnueHmnqvVVZm6kRczp3Qjgeac9hQoa42H6CkALa",
  "key22": "4N5SHYgVzyPp7JREE12awCB4ekQTpPGm68LUwWnTYR8M29qk4QJuD3MvaWwr1UuufhGP8dhMqhWdLQD8XXQQqmup",
  "key23": "5dR9f2KRDyoJXPwkGqayjxTCmtemEKLXVomfNro58sWDy1nsSTWSiJt6VZ9w4P2yarKz3vJZad364qCELAN9j2ys",
  "key24": "2Mc5wQ2XZv33Ytf5tjhvZgedk4p94JA2LHSZDHWVf1KqcpDq2aGKJY21vuwyZHWM8c9kEupDrWajnmmvX8aRMXr6",
  "key25": "2eDQ2adDmSsacY65b7S4XeXNzhr1aYe6mg9Dz1xnSFZxH7fNtm7wNQp4YPSy4xJACuEHYmC6ExJnuJjXx9r7SkaJ",
  "key26": "4MdooXHRnB8iVhGcDb6A1pfESyqo1Bj1wWGfYL1fgmzqG8r8bEwAKaoG3GFoonmnSAURCvbpXcr9NwqaPsw6sr3Z",
  "key27": "39jo85hY9TWfN63X6TKn7BTZ1b3UpfMzh7Fmv8szygzchGEpX1bnhoNxhwu9mG4oY9aqxY7zsbXkVSWJ4cEqNUTC",
  "key28": "BijPnAfbYmQAC9EQHBNVKfinzMM6DbAUqq9Qu4gQUBbMNbjtKxov3wng2iwBbW5K6cerU7Ddcz4SUj2krLoVggN",
  "key29": "VktXiDRzqDcfxeb3hwjAqbexJzdR4KNCrVWb5Wzk3V26B8SctVryuhSq3gQd1oAuq3RunDwo6uzgNXwAziC1Z6M",
  "key30": "2TAtxLsTrL4Mxh4gg1H9LPwAqoTCJ8uYTnabxTRmcTL2hbe5anyqomBTT6KSpyqR7JxZNp1RCbMuiBkMW5zucs3e",
  "key31": "5YveRvqg53Cb324TY6u3bZqW5YHHza7bfV8M9LkHrNE29ZYJV34PowCKmArbCa78ciNGgzX7d72B4SbC8srdLw4a",
  "key32": "4UTcDd3XQd3m3fjBXLfeE3LmjrXh2eXjDPAk4gn7zm4UrDowcDZ9vxn3SebjcLdNak8N7mb3wjqDdsXfqCiKSryW",
  "key33": "4wVDaYJcp5hofXo71ciu5dh4dvZRjMutH4U1K4soXdDZMVGRHpUo31bpRmgmUd3jjdND5SQTwwDuQ3tUiU5q7JDz",
  "key34": "FpTRoLGkPiJtYEf7c8JkVN8aHwmNgPQXyHqwabgLzzaYAfehUm4SReNHduncUZHeod6ALdaxPYT8sq1BeMEV8nf",
  "key35": "4gWvAYQ6iJxJQ3nBQVPiq5nyXg1L4kczAKrwFexY8oTivoe2VRubnYcxa388dQidEpoJk8qkvptEx7hH5iQ4zyiX",
  "key36": "NpU8pmK7YXuSnKN6nejjfxMhM5oZMaa7Tdqf4cfq2APkJjho5dBE3jPdzsfhK64U227Btedgx3cVgUDcEiyC8oi",
  "key37": "5XwGfrDoN3Bn8Dvb6BCXVT6cM1aDu1bLFZPwxsH9fMy6PszbidmFazwAwZnwBb4ZcUaZauEx4juB1ZxLTSdEDZBN",
  "key38": "37LDPyZJhdyrVX12b6Md5xvuGDB9vVdyQEwaAtH1WC5tNmYcZDhAyEyGzPoDFs4XS6ufudkbc9DsjkBVQ9QmFVaF",
  "key39": "pdkotEdh54CkYo4yNWiE16c67N492ZCUZnCsJ26YKw3iKHWRxopgFvmh2wjJU5dvBEpGC6E3jEGGnBHWsfbSQ28",
  "key40": "3fgdLkryKwmwq4B8zaka9yGFTibejYXxDxDqr1seNgteZG6L6qYcjg45N5K4bT26qHHssnnfLGASi6CXvNMhnsLA",
  "key41": "DusJUgv5KCbee51gaTXEnuVVf3Q4Gted2d2i2Z7tfV2aeA65gCHMm14Dp1XYJ5mGbGpxHVyRdQbvHkMVsyveamg",
  "key42": "5cvjrXVNLx3TJ4mRed82P3JWjkNYBSYzu8cc8hSFTMyzs49jEtu6AMkEogbU1pK4bvL99aKafBjHvnXGNHiXZ1cG"
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

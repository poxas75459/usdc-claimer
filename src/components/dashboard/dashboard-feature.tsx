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
    "3mt3EEfZoe3HosnzRLEtqP7DAgvxsSop6AZcncLZSmWrbxFgNnRhj8Wv7MsG8P4ZftbxaKxUdVmmwnVhxDjBBVYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59EAaq74SKVFewq7ewxvDEfpVFDpJxExnAK4vRyRRcCjQV578zs4VxctN81taQNnQB5TxmEfdk7tB5meZWX3npgX",
  "key1": "BrcVcQZe2Z6gFgt9X1HAvaAQNWqbQbQzWCYkbkDBUhJT5d1U8c1muHZ9tMkZnD1LDwJmVmo3vFBqaFD6UjCqUQQ",
  "key2": "3k62bxhcMSHuNKdX6ZBcM5CvR4P3CLRbM6WCDEDanCSAHmBDeErDLuTz1DZq9WoJWpPPiC2S7pbp4fLhth7C4KGN",
  "key3": "3xTFm6LivSNtRmWyGPFW2TYfFMNMaGWRDrW5KHFPoJfjcX1wHcwugf5sPpBVEPQ6qS9zaHSw3QbtGXVbfdcTrmJ6",
  "key4": "2bALdXdvDbwGk4e8e41K9gUzCEZpCpLESA9J5MfYWGPL3fNGep4xPvbXA281vn3dZkLhzWmtDXLJeFSpAkERCzfn",
  "key5": "5VjMvvge12aVQkYs9x2pvB5isyGq4J9dk1g2KjS5YMkbVzpdvqAWg43qLsT3gtLqvhbagKkz8Lko13KutizTqBUA",
  "key6": "2KnPd67rYcXqP4k1PFz4kbXjgQg1obGhBfQMC5rp2B7c3mz2VCTyF86UjT9pjZgLxXpcoNVgaTRZKvLfDYFTtGGV",
  "key7": "qxzXx5FTbVGp8LMZEd7QQB2RsnBHYLaqzynF3ZYsMNqC88TBrEpZ7hF2WYtfUEn54FKNk9DmZixDmS2bFbYWy2e",
  "key8": "25nZ3R2nEy8htJijezs1XvQ3PZ263b9WPZbAK3CqavZowrSm6DRMCoBkABqoJVDKEep5RW6fWrTSvmBTEEAnFVfW",
  "key9": "5vPjLTTa7rfmekfHxxXJBvQTYYDDVQpfXDAzSNhrW9uQFCQKHkVSd2BXuNDiekSoXu1R5vcKJwuKKnmDZq7X6scD",
  "key10": "4kCpiwvTbK6mQ65EbvvhGYGZhyugmUaTqd4xGVp55h1xDmeEAeinJgEXKiSC6fj9czrVT3SJFFx2UYB6ccPvvQu4",
  "key11": "2UA4Z5xYjrW5pjDa1Mt6JBtt8hYJBrHEizm87ey1iQhMTfVs3uhD4k4xTpjA4ZMBrGs342TgS5YbJC8nboqEBEkS",
  "key12": "4D7fPhn4FQAGHiDEYWZANZg8tru9jukWrNfB1FGdYc7ZEpEXcBLepeNtNnPU5M8gmDUXH9fpsStmGMbC8LAsPcWX",
  "key13": "FADQNU325wqYp6oSHLCqwLvGqgrSPJQiv8TXjmSPyy3FBtyaVkGtxTSBqMfquj5sdJmaSmjfZ7KC3fvbLbqRPMz",
  "key14": "4pAHSLkpZ3WQsAfMtgjWjmtGnLfLs6Mj54CdQsnvHBc7Dxj92n6gtgaASAgmfVS6QghfbSbTBi8p7zoV6gtWsWPv",
  "key15": "5y7WNrM5KEqQaqtmCRxEtmNCGydVb9PJwwh5HNuyQA1y9Xe2amPLnCPFYhiw6UM5nNi6Scjo1GM7MfLpMQQUWv81",
  "key16": "3tx1BUG1JEwJEVXza7PkrsEnULFcs9vr26iFQ5JSXg4Ji8NMesG1KXRgmKyehG5TRgzSx5cvUxgpxiNKZNHCKywN",
  "key17": "pxncLgsbhvvP6xVRe7MYY7CebqDgFtAeY5GQRD6dPxq3toLfwjeAsoSZM5spKB3xfZrLF3QuySRhxaFdaj6hF1N",
  "key18": "yHjq7ginD2iwzMKnmyscagsuAr23kba5eu48WHgSWhtinR67mdb9brBioy63j9eesJvm9aPdwdyCoPC9QLccTe1",
  "key19": "3bx8AFmqeuT2PAAxKqBM8W1mZpMgoQ9EzEU1k51pPxcUa4wEDXr5nbjRTFwceRKARqbm7EZYnkX5sygtbeVbFU3e",
  "key20": "3dJc9DLaB3HTFnMi6pMT4jCcyRGaakuFeKAMkPGCXMKA8Ug4XZD97Y82QDy35iKo3jAe9LPXDpvKq8SSeMzLCWxx",
  "key21": "Uc6haoCtvM8x6rj1yAgoH7MJY1ntv88MQ2yaLrNgEZ7iNr3u914rEwjrm8RziDgVeWEc1M7u2frcEuYo2Ad4WLi",
  "key22": "6SFjV26pqz8FaAAMtC2QZ955UPfEBfy5XJJDniRRCsoxfh23W8ecLfAE8LFpyzYcjXrszRK8MJXpwFoJptZWGSE",
  "key23": "2R3ae26z5QnC53rurYfNKnuGtFRFwKtddPs74Jq6axsZPCqV71ee6ov4q8ya6nqb7BfqDS9LmiKPe2FpWEyFjY4u",
  "key24": "dHVM1uMdJyLCJxDSRdahGdu9rHZXeanv2gPKfiJqvQd14DpfFP3rYVYj8SqbtMJ2jrUVWR641AnY8Er6DhZrMK3",
  "key25": "3ZZq7YieC2LjQMT2cPYWQyfy5aM6BSU6kTLzG7yS5jwPSUttyk6TPMgbLWxtYGq7pVRwXb2u6M4RhPXdqwDUuCpU",
  "key26": "5eC6ek89xEjV9zM6dZQqFkafhYUAiwCpFh6X2XNYRUdRjvA7PMX5e27C5wywDMtpjgHA2FPFJ6tVoSZKRX7dCd3z",
  "key27": "5ZhuuNzhPbfqdNt53iZNY724tBqiRB3w1yrSgSK1GmKSV4F6UJG5uBZR1inZVUX7zX8DY9FLZHucpwbQvZShPXsc",
  "key28": "4tL7bRZwnrVcchG8EzP6Uf2NkpfEqtKyaawHvdY7H6gXZshsE4KHihS39u9EEQ5CBUUnpbvchybyc2JXBUbk6ti9",
  "key29": "GebyRUFXMS2x8H3kHwQzhTYV9LgbFvDYbtTbWsqaAGAECStiQT69qrzN5brpQXvkKRGewykSHnBiZbxwwvsPubX",
  "key30": "3R1xVS7dPTiB9kKSu7qrCQTUmLYe1YztCu2azXftBjPFumvL9pnHvZWP7bWj8vFveZz9NKjuZpCTK2WRJHJ9uCQM",
  "key31": "2oDtpx6ZbF9VZWvgXLaf71eFYvmTrfbeYVxSTNgPoEErfEUN14yhcT53hbkVKaRaztcNbuqK9oN27pfZiaukZDSm",
  "key32": "T8dL9tod4sB6ZXVHYZymN1V7z4YnQJCwbhkseRxzVpAaciu8Xy88tECSwqVCasPigEJPogVD4vLNY2v1aUZxjrj",
  "key33": "4KKQrdrJNemtUe23tgyPVB4yccdB8SdHzoGAEJXq1NCUELzAuawVcsFuzngfa46VTeS8gG7McV3itACfGNbnN1sN",
  "key34": "3LrGj8PtRRj66KtZKr9vtWXg2rb6jAgHDSLFsrrCs3cfcEx5rf3Rg2hsPBQoSyQagXJoyQd2rMRoennqZKPtAtTB",
  "key35": "3tRBCc7eeVsq4hxmLK1iYAqRBAB677tACpynTTpXCHjNTWdvk9AFGwcynVfHrsrohSbQUi36AdnZVZt1px6CEBxi",
  "key36": "5noDmxSPXy8pPAJvdwebvTzKJDY5M1yNfiCBS5iwGUyWYjAGESRdqjzuDPgjBqPjGoKXaMoLjPXgx92LhLESYtof",
  "key37": "5dP1y4kPZGUX6Kuih4GbqHRfWMv2onSmVWn6VYhUc472PSh6pGedkwhx4kJ9Gx2ALdwfcHFENeTdovXME1VcPcN2",
  "key38": "2xnvanPqY64KzBrTghKX5TC91bqKqNATEr7UonVooQMGtd58p4uwcM8anAgoZGy2SajqpS8pfN9DL6oZrYtADfZD",
  "key39": "36u4ciMPZh3wcb9aUHVXbzKYQoehGUtJVug87mjzzKc4AhrcWorJYpzD1nqQ4Q1pe9mivQuFuwSMhKV3h44fFoCc",
  "key40": "Xi7RD8o1Z27LrLjbuawn7Ty3X6jPRLwoVSDC2G4X4VLe5z8gnkQ5MJBRGmEsSV1cH4q3KSQCZx1uRQQYio6bsoV",
  "key41": "2Q1nDMxvJyUU4ybGMqyWJaT8qWqmMv9J7UCA3kg4B3h9jTGvTSkcEVqaDoeEJiMeMftMbKF7SRnkjgLJKAh2XjzL",
  "key42": "3vBBa5YymDhfBJr1vyDWnBeZBTAGXjPEq68Bf8in29Lgn9dLi5PfMuk1N9w6M7BwnrhVvKtSEUNrGr9dPf4jT2N4",
  "key43": "3wRe8vzL9ZsuZbaacKD4JeP5vwbpuyKq3b3PE2y7jfQTzznpcYDFyJ7Gj7aa7vRYTieYieZs7fYGMJZSzAffUEtQ",
  "key44": "4Bh94x3vnJWsMDQ1HpmjqtXMcMQ34vrE4M9nkmLi8fSFYnAff6sN2LJZB94SP9Vn7zkuouuaRgJ1DwdWshdBPLoV",
  "key45": "juKMfmYhqB4jcDR7hAL1qjzUCcYWziEU7cC8UDdMgbgmeg8DtmJRYKUxgpmH5VZxsfMV68YXoekGenBFRN1JTfE",
  "key46": "3tUNjvpr9xNW7W7wT393BD3qRe7FA5nfav1Ese7FxXhFm2DURUttCmVzmSENLi9zvGogV4UNgpoRYL76sLbw8wyX",
  "key47": "3PuFym9U94yTUoWntTZUde86hXTY1dhjxAKZcK6GXFdF3wYUKd5uNEyMnMQc9A9Emw7FsENRx9fvuMt6Smj1mLhA",
  "key48": "3g5igRqawsGStBA2gHnza7UgW5AS3ENHdzzMAMSmjjS19cgBh5R1Z8KqGEcocwragdEzuAp2y7M8UGLQ9YFwyNZ5",
  "key49": "3yQsg6tq71dkjDZFsUJqL2PQCXYMaxefuyVkMsuKarRjzF3Mu2CgYJT8PpYxCixFgCkGHL4zt8j5doKq8TYYaWDu"
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

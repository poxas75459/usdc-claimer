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
    "4UkBDRf6zb7Y4pRSKcNSHPUHEKfrNCwfAg2XTXK117rgVcmVjiqmvJPKW4wnQV2zHH3L37istWa8Wkasd4RbPprV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3QZqg5wW7fKkLwhE7c21vBqmnSiEqfeYDbZRpTRKrHmsH8gfLajpwogHEk9i6Nxv46p9z6pTjV7ueFj4Z3YkBM",
  "key1": "3LoSZPpjxsvz2gC4LjUWZXY8gBQzVSHGNsHgnw6LDWRUE12ZMHRjeN3ZEQX3JVESw4vPkKnPYpuZPt9Kj4oezbJW",
  "key2": "fH3dDXGvL6Ekdac9zY4MradJGndJL6xo7XTR6AAi1n8tKbbETghcNPNafCyFJ56neroxfYYHUg1s6kg6faysH4g",
  "key3": "4ETf7zA8aMgW1zEhJRymgKNxZjzjjBLT5JVoq9Cu81pafBxwSyP7xPEsgCCgRHm2xubkrF2d5cDEAKeRBnz4t9pU",
  "key4": "3Vbta9V4gemDk3patBgA9UpDXDV3UhYkr8MUkjFVy9McNJ94iHg5QBUD6Ci5iZBnnPk7Cspudg8qCLsoY4HpSJ9M",
  "key5": "4pE1aMg2nnNQkUMfoQ8TeKqjd7842LQT1cjA3a2HQDY6Hs1mi4V8og42WEtPTnGJJM4cRXXrgezRoYnELUFeJT87",
  "key6": "42sWfngG924riqUxNtVRTppUmH2FqFQS3HQYvw4FzynXRXxre46B1LKk28bpXh7qKqasKXMkmvjgNKsXDRxKWGdT",
  "key7": "2NshnvfTCsH5KmCHBcXpgT3Tt8xkgLQ6LXY9NuswFpmGW3idfbbv1EEghHdXoRsupN5s6mw7QUxn1Ca9zmzyQ4oj",
  "key8": "4rw3hqn3DF2VqHZe3a497o8kyXZ89uLA4ggpCTt6Ys6CNUU9R5gAKWKrb8JTW7ZbRhVaxScpXQa52K7XbbJMRJWR",
  "key9": "2seT7srgZidgiPYWatxd4aFgicRfPGUsQ5iGYNQdedBUg9A3aaYbgduKTeHhQfbGZ3S2injNpz8pNBpbGt9knuod",
  "key10": "67MhEeE5AJb2iEF5bHtKbXB435aMXCDz8APnogdasUKLJPWnwKUgzY7m3fxmwrRXEJwRmQosr2Hfk2WfUjBLG3eD",
  "key11": "3fJFx14AvVuyfY7btMKqqZ9vci5b1JVfHwRQaNBNtPrMwFdtgAu2A6pY1mqw5VFmKtXr6sX1uDCYX1p7ViEPh5HX",
  "key12": "4ia7Ko41Wv7PYgZvg2CrfpPeciRpjMEmGhWDuLRpzJWXbzTiFMjK3ncDnD2rbrJCDav4vfXQEPmkEPiudBJ4jkSp",
  "key13": "zkyqSV2PLZHA59grhcGSHc31HbiU76pEZZAyFBxAuniE1WAXfro8ns2g8ndMKwqJd5Cvz7QE93X1DJ2rYFdrwjM",
  "key14": "47n5en1EMqubBuYUgxzkALJGzM6A6AeyrUrBsvwF4zVci4PFy9itbdRDcfR4W4QD88vfugPFuyzHZ42peZr95uCY",
  "key15": "4VqEyAZCSWCS5U4VjZAaycDr9N2HYQz2WyR4K6rkJ1PXjkBSkAXc7UTL62GheF1icSGweejstKje1QuqCdMuLeqz",
  "key16": "4Hc56zXB46aoM54juEatsGz2LVRkMSQ31czo8KVofX7qxq8frwnqZTwzF6XXzGbFxDbVsHpEsqLQSGegRikmDC3R",
  "key17": "5o4aPPvUqmumkTFjr3ab2Au4eHb1QGj9fpRv5jf9gqNtssswaoShTzE8gx3y9B4zNtQzAEkqAegK73SNp6E1JDJS",
  "key18": "664HBk4nBkLNm2dRQVtvevKwe41cJoKcG8jrMMCfDFJXURWuUwSK23BKUJ9cztQQ9YffdAMyALU59ZpdEUQLpssZ",
  "key19": "5iCNd7J8b81VJkCTh3zbMKUMnJB1ymL9QLdhqEMszmQNP2U5EprHXQAm6CCijV1CJG5Tj1tfNTvidgSXs9bLZdqV",
  "key20": "26F9nx73K2AVrjSZiDhVNw4cdNL1uSFZrVBveSweLe1kHoBWBgewkUHN4ZELrsd6sQHhG2EdDEvk4psNNzWj6nsq",
  "key21": "2ufadZgbzd2FE835uN3PB2hkkRkV9tU3UvZNovy3Y4UzG7a4ayV5Bsvxjapj3pCSM6rsVpsPLhrV5gj9ffy8bF2c",
  "key22": "4JyT1WCtKFoSZ6Cdm8m3nSAMygBhBq5DJipqmFRfsuBfwieAfcGs2NjEfMrKkSg8VgBpHXZHpfzCagBjaEibJHnv",
  "key23": "3ZG1Su246enF3yMYKw1GVzbjgrxLMPB5YRpB563HgTPUj9KfowQVDCmP7vyDWLZtLBcWPsk4ApiaufYQkAb9wzw9",
  "key24": "ANcjQ4Ht2PJG9iwfyTUxerWatU1rgwn2b22qym57KjNafMHR1hAc7XXNTbqsqdvoyzRpH9RzK4ZU9MGHe2YE7sJ",
  "key25": "2L2ryKyt9ef4MrgmE9kchnLEqdGThhqn7yojdJVXgXXUez93DJHBEH5MizhuygcuKaLwCJSYaWz88QKgvEvaDgBa",
  "key26": "44Jy3mwP5gbNtvfhVUbNkjjHfXxwwukyJU6BzWbHd9jahMaedwL1C7CaLaGCML1NmDTBXZp8cHZ8QENc9EEQoH9c",
  "key27": "3u8efNYUHiACUxP7hLXZKttX5bHW1JvNJnn1TgGNUGtgoWWAuRPPwfiAQiZqfUbWGunwXekWyavMtEhaSR4ku6xW",
  "key28": "2kXZWJX9SuuvKzgq31mv6vohPC3iE5ixaquG7AfckBaWmmdiPwAabcgfVdCsaAyULzL9VRnDkbfSpKA7SXoLY7Er",
  "key29": "3hVZ1sBQPpZcZAv6xVzCN2qwKhTBEyz9SVVpCDhWA8aps9tiwcwCdt27zqkkMZrTJzCak4PpMW9ehoYdcd56x57y",
  "key30": "3F2jtxfuxyyKN3mhKoCD7qfevMgog1rJErz32TZjYoHJfbiSc4PXZMA74TB2FC5hfN7M8BMHZ46HCFvAhF2vmk4J",
  "key31": "3zRGcmk85iRdjyD1nKRoD2Y4wtU6xGyEY5VQes6HWUpvpunSpphW4BBSUYBSLk6Y4QSFyk7XJPM1iCBvXrDtNErP",
  "key32": "55tdTe92HZWu4dJn77WaiftD8ViC6btnCN5PHwkBWk6HwizR6KmXQPaXHfThPLuoYKkebe3KX6ga84tXP2UfJ3em",
  "key33": "cbvV1qeuLoNvFunPUsy3wbQhx7vKRgaHkoihYNwnXsjDoJibJ32SmrdiAi8ryMDQyEyrwLMoTAwJkh1YfJg6UkQ",
  "key34": "HYWas8gkNm18yJnvvYFcGRtXCbNgWtgnbJt9jAfpRSiuybxorZBvbZFZp3QgYKzb2XsEhP61RWML54XydhzaNto",
  "key35": "4d76ycQrezgeBVxxmTsugSANV5iMYR7b5d9T4HyyENjxzZQN7Ta8nBd2vUZ9gVsVCBJxzSj9EtCMfNjQEMYBYHMG",
  "key36": "8a5t1Fb9TGYkeTPtbtgB4iMNtDGggMdtQu2FJSpRKC43ZhtpQaTco4t8yxqa8YTdb5rjMgGo9cmQpMtG3WQ39Yz",
  "key37": "3ES6qDXgH1Hvx5baACKABvsutv15jYxDMsf2hbeJZT5jNyRCTWNzk9ATaJE9xtBoaN8ZT9cKYAorWutaM6VTwCTt",
  "key38": "4gkZhuiYWEkkJsXygNVJpzFKQr9Tp9PKhDRaWoyv2k48qCEJXJYqBRsoJHpYhSZWYyGvw4QTD9XZzF1TEErEggoF"
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

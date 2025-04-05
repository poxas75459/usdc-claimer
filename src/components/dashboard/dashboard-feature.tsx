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
    "4cXvBZf8PxCVnkJF2o4ZLEX5Pb5txLpNpCBCvCutXks2kQprjxLfxs2htQrGCdTiThPsmdWRFagobQhhnFVN7AhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHNngpGcbwQjrKgVxP8T9aWLwSkc7d48Ttg9UPu3vJkByAztiNZE7C6ZaHUhEoAwKm3TizAsA9H725KRV6HsrRd",
  "key1": "3pqVHzAc8EyorivySsq3UvGeD6s3zcnWBJGhq9oXVndY3fNtZDn7a6Qd3fWMqTAqpmCoGEUid8WsBffZz3mAFHj9",
  "key2": "2eb7hkcTY9KKzhqAzDwNPWKafQYLCHNhvz6ruusxaN39uRQC4JSxz8j4mVDs8xsJuHgZY9WtHnuUUYbJajLFF36G",
  "key3": "QwTRfgXxu2qwgbUpCBqSa99UxXmDCoRuzdixcuHYPz79MizfNACtH6P21xMSqXqQVNVGR1m7etoWwUscwFH8Mih",
  "key4": "4bg71uh7fyWM1QVJ89UA2kCQFrJUJSENxgYY6ZH5iRhmLHAvbfshmbH3zjeX5prHtauHfdFThLJVbDk1dEg9Dzf2",
  "key5": "8N5JJALYvoq3NQyempyKFXcKiHAPPP6zSyqmK1shrSHbToFVjMAA6Lk8EQTMDaRxGM1mQ5QHVHNY3fxWG8gaQhC",
  "key6": "CZcZzDXCqgphw7b4dH2CC9kcQyCkq2P7qRAnnE3aBigxQDTfgZk3pY7KjCAXcK7PxTNjgPSAr76pViCwS9gUUEW",
  "key7": "3miUoxiGmgmXbAo6wzJ6jVFR8sKi4jvV5PxJX3kmEEVV77tBAXX8npGUXDjMicP56TMSSTcT1LmhHNnnBGmECnyg",
  "key8": "4NPuZ4QQsHPSwd4KqVf1kqMLxcC3bGGupqzYiS9egMkwiYBKQH47sipoED8tQM8MCYpbAv9FnYusar3r4V4Zzcz6",
  "key9": "56ymN1hDfF4HzYRqsx3dafmwkrTEnmeq1ENhuD6xCbnJmsDBbyScHyjQwXFNYfwCsN2DY7doP2mn3axFJn9kk83c",
  "key10": "4GKgBHYH3SniuXUxM4Ldj8p1cUzodHyYT6fx57qJAnZwHWAoCVEeh9yBsRh4soENvamuHog3dtwdwnXP7RnkohY1",
  "key11": "2CEbVTeKAWF3MpjZrK3KF2kg15izFFoDerm8ybTAJzw8o95w48mKQgNTEjUy53KKZEkjJSq5yNJNZA3H68a9FRaM",
  "key12": "3UQTsL38VwZUw351xjfkYw6cPnWKLaYziHuhSKsXx51Ws73jj9y7jGsPtVZSGwVxNttr63QTJ6YxsEnqMCAjvUkh",
  "key13": "y8o2H5BUkdet61Yqtw1NgBKtqojG67tzmtmyyvmMG3boCy1Rmie8KwSMUSDpheG9z3akDHdTRBE4Lw3eEcZdsWA",
  "key14": "2ycMcXx57yfQxZ2yWK7DNn9rVGsBkeYeUcZJuKsx1pWxyPuARMuXfLiy6SiuS98qNpqCFFgsku1AUpEtw6ACjT3H",
  "key15": "34oDoNczPGLPuitzMtzXKjUszxGBBjevs6yZSkPFePTGm34bZxLYVG9mC9ZY6Rr47s6XRKhE6ZiNL8MzEvv628kx",
  "key16": "3RCAoSaAMLzPU4xNbATqmqZDjv4qQHEdcHjau5xrKv2GBBmUYA2fWfeTuf1RyZjtjTLVKy7efTnREPuqmWcTCJyi",
  "key17": "4L66YGmxWvCuwyPogkCxARWv35kwcAVCvdbCKvPwXxgcTWf5qz4YUbudK6GAZpjUBQavT5GPrjcF2PyaJYaWp6Lt",
  "key18": "pTq5RQDjQKNQgsRaoeYC5WDEhHm8cgnUAoXKDQyyhFtHKE3dkj2d9Q4DPT6N7Ga7QxRousofAPzYVnhFx2ebSYz",
  "key19": "71opegjG3WLzH1m7ubZPJnjTMp3NaHtPz9Khvkub5aCd1ufbACyB9YgV4Zr3BGnqie7YGNznmGVh6XwXhpj9Gjo",
  "key20": "2szN5Vtk51pwhfVg8hcs28RXLMEDT4KxHM8ckDbwXaHPzHbskoeCVfXmZUtKYRPHPj8E1iAxx9chr2WJ8tUbBNwi",
  "key21": "4hGviPuvUHvxmhshxFZBSrjLb7WQS9sAe13UgvKCKZdLLN8PUsCLfwKdBvrbrXddbT3oVmxxDYPXvpE9fjs4C7MM",
  "key22": "qTu3TSGEui4SkDeje5DjHDs72LM3L6cEseufE5N8Ju7AS61S2t3E5VLMJYqm5z7hio1NQ8srQ6kvztjfSVYsHZ2",
  "key23": "36FRqDwEzadwsYzRqcg67uVuJEXJu43obVLwryWJLiaRT5KpasQpJE11ccXbeap53vjFHn6GQjMUGADTo6Ttygr2",
  "key24": "JV6ExM5XzgxiPvphKoTTCehK42srxjyJz7M8QG1R1giSCCLKVYC6gb8qHbNN6j7KGu1DQGLBvwpvZrmYA7Jgq87",
  "key25": "4AQQeD7oLVoP67SiAdRKkXWKjXLAtYeYAmZBsmnok5Y1RMD2M4dhwqmkZqzzCR9U3SWuyDZVUpzweKJ483f4Ut17",
  "key26": "3XC7ccefWGuQnrovRiZUCifKrXG6ndcfMMp5vxLXiMo3vu2ja9SSxKseStxB491WyQs8MxGCX35VptwpDZRZnQqC",
  "key27": "4fEF2La4JoiAtmb3gZXPFxMJ9YUHVANshQMweHwMU6vFVX47VuQrBeYMCy2Hp4na9RhafSB6AEZADcuC4uhuzhy8",
  "key28": "4wDqnLDhHnXFPchA1JUfXMegtLPhyCp56Rt92uAfNCWebuR3mhKsVByyoUrYMVF1g4296p785eK73tFkAdGCr4B8",
  "key29": "2MABsKnXeQ8pF54BAAzb4GLWJ7pttLXgmyjGH7m7fHb8phCBhwFyLJmD8A7cKZFhwY8J2NETHraSzNGfmsUgGNy6",
  "key30": "5EzmwQmf2f8HzDAoJfMyPF3CtMKUuGn7ZukzqCGYZF2yNQDBhzX6Y66cdsJQQqDnCAyHBbVcL2S4oLqQUNgejK1f",
  "key31": "4Fs38BRN4gM8DbJDGAJLFkULvMtEyTVqsnWkR9ttUbutxGdrn3DaoKLdwunYWFNBBxAs6CZaVNzadxV6PKYoxqQz",
  "key32": "4jrHRjToqT59S2xqt5qCRhXWwJ9bi1GqZZJwWZerswzbcBC9ikXWRfuoiYReYP7D2vvNCJeZrYudtuyH4vaDEKxF",
  "key33": "5SFodwXKftS5fXEJfnbn2RZ1wGDeMhzzgLC4SuevsWiJ3Katsw2LKNZBnaJpsgJAk2GzrSyxYkXqmDHW114XJj1",
  "key34": "itZ5ttut2cdTU4PcpcByEwh4u6q9Vxi6ii4NBSfRBTDGriSifoDEydu5JP872P5mvb7dQFGpDm4LPUDqFKS3ys9",
  "key35": "ksApxm6LGB2L3BNvey8qJyDksrJKX9qJ6tu9YTh5RRAiYTgJiWSvFD9jYCZxb7PC651hYmzFy6GgTBEaV9fgo2S",
  "key36": "39VDQ9wazChBvweDAatwynrbRfcN4z7EK9WNMrCztGGnUK72jGCLRNrJ9cPGQQvY3g8C6gwqhDBpYpFsf7apeBuq"
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

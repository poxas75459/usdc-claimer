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
    "Gdq6kPUojfVqFMkYGZ4rykejNWfETf9K6UVxng18bXGwuHA5CWGH5Ck7iHYwhfP2gpridSnXNo79dqeW63oassi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "287BvFbdtv7X7GyFTRh3nrtM4ht8utJPi1CJuZntp39yqT37Tpw5ktrwFWHRgeYjsTQgKUtWf7HFEcvQRES14Pd9",
  "key1": "5vAedCX9V8NGGyGv1HNPU8H5tgW2T5gGvD6tFwG9t17zpMX8ceTuJ7wMSzC1gsKZt2f4x9p7bjuAveg4C9vB5Khe",
  "key2": "4WJzq7vKNRrTkU7UopwkFtrFJF2HVvR3RPMpV8cMkAaMbLWvhZ3HLG8SnfMpcZgn5Nt5NicG1boJwZAUiruGd8y",
  "key3": "4bcBgqohGFqQSHX4yd5UDMPvnocT3L6Jd3vZpCMJhJiYLqVkXmXiBWQKWoseSSZBQ28VxLGfiQfy8EHU6BFEGhSc",
  "key4": "2MC9hpSkxx9VXvvk5wm4fMpzrxPJmQaKc5joWiiRvswqVQqkdoy68ikUX37AR6SY6pC2KPC6dEHzQoAPPc9Q3pRy",
  "key5": "2EupZ3JqjVKkh5HD7AkHrtVmcV7oDpwb3KREdaPjYDG4YW19DeeipVMX6bvp3yVKEioHtcudq6KJTbhQ5bZcW2E2",
  "key6": "493KkNXizmgxb7cky6oVR7ad88jqf4RS5S8NTeqygJFnuM4dvnusWkEmeQUi3rTx1AEByHuxAKWTbN5QrVp6Q1ww",
  "key7": "58q5yqMqt29UNpLnR35npvVRShQTZAG3z5ZcP4qkNnLUYBujufGV9cZtHrqDAQpWvqcrLSwHTjh9oL3BExeA4kgx",
  "key8": "4yVuogTTzHrSGjaT6EcfyYc2891gC6PBcRTTFDWU7aXd5VXRPXS98p6fjvUtDBkj9vrGsRZNEDZdiEbVLsef9ija",
  "key9": "1217J4KMpyvBrFHfGWVLku5Q9uty2i9dkxM3hwHPVCnmebnMaGiYme4BHgTdGnaziKEH41EJUWMS3PsKsQ9YRQat",
  "key10": "3JwtLj2KsrBa98SqzfxQ7sSrbH1NcDavzqeV3AtP9PgpKqUAUyi2RXbqcV5Mn7ro84HBZs3yyfTGxbn3chxN4d7g",
  "key11": "4t5LXEwdmkypN3cKiTdujdoYh2aXGX8k5exXVPJVGHcpcTmTjDtxcMBvVgr3p31ioLAtGBPDhCGWfwyF8PB7XNEm",
  "key12": "Ey9mVYCVp83DDz3YTgq7C2dC1vdaQVYPBbdMYoHFwt6PzYyfHtyguNy56iZGVBtTQnAW3E1MPy61wmUQLAvngTU",
  "key13": "5fECt9vFoLDsfNrypHSa5tGcCiUnvqoZnDow56b2b4U7XxPChtvRkornxDnKaWNbM6mQFpMYUz4kTVZWqpa7aHPD",
  "key14": "Gjp9M6zT9s9aD1XsePdwCaZLfHh3DNFJpBfpfvYM59zYUGCrZmte9ZbeDQtGHG5T5vRjfDhsn5C2HQyuGjVB5AC",
  "key15": "2DFWdcDLep3ACvM2eAm6PxLxFCWQDctjBxrxvssW68GKbsqdP4iqrzNJvyXu4vbyTmaRG8ANUSEhqGrcrp9Vuaog",
  "key16": "siMJ3UJe72hUb9VQm2cqA1odQvkcjm8rD3qtjjbLvWnT38JckLih6sCS2BA3FsUfm9yBDuDbnHgUbqPBnsU1c2t",
  "key17": "5vDMhsNqecxUvdocvvyyv4RkRYZjdZvExQTJvD8GdzL93igrwWZKd7rbKrqHx4f3TEdc6A9a4rgLoKqD2FaFBVYw",
  "key18": "4czJc8ZETSFqFmHiPGrEeWVaEK18iZci7GSsKYQRihPh3A59FJX4m9qK8RghpQXFexpnXyZW15KhuPrtpgs8jWpb",
  "key19": "iq1STXrz9ig3jHpwfG4uYcbgxqwuCRB8fAQkBN3cni54sVSXRUMSABHtLcq7Rt5xkqXF6V96CeGWogueR9TC84f",
  "key20": "5sXse86hYyk9nVX3KLQ7zB7DQUpg3urZYezBk1PX3wvKtrj6y4jrkaipKszYhZJ1s6tgWRYMbKMEKE5zTnpaB6HL",
  "key21": "5Bj2fhWv4c8YVqpwNCJMbSYQ3Kj6o9XbxV9gr1T8xLgb9P9RoRxgNwzTnnB7WTiKuetwLVQYMnQKHEbwuveAqDN3",
  "key22": "2dEhHhQocXSBB8vs6wSqovdfQByxQVV71pBJMKGYQwUHSk5qRsxrxS4wKKMSdd7vtfMj3bv9tQGRzMTbhiAS5qJP",
  "key23": "3ouxCeu5BMm39iN9RQKKqWfwLCRev8XttpnRPoeVbffWseH1g7bEuNNfbneX9NPSFsRWMEoW3AhD1GPLir3Xuah2",
  "key24": "2zg2p56ri7gJuQJyBPRvN8YVvZt3twkEMzKWosoBjY7BWwrYipvRp3bpxGL1T94vS8eRvXjZGKKUuUQrmaWosPfW",
  "key25": "3dcH47H9nfbdHTbPw58XqM1koEwRQ2o1zW15M1tLRFPNcv7r6oBaMgZbNtz82w1ynue7Ece3fXEsaj911UmxStjP",
  "key26": "31aX2g1tuRopMHPKWSjcxUCSDjR5AyFWJu6NiUivEVb5oSfphzJ3MdWMmmfBdhuoSJdQG4kbPrKkQ1gkosP9H5vQ",
  "key27": "21wYnKigEzuuAqRwk2WcA5nW7oSY9RGSYjxRrF5moPXxunW5hFbcMr1TR1D6M1X8Qhku3ey4hMFb9QH9cgvPEQxC",
  "key28": "6fA5LdthyGZMRfYiDkezPzB2DYBHbCRsyLrdMVcWXtqMSsfTsLy2u8oN3bNbR1DDUZPdt2cAr7JGKtMMabBiF8K",
  "key29": "2zoqcYSizZX4kQdHsAXK3X9swQwwyjHyqhbvRVokD79YnRUSekjP2eicMcaHihMqUUKn9KZDxgJe9c3FqqSTXeKN",
  "key30": "2otQme2a9yv29SeYRE16UQQgurvrqsGK6pdcAdmrtR35FmdwXWWaVH4HG1WKr8UU8pGzYpEdrbh1b24bdRknewHR",
  "key31": "4BBYeeX2fBx6mAQwRaF8fKZVxhL2565e5EMZgJLLr2BTVqEYyQaTyhUoAQ35stG5zAuKYAZMpqLGh6T5G2UyzT6p",
  "key32": "2CNxjNSoNwJTfAGaUm7qMRmgBw4T27rsSifUy9EPHVHGR4uBpMtVmhzq7rZYf4vywiX4QffqAvDqqhYZf2nzCHso",
  "key33": "3DyngGVRSp7nab68AndNhZjoi9zxAVoN7quf99hPeumCRPCn6x5sLam42nm2YL5WsLPhdaFC6fBpdsSrFWZD4TCR",
  "key34": "4BZrrFGuh75azEXPhK6g15CHahcwJ8TSonLKAjfTpnNKVsQFYwr5ft2TsP6RfLCanfg8qBWXNAeUy6ri88CrFPbM",
  "key35": "4ZhTbVet39eUxEjNjd4uy8GZ8tHHjTosMwQP1md4zL3tX3VWTJx35yNtjJpNSCRmjQ1ZbDta8Hmd5ZewwnmzcdQh",
  "key36": "4jp9ussUnn4R4nDCJ9fw22NmLgm9Whnh8DEzHmYitrGMYGov7UFgRWa96MPsVPBtMWPkKYxJ3LLWhPweG3CJg3ho",
  "key37": "4xQFeAnmRLm9posMXTzUT913ZwAqvLV8AE2QtzULiHShHo4b4Rshgvd49PHch5L3BaZCvDRiwm4AfC5iNPBpThm2",
  "key38": "3scV3FEGyjptyNcxRwxjyQoLy4fYRQSgR19VjunYxgMcZHBdXbUuuWkWUWXUuuBEDmBomPXmFThK5i5aAiJ4hTwB",
  "key39": "537KBxyJcxdVaDYKLgKgGgJqWHMwNtWQ5MGY2MPgJb7fDbjtGV8rfu4vmHwXWQpaxAFQxEG58s3ZKwuVfdbRLoV",
  "key40": "e7coeiCpdmroV8AoZhgdLEg1jKxdLcjZ3wP7tHGG5K8sHNZDw8LWpYwjL22VtXTk7tFoHUqVsWjUkfGy691xiib",
  "key41": "395qS9niVp2y6Ni3kjA5kAYXJ2jJniCz6aYicaAPgsATRa58uojQs3AaXDQz6aAjyxAVsT6SuyJxu8UfPcbL5QVh",
  "key42": "QYgHtoCfDdsVsSXggKXfQAh7nXn7ZcvRuXK51ebdrZen4aqK4EKxFA2LGe7Svx473GFDkNQ8bJCw4EXRQ4omrwJ",
  "key43": "2Wz9jcr4NyKZZa3sY7HEYdTP7gMEaQwpNdTmxEfmkHxqUURsLo23VbnFHPX9ikEu9n383joyG77YiBoRk77Dtz3",
  "key44": "5W4vYRpQPxvWL5qbnTF1m3HqfkzqVpmYAVj8fUdErH5E5c6GLsySkwe9KozHsR3APkyVnRC7tuLeT6Xg2DGGvSdm",
  "key45": "3aM1ktmwRZpuRZCuc9czu4KMUTn3dmG7erW6hGFNLofBCqTUNee3xUnQBYguMprgJn7j1LXkHR5UGPpjgaS8yxu5",
  "key46": "PmiJjmLdECJgojTbDnt9s9KUVMRJP7pu33JMeZFL5LeitP6nU3eUBEGU359DDT7vUXirfBsXWvJefXNaz6yQReM",
  "key47": "2KoXpVi3QCbYbkf8K41reBQjfFXEHHhPcqEsUyS7GqnwGYuGCTWL7KTsuazVz1pFnKqe7Qy5iq6CF3VaUCDxE37"
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

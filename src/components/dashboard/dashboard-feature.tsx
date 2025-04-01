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
    "QmtpWzo3kSMiZ5ALuCeumNK7YBvSvVG6s547nbaYkrJHGXg2SZY2hHa75Nws63WbRZmKAnWoPqs61tae3ML2Jr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMYtp6rHEEx9HtVaK1Zd9BW5nNix3dQw4JvE8cwy7LcaN1WtrjsuHjbT2rShH3UDH4QriV1sB8Y6qciuUt2yLwK",
  "key1": "oBS2Yb2TASZvWgPMKoVe7n2J7xnjgrEhGTCS24arupEjE3R9eVmd8VbZpiMiUrVZt7RtbfmbKMFQGqfeXobkTLL",
  "key2": "292bDPZCbccWW3dyPQJ5S37Rt46iGPQhUeTHptADLFidXHifnYDAUPMEC5MN71HGuR8A9A3YN1ubJWZUq476pgJG",
  "key3": "2s7rdoEdntaXeRsktKrDvx8Rziqb4uvW6EYGirBvJPZVKPWrHFidvGoZAY6vzPtBC2Bh8i8QMFAFzRTRo74XDkam",
  "key4": "5tGj8XCFagMzBCNnkkjE6f2hy8qZKwqcGVw7EdT1TcyByufUeo2KXnD7DfwsBRk5JcPPfDfYuaJfbDEbsTAkFFWP",
  "key5": "4NRSrZrXyJGzDoX4fKaaT4nkTCxQFJS8dtjHFNak2u9JAfxDpzzoVaJ7FZhxKDkntK5tqZ7sNL1LtZqSPUSY6ZZc",
  "key6": "3LCtdDdFuAi1dDcCb7sQjW9ADgGrjvG6gLkGoHUaqT7KJfmcoZ9rdpqDQPKDXXvdxP8KDU39hELEjp7Akjqm2H2R",
  "key7": "2UHGXBG8HauKtetEkdL4feMLWQRTj7r234YvoRZ8MpyQLroZhjwCcrKxb745N9kcAbJCLoo2tE1svDJGKDvYbwmm",
  "key8": "4kkncdvANntvJ3b5DVYfKSafi1sDbuJaG2bdBxdcDiHbvwS1CBE2Xqoc2hLdWEHorSRz38gH3GysYiqzgvDMqmeB",
  "key9": "3YMm4CeopDERGpeFh6ri3CVH4HVwKQb5eDwyqyQvFMT3WhktrPq7vojYPEdgHJRfEjNsicpsQ8cPPggRE5TDZdNM",
  "key10": "4GjiHAVuXvLQYsYiGfVNEQG8NVXnmFadA3yG7Vuqpp9mBUJjmXGdYpiAALmQH8nd7DCKaiZMZG38wyEj74NYhxWv",
  "key11": "3VrWdKgzUBmrhbMTDUvnaoLJgVxyaDvyZXJ2SpzAokPJMAigNDGb5HgYyNPaaPUGNaDkPHG7zFkcqtDe6eT1xUZq",
  "key12": "d8Zm9XAY2vqYbPmKrQ87jdRQzTZ261mwd3SMwMxHq5bgXfBjUCwKoCrmSv8YeQGsSzb572G3xQRanqXzUzpVBZm",
  "key13": "5pe9y6ZLNTqzS2x4PfjVb1ukBWyZyx9KS3JyCgfJzhK3T4r1dyKzTSeoY3b5iMHFyARQC8B8V8qzL6wbVfUvKSgx",
  "key14": "5ppPq6qsgPjX7Um4TiSjz74Efqk7gFhCUiKMmMjXnv9SSswZ4YvEdGDhooxuGsFfCZtXZviEe5er16kFPPdGGy8z",
  "key15": "59TC31gNwgrGL8uCHvMWzQzQrwNjFcDLFqnC5z13L5rMeBu5xGqAmo3unrZhd4cZATTjDiU5rLuGsXVXoskW6nuf",
  "key16": "53VhiChaLnmJ1BM7rcjHxazgEtCqkJQxqNFVSMPsYRg3zp87PjMu7iCWsxoCsiEgWp7MmiKeVXvouc1RQTXTFMMQ",
  "key17": "5b7WX8itw361RY9wX1ZfpHobdqANFr1Sp9VCXu9VQiUcqwi1CKdZ89J1mTMn5jkG4ZmvrnK1XTa64YYo5Trnqf8Q",
  "key18": "44YVSneBSL7AApfX2tCA2XHc3RR8VXwNVf5XnFDjH4riBsTo6SEu39G3sJjCMZ8L89xCk7cVGTViaDyiKhBFC2Za",
  "key19": "58F8jYwjDTg1dfycZdavZDMh22KRpuRtXfAALPycERGKeGPd7VpoZuiV93PJ29Ceua9zCz76RupvHwdRMkZG8FE3",
  "key20": "4fZMVeDEZxnb4eMM4SCm5UoEfNSWefvA5f1RPJisr2MsXZaT5CATBbeXYzR92tCZZaShVM2aZ8rRQJVrRLNwveoR",
  "key21": "57iMp1cjtwut4ZvKDQw9i976hN8RVhhYUe3mtJ88S3GmsAo6DXPsuHftTMfR1pJZF1jhkTKmaQNLpGhYdVHzYX8N",
  "key22": "3Sx1B755GqqUpFQmdVV6hCvTyVmrKcFG3U4aXMuzsH9MArUMfK8D1mMi2MqWRKu3F1GB3JjSe69LdkWra7hNz2vC",
  "key23": "5wK4UURr7rhWb2jNpGyunsbghBf2yR7LD5KKc7rJ2N314zaTWt5csHV6WqwexxEJLaMGrKCzkHD22EDzPVtEZb7s",
  "key24": "4q5qcKFWLJWzKhVFn24XwEs9qrzP3E8GbD35KQftQTADgd6gNJiUcz4YSLJN9oT1eZZUqwWNQmbPacDUs4nA7Rb1",
  "key25": "2qkymCKF9wrycKebtgmvE4iVjHe6cy246wGnD1886V6ZKiQ5NsqkywX3TNpKWhYAxFUcKAfHfB3nemv1Dor3coyH",
  "key26": "3ZPRMEYKnLYghUu9ryNemfM1zMtrSRMBKBPPCNNEjb4stjKHXDqVWc2T9qnmjdDpvnk6bfLke4WFKjeabK91Rtxw",
  "key27": "BbFvNW2GyFkPYRFerPGQ29htbiGYcNEnjoV2NBrpLWnAEvG4DEt1DYttjgD8VMEjykL8Vq4KbzZ1PXe65bjZcPP",
  "key28": "PhncShP7rcinyB1T7KWvNnFVCSokDP3itDU2yDA5ZrLoLtxk6NHbKqagvQLgq2wdRSedrEV56fPJLmfhLF3mzoR",
  "key29": "4ZegwRRwRURuSk7FXxsJPkRpFK3w5iwCNWnjENkqt983sFavdCpDEmT7MzhxZNZuG6S1v9jGkauthDJp2ptdX3uB",
  "key30": "3Hk5FB2CpULJWGReBags34N4Rypnuhyiydf7cwgavj9434strjjkeNQbfxDAjJsjtgehriihhm7xmRfrhYoWisaq"
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

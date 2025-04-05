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
    "4XsvePfz2ZZYJRoejmhnmH9bvSyBufP99gs6iYXo3wDexRfPeDnqqhZaJtiaTYT7XWR2tWSCgRorQkeiXhiCcpuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGYQBoU3D32ko9SQvYTK4sPHy5EqWFVQ9kfsTeFkoScFxYtcojYxPCmPavdGaFqx6fTB3MxvEaD9PDDSKTCezDC",
  "key1": "29Qx7K5He4LGt3rdEnddDVQSMzsJUoLxBi1ySvuXb5HxUMWXjpgwiZfa1gr1AdLQgg5Ryt6DhuWkFF9LXZrR541v",
  "key2": "4R3DX2BmkrwxWNAk2GH38aeVJrXAKtuKxeq3wpyJGeAX8ztD3G1YCK5Byv9hZtr3ExZir5ym9rFWJdvHbLsUnBZH",
  "key3": "2SMLZEgBhvEeeFRwsK3i6exMiYZeuy4VSye4Qxa6eJVZ9qDUnaiwmx6ijYNEaqd2gW3aFv1mjALGymLrfr9ctpTu",
  "key4": "2BhZ7e1rR7oPrvkDoDCcjBQa9VkwYVfMKaeLPRsF5mBthKR8TNySHjBwnP15hNn93jn2QKhiGJGi8HS2Fg7uB5b",
  "key5": "3oyLMb8TyiyCPERSipDnYtFQamfakXacZAFyaB2cjbEzgLztBcGKYADefw8bCVnGXwZ5yQHMZtmVddUd8hGPkXUr",
  "key6": "47gMa6iT79gciwVjCNYDQn4Z8ano9JUQ7JjpqEKuqcNm4E8ktk5Styq4msp9nL1wWQa3sLYCC7YrHP67rGrkV7RY",
  "key7": "5MN1YSL7jdxM7o3nCJVkEVd5MsPNX8Frp6akYYYbPFGQQcitiBpj5Cavnf4mhQQ6qURhdLwdycLJWVDVfihPvN4g",
  "key8": "w5bXZRvmEzh1LPy7n2hrfnXgdiNBXmLyzcqEaNwzjswYYP2B2ammRk6kExa5dJw36pqaT6NyeUcEZ35djZstn1T",
  "key9": "4Y99d761uVisGE21ReFiRhGa1Yq21nMU4WCbzKavpU65nXsB2bjFZpnvCYVhs1CzUCRcTHhoGxAgUo5NrJTC1Kzi",
  "key10": "55Ms3gro3rujtn66sgW4Xo8xtGn5Ta4n5kAmNBLn3HDndpPyAJLXCyxfbTbfjSqKG7FVnorMEjuvFcbnvS4Wwpfx",
  "key11": "RtFFvrLKJxcTtBsXwPN5P4XPKDCwCess19wWycFtjET5aKPc92ZwZHc1bYJgZ6B2PswuWK4MWY8Z6bgYJgQXoqS",
  "key12": "3tiU6mmPczGZeLhisJLu4q5FUPUUsMqcx9AWpvmD4GWx1hD7mUrb9z4A8VrRon3FXQbpUAWbdDuBnjpVq6x4q6qz",
  "key13": "wZZVZoJZ9j1SUMMPrJzFHffSkKr7CVnUKLiY5ByjgaxTzfHrCjS6XWBVp5HEFLvw7xXp8gNxEyMnVy975rT8exn",
  "key14": "3omG3GR5qiv89H4TUDFvdQYeMxTwfvBJWoHYuv6mFyPGz4HK8sExRRWRmSU54He5t5WVF7x16jJf9WUwyr1DJuWo",
  "key15": "CF6zhp4ENr3XZRRQ7NqQN8dshrRyKKio9kfnx7xkARABouTEWyusG3JjcfB4aW4vVjipjMAhC9pUbA4TaVEiuki",
  "key16": "2rWUEUNQWcbjoKhr5o5aRoFLRLT89MyJAgwdd6paJnFjs2d2GRVjKXUUSqHrp7ss7MXdKkeaCneyNY5PRaRtmEmq",
  "key17": "2GD4snJf6ffKb4x7CfGRV7B364P8MfiAQfv8uYBacoap9AnecoghMwHEwN9rbDDbQLvph1p3egbYYHiKokCukwCW",
  "key18": "ryQ7QxUjERm1AaS3P2HcjzmE8sr4Qp6MWEKYRYx6jFuiBDEPGtzTyVwv5DPsdiGq9AkvJ4GS7zbKarLpybnHbYS",
  "key19": "5A4tmj3tfP2fZE3f3xgaDxonJ9R3h7pjmGVoeLfyvkPAwGvZtvZtSoZxpBVXwS9q7b3pPfGzt4HahBr6PSKSR1BJ",
  "key20": "Y8k1HUaMoFEx8BysPZsiZdPvWQP6AgcXKQc8tmPmaEWntadtRkXnr8todwkoeso94P282gjcLtMPeAcdWagADQp",
  "key21": "TxSSuUZUvpKqJwLPFagVg5scREzFFnDuqZDV8KqDFENfmb9n3SxQaS4jsj1R2RMHk8cbJcsvg7AXo6QbLHbYvSr",
  "key22": "2e66o1K6pRGBoj6bLFNXcSLTPhg9N931WTkneCZ27SsjFdwumoi17qUDQxEtLPD8nFsMG2N6icTXbkEhyYmnjTkA",
  "key23": "RkhCrgWV1mqSs9UyRdxt5yi4yaafvhX6b3PasmJtn81oTgDfuX8vozzRVLPJaQKuTgo7zSqCsyPrteeWF7uZccG",
  "key24": "3Uh7q1LSZLLPeimCcz2V8KYZbiAhX2R1LqPC4GgftjdxjLNGTfS27vT4ehJjxUHNJosZ6E1e2tHcTjgFp6EghfFB",
  "key25": "5ENDFNk8qLtFh3Z1Qd7BS7T1HRsTyxHT1THTmP9Vw3f6seQhKX94LikQqeXvUcbg9osXY5vcvCH4J99UfUdTKV4w",
  "key26": "UYoRpSwwU8m9NY9z96Z84EZWKuFvVBh4A811WkVJCaW8bu2ioSKtDkukENp9VZZa8JHWkrWJ4Y4pQXDmamRKSPm",
  "key27": "3oM6HA2qfS6ME2vLw8ETTe1LTe1bT8AZePsjm3KMMPBHV3sHZrTq3Liowh3Bq5cyvYiJXtMrigtV3XWszEyxXUyX",
  "key28": "4TYFUD86Sti2JwYED38XCySjDAJ4GffRYLey73y52eCgB7sCm1vu8xdjrS3yf8v2ir6sqMfNhASg3t8thUY51sjZ",
  "key29": "3f3ZMTqneZzFaDuufVhgBMWzEt4zqfG2FwgnndBiaKdEJXaUebNH73DHdNKaNm194vYjX7T24L5JmUxDtv6SinwP",
  "key30": "2vg1rtb5SwAbG5pkApUmrLVg7i8Juh17Qho48dakfHBAYQ2NtvxiZiDiRkwCkz56m2y7XpyuCU83fXBSzoJvdpAz",
  "key31": "2J93Ym93BzSjDSFZvLFVxGAcJXB1QJG2GrsQ62ghj1BTYQGKGk1j7xUafSer1x2nANM5SuFL4WtraMnEbfbXH4Ph",
  "key32": "35GPe1fnyhU7iKFaQSnFVx7AQE4Jy4iwUeG9zwwGt5H6gs2c8H6z8zdwvX8EfvcGCjT8NYKtsdWSMyuaVPpcDHZm",
  "key33": "38MZJDwznRhSqf9T8Ue57gQubh3mD5q3rAJXgAfL3yF8x7BbcwKgYiCvz7YbUveP7XSMEdExZn8Vn1wb23rgv1kE",
  "key34": "3VLzuFDwGtaNfVcabPkY7ZWxAJJ4oWiF5emmmqqpst9Tekx4AFZZLxFkiRD7rAkVxCwZq6C5rmw2yD8v4AUimaaq",
  "key35": "zQY5WnAuaNvLep5no9psxA9RCdkC4ZY9q7LkZyXsqoHhQbMYwfpkuG4TSiij441hYTYHGwDT4Y9UEnd9hyrxaEk",
  "key36": "9u8kpjXaM8qnosUQKiE34Z2zSoYL1x9Tt3143JDsWFtj6iUUw6e4bv29wWLohNMHAUSwXWX2jvRihgao5iMeqEu",
  "key37": "3zoY52SXf231wiKRv3EXdh2R5RJpk72quSs2GiXtnEfvAw7MyMJJLd8y5LbEeGky2YQzM2YEtWM96zJLsQHvmebS"
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

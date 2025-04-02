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
    "3ik6Nm52hWarj1bWQDsNd38RNfy8e2dA1ijTG8XGi1u87AukiRzzJsirjPgS2tRiWjjC3kxFCYEq6EJ9t4hZuSmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6gwrFYY9tUe6vLssNdVCLUrLkWvvsvwiNf9PeCChXrnFNJnsoqygQRjLMysio79X9mDSgdsx2jEu9pnrisaB7Q",
  "key1": "vggQW373T8zAY2dR3H4fxeyiXgk4bJV4kJAxHjvaH232Q7wfZH96PdbyVVKPSQHJFiTHjuYRvJpwXVYdr4hBV9d",
  "key2": "5ac2GjuUSgtRqNP2PZccFHvkz2xWheTb3hb4GwQfFzwhU792iRgRim3MHQBvhFhda3uun8r3icRrvq9XBur2p7XP",
  "key3": "5shmzbCR5DFsyce6NiZcFQJAFXGkt2Lj1UBnKQ6uFbxxvwSNngjLT9wEdSqgPbo6J9bvjfvhXCg8hKnpN7fMCFBe",
  "key4": "3PDatpjidatXic5KQwZY6dGuW4VC3dfT3M3TYXNds5e6JCZonzE2Fjx7xxqnMtbgX4BJABEjrg5ePxTJy4ejswzK",
  "key5": "4FQcz73r3PQ9z9CMNmAc7qoABC3j9mFV56pSxjSu2t4NZVZKcBeS3tfqtpoQnvsx5hDyh7hejWdTWw78PSrcX7Fb",
  "key6": "4Ph47dNwigM7EJg3YziL7RZygZt4cwYCdiXbQgvBz7LTtPDBZkjzFgSq5HoZwU3Y9THp2u8ayRp9YF4VSXWtAUTD",
  "key7": "3Xi7gQJWGdE89AaeUudQGdaApJNRJqL76BMuRuMeWEVSfc4EpfQGSsZvprFGnupw2WevqwxK73oHGz4VQGMouPZr",
  "key8": "4hHmp43YaTTaHcM5nLDpdiwe9MUwbFBWvDvSkYJDoQN2dbHxFg3kAVLtqkQQe6UDLt2Y5QnRCbJGXZvpN2mPpdna",
  "key9": "55ZBvV4LoorThQWAneoCscXvRTcu6NupybEzJzDXaEQaskZb8cbsE753ARt1EZLBhGD3hxL6d7rUAqzYvKBr8M5F",
  "key10": "4317yD4RDFTaHbrUMLh6GySBTZdmFqkb1tDawcYWknrefZc2FTQU4p5VgezrwLmTkJD8MLAjTf1aKRTcZMb7QDq2",
  "key11": "53bmHmnx7TKEKwGuVdTQ262ViJb76sv5k9a54Tsfj8dHAzAwhKAWbH2iA4zQZ4oFzZaSnLU8UPas2XVjsdj3AuSb",
  "key12": "3NfMDGJsc9a59NJ992t9mFVLt4zoyhTxcdgqxHis7s1YUXFWpEXZQa6pi23BqBU3y2Zd2yvprTZ5xCntvXocpY4F",
  "key13": "4kA85fHpXxWVK3MLNaQMBgL4cB1bVtrbNBcvtDStcJTNVj4a36KyE8TPgXo1ycnn9QKX6C5b48JkoXAcJTbpeYC8",
  "key14": "4LYLRHiW4ifHnWRmScxXfXpwHJ9gujkqm91eEGJAydkq4Cz9T3T2Z27ns2QqrNxDPyFqDvwySwKSdsRM7N9BDVTh",
  "key15": "66yyrKo7WSf563Awfq3MkcgariyEbAdq5xRCpGNUbfNjjJZXwYyfeCUVa9HFYSmbVDrj1FM7BKGRHpJXQjbNTMy7",
  "key16": "3uxzcQeH23yCET7EYJEXbD9AL58jRMnMgsow8ZfSyesgmaJV2GU9ADDjNxR94BL8hgoaUb2TzkAH3XjzGN1tV4fT",
  "key17": "65Ap38EkVfdGnnCENSUiEE9fXEMZovHFgbvixELBCyTqYGyF4g5BKXxCLecviRtWTtTu4BcoqVLUuadEeSEqiLxY",
  "key18": "59A2zeGVnvCEUBmR19dVt3n1JdarBkQAu89kBq3MdHxQuPoMroQQ84KyGR32w37rQJNZDyDk3VQfSDxTFvtW98gi",
  "key19": "yUwSHG96qkAKjWM3QZ6L9CkeEjWxswvCryDD7FZrAxJ8Cj8YcjrGDUQDywj6dLmbEkmEDpt3zB6mYojtAf1x6c8",
  "key20": "5vSBBEvArQVoXNpQAjrwPbWxnFWmwqaAnSV3NxtEy1EDDFeJeZqhRj2TW9HCiyB7Hp5zRLZwdQUjzCqUUTJ1b5UH",
  "key21": "5b37bCRyPF7PRkwB45m6RfheBV7HTKAEuDPpbVkN49dCqXYcPEP1awvFYgPTAACNs8Ur9A2os6sGJYs7zcm127VB",
  "key22": "582a6wxEJ6ADEVsWmDDQufSriSewx7KoYxuGPVBT6VxqRFjMhzQZkkUyB7CemRZEQferB6dzHr3pojkhYRqd8kD2",
  "key23": "4dh7coAxoodpZDcxEifpD9ZmEu3mD3mY4mTjSi49CKAGHxMGLJpGEkcy82RXCAg6pzFAtZYpy6JQgyqaCJXJMVRm",
  "key24": "3ZhFDKxunUWnux9kGThhpguX7jZfJBBaqUY38pHcvKmj7x1g93d4LjCY4vFaaXXYciJKTWCMmWG4u9q6BQmHDC4R",
  "key25": "o5v8dodE2Xk3wXxQjre6uX7BDYvxbY21uAEPQgBqHgrKsUyjoGLbT6xuG3yjVVygsA37Dt5PEsvrc5wgpL6dS7K",
  "key26": "5jWskSYG53ZrSD24qLjuHcXGSXd9UN9aJxBfL8jFyTUisiuFJRBLNT7Aga7Svq7DRmkc8qFaw7E7t1prmaien68G",
  "key27": "4h5vuvfzcYCuZCod1e2ChrDHyti4JvwxUVnixEbv9wWybcYtpVTJD6QCSTzSxhTBMbRsdSj4dd7ky8LTB6ygGLv1",
  "key28": "3F6FbmULFWmjs1EWkZsvSGSNttnAkGjbBpvsodsccJKgGdYDNArfPrnBhLm4tedrrhAv4we1cRqE6BpRufrZnBSh",
  "key29": "4aQJNyjHV3h44LQ2NvvxfJqjd6tqQvdKovSx81RrtAo8JP4ANzx8QNTPb6nUYtnVjSj5U3eHP62xVwoLzcd9Sof1",
  "key30": "3JVnHSpTNTEEHWLEcFsFgmHELBR2eWKHnRF4A8vHWoEf5GsTpr7kLLZrQ3AzFMHfX7T8huDdY6UBvVRTa9vQdUgk",
  "key31": "3HxDdTneEH1ErauTusbWHsogDyGnJ84EZLxzTy5jsVeYLLeS34Bxx3byVipYRdh5bUSr5qZSK19HREFpejzNz6Aj",
  "key32": "2kfZ9BhJHAHc5ZpW5fmeJCGxg7LAZuRaLoeS3vPYy2ezxVoMfRuUN68FV47UFvircGNxqTQiPeYHKBRp6QN9PsuG",
  "key33": "2YdA2Fs34zg73pNLC8CqcauT1Jr3SoyzpcoXxFQYYUyok9ENDDbPoLu43PuKg58NUyddETcZND3MQBCDff7HqSMp"
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

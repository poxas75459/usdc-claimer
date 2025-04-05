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
    "3wM3i8144q2cKRNTw8Rr9xD7hFc6KSyySRoq4LkfNvWo3JdjcD119PctkC8hYNwhxx5UKwyz1wEaSAFMJYyaASTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5cfBkCfYV34EbYwo1qfBN4SRheoFqoWo6ESz1zMnEQwAp514Vwy95EN1DU3aiNiPLD9dd2yfwzW6vyN1AjFMAi",
  "key1": "3GYgiReMZ48U3zxfBqjtLMVdyEW9BdZsSP69zadNPRGP4WgEuUESu2Y1YMwP4Ezg8UaDKhii2X8uYKoeYVEW3Yok",
  "key2": "2xEPPj8Q31hhGQvPUMe3qxL5JNKnM9LLRHdTNoEc8HKtS3Tm6xayR8d3VYPe2rQuW83D9gma4NckHmx9Gd2sRG8b",
  "key3": "4wcdq5ymRUidrNXLgRNwqZMk32YudNbehRhrAVuEvUpkWgdDjDyVHnWBTwX5sVy51vB2FEZz9i9BXcpi95wFZqYs",
  "key4": "5MhCKxMiDtNo7rS8JUPM9PBs8xaBRLXYbMYGqWRM9TXv35WDLPmBV6gEi36GF8Pk2SHKGoXczumSaact6RT1nP3q",
  "key5": "BpUQddsqB6wwLuwQx5Xf5yptSyMeAoYgkN5Z2UDyLTEfkTYcUEjArNj9vGegQs3WJAYz41j28WnXQco4Di1rH8s",
  "key6": "nKdk571dhDvTcnxe16uwVqyAmSCsWcxQpSktMDSLzMFnfRCJd49oHM9NGYREFyvR73zNSGuNGNMEthcgR9dfyri",
  "key7": "2Jv8S9QK15suVQw6nbtDYq4A98R9u4xdzwqWhY2PTB5RzWjjCVaWMCiSDKjS2qTcch8kafECQmY7xuQ274J2R6oo",
  "key8": "3pJS3WiGcah4jhvW3YwVr86tLE1kP5rEegEoiucEZ3rVZ2Ymoi7v9wtZ43MxZGBsT6EM97fmkwYnhpzTeT3oEuZB",
  "key9": "5AuE8mFNpySC2tChSWGkrNRVRyENm46tEn1hzDuNfK5jL3KhnMpFxcXjupASpMK1dWvEjqNGYhBJMfmHqnT9a4SG",
  "key10": "gXcgPsmR4eHrWMybckjEtJeey2fSm3qQf4raBjgVBZWqk2xpJnuTEk5DhhoqdsG5MeyZ9xSRg722bn5wTwiphSF",
  "key11": "3thnwXEm2fNoewcKjDfBSKZRd4r6rJQ2gtAwo9qQG5cNSUXN36xevyvBqFveejx6KRRqF2qBaciDjmmexk4B78vk",
  "key12": "5a8HiiRdD3jSULR5ayCDCeZkxkfQX5hBbeyMXfFmLsX4vXvLNHR6xDcxFZi5XXYxL8BFzaNHwG4L4jz2v7A2qaL8",
  "key13": "4nVeRtVg9vqQgJ2mXArZPzqk3tFm3j52s6nP81fGS1aq6NEGUCaeJ9F9LXHrH3NK9vJFrfcxWikhF7VDuRRRUAcq",
  "key14": "3xv4f97WB5G1ipiVDAUPnjcZNVPtBTyjTDZvPLUguKu7cFKuJAo3VgVUvty98PNNFfYRxc27wKUknGh5N7giwKgM",
  "key15": "CX9b9svWvUAW3GYeX3ajUbCDwu55LBQgg4ojNViKYgLuqcYEmpZK8kQvywQqHcLSKBamU35GBwzkfBATZPEAqff",
  "key16": "3EpiL4YQnhwcMZJG926gFtjEDyVi3T5DCGhMtVhnx6CRjKsbrfaNYcFR9JLUbuxXzYNUUKG8Jb9sRV7JWmbbdtBx",
  "key17": "5PsyadwVFcYRUeDwiMPChRkF2iBWpMkj7FTiFFNGdDXBTb9DR2ykwvXfdFvPiKEzVTB3FPZmYNrepoFu8xYecKbr",
  "key18": "2AwxjnpbhBswtfXACe2MY24u6k1us4Y1JhkDfU2uoFBjg5UN7o19ztnzW29RK4JiqTJR6j1uq6AfcTqTD3MXqk79",
  "key19": "5miWp3tpDLYqDCizJKEyDLz71HVgTun9XFdiDnkd3FczES7izRhAxTSPnfraSedVMh8aamKQ4CwSDM4E9aR35erK",
  "key20": "3gdu5LxX1cFZqKcbw9oY19kn8GHffozRLYcLWqD1NpZ14kK5gGCXmvEErJbbDSiGxjPP8BmnGstWWKe4mx24Mg7v",
  "key21": "2odj4zDqPSkXSUHn4y5VDLJwmopaMUUDfbWiiTJoVnYu7GxWtvkf3dnEPVgqzDdfneSRzGqhc76WnjW5n3kzitPr",
  "key22": "2kHHrGXhprMLunHzrKVQz1H2rv97trMco6CUaFYpMPqpigaTrBbPKRWoRpiVBp6B8aF2iFSK3LDyR6316W34eLCV",
  "key23": "f3HC2sAh41Yrt2FjtmogAc5pJzAjf2z2Z8i15x6ffXpQ2FJBkoEtsKgbfsuxNVwpiGN1dKzcu12E8qkjco7hMLZ",
  "key24": "2s8NAa9txcVyGCyADb9Gk87w1rFcQk5NaB46n8tCFLVN8wbrdyaE47HYZTjmqZ5hEDCYDHfp7Ct5m582DppfuHS4",
  "key25": "4SxeedBQvEpSgTFT7h339DpQkdGYRtXv5pB21ueKi3TYKWgtgXHUkChrGq6nPnkCnDBLmBoEqZ6spx5XM5yUx3Wj",
  "key26": "wP9o5YdxBA8RxJ9zJGvzPqHpnvLvLbP7Abdiw41Sji2ixLM3nu7Hqx4Kiao437KaYgyYKUrTc9z6ACAjFP7qvny",
  "key27": "3fHVxEA3G391nn2C1wwASsqQmRwHafKBq8tD22M3kg6x2U44maDsiy8B5iuAejoqqFDb7B8oZtzS2bzjnBWQ2V4L",
  "key28": "5TJg2myDcAKdpGuFBwTQtHBdYVZHpeowzJPUXDRBZJuQNyr8v2uDuPSQPvz3PLjHqKDxsWtrYmiK1wNNQqAcDX7n",
  "key29": "2r1xGo9rTHvcBBfy5hEg6xX3jWuKqxrp26Ea2MC32BZwpTJg98oKEPLXPygv5D4cnk5fTEsb96NBbqawmQucSB11",
  "key30": "5aiSYpZzhEN5KtedgB33AhJ2nrwWXP7rUp5rN2VYeJfhy3zaXJg7v9dtpQqnJV6Cb6exHnGJPexx314Q5g8uFFwY",
  "key31": "YVUk8KCC9v99yRagnxyUismuEuGXLQFKHEEjNuK9D6GhurBRyieprGLn1Fxa3ZJp1YpjmediJKq4PpQu9zRVYrC",
  "key32": "5Z4KReBF4JbdNYeEw3KxRT7qaJav4rPNdp8E8zzNJrjLPru6XHxjgujHG9HeGbatrWBCtnfZpmok6MmfpzurVTMW",
  "key33": "jJrA1ZxA6pVSvd3WPx1oVHhQVbg7BE8NcJu7EFKW8MyPXt3yMgFFTqSPee4fzxZhYZHBEr2A68wWBxy6qDAyq3N",
  "key34": "3yw2GvXLr9FPQ7zP7sJ5yFaX9PRATpgvH35ANNjps3avpdPw12TRWXYDmmhyuyVndXkYbCVTtwMrJbKHk9nDXdXA",
  "key35": "5TwAAd5i8hztRkMwqBAW9K5iDBcvAU787JZFAy9mqGTKALt5VXMqbjy7YCGtfgw28QW6fzAgqRosj2yQC5eL3kdi",
  "key36": "2d9wYe7u2j1fujwZGhtv4ds3bgpN4u3TNMFRv4VUtpaJqXsHeGqymxzDg5q9ZJksk3vYSUeE7SoTJK7TTtYaJkko",
  "key37": "TM8y1RxpBxcD4wHetxZpqySvK3SGcWT43iXPK7UDJvfZm7Z1C8DgpKXzsp1rP7hN6VD4kMF5jGuYKimBcvK4EWi",
  "key38": "2pW9LY8pErMCqB6vz3FzreGAanzSmSKHPp3TcgdJRrzEqw5rMpZqgNFWqrAMfMs81iKUR5XoMwmoiQvkaQsdYjyJ",
  "key39": "45EE2VGoAZUyZKPtKWVawioZqZC8amRZjJtKwjmaPeyMj7KemuK24Mamp215sxfW643s2XkJF5G5T2VTvCEDRK98",
  "key40": "2b5M6LYHvGsdfuKVSZ6fSfVVVwtUSByLgjqVcfZnCsecDx1pNWmhE6uKRZD8hmzCL3FwaS6yRoZK7Ab6PQEagwvt"
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

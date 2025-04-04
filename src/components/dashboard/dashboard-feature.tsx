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
    "2umQu4JzopcFbVE2EXr5HtD5WtiKd2pkMXx6Q8LyxXR1HH37T3XZ7cBURCiQ9B5WcxAXRDJPccnxYFoN6QSMUy5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMzou7Me8yvbVYdnB5vLC7tmM2rbgSDdSXAt3Fq6RkDWYRzeqn7ZtPMkQRNjRSFM1XeFhuHf89PqVMbBFU6SSmE",
  "key1": "3RTnbub6BB5W9trkbN7dPN5NEdcT4LVJTHEgarMPXAMjiLfnV1Gu6jwVuSWGpT3sV7f2sMnaARNMu9BjA2ovh1E5",
  "key2": "fzLTYJSMxMgYUs9bZYsMSqN9X633xEHMMyzxeBFUkFcqofkSFdhEtLzRUKDCBzmnFC5iWb6AXPhSyr41FAXsWSr",
  "key3": "3XYs6knzR6SJX1NxbtrGZ3kCJtxF4s8LxzgKHBwRibGV5uMsA8WRaQpJwTazE4tmKmPn5kUZ1pX83ZjJHim7ojpH",
  "key4": "46293KVB4LH6PHXvBr42CYNdkmQc8TKgSdeaQJ7EjwMYHDzpNM6okveJBFnDabgdvrE9uzYNT7Duy2HxJZ4TyFfD",
  "key5": "vjmPLSC8Bp5bqNtsLy51YkFeTBkNqkADEZH75CjpJw6EGGYEtptfvTCwsMSjdgGJwyMbTDj86gW3ABN5jnfxnUA",
  "key6": "Gqv9nUoWuNSkPrT5SDDGkPauy3gyQfuSYDt9FQthMGk6ctPwrimDMhyQ7fDxPq9vHhG27qtRivKzL1ZdwB4qMLx",
  "key7": "WtjUHJnokrYEM7XHmrTrrQxHd3jtku5JRgU8fhUFLrNnTb8UCQgdvdP2zHR22mXNPuUWy2975G1V4WsHBf5ZD3V",
  "key8": "3CtNSZWVWT4Es8B4rGWBwQV7BeMPkMzKj1XUsWJsQD3zWvfZCS42fBpJEhWKuqTG8Lwwbv1ChMmsoV5tSa3vhGcb",
  "key9": "LgrXrKZRm1oVqrGymouUtMKWJXBRpmJHqSiVr1AzPM6TSGo7XgEceq113smi7umWzhM4ochbKJjvDn2YDFN88CB",
  "key10": "4RiuuEWKYRUWxXnuYd86B3ZRAJV6S9WPtoAj65sXD6EMoiHGtz9YDTrtKyysr6r1d4b4q4GK6bxdSvgjMoyeAGYG",
  "key11": "2BEe5gdLvFPuBZPp7BdSxEA1G7piZxwadFY8CcyZEicdqe3ZgEM3YENmnQ1jRi46JWHxeKGjhgwAP8mZJBruCzH6",
  "key12": "2gVfDC2kDrXbTciCzNCiPbjgmZrSZfGrmgiwkLzgmBahDSLpNx6jwFLFeL5nbpaojPMC6823QcXeqQnDEmyTkiVr",
  "key13": "5s5D6XSsmJZzTVsdC3uV8pyWT8Nfxk7WVev81FJHi26ATRCjpVs7XZs6StZTZfvoHt3pZPts9BeNf7WTPKQF2Mwy",
  "key14": "4vGQj66QtnfV1sQgSfHmESwsrG7mPMvn5bN7q7oNjJQVgAyTFfgcWfbRTdxBdwhKa6PYP29wQQAkHHkWCHMHpDc8",
  "key15": "3iF6UEKDHjFUTPwBAfAKYYLecwiboVgH3R4oiVSBUCooCkkFvcsDG4MPvqQc4hLGx2WsKsRkffUetbN2qrGs86oN",
  "key16": "2kH3JVuv4G8UEhTDf2pZgmu85TjpAaZ8Ss9JsamX5QRx6U9gmvLcTrFKPw6TZdsGsuSMsqQ7KCRepmKY9fS9Zoe3",
  "key17": "3ioW8U7eFrTyHzi2R6T4PnjMUidPvSTj28aZTaiWdL2hv9S4L9dewjAnPbMkvnZkKhc1qXp1nS9XJAQD9txz1ckg",
  "key18": "2xTzuGdBSHmwFm1iysHfLG1rJR21aSQ5yXHCFid4gCAbzQ3fv1fEYawkFFCRt7z2Sr2HZB5pYabzmMvzFt3aUjoA",
  "key19": "2dyuu5cwDqp5FUxT19PBwLUnJ2sw2b4MFu4iSWquCVMHZEL79aKVoXBPTk5AZzrQHTPoGy8MJ6p1hwo1fL16FyJ2",
  "key20": "4MBwPFwyFNsHRMNzNmhkPsViZTPY7fErMNFgE4i9wAJqd9eUDQUYCSe86ULBhzbTUJ9xC59k67KFufDAu9h9HP2M",
  "key21": "5mRC8VQNarHQzpVDR4MmHDZFTjQonub9rJWBJGWmkZn7MghZpBMFuEA18pf1jsbjT6Q6jz9ufCQjkLviDXncUjDy",
  "key22": "4Kd2b7jKXiyxZW6KSS6xRejxVEBFWZeBkXH18q3gSnhfFQuD1cDEbQR9cXjDFNyGViJRpZH9y89KQEpAmAP2Zct2",
  "key23": "4o5naTJz4XsvNwFP1SgxtVGBUNk6jhXdsJ91w7WgKj3qcehs3Wu7wtkhSLhTqAr6AtdnEPpBNCWeQb9Vcp4QqhX9",
  "key24": "2kMVCzJfgyfPWwsiGiinzGvfADeMyUdwixgx7JMABMFF4E1qX68HLW4RZCv3tvb5ugR6Z5mTn2iPRZxNUfJ3JfK3",
  "key25": "zf1kYkcWcBXebVQ1PhruKnPXBSzoQnty2K9oTiK5hiTHXRCBXRSqEFkjGSN3fS8tt7SZaTmjt9fwWN3weWD5Z1F",
  "key26": "589oc525UNxvpWJDNfo1zmuqmPCodixuAju17NBtHuWoWkfcmqSUYNqsrE4uS4D1R4T6duH7tYtXwLuJoojwAVHL",
  "key27": "4DDQgXx9GfVwqLSBtut9zimZAsBN9f7BNuCAWVW9ecUh5crnNBRHzwmEbSWZPgw4EMXNLejCM4LVeUQKH9w5uXXm",
  "key28": "2kgmmVy5K6qVxJRs2gkDKEnpnCXn4h9Ce9GxXhssGegHf3UBEUP8V9BTmkePXcp69FgPeNMYy5XkRrTepAEYS2hE",
  "key29": "54xCPcfDzrjjPfdoGbUhTC6VA3XepRnGj7PwsRoMvZwh7hNjUCKDdtQNiayKEtSGE53LEUSpp8bPcDoTqLz5qGi8",
  "key30": "5aRBndnmjRJdtCRWQKxQ83x3f9MKK5YqJeXvt8KuvqnFS45e1bUamndRBzBQ7dfxu8AnUqe5W3nkdrKzzmkvro9A",
  "key31": "3TrLNZJytGvsTRVZnnFAKSa7xGYBQ1Z6Ve4h5qZ3zd8zdAEagwYYwYMD1XbjX8hPyNbk3rmKvTVoz7Zz1RR7tN7h",
  "key32": "5PHSkZkibeFPu3p7JRtV9GDQQDPgXfj7RB87zwizYzdm5HacBUTrZNBo6Vh18jjWhapT4rqS5sPprtcv6MxEShpL",
  "key33": "3HMm75f79uAUr3qsXzkmVvmxW8HVqZWwyfaDTW2sGFA6vdun2UWQzGn7uEXpyA77jSJvPo4SBA921pEM9HzrXQkW",
  "key34": "4RHwSrcaBre4xMiXjYHsmVnSTeVJiULbEZfSjNxu5qaP93jct4VCZqhqTcgnhYz66vZ2zLa3N9qgdLHbqr4icY7K",
  "key35": "2SVsyeggggh6k5cfY9s6YjikMuofiE45okg9gS4Ma9n8EyLFYvxCxV2DAUSkrbkRhL8rWJgcV97FGLzWh5mQXz2s",
  "key36": "2oe5AURAJmmC8UACzVEWzg15WVkPRZmozxxEeFgiq4cwcMKiyb5vi8ZQGNnrXqQaVtpKjPMYGHBKctW9eC4e4GsA",
  "key37": "5grdrBaSusn6SdwvkAAGZ6FL4eW9UdJqssLNS4Cn2gG1CtpubUafH9Cnyia5TxB8HQ3y5v5yNLGqJ2Lmc15rw8Gu",
  "key38": "3ArUQr64mXvoqk4sqVcJG1xZnbmtLUJ9EW2qXzBkKGutZTsnBLVy4JkqSAqmB7aF7MAHhyk2EzzX3J9mhU8T9pzH"
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

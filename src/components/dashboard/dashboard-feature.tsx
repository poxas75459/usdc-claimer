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
    "5KpQzZ9aRk74KmVEXBAokBYvqNugtg3EhKkN1XcQ8jbiG8fH7RFE5cY9YktLdXBAQMLDwhzbEUtVxVJwbre3Zxpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b4eTfiJQwGD9GixWQxMvouopNdDiUnbo4BQHjrXQFMeKsURjbiCCgV7MeEdYVGLT8hP7PHdztq3gwBp8zQzeBCh",
  "key1": "JgWZJG2cthNW7RJgTrTK6t8PWZH6G2aNq6JkkAhgFhMUFbN9FN4w5LpcT17wKXnztGxRHbJrHQtJbJJSeYE6fL4",
  "key2": "273Kjcj5LkTs7qCp8zi9pKBJTvegVwH2vz1QzFhnJULuXVdFfUuzW1Pg9twv6h6hn9Xtzs7EQ3JehTLpe227L2d6",
  "key3": "39WnRtbiRYwPTobBmwzo4RwofVBCYiVPHxZbLxBNL3GoGftYQ5vancxJDmTwe75FNzpwjZSmNKFJ3hNbZ7sD227P",
  "key4": "3HKBFCUo47VhLVhB9kP2Gve6BMP8yoZ3VqFVsMkKAv1uH8n76WebLm58zjzEyiSoyXsjTcqHwMv9PyHRjnnLNBFY",
  "key5": "5ycHRqArp1e9CuXgSdVCt1L4Vm1bKfzgQ1L4W2Nek3QsUXT6bmNm4sUfRBcF72TgF92xEHe2RACnAD1sxKKDE3cv",
  "key6": "inmNg7yeHPuRpECe9fLxeBD4Qxa5ejGJjCkLHtJYwuStoxyiuWRvyXSjZnzxqebrNJxNttLghUHDnwiuHwWPNzb",
  "key7": "3i4L7mt4C2ckcG6Xe8sn2a5kPL81JjrFhkryJHQCrPnGzz7n2DvLsP2JqzWjkFirhsb1s1RJnCMAcJ9Kf1veHMdY",
  "key8": "58xv8URakVbenFnptvhoyA3EkgVetWpPA5jWQ1GPydxkHai6TJL8aMGqNz2zy8MygmtbeoFFEkFrVGYfkMTw8AZc",
  "key9": "5jRZwqwDkHg11xWhaT8DX4n4AbTUHFpT233oUFD74vnVoMQntH9aJTbkd9c2tM4gPAJfYzHjZXN5S537tXoBJQBG",
  "key10": "2vLGzedwL2TdXUFdRwSDXaT78usSqcyYN4VE57EPnjwyP3GrxBrWvTHKcJynqpYJ8xziKsoZxDj5bz6oi1ThPDHR",
  "key11": "5euMT7PuQau6RfTPWxEBskGE1bwzmPShmF14J9R98fZqqGPKKivFycHDDxrFhPBGuVTX4aFwgJi6Ggj9Mk6hKMvQ",
  "key12": "Q1L18iiSmVbd1wy7Ppeny8ir8xLCbWHmqyXj3pYT1dNNAacTpEdxTW8uqKKKZ83s1bZEjS1eT7S9hXQvTHAQy6d",
  "key13": "3u9oirkHVZwUsvrJNMZuyxtw9RsDeFUfqF3j417CzwmSenVgZcGPz3MD7zXw4xXK9MZMKMmLCPwksmwV8nTygGBQ",
  "key14": "3mi9zwXNYjRcr9GZYZeZSjhRMKRew3L7b8JyT97FKjhCsWk8T4nLwDXgdih8Gxj3yLZcmnfzhRnYTM6U5PG4dgCT",
  "key15": "3BNA4dupAojebFwkUXY6SmdcyZavFWPmJpGZQPZkgiS5JJYWinHSvmPWHKxyvQkqK9sg9jH2R6QFCRuu6rYY8gTR",
  "key16": "3kMhu1wMUracgD61SdWducNtqqW9PUNrXTxX9UzJJLiasWjmNVHB32DUMPaALzBG3Hfnu2wvL8dzZry49yCP3Dwh",
  "key17": "nYN6X8Bo7ienUpz1bb2J4XGoDbGNzBD4ma3KAvBkZntR77SBwX2WfEMREec98txjTAPQxUhVeNDz7crYiir2KXP",
  "key18": "31dWFNKbF7zZNDAJK1aJyjkXrDUHUzZ5iYiEx7gNTv8HkNf4Web9oCGNgCv43nBEJorspBpJqtwQzXiBn4UBBNyQ",
  "key19": "BiwvUs2zVf4oGyRAmmF1LzBcBd2w8MfB7YRPqTKFQFzSdCvHwSDzGTxxbQKUjaMBKFwH5bx2ebF2A9tEvKGB1qk",
  "key20": "3N63wbBPxvobpRWh7VHn91ByzJurezNkTJyFVntaGx1XdPcaxwTVV8KRoXCQhRxwt6FSqUZn3eij5LxSYEhSWrVK",
  "key21": "5qSzu7iiMnLffkEFQvpXoTLo13pQijhP82KyEhzB2hnu5yDWRMvFsad3q3nhW2jLeoYjoesgZwdsqdp7e9cS4cZR",
  "key22": "2cgF6Y47EXpbRXnFT6tcrxfr5FcNSFd6PH5BfTvS7o67CuGXj4qHsyur6ayAC8YbFC5bkamDYGw5E8YJULWVkqLG",
  "key23": "27NzQYy6TrrzL9EKt7FkiRbgz17j4gUh6LzYmiPJmxjNaERb4JND1rjudKKuToDodejnZ4UM4mYsWohPuAYYcyNv",
  "key24": "5fQSdFH32sNXCjuh4gyibPFzDuAKyyK9MTqbxLpPo7PDLXUwPpEj7tbVVaHHGdoWFdRWW9ToQFiCFpeSpYvRKBbL",
  "key25": "RLsF6q2c6Z1yH1nL1gNavmWw1MXgNeSNZEZqg8a9t12LjetTEVjnPF9fMidXmjRGVtZLgvB4n5kZDmWhYYtLq6q",
  "key26": "3dLuUBSJxpmc44fqHyq5zdqmoj3jDJgaCijdRhtBaAVVg393vofS3XNZLqCS2v765MQKFeCiM2ByR8BLxdkrf1Se",
  "key27": "NhcfkWBGc3bEuSWHnZsU33GPz3CWQmZ2BwaGemPyKPr58arSF8jdeawJvLHorx9LAwqX5JUwC5iopzfjRuRBnZ4",
  "key28": "4CWWQV94RmBThbYCrsPW339pVtuYJkqcwcouyH9dmGMysp9y2LWG7rHPtdn1fdwuwcc6h1rA5mTacaQgdLEPazWx",
  "key29": "3iGAnfso64VbUyvVSq6xh5316LJ4ffP8xbH8ttjD1Xi92UCUc3y78yFhhCgNG492DU5SdSMShPF1kSd2PyNJVZ6z",
  "key30": "4gJfRnTLXoeNoTrQAQe6LMrEmxZjFJD8MfYadtbY6YNFKXbBdi3NM46PLqpSe4kxFijMSxbD9QFAbybmuKaQKSn1",
  "key31": "bFZ3Z1j32xNB8pBSdajtUGva3mcdKyg6GMuNsNKZwLYTHPDtxdC781hC3bdxfSqDiWfgqYGYkx8C7CZH69HN9e4",
  "key32": "vwYvU1YNkRUxkXcgiJjBuvrdVbCn9BKzTCPCGCkBDQrnXUMRnThXVKKEYpX8dS94aQJ4K6o9G7EwMSUKyBG9KkX",
  "key33": "3jdWTUfeoraMWWEYTiTA2Fb5KMCS8fNKGmbhA39K9VsR5LDdY7HTXj4zDWzQdwcREzruK4f5e3qCaTCVRnM6KWyj",
  "key34": "2E9NAAnG4A4HzbWuLB66PQGcmWA4CDLdho16wThgPPL2LrQfz6DqyRnnVMnt925547pYobkMnZRgj894xYFzv5qT",
  "key35": "2vpgyzGDsV8JxiLmmvHsA4T47sTsv17fydSBjKLqiPhw7bSzu4MoL1rdqL5qDEH2F6j1wDtYwjwXKHNgkZ2Wrveq",
  "key36": "tNJEXdz69XsrY7XC5PZEehzY5zrhEn5XjNEzz6jcP1Mm2NTuuk9pSJ5mFfXLKgBZ5j5nPL1PuEZ1mEe29GoPJR9"
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

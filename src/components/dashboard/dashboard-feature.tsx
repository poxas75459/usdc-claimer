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
    "UK8mQK9ukQJHR2sfpZ3A2j6Zxhvf84xQFPng12wPfczRTj35pmVAqLPXBqA4cZqcdzC2tmnRCzUQqejWNZqsVci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dACmUzemkEgiDFDniZvYz3fuuw97P2H7wuuk7vHbLC2xnTkdbrRdsxtCUqwV9zUH8QcDMqDW9y6EKXgZy5Huk7v",
  "key1": "65B8MK89MGMT4xo5kF4Z7LuK9hSF6W7XBPqPTLN2sABzQGQThUhb6oQQQUTyzR8E498UJ6cLywzjkcK2xDJPRowP",
  "key2": "eUbU28zr1n324t5o8ZF8oEgjCwXqLnJBQ1Wa339YUYVgNB3nATgxj1EpvkCnHd2JpFzj6pU5Efos2eZsLYjpZRr",
  "key3": "4sKLdtGtBCWKXLY6Ce9EufeDQBhhZzfaV7y3sJeThkdB396vd33PJHpZPP3Hvm9Y97xBm3qfb8rd3WGHmBTFo5jk",
  "key4": "2bQjUSaPMhXd2SR4YpyCEHufSjXcQGXsBoX8qFNbTsysoSXc1D74ny9NpxkQ2QGXge6nC7rB5YDZtvpH8L1F3Jju",
  "key5": "2xfJ2MsRC7hnDWQ4jnY2nG2KA86hBy4hh95zzPrEhXPok1AWBbyKsUnrKUWRajJRmGfZUUUtkMBhGBQkrfC3YHtM",
  "key6": "5dxY53fTd2h42YfFeazqAzPAcJsRvQsyMtSXQXnYj7zWoA42ps6HFLShLh1SvcjfTJu4GJVVVW2FopvJgqw4btmW",
  "key7": "5cx8LiMpptuNDGZBX3tkfJX7DKKoY4kmREWXzk3fBUTbQTSLPmMagW3vWJXW9xbn8Jw6Urg5CkHE1yJYKDxTPauz",
  "key8": "4SB4avdHYwCGfT7pqBrY9Y4kULdbhrAh6mvBbFyaduenzP3YvGYXfxYQQxNReBwQRJ75rFdMEC9gerDo391YxuZG",
  "key9": "FbX6gy18yQX9N3B1KTMPYSfbiyERDfUEdawyVcfwYUKRJfzVNCtwXzsQRgsoRJ6R53hn5e66zhz4N1odJD3y6X6",
  "key10": "3CsprdT8BiM9K6W9vtZRMQNLhaMsSexewmCDxwfnwok3v1UPeHzf93SZ5UEooAr2Mq3SaW3M5hMJcnJzHSzTs2eF",
  "key11": "3RA8WGAgY52EtHo82p7e2DA4mRRTp3VZKXXWfzcHTnwx59pcoU3f7MewkR9YErGmemzmQnQHw1qer93zxJsLRQQW",
  "key12": "4xa9rgF6c3v4R3rGPkC9Qk12YeXueoGDYahbVNyJCBAnV8tcWJ2N5ZPQ8rLmRHfhjurGvhMZowLBDVUQgY4bg6WS",
  "key13": "5UPkZiwYh2kY1AyqjHRhLgcYchX4cGBgqSThT47rjvY8dqvAvnaSqnZZWcJdBRxFDGimFHpyp48SGekiNgWPakEM",
  "key14": "uTNWEpsGqu2GL9qMTW8Fm5QwwX38Fh4FYpkBcm7ntrp24gYXqohT1WEwzV9E1g9ooubU6YzMhEZKh7En9ERFnVu",
  "key15": "oLR4kfyFuUN5tC6WBByfutiWWw98x4cHS3xAkoAxKhfjhbYig6txrYScjuWfRoWsowx1SgCtX4DXtaaP2Brp1c6",
  "key16": "65fueu3cuSy8ZaKpVHZqA7mAtRN9uPy77Qcmp3gZoQd3RQbdLQG15GH68PP5spvz2v3jEnFDaJgwC8sfpoyCFZqh",
  "key17": "5htBgd7NE4SeE4NY1GcnhP4eTZGVKxsCwJDEJsYV945oR9T68GHKcJWRxSQm2HKjkLNe1sharpo9MEJTWFfth3px",
  "key18": "2o33CtKyH22DpbQiQh6TeebNVdPK9uHXc3xHkf8JP8ga61AQxrxQ6n3m7ifhrXWxCqnNEwPSAey5n2jtZzzDTPrh",
  "key19": "45oN5NRNwDSrz1rHFSMCnyBNoxR6UTibVDxtojnzEarStWeFaAA15pgitGfQaVWTVq6NznkqLkHyC9v1ijVyUCiX",
  "key20": "4kqM8j4scDuthCCMNQWETeaBy3ARPfq1GhGpZpAVAKXQFjMwcnvSWixksEvUz96NqgebKSmJiZ6osMKr64jTP6bZ",
  "key21": "Q6ASTUYtq6w9etT1YUTvXUuKmfFQJpMhXNeNM3wJdfvSgRQLwU4zBGr1iY4mY5DKC9nukLPu1khrKV35caHrETn",
  "key22": "yYjmT96MfjJ3QyTivgV9xYbQyH3SX5ocxCELhgiSkLnv3q8z2EzLM1q6KEEuCMeGhGxg4euAAUhPFYN5fhzsKo6",
  "key23": "2VZiBV84RKwXLQDLAc5YH46AEo8vvkpvx6i42j2YceAHmhrejiUJy2hdz6nKKYqFy92qxvS7URKsbWv7QRKYuLr4",
  "key24": "5t83uQkLMY3W1qk4GnsMDQNQPm2YeRyBAmhKijSG3ZYwM8D857X6fKYjQvqf8oqZZ1pATYrx3CpBFtu4VVwzczZ1",
  "key25": "4DwfJLLJxMXi5FUyAB9mTKm9QM4s9SurEjrLRQvuiDeGwrvVMfRShEo7Fon4bUoLLJLexPqxFJvWNVjLdXBSx1hQ",
  "key26": "2EFqPDY2DgsV3ebUnUvE7aJsYr41QTvezCi6GVTtazhHCpEYxcratogT7Und39kzuHjSfbLgaLeVpJL9ohVuTtS7",
  "key27": "yWqhkq7TKfdNKAtvVzF8rdYpTUL8NEWCQ8YinqABSApEGhqwT7Xd1pRSRFEyRKAprrrKeEqCnUZmNJEeDRoF78K",
  "key28": "2DH3GhYfZXJxWCYjx9now5Kq2qFM7Sp6yeCunT5qFdhPLTzMyU5wpA3Bm3yUYkNaLGSr4KJjz2Xk5H5ZDmAAEgyv",
  "key29": "5Vt52REQ7gzRYQoSrLbxeWqtiv3Ci6GcDYZkpQdceG2p6UpMnwxM6PMGkQVpDH6ZchX8ek7u5Z2rU7E81HHA5d6y",
  "key30": "4CoHpmzV4hEhf8iPGXBFfWU9BhKRaDCZiqs4YNu9XBtzfo6F41mwEi8thy3Csk6HsHJ1QrCK1rfN14zMQztC6RYU",
  "key31": "3c7SBDAKhboMjdhpfX2R6RRcNhNbBDi1sdFp7Pxhu7aRHExbwUBDTtTwPAEgY9yYLvHtzZWUcmwSPfyUac97u98x",
  "key32": "33YhecfGqvrdcW43aLtzxEQKhupUn89rRxeUqJSx5XhRP5wK5DkA2BbHyp5sD55nDYwpRdKSrTEFeCCwHh7RsAWp",
  "key33": "4L3c5qDDseVLGmgoh7X5CfuemtKqEfZFd6aEnX4vhSJGW2W5Zw8bRunuun5gALNKSoVoJpfjunBQ72f3L9iSQWgk",
  "key34": "4xKA4kCXnLoKSbBNEgSnFdWfdq7wyJQxQbmJe57emzYhJHsiQvVbpXzqoag5HjYvtDbd4SHSnJZJoTWpXXAtifTp",
  "key35": "5FFn8Q2MjPa6uhJjJHxFwX8E4R8zyct3J7f4J1suMbmPjdk1DMLgmAxQp59JRZ6LU3rn8yLhE7XE3E1nJAdyFomM",
  "key36": "26xPwbBRBGy21DHud7dmcT4kzpSne914t5sAg12viWpZY5yehpSCpwcYg4sWM2qo8f3oQwcxJmSqjWW2eR3Jxs71"
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

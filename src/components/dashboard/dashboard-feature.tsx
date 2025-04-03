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
    "4LijQzrgJ1J1kfayeQdQokErrfW6P7L6CXFmH6R9er2thU6t1AaNGEgZf217j4Yi3fjDCfB7EY9NVjLL5dnMatNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MfW5r18qV9dSwmGvP7uJQ763P6e3CzX8jPjut8KHYW15uPDdBrq5Skryow3LUUFqrVduQUFTrwMpH3U1kjMzh8M",
  "key1": "46gWKXtdD3ma252odUKG8qeJUkKF3Ca7kuhK7YBv6ic4Ej97kVvR7kJC52kCQbhDqNT74fACW7NVczq2SKKrEaVy",
  "key2": "5xL8tVszEGMU3WQAErRUhWDHbk9tC98EfDBaqQsRgAKbGMfNBRWCuSK2f5ahKKrrvV5LffjJjwCXwR2UmC7YN3c5",
  "key3": "5Vdq2Ba9joEZ5C8ayY3c3uLbY3FvXKHfZKs84v7qxHP6YSE2oUknTthbZcHDPiqJwvU7x5zX8AKMRsvDRQkT7LZx",
  "key4": "2Rje5zmDTFdhY8VaT2y8rCMoWpjqV7zxwL9weieM32PwqoWk3o8EwGZdiP1Yu3LYJpiRRcvRTkvqX1Adbjf1ED67",
  "key5": "4JU74Bp2XzEG7qoAahoueLjeJ2a2xX5KXQHgYsrqj5fXQxiRPzqDskF1bgBrjHanofD2UjQjvRrYuBkb8yzwpoSi",
  "key6": "3i93czWpaxJtxZXDQpo3oChzqZiixT7PFMwwPa4k8P9f19MGBKF2EFUjb3pcM5uy2S4iQFMb4EhHu5J9b9C3ANxE",
  "key7": "5HVC77X3Fk3EPVnJJkGdgcCf6L9V97RVnEYoN95oxQVWD6vSHidneMTqhJVJ4Y5ZEuu3h15ysiJGtQ3wdbzNEzwf",
  "key8": "38jnk9EKmwveroLZJLKAUUeMDJwpNwwaZo7Q8Sb5ceYFHhDrw96vgboykpRuaB7QkvH9YGjCDyub3goSxHDVrjpC",
  "key9": "5rxzaTWcR8jSEuymgXNAi92LkudDhX6CAL1VEzgXNSs5DbmfgSHPeWp1jV9RpPhk6eFYrZPQZkRZmxbWyNDY337",
  "key10": "2Q9Fqgr9cMcEEFj7vteiuJuYcrLkhQSG13Ek38oq3iQBAUBnty93YsW6yGQNeuzXmnFxTb5B1V8TabaLjVaLAnF5",
  "key11": "V7Zt2SaEDNVLTZC61ZFqQTBXsmcNKyWzB61QWXpLizK9sGmASh4v7mp5VyNMr8cQJw4JNPFKtJM1C1Vy9kA6vSf",
  "key12": "2ZpYCiNsGNgQb1tRudW2VqMTnjQnBzr63qpwcs3h9gFvW3Sbpe7U8j3LdkjZCgzgax3LJjv1TSbZcg4iPMXARDEj",
  "key13": "4AdMr1HvLzkFzT19UqFUNspRTWPqv7E7H9XKU2u4gRcNTRZGJfdZvMBUJCJUHa3FKFcdzipXEFbFMys4a8gjowq6",
  "key14": "2CUKUNqSLUuP9M4HVjGUVXA4FDbCQrurfToaMBtaeyvR6dfPQP43ciS8kFXUe5ZSzEWTSukTWFTe7C6pwrjFbnRc",
  "key15": "ZXA9scGHJWqyhezF3He6Lfe1Zr28b4atPWyvrMqPVjYW5XUjd27MEA5SjpfvTGBexwKfno56iScynXLWt3oVYre",
  "key16": "3ZHt5rKNSzqZD9GFWKXxQcnLP36w3vzLLa27M8XaKCG1Vzqwn3i5YKV3gNg8F3fttFSz6yBRRvA2t5scQ7gqDbS1",
  "key17": "28cXyyvvFjmf3x72kNMUhK53kJnTVyCHtv8wEFFpMiSvprDrUSMMSdyWJdwNQRioihU64pHGqBgq5JwrFUKFXyNH",
  "key18": "kbLQzBbG1ThBxF6QjU5kq4TUhSJES6aTo1hZThVXHLDv4VsqfGwXwizbDDbCHtuVG59vuhria9C2poTRQNcGVcz",
  "key19": "4ifFJeRt8UdEjfrXEEmRRAgMdAgTuzH9ik22VWJ32PYWwTVMAZYr4kEALEb3VVXrwWYmbJahZkpN4idpfk6YDFvb",
  "key20": "3tUYotckELgaWzgPjdTVYEpLy98Fm4E3CWQAr79AWcSSw9ARcYU268ANqqy4LsMBBUbsEMbUaaJBqv8y1ioJxnMT",
  "key21": "5Ry9Ranhr8fmxY251jhzxdcLvPGc4uHPXLVP8AbUDvYxPk4VgeqUxqpRNA4fK1X3itWjR2rV3xyrwF4K3aFQpDvb",
  "key22": "2wZd2d21b8E1s4YqrdKMXcAHtVAWJ4v9D9dWWidnWhVEQfoQtGEEGfGPKFN5toobNNPXrH5kxPZTXi2Q3gqsyh1h",
  "key23": "3urs8GQZsWt9hUc8d17GvNHgZmfGq18kZSnBKaDkdcEqSPKthzdev7Cn73AGQFRxmSkxqhNATVhY2CyJeaY38wDh",
  "key24": "4Zo3o6W5gWE4iQ9s6a6bzMshMGi44tNEc35uLg2KKJe6seuFKSt6cFDU5uyhChzcjNetRmvwKn5Bfz1m2Q4GgnXG",
  "key25": "3V7s8MPoUBookvYHoEeBrNUhmoxvXZmsuLbF8p5HSN7aGNC943zYNEoESv3f1KywxgiMBXhhZ6YjKPUpNzP8HX8Y",
  "key26": "2Y1yRc7293wEKaS6WyTeVCW5ZxGFW7x6GuWDwZN8sXVGReb5gYpqbiT83GcMCZfieer8c2qDh9tzmA4jfQcs4CY5"
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

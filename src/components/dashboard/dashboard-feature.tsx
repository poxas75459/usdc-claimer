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
    "3btbCNPYH4vZ2AfhLW56R6uLRbX4ZsW29ieayYS4GRanSXNPdHoxwgBzNTdRbL4gUzt5VzKfAj9ph3YUdg9etxAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSHCo4L8J9HncTaJFNZRTNeBpdMo8Bc9QYFvUryyZoddrURcPQupjg5J41MgQhW7wEh79yoFJjd7kM2doAziA1i",
  "key1": "5zdjMnasacD7JzPzLP46ZtnzTwXq3nfdVqBx6XiVL6X7oKpDREDj5bWMhXEqQYqwG6wLSiGLuAx5AmepFYGnq1z5",
  "key2": "5pzFEKYBZuQbEyhWQFUK4HwbLCsZQyqcqzU9YowdE8QR1bh4wQ8diMbZJyTwkL4WPcn3gmDErXWSMNvwTQJ37wto",
  "key3": "5EeCpqViFUYnvLr8V1mijw9apqZLztb1XGLHjKLWuz73rYjXgLDqvfarCWjC1h4ywPDMLeT6DuATHo1Bb2ozMKsW",
  "key4": "547jq6Akiq9BsXSzrC5JLF2wegw9AZLAdr6wfXEw7aWEX8tj1Z5wA996cqNqwHSaW2bXMS31LvMm3W5JmDJCfSDj",
  "key5": "5jonWgD9qf5dpnGgSB8xKKHGZpWVZCzXdZ4xrfCyzotWG6H9tychS44nLro66M3NzwqJETVUHXxfpdMp4XVVb3VA",
  "key6": "2LBBEfYYPzFtcT4N2Txf76yG7Fj6jZoCKVj7FQVwaZq3Bi4aqhT7aQD4xpx4cEDtVdkKJjivaG5AX6gVB6r2XVtW",
  "key7": "prFTMMTtDU4rioTjTcLVs23hX18UHByAjk4mZTxm3WbQw9njuxZkUpr3eJ6zZU7pymhfnzeCV4MhGTo8jzQoxJr",
  "key8": "q5Y6MFxiBsQJa5UNw8HAyBurNRGS3fpfbyZu9HWLGEBwKvf6LkZ2PKBJkzReVdyLnGAyXke3b3R9uJpZEHSPNwe",
  "key9": "3CHeM9HfEzuEHTfzzRsBUKKUQaJAqrb72cxwaHmdGbuwtsX4w8vcVTeStqppeNLxuVxqjHLomrH5fwdQQG9EqG8t",
  "key10": "2xTUm9JdXg9jXWmhbf35tLJjykc4LkGqYEuPisn7fRTRp8y4wVnFpRERG5vRqtceb7AwfwujPTzFQ3SXTmzDcjNu",
  "key11": "5jpgWjX8gg7bZd5ZyptLzhLoQpXMT1USyXaeHxi8T3RXM6W72chVMuXAedhrddLgHUHves9DWTGpeMaWiqZi9nqE",
  "key12": "5AymaPFGdypd7SDMsBQrV6kmhyNkCof6vgE4qFayr2ohGk4LZRjarUxcBQz7DRNkZfAYTgsKqbkn9teQgeu2yfzA",
  "key13": "3UiJxCBD5T47Ktkzr4qLQdry6dD9hyXX5VHmR5bCGDMrE9puEoAFtCkc1gRrFBaTE2TJmjUaA57Naz56Lbe2mUzD",
  "key14": "2ZoWVY9dK6D3Xe2m34cmFNPKoGqQy3Jbd2qcgmxSyBy1cD54chZQqkZJG8hJFxuHB7m48hmhwyXR3qCwhfuT6CKc",
  "key15": "YMjbb2wCDuPYQud4HR7AjVWEg8UcE2UknvtL4PztF3CggDCrE32PtkaBXmvYsLnKkDUekVbnnBvBTv6aYzTQTZc",
  "key16": "4xp1c3h2rjf2dpVLyX4gJNfMDnGzErcvEs3VeFVosX8Fgg4SWssfJfMKPgKF1v5fBLN6TjkoUsWPvL3qFw1d9s3k",
  "key17": "5ERxg3sfFSttud7mDrdGVkg4SiFtGNQrqBF7HMQeG8KU3cg8obHQEcwwc1GCG8GYBq87dKey6QEezvdjy1Teggyc",
  "key18": "3JPT5uumpjtMzt67zxeESazsggwMzh6bta4GEVwJf6BkipfdY3DvRuvcHnwMYhyYGLEsgcVToDJ5Ayb7gqBE3Nqm",
  "key19": "5xNapbvF5X7NHRLDcJmo931vsi71wN7CQPmJEdTGsbzigFzHpP4kh54mrUDavDivpJm5Z5E2To9ZBN9pJVtw9xeS",
  "key20": "3KAFChQtfwB7h4AugDdG66QDX1s2GWSJGbMdhGpSRsZ7yxgH1uX9Bo5d61YRSrAzCeiXwoqsmbjRv73RZnYE5y78",
  "key21": "4hP7DE7tMegWTf3wxWzz6cC6q542Tr32r71FG7qDY3LfYJkUN6Wirxyd8jGRBWrpNdNmJG5AxHkzdvC8kRHGouo9",
  "key22": "3Dt3XAM4WfSUXBYzYNaW78e4yzKTWS8v3BCWtCf3dNx53SbMcv5ybRbbh2RmhjqUuVfM4B9G5bjXLJgJYm8YwnBM",
  "key23": "gDZmdcjWwfnCVXpDty4zfK3W5t85TMFiydgbQXf4QQxXPPK7nN3DizRuFhKMuQexwuan7C3pXsQwntbQHu7CibF",
  "key24": "4m7REp1c4YDLfFf3WULmCyzkHxXu7HGNNX18xKFihxzSH9EUTxebdifD5CJeaoPRH2tjv37cF9JNxeJ2ZkXFFveg",
  "key25": "HUm39GVMHaxPioR26Me64sUPi2EjyazaWUt3FyoWfgppQZZKDZozZExik6uWNB1rivvCw8WrByZ9cYMEBxQeR4j",
  "key26": "3u7epn7mdTsPR6rXPuEuLKkgTnF1T95BXANVBBimEDjmMJmGbi7hgmvLRCar4BYQJEvFfvDYmaJkhVJCQUp3UqYX"
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

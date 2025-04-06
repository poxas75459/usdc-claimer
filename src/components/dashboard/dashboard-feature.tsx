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
    "23H95UgNHPNmxJncX4LCbKz5VbpT6Ysu5tPEHuVVnHQvYjUFAZTqdtTChhpGhsAA186gkVVH2qjw8qEGU2iWYo4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfevZiW4o55S1Q2XV3MvkCF1WQyjezjZHVoQ3uv5u5EfYxGJFi1AtmuGAs5jPChopc9G3e5oV6s3cVQsM7dKUfW",
  "key1": "2uQR3MJEpAdECz9CSwpBcSqb6sCZBqtXd45SvsgZc8odmHc2xDzkSa8kfuQhF5SoT1BHpmsaXGcpt9bgdsM1AFmy",
  "key2": "129sGjJaibZ72spK52M1eFMFjmZ6tz7s7t1cHuVfurpMrXzEeP7Z35qNsnFnzgFC9kBELTp5iVRgpumNQ1U81SDC",
  "key3": "4KFw1oFrk5FuTTmxhkGR5VPBZ6gLjedmzj5TkaNR9osHpWtnmqz9CckQNBS8bhkZ3LE4skun9ChEf1x1xmmfJHUR",
  "key4": "45J8oqTsex9T1cc5xagSrqXQZQmLbRuRXsn4ojAz3bLjdS7JbyHVU7rrgBkSThPgNE74rBJjGKyu3uRccQkQ3gic",
  "key5": "55Uawt4KhHoX1Y9imfRRipidHCBd4sJdbW6LhiRTwxxKsb5REyLc3NAoryRgzC48e4W4wSx5kHSzhziWRevGkH9B",
  "key6": "qLRVQJqAoDfKvSWcXTttANKYcdjpFYrBHfodB2Hj6ZJ49Q2BR7hqrpHrx4q4meCj8HkpNwStwYpe5PfWm1WD4KZ",
  "key7": "3uWd4vEVfm3YxDqyo78Z1uzhE5pFV3CnfRnCmCQrPUnapMxHFVPPBqCJvkEHd1PiiuegcmLoaNQUJzDJyAHGLgEX",
  "key8": "5CPmgDD3UHxg7qcEZD8HD18r8YE3D4ktP5BLHAi5R85junMPsrGWDkdK2DSTrFVnukjCw3p2RLZnrXivaDJy1SXq",
  "key9": "1aWKw4udfNbmVubwDmU3kgxzLiuETdtq2rcwLnV6kRSnSarKj3L1GwdZLjaHhYXc8M46wNFL5MXWmqgGqUAKtoP",
  "key10": "45SfktdJULFbMUeAiqaNFZy7g7Lp6yoVvHxzSQKKXW93t3kKZLTGUbjaJZxYDsZFVdtiAXpq5114H2UwCJHfUEBf",
  "key11": "5TgZe44n59wgmmeSvwYiLwigUdSi9GyzTbr6dAZ69yBAtMhgJiiRRYwiTvVURKCws5GqnAPaY86HGma5EWunFdSk",
  "key12": "34srtUHv2nadCgASnD5RT3ZM1kVcbxbnH9KnZVXUtjQhHh25qNfZBRzhAQpJHZ7cYaHD8k1JTCMqxuidfm3nBSqd",
  "key13": "2zWfCWYKHcq6cpksn8aySJCB9SgyYaNGXJEBH6H8CEBMrtH2gmT1W33srcHUnbDmfrZstzNcVSryLfvhqddjXyGU",
  "key14": "2gRWvTsXXksPYMXNR6fZk1bEUnv1YYkDwJm9BNgAB17C9WFyEchQaokqJQb1pA3xmM6R3RSKRu4pj6UmBbuvLQcR",
  "key15": "3xAXY9Qehf5QY5t16RxxF1ifJwWDsnPgH91kQwyXrs6dNVP1eYbawGhh9sbCEt2JiWpESSGjpjnZG5GEWRo2WnQJ",
  "key16": "3fNqAfs6fHjpuBYZWZUiHUnaeQTyGvXWSkt7RBQujTeufBt9676wLxTExpzsngfdm5zfLR7yAcsvq5thXrtMt2BA",
  "key17": "4c1Wcvy4CCdE8r6WUXKwn2bMW5BAq7WfXbB3umJgG7arFWZxSKv6EzBZoVZWnCezBoVWPpdsdoFQjUw2SJHBpZVC",
  "key18": "33cmEvMKR6szJugHu7CMGwrK4ZxtdKFvsPR7AoBXk18MySupEUXniQy5gXcwjwTRTR3i27EsQ6Xi9kxuyxT1TjL2",
  "key19": "29bjA26y7ZGLQ94UCyL9iC1imzz6wJakgtTXvKhFBXyEqKeYH8TT8m15DcqzASx2h58m4F7qcg5ecj8j8xp9he7A",
  "key20": "2tB21TS1XPh2REAkX9H2bhZTAHxCwtrnTRiUzXLNvsYLsibXS25NjG4QonoKb9tTmML5jHKtUkWMHmdah7Yo72QW",
  "key21": "5D1YLwnZp7Do2sRVEKiGYwGx3erYgkHQHgYhAjLscBwe9HA2qsxYJMZEdC146P7t9W1BF7c1Bpy36voyXQodvgYi",
  "key22": "3pyvEF7UqE7tyLnCpKYx6kxqUD2deufGX6BGCWUxDLp8auMSPcu7F5RF98U71D43rAZ4pG3qgZiaKjJdYcWUYqYW",
  "key23": "4WeKaMfEjacdyCAat9nHHBhxTY7sY5FhCVZQ68pvMusvwZ5FD45SQZ5NL1T1xRQybMKhkafN5rHYxxn3oCyBnTeU",
  "key24": "dwthJnogMjdW7LgiKCUXnJEXeytJaLWpEdV7vSeEkpdXL5cEuBUoxYfPGM91nLhkXXxLBddoFRkV3J9yVpqk9oh",
  "key25": "35oRK3qD2opYoYpmT5P6KYbiKSXrNqVr38w8iS7GCyqZpgFFMgsAZ9BGZV5SB7137fMzVybg4WkJpmCihWCiC8nc",
  "key26": "4ZztWF3aZRjrNm2Y1RwAoHDtEz3YXwUYZGwURBPrr7cAEK2ntkASFbUqMUYCvqKAs6WqLuTcNnQVSVGpu2Rbxinx",
  "key27": "59GFpYWEghqf28vTCqV4r2LHaoJBT9a6DSFzYAgJSTQWzf3u9SDtGBJHxGgeNDPkw5TzRzxJSkVfJLhwGHLaVFD3"
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

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
    "4L4QQpcMsHdXDi6Sv8ueHSQsoQ7S639PR1PDg413snPbhBPcoW2Z5oXz5YwqwtVLpQ48Lr5QPrkgJjievuLXPczi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y7jh7y13fpf8NdoUm3dzRkhoKZdBxjDxwbHvhyp7HBeFH9WPRmvLQugohrFUvMhJGJBLDVgvRvx8WPs5289yr9P",
  "key1": "2PGPPhaBDzG6iazQMQx1D777G5ZZuGfjhKed9hkXMTggQt9MZrUaL9nsAYVB43SL4wDfdxKC78Y2jXgXiBd9cNHp",
  "key2": "2cFevWXhKfUYho9r6m6LCW4EKRAiXs7quWqn3KauZwtv2HXwMDGMsvMiG6EGCvrWFtbz9f8VwDxCs2PxwQhsW3dH",
  "key3": "3HFbwinYfs5cCsHFfArHYzDYK2RMgaJFf82qkgBnjGZTsEhJ9ouHmVdWrzbiN5qj8r3V468DRhWSkwHToCdV5yQ8",
  "key4": "5fRB26VrbaCJ7hm7i3s3dE74wW7gauPTTVgqW3hLZZzzTrLBTBv6pytc2JU46gCrfunpGaYcq32ish7Jyj1CFwJs",
  "key5": "3ZjukCr39wi24cvxgySzrbLMU4TwRqXscW3PM4KvVUAewEUoj6Ze6Kwn3Re9sQUKn5zXuQ87CCN5ZjCLxroeBUCx",
  "key6": "VLnA4v7wpuT2gBZYLiCeMigsvBsfGY4tVsX3BopMAgt2vyB4eGMUWqCXFEmk1kyKj6n2jDgfiXRXggw2CaE8X7n",
  "key7": "4MLjsweD4zSbNyrXDDgbnmCguhPZbzwmiCuvsArbd53NWiUiELg8Ra6eGJFwx8N6vy9ibxvsopmZPKuC44U9S6Dm",
  "key8": "5h8HXLoEcm9ZCPYUdDPXvP9waqTryVc18R1E9X9MuYv9QXdE4zdiadXachKFaKhpZ47f8MvUTyfhXAEKi6sAqSvU",
  "key9": "3TyqGWVBRHVMEDbamyCVMqAhNzyKnmbpXkutwubzmwnqbmsnrVyb3TUYYMYxsSPaAoEYNzhzPhFmfNwHqkP2DYNE",
  "key10": "4xw9hkKd3wAPNSwkYnFxLvYK1b97FQhfpSn4QqWMZj8wM1GPsgKLTB1QzFMUPSiiYRmDTAUhxvRXwWKhXWMouYSw",
  "key11": "3wwXhr6813rJJ3Zx6Tkreb91ZfJZFfxrK4mCSQmEi9AewjTmveWtZAijGDTyoqqckpKFmvc9GBdL6zS78Ttz1VZH",
  "key12": "49XfpbYvfuPaZ13HN3XKqACcUn17dzvZhi83x4D6td2g3JuPpAuu7CjukRq5yDJtyrGzUHWcgZKw8tixHPUBZNNf",
  "key13": "3BuJiSjP9c8Cm8xGHDQHELHEnpMbwMh1LwTaaSCwxpmnmRrWcs3EjVWJn5FMYibiGjytqZi2q1YddixbF8583otN",
  "key14": "44XAXrbmz4L1fGmRsfaXKXjbxAbAV4bAKdcG4f4WpEKwNFNjXLw5cbgg3fkN1HoWXo1UaH4QWzMTwTgJuo6NyAau",
  "key15": "3ymJKU1UmMq2gw9BuaUg2Gxvn9736EyRdCbzDPdBxVbXq9ZzFQKbaPr55xgv8GmKwzh7aG44HxLixVpKQ8Y2pXvB",
  "key16": "2FSi4LBjiW6y6Pd1MSTTimMVnnd3zQDj5wFrRNd66krDGCEVdAPyCg54hYRPdSLw56nakh2uQtZjh9q9yyGi6EwG",
  "key17": "4x6HztEdRjLLHjuMmmfL567W94dwEQSu97yBHy4U736RiZT6hGHHX6HY37aTu4M3AgGmNn6sDqf7iMvyafrkXQMu",
  "key18": "2NxkJbKAwMT323FGLz6Zb1o6u12v2XFT27dc93VFZzQcWtoJh6io5Ftk1jBYHgBK96KdPFXYEgEinawdfKwaNMzu",
  "key19": "2DhvWMhHbMqBBXCtRZF11AF9u1gWXXGcrRLs4wgdady5nF27RSKTvNXPexb6v6cYXVqVZauE9eQYwoyrBXSVkXuH",
  "key20": "4XZX8Vz9z9KsKJwjpKcPi2DXy2maNTSnQDKeSpDLarYtVMbZ6NqU6Zw8jTSdncRuZptXbweUoK1CFtj8jD9QBnC9",
  "key21": "5zdNPSXsyRp466et32Jb2CkjMbAd5sQqzSwDpDthFSCczwv4epgVRmLN7bLMGsNqoSXm3LPv1WWfNnfeUeKvnqfM",
  "key22": "3wVTwtAuRaFJxbyEaNkbuxhLZAWxUCZFUeasnRFp74T3bScWonSSCUTbTB9FeaBaGq7V9qNx9Lv6Wb3zV2pBFBqc",
  "key23": "56LXV4PQHLNQpQnQNwrYJywEUdfArxRrywV6rwNZKA7fJf1KBMdjNm5SsdGjixuUSEDq8F7KA82m6jGSfAQKT64H",
  "key24": "5FMdzG1qC6FByrzaadQhNkf3mdig9YeBApGjigCtubmjbovAaxs42SWvBPH7Z8113HqhLXgdnu25amY59uDdFd18"
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

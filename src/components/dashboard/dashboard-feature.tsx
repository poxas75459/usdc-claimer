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
    "3qe78PNja6QoqgHHm4Nd6uuzUDMsZDdyqkyJw4KXuPABuiqtU2szjmJmBtfXB129qkmdBVeL39ekMR1t4mwKEuFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TdiHTUwKExe9oKTZec24ySoHoSXrUSaZ5X6mVkSw4x5FMpxrVKDg3P9jNxJGCeMzq4eMhtYKLXVyqWy2ueSqPsD",
  "key1": "3FdcoqniBePAPFwXHCB63GJuHnCfshV39j5gACwRpFJ2cubVUoSaP6PKteuncqWGJsaEsjWdFsnm7mGkgk4eJFrz",
  "key2": "5pjbrhXeZ2tpWvs8xoBnRTmZCMxaPoyGBbfvW3UhNtDfudVHX1qeawChtxqCdtWTWy29pBLJnFDaZMXEDjVKn6jJ",
  "key3": "2X61Gyn61bcBKNHPVS169G1espxcAGA26uhBXWLJ1QDP3nViRriyfC3u2L5cTNtWJi5huRDcyjX7tdbufTRNgsf9",
  "key4": "2MsvYA28sphyKbVMVzGn1meYqPzeGyraPdyn1TXkoJNU1N1wuinEE7jf6UedsjvdsFu82MsanW9hksJCGtvwB6bD",
  "key5": "xyyzMPYkBu2jyipaKnmK7Sh3a3RW9zEGJFJ6PQ8D3S9bGRFaJWqwN7ikxXkS7pvvmFTfFcXY5Zq2epKUSLAB36M",
  "key6": "5ZuqDieFWcrg6a1aXHJRChMtgE9b1Pbo8EG23HAJERZB25CfRxfpHqDydYGxP3zsWcUhh4Etw3o1R493D9fBiGcU",
  "key7": "61ZcDEBcmk63ciwPxMTWZjyR5BjhvZRGFdxKNsD64ebFq5ypGBERKLokXmwb5m8bryJygUw7pAQg9ic8rsKYQpmE",
  "key8": "2qgVMytfNNH3f3Lp9ZNpRUawePuSvWuA1sVTh559p8bW8sFtDHDvS7BGpVrhRRDRsSnqgnpM7jLg8JPEr1z8RRpr",
  "key9": "3AWYGmJ45TguKjku5DLqbBjsMVvunPL48KgegL1nZZJerbQV8iQoidea1fhcJ6fhhWDmpzZRvpebVfYecGk8nSQg",
  "key10": "5oaCmqR8eQjLTyXx4ac7neSGxEwCFKzoQewmio1G2J9v6mCaqBqVqxhu4Q6YbV6rGiBfLCieAyvhr3pfEL5PZSj7",
  "key11": "5vpYsN7HfTGy47GY23aDpbW3c5VuibLssktdGYuBmgwJYmLJm2wx1tMXUeFDK6LFwEZmBDWiGoYLejbQCU356gYk",
  "key12": "LXpBcZdrVyqwwgAtwtbWdYVFgb2qjoQ62ExSTmrENf7yu6cUAnvK8UrMFsV9opayacHb7NcnjGCspz9PXpvjtKx",
  "key13": "28gHQJDLMnHm7mgEzGz5VbdQ3HGaVw3678AHMQoWwpppwYFYADAtcuWpt4Wi4L6hBLKu686FfDhTZDYXBibGsvBt",
  "key14": "3nrb6zxiEdmVHFUw3M1eUhhiMpKzQaJTr7YgpjdGChKetJFtwGqW7fgk4yGX4A1LPCSt7EJrN9dTh4DVr9xkBiEa",
  "key15": "3BdV5tLwLuWmxfo8r4XJN1rqM8mvzr6aXAd3YnosopwwnwQKjdLQdMbBPzJbDhmo6gKdcpESRh1RfELn5bWAQrZU",
  "key16": "5GdFzpk4rzkSXaqAi5iPnLjckss6F5jPZRn66s2UvX7vrHuxdxg8Bc3gsZZ11Sf86FWGkK39arVV71BWWbjYEtEe",
  "key17": "4S5P9yyLxP5goDrQLL8RWywRVChFUgeBJLBFtuDBJrVhA6MzBSLq4FKwZDevwGEwTzZHZqookktw6RY4hJny9VUv",
  "key18": "3yGrJRq9ULSeyYwPb4RHYtfZD5ek9X7z1jxhLiWvhz4K4nKxWnoJjKc8Ec9ULxCF2gTrLSaMpKcDF5u7tnfsQ9SQ",
  "key19": "fiQx1QUUeRgXZe28JjcXPopCFcX2CnAySHr8viWsQJrYNMNzTxCsFbyqvjcf4PyBJ4g3HcJiJs2xQcyUGYQs9vR",
  "key20": "36LziVhRenYkZbsaDYUxTCRwqKY7fdi5YfGaU7xZg53AtNa6hdu2k3ZiZApWNFwc4bBcsSLJyH529vJ1hG49x66x",
  "key21": "2PeLXmH7LhCcSgjByfoEhncHfYe97cWsAfbmaZFizV8sTJBdepDauTjCWgqjSEBZQTMPjMws8GxsnGSACS3hvfrc",
  "key22": "5LJo3v9TZWAGFsFhzqGjHdsSCkq1EHu6b8WKewTezWSsXWg9UoiyMdFoiDELNKjuDsfBs1YBsNaNFpMGH344TtH3",
  "key23": "5KcCXzEztai6jP4oPWPFDcUBhJcgKeg6h2pAPJ54V9Z8tJhXetwKo3ifE3asmH5bDaPMiHufFAvbFLPRskZAwHiU",
  "key24": "2DnpoqJugqe3j17wf8fAyBEnx9GyW6eAP1oxFdpDeJG24zrNQLs4UurjcaWexm8tRGGPHv2MmgqsG9c567Ko612t",
  "key25": "65hXSha6RftZP96Ujn2DxVz6KZ7zpdLbqoy2q3cC42j5ZSktySZ89m963huNSP3rQegMD68oRrYipYcCJVmbmrkb",
  "key26": "2MBU6Sa88DM3WuTxemL1m4hyef8w1wqFCJofWcbYqByTB7wsvcdRMKCGszShThByG6UBrVUvHx5rmsPa8kFmmEX7",
  "key27": "2atW5L7G9Y4JsoJV6MCY3B4gCZ3xLcncLpkAgZFKoYErmZkPifTPGGNPSgTsWSjcjKCVC2i4PLF4YfXmEpEqQwZA",
  "key28": "4EbHt6SQDhfYQDhpqrh5w1XZeRMgr6VQb2uGjqGw9sTaGwf6YXHWaV9xdqjnUi69PjAvAFPMEPTp3ccWXFbDyx2F",
  "key29": "pwHCHRgD6KG7tz7rhseqkQuPpAKrPkaSgZytveXTG5EAeJx8XSo9DFpidD3MJtfBBNxUZXCiQ2E3P8vdTKjRwyp"
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

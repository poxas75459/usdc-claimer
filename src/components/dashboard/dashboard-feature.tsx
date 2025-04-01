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
    "2nKzYAcucVEbo3XHNGNgswMBAaCPy2sQQmvcKeYATchTZKEGX5LwatuLcfHngdPLPBiie3epwDpEQ9r8kmFRo91q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f8dwwG1jq6eyh7S3kmZaMjFMobjN3sKhKcuLV5b5FZpWz9sVbxYk9vZ4VfwtndgLwBGYkKxZR3d4RoQw7uqChYK",
  "key1": "pKSJAvzmr31VThynu69XqXwyBPLL5GmBTNxFTh8oPxLsY6fux53e9KPac2n3SQCYrTy4BdUced1NWPFD44Q7LHR",
  "key2": "5ceF5HcqGTehhuwJep4wJ59Kzkdp582FqrN4Hnc1qxhgjxNCbMD3WEm63xzjEowZLFzfTLuUjLeHWhqViBaj4NmL",
  "key3": "3GBE5ZSRwJh4UDvng4SPxQXQEDcHCo6LMZRTdWN5PDhWwXyvKVx3Ed1kTYqbcAefhwoiAhEu3eYugsfpUsdRgv5L",
  "key4": "4mmhrbzDozWu4sdG5E7D5cfu52AwUkBJKD1ei5KnynPxh7DsQo15ky9y8cZp8DLqyGtaBmCKBmAzYRy7rtrmX345",
  "key5": "4AzSRN3U3qtKf2hJfDgshRdHBop5LH5sWXFz8V6JHWU7gk2sVZrk8qRbBPju7ByjKe8gG8SiRUs1QJBpAo6z9Xf5",
  "key6": "51PioujBcVdFfyGBxexZN8y2xajP6QwFH2LWi1gUARvcpvtLgqR7rwKSEQz6ZRxdpMjg7Ldx9qqtwBz13b55mCC1",
  "key7": "TZZWpZo7e8CCYnS1gtn42UsZTiyDik82GZgim1dX44wupHnyHrHQo2Zc3whuSJ6U5tSzifyqbh1xuE4NKUeJHpj",
  "key8": "3YTUzSpR7is43yWchjHmzTpqchNvQCWfAtbku5wqeCFwAmcFhx5QucqzjCsW4hbgiHtD4Es4JefGSmEp5wLrocMy",
  "key9": "c3H3uaYY4Rkn64vL39EyCc2csrVSsTfjXn5Z68g6MZePwj2g3LFDSobtG7KHJXostzBPxAtTwNsF4eLqZJXxGpo",
  "key10": "5VSSqqv7Fnx5L7FMn1EtDmv7DHizom5ijC8CyJrupE1jWFFZUyghuRPtEdmyUomQeB6rDBcHFmZEVEM48AP23k5",
  "key11": "4zb35kc4YqDgcxpqFDdkCoXQseYb6ZopnoWX1jZurVqjLqLqy4zGbbmEe6m4umWdg2qXWJ6zXV96KdnxxcNBsKQJ",
  "key12": "3DQ89BiBNzh8seY6dnUrumfegjmHfE16iMwD2AEcW4Jp7aTzxce1W3jhnFSnVRJY7n1SdBRDiM5H9uCrLnE7HwNf",
  "key13": "2KUK7zHCiwVCUDjms8VXxEuPbdhRGRoL22HZJewRC191j55yUPy2mM1zUfiwMFQXuASy81vVHiVNyACEsoNpcZ95",
  "key14": "4ANRaXWjHaxZ7epCZRLuTaZ5TbE5NciTS8NG2EsQT8t47rWjHBue9hsV6f82P7o4DdADasKCxioMvQ3BdPkCphL2",
  "key15": "4KctSFa5jMTxeaefPX4G7xZJXJEGsLkNxLWEs8DYEF7BYwzSXuZoSxZb6Y4pMDuso2ZXP2Eh1N7iHjW3r5esDUVm",
  "key16": "2jMg5YCgeN3PGxUHp2sxWweUduMh3wjnefA9tqnsETBAiegB2LDygbDPUdQ83BJFYQCbVv3ciZoTYtQvDh9zNAQS",
  "key17": "32Hf6od5CJ71xLyCNLW1aLJAdzkNJqX2qAraMnkRhCvBew2hHmdzUAR8LCVh3PJyodtjA6oy6BRQkhg8pnmARbX2",
  "key18": "3Hgt68khauQeEYy5QubbV85GBERTvcy8W8m37Q4BL5y47cQKKeEKyjuh7CoSDLTY6xSEurLfKxau38En5a4jPebA",
  "key19": "WPJTLJmAv3KpRNHjgSzXcRymXiHxp8WB8kk6jgLhiGmmF2FbhC3xik6UA3x2w5HyLLZ3hu5BbBb4DPDofLs3BXu",
  "key20": "oHuFAdbth4QPo3nn1Xfu6jtoUfGyDGC16kGd3XYZ2V8C2WJWoRJczWHDCV2nVFTpgSTJo24n6c2HNa9vfnDMs91",
  "key21": "3UZEeLecJwQUUkfhz5i9yismM3hExvPBjiwp81eJHZs1iftM6PMten6A43Jk4rzrXE7tAXXzV36gd77SLa7xm3TM",
  "key22": "2Bqp5dsJasZn5quqpLXaN7937Lxi2HWKs6nK8DvLmy5FGJPn36xfSzpqt9hnvNf2PJcEWE6TAiGf3jdhMASBX8Pi",
  "key23": "5nuNi13qSaex8vR9L8uuLm4A1bxqSrTNVdYn1ja3qGdeTsCA6fbac3EHjQ6zVfSNZ7WdkXwGtBETkW7ytdYu78XG",
  "key24": "4GNiNerQrPbia3UuTMr6fBXF7hDFZEkCTqBC1LG4XVeGW5jjJLJGaaubCFQywbWURsndke866v3hbBr2Cnb8rY1Z",
  "key25": "2UuEq79KhVD8kbzPEgrvvLasWMabdbazaWd7AceX5P3CykXgpPoGbjneK48SAUrmU4tKVLbPCutWnykLagwFUyFj",
  "key26": "4EF4JZzAchVWChGP2DJeziX1VaXsCaxhC68cvtu8ruRJe6vM4gdTawPBdcfrdWN9jgGvi3cYGAGjnqivu53AqtS9",
  "key27": "64ag2gqKziFmUM1WvUV3kCBbVxnkfo1Tr3wiPmRVMFmXNdqvTR8FcgKxzEpd5CPzehLKF77jUGRX6yry7nEo5SeG",
  "key28": "2Xtb25Jq3tvsWeder8LetoroGrY23scS8jnbYPjsrPCXXbr2scor4PDmE8UxRgPRyNSCTVpGgQKUnfXv47H7MKqA",
  "key29": "VkHTu6vL7zX26STx92YnTR6z1vWdigk8DsjuVKB6H3T1XhXU18UwfLKyHgp1vWFZKrSaGJ6D1KZuVQbZCW32d88",
  "key30": "26HscSx6S7pXjhEL1uaZKQ4xfjDBGhbeZQBT7P1itbcaCDzpiRjCcQoN1vsEaDGGAxydq4149H8TTdic7JAdJEFH",
  "key31": "5cdpvQ7yJD7mVNJELbqHzeL8U9PKDTp9PcMWKJ4QUxvu32ZXodtpACEyF21L9JGbDFwAeXZCGEGPhXQ1tRkvApEC",
  "key32": "8yLyx3sYFmLjb5vL3LaLAaENyLsTXdDdh7qx3EhhH31Rf5vXASmvfqhMSZEhwM99Kb3hC6xZSy8Q7tAqBVkGf3G",
  "key33": "5f8FY225ZK5B7uJqphsRjnywT8GwauvKq7Zu2zKQK5xvv1BvXJ6mPuCY3C7QCNExU72kaM36L4ZEhPR5zCvfJSB1",
  "key34": "3m8GNo8iBvSAZegzmkaBSZJ6AaoG8BHKnATPfFy95wPzYWxvYSXbwF8mYaVY93iRT3B75JR8fAhX4LcJrwMT8hMD",
  "key35": "YhcmKvgsafSbv5e6PADnS8veEBWqCdeLfkct3ti94cFmsg1oVxQYRHSkZ4ia5aAF1KAhY3vcbB1sX5b3t33UqUZ",
  "key36": "3BFUDLkZnqMdinm2kFfpqRTdhuDxFFRkhvU59ngAxHi6jb6K8JSdxH9g9qtsbdSm6r9qhvfEHB8dBtCATnTEXGEf",
  "key37": "33W6Ym9rsdA14RggZuYcpLzdVhEs3AgkvXsuvGEEw3Q28KCRop6ttG4WpSi4gZoBYgz6qCLzxmHpTB5mG47ue4th",
  "key38": "ae2WVrK6z76FUXw9NRXMqf8w8TrZcyQGsWeSdAUBqyiTv2cseBBUj3nx44v1Ea7zWBXSs2ypoBXXiW2WLHan8z5",
  "key39": "DThbpJSDh1o6CWsaGGFeRew9ZTct8qCaBDeKpEf1KHEjaT9QJiS2reLY4zCD7jMGb2YQhBemuJjkidZLsHzNkv8",
  "key40": "3CwrVXa3wQHBeB53q3H8HEUP6U5dcyicponZEDBmKMLa9b3usy5UihPGaBz4CpVH6PkZ9ukGSf5Lz61jGwo4KZe8",
  "key41": "2qoocS9UafT1gc2n8zBKqFTa559WRUQz2xFGRLUCZis1wdNEUduYCf5tx3iq4qK4tPQeoe2cjfTzrVBUeChEMmvA",
  "key42": "2BsSvXuLWkiEngEBsBdCfNjqcvLU6F2evYsUoVMddXLhbG7um9g4nZjUe4udZ8hzGUobPs84dsaZbs5teoQY1nZy",
  "key43": "sUTu5PYK1gNCM7YCefotCszoxgtix2ksaMNJd38P6tBWyxhm2injbWeF1xMRaUteGp9MUAw77fMYGQo5hVwD3BR"
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

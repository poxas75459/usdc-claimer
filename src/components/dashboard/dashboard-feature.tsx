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
    "2fqGa8fekMogWXMTN7EkpgCWeskg54Zh9k5DEwY94bR8sQRW8WMZ2VUWduvfKijHjfvNTfBk9w75zu3La8DqUmLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PSgzTvrhNPhnk9UKyoP3fMxRqXCv5ZQpZpxexNwFKpccQLwd9tzqXgiBT7bbmVh3j2RtfBzaMZ9ksc74s8pgvo3",
  "key1": "2Z7Ay5xjY9YUDYgKHEX7v8TmV3yZf2582Cg38qEWuRu77PHXtA8YirSKbLr2tATWizpPQACPgDrpg6w8tfz4xFqE",
  "key2": "4iAsE4PdaYMh4K82mG4ejVxZUyDm45H3P6Qvh6WnxWp6q4oe7UVeuDQGSY2tZDCEK1rPwC7o6mP49BHJEu6DDHuH",
  "key3": "5bLAZzS4HbKSqxgnN6QrvzWh6ck6Vei8afqX6EqDGXHQJr95uQYRukad7uwoH9Rurrbcg7qRh6o4pgF4HGq3TkYW",
  "key4": "2CFtSQ2huHetmFHCn5KCQGKbpprKYDjvCKvqRDZcdkZguPdhLWsX5PVUvGk2eLixHyjCAQ3rKKtadYnRDQsAy4Vt",
  "key5": "56Aki3wXZHWtkaGvP2QfGzjH2TZGMJoVUrRPLZbKMKLucymMRG5Y1QyE4CNY4544rgtt2PCgZsvshdR1CyQMr9Ly",
  "key6": "RXMCAQqjK3MHQkoyn2rNzq9hcKB2DVAUcwdFRqAS7ygQHbyxsF8GYn6bJg5WcqLL2F9SZkdMBAAuTHvM9qiCuup",
  "key7": "2NhktJ5R6Mpc1zu1Wm4s87tF179e4XFHu8TCX5v1MTLL2wkPKG9wNqxsdGxyk7GnG4V469GWu8Jyw6PZeJ6B5sTD",
  "key8": "66S2iiHVmeFee6nmQFfsvujuhWW1XvwW63ojHC2k4wfQvqH2BtmHTt6Mu4ECVDRjbeeBoQfnJ9123vxXYJWiZWUo",
  "key9": "4dMu5pa62MmiwXHnwChfWbqpsrebMA4dAQcy5mo4KxzdyCL1i4SG9uAYjgUJVf4sKVFTMFhQGpDJvjQRkpabvu6d",
  "key10": "4WkGgtnraSLfKH5Xy4iMXjg6vC5ATPaHbvudSg1N8n5GCVJrQvXr95fcgzZqDMXrEgTHKPgNq5MERt3tu1szwWKW",
  "key11": "3C95H9CUzZXfUXFbrJ8fzM8KKbZjQBy6xTBbkApaNfjdibLDS5LcMpe3wMqUVTFuneoHXvKzjrQYUiqDEZ6bn2FW",
  "key12": "394g8rPWuJ2PsSxmGZM6wab73DKbss5p4hwZS6qp9tFYT5Vi3i3Jy5891fLYeLUQSm5LGPrX1GDvPj75emq9TqVg",
  "key13": "59mvPMNs5Szc21jzogCBFHvfmZ6pfi2DZkYjT9KZYP1q7AHfZWW8hxXrmx2HPg5KF2T8WrpAcxc3kANYA8GcSBrq",
  "key14": "5WbKWkA5byn3uvw8MaEzrxqQENAgunQDN59VciAVrZLXvU8dB9wrnzk8WF6DRD6V3oghKRbjkjR7uLjGD1QLFKED",
  "key15": "43V7hHXFgdEKJs49Y9FdW6ebuERbHZVrNbgCv17SrWn3YJxVZVgugLHW7PHnoC9CKBz7oVAyyCQTFLqbwABmZnXu",
  "key16": "5qFdaxjXT2pdxMmsuM4Nd88bqSC8zAEJVwirJ5SiE741GyWXRABJTF4JVnB46TthpRJUCRxsACaf84kq21ysgjqk",
  "key17": "63c74ZjPj5rYCo5VEAJNx5QJKHMV8F35VRnFSS9SMvPCf2KeahmYezdfsDzqRKWFexfGEgn88S8n5XCAg7E4M6kB",
  "key18": "xMn1juHdjrfYMU3gknovp18ufxkChuxpcpxPiDXmtXnhqH88Uo6BZZNFvWjUPoC96Ni3xC2nFJYSvD8zrjWDKkM",
  "key19": "2emhXCAAxX9YjWVVHr6bavDifyXeRjV24vCM3bgkXwbGa4ujr2aHnhm3KWjMB2uRht2ybsz6eCvc6HXJZCAoLxgv",
  "key20": "Wco6B6Ujm1SKsdD35XSWEGirqgrCPYECETcDCH9JQb3NX4VwiVU7Q4G18hTcwjMZFFbCw5CYYXE9A6NNc6hnhNW",
  "key21": "5qRPiKyH9E46ufKR3E3kKyfRK8XLNugJsqUZim8rb6QMUwgkMierMg2MdqFjPPcXyS6izWLoRHSDGcx8iwdR1eL6",
  "key22": "3xs4NqjkeVvUaLfnv32Rm7JMgK4GvRnEqtJoSmjXUBqYA4vk327d6Fn7xGzjK373GBXYXTDuv9gUEPDLqvLg7bgP",
  "key23": "TdpaDKo5G16FgB2H6zwWfPa89KdACGcrJtkVt2erVA6VwSpQsajsmzJKcHjpxWhU4aTWtviZ1dghvHB3jpSmdsF",
  "key24": "3NbthPTN9KBCVsmxGaN7Tg2JyL9DBPjhRhuDj2HKCp8RbFD4qyEvuKbPwbMEJtDFDnCs376EpwKi4JTNjyuPgMnk",
  "key25": "5wgfDB2obGJUm95dB7NxVrELRg5x4WLUaUm1WkmkTMnx4ig4oRHA4YYuXhKdRKbxcUCymV2B1agujdNHvC6bYVSu",
  "key26": "7D4CdpWKZ3J1ksKvmkNGP5Hv9HBzcfVBvwWctm2H3bCe67DfsUAmfHhwsrnsv6JdUH1uTwJieKiqcfx2ENrN97o",
  "key27": "5yWshFEzCzfrwNa6U3hXRVZXK7yho11RBKvVZf6AnKrvKk7h2hGcJPp5ENnSYNjDktLgBoYBSQc7Z6BZEakBc3jg",
  "key28": "65q7znPLs7Lpm6fYDNjkdj6ZQMBTZ885nhXQVhXfqekFjTwijKvd9ZEjiccQ3z5BKzJjQxWPiN14vtcBPYyE9xfo",
  "key29": "2RBBh5ew14YmLA1hSFfjV7YdpZo2FpUBs2phyjvYxTNMG1qkhSbHm1WnqAJqJcCtYy52ScCjtvV5QYYpDWqdFWSD",
  "key30": "5xYgZCRjgLe784DCpA7agzf4oefVqHCW9CaFU749rpe7oGhx6DbE69mge5TAopzE4kfidHpuCauv3qDcnYXdQoB2",
  "key31": "5p61SSN7BLWDgjpvMsJwyzo9mJgi6vca4eRKinWNv8RcFvuqiszJmoDYUE8eRKg9yyuaGWjQHRYiDdi8KzKLUjZr",
  "key32": "tyMoskkdmvBCFD2tpmWFtDNv4xLDpekeYaEr56nVPMhtNjiivKNdb2rmN1dPUTXQWtVTke1vzxcHud3fxFDSeio",
  "key33": "2NF55xNnR5KRMNNHC8TDYnbp8SEspwnZRyk4GMQDD8wFdiED33cVfCvivLaiXJSDd5qeuzvnXEwWUffcZiGWuaWk",
  "key34": "4PLCBUuUrUK9rhm5hY8Q81QYkvEk8X341LTsEdV89wwG9SKVwMHDYcaUQHJqyB1gEeAGpzF5PBThmSx5pUN9Qa4J",
  "key35": "4hRG8N5dp2wZXgR8RR7AE15CXuYN3KxoEg9uifu25xQRdU2pj3WfGvDGsoCBiDL5aBuxdqhiin9q5LNnUZXw9Pjx",
  "key36": "i2d5EcQBeJtph7eqSoWkcGNhMQi7yzEcLr4BFLk2GBeCcP3KxJLQG6pSDr26kbE7fQbgTDbqdjQQDFoBsDvAT3i",
  "key37": "5o8NkSwRE9e4rzxCtKhtz7QERvpHHZYjsEGE2nPekFBDjsSTbLeV9P7vGtEfUJfTLmX6DhTSW8ZMix9BcgDzMTsd",
  "key38": "5tU2DJ9oKBu41vg275TbiXACu9ZuVvQUJYjuXtRJeJoLPkSerPeMnTxRBjJsqaRQGd6Zj8zyEzC6MjX7RGD2YDj",
  "key39": "4gYTaD1GGGALwV4QUtvEDZ4j8reoSsuwFMY7zQJKzRqXN4ThQ8xWPCuEgAYgSGHrsnQH6t6cgYWRcX3NepvVueFp",
  "key40": "2mejAWExMHML8NMnYa1YjnowcSkDgWhBFA8ghBBZkqvUjGbB4M6wDQNayTtutDYGeAZpRQUUjn22it5p3FdrjoHT",
  "key41": "5o8JMwEoa2LMrN2uPoEfjXps1ttDhgSafVb9nqeyfA5eL6JK9k8iyc6niohRd31wXFD6a3ywftEJHDi5QSVQKTkn",
  "key42": "4o7ZvjCxeWHFKQsdsxnL8EXU5ocxuCYRZTaHrWTBbwzsfGg41Wa5AbvchnBZshhpNxrvuRbz6TpaLKg1HXNkxF9j",
  "key43": "3gj32pPQGegwoDMo3GnA9rD1khCUnpGbCiHuJCb4uUW1UcbyuDLxXom1TEpjqxkSxDU2WXKo7oHbwddY1hTPKRwZ"
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

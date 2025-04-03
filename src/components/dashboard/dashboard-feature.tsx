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
    "4d1a6ihwFDkcrLH2wbQ4vvenMCo1Tt5foCMrt7ca3cuk4Wk1H8X5DNSVnP4senxeAB3bFnn7eBAekPRcRZvNbTTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBvGPif1TQAw2DXDUXAuyVd7YbZyRqSL1cprnGnFTz2p4oFNydvsvZko3K6Ptb3shXpJH8E6c2V11J717vGLQuA",
  "key1": "2vLGUrMUF6GYhi9QBLV7KRHRpQZuL7XsDYK1mtojNqwCezX6cwSCbt3TSCVSB7ESQgnx1xgUzKhjscPpWGfxw3mj",
  "key2": "oYxWNs9FwkFC326ynJiATpCir8GNaX51EexBfzqWBgeDp8HEhn3uvir4LVD2zzDjw6ikMfsFq4S8aQpGEujcnif",
  "key3": "4j6SLzs7VsQTYAbLpraPHJTm4h8efzabrWdwNwrp8Xu17cNQcg25zGYEuKRH9Yf8BFhH1FgDkvt8xB8UQnBT9LTB",
  "key4": "4Qo3fpUFwcPM7DcrLyiq5W7GZG2zwr9pZ4AP3upSeCCeiYu6dhVwQN6iz8UoCw8MLMxM11LhA4TXZQadjwFqcCzv",
  "key5": "3cZgunpkkUnhhccw2XGQxxvfo8LATr2EH4qFj3cg2deFCdWZN9QjG1nVwQ1X2Mdy8jUmrPHgU66FCjyLFJswYKRg",
  "key6": "2PVNeD3xWEx9FotBAmvqvjpiZed6DdguCSoT567AJQCLe9UMT3jQuh2xpr6i64MmC3LmpjLgMQsXB95DvzXvtAUX",
  "key7": "2TiSZQTPti1iziT4ZnzWCzSYorEb6gKVyJb5WhmWZcj3YBkMYhTpiZZbqLRLD6se9x3T92wuHcszJzKithpRDNXe",
  "key8": "5WqpFMhJqjua62u2zJsbLVN7CULHDXckZnwKw6v1Pf6SYApGBYgPEnNR5bQyGNjHkzBq2M2mtYRnoe8pih8KP4YW",
  "key9": "fmCx7JHqPkd2V4KNKKYaB3pHq3TMoaXKi7jHbDUq6RjdRKJKNWJdDsrHhwMSAS5FzR7ZEJiLA6y21XEJmQsGNWt",
  "key10": "46d4eY3XSNuFfTNQVsUJhHREu5S788f25EuHt6vQroLcZzoZr3j7QzzfivMGJALVBXoQndTLKGWGwE9JFUdY4Nzf",
  "key11": "swG5jFamxbepcGenvTsPTbGg713JjDGNAWwN51RbE6Tr6JpMZPxuHsYnBabsJAAn3AJN8fbu4qCrGveaAaek2ii",
  "key12": "3Chx8JhAfuvPNSNXym88C5W9xFVxZb7F1bRdrwKY61BqEoPKX3N9JbrUnfjMXAV7QcHY9BFSZEDZ3DVq4JG1e5oK",
  "key13": "64nBFSzzFRtnVtWFR98eXbngDabMKkYxeABF9x2eTU5ZQMvKpuHFsuFXRmc48TTRQer3QkXFrc3ydrbuoay9axSn",
  "key14": "eDtftNi86yj7QB52QRU9Zc47NpfDm85VGmSjG5XKjJG6eYtpybmmxs7zbk6PJLizhXfrr17qhADDoxa8fHQn7SV",
  "key15": "55wMSyKuHP77UESrAzk5v4Wz2ZPFYJKXrbmjw8XnFycvQ3ku6dcqRocovpJrtFon8ofq35VaWuDW8jRXT8xcZbsg",
  "key16": "67kBRPSF8wW5BwcS9UPVZ6hhiH47PmNSTD723LqHmLg8nXBuHyLGjXQXBJEy59JWup61XZFMDeQ6KvRb2Ci5pRc4",
  "key17": "6mZNp9q3DMJ3f7zC3NgjM39zsr8bahijhSJsNWxyiNw2xE6GPbLqX37ivLL18mTmq1Tyn6iLL5dNp2X9xZTqvpv",
  "key18": "2qTdEthiaSTrfABabEmHTbDY64S6W5M85EPao1fY9NofkeV4A8xTJfCv7yEZHcMqP7vKS4pqoPCWW2fv9kUySsAe",
  "key19": "4ZBJqXp8hCknshR3nndMi6RhWUaHqAyMvdLBjhw66QeFYG7a6qJzBP3urSdbhrydeFQg7DrTPDr2TxbTiwcN9wvD",
  "key20": "4L9MwoJmmpHJEiwPrtBRvm65DhY42w1tPhA1yNMNygjeEj7Z1qtgcvGSWHC5zhnVDS7TAApcA6M1mdhj7xNjoFjE",
  "key21": "4FeBrNT7D1oJoyx276YZbqyy64J8PM1LQBsjcM2VfmB8ZvR2MADmWCwoUPJ4ayGg5q331MChzXsWq6sBiUCqQJFi",
  "key22": "3DeLXPVD4JphgiWTZmBwosfHykYwHFT8xyxxndWcVoMsypgfRgdK2jn7rosuNa9SbYVAJJxAH1aaLV37dL8myeUS",
  "key23": "3hVQV7k3aAEucww3xWF5iYr7xAYQqBT2gVBGqXz7Cp5T76qYJfMPzNV6eANDghERcd2bQpDHNNqtTczhda2WnDdL",
  "key24": "4XAVbDKRwrEtUcACLAxi9HAaY8BpngdESJYoUoeFFU5ZB4vVpDWbFmvbDhhTpqmcgCEXZLqu865VPy8VY3MQpnTT",
  "key25": "63on76XaGVvj8LyJHq5nL78bFbctRKJMVHt1JopdradzAUuLZ2bjfaWQyNvJFMVamLb5YXGpQ7T2b6G8Surr8fEK",
  "key26": "4c7ifrBi5Ba8PYL8V54cXnnp6Uq19ehP1U3KaUZdFnhaRiCcgnNxPfhgE6uJWyDrkQWmKMporWZYZQRFnytw3M5H",
  "key27": "48CzJH87SvodPfJcghUmg76DC6kGv9SvMoRJEKf59RxygqugpQe95SZP2kv55kbDWiqaq35161fknWnLppNJaPdr",
  "key28": "3UaC7WUX5Ar4jAAeX9hyqQYRtM5JeX5nGtSsbP4mkT83FV7RNyqkRTvE8p7oZ4i437Vbc1ZmALZPVQRFeCNbX1j5",
  "key29": "3SHwp5KWm7pakyCcVXFT73TYscrqWANHiEC3smomXkGEsE9yvkPfjDe1HDsEDP9TLys29Gaffusun8p7ayBoemnB",
  "key30": "2Y9WG7xRDpMw5TenQtsoLgU5Xf1A76saRDhGLdu3kXwgjDjQDxPgqTEkXywnb1CynnLbnoNyVdiq6eYNAz7NG3Vn",
  "key31": "3QEJYx76d2LQnhfJnsX2zDxzCJPaL9w3LybaWSU2rWBHkKiPRz4mRuV5116h3zfj5ETTg5xutmp8GP7h3fHTurHS",
  "key32": "2kSA5u4mZZmP1gNogAaH7jS4URUhg1ksTtzZmA3ZJG3CfjaXDgfAQMvyhCxA2ZWNMn6SQTLmUQ2USfC9J3yFq6bK",
  "key33": "5eK5viJ8CFGnCc5s4T43yAa7DNxoaEWwrEqCuooAJ76j8QFaB2S4fdmtKB5fEGcemZKUc8og5jufFpbLJmWqqPYc",
  "key34": "36wscPasK7fe5fcEtGB393AawEdFJKc4y9sSrAqHEbeZo2mXi27wNyWxyUaJbv4f6npu1rArucpRJDn24xoaAy2h",
  "key35": "5renfMuBxSJ6hbUzTuvg6AKmSuQW9qfqftcyAz1RPTT6fyaHSXzAQL3PB2H1gEaKgDcC9rY3siRdKk7a2m4aVFdW",
  "key36": "4tcpwguTunxMVopW3UyWncpU9gQBa8r51pDfKFiU4kiakCWwNuhrc8PfvfwJx3zEpEERr63sY87LoU5dWXQUw5JC",
  "key37": "3bVAdzF6RZ13n8LzF25vLyuXrTd2wXrmsAzRbNKqUCu4JwGbwaXXc2n6hsYYgSNJ8bKkb2thYQKzCj64Mkc6CBP5",
  "key38": "2APWEPdSaxRBezvbnEXQrpkwmAXN9GYgNeLx84Fp5K6L9R85t5bxNjv6uwyt7hFAFAMQwsLc2rnPpiizARG9EGKq",
  "key39": "3ZPrCiEiqzcM6NpDDoZygGjWagDeUKhg3MUeEoqvqNQZ4gumqXXaQyZDtmfTePJekSntkQXZEKpePrEBEjyFHiHv",
  "key40": "4USTNCF5ebXWhfrrn4KbmeLbQTiokN9w9G4hYzzPAqZbHVMhxjCFgmSbQEFTPiJfUViCufik35wyenwCfKxvTZm1",
  "key41": "4DhxxmZbpEg4nMMfmkKBbT6asGHqGZ3vh6uHLR8EmnGam27yToBvrZMVj3k9D2SMkYY6bbu64AnLSj7HkLGwV8sV",
  "key42": "5pWxxQWsFN97rm8YWaQGf33HouwHxc1sRLD9MYv3vy6kmU69KeU5c5nntaZiZZ5KybraCH6HBcySHU7hCLBYVUwT"
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

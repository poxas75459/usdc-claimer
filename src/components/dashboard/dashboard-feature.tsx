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
    "331nU5cG16rayCe8CH9Y8pjXVRmmDzdjP5jbKzPzkzA47MyVefXfvp7T2CydpwoNUZvx2cK72uVZ4TajLyVCMhts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tedpFxJ4Yy6DydE1ug13dBr3jnF6MhTZgifg3sxVEdHj2QRG2RAFg1mmZ8P4UwSzAKL31TsXuyfMVHrL5Vg5hER",
  "key1": "2hYeWWTT3bpVkTrW2FmMQVEXyoPAR7rfFGU69TBPkxDW1aB5kXCTBYCLn33JnJ3ciktJv3MF3p6z8D4juRdJKRuL",
  "key2": "2Y7GaKnqmWVraEQ4JZK6szU3FW9YTHRWVggAzMwmjp1VMdKTc2UNTE6ojp1Y2qPpW8qYKmmibRQEdPX324gg4Bnc",
  "key3": "3dYZYvwRvXMYij2YftjLRfYyTFtbpWrexMRvbDzZ63mBuVEBm8SsRKT6T8csCEHWY8NJtoevDYRQVSFxMnUtmZd3",
  "key4": "5ga3kxh9iaMdV424axzpBNR1A3YDicQuJbyUtKs3PwX7WYZirU8bjzYv6ciZC21qzrkWcYpMXddLyCidNe8qjPgy",
  "key5": "2J3a7sCoVNrpHjnVApYqajr6b3iYbBzRUTy3S5Bk8VBVYKyc4Wk8cnTtKzfn7m6247iiN6qaqMgDwbQ6Uj96L48q",
  "key6": "2eaHpvYokqhjRJYP1F2FL99UAMjfDTgUCjAFx1SD72pszQ65rejp2mNxaxkuxYuWVBDQcd33J3h4Fz4hwAHpZLwe",
  "key7": "5UYJRPKy68GL7JXyBsUoxdeEuRE2sNtXKuDXB8S3FnN373CJbADX9PX7j93QPZq6gyaWAwkAWSJUoK4uCBCVb1ZF",
  "key8": "2eSEv7M9FjUwfeAqfFVpFcWcfQR4EUhvVWXbeWpdBMi94vhgHrjRs7EbHmk1kT1dn7SDyaRv3JC9S1ZxSRAswc8d",
  "key9": "4MdvX1wepYSumdH4vCwSond931tknW5fVXuKhv6h396ehgkw4ezz8xKYyFjJpiMgg97SqdDAy29wCEspSsRpsWMT",
  "key10": "5wdtFzGxCPMcYVXyeA24Lva5YgAr8kyu9ixsrJvGt5oMXSFFWf61aFvQyV4SyHzvpgKqeoxa6ENL1g9eN3tPssLh",
  "key11": "3gr7LXqTzEnwccvYMypmCyV2gvgUNBbUfUBGob5L12QC98pjVR5HTWEf1tpxEZTrhz5jpJCm3Ea49j7T9FGvZJaG",
  "key12": "rtFy8ZQeF8bRFdG5DzmAB2ZPdn41CDU8U57a82k9kKEGd6h1HDk4qWsR9MVpy7Bv4fgb2ihsFyYLdVanLVZRxE5",
  "key13": "3DPaXUCXs94KjUkTmSo9SwA3TCxsAto4ZtA35mT1vd8MLTNQggQFNqy3K8LqBR3urcRNc77m7WudQMtDYXJhBTpp",
  "key14": "2BHqcyqkUoPPaKjAmrgJgWxWNs4MfhU8xpKnyprA1dPu9L8pyhPkY2w4o63UAG9kqV1zjmfHwGGNLXgUvngDYxCK",
  "key15": "3GzcWdA7x89QSAfvALJoZi7VkHAJXQuCTPrfXHLCKZ1zt9GbW1xxGqCqE4dcvJhB28UyhSph6KS3td7s6soipiWV",
  "key16": "3u994kEjU3YZN49h8bYwixoeH3HHhJcbMZrf6wA6qTxjojx4nMaDckYQVVyAGaApvPkGRQwF3vFgdYjbrE5u6Tyr",
  "key17": "3JgLVTEhWjDfBN7wpRJs6DoTAKeUnJPPz8KQEhiSxEKqKRrF16BRqVZbkogX7fQMHPdHTN6kQvPCpGRtVJBTgWuS",
  "key18": "2Q19pwWuP2PZjAf3xwtpimjjTfwnXy79mi9V3GYd2WidwvTDNgtWYyQdhxzGKEsvDMszG1xjVKnWr32cELZEib8F",
  "key19": "5hLhQhYUyNDsrzsnDy2u9ZPsZksauVWKtmjrXthN9dG56soV2QLh6ZkrdG44p22K3LLQHefFYxvKjPkAiDzqQjya",
  "key20": "29ub9SSjHWxLcEuXkaUdCkPKk5qWmajyunEakqxpPvvpUUS7uvGNCAVCXQ3ne2qd8oSTtQ3J3kzkXZuaL8TaV5LW",
  "key21": "47zfocZhijNPYHXHJ6TBnYeKa3KCvzbYB4C3ecn2HXotVKrcEeh1Z6ykp3mA36NhtE3n4Jt5baCSU6NtNBitoHPd",
  "key22": "42P8Y7xSXqwfSkjZgk8MkpA1jgtQJrU6VaUrjQpR7uC42ahVvYScKyJ8SLsyST11o8ToM1eVvpfQ7LKMcrY2xTKY",
  "key23": "3bUmNi578uB6g4htbf8h5Z9FNgAptCKVSZj97B4JE62p3jTc83dHQiL9DQsgPgEetMmaz9iyfJarvntqvQeaBGri",
  "key24": "bjAZLgZZcJH5rxskH94KE8tYww7Bt9XyHvmxPa6etq7dfhrRKSQPFjvgyc9bAmjAA1XPMJA6VjxNyVc9S3ab1hW",
  "key25": "VTFQpCm8KF6YBBQRkaVhkFWXMiGiXgepDGNcjpn5Y4WhpodDztUN12sGT1EeFQXqvb1N8H2wQVrPt6zjQDWf3EW",
  "key26": "2H6DBzGormzHJB9PFBMoVqk3TQedgkr9WUxqXaEtRAHqkKqfwEgVgo4dEQBvcrMuv21S5GUb54MBzTDhmGzGU1S3",
  "key27": "3LXGTJy3WVUwc8qAK1be3tFkUGuZsQWfa71xAqoSa6zZxZK1qHgsm3wa6iSdLMjHifMjgAN3DE3Y4HCuJ3pCQFF4",
  "key28": "5i4ovUzeDuyAR23VxfpCJ5C4UasoVwy1VAYjpk3D15dexJ9e1TcEeCWGUQjybDf9Ymbi5yTnab8bQgvMdG8pihYE",
  "key29": "2Fi3WkwaRMkQstvvGqweYZd8GjAbmTRykTKyDss1FPNKkG6YLEQp5a8qzdUYxz96RkUw4gxDfcfDFxPS5DZ6deFr",
  "key30": "2BfAW51r4WabP5BmAHEJmPg5ht2Yqi3hDUjcDVic3kQbMiUazoe5f9zFdYKJsV9r3jmnNAnHdMNfF3YSdGLkG1pd",
  "key31": "3kZA2m67movXtdMcrx6UABK2yx1mSJieUFzC4cDa7ZJeMcNsAud81FaPwuR5kJKrny5nCw7JbAn1dypsLbtBrq3s",
  "key32": "5kHJjQBJ8X7WzAquTfkfKCivGABJtWmv3LJB3bgBEfjhymj9x1fhHvFgnzpBiX24joG4qJGJtjWj4ejQcCPda7nw",
  "key33": "2AHUBVCm1N47mpnmwEwUTKYxcBfB5rktZvPis6uQyourdBYQre6PGVQW11cyvY3KvdbMan6zp7rrsTH93nnbefAP",
  "key34": "3R2mYmZaRTHyKvqLpzS2NJ6qCw9yrNYhnBfpVK8vrQGbSw5QqyuRK5UvYpffp42SyVdUy6RZ2uDrWMT83hb7KhG6",
  "key35": "2gbfX399XxWqUU8GHRQAg5fHnisqtEBhnqT2Bgtb4iddu1FCYcjkKYgNQKKPpXrvpfaprJjdTfuDS8KCuHT9Xt8Q",
  "key36": "gGDnXpYwWAt9SUFztDmuVrsT3q64iqrgJW5Sd1rm1ZWytRWyG7m9kL7b7EkeFPxC75H68JTHz1XZPhYSBJbBHms",
  "key37": "2VQxwbxjx8VK93YkEQvrM99855M4LAuDsd1Ng9QTbq999AvtZxqC8n7sk8eS77AhXv9U1Pc4kVxDpJ9wn8qf7bt4",
  "key38": "yjSVLQ6ACv9Gbf5iEWqW1Dikd8e6tyXveaQKFyMcvFsR5EFELAuGRFCX2u1RpV17ShCCparh86i1hwg4NRKnAME",
  "key39": "3ovAz5uSGj1cJFKTtqWxXE2w3ny7k2tJ9FTa6M4DmKfTWRVoBKS4sK94GqAvbNTEUK7rbwqsd1Q7vNStXYaRA1ZS",
  "key40": "3Bs51ZA8JTXH6LeAiEJGKZw4jpgA8WzyWwmz8fVwHMyF6GzEhCs26dsW9pH5ZRxG7sEeVqRFDxWZ62WrwehrhQAP",
  "key41": "2aB4A3SgvVa8pE4Wjhg29huAGYTYa7FmQsb73AKTvc1rZgNxquMkcGU4FGm88jxyrW1nzmNNCit9UumQTjfaxCkm",
  "key42": "46GXr9boeqbY4yo8KuAZrnnsm9dQk8B2njAhg1q56kqaB24URqthyVpPQD9tm4Y6MQBZ78KaLGUdPy3kioGTK1V5"
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

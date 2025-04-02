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
    "5Y35a1X9e4Yu4nQjPLFdQ9VknoicRXee92EtYyE3Rz5x256Ec6iwt2LvP3wxKr7a8KVr8vDYJin6QyaprdbpuzLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23r71wwdu1pgZHoewMhziQCVqnJosLyjqeLGYSviJoEGhdsb2djYkXwc7gwkwKCTPVnLL6U7y75Zgh4qBKAUqaPm",
  "key1": "yvm55zJ4Xd8KgbjdNZuNoWQRtY4egBSDPkFcqHjXLJzMttTGhHMwebCyg88wqstE9E4zAue89BRQHetoT8AJQyu",
  "key2": "3wsSUcg6Y3htfWZtbMRLHBz32TAbsyZEdm9ywzrDuFMXJ9nfdNkyJkwJjqFK5MxDkCw3jKSs5HdSYNZz7mmwGsp6",
  "key3": "2XyPAJRc9Z57x7ioQcf3aQCPWMgZMSpJNZ5tUnR3SWv9PPoXd4vp4LUiFBMUqS77ZF6Q3offT84XDbd8KKm8M56r",
  "key4": "2z5RzNeihzyouADNUYE9xeaHdkbjAKmAp3Qq8bRHUXnZxNxmMgBUDnyP9BQGe5jyPJ5qUJZLmQWKJ2sFTuhqLr3",
  "key5": "5c63dUqGfq5MaRWVGaU28ZgyaTaUsUhbcjkLZs4uVE8uXNoajpkCbNCQQmU3wzFSwvhKcZLW3fjngtMoAyixfEBZ",
  "key6": "5JfrcfryJHjnRSVM5PQU74f3wfsfzWF81yEAGnYcYs8qZpwiJaGJJfuKeCQXXNvmF8fpJLeohWvEwSLjxsj8o32m",
  "key7": "JzGgebJnufSPFG1TwSQRZJPHFNpS285BPmAuGAUkcucJohHdT3rN7UbxuwyBPk1deK5schCX9PbjEMF77SqwvbN",
  "key8": "4yrdY2hbsyQC6FaBkTLw7dYRakSdRtC61JkHRxhCnQoe8CLo45BkJ8MbysMRuttJHE5MSFyTHzkxUphmeNMUnHnD",
  "key9": "5924uyKVZ1DuaBeUbsRTTTQ6xgkbHXaKfDefRp18NAkcYmY3ZCydFZ7VvMZijterDWYjukGcSWCxvax9amCPyyot",
  "key10": "3NvVyaT8nRR65BHG1h8QKZzyjFoguiZ6Qfnd2mBk5v45cco4iRLqoeefRLXR5hN3s3VwME7QNewdp9rJJfgakKcN",
  "key11": "6ZvgoAQYQKo7gBrz5oNZez8nFFaMHirCKVwBM9Bw4vzMsmxMVxphUorf7ccREn6zyuX9d7MGFHqHQo8eD4wKyWq",
  "key12": "5ecwUiNFxeLW9zScJhMpEyxfCEkcXR7oyEsk9h8evT5jzMcZ2m56AT1wAWyJTwxdwW6MqFfgTwPx9FNBvuKZijsL",
  "key13": "4hwa17G6FuM23kFSUbbMsB9kCwbtawhts1235E1N7ofYQgbyRJ7qvmfXf2yD7JYUP212SFUjbxMjiBhKc4Zu8jiG",
  "key14": "5t8C6mJQwzPZEmkVgCwgMNYWBnioEPiQHVkBeZvEtFy1QQwh75RaJoMYzKw5SgtYd5MmXxAo9YMYwvEVM8R8R5jW",
  "key15": "3VU1VGbcMthEPP692ZX7RgWUXfNzV65CweWJ4wGV6AX8Aui9fxgY3A5xh9yqDccmCaqtp2e9JoZSS7mKLD9Jez6M",
  "key16": "remPuMvbnZm2AyzDp94mNbwCWEDMUpsXw9Min4sJeN3eyi6crQz6JZuBE6V19bmiWUvVDHTLLJweQRTn1VHqzhq",
  "key17": "wcvhvJoY7TVz8y3UV1NhLfEwjLRcdW99AxLoboZ949xUELBfzS6uULCUB9HegiJGgeta8XM1RMhotQacn8WaMvp",
  "key18": "5paYVsVq29ZctPnu5gVsqYqa484z8G1qk2XhtxTAWmrv8frcxjaAHNDB6k5Tgx92PHHf71uP6QFU8VUxPwzq5o16",
  "key19": "48FvAjcR4fji1q3SAJ3SZrEsfvyas4BfCE1cVR2iCishvTPU1mFVqvxRBuLViU1S5pRJk1CX1pVWeMBjr1GvmjaN",
  "key20": "3La6p5KQWjWhGm5S9LHsQMXFxnxyENFW6A1sHZ5edqqbCYQUcr7wmmcLk6f4nxR2ugd5YYn7CiwhoLJPVmT2RzXB",
  "key21": "5prCdvMM5btKFzoXyFFp93mLHEKCxmXiq9FBF1eHeefWFWZren9V4tPsJ2wiQsm22t1ZQmMMU9Qk6XJp3B4hXVZh",
  "key22": "4tnik6pMM278HNaWXBeMwmngrqTgxWRKYbNA8T2wHZeHjLPXPvJAA6g9gBVeohe4eQH6RuuhHJrJcUYH5U6QZ79G",
  "key23": "5kx21FNWXU27VavhtbFBkzQC4BEg3ftUGFGNrwDf9TXDXGbrzo35ZyVUxfVZvX4Gsexubt9MfVemD6x9h8jYKiMM",
  "key24": "5meahf8mhisWH2MHmrh8edqX8JFS5zns3oKaZ5f7RUzNnjur6rfcg49Zegqd7UqhkgsFvHeEr93F1YsKEzca16ao",
  "key25": "65DY9x1Uu18SprhZdqFU8Xbx9PKrkoWXGboPXbU9Dxgx3WxHdimEZo8mNz9jfVNW9tnua3e8Ha3La6aj6DF79WSF",
  "key26": "3vcodY3rw1Mqiv7JvVNnbRJVY5EpXmhMepFu1Eqh2rUByQqEqKqYUnziRLWuK7Cv1TVLNNU3Y81jMnXxUU1t4RK3",
  "key27": "58aHjoYPV48ReA8WUWfLLcPG5LYnMbfy6YutguKn5QJiFdKNEn8R5XHrCoLbXpxH7Cpkcb66jRkYqAciNJ4FM9QQ"
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

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
    "4gUhQxshAcgJ7w7QT24WTESUnDDsirsFovfQ82sf21jW3YLazDVFX6YBvoMvingsJx9Gmwzif6gDM4RMbusyap9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LgpTfvC1QUYkFyAZJNUDnwRc3iD5FhzLaxccWRpkUSFAEfXdhaJ3yQqELFxBvHFz1Zj18PxU6h3sAr7s6Mcfbkf",
  "key1": "2Mhfo9wtwDTTPgZ2JFfNuH8AxNEy2zZu6Kdqb9uKieabLegN6yNiSrutdRvZyyVt1uVBz3Mrs26kiTEgcFY4JfWa",
  "key2": "21voNBpbhbciQesUxJJFB7QYPo1PpHbX9J1AvRhJ2TWLtT3JZ1MdiEThkGAXbAni8jbxGtE8HCaS9tpStvnfSrWq",
  "key3": "3rsTiCmCbZjghana9E7ZA3N27HdsTE7fLaL36fZurL1Dxbi8ax4jNRpJ9vM5Mzve5KQXqBeRj2bBiwLbLJCooNcf",
  "key4": "3kCdDbUigYyS2QHp8tJQ8wHNehpQiYZiXpZ8HuuSJcxTyrakfYDJbDYoL8p5ja5ipEWpmw5pwkBBqK2TS4GmBXuU",
  "key5": "5WksYrdwYXaLztmKzq2KnfJMAfFMsqGXihbEduVSU6DGpBJK5NhuT3vworinxbR1efNwgYBMMvBkVqB79Ah6HmRG",
  "key6": "5zjFf4XTXkSmzKjx3h4VwgguktsiZPtch9oupWgNCVscnuZKhfewDkUdzBvYL7NiUQPsYyHcsJMcQ6topBFDY3M9",
  "key7": "WPF5yJMH9Q7LrDnRcMq73QVYrWs9kZD1xkANkPbnJpwHZxweRqHYVZZ5cx4j7YukjRD58dKcazc8awDfcx8HPa9",
  "key8": "3wYXVsAm3ijbRa3tgEXxQsR5HkQj5JEDuEGYsUXWcoMfX9xH49V7ssD3hWUwX1KvQ476KMkGFwfuncJJTmTsRWgN",
  "key9": "eJtcPwYYmEdwokvo9KKo9CCBm8VpvyXCzDbvYLmpPBwRPFAzA7hAtgqJJE6MA1tkQqL4n5Ky2cnCxxdrKua9tL7",
  "key10": "5mH6Lso7QvKo9uBj3ecZfKU5tUHzb9P3QM7D97AqE8mVfa3hNUJcgZai7qTQyWnixLNEUBGCZWKNCoatnixJRwYJ",
  "key11": "2EDhzvMZW5LXtTpqD38oi6xzZMjdovWniRw4KFWXuSMaHGcjzyA32bK4hVVBiMswnXxjneuwo4mtZWAYoJdJnUbv",
  "key12": "4BKurWET91JZwiPPn1tZzxeuuYpErA7WYXBtL5KQNvxJUkKXs8iK3mfF5oUEPaP1uavfrX9x6UHvhMTYfh7j9qbE",
  "key13": "2H9w9FmZeFDEyaZfWQiWm9GtRm5iGTssrMZNaHv5h8Fw2HcjJyY1EDT8QyZKPbSvfLk59GYwifsHzVfknRuam5pm",
  "key14": "5reN36Ddoc32fM5wLfYAPLpHTjUK5u3sf3dbWQiKyau4C3YxZ1PhB8eGzgXbBofiqEeVFmZJeEC7xXNUR3hAUWPP",
  "key15": "65UsFbrhsQqjGZdLnTsC4asV5sNutz7sgtyrzFqxykxBnhtvQgR5H3u7qvQTu81B66b5xNDkinTZB1aJ5B5QAQBj",
  "key16": "32Xree1n9b4LpnPaxKxUeQiWdZkBWXnqWMPufHwNwECSanXbFsXgyd6ppdZXgTnwHSe6nvijuMb72f7SLB4SyNPT",
  "key17": "3ahyuGqfF1AC9P3bvdMsUsuX71mkQhXCLB8RGEudjpcJGkEXWZoDUVaatfyg9QY6jmv13UcTik6wWWyDWTj4s63u",
  "key18": "5hqpRQzZKUofy1z6QXTMFjdaiuYUyupuDwCtwQio8t4qE5tyuYrGU1h98rgMkbTojzqjeFeuD5Fy8zTW8ECMr1Gs",
  "key19": "5vNKquMJYdMXpzaqCN9wMN8d7oGgyRUJtu5qQeUp75cfMUw18fzfP7rArzRmCoCDEyxoopC24Hck871nSH2BbgrE",
  "key20": "3YkMfBCaAzHQT7yYKPCbJSepZ8ByFTYzw6TZHi8N7NMEVV3dhR325GqJwQSF3cNMk5iFG5gf6phkPCYTvS2bYTCw",
  "key21": "3kRmnSLNiM7J9zXHAvC2C6ho7v166TYBfAeqBsrXFmkbq4ZvEwoiLXDRq6Ft6BwaYudbSdvoJUqRT5XYU918Au3",
  "key22": "58hNPsgK79HfM2xu7JhQyK348X5LTJMm9SBq2SygqJeDuyHxocQnTwQquv5pDoL8FUJzTxu9iHXvChrAMFaiyhkd",
  "key23": "2N1XUrvduqLxSsgeikLKNmyv8bZxDauxVrc27sytcqarg2JGmFCyVopy1xDTPxShYauYmgp39cVXkqxYEDN2pzgN",
  "key24": "2Vybq8c4mjFgYm8DhQ46T4tW8u4EFNkW3yTuKFoUNBEWqWDE1V5ApKdnpz8s8GuKSVUZkLPM7kajDLc9b67vhfU",
  "key25": "7nZi5vgbdmsgBow9ZK7vNX6i748nq4TEmpPbXY3uLfT5E66qYa7C624oaiaMZPfH75AynwmdyaJvikavEqW4o1K",
  "key26": "4KoYnFtvvNZRah6raPDaY9Czt3c94dSuPauXT9V3GwAxAiGamffN2RyytMYS3tFc4WZBzCDiwZkb8n4nkWQXo5zh",
  "key27": "2ehtghHuhYAERjkxNoKhjhAa18dKVyC6Ks4vZUihPhayC3T9ZJVRFr9HzzmzDgjC47WriFfVChcF4QNoejW3n9yk",
  "key28": "4qSEgLH8RdJzY3QrtcaepaT8RzRXLXW1u5CDwg9APzPpnsnSQYozekqz8A21UoUPLDVVgMMC5KNqpxgEqpfAeDpQ",
  "key29": "KLQTXzJJHS81aSaUYp5bCKb82KHju3vPGWdZFomqnU6bjXZb9fNVVR3Do3FbHPLRhuD58UZDeBS3JC1t37s8wfB",
  "key30": "5datzQqqt6KKBBWtRHFpuhB9Sbymd7K9WbNEjaaT2jSach3ChiB2YayaPBe2tYVucPF9XpJZQuKUDtVhhQrorTD",
  "key31": "cHtjFXKEw5z4NJebG5b7B5Mxz3Ygpd6bF7ybN5yAv4xyGHNybA72n6BLxjJjhztC4UiQucbcuwXnRQjsNqDrxhV"
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

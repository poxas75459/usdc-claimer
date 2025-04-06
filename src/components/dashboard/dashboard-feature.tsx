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
    "5nQedbnMLDryN6PLjCfT5HMcVA7txUr4SHvVvemytN7gM1PCJA6aU5id1wcS1tKKZAezNNcEa1jJWohwgUF8bKcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkyyoTYPULXp74UwqM5RDLhonSAfJbdGQmn6KBTTgP65drq2bbUUm6DAikzkcn4BB9gzmrcMKXAvyo8FU6ef1zw",
  "key1": "3cHeqpTJ6V2LgBf6hD8GhUZ8rXE9HaG4MeWYo4VtZh5bXE5Xj9FbZJUE684XSZMRVErb9hk9EG1GBMVHQNQimwpM",
  "key2": "5aFPh2V2B7BPZVJ1q4iuoAQbwnnrBYgnFdg2ueKd4GZpqRRXnphBmyTj97gagUHykXJD2spHRAPrCZDSCpGYNaFv",
  "key3": "5YFjwG6rdsDTMpJjMPUpVP4SUh9Nxn6sqKkzEUec2kYMQG83ebRGGdafLrU3Z6HS4bzjberPhyAz59odDjBsXiVx",
  "key4": "2peJn9oUPNHNeqwHkng1k5hGqbBFte7qGfqNboDo9y1kJidMhsJoyjsNkyWi9awN6x1DTcpSqkaQBToDPMHjDHff",
  "key5": "3FRTQDgYRD1mbB2JzuNNYxdh254CfLYzzPEkjbvPiyyt2N3zRkbLdffQ53CJVJyHh59pNNjPCoWsoDudvWqJvRsf",
  "key6": "3ApChQbh8nozUXUXkYAVKhrah1NJNPyivaoaYQ8xusXbVMyS8G83qABYBikM8bMcycAmrLXrQ2bboegrGAequfbG",
  "key7": "55ZNH6kWQ5AmmUr6bzVXWykhhfkjk8m5VBy5So9kLJuT8ddHawcc2YbuWwbET5pSjYjGEk5EBhWJgqop8WELt4b7",
  "key8": "4WsQmuhrSNnrunHQZ5B5AUQxQw6fZhbb49Ujm8JEEXYw6kyfPFzR2a7DHrvs8izkAV1C8t4n31kXnLm96UrYQLuD",
  "key9": "YPSLRaTnXBv3DE1DRWvcJw4BN2QGAYCAJHdWrUixEJ5Tfvcx8ZD5EaGiVvgDBBM9JtJkSeenYRJ56sZUFnieHkX",
  "key10": "5M86TnFign9c9dJ2Uxivo1KGC6jqLr9rmWVNrWJJKmziDUpZpzs1cR6cDhP64DXmpkHsMSEd1GLiHu2FThNXL8oL",
  "key11": "5V482MRw92puBbsH3w8s22nZdTjX8VvbjvfX2SBTsUKvansgjwYuKrmnxn1aedDStTTbPiPvkHdXUrf1EaTdfWbx",
  "key12": "4eL1RwL1nkaqCa3tSinj2oGMcHoES5piRhw86Qhiga9K9x7AMC8THXMgtsS4LiCGE2eSKi5WphoLEEfgmaUU6b2X",
  "key13": "4RvbNpCzaA5yqUk2fuPb4uzQQU5s8QcVDTe51pqcpWHW6GowfxT2S1RVXUB7eQao7UFCKWaNwh9YWRZ6QEQdnhFs",
  "key14": "125RgZsEfeB1bRtjYebNR8Pzf3biMRg8tNWpWBSMjyadUqqkC3ae66LztmJxGub2ZMwCV8A2rVvDfSkvYGZGUuz",
  "key15": "21mvnfChcqempKxKBvAQLeHbJu2uojmUQj1e7oy3wAT54K1aqmXKu5d4mwpoJQR5vZnuU8eXdUzFHf8ZTQPwz5ba",
  "key16": "3hGjV6m8ULpA2p1Dj9cs8sHZNiPVwdc9WvHnmbbMUWckchfVyY8Mg2jrSpc3JzGFJoYaiYTac8sEizY1tG4CJjkM",
  "key17": "4yh71q2sYaHbDcLh8zTPYRior7a7W7JmRoqTzpDKECGrKtdS94GKyoeeh2uyvN2ttpHoAFKDK1oShrwp2gB1P71E",
  "key18": "1T2ja6yZEhMiBqG1QV7Yk8DbbBuKUWyTmpUGYrn9wyKATNbXmZWcK5xE2KMqu85YT3FinsN4DZ4jpJFqMqtyVnh",
  "key19": "5vEDaqz5bAeteqU858b2osCagcmtEJy88WTrdVxydc4thSBcT7U4zHTurRgHZqVbxtder8yj8HSjin4VFhfrwyKy",
  "key20": "57BSDU6GJvSU3pcJimnskCQT66ZcRrmgbfBDPFtBcUddaJveM3wSQHjWNdc34vffiba8A4JfMBF3BDTRxtjWgnnG",
  "key21": "29Y2TZ5RFpb9Mzr1Lz5UX1guFt4NbJxgpLZTEmshR6NuGNFwMtmruGwgrrVf7twc4Pyk7FR6NHYa3bUdtQRLe38y",
  "key22": "3jkU3LnsL9yThHshDPExDSBap9cCggcm2EdCXzQzeRGmGYBX2EuHEeitPJUzbkF1AvJWyBzontuQMXTaBWKxWRnL",
  "key23": "36xCnERc4fpJpjVQK8WppMqHT1uTHfahwovCXxTJqU2jwhyd272kBnb5x3ZFkox1yCcXGjmUWXjxYpXFfcAcCBNB",
  "key24": "HCfBzGnZCZGpCKBayfnFRKhqc9kK79M1dMPXCKubiokBZfb8a5nfPHzNLQvE9dUTQ6ZgJR1Pc3EQfYTbfhjqY6N",
  "key25": "2JgzWMpvD9orEaxWwRPFiUXHs22V9YfDSBAt7V53twDsa9mdUrYgqGjBBg9UzvBae3SRWpHeEGhFcMyUKA1tdPNA",
  "key26": "2RrsUvTdyGCZcrx9HSknaSycFdCxpUxq4XHc8tnh3c3DCrc4v5FD8UoKfxaPbVmQk37mYHmE5KH1MsKyYFxHjucy",
  "key27": "4UtL7pRqUMbZeMEkjHwUXUbFfu89FMtoxjFEJw5HRVGgfQ9o8issvufBNMSYBiRdbU6AdcUxDs9dqi7w5d3TNoKx"
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

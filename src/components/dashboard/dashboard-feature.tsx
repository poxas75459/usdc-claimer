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
    "2EKb71Vxpiymp7wmwq2RBGDL4UsWwTpMaYbT4zN7AGEN6QL6eBXXqkPxhDkjCZhXGfkCsNRryozHZ4aYsg35hXiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wDY2HD8d98veHHtEZHuJzfbYSWtzaktUXmwKUmJE1ESzMhYykBXZnmtBE9cqnwD5rugAERwkZM6EbmQYHmg97R",
  "key1": "4qfTQLrjRgqj9HWcaQsfWVMvf8gmFmdMj8xt2u1iotTdjNFxW8nTfq3t6nQJcVNtk1hFLWLc5zSC36SSc5Tf6Gi3",
  "key2": "2NuLbZKzHn8v83cv2DFw19Wkr8siVhTTo1zy6cWJEXdw7ByRqaNkbvGUCTznAbymWo32oHePj8J7DBFCWkKmEu9h",
  "key3": "5FViavy7ztbLXS9SPugDWM8BfgnPw4tsK6aqtWqJFiU6YqV4KnPCF1oCYJH3CQ43qDrBR4mXu7ThVwoB6R3KvcTc",
  "key4": "5A62pmMB2v8o6xTNoxSvJDdeH5rKAoeJPnYRW17nduudYJbipUhjL72tSzDJAo6WtpL4Stdqs4aRFNdyz3HvJ8CZ",
  "key5": "Hj3DZ923gYyUbgwUF9HQs9mFB8641EPURHeEDx79D8JXY9c1n2wtXX72o7Q6nB72xcnsXjQhekFDtrNLoXCYKqU",
  "key6": "5UApsvmS1E8VewiPpUHF6qLgkzdA7zYsC2trQPReY1BR6Tq7Wmpe78QK2zGdBy7LPmkKwrTCuSwXiF5ibNsbweQL",
  "key7": "JcvFgnyq4xy78x7qhGpa84hqHBABzbPJ59foQfhvcGPSv2F9tq3axpVb8Pwi1JSA9QroUYWKFitMA3PUPTSwuXN",
  "key8": "33PwWbgd6EweSSotvydE9DbqGtmgbim4qkbNcNms4oVWKzD4oG9zqcLi8dEDWMMiSGkzwA2iUiBG83QSKMWtKbV7",
  "key9": "5SyNpdEP6AsE5RnfQiniWJTDyrZrRXQjwue8AuNdx4i9T4PUhoicDN9PYXnfTgN96cfw3RXg18ZzadAV3dRUmius",
  "key10": "2Swzf8MPbAiX6BY6Zno4hMnr696hT4BHrPuwwLPhDGTxDuCdhEiqLqKQczryoDMiXeofiFykj731xMnRj5iDsQRd",
  "key11": "2J3s8mWfWjA93ci3fhtsRS6vdUyxGeKLz8LzCWk8NjC7wrZPjraWffLRgA4wHmweaDt5pW6uVQXUjzmBBWjZNfgQ",
  "key12": "3VkLgNMXJgo8mup4pdn1hLvZUL76KkBeUKdHyN6p39SvR9MSz6WsS7Zi4qvHdCsQa7tSXgVhvPrCgRhjk6gsJWjF",
  "key13": "buRfQKRKun1JCvXhCTGQHUnrr2Hs8hxKrsEvk1E5E73QbKjnAdYjE4KAKbi6RuFu1r8mnBb2QnuajJ145HQwrNM",
  "key14": "2aMPuoy1QuQrKbshxAFQSBXvkokoFdqyBPd2B54ap8NHbJyVLbYtjtgAukwJEbMCk33PhyYdZEqGeLtWEGxppahB",
  "key15": "NwbG8WLLxy2j9Vu8M54HPT3tHwAJFPPzYHKKUziqMpgPbGbwHJcLqo5Bj675YZCzfaF3pcTuwmxQXoRap6NBSFZ",
  "key16": "BQ7wxXWBZQJEKcY4BnrHTtGPMdfz6AuEcr1W7BWk5SuA6RsjEmm6eLx4pjMv1ooePKpGGhqnNEQTcChUZgEAeKq",
  "key17": "5RAzthj9BRLPEo4uA6YdH4tMv7nJjeihb9LDZjCDJeXFLvQ88K5ieLixKKGoYSiMbwFXAz9ujPmjoMdUuHqAr154",
  "key18": "gUPcgdbb8gPTF9FQJ7eDMGb7ZqrFQRBcgg699soqbJQQXpuSb9jZf5WdHczHsbuMXuoiNjEZtMcxKx1sgpS1RbA",
  "key19": "2Q4mYcMB8XHWa5yqEE3onD9JnzNiatXnU8x7khSitfNmN2r3ZJ1b9FEwRXnvf9B59NGtzbkxGu2o78gnofXCvqF5",
  "key20": "4GyZU6E7wbeZ362NCnK2ronhYXEAytwMGymrHJcCCtrqANJcuh5Bwqsjxpi5N87LDq9CQUDWAsSfAAbi4hcqSaVa",
  "key21": "4scEzNBfQuzRbHUHDXkkJrzp6TidxQoZnBsPyg8VcHNDhqpwKKkMmhasptNN9H5CsYPnPeqJs9CMv7EUALDjRvUs",
  "key22": "Hn26YFmGUWLeeQRAsJ48cYo1jeHDDkgyXY6TJKYJSLs8ioRantnvraD7V2Zh4iCEVUL38WFSaWLisc3Njn8e4u4",
  "key23": "5U2N6K7LPygV25otGMLKVzqyF3zVeLxU7ahCtm5mMLc7nTWMqBruqSSXrkmxge2wHpBGB8q38bkFMQW1HoVT9PxL",
  "key24": "ygP5Rnj3Uaqc8NdBphHrj6rz9wzSWheHNXTrfPHE658djS6s9MhDUB3mBkwJBZbdYUHKXcEfATK8eEyyV2HrdEi",
  "key25": "YoKUwcAr9Qxg2e31faUUDzz8DG3SVHJhdod2RX8dUxwFuGxQWGpRXU5eQAjS81BVa1DGFL5Y1ac7iyL32Y79VcN",
  "key26": "3QXBjq7XLvkRre2WB4pixmDQKs4zLcfEmMAdmS97Nt9pvr47Uf7KyMHqcLxcuoTuHogvZBfz3DmiYV8aRqZPfX3g",
  "key27": "23L15KtUDiwWKqCTRsnQCN2JkJLfeGdSKu3NHm8mhdzpB38fNqM9hQpN7L39GR1X3aEt6fB3nV3WxbLYsxc2kmDg",
  "key28": "2nkahGnwmzuY8fRtUhhxdF14sc6yNgfjHgqzBhJEdAZNvA2H82WrN3yqsVQw7tpqL6tiVD2NPmLfShQmxcPpeg2R",
  "key29": "4NV88Fp5JnGNe1G85NzUmFUT4AERxn76wT3FLAUi3wxXxZy64fyenpojpZMN87HmEYuomgQVahRrH4ityBNK2cKD",
  "key30": "4cTTjd8dLDXCE5dJvw72CbUT1pVm1DCwn8ZQYXAi7Ly6j9v7cYqvznDG47TR3dsGHcCosrzEQ8uNGzSo5BmzAbpy"
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

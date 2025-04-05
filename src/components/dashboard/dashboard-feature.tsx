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
    "5QA2DrL9Xgk4QmNyBHeMCiLfsbuPyTBvNRjyzvUFi1j6Ub9VsaGkPUw1zoWKbYkg42nnV1rdiNWFJ164P8P86DVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CJhAWJ8LuCEe8JRZTLfNX6huPZNXcHtGeNLNGP64BpGAyACW7ZCiCXotGkqxRcUfreTiqJ3FJEMj9Jkiy3QmwYa",
  "key1": "53dTKjBCZXhC4UBswSkEsNNc6VrZT46xWFZJqvSzynHxRve5jgfnqMb1YqC9GDF4YMW6YM2CkEbCRcw9NNc5f7Do",
  "key2": "3E6Qn4XWGkwHTSdVGtLg1tSdqd3abMYKybaaPC51RwhsNkuU9mLg32VGuEZPjvCSfK6eMsNPuUj1YtWasoimBiLD",
  "key3": "5w18cCwAwQ7DYeHBhPbJ24mhWkSeuxnHnhxU6CPZS7Ptozok9SE1tVtBrzUCM4UXrqvB177psqDHAddqAay9BNWa",
  "key4": "4MMiyepmhcYodrACKsyQHKLp9wB7FAudwtTLGDqnUN8KsaXGDhC5kHhYf3hV6YhB4tb8pNnfByTwgKLiEYBHwX17",
  "key5": "2ycTeT68iziD33sEcvMNg9LBf1QyYD7oXuSZiD8RM2ZU7xr3kXgz6ahUKPuoSK5DyKwj4sYwwVyXKsAXPKRRukma",
  "key6": "GrdCL4RdF2tRr1riHYngstTuKuuVusJN1G6CwFHdjqQoyJ1SRWBxAxuDa9NKvxcQNmAHKmitYkSvpKJ3CthfPXF",
  "key7": "2pqi5ecGDwQYeXy2F8AETtC1yVbQCR1ANWGiFXYKLmaA6HSW6ZTP7RvqqwbwiN2fBVScwAdugjRgaV1s5DmsQZ3X",
  "key8": "CFt1Kfmt8Yzyy95VwUZTxh2u12GyAp7aj5x7G9PHaMwhTUd36M4Pr4fFS1G2WPG5M1H2P9qjYQRLijwMmR4LjUr",
  "key9": "5fbq7rU7at5434PKkkccnfhnZRxBqU4FDMpmUj5Co5GLQeHRgvCaCQnk5qDhqPy14Y7ouXkLoDk7NJ7ucHhey1Ux",
  "key10": "5NWJPt5gUdxB59FknCLubZKnZPyRvqzkPKog2pzc4KxW4hJUQdMv4A4eUKSmsGzaR9HmhXPkbBee5a1d3k1LWLb5",
  "key11": "5enmH32nFSJFADFQ8JSw2CZUbWJunAhNJLVk54a7H383nRMZg8nWLTpLyP5zmkw6hNJY9DPrVCddX9JoKbetXPpM",
  "key12": "4omQ5nEvjotTxkBBW1hsyTF34ondtc7DJa7JJmT4BHWY1scPU3u6URg21k112jAPhPJSK8zx4zK75Dr47int21mP",
  "key13": "21zuF7rpd9EqKc4RJZwE3ckGnHCC7A7cXtzzGRPK9xG4414fQWgbPPEekKgCSqPF2eSjEPVaCjwpnJnEpZ9JajYk",
  "key14": "2Fp5nCiQeCRa1uGxLkZgwbiKuCpvGuiFKe4GHWzjUFK7u8jpAT4WkioXYwApcQHZR4YB4C279WTGqCpGLTDAgMyq",
  "key15": "3n5zJTrEDY3znCCRLx9Ei5YYidpfjBvUEY4qN62v66BT8iKgAxxxC4DD2fuPPVMUQLJAjYr9HWRQhTykysRuvgXh",
  "key16": "Kqn3HwArxM4qdivPWwKccQzu6W1HWFEQZhgkv3oR8jBBBJQiCbscxBs4Am1egyLYQoQDXje2tz6bWufponyBwaY",
  "key17": "4w2MdEa4ZKpAPi5XZDeQnMT6p9FDtePf3N13FZShHWSBK1cAZLRrrTmi1Md5zNmMmDPs61AksfprGfowjZzQs2go",
  "key18": "5osDc6wQRGS5CmuLVK2TAYCR2W8H8Fq5BRby5zNwD77rHWPyQ6kMuoQtjtugegpWKup7unEb69aySeX29QigxF2b",
  "key19": "6FeVCH2SwfcHyNM5KsukkgjnWxUL7ZuCTtj2G1MAYGQsheK2ty21a4n6sduPagQHSJvB7K8vy45YL2aEZGyLLBE",
  "key20": "xo1ufW4RMmrZsUrYHzqxkm4xzb6NJnKTmoVGjZeNdP7Bc2CBPrBgo6MKjJ51rD4pdLQURHunw5rsGqCYzLt9Nbk",
  "key21": "3qXPD7XUTzQ1M8r4Pgab4G7XPrvxfRzHn8HiXBYMctzT6jSMqHacr6ms7Dff3bNanxe7DLiQFPisX7SizMQuHGrZ",
  "key22": "598nwQkV8jnGrkoHCnQwxkePDicVKjunTp5rCzohbqT9wMQbhuMJbFLpkFmyiLyBfHrSvEoxV2EXYDHUx8RGb3yG",
  "key23": "3jeT2PmaZHdduhjRtGiNe1gKE9LUvz8J82h4WtT8gDZw5KeCJt8tLMkDbtr4yhBhooeZnrVNEQATpfnmT2BTGyju",
  "key24": "2G1WeNqkpVpeQzzfn8W41svcKuhLUw1oxWPxY7kwz5GWTsfhaZNhz9do6fu3X8WNwvvVn7pPEV6twDnR5vPNXtm2",
  "key25": "3MZtQjfCMjmvb3xFdBgvX9naUPZhuTpVnuP4gqpYwinVJ7N9HE7jcMWddHz3YL5G6LeuTqqjr5V2zvAx4b7CwYgy",
  "key26": "hNr1GcQgCCJMYXZdrDjDZ8z2rPmGhrwTHNHqWzGUx9MoWeH2zE5Qv76o1Mf3VzsipWA1FeBwaMxMxYof2AMMx9B",
  "key27": "4e8NgbkCsPcsiy7kyiYC9eQNyfgUz8pUuQTWwQKCz4M5D6G7uN6kKXZcrkL3j6WyVNyRJBEkGg1nSsHvosqupwax",
  "key28": "4iN7KCdGRi8Ad6821Yda9B3E5gPTPjztXshisLjVrZ1PRMS9aSRDT6Weigcb8ZN6FmKBSNnZnr8fzVgRzPXyTgf8",
  "key29": "3HrdqXeD2r1QMpzyhbp8LHhZfxNkFy2ooFVstpZrUmTxCEfmkympT17N92yLEnDRHRmiFKnWPJeG58Cp4UEKwvyT",
  "key30": "5756DEeKkhBwP2qFyxew8hxWWpqNHqFssdTB9ynLSp8oVExsgMSUSs9cGjoXTnWpHMAyyhevQhxohoQc4DuB9yrf",
  "key31": "5QjEhNkbztf8c1EemMzpUhabbWABajP2fKqkcYNs3k983eet8nbabiwPxSVPvRDMAB12TV1WbUk53qnCuzFXTe2a",
  "key32": "3AX3XXdYVHHz8EHX74SSmCu5cBiNM8RJvGLrL3dhLGeiWE64YfU8F4e8KZU7vPvWsMMHJh5cko648oJTbj93p8pG",
  "key33": "GRG2TCJsKAFGy6nW5ZGZsCT6SbmFEmMtz2oA2Zymkhu3qR2h7VihJGGy774Yrfw1ftoGZZa9ctey58wrXMLbeAR",
  "key34": "4UaWHgPh5dMTkTRZ9iSgcRSoGsvxnL7xCthVdcm4bzewZ6gzynr8befxwNuHrWNZtp1Wj7JdoV1uZkyB93ex6fJJ",
  "key35": "3DrCqY9FMGLS8bkkCcBSHCVkfwr7qiE8LifH5fGhQbLz2zCaS76rgoUVbgWWFt8AgDJRtn4eBXsNWPMrFzKEnDZU",
  "key36": "dhUJR9Qz5g3rXqEJ8Tyvd9WJgoh4Yfs9RyS5vJ6H8oMo191D4zYKZhbA7boTQjRsz1KvAFp6c94GUJjYwsfdQfb",
  "key37": "5qGArff5MpKUAHYS54C3pci8RLcvmAU3pXwkgaedvYaCjnTJsGyuW542K5tsizSHPu56hWRoXMBt4SUzST6aCoE5",
  "key38": "5fenh2yFZKuFHyPAjWN8YQcoibwvpMzKBA3UsjU17EgkXnnAWmYjLvFQzf8W1NDHUUxkXU19ELzJkg7hfvFk8rZW"
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

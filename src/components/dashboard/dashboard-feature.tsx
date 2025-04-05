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
    "JXZyxx9htPaZGUCrUeV6TSwYjcfedw4GkXV786DGzCU5Y5N36DPfVi5tdaUfbi7DdTbWmkdAhjC2TNcJ7WzRspF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469gqWj3xxJXWm6jwdDsdCMT2w31v5LFePSYwyheygxAZG6SL1bB9YV973oRv5h2tcvXnqNy6tpAffNUgxsYHbbr",
  "key1": "2iVqgkBgecQGyKUk4YCY4uTVyyiNTiNGPE1hp6xwtdALnPBRV1MYkkvMSFgWBBxtb8ujNUCE42x27LYVGYmyZDbw",
  "key2": "29B5LZiz7UKqQQjWFK8j3sgQcHBEju8z5G2HMvYyCxZ2bbpXnhgwwcCs2eecL5odFPPRiC7bRNtBY9w6yp1d5jKC",
  "key3": "3DvUgXQBfoSoTKhgDH7kmgrbxYFHqvKW6fQ5VPiHsnCjuFibbh1zoUZQbpiwSurbWjThzmXg67kFMvqhvJkqJp1c",
  "key4": "4QxMThK5S1MkgxAeAn5ZDL1AjCFJb5YocmAnM8SExSAWk2ZXDP63ziDQzZQk8KEKV8mSz3TbAzcX6WYb7GCu3mVb",
  "key5": "31aiwpiCJndUHH3m7UKp7ShRwLBWZs5Er9ebeznuEKWzpH5Lqh4y5SDniTaWNyS87oMngPvH1BE5XiEs5JkZK6TH",
  "key6": "3nij8Pz648DAzu8U36XiL161NGZZvP46ngVT2u68rj7nAKzZy8MkLqNDoBAreRATHeduPNgLJLseCUq4wvVVSmAr",
  "key7": "5jMHR7RiGtA8BPyTn7YfgRXQqNcNFSEyhkBfRtkLyntXUZF8RvYSnmg1R6GXppUavmYGh8B5ygnajbKaFsL7RSaC",
  "key8": "n2J8xgUc6YVqkMiHkhXyyfQ7iJSB5nzp4iRx37XKCspppwKYdAGkiLDowdj8mcYBznAk9oGKHbXvj7Z7iZtzZPC",
  "key9": "2n55pRP7vGwBL6rDdYDNnKiug3GZaG4ovMy5Sp8ffx1uvDaZo8MmP1ieWQDsoineHcZjyjoRE6bQtD7ebRWThkxw",
  "key10": "3ZEWMmm4Q6BQFtvCPPspXDoaoWEMpSuJ7BE4nEthpQL5RZKkn8of3VtiZmvZduao4v4cL6voKrWse4sLPcWSUout",
  "key11": "2T78TfD6e7jLbNBkeXAXE1iWSq2DeRRQNNqkmANp3RW3XJK96YedmEckir9pw2V32Pvz8r8ABByoB2nD8FLNLnYP",
  "key12": "3ojhobMG3xMocTs1c8p7DBU5BDAehFKhLRwdEtPgFhMHJXcxt1vat16aak7ADLWeTnZaCEUPTtRDC7GCBFgkCnuu",
  "key13": "3hZss7wuHr5ZVJjsjFHNiYQcKZddDueByfARxLV3qtbdZmYbpaPYxEYJ1vEr16AJBPJ3JwBssnS4qFbpkWE338PM",
  "key14": "SorV3oCAigSBzeEJ4CDCnc6HP9ZVuyRGaK42bT4mKivrcsizwMn2SM4kSEGGcsU18PQT2ucGrgJMYSn3q5UCwi5",
  "key15": "4x9xjRYPYe8cd6gqZjzxEx8g7kGT3jQF8B1ZJpTRzZ1Tjw14AFNpgP8sNkxhoKiZ2xyi4rGncRL3ZXsGt4hQCwhs",
  "key16": "3XCR7wKWytExX5HxXj3z8LNkLSS33xZAeqpBUemjF7WhDTX8eV2QU2gsejdWVfUQmQHbwrATQGE9hTBsZpEgwsc",
  "key17": "3EAAsydVuLSPAd8fdWfaPJUtkNhULeivtraezvh2shDuw4zQ1C5ZnKkmiAcQ2NXhtUYTbwz8NMbamgtqqXBTj6yF",
  "key18": "5W4mLgyNPTJFgXd46LYaneFoLXRFcwf3CkeXhaBqh1bPD1BZ2hiB9dw9hrPvEALZ84W1N4Tp21x2TQfoj4h3JiWW",
  "key19": "4r8dH8r3Yb4kbpX4civwcVy6GYt1zKzDuHzjYSCyWvbS9sskNxvzGcyt3Z1j9iL4UzhW7aMyLZFMzGFCCMVkc2x",
  "key20": "5DYRx1gV7DZfXPKccopzaP9pnAV3UTdZmjvGjbjKSDKN59cnemeQuVRdWCEcLJqsiXTshrezVagD7xYk41yGsuTm",
  "key21": "3YBo8onz7J44UfSPP7qb96fyZcRkzeKMwGXFcyKuxaYpCqfuqNspMYTbVe1dT8GLPacr1JdQieJ7neM9dK6bVaP8",
  "key22": "37S3hHt9DFzsaiRi89HdeSJxszNp2EhPGAKqGJvvdGqU89Kah8HzFgu6Uqp3iV6Pjs5hXyWjovTZs9scWNVQhrmj",
  "key23": "zzMPb7WNhG78htzpYfraUdidhNteiSLSyUfjSGNir4PHSPicaoZqdFe8w9AFjYDqc9Qwq4Wndz95DLgs9cq3cEV",
  "key24": "2UbneW9ijkCns16zvqeRY81CsKYLRwEGHdnHDcr3kn6Kj1gcoeyfFnkpwGS3WevqKQy7JxCWSE1WNzfdaZaN82RL",
  "key25": "5ysS7wvcJANrsCX6P46SniADjMAx2BipoT5dQ6oWvSTDJLj18XiQ76KSM5N6S58jqbfC2Ns9rnfdX8NbzwzximxM",
  "key26": "2aoGm68J2QNEAxHMQwwMRFaDr9QRfzqrT8EsGkNd75fpzbQL6cmHycRGpUpMhZEcavfgYtdv6XgBuZ1yyN9iTMei",
  "key27": "2WbZ9exoXSb6LqJpe3HeAgBSg9kZiWWc78A43aQy8AUuw8LsxTq19pggxqJpdfQWL6h56kaeiS1k3n5uAGS6LPbf",
  "key28": "2MnrLryfim6krUEyV1Ty23Kg5zNfgLmXoi4BJ3Bg7qX1CmH5t8S31y5HUDMfRNX2kUbXFezNUPzRi2eHhBF6DFBW",
  "key29": "5AzX8Ur1cgYc17XzmUw64Xo7Ka7bSh8PUQkSZKwFm8crDUWRnBFj65zSbnQGyJHwKRMWD1cMfMpRKmqhtwHGfGNC",
  "key30": "dQYKZ6B2oCZRspaRR39mtwWk48zs1x5hqeuS4ndFWGvFHTK2DeYpFkX1ypYJt6W9h2t2ohgnt5JFjzdRkrfWEp8",
  "key31": "2SskUJPSEVxqGgfhciJyxVXd2Te3jW8urdX9gt4bVjDGzr1ZFYyYdrgoHc1Ax6f6icTWCEA2SvVeePimn8Lg4vhH",
  "key32": "36ZwHU3kBJu9tSAm7L8tiX459qPaQAEpa7NJHyGk7kfkye7BiHRAKFZPTh1BLfhQpDn4Ye4KgB3a8CcRi8BT9AKv",
  "key33": "5R2SzegEWWfTxcoRSkA9TXo4an2D42y8nrbchCeruZtGiwFoqk3qCVZg2WjjfQr68BjQZ41QAhEiZjTSzm6TWBb7",
  "key34": "3xYrWPdPvgKWgLtzDRMbnuP7pAgjLVW3pbNTwq9HP65ASLxcdjfKNvdGV96h1E6cr7DyrVhxcqmvHD8Svkk2oCnQ",
  "key35": "3Mmcrm4jwe5To3d5m4RpxmLvUTx1PhfiXuvFfFWharT3T5Ji7P2CYWaze4zpPszaMLMRqEAqtK7LrqBHXzwCoFSw",
  "key36": "Tgyb3g7TQqHCB7EzXmtbRKZzncgbQd9P2p1sCkYQSctnkfK3yii1onSGuMRMatM93fyBUaXNXBHoLykcMSHjWm5",
  "key37": "5Kk6d8D1EkbLsdeg2q1UhSpR8GeQUyFQTgw866dNfgDDJqiBgWWca2k12Xoqc8TGB47ShzBagDhDrmp4cLwVKS6P",
  "key38": "5s2EmFREAekEjmCRnWgdNCpAAW9WrUDRcX7m93p7WbqsVZdmsdN4ohfBriU5qG7uhrU1V29TLQxS5cUAf2vzeYCU",
  "key39": "3q1hAstD4i8jv2dCGp4AdHhg3Q4gSnoExXSzHYtpEaEBZuaAm9QHvHvWQuB9nEd9XNbh8C82Vap7p2ctcrgrrUvx",
  "key40": "36tUMGbEpPfmPgN1hQxFRbvWABv3p8SEPfyvtgNrMHsfAq9axTvmeqpmGfgohnWJf3ojgQgfbSQ6qsGHct7SbRJL"
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

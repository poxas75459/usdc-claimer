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
    "5YKdRNLcQH45v9MooQJHCLsqqTAyBTMtP8fHprNTMpoCuqHqwj1APUt43Dofhm53vWGn64QBwwMtTihxU5EE7RwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3ESEsQZ5KELS14zgZBM1Xf7WC9A6Zyd4k6sjhg4kLQQu717eAb8bMaZT2hescea19B3mAeeXwBxTdBN5kGpH5r",
  "key1": "5XSsKk1dSVntiCbE6yfReyyCFX53YVYQJfyAsxkYQsjwqvf11F3VVaEVrs1aTtBpeBaFAiEXjHoA2QJ4UWyBoQRi",
  "key2": "23y25bn97p54Wjjy7sgtfpnfA6Ugvk5jdZv6NeuyMm3RdNK24XGWYxrY55t3haSTcMPwP18cGNeoGqQTHZfMAbBs",
  "key3": "3uTF2Vp8Tmm7MxEYjYN82nBQitHNyyirDpyjfMtx1ktXYpC6siHEngezTPUgihPxPFk7p2jVxZ8iGyhmrNNhp2Yd",
  "key4": "5NmU9NyzkaMisrfZWDAvcZHgTcqFuu89iPnE4zyY6iwPJGyS83tRAsbiDLuqms7j6VmZ6Ybw9NvvwRAcAjL9vD8F",
  "key5": "66hPakEzGQyxoATzyvStH3of2JWit6hAodtcQAEqJEEVDeqw7UeLeXvBpb4KAJx9a6QvDzuzn9enaaCshyJdv2o9",
  "key6": "sTqEELRM3FmZa1QLi9k4d11xcf4aJhV3BiN82M2iDw5UMjBojuPU4Yhh7tBJAzGNTtnucN1DX7nNNGhi3ZYzQMJ",
  "key7": "4bKPZEwuzh63o6gZgj9kBrHkzBdq6cTnEuZzqEsjrQvwDCy5CW9NMk8ys8kGUXHiBbtys3MHQsTgFziF6JApK5Cu",
  "key8": "3fcXyFEnhn9Fkj2htzjjsT6HcurpaCjf5cS9vjodW5bB5onWT3iodoogXLJt7RpZXGwvCdX1Rdw6dZkAtWWRVdT8",
  "key9": "3gxcseFCDtadewGRzLc1PoBjGvuvPCr3QnU8JMCnCp2N5SzjJGohvHpjdpYjWZTUm2VMQz138CCwBDQ8ELs4cxZM",
  "key10": "2hd7Kgs97yC4qrVig3z5i18HxgpNvyLun789MTtEiYjbXjALXdGEyPRvjsy7kF59Zcbf2BCBgwJiHdu2LhA27KR1",
  "key11": "4ZrExrgfMzP2ydrR9tVfmySpVppr1ocqWhSenw5UQPA8euLjCzeGL4JpAMJmYkaXVktnxrKbCJtBfFBVEffcswR7",
  "key12": "2YwDLPHPU5tABMw1ert1W7iv7Xn7xWF9tmiGz9NS67AYcv7x6P5LqQ6BgU8EVgBRhje3GVKc7Rva5wr7wjqqVFGV",
  "key13": "fPwjRNJEHg5f8P23DXfrboVQa1MKJE2NiztwubmEZkxYibUCoSV3AkzmvEM2odrtxysRJrZCYYc2Kb4jGk5dZC5",
  "key14": "tPrJa1Vb4TpY386Twhjwoz7hp4T8DPgyzo33wovxSQVhY7bpiFPZZZYk4nxc8uo91meVoiAk6NnyVDuevLZMjcp",
  "key15": "2wSG6yDQA7HjB4cKeBdWp4NqxBdJf7C5aJrpscpXNoMfpX4ETWLXCuhSuqN1KdyYBxCxxnoXDGjdFg3Lw4f9bkGj",
  "key16": "2Cp2Civ6SRRJcM3sHsEbgoNiQQvaUQM5XVKBCpZVvcVmBsh1rLh1pkcNL2VxtdXhiSrdtFqeJ2bkj3LaMS1e2kWK",
  "key17": "5DV5fdz2qchjujFmvVprpoFhUWvZhXSUXtfnG1CdJHaxamvcBBw3qw3iyNNyZWYKphWgFnexx8BQGZQ58CVJTLiQ",
  "key18": "Zpniipn4XLWoy3xDoMa9K3PXVpQehhg1TStmcjLuU8ZyjXJU9CJUiG6yG2PqaxVdg9s6ecbUBk8JCyjz4P9XeNU",
  "key19": "4no9m4ci12UkyZywuCvMw9b2hmy98CLnmwunVdsPCghTW5o88RBKfBWomHXGuKHsNMxNtz76fTZQjwQ7ZXRXJmLs",
  "key20": "2n96HMxFr8ZDHMXQ5uD2PDAsyVUg7CcG1SMPsDt8mo2TdUqrQ3sM1Z4ihy82f2ysXPGLRMf1K4XHmATdYnV669ar",
  "key21": "32RuXLEPKETSqCx5yVtonzhftvLuEL1sWe6FEkVw7DjPh4rpoL8ABHPMWrw19S1zPDqvCG2gSjkEzpamN4yTTSAg",
  "key22": "xtGCj6pYP5Q5ZgL9J3zPWv4s7EoGQeAsM6wWSzoxWWuzL5dcwF6ofnz7FoYVjcVKhm7a8Pw3iD9oZ6o6SxQHrPJ",
  "key23": "VJtETCqSkppkoyJteumDifms2yr4fSfCezZr4UQJQaLtqNwEccnvpHmbwBbDr5izRC39rCQdytZr4sYBCfcqLY9",
  "key24": "UhDZMkCnu3AW4Ht77s5mPHANPLKkri61iEbKLe4ZB9XrKZUDSkK3e5Gx3jsreqwqoAqNMXyjCCDyQVkLqQdkoZ6",
  "key25": "5TMhvEaUFsSdpfYWcKBaDU85unFjnLhKaBD18Ssd3HpR2G3phh2KjM7M9KHLAN54W6oEUzRzihLzpkz5zYr9bZtN",
  "key26": "4Fi6RgL2qE63kmaRJ4EYzXE9EthRYRgtT8AeW1cfBqfw6GkHyHJHQAn7JdqLRjDXYUTY2X4sCFGzrDbTvG3tkG83",
  "key27": "2VCd2U7atSWxTtxG32hv36E5BtfbJQ6BmpgmyN2WjAQDpBC6xanY1CevnuSY1P7f2dP5nkCNprRRf542QKGSYq1K",
  "key28": "3wiSJELQjoCDcq71GxzvzJ1ZAmf9ZCpqJN536cQJCyVWmVFr2aeUQbXZ1U5AnD8biyvaHzCsxyHaoFfd1y5L2tNp",
  "key29": "3JGzy6P4X56RhhoLsbqDVbugSy4jGYk7PSFyGh3hsdmcbj7oFRbsxkBSqFP5Rz1eF9Cau65LdjVADejwdA9VUSzb",
  "key30": "MR5UNDt51zcKrnMSaeTq9s42NemmhheAPQq3i6o8SYPbYciMfrC3HsWuPVDCnvrymyqa2SQrgW9cPA3tLKzFqqi",
  "key31": "5YM9AiEysXzEWZiog63bDhArGAHBqNv3i1Lifps8HzQN6wSUEUBoQPUjZmffRwZStyE45niokYBjJptQw7hEsZ41",
  "key32": "4zUN2Zm2w4ALUz2qA9e7EoE848x6UpQhd89mYMWSuZfHBzVS74YpUCAT9ZC4r3Vyzg6erioLSFjgKueoY1XPjzjV",
  "key33": "5sYY8DGceY8Si5RetzZ6nEoAQMb2L3vmvrfYPHzEw48qzBo5bYy3aaqzZAzWEJ4v2Lg4AueDujA77wKWi5EbUeTo",
  "key34": "7KtMnsz2SVrY7aB5B7iLyfhosuL8FKRoNYCeyxS54SRusccGtiE8Amrkb9ejNjUDAq9rvc6bfQdcSKo9P1CNBhe",
  "key35": "5mYojAtyNBst3zxy9AFfj4vniyVx11BVGFUvA1h29qHn47QBVZedFpjsbH1FsKCoF89SjMFC9yMjQPBkMrUnz8Sj",
  "key36": "L5aZyurqm3ieYq7SPBxRsUbCYwwDZwz1MvQfbyZrwcHwhebX2CDUxMSZPR95RR9gP6NR4Rrir7XZR57UbGDbUMQ",
  "key37": "3AYuPErkVYgPfnU4MpkmUURniDtjNwRD9C3pVAx5iHChYB1CsSx723r7iT8qwj8ATJzfBJzP8jWDh1PasTG1wBgt",
  "key38": "5XeenGNpveZYSEZ2MgyTaawB2gYMcujyZwKySMLBJHF6WC5vHr6LwQ7iD7WUvWCrM4tUQqDfwMdp4Q4dCx8KB5Hf",
  "key39": "4ZpkRC5xvfirbNuxjdsa7X74JaYNx9DJmPHU1bptpboSRGG5GtRfrQ4rGx4PR1kCwfntbYdf8xEzmaVpkEUZBs7P",
  "key40": "3ZKgCP3UW5GSEkXymD8eQdM49dEz4hwuuszyJTJ62qgmLM91C1FqfkfEHGUj68SK7E4hPq5mnupWp6bVbgHnr3XG",
  "key41": "2TgsPnKFDV7dEA4ZyPgkTqecdPHA4NjBs9w87QzMGKMxadJ9EhtdJ4nv8fBBEeWN6NRjyCBMwDATeuLEDqqvpeoe",
  "key42": "4s2WneJoZ51m7bY5Yh7cYTEL1hkTJ7oqfL7Xv7Tuwso2NJnRvrbwWB7Y6ZAktKDvQvi4DL7AcirYrgkppsAD6QFT",
  "key43": "41D51HshYWG8QyznfTXyJtutAvxqUFdMA4pEmT1DeaXXmmsM5sTuv3CKrAwXaanm4ccAUKsqCdWjkY9uYxvciuqf",
  "key44": "5nXLDV2akw3LHzqWxEzvxCxoGLcGLhqr3nVZ8oq5mAd48uvUNKmThxNMcdvXA3zeJPWQd9tdtJR6PwZsozAf5Jps"
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

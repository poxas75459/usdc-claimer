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
    "4mCLaGm6CFhLXbk87tJ7AWdPb33NGxsELXjGnv4aSBSEoCfkKMdFdgNhyCN8MogNXKB56Eo8wb39aSkhVYAFJyRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iaFMtCdr7ByoJJiN8TFT6vaXmrMW4pTBpPyLipWu7aYZGtriSyUUYpdj3uWWSPJ6SFTDCc8oTRi96FZzYnL4AiE",
  "key1": "4UxZZQpX1R9WVdY5JF8Q3sTofnwj3RRatPMoRFECuJ47CpQq6hAM42CEiXQNTVdumMYvMBH46SxCKRJeKsZN3KMR",
  "key2": "37d52ntyfqqwbDUTEkhSgwdD5nJNc51QsFzpYVPLM9WVqGf1eJd5zCQofAEF3z2PSK71PvPbjejw6zZxqGY5jcUS",
  "key3": "s2bRgtLyiQ7HZxTra7wUgvFofr2gb9JLn9xWu4pN1zMuCwS1FvYdowCVbf2qKYU2dwuqwF5HjfY4U7moiLVwXyv",
  "key4": "djqfbF46wF4fB8MCpM1VvfU9qEuwrpd864Rq8eeb5NhShqnK32zLu6EQVjnAiU5da9YbVKMHaeShopFQ8TCvTkg",
  "key5": "4xwgJ2LnqrGbV4BQena7uqerAqj8omYZCQQ8bu3VyGnvqnxD1pwtTWj8anPz9VkX9EKTDLheuysoUF3kcVSNCt5J",
  "key6": "5BL6erjS6kfAEyE2mkGqKbo8XwtCAiyDGMsAG3NCCkDtJBzrZyD4NG7Wwdh9QLQ8nJznGE8C8x8GvMZPvQq7UPp9",
  "key7": "23i6LsUPyXwC9jSVEJ7GgzncwSdQ43FtkRybGtj6VQuEKy7eUxu6tCeYVUVwKDVqy31C3TzTsWyUmb94vvFpBU6W",
  "key8": "BzZHo86KFMRVAdFeBvPnGpYAewxaTNe3vMLMeAhzFYj9Sea5PfzjbMxSnv8j1FDiMVKwLFV1cqv2w1b9NQa67cg",
  "key9": "4U7wAyMGbhtHnG5UPkE7oVANjSA2CqnZsmqnZmXvnHp2dbbhysTRuCaPGrp2WsKsWpkJbLa6m54nXqRz2J5y2pBC",
  "key10": "BduHGqHYN4ekfGiSTeBQUdF5voGDCuVG7JWPY6Ub9iviAvwVt5wS39qjyg1UqGJPjBGySoj5dTHGXBmMG4yrUb2",
  "key11": "3stbgqpqCCPmDjaWxCmu3bcBAD4E74FDpoBgP9UKZxXWpS2fezw5GZDtZmF8wZxk6UDh3Ki9JFh8Zv1vvFGhzWU9",
  "key12": "62tfSxGmLNgYPNMhgdBRbFy4RuhJ7G928xX87V42xU47BfaA9c1XvmtYHjMpUTmWjQjH1JYRPBH4XAHGydkrhCc",
  "key13": "4vbDgzxWmuxrLErDjo1iCkn7ieNfTgSEURrMt4SsS5f1NcdMQFTHujNd5u8KvLjLmDtd3yzKv7RfespiLSHF2Gg9",
  "key14": "5C8KXdtB6cWKJxyJfLpr6cvs7sgRh7EfkJJVYuRvcwPCuXVKyrJsYF9Rth5uA6Xav7rk6J6dMHAgz7Kapc8fcqrW",
  "key15": "4GjrsPB1iNTGQiaJvGD7h66tSBb1BZDetfBgyoix47qFv4hDwQmkkxebTbNdkDarxPud6kcSPUB4MXoJXEH3yvue",
  "key16": "5vqDMESokDK8eXfiwkxkVMLFKCXvLUGE1ujAjBeP1P2sSKYCXyZvYxZA6d9DneLuUyZxH8TMYwPTATQi6xDf2xvi",
  "key17": "2jF6oDPVHth663cwFiep2o7fNQCsbu5sz5GMVcCuoUwRieLweyn5uoroxisjJGWy82nEELbEpYzciHkLvQtjMm35",
  "key18": "4SNrhMjnaiDPaN3n4wqtc7Dabu6s3mAoZcajq8dm5pjopW3nfXVJMwR77Xwd2rUoxFh4SNMLreJGYbYgnTPm6BNZ",
  "key19": "2ea53zEajuQV8j4DphW5GyHHq7dKs9xWJ7D7fZUVvtknaafgKL1kunutxLWf17B6NDxjyUUNBCuBkCUq3eomTDfA",
  "key20": "ZGkjW4p2v1PiFxKTx54VTS3DTU87iaUdRJNvWhSRabEDHKcivTk1fkExU4MEZyLLcJ3rXrUjVqeytt2ZXgkHwzj",
  "key21": "joVHVpga2SPeCcSf9pBjrZ9n2AoQfs1HcdgZMjyyPkLWVDiPGmZ4zihhrUimBNMzduJMbCoheHSErJQwJqHdJnG",
  "key22": "4PTHJLJk3ANeuouBXVZdME4JNYvDuUFmzQaoQjFwGKgjACXeTa2377z4xLfmUBn7bc3DJDfYx7rJcKrXB77gEaPk",
  "key23": "4B75G7NVHzYsGCRbWBhUjGb8B2pp8MqF6xs7qDz2hMm6V4mUy2nTZEioQTsZgcggRA8a563Bcs7p9g17MmtXB4HS",
  "key24": "5q1J2WjRkSLLHVLYaNR3upFKU9ZoCwcrxVqkAai3rnVQuzwn4JUu6tc42dz11MMTNCGqArxEbmXWLGqJNv5fnZg8",
  "key25": "2yxsNWhve2XN3wUCXdbBEpfJQGSYgVF1YfLPrU89L9GzxCLznVPHiLUvKu8oXmqtCNLA8KwSkWxmJuwNYh4VNsP5",
  "key26": "2ksBokG6Lg7tu5Gv9rUzRFGxHgi9UCntYRGuAgEMsbBrE7vT4KAZcpCjgraEkaz8BqDeHYAcsYetWRJPwmCMaGdr",
  "key27": "3L2fkwkuadBsKccttrZ8PJRezDeWiubJcm92kicUwVT3GYitWyLf5pKfk7rkqt3YHTe7wcQEJcG4bXz6Ec73ox8x",
  "key28": "3Sckki5VqQJbXU8Wg6ZMVHQJAey82WxjsTTraWrUqasNov23xXD9xAiGGYU5NgndWyukqiQyWYec6picLeN9DcBC",
  "key29": "3VfRsEY9mfrys7jhBcseimEctCx8QhuKkwB1LAZJRo8R6Y7kUXyTVskZugTNMKxRZR11S14GfRiMtfdwEB7W3W8K",
  "key30": "3bJoj6Mq9qinaZTp4b1w19n9bLdyNmXfLTQiP9ojqy3xqPKx6nut2FNbwXona76uYMPn2qzQ62hnhdGiTToxVfe",
  "key31": "3Zd9jwb72xc73JhRJt9ZXYhmMmEELbiRZAn9eGgf9KGWJ9uhCbVhCvmcEcg4pEUS7j9GYgMhEmLC15ztZJQW7EEy",
  "key32": "2RnUHUMNQN77HXPdJ6DS3SuQ7kPTikvTSbiKpfvsDTc1Ns7XZv6vURxcCpLwZD1ZAuUoQfM6Vg2EqM4mQ4jd5prX",
  "key33": "3bAVjsfRPex1PzEcXvFexSV5q6Ud1VjBC9oPM82vsBko1Xk4k17HUqw1dcuDDsz6oENkeYTotuX58U2EekdvSKpR",
  "key34": "4oJfxKTJ321tDjPW8pwsu86Z6GumZituYGDF8bpxgutsrc8jvEq5HmQNjeWUV6XNXT49zE3pJfwxz11RHCrh5HWr"
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

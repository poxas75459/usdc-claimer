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
    "BRRYpxCb1WFgSEW1KnbmbaEr5xC7m2K82uxbuMCCgLcagDEbUD7LiN1ucjkducY4RsRD6nnigeTbJWwVgNoaXXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNaRQLx75iWfZeaqhfvXDnv9RicpimxNYm1D22FqHdaVZnkyvHYN7zdP6NZreaxJWiLGidhr7UMdYHLZnMhUDFC",
  "key1": "dHTgpTcTWaJRaQ8mcY1ZREdYveoJUQ19cHrm1Qsf2P3orQV1h8uWDtFVErn6TJ1MkGoZx1CnEM6CuGYWdaKi2Hi",
  "key2": "5HtfK6n4SF6wWxFVzB7FFm8n4nYt9nCgbc6GFx9vRZqSWtS7eJEpgo2dbj2RfMMHXDHzzh72nHeR6DP8aQd9foze",
  "key3": "4VMeerevLLQTZZa1gWDRgK3T5zizjrk2xJtVusyEk472Vn2M79E4p6cUiZ1tum1sPAkJEUP1Ss61RBJxvFYgJcHK",
  "key4": "5xob9XV85PT2B8Hz4XEFGRyADbVx9HNSi2Y7HFPh45pjpdBtLrnL5gbeow29qt6t6bxD4ncrVvzy2v4MprmnfWrN",
  "key5": "3MLiPehLdkdYYdH75oyFjR5C2bWaNiALqmUVLow4Wwju6FkFNHK896wvzkLT7scCzadX4ExsxyWP2TQPS9Jcq1LG",
  "key6": "4NS5QWVnEKJ4268T82kDpshVw2CXfZvNiCACNyFxLGHRb5WC1AeyJaEkxjVLv9TBbQaxvSyeQcDRFBsaSrZ2zstt",
  "key7": "65q6QjGWh4KskDGtzdQyJv6JkyvKo9tiu7USxoK5aeM1b9yeEu3YxFid9DFVCPWh61AioZRmEuo2AtGTJKRJ3rVT",
  "key8": "3Rew8FEEWnAKTvbjMFCPRaMYLRrdGKqmfi4EPYZkA1KbUrF4jxnMsk4cguwfWe99kFZhLjuk4NCXtGQGzmwYj2Gm",
  "key9": "2T8ATnbeaAkSfuyAf733Cqf7qu1xgfEixgmqZ3TqRG2uHTvwDLKbjkhRu776AtSMmWXERGuEiUPEeYrku1Xcpiub",
  "key10": "5b4ZZasY6rEVPvLHwLbwdnzbzShuLh6om7LKzuVw1GV4ZBmXqJFZQBG93BjqBZNNaMTqjsRnq4k5q4Vsg8woUSZD",
  "key11": "2puLt5yqkA7K1cbYjC8x8kzxQkVx3LDqJMcymgJktEtg2vhS9xWQhVrfzz1n788Q4WBWeayZ7DoJcjWthtL6PMgg",
  "key12": "3CC8Hi6LWpZ72WpW7zSM7kKHkmVkjs4VVYpFknrtnHBAcBA1xJead4v8gCVPyev4UfzH5t4LBYDJz4Hyara3BchT",
  "key13": "5UiaVKb8L1XwLbbm5d8HbdnoRu4tWksR1kaaw1p5n1B1zLUKit7LnN2MrFHeG6iRsbroBcJhAE8Dc7bTcJdvGvAN",
  "key14": "4BZjwj5FCFu4ajN1aMMy27Lywkoq5Zc2g4twH469UPAv3nMbjL62mkyHFxajEyVApdsfCQY7svfTRxmAsTSgy8kJ",
  "key15": "eCLhtQWhBJHnEEHDzDzp1TiWsHiwRxHnskYEKCywsHTH48BdspS7A1b4hf7w7378PLhQaP2GxCuynVquw4no8D8",
  "key16": "nChLpmxEhtCGqAy7xBo6fiaEbc6qQsEH93K5t74DoqbESE1gD7diZRUQPJ8qMuokiTSczdBqJ4YztELQtQzQxSt",
  "key17": "5QL7uzHcMyCD3Q1kCW3n5G4EC6GNV2sbuifGEQUGf8aS3aanuyB9ieAfX9xw9HFG7Qj4fvBReQkqTbizoZGTJdnm",
  "key18": "2BdL3aiL94y6MYdjUKaxh83gb3gvomuGH9MXkVfCVy6wSeSyYFJ8BSDuxSeqLfAEyyY61Z8UpyDBjkMqUfpRavN6",
  "key19": "3XXzdXyHeHGCNRLUT6DcrFwsqihjsgyEZykSVNZmnVipbjY9nXWkod4orJSZpwBero41H1L4hJKThPnryuBSQHor",
  "key20": "4haZtk4TzECnKugsQbvPjy9HRQBTv344JkQBmi6pZvvbT7tmCDm2AyfhzNXxQSzEiAqPVZVUfEMUud4RRB2W3mJf",
  "key21": "5EGT6rH8Tji6NUrA6WuHXJSC9jFiNb5pABrv8nSouA4exLWrf8dzepxvATfZ8cSMzuukynvLPzLvZJdFqFVS3Xtd",
  "key22": "Fi82GRoYXJ2p5FmUweLZ3rDS7MQiBJowQ6ArTsPBgE2E153DZjcDQyhHucTGgFCgeWXvScuuH7GA9iRtLLv8EBP",
  "key23": "5rBnTsVYVT369QTiQ29utD6vfb8pET9onNnnyYa57tyiRYYioy9U2T2VTjMHVEqxvDNxu6X6FYqBCPYVfihms1G8",
  "key24": "dGM9eqzLsgmiG4GzanpovQXBVYyRWyHapeMGy5dMBi451kHhUY94t6mQnenCVLXwPqSPeB3tp8PwyqjfNuCfYaf",
  "key25": "5yEfj75eb9jniN79YAaHfiUUtNppJmavkHR5ex5v4bjzrotiyrKXmWXZw8KGsu3ZrrtH7VyHvhA6s6RARnrRER2g",
  "key26": "5amu5TtcjjtPjSgSCMmWYxhWoVK1wwCBe6wufySiRxvNuYJQFNRhFL3Pj2NoS2jcqbtRJNxLNN3fssNV3WJTzCbq",
  "key27": "28b44P6cvV53kAtef15BL2aJuX3feucGkSu4BSi3twbz3pZzMJERNdjzKZhZV8x9TxGWqe45yiE2LRXGw9ooWs6T",
  "key28": "5md5fURWQ433JsEM2eJp62iA9Nnmqkp2cN7GnUF9U9QzfbmK9ya3ca4QYuf32JCJdpF7bXiKcaEWBDEfrQstb7di",
  "key29": "5xHCdyFxrrqRz7aCKiVx9B1FBmwXT5v9kVsaZSaNa4rpuWmC3KsAVTbHtMrJPFzWSrFyEW1drDs2jx7RQA5L1ros",
  "key30": "3ofdCiM176EUBYaoB4nUZHEs5tVR8qgh6TymQ2Q5mQ4XjGna2FVvpEvfDjihFDiSPSLL8p9iCFyLQwfP9jdKK1iF",
  "key31": "4iJg9vLm9f9EXFrYcQvwpeo71Pw2D8n2Cg9nsoJvgd52ZVK13hx9pmoLHFwwX9GvZApheA3ACX3Jdw1PFVP8NyYG"
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

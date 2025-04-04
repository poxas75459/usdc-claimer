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
    "276D2n3apD3m3s6TYEx3A5p1wHL4PK6Gu5x8RfYfj5fjjQF6nXYd2XHj1eNiDQyGXyNzqLkLr5awM1dFQ5FAm6XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLQBTa2jssTs5NbYgNpipWaMtbSYzio3AuZnULhtZZNab6ZujzousHufeK6PQuXpWvzL86NLpRBQAfkyv6gDGhe",
  "key1": "EWzJXeTvW6jDjVwnugWAj5X6iG99sGutYgVGMk4BwLVqVy6JztEowQe39D9HxhFNaDAkYgYuH5qqVkvvYwY8JkP",
  "key2": "5vFT3QSZSB2R3G6yWBmCizroq9rsmfMNUuNxx9L9L12UYaSrSUmdecrNCdFGXwTmzWeXJ44XHSTrSpM3MFckLu2G",
  "key3": "5zZ1r4uArnHmLBrCGSeHAoNvy6ERUMKadgVWAas9xdYWCx7c9mp3oCMpGuA379okut9QJxeJZdZa1RVudC23LCE5",
  "key4": "4DZSfTpesPcjKZcG3D6nCqxCVQuWiNMLPur7BU1bfKDpcy6WcDSFNBAGR7KVQtCnF6K5ukK3qGKqocQmnc6eG2Ms",
  "key5": "4DimRWtxGh7wf8BuBX2aD2W2USWjctZ1DAk4sBZK2fd2a5yCG8GepnSY97F5sL4YvqCUDXko4hTZyJC7dbg1eAk3",
  "key6": "UWajBLaXfXtFHHZrJ23gYxzQnqxb1ZNP6RJ4W39v9r7v5chTH82Q4umEiHZd8FsawX1JtTjZ82q8B89DSvbWbMD",
  "key7": "3pcVF1Cpv5D4hv5fkZhQ3iAF2b8u2XCyDMcJ2dyYCMnCUeU2MpLfVoqzRfN1hEYw9WqiRB8gRas1JgckCpao32gN",
  "key8": "4nTNs45exwFc4z8SXFutBKtsHhMa3wghMgZLduBv7d3Un1r3a3q7yfjYAFszYHwYsFnrQYmT8XJk1hJ3ELGVGL2H",
  "key9": "4ucx1ZwyTU7CSh7W5JGFtagvFqHy1tb7wwgqQvm96xswUGzVMzs5Fw7rAdYrxgnc6Lqjdbc2FaFtmwNjUyzK6aYo",
  "key10": "3JxQigpCbgNnUDtDtmRYkYiU9ZqDHHbAfFdTpmrZRTkU3gg5nVMYQT2AVSCrBzrgshANcntx898TZp9tj6CrGz6V",
  "key11": "5ub7MfaGtGqt65YC3EmxuCRNJVwBk891RE6ZEaFQFptQMh9qv7XdvbfDnsJv3ANXiQAEQSHinKbs48dwMbasTA51",
  "key12": "44n2kwa3X5baWGmPQ8zecADLZYuZvUT7AajX2FZ4w44NfhKC1pbhqx332tuzS9roFatwaNFMANeHXzNLVbZUe2p1",
  "key13": "2bM8QvnJQ9socu7K6RWTcWRA7ohTk8wUKzjUGiQVJmYmu75p1Gik1o66k5XLv51tfkwu2nA4soxoSMxEPoCc8HLT",
  "key14": "4JGXCK6pyfELDriH9E547Y2wWsAWhHYcHhxBJEXyK3AaJjqtLekCQojKzhf5sdbfRNzP2ujgibGxMepkkDYziamX",
  "key15": "32A93agrcHe267Vf499hX3oiEHL25fUQrbgPEYxiFg5igApCihM3c8H5pSxLduFoaQN9pE5DhcycXZhiVL5tU4AL",
  "key16": "3qMkyJtSLJevonAtC6m2o3wDMkTmoQhjMrq3hnxR73kBV4MG6oTBgY5whyXP6qfHXTr5qyNWcfBeWYEBfs1jWLe8",
  "key17": "3nQDxcLyRqqJRCDbU4Y5KaKvBL7jueo9JS7tyUcS6J6P5PAyeZWF8acJzY4XZ3G7YErvPasECYXfvxuZGviirihp",
  "key18": "2Q3KYf9WHr5ZyvuQtZduChURg54TaFHZyQ8W58zM7Ni1LZUEdN45whMQE1C6fLugc4Ey67PnkAuVi1pGB1j81QGJ",
  "key19": "44auXAB6L672p1oXXumpqCUvzrQv4ezGPfsLxTJcXppxWqyJd8DsyhDBcaZz4LnxMLfFhCH5dszW85AbmEd8AzgJ",
  "key20": "UyVGRahpQM54HTSHYNVFHatiHsSH3VXFGFcL78r2LYrjSRtAK97bHpoYDcJxD1cGKWhvMgUcBH43jK4MYCFQ5Mm",
  "key21": "4j4UVpCQVCxRSdjEfA2vuT2Hu9UV1ebck2QioTLxNuwPz1iGSQQfYoCtaMUHyuhStzBsyaM2HtBRTfViXqhKFd5K",
  "key22": "3FsMKfcLqEiaNsVnrnkUp16J4aQnpXjBGmSWiPBVQF96rgsCjL7dJzXVmrT6QUyFzk4rYqCUUHWF5tfyautSzbiw",
  "key23": "4VykTos8hKnCX9tEgB56UaJaNC8NufzDUuz6s5uaG748QygRHKMrfrVdPQDADZzYNV5MEqu2e9nb5BqwNkhnoYWA",
  "key24": "ZMWQdN67X3QRG8XNzmGchd1RLrnsBzx1dLenZigqqKHXxoMjxgcYUiYB5gRKee2FPFWCvWEWFk1x3keYEXHvMQ6",
  "key25": "5k6U8Bg2qQoE7CfJ3cZtui16D3wkKFFytzWQwj3QG3QPkB3tMW4LAbmmQfND6sgzYJC8ULMFgs94QwwCznyd9dbR",
  "key26": "3Xbw8i9DMHjZXFGNYHgKNKQLwRo3LpKyfenkkeTueanK5PhZg2tiY1CCohiUCZFa8dkSY4ky1yurNae26QyTSqe",
  "key27": "4bL8kKhn1zLrtaByXYsd8nCN7v9BuyhQkpEqf22ZQJgXoLUwYwLoZjqExQocGUBPFuUU1QCrxQCsoN8zhJeRvCKa",
  "key28": "5qxRPheuu6JUHE4QV7yTDvgwYsdWeTUsDrrcRAEGTpRgJ6U9DGu4qrS36SrqgBdDtvUTo611h6KHBbq6gomD45ci",
  "key29": "C1CPTuZE5QYS9vNdbrsLk6yoJb57RFrr8DFFTYfFiXEU96qQXVNDAogeKnZmqmcjS3uVvb8nwK5s88AYJSvPVZ6"
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

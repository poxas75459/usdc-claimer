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
    "4NnBDvZCa1HRL4CE3VX4cQGwpQqYGSkE3LXW6jvhQZXCjnSX4D69z9dZAfdDEsFbXVv3cKdCSnyXJrko1PSPc8Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qoVAEFM17xRfc4RcAh8Qyzf7cFTs9jR3XkZbR3UGc45iTP1vP57YzUG1PtFNdWD2DyoBeJMUgHSeqHVexMCwQAq",
  "key1": "3abqBMDHLCFkLNeJSVa2QBJUTC8ztry8pxofALdHNHinjEkfrW17s8CEukkVYTimXzrTmZXnUdcPPYCpVMmm4XVr",
  "key2": "66WPddZtK1uhgucfYM5UAqxVeB7tATJbHcaAKTYELLHBTfeAs79b6q9w6pSZVCSuCBkCyF9x5Qikc5gqGyP7wnvg",
  "key3": "23YAgKHBo17fxTiDCAezThcDMHCYtcjmiyMQQYRPPvFoXVeZBcbFnNao2MG43NQsdmnjBYKUtT7sFZwkEKUSNuD8",
  "key4": "2bya1pUPZzECFuTGTrbESMEfpfvhmzjPzn3NYn1TukpgTGNje915wGd3jqDeYvZ4AVf1WxXnnkY69U9EpN4VKWKx",
  "key5": "4RFUeZoCg3tGV2bCuF13ofh38YYHHHZRKZshhCbnzieRwRPcBrX3qA2RDPumMzhxmdmQhcc94eAzFwidAtaXVmHS",
  "key6": "2Ya3Qk5xqs3b8udYn4awv3ty3dqCvp7NPpo7kkK7M8yWg19cB9Fsmqwkx5ojzgm8vURnLSsgtmFKo2xVJvHvnKdy",
  "key7": "2mAXeLJf5LYReETApwjKzQjDrSc39GzyUqSHWXtvMoXS6E5PjuAzZs4m8aL5MzFvbdG4hJqyx6GVn9gtnqubq13A",
  "key8": "34fsg5wkdkJ9vkuDf1fVGUezHMEB12WYiE9TBeX1AXvQtkH2mo8bHkZGt4yLMMGKvsNNAXd4uWDau97WymzeRvej",
  "key9": "5kXAvdF649D8NeL2mBwy5exPFhM6u9CtqMUgSUSLzQi2uzisfd7jx8SkL1sAUGL46krYjUfwa7AiSUrf6XJhCdkk",
  "key10": "52T9Hc1XQikCjpTr1Kf8BzeAukGrUt4CTVx62K6vg9Wj6rtvvUMTReUviRZXyiX8ewPaEo1pCSVDSFiu6keJcjy5",
  "key11": "4czanyxyukWiFGgN5hVN6svCNbw53CxzDcgkMiYfoUr5JzGg7tmjipXhRutdJVwpCrC3zQemDpRvZrmV51Z5oXiu",
  "key12": "4PU6eekemmcMXz3rXeaYNobdxFXGbyYQRb5XQZ7ocMwYLD5u7U829BVVMADW277AnUmN11uHV5WuuwWLQLW7zCBx",
  "key13": "3yfmPARdE3DEXitNYMM8RY86UNcf63jLcaF5uGkLTQsmnE9wMcfWJ5qp1QBbLGt7sKcefCHS4mKQGg2Ly9riytFT",
  "key14": "58hLJ3LQrig6eoBs7aZSBYRDc2f7Umsp3zrdFpXZYaB5uTA6G86v8VT9TwAazvJ7v8bbgBW6USQF7CJu9mUZY4bX",
  "key15": "4bd3fDGDhSgT9LutKwLjfHa1YEsa6uvqpuoLcysXiMBwAobW1LeyBHQ52HVid6Ma4ju4QcjJM3TuiXwuiZvDUz2s",
  "key16": "2MM8hQLPWNkuEViFt6gG6o85nhBrxs3CGzdEgrdNKjvznfsR9iS6Ec5thgF17b1fdWchPMJcrFqm6tYpajBTAeA8",
  "key17": "4GMiuPQ2Szcdmk1RrgiidAe4g4qu4SmsfV1yMyMsJhoHh1bhAxHJf9N35BiddpBHcmYXgj3a5W9Xf8KKxRmzi4wY",
  "key18": "46N7TG99XwrwRMW4tA516zGvTxJSK7CG9RRMBDZYDMU6Z4W7972Hhork2q7Z4wYRACPg2JSf2KLAWsbxGXHcweZy",
  "key19": "2FkDvMstnMxzDrhv1NMWwHyZ44831M5M2nHtdfsNGbNyuHzaTbj7WuQVotnGrsjY5iMtuuuriMMiwhjEx5qV6zut",
  "key20": "3FMPtE3VwCou9eE5jj5mh37vAJ9is6CjjSMGpKQjUCb7Wa6DeY8cvg2T3VdQpcSQUfLDGj2e5WhhM4E1Eyr3HLu2",
  "key21": "TNjDpay724fRHBGjesUKt2b7kti5mUydJdSh6EffHMVzTn1Q7mU7yxSYWyracTo7Fi5oV17Kd6uyB5o4xo96SAq",
  "key22": "mwkjyFK4nb4V3KYUo4kgWMjHSStyCvAzEuNZyL7UaoonH8MUVezxkz7hebpbdUBaeZHUBQntRsRhd2wn624oXwK",
  "key23": "5ndoghyUZTwB1S7yHBLPZ3wd5egKTq3nwuTh4MHYTJNcmX52vt5iEg9RSFSTLe62ca3c7dDZqcnnV4ACJY7WonJP",
  "key24": "3FeypqbEeEWgz53UADGnGZe6Q9qWiAjksBTrUy5AavLt7BGSZ7kZtHwnRNsvH2u4pcnfxS8aAz9amF75HFGiHw3J",
  "key25": "3HTz66JfM5cHkc7ZAphVeYH4uLugsaqCJw9rENqoB6x928Gupt4y2tjda9yuaygesCeRpwW8LwSaeSAUfwY6LnAn",
  "key26": "3sZGQqyMNYJCC8PwJJfGFr9dyMh8RiYS6kfwa4iq9LGgZvLy2g8RiHAPs3ohF995JvriwF6vGpg5B6jwjKHfQ1d3"
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

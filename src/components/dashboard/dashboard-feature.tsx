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
    "4LYdQ9NBp97gkMgZJ42JSKQShLwMMxQFwMxSPFUok2KfucpVYJStYaKhkvna4gDyVw9XW1Np3wYxuHUE3mxE3K6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6FqkLnWSRv3Q9TbciT7aer3q7xoXUxYKxAYJJk1SGxx2qq2xhBKdap6bu1Dp7aHzCzmts9MJdADanaNZmuPLTe",
  "key1": "u72jaR87dCQBjsy6WawzomWeKTeD17UMm26HAWA21z9UTNpUuaj9JbAt1nFE3wdp3pXXuMkxPrQoWnbUn7wxaZt",
  "key2": "4SzGT3MRwbP15t5nUMrWTKpXyixWL65KT1FGyZkCyPAf75hjQWiLDwyZkikdaEkcKAM7DgFiLW2icXYzynjLfqVy",
  "key3": "2XHijFm7g5Juh2n4GQdQdwRGu9SrwocSFctZnbkXaTpyc1oUxe9AprC3gjLt7VxS4eqCqG3j4B3xZQzaRacJ9tER",
  "key4": "4o2vFVRCba1vxkF2WzVjtQhrXP98GYw2gyQ7dL98tyToX4YedV3saNfstjgZ5zHwqFG5NQ6xuLLud9i8MTzqz3A7",
  "key5": "4t38Mcw3yx4W4ye6pVREmw3QhPsyZy8VidGsaCja2ZMSHxcZ8rYpyuuM8UYz6vy2dPvAdByz4xtUGQuDGSBteqzh",
  "key6": "5H2GyrUAoQWASkxz7MensRngqBqTR3ZuEJzub5zSa74tPsyFSMBfwBXQLFEC1zpjBgrmvNTptAyGefSs9mawXxfn",
  "key7": "VrDBmGMCu1Y74Rwkr8RJF8GqRBS8Scn5nNL4E1g1e8A8Bx3UebDMBAnWn1Z4knwCCawALXg1VMt2pBz7gT4WqKH",
  "key8": "Jgt6jeBhkEbEChbMgoWHnHRcsqhhdGSBCXmtQLxFP14NvHAES1Zt4XXjbD2CRTJNZFJBQccdRnbENyjWxmAEGPi",
  "key9": "2HTEDptG4nPjZevrLhvUfmsPmhHsxzAQ2ZGzunjS9uyezZ1jhd7KqzCtJKmTWA3zhakmaBjLYJ4dPjKdJb9iSLqj",
  "key10": "5wgvvMBP1SE1az55pvhyTB6RPNw2mCzzLjw4S9QNYUvPwb7fiJhcWM8JTCytkoVumZyHRyQPnsdSM7UVACc5PH8y",
  "key11": "527oRLRNQijFLTMysLB9gZXrQ8zcsX4htKVpi3Ca3AKzWQJYnkSBbaH5YwSSbpDovSdiEDZvHTyDbCtzXwmKiMPd",
  "key12": "4PBsUca9ComyraYuhM4qKfFQiryywtXqkvpUWYuvvMs17DNQgQVwwYzKyQkJBA5TSeRmcWNV8Z7YES1ySJzYsoje",
  "key13": "5tDrFPB3xr8roDJTbanZZF92pDr9qmaQ4AMPHM5o9S715nKS4YwPaqCvd7QDAdC3rtxMLoDmtpNWSy1aXt6rFHG1",
  "key14": "2JagjKYipTFU98SyPLoY8CuwJpg7ZVSXztUFaHHuZhHDF9ew4JmD7Cd8qEwoE8unAgVs4XAgb9JSD5oeo9nrLPmY",
  "key15": "3cWTD5gJD96ZXdG8vpSJ6eh35A4U1YBC7J5SA76mNifo2NRFLE5rSbYY8rwtLwfxwqDqS5tj16yQBwtT94RCNJu1",
  "key16": "5JGmiQAG6e6bTaXsmQed5CZhGHRrQPr9ZbQtUBXNF1yeVCKDkSW1Y8U3xQ7uiEYr455ddw9ToMcMNa3EGdGHQwb5",
  "key17": "5TEL9pz1ARMVYgybkwbiUU8WNW4zYe7DmA7TcJCbdKgP2xXu9bmH68QzpVKfDnbUMGKYu5RU7Bq5ouWsXq8LvUK4",
  "key18": "5aGxsLnihZL9NC88VoNUAq6ofFz5tyQqSjRBdjcigbuMDDfKiwv13WYCURbfPQLjVqZB1tkLAKf5qy67ZQJ14Xeh",
  "key19": "5Dhzs3FzeGzsPBhb8RujNX8iCtPVMdFk8o6JSHqgabJExJqcBKFN5juYWysgbWskKJcS4VN9Lu8UxUHTGSABw2yZ",
  "key20": "5XknsE8MdkDAamxvH9Jyd8Q1xoVKj9F2sGjTMVvRCuLcAWNGKvfQDCrDn84K9kXpXxoFqJrm6ufJMRB2hNscGFK",
  "key21": "4Zb2ukNEjt1b28bhSx5TceDxRGkzW5eu1piJPJCtmmuFzh7mm43dMijdSE6683iwzSDSnmeDZFcRqrPKNsgt1yhN",
  "key22": "2te2kYB4TUBZvK9crT4yqG4jqz9Ejrp5wWERoqXfeu1ZfV7dfgDNQL98cxCsjHb963tH6rFaazEMtCWhD4XdGWLi",
  "key23": "36ueid1kXp46ZeWfT4LapvDYLWRU36MP2agkQDDfuGjWDPYzoDF4LXhEp9HZgGr1tXhfP3JRxzgdfZiZLMRzUcVe",
  "key24": "4pcyCmLoEhGRbwv1s5EEQ5muMZW6cey5rw9gVfL8YV9SLAoeKuhWsvpCVRZXUbHifV5tvQVdru2GZepFcQosuYCV",
  "key25": "gSSfciBvE8bBFttq83iJ7Nd5ynFgrRacQCq8ZwNvMEypZPT6KF6CW3o2DLUZY321qPWJpgYUSmqnRynQG3BGF2u",
  "key26": "5NnKERaTEgqKmtvhLJw48scS3SYRTS7MvzZnFa4HuRNCFedmVntU9TabcUAe7nY6JR44EVSU64GgdXjTmM8g7S4A",
  "key27": "3iEGLoGZQvVDdZthoVPmsHSCrdDc4gLjzCfbfbMLwyVYP95z5UnLUygVNuBJVxsTvLHd7vzV3KU9W5nrvfAie6Aj",
  "key28": "3UWWZX9LEnyrMBZhECtWCvawy1jdbSWpPawCq8KjVxW2YJMbTX82dXzSb8PKJiRZohaHaatSqqPbuRdBTpyhxmVV",
  "key29": "5o5nhFb7VSZ3jCM9y3rCNaXeuWdHJkkWQkiRTiKKGrhg7XksCSQGQ6bjnTashP91eZW25Jnd72axr3TtHhe66Rvf",
  "key30": "2md2UhRyt4Jk4Rwzw3Sh2UFVYutqV8pmm5AxJMXDMe6xstT4oxfxNuREM1xg5gutkFsAGZtzcEJ2CkNMmcXUUuUG",
  "key31": "3pGJGmUpdDmS22qFpurQz96gNty4RtZWWzqHhuQHfniH8mriBEit1UU16CJ452MPN6mSsRaJE3mu1Dm4wq2XJyEb",
  "key32": "JA112KdgorYzcj2f6T2QYP1oWpNRbgyACnBJLL917xQ8XAcWCTT53P1br7bQhLV5dvQiZoCLbn7gkCuPk3y6PLB",
  "key33": "5DGsKn1XbqdhsBjSzap3kg946nhe4DTjGfuWNM1rodgn8RHKCpBR1MDRM1z9JAGckHzUnW8J1bYzUzseK4XUao7p",
  "key34": "ppkEzaKAFzQX8oBWtq1hqGsLHJie1pFt3yqNgfdJ6x4hggE5X5sn6DnxYMtFZHDvJjsqZiTLEUteNJuFMRcWYZ1",
  "key35": "34SVFHxGuggnfVDXhMUYeQ67CKBXAMryi4AaJLtEdAppvWYecTomEXrbiH3gMicRG2H8v73m8aWbqrZdycWeERsd",
  "key36": "3rrqtnmUydK1K539hJZ4CjXJ3Tc36mHt2ehmVujEVrwf9FQM52ZME2JE2TEjLP3CH7oiQoNUGh2E4pZrz8DTZuVG",
  "key37": "2xPV5tDBRcRxncoBKRh77CAA4AFyYvcJRr47m89nvaGdYsqPoM1sXnhLA6G78pdC7eV49PNDZMNsu2uVqmUxmsEv"
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

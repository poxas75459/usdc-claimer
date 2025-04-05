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
    "5AnWwz9HpqJaETyotCnytMoSWV6LTN5XdKng1FiEd16eu8UiGWKNWQUf78RiWd4JcLjLU3xKCfuSQ78coHVvgCg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2u27vCayCisQyGkgBnPuCfo5bvKcQi4Q3mWrCW81RZFzd1MGoDZDe9948ZATWeJqbwQLoMkURTEvptjZYuY9mk",
  "key1": "5yY9fbvqRjN4LqvjjkCjna21c9uz63PAwFrGYi8gf1c5xYKNRKEh3r6JwfMvdqJqmbC36ymGYTrEsjqztL9bmFTx",
  "key2": "4tcNtMWQ8J3YLTaZnyDy4P7JA1z2KQvdTTz9jopFe1iF4qwLDVtbGyFHVkY6buBstJmRrinTFxHLqMdGwjnHTBE5",
  "key3": "3SWmx5UmoGtkfy2dcQDafvTvUtnqmwT3J4RoKf5PZsnQvpJCkoxQU18MmWhCpwAiy2SQGfbpMv2AJXjyvPNKSTmj",
  "key4": "4WjEqDjgtksiWqC3giP2b6sQA7aXUZaw3q2YfKgstdo2pygaoQMiPLkPEZVyvbSNzQMKzkN4ZatjH5eKiz8YvihU",
  "key5": "3GxoBwXJhHaTZau2ibTBcbh3kLhpAKU7cBbWrFqzkyqSYw7To339mcWxeULpnuJrxdXS147rho2RkYgBsebFhoBN",
  "key6": "2YnTqVpGBCc2gddgNPYmgULYQKYbFxQzxVCgvd4GbegF1CuWtBhwAnxf28HixoYEp3JusEWejC4azymiwFsF11Se",
  "key7": "5RDnupRjzsXVcGLEUrnBJpFDZaSDtKhcEN1kCbVyLGSxYRqioXxE9eVu5F32KxRnCaAcWf9DwRy9Z2dfCqzQScxV",
  "key8": "KkTqXmtbXbZja82GQVFjU1z3QfpHNn2jbgPNsHKfy2gXTQp3nWjDS45zgNt1MBi8rVzx4TtMPAyxokfgYWZsxRf",
  "key9": "2yKfStXc7FxKK5Tj8dqSsJiKET1xv3NYaAfqB14Jz1XyktBr2MVKHYFmRFFq6n8iGLBQPWsMkJbyJbQzKnp3tKtz",
  "key10": "yRsXT6wfWXxNLYYnYCfHb2ejZkAw8q49vyFGEv5SYg7KKUh5XQFCV19azZNmZ7RvEhf4xmeM2KKkfcyNpRdVNoy",
  "key11": "2YC8ucw82zeZyURCqqn15E1t1nxWUcaoWchTVUiateU8mXUgUxn4qSeSzHcBreiP7q45uYbcp6rYMztzZM9yR4cK",
  "key12": "4rmVtMRMPYkEUCh6u1EPEpLKugrUSXxznGjqgE1CBw925kLWXtxGYmLrX2MJksprgF1BcEwK6mekMM7RcEsTAVAQ",
  "key13": "2bDyZpSgjnWN9YB3UzekzG2o5q6BJvMDQgS44iC9VCLWdXN8sfpGzA1ifFJcX7iyRN8ne5tNP8MnnjDNXB2m82nu",
  "key14": "3XdmdzgT9RDR719t9g4v7snFEJopnrBVbd87DAgQEd2Gp5yKyVpcEkT3W2qRApwjD128bMLwZmymcTRNma6x4N38",
  "key15": "3vbv6odz4sL3LD9e1hYbTUEpJQ4o3z3rUbhi1FPE4fVSBGMrqMdgsDP5vtaGU7oVqP8XZcsF4ZizpVrjf5isdX2e",
  "key16": "4FRBqcJmnkoGoRnpF9RFt24vTdeZ841Uo7fMuLkDAoAwCQp1BFp3UT3oshtvb67yTnMQhFspwcp4osWytYnrxtcM",
  "key17": "2VHruV6uqtm5qNU2gtoV7JLhqbxNGMCYathGtbs7YLSPinCKwkkMMtA9zWi529ugQXGkSkBMNkjAM7JvQqgC4QtM",
  "key18": "2A47cEbiJ5p1hADzRHciDGFca7ceqd2G4dtrR2qU2DzWNUfVTQvZ1UmA8qN7EAvgTvkKxTtGSrtjpmqSM8iGJWG6",
  "key19": "5eKoWL1E5wg8rzYkgrGpAwZxyrjwufWb5f5LHMKwqxU3KALSvwiGwPoqHRGt2VqU6w7jjqBqguxszVcbBvyWLU3U",
  "key20": "3Azbutz7Tg88Lv3nsxiGc5T3m5tsbYMZiYx9efuRTmQHeQ1AxaDF8NjVmFGkPyMLP31KgL4aQS2VVRszjFWPo1hh",
  "key21": "54Y564AQhZt8kUVLH4ffp56GFnMuQCprJD3QjsjiqYpuyZLapxwC5ohzXckzKWLSURiMbDDjQE9JiCRDFQwRrzLk",
  "key22": "3pLHgBVN46QCWaaAQD7EGTQbraqVMSLmbeqXtRpM755LyznxMfZjEX8st7M26bG85yxQnnvTpyz122wXLy8p34fm",
  "key23": "27eA8vBB3jrGUQ3gcLFfwfLxsxKCxVUsonKsEqcuqXkwJifC3ZpHUWgAcJLAy9DgSxAXvsAA5g7U83os8uZ74PPk",
  "key24": "3vn5EUUhu6ZqYpaw4mKszKYLu8zgJGSQG7FaqUrxRf2AH2hpn9R5yggDMGzoLeQ9wrepmJNSJunQfNj848hB8vdQ",
  "key25": "L5z948dDE4ng1vs93vmcBjfVFLitxE4Yjaw65qFjERtz8wzrqCbymPraNcgeihJp2koKSjtEfzdQiu86FLaxQt7",
  "key26": "21W8g4KeuEpdtrybp9JgAiZopRQZMjunbiLjGZcizSiqxykPcjJbDyprDYvbNWLTd6W4n4WRnu7cNiTsoNe4nijB",
  "key27": "1rMdt3JgziQU5ikjgw6NbT6scWuqac9Y3XaraRzMCBZiVb2k8wfTsCiCBChPZ7apNWFngqN2QjC2FKJ2bjY75Ci",
  "key28": "34ERu9eFXV9nhCmbGL6EZiTtf9fCjGYexkhCTCdSdbHbQZVU1mnPqGwD7b6DPT8diMfUTPKcwWw8c3W4QaNFuNnC",
  "key29": "3vJS2PQHFYACfPsDseK4rUWJfmtqKTquhutBqFcmVajW1WNsPNUwqiuDGA8XWbSnmu93sardkgGDbMqKz8uTn7s",
  "key30": "62m9mZ7C6GLbHoS121QCxuTg6G7QGDcQKDRMrnc6zjWLADJVjK5KVtpL8Yzvtdn7MWj6gPqCrx4qmHyafTTRPVm2",
  "key31": "4KL1iw1nBwdc663Ex5dE3uAbFuWrnQvUDMoDrDCKJC7uxqM5WVwRyf3WTh3uPA3SxQDr4ZkPaFLyXze1gPry55or",
  "key32": "A2fZtahL6CpD8kVUb9PLmAg2eYJxwonNTuDzcDsw1FEFZSys4rtQCQk76HRyKmSkhbQYV1GPeWjc5BNCcAX2GGP",
  "key33": "4GwacPkJANMzL127k1NKhqGXj8Ey8kyfoQ8MQ1nh7D9UkMdSodf2XTB48kwodSJPc2xZ3TENkab72fKkWNgPK5qy",
  "key34": "3vesUukz66hv6EeQjK1C2rhe8188VGpga5TAsoe3GUHAAuJCHdyqTLJk8P47rjp4s6KJpiLaofn3WxopHvvP3vmK",
  "key35": "4BfHSUZag5kFHXkqcF6DiWhnfGhTnEpHdTEJSNjwHw8iQy9QRqqpeqEa36KbJKyVBgybvWiL6sDEy8QnCJvcMztZ",
  "key36": "53Qk97rBsstBNvtGusST8Hh8n9byZTx6QPJX45cKjSkTQFTcjQ7bWjGJs2eAGH1ycy8LjqmhQm52SkDdYXE8Pfxo"
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

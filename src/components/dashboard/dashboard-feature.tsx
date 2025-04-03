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
    "2aCM7UQmLf941uhCK16Euqqq28qa7RQd6UBmiepcyr8fRz7WfPuzkhLAKUz7z31vbwQ4Jb8Rj9dUnLEHwWT4hpEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KWXDb9nem8jjoh1jJJzbdLo1k74bhRubYr9m6tMgrg7HySufpqYA2wYbjGEve45GgdFxx5qALAM8KCU6TjAuV7",
  "key1": "5FDpzCtAtBPFrCqLLPJnygsiaodXmPdexrvJ2jzHHZ7RCZpR5SUHdbeKMduTHWCJZuAbLKCbUCnFjSEYgscM2HvZ",
  "key2": "4zwskCcwNnkJUjf3XjsfjyVPVKoq2endYPxvocbwpZNMdYZFsyj9aJ3LfZyawqLsPSZscAjgaL3LX2mgEDbMsFew",
  "key3": "3bE1nvUHjTrgLemocjuD5i1FEu2TTYeFEopoty397LMd5tampknxevki455RSJBD6yg5VFZdGtrvEWveNy77TYX3",
  "key4": "2zYeSBfzCN9YYW1VMmELvr9j1XxMUydaFPA75738NaJV9JgfrdvbfpNy96XJhU2KDYq1Kziray9HfdKfWJV7KjP8",
  "key5": "21xQuttizJV6pUNCfPy7bs6JhmjUNBVia8HTUwMfz3nJ7jyn8PDPp4XkNZcExAYk7uXrLVzcy2gj3dawBF9DtAig",
  "key6": "5yPyPQPx3ieE7MM2qY7wLFJG2EBZm42JQUjVfCmEbF3FHTuhRn7maUScuK4Y4P1MTFBkA5JvWf3D3zWhAWkzMAui",
  "key7": "CoBQjmJgbadDoGC1NxSTrzvny4pXq4H8aaTXiWX8HhnGhjNUkEBX5FmWSp2GtXrUpSE8bwWCDnrxiPKkDWrUaME",
  "key8": "5SxtQDAqYKVnkzJLfskyR3ND19DbmXaPiHQgbcwFx2n7REsX3iAyxeo7h2Evfceq9MGWExuLidQo8WoTbHWVpjsa",
  "key9": "vzp5Fc6imtw8RxpccXArgS2iTaxZbjhtKZypfd7PSvXrPJ6sXiLfkuMm9c54PKWrmdaeN1t6XtyDQXMkKLkWbHG",
  "key10": "4oc9wK41RV2cc1ia9kAZ297WjBNzp19PoidRpg4TW1nZx8YkJ7AaTD3qEUFEthJn3DdFJjv4qekFmGtLSutkJggW",
  "key11": "3Xiy7qhH7voJRrJDLNQJ7aAXmHhgyRRtXjj2cwoEyT3nQBQyZXxS2STgJhHWockxBStnMCXxXThqEUqo4UEZHFCf",
  "key12": "bjQznPcCtYuPrysfBtP9w4dVYq2hAiyNPcixNyQU796SUfCpZSctVo1cKEAZ2ZrYy4czr8QDbLa8Ye6a2a9Djpj",
  "key13": "31zVKKemxqqJaCVmVWiXh4GCY9dYHCsDLLUf3pebBZ5CnUySMQk1T3vSbGu8ZdEDFn6FwAw8yQb7DGwoAkrYKSQR",
  "key14": "2hnsCKyyPHuW6wfxCt8bf5fAbmA5MbQVJT4GGENe3HwxVB7CzkUwnrLg6uS2KqXrEKpMbibdrvSayFuimvAbCA6d",
  "key15": "gp3qcLrKqy5uQBCBJxsdPaJiN12eZ1wohhx4oiCoTVDaqkq9gB9A9ak4ziHJ1Y6yZ1A2fMCjiTe9Wk81A4KwMe9",
  "key16": "3xDqRztC2tMdVUnVbkmhKLfYcrG6WSt6gQJRH1MatYzVBbUhj47cTmvUWZvkjGgyznJZr24CGsNJRJtaJt9WmxiW",
  "key17": "4zjGXpbW1M5rSRgTmLcqJ3713PKT8GaU3HbUmEAQGvf9jYVpwnWbMnuXpyhjKip4o7c4gUDi68zA9yqxrrrdVw3p",
  "key18": "63SLiuQrbK1Z8x6oE3bv7C67YqEoBsLgyYvkfwP39hduEz4c7cmVQwGFFGStK2vc8mbRDMpVQLnSEj1W7XTa11mX",
  "key19": "A4ssTGU2rxjjHnjfmEZigbCTToM7zuqKESo93yyvWXN9kWUDLeRCCwSpudK3HAsFLJsgk4PuXXre6SVSrGxKQE4",
  "key20": "5WSDAT34UiHE8T6YwiG77Nq7hZrE1d19hoqwb2hzUUGJdNNXdYVY4kzoSRqH44ubnivXJsdvnCoNeWhf44FjxUgc",
  "key21": "5YgaA8pnxg839tWHAJuXkuRseomkLYHhoQ1JiocTsTS7L5Vvt3SLPciBRLp58EDKpmVXP5nXmqhpjXke5SEqVGxt",
  "key22": "4NEU8fA8jYAgseHP5tryeGCu4z26NKobo3iUxF1otaQrRrvasojdZiffEjp2jSmAQX5na9Q9n2rSCPwWYSLBP7DV",
  "key23": "3HRQr76xi92byCcX1n5XYzggJrJ5aHTVUFjSjPo8fFNkWrgaPfLsstMQu2MJBv1gYQx3xuha5n66ykhVBUoTtwqJ",
  "key24": "27LaJVebM1ViHnKfnVneDwWxfmAUsRsSm2RP229zFzpvtfwgBxqcDKNzt1hezCZ5xCkmCpk1KZjNypY8PHwdfkKo",
  "key25": "vfVZ4aotLf6AJDJFT64tytWiyAfNs6csnwJepjYEQkNPtSR3eLJjN5Nn8ACGtTmkbpQPRGc5Lfy4yWVBPPoiedv",
  "key26": "4BNaAvX2A6vWAFzKFGiDfpz1aLCLeM3CNWEkWStnGsmjiKZJngo6UopzBMXuXmNRMFygusjYktVWeMcmhETFji1n",
  "key27": "5YPy6y955jRWSfQgkMkP63W7qXAVnCerEi7ueFTWNdb2qwkmLFs7NScynnLCmkaXZxVtK5WVtwk3MbVHDFLPkMrq",
  "key28": "5iXprDGWh72PkBEMXM5JjwdCv44j2frpNSfEAWHQ4rgEJWg2HqmbCkPf6dA2RvS57HpjuKnzXRgApPjv6RUsw7R4",
  "key29": "5CjUutJTRQ6YeXS5iWBN2Sm3YKsmbEbnj95tqsNUTPK8pzDTRe7pzgTR6kEDSVe6GCADW9CP9MCi3CJG7Ada6bgX",
  "key30": "3xB5uf5FRi3wRo9eL5sjZ3eXjmNu9z1AkEPGHW3o4gC6QWLfHFzn4F6hkNQ3m4vHopwsNuJx912347XKWVN1GXgB",
  "key31": "5Aop3zxKKKvJjhgGtVR5DcP1A2zAbZ5vYrZ3FfBqXGk6qhkRGtioAChkwD4A1W3YcgR6qsfNNcwzM42XxCajyL1D",
  "key32": "4SRsYW1k6VSCth1XSmumZwJ3cC5pmR3zcv74UmsHQbVZBmzom8z9jTvd2WqyjB9GbhbM2DPzKif5V5yTYXg5Nx7U",
  "key33": "567xq8q4dZQEgFXhvi9ferMafN8JwL7qZ2NFuoay7TvGsJQmrfKPpcb2f6LABawhYKoXX48p5St6RfY8Z8easFXb",
  "key34": "4xLN6K5CiQ3zdgjpAwejZQcPLvESQkqdDrAAvZTtvTJFzvEpUbewH6YB5gKxLdWwDkyP1UBuKRU8cfxmXbC1qe2",
  "key35": "UDPMDSSscZ8UvWus8F2o4dfdXEw3e9Stok5DueMjfkaR56cEVogCNQATj2VEiZ1fi6iREKv5CLS4uRPcoVDtWU9",
  "key36": "5hUdUPDmkSfSxM3pzLHFpUM23iUiZdp2J4bJdcwhwNvjcd58KpoEbfpm4LKXhacdVLRw2tTRDu6KoMDUdP55Xu5M",
  "key37": "4qFvCpufJhPW5BmpUnUNVzuNDsrURi5eGHm195bfiTnutVGGtAwKYErZ4zK72CX2WgBD8L8xttgXAPMCy5z1q18x",
  "key38": "L7r2veP4ysfnR4cDkWMqVFFV8376Md6CiQCXur5xaV4p9iRd5cqJZpdouaH1tFLPEi298cnoPfLTeuu4GeT3jBx",
  "key39": "5yu5RjicPqCKWQ1fJJpaHKxVXco6LEwYr38Msk5iticTaGp7HjzZNUr2xHgcSRpjp8FgMTATtrR6SZRZh8UBs34y",
  "key40": "2BAmoE331RHRWJ6QihL9tcRUKWhPVBHsY6rvk27FxRi8EudZwUKR6gngu24w517UmreuKGVhZ6hwe63P128PzxPt"
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

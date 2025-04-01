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
    "3iCoffrPNNdoM5saPjGoJgj84sumzm3mZM6yzmF2rPcXLKRHNvszXVFzfj4gnUH5MzT4MGWtBJH8VaWzJNp2suSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QQqkwcitBg6wmZn77h8DKkkPKdQd65GBsC1V9LUAP3MHrd2wAZCprof9uomvfJLPF5fPP8N1dFb3di99dabfapL",
  "key1": "4sdnpEnPuNFkZS5w3qw81WJgPRDn8ALgFYNBBq5sjovg5LotxhTp9C9RrqGy2pecpNhMTX9Dhqjw5TABu2Zaz8Vh",
  "key2": "SB4U4HC2MLkdXMxwfkqpedzF33Px3PFkR46G2jE8YG5KtHtPkVyKt1uovbPKz2od4BUw7ecMKSpJn8V8jBdzesi",
  "key3": "2iVC9XSNR3A9AwT71t21wF2oSAwrNhPU3x8zoneh5MCod3XHNbXGzsRFtqapJDyzp4f2bdaLRGsxn5aNs6eiv9f5",
  "key4": "4QfSronK7KSU42XHd9M51ZNwXG6mXnfJX5PXWPwHTLDtVTdgbMkBzsCo1sCuqthnGirMa7eL49mRB9LCXSL4svbS",
  "key5": "44gLwYj31grQFWL1tYfn5mY5RfRUVgMUf9P98wYV9uohzUtLi55bhBG4zxr8gcZYtC4L754nu9TCX3SN2fSk17AZ",
  "key6": "sVDu38Vum1M8CRYdwHypewNaLuAMZMZisuuHpHxrR73FWGRYBgtCusdAuih4tMwd7TcLTDo787LZh5HuAvozs27",
  "key7": "5fBbedYNHa2CZinr3gE9emtXXWUdDSipnLJtKzb1GwufPmqNH3iar6sHB69bvVK42rJviDxCHZHdG1MkPACHshcX",
  "key8": "4xPMmoLmNa3XdiR3XzKbtNzCjwWBeQNwqS2K8hKS7E7gCCe6exJKC7Kw3Bop7YkBKv4k8kRybRVwgWQ3EBH5pyz2",
  "key9": "4YKY5nvnhgv7nqnZSUHMWjMugZNXJvRoKNwAiy4Ch1mMfD5VJFxC6BipoUL1bdQxLaAwYvF5ytiQEMhavgjRuCVp",
  "key10": "4ogfdKhk9pn4QHz2Upj5q1qDWYuMXF6crSbzvtt2tn1Z3aSvbMPBzMicjJ9uXkRxp9jqKiCNunwQVX7nzkM44tQ4",
  "key11": "YJMSC9ZGkwiU6kf2Cu14acjDLAf6T8aQZtKttCMtTcTaoRXvByh33xpUiCRpHodCoxJEERNMHDBAtpWfU1XTgpV",
  "key12": "zdnVpLUQJd3ufAsycpFVxo73oCwqdHvrdrMSUiqwJU7NzyxeTMa1LFZgZiaGyrSv7CTCd4Z4NM3e3TjvTgVYMkv",
  "key13": "5dUtuzu7UgB7zRVFWLf7nL3ryto5niRhhQjnHCCQZZiGn6cYhYZuGsT5iV3fffJ22PRGgRdhuPyX7J9HnFZgrm5L",
  "key14": "5mtuUp8AcukGf9v7aQk2bTnUXz6sq1SxrYJJM7ocRUfJWFVcm55YfsZhCXJouc1ZApd83xkVmfdg6AuMqgbEzpE2",
  "key15": "3m2CEFr8BScurtKuR34s1Sedi7Y35KUTHx6GFiKNTzyfPkcVUgsfpQqKmfiTepxvzB8Z2h8AXgoB4iJLE9vk12kv",
  "key16": "aD5JwUF3rpC1YD9Qx8vKv6gS2dmy8wTYDKtJJ1DdSyVnknZK4uGs93djHzobSqJTrSRW6NW7McjjYtmMpSpux4b",
  "key17": "5omU6MVXLnYUc8ARSBMp6M9KqZTwMrTttdPZTgVqSw8Y2HctpQwpsPhkTnVcGX3u6fRnkvnKAcQxNBizne3bdqrq",
  "key18": "46XS9MjJ6rrrBxHjJReJh1tZNuAm6hvbZo8G2inoj3qwyLNUDwKkNJTGXddSaArZ1FmQMF5qZw5hRu7F41aiGeyh",
  "key19": "5n8cKNgvsCghDtKzSY4jfaVpq2gGdevkYwXvzZakcgESrdrUr16PTJvvodVRQnT4YecQndTxAq7hmVuXoJhnirn",
  "key20": "2syYgUnNhr4HWwAuiSC8U7eoDH1DoGdvc4D4i3wCt7cPNQwyM9tPuB4CmpW9o1gLNFHGF1tqsHFmfzjtX79mEWeP",
  "key21": "5TsUTDvNTq1hS4c5DsQGSoAfzN3SkWsCwc2UX2sdikDLSkED5mGjDJV9CNFhx4Lp6SeQs8KSejVbyBqPTJUGW6MF",
  "key22": "VuR4vAHTTXqnJmrvJr5igE1HJL9mRAneF6G9sbXj9Gwq7TYWos5pX1KUxeJyFfLg25baD4XjjbkmZYPAjgAWexq",
  "key23": "2VWu75CEQt4jx7bFU3GGXhb9LkT8bEyFcG8Bmd9jjf4axUf5DG3ttYLbjSN89G3tayYRKELPMtw7B92SHXmp8as9",
  "key24": "5VCYk8zyhdyPNMCUtvwbPzbUtPJ7iKmbyATBQtg8dbT1xVnmGKAskiSi63Bzq9FFBDX4v1wRdHcYaT3fJyp7ztpy",
  "key25": "3XqKmQnodjARqFAAC69b16VnM7QD3AZ5E3mnmNLgP3PxpAKunU9vD9th7nLsF38EC68DbhQB6dDLYWu5EgXAjGMT",
  "key26": "aaTiyRiyBAHMDFj9RwKobfHRGDBV16FmHn12325S54AMwC1oNP8DxDWiWQzNzPHCU15NUA1uNEaQCn58vc3neSh",
  "key27": "2iTqVs4SDBYJwiUwkFz54j1KqmWfSSZVLSSNyomhtse1YdkU8jgxYhXSo7phFbeKT5GckNytEj2ucjQag4MfRnZ5",
  "key28": "JoGMrkXKe87QXXM8RmhVASdGJsXYmQnCfHE9yEzcx4psDSCHJabn5PckWLr6n9E1raxKWmPBcLc6sKwfntvkJBi",
  "key29": "WmwHuNYZtdiKyEsZqtgCVteCG6UHFwCpH5YHssNiNnhHX1JQke29fBnoPHPf1k8NSpj4AWh68jz6cyK47jkvebS",
  "key30": "xMda99f7iTx9hB5hRDATXAQT28VR8bw2msyL9GVecENxgTTHr1NBLEjkxZazd88Q5aKnW2rpBjZpTsuWJMbHLHL",
  "key31": "5JxRL5oLQgqaj9HMFcSTmJSJNozgRc8VQkyA7kpd7qCU63KNr7dVfpSZZDqmY1kuGV7NfwF9qxZkVKoNTb5J1WaS",
  "key32": "5DvxetcVcMaJDS1vpN9W9U7dwv8M929UmVX3PVzN5WCy3JLoCRRwfK4XsuUqhAYswrxkMzPFpnD2Ft4LFZVcoeAz",
  "key33": "3sC4fD6JCVjnxpWRfrfTPDqcHePrMu46oKUVk8myFc9p6PMedCQEFVEy6tNbbam1QBw5htmzwBPLA4Ac7SGsb8jT",
  "key34": "25SRL6qxPbfwGfVFZ4194foXNZQFbfmT9NrvmTJqGdyDnKZmVHFtadWA82YrDxDzoLKj5TdvtrMHcJK5GPj8vkxN",
  "key35": "2zfyGpqdRccSyWEVTwmAh7vnRvwy7e3wK3JMP39z5G3keRNBjBAe7mF7FaN3XLz6pGTrP5ZW9oKvd5kxRnZ32m96",
  "key36": "5V7vhGQ3m3624VpwDdr9j91HJ8FDPLGSaoV2Ma3AgWQDUy9oFsPxMBafbrY1nRYvqe13Hkzc6MxffxV1aNotC6Ww"
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

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
    "brvBRR7M3VuNJffzesUqkY4rL8KCy1BDvdZSzjp3jHZhsbFfchpjHuthQZQM7zxCzcyv7JrvPsKRjPofehEFm2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yz4pkdUXYSkH6p1oxVAgX2tUxYWWZaP7ssW5L1vkyNNzcPWm474FNTznkqSP2ASyBSKm6RQ3YMP7aQezq8UTY1n",
  "key1": "9hrrqbdjVMgbTHvTpS2o3Kgj3rcDVWaGBdjx7uGaWmNgfW2AMWpjqzAYx37Lt5J9c5WMcazJjYh8ZLwR3jWqQwY",
  "key2": "3rkwik47YBwEEdwCZ7Qvbzp3bf7jfhYCKXFG5GcnpVV49ezvBnjY68uFJgiQbyu2X5tR4JUHHuX9sDg3yfTmLbGF",
  "key3": "4Pe8U8FEaRV8hmSBp5GzaK9mL6U8AQsDVR9HuTz4tBTL6Fa2sWn2NWigCCrE3WqCvSJrpgpHs495UWJKrDcHG4Sm",
  "key4": "2QtNRZaVD9aKowp3wMoARF1MM1NxoF7kKVM48Z8yZrQRyYHo9R1gfBktwjytYfPiwdc1wPXd6prhJ7UuPtZp6cBs",
  "key5": "2rJVCsyDwLJ9Sp3TstWGVW3hmqqbCVJSADikxaChLkPJNzBg1VnT5EJict6jkq3wb5UVSRgELfouyxjPmH4H4ghL",
  "key6": "3ncRSpiW9YeREMSSfvzf6a9mXhzXhoC5Tu3kFftWgeFWpujVJUgVvtJoTTL9SAyEds6Cdi9qqPwV9ZBmxSbuUMaZ",
  "key7": "J2kXRvtFRTar883b81xbg6AwAFwCsfb88eHuTLAFnTTM8B4jdBPdMHotp6n3xRNPuHNP3vVhX5XSWQ2kR6bGc9V",
  "key8": "5NaebsGbUYGJTVm6xrtBHgRDs1gmAibieLV6nsYU3ww3nwKCHnYVh7x4n18eMp43DQfoD8rBb8YqtNfAdXErkv9x",
  "key9": "579VuyouFd5Vuv4LUKDvkV44imVCHZmecoELj4Qm1dPRxjgubdfTo5FobTPKKZN7dokvtwimWMc2Z9taBP2SzxnR",
  "key10": "4Tx9yezupYPUuNSH9UmL8ENEX5KWqubjEu4bBUtCct1yVVhEdrAAwYm2p8rB5ojEcAwbaV8K8d2iUkdbPwj4Ff9k",
  "key11": "2CRzw8vko7FNjAwAhWVweJD2JLoShvbgBi42hTJGTVEmq5JTqCmemyACWYqbKQvNwjpukJsajVxhfYscDE4b32mJ",
  "key12": "2qAC1VWj6UTXWqfcQxEHmpgMUGhLYdoMvPYMeXRrM2B6JPMwghcRHBS4jbNPZBEPQvd5osemffYanRNvRSmn9dnf",
  "key13": "2MnfRr5XbGHTm59vvxrtNrcFMjPb5Y5LZ6MnUASoWTtqGVVWPHPEgiEnWujvVBsMBEfn3pzpB71jQmpSray3hbJv",
  "key14": "2hBEhF9QChTLnFpJaVaazhTUbLrUncS68QdVfBPiKKnNSHBQFCmAzjV4rEFC1PzxHjfhxxb5Y74ffk4RkUqMNY4G",
  "key15": "4uZmkWKNPVZ2kr9BxkLW2mJ4oqVkqAbGDoMwRwiwd63GW8YsA5Vbo1iCprNo3TwQdNE8nwkdHdsKhuaDhwdPvpog",
  "key16": "56BMD5TfX1bmJhR6JfRaVYNPoc8vza2ACTjzLXfsp8vtV28U5cYB6v42gT8sp8JKAgbupbB2Lv9Z5gCQBwkLB94o",
  "key17": "44unwicgUetQPQ7ad7tFp7VCDDBSxajtpxSRisP5fwst2kG91butQk6R9zYzAomCQcr84jR51jTGcbcw8t1szNay",
  "key18": "hmJT6jipccXkzY9yhWW6q3GEZmrkGTMF7GZZiRSer7bbe5skpLVWNjSX361oyJyea6W88tPLYN6EdsodRHT2vVb",
  "key19": "625XE7UaFyXLv6FW7HU6NmcSRCjRH82XYQNdC8yJ3ATfQ4Z5PE9T4ta7e3B3qMp8GNpjHWAr85iGb6QAnbEo7KaF",
  "key20": "65WvZx695wYmz4C6aYXkvj91JprhGfzzED8URJRodmvg3d5G3MfD7Cvn3w3oXGmuGewsyPYGVAgQwnav5J5gMBoF",
  "key21": "3Z8NtAcHp8pTdhdQJcb3mPJcRrWAm8r6HwVJrojr6NQxXV5VCV6n2qMTQrxUfZJ6cqr7CxKob56UfsQ2sVHWm8JL",
  "key22": "5uG65LbbrLFJZfuEScKwf2jwzHBQgBwGs5LX5jm3hFosenvVb95Pk2YGTbrjSGgWck9s8tfxAEyvDmcEr6d6nFZJ",
  "key23": "3dywP2U5kZbevNHzqVeXtPWfrQy6FM5q6vyuSVGcwQadxJicWrr9TK6dF1VHJJZpguRxBEnRzfCZjS8j8jtdnY1E",
  "key24": "CwyxwpDZodpveT2d7vEhMxLHtvepisiYHc3EfsG6AgVd2oTXd9ChKQsh7GsZ4ahrNEchzXsZPQ4dR7mAGmmYTQj",
  "key25": "abh1LapgtRh2ZeZTF4pyTfssXPctPdte2oibyjAiUDbxGSjehMC7y4a5D9DhavBczRLu3ZX7LD6jWqHEAFbPqBj",
  "key26": "KGD4MoBDuB2ixgGurTWnzkUJ1ndif7FAAz4Q7nSdP5w3RVap5THxzWQPweAhmQCgH4F1ySkrgfTjhNfWqVAm3oY",
  "key27": "rGiftsUAX4eeQJytYgVPTVEFVBbrfosVLffzWUkfmD9ZQUD1bv5QUv5RVHRztcudjxAZwG7jN7Xqwhgyv7iqVAZ",
  "key28": "5cRvAT6gFdj2iLmZDCGxbThkVoC1Pfdb1pgYyYMjRKp7t3kbZyvbQTHgy6vvHpv3TxPKmN6p5rd2n5JzyrJbLCLv",
  "key29": "2vzsBYSXqGgoooKG3mae3mFEAnrhwEni66TgVhktFkrCUCyX5UrnqRSnEuxoggaLCbQNiyMQ9sfQfVUosfk2KpK4",
  "key30": "n2sLfU1r8VjuyXo9n9c8sjsLnw5K2z5cUpBe3e8QkuhXyQz8sz77S262QWavkLwiCkZNhpGLxJEvhw4pZZcaBWX",
  "key31": "7Yw3ZAJEaittB2YVK4RREPc4UWUFCrs3ej842Nv4FvxvAFQb8uwwMTnuTiFkRH292pG49eqxiGT1sCzWr5yDCAi",
  "key32": "4ZxQmu4w1JesujLJpB4wR2DaiwwnForarzAJx2euSDjBJ9rx45NVMN9D61kzeJw7rE3AJEPdwZuw7caSf9wbUBGS",
  "key33": "4VLwb1vj4KGHmgm41gfQ7rsLDH4Y7yt22ULLEiQnTrR6XqPx3t8L8Zzsja7fLhgGyGhDpa6XqHRtyiafAekCbtxh",
  "key34": "7C7HVpft8qjALhMH3SZE4K6YujdAV47dGGxsnmPs3c7zPPDRHrmccQcL6jHbTwkwxzyeRv1U9EmVSN5Hzk89WHZ",
  "key35": "39H3nSswwxEckZunucuJdyYXRUE5DJ8ex5MwEdeamwv9JvZoziBavNNZ6G1bYxvieRR21VkvVBKvSoqvEEsRZvsA",
  "key36": "2ozfxYJGcokoxEE83yW6sjpjdLD6cZA6CsU9eLxScaAim8NGKUty1fdUmEpNkPThEkHwKDBmmgqS6KRFZfdrAqdd",
  "key37": "sukeE3PAJs9qCRXpL77z8XxST4oDtvvvA8P8ziJfRDsZ4umcef37FfNYNoNCtXW99ibPGpemWFqDE5HaHd7A2qu",
  "key38": "4HMG4PXExd3EeLduHex4eXPTfQfM5Gp499765GsJssPjWFa1A2tRfnS2TaqF6xH4UTJ5DP8JpiJG4ti5gCSFFahP",
  "key39": "5bdHCNuwPkvM1xLBVwE1UEidAcSxBycdep19zCtKDktoi3411ZMhtA7a4MgdpQBR9GEd7SmwwZMSQv9Sx88DL51M",
  "key40": "2jJ97AFMXgDQcGUz9ky1w6nL3MWzEASbjKJdvbsczX3r5yqtZX17Y2TSCc1zcwzQfc6QfLGPqzYo9b8cua2uaKKF",
  "key41": "4hKNybnGcYSDsDejZg1SVS5aGx9dcNqw5Uco34o9nhcEG41LP99ALQ8goeZ4t1SK4nrELHsr276AtuoYUNtTG3M6",
  "key42": "2g8X13FsCLgcF5VxQ7hsnmf9BEbfQrXi6MSXktsdBwSV6Ku9KgkNPTPKCkQN1Qhyuw8vSTUQocdXpjxBn9ak9aXa",
  "key43": "4QeXgbGBM4jY4ftxQtKEuELvLAQbKWKsyjA8s2FEwFbT8fmoDVxpS2MgHzkTHKM2PkAtoYPCaUySNpofJ8C2o3wX",
  "key44": "2iMMgn2jeX16XPkD7ameuXCmK85L9wnJrb3fWSBXaFKvperzMeqdoE6spjF3LzdXMELTGZMDbRCLrTTCVPyupg84",
  "key45": "4t7fRDXGMyV1QpEZbLdkoTWzPk37mdHiQfXPBRywa8CKB6CRcKfATHuJtd6QH5CbEtJtC8tkQZZNzFLMjDSrF48W",
  "key46": "2EMy1Vn3uKC8smxS5QLqAPN6mNr2ZKXYaujoLRKJ8PqCNLPTgSuwCh8x5uNoWjfjBDh4ue9FZb2YiVTEbHkBgbfH",
  "key47": "4HAtf8FGPDU9DFh4NSVuzoqJFKj9rCXLcMZeqSUJ8sDivrAoSSSQ2t7mbjo9Q7aWGSdEENMPe9vxBAHfrj5ewS7X"
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

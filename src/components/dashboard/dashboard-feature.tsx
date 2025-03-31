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
    "5he4AXdah6GiS35Y7kXqEP4DhrQwR3xWZTNRYRbLvSyHMfLrWmeKkpHD31WCeR3aivFHrfBAEt4ivQAM8Gz6Jzxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zw9RQhCujMjUjz5QqA1CDYmKtzPGXWPP2qGxiM5pmk5cat16rp8j67V4Qm5D16SwG3JBhBZAjsbsCP8CwyQqFTT",
  "key1": "4jmXa12E5SYw1w9uAc1jE6Aq6VuFyWVFzUyM3xug4YX3SN1MAUvRHkV9kSH6awDpEQqpHga6FCmnmyZB4UoehL4v",
  "key2": "2VEPLqnuo3xgRNPQ5MevSS5fywCiiFwgJn3ERVp5yBxNyfd4ShsrE1Q7a4tKcNFSPYxEKfRwJxQr38wChvdXcT8w",
  "key3": "5H9UdgMaABWAFxpyw1CA4LapyqNW1uuMFcLmDMMY6z6ngGnLbXvxwye59b8Ja3xUYxVqVbrdzsQFjiZku2A2oHiZ",
  "key4": "36a3dSCQMxY9cGfyYSiMEhn9e7bvVsNQZFt5Lhe56xMiaiX1tSdA2FuYPaUBApkjix6UspbWUPRmjbmhFRff7hrT",
  "key5": "HcdvrPo2WHpFFNKLvZjR3WagpmNypuaFxxEaBG8wkNvQ8Lr5yhCuNGFaPD8FBVN1x3yh1cLueU41bfFhjuYnaLz",
  "key6": "xfJveqFGD2k8sdVmxcr9AJjqu9ppLN9PxFq9tWrVdyH4sgm7MtsHsEM2C6Rm9wyZt3uHBGra6ecdSw3cfjSUxpv",
  "key7": "AVZhYEMtzA39dUnpee8jtzDY7Mj1UsVfiyaFgtZyLwGmoxRAcBJ2uXtiRzU6qW3oQs69KsQEvHNb88hY8CrhWVH",
  "key8": "xGRkbM1h39rHgyZg9CTB5k8vZNNQm6vaEBmpQzTabEbNNcCKPbJ46tLw8VRpQJHnksUCvG5JYF9G4apN9kqqiNJ",
  "key9": "2dvFuP5f9wMPSeyzxwbYENmTo7cTDFoSKoDcKRcpVXfSHGWxEcgMrsfXQRTxfv4s528EX9BpyiD9gemJsUuQuZkm",
  "key10": "2Z96u82yRNbTzofEu6QPHVnUbxaFQQSujtiLrPHhJRYKibusLbXRn29neMksNhjw8bv1xfwPYBvf7FwKDiHNs4Xx",
  "key11": "5EEZ2xR4KAM6Lk3kEVJtujy1pVsN5QFttrj1jH2gTxrV27DtVEUwjEodNk8xLsxQSo8aNmSqaszsDFFtUuzoTea8",
  "key12": "2Y5pxTNwe78FKvouGM1MnujKg1wb9g2jdnvDYAEDRakciqCcANx4V5xSiTMwtpdSWi1eGsBVVKjgDT6puyNuge9H",
  "key13": "67JaFYpktn98Q8t9LYJxQWULEvDTDKvqCzPYinMEWoU4mCNLsXckZpqTHNqzrnqA5KCnQUYHzRwZFwQv2nZBFPkY",
  "key14": "4L5Hg6aQiDtnfZBig34jQuVEKB4E9qxEaZp8tvWYA4HBaJZ8jXjG7SvcqEZFKK1LzQ2FVXNLLcQTnD5hqcBJgKQg",
  "key15": "1ynxVbRwZdb7p7tC7FGsKAf7nrpSv2XfCPfw7eUY4Jvzn7pBMJJNtXfyrqVXiaUFuhroGEC9ufLEKojDfomnxk7",
  "key16": "27mu1wBbmtoSewKVJxYrYRL1WiwJ7H8PjP7aZHDhcrwFZTb6AUMACyywqC7USGgsJ68mEDwUwPzMLKcfmUCwbqiF",
  "key17": "5GxCvXWUk25RU8WQPeXU5P4kDGRB9NH571wkJCyQzhFZVD9BepLGdh8LXgRGuFpBqDy9x4y9nfy2KNaniofJ3WuS",
  "key18": "4brRG765S6vV8AU1mXrZMnEaRMVgUK2UNB6TmsFZjJFTdgsy4q8mubAckrPd8PtPparN1CMKH6xPRHj3BQC4JMX3",
  "key19": "3FwTFrDsvaoDUd1Pn9jXehXDwm3aw7CCHdJkLAd32i3oxXBA3hWoUVtaS5m9XRG4GvBe1Xvj5b81hEqxQAWavAWU",
  "key20": "46uWyLbdqg5yz4fL46Xx6iW6krqzaookM5Ffpvbrb8jV27CNQNkZz6AenSSUrsR4Ssnbc5B8fdwvP8WLmM4UYgqm",
  "key21": "5hvUC1ZQe4Zr2sH9bNG18MH3AjfXEJWrUdaY5kChd9HvLDoLTUnZLLF2gZdFDQ3mpRK5pSXsHoK6fVppycFp5nrq",
  "key22": "2whNDZQJeKbNUcCKrn8hXcRtB477oqGr7Q7hw5xnCQ9isLLw1j6UATxveinREr4NeJDzUh7xikP98Xy1DJcbwjUT",
  "key23": "T1gyxU62n9nuy9Txjwk1cGxRntWa5QgTB42N73c8LG2Afe6RwoKc3NSouRS1Wb3FpDzQPrm76E4JJsYiYYwujEz",
  "key24": "3T5atLPFhZYuz8fK3VNGGHqfvYqLw42ktWKo4rdtBJwXEraV2jQ13uFagSFS7VDUTyVUsyomLoj322qwHsegxCq1",
  "key25": "TnHyhNDiZRUvUo3TAK2tXBj4qzk578QvMQDs4L93VKf9hnUKcgQK4eB1gRdM2nM3be2kryjeJi8fTKetjstDacu",
  "key26": "29CZEDRRCqcpDJvxWLMddLg8HcBKhqNJhLb6mZLZtCZbYiaSr4dy8A4ypj93i7EGQXJZzDbJLAUHSzVzGKk5RPDi",
  "key27": "ahQfF4tiFMbemBUgoEaisbe5m8RMpdoLFZEXWgPwX7BT2iPBjY1hedJbHFXqhwP16PGffoBdoBq4YR1UpKU2Gjt",
  "key28": "5H6ovFVPyQz8AeaN8Fnug38kTMwE21wbfbWjS2sy2KZRXT6KgPt7itXdqsXAvTJmMQ9MH1FtWMB8xTuvhfFEnXav",
  "key29": "xdA4uZrQVouXesXiEKFrtBMUTfxNm1uHyNBr3JkhoAuL4NEJgsa7jn4xEh4U5TDxgW8QQ7izptdVv3eqbv86aMn",
  "key30": "3y8WaBBNDfCRg4YSDRvHuE1GN7EeKviFqupWLgr8gxwxqmh6AdcymJt5z7EmFGUmWFq7BmE3EPfqFAxV7VgUqe1Q",
  "key31": "5NtJX4Pw8FxZW7KDxCd67Zy82esFvDUFFc7dcaGDFiFsaX42pjeo1HKawKtu4cj81ZnaAkYRdAVwBG2KgKizPA5d",
  "key32": "4d77a3uVxutJVSw72ZDgDkBxk7DJCAohyT4QPYsF1Ep1EZHuej532QwJEcbgZHFsMaTaoju6WkGsHap2jYDTPy1o",
  "key33": "4eyJKb2hRVgjS7MP8iYAGbfoiAUAkhHWQ4CgjT2fRCV9X7iQveBD7c62HpyREwYTjza9ugvNLyLKPkref2RBaihe",
  "key34": "2f9bf3qjPnYNkCxQxGEHQ3bst9AyMhYeuZESJBPUgHWqY6C8cqsHUsDh3YP3rosfTNZ4BUw1CecnGyJpLVomDwn5",
  "key35": "41h5TdA16brdqdgFHaGRnvfokPzfqbPysoh4X8jWQP8pRe9R5fRqH48ZJroM2D5Dk89FtqWuSdVg3nuL2yfW2S7E",
  "key36": "31V6fhrs42H4rTZvXiUhPfpaGWQSNA1GuC2So3u5rjQTZbXbCFXxcUF13XbUDmtvsDrMJFuzABBqzRoWhJjGjPj8",
  "key37": "4boF9hapJhtNhzvr53GdwWnKAtgWNzQTPvHEzr3mgBKZjzduaY4Hn9hrjTX5DC9FWoASfszm1zEwiCLqHMWr3Uhg",
  "key38": "5uRY2vf3ZuUZKYNSrtaLcojdGCkYjBDmrshUZthfaGcePZyLvUwPv9UWg87itrreqBgJSVArtLmxXaLELNW1cc57",
  "key39": "81yMnC6jAmtneroS1Wo3Y2juHJv9a6iJCW4ohGaCByNHmPK2iLQE1HgGrq2fbVNGAY7jE9JmRo1k3xYFD8zasi2",
  "key40": "5V4LeLYQstuAbzxCa3SUxZx3bVokpZvDK52275YA5tndhuHi8WAGnLKYgxKSQ7PrBHUU65NAjo7vqQvHfeVgHk76",
  "key41": "5KJjxBf2Dg3ynMe3c5MjvdjsB3ouDAtgiYnc26AgZwDZirrnEhzYusCrosvtC1b37eRAWT9o9RunMFuc7792NgQu",
  "key42": "fPBHJMYFmqf26doTUo4EWigxnLf99CgTn8crd6z6PPdTFfagxLVT2tyAF29MDB5fUZJb3BR8YFsP2Qz8o8vk3A9",
  "key43": "zsuphb2Nek8vdy4pzfgc7A3rG8gGY3FMDh4nNhsUmox7dnkLLtiN2P1fZnXP6rYxzDrxbaDehLzZWdJcU4zC6Pe",
  "key44": "4XnPtRgzawwsjJ7nXEkEittwwf4sGAHMCjwToYfUu4JSFbz2Z8X5DgQxci7iNB2PXUWmeKDicYEGe7TSWSi65HCK",
  "key45": "2pg3qSckgZkodftaRxRvuvwaBJgznpU8FJfMR7vv3r9kveJVpyJYymbHVJXtE8WJLW5zdWDjUBj7B6bdeAFitP39",
  "key46": "zJ54yRAXPJzoN98LsxE3svd7QAzNGFkdsjJGGuvFbyDBvCS7B4FiCFLs5JTZMEsCafYiZH9pRyWpJTedyihxhdq",
  "key47": "26oqbwB5Ea91ywgrmYDiKBeP4ZuYuG7bSN7vSKny4tiqzuKwFq9PP2s4HkXN8frTAcLHPWhEKqyrACL98dkvNXdx",
  "key48": "5r3q1BMroi68U9DFxuZ7pbJeT38mxkUqEyi9HNd8qfDZrqGxhhh2EQqstqzvHnDYmvU82QxyTqq3qsv8jy7VwvVU"
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

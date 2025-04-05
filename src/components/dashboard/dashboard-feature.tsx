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
    "5nyyJWSHFAGtjCK8YGR9VCtdHVnSnKqPUDmnCMuJb7YAcEAkU1ykXdHQSb6sPZFGxnkZhsBkQABXPkYuLVjdsRVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEWsmPjFr4iXuP1kbbFHwwMHfZR2DViHrZuHZCFiBb4sPfk2MDDxVZfLRbr8P3VDtWG2opX45PEhwkSeEp4ixMg",
  "key1": "3JjY71TUJTK2xyQ2XwAogFgWV3qqs281HtWa1bEkCb2cVon7c4KhhXFPW8HGtFVCDy2f9X5af596kZnBGu1Rf124",
  "key2": "5KKG39KvuLpCLAAbjtHA9VKxrbVNq1S5zm5a6SwFbrDtQn32YeyVC4CUdfoRRnpxajNUmwetSEVFxcZdT7sByypa",
  "key3": "5qB99Wo4QFuAoPcJXDqjVYyxaZaY2Y9M4R2En1A25oviNygQeWj64pqaygWn8UPGmVnXKc9XTykvQkZJcEjJvUwj",
  "key4": "4YavJB6pj9hUtyiNZyHoXWyb9nhRocaHgu7dobBoRp5UEFGRzXcifs1RAtxEg2vwicA4U8csBL8oitRubFZnRmYz",
  "key5": "2Wd5aM2Mt21ykBUnEU7rxRaesx4dkt3TE2ePAc78ZUNAFoSHNqAv4tk2fGAMhZxxHAyz332rTuBq74UMPshGvM1g",
  "key6": "8Mnasvf8C2TptsE1b3wDtzma9YWEtNyzgFtpzjB3Ur7BvULZYFrFQWh2ubsLsiSB4W6QrqnNrYbJycFSucXQ8oK",
  "key7": "2ZXcNZVtFHwS22kVL9AndaTdUhpH7EQPDxsHbsdDHXdnBMz6dVaJakFDVDW2wZSMmpfMu4Yv2siD7pPPdr5vKExq",
  "key8": "2w5KDnEVaRuhzwGgvpCakAu6UGu953PAfDrFKUyxyGKn2mgVKzmKSixy8Q7B7K6bvKXbiAn2UuS2ZnSuBskFB3n9",
  "key9": "5b59FtKrsRiMnqBVEpkc5sq4U36Sz27HQmhNNosVn5bQ17bsRWoDcY6NyGZHviHY8L6WDZUXiyCr8JswA3DsAVMP",
  "key10": "56tFNwyoqwd7PNwZxtqy14xqB6dErhSMbtBE21k81pnjodoHGUzwQxwABaussWkkjjQ5TXYamYATGPruwGkNrFBu",
  "key11": "3FryYeaxpXmrtmBVEnRUfzCuJYJZZkgMN8kY5aHYS8fK6jU5gwjTLBmsaBzs7gyZcgjSYNLC3PXHjn82chGxy7Lf",
  "key12": "3sYxhN9WtTCfoMpSQMBSjMRnk5prDDocRHBmh1GEAy4GWqfGgzNURx7T8d7Lk2kYgAFxh44PNLuwoabxyYt1u7Hq",
  "key13": "4bAGbAoes3tL1RHgJEJugF3ynE39RxR2c3r9FsqrmQDjSpfQytAXTNHFoDiWcWsGzj2yuEzMECCj6MFmPnrBQoG6",
  "key14": "3TKFMnstG5vXMDYptP3ZoURntdRNY4raHQo4kxiwmm7p8QfZgeUEcoqWNMAnRqM5a4UDGoWHZHSG4mTmut3dW6k4",
  "key15": "3FfG7hF3LKyEwNxzHf659Fv3rxanA8BsLAgF5TwdREbvRMKs5My1xbvZqj3P4bnxxC5yrzJ1ULv7S35DU8V1ArbA",
  "key16": "5rRiQm98Ej8j5864L7nro8R9uKjNvEmJuyyoXqdGEpn5a7AKBbZDKrTKYEGiSfyQc8Djy8wir4G3zcYZMHsCKyxN",
  "key17": "9iR9LRHTSoUrjPQDgLNEEh63r9CQdeqEr1RYLaBfLg9BErSvXm1GgCWJs7LhgP9XpLHU2BEQ5exzn97QPCBbaLR",
  "key18": "5RtNNuFrEJHk251kzhZGR4x5d7qPvHzXryWV2NCppi4So25i9XubNJXtEHzXuK6YBCy9VmrEEtJe6b2rectq9WwW",
  "key19": "63TKCYHLKYEb58XzCbA7KzUgJiTrDYzoFjsz2Cqq5nxdUjqxYK82Zh6kFkeBtCu33BWBRTuDWnN46mqCTJffJhnn",
  "key20": "5RY9AHWnVMKkCAwazxifjV3RqDUbvtpuue5soude5q7icFp8BFkLQ3XPuNABw2pwRnr1jm8uQg9Cy73WD2sV4JQj",
  "key21": "62kRRSSedBGCmJU7YyrVz3jBAwuZQAnZ4j6ti7JJqZijB9yaGT4ELBhD5k1Kd8WNiaHppNoaw4v8VPtzJ2aKZkhP",
  "key22": "39tWNAMgSUmLvLZEmbuhdMoMCXUKTrnjgoWyNCKysxHvZBw5x2ECfMG8VmSaMbtortcD2b7um5bQJUxHVepVRVmk",
  "key23": "3krEQptZHb8QwnN4mtQsWXTm87WowPakBLse8HKNQaJagP5UgLh57ohAipPGGBRe8XFddvGntCEQ5LxVvx1fPLss",
  "key24": "4vSN7snv64HVGwHxrq3xtP4ZrNYqkNarP3gMstegUwq5ck5RNK167GQJz5KifCHipcT1EP5QMpK1xo6jUNZJxf9p",
  "key25": "2tTfnKd7RSccC2aTjdu82kCDrHWsvqcLDyEFrqnzPgF3F5R4vKhkhC5cY7fnroqdaxxruENCqBAoX4aGK6C2uCMj",
  "key26": "54RJVdz2XwCDBYfoimAQBAA31QvMnX5VZVwpZRjpNsrPtkx21w1ZC6gj7CiEz4vYcLpUYLVt5CvdQfGbQ2VNgXCS"
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

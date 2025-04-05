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
    "3cYLC5E2xCzKy2FEjGZakWtUeme1EpaJB5TxeCNimFgQ6cP2KNKrLo5YPKRiaVj8B944x1uFHjvkDioK3rFBjdJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27CntDPhkAF9WZG159FZjiLSxK3xNCosYRcxyrQaP6p2M6764byaTBLEQDspE8pAM4xRPG6U7FvKKB1ovFmbw22B",
  "key1": "2tpAHto3YwQ5FDX2nFDj7YMKhoemANFTAe6q5MoNCrCPdxnV9dSAL4mBvUTwwPTJ7v9BD2RLdqxC2w1NHCSANCT8",
  "key2": "4yQik35YXpft2xJkfaS2snxDmAPTZvdCkJwZw1yKiUY57TJ6sw9nCDGMkrz3Ps6Xc1ByHAGeZDca6LmrhUxJn6Zp",
  "key3": "3xoUJFcMg4esdbY7uLXZJJqiXnDv5bsc5f5YaCkqztHrUpc5b5aLU4htbxEAHTTfwnS7YchYQAZhBdfMuzHVp8eQ",
  "key4": "5KDQQ1aDPxRx63Kh4nJZqN5jRHHZF26rDUU6VmAbv6ZcQgWXFBSQNLKEJ4CwZtvtjbNtQ1AVADRRcJJqPTXCoFTr",
  "key5": "4uGFJPzcN9d9phq7iorAporwnbDfGPpT2UJMF8kLcEKxTkfxSt2T3zsQuf6sxVpkvh3XVKK57Kuyi72VFLNRNuHn",
  "key6": "mfW1LKtfZYJAKeAAwkTnDgKyjf2L7LgDtKPjdH1EKdgmLR3vVLV4mBhnNgMJu6dkZ2RgG9yNHH3fa687J5MkEVv",
  "key7": "2KmPr2gzTYWg9MG5HVcGyy4RPRGjvevneXjCD5mPZQqxvZG4EdDQCCxpgi26ZRekNuRhKrguhpcakziuwfLEkzoT",
  "key8": "4jK4hUGxBNR1UiEmiSczerJuTUhFLSp7NQRyvT3Pbsb7dBfXyPkV92keiSFpW1JCxDM4XyHxZ1tdUDdbdkVpCb5E",
  "key9": "4EEPuVVn4XaAxsX8VzXMb8GLbjhTJXxr33jFXSo5RVAJM4JfRPbyN7eqTs5AqFQfGgCQmZErbY6CYZGWsiWhzWoM",
  "key10": "52PvkxXpaU7ukq29NhkWv2nW5aJGFJ7bKDRNzLJGEEfe7NopSjmpVdTGCFxiFy9rj4Qr3rrsHT94gbSL4u6rVvEF",
  "key11": "5qwqcx5dyySrzQWXpZnWXyNPqTzskJxogxW5oP3NemPv9LLD9Rm82QRUDm6Dwc3ssREE9xWY43kk9S2AHWvWFy4D",
  "key12": "44g9S5qYq5u5H1GJPAmuwtLN3S4XuHBcZjXjzCqDdvwFwbLsZStBiKSc4CJRVqyFsdmuhdLS4HXq4Z2zuRsRZw9T",
  "key13": "22hAYhuLYdVQYUZ5ogErF3CvYXUoezXn9np7oLMaNRwKsHsXkeQiQGZ6gkzNQ3LRUG5XrXxxtSwgqXTGq84U2eeU",
  "key14": "3qSqoErnjDqybb2QBkeeuTNMDqmsLfRmtkHc6343g3afTyeJa9aiPLTJVoZyxmuHu6oGMcpxYJSrbo15eHwu8v15",
  "key15": "25MSCfjocmcKUrtcDaUBRGDHvYNYAGR1jJz3V6chGxBKN9BBj9zcwqDmg7nX5vfkhgWPNec1QpWswe9oyEVrd2be",
  "key16": "49BuvRoNLSsS8vYkcTPNX8RSNYrSfMJbUEAK8VkPuoW47yYNawYWzaXiEoJp2m6tQQmD6HqiA9HHk8TcN1n8jh6z",
  "key17": "b8VXwC8d8MN86xb2eHAZMtsV9iyWTJm8vHX2co7jcy1NwoKmV1t47KTcm5MbmYFZ1EKnAXVnUHLHooYNgdXaKWB",
  "key18": "5swtZPfQfYNCCxGCav3AQYkFM36SiLkMGcHEQiPWzo6TaaSLoa9p9wHhbuefrFrELHbiqufRXDGc2j4Q25isGnoV",
  "key19": "4YqLxA6QW4gUJHKuxMBaPQZNUk1zX4rXjFoft4rd6bpV7VSG3axcZj3x8RtxUAMD7uHWA2L424Mo2UPL3M7R5iN8",
  "key20": "2EK3jzaGJ5kqHfsFZPRR1YRzBJfCvtQedEWcEJkC9d5HYEp9sX8yAkNsvAPqENQJ3GCVWrmdTNZiRe9bh66FmCCr",
  "key21": "3KxXE4EDv1NJsh6EGQNADTygvEBcavXd1MDaW69RnbfdZFQiBYppMMMqqPnNhMgvwUd5HD8DdYJiAd5gAR7iewLh",
  "key22": "5ELzyKBQw6mAPSV4Um5BALbdweZobZTzmWAqGQErYZy86KTCzK1VqHJRrC4MuTaGt1suyhDSnaUUDbdDbwfqTrzK",
  "key23": "4A7wVYkvEwqUuXvFvA73McpcFZojknEw4tgzCLQ9Y25ikKgZHwJJZeGyP8CetMWovbVLR4WKyTf1eppDgipXuZDo",
  "key24": "3Z4oLYvdo2NP6c2RRQRn3Jtok2gGT2toSwykQTfCLcVEDQWR6toXXxSuWVkQi1M8v8YVVMmMneH1HWmCNTLkWSbB"
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

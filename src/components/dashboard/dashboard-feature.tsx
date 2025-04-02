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
    "3jrXAsATpNXKd54ahGuWxsNJccgGa8wX9Lm8tFUiLoRLL2MVBTj2V5TRTCn5euUPth8tfAQQVi73ea3BdypeaY4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBb87jmjAWKumx2sFR9i15KDDCbFbgZ7BH6QftE3mLfFJkhiA9xvpmJADY2fPaFsNrsmr5nwyE5VQbWqFKg8Zri",
  "key1": "qgqq4jo5C3b6zCUb9ynX87hsmHgR5TqijHqSH1Q53YHfiQ5EHusiAgxDgHCcpYTRMFJLaBb32QHxaGk8uBEsRQG",
  "key2": "9q2DxbFAh79FanTQ2nVxCMsvBrvgN2SWVEazZ76iWc1VVUL9AcfDtC7Hn3oyeJMgug7aog3NK3f15kdmrtmPuXY",
  "key3": "2rb792ySiXom4KKwnFHXcq29pduEAd7aSuZZgZX4dQ5nhLqRnCSPnFqSyNrMb6thoAGP2zh1xKgNq4UywWzqASJQ",
  "key4": "41pDXbroFbWTUqqBgsetS7fmuPeCKrLrfsGf6egMFaKitzFcdudpE7QYHXLEhrkHMyqE3TUCQ3hPELj1hH9awAem",
  "key5": "4EoviBnnYGoATtnsN9iwQuxwX7X3ba6dKLw1TzycxLpUSjmrK4ocupAKx5njGvJ8iCUbFwLa1Tewi6xi7VkTdSHn",
  "key6": "3Lsk1Ar7ou1CVZD9faQtq56RzUQJVSyyoFsCk5QBT7KhsqUC52XrEiHvFsJUeonwCphPbzo7LRkkUsVAVv2EsHkn",
  "key7": "4JaDwmxNJ59ZvvVd6d6wZkHFFuToa797FniDZNr7hBTDBiuFtCRe1MBa64d61Ao74kXwA3vBh3YZVNipJ7JqLh2E",
  "key8": "3oPFLyC2iHsAmFgC9BXDSQNmk2K7smtZhKo4upfga6yYuQ5Wk7X8zAeapgYFnFBaozf3uazsSE8f3oqTtMB3mbkG",
  "key9": "2P1hRDaME9w1rU7LX3Rz5S3sScEbTPDU6mqYZmbJT6tuRXLDjsgX9ZSag7SFu5kXb5tqg3hM9VmjdR4tjrer5a4t",
  "key10": "QKRVZnmfuNhyvXvp5eGyYfrwbVSPKA41gsp4K6mptxcxv59RVEs1V4vESzrZhyy7F8gNYVqqyH4RUqfS5Xg1D1F",
  "key11": "25bujHZoU5bGd5A8HKY45MGRNqXJmqiKWE2RNJoHnKrvRihkDuG6SimCF8kham1x3KPQV8eb7hoy81CPrRD8ckDu",
  "key12": "2erasEZGi1PAVjnUrMhaRnu8KKyHWtrXCSJbjaZtYDD7oF2zHfry7Va7iFU59VGcfNbNS9UiDbekpknEPcb3Egw7",
  "key13": "66XRB69kyttniCdmFBH1cr8J1ykDL5jdfvnXYv6wK1nLw7uaFXqPHptaaByyyBi7eTo9NCh1sh6g41pPP2J3MHke",
  "key14": "p6uAFf7YReHJ8tuVTeiv1kLZe98UTAbb7SPJ62Hh9BkvzTrzyVfCcmAXwsgRCseJtDN66MZBRvPCB2FrvRkqdHw",
  "key15": "5E7K6ypg1TDBU6RHKNWA6eMVaSKDgYwpo9UuvFeWwavM5FZoyUFPzassBWCLk25yjh5d6yBRvDD8daQEdDMJUkSN",
  "key16": "2UD5Df1Tn9zdyZkRX3FC6WMrvHiaDwoNgSKmziW8LomjYcAxpJ5GxjaZdv68hfivvkZs1hvDTFRZ9GxwbDSPEVni",
  "key17": "8rXYcXzDBK7HdqHkG8ZeJDS2AT4FAiZUvboQFQQJA7do1ep2j5ChGtYVPy4G9kK6C2B63giyeSefwRxLcJSU3oE",
  "key18": "5hfWnfwu3zuN8mZYBbw5aYrA1TFhUdMkijTGxNreFp9pwG2UP9VzJYBx75qdWburMAWo89oumibjeaeqdWhc8S8g",
  "key19": "4trXm2v4ANfehjngpwAem9TfVob1DmXYmbpaMAmqZuErgCM9sXr4bGUwRgaeqVp17ehpAV4pA9j7fiPkB2gGRh5A",
  "key20": "5T2s9o5MEekr1HNKtPfykm75Cj83BHJk1hebvbv2PiHayGiC5GH9D21XZ4VteqERh7iqHtpLw4SsSceLAqwPTcuz",
  "key21": "V6B47NVMEm6dExHMx9ZaBLVxLFMgcUrvHLMJVwapTsKYJUgBnAwHUAMKu9NZrMeDwcszzwqTBrLyRzLaTxNmH9J",
  "key22": "3SfXvPfWenkieKkLav3cX7T7MSyPniLubm1tMA8keRpsAZ6ondfJXEo3hcAnSVfcAa2jEpHbLY7XBMKnNrruvuxn",
  "key23": "P29L3aisbd4ZAPcqcDX39pp4mGh77shbRdFYjjaCogDMDgvq1oraXfQDfEXMNFWyn7PD9AUWPAaH7vpV8j7ksMA",
  "key24": "2cjg6HSVcgzkfx4xsJKySkpJeZcEp8NngjUQ1326yUvqSCBd8ApZQwHDMxTsjUULihFGsEH8o5JGitUzKLhFGmh",
  "key25": "3bAU8gP3TLZBdxUygNSxDDB8BHnFBURGh4AgWixbsdjEwwvfmivRjH6moTWM1KCPgAbptfUkCE9TEiAumrF8K65p",
  "key26": "58bW62mTnR1GKySQuBzsYq482JDWT8bZyoFq8RwUEfbf3CaezMJ74FpW22bagLYajkoapENWZ8wok2uBFH9HAqzU",
  "key27": "4rBe4zmpnF9BACAqMmZvaCewSHRVxBrsUiCrFHNfXGDcCZxvapiUukJueqB6QFuMQLuJ1GBDKtAqjFeRW2FXziTD",
  "key28": "5vLKPytSk2C8DbfwYJiyhnnVKrXgjnfJn61zHxVwSB3avffX7wwvLxpVdjbfUR4NqspmfKczFRMgBnEnu6Yiz2tv",
  "key29": "cmeTy6kire1bVx6BckzWAoMLjeLJcnJBBva9Dkf3oFodt5zeZTTtjedvDP7Es3BL82XVTB86EAYYfcQsU68CD69"
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

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
    "37cqs3EJGy5dDvHqMUGP3op2vrrqKbHzL2FmFoR8g3pjv5hcE6QwK16BzWg9YQ31sa5yH62tknwo5X9EGQx27cgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qoFKcG2vSJPRzAGhGpTdY8ZJGsa6Dh4uETirvgnMUZZKd8HT1WWpxvz27r9FngFSDmwHVVU9YG7XUyTGfwP2qq",
  "key1": "22VLeQiH2fSGJn95y9HhLTzzGiNsBrDbn5KBLBW4iqm9nM9ipytYxp1TVWX3Wv1dQTzRR5dKGjA75cW6zDJB7oy4",
  "key2": "4EU2ME1mSzfawruWyD649DCqB3FF9YMBfvNGx2PD3W3CdkAdeAzAYQrczX9oPH77x7fuoWpThkJ9vvtwpvpeKvWa",
  "key3": "5fX2dTRoYDts592gY4Re8bqFAjQsseRTmAVvwXEUVGX98irwxfRxnwVMtcVtCDDameuWRpKmbnd5QtZw3srwd18",
  "key4": "41CDEiz16jFTBgfPcqMYdFUcs8jAxRbevXT5BBcjZSisjsAy9bNCKsmxGRyH1SEFA3Qiiw3fbKHZ5jzhZXAEEHSk",
  "key5": "624thzg1PwSi8hgvk3Rr6NpMoHgsa911ahL3GCE73iMHhtk6SfFR5epf9QJ62h9N9rhHbhooSfDgdmopmVLKpgrF",
  "key6": "3WzLiqhzd3sFm4XwSXgFHdsj3RJy4xYtTDW9vgNEWJ1u5nyK4cBHagj7DGuGDnmryPPbn8PTFe5FSTo5XsMNNS35",
  "key7": "Amg4FW41HN3HUwhWcfqTtVVDY6A3YnKgc2thPeMEp81qczYY2gj6v7TgyMPUvTRvmwy2myiJHAgxxV6UfonpqUc",
  "key8": "ZE3fE5H3xZ119ZrBBX4hc5b8fyRpG9aEW6oYJdQkYZagbFvFqNWX45w8wCyfL1V6jxSYeKX5K4PwMFm22vtWyRV",
  "key9": "oRV8ETAAB6uW24Tgh7cZ61yo1BTgZZMBpnoSyjMA5grTDbH26breBAQa8K2YWG37E9uGmP9gsnwqhHqySJKsosm",
  "key10": "67XcLosjQdaLRqwGYzyjjLAQ3gddpvN1amX24U2wBhPLdRznnKJp2jCnfXq67ek8PWcukitHes3xxRdzyCmAqngb",
  "key11": "SJDsH5nRQJonccabhnDe5xoLkT1A6Q4SMFX7t3aQzyvTfH5BNtr8YMMLu8KtiWS5unP5DZEFucrEUz3mYkExcZn",
  "key12": "3YvUgBZXJvCoeWkfaCSEGcrQYboumLtiJ3VUn7tbQTG2AG85bFrBgjNNr2GMPw2b674e5sMNWtd6rbnikBLmp8ih",
  "key13": "5dpaRUVh99b7ounE8SteSEUkKtXCBzwdpPqzsEVcrLVnAd7LuydCvbone2WPfMKNat3JCXbtLDirf5KkR1EKcfCz",
  "key14": "565HYX9Bn3bXY4baw5BZPLy8gfz97cZrN1A2PvqFdacKVmcUnuYcjZr8RVwoMaPQ1HW7PJ4ZGbyNVm8CsEgzU7Zv",
  "key15": "3KKxpAJKFDY2wXKAEfAcUMS3mY3kuLQjQ6uA1qPVCszvskT3iJazohCJL8pJxFK9wHv88WNUdEvfL3zt9CBaiHcv",
  "key16": "5i8B8Lg9vd8gHbCVj8YQSYTrbxLnGEBs8EpEUwqyWX7ajvB6Gjc3byhvMywKPWrQB6GkNn4tJyPPSmUYeaoRRgaR",
  "key17": "EendqQReeAeD3ThwN2jUxArSHfBjM3UozJtmJZwBsRmPkKhrLGisobSGadi4FNzRqHk8DubFWtGxNkqXzZD8oTJ",
  "key18": "4RKzHE76JsYkmpYei1v6uxqKsnEujNMe6KLH3teWezJtoPxcvCGRzCdkvgqJ3t4iMywHhq6TTyqczZ9wMtbcBnEk",
  "key19": "4EvdVksk9NdZHkuan5ShN31XGmYUU8ABGX8QT5V3G84m4FA2NvoWjw2hJWvv5eLDRJWRDVo3sS1n2LHXQndf18Zr",
  "key20": "h8jSgvGptGGrWAKqdJ1RJYVAyjdPQZSCxKertTKpyuSp7K9oDTSpzvVrfpnqBTpHXTfu8fszdEC2e9485KZmwQB",
  "key21": "4gzXu6eewPYPZVT3LzJFW5GUkvEgTcdS8wQw5xVRNRVFqF6HTf7BxRXrNRtJ6ZLWGsR2Ax8dstq8sKbCbmtErZG9",
  "key22": "q7oAecBHgjpc5Nn7brRxYuACwA8WeC3BBss74zDwhXpi8rr5r1CB1sTTf5QBf1prdkMbtwAP9gPDX8k6ksw7wwJ",
  "key23": "4pnsofSSUogwThmZM4T1wbNL5TdQQaRzsjyeWKqB47GZnF7JsHRbR8JXJdptrCK7ZXvYLqkGW5xwyvuNoo7XsGig",
  "key24": "KxLkAkpPNCgM2vJwaeksR5RBn11Kdmq4VdMxwDLu7D3FG5xF8aoBkLoNomEkuviZMvM677cBuAqtVAUr4gwQYFH",
  "key25": "4E4hLBN2Qy5UozRqvfJTnPyY9dBZuGYd4tihKUwZjHKMGkpVRFAo6XZcrz1fQ5sknoqp7EM3j42NRC2qCiCm1ViJ"
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

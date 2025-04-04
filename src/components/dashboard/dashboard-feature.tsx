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
    "5szQxVtKVjD4VbFb2kkqJKBcaX6ZJYVPaShJiCXjQG8CFxNL3o9jSmERuRNYimXyAcJNtUg8BmUekKWzihvsxVsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgAedhNg8xh38ETvwXnFgti7qBUz7fzGvi3B22StbtXm4jxTB8SpGseKHo5JDn6jJnpLkHkGQrnCryGNn7BRQiR",
  "key1": "34mqnmwUwi7eNEVGTNSo5Vt7DsgJnMdcqvLisNgDgzwg3KjRYsSnbKhhpRCwtnBsm97AGQBjCNuFBg5eMmqhiwvQ",
  "key2": "2xCysibH7keVxb75hcF9mvmWS8C7RjnBXAHFPxi2e6T2qr6YZaCTQiutPZJScS4iSncykX9qnoTr3VEqt1UVQncX",
  "key3": "4kSoQgsMjAxWBUehrSSZH4GkZrmXZaRz6A9xZnLKFEj2hUrqjym8mEi3hPEfEz3ciaZfJVfjbNjT5wy4o1CQ6Kah",
  "key4": "2gPhMEC5isJYv99ECZKesYEbVXLGU4uKSgEnVZit16E88biE6D8uHZmSUoYsADGi577CsNem5SUUFZNS93M6rVBT",
  "key5": "Wc6rzNH7H5XsyeNm83ZdvXz4D1nXS8x7SXMo5quGw4LN1YTnfBk2UMPKQGytwmpAQz9wJ7mN9LkgaStFfqK7wnJ",
  "key6": "8U3VTGkLG8dYtGmTthxCsFEPjNBpV3xp98XxGmush7vqJvRSwWyP9RUTj1CZq2pAZzMSXBeRYQTpmBUBKBV4LxU",
  "key7": "3gdRL1rzd8cE35z2d7ieHd6HCgC36fKpNTsMkXMPfJ5PcHE7tDC8esyp3xxzzUxYjbvZUCPKHKre1vHg5D88zdQ4",
  "key8": "4MvybRg7KDypHXzU7iT4koUWY3KPq8BUzyur6KEQMLTQUYsxyFHvkCAjor9oEQ2hi8XyKZyqWBRk8JRLyRcG5E7g",
  "key9": "5ajAHhFYCDpbBbqfTPCQD371kTwegwPc4it8qM5LJNa9B5ghcSYeJQYHyf1Ktqzh2z6RpTWN4Jw4tJ6gxRxdAWLq",
  "key10": "4gMyXXhwwmfCuaQeuKYA4i7fdd1uLg8ojKejVxGYX9vPuRaARQaqCYYw1EVhC31deUUhNrBj5GcMdhBe7opNgYfc",
  "key11": "4V8brPSB2Zyg2jEZQR1nuEe11bNQRdAW55Mh53rmgPGKDCtvaUQNUuD7WotPoEL7Z5wCvFupRhvW2TZe1Va5qiut",
  "key12": "4CUVKtjzRNAAGjmzBmKGK7uNi9XjpcJmqvpPT3MRLc5oC3AjYoiNbX214Yckg3tuEyeJADV3rBUA3AEjsguGdYLc",
  "key13": "2NUeEgMgjjZV6m1PqyopZ23VXic2vw8or25cpaqLWB5sWjWH5d9CHoV39CBLrEurGotnVRdnYU8PhyaWhKqXNy76",
  "key14": "2MxvyKqXVkVCBWdoJjQfuCtY6fthyVuouVQe6EUfbszx4omWhJ7EUXuk9vQZp6NGmTwVKdhZq6SAZ5nmtqrGGJVF",
  "key15": "3QnWbESpcXXpMLg58FKmrzxbRbP8keSUwfzuJnLPhy1QhUbk7aeBi2tNf9FhBULMNgXQtdejdU598Nfn9qxEvcCd",
  "key16": "2ptw2YdKMYTp3wDhYtLZ2He9EDGUct3kc7LRFRY7zcEube9LvVP8BrYSc35meR3dJxyHoM2fFyLzPioLX4vsKNTX",
  "key17": "5dG2qeGZb7H6Kk4GpCWcuwRQMnYGsqQHBWoUUMkoeiJm3NBB8rNfi7sBZ1hFKu9pDtNEhtCbhuYbP99cH9KfUy2N",
  "key18": "ccJexzrgtrMkqiUgyyYXsUeZNHqUKjUk1ZSbuxuqNoXBD7ap8bNeTHoNtZ91Liu73iMqZ2egeFErSYNpeHsaQvh",
  "key19": "3ZgyhMoAcDj14PypWcEtMk4koJHRBUvhm9ffTTuCRGiHQDBW8qAAnQWphef99eX1ALkicEQRS66VrGYVjdXvvpxE",
  "key20": "2G4raTiyVUoXAwoEB9Q8dxrxx9HmVx2QoqZDSKBo7qDw4WBwHofaQpDkXX6W98z8SdfXJAj3UXnELnKLJZ5pbJXf",
  "key21": "2t53DzbBEMMrhD8qr1x4SAjYuiRwKkdhjbtirsTgcwESunmFAv7u1erieRVpCXCkhGT4eRfSHNZuebmmj5wrZSDE",
  "key22": "4V52JU3QFxBEdXMhHDiK1kYXSrdDbqwPqV3mQoFA4MznVa2feQAwrWybpZiArMs56wSDJgQDEw1P81gHQunwJ2Gh",
  "key23": "4AzLKiyrRmDvPaY45VjpCdeV5tiPdZJ44qX2oFPUeL2k1qZwDijASkhGquWVphDfDpovcnsTTTdHnAKibPf9EnJH",
  "key24": "4es8ozUwi9bz2CG2TrpSr3SzdK6SQAAH2qxzaYcp7rGMr9sPDepjWrtXHcRmzQmQM3UZGE1bwhEdc72TxasW57YR",
  "key25": "3JaVuZ6E8Q4E5LxszBszZaxsmqvXmMEAw4nqeqDL29y2bpgJrx7Mx1wfmM5XzDobP7KGAMhtGXGvW8mViaa5dt7J",
  "key26": "2MtoSJ3vazJmdHjiTUcMp38VhrsMdXprycw8zqqi2cxcT2GjDXTxaWmMhv2nPPSbDVXiBqVWheos9MG3jsRhbsjD",
  "key27": "2DfZA7DN5NnbaYt9Yj7tCk7U8whFR57cF4xiioss8pmw1VmUzZ35uoURqJoM1TvFbCYJeALVFuiEaD6rkE6a3cyu",
  "key28": "2QEbdkhbV5Z5Ucaw8L8XCzSGKLeKZCCNV3kDLDxz1bTAY4uYFAEWWHooFYReZubrtUMfFk8KhbhfZ8PrJDm7scEK",
  "key29": "547HMGiPqb7Ncd5AMhoywVy3Y5S1K8PZk1nwmKgfz3CGewiyh8xT4nif7ghoGZ1hawV8EB4v2u1YishTvSeGLKej"
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

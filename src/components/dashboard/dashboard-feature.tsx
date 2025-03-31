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
    "THBSw8hFVHfhd6rpZCTy9UYqghYgJuRkE8FjF6NtbmH46Fb3A41pY1PH9pQYd3ppzZQ4YFUqnXvkautxAA3TipK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYfH9B4hyCfsq6YqrThFchbbDCSEyU2FpXM23KdrNgEbhv5KMk6zHc4SvyRkez5vpM8vy7pXN3R7Evb7Gjf9ehe",
  "key1": "jUSGsfLogwSag5SqQEuHXvrXdRarPKFBQGHWEa4iY74G2thMRGAe8jGgei9yTpTEJ9f6kFPTT3DQh89C9qhETGh",
  "key2": "5tpXNk81dv6ZMff3ieJiEwwFa1DoVrSbv48hLNhJTYgzSaX8Wm8VifXBThR7MViQngETfRfYR5U1wXVF29BED5s3",
  "key3": "3dQrq2jSnGQaLRYpEQTPZiULChkeaLgMeJUdiFwHbpMua4chFNkGyCPToxYZFWJj9SY9ycmJSLnTYAJ4Ka4mPwZp",
  "key4": "EvRug4YFYKa3B625FdnjfRnGH6KqjY12T9p2x9b3tZcx13ki3RRqEA5mSJPJYcaCz92k1aMDYjeAzyjZvSvUMqM",
  "key5": "21K8pAMPVwZeuTAxPpjbqf53K5eozFryMVmQpbVBUdCpKb15Vwr9zgHQcDV9mB29GHrfg2dM4Zt2qivbwRkaRMST",
  "key6": "4YQLkhuhzTJY57Bv1Abt23rnL2CauJQkmjMs7KAwQmK6KxGKNoFb7URbmoqwZrR2EBavoa2eQY9Ezy2a8afybogt",
  "key7": "2jh8zpaonDZUAQ56Wo1WQrKpny2hFzJ44RbVVmWiDiJFn5hMtbTBkJAJib4U7EZBeg63zfgSoNZSW7DRiBaJWT2d",
  "key8": "5Vu967SJ9XED5sMC8gZtaVqF5TY6vHXdrELTdeGK8rmuHwoRoYEmBdjpjWu6ddoXQVDRyQe7h1m2XXC3LpFoBPVx",
  "key9": "2YGYoBochsnNUEnVdCzAjDuEQPv2ALMiHKxq3V3JHDXZJtbbW7LgdxLX4GzsGxF42KN3aUZ6J5YZKDdzA42iM4d7",
  "key10": "2jUKJG5n2pFhVK4k3bPjjpb8GXP74CccAPxqDd35QF9prUsLTobMMgW4XFDRFKFTU18aLoYSes3J9rRzeePR4DjM",
  "key11": "2q4o1UbaNP5xgnweGUkqjiNY4KjEkpbo28gx8hJbWi7ZL5DTXdEvE6x4T2fb4McV35wDu8kJ56sr6JZ5Rtk3rU1W",
  "key12": "54rmEpupA9gVVpVVX9gK76j4SZnsPAUA5wR3bAi2UZH3u5epg7c7TJSbZMn9FZHNA58kCvHWC44kK3uwX1XM419L",
  "key13": "2zjQsHQT7kP2JsdzWZ96os7to7n4QSDcGtbW1w4HGAjKYKFzJLUDDTkgD5MD1tw121RUAZdPCLLnB6qBknsBy4B9",
  "key14": "28TYq5AMa1DnKHrg2VqSEfE4NM6Zk8ABgbYKs6dT6jrARY2Kzsn8VqPxVc2e5ot299Z98hNexfTWyrbHtqyawvZs",
  "key15": "fi467X5S3qr2NWG1hR3pQ63abDRPHEhBJmM2wzkHc5RpJfdU7XW1Sro3n396b9VimJXY6wkdPqNbzHcpJKU3SAD",
  "key16": "2Ns7GwVARWZG6rowV7fhvbjBnhWSEdjftXHWnMdfzHQUwRzaXW6AjRi1N1qW57GsbWGG49KqLw8riGTnWNcogpMy",
  "key17": "4iuC771zSi3vKfwbfxGhHc5nMBCfFcmJo2bEGbtdpLRXavCLUAwjXcDqb5oNvRAE81LKzsmfsonLUVAu1p1d9FDg",
  "key18": "Bse3XrTQxeKpz5TFb7oC7pHkYphaMDQamAyys11jfYwcCUxBGZQ2BhNV3eb5qExLT1cPfSGZhpbQGrMYKvpdBnG",
  "key19": "j8MrqygWrNVEB45kjBibvKgnP6JqUhSyEqLqYWh3bsDq3ote5Er3vAXZGCpmfwyeFa1ZdDh2bHDnfDqGpab8NZ5",
  "key20": "2YsHUfcPuGvuagmegM2bBpGFNopKLF9K3pARs5JHv8GRBiHbiFbmq7YwLX1hnxEbAMAJ355SqFv4hLeHoehNuU13",
  "key21": "3CytdthohvEXLVK34EfEcDpHARdLfPXTrYyjrDwvnVxrBKfJCdPa567t5ZuRpGbAjpv1dwx5gdMh3jmiF2qf7m46",
  "key22": "2sLGirCC5moDW22KTUmTybZ9rBYjiiYHVoUNGTq2cmP9JrRMkttH32iRQhbbvGqL9SXaKYhA56JxUiD31kMsAjVC",
  "key23": "4DSwZWWLr5AuTEX49ryAh2yBe9cZjULFRyRDcPMQ3Ahtx8bXAipYBSsKP8GnzBDbLdanXDxKThByrtFjv3dPctcL",
  "key24": "JdJLTYUE86cQwARTWLfap8SsxQn5SUjuCuvqpNYf4Prn7jPEXXHuNK2TE1eUzR9fDtGPuNmmEt3QwjwK8CLewqk",
  "key25": "VRathL4nf9o9R6g3ja6waX3bhfvvUjHYRDYMsoCfdRNVYYms7oUfsDdpttpi3HDLcjJ4jEEoeBBNmNJjPXwZCFy",
  "key26": "8NYzadXbDWVMMzK5dc9vLoABM1qyvK8Jwho3CiFFUeLC6SBUpWUNzuNXL3sX6ooFENTZKDUmiJ9x1DsmWyFNCAq",
  "key27": "5vEAfavv6JEPLNkxNFQtatF7M9oY8UmdGixRii4i9Q9arRnHuK63ZXsaJ8XHJ9bKAmbE1YYAhoW1rY5fxsc7RrsB",
  "key28": "66x4XtoZResgjd5H7d5xSWykQTKawwGptDhgPqJv6EPrQN8bmVzyUTtfs9Afm9emQMv61WgmgUcnKrpgnwdKDiSq",
  "key29": "4UqX9p4pJR6rZya8f9UdiDTKB7RKPh8gfKDQztBAz6GyuYvS6vjfDYZrMk2MuzpDCJPe2VSP5DjHKwj54P2XetVx",
  "key30": "3G3Akwb5F6bwVGvs4KY2evTYb58grFNEJD3bFcRDtB1jRZDyEvFqb5wXaXg8KLLLSXCt4LudbiF7RvzH6hJxhYCM",
  "key31": "44jDkpwpgsJQCJ4Aji9vJTduw3UGp7MoSo5YbmAJBbBAUcsaEaSd81MwsdCR9dBQCAJvLdKyZs34mkMUR5KWn38B",
  "key32": "2sG3QKUrDvPk3j5wESARK6ZR3nVTysRVB6fsPBPjHN5EbKgLuC2qEPm2jZ1DAYYFTeRMynUUbjnDU96VhyXNTJbF",
  "key33": "3ZuksXDMG5bbeFbEbFW7EqR1RcvtKUVeRoXN6MUQCpMfiVEcFNuHNzH7Esexs5c1KF8XbSAoTKgkxCr8HK9h3i2B",
  "key34": "28ZqyJa96wfeLHwER8x9NsQEjRtC8czJ4fMCseXQwPoAnMcT7hTzQ5hQ36kmvdsZAyUgTSEydG4om25B4YzS6miU"
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

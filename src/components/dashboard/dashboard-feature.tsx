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
    "3tLpZM5z4HwdwqGK89bMQLJtBnaKuHgbVzxX2uSJhd62LDU6mvDFwQUUbN4BG3ULqP3nJKYF46sETRa6ivpPtm7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qju66Fuorw63EWUG5kPQgpqQTtPcp8Gny9Do6Lq2cfRJhP1W7B1T8My1xg7pTUNYPX9poDQSXbfCh9qreoviLdm",
  "key1": "4sQtRgoJwG1dFnaqccGo8MY6jtnkEHdKuwP4rZ5ABKp9TkEqdxUcZV1XHnfjs9aWR4hjk5uL2N9yQKtUhBfgECTD",
  "key2": "4Eoa7zcSxChRoF4gs6sQ2iMv1JpkaxhQ9wghKEpRQs4A2XbQJmkXKBybsaqzLv2JYaDee4X5aN5P5tGTfwdX7cLA",
  "key3": "2dHmDpLEmwFC7q1LiDvqT7fhepHmbZF7tNjfroBirUq1eUGYQm3CyVmsWfVWRrbKDYUxgonjYqHr99dJ4rLohyae",
  "key4": "4ZnoB5PcAn7pu7e9UXjegNpnK7sxifo412jNYGfvf4tZ5M5cdQv6ZSsJESntScLmEn7TPAqjKoqHPR2cdbUsVvTP",
  "key5": "2amVMxWLBy662eCZwTQC5iyn81N7ntVocAhKr7HYKqcX1ktYpDjG3PgWzyFQ5kRs1BhXCFYicbDAtUyvALaPNgbT",
  "key6": "5RAxhyDjCnRfGyhgvU15gu5oaR8obbwqKxbJJ28zcgUbWmDsRj7qQ4PtkKkzLZ1c7ofDvUdmR4yTWHwFSJVFp2WM",
  "key7": "3gaCBstAJJJSsrTCmmPAgdmbxdVxpzft4DT3FRbAXnxo7LbYZYTgc1phh7Tar95QyetWjFpc7DGfKGUvB5cxxv9f",
  "key8": "3P1Ew43NQiyGX6j45DAGJ7MzSBDQ6147qmHXyrenvBCHmWJ9FphLu3bRnoQXvDAEYSLW8iphFLFBVUe1i1nB5soT",
  "key9": "5Ceyewx3y6ZgnrssRAvS8t5YKczisK8CY8vppzf8LgyYTvcpLZyMvyKiiz3uEqjyvjtD3UjQL4CZWcwzfnVg3AEQ",
  "key10": "aXLY4QrRkWh1D8ytA3zvWsYTrNqRfL6Ds9kY4SE2exLXKkAxoGHq78vvQiwXcNKpVhoZzozU8Uh6Y7iaxN9L8MU",
  "key11": "2azNZN9T8VEVqLWw9anvETWhQr3285ZJyHrUBotmu2ovNT3D5zfLSqe85joA4ZDE9iNh5mcwDdye7ru1iBLmhKB9",
  "key12": "2ruDJCEVLUJkHTy5LSE8gZ1tKa3VBTNifwHDNbyaQ9WWt9HCbfTtPg1HPFoiemi9uk2Azip2scD1SuAdBzfJW9Be",
  "key13": "5yaryLX7dMpiE6yuP9WHXxfmnbuzBwRNJ9CFLxxa5FM3uxBqCiJQF45r4oEdfEwDsBwWtDgR5kYgyq5dkU9sB6Kr",
  "key14": "2WVv1j4UQgkwJrqG8uruZuVWdDb3wgYiJXam3Y4c7aqXyHfaQwuzTg3fQmqKsrSncCymBAvaDCnryUFbkXUjvESU",
  "key15": "65e2rbq5Fwq2dvdWigReUq817KWAdR3ZkKRPFxT5ZFrEhPEVcusmdN53XYQPeEeNQb5XkQYrYTJ1ANHQRxZ3eaeD",
  "key16": "5oURXy2na7aJA88FVB3KxesRMB7qQdCHw3pDdZ4tu5xkPkmByu6Z5RZGRArgXPhzxtC6brAaq9b2DWivib3FXLSp",
  "key17": "3mFcJEtgU3sWpnGSPe9JqHbKnxi358f3yWWaubcLNwPKKxtWWqNjiUF4RVubTT9eyt82BqtcdscV7hDh8SMJqKz",
  "key18": "njYtzuXr3trFNYriihfrQNYi57YiiTG8jFTNQb8QjWe8z5YCTfqUYRAqP7JxoqJsRR5F1UKhnu2cxQ7bkvm8CZo",
  "key19": "2LM1jtwqZyDMReJpTsSuP3c19PjvAn8sESE31rqJMM39A9GUJe77F4VgcDndTKRHuxbjnbrUsWQrxd85cBMSFcom",
  "key20": "2WJKT5WFcaDVpQfcjBxwmv8s5a2LxqAdnCWoiDwdc7rUvvJPdnJGKB9M3GCKvRWb9SPrEr8Ys9W6yrEPN4aTun1z",
  "key21": "4jCxHFvf3xGwAQDY6dqaeivPjMahR9giAomXyeMkszLC6GkMY6KKrjECQuLweVHWTGtmuyFArK9XDhYEUq6bXaAg",
  "key22": "QYiBwbwfM4P1Ns3A8ZEoKtky1UtqgyqRsQAcT67srU7jm2CufonH9z9ua5K1bkcdxxvrQptVVD2kSJtGvHPSb2o",
  "key23": "2BpwwgwFjWDinwpK14nk8chApiRJBBhc41H2sLvAB8hEp8LyG6Rvrn3T8tHPwQ4RZ4YoZW2DMb6Q49CmYA1uqG95",
  "key24": "463LKrXb5sJeL3vgDDceKuCWapDjfn1t2kmtq4tnjLf6gg6HCYX3QpKyymC1AMqs6PC7y1DeXvm1VqZJYAV4cvq3",
  "key25": "2q5Lvd5BQeZGqqNr6nNaAqKJonKoEYCJUabcTtzwc484CTZjgrjs3B3a5BEEAWnmqWHPjhCPNxyLS2WKcBoXN5D7",
  "key26": "2bYGWnsC81FL4hEaacBFh45gFrTriaQwMM1tU4E2hDFzWHLbLoyedbJpcm8qqMXrcmSeHZ9cJfWR2FYgRYpSTXhj",
  "key27": "2ApnJiry9gBwtZgNxdpCFZd1VBNwq8XeGVjSmDWtQQmbytSBaJ2b9xD1Q8yydH2xYLoawSyc5Wr1ZsKwFbarGs47",
  "key28": "3PFzzJTqNTDJa3i3wkgHv4ezj6tRhtPC4S3aufiQA99VwXumH5HkqcoQsyLFaxNwYg99hzqoEuMoFU2HEakcoM31",
  "key29": "3sgNfwfFYHh7fDZqXN9hyEdjqZrkd5kL6Rrc2YFQvvdr1573K8PJQFNqwsFEsEBiqiuP57ye6E9Zem3hmUPJeZQw",
  "key30": "VAWZM3nPwb7E29po5XCe2DfdBjY8c1RUDi2e7Q18MCLLjSf7Vjt4bZC7QuMcc9TjtsR9rGLkMhnGmWShaLNfjqX",
  "key31": "5eBoXefWqYfQZnvHVkML2AVZ2hXEJh6LWXsQZAnzZJWtJ4soid7k8cWxbuhNRx3nKpXMV2TSgBWjAr83mVCfTScB",
  "key32": "yKs463ojiMUEsuMgXWqJmkWQuCQuDFS52pEeK5LTJC5TFrYLwFQVmmiQu7Y3BBxE3y9C4w4r9qGKjeWLMcuGSgn"
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

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
    "XwSGNCXVpHr4h7zm1hxHG1sKZe6rLmJKBdHukDAtB19kz8YmSZHBivRmzL2Sz38v1C1Uoa9xYuxPktWMke5BXXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gBnVdZmLnovjRmZHrgNAb8y7xsJfSBeTwuQCi84W7ub1qebhqzCkkQdYU2TS5z87zFy1msF5XDoSGAXnCMkq2v7",
  "key1": "gf3gwfMBmnUiGzmmCC2AYNvR5R5ENp8aKs9mrqEwhLfDx8HK3gJLkaRhxt5SoNHrubYDxHghaDFq3PVQnMvZEep",
  "key2": "ZgXRZUHZ3wELpBdaKHPGQR6TdoTH5dWLYS7DQS17PcuyKChHjCbAFB2jTb1MBhUjnFNfi11Gexw4QEho3svKVU4",
  "key3": "26PymoYaLNKDsPvjGoJp4NEdbaJQwY3wJEvMQiZzED52ftscKJ1oyfeYWsfWMKDPuM4Yp4WDkb2xJrWiKWbJMitX",
  "key4": "4yU9hQ9nDx5rodSxt5M49Y4rg7yXNznzbz68FX81Cdr1H6aaoVjZkoA9e1LxEV3YZrDnFP6UFsdUqPSjoEPzbGFC",
  "key5": "3PYGEhY4yJyyWq9NLbfZvHzTiMHsbEJqGoAGywPzEn7RkaR8JLDJwYhx4yW4WiKNAEJRMda2c74KyHgRCVs3odzL",
  "key6": "UXcs5qES8gqPEC1FywLLAMa3UaCMsV5QSQbFyNBVLWJqRUuqao7jKaPip8kR4YNgS8iRyyB91yWrK4UJahB29Gi",
  "key7": "2thexRQVWszCJpFutGT3AP84bXSNF2qRHGGfwT8wKa7V1tTsJRRBFgF1LZrnZLxXU1vBN3i2AhdrB4eBEY9kBAje",
  "key8": "5bAjETciD6N8takSU5rP7EQ5bx6FAUbrgbFd5vqMCckLhiAmL9DmksntNDCje74XRzeSrKRFBytfgKBr2ojWBbXe",
  "key9": "39mxGhXZRGftwQKbeDv1ZbxLzBbvekH2bqbiYaLDVeqjYgGcrbW9fw9UG9Ruk89P5gCv4JAbY6GLunduM5MHVvUH",
  "key10": "456xAsHDRfLwuPffxquvDcdAFhxKz2NyDBP4Ehtvkh6b92u5ixYm2BQt9meDTmq4eU83apnCz4eJNVPN5Go4K9s3",
  "key11": "2K7GR4yapmK3PqH4CpX8kZaeqk3sFoYpTETVGzGJ8TqojZJbp5nENRxeCAMgn6sekvy3QwVMXz4SDG1YNxXcBBbT",
  "key12": "2rpM6dtcmChUYQQcCFDJpN9UhEhynnAUqC2qRuxZWXxsKBU78Yi795BXA1mZxbenKqUYgu2CCqEfnUm3UtDEmMei",
  "key13": "4MpXz66ZGHJCTj3V8vbpsDX1f8FewmoUxCryQxj4xV2VaEyPxQQdcKcQmZAmkpMdirt3sT6BvKC1NHy7FtWpxh2L",
  "key14": "4Hs5EUyxDBc9nPEWRsc9C7yePoCyhttHkNHgh4BsKK4dxPAdQJFcdbazMKRWtHG24dhLNkYAoeeAZGtonnMpgkFk",
  "key15": "NmuXfQwiAB7JexEZKDvNNYF9HNAVTqFEPrwhgQGokyvx6r8A6xe6GVv8aqwArkYWF7pqZ1anvprDWUem7bPWq1f",
  "key16": "VryZX6Lwipq2sSnLn2tLiyUfffJ4TCzdibYx9BJtbjyT3pWKVrQ3mbXxqS6MCsNVZnGnwMJT5FLRWZBkDQJNdYX",
  "key17": "4UJr8LmZ7KdasvBzsXc7kV7zUv7LZ1ZXEibj5NVasXgU1zaaAZAef9iqYiqQ87cncX1UKtovGu3Df3ZSrZ1rS8L9",
  "key18": "UqVFbEdr19LRzQXr8LCNjcAtpUjHSDDcUvgFTgeskfUsLDATovv4FDbP8Wk83vZ1wMSnow8C1PpUeZKvWtxpzjy",
  "key19": "3a3KJ8FsUAQ4tnSknZJtPFwdnQQxCYfQHb126dKecikDwckYVj4foh1NAx4KAFUo3VHrq41qK11opX7rvbtqEWVN",
  "key20": "5KASrzZkRXFG6MMkCu8eDxSWHojLKkCAo6WwQNsK7dn6NmBWHonfeZrUeDukMLJibTRFgkVwxueKHGQLwW54tYgr",
  "key21": "4wXDnzZb3D6gGU8VAiCGaWXP6JXoAduESmzQLw9dCdVpcbbcXkYzGiwpy9V4XYvWd8SUCYotpzxwchzoM4ZJGiPT",
  "key22": "224KswyqJT4QHAk6V9mUFrVypQx4Ha1QC6hhK4FFCw19YXvhdiLVg8cTDiuhQBMYzCRrt1QaDp76o2iW4hHvv9qJ",
  "key23": "5PgmKV2sSgpmFFvqii1YFiBAEYLwgaspLV1kDZpu5FKUiYoKhbNW1mS1Dq7Td4g2C6EjzZzjTeEmt4sTeEaQFbFV",
  "key24": "52ypC61mdQkPVgz4GRuVt9YKKuajgKp5gEXpGnPkhuTDwYUTexDLBisiMhzfuGRgM5VwqMfSGaX6itits5cAHFoe",
  "key25": "5np9M7ViqMKfnJyhNnVbJUXBctHdCQ4LzhFpPTiV3cVp5aHuV5Ber6f66QoJPWaaYwFAudqEkd8yqYWxTJHfDmXC",
  "key26": "5B8UQo7uC821o1TWJuK9gTXPS6NJ3tNfN33veUtvXnWkLZnYXfCrQqmQGybMVf2AnLmXeUnnLjK6gVv5sw2mdw1L",
  "key27": "3jD5o4bWnnk8SQP98sDHCaYE9rPCag6GwTF69GnnRJLP4AZ7ogmEroSbuNJsbnByu26PqKKbTMUYUytFMgrwqiEo",
  "key28": "4QkxKWr3iv7PHTTjXei9tC8ii3dpmBwsconJ9qjxCHtqiWPsMc4W8PLQDuWb1gLU5yKDa96HbEK5ZtPBbCxyLMuM",
  "key29": "61RxViUuGzatxFBXHFHkeWre7qGJJTUjbLY75mUqMHqhm41rVN1gH64JTmQoKPYPmHHZHpySEUmstNvnuNkzPqSw",
  "key30": "4sUEaVVqnSL7FMA4zMet7c4Qjho79gxfzFFCu7E5oMRbDe9nqs7vSLGgDcrr61VapiNURT4ftrwtiGn1NMauNfei",
  "key31": "5rVv943Yh8BH8gTTpah4CUbGnQoiHumT42BthniLdAvMZFv2HerpEFobEM1N7CYJJgPsrwVjs5V9Cxdyh5v7RjD3",
  "key32": "5rMegVee8fMYa2KtQoHUDN4g21bVp5x9SkcxmgYqXgLYvgNfGnTrAsnY6QTwP3ogEPkY8oyHBmfVycCf9PyUZhgw",
  "key33": "3gPHeovMDopMPiQddyuWUwXmFqLdYQU7NuS8qbyyDpy85KWGang9AKWqNLk3RVU2qjXvUzo3bTxeMbBELBcnVKM8",
  "key34": "2jnnG5Q1q52GZ32u3hMFnZgsBvDyfsrQNMais3UeGpdZN4w2SjyQs76srruQkopqE3Z6kbFxywAApKJeMQxvUnJw",
  "key35": "g2q59NjnfVWk4qwKhf8wf1JW7AdA9EXUBPZTMdBU9GDwh9aWwdRbDcQsHbFAk4EncccJwvbgVkDNj11SNr8t99a",
  "key36": "2HCSMUnvGte3MJM5gpYTwSQQBSxdWNpxRpZJD5bXKNW6P8vnQrQoKF4vERVLGfNepx8MTsiaQSpQV3QHUqYQdmy5",
  "key37": "3d5FjVjZ6TH39pLWZXASC1qr7gGSJ83H3E396kXDuMbsXMN7rwVmqLzHgpmpmX2t4wRVAwHaZRf2V67QsmpFFtik",
  "key38": "4mFWnqTf4Zac7DTm3LWgmDLgtfGUqp3hT4Cjwv788kRgSncz3gWYXaSbqy9Avoj7THKiXmkkgc6BnbFYqivvwcMw"
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

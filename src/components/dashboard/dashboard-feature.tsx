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
    "38PpzsL7fmvA5CWAkgi8UrdNkrXwrnjMdhgjyLTi6QQTudiPr6P8QMGfVbxj6XApE1qpajPaJ7GbDUj4DSsJ6Tka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQB4DEWK6fireNrjtGxCVUFTKejguzy33nEGCkCeG6zt7uAciHYSfxzV3XQoAYSJ55y3NXLfZTnKaDs2LEViuZu",
  "key1": "5qbaNXLfP6J5U9VUwHvfpruCuwHbxGWdCdyvoeZKGSR5pjiRS9bP6xHcmUgBGd2Awz9LXQbijRQxpcDXwq9eZWZb",
  "key2": "2D6LL2kwE9MvxFwtn3GEuscaiiiG4kc1CN9qgEgWvazHcPkqCEk8PgApmMwf3EJZTBsWqhjZaKgpp7ePkjDdsmXz",
  "key3": "DRXzKSv44uqj6RJ5e5amLErXA64dDMMXzDUM8dQcWSySjPMD1iQDBVY4jSGsnqSPWpXJn8awNu2QBcn4hkSJ3rz",
  "key4": "2EzdSjqiiUSSFbWRT5Xw3JWKr9EKMk5LnpagE3ZaeaWXyeVxzNVNhLfRaS21JzUKABcEP85Wee8ZzqETFai3Ron8",
  "key5": "2SNi7Y2MR6oVxwrTa7xdAsAK4drWqu6zEhNVndneZx26e6792FbZcFq771hdycNGL7irXaSMk1SoNg7n6v9k14wv",
  "key6": "49tLzi2VKw5a17KYSYT6XYZvdpYFgVtWhHEX9Gb8ZwicYXvGE51nQjvZALBp48MCWxSSHvo9yxRvXStgcfhiWmdX",
  "key7": "3e862FqJrHojyjmZ4HdNjqWEVmDHAQmvu4WwnkE2KWjtLyxNHqHouJfU5joS7acFM6dkzJ7NgE51L1sSLV52pSt3",
  "key8": "5GkAYd8PZMAB1GmZLN9KigQMuu4x2U8fAecK3Ycs5pRN4F9WQ5b7zWJowhaurRTKKT1EEgGWqnxjbM1r8EntT7kG",
  "key9": "3tM1Ae11UapTjSefduwXhkNqsvAruuBJjEXmiMxFc2tfU2D979eFwrqvnzEsvvNrUD8Kg1icNuLnE1KuNRZmURjs",
  "key10": "2RDaTQyJpVrdAqsvUeKtCtVTeTFxowEXCdBGsbuVNTNeU9QKGiiKjfKDze5m2fVLvAJSYC9c7YxaW9NYTdx1B9sJ",
  "key11": "4g2uAgLPqPS6bSiszhqzmVN2WYdaevXygReAaRNUUBABgyN1mCfF4R37sPvpwJGbJxDZEZUX8BXJri4KSxpaBd8Y",
  "key12": "4R9UZ4yGULvAkKerfdjvmiKWcPoYic1w6mS5a1FUxqXbuSa3dm6C8TuJf2TvnfGjnEbZEDFw7YPrB6KPjfjgoofb",
  "key13": "65zrPVeTUgVX78QQe5iUFdkAs5DD4LLLnpALJbLRfoctdvGZGtJE5dFX9ahDRLRj7XJEwaUWy7DXC2aWCfH3HCmJ",
  "key14": "2Rx7WNCk3gYJnNyLr1vaY9wti3ihdGWv4sPNaZ7bFJ6cm7dqFMbWd79JmkXWDqGHkd4zEbH2HJrY1v2PMQkDHwoL",
  "key15": "5nLMs9ikZZgcKtqNk1Eq4rvimVzTPUJn6ArU8hfVb6hr8oCNhCi3bBhW8NnPeep8TCVn4fT36pqSszzBi6Q6VjLM",
  "key16": "2aVnxv9GsEzcZsJUBCkkndbHpLsa9vu9LHd9w1Sa62NUN1T3wwjA9q8xFeiDjwfHK6fgQJykhYot4dz9kPchSGD5",
  "key17": "5XW1eEctNgH7xu8Ckz1YiFqvmh1ix2MPBQyNZ1VPRr2ApWRoJCtADDdC6B5s4goyKtAeBVVqjk3SgDbrdLCVg5Jn",
  "key18": "3UkqGEG3nscqQHN4VxKcW9mkdibPHq5o2RCTpNgWA5Wi4zLhiwkuPie6W49DifA1AcAR1hBFM7krNGWA49brb29V",
  "key19": "4u6Ym1i1AJPciSgCC7JppPdL3JJiTjcnyhZY9pfMg5Cz9UMTPBndYV3rbdieesmBuQoDMYfMjrysGWdm3NThMXBt",
  "key20": "dkhyXi18hJjgHYSZSGDFZRDkdyoZQLAV7RnaGt4tWdzNmMhvcqmHpd4Foc89CnZQP7wqBJ9aF6CYCYaZwoFsiv2",
  "key21": "P2n7Ar4NgrFE18unGMKMPS3r3qRCEEwEQUx2RXCg5UCJye42mdvN7eMiXGPbR2ULBikehBGtTUfomDXXd9mj9S5",
  "key22": "611JjuJLgkgUpvmoDdKauKWdzA91fX7wobAzMP5JRXpQAkywPjA2yDAR67mWw4MZcfxE8mUJweYZdHh6wTbyHXY6",
  "key23": "3cx9ajJfjq3XYiK7ZdQegYA3T4dTH6xTNPNRVMYmaP7nB6atxqsyp7hnbkRGZ1ocwUwguWPiyq6fQNqJTfLF5XDo",
  "key24": "3pmo7ELgwEeLBnfiR7v2E4mWXUqP3yHeqMJgMMKo46VBxy2PtyV7NpPYXTh3p8Z8MMHXkATzH2oFVqBQnRE74cmi",
  "key25": "5rwTUayDdEFSPYqzAsnaxvThJu1ufJpJ3UKLZVRdWQQBvCa8RA7tJoyMqDEUoMXx4HcdnaahHE21e9ZBACzyLxgh",
  "key26": "5cyPKbFkZYN1psboKkWDxFsf4xLgY2m6c2SrqAhjNDXNujHgmPDvVtAXRq4EG2D69qt6pqFcNaj3y9XQWwsKqxkU",
  "key27": "2nRawnDuaG9DSTKyn4geqoiontir4MLV1VmimqWdEuJs7xeHvYpR2mkFbiQdpieQWsLiC9ZJxvYUectSvz9JbT9W",
  "key28": "2YoxhvYur8tpHB6Cis2w3LhXYWv3zRzVNJ1w2DRPLzdW4mZwk9FhLNt15HU3dL4s3F9FJhdkdE9iaJFvdrtj3W5s",
  "key29": "3gARMMyHJXfqCxLmtKx98gTkfRWsgKG8fC36J3zydkDvQwEXVUUSZiJ99tRBQJGFGcfft5JenSQaobhYL8ah2v5c"
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

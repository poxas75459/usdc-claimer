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
    "26QnkFod1jGdiwdn2Pq4NxPVBgQAptWjCsk9jnjEDhzgccSxMw6tc2SgwL3ZzXtnHZ1WsBEgkCYvf7PSRQHNiBcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gyZdZxYYhJbTNVR5t4ypyBECvzDyQS2BecikBo4piZFqHQLaNm6EhUXBjpCnJmz9KncfPU5SRgArTVKCiQ2qFph",
  "key1": "4FKGLrnWo9kReAzFMe2NPzPdr8DSQ2WdL4pqU9xhxM7YpM1ruY9icY9XHrr4FDFnymseaYd6oNFMAahSxfwRQ9fu",
  "key2": "3P6dB42wMdqL6N4WiRUUx9FtrsA2328k4z49armgU18FNf8z29QyW2E8c23MefyQyMSCmAyVmrHecppwiGxVc9DB",
  "key3": "2MTxw9fU5Co9Njq6MnbvnMmco1hPPkmWcfWQS8KcjbGhdoTNJhbCquroM2e9hxiW4jxfPueBc9xMt9zR1Npn9C55",
  "key4": "4Rqeqr6KM27oeQaKs8faZoQu2KrohZKgk6MAhs8NSZ3nW1RbpY8zp6J3an7HQgJ2pynVKahF21Yv67WsfyzQSZLd",
  "key5": "4RiDWyGe5UTrZZGYmvBSgHeVxCekgte4AtnEEq29dEAo1HZPTnw9MCcaSNHoM6ueTh7Qt4ZM3CSpkNWM7vjLA6ce",
  "key6": "2BR4y2BQ3NkoJPgDZPasncpKAriKWvoRmKSDQayicEKtjD5XKkKinGKaiPZEKNmHQVgNgaFwzYsyVw8zpFzeRwtf",
  "key7": "5bRtwtbhTCmq3c5z2kmrYLz8y8B6StkZFxoShwtB7unxoWWo3aApUnHBnxXoYQnmUTnMuM6zYZnxVsLP6guLyuNZ",
  "key8": "4A5Yw8ajVzYDSkDR1JbaRXjY3osZmtCZnaG7PZSYASxG2QqyESPBH4m4oEP5x4tHYruZKcewDnUzxq7Vknr14DfL",
  "key9": "66vAYFei6XzGvocuPnVT8fCvq6nR7JH2qdd8c4pDphD1nQodaFz6Ma6UiXdpKdtQy8U8bSZui4Fxff2K4Vz7dtNw",
  "key10": "3v5AzHFVq2VS6FjpUTCv4U9tPmEmt1jpc4asGEBzd3JT2ebB3xHjweEWrRMgdHymCBprrarisCkzm9Rr8DA81Tno",
  "key11": "31nJkXA3EZYPBkrfQsyn7VBnYWdkckZQwC7sg1pcnNfE6BKKzUBTpRbis9UZX7ZCopoVFER1cD9vssCfVRuKYLE4",
  "key12": "2DyoaCizGn1CtaSai6C96TGz1shcbrnadHc7swGLmEzorqfiz9dRdtpbPZ3zQuKq4CSZa7H3h18r4yCCpsXK2Fiv",
  "key13": "3UbLmFR4787S9yEbnoKuoT6WoP5bD6yWbu9sRGJCH9h1HiKBEEoiaMMc3GuCoS7xyjw4PMeaWkfR61NEvvQ7H915",
  "key14": "25BuyjLnxfNQRqAg5iiEcbh8rSEs5wtzFTxyXErYkft6D11dUAVRzDNc9opG9UqB4FgYvCv8tSTrhZGsasU2jXh7",
  "key15": "4FanzWz4hM98ZCwr2gBr2hwthwgzthfoGHJ3qcNJ8ys7hMsetbQZt3qp628KbDneCcAMG9rNxgUEoSn2YJdMrSfb",
  "key16": "5hETED6UogYnAyrJRqRwJCSgMRqmeySUxMSyNDSu3We7FvUR42jNeb6peSckYPS5UGfpVmYj3oUtxhBnYSxRYZH4",
  "key17": "rtnCFyYoLrvoHcTGBMKzFwbff251oaKqHtaBfCLvcx7ATWBd2QmUdFWHWjdnFWM8JE1cLTPQoUTYeez5v2hqqBv",
  "key18": "3Utnk6DK6wsd1J5xuWwYptkYLmxM2VUcwUgF2SW8Afe3zAs7DqrthazWxBMQCH1qofSy3XXeBbCFfC7pMdSJ6G1U",
  "key19": "p4rx61Kut2bahvz4D2cfzD9xKDoxu3Pbg6ScWMCJZSVsCZrJaKGv5ZbJgmgLmWfRzcysd1NxUw78HUp1Xguwy5b",
  "key20": "5N486Gc71N1XrT5crL2fbmxJEkLsQ1xtDjNnAjY2cYtzPziz2HGoq5UP6TRh1BPkdWQECtrZ2CutYWqHWtSnsrV4",
  "key21": "3C1gBnuTLqkdShGftSUichxjMf9eXDwxzmDENG8u5Hq9V68e9ELMdW7L1rMBvBQjtDmTcWPSQ3PwoUuQZivc2Jsu",
  "key22": "VTSUK4m474pJEXiUqqkkjWmu25sdYAoZ5bSXxB5pJZFdfRtnbUYQUp6CJRpLUjLKtQzhcyneyjeqBzXotdYodfd",
  "key23": "3cbY6UnCVPSf5LZA3BUnbiVS7HYG4swGpBvro29mebnVg52DWWdVKpQxBEcrhXkXPsHPsvrGt5Ea52mbgVARArKN",
  "key24": "45bXrfSA7dUDDKhRDeVwm6sW8ja9vcuwwxY7fGda5twDrpUmjmP3Y4MGDTeFgwJJZYjUA9MF7qfFKVTxABha1wBz",
  "key25": "51ejzR7pxqUag5FgVPpqF5CcnBE6QEJmNRY1218xrx67K3m4rYZqrebZXdEros3YAHZCA9SF9PmjfUvi3RtriweD",
  "key26": "2gS9L1dPJwLM5k3yGVTskEMNccgEoGUPgeUduBxUBix6nnn23RWHeKmQpX7NQJCDaUJSvxC9v4x8cqkUNBeca2ri",
  "key27": "2XcgHTUcRSVacZpbbJGWeLHYc3M3bqD983K3qxusb1ubz3EP3gr5mHUpcunx7oY5UfjzWW43crQetUtrHKMAAUuc",
  "key28": "nULSQNgdBK7TFurHLrpgRcmigWeSupTENw7psuxWMj5sSeivmiuhdijHLPTwGDFL6RgD4x2civjGFJ8cjNnEDf6",
  "key29": "HmYE9c8v1aDmKRML4q5f6BxLBiggJuoDLhE9SBYXWMbTpTaNvyf67xKDcfzdzxWr77ecciJ6seF2o72DTvnkLdo",
  "key30": "2ec4s4uZz53fNvzAgYFwH42f8U5KQSy14Bbv9VQYpVqWNHvec1pjEfsTKYrQMP33uFGaE2SBrM4L7b4kLGt1uxrs",
  "key31": "57dCMzQxYXhjgfsYZCwwggVpquGFfX25VRj2KWtnbkU71QV2kWPHZR1NGc26xeNgxtRAuwARygHX6aWCknLur75k",
  "key32": "4CVV9qSYyRNrUzagc7QpCTAgeJgn35h2LXowCMy6R66bhUjqKJj8cBN7HVA6siLdgV3wJZ44aUyNmAy4B8cAJVxj",
  "key33": "3NLBgmvP6joNTKBtJrjms1v1hYYJ4QzwqeBpZyG75e8B8MxardGuufmPyUvQohbMyFv5UDMRUrUXM74Pk8hovYiN"
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

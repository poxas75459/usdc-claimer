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
    "5rjfck1Mkwvs4ZLN3KkoquaDCvfhaqi8oh1cF9b4TmqH2MxQvruNmAtEWBegQ4r7QuoR5tk7oFuLqVXWGaP4CfWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuDvozF85mipFcE11wuoFubSAdG4pY6n5Tz5YUQ7GYEt1vBEei4F7bqUYm1365RuR6Uk9HcAy5DErdD2b9LHvvY",
  "key1": "3FpzGTD8YEuiLDLetWEu7nSEv3GBXEYrk8SxabC1S3QErP5gggsD8u12om92TytZHheF1mhEJNMQRpmvaF6ZCQDj",
  "key2": "y3gVZQ6W51miMiBfWD3wXKo3TzzfazgR76dmqfimxs8JNQSF2B4GYqAEy8rw2bdezoafy4ULNEHfEWGhYYi3ij5",
  "key3": "2whGJjkFT2FeMndKPkDv8vB6CMtMgjukyxjaRoQ4hTXJvgziRxsF7xjX8prfQkBJ3sCcMGMftF4EmbDKydcuYhfB",
  "key4": "27EEG5CnBLWL4zb9UyEhkSMkBn6nodoJdb7jPGmQT8trwERyMHCQVcZvKkkCbrokndkufrctzNr5gYAZfFQ5Thjx",
  "key5": "3eY3kauEKHPPrDK6qFQ4P3G1VMXc4xABsGUHq1meJNnSc7AJVyTEqeVxnTMR345kRG3aQHHTXNjX2MRePCEvrNq4",
  "key6": "2cYeAvxLSrdeyM2XsAvMg13eN472DNom5YQ4hCcEmZYXt3UAAV4w26BvkmhQyyhmXcdv9Wd4PEx7dFnSSkrjSdjp",
  "key7": "3BtTpdUNNDzktucXgCM9GN6so9PjwQ6pbZEQ2d2jwbWu1chVYicEbKqcRhoYRrzMkF691qS5xZyKJLM4t1vmweGw",
  "key8": "5MVKhd7jXJMP7q6fQqbgip76KPh1Yx42VMBEaQfQSkqGzKdLGcezNA1JbeEWtTTPoM6i4V8rATt88kLJcnoUt9rC",
  "key9": "2rNkHVup3gvX7CSRkDdXwC63YKqWVwqXGPoG1xE6JoiwGGFdDh3xzVETvMAWUtuS812JWWiAvGn9kwqKqCCriyiH",
  "key10": "2RABag3QBqpZSpMpV8U9KF3kcouu7DmDL9efKbbh4X4yBFfDJXgASQETHZTZirjpv2Sph8wz7AvYXzmxnYtGXvcU",
  "key11": "wKZMDUnx1VnN8MgHACYAAqzyAQ9JFJnZwKV1fWCeuzYy18iwdPeJz1Fa6UQBvVUifHz3bWAWhXBhgKBGVFYtssR",
  "key12": "2ixMPgmkkyazcMzc7nNVj6tLE6T6mBDCwAyUNkVXm8jfYX5diR8B3sJC2Y76PzjAfnVTFaB4xQj5PLXoCgG54pS6",
  "key13": "4SpQfwG9xwy2QcNCxY8t8RD5NQorbijuN3shD72v96UpHZdHBRAshoTgu5ioqaewwbMiY3DWjVgvLrZfrdsazMjH",
  "key14": "3HUX6FTvQXi4isVSh5cWrAQzpvmZBvYNU3b5AAGHAM8y3A63cMntVyBgJxNvkzn5nLdj3FqSdNe6gCnCtadJAo4m",
  "key15": "5C3w7QteVq8M8KoUAx967uvxgWvnJL3nRc6y9GEN3Yqez8r8rAibwQf4mjBHkZCKG6JAmChdX6rKJSM4HEQiZS3Q",
  "key16": "5Fc1Z93Dr2toc63dcQQALQgfYixdXDiqCefRdbgZ7GCpUj8JdB2Q3qn1a8MZ7erKtDbN3AV13XSsfKmoJWYN6Uop",
  "key17": "46XsbZiMg6FntMASzRVTvhMyJYeyhVc2CTRMFHf2tpowFLp5gbKW1mM1jn8Jd8RamvTunD2sgRoBDMeoBEfG4Vsh",
  "key18": "4VmRjBoip5ge8Sq6jXUebD5RixiW4UKd15t2bFArh3Jk8yExUJDjcJKCU2qbfDNgexgk9CmbWL83b3Ehuxhx6XaP",
  "key19": "21SLYueffLfg5aa3DDajhRN35suqhAbQ23vm7oQPdsKwPVLeCRkZbQnCxsTTM97PyTfo9iwECWDgUEbd8W6WhtXr",
  "key20": "2T7WSCmWj6ZUucRffHKhqHtf9aeJx52VpkL9LoxbcyduemT39YEbMtHzAWaK9gBmyngaakk7fYbw2tjMUg3E98GB",
  "key21": "6186MyijmU7mYfTitzA4FpEPDidpJNGK1VA5b2RuPunkL6iZt1gMc3vuRsbdMEvGku71XJ7NWy8WCwwT1TYPZavT",
  "key22": "3tKfAgkC253pATMCs9L3JbXTdPBRitYYqzwwqmpXMmu57jpzBYW1zqWMs8H7Qb4YNRkvAQvLNbvsvajHpUcq1cy5",
  "key23": "ch5k36KB6wT2R1foSQczvK23Sbj3ckdxcnYMXGN5eCmN6Mdgn3e3bCptXxmyp3PwuLNxBomQrqNLHMmYaVHBDXi",
  "key24": "5nC2fBEqubSvCsxbTKjP8qhY6Ne95C25ZzYnUWPjwhRbAALk5AnL69Xk6am6f7KBXRrzz3vFWbLDpoCLbqdsDZj",
  "key25": "4jL1iY8ML3G8XWZtnNTpwLbZS6yARL9HUkrAeEkN5RhWdMp4ffPShv6tAMUemBACAcqnNKUFTJydbeFaAYQBwJfz",
  "key26": "DvDLcbPbPvPPKsATNTHajaGb5WMctWWC3Tb1bmEC5m92DaVwNASEUnrQm7VsUGij8nTFwhFfDh1oe2dnk5VrAx2",
  "key27": "4abnf3cNNuMFX9Fbt4VAxs1MDrH8wSKJ7uvbcMRgofQVYpQoNG7GXppmYZafHXMfyehELSSPN4FkAS43iCQQu5Dr",
  "key28": "2vgYzCHn3oK57QMriz9R6pPgrZ4PfkrN8165u1hWD6Mn62Y8pQejCsauHoCh2qG8Mcn9ti6fgmEG69uV7rSqMnSC",
  "key29": "5Z53843n5LrCZfatqrA3qZDbQnZ8tgVnyXUG9Ge2ps2KGJ86CJ593acgXLJVZwxDrhbDjhJeVGSWhTfT7ZJmxDAh",
  "key30": "3d8Cg3dL3H1Ads29NXJGRuVfA7uSJwqrZKMzL2DwZT2Q1NctmyF9Tz9iZUx6Cobyd4xjMtmwZifzBo9fpaYmaBtT",
  "key31": "4QcDM5eAgSG5HrY5mc9K2AtwwN6WE3oN9BqLMXQsNXhK1SfaRNL3NNnuTDrK55DZ9kuJWNM3cqHLYAUe6TiirDT3",
  "key32": "4skGL7Jzy8bLN84JT1K5J45yeYDQYB8obVuwYBbNXo3U8xNEsn156ZtCyvde196wF6foRv8dw3iqQtBiTbVFsiHi",
  "key33": "2t6rd4XYjBAzgakMK7aPqPy9RACvqYKjEaFyue6FDBNMPWVwfwwukG9XzYscyXg6RT777p6WPPnHh3jWhsSPAdbg",
  "key34": "494yYFRovZL5mVzdvw2KwKiJRXHdZByr4wmLwo3pLYBob3e6RqWjvSZyJP4zLK6P28E3VN4Bp55v2FD8eeiWRkCV",
  "key35": "2F1PEegPSaU2gDQARNuu6bsCVHQsDvCJ1Z4pDnNgg7gNLNFQUD2g5oSLEudpKHKXn3kkXcNkJ3LAaBLjmngfstXv"
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

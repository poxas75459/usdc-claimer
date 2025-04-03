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
    "3jExH8Q28g9bKcAWJSBY5JqpUhYhfsm1tCRQeZkqSaQPMkXiXWDre7HgSJNVNp2dZfMYX5fAUNhf6R98xrHrFxAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ws8xcGDHBWZrbKG4Hvw5KvwyFRWX1WDQUxP6nVVPyZmTQXwN2CTV6uT798x5kmRTZfBJP9wQUwxa2T4LNhnDu9S",
  "key1": "47ABcdmRxC1pBLFvHW8B92NiFLyG5wY2UfDNxn6h1TenBSJVW4wJYphrjijy5vBT55Fi8GqL24H8jK2UZaNhNx7H",
  "key2": "X6DcyfW7rmg8Eui7ZvitTkZKUJ3MpCHVk4qwgfQFanHwD1xY28HYtUP2nyYPfCD42N4vEQP5aHjzt3Et1d9Wv9B",
  "key3": "n9Q4hywuZ52WaoyEFhQHjYH57RAE3FcVy4aQ22sgtGAjqWDS3VzHrajMSZHVpjq136Fcgn857m6m5WF5xXnoSic",
  "key4": "4EiCp6AP9ANfnNysvkKX96LbUc96pWbbBTYamT9mJC5AyyHFoJj6uNdriXQKW6XVAbYcUwJhxK9Tt65UAinUZZGc",
  "key5": "5bRyNJdyD8jsXimC9Gq4JzWbh8DJpRQrExJ54c3JkrvcXo1hwpZyGf5K2VyPc7rk9tb89DepEXtAKwbhWckrifnq",
  "key6": "25ArL1w5Jk6jU5bW44ykpp23o99mKVLp49QAG4TBwhMRGrxSRLznFcvQvH4fXdwrAYAk65KzHEet5kYCKnTGyTVt",
  "key7": "3Uh7EKfa1SSh8a671DQMEGi4qNuLGEyVYE4AcdshJRFr8QejvEdQphAoBfGMZUZ5p2fxW2KMxM2hwhmuCN9fb8F",
  "key8": "W4qD1CXnDsJYaHd3barGfoaotZj9pwhnwk2KPCtDZUtAYjywhxfyq2adrYr6nXqEq33S821mdC5A2umJXcrTi1y",
  "key9": "FbYdoRRNhebz3yqVGZaBzpXhbFvHbgJuheuJ37EMNzEvBuknsTTfAv1ZrgFiVjfib5WiTYzHBkjpvDC8V7nMYzR",
  "key10": "4UYsw4ywMRPAWpnDniPjbENDWy3Z7mQ99zF4nXEDjf8KLCugVcEBVyaKvBeEQY3inMmwrev7LC4GKCqV2k17GvX",
  "key11": "3fSWZRZY8xbqAiZDmLPUXDjtEJ4AipgaoJWU9ipchcx33LQVBVEHuMrRcZXwNdwXsnJjHuiPe2bMGPcQkgRNp2EA",
  "key12": "2kNTEhkosH1TdtrVeP2jf5dnXaGPaAsYbYtFZ1ixMPKZ5g8zp1m8Lu8toKL7xN3vBxD8uoJHivH5Zj43gmBaAVJy",
  "key13": "3SB8fj62QYVkWfhAH5dREyoUDTFX2gUXyjyxLfJxrJou96eR2bBB7cSLVeBCFhNw62ZWDRXJLuc2N516zwCoo6ak",
  "key14": "5wADPB1a8ui1oTM6KQb78NYuHpoGhbnZKmeqfsbYtYPxUiExureZAPBJNLeT56UcpH2vS5e1wywLSMjdZdHFqrzh",
  "key15": "4ZcMRLUdcq9RTnnJqBEJ7LZGVqWyY8e439aSSf6miFRDrHsQZtxy3rVU629ToS2Aky38xMQDYuMvnzxE6BZy8nmJ",
  "key16": "4bzdW7vnBMYJcuRKAs2wMixjanWXxepPPE6P4uwEC4kRgmZKbipHBKiZTLYsUYkfoMSwmArtFCT12m3s9EteGQxg",
  "key17": "bk7W5ZpZ92wyH12FXxAvzoHD5SinxkhbGqMjKtB2grDhQwHKVu3WufqH2UtGSVWQLnM1wcAePBPmH9M4b56AAqR",
  "key18": "455DUpbCeXkaTNzhqYNXottcX4Fmah3dUdqznP4gwjEoWULufzbZChSGiwv5QMsvMNg3SCajRZVdLpis7Yctd23N",
  "key19": "53vTKqfzYDKn6JGp75YTsJsy1wtq9evuCvM9p8cMSTxLBCSKXry1nHQwu2PHEACwq3gikSSJ4Pk2TJfipbFqU5TJ",
  "key20": "5dc8h9VcjrYevVGcv6Ug88LoeCsu4JBmDKFZbzqLnYHFWGqKCFtmkg4831LdvZicdoYw1kHNJ3bHxKfKueyAXKBx",
  "key21": "5ftrJLdQfJRCUjb35LXBRnoXKr3wFxj4mCNYAohXL3QEbsRvjZVwvcs1FgVrF5tvidNhfuq38bC91cxsCC9CTUAU",
  "key22": "5NT4L3WaxGSTk9rxJU8kBe57WyFU7Xcnh9C3ZBbJNPNFm7v1XotPMxMkMhiy1a12pv1s2WeDSSuGsSDKMV3bPsdy",
  "key23": "4Qo3C4XTk6qVcGuUhXZpQjYXGbp4s1KM9MUPfZn1TGnWfo2aXZLpUCnPLJzPX2oSd7eHoEXjB4MyvPrioYxRfksF",
  "key24": "5rAVSfGgbB4L7EuBnp3PULQvPGSZrsqFxNoEe3BFa3Bj869djSM7eKraFa78b4SFJHBhATKfV7RJN2DrFdt3g2AK",
  "key25": "56tLmfoibKdVxVPSknUZ3hRZL9xq1LsXKxTTQjCFhuxxh85ECvP1Pg8zMLqssc1XfBA7FYEHh2MHB36P5cmTbKtL",
  "key26": "5KNrPG2ZatH9zQk3q79FPnrTMjrqyB1d1X6oj67ffRos97psSvsKsvYxMPPH1wa9sEm4q951pDUj49uqko3KdoRQ",
  "key27": "3TtwXZ5XBhn1zCkrpK3ZASdtkQjfTnLBWHHHEs5XupPKpugqham62jt5b5VYumnayu8ZSYZ3zvvtpfZwikkJuayb",
  "key28": "22VvpikcCssQzCFXhRV3EsZdLPD2cRrggKEoTiJCXQ9H3Ja77ngD9czHK2Y3amSGZ9jAHCD5k7uTWb9V1s19bsyZ",
  "key29": "3UMR6Hw5r6wrWxJtLcM8h3NprKT1PFwaD7zXPd23EP6GhGY6dvmREFMgrB3WXtPybiu7XpAdPGprLCxt79MbF6ms",
  "key30": "2iKq9TUZm6nEd6Bk42WPtLAgDGs8H7zBbfJnCXvBL6kGG7mkKQzDJQLHdBjmLyWKn13PixgMiFvhCQrM3eu5GJG",
  "key31": "YM4wPPHVKwiAcWBu77XDUTWhoKQSfKaCoyEM3GtcEyYGgZfdmHc4kcFnQLF7spnnn3Q5TFV9HdYAqnqiHNGfdQT",
  "key32": "4hvBzGD6M8s2qcT1ApwACpfFZ51nVd5se5dxxCNqX5TjyGPKKed84i8WCc5jW1K7ppnQzxY5uYuLsJKU6fL8pYWM",
  "key33": "36CZ6soDDXE1JM12hrxyAR7TcQAfEra9BVT8b8Uqfw82JsZmuTc9FXsDrk7L2FwwVrosSBqzPB4wzyqVUWzHHrcP",
  "key34": "324uXXh3dx3SAcJ47ht7duiCqBHEUDGqF5rrqN4EjLTfDUPragS4D79pWquDjChUwMSyikieC9mFFC2cjKpS4FCA",
  "key35": "4EfkSwHRSLqbisfZwSGUZuxWcCXYhZjprSZwjjVaVEUeCkdt7QHQpXYpBD2aSKLD2SHMNW4QZji48CSXeCwoHiqP",
  "key36": "473eSFiygFYxMfVhAqpLzX3dwc5HJB7yVoRyEcp3swD8EMdGsGFxidqYfcXnJpzwieePeHMAqP2rkX1Mzq2Z2XWZ"
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

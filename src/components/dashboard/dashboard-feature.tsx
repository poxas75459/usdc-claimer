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
    "42GzKzHUCpEbvxEdmnweu7GUmrU27RYzF8EjqH9VrPjrqLUSTc6yuSS39WDaNB52wBjC9xDhf8U2AQ2LmD6D8c1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61W7DBBm5d3gY6tVNidszKd2wgJ7yXMBPZfPqmYb67UWQRPzFgm5L4oTkVi6CZnPQgZvvngZ3cNDFL4eUyWucrKK",
  "key1": "3SKa6bR6SnHgH2HrHBEpLU2juo69pGosUNLq9Ub87idYDAhbc7sgDHj2Bc6gNvaF8yt8pjnMy1bvkrMPPaLUJSX5",
  "key2": "2esZcH3TvuBLzEjYzRjkyqyMFk2AHPk6NEsM3P41Ce3Gyh1z6KYhVpjiLn7HUYBk2Ve5KP5QxppYE8AKfjMctuT4",
  "key3": "2ZrgWeyNdNbKyRihvXsnD8oi94kkW7ymFQ3po3iLpNm8NnvPCgXWuczkoK2VY4XkDPuoqMwvoXcH6GdVFHrZhnnu",
  "key4": "32X1LgeroW8LzLQjkua7KnA1wcNqSLWq9roygZWQ8bWBm7w4nu7uLBddtVNf746V5swLbUgggrfDawbJ67k2KB4V",
  "key5": "5feNc1PJcNc68hJLzNtFx3FmK2EaJ2zUKz8JHDP5H7PWNT3e586GMnaxJjqqzdhxHrPwDXF39kPyafZsgL2jRgqJ",
  "key6": "AH9H3HwuKhv12idbWBBATPZTraPfcrZZwEDjBXMRruEad3EYDX7nkFJUiFQKQPVJtPyHfWcrShPaT2GftpbFiRQ",
  "key7": "3P15dmP2hr3E4dLS9xiJdgR97tFs3WFAws4ynGpBa6UK4YarxefJeoFrf4jcVDDGz4WyuYm536qHr3PNkptZ3Cqa",
  "key8": "3W3wBakbwd3VTen3cByUSZv4h9WvoyKg9zz129RWd5SU8Edokaty4yE3up1at2KWG3c1mMfpJxVufwdZKAuTWsfi",
  "key9": "2oFKgTdkHTbD6TKZ6cmATwBdXw4Ctu1iYVEu44z5K3Kr8wTtRcdj5nDtChfAHwwbcWrGE84fPS1FYAu54bwYQbJT",
  "key10": "4iwn1o54ma5KDmPEvr4pvM8FtqxVgxczPW19pDbJGmkjhAu9necEkzQeoceW6RXcWNcCvU4bi8VaSzSqvapkCZvH",
  "key11": "4S6JYWYqDJ2S8rKU8Z2LQZSWaWVw6dCfxa58tLRmeE1zmA6AMmZgKYiyqBPHph2JaUzmxLhVgkReXoaeUmWKUVZg",
  "key12": "2QVQDcii84CKL8eyZXPbM2Ps4AeJ6C7hQA7FZXcySSb3teBLnatGfyffmzHu14T8TfXdP96i8HCnfj1xfEnukCrh",
  "key13": "5v8AGtg2giGoFGc1LCFjotTq5ABBLm1nnNQsyvTKFpW4nKnkey2YzB9U7gYVTvSLQhKyWxBhCVnsa1uzPAWpiEPD",
  "key14": "4Z4HVGeKzNf38APYZyLKmreX1vmo1z2Y49ES8ETq8T2Lic8QefEbdhZ3B1fYFLEc3Vk81an9Ccw5y4RbqDFfjn4b",
  "key15": "45w3oQRhSbi5fkMYHyGGqmDMA5ofNmjKNxfse3nebUPJzFFtJq9xdk4PZtTTvin4q4KF1EBmcYHruuf5F2wD3A4p",
  "key16": "53djKCLDMSC7X4ESaPt5giRZ2Vj8G5WtUBhtTBmjHkqAnC8ij4krAPwDge2rf1bPErCGwXs2YtnEs72LvsW36BBA",
  "key17": "3nc8H4atT2Y8kYKh7atXBUgQzdC9iUKXhSHBNgFD4znLuokb8EFhaYzg27THxKZhc17H292MWip1BdfEzSueCvBT",
  "key18": "w45Haf3XbUMLwoAUXJawwFuxoHS6oaJnCGDA6b7tBXaEmZoc9r6YB3UMz2ZhZJuNoX4kjUVsSGm5UmMUMtffXin",
  "key19": "3JeaYQk9rgpWMVFhzokLgjScc5mwtqHnMgmeqTX6GihF4Btk4QjGy1gKtHe5ooXqKbt79JGwozEfGnPvosu7BseL",
  "key20": "4ou4vWhUBakmQQMgrrnBkpQqoCRsE2ZB7UNC29AcNnSP2Zr3jFkNmWkqp54nW92gXhQ7f9Qzi9rrFWkYNtFRbXHx",
  "key21": "4gXcQhquUfL4pX2KMzgrp9kd2Pe1MnLVr5JZx5t71xz7vLCTXfvfVXTJqojmxVKugzViMGBZZAsxweXskDrDVevA",
  "key22": "59qxCWiq3T8FfHBybvVWGHaYPNxrtSTVjGFpU7RpXVkQykdXRg3rV4cxerxgeRjLWfBoouJ3WQbPsnpwaqNPppVs",
  "key23": "2AnLB8VWqwCXua8FKHmAvJ3vnMyXX4ZWaS3UDpP1zERuGJSXRR6KovQkz81YssQAZ2RMieRPmtmEhuUAtMVHMpHT",
  "key24": "i6G98ZgxAhUBip2AtviMHKeLLeEoygUP6a2Ed2Q6cQMFHRdBQGMMSWxrbqEWSQrC1LH8Qd3GdwmSv6EypxZo9fB",
  "key25": "4oPEXCgNKM7bza8P9cimxpRMPJsp15YyKfdBNJANwfBeor5Y7QskugHe3ALZQkQ7SiA9YCU9Vkew34i4vGzfmxtJ",
  "key26": "44P4mWs4kdjBeUqWoNUxkBsv4QPLB38YVz5VaE2kWBvyCwRdHTy5qNGV3zcebiKdEiGLT7kzdiuTfPZ4M7WY3wbd",
  "key27": "mKnuV4DrW9JVgSoXJhmRv33nprt83AcEutsrk11gwpiP95z6DTwqiBCdJacXQMTQKxvzVXZAqhvzcStXuWdSk65",
  "key28": "5kFXR8tG6or1rrWqSCogQvWhAdqirY3kraQdcJT8kcRTfyv6zFkcvwtCmFYFcHNGtJvcQ6QNeskof8gReDB4h1rq",
  "key29": "5j7u19by2zirNT1GegwXsSEbBnAo6hiTbTndrVfRDDyKnBZN6BV5LLYx7VcjgFwd3TgJYF4LdNWkxP2wAsBbNBdR",
  "key30": "LikwXrUEZ2NSaXKwEeKcfyny4vuWxmvbWhpwKecgKKp67Qpd4p2TBuNN48tdV5gGVAFQLoaHwCMC4WodWPYaFvB",
  "key31": "5UczVcKPec65nSHhMC7atan3ZNbkW9MYs7HWWMJzFuk8gfu4xEMAtAuTYWeU9mnUtGovFHZYS2oKpXBWoYYmHZ33",
  "key32": "4PvQowCvCh5QypAYaYsfgKqoWCnKY52ubLpvtTwCDL885847Fo6ywfYrHjtZgSTGT64qsQVv8g22851DiCFHXCuM",
  "key33": "Kw2ty3A6eaWPaNqjTirVe1kjnVzURYTmA69JmiVoz1ZMgGjjXPwLQ4hcQA3K8ukX9yW1DgEkn983sEdK7xT39Tm"
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

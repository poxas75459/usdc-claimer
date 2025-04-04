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
    "pTLHNC5AnJZz9Urso9veP24iBuaeRwbkH8sY4KPywMyPFL735zESmD23G6b9oWrZYCuG2ps54P3HYxKUkjaWu1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjKXFmuSnJCYsKjco3BnWWQzjQDEFR23f3T3iXsbaAn9V162ps3FCdrc9JWWhZScEheGubetQSg5X8BGumK2VDi",
  "key1": "2tv4MtMZTssVrUjcGMEJGHimEvi9DoHyoYKdeaSM6W4esvjHcqCrPzSmpc74gRgEHfrGYHMY1w7kzX5h9aB4SR5g",
  "key2": "3YpBdUSk9vzQkyrMsBM8WMs8Xzcenhrg94titn2ins5xG2xsDCDd2Gr3uEBSzXn1hSFtEw6WrYv5WFaJ2hDkG47m",
  "key3": "2jrML37NwNtbFtrstRbiZ143AAzoeLHU34YzczebscmeKU38APhZiyfTvwvGukV6X1qJCQApkBEnGcFk9wgW1GqG",
  "key4": "3odFETgKVsS3AryU2dqdugGDYTR6p4Az5Yiyrcw61PAVbXvGR7vegBsbKEW7JmVtrcEju6rGf5vf22qLCUt6BD18",
  "key5": "22JKRb5kjED37f3CDRt5R5U5vyenmdUJKN6X6PjDC5r1q5g8rmkKyja1YwZxBW1SR7pmdcAvtfhqRuZqgdnuGZ5Y",
  "key6": "23kqWueLsWDXXhoWLdsXzyZdZyFAh6ZvZPz5Gs3AkYjif16Um1DPoenytpgQKyNBm1y8hjjkCP6pzzS44xJn9kN5",
  "key7": "5azvj5aNDxhDqmoNYisRbp5YLWKnnTERNqZrRDVdr5XTrxCjA9VsVuNbiEd93UC4sKb9TSiLP2yZ2zMX8Hh3ZJxY",
  "key8": "prhDWYLLb9QTrRxH3yqGjtC8GsCP2Xo5AL32AU3ignpJtNiyhsVQAqBEQ75WNcmSZ3YnmVMg55gQsEzMaogbkmo",
  "key9": "4eDTLfPQ2xRMLEN2fCaowj6CH6PyCDVsigLTKkLyyUrn3tqhWvPFvnj7cZkmpEBuoXambqXVCexRZ1Apc9v8Fq8u",
  "key10": "3eU94ehx3PsVK5GxuPkkdgiirpB9sGRjfQ5jMUQSsaxai6L39ivbSAsXJqqWHepZUdegTPgP16oTeQAvK98s64XQ",
  "key11": "5S151BEXgjPpxfkDitqntJ2WbnFx6UdQKEE4sPwMnGzzHBQAkTkcpYWE3jux2nhQvbNmeftYYXsGT5tcPC6prJ7r",
  "key12": "39dCFPUZr4FbGZkNJp1JdhyyTfa4ydbCN3APECAsgDYZyFbhaSNKCXbXMyaUuZiTDM2G5rRN5vaAKk9oLzHcQFi5",
  "key13": "JYLWPdczAXR2erGQnMowwxSrR4CKcWC4HWP2zf47fSVrcf4bk8a4noZZCpnPCfgPFa5Qk46xbCCfJ6XtAT3xZDk",
  "key14": "3cPCnct8KFsjSAN4BunxZPH7tJqUwuSz1PanQxPL1N1moaw7VNqxVTrPnxcCHia9F4PaHK7JqeYK2mciKVrbXJ13",
  "key15": "4vhp8N8Gns2BAqDsWGsfutHaXi9JBBKtKJ43SBxkhB9AU9zHSAS5gi4rno5w2VMWQ5sKWUind2KhtsA8ngVuQGc5",
  "key16": "5mhTu43EsEnYWVnxydSoqSNRpYfEm3dLs7JE6VYi187GoJ8hnmN5Gg22qtsX8Kc9qDEHXnjwvmrJg2RFaSUJGEWE",
  "key17": "27A5sQYvNqRyiKN9njtZTiLBKNZWJGb9x1UJe6LUbU71N5o6iTFchfh1vTSRwaWSvtv73Q4DZB2d3FsRySLm9x4D",
  "key18": "4gFxPUyRWuSWKvp5uN8uXFG3TR4sKu17RfNg1eaYRHAe3fosU4GfPLrrS7UsKHg2k6EcdiswKpDZpfxzNuwJzVjk",
  "key19": "3tJjVLGtk4wmvwmkVAHJ4g87ME1xvPpgFjm1nrzFFM1LvtSB6Dae2TBUrHaLb15eG1tZhGp6kdTUseReXkP4cC6t",
  "key20": "3FnWXXbvnR7aab7M7WPhRZn6GV9rkjNZZTkhAed6einnnJ67yThqqczj6bVo48fyEsxpkRKRmzoYZpKnfKwHbxUo",
  "key21": "2jobPirwz7b9oqfLtuTviMBVwPdgzqhwWH5Ci1aTPRHEvkFD2B83ZYYJ5uMYURN2mQubEriSrpKtBA5bMw9L7o5w",
  "key22": "4C6PuEuzYsStBB3HBSQLdFZPcmjETCugbx9Bo5TuAS49K33XdX7YE1GbBu1bMDisBca5pdL7HUTjwMJkmmLZWjxX",
  "key23": "NRP7jKyPcT6KPd9N77H8qXJZWTz4Fdu5cLtuusLb5vqppE7VkWKJn3T17mQs37KMUmvtWAJuH69PGzAX1rKzjiq",
  "key24": "2DtAwe72TtV87X9ZaZVsZEY9zKHs32crsNaMcN6Xx1nG8AXENNjCy6dqyL9Q9T3tQgmLmK9tys8X78E88SwsDXLT",
  "key25": "4v4C4y1E4CMv8U46QTECwgoFwmjajED1CbGTyDGY5amFrNrn8wjvmhKoUBy16ZRZBYEAEr8dM27WWCEBiq5mAyR",
  "key26": "2ZT9kif9mAtSXRHMaioszSbd5k7pFN61xAfb6ZnHoobRvmZPHg1X9u5XRct5Nj3cEeXERc8XPMFDJDrmDWFfWjUH",
  "key27": "35Y8VaPbddPmPhNnZbrhnZ9CQTAgALdjEJtqT2PN8aNH9iExJHnYyekCVcE3LWNAsHyGNG9f2XsE5FaraK67uLuZ",
  "key28": "CNRcusNpCcZsQUzFN2LEHuvLwtKnY3NrvyF9SQwU6zCAKRTj3jdSNRhWv5z9t9mY2tEFEHAXUGhKWj9mGRpE4PL"
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

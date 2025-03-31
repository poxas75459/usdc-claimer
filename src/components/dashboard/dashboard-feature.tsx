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
    "2DhVBA56KV1fmfkjLEiTip65FhURR9VyJKRPV8vS3Knbesp6rT5EMFmLxyt4cuLc9eGzEPVwtsgcSgKMLJW93SRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u8sxu84kvuB2R1uWZXF7j6N2qL4CEKLdvbe5f4nzgBAkYquWMorc79SHk1e62W3VPqkJqjfX2EyANWFiiD66DeN",
  "key1": "57b64SjbTHEmv8bsNgWYZ1QhBbETktr14icFGsBJ7dBvaF2GrymRKuUv7Gecfin5BoqUipjfDp7m6dtuMiRrqDff",
  "key2": "FhYvEiUKcjmEnuR1uibdXC4cNopWDqAHd19JA63K5xu3T8GW8qPTx41dCAJv8iWjJ33tNy5B5YYTf31DZg4Loop",
  "key3": "3LqHMZRVqpXWdx9uxMemdxFJC1fRQsuKH8ejyfBshNkBc8ea47maVywfa37MnzoVDRjznVFDCPGx1cr9WXLfmKTU",
  "key4": "4hMh8tYeTNzmzEnB2EyjiUmvXie8awgH6wqvX1NsLMgnZzQadKvDeVB579HxWPKW9xz9Tx8vhcgcAhPgm4kLS6pc",
  "key5": "2RrWkcCvFr3Bc5Ev6kmtYTNJRYxf8tmrVubJK14LQ8vssRDnwvmGsXT1VHzZrZgFC2FxQSfMxhTZASTZaarLTLXy",
  "key6": "b1LYB7NWACF5wX9m9HwDJuTRw4toSUQGKgmfuRiTgV5GqJvSkfXyt13EPo1rgRgvhUJfcaGjppPHdkjCKy15bLL",
  "key7": "XQKLmzDTiJGGeuEWNsbNrvvjL27DVygDQvxE2AWeHDygEK43wPSsNqPpDsNRuW3QgN18bHcBqxSgpegnihXX2JH",
  "key8": "3gBzmZPJexZbogYDuSegqxz845iaAy8kv7oCjVAWGk4gscvaoiVCLepSmQucYD1nGApn2rzoL2My3Bzn8SiYgvjJ",
  "key9": "58FawerUbjwmZanJKsck6F7Km9SFZr3sSyHqV9rukqKzHeoBtfVKhyvTRsKK7jMDXHP34LVCXv13J6h5fxcv3Dy5",
  "key10": "2qvG1nZTz47Ey5bX97Ww6VSLZpnvYyMdvPtNiLRL8eHHtd6aSLBTpBKD8b4MKcBtm4rZkK1xGDx7ZmgNnABRfERZ",
  "key11": "nDA4GTBE3b7XwmufWHwxsMR8ArBiKiei88cyUWuhheuzEjJnZgBwjjo61NFgEFQotEnGbica7vZHFyQSfZWqLvp",
  "key12": "mEFENtZSPu8bimTFDLBHNVgLWQwzsJXbKrKA8csxzGyL3wcyoWoMczMUWMaxFKNGYYJvwndAyT1uJqWbhpb9taA",
  "key13": "pknZh4jwXFoDiwdqNA66JDLsnjqybin5TUU55JexkezvqG1XQSWnyZM6YZoysBub5r6bdvtoTzVFrVEgRhpDMub",
  "key14": "C4PY9dNMcQra95VpEddEgMyCYDtbMBjiRg2p6vZJdT4DEUiXPhKoHPNCGrZ7u6PbpXs8Let2hcUgQKjmuHQ5rUC",
  "key15": "5QgRcjtFkoFGY2H8DePdz7nb1T5wRiRqhwLV1dCjij69vzpSPpVifnp76T4JMJL5XPVgE2pkGxCNdbsW17MdTu98",
  "key16": "5YwDMpRjknTcvfxShyCkHK3kyZ5Dr8VesdAUkLtGDoapNc2DKaNdsJVg2y6GTGdYT2LrwVCHy6FKnxEfFvj3LFgm",
  "key17": "25XGTsmPx5xGeWTtC3n8FFQiUcZGqGcgsiPbRB5D5qPZhBZbmZFEZwsjrpvLcFFAsLGVs11A6m1FfENHCWZPVUcR",
  "key18": "esx94H8mEkuMa4FVuJeoHvfgEDGPvVirfiXWDAAi18jXHVRAX6f34nXj3TCygy7pct94YdLgM58PSkzyDrPTtDR",
  "key19": "4Bf1fDWEr9bjFxCzZevm878jmrBCyHSGK2HZfhtoL1LXrPSzKz6AmdnLbC63Yf21aqSRWvMBvixWfUaUfmqMEttc",
  "key20": "4vYhsauXicMx9ZpxHiAEbi9HCoLgZt4vszgrCn1gGtESACy7tctRa47onU7Dt1u5Vr1arhF8uDrpZ5KGytZfm9gB",
  "key21": "z2GzfhZoKAH2Cp5msRiyFQJ2BE7YftgWi6JWnA4yWwP19Bvm3FozeZmTS1BdwkzEBmLvcuhFxcqfq6R3N3SqCQk",
  "key22": "F3NhSaP3idvJZf377tY5TR7WBXCdVzW7Wvyqvdyz6LNq5snbxAYVLg4cEARjANzaSrW3vgrGYsfhkrjeNruPvSz",
  "key23": "5TgQ3pdAoAGo376kawSdVg4LFys6XDcgDMvN1wqCFYZdKB5E2bRszRCo2TYScsAeQUBojm3J4hwqWYaw4SuKFePL",
  "key24": "4exPCg8vA8oh4jBtcnwiDVM4ER9PvBLxX51RwjnpdeSRwPEHJvs7n5zDwLVaKTjsureUYGFVcXAGeG9JBzakBCjx",
  "key25": "41suYBRfv3hZSyBVQ7E4k4q52WqagRPPvThzBEfVvYfEFEeuBUsmDq4auiN57ewmeruLxJRD1wjUmBEV4APks37a",
  "key26": "2ufePZH9wTF14EX6npY1RA4814f7MELKJ9m11u2dD1k7j9QZfDrry5948N6mtCwLE56yyNsDXTjUyKjnaZRMdZ5R",
  "key27": "45EAp9RQtWN5n7xqG1TDpuirmdDZq34Mqkpyc4nU38BncmcLCHeRGZhXVAW4uGTnU1QG53RYB3Kxw1FrQ9bQS6za",
  "key28": "2qqxyH5xYByLBchExTrwgUD6295d3qgTnfufEc9yRxpw3vCM9kLYjPHUiV8AMze42riGLTwthsFr7sYPJ9hDBxhd"
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

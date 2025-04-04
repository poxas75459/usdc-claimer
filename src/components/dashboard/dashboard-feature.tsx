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
    "Km2KUwghvE1DxwxubPyX7Wq9558d3eCxDP1SACykGVeMEZgdTPLa55LzSB9VKbfyD2kp3WCH2ewUDbkUi1pmj6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkCu1RWT3bVPa1LJnGKzi3MkU3pN4tvwCspEjUQd6HJpqxN4GwfkbevVp4TURPn2qGgCz5Em97DJszYZ3U84d16",
  "key1": "613mw2wjLo1rYzPJco3tqXaT61N7aksx51hgJZeVktvjYscvCWdRmfRAFgUQrzUDxLvaTEv9Bq5pZTtCyZ3How68",
  "key2": "4UriD199xnYs6mmLjWxNiuTNrazkWM6JVEUatYoYS3saRv3ZHk7SBjx3QuTcnQ5CCFPFVotHZv9FTbyZNMHDSV3p",
  "key3": "SGPwbiF8sfLoMTNDXR5KfwiK3JdSWdwPMcx3AjQcdvHDUfKqsRwc7wW9zPeBsCJRZMAzAbbmBudW4t3HeN3WBzW",
  "key4": "368hdTEE6Xs2anX2zqpySSBfCZin3Sh1HN48Zwmf5E93MGcshas3yTq2G1wDCqQtJAYdpr1G5QY73x5iuQZY6Ewk",
  "key5": "3Q4dfwom4wX3tuEc25q2C1jqdyJf6RidP5XvPWv3M8CwTxBEtXfJQcvMKbpJqNbjf6wbsEF18uCTmw5KQL2S4qFz",
  "key6": "3fHC27hVmUXMD5GDQrNsrYH7BYMnDs37t1rdhA8EpJtUUm7kUCf5zGDWc6F97LDaWpsntaGpPeiuue9KkXnfDWKm",
  "key7": "RrNAUfVdFPVJRFrt11ZH8pGm1kdFz8DyP8JrTgyNMxLwbNhEfoxnA7BKDDmPTh4dryugqw85fPiybvQXtuKsG5V",
  "key8": "2SMg2jwAtHYveMZfLFunk3hv4rrvH4pJHPo3HwVMaxs1ghkkcmDCBeR6EuDZ6iAEmwGkm9PxNHefHM2D4CgxsQ4b",
  "key9": "2x5asNeonD1Z8Bq85mCkuXB4ys3YN93yxwRHkHhyL5v6sdgEGan2RTgrVK7dFKZpYejSczwRuXczw2f53WnTfz3S",
  "key10": "4iddYqWpdurTVpuQdLpzDkZa2Sm6NRfRuiJNzSAyuFuZ5VkGdeQ1DnJREvuKvpGkgSZYPWBPHaAYZ1xTAus4ALpN",
  "key11": "5YhyHyqRUJccWdj5GQzX3WzgTC7oQoFjyfZ5SvF8YEi9WyERStfgGGqHnXtrpeUroxxqexKMY2qWk2VdkqJemXPf",
  "key12": "4bPcqZo6qqV2JkpBWx8HpEvP4jPycUd9fFLMUQwcCrEAcQcvBM3xsobL1cBYoxu35J7N763p17HyVqaGLRoQEvCF",
  "key13": "3XciVSYdgcg4PbK7rxhQH78qyXTJNixPheymbrmj8r1h8w2pJFvcrtRedw9XwkKEWKNrm2swNfXRKSosZXZbRpCV",
  "key14": "4RWQuDb8CCZAVauPeT8kpwfu2U5y7gAFLZwqAu3bYWe4e3NYAKLKTrmND8FtQZ9ofHRYLYb8NWgwBMzwbY6yV5mK",
  "key15": "49CaX8hy2BbXSsSD6wbeV9YTZgri52NNje2CnTAH6nBAJzeKsxUpmPw72TRpbHG4awRNjZbP3ZfebVgV3JMuzUfg",
  "key16": "5SHXYZfSUVMCyEtNKuudbp7F91yzvRaiw6CLjQD89cbMUGWXMZnJjQdciLN82t5mxEahKiCEhrS4vDEPkjubc8mg",
  "key17": "BVNtD2vC2Xri1vDTWacna9mFm41KkYRKgMQmX3S1d4vC8rJ1DE6ZSxrJqZEtuHwL3Km4FMK5yemzanVJX3QExCn",
  "key18": "4im6kL22h14zn52gbFpQkJP5WzPpzgpHgCivYUdGtLzdKvuH3qb4DSg6g9vJtWMPoU2GbaNAXGKAnaWyPFL5VnwD",
  "key19": "5TfXUYSDRNqiFEKx53j6egp3uKvybgGCQpBi2FrM34ZKhmNUnMj6dxBGwctxHvDnRGq1yKDLmdpxmYddHQdHxuZL",
  "key20": "2ojRdb3kTsmsji3QFc4cz5RKtJJzazvbtChD54ct4QjhAMdqj91J6SUsoVRhvJ7EmWzCtVhmuQoW2gTNcnTsqC2o",
  "key21": "62eXCBzq84ymM1vsDo2hC75tk8xmXbqGfMDoH7J9qSxPXAy1RisQ5Km5nsxrYTX8aTZ73dqLKz4Pg1z4JezmmYmW",
  "key22": "5WGYJL36meV4r3UMEVLEEogF63Fwt5ZoCoSgtUiTaH3LMLwmGqkUfmkiNW2y8ShT94Fiu8cTrfjYaMXSv2SnMC7d",
  "key23": "PLuLjFrmFzHvNMCkCQ66VWuMJuU9SLx6NDsjvmAbQwrXufWgmPEfzGgqJmSWpsS5HFeoQardQuxP1yfhCFNVXJ9",
  "key24": "3ir4FuYZvkbveYamL2PMjuC3ew4cWDAfYCQeYcic9uShBMWjFgWNZZ55bawpkqBkULWYZZEkUbUZF4W5dc3Xzj3Z",
  "key25": "VAPnTJNJZKCZngHi2sDUdzwc4v7ZpUY2eQtwy6iVUfZ9V3qDQ1pwqNXXUYgE5q7Nf6VvBhQRR8HD7gwBwUtpAH1",
  "key26": "2K6zRrwnukd9uWcFP4ubjA4Z7AqHuMimVHmS1VzmVHtyLr3PTd4noJDjn2K3YesS3JUoDpHY3ndfupPHJxZiDp5h",
  "key27": "i9dZsGMYzRsqA9PHnQuPr1o8rUEejD4xUqtZYK5ANURAzmdnaHZqaJ5QmaMhBK6S7g4EiZdAhKcpCtGWPaHNPUa",
  "key28": "67YjV4vjHRrk9q9xknicRUf7tKvoTtzp1Y6aCsYDdYwimZh91F7dYdHF63YkvJ8sXbfU5B9iGvMM95JtuDQ4AHMa",
  "key29": "5P6zfFzjqmRst8Tkiw5T64c6wyzr3xfPSwCx8UjKjM3mwbE3DT3eXAw5gRa874K95xRtTVZ4x5j9gFniafTzqhz1",
  "key30": "4LoRqj4fXsGk5j7Ksgh92s4jKgkhTRrcH3vvYLWnFJoNoJSmpFb2XPuLY3rgiAtgEFJHvwT3dEU6ksG3DsacFzKv",
  "key31": "2wriszwHTyJodxowM1ztTzs1vergfNksfaqNR1viaWw4vQM9LsXpXMXxPHv8eqTYZvPQdLrBpEF8xJSdNKJVyJLa"
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

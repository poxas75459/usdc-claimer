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
    "2hqMPPiYBJLPP9WGvmJAFLc5nqkPpr8Hy5X1sGQLu4EhUyrbTbbXD4mvytW25FmkGmj3yFuBWFZ73PburTysFtCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vka6NTZhwfBAsSHSVvSRFkdbJgpWGq3tbcKE4BS4EpSUi21G3QnhQCduu8YA5cNwwrXMW5i9vguzof8oz3gwjAU",
  "key1": "41Vvh5RXHVUdkemPdDH19aY65Z1YzRHSs2VCeYLXV6iRZZFUwSD9QKbg5MpJTtWtHuVewGmjwR7x537bkktsTu2D",
  "key2": "33Rmt2SnBfVMh6ngo5evFCiboo6xiz3E7jpSRjFRNAJWzjRVcXe7J13zdQaRiyojoK264XzA14gAvy7LFyczAHMs",
  "key3": "fSAZq7yUvCDsxNyuN2nvGhLGCj8kX9oMKrk8M4WcaRJ5dCPoMUj9JK6se1moLSfgN1VZKK8kTBJyShE4aii4kj9",
  "key4": "3PMgCYxr6K9konA8h1vhWtvsySQZWUE1cCHAbqP39R4T2zHQ38nmJGojNJ6occ514F8tcRaAFcBBpVB7sck39w3N",
  "key5": "4bhdp7p2VqLAHj2XpGedoN639xXrs6mLe62PN2GYoyuG76p1DZ3Mwb6TLBFJqp6yncr3zQC9mA9iF8tfAkoN4MF7",
  "key6": "3kKYNzaxYYZrnsNDnqkZAxYZivxV5NdjBP5KrHX5qHUAnVUEAawAZbURLeks75AL1PJ7AqXnxaLkQad4afW6hwRr",
  "key7": "pWpuxQnGyeqY2nsTUT5KLBSHLqsP9fmrkyBKdsMkZ1QfXqDXjCAjV64vbVebf4MktD2wRCN2LUDFfCQiJtMbFGe",
  "key8": "2KHazZwTTzVyQXwhRao993UFRPfz3NBDU2vjstggiSVkgvkL2U4VDgCxqSKiKeU8DqhKcsTDvA9A1MeRvvVq8YXm",
  "key9": "2cNgEDbKkiRDeGRQb7xV8bBNWuP2BnotuTTUKxpgYKfCHyrn8gYtgXPHMnj1t1WauoXm9neVTeRe4dAqgm6CpzDM",
  "key10": "3vRW4ouUhCdfMuT1mQvhfUxzqmctomPapbGTA6RzFnDgkCH6XyoaQPbzcW4Zbxsyo1QqZFNH9uujwZrDiMQtRb7",
  "key11": "64W7ak7Z7FVMdroyQw5cCR4fanpj22TnrH2Z9q8UtFVy4gH8qyQYj1qomQdSwaw7CgzPtUmhPDg3hdCvEdLRtkbD",
  "key12": "2LSnrTa7MUcyfP3YAQivs2jLfSRForFm7guKfJzLGSo25UHnNkERHGHK69MLhkHNzTjPWdDhahZkpYmFpWV63aDB",
  "key13": "3QKjgwJBVqbLWwLHN9yY5bhkEHRmQFBM63ixJ8owLwxA1JAjHJ1hkyXsSS7dXSDND4RYAVkYCgC22fwezq5W4SQ3",
  "key14": "Gs5v4znz6tvk4A8dCR9fnrkQoAFp7EeRNzyTKwB4AzoievAfv5VVCrrvXZzaRj7BAbVqwAVq9auT2DhRezSvkBr",
  "key15": "2sVPRkdxXGwFmMVSAc2geD2yYcYeLwCjvS17f3D3EfniA5VzPtfxbFj5obw1xFjmmxfaJDZYRiNzmuD7Mu28L4tS",
  "key16": "3s48BES13fDz4vV18F7f22x8fZgK7We9xDpgC4nmiB8UProfaYDQGSvBXEvzE46GG8VXfpqMuTp4iWer8jNHrAop",
  "key17": "2N181tm511e19hsWtek3nMvpQzuRjZsoAeTWWKA1eENnyLaiYbaPyvHD2JdmGdBDwDWQ3NYGrg3Vmak83fpXKrrL",
  "key18": "3rDrCSk1G54G3AdU913dd1feK7W7GcGP5Lo8Z5ZieyrrbzyMxvCntxPn4SB1ttCErutDGsiCSGZhnSUoPMZRrELC",
  "key19": "m4AzsUaXTdCr9xk4wiywycH5PSgFZqv3DMfKwv1L26QK7hVLnjE3Kfka1ir8Qs7RSNwJvvoYuAVvZUGQgrGewfB",
  "key20": "2Ah13SJP9jDqRT2qP6tH75D8MFKiv9h8HKSXhUuvUKKAPzwvb1fK5JRjMeEAdh63HLL3hc9N9tZx9e5nTkd23rQf",
  "key21": "2aBigUoDZw3TaUXjAFafPWxBxFmjoDJmzq938cR1PtS18R8fAAgkuPH1yTrKoHhToDhrVZ8uyZVzf9CKBYUS5E6s",
  "key22": "3M63LRoWhvccNdS4qcnBUTYnjU5kHUHLKrx72gvMCpUNmodtSNZCrWzS2RF2ycyrWhp6mLx1xi8JTTtZRq8yetjq",
  "key23": "FE8YLP6r6ih282V13iXxx4ufeagvQjcceoGGUAFWaMoHCe91jNxPds9HjJRdDAo6PCr5wMV8HRnzRYbgixmfyn2",
  "key24": "39ZKJH2zwNCbyUtKj2kVM6CPrDyiKyZTu89gwEhrhMyCZ7BoPyewL7af7D9cmA84MD8HCf2xeUpdJRoiegjN5J9i",
  "key25": "2kqVFLcczfVmeoizab4kmzhwcxkv3JQsDrb5cxtJYd3a9e8mVJbzKBnTRWFHWT7B24MPaLNXBTNeSAarsvqVosq7",
  "key26": "4J7fjveyBSermVt5H5FdVRyABZw61DbJJeUr2XQ3jsTqBqRkas3KYmwHdvFtpcryL7gHDyr3jzhYsurL8sg8BmNS",
  "key27": "4DrSRT9LnYQTqAwPkQRbdwQzPZjBMiY1z9Za9mTXzVeDAATAhRw6gXhvGG2CDuNYfqRMNJPXr9JaqXQptPxfeE3o",
  "key28": "ywWLE629jhUepQ7yrGGmXYaCPPsTZZyFK36ayjso9ki19rj9LV4vrrdQoTrmSBCQpDDiXjsdDh5erW8A9tTnc1m",
  "key29": "5iwSMgpvaosPPViusQn75HT6pzRepByHfqFZswureZfM3jmPoe2EEtLGe47gMX3bqf5Raxie1Gmife7t5JjPADf8",
  "key30": "3QQPcqhh5tPQkFTB6aivHwCbr2QK5ScwDK12i68ujTanZmuEFGYN82RjakpPYeWhMbPmNnpZjnDa5CboLNkQ3r2K",
  "key31": "3STgTmVofxuQJpWLQJuMpuSCg4NU27kfrfDguAiKv7qKpKmAhHDt6kDk35RxncX9uYssRzFnVM8NfT4BAMquqQ81",
  "key32": "7ANBU8Z1VWKFzNm49Li9fFicBNayr5okHGvYLN9eUW3Pxud3iAM1TvTdQt963VaMuHvqWVkiLRKQ8GAioUYYr2r",
  "key33": "4ywWyi6S7JEHANhXW6L7wZBqPGRUkbNaYsLi9zkVUAiNJp9dgk6gwC7Zxhnnf4sUUdZhEjjMV325yewG4ApfAwdV",
  "key34": "sfLJ2KibW9Uvdmn2HJD2XgNZPGRwXCbDSwfGbRB4LVab9Z69cVArQSywcWQ2VzohjHNUHub2xwHqRf9opJ7pcqg",
  "key35": "4f51Sqph22QECv6upqWGktXnAtNjpWyX5cuud7Lz9LnpLFQDwHJGpUQqw9R24QsEPrfaQD9qXSjNTaCxcUCqgpir",
  "key36": "3mHGaVsBFijGjVcZ7gpNMdryvY8xXiA7QNsaKYuZ28ZNUgy7Mb2HZpE49E2tczP6rMRiCSNUcpovdYRY4DuPUSts",
  "key37": "3N5bJDyQp2BzP8g9SM1MWQxf55mFVinYedJaWMWUPM98nN83BzEWduPAGNEfhNKTecnfvXHaEeBDSL16vcbXZTT7",
  "key38": "2gg6tBwr8y9npDAYZKGcnbjugYeSj7r96nwAz6SNN1LXNFkFXdEqDztcjQkGXLn4DWiF9WczfiExo3wAktXG6hbR"
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

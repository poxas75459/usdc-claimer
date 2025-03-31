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
    "TpPDacq3kt2RiZ8kms9gUJ1CYSpvtqC27jo2KVyExUiapQfYbufLUuAYzGMrnUbBm9oJau1jLMghUhgHyLJWcCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNgq3SLWk3tAaG1jY4Te6GVseqZ7KAvWtcqBz4oLKGd7oH5thRTEifPdSkicvoDGK5JNtc9VgNCEKhwhtXcGS2B",
  "key1": "27ogCrspndHeJGNEvEoDKYbBj7eNcmzqDtc3hHMrFkt5VDpyALuJooXSMaKAWcVHVELCxwWDVBPYH7pyVjZaAUmR",
  "key2": "3vaEVjdzMNWqhRByUpDtyUREm8cXjpMgBbUa89bJSnbSXJMQcXaLPdwtZ9vJ9YEnW8Z3oPtFRoEGGKdFEaj7AZtg",
  "key3": "28vQrenhSEdK2y2YF564ZjxwLn3qpyrfvTnoS8q6bs65dvf2vahmvycSXmsoB6fbctPvL6nQbv9HiEy6F9ZRnHYA",
  "key4": "5k1kJW11oxUMDSD97c7EQT3YTD9qaDSNHVgV1JrvCSJPWtzTZrHGaLZtWE4F5d15ZgvciHrfGrJPNybUj98nsHEu",
  "key5": "41K3XjrFRPUMKTBCT9FWHJeVwkCe1VHMYLJnuys3pyBstbU2Sp58egRrfCGXycnsgfsWZLKRwVNAbu1J7UEfXL8T",
  "key6": "xznrk24uu5uvkHsjAUZEwxhnPgTK3u6TsoeZYSUDz7HV5ZDBJmCNTqSbPBeno9FHxYMcQbrAMA6mzjXXzhF54MU",
  "key7": "49DPNqBoaGvi36J6hZEhXkUxmifA2kgjRPpXPiSHfQe9DjCGibNx6xzmtZui7WiGiw5mKZRTEbEbZ34bE15qHsDx",
  "key8": "4BxCi3GSyJqAgsTPMKutoHzgBV4yW7wuY6JD43VbXPsWaDQWW5rjGhUjoTRTJ5AcLQBpj16fxXCHgw3hL56CyqDr",
  "key9": "2r9XpnWtRVSZiKJkTG4ea8Wjz7KvQRD6MNL5NmJgYEESaHbHLEhExFFrpDRaQQKfqC1nn4BWw4knwzfzeGqKsqxj",
  "key10": "5wfs9mmVw9ETUqTGRkg7V16FjQkEc1bHFvdQa1QrWUGnPWn1PjRzbowWSGuNkzPBpsFdiyDaJLgX8tmGTyeqd8KP",
  "key11": "3H9Mff5XiYR3YoMCggmXQAXosj52fzvyxVVeyYKonhGMTwx5qmZ49oeJTQyPZfSjroC6hDSDfxNZHDC9SGwbYSn6",
  "key12": "5z8ujpDEaEzZX5FQsoX8QsTZg9nqQafmUqkQohwYSGRKcfNubPVTKA3PhzkhGGoVch5jkg1b9d61pL8CntBDBvK4",
  "key13": "u3LWYi56uecJYK6rtbF6RgDsuShqHFsbbkN1JvQtfLXmkqVooog5C7YzG3G86vcp4emgxV1CyE8mGneSeaYMwMZ",
  "key14": "3esHD7WS3uELBPkvxYpUDNKJQ9sznshYhorordmkSQixXQp8Mhe8n8VgB3qHDveP6BRuBVWCpjVKuyLrk5W4XNCY",
  "key15": "4AFtxZ6YT56Wvw4oqmwsUCaHycmK5gVevtPqB94xdjANcjyrxJ8hVhc5Nr6uvtTgGXcgzG2Qb1sz8SeexG28mVro",
  "key16": "59CoGXcPnjrnUTV1YCswWgJxuswtmN4PqzkvvX89dG3HCdL4S7iBP5SYiKGKNbmtcBpjACq5ikdUHMfiY1gzSGGv",
  "key17": "3QFPriozcCF9hHpX9EkgaseLXnDAcvhZ7Sb6zj7aoQWAwogk7MZnHxmkbiA38UZGw87Kc9WrkCJfS91SUsUrvXv9",
  "key18": "2ppUExSUyCb5Je8388nWRdJYC1tg3AKaJD7REwKPnodsezsYDMT4z9DZynXQ9pq3yjc9asC6LnbSWnK6UVuGFqTa",
  "key19": "5pKYLpT3NcCaoXC2Jm2LW93eVTRX6FfGukUsoVEUohTpicvuF59w3RMMmCAZVi4hpaSahMTHjYwDGN4x9tk61LZh",
  "key20": "64LXUtvjaKfMeTtVZUM5HhQw5TVvvgkpeVMFnxUzFXCMxgQ2uWhV5fcKBSkkzAurrF1D1XeNwHUYDxAAgorKmLc",
  "key21": "4dT29tL2zzKt5mensvtrrSnHSurA2zs7ZeR9YZQ9x1eiWmzNYVDGYgQ1ehNx6RaiiKRV4CvjL5UpwicYCNCHVPx5",
  "key22": "5CHBNCz3ikqUzBuVVXZmquXdqc1XUCKD2qrsoo7Yur5xS3fgYEXnHBegf4qP8LMArgY74Df2z5BJTRFN9n8tqdWV",
  "key23": "ykL2cmn1vm3X8YAFncj2C6xKUYZQ3QqfpBvuwmY2YHsJTBj8cBuAiGRQKENBAwYsSZJTgw1VcqzEdJ4sFK48pkQ",
  "key24": "UiPLhPh8BeQfCdgH8YSrrav2rSWT1vCtVfdzgAVf1EKW7dzTbTdu3Mq3kJDGcj83WSGUgqnoZPNbc5ynM1QXQy5",
  "key25": "5NqmUvNU4dPMa3PbHHk7hGJ2JGd3mUHaEF1YDLUUWzqD5dPWC7ernPRvoTxD6uhaTwaDFF5DeaSPJQa17jSoj1Tj",
  "key26": "4JKmgrvFduXfFQnRQnGrK3ff4Jdvqh1aip5p9RbRhbCuF3PbMYYJNR1yYbRzEv7zu5a8MLmzcvmxuR3kW67zsmnY",
  "key27": "4LczhDBAJF28VgATxS1oTSjx3vYL6pMPFgstgeBT7C4w9wHNapuBNhAXAX9VzxiVfnzWuWHa1LPuFnXDzZ2ubCVw",
  "key28": "4mtTgRUEn3NVqMW6eM9VhhDxM73yyNvcN9ZDkvQeJyyoW7tNvYsp9QYv1miMG4DNStP8H1Q2vTCTyQxnYVAgxA1Z",
  "key29": "22JwH2bDHhCyZ3sF3NoZPx7pR2X9oCWAmMrmtX6cH9aBtUrwW1pSqx7hr1ET7hTjdZpofp8z7a6u88KfZNLoxrC6"
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

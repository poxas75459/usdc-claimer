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
    "33MAzTnpXr8CzXWqid5QdbAZTa3FenPVkAmsw6T9vNWseyZoMhf8YBbXTuQuxKwC5UrsEYZ4LQZtftJT88VCHFgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbzZfphqm1P5wK1ACpdYcwYqoNRQMvMUfTVq5yZFfwqTLrD3c6UyzePLhgvvsGkytpfGWc858bG4sGpEXhf4bnr",
  "key1": "6hXf4gMFY12wqHBgeKTP9kL1jB4g9zg6LZXHbcEHqBDCHYe4Hwjfxa1pUhtaDpB9Lmtr41WUnSKZj8PMtp8pmMR",
  "key2": "GAy5Z9pd6LX976s9Cs6SX4h4M4d1bJECdaM1FnYNpgHA14FU1WdkUPkZX8VWM135uTK5d5jsV9oViXSc4jpbpJM",
  "key3": "ANhYoxdkFbrX82vgQKYMMWL91VrKHHHVVpHkD47kfqfxXnZJbMYai6mrBvojKt2sJRwLJh3uuvtpe82eBcVGta2",
  "key4": "4A4VTnroAZ3kLPc5ZpbFxzwZeBPhZRSyaUhciWt7uE4BjvjibAXNLMzsiqmhiBTEbuaaKmBaMcDWKuHE4kNZUDNS",
  "key5": "5fhaYMJ2Pjtc7B1kPeogQR7d9CfvbuQHsNuyVu7fp1JBVij5k8S73xydLvW4F3A7rn75TrSTVUnSsmpeX2vcRtVy",
  "key6": "3dEv8mXtJSwiCFMpmc31yM6UA4tUYgRmXLw9JGZ5z3Ldr4rB6B2JenM4pYG9T9g12ZHLRTCcR5ZQVpy6fwyzJY9o",
  "key7": "5Kp4WhttmFwLgQv1W33SXLfwKewzWMwwxFWBdps8eqEA8iSftPrxaRCJwwTRgLhFExK2JTfzfM14EBvZi1Xdn7pV",
  "key8": "3kzLegNSxqbT1a6PmJnui3xtzvbiznFwA7yDdTSpsX9jVkqVgag99atrFyNHgx3yVaZcUebyDqeHSCeGZAjbrKs2",
  "key9": "2nedFVUzLaxPfy3nNhJDpdNWhxLHXye1RuKboKrvEms2A2Sny1DVRXT78AyR3tGyEBySuBpmBE3J7HQq1PnKQjeU",
  "key10": "3wxmtDHBLyURnn14UdR6uy6YHcGjvxwVA6ueMQTdTWQvtdvNL3NbWUsbBVEZYqsduscAZ3kgQnkKEu3aBXJFfJnK",
  "key11": "3ezCqUHLdsCeVehpBMtCC4nXjQ6Kkyb39v1LBeUb7DV9k7nh2RmWCu2SSEtbjeFQYJQPMo9fUJ2ZijGjhbYSDAZg",
  "key12": "KVmciEVYkJDV3hPB9pGAKjmVwte7LB6cXpEX5mwGT47yUgS2WDXidpa7D79nHtiF4PRSukFZQbFa6fYcZVbRvui",
  "key13": "2QNTLsaSs9yusGovLh15RDZWeG3GvUm7L6D3DNSXjym8Ttb2N8YbgJFa3ULKnnHcCdbXNatj7gtg7eg28omxPmNH",
  "key14": "MfLo2h8hqw4CsmVXghxCJVYnG6f3cEUhn5V41HtVSci2HPgALZ6f8mbptX8DqVpGzvbQeitQRuPJXWhTPsJAZNK",
  "key15": "4KdmuCWWRkfPsFhXMWt5eZ2ioHfLAHjjREsGz5Kkt2AGtX6AGfPUsnzzE5DnqhNwc4Nwyo7LsDtTKujvu7Xd9PM7",
  "key16": "4V6LcYaCmiDgHbbDNscoKNaX6yoQemr4pm74LnNzj38makzhbJLrjs5RvhEDpjG6CkK1y2GuXLVSCXU6oM9kHrQz",
  "key17": "jwy3EzWriE9NbZQcN7SaUcG4ZSkHeyPgJigmacvUKfLErKVWoc1Xt3nYAfSoEpqr1PE1mW9TUHJgvA1rF25RErM",
  "key18": "5pHUVafWqH8fXKMyKmSidn3eKrvs2xSGMubCy4URHgmz3Vqh2Yu6CrLAegrpg3tadaLPpA288pXh6qnX8N7ZB8ru",
  "key19": "5Bc1xo6cu3aQa5CkXeUjD2rgPxH5peQLdHpCuRrMU4rNa5G9yNotALDA3hfuv1cYVKw9umwGME1tKFezwNrN6yGT",
  "key20": "5FsDHZ31srh8AYL7agj1KVmbzwJ8TtBCo3a6BvJghH1vykxJnT5nzgqnuuWkntKCeHjfkPGt7ZBzyAYD3ygaYVxi",
  "key21": "3FdokjCg5HsWaHfzigFwbQDoDiRFpBC7MWwz22TwfcLridsKSErE2bjvPoGqkmfN4Fb7yyJZBdQ2hHQfPtRW4LrV",
  "key22": "3fdprXK4R578QVVFPFxsU3zrwKPFgURPz7tcMLcHxiUEydbTGTSmVrxSqKXBsU2T7auQXxz4otK5Lo3xNUTeEwmU",
  "key23": "587KL9FGoevZ6DaP1zAbQEFxuiF2pqZcd8MSKK7vzy8jmsYHBzS9bZz2ed3be4RxKQNe8NVwbXzbuUL3jJ2KF71r",
  "key24": "2TZEMowtnAwXwohLnpYf4aopvioz4LgXhBvyUAS4rtXD4mxvqg8cCoDbMKRtd7CqJNY5y12AhTJeJv5bexy4uDT5",
  "key25": "4SnUNrScMrfDeGXmLhN5NtkWyPFB8BhRMcDwAUERAzS5NAPZCJE8PejYxh5ftcV1TwCLfP3BJXCkYZhbj8NHuAbC",
  "key26": "wY3Xq5Dya6JpppJYD32ies8zSj9PAEEDvhX7fyNc13G6cS2ZDNkdFwPqM3UKwGphhdSN9ExxDiqH9gwDTMdjNct",
  "key27": "3MdyEAqnGgzGqhNeJpQTWM3pJ6ddPwaNTtEfh25u9dKoeksjpeeEf9dsTm4vr5EZMNDXA2EkKLdUmJ49GfLNHUo3",
  "key28": "3J8YJ8mLjRZYhgSd4FcpJKsvTvqzNsnYw1z7rUxikFStHy6apNoxKXPCd527UNgWWv5oMmZ4yVcaTw8CcHTk1yJw",
  "key29": "5nK2mhVoU5xEGyFd1bSuZ1FiFsPVBkdvc3ZEcfzTCeJnaXGipCyFwN68SXWkB3o3bqzPWF1Fzn5nRKzCZem37Gaf",
  "key30": "5gLgUETWp9hj1qZCJD1Tigaqtf36qBA64iDh6f3gayWAv7c4hNXDi13XwFaSpipBmSpKfgpps3tYQoD3XF94Zyt2",
  "key31": "3kWcH6uA6N8gxwViHMnKQbFrGNsdKf3oVNpSGKuirkM9oW7vCfXcvjKm15ivsc3yzya5dHLZamQRfktruw6v7m3J",
  "key32": "2q3S3EiX5n5BjKJjxhryre5uhYhCya8yQes8FEXTmUJHaCv98mbqafpcHrDMXWizwtZjNVJAPftqdXMAz4iiEwce",
  "key33": "41H4nk16ZYkbzGWwo4tVPqdKRp3Ru51DbA2hjGG7x6WSmFxq4dLFQqEFoMo4Dp6BsbtrQptFnSQVHwpcTXqobeZ5",
  "key34": "5g9b3WPZjGoAFzzppQXP8yVKzQ2BWKY6Eyqc3pJJ8yGPAonfUvprmrQZab5Li3vVEUnUra2SEcUqZLjaHAPQBLfA",
  "key35": "4M6sbtDv5ytEVtBYcCmZt1MPYZPaioYjGrMpsSXfvgJPutokfhVtwcsDheUYd8cN9tCA4z7iD3EcK72nPtcGGLbV",
  "key36": "3mVg43wQXtFGVtejiaNn6iDJzBH7ZZK7yUAe81CfHK8pfLnyquYzG1KkK4TimArpKB8PuMQGrZzVE6bzTW592k6o",
  "key37": "GPgh6Aq6YjjL6qGE3MSnhWZnZm1Wh3dcYXPxFZDhdzZrdNcUbxPbwKGBw24fhqitkUnGRzSxzA4d4iawikxCCw2",
  "key38": "3WLsUVco8qZo5SpcmjfhZkUTPjrfHKpfUZXWYgUKvDDRiCuJC6TqzR5ijbgb7cQ5Fby4h9rGKUgFjfmMV7y5q4eF",
  "key39": "3e2Bwrg8mE5wbYLRnxJrBuDRwoBQB5kHotRKVZfuCvfBo1crjH9tEfuGZNjWib44793ZRjsJqrKsWAtX1WRHW3oj",
  "key40": "4iWhe2wYkXKTsA8kU8NdhyyxRLvX5m3ryQDsShWX2vKmSoZYiDCpWaz2FMaenXvNbhEn3nMECyuQZrXz2U7i7U4v",
  "key41": "2n7Q1By6CQiqucUk4P2dfZbHykpb82XaqaG3W5isjhSvFgbkEbefiSBHzYBUgCnyuRS6aVLwNTHAUoiwoz9u1DbU",
  "key42": "2TcYT8HD8hqw9atwrC5zCaH6Prz6u3meyfDtbcPaEiD6BAeG3zuBd8MFss7sRqBAQedX9PLaWaLKTYB24xSTuyLw"
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

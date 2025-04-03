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
    "4nh9uHktQFyzJwPzvYkcJvJF1f2FEobPWgqVWhJHh1hgRpFqf3P6bsMLPMHAtfuhzmzjXg2XboJAkPmvv2RN4u1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V6LfnRQjKMe4Yzx8VXYL7UWiL6nQf1aqV4bUCZahnXRP3cABaGm4cSwtRqZecCJRJWVZKHrBRjogYyHKRGmiNjS",
  "key1": "63r5DHyWc8pw4wnr7XyBuUfY7HcSnwfehTiTDw45METNBb93DZTDPbRzodxMw7r7ozfKvKRZtHFF5FQJkzGDohEu",
  "key2": "1ZxfWJ11EGTSe1bzCaExqjRMcu82F68eFpTq9evNSnsbvFaV4hStdws1abs83zhbCg13aVaLXpHQCoGzwY2Z7yi",
  "key3": "4unbvt8Hd7p3RzwNEmrEw9KbGbvVyBdqaCDe9S9CRMEQ27vicUiMvWje6JAAbVaaozcfrm9Gm9gFQUnucupLMbMN",
  "key4": "2wPSvdCnUxPYgW77mWUKmS5guScQ8CZkHUM8UfwrD5gNRH5BMz889QZe1s2aTDLH1ETaQNtBvVfhqp4mwRZBQPXr",
  "key5": "37CcVy8GGuNSJzAzjeAqtp4zqmiSHeyu6z8fNVKkRaCCThc5aMn5A3ogp7fEfc4qCwp5vJXDfmNc4d7MBvnjy5Jm",
  "key6": "2V69ZLBCFvkge42fgAtfeKjgN5rCRkGm74d8xvE7ZbpSBEpUx5mrKrysVxMfLFGawLZY5tg4mUCnZq7Fnzq4K96r",
  "key7": "2ESzNcDGjrauUonZTTqm97XXTa8vuHgMGnxCd6wMXQaYfYTbKKsgVCHHwb51fbLt4HsySj1GKTWvpAV5nHY8PfkH",
  "key8": "2HgdFh8YCufbB7tZiG1a4jNJsWDjZtYi8AAr9VLL4o71NL5HDBs89xVcwAiiEGQfYANa86EDEam76MYCuHFu8Fin",
  "key9": "8DGkmCEooByaHdyXGXXdcQqD2uYj5b1ujfcfqv698cFLHyiruKctHrwxDqi42sw6okZTQrh8tT3pYedwkRWRP83",
  "key10": "5dDqBa55nMGUgaEHqNSNtEi9gJqAApgprF9Smn1jqowDGW5dPeZes7yCUPvbsMBRevim2EVNfRPaddPGWpkmsira",
  "key11": "3nUNUXWdc4V3WayDkBUMQRjCqua5c3kh8sDj2mPdHS85RRXoJny1B5prqm2vzctnGRcriNwgHgT2J6eDbVTXj6f8",
  "key12": "5GzG14FY2AUDyqTn5TAPvUHZmVuDfzxSaL3qM6aszozNkkM2iVuNKRH7ZARQBTvZLZVTBY8MrmhKCGgzyPb2FxN4",
  "key13": "9uX5seekaX4wkrA56ay8tTg3dqXUZH7bvRVWacW5omevvoZmGxh7VPbtHsTVNDJBvtyuv5Xz3B8mJhcKcJjz1bh",
  "key14": "XarQeDFn1cELWrbkPwYEeDgnsRqouwyFTV3cquQjPLowiSjLyWqYYQ5radyqvBW4oMw2J1jThUs41t4eiyHbBCU",
  "key15": "5DJKaQiXoDwbWrgbvn5m2m2Lzji6QhDctFB46eRjRzuHW3AVwEb1GH2Ygofe98nHAgk1vF3Vs4QMQkhUBKZydbzy",
  "key16": "3X7CyZPhfmKsRpoDb2iUHTMjiMWF3Kv9yhH1M8AH5a9etkGvVfx1R95KBweDKe6xCWVNFp9F7TFijzUDVPcoD2Cm",
  "key17": "57tMmpRGqjLbkMxDzQbtWsLddtjPQnzYb5CxaVr5qKzyKbneNzCsioBe8q4y7mofee4KXVoL5G2Cy6xLsQ8NVMJn",
  "key18": "4ryCdaJUtHqpwjizbeeyuVc7iDAkvD8Bf3ChVtgpeU6BHfGYV15AjZeKCrwidKk46kVxxeFC7KvGEWHCErd3VySz",
  "key19": "3oDBrziBFtmRxYSzSs9mjLnL7ueoKgJuEvzdzbMr812FT686reQXz3VHEiHD3xyoKESpqBP7Vb3dVZQkwecnRgKP",
  "key20": "4T5wA1Mjdm3jbCnpMyPHKSjN6ynDCKs2nVy53fvUJztccKGmXCxWHSnjWknHmEbRiW9sG4tNVET2ZXw9zyeeAtb1",
  "key21": "4SS1UguGvNi1DhTFV8rDgKg6j2qF5nmjw7bKFFckEQNGB3Qk12Q9NyWsrnkJP9vak3eNuAWRovwsS7Z1ZZjJMwsp",
  "key22": "5ghdwnqtqHrri3fDyrXhCm61bsAkbNe9EtkRdvruiwMHg7obdrqpJtNnuMAc9s4KbnBsRBnRZ5uATpuwhbzTcFYD",
  "key23": "D1XttsxNQfxUVc28s8R2y7pSHiPtDyX1aJbmFRKbQgkvTeDSVkmtWAucUPTnaiyBzHabwyhte6BNwMDnUGvDYMW",
  "key24": "4QQxktsQBSow4fGxYXmvzLUsuLdktRnNFReD43QmfPPjNrmaAccGpKBeU1f1AVvFnKq76s5Gpbwn6PtBisztHbcR",
  "key25": "9K2nQHCywrPrcsqnL9nDxdMDhuiU5rd2hkBoq8zyo8FjKgnKhj4sUquGde3Ya4hjReyWzfFbSAzHrdt1xCV3rUM",
  "key26": "5iUo2govP98ur9ZiJmiSpEQkdBUCfw96yRXX8QVQZ3miKfjpuynt2ULBFVzmTY71KM4Wvm8CXfZJ7PfPuHWJc5A",
  "key27": "3Wh759bustxtk1QzrCHEyJyw4jDXgDS8gaLov72U4BDW5XpGHKRV3rsrGmopMf4NDxoBC9GUdLbJqa8NFe3EowVM",
  "key28": "3K8ySsCa2PsnWFefswBmeEUdmuZzbf9ibCHds749uJawdR9f5vX1SiKNLasFsjwAucyoKCV9xmqwY9QGydeQ8tZf",
  "key29": "fAamjPSAPTEkaqsZp8Xk7vv8JpSUaYTs2pWvvFwLuVNJfNHt5EBh7xgTAm8VRDNyHGWoBBzEXak2n4W4kF3GmgB",
  "key30": "5JDqnibsEbteyTJkQF6xhL7LkYNf766gwoAcZpHwD5HAKaDxLS19PJZLP9tub1PeEfcSHEYjqHPw51b1ciTkniXx",
  "key31": "4ppKLTYkxbJCfSSBWr4t3uXZ1MzPA31g5hDHnEFshiLMvyz6Unqo3U1bsGBDCyXiMVQrzftQ2JhHQQRPV8AhKJ3w"
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

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
    "2kYUCk3adDD8r5QDM9zAkABhpQfe2gsQExFUurzVbpfDuLEVnjaukhQekN6MF3bk8cXJmmecCLwNBrX5mDwwBZjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QkAFj7FhnUYcuAw1qGHKkYfGYxBKnDzGygDiSyJ2Tyabgg48Ph7aFWro94gP5x3dBNqhNAuc5qCgBp5v1CvULLs",
  "key1": "2k3DVk4e6iXmtXKoZa699ZTDAyntZyasrWJEQnAsp5ewnPqL8Fzw4hn9zsdtPuDo8PTBVAxUa6Lhha3oFvg2nLxE",
  "key2": "4phHvBFU3rRUaq7rFRqSZCDfcKs94JdgAZxYWz81GZS1bPuzugrHQCuUw6tmDzjDQ3BppL8KVoWrseCNAG7Btnjb",
  "key3": "47QnZ6KrHjPcNSr5jRVt2nN3Vsuo9QcaZaETgjSaxS9fSNv3iHdfBw5BQfrG788mrwsGD2715QMSgsWTfc8eCgQm",
  "key4": "4xK9uq1WSW1YLW1C6pMCaKjFTd2rFe8E4Rd2QjrRrfVVFu7bbAvanKA7uMYoqYGN3LiAc35LFrjo86jmypTvz3is",
  "key5": "3FcjXV1S6PF5ysQdsPgsHxY27HdhtzgD6thPaSJDGLvbHYLY1WUo1B7FrzXUkomAXoBjJubYVP5xpkEurKmH1U89",
  "key6": "4QyB4g2UaifHFne6U8rEiCVMazrbjz4e4qSGsGWyLZg8e3gDMPXPVaoy1gu8RfW6tMWU3Z2rvdNUwxY6gP1W2vA",
  "key7": "zPXv3PEQybdthoi3Sg4uoQG3PB2nFcv4o3x2XF8rymZrZhDpxEEByrSYDMSeFNUQ5mSbRfNtoxzpH4Yqo5i1s6s",
  "key8": "2XXAxRxFKNVB3hiw6U6HRU3dWmW3C4FXyrpGv3apZHcnjwRbKqVWHV1Z4XZvReseJTJS4EB9cqmquJRDcBAxsJ1L",
  "key9": "2PyXimz8Epa2WQ3efwXEp2eQtyYF8iUE9wugrM7jvxn328g7MnvLEz6dkdMXzHH76dZdaZGtDxomSLPFD8jvbwbv",
  "key10": "5LhXyPnrjwuyyKT3dBduTRKznkfZJfdBtHS88owPsB75W6VxfLKoBZSj1mEaiTZEdN2usG7MPpwGH8VyJFY4P26R",
  "key11": "5e82QbecMbziLhHpb1Qe1Ndx81XMsUaMKq5UePekReRVw6hH2M7Z3w7VNdzZUyHkMYBTozpUebnbCySkYA43CRhw",
  "key12": "29Jx8JB6Kr9yyntTcLxMF5Q8eyGL96TouobYnj5VeuBJT1zDHruxFitAxChBN1RJmqFjTGHPFQqU6Z6LfMmyUfG5",
  "key13": "r4ZKXTMvNnVQisRLxtDrMmFufidjA4k7StyUV7jsvCZT3m2RU7oqvKquREQCT5YXDeQoPjkfisjPFS3pS5VpyvE",
  "key14": "5dvN768LKQMJY2fkPpKqvpYtVqyNVppebeHK4zX7m6G2zfGYmNSgXNfgXxsyy8NjSa8PqqXaLjU9bjUfCFfGXEtu",
  "key15": "3Uj4j4r87ibcqzxXd8LH3Lq29RYwEQQ2vJo3HarLwV5gSG8DTM3WRwLYbwxrDJd1XSKBGyiLxGtcQeT6ZP9PGMfj",
  "key16": "YYdV84H3E1Ct9qVoq8baaN5kDMaagqxtboUYzRLHeKRwpYT6RkZVkQr5gmP1LixuNrWSZ5yX8j1qJ7HAhyetfMP",
  "key17": "25jS7XVRp34LqJ9fX8Xy8qng8mPd3HnSF6rdw2x5xACzqSht8GXPua6w7XWp8W759uyJdMFw4UjnmcmP7y7jMZGy",
  "key18": "22sNgkdRwHcY3Tai4ojDMYkrfgdMF4mckx5cj94Wmd8MsAJgjQ3Gd17wHc3r8E56V7r3gvtz8LbdoY7mTormFDGF",
  "key19": "2QwrkDPYEXXg5AWcmBCvCMLJmJYgW5JdqHTKJgVoBrTGh12vK9CvvQh1MLBkYtJSpDZ1cpnXZF8YccfJjdmVwUKX",
  "key20": "4r4SBiMwqNdRHUMJGTPbjqTnGkiayBNsySoaeCQY6p1DuP3UQiXz812gGzQ6cx4LT8e5KnMMF539ZxcQYTmBNGkc",
  "key21": "2SAwp4f87EYAR2aBy6MGHqBrfymumbPcXncYLFwjKG9B57iwMV9nwWpLdSfHXCgHvqMSt2cmsn1z7GHMSKNsjbh2",
  "key22": "59R2f1PD9C6S5XKLT8PThf1RJhFkcQRpz2xTMryDFmfNKEnb9cTLyjZCcGsVMEP3kgbReo6VeS46bfrrquwwahDj",
  "key23": "4PiE86SwHJ8FgqDsf6aARNvkohZr89HJGYr4ABgtfQrjNP1Kd8ptSkJY41LcFrk3WPZniSeg69BvABpv8zta4oww",
  "key24": "5sD6UVKZX37q4TKT5ZTnMV2qe6R3MTTQa2PuNRDbhThmuQ8Jdwo5eoa9u4xt2hLdyi9XyBmmr1cLEXoaTmCiuKaD",
  "key25": "2KdgQd3tmKDftcJMsnk7kYHXUc4Zn9seYdxD3TxqhZ1vTT8Ag3WHQAdKcWCNghtCHmkCewthZ49JKmYUDu9wULZG",
  "key26": "535DTVSzxVg2YbUaMsxC5E3JttNHgs9ja784TZ92nk5B7KNWhSLuJ7bJwjiQjApx3D2VLvzw2zC5ZxgPp5QUvneu",
  "key27": "vW2TNnBkkxtcuT9cdMLhFP7n6FZqipH3ebzEfnLebyPZobcNdLAVhmzSXzqhxwuLronAdQGGqeLdeVxJWRMWw6v",
  "key28": "3sdQRUZZzTQjhFF9QhMgXnmSTxFhuzTwT2XT7oKByQgXf6HmDQ9w7hW1RWxHg1tQmCrswfPSe6FhAhTaieULskrJ",
  "key29": "2MMYcoMZdiKMQjb1Ku9WKa2TFGM5iUsRX7LimkLszFVddGY9uAMcS3PknTBvMLmcDKDCree2HyyjDA95KKtvo2n6",
  "key30": "42YQR8PkohW8fHs6jwcMcT8sbgHEa68bR8hDVcdfyc36j9oFdLCwgNBZLQ6ZqdNMupP1qseed5QEHBQQ7qCgk9gC",
  "key31": "SdB5ohFhNpoFUB2uJXLgNpfSnaXnsf2EAZzcv9qqZNMJ4mrQ4dujgkLneegZ2oDv3VwZxZ8ppGTPtnX9YxK8pM8",
  "key32": "4qmRv1aUgaMPTu5k9qUW12aoE1SmyGHzFctpF9RyrVxqgY5jfgJAzTpSDmie5NfbP6jZizKsgXqvVvZo53by88Bp",
  "key33": "5xzLXkoQLj3PCh4wk35jDux1tfu4YdT69KJgrDpciXW43ZQNDfKgKEGrTz2WEhMzHixbAbh5GzebVmok81MAgu3Y",
  "key34": "54cVBXc2Sr8fVrA2YBQ3vmEgNz6Y64BFpZ4VCDSachgtgoTGNkxHEbfP4urH4mU1chTGxsn2xFByAXg19AvU2F3o",
  "key35": "64oZu4N7b6Bm9wN8PiC4BnCwE8xyXo3VYm4RPHwu1BUDZgWPbdbsFXsGgLFe67UNSJfQMjQMMKkkjUoW9rbdi2g",
  "key36": "2MWWnndM2tDkzXEq5a6MhHCGCc7RM2PFRM2TNWBWBts1PHZXyJha6APmKBzdKctR6JMkLda6fviBJ5Q5cF6WrSux",
  "key37": "2YL588s3itBYjiymWeTs2ZnXMPte9rEhG5H7HvdBFeccRkFAQCYtymkKxvyGwPmbXABKYvqqT6TLWvGwyy5T9rnY",
  "key38": "BB87GoQTuYJoAvaShJyK67XS7SZcM3khaxWa89VyR3Xc3tQst1GUm86kZKrMV2eAT1amWw9t1xR1Jy7MsEPpcch",
  "key39": "n57v9Nruz8Wm14569RWE6cC7XFHKrqXGf5NZR9fHe1CZGtnyMwdfqW6NW8DaXDQDrWzCHoV7YsBC6xwS3QknVLz",
  "key40": "4Ji2BXiUgbPLYkegwjftkspK6mYh34pFNai9r5Gy4XKs1QD8dZnsDxbit54pSUmaQPZj97zgfJb3vXb8GfWR2CQ5",
  "key41": "uxhfaqwNB9wLvqbzRuNkDgqviRYvpAeAwFy3FjDPvy18WzEsqqyHUT5mjsxK2nkJ4hoYriVetZdkm1YCMskhTbH",
  "key42": "5bbrFU65La35NkbRQV6FRXxjBPBFkxK1KC3XHVr6cvvwxuv8n9UMbcqonXru2MiAbAXFV1LkVoGgSywKoddS93jy",
  "key43": "3bgFTVNkkkBWAutuh5GjtkbcmWMAL2sHndVoukgsN15KxVYgKsRLEM6sejWrWDj2br1q5XKrzdVBaoG7GHMPgtMS"
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

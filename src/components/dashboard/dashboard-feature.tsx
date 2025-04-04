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
    "2rfyrcBEBkcFVNn9BW6tSR5wXLEKpT1aBRGtzzKDBqjx6juFJ6Rpa3Su1LPWCg4YDLbcB41YgD7WNixjXueyQXce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563rNHfVXUF2w8n94pSW3Zepapq1oVNnGNSpzEb7HDcKCU44vjo9dzximpRN2RicwSBWgG6ZdVZgZk7zkVvB2PiN",
  "key1": "4jjVtRVwg1FJ1LteYXTPv72iDiih8feYuzxA6uFXaxbsPA2N4eje2ja7Soggm9G3YzA1ZoqLbNLwCDkKyp5ieyKV",
  "key2": "4zDt7DgKXhqGktePtDrkZQRNtY39ptbu9fYGQzMgfHUbd6F9AAJzNgEEsuD2w6Mfi8zXNidsBg2186ufKf1BUXbY",
  "key3": "3WDiZoZ8tKxtFJtvCYH7DCvGYBvduvfQgikv9bg4A7vGcSyAGafkS7m21b6CymDpP7WBbX2TdHMEkJY8VnP7dS42",
  "key4": "4qm8fYtFCieuTU7RHXPAcd167AJbreJLWwp2gSdyPTtGrZ1vHBCZALm8onFzcJmiYJyWc2yNRfyeGLzrDoFHnQA6",
  "key5": "qw6wjFBo7jSVCA5vzp9bYUczrqe46KNxHzULQsmLJxW5bSLcxVGmb5UGZkj2P9JQpyxWNTXDoRuBgcwXxAK1Bj8",
  "key6": "4LkX26HwqQAmUfaYqaaoVBAL2btm5FVaf1vDcjnqYXCuFfsgL3e5bSx4bEvkbDUkXYaTTfCUPquG8vBLUosSeFYa",
  "key7": "4aCVsTKmmdCNqeFsty8yb8otwyKD93JvSo5b9r7yxfDvFwostovHxQfw7Yom8iP34Vx1mQeF65caMR3D2NcuGHeY",
  "key8": "f9okvpemvMPFPznZkXJAVCVT5HRQn9U2L1xMQJXe1GJHE5qwGa9JaNxmDQDo8F5A8BC3sfRTkht2EPpqkFVUYLq",
  "key9": "gCAR3b175dha6TH2Z8z4AkVURioDNVJNg3Q5Aon1mtvtkiYVYipQ9A8HBJE7e452ttevRfBEZ6F8FwP3UTG6y6i",
  "key10": "5YvQMCjMA3pLffJt4XZy9LWRU6tULjGfCVvbvrRiR68eN8VtCQayV8YHjdQCR3VzXdUCHqRoD3r8x58sC5nMXGK7",
  "key11": "4FfjmnTbmdpNjihfS41vArVSjas8yBs1QvsXQJ7NqcGJF2sN9eFx4QymnhrQMK83oHwXBemTkSGqtb8jxcuecg9Z",
  "key12": "2oAKsYxqnJNfknF33WPKSqadUYMR2vRru1Lwz2Xihakoibf9ceWvQx3RSWjfjzYm5wHzigJN9DJBgynvViHgCcyV",
  "key13": "3eBMqtVB5kZPjEJojHN9jq5EP6ramgteGk8avwyP189GtFCD2Q3bReMKbVmWUmBgUVkw4uH9t9qzZ4dkALow1jAQ",
  "key14": "5NG611g2gmd9z7sxX3EZMFGvtTN3nXxjnmKEVC42cyo27xCrG87HiJbimk3VH9tuam7vCjUmdjdRg2Duukyo6Vdt",
  "key15": "3MDW9ENVLj6zHmsv1oVsEoUHxgqwWKhxC1AU9Fy84vrpvpYMBDXiX2Gwt9ccobsLRwoppL6Rn6HYhzkNvjwJK2dG",
  "key16": "5to5zg7hbL6aqEwYUwt3XyUEmBNYQJfeA5EGBpbNa87AeJDo3Cti5b7aGqZoCRuUPHjvmp3T8ofSbyJf83S5FgR8",
  "key17": "3cWkkQmWxffWZjEyArDq8b5PKJUXL54YFst3EHTLyGwFC5xKogjdt8DcM3YX4R9Nuceez2xsoZvmLS2ZyCEXLYjz",
  "key18": "5GbkEZCNyCJG5AKAnUBkoTFZ8o1oaCZPQ3omfwmF8pLgi5A8G2hVxWHFJSHgLpDC3jaqAjkHEbWnGF8Bx5RaJHZR",
  "key19": "42CJXmS1w8xoGTYMqRYTudeYedTBh5uZdRewSDR2HZ2GPCpDD4crj2YXkTndM6qBK2kN9cgVtYPZRivJQ1ibN4Cg",
  "key20": "5aq3UL6DSJYUFquMXUbDYMP47Rj1CMpRdDNboCyywwnXXHnB3QU3uLbucYHiwemw22gPVWQAGGUEm3xJWuDzpmQp",
  "key21": "3QFRjL8D2KELGTNoWBUQ1kwMrrDQ8uUCkQUtWa9zre4KdTmZGgC7Tg4a5AsUWqZaT8jioD1ywr7RTVupJ7yLcxUE",
  "key22": "3aWgCZmjMLvLcCwUnL8NkrLWn7swmJzGJJjvmXHX7cp9tcoMce6GCxbMogH7y9qfw2RcbQEHQpM7RQiF4KkNF6Ww",
  "key23": "5xwXWncKitaxb9QNDsQrS4eAxTcsX8xXfmUkt8v3EJULaaGu28KFmSRGRXm17bkSRYfKkWU93N7WAoaUhyN1Cn5K",
  "key24": "5SdQCRySwRtcHaFiBLVXr3xfxKcBnfufNEUpckDjvo7LWi8kEAdBoHdgE58dLHchWTorRbJ5nfD6qRGVofPpWPuv",
  "key25": "5pUu2npdiY5YLFPmh35fc9yJN3VF6CQG66S7c14rbuHEPrpAgarbpbLN1m4Zik4Athdrnj8B9Hx66ZViihX5fDPb",
  "key26": "xiSfd6mTNLgCCDHpk6bs2qkAwau5WwQqrpxfwcTeoHdGXiW6Qb7pcFEhwzZtaYXebA8czScEYtPsxgygZaU1UtY",
  "key27": "5xHCduMWHQjFCUpjxep66RRkTjMrnSrwUSA4TstxpodcXUBaWgz9FqtgyfLhanvjjuMrqXXiRYkqgoZRD1j6v6Ea",
  "key28": "4uNYr2mGwU1mhp7rXJezBQnmDfZq3Lab6SNfJF8vDRjNbWa1QxkvjJfzxhWFGdGKQrNry85otKn98h3EAY1raEUm",
  "key29": "4o92YTPdYfoZGBatwRFbNYPbKDb2WwL9yiMEvohY27NhypJJRQUSxKoJeFBFX7KuBqugC1MVeNVGDVutNAP3ipvE",
  "key30": "3n6XJkGWZzecBKAAJfPegoHYwpdwvdnnxtQ5SaGWwEFAQXnQg8MsJeE69DoFYnKAF983QXvDQC8v83oaxKiCgpGF",
  "key31": "2wdcsruNVht9kVqNpHwBcQf3RCdRzRDmyx3B18ntPoGgPmTkEJwhX6KmNbd4xKPsoBXZaaKiR3NQNEdzKppLmyBG",
  "key32": "5c46yfuNZMaCi4mugRFidG3if1sThLJ4Fgt8Z7V7xyQyQL8WYkUkSZnuAph4dC7iPjFHJPr4PfvKbJwr396nhRct",
  "key33": "3R6dpjqVgmEGKwouLn5hvdgungWSQ7Fu3xfzX5c5tXHhshizKPXEJtEAKf4JqrYz5ANf4WCv7mu7UmiC2Ei7GbPR",
  "key34": "5TPzk6TtUyyLYZ3MQTwPDjmKNXmjJhdpT9SzF3prLkgKibSoYjcCHBNTfbahduW5iMyvHDnQRJZo6LWKSs6ZT4Hw",
  "key35": "22WsCGJbLb2P1UeaFXYngSe6viriTG6Wq5d1SqkzQFDaxUHY8adpithj7AmfxtX7Q3g6ouC8SwCG4jwkSL144ouM",
  "key36": "5WggzYsNMJGo3MFJNiUniazv5GPBPjiTAQWebx8rjmtr61bhnMSBXpkPK8A3ZmPjyzZpWje9aS8JDtYtoARWpVSY",
  "key37": "3GpXwr2p5hdJkubGVpCuk2sEwqXknN5TwH8gcPHo717uHnVuHBdcwnPtEXe7Vyj72tLLAWQ4yLVYhWwRV9znmMij"
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

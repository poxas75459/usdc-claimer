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
    "2uzpQa7gNw1E47sSuarr4RmF8qpHA7tKcXgMVnDX8nwhbTaFF2g3mYarG58CVV7BtE8LFx94c5BDo9a7Wrrxr62m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ruQuhdEFYhnL9WXoNN19tBoCRTbcj2enTRKdJmzqRk7As31R4y5JssnfY1g5UPzGGLonLL1TKNfGFfJ9spJTwkK",
  "key1": "45LTBmd476AmG8K2MGG9CTjjo3Ggi1r8h1XiJWEdABZFgxhHdmi1QKVvzz2f1ZnLcUU19Hmq4xikcd4upG655Rfa",
  "key2": "2imfyHXTywoctUvKAFrksZaBsEyiSEf6wJbxrrR7e7T1GYtpaNjYh5zDXUmmykEU9zjFUCKr7HHvjH9GUeiy4arN",
  "key3": "2BSLJHWqwBeC1q6umjzFKs1aWudWz8wxndsRRrjQr3FtKP7RLTECMrQCShCyjAVriemhKpWwzDK69U2neeiZ5EmN",
  "key4": "2yCSHBHKyUKSPFHKasdb5aMDoc5H2vJHQQft879UXRbpVZbvk4CjG6iWpQ7VZRy2vojr5a3TCecStJTAqRzJb11m",
  "key5": "31gCoxun44SgQjj8Mxomv8yA3UvTsUASoouSjbtgYJpVAnRBXGHz9p8WhTnFo6CtQFJ4wrCwKPhJbFTmcLLVCuY6",
  "key6": "MnH4gq1N1VJmXvBSEjJgxg615LyxJ63KAS1KCXpT3sxu6HEJh1e5RmzodzGTqfynnAaW9wddWBjScgmyfKeThYg",
  "key7": "o84HhNcMyCgDqA19ne8ahrvooHePRPUX7T8zv212etYTij1BC8UqSkvCBYizMxVg1BBrrSXvh7ynjDURn5L5ebC",
  "key8": "xbAj45Moo2vFDFx7jjuE5ZcAErw6soayxYqf6mkWVhtKfDeZF5LyCoiLqMpRe87Z1qSnJHvW3Gy3aLwjSdRj1kB",
  "key9": "VXhhPcduZxoY5odxM2nzLYKQ1qBLwDaakkHfzNpQMKLCHvYPr82XuCSTxctrgk5HYfYif219ouci8RGVpFXjevn",
  "key10": "3gofLECFDqWyJbADj6cybK27goF1kVDBzgffnZ8ZGx66aePhQVi4Y5zT83GUijVhSpqw5QcrhvMDFKTnhdwakaUv",
  "key11": "3EnU6KC9daXTZrrTYGuEVCtNgHB6xvNkMVYjazQZwJSvacb86vT6EyVP5UYuoSptnXmLP7SrcwhUDrii3jBUeELc",
  "key12": "2fxqBZMQgXHAvBBmEVvy47sqGARs4yRb2bCgBSAHYvctGrbYVzwKTZuTcLYZFUfT4eZG99bx6HZkFX6D3VKZ9j54",
  "key13": "5zKsChfC94PSLhKP3XtgNGYfXiepRhE3SdCAi5YjQDxvqRhNMFoNxYYGeNn1fPcLqK4Uwq16qz7yhPDWVWZyR4KW",
  "key14": "2J4pWf4KUGzkNS988UueWguL2WMVk7fgV2vXAYeZBpsxkfkRjb5AtyEB46pJEkLcVUbUY2gNdaaUnPoBJTLMhVBg",
  "key15": "5iLrqXctfhR7oABugtLijRU8V3SmEwg92SUR1qTRaGLggUA2CefwJvGHmb9YWYbQM6XmCDkcFGYSimwYw4zg184M",
  "key16": "tqVwXkL1oqpvzEUpFR5Ds6feSFRmPR24QX9afH5PDiH9aNh5pqMR3bkQiwK7BEwmNsFPk7z2SDaBwxALDqFntet",
  "key17": "5WSjNbgctsqfkLH6sB2Vh1opydc2vDXBX6ufWqWekwJKFTadtqYMUSV12m44guFnsW1VQxttiLGWy7iSBGhKTsL7",
  "key18": "24YZYs66p7mCdf433LN88Ju5GVs9SjU7fio47uSnhTSt9fu2gCypHc9KEeL5S11YGpaW92HAySFtcAH4aA3kptR3",
  "key19": "5w9UStEMnGfVrMHLPVFnUAyrGbYK1rhCFXr8UsenucAxjB6yy8ueM6Drynt4apbFzdQZZKXUYgPc86xHrNgz2LT3",
  "key20": "2XqVHCvH8uWwUyVV9cY7pvBWCAbNU7gQu194vmZEaVCJdLpvH173WNY1ZGBCjdsajxwtARH9475yfk5yTenUfuD5",
  "key21": "5f2JajS8xvRYTiJSRRr6EfMJmF4dSQnG8cjQZLfS7FP7Uuc2g1DyVEYUo5sKycgY2EyvjjXoZBTswvhwCVgFU8sa",
  "key22": "3BEKvGdoZufXbiaJxS5Df35KCYnvPcE3g4qweUbZYRswSDXEwPe8v2uJtkriG7Y3ek5L84xv4nxGGzYJQHkhScHb",
  "key23": "4C8AKFjGaAprs3fjLYo4b89sn4QxjHDWoabzBNhJLDwgcmFK49eigzTQq7AjNmUHYdKDRU4fbvRDoUM7MznCfj6g",
  "key24": "tN75XJQatqvbecNwcN7ozyNjjmKFTzfjFxHkn65wuE2C8Qd8f6coQMpZQycvbQW3Hj1TZCTmEpcCd2XqgeU2jL1",
  "key25": "4cJBjUTAWrtkKu3yF1UwK3rTsCFDJY4mbuFF7ofp5Czke7nAhrpj8JrXZFb95j9cbxfVjQvtfRCahc5FRrirJUCy",
  "key26": "34d3xMDhDRcjFa55WsxjM51yZ94BBE6A7rUwe2W5fxSctTP56a7cxFYB7hTaaBqsEbeGSfu9GQ4xYqVtD2oHThHE",
  "key27": "NqMv5cdRFto3tbrC7ddtERmxMz7K4aLm2nvb88z2GAUae2o17SxTUNGu3GWqNRkGnyZmUMiqJNC53vWuZh7Afnc",
  "key28": "554pjUD6sEXHXkRrBXdvvZDgzZ6wF5YxZrGF5wmbAKihyK1o5bJasSiKSmQ9X1xmccPBdgESPg2Ss56PSsGpM5Bn",
  "key29": "3xJXyuDcFsgokMJLFWNVM5rKhTSpHgNvCrDDwprtAYRkhRCMprSzT2HAiRoRw4yNX5ij5AeKw16zRAiCfmMHQio5",
  "key30": "2JqKRSRG1p5ggrjeR9xFX99KxqnG7RoL6E9cAbWTKSw1CnJ8LavbBumsyQZyJeXn3BFLARfJeczXop5Sv4x7qvqN",
  "key31": "2Wn9XWZZaMj27rVdMwXBUWALaSNGre69iQ3e9neHZ4Ha3MD8nQFRkNAeGi1zEU5Z7MErVgLhBiD2ZpVug6ZmBdJy",
  "key32": "2ypc5UsW6nDBs8UqQ7DY5RJX4rpHGKrKq7KD2ZNb24XPFsrPQ8dvjWJJ84pW9Vepr3XnDmFfmv1F5mUnd4nENPwg",
  "key33": "2e58y7ktJyzN4bdWrSpGmVtVoBXMhGxL2dEw4pytC8DYa28ALMwS83iyR8jxvy79tUXnY7jBHUsmQAKMqKqyCeyQ",
  "key34": "2HsVvBe1bFG7AGYdyDaJRCC7xN4ioVWrUbR939mjs7snu8Yg2g5VQPSSL1Xzhz4bGYkh3Qdym8dv8HBnMpAxWRhw",
  "key35": "5pqoBAWtAEcLK4k62ifh67Lh7JVPxkayKp9cDQ9S5jftdupqdEDKKh6Uoa3bTDiP9R3dHkj85oS4ReMEtPs9QSd3",
  "key36": "1oh53vre5uMN2uYfEKPdpksH5JcyLn8V2wuYQkH2VCmyFMFs8iYeR6CNuoSF4yLiFtpMNV7pfRrRLvFdUTfdid8",
  "key37": "5PzLJmDVj2o8xmdpNCu6akxAirfKkXMgoATKNJuuupwD3wRBCRBYGu67Tf8LK7ozHhshc9zQzTPdA88FDaFQGPcZ"
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

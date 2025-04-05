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
    "5VD7gzadEdJdDHFAdL6pcq9ZZg84a3Yg3siw26hfa1LPcJ4bD7b6yytZA86KJfMZ8fuBdP623LUg2hqTx7dFcTdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bK7ygG5i1fL2CjKUgxcM1FaqgWXKpj2iJtoTm2hBGUsHHBP8f1XvX5xdXLj43JA7cwVMbL2Uke5b6kCyR4b3Duy",
  "key1": "NhueriRREjwDXxpYwUU2XtB1Ac8odQv6q96NrkjRQM6y5EMVegWtMFjJVKWuiK4EMk2V2fijgiyJsAryQCbXA3F",
  "key2": "41kE5NaHE9DGkUf6MbYCgBBfgUxK7BntdfbVtUrZBVbPRCwvHTEAXw7bw6hsxxBzfvBnPHuEyynwAAkEhnX2nVs9",
  "key3": "3MuFV64MiRa6sRehTxeaxGfjXfy1YLiTjAy4xBSyJAuTD7xVPLckHn7SzNTVHVjXJoqwfWnyTcsW6a8J5bn4fhv7",
  "key4": "3FtScA5jvwX6RwbhmyZaXuCSswCEny2aNzNgMmf7tL6Rrvu4k6EFD1ad2nHskcaTDe91KZ236BSaAMYFdsXwhATP",
  "key5": "xyy3R6izKemBXgK7rgmMoGRCindBdm553M51quF9frgYyxdhfBX52MvcCKyRH2wF47SXMXaZHEAA8Db7i1p3KBQ",
  "key6": "2Tv57sVyC4uqq9SPYq7Qj9xB4KNLQJ1miS63XBqeTsxmWVYNi65MAFHjiZ5y4e1xZFsrP7fQ7eaojjj8ZAwvH9tU",
  "key7": "3RiR2ZPFRHz4fo4eXqYGe1snYCWoMyzwv4rbAYqQ1m3PKtZdjjKTqta6WSC86H9EELr6h2rguAGvTYMJoY7EiGRy",
  "key8": "32RgYzLyxdJPysZP7TV6j8PYqkQeVyj3ZQvfFHVUyBwbK86T1xv8yPa5vkr6bv9rSM53ADZsZpzpSHnfmFXYEuQC",
  "key9": "4Z4snBZzFsBLTrSmvakbJ3uX77rH13TyEBxMFn4rZ829UmDP8YeAXCfP7WVK7JFj7oDQhjgckfoM4CD6zG9aqj3g",
  "key10": "5eopxTXKs1YLPuY548ohdhvyLg9JqqnFqSC9fN6svfQaMv9f6gja1YZK7jxiVDQn4NUr11MFp6oynfs3e4QuE18v",
  "key11": "4W1ydJ5mRc1qQqfoikRCJEiWY29PUdtdbbq69dm1VU4BSDucffAxP3CG1urJ9cp2DW3BTReeMxnd17FmB6ygW3Bd",
  "key12": "21uSYJBxGun6S77fJHkp2hMzVxeZX1FB9rrxaABnjiiZwKzJTiug486fmALp512pzj51oHSubXT1eBDLorVXd1gP",
  "key13": "5khsjF9Vig4dbeMt8ASDprzaCd9N3M9Q58Y7QyYrP2M6wDwsrwgPSaUNzyoNij2ukDCxVaMuW5RnWwupyumVRChM",
  "key14": "2DjvB8vMxM4c6Z7XGXRouYdEnjKgZ9EZnjB4zoQmRJVRm9beCT9Wo2uPmKE4mCMEegnJvAyzFezx4gYWKB787PMJ",
  "key15": "44A4PuzbZtZKdrH3Qa1hKyMgrwJ2F9cTZGdpC7MsY2YHBGxikNvEQZTr54p3psAtDLWMjruA5bfVRH5ipTGq4ghj",
  "key16": "2RMGAEh4NEfVcTgC62dr9cqf18KiPJLinbPhJFxhWFna5wMWtSZxWqrn9idowaK4MMuhzNRj8NN6FfRJEMCuqe1Y",
  "key17": "2TKkdffZSy2uwYmDp7YHNxD6gxYgsW9bNAZdcCHPfGpczihJoR8eANUhNu1Arx9Wc9tpPmeotdS7vSngSt5jwMf5",
  "key18": "4oQe1ZiTn4y9SzLZcMkgxsrKBjYoNXN2Kxgjp5HwvGTwPuDfEVLmzFdBFZfmNX4hF84aWWGNah5FriMwxcjygEPe",
  "key19": "5nBhfQGqL1tRqWc39YqQ8JqVMcau4dRkVP8ahcPvaKmFtTrk3cK18aqVqSe59ZCu8orwWFfSM6oL9pRwgv2EqVCU",
  "key20": "23xgKU7pNUV1UfSZfdLPuQ4XDfbGL421S2aNwqdvsoSZcYtUxhksgZVCjLVmyx1iGEEYnusx7zgjYkbC8wv5Awqr",
  "key21": "4zLfdXBJKTQdwvbmPEbBJbvRodyiCBa2GJaiJU8ZFrisy7jCe13GnB7Fn7VeA1NSGTpHUvni8QjCLz3hwMoUrrv9",
  "key22": "2abre755u9ckuRyfi3h8Kg5qrh38Cpaejujm7nE1tieo89hPdvGTubEh7xhCLu1cHXVTqF1h7ZoXGWvXNvwwkvb8",
  "key23": "3LtF8dLnxKdzc81owF6TcU6jQHsvhYkW6asMjgWYvn1X2QdnBNfQQuAHLUxShBCQaE286WSnHZMdL7qhW2DqAa6G",
  "key24": "93gC2Sd6Jv2G5HjK4nrg1Yxa9QKHviFsMNDpmNJ3P26ZE46D38JEipGyqLQKXb1t9oAiMV8B53ZFXLvi5HXEAi5",
  "key25": "2mJ7fdxpFVfGNt56F365vFReVXf9xrR3km1CYtRT7VjHhExmKzakmRkJTzuyKHgSSUBetYjFSrKpBqdEbdsSnuKa",
  "key26": "mhRedid5x8crk7WdaiUp4QgtH52kgvWPG7kVw6KBW2qwQCMUhz8kKqhC5pc9L5gw2mnqXj9bweQh8YtR6bwpA5R",
  "key27": "Zk9jjXjy3xWHqKips2rQYwLvq9pSB9dc7Qg3rQefj5qiwnP8fULTCavFcdrSMXJnYPW85fs4CHq2WxPNXpv6De5",
  "key28": "2ywNJUUKhq1ZpkKN4jUKzVgJbgVFKcDenusuzVtF55sAVi6vNa7ZU8AEPCcP8Gp6V5FBghCpxd68nV77m9xwHLsu",
  "key29": "2arfWoNME3uJYQdiC8WKAGs95JJQecWTXKLUtF3zx469BL2QwSqFAfUU2gpQZkKoeM3sMTVDgoPyfx44DurUQZWj",
  "key30": "3XJD9xhLZwmABnYuBJYU9VK3SJh7g4wqL1P8tobXRNdxknwvtbyPzExeoZ5avYDPo4fCH62WddMWQqe7QWV2NDB2",
  "key31": "5epA7xYWtHJq1qL6f262fCdibzL7zVTEpkd3xcHNiNcnnyFD2Gco6LwqJz7cWKmDbpA88NquUxN8Z7XV3D4PNJ17",
  "key32": "65Ghp19bmuL7GyhMsKC9TC6JsDCrD846DC6WPrxMScLTx8rPTGVs5i6Bxhsk4i919gq3UC242JSaJmdj9n1x9H22",
  "key33": "2AgG6kNpQxNEYPaABo1831itrpQ5Q1wqcNjxU8opzcw9wrEtqe2ASmqcaywqGmaZhDdD1irM7gi9HQkG1gCYyr74",
  "key34": "PM1tuc1vLakAcubftr5z8ZTwiTjH9BUtBM7zGRfN9FcXrvKfVnG4wgeGg8tsJ8woNGdHoa3Sss5dSrdMTH4CYZU",
  "key35": "6fQEHxjAjaW5uppcFdNmM3hd1mcnM3fQFfMGngfShc7c69ojrKnQv2chQHPWEU3VqzgdP3f9QqqXjixgSAi4tEP"
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

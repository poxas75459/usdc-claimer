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
    "5vPsksyEJNCwghEGR2cBNMwibX7mry2i5mEYF7MSrs4xutmaVhKbV3pLSg1ZBtcpDMT6nixC1RxxvqRJUzvCqQse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R54HnCrpBZzBoN2BJddsviT4Q4BuFXoLa8EkWD6va9eRvtyePQ2GGKBiBWD3xyWEGUtuaRameduvHfF5roc18ci",
  "key1": "5R1R2W3upbYT5Jf51By4Jk5t6w7vjfsx9YJEGfyRzLT4eRdEZQkAjDwPjHEkhwKU51tFvb9N7YQXGU8hNGrZNx2a",
  "key2": "5hPQ26g4CReB4UfzNqDEYmvJPg1cG8xvf2yRX8LUzNi8SbsuFBbFFCDWFw18CmmNDxjT8ZGr6L7oqZSHapzzWw9m",
  "key3": "3xkWNhuJRq8G2Mi5FVyLDND344y48hQAfBFQkoV6WhSQ5BaWor7xqCijK6GrrGLHDJk31yC1QVXHnk5X1D3jeAEL",
  "key4": "Dry8FNiXPhuKedsB4gd3KCC9JqJ4QATXsHZaWZU7zx6DVmn4pazYYvLENPfpYEB3YRiedrmheuyPHoaJ565pqdV",
  "key5": "2Gn4oPsvVPgy4A11sVJuVSGyGKPJs9d5GTdytQhHm5QLxBeFKTzFX43yyjJg6ZGSqgdRf1M7pNC5Z8Lb4uYyJ9vA",
  "key6": "DmA7sT6XiHaQxTnxncdMvKx9ZbssR2PuSFnm9KQKv9ce2JkwBEQKSSnUrou1KkdfcNnUNebWBTBfqBFYbAtZt2M",
  "key7": "34JSUsSLhCHw1f68aryYtzwtTiCotJ4Jq2G597rX5jppZ9Ud5YtmVCvHZbjVdYSzbrkB8dZNSmzd1mFke2qb1uqJ",
  "key8": "2JrwYWjUovGUjKEHRs9iTQpnokHEAKGifc7Qa9Q9gF83LK5bhLEf4QcHS91qxcp4RHzkjAwEmHwukeysgSZsvr93",
  "key9": "woHGQcz2TXy7yptnTZ4XwwaaqQQ5jh2iNCtGzFP99ZPsyt8ixK16Ue2dqsaUzZiNxEg9BCcfePmLL2hhWaoodNh",
  "key10": "2fu6ExAsrN1Ps5EB597xheEFNUhqLKhWFDX8E62wRcvwGRKuUjxgbez8HeqiwKzWMXmZ4S6eLtxxd4a48xzwHqBj",
  "key11": "4B4jpRrwhECVYLSRjtqk8ZiwMmA5k4zYLnzvQiRQWKsTqK2hvzSfhpJ17gghvY8VrirAiwsPpsrsm5WcpKpRszjD",
  "key12": "3UmcG5eQbCSXY1MgKs9BWqVwSykcSaMk3S35xsja9XAqk18ULmjvEP53SaN8Cgb2gwLyveHy2C4LSSnyF1bq6qfE",
  "key13": "zSSHF1mD511DoHkQZvRgke1PcKi4u6L1smnSttc3Ff9Zpmj6LT8Pbcq76Y8VoQwQg5hGjavjwzwywEzmGjUQd9h",
  "key14": "4fSb5imRRaoknsyKdy9WAvsBQfw4mx19bUgrgwknJGBuvspGmD7avgboxU4qiYyUuhD1WR1RFFhYHYUTdCcTrW5Q",
  "key15": "4kVbT9Tsx8bkc7vj2XJNuJM5CJJnm6F9imEaLBBpsY1nhw9Q4iRLbyu363ZMfZpiKym53GnVC8Sbd5apprb3kbVx",
  "key16": "3Z3EPa8UvrXMn6rRAgt656ahnoaoy3z8KdtejN4eNYufE5XWxFQCuztiKSjyCC9wQK1uFViDiDzGWSRJMSM4kMUE",
  "key17": "2w1aHB7c2Kxf9RBdG6jnekg9VN41ZwMpErVMvtRvBjnkGxYptKFpcusnrWDN9GnHFwia14GZd2eBqHDU5hehGNu9",
  "key18": "3Z1oREoeGvHZ1s5WnUruh3rYgcgdkFbLS1CsybeDCA2FyuqgdV2iWHUCe1Q3hpH9pQAwcidfBi8cQ5o1B8CGFLDG",
  "key19": "3NA1h4yTryyHTUF7pevzeAmVkninMvGpmQL4s78i9fY3YhjW69NPVaG1c4nuwYmmhVkpC2hy9QTUsnToBXuHMmxK",
  "key20": "2aAwqMfz8ML2sUFpqjSpiH6PwEA3shXEaP9ju6SLot1dCG9KdMzETjbaPF8HEEw5T1jnK9dqr3RzPhXazquNbiYj",
  "key21": "497DNR4Mh2ETrNFKBHujwEJGqY2Nc8iSazfUxvQSciEAwkJrqoebm8bEzFB62rHXiogZ5bUXrT5GrEjxceY4asYe",
  "key22": "2ERt7rXMWQcZjQap7wsEotJdE3aG88CAPg1jyDSi7aEe9fiFm3XT5BAAPsXtDyBFjTYKrUjrnyTpmPiJsYiCtRDh",
  "key23": "wSZUGjBGgF99cLbPnoA1dpcoDjVPk9SDh1ursKFWJPjmp1afRFukMfNKV1fJqPhoGsF7NXEXXc2c2SwBhvkHyeK",
  "key24": "64DufbFAPcyCajyTSDpHnARhkDmZPLLErFwEszN2idfgh1eTgK2B7Wmn5N15NbZbgDuHqtVdzj9bfZzZHgM3BhMT",
  "key25": "5WbdaJnrPVeEEGawdh7q1TYU4YnTQojGQKwCqiismR5zywSp6HnD9P2Xphfx77b5PSJEnkVgHjSb2yPqjczPeJYD",
  "key26": "3DEe8EMFp4R5xnt13r6ERdpqSFM76Bs3GHDTQinEeWioYbsguLAuvsmtzXQ51goAXKsK9jXintUge9kMW2x3pxoY",
  "key27": "H4yhEqXFmS6VXFmpUdVvGdHZpafQxJgEdQSAEjPrTftTCRZujmpca7kBp4eeBeTZQinfN9UGDksaNpipY4ozwKM",
  "key28": "3tr16bLkHmBt9dRQrEGys4dL6jKKYW8neKSB3f6voWtJfBPtBuU6vvg9DFeqvtGhnAutoCbeHBRMTgsZqzNfvZxE",
  "key29": "4KZi3xu6RbqvnMp13nRuz7h6vfVW81TB3kaVchN1WWNbKqd9C54uaXNYCXpWh34RKrLbgH8SnGvT8A9RNiRNChXa",
  "key30": "4TCSTUnDjAVZwQEAAKR6ySsuRV71h8D8BMP1YRCY99Mcc5Xth6bg7EonvYk9wfH8cptnqTRUM1ruHzrKb98LHmWD"
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

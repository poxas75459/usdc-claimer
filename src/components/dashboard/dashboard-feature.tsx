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
    "2cWtFFk1qFrEsvWACWWRc36HBhixQYYMgsHu9j4Ap8sVnnvYS6UNzw5HyPvinYjMzVTaRyYtLpAnPakxZjiuBZa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYPsZwTRCf869vgPXv2fZwso9DbRrFA72cXQW2VzouHEYmuerKjEuuDwwUuAGEcooVWNGVqeBJTV9vEXrq8ApP9",
  "key1": "5ZJyn4cbyKLyqf9AupZ4XR9CcGcoTerGP22NmWsrhi2AAYMtc2YfzuSPHVLF6pVKqS4dpYC9Ua4B3jnyQTFru2md",
  "key2": "Bbnx5eDsKdb9sRb69iKFdKu2Zi785DYV2aDbWCerU6yoP9qBFKTmfKECa7TUbdX4BBLRCk8M2st9NuF6DEQkAzu",
  "key3": "4aHEQiRpYZ4K6zhTBcouN1So3A2RvjWdE6JJN3447Y1uNdrm1E5c6v5x5QgYjS4uJo96p1Y2bV4RNtB6yMT1oCD3",
  "key4": "rsHvVMHHQbEp9kjDP7i1jEyK1F9M3RC3sYjBQhZ9oLo6cEfBJnWNwcjsH8f6VPXaK5kwbJqZTY4jByPd1VrA798",
  "key5": "LjweixuKM7ztjq4yq2yHnSeYvnmSS5XtDcDSV9wGc8dFVS5ff5NQXg8h2XLUnUnTREcBvvCRDStGhRKp5FFjYLy",
  "key6": "2eTWmEAdwKh2dzBnqFQfCL4kPJGqzX9afqLyiiphyNdYE2zNSh1CzXWVXAyE2ZGtdSsSBzSPAG579DeuDVn3phZC",
  "key7": "4SwD9esqCjs5Fn4GduNAZcGJtce9YjWRZ1SkpgQfM3SXS2jnH2iSebvcpKr48HTJnN7Pizup7NrmRjesvn8qNsZq",
  "key8": "31MqCmyVwvjQPVg7K7grWx4sjuxovRZsvt8FfQbaoVUybMq6AhADgUFcQgdpHgmtKJy1ce6vkMRNyZnqCbizrLGG",
  "key9": "5bhHjKKHSMEibkfbpL64C45zg6e7NwnQiZ3UVGhsKiHUyyzY2h96UKVeCMzJHQjaimUcSAycEeEJpdWQybxrcX2m",
  "key10": "cKj61DpHPp3qSVpNGQHeTm58T6HC6Z5WKTjFAVJp5gqKGGpSDXFRcZFQFSqeVKK9a7Si485ZYPpKtrpugtfVjpx",
  "key11": "32wqZT8G6cPNGJwY3GSK1oDAdofGSACbraGotLFwLqXAC59hdLaK1rQxQTQRiZRZHJkbRfxd3ALSVFird4jiCiam",
  "key12": "WmDtpTJJ7atMQrHjQnhs52tGTS86PSuLMuHya7v8o6E36zvf7kfuuzbLec24wPqnvnQXLREeCHDpCGici75rLMc",
  "key13": "3MRUpWPJWo3EBhDyoSdHZYxB4wWM4bkkHN6pj7PwPEGx5rm66uL2whZZq9vpSp5dHDxv4t4eSaSHAt3w3qd8Ydmw",
  "key14": "3RnDwJPX4BnmNsR2JXhCBQ7pZhmN6Tu7of3SD97QoF7ANowWkrCNW3hnMStvSmrg9DT753DFN5hvFkno4jqTfbKt",
  "key15": "ttSysbSEYq3rAXBxenygMpD8yKeTCmjkNkSAfEgvSMrQG49GRZysj8vUcXsijL4Eyuwcv2DvBu5LCqVoMjnffho",
  "key16": "5T29w7TuJaXdF9wGWQ3H2YNrKTraQbQYEa7LCL11tB5tr6YEb1s1eTN2TyPJRRjjq2ffB6tMYmGWDRxdTghggHtH",
  "key17": "3nTwPy5CeHmBe9cPam5WHPZGSEcHw9xCCd46hcKn6ATD7ypSDEck2GyVsoEBABcxyyRJN295JS9TtxE5mPnsSyjc",
  "key18": "wMrRpQX8NDZ6W1ikNULYtRSVavj8hcED4Fj8E6j7dB94Wb59XFv5FfD1nDYoeDXtToKG4rpR9cUiktmK7vqf8EH",
  "key19": "5rfEQ2mndPqQ3aw3HBM7Z9y1tW9bMwiC3Q96qHKXBGrt3sxzkBTF8jg8yAyRa61bd4gDej65v9t3P3hVHi7hXgsB",
  "key20": "5vcRBUQXn8zxbWb9FV3nnaEuKUJfvqQ3oEcbv3RH6P1MK4LoCeHJYS61obcs6VpFEMeLoj6y271MroJDYdzc1gFD",
  "key21": "4zg9fQ2Dnhg18yiJp8nSXjhJy43mFU5TiBbZKdHnoVxYS2252ToR4WKr52mh99Nz4VmckVq7qxHz39sRmRbmbbM5",
  "key22": "2MjrUeQLv4mbPbiGWcKB3q34ASChnQraXaYs5EqerywhW5gEHCTCsNSmr2ncfxDHebyd6Jvuz7ZLd1L8K4LqnDUb",
  "key23": "4tXZ7XXdzcVBz1JicXFuggWHy26c5jG3fQaeCgWzWj4S67tMh6mUec8eLxJw6WLVzuEs3ZqdesjYDGXwDih9ivoa",
  "key24": "4p9eGJM89TgWL46xpX3bT7tBSeEzkVqeLzN7fe4iNxH8jtVt5p741HhjjoU8Gbo9cyb2NoSd7mrRU48sS24b6XrU",
  "key25": "2rVJVgFtL6aqhN5572P952ookzrZmedgemFsjke2rWcndmaNDfzfNFpVKupSXrR936exeWLAonBvC983MuUvpX2W",
  "key26": "537PkDXPdQJ4qBf4hEwEVhsN6MPgpHVmr4T7enshHQxYdQpWadFkwCqNBwkZL12BgRgrxorPzif5tnZVbV7afKMM",
  "key27": "3zyQUzPsPA9e6S5hVN4kxio7Zqt7GAeDF8rpq6WK75syc2CcsHVufRs7fnYXeKEzubTKpdKUf3ss4x5cda5uGURv",
  "key28": "9hpoJSqwFFFjTKzoLWPZnjZmCfsqANZWuCXqJbkyHT7Yy1D4js2QBz3vRqzRawvvhRWrqe2Navb8Vnm12x3D4Mo",
  "key29": "43anbJEgB1NviNi2TL66X9JqWS3i34B9tERT8gHz322x2G1quZYe15vDDs64cys6EGjo6YRFNP5q3664hPFtyifC",
  "key30": "2ydp93zjvg9kjuL8BzRJJWCQ8G97unLqti9WHGWqX79D6WVWMfQYkop3PhwMzDQr2rE9GfuZoasNF8vekgbdEUgL",
  "key31": "T1oEMD7u11R8uWYgZxUNyBAgYeuKa9kCKQjeexuKZoeCF4GnpAZv1sJ7covpQXNPVVK2ADrGHFyn8nWB6CGnY7X",
  "key32": "4iK2ZANyEUyAtJdppTpVYK9nncEjWPsbBmknAXZkr5GRPPeRicndmHSAcEFbJrNQ2PrbsjoMuiZtkXxECvcDZ7mR",
  "key33": "3Z3jt3xUDwKqyCxRkhkhwzJmt4MNMP8tEesbxk1x3aEVtBME8VRiXhSDokuKtt1uZy8YxTyZUH5y86WqLFhTeUFf",
  "key34": "2SG31aEy8TiBeML5WqgVDchqEijebQSTmdjMZKbBXrsAZGR53iHRYUBQBx2eJZkZ3mCSmZVtz9auzfNKAVzDePeY",
  "key35": "4zp3Mw3X1XPg1fJDpetvYb2XjQjTazSGY8BdVZqGxq6Hky5i1VD7LsBF3XZCQHXDkC5pQDTwYZStYfyvNCvxk6R",
  "key36": "xoXYUyMCYiVSFg29e7ei7HJxUsqv28uu3YBMcwFy3kUc7KDtvVa1qvxhtzjNepu8f98SzaoSUCKGavAN6gHiBDw",
  "key37": "wxTtgRe2nWXjgiAVqzSFLgkkmqoWyTQkUibuuajErXvZaAQsfb3RiKED2iZFhaJNCkGwuRJQKmeGY9BAqUQgihN",
  "key38": "499W1NHLEcAf8p21DLnWRQwXUZxvnUhuCh9QhkGWWVz9boLizeHrdxrCEBaWuhHiSH8kcUcxX7YYTXmFhaYtQRbw"
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

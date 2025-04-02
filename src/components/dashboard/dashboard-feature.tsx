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
    "4rvRsxvwoiQEw3CxxXfSc19nqBPyYnXV57eF6hgs6dUgzJgarhtg13BP9YBUGwbeDvXbzFsqaRYXN4wJoSBNix2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hva9YdfLGn8h662JRkxQqAYefL8WKkUE3AtzrD1mdcLXvVbvDKzA8PCPus5cUXBZvvwE7LvKbpVhSvKcNGpg7TP",
  "key1": "EVv3yEV29QHPbmyjY65crPVM8tVFuUBFqcMwCwzxHvkkTZ9HTyPYJxgdfqwCVK7ZjRW5NXQXiQVHYGMTb8kbZoX",
  "key2": "3btzB8f8hoM1RfGxBtQqvJE4FELmugcuKmfd4PPs7rmYsTRnQjYnLLEJrXdjLk2dn5wUEPfLmpoNidv5UNAhmNTx",
  "key3": "4A3KrXE594WPJ5b8QG4asW4HcP8S9stWGpqRKkpb7jfiFmQtE5ZArUiXRxyyNFK2CaEfn7RwQ8unihK42q9N2Sjk",
  "key4": "4t5enzEHQwTYG3vfuX9CvzTWArBBKfuyfD8tZPL9miNEkZZ3EaTcknDf8As8fsQAhazAbuB5RePgzeMztSxTdayQ",
  "key5": "4We7qMM3k6dezXSop8pozR39hbDTdwTc21rWJBmj8YCrgkcYoBAzHuB3UpcdRnsCdcYBdzqFMfJCK8kLDcXva4w3",
  "key6": "5won9qBqxTrMzTDmT4cojQrdtqDKBH9XkB55fhfXkZUo7U8BkWstSR1gVS2Nhpv76ptWy3CWK2og2GYjGUWEP3x9",
  "key7": "dnhkvb9CL9GkVQ3cxUkFRfLftCA4cfLp7DvB1TWdp65jjVu5vyuN5eNyhXBkgFJ3aMeKZfParGMPD9sQ1nmqbC2",
  "key8": "4KMyctzNwSVGtmFhqaY9uxauEcZqbNWWo2FoipmNBMzpqTmJV6xJzwNMMTgRoDKNKxuE6xycT5wEavxcvsTf6ED8",
  "key9": "tW1wH2uyd6c7Vp5y4QQYs7bQz35qQUjrHnvEE6Nv1YeqaJt5dCkgFy6qdKrT3gsLtj3V7H15cKgPjzquxdsMUpk",
  "key10": "KwtkGu9eMSsQHpKQW3kHHTfR7WxvTAWcUGK321J4refZCJ21qvZ189dcE4coZbbPxF3ivoJgrc5xFQoWoWCNesL",
  "key11": "2F3qYHCScgs3jzAaa5qrVEQZKngbZQbRPcezEJoEBxUwxfhzbnLoqrPegyD1Zdnqu1JS4yd6HCRVn8Gs4rUXKD8K",
  "key12": "gUS4TQCgMgyqmgK7gaijH2rNQgMKGAFZ79P7giAxS8EyoKsJt9pNXabPe38b3AUPQJUHfTGxdjmyVmjYqL2EGxL",
  "key13": "4qAYiZz4JaPJtBT75eWS5UTH6tKTfDYtLY874rTLRpiHCSnwQELTZFSP478PJXXf3MEjhttZ87eqaHbHPU4Yqc5m",
  "key14": "4kX3wd9qj8ewdCs7ohGVomu9SBNA5NMTwxrYLAn6zsk8W2sbWAuhLqFDgfZhLbMbZAPAVeBb9GprmGRro8Wr47Bs",
  "key15": "47yiXyNqTSrSPb7k67Dt5uemDqyacHquLh8woCvggHYHDFh8UqxHyjVQGKC1hfsMuBG67Sr2aMNEtAExv4y69H1V",
  "key16": "4YW8UcBrGTSShQFiaHyXuEqJerzAnUwJTcskeSBtMaxRZLuVXhrmFCM4deZ3NCMzxENaCjSpAPdd547ifZouv7w7",
  "key17": "5z69LXnawHgWyxunePQhfYjGNxc2M7CzzGJSZTCmYtgUN87fv1wUTiaNM3yS2NdN4t5YoFU9Ep7sCB2tk2CfHKBq",
  "key18": "4GCCDyeeRRe9WZcUTzGre8Y6tkTYUC9UxNFfMy7oBmTB46QQM45TTvtKc2DmX8vJQfomHmUm2dCWc1Ed4bJ2rP99",
  "key19": "2cULrSAWsNAX5LiPGzkYBvAMdVwoTQWcTFL6pHzuQqgpwhCuVJdWUkpiTxe5zjZzj7SHF93pZgreHeXCQuXA9k4a",
  "key20": "3viV6S5foq3TmNfEy9JSuLhQnuEatPFEqUD4FzpZQWXtAKuR1rcv2Aa5LwwEHs4rrnU4dEFw3Ka94gqUDAjhwSpR",
  "key21": "BbbxVQLPZoEqVp5n5aVkyuvdNJPGSx4xRbumxbdMB9vvD7gxKzzUq8NhsJpierCGXNGmxMdxXMEXsJD8JPyeUQk",
  "key22": "zJ2we1oytfrJCdrt3pZGh1BdkDandjzVCjBqyVehNiDLuhuT8w8KRZSCW6NybFr1J6ZvboucbXZHDK8dbL6ywaL",
  "key23": "3kV7WHUbEJDbLpNrbJD1ZvdAt7hmBX6cUQykamP3NQQiBRYYDYjkPVJ5wr9vq27oTqiY5L94vu497mdyuPyr3RSB",
  "key24": "3jJECKruVzsfhM2D4cf8wpcebk1jc2aUxq3rrenDrzsYmzgjEwBkCjCJWSpG8woHgmbMbgyQtwZpuaQEysyMVFvA",
  "key25": "27xxgL42if4YDFsd9dzr92a9xiy1USQLH8DojGPhvpRtt31Jx2VxHjXtmaA5LaMEjVvNe8v4SEnBxM6vqzmRs37S",
  "key26": "2625ihxm1if4v42xvKEm4wDpH4JoJ5KDZZFMUKJtE7bbL6qoN9UBUVktmr1JxReeqytbe8qomhMHC2UjKuzn41oL",
  "key27": "3PJqW4DRb14dMVzBJxXjbSyVwF5KjHYcBs78MTr4wEVVFb2Phq1isxx1Up4dnXUkfmGNQu61TN1NGRPiwR74xH1x",
  "key28": "2Y86bq6bWumTe9MRLv9ZCmQdSMp27wUvHQYLPQWsmSmPEU1rrWP4Pa9o9q1Vworsang3dGEPCsxkT79uai5Dn9dD",
  "key29": "4YrDMC9nd5oHPLJnWtcnbEvKBPkHJBdJeZqjT5U4PrB4R8bfYo617B9bo6F8Tn1JViV5t4rq4jjZb4ALWDvY1L1w",
  "key30": "5a43HP4QvaEwWF3Cz2xQTCKuQ1eMJiRVKfW1ZbyqUvRecFBzkTQMsuv8QdYnHsktY3voZ1rHRYBqfFxW6LbVH6Bh"
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

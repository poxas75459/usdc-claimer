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
    "5evvM86uN2LHSJ1WL2XM1A18UTAkR7qU9LAKxdWf38D9RJJGgnSWsDj64KaizznkFQAarBeVA1Ry2nKWbEuoaXe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYRq9wJXpLDeAWQ5wgv7VMbn9BS5HPEAakm4QVbQbYTNxzGmFFdzE3Nxu65aEarc5GCiYJXcUsmHN6L78Q6uPBd",
  "key1": "2CKBoovC3Hq5RvD4mywje9ZJ2W2Swx5VWzbB5qipAf3iTYHBoZAGGVT7xZ4gprAReWqUuQW3Qjy2Dux6G5Lq8aDM",
  "key2": "2ydUy5sNWx5NAXm7nC8ccc8BjJZY8gnPCUdygkhGdZvDgHS6c2ytUESzbT3or44KZSwwHw5DUPKtYdjNSUrn5HTX",
  "key3": "kP8nfzbZVj7rB6ZviwRPr6iSf2ucnjMukVCoiamnhSC66sQDdYfE8TvsFDovUYBQxnbbZoCVtwfp3w8kT9oFuJA",
  "key4": "3vxfPpJwEiSHYRNUyEuqAvwC8C1QgeYqeuYmaioQnLTSf2siapbmUfrZdhwt9ZVJACLjJpEmZULEgq4yoRVuwp8W",
  "key5": "2RoWnEEvuu6HZQPDqXsJgV1JRPZ38n5Cyi5yRp8rxQ9qYuxhbutoFSwk6kiqc2nMr2zmwrghEjJ1qkpTQ3x7VQED",
  "key6": "43UCaG3gN6aYPXtjDZTUyeVdFiEvqpWeESdqTRGZbbXKvCz9p7WcQELc567AogyaxQFi88fNmYkLAhzYUkrKUyYB",
  "key7": "5rapoZaWCaHv2Wbs66nHd9DvVyekZhsT9SYL1Y5C6wYzRWMRL2XxHbGhbLBLCo4xMSTYhedjsyTx5GjtQ4UG55mu",
  "key8": "3rJs1zJf4Wia4CTuqVZCbcuKjAkD3ZTwNk1DqmaqtsVkfrzGczFmpBECxwLRvefiEcG3H6fJi7FePG5sLqGLAoX5",
  "key9": "4j4qHoMNMEWjSwotqSL3UjYEmnCqUsDAyKCWAAAi24KDoEy4Jsazsfh39S4njonvjPgiq5a5qDpaoQ9f3JJeBdkC",
  "key10": "2RHc16b37FZrZStrWak84sYC1Qy6nKMkuMeZw4PxRDhKzS9hXTCGiHATcqq5W6Q1CyXqtuAmtfLfTWKeQvoHyNfE",
  "key11": "2xDJ9UXCtw9t7jtZbK5pSjJ2xhXwdz4nAJ5SUs9Lnsjd9SZrKwV8TJ696kBYgRXNm8z9gNLhiXGVxkvVr4owLaud",
  "key12": "4pfHnvESCzZY63ob1bgzHgtDREAXb4hKyKgni4twwi17Tzp7cfhSx37kdGjeDLpUzp1T8igHGBj9ceUKmxP5XdsM",
  "key13": "4QAnGvYmmBnrwSEJhqRpEmF3zMN5pF7dJHfs6P59y5Y94HdDnkZgsJwMymn1Cv9Rmv4eAJVurrRqfC1dCEN5g6sb",
  "key14": "4UVGaqkLd5J8CMozuP2xyiaL5d3JDo9p5axw1eftdAoF74cZ7XoerYRYjq2MwmK8y2cLfPqxc1PPzHXRhbbNn4U3",
  "key15": "5G7yYkNL3GoWGVg4sp2ieo16UqXRd6c9ZvddLdyrqLCGbe2XKU7J2ojbSWQkgHxcuU4ms3uF1tLiYpMFuWHfHiyj",
  "key16": "2JrVHZ3EWHVhNvzW2G5EQuGVTLCg9gjYedCoks46KRfhAavpjyyGMyq69oEWUD6vGG1rNbZs41x4YGvBSKnugwNh",
  "key17": "4P6Uuq2dyMm8g5L6hGp2jVfbdEVPE97nNp2nsmva6rFfuUoV84gpZxuxnwQJCjr94c856cs8E9Dk3Htw8iSp8SEF",
  "key18": "4c1zriSxLnxBkhqwBkmjwuFzthzkC3k5oqFUsPGzYZiuHV2BtBZGM6ZUwy3BC7Yzkqhqx4VZ4afb3tiPvzHMoXBJ",
  "key19": "sXR3iqr1aDWURCLayrTcjGZ4yFHnMwdU2Tg7VjEuBPkZBzDR4TPP7BR3nn6RMWbwaRB3GBzWNbBUzk4f29dMMwu",
  "key20": "2d5PSbtKhaQMHYYhXFLTBkJZt6wALSDsm9P5LrDQJity5fm1qRi3zxPiPPpHT5i8pzeiyBDEq63QcK6A6fSzYzUD",
  "key21": "ghnUDhjmXDPqzjZoFeEZ7mPwVynepqsr74KJxo1MtpvQdRp1ih9nDkrwcF6nctDpkqD5gENqPyDQpkfsumRzWi2",
  "key22": "4VXEFoXZCNyGWK4myikuoa4pf1dptnygKHm4cuPCRP4i2c4nTjkC37d7XLu3wYEVVoH3mDuYr5hXpaTCy4LpzM9f",
  "key23": "4Uf6DcUSTRrrJoRXn3DoVkRm178R9DiTqtxDsVMzSdoZjvmo8YEu5FZwk7t86qSWEWUjVdztyQiA17U6oQADwdeM",
  "key24": "3jULanAUiVRaUDECGH9qbUqmVAzZ2m9hk8vXHnkEAKMCMKFQxDZxgrSwCdH9NUJ6pjZC3hJS5oqFiEezvzNWpzhJ",
  "key25": "3EVV7aQiSGwTZktKd5mkEaYcYbtkT5JutDgi7WwCnaH2GZkDQiYpZTQGuq1wYrEzpfPwA2EeHHtgmJAE3E6vvrbV",
  "key26": "3eykXTKCCHtgqophodDqkgssTALUn8ZTVCPzN9UNEEo75dHE5HVV6SrixJhBX1RPbsPUTRiV2hraG7bKXtP6QYKv",
  "key27": "2kvxuw9arWdFXAhBnFs9WL9iNZnedynpcjq6sjKX7kcFC5nn7BK4eTGENYVhXajP2tfpAdrf54SKGuDMoazBt99T",
  "key28": "erdCvB9QNDXUcmXKz4iCNPWJZvviUuyYdDWqYnEVo76kKEjUwzBvyGawGE4gVyWT3f8ZPbASJPFED1yoC9qViDy",
  "key29": "2iN2x7XLAgvXaL53Wa5SU5mwH4VLK9FrHqQTCp2UG8ETndyAzY7W2CNcEELiVtGqngBKKce1A621fAHUCPzMEKp6",
  "key30": "2ZF55ogxC1TqpDnTAgijqo5EhiXA57m2pQSbR6iPRtqZNyuGS2zKhAgcgc9ADxnb6Mau6Ltyi7kBKMT5uz934Wz",
  "key31": "jv9WmZ5zxvABoN8dMkEn1x5LXaBN3gYiTnMyLbKVtZRVjd278pFPgD2sPBsieH6EMAEFg6C5kXPnBtE5wdLe8fU"
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

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
    "gMH4GyeDqGCszhUMpU9JS8pFP7r9DdodoAFcxEbSpMCYruKx5zb6PRC5aMjBhDcb6P3CHwGN6ED8Wsc7kpeKAZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24A4Yw3ddrQr8B3oNSrgFfZAi1UDATGt7iHSTJFDUQ9agfDLjKqoZj5tiFrzHWkC5dTjuz6iyjDMJiePD7ixAeNd",
  "key1": "5qKppyLmsfghFNhnV9qt9aDEEFNLSRBVD9u58w3ZbjzWSfrpooSk7AwWxGCRCBGgeCqDtDfuFTQHGFjL8royxYdW",
  "key2": "5sv6tnaoUtzMej9YknvEfjF7cYM3H4X5SqQSu846yVPE334kaEyExrAQua9qYi8inDcWMShumKpPrdeh9gRmuNYK",
  "key3": "2Sq5XC66EYS6wfeXvbXbDYSvuAgXDn6XDErSQ5vqbpxvSgfg9b61Df8EQz2UDeg6Dda6Tqmc1qxD9s8v36JQJoWW",
  "key4": "pBBgf2hS5WuwWoR3okrVjTQF3px2fHmdtQmc8rxfTYoXPyLFhy15qNzfFnbda7wT8H5yWw1D4iiH8d9oeF6xxke",
  "key5": "5fhkquzhKFDsq5Jo4TMJ9URiGFs5kzNz4NWm5wxzqPMzUASL32k19tMu8ebb8jpQtZzN7bqxwysqatpHhfUKRWBZ",
  "key6": "3P8r1ptcGcGXDoXQUipneHDwDV87XJnGpBQd4oE4YSG3Rq9Q4QPY9e4AFa712GhGgHFiKjYjvYwuezUyVSSkpGma",
  "key7": "2fbq7PuPb4BJM8BgdjN79XBRQKSC5VxriWDL2SmMW4FZ9hpAJMZ6nLBGTozbKKNvxdHLC3su3U5bYiURAi2e3GkE",
  "key8": "4WQxYsCp8Ud3ZVuUsYdSrwaAnJYiRndM5qLAYBvSqYk2dxGH8oj4ToHsUWKRn377isDSNRJYThh5sDFx8P9K9W65",
  "key9": "2UdiJTqXpT4TycZoDghtnCCqhTGSVeEksJYz6CLB47FMgrfdbQv75dPSG6WjDnHiNu6tnjA2wCv5Bv4J2yDGCNPN",
  "key10": "29E34xKf8uVwXHFoZV4GEAYnfgMWNv7fjhVuXPYyG3ARzTYi9giUw661fkSn9GaFdzrtqgrhTtAAANXbV7JTGrqD",
  "key11": "2iHx6RAUsNJ4RswWeoFMdhvx2sdpKDVDrwQqAyJVD1rHVYibYHYuUigHL2tbTAbivPSTKNZFqGEPsA8DTEyZA6Ti",
  "key12": "4rZENNdnxzpDbg9geDwUux2tSNRUawqH3VEpYNF4HcXJLmfw77qt8h5gJXpHbWXdDohmdA7YxxD8xnvL2v5oyoM6",
  "key13": "4yAdjk6cTHy1niScn4oMQR1kv66k9sXNRjxwVAc3XYuvVTDF57HaJwCfUnSUTQKYMVLpoNmfPNBBmC5kw2UKvvMJ",
  "key14": "3Vz77y5aCP3dPJZ6ZuQr9xrcyTJuebkUcYCsU1tuVniE8YTSqGxNKA6h9DbLbSBaDz9y12zwqWJh2FbteoxRj6ZM",
  "key15": "5BLBLiR3EXizmAx8FtJMKP66JNjYQxNjcSrsnLW1yoXE5TexNS77LuGsJZVGc6K5kFHsCUBfUkQ6HAs1CtsPKigA",
  "key16": "5qtEcWeBBnuZqUh2GKrcycdze2VbuNzpME7C3d7LVcQgR2iUVfnEC2WSbtTeb22rf2aWr79uhQ931GzxGbvts8PY",
  "key17": "3s6uKQyYYbQtgBg4NoFcr6BQfTNujFtYgjfXdHFffxutJBTayMkLhnCDgSPkpZoVEAwhNX1N1txNsQeu33ryYoy1",
  "key18": "4fp5eaAcJroNyb1YGH9s3KABxGRFdZ8ynqHyLNwvJqtPr3pt4EsvAeuPXF9SjUMUpr3jwS2ZSmRvsLa2FG3qRXVp",
  "key19": "3NgHpL9T97oxFSLxLCayHjJ9JnqMPm8C4qpdG9yMN84gMVXkRJPxPHfUebQ2CDigCJBX5bijxBUgHTnWemh9XzBp",
  "key20": "4hdKmyc47tdVYbhyV3HxMk2L6kyy1aoJ7VosKkXqdp17qJevytdtCeC1Q9PkzY3gbDqJsZBMhwfUXhQ3JxPx6JUz",
  "key21": "39KATRCkRXeQFZi6ngAGKuVNqnAQ5FRhzzDUwUPWQasoFDHYXZXLt4TduD8mXgdqYzRNTfK9bo5mpMvwt4qNHgH9",
  "key22": "4b4gyA2oXXwNvXziAVEQQ4EFQmeGWvueNWQzAA1amCrCRNvAANUsRzipGkUajHtcgZ956XzVH5HJ6TGW9WR63fnJ",
  "key23": "4v7m3weB6CvsEPXfuBLeuQHWrRvGe216o8jkDrnqsn4o7ay52QwPke1bF1oEDpShQx11xHeXREkxmN4z4RjT9Jp1",
  "key24": "2KaS5huNppwF4U99ofzmPPxuBiTZjicw3hV33Ay2jh6UCWW1UFGtq8mhWjpUcLMqWek4FNAE5mwGbspjozBERo74",
  "key25": "5pbEfP9GASgLdWJMp9NS6QDXz7XfrcsLmwS8mRoz1EAJ844Yt26Fgk2xVYUxjuYfzgKwKbNsYWE7hQ4FSZdavRqQ",
  "key26": "2PqjiD3Cnobcs7iTiwCrCWxi9sL4SfLbTSjdXzQ9o3eUkJ1AYPAeYdrxYPvbpJo6ZqdQp4FeSqbyEMsABXWAcYnt",
  "key27": "5ZzhT4F9sUPtJb29v9uHKWBRR9yMH3gsfL1x38PLRVYUwBxs7Mc5Xj36L6nqccitHLq6GSwwiUPdukxbb5kDQ78v",
  "key28": "5Vwfn9kN6YFjjJN4tSQTovrEJ47Q6p1HPnLMRSLFf1KWdnqsfeAi8UsBLjNfDoLdMaLZ6qmepBpujH9w4CHQoXcC",
  "key29": "41PhLAqytMEYnPp2Biyqa1jHJRuhGWi7P5qHRuYUCVqvECnYPT2afAxKbsGj9tShBsvjH8JCcneP1yEXXmAGPLa7",
  "key30": "hkjrgxB4uctN6NeaaWstsoipPLKtrWvbhUFcbnC1owuudASuuZnFwXYFR5ZSJXeZkdBKLWRLWLcnZihtvy66Sab",
  "key31": "ot6KLDRZZUJsooL7ZxPpuvNDqPrNMo1f2HY8m5p4qfjJCRyWXnr5iauACJh1SUaW478g98iq5GdWPqb4hWKQVnA",
  "key32": "PJUNetZy4werKvaAp75ue5kzjD5PUnpxVXmH1DLwzephrXcXoD12hrDrS4wAyXTFc9Hq4s2xLqJuYFF2jShHFga",
  "key33": "2SHd5UXTq3M3QcJd2GqhEQUz1Hqeswv7DKoRPmhHiEfReMGxkj8g7CYBydGjKbNN23nG5Ueuy4XePbzjgKRwY2wA",
  "key34": "2k61qqJVdWP7JPo8FUhCHmHHd9dMQASFuaBuq9uAHeQuPJUPy7ywqSHcZQfJKF1beAqtn1BHjcxcfHx1q9wPiuJd"
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

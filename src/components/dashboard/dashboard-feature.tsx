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
    "3av5NmFqbjas77Gxe79izhCsuyN9ypqqptfBAp9E2SENiHeALxsPKHg7o8ZbyYKhxoidtA7TxuwDZCcsGhq5X2uN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LP9hcF6cMYGBy1fUKVpNsAJ7eLhMcNvxT8TYxFVyUTH5u5ALWxn589Vxz91436XXmUfkm6RL26epGy1kAizgLaW",
  "key1": "5Rqzb71vEnJv5r3XVphgZvXykLJWkArffX1PvC2pyiD3rmeDZ4Nmxmc3Gc2Q7r18PXCRAqc6GT67c5Mds7XtXxV9",
  "key2": "5CjXHnHa851Km7xzp83ZiBNiCqJ4518QWDT91YbN5zATWMTKLhr8eSd9tDna1JQwSDUUd56v2RhjkbDJ9q8xDn3N",
  "key3": "eGbG185R3sfwttna1myYSjv3KqnqUPhfUU9WJUiJ1JEzj8rkSWVsvpAq7RDoJWgHFkjd56kShBi1NkCcyFftKjH",
  "key4": "2vyK3VkhALf5tjWtzktdZqpdiCK2eeBmDTjbb4aTDgbVbGsWKdnycSxr1v5LYQMXrFYyS94HhiuWG6SrnMFQMHLJ",
  "key5": "66vfrLEPVtBRcJKf5rzPjYgA7maYgLG3HNbYsJBS7XwZhci3aas9sKBFXDQabPLQbzDuZU9hV7SZVcNf2gPM9UvF",
  "key6": "5cMQFygRZESmLGjsTQsuS9taJhp3V66ARSvrmhGpPueZEBKXtRWtJfYvKHbn3MM5RtAhgPniK2Bi8rTvgtVbmYu2",
  "key7": "ayxGJpDKRXGu5Tb1187QfyMsooB7iGsqV7seaBJ7f2XcYvA695DpdFd5hD5e3ZR55Qee2eUSZnqHw6cENqHeaNT",
  "key8": "31TTL2BGK8CfGLAKEQ897fEfL17LHPtKsqPiC71MDtmU2GGEMNFGuVpYUzVpgQYRwAbx8maALUzmXj2wCZoic9Fn",
  "key9": "G4wBRNWjTb1HqGRrM9kKS7FDMaVG2oKKoNJK62UAkuQKVSgTZyUDFQ3gUp1h6Ra8AmVrAC6fKGG95yA4GoC8RJu",
  "key10": "3aUzhMfopHPQBqxMUk3ChhwP48hLAwK3AZ5rXCfLWqjtMD12wYfDKZrtUd7NHnhnbotP24QW3Kg7L61wJYhfLwvF",
  "key11": "5Br93m3dkiFh3ydWQhHMmnfQT8xPYpoxSkfZNrmiCL8k7vrfGMqjtabSb4uUAeGcom8RWwPoXnh974ZEZ19qDJex",
  "key12": "J4He4zvGMqBfNUWfoc7QXAsMnUiACwKTiAYQzcimtJRsa8GQPsK7SuPLuoZ6zsvYtnBcSR5AiV2UqiTmu9eQUUx",
  "key13": "5kaMMukcMia2FKHod9cX8FvC6awEAwqNnn3A9USNomDceWiw5g665h66G5pgbTYQ8X1R2ARv4vh2uaJsm7BJWmM",
  "key14": "64wLxg3GtUd5Vu9GbgyWeEoGrY8kAvMeTATLAMsrubT8tTbcAXL4v7EqxRWZcUvxQcwKRF8niXQMGkmUwzTr9LKV",
  "key15": "3GiSSeXBkvE2pfYK42WKsatEN6a69wiEKLrWJbTuyDZpcgu6BxBqqc2NyBHVdLjqsCj1vyxxKHqwyFuAqWHjZ6wr",
  "key16": "3F2pnPw1aurZTkShbKWqxFqwtfzHDwxcxBmefUNe1kXmYF1FP9PiVkWnmNcDb5gFu1iBnhP7SewhnEXAGTrAP3ot",
  "key17": "pZXCsq881ket9XNju4BpRAd4Y4trLkpzzQjHHqLRs453HR7PADitupPiPMfjnKrSt8ZPGHPfSi1zgfKvQXWwSEA",
  "key18": "3r5MeAuahdtSn9EtCHs9KxBdWoWKpqAVytHjTy4Bgv1rjmyGPGbC87XZfJdryd3AafCS8DX97tHyJVgc8pusUWHY",
  "key19": "5dQnXVceUJAF9bEbz3T26KBC2Ye9rFsFS2fJ91Y9vTDcAyeZJcw9Uh16UVBUx68g1aymKzR3hFMuWxsPtsdoD2Ys",
  "key20": "PZSLRzcFQ8dku3C2iPq1xfAzh8UPhDHQjWn1nCps2owybjLwMCzQxkcHku7rREnzyBGQKifwx7EioQnRLHFvxgK",
  "key21": "3Kn186dv4Eug6zgF54indebywsbnNLmmt5J85m9mgv19MLmxkm4kHGTypnVXY1JESaZ33JfyJLtVmpXu3BKG4EPD",
  "key22": "2WHfo87sucAr1J2MHR3msRSbzoaXu7j1HRunTJAuY9cvsCJD9kVx16ip2aAtotpCsi2SxD7Xdshw1a4iJbtCgXQj",
  "key23": "5RJg1wkrPV3JNNDk1C7nDoQvoj8NoBrVuHLBXg3QrGxnJtPyyptUb2Kq2R14Gr3PB3VuUGqjGq2c1FhtoGxGiFPs",
  "key24": "5VknsnUSqX2fkbmGMhTWZd6QdLuckUJY6cktcua84ECKevmuuEXtEkZ8VBPAW2nXoQqetMruYeUmJsQiJNWufiLT",
  "key25": "21dPg7teEDZxGLNSt6BGfjEE27oPFYvCBgr3pQjzM7m65z8CMRsV3xNe218oJtSWpjKcyGZ1L5Q4aZLvhv4YVLJq",
  "key26": "5BCH3mPa2VE26b7cdoaTRZzvvPb4aPTC3GBWA7mcQLcMtGbAYbhcvfMh7z5xJMe7eugAmoPMn8yWPfD8mAbfGmz7",
  "key27": "4sC5U4fFTacXq2HLGoGUFfpFxnEvg997rJVUGGcU4vvX7P7AbvkKp9Nj6wNf1TaErsdPisogtKzfYkRxFpKhVQCU",
  "key28": "4RVMVYFQ6WysyivdjRBxKaK9PRwR3XxwXbFMRerfMAKUYUesh4XwuVjkxxcXU7XYtvLoAZtEGvCGCLrSB5gbaFq3",
  "key29": "WXjDf9YT88JWELBJYUT7qWWSQ8xAWBrSgxLW5SA9wbY9xKSUYDCJ5agGyP8sf46xpFQrHGAWx4AVGDC1snMtwP9",
  "key30": "dE49HJoooWSJP4H9iyfRiCAiRZUU6WyNxycbEvXRA13auaiTtPbyeu4FUSTdnvqHbDRgPzHzRhauPSNuEKgdjcB",
  "key31": "2MRN7aJEevYjmfwSWSjNaLE18n5MHu8yAuCz79tad9nbAD1uCGkbmvFGioxCw6Eu4p7CQKJJAa5YuWWUp7mG7o7e",
  "key32": "2oy6Ae5Sps8xff9eRd7vAF6a7McWVdaKJTXBaiN8ibW8zxk5pntj6VpBbMMjZhdAhR7zbtATjxV9ePjmPqAvWKYh",
  "key33": "5cF6WxHWaup9mXjW5tJNjmr5T3HV2b8Yz7bo65sd7zwh4zYoKHfDYSXcAenb6AUB1k1r92aU1peEfMVGtNdgFe1L",
  "key34": "63JmyyQGzgCa6FpqX41dDp7hKxizymw7zrmHd4gauBW11JbV6jQRDqCpDi7hkH8KRCK2xAJD9pggx9YmjXa1RgsW",
  "key35": "4hPudzjRLRDZoFNrGXJ92EgvdBqxmr2wPBGUHbHEcSwiRWEw1vC2KvwKUrVSU7St68mxGrDCLfJ95jP5dQqPngbs",
  "key36": "366wjmM5sM8s5TBEzTwgrr3C6bZM9jSum5fKMF7Qri2qvvMAwuKqWBGbReBqGAPHWRiJs3B8mQyEhgboDPC5WWtP",
  "key37": "4qJkRpyjG5QYj8h3JtRFNBojsYCVSCpSG4HdaEMTsHc5Uz3WFZCyxh25X6hd9Ut1KqjqHEWcHim8x7j5RFfye4J",
  "key38": "4FJwscRmmPXtErtbkd8przyVv7pvicLJhb6C6WMviZu3ExUYq32ke81M4JpwbaseDyWJdoVwQQwLzhwiYmFVoKgw",
  "key39": "EVAVa9zuWNchmDMJgyyzufBwXhcPmcm6UhVBQZx4ucdaiEAHvAxD5vcE5AhdDkVcmS6aQtW4ijgGFKpzKnrsxHV",
  "key40": "5WCm1nMJPtKpCfjD25BgtKtKYRhf5B5q8tFzc4473ZqYAGYL1pYAToT17bUpNSKrYUZTdVAmm9KLgXY7iBLNFSBx",
  "key41": "4qUPpqnt8uxidRPuJFwarQ7VBEg6zNxxv3PHQKXT6uFn4EetTwFpuBtWmNQX4QcjzcsWk45fnKa9JqTCd2bty8cg",
  "key42": "5v7SzZKXNQZTiDgn1KzAfhQxYKct6Y45mVsk2VEoMUFfK8H3eYawfyf8EeWLKaHxHHQkB4wJkE4XvfDYhattMsfV",
  "key43": "2fiXGxuCxgyERhwyKeg1TNEnPg2KvcmR9v1qTRZLiCz3EbPJLgwmEkPYqLGEA6Jsh75BWEbxEbv8Xi5WYqoR5ums"
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

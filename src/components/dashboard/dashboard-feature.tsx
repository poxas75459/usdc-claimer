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
    "2aP7DNenVT8dQLJN9X4Qs8kQHTMkEbu7GpwRJXXEC8nMsZzxJZiCCuG637PKnCgo2GRiwLEkXVq4XnmySvJrAQVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ne38rgSrKYKBv159PF8jLUGgiovZuZikUoixgfXYQA7koYP4FbFFp27paJz1BSFZV5Ltcor5JNvWEAmf5Sk1Bdt",
  "key1": "2uXgUgHHcDXAwsb8J6xtG97cy4uh9yJvez68EXHh1JjiBFYKxiPFuRcM3EEdRRe6ECtxceV1dqbhoxLMfm646SA4",
  "key2": "XuBR1UL3SUnwhvMPkAR8oufWagRT1vaXZDrGRRNX1FVh8zudBz978ZVzQXSfZMSVsfZ32ideCBF5iJtQqH8QLuk",
  "key3": "4JPcs62CnsSBVfC1uuzHkwmkWjh53eZZNtofHsLdf2L21cT7z9xooC9RcRY76vSU2zSDi9gkoWPVLpBVkA1JGQqR",
  "key4": "3FqZYX7G85pSV82VPA5a6QhiR95nHTsvgZvCpV2c886qe68j7ezBMCvAkpCz1UdfJU2gXXZ9iyoWFqpurqFKGrqs",
  "key5": "MmYH1oLFzENwQ1TYTToAipKRQ4H9Uh1aNtbwBxqQ9LEaKamzNN9yBpDTirfFCPekwo8Ps65yDxsi8BskydVUrEq",
  "key6": "woLGLwmzPXNXkQnQQo7s3quouzSRHT4RneGWA5L18rap8hnzKxrq1DzUbbcYgfcBEbozNAHN7nnziWae2bGs13G",
  "key7": "2cZAKUf3HB3QK5dhPM2TA9b127KMjCQeqvrJFC9nKiwUqjstA5CaBGNcAkWVhFWmrtjcWSgo14Da9PCgHw8z4iGA",
  "key8": "5nXbxoU9mcNcVoR2oCKdGmZL7Sf96ozzDLd1x6y6gEaedLKLWHKuQe12d6M7xV7wWqdgAQqz6L1n5bhBtGy9w9nG",
  "key9": "4kzThbAor1Pt1pZBa4EnggzL1WsXwNcbfcxLnkZSDELpxgExg53syV9W9qZQ9DQkAzpoDADF684QZAqzUi6XUzHR",
  "key10": "5CrDsEKNqivQHj4FyM5xxKq1LuLWscBKxLd1wUNHtVdPJf5necepCpD1zQz6KZWSK4KUfjvPWR2Qx8A4b6C7zPVa",
  "key11": "2BweTrSAyDzAUR6LxkJuuW6SFRKWiNGuU2YNGSqRJvQCxcnX69yjUQx6VCsC6ZsvtBcWveHakAguwAe7CDaU8zdz",
  "key12": "2nmFcWtcPJ2JUXWZYiXza2sLkidBUxm45hpF5w1woekAyYQeYnxpDmGy6jSqz9uxXFw3SPj72C7HovA941FBr2Tq",
  "key13": "48YY4TuKiqYeNjPuC5a23WgVPR4YztAyX87ypobZV9obvqYzUn6jZrSyuUrREc9vCo42FD7GHeCLfbz4GkuxAnNS",
  "key14": "2dsra1ktYjHFszCEYbGmWPMsbYz9kKcEtW1jVJUDPWB6Z54BhoPWcDBPMUQyntYvXzQnmr1cGQzhx2zWuJE33cut",
  "key15": "4Sw4hym34Wqnd4PH3NmpfZhTHe3JLVUpWrL2eVXcF5DbhG7XQ6k9RCyvuJxAmpq4tNSqYpXWzgWZag2KA6BXdCA1",
  "key16": "2S3uG3FvP2shASgqYUvJgWRy8cnqH66PNuSZ7wb4T16BEMfyTff2D3nrQA8TewqZ6pjWmSsUpXPjj8YdoaniBo8J",
  "key17": "Cr2dDYWKu5kTUmdXZn1ec3CVvyEpnwRCm2Uf1LrsRnMtYkbYLfELLYoy2mc7ShmDCGjc1qUKeQpxDvQudnZL1ou",
  "key18": "FVpUnG7KzG6fe4Hj871eUoJt59MHmrVLXTuQv4wLd9HZAJj7SxfquAJN8pVqwziVZqzYYTDzhQ1B4SWFAhiRE7Q",
  "key19": "64iTbhi1NiK2Zi8FjmwYYRALnB49Wd2Nqitu2mK4ZoVrttzAufGVgzwjcGxnrykJ19iW9nbr2iJKkjUvB8Qxhq5s",
  "key20": "38VMpK8qaQM3MJA28wUV66UV8F4q6dyun9tLFYKiJby9ipp5xg15LHNFzYC9L4JBnp1bUc5zEZ7EaY6CN8cswXQt",
  "key21": "ShUBiCi9aBCXFGmGwhYSLGw3NJ4riE7D29Y2Ye5ScNFfZWtEqZRzhsTmMVHw2b5nwpcmxJos48297V4seVq2MCi",
  "key22": "3MsPUKTsytEMwkgqqvR78iYwhLm2JLGi6j43FDjeMKKXzw6gFYKcXpUPcGVeP8gQF4oQSPZjwrzM9ZBosxGkCUFf",
  "key23": "4qJvjHq2nijpnChjn27oT7Ncj4CfH1dh2KY3VTevoUBp4UP1RhtFMHjydNE27SCeYRoDrbZm43vFizfEa9Tdtzpv",
  "key24": "4VU5muivwLLMmiSN9QZEnY24BZFTvH94p9pdNm5JCk27wD9Sx2QuV8kTk2EnivADZT5hiVRmPJ1Y3ZUY9AQL4SfU",
  "key25": "FH6cL7oeAt9rg78eH8xftjK5BKnKChGFGuvx4htecB7epE9GRxqwRFWRJ1TYU2Vo9NSdJnJ2FmhfEE8vNPthBfC",
  "key26": "4wEsS7PxpNku6aQ7nktGr19XcHSpfDrhrpMu7XQsqKo5F3Yg6XKKDU1ENBqefstZGUvwpjq6nhKWDjzq46R2JMXt",
  "key27": "2wwB3w9vrX2SdVJJDTCh7M4Y9PizQdxuwXcsJG2bU7cfSr4TrkWZxoEAJdkZacoTcRbyXqetb4WrWqyBLj66Vrbz",
  "key28": "537Z3M8nd8SATAAFKoNVmJe5jfNj6FTyDfgkwYAdWBeD8aDPitBF3yiC1PBMt9wSP3HkL6q7nopMY72HJteq7PCV",
  "key29": "5jPSbtcTHQQ8jXK8NCo8Hq6b6VQAagVg7iu43YqBWJ38ZXkjmwimRQgJiGF2qX8NAEGFRa96AZunNSqsTwyZGYyt",
  "key30": "2oV237QwL5z9jzELUsWe8AxG34bAdGh5KkTQaTZACaFSHV5xE9eVijioSFYvFdGyFTFRZJZtDwsusV36JNbcecid",
  "key31": "2qJef5AyHB9PvZWJwPZpJAMF1dZscGXiPJbCwAwzk6uf6ZpMtobrHvU33S2CvM7c7DCtbVj7XQYdXLUD3HDMims4",
  "key32": "5QFYzJ3m8pNmaTkzSygRnYw8BiEQ29GpXbZFbyP753zUQwvPjpFoU9NsLaqeMaV6XkF2gMbMdtHn8bwJwfRpYCCD",
  "key33": "3qzk3a4YLTagN7xMWzDvXaFgzDSZSHrwgimFborCi3KrWwiNmhc4jo4cVqPnG6LSiin78h1jVMzgK7LM7YwH45hU",
  "key34": "4dqyzSQDRRmfgDSFGjX5x3UfsPwa1ryLRwEEmaWp3tPNtWbKF3dEgu8RzPUwZNb4QELCLzcZ88aNzethDpPofETJ",
  "key35": "2EpVr4KwEtXFGqydcDgBHaVThRt9BG3bZ7axA9iHn8MT7pGp3QVW98vj6gR8nh3T3GiNMUiPDX6iFemRNg8uump1",
  "key36": "24tGAP75z5sBwJkeeR3P6Kpf141cfTCpQoQjp7x3Quk87QiyhKtP8Xnt1PM3WgLDyoUPms28vKzGAmchV96ZjYUU",
  "key37": "67HvM5suUjB1ke7c73tWEKBF6UfdUNZd7AUEeADwwjTJaNN8aNXTaNpoLt7mbeBh3t6Cf2jqo31UcstBhZsQGFYx",
  "key38": "4Y5695gsV6bttYqH93cmx7Xnmmz7FwJhisgDnZGY3K6NdbYLjdKoEeCsSeU111LjsDuShwyop2yFh9cH9yBpjc4q",
  "key39": "457gykNBnpnKMxXzyyj6PMHvw2qe1aymtELWuBogriukoMxcPLGo3YSgNxKj2a5xpa6xxTFKLPrxtU8mVHubQScU",
  "key40": "4jNACgLJZcnUYFoEEoCEj7X87JXSK812QLzfEyJ3pXa1EwqjgAasESY3NNzibTNRm5RvoYd3ZN76NV9ZD971rtD7",
  "key41": "2pnDnegqBdrMxdsKcFnUCGXrycr7kmSq32YtdgJCtYU6PQXSHm89sUijicBXjBJJV3zRvHKHCXpW2XLrSHmJhjhS",
  "key42": "4m47CNE1mtxyGmJFKyUq5RkWXwCVvBzWi4wwd7hMXPJ4y8w8TEs6X7qQK66ncoh5BU6FrtWfgCZWQiQerLHGfXMh",
  "key43": "UM6PtxdFzLzqgSho7W4zzujq88opkwuLZU7XARWEb6yaSJKTBtKQ3M2HTWz6b36JpnKQryZYW4k5Mv7UknNyxpg",
  "key44": "2MfStcF4EELBeau5VXXGsatfYrQH2PEQCFMQ719duiu69ECrXCP55p9zgdA99K5LuAwGJTetMdpps9Udk56ERaUR",
  "key45": "32MB56CnGoboFVpp4FR2FSewktR7nKtsLrArxkmVAzdey2RDZBfva9mzWtUzNATHjLL6rSbmFbCbaEz6mtwC2csK",
  "key46": "3dip662nkbNR8mvptSG9H1M8pyQna8Xms8ky4sTAYVuqBkUL4ZcphvHHGwM4nrM81d2hd4ajE69B3CcKBXqNJEuD",
  "key47": "352DCcDwx3FzHWBGZwxt32vSJW3Gy8FcKuneG1sYN7hnBCZfk6Weje5xXjnWoDtxyTXN3dZcKDNPx8NZ3KnQ3Yry",
  "key48": "GzYgmTFoTQrdJj54ndZTEc2TWydvWkbugUYWzVLJsxpEZo5cCnPgGSr4PAdS6UJhGhk2F1FQs5TpQousj7f71c4",
  "key49": "4mBYbJ41AzxComnqqTEj5GkdqUu4ybDZosj56m1PkBiVbCYHzzwC3QQ8xc2Hz2dvoWquWjF28UHUPCYj8fmvaAVR"
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

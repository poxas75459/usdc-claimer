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
    "5BcePk1bsx4NAmuZtjknVPndqv1F7nckJ45ZjNM5KHemyAyrRXH47nnDsjW6X6viNgeVz6JjLLXL9x1swyKQLx5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGyQKJqHnCF6YnxFChnWPc31dTFAPnVUnhbEMExrQKpKwXpmUSWoGYyMS4PFLChZu4LGuD4w5uPgLvCsAMxXkJx",
  "key1": "5md5VXSRycjVGNN6oatfiDArYP4wSDtLMxgHoJqmwU3GuzuDypCpU9UdujbUTHaUgVSpM8wECDNxKJDRaU5KGbSF",
  "key2": "5Qen5wZ23Y5kRmf28Dc7mExBEM6Qy7ucxbYTiZLvoK3HU1RkgfEQ8q5AubRZ9YYbpSei14XBt9dc2F9aB7A7yfoq",
  "key3": "634XAnAj6x9S1Lcsb8WcgxyYL6yE6xttwChQWL6je98GXcTvxyPK7qFqh7dVjDMZNqaQagfWsrwn4jaUZF4bfUnP",
  "key4": "PADPUFHQvWS6vAEJE2ndVWZQf8iF7WA3HuCfrVgUQjU3U23qV4D2TWNxMhNjQ3DXbuKHjMm1NvuUKPQDdfjArVV",
  "key5": "3spm82fgP6uw9ZrzfDPa8HtK3oC7bj5nNEXizPaShASk29VHhY5S8Z1Yzqh2mDEbY87C1SZEEJTCN15zEQPzmiNb",
  "key6": "2iViJ3zujM5y2cYr6tcPhTy8uiayJw6EpH4shjXn8YxUhoEFZLFYB7XbLPip74rar6bSFvWCvnygUHBbcbdshh2L",
  "key7": "4gwqgMQ3xcLpacDuqEiT1aNfC1wNGxubE18vuTTtunZKriMxUw122vG14AJFxwSZhWDVvzjKDhCMjPVz8f7QFXrb",
  "key8": "Vzjy4aBL4RfywG9oGfkuwJhS1XsQ28STN9fjZbo2q2yTNCZZJkAwp2CQU2c9yj3GvEJRVRBgqC8f9HRSV35wmy4",
  "key9": "5wXoMzsbuHpBHGpZSxCSKp3KgbAQmTUPvAxCid85QHZTm2K6g9taEBtM8GLXwFXzZ2Wm7ueSe7fJAMnFNFZr2g9S",
  "key10": "4rUNHCmjFMMBsqrKhYXA8SdyJpj18g1SSgBMpR2Fich9d7yN4zttY1Pd2nzn1NTGwaKDwUSGh2KGpvhs1NAeLxgn",
  "key11": "2iKC3h1n5kY3VmEb3veT45RjyKx8VcKkpYuXUxXuRT9FBGZw3RAp3ELvuTYCFa1z9DR5ms8CkSArpmSg4HkfX6Kr",
  "key12": "31GBrvHun9mvkWs7hxEBvvhHtVJQCLVDKEDbtFWJnwXJ1hNdHWkCre4WfCb7rzYr3qLwPnBmZTM97YTtYyChbSGE",
  "key13": "5vyVoZqQCRN1wBjEmKsjMW7LomreimXvMXLD8fRojo6NeT1yKtiP5Tvz2sMRmbTjoVr1gVM7ZS5KuSbw39aVw61K",
  "key14": "4DBtQSeP3aaQf7Fsnp9XduJ3gLHGohTj77PpUREq5sJP7waesqZsxxdR5YzghnPcQxJmYpiLdphVsGCGKcXRZv1Q",
  "key15": "5LeU4x8vXEVL5UqCRcTsNxKhG5EV1Cj7cjQiJtp1FWzPwxyQBkvEo4SFUfnfc9EcBYKsnm6nfWTaXD23HSkwvU6P",
  "key16": "3iYXHJGwfdB9TLv5TmuVibqTAFAxhz4mqAFfiKXykpELnDF3XFhRK9iK8umMuXqCMoK5B1Q2zqgiUMqgSXDEzs9b",
  "key17": "2tM5wQoC5Kw4UAiiMfrHjimpZsnHg8iiY8Z65vFkMrkUFDAexy2TkWky6H2tRQHczkgd2wJrknL1EeXNk2q1D2WT",
  "key18": "4aEXTs37fudrNDgcZkL191qnpwCVB71b2MNpD3ZFFuSzmQA48A1UgLqrtHAQmRkpSdeM6reHznSih5v5XFu5jau6",
  "key19": "5WaMQ1PtR3uRJXxhroxoNnMBsc3SY2Eu3Pg3D1JPrCy5THXP8wiF73Co9tDVBhkYLDqrxurvBubivAYvMR1Pgg2u",
  "key20": "2dPrxRfLQsdS2vZdqzabo3nb2A5QxSRh1yjjQb3YExec8QmRv6FyKRePSmoi2gdeWnHdp2P5EzB17xD2mbRc6bWr",
  "key21": "34zZKLSAgMjMLVUXeWSdnpEbH3M3bT2bQd51whjM7NnSMwo7c5KpBiPLaFhXwQ79qxNMPcW7APeHAAvNpsAMioDA",
  "key22": "2iUuvvK3XT7NtSLRi6K5TVjyuCDk16FVrF6EmDkZFiWy2aYVqg58FnwX7dUYRuNMZhGsGvtwiq42Bmd6qtZZ3MhV",
  "key23": "4C8Kfwqaiqsb2NRBDa4EPzuFqQ1EsATAh9LC5BLMNctWBcgkUZDh3zWwcbALfQ1Nmqu2YYQY6nxrPfcBGdTeBGTo",
  "key24": "3NwMkca9tuEn6ANUmMopE7kUCx8gnCxoiuWya5VQFSdDahtPRjBwNC2jnW7yxabjEVP1mFL2vm7z4SyWpoN57Wxg",
  "key25": "5KrekVCL23WujWbL4LGgdfn2xLaJs6n5Pjfni5RuwEu9LAzSeg7spyYhHibrFjFx6P1uoysUkSwPxo7Ep4gTNLAj",
  "key26": "3z1x6uWspMwYGxCh3S3sq9FP3Yr8Jzbva6mFm8LfuSAPh845Mb8j9kTXMpz2w4bU4bMTXJKiTRnsvztkYarZqXA2",
  "key27": "2x2F6uVwoucrHVXiEBt8vAfYoCZGixKarrUmaynRgwFCsVcw8mHWjjACBRrV8zhBxqfPTyXVzfJ1RkYUX7Ea14GT",
  "key28": "4HMH8B3Carw4c4w39xzzeP4NvMhmPxns8VimV11PaEH9JiCupYXAx4cB6Wf7U8aDYQ8b2NMvdg1GAZhdKAS2mNGU",
  "key29": "4L14TDA1jYZYTbBRKC4wotZB6fViANgeYNhfdugAibeL2Rdyrs3qNZr7oQTgQyrw7RwsqJdjoemBunT7aU8ox3HV",
  "key30": "63cXDPSa4bwzyBTY1oyR8wCq2mnmJSK56FYbyietJEiUaBmEcvT1VHhgZtXyohXkDwLekHrHyH3iQMwTk6yp9UJH",
  "key31": "3ThUM69pHsxvPGApxG7E5wHN8RhsFbX6C5VjiJtLUvfj1fWVYF52hSCSqyr2KvKoHpLckiK8QtHpPBxFAP5dGbrd",
  "key32": "65b3vvVEkk4Ct5nYpvtbDHVqXq81fBQNxirt7G9d3PnSz615N3ZUMcTdcFWnBvUEXzYwV4yDUuH5ov15ickQmYPN",
  "key33": "DSeomEwvdW9rG1KCuC3adwA57CNrPmZauNYPuDGQ49Yqpt4eFZ4T3UPe3B3emWCwA4Mhx7gjeKnPi1o37q14vca",
  "key34": "g5UagQo8E9fRgr2fZfbj7tqAJzQcmFPhy1izPR7HDXG6cG121XcLLNfnvRwSAtGvPG9UAcRyb61dwALFt4aJmFE",
  "key35": "5cyoeC5f4ohovnH4hLzAZpKUcTuC55bcaQ9dkY3SK6XESPkJfddYrgzkQM8pdhBpeotbQoSwvkYz631b6ufrNjQN",
  "key36": "4wiPrVGX4XPZka83HArgvgTEi3Hq6DpV16G3RV5fCNV3ffVaTMTSUu6pqDvp2dv12kuF7a6y5MD1jDbNuhJcE4Lb"
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

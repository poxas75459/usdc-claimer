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
    "5ju53T5bKhxtJaiFGxN2z18zEqMbVw8D9C2zKSE8x5GMRDXZARWPVRh76aVdj8AvFLvhVgzzNWD2TpC28tWZ4dze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9gP1BDb7ybTUDMyRfsruv7uCrmG1tP4DAybNMCRcgU93hQ8XTpuYrym2eKtPGgxPzpUTDR5QtCktjvmzb9sVhN",
  "key1": "45s8BzZtNqAzjuHRg7d9EoMhCWPGCHiL8mELkcpqL9qVci5ZcKNDew9pwZjyrF2ewjQvgUvXQT6vG9a1pm5BRcxv",
  "key2": "5ji66CWmaMR2MWDQXxvwR3CA5mSYAqsdgAPKyWCoxtqYReX2vX1eAAmiBF9Na9kmQ9qY87EpxEGb1DzHJwQ2MPCu",
  "key3": "f2xppaNLHcQ2N6x8m5VwdVKbP1Gv4SN13gvgT8js2QdfE7wsRve4cvp9TB7NtTk6cqa6nhrdFqZsTkEULv9k2T1",
  "key4": "4FGTrMn2uTWdTFQy66wta9EwwUhtnWBWh78fT8Ux7sN91r41SD3RKCSjSbREA1yZi1oHDWTNgLAzeWKNPrfvQW94",
  "key5": "eioVJcCZ64Bdj1E2idZWdwj9GYLPrU7rAEMi8w7HXhy6VPynvXPaDE6zuVBrakm7ZvqKQ2FdvZes8QE6gQVQpsw",
  "key6": "3KCXBfwbmZubqNGuZg3hH8vj7wN5qgkDyNu7qNDNx7n4c3hKGkBrmjxXhooNYcSAJYeHccoXT229X2jXFucJWgDL",
  "key7": "4eJ7oNLdqoUwmuSMaC4GC3afZoWeUSGYjUSkpH2WVqzaeKXyAF21HEY2LZRjfsgdx5XRJ7xa5DajNKrrgBvLVWsC",
  "key8": "2gFMp6QwKuFFNLRq7XiExhVkLcysoXmhJ7cqopi7cy1MxV56jdhVE33FY7iVRfFPDQNVMJoC9tbCR7Vgm1EmCdqE",
  "key9": "5XLqWKjJD3rccMuLnWDosqg7be9JQwkXb7TVyaiE36eCUFi66pUD8NYkCMp9uncrRiZpr1reiYmQn5SQq9vQVGWj",
  "key10": "eC5HyijzBhUd2qZWB2dvCWPQzpaV3XAcC2tD5YhSDFDkVx2Co1FzXndJdi8T2v6nf8gw2AEz1PqVRNJkfK15e6A",
  "key11": "5vVDs8NUXqoL9wLuptq1XTkCrue3j1pZuCY5jgiT5JjcLYVWnbDcdt7E4uoPxRyCsa6Qs7HURZgTUmSUUb9W771Z",
  "key12": "4pAympRnvqi6zGu3tjg2XC6ahA3wCmwrh7squ6MJSJtpFY7T1UNM7BD8m3d885TcBWWg1QiR5EaA3txbu9PAACpB",
  "key13": "2Wgv7Et1cqfg3C8tT7MhE8nnR6RHsCjgWnsivgfB4EwFmQkhodjMZGbxwf7G484JkVp5rJAR9JNdirggJf3TNPjN",
  "key14": "4BmAvmaC4uv2L7Zsz7KXMV6PrMnSpezXKE56CWnkdQeD8wHUMSHvTxaooEHaeMEWW2VsMtwbjHB96siJRbRJqe98",
  "key15": "FMLstQCqMkJdmDmjrUbqbgpHhPqNG844x9hmWti8keseKHhYjPo1XRKVErzPqjJkkF8RPUcEPTnHQyrQMwAZWDu",
  "key16": "3DXYULvur2GBHaePXsW53DNCFnRP6UnWjaNQjx4QVeqTHUz2YfpJPVn3uD1j3ZDdp5pTderuxy5V8DYKDHqCy9UP",
  "key17": "2dTjBx9b4NghmqXUcaWhdDjwQTdPCBHfU1potgD5F2mpDaRtiW2ADDbnXn9aE3ApBZPuyAG9q9v2vqrpnDACafyL",
  "key18": "sC6HdTcwc5z4VTG6mSVB6934sP4vyQs3LjbwERXEChtRiMwpVSJCJK1VBtKwFs7YLxY6GpfXZ6MXLrC6EKhEck9",
  "key19": "46gCn7eGwiiVfAmViFqn8cZCVyXy4u2nBPHjwSx5CjLFEUTGCrwcGWUC4UBitACquHqYyXSvUjazPPk6gJuncEYm",
  "key20": "2ybYHa15UvwcKyToiBqU4e25rn5cJGn6P5grxHDhBt35brqJPGDTSM5iuhiGrXFjAhgKEa8PTzJGGLyrS7rhRTky",
  "key21": "5k9M5GaGxUJ4ECNfspnSKnmQAr8N67dp8pAzmUxhcqgayiSrJZNET2Ay3rtGy4EMJrjWGfnevCPZKn1veXwRcCNa",
  "key22": "4q2X8L6YkpkvTXJJvA1xoJfzyewfD1Q6AtVp6Mhqc47TjENcfk16cfde6Ztf7V2h3aZE9Q1P2ateeRrPpXHqLMMZ",
  "key23": "4LjP2vfF2zj8kWDEPuuTKaofH4xV4RiQ5wawHJksNzh1tJPNFY8wh6U1Fz4MqDD8r7HYs9uMw9coPYG4mct2GX89",
  "key24": "2fR1f1FVGJQmVvyDqZjDphRcgfex2iLLRSmKuY39dAryRxFkLdXeSToeNp4rRmXBfZ4apuXYJ3oszy6EpYtXzkuo",
  "key25": "dDkghefLHd3ZHhr2qPqNKbqzxk6CeTumRRBLMvKTetxsWTkai9U3qzSs1fcKHNX6wM57of4qe4L6Y48erSCrNMW",
  "key26": "48sN5Q6cpewvxBP6sd9THiGzR2Wx6e8oP4K7XQ7RvVYjth2hhXETvL6eVWVhjWYsTnf3aPPxKFKBi8bd2eGkj7vR",
  "key27": "3wntnwoTSLee49QQPLRpx652XfHMiEwj3ijEdj71gzbj4nuXKiy959poU5XJQsEaYLWExKZnM4WZpaHzgbcXM1Pa",
  "key28": "3ZJLnKMAEw51f1x3bJDackZvixRiqKM3wMTp9VvFN3LTGEtcqnBphVQJvg2D2MWFLw23CK11FqHdZzsdGEuTSWED",
  "key29": "3s7c9qmYe5qcEhASdD1RjtgChLbm3T1c5YwGHb4Q2QhLBscHb16jAfWhpvbvpWM4T5A1xexKD8UmcMoFMf8Cs1vo",
  "key30": "4NJ7w1fnNK5UeqUpoduWxeJNEi5Ej7PuyXBhWARBxUZuAxvRN3BmjPAocHsHWRJGUuxuxQvK4dGceZfSHkSkggk4",
  "key31": "TpPijPhwkUxEwQrYLFTMPaRyyg3kiU84QZUKvgPNPYRzU3UiqGCfuCH2Th9NhYHoY6Emuh8pDJ1CZCkfcjBuw19",
  "key32": "4gfi6bjy5mBMx19kRCESEDTQwggJ1v6BQYA2re1F833hRHoGRLoH4Worfk7mTsGo3oKGMMQqZy2xxuhiLywAyQXG",
  "key33": "gwGNdFVNiY5bnY1YFq5rZeWDcDdNBejJ9ifAq9NMp4hYftmaCTxbQmSyQDSWwM2yuf4PyfQu5ZSMZsZqgpuGia3",
  "key34": "4js5Ak17NWyJrjuGHwDmnbEe8Do16RkR7zYF557u4DMF1jDVDdz2sjkR7c7mAkP6kRJTS5NChDDuyPAZgGwEL3dF",
  "key35": "9TEh12zg5P9Bd7cKjFb7rsF9mJZCgPDbS3wRofkASBnnSxa2HTm3e6bUCce6csZwDGVpf6tm4FTxZqs8AV793hA",
  "key36": "5nxmL1CRLrsYLmjzJoqaT3xi1KgVnti57HMn7v6nTVQa8GtPzxdb5c6Z8d2ovG5ev3PxERYDDgqCDHk6msStGV9K",
  "key37": "2QM5jiPkmSe49YXq9HFhAQ4e8R5414E5vw6pGP3g8iXK9dqw31VuaVuAHCLGLeU2qnBiaB3vZzBbhUquXpyCos62",
  "key38": "3Bv5P212jSnMbQmETi3kJa7E7H4MN34Sa6afLfFaFyxUVX9yDEs2U8GnB54JkUkThZMN1yLpapNjg3MeTeeuB8oe"
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

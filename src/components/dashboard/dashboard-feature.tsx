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
    "fGy9bAgP3dcPsBe2Djo1jYUWc55b21ct37C8Y5CLMpnVkEvDoszrzZTxXesHd4xHNDt3tJ4FJw1dV4WGacGCNXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7g5Cbzt54X5xEvCCGirqKpLbSWkhEmty62bcpYZPBdrfr8crV5AWW5LGy6MB3wVkdUT1JgumFW3gE1tqAPWApup",
  "key1": "58HdocTtzWBsCtw1o76M78wd7yMrpLwu6KD5TR4WTpC2D1EggzLps6kqCk72DGNQsDDxy9pi3ABJAgDa4nEAy9wZ",
  "key2": "564NEJxnfcn286PG73VXVpEjYXtjC8QSXRFhAYph8BcBdqP2Tfa2QTGZ12A7t4Acwjr5cFzBzNeVQcsga2QUi986",
  "key3": "exuDGfiepLyQaHDJFCXPgsBWPumaJNVQopajAmE9zdYYBLygEG6mGnuDrXedYYasiiPEPirwLCCmK54v4a4c8J7",
  "key4": "4uBaAy66XFxWQcUNeGPkPMSAcgCbjZDNSNcmNYF6r1849bhRZVWV7RG5HQKwysmstSg3fRgeNyxs7qPqSyRHgHb3",
  "key5": "2E5JjCJfDv3XNoPVpSBxeDpasETq1icFQHfb7psHowztcATo7CaudoaphxeVgM3s1mDukbwNanj9F2ssCfLzXzLi",
  "key6": "5vvGwuoNsyffoUyZV7c6fMgvygzNsJjVsJwSruaHFeivtNtU6WMxXAKgmoD7CJ7uKZczGpKSJTr2vc78ZYonp8ui",
  "key7": "3Ze2d5nUDspaKT6h3Nw96dFPRAAeoDkfcd6M6YXKhip1TXShtZr8Tv1mo61o81WW6auanqDeEsAUpdmb9qNxGBfY",
  "key8": "45RXqHsQ5RoNrd9kXbStZeWSBbFBFAuXRViGNK7DP4VsYeTYWozWKY1SBL57REBGtNJAXmfrnYEMS8Btzto66BGZ",
  "key9": "4vYUENVcTEJ9FTdDKdrUKrLE9B3LyNzHhxrAEeLu6bePb9PMtEBZJAaiBigkeySBYhvNRgu1uKSLbm54kmYfKvec",
  "key10": "2RoMf9cCMnp53at9Zyb1Gga6Rv4UTe3SNxNYJuzSND5Zzmz2nQYphSv12StV9y9cdw3LKVjZJZ4wgRoaEEcphSm8",
  "key11": "62qospwcW5AaozWyFmWLX23XQjfmA53Uxwnzphadg4zKS8ydPUFhxxgj3AsVcnv5cU4k4abXgh3wuKksTsNQB4Z3",
  "key12": "39w3Cu7MmGbB19QAS5G4Psr1dG7pUZytNn2wEb7kHSZWiKZ2FamumjaQt2DL6Z5mJz9ji3icmBL29jGJ8CPPzGoK",
  "key13": "5jn8cjjvhY2b3pxDDuqdMHyq6WtVUVhTTgbjVrpQbgK59X15q2tSDa2Ygkr9BdeLR5A5wkpFeLBf8aXVA4bDHZ7B",
  "key14": "2zPMPQgeWztVPrRoCvfcS75m5q2kNiVLNMUgdoaETrtydWR2a9F7ypvfR8BnYWTGGHZAzjPFKaZhS7NngFTFPkhT",
  "key15": "4eYPEHwE7u3qowyR5Aymo6kNxkJWWFmvr8KFnRYzirxMj2pYErCSK27wvnTFCXxxa5bURdqdn2QaTqWLgTamkMUr",
  "key16": "8yFUw69iYGYNBHkMbpWKKtyyzTMptVyRDkwCChKXDWPyNMBMpSN32jqEVBwBFCrkhFpK1YCfXwbtUAaLeQAbUse",
  "key17": "2xGQ5TvbrEgKPUkLEZZdN6BKftVDR44foMseiYdHX7RssuU8b4HbMDdnQGw5pHBmyPpW5Lq4sRNeFEn6pi7duwP9",
  "key18": "4gSmXq9DR1XguLorNsYXkwZWsGggocUo6MPg5pgJLXaHnWduksgQD9zq1pL6ymE5YsKjtPPuaV7hcy6RY6PCqcwd",
  "key19": "2DtYiq1GyuWbcTY9svmhgg7WF2UZPWmfHBH3WMUaTnM8BHYhe2zohvg4w4toSkZQi7TMxejwxaSx2rGWnULg4uqA",
  "key20": "5uBBBjCFdeZaSoh2eRFQseJbenDgc6QcxTSUzUZx7dQEMFMg28oxHtfhrsakEs29R7yp8MrNW6bbcJaZC8KfEzpT",
  "key21": "55zZ8h2q8iWLL3iokvCyenjYoAzEHeghEtDUAy2kpFoFTFSj5rAsdx8YkvSbsbnNZg1oP4k13oTNGPwhEyrsUuKK",
  "key22": "5Aofd7oCx7HyxpFbmWqRs6WWQBZ4Gcaj85USGLunNcgdBAjQyUF5rkx7ttcpWbK2shXRcxugHUyXAAxitAMk3s9C",
  "key23": "5QofcrisXmqLzKe5QumCBJf3mhF9rrGEmA5wTCvUZtu1p98mQ7PRpSts2hJ2UQVN2mdkYz3q2oShe3qsa5Pv8CcL",
  "key24": "3Dm1H2fpPsezxVUp5BHydTR5t22rFpCpmm5bwC2GPb2vzuRZmBkqm3j2sa5eXNmW8hkH8DbKE5jseRQ7n8YpTJxu",
  "key25": "xeRCFQuApfpHSohGCHpzjeoncMTDye1N3zyz7aNsC1xRqoubmbmRufeQLLT8KW2zj5XutwWFhGxqHEutqmACuq4",
  "key26": "hGPMp69G3DDBsZXhrLSLUeVzsxQmVgpntnzZ3RmTxzSJgCRdnhLXPfm1FVfdzWgamH2RSnWDqzvENV52bcEqHcs",
  "key27": "3QuSVcKLvcjfuYU5JKXk5v79rBv8iRpkr9A6tXw64AuwQcidNSvNadC9B27oHPaXNV9GjJ5YCDpngtZtn2FJKyyJ",
  "key28": "3ycEEWW5jqu1Zn8G9um8gni2pJneHWifta9fMp6bhE4mJNL5cexf7c1ri2t3PrUe11edocxWySXeUHEbDRTW5Azd",
  "key29": "AFqRATgHm9Uaw8YtCK9SMeF7UPmpF6rHTB6RVMXfiT1TUAZisJ8tRpntWgKvGHdNgaqnXorQNayqio21ppZQGFa",
  "key30": "5icLSi2aKwCDnX3qp7d1MtnfKjsSBiFi6yTLMeXMqcfFMsCFQQ23V1fPcD4EroGhbnF26FNGfeb5SdDDB4h1M2wz",
  "key31": "4TDLWNgJRqmATkpcn5aMtcQs3yejk8CT8GuTds7yXzvjNuFBLGM9TsZkyANaCh5TcungjnPGPLiBdWzaTeVBgZs9",
  "key32": "nDmBLqZrDYG1M4oFWA1ubBHhYxpWWxtiZd1fAhw7LPVCs2WnqPX8XyooipKJeiEFYJviTRj1p99K7W69PBpFXuQ",
  "key33": "4dw1cuBe3ThTe51vLWLWvViowfprZa5BLVHYhJd4tnQbPB3iJddhgwmZmSMvLLZL8zaHyn1Tdb67T2ZDPiLoZkVn",
  "key34": "2N1hLbpPChhQzJFaXL7HqE5NKLy7rnVdoteDzmZ7Nw7W6Cr5st5fyBbiAej32KyEP7PSwscfQoFGUcvhKGUpXQ1a",
  "key35": "xL3jvZb7WDN9pnYjESP7fWNLVNtZ59zaZYizuhE9ogDGyhotjUCpsHy5bbZ8WiGXGni26XrtSqx44iVHiYwsdkf",
  "key36": "2qaWSeLF7n5Jo2tBiBoWevoG63uV8HCveLoDmTfo6cGc2YJEUGTASRVLyfPJyCNzszNc3j9jEY2EDrivZ1R9WQK",
  "key37": "vS6iqvw3M71kSrBjkJT5YTJyNv3XM9YkwMbzr45c4TCm592bdDXQZkTJutB4jNzRrLmp2FPTTtDsnxzLHrkKqXX",
  "key38": "5PQqCtGtnyxtXkUcjV6ouZ8UXkZA8mnksndh7BEg6RjmpMgwNgReQFvuuuEcGgcSRomfmJG4WsmHC3JqdK9y2ryp",
  "key39": "25Lprg8Z6xucNk5rorugXFRUjfPVvLUCWMMYucCP1EFR8Kkd9861g6KfuMxi49i1ShnY4wanpkNQBfLEGMcL6DNs",
  "key40": "4pAsYh3PDMGGxCY236xS7GQ7VT3Q4az79cxi7oStY3gCe63EwHk5n1X2iTtFmdSFUWScHLsu7WCLiFTB7nDt3JQG",
  "key41": "3Rph9Vb1rVsHhd8zdbL8PoBSLSuLjUqN8cxLQakkrmeN9fJpT8S4K911BUcMpv7VcugyKhU6CeYW1K4EWkVHrgGb",
  "key42": "4vsQMFdUWtn9QMTwu6sAigNVGZF5MSLCGvCwLXUTWqs8tXWKs8UqPyqo2CLVESoFvkmyowjsi2o3znX3QkEpJ8Rr",
  "key43": "5ZHr3utMBpaSADXXq2Ee7m45ZuLJTnGK4W8v3UeQ1P8Z7txwEhv86kDDY6TQ8fEiY2Nx2SSUD6afLfiFmSywnUe",
  "key44": "4nGyu2B8qGJpXF45XkaRiomcqpJXFgdW48zBYHjmx6M8QDDtCnpRnVVU2ayKKr9h59xm9asBNBnGvoKDPu5xnBnT",
  "key45": "4zPxE4yP6X8WKk8GwKpURKb9w52eYawhj8WzkAJRWNh9q6W1ESCwZHybRk4zWoDauGoXL6Pp2sN27hv4UXJX27a9",
  "key46": "2Md4RBrac1yFS4WDa6R3EYygUjNXjTb5osQ1NWSb4KfcuWnxYbxNQQqT8uXB87aMcWHSMkTEtvr5mTq2ge3sXsxH",
  "key47": "2qAwwLo6RYMY93YtDMmYD4QGd7pwZ1iasqQqYJ26TSKzj5mfskm5evUNhPXMB7NijsUus3WfStzdcZV2m3GSZ6Hg",
  "key48": "4P4mDQWvQdgoKF7G69idfUbAP7n9b22h4azv5VyYfiaGJCCRum22DzeJUrkKV8ZmruwDNVKHWDtKXzHyTuX8Jr6k",
  "key49": "36bXjpNyQMwCVoWZ3SwrLrrEm3KUbgd5YYHhu1q8MV2WNjZje9B4rGvTfMo87c2AeeRDE8sBynTzJDyXwq9SLj5t"
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

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
    "2CQgc1JqAxJUGKYcTwj47fThH6AftcFtXA3niCrzZ6nZoWP7VzU6eA6CzRbnG5exskqiVk6TWKtDUb9BBqDwpXqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbx1M2s7yZdLtZvq2Jb2TfgeryasihqxajMFKNkFWmDoZPFCktKjtzWRELQYiD4MJmTG46EMvLDofSXkjhBN3Y7",
  "key1": "5dQ3ssTmxZc8Ujqbh9yn2cj39HebmQsjnpKcyVQRAC5XdJuBddKPnKFF7C1WnXK9DaHYdY5GZVerdyLTruigZ81r",
  "key2": "zJ6yoFQdPTicEwXpfCB8RPfFSJohnkHNvJNwWm6nbsQiJPRzPN9HKxGzASzoot28w83pVw2ZjWUDDYnZJ7D1n3u",
  "key3": "3T86KYJd9jiKAmfKDt1V7UbawVQexGsXJzJ2KpVK6BcDZJXsGHnL8nMg6dnKjprVMH8r5bL29PdgL1k8jKAT9ZFC",
  "key4": "3israDB6az2vhJzTQygq5VAtRaWNrsFZEqP4Dw5ZDnGTM8bVSeCduAiVedKjAVznhtUxrnsL2micMxehYQQsE7B9",
  "key5": "25fkY9a7Yxh22G6oVoSwqaPPteT23FNzvjgE4zFFr9Netx1YgWoXC5KFrxxx9gueJ85LD31RXBPoiTa96kCgeBZu",
  "key6": "jCqXtX4ZcwyanncK9zoDrFNPTZsuSeps5U1pSrhrAV8KmbRGjc2Ycig8vdEUc7D8N74nHVpX9LnLLN5mogzgAaR",
  "key7": "jKXqMvmU7aSVrtTRDBJkDcNznGy5P5CZPNB584PnbnwNB82rL16WsUe862yBesK3FcqrPuXgfcp4HiaiVZ44KYJ",
  "key8": "5EGceBexLLmbrNkwY9B7VnLgaXsjy32UCGBei8sHxVMPDG3hTrqZaZe52AmmoM8A2utKpA4oXbHWAMDqHR3kb6kG",
  "key9": "3tLbDMkPCBV4pB7FPwrjSrRb3fEBwP2kts1to78xVtg3ZemWSetr7Ksj7bvJbfktWQEdJPdDXKE4Eqxy4VxchUbE",
  "key10": "2YKRNNZ1g2E37Z9DyS9fidw45riswE7UfX6tm8zeDSeYUN7imKURMyroEvYdmMeqgHyFJo1CEFQMCVzqTEYC5oFY",
  "key11": "4Apqy8VfiR3FACDtmJzqbz4XSesnZVsXGY19viLnNWb1utTMebWBLutH3e2B9tEaa2PyCJfSNAPgmMLSyAXej52e",
  "key12": "3yCebpiPrw9LnQ3FNdp97Japnhvmt7vJ2fYBcG7dWrxTDCGPnctVNKpF1v3pNSBHHap5NEr9hsZT4E6bSnseeXie",
  "key13": "4HLJ8RNLWEpBknA6v2Uv3x3Rxxua1K2feVik3RtmEWsjW44ABKzFgs8v1NZtWaFu4zgbeamhwAyX91xYCkivULm5",
  "key14": "3xYXy4Rcp5q5WktYtmYxCukMteqBErU5VcG4H35pf41nbkA5Qzbc5aCUBBN4xBzRTA1wN1L8iRzn7S4khSns9Wt9",
  "key15": "3zDWpb3iHExWWrcEuprQFegfH7Qb4dvrJ6Y8qHiH5eSerMcCdfsPd8FdD6uwDiz9H17KiGfmCCxusSE37JoWAehs",
  "key16": "2q8oyt62XtAyJG8kSQVJd4ZdfWCt2mjvh99t2cJmeBqwkE7TS4iUkCgprxU4vsuUnCiPo1422tdVWQtRuoiKXz4m",
  "key17": "4nvpaWmK9jpgue79Dn5NAVaCuNfEvsaeB4PJRKA34K9LmQfBwJcbaozc8DNJhvx8Bay5zejNyfCG5T5Spb7pGdMT",
  "key18": "2UTNJd4qmkWsyUz6oyzktvYwxp1EmuonVx6n9bkExhq2QSVnGsC4DhGbuN2cw96cYmMAkAmoWAwen5Zc7B4WzVuL",
  "key19": "2Ss2uGDPW6z2R3srVbQHfxpofAdaCcbD4ipiRuo1HqVrpZNDoua1R4MapMx3BaV31Cn24Abjw2WL3b98yWR7obVb",
  "key20": "3erc1gCyZhgz69K4JDTnKvguk2Wmp7iNto3yjeeJKpGqwSQcVKBHhk14CtSYVx5eHvRg4SixvK3bBHFdj66nbCKF",
  "key21": "FyJqtp5uRMrFzvXPEvKCUjbwfpv6eBLuvWF16goFXNEeuKeMLy4m7NhK19jwv2r8Aq6xcfFdjqdirAKQyWN1YPz",
  "key22": "3ezpeJXo1UYPVit6vCv3JVUWWtWhvTRE3UChSbDjoUyMDdtfseDe6MenAoQAyvsm4RyjdzFgeXDvoNreMxQdBaeX",
  "key23": "5tXEDVJXQRNBtoSkjQ8Ld2hnm2obdkxF1wZdrW4vETqyjmGmmqB3A8pQTBL4FkuNwHngKMtgXvgrvM6Z9iQoG6Vu",
  "key24": "5jHntkneM9VM9rmt6AwywF1awHvtrAT5U8FvvmZtmt77xxBejK7cYqwWQ6t2f2Ppm74fu9xCzEVyAjrvBMjKHTJS",
  "key25": "5TcDPVgWRBwiKYotSa5VitgiLmwwij7VZTsEYGdCFj68CxwdsYv5o99pceEDAoABzYsH8SCgV7onvLYToiabkvLV",
  "key26": "4qE8UnapuTG6iD6oovgWxoW29ubiDB41MPcvCCeV3zW6KL7nYUQ3gRUPyPvvmrigHRxVT5RQYYsGwQt6BBMYU57t",
  "key27": "59tEXLa5Nv49yeXHsiGXufzUaoEx8uhwsTZSaoZSbPP6UbKheHzF3nyivy7a9VqCvEW1ZA2hD5P4cvJjrqKPMj8Q",
  "key28": "TxS2Z4hpLCsZDosibqkDNEw2LFcaZGVMzHWUoiukbnGbYtHQaAnRmBMmN6JsBjZCNm1xxShA4LVucXHxhGea6N1",
  "key29": "2GhAgZxV3RyLsbVM6P7xM9JumwC2W1eDWNbAeV6tzKHAaJiefyVZTLSpQqY6bSguQtPGP2HMfQBLwKWKhsE8KjHJ",
  "key30": "3puS3aH5QmocioJeDz1pwd5DPnn8Ap34WpfKRVr3x2LxZd1zE8qMLNN3xYcncqq42GaWRVEBPAw5qwuqCAFPkmaD",
  "key31": "3BGz6E7ch2VEHMEod4cSzAPLcow8NdFsbBf6m2wjVxwPwaCTMyKfaapY6zAR8vCaANFtZgG4BBitFXdshYNTV7RE",
  "key32": "43UrnCgoXWTwSL7f16VqYiDwebMv4FABY7LcdHyiL6MvGUdNVP292SKJYSheC1q3ZP5RRS29EbPE53T6bU7RDvzx",
  "key33": "fMtZ2R8fSpor66Cc1YeQS4YFU45Nc3uK93ZAc75DGfVZJvJZ8VJqgkgKEZ1YEwnVd9fzXjPdJAME9zBntwNbGRm",
  "key34": "4FhE47X7VJE5PsuM6KSMaF9FKWhcT7uVTypA1ycsiDgCQ1rWF9sHuGppFEKXf34xBt8CPbb7EvXyksboP7VM9AXX",
  "key35": "4M5TxEQpWLEGz4ZGK1Xsp3tkP9utmwcksQ1dwX8SGMSeep3syyRAJgfuS8TVNwmh5xt6XqAeRY37ZRWcFTNFJqnk",
  "key36": "3RvcMSgrHR33yWTVm4SADuN21KWWzbSgvvUVZkzTkgjkS39dWLaqmPbk9BbkpnRynWzVH2bLSWyxHQEcZqitwrS4",
  "key37": "dMrCBViW6b23vP8mMgMdCKtB81xFTf5WVjHNUT3YAXoKEjRveuWr3Ljq2BogVLuFawL9zQQYpKNVdcPSw1yz35E"
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

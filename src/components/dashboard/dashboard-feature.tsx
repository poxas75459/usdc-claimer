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
    "2bM6EgUvrkNHCDyx8WxAtb4rA8TCjNozowdsQ8R9aHqgmki6YEkkHMrk8E3ecUXQJnDvkyaBKWp6qRCvL3sfP32v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N8cPe3a1m5ip3JewUGddGRVd6MfZ5gbLMMgThRr3nSKse1xmuzo9LECHRKE6vfYdw5j4hoRkSrXKV14njfHUMqK",
  "key1": "5H1xTT9g61Yy3ux71RqcEYKJrAujrtbENMsPRemkXYrxQkNmdNyiVUDN3SMX5Xa8fuCGR1tXSDq83vw8WT4GGyDk",
  "key2": "47tsiMh3prGJf13NRSiQ3twJzHK4EpYhqPE74sz46Jpkc9VygT9M6ntwZZtx4YV7tWCdKDP3GKiqMH67FroKef3u",
  "key3": "21uQVRueEu3Yc8HYHsmiiMiuqeTj7neLLvbSo414MLGZcFqyv93iLSc2aPQVPcjF44YQSGzj9cayxG46BzEhxzQu",
  "key4": "u4mtMjCwbncDZk1EZegUfkdWPLfd8fma6qm65ipfAvGHamZW7mwVEZjnFPfMoveDiP9EdkJt1m8vMyPjZYBhNGF",
  "key5": "iLDJk68y8sNt541D5tSRfJYge24Cd2QqahGotQvMKTGGRRsjyei8DditVsp7y3N8GNBgn5QHKgRtM1k4bB84Dch",
  "key6": "BNEorhGvQHkJP6rYF3TqkmYX8mSNVdkS9uEozJz7nqtF2UAXdeqPP9NveMg8eHUJ9ACHETkkhRTGqTENPrXrgTo",
  "key7": "2jWSn5P19qHcoTqzFCp77gp5hEN8paYK586H11yc9woLB1DvWvf7ueTwegca1WXFtGzTYv1MPKPmtE8r7WPMdygc",
  "key8": "GYrKtVuoJYZeFqG12jLdNRguc47JyEdapX9BZFMHJ2oKXoSTWueJgeQvk5f6Y7zix46kizx5dF8UynTDqeBJMJ1",
  "key9": "2tz3V9MbbLC7BFXXH6UYNaWA35GqcUcbZTFPA9MebeysCvMMxqSDrra6c67Xzgn5vvFsXvg9EFhrtyVeR4Y9BByr",
  "key10": "NbdLxrdMFacffnmb1R36D3YrVM3rtAH6PKJxvM1uwKvZv53BDhGN14ns8RyT14PiyAjzrRHoaXCVfnzZd4CdFaT",
  "key11": "58Ta3ELpGYgT65Qrrep4fPygqnHvjkAzoLCM3vpwk3kxwmHkTivXLJ6hU8upFMDYHJpUWvTXk5vPbQSbinsrKTnr",
  "key12": "58BitZQj1hi8bKJnUXtAE8zQnssjnRbu5L6spapRSiq9p8TQnUBmogUMhmAgrizQbaSETRGG4zSVFaam6h8eEtyh",
  "key13": "44HjktsogXBfK6bZmB9Tp5yc7z1GfcbPNNA6uPmn62uLM9txKSA32PyGDirSAP41M4pFK9DpoLXNf7Y7atNPjjey",
  "key14": "4CfNhdHZ9F278UjgbDG32KDhTgEHgCg3e67UxQ2QgbuTVhehAuHt7cNd2xvioLko2U1EPpsHeu1UiMrycg51a69f",
  "key15": "4gUTCWxRwdkGcDGZCCWUxhmzt16SxsR3XQEbptBLuzpP2CBqtRasxRwFYp4UVfU3LxrVs2i1DnVrxg4cvip8iCM6",
  "key16": "3pM7dkG8RY9SydU9MMt3hMUa3m1Uvbz9DgKPTtti9RBXxSqjUjZqnE8Qdpd9SwVJoR1oocLbBtJ2pQz2WM8E5D8q",
  "key17": "hcc6WeHzfh12yP4iegpJPxwKfSUBVx4ZVunYsH11ZasCjRBa2UYPS2iJHqdrov5jQsRf6VpQpzKAba4mVeEEuE7",
  "key18": "42S3rxYoj2EibJBvXj9gmouQXYvTa1cAeHhAzatjRsEG4BqNAwrPNMiCsCtvgdSspsgc138PChTZeRVdPVCGes3X",
  "key19": "3w1348SVKwmFQ7S8xksh2jtxboVFbkXNR22U9mWsaMU3SS2WaPMrHBVnsiYjkZNkct3kGeere6x8ggW97NSz8zbe",
  "key20": "3pj9hvwzcJ5CWgq19m8ULaJS5ZH2TLVQqq3dp8oG19SQd3osV53u2M8qeArCuwsSoNJ7kXK6eoFAGdtt9n6T2kVB",
  "key21": "rtCTPxjse7m5Sy3ohkvYpp9h1rHTqNYKTmHyWcUecAiJAygT4EDujQ4m8xdGBouSywFNRkYr54XtkvbHMmZgaLe",
  "key22": "AXi5JTfExdGC3mfow1hxwwQhk34ax275yQy49H6U2UCDMKcpx55vM6vyBa8EHHMyoJgbGKq2k6gy1adCpwe4d9m",
  "key23": "41m2qJcAj961fun9e8VvjdGaAzGeacdKeTiCcx71JKTRkb6tUF6stzLFa8ddCk6ZzxZ48refk9uEkM1ntpTYXpBJ",
  "key24": "41dZUDU1zppoP21nFbfoosGR4EQN27TfYDRqpqkmwQy47wgF3dbZEgtc35RKG7v6a7sqqD9on9W5j4t9zsP1pjqM",
  "key25": "4U3Hsbe2psGXAA7W1DSJz67W8dqVUHnepsbteabLBevv3dAWbGDv7JBDGB93mD7WmWftUdiaqxZk3GjLysFt9YGY",
  "key26": "qiW3gUyxQZtk6YR3ELJkcDqBy46jpboA2NJvCWAXyTgsYe2nbuqdqVQRjqLhfXqNUe8UJg9CGV1r8uy9t9TcfaB",
  "key27": "4tzQ1wyZjmhYtC55vw5uyRmFvi8eu4VMAPs8bgvzKhyktW9s6MunWCXaLq9H5GLQgL3AVUZMK87UoLSQooVSyfba",
  "key28": "5jWD5ACUG4Q2WgfigcDdFaSimHSAuxxGukaGvsTNejURTHtBYSUPc8RVgiYBks9L2MQ4WGYKh8cWxLzLeZiaNvHH",
  "key29": "242Xe2dQE11cHPEDwv2gUDYkPu8EkypvqeFXP3K5CBg3jj8kuLhGGuSopTHRfnpn2RauWFCQyAtcTV6T2NhuB8JR",
  "key30": "57SpZLNT78S1TxmKuhhCu6u4oqUaTXFmrfYaEA5SvVhyRTpPsP2fTjN7PpNwMn5uEtbpVfeVBXGHxDHwph5EvQ74",
  "key31": "4i4mJ9hk9xYKsqXPRvZcU95htjoS2roJ46bbEzRdGhDnVQhPs6Q3B3fLJQRfHSzZgUD4isaz1bZeHryPSdG45rbN",
  "key32": "5GM3rDqZQkwHkVYVJr74C4PoQo85vkeZPP1joNcbmmu27b6Ka4s3KEw1SFiZ6TawzwZtDy9cFGQGR9xsgYo9Bm9n",
  "key33": "3kvV4jEfmsaJ9NXiTL9Z1Cxp8ewuFkwd9wh48CGj5CNjhiZaEdSFrx3m4qHYUH8j6KcMWYAcMVwUCw1HZXTSbLk3",
  "key34": "4ZhCx3mcTN6LygTa25QABJ7w6tSVLyYYzcErvhv6PpcUWyD7GruagtDtQ9CfNTegTj9VX6jhkxT5Dmi1RZLJRfUs",
  "key35": "2xcHao93668tee7H7tFGH1ZV6AMs3tPej6BpKQzDbxpvSA3hF9Qb6aCpQFdqknhc8kEKA4dSoSt88sR3S1HwQqu8",
  "key36": "3XJH2q8HHSYSPHG4uGAvnoh5enm2f7cKkmuVwDfTVUBHJrEKkacW3LBGmsGxuqMmGUSmKk5uYmJ6JaMzHNnwNMWt",
  "key37": "5CBJSwd2yMZ2sjPuLLFvRPfPDSYKHmMMX4qhzjosVGH3d7AtUaaP44PVotKSrWFBSey5tJu25eNCpX19NFPB2CC1",
  "key38": "2zjKMeQHgUtsHzPbVTVqyr6nn5UzYiZrFUWLTwSZasZGG2nBcuzSF8EMno19K4kRaDoMjJwGCnZpKCS9YUv1hv63",
  "key39": "3DQMKeGNtZGsEVKoTChxBFB1ET5EcshuFQaud8qjZtwrhpCqkDvpzpXjrdCsm5iaQWu2n7FdzPc4fHqHzyZ88Xa6"
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

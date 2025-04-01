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
    "yiPDDPXRBz7zzZM5gybA1CpCJP5T3CoK2YEHSrYnKGZ4ochGY2REdgqLW9QJUG7ZvgcqE5Jf9HfAS8fuy6VReER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAwwFehHmzQqX88WYrrwsrNzR4pnUXcgLEG9SvK2uZWoY9XnfXGBk1KE982dDZb2wxUDZ9RKnCrZEYRBpUFzGu6",
  "key1": "5vjc2oGf5AroH9LPLYAdiCTCQADvLs3wYYVQKPM4x4Cfvq7tXrnMmaUPKZXFHrGc5yB6fTBE6txxXteDPYZspURW",
  "key2": "415JMHM9o5SVTmUhcSNkVsoeH329bfU3g6Aju1bLSnmMeTnZwZ4xmsRiEbUfuVDpCRSj15fQNV5GGRGdMQkLwLU4",
  "key3": "2hG9xnn2bFYzopdcjFAGoKTju5yonptmUpgiHxSPJhBrzucAnufYidM5qqoEYHgHDHrBm9zFSLk9su6aSidnWo5f",
  "key4": "2YbN3K32qwKmuzrtV5TCEKU41zutuSkPGkSwbY2zhGY1fwAHte7VdPwMPtuZT3uhwDzacLjJSQzmX3fAqmc5SJjG",
  "key5": "2qAhqce5DmXTMxib6bNQSZDtTx6V3JAcqqcdLWASxg8dLwwu8q5DwyAwQ677gHrvXMPnjGXGQrKutCtDipLwx8hy",
  "key6": "21zyV2e4n7QGBFV1ot2AuXErGTLo763XWT1iHmbzMqvxCC4GSJaf2ArCQvXR1TTFQjSZzQkogsJ3CvuPZPPoC31N",
  "key7": "5xZrCkvvyfnEENihkeRtAbDiuFhTabRmRSKSgYLua5ki1QKNsgpqDbnH3JkC7jU8c8CGdD5yxSXeotY5H9QECLcR",
  "key8": "XVdYYp7S5UJnntMdRLevkD4BcntycTM9QJvGEF3QtbFwkfyU8FmyCsfRwbEjmRfNWUgHTT6ZWvHucqZBYZk8QPR",
  "key9": "5WExQ3DcLdqCDEqa1JLxvWMQXGcstMddtqEqyt7oi7ndQZ8fhgRzvNQ8EmycTowHFUefsy7igpMzGmV99iG7b1KP",
  "key10": "ejpWfSYZgo2zby52zf8sZH6CXuWpcwmfWvZCV6PfnfpRzDyrSxVWvbeiWgMNFzEL71UdyDHtCCtx27DLUmFNYJS",
  "key11": "3jSDsbB4CXQke8TqEpQJ9HFBDDYGXjUBHErjAwbZaEox8ARoDTczuSAxkcf1akm2UbHYHdv76V6gGUgaD9tDvhJc",
  "key12": "2ZLSwb7sW2yxhFQXfxhZVSybWrDEBhZteppzjAAE7fgFikwtSi52VFZyq2MLgSSFHiZDc8TGD9czBa6jjGs5hSkp",
  "key13": "a1eD7zEvwbN1kE34w8uQoYay4ytNpPbW1KhxYkTVwvpLpPe5jqQtbg5CjdDau55WY61Sja8EcRF5Yazue6smssV",
  "key14": "4cvv6QLQAq8sV3rtytVPFCyYLtHWBXmKNtJpRxrn5xnrVi7Kqr4KyScaS7UUWUE945dr7PMwiTS2suWKEjCiUdR5",
  "key15": "3Wftr1GgLSTmqVnVcvXfnMvNCtVWszwthZzSprE9YXEwzwrgMzpoV7ZghNa5Ki3jFRhGY37uPET8MdqikXZKhGWE",
  "key16": "26X8m9UrhpcLmU8SHZ6iJHcp7qqhoXtWs5QXxNe6x4W3EHDB7dgMCMtNvFpNZE6CvwGaZpecfXXZF9whjmXnCAfz",
  "key17": "6gkaqjHtmiL7VPcEQhocamPrv94TTXgJzMYibUZASHYimShjhBdb4VvreiuHdtHwqtjEqGWvZ9Jmt78dzdrTitx",
  "key18": "2WmRMNiGo6fZq5Ep1xYswBFxL7HdJcmyP8HnbaSECi77i3AKfWkqCtsLuo8RMYgBoBXoHJUrNqthYUrBg1feMTcM",
  "key19": "3vq7WFXk9mQxx7DYkrt2xgw6VNDUk8SbWArBkBWBWm1MrR7UfM5oEDG8yixWng2PoiDsset5uNrbvJBRx8kWXZy1",
  "key20": "4dmY2x19GgDomE9gNfLm7vKRVcRweBN1H7m3XS9eLJcDZr1rjr3nQx9KGbufWPGE9cokn5iUtGKH6XLnjmPrEVm5",
  "key21": "42KPb7jXbUideAADLN7emW4S27bKmNa662NgahZEuQdS9C6aDQpa7DSRyipPGzQjQPnprppzcG8mCVrFguHWPjak",
  "key22": "nt2t3F9nQ3y3ocam65BVq2vncfBsBny7L413TBz9jD9tmuQU75CF2JBSXfSDJ9WXxbc3qfd2PN2KPcFqDwJJpRz",
  "key23": "3o3wnmBjWxMDK3CceWM5GyhPzSPdq4TzPuH7V1873fm2y195EGQ7LULXmspcNwokHEj17vxU9gvFn7JAseastmDy",
  "key24": "34KtfX9JnXeeMYNTDbb4bprQrLWiCyxxQgWb8DFiJrwCyYiwaovLD5ezk8EajxpupcndpRGTC3rKhVSZPvpvm4yw",
  "key25": "2PTuCEVKkYW1LVn23y32bS1e4QiNR1sMa9txQ7UNAHQ8gUKiP6FYyhoSZ6i7De9U3Pg5gnjUK6N7vJzwHjaksnUh",
  "key26": "2FoCmi5uvtRQfJBZfHP4fkStfXJfvJa18rZGDScBqSCM4UPAwvziSRsac2fkxnQctyV9UA4tcq1gPHpddHv38h14",
  "key27": "39CmzfTVUn18Biti9e4QWs8L9YTy54BWP7Bm2j5WycAKsCocctQa6uTTje5ShSyGzD1LcAcPuhH6Emotp8tfdmJx",
  "key28": "4hJ6MP7tRNqBH9SgwEQTFL1ESFGVNLSnbmLs9ADWsfh9sNyE9YTB5Mc1DHsZTYJVi1DBUdN6HGwFGgnCAaF2fuSh",
  "key29": "3j9XkjWs7aRtVaFZjA96KEEm23XVDtmGorviV2saDnTCEpt7u7HLh15FLKbFNdkNAPFSE6nS6aDZa7BChQHjfA5k",
  "key30": "2gLXvfoVVUzcnExtkNobHVCqjQEhoxmtPVskW7dRNDzmTFE5RsJykr46vLJNvCjzMU7JrBhkhAabzYjTVfEduFoT",
  "key31": "64hrXWJXJ155YoE8pATeBDh8y3R5woFa8C31oEzBphubHHKQEn9Kr3LBQRovahgd4n5stSsNRmEwEL4Cz62JgxPW",
  "key32": "Zjfeaqw4DCGEicDatvtmWWVQmB8TdDKnKQtbpgp9ZDeisFch1uy5MYLY4Gb5vYjpsKrXbiBg9E7t2khd79mzkjX",
  "key33": "4v5441GxTrqzLnwZVZFHA2YLxiV1tyBoCwtQZ43NonVAetVbrkXsU5PfEhVkjpsiq6cgHos94bZfFewGs4KDvdn3",
  "key34": "4hcFGboz2ddTWrjyPAfzoN8WYJkw8mXPUFKKsxJXmPBKbhqPCiueb7BN5kRB8Mbaa8TTEA1RsdcNJo5XbmLeHpVG",
  "key35": "4mUH19aYHTSUhpfG4XfcXyGo4guYpk1PtJYtyvtXh4QU67hJeaVbS8QtwY9DwW4nBvpQyp6Leqz6NiW6HrcUpGKu",
  "key36": "2md9ZQCF2LmJieCmM6zHSxTf4mL2D69vrS8zDDTtdKnxLxyJ5Z5Wrtv1y1cRrTXqdJndPuV56FVePPJaQtJixZHZ",
  "key37": "5P69Y2NDu1WhAdxymLrctuVvi2wQSemKnDYxrt1nZ7M2XHZ5q9yTAFkSkz33H2GjMr6x5s6HwuUELvP9M18pfEbQ",
  "key38": "55eg4kBBqoJgGm5bzpFn1rArtJSkVXYZ95Skx58wKq2ZYemzMYx8tTtyx4sjPHoiidK5mNRzvYVm5DSxb3z9gbT3",
  "key39": "4jxi2waW8odFCaKmdLbqAtYGuDivfCjtvsGspmWzQnXEKtSFAmmJVVffZrhjKLyMbeY3W3mL7cjP53ZySBJCJPrH",
  "key40": "rhvbf6APxJB9Do2qsiv1QbqVvMReisHP17N3dKX54SQPbwb8R4jneBLZcgMDBcDN3VvVJxY7DBvr6bFCBJe3k7p",
  "key41": "3dZgPhaFpS8cuD27NvjGMZsc5xYaVYKZcZk54RuFRHRYBVjZkNEuy6m7P2mh1Gv5to36fwbSUT8wSVZoKMKetMMW"
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

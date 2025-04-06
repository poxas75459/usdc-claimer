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
    "666kHcgYB9MwzXygVKyWeZovLjBCm1MFNw49LqwqYgHbTphBf2E9F6fjTEFYajtyZqXW6hZ4HFbtVGtUurvPrSGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uQR6uJ2qZEAZeTGpcBjwkyGMDiku6SCASkpWARYJ565FMEtMsLYQsDyEMa1FRKpHaUbmsrPVbB9yYhJ3WNQy8vp",
  "key1": "3YPrzFWZxPYfoWhFZ3JYemTqR24St4F4NRFt3Z6monbHbPyaV8x3oebWHjNDauNZLyAkDGV4RytW5WHscpkhGsQY",
  "key2": "4rvsQCqkwwN9EdrF5rwHpcPXvhxuNA9KnnCyzFVdNgCeYZ9EP4CrUaMxQ9s27cbTYUzAyngjLCC3xjoqqVeNx9Hu",
  "key3": "U9ZHnuruXFAHDyByUaTEfAXf6yN9DfR9fnZLmKNXcEaP8uiVqALXyxVas6jcvTQGtSGDmVnaUVrAqJwjrsuZih4",
  "key4": "4HKrLQBL9xxNH8z8ZEkcMTsWmfKzpHyZjiQpuq4AtZqN9SekUVV4qjCHwaTBdzk9gNftK1BUk3BsQBiPj71MD1ss",
  "key5": "5sbvLPPdMxLTHuHEK289nciukxBfeeW1brDegPdKKtigCoxKZYgeJL73DT37tbXT3hVfVeCy2huh6td2teCgyiGb",
  "key6": "2Mmdix264VQA456eUMWw9kcpEmRmGTgQFMTfAMrYXFpBt6rPmwheu2GrK4M6rJxyr6Nz2nABdd8EN3d1XawQxz67",
  "key7": "Z52T9uF6wf48TqYs4Zda6T6cpbkv3hrw2M4pCRWGpJBTEKpCqLrcVwrn5mjLPcgksbXfp8y1jczgZLbAx7Tnypi",
  "key8": "3hkQSiMJFBuyXB8yJcbKRPx6PjPCm6Hzac69KLmjQYZn8WZ9W5m4Dip3fFe6e85HZLhpqNXWyfXQRnnSrkruwoFh",
  "key9": "48K8LSfAiKEjtqPYaLVeWQbqJ65MsZAahyzBsot1ksuRSHg3ChDSJi2YkYLjcHgFydUewsVfdFMCvFNWBoe64bQP",
  "key10": "AznG6FVaWBBnHDvXsXpMUhtxRVxVZRhQ9rA5RaKwXLiysUja5G8caLHvv33DAhHLHuwXBLAmwwkRgJvU76eWtie",
  "key11": "62puGaqGDuz4wJvdqk2nw2bccuF7BBNxysDrtCvsLaieNBG59ZdJJ1YimFu7sWYdJMpyUBQFhiixDVshFoHRmKZ1",
  "key12": "CY72fHJ5mnQHNb2tyVoSgSE5rGC75bhyk9Zj6r4qNSttEDaiS9XFqhM4FUK5DbeLg5QQeSuyL1ECBNbDdbNdnYr",
  "key13": "2uEhGwUeTNaH6vYfDRZWUoYWq7XyPAAqvJZBKPnxeAiPTUcNhmBXcNcHa7eTj4MJx2HdYSSfvdUgone887KSJKG1",
  "key14": "4EgkUXjuPo8tEVYvGEong99eHA98jxCux5XJzwUtNPsJnaJTvonmXFc7dbc7wHjfEdQuegxyni1pGVqDFgUQpzWM",
  "key15": "4Q3MwxoaiTRqGXgxDmPk3TG9QER14oiHUAT7LgtUNx81ng5amo85fxY6eSSG8o9aptLXz68Vwff3xbeHnETDAjLw",
  "key16": "5iP83Y2bH8wx9dk2txkHW7mKccWoZz2EqJxXQPx4kxehgajcdZSRncsNgFykgD79VJXnrtVevpV9KzHtRTF39dR8",
  "key17": "416B6f84v9NZUT5WEHeRQ575C5m6JtcmQGtb5y4AAnKVuFGjn9Haafy9s383rTaTUiW7xPgkLy91xuDJ3DHMZAxq",
  "key18": "2ajMW4QmrQRVcpemyZSR11jSgAUadVtGZLDbR7qpXKgmMSsTHeTYA2hn1hSLJnJtdFNPbu2iYFNZYiPKs5v8Jxwb",
  "key19": "2gtSdfH4wdmsWrxfGUmMb7rgeQ4rWpP3BwZPZabChDR4Lt1ku5kGxy9T66NvWkABd27cXnPMYcShps5PuUvLwcdz",
  "key20": "4LijUfDVAJJYiPpec94rvfbEXWF2H5At8nzmgEKH4pNiN8LD4qY23cs3jN9mSNH3hMNHRwLGt1j2TTbUw4CHePvN",
  "key21": "2935XbCTtb9CPbt5R6Nm4HCdL7AJ4R2FKY69Pmhvg44zSbH4JdT8BQxsiiqmueejgY8e5m5rFiM6PtusKGwv1XTq",
  "key22": "5tU8G1wNtjnyCVa5Kcq5nDA9CxyUYQp4DSRxt1AiPCAgBhtRE3sG1dNJ6W6BdKVLVXkgy9jiruPWDm52T2uauskk",
  "key23": "5bFXyrpzfKZuPAVZ6V87BkQ2n9S3Jou4CaYNbrbUASa69FZ71w5WrC66a7frpyMnddWPjwKjXk8guGRYYzEHL3oB",
  "key24": "3H2gfvg2iZ9eWp1k5UxB4sLPsqjkn7DpdRq1Zyee3ceBG9C1MMiHgvxvnSCxhFTcJk7YCXc9vZvm4wq5H18tmLaK",
  "key25": "63EiFHrb3GSpopo5y53Hp997kYAswZVzqe9u25yXGrHM9vYqA5gA6yRbiDLcRNgiAxSaimFaqA1d831BuQm4KjqA",
  "key26": "2pfSsWCBmSjhXxtDz7a7ka17xDrjfJ1hDg418LoNJA7k2H7PGfjLj4TN1JUYDFenfMn6eTCnruoPhfGiwP51VvwC",
  "key27": "2c9tAMhc7nVA7SpssN3n6w7h6X7LvEQDmuEJepxsgvFjVwFFKiRtH9uYzbaYvptvABbssFh25RaauUyspQZePDKE",
  "key28": "3Snd55HToafAuukw8L3SjyMA7weSBbq2EQMSZDZTU43P2Uqb4C8kXZq5VJzkSZmP9WNyg3VX3eSTr1GnJnbitsFc",
  "key29": "2nJCAK8zd42oCbJeUBfa4NY6aTEcC4Vr7WZ88kbjBQZ5MQzyzNfWjVwv2pdfS7xhkw4Dnymf2e5cfkH9J2SzDe5V",
  "key30": "2W9P1kLRh6wc6H4eKFLyanCrfQfFLjbSR8S7b4DBhY8L2fYkcvFAS9PHKTPezbhQ9P1gugLQmnmQrqVHPvqG6n8g",
  "key31": "27qBtqdXYuXRqc5XZBF1JkNjqM6DoX7j7itzeideEKvpd4aM5RtzB5juu5URJk7dgAKH2VMns2tzX7voAMh5KoAi",
  "key32": "ErsmQtSAbideBCYbitu6pzEvGTTQDL8erBMHezJzah3ZT5qxKPo1QrpdAidSAi8eHzYDscAsf7g5UEv3Cr2iYgg",
  "key33": "Z5daqsbCL31efYGRNweu5oQr4aCccaYUEHgSAmQugB9o2sSaVnuPx9vVg7gr6tqrSJk7wGHsJsBXBpXgNUerb2W",
  "key34": "42JzwhcdXpXUp6AaPc4z51k3D6z4C5ZYriXJtc9ZNyLz4Zwwdk9N3JtLmDCoPBJDcspWF5gDSUpmPoKJ11Af7HvK",
  "key35": "2nTZrqt71xphSAFFmMxptPA4dhCJ13FhhRCsQ1iP2HJxSp24aRWxpC57NQcdpRuV9TQo25X6tE5aC1KCHqu5tyPK",
  "key36": "xSRPexDJcyayU2vbe82XLQjkqabVJyeDBMWddHMBWiKHS6asZ2vGMaDFzFMDvcCTZsj4h12kncQek5KUYqGLaVQ",
  "key37": "F9H8kqc9B55B6NoKrAUwc9HNa2HRXv1kxjfA9zUR1ohB4KsSSkAVJmXR4f4nnKYTtCujmK4LHKzQoHu6reacR8c"
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

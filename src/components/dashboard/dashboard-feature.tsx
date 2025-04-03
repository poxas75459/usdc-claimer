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
    "2XhWRYPJaYLpdcSdThSbF9WSK7Vcv6jWsPNaT95FJagMDV1jcYcBPcEM8uGDgtaKjkLprBoVUPS7DA42PoNTm6xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxugbzWV1uTTVwASgjdCCVbRa713rAvJik29g7vG6L9sCVZvZ1mEiCQrFZcsyaRFCzWQW2S5GpBNuBnhmZ2rhRU",
  "key1": "5W6BzfEguzQyg4m39kVcshKKtY2zqYPayUdoAe18KHhXqmHmpiBCFiz6TXdtyDiFgAjN5A1544H84xJmw5dm7xat",
  "key2": "4CLWrGkChfLH82TusnF2CUACoRdPWMfLcKypA16qhgkYX4aF3tsmv9iE9bppd6FxiMPAvFsHuZGcbTAPnhQcnEwT",
  "key3": "4j9ozEffFG3S4eLPPoYf6rS97L8suB7nMuoCAuAWLg2WDeW57DXbN7fjGhBfyNqxf5HEjJVwEFM3PwuXAm99EEZ7",
  "key4": "5HmZfYuyD71JhFJXw9fHCdBMus34U9rP2q9ksmhhCYUtxAQXETExdbV6Dm46DueshGzGjwDweA4Wz57zjZnvnCyR",
  "key5": "5Tgfmoc6mLk3jdmtkaTbhZx5E237hjuiadjHzTjRNmep1Xj2MFPaeNyS2JunzMNkp3mQqafjXnHAQt2MWRTpnSs",
  "key6": "5Akkyh2b2ZKdJPveG9kYHQmLuQSs3ZFJa3GiiWdZo3oX9dtFwpfMYdNY92M45TdcQ9jzsVdGfoLh4w7bYLAfnRqY",
  "key7": "4Xba2M29x7T5dma7VBvw2jWVgzyTnvmdXSzxxuQdXGtoGVCEtNy5NVKimBkgegLecehdrfUXs6QxySkGc6f7wfVc",
  "key8": "2NfojgZMUxfU97dTzcbSbvr9qCUGNLYU51JmiXGwpCnTPv5HVYFTowUbjkvnouTeqWuDG9kbE1ETATcndDhRCihK",
  "key9": "37HeXWnqRbiztcZu17V6G3iLkN5xfm4a9pEjbwtF1obthRFVnpDYgJnVRuZT84tT2rbkdHMs9HTMkuBgXFP7MP8r",
  "key10": "o71Ut8PYc1uAXnuAPQaqmUxjtrhxdYLcSDJVHgpoDugpiaJXyPRy35oCRE2Nm4gqKy8L41eSqPG6vk8JiBydPiE",
  "key11": "5EkspncntAQNUfuXSCLdQ1NaDS4nRFMG3zs2dWQRAhRnnNy85WPJFXYdUUUdpf9g4aQWEeX6WARybW8Zan7sq142",
  "key12": "4pP1et8X8iTJ5iieMCtZdcNsdhCyakU871x8oDTNUDDoEDLmo2svzjKsreN1b8mTutp1oGhBmMKsSZ6Tebenxucn",
  "key13": "BCwwnby3pTH6ofkBLKzEa2xwvsVexnzzZviXu8SmbZFs9ZgyGJo6kMXDipxmJDAr7gXtSYise8koyKM36gAwyer",
  "key14": "QXRme8x2ZWmY89RB6yiUuXDhH767ypAJsjp9QzEPhRHpm7HHVgPqXJszwJCjAs1YDQKzDuU1d1bhtENLru7tYiL",
  "key15": "2iCC6fRNmxpWYZEujstjkGvdNiDWEhfHTzVmL3BbUXY5bWveSR3S4jKg1DkXut83FVS8TiEyAfF8fEdtMxMnPu4x",
  "key16": "3JsUL55L4JUSCkA8znZ7AxK5qbSpYD7YnazkmidnDhxd8HCBfX7SpPVg9YJsdHEx2B3ULJkeKXjg7kYYKJUwYmii",
  "key17": "5PNDy2NJAmPJT2cGxWDbNHdxeFS1LHDowhT7tr1BvSGLsV4vq3yWsLYGHuEvBhmX7i4XEFqeVtHei7LfkKmrXDZW",
  "key18": "22ZyEGsVLRSVHhV6V5HVTt78QPZE2dMFn2kukQrewmCbVTyZsFrQyoaDMxBch9s8BkX6n6ZzD8RPiooXwdfoPV68",
  "key19": "2ddGa6nT5LVWKhu4vu1j4ae5Xe9MLwPFaUSETcZdXh4bHiR9pSDaECm1PjAqomBBwNSGrRXLFMrT65ukXRNhaLLs",
  "key20": "27xwGCFuDn9QDp2SjaQRCjbq5mhxoVYWhfuegEdm4RV119b5nkdtJQ3q4BcEhCCxYVF6TSifnKjQeEdF6VFmN3mT",
  "key21": "LHvpiSVzdzLDTKnGmDb4GXX4wWZA99MNNThp9STNDHfbeNTjmw5PMJGxSiEVhG8yp1WGJ1kTtzGm9XMZgJrYuET",
  "key22": "Y1sNrgesqcqwyMcyPvszTEXnrBPJS8iRLHJgMJHG1xoRpACJ2Qi4aCKT8ds8Xh2PnzWLe4VZ9iLarT19MAyLLBx",
  "key23": "3UV742GJASak3nH4uFE4mxSddKZNvgafxq2sihQvwPxFh3NVEq7Hn2rsHrYD3erBdArPphco9ndRie2yoiezhMqU",
  "key24": "2KEtgwxcb2fW3yQwpHBRyZY3pmRpdHoTGDPwADPJ1Nxu5EHx6WLHQ9ZeEN7t3UWaiEzqZFy8PCUEyemb6oMc8243",
  "key25": "2yh62omQQrn99e6PRDJUZwNJ5dw8ksTPrHXTzaFg6xrSZEpkJM5VhbwduAYPGjuPc5Hy9aZRy8bMS1RpZwL4xMuX",
  "key26": "5Z58ykaeW58Kg3c2qxhEKGLzwSdSevhXYSD7bzmQdgupcDsHaFV68v9ScsovRXBU9XRnmHMCcRvMjY5MuMd5MELt",
  "key27": "2iSZSkSwkLTF1viaYeP2n9khDnU5psEUV2Vaa5qWWJt5QJK66gKREK7vr4ncqApQXwhr4A9pGzfitK6ydKA4HD7",
  "key28": "278MH1mziSYQ6bMht7eTYHrHRPoUVJRJD8U6pKuuTq8UcNHqqjTeyb35PGur63XitMbDa2Y6JbQYVQrhpmVKqWqn",
  "key29": "5uTNcDGKq2VvpvaMqqE1jC2T4jvTsZ7nX4MmNaNDSZF3GH3voFp9742EmSxLz7aUWiWM2dCwfX2PDsnAk856sSPh",
  "key30": "4boEHHoRpEp3RuYzHda6TvjRNCfs8pgiASpRmBykm3ZYXbRrTNvQDYZpmCsYEu9furyswwBtve44GkNHvojYoRNS",
  "key31": "4Nh75DRqWPSUJVdUe5cKCaHBpHbWHwrjXxZLpjCPT1be2tLNSdDboznKSEY2434HuWrPe3HL7hWj5fUytzLaUD54",
  "key32": "4qgcSKxVakixNZVbod1gfUn9HswgJYti8AJZzMeverszdYyaWNvq6jasH9DHNm374h1hU1NtxSJ3Aqjd4SJD2qXZ",
  "key33": "47TM1PUsYyMukwhcT8tDNkjJhk339zcZGWCJ8jHHQfy8cH9iNkiMTwUQxRMGrEGKeFB3HJWDgkA48nJ9fLdfDLBZ",
  "key34": "2wkhEuAoBV9DWhvNq9GXxshbY1TvqtL1ZwmGieN2BJQbBN7VcoW1qLRMSEdK7PMCSUj41Zkp9iFkEqn5AXdSyJJH",
  "key35": "U6tgHxGj6DSyG7rDsJhdfaEg2Y7xirP9ScXdasz9hnkK7TgBT4npRczpNNG5i9sVRbAxmpfAsDKdzXesXwgbCd6",
  "key36": "51xp9iqxmo76Ke3TgFHdZtCYKPrggG6D7qyJRqt923hz5uVufKAQ6sDnJQhT6AE9w9Ti5qZURXojwq11dG6Wp3sg",
  "key37": "NXPgveqXywFBP2AxCzJpzzWARZV6VWALTLUtBargUQziLjhtAaHEdQHzimgu6zgdhXogsgYgSvRf2BCRuF5eYPD",
  "key38": "36TnUjsGgUdtvd4zp7Fjxi2H9rgZH9Fne6oLssj5Sfq32Tadfz8YheZXUwhrk2XCck9evwoZgzKFm1p1Z6CSti4F",
  "key39": "3WmkexuCYgzcVFYxqyousrvJ9WNqS7hnctwiKJinLEnhWSxxbXwLFcbj1Ro3XntFWS7jcM3u5LKf1vonrEvqqPdb",
  "key40": "4eskEP88eyjqPR5vsA63MTBZ5PnmkZm4pEpfwCgBFZ5o6rHAetTVr2tRsqrTf51PXTb9DtWaMMQ8Wy3bKuDXeeY6",
  "key41": "3bC5BaxxKQXp8Yi3R5sWA6RpedgW7VTeXiVVhdXukhLgRgmCDhWkUHUQW6VfqLMb6DJ8TtZAM2HVuLZsHVy9mC2Y"
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

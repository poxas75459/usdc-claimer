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
    "M7J54D6xYVbTLU5Vv4F3doT2ZmpaVQfT4gkSoorEtdxLd7XskcS2kiJGn5gfMGEmbVm3g2GbFLyHsCkH2T2AabP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C3fJJFhUSFDVa29YCnysrKcTXY4xDbSaVPV4huGQbA7BQAZ1sJ1qgnQ5LSAZoRPSNAc17Sm1K3Mu1quduT3yrL7",
  "key1": "3tWyhhebMj5RPNgEyk3E8ihHVtsFvWDyDwejeZJjBRLokBS16NCHF1VN6Fyd3mqee5XBjj8GdT1ZeZxAaDBYCbfF",
  "key2": "t6JRNKeJgSDc3A6Cs1MAHPhU61myQ3vtxwvBEbLwMKHcq7YA88b3tRgEnhp6fozEU7R5CaivPN49Z9m3UbAFV31",
  "key3": "4EHBK1cENY7AwiPGSXdLYSkNRptjZ8Ud4BZbe6QdcMzXgZvtLKptUXzLGarQf6KjSsbxWD49B9sz2T8iWzT7Z4nS",
  "key4": "3ZqYQyzuL92THFsQCP6dr5MYihuU7Ny8d7n3JW1aD6qZdR1ChKcWs3umvxXLPTj5fSgYFmDftrX8zUG1nXS5KLzs",
  "key5": "39tr2izDvttDj3B48A1bHDC47mLoKH68KtRSU8RovvnAQUJQr1g5PFNguiKUECNmByAmcHb3aNj7cLnzqBpSPuNj",
  "key6": "3fcgNazV95HTtTgoxhWxeCxfWxZsoFeANsqRBQjXKqhm7Ep1Nj9FsnjC2encafTFv2CSBGpxaT1Fsd9cPFsGcmay",
  "key7": "3XMoS2XJcda33aQaFLDrRA1Rcfwd3GSgnp7XW3H4tp3UjTmrtypGmuV6xq5xCvShXqhm2S5ACFSQNhBAAMvEeXxp",
  "key8": "4hajsNGxPhhNCkhkujxR46d1KNZhNxLKq7fHZug28Ukr2ZCZU646wXYY3iXbh3JSLwYEjvJxAHDM34rtASMcxMAc",
  "key9": "3XA4vxFR8baecHzS9j2i2nhvZVoi2yQs9i69xsYGcGEeUQpWwkRf8xZj64dGp9qopsvKgQ3KcWj4VZ3ypySKoLXL",
  "key10": "2Jy2DE1qNpqgL7g2uS7tSkFRAafPdBUwqVjheUKMStDsNbrR5MJivbpxXhHsCcAibhxbtgfEztGPssDF9XRkCApu",
  "key11": "3mU4rbrGMMvMm9Sv5KaMoWfaZ4BsreEtkyj2wczjrmy81gQp6Zvp4EFneExHJfx9sY3vEkN9P8tEshft1zJKiDQy",
  "key12": "3WppjtVkU7seEghxHUjRTG4avSDNxa8Bj1Tx5qham1E1Gq9gHVC5gUapxdsbDABCgLbE5t8smuGSqSt9jJptd93p",
  "key13": "3TE1oVyMd94jkWUFwopY4a2aHB9yHFy83ZEaGgyTXGfGkNEi1GDipYijs3n1cCAVgH7uYweFp3B6cWuDj7uUAKsj",
  "key14": "4gKunJ62Ea9YMao9pUbzs3w1fzsBMXKY7FvQKE2ThwTVJuXcRi1og4nn2Lj5CyS2baKGNoyqZxx1YqRNdew8CL94",
  "key15": "2dQb2NH2h1rKjn14fSrnxrcv3BQcX2iQ8bN5kvzQyhhDcoG8r7pGKWaSX79ZTmSfeRQxEZgTtD8bz7FWG3YwChN3",
  "key16": "3JwSHwjfRbir2VWQf3vzvMUAsiZhxkeYuCFvkn5FkJwFMMdpAWh2z4DrfRc5pV2CdsiKbmqpfU1Gcxf48EknPL3i",
  "key17": "2nTkpu15eQfK6ur4YMq9BWbogdA3Q7kaHieb5KYmgvVh8PDj1R3WCbU8fvSwDYFnrUQiKYTquZv5zkBRs3ZTgmuN",
  "key18": "2ZtWJFK6o9oP5oMX7uVDX8ZTpEQ5TpUnqV2vhNfBCG3Qcz6FaS5N1F1ThfyCw2kBraLkgmBKNxanEknsJ6UqA3FU",
  "key19": "32rAoc5ozVxSTP5Xjvcw6XYuwwdK5BUSP1L5jh4Q19SMDjnP9XK1fxvndGcuDTKdu8WaeEH1jP682fxDWmPrJB4Y",
  "key20": "DzbGDUdk2pRRJoEXWZW8af1RshAhGLd1NAihn5uqNpYCN5aVWUEKxcazjzuG83VZEmyff94bwCJ3oHrHNvFVMdU",
  "key21": "2Ctz2ceUSGSEJBcBwrWFAEoLMaRiXu6YHwcJw5bBKpM3giQUcvEMN5VAhDDB2F1d4t9kJ5irC6ZG8a6mCUafwvRU",
  "key22": "4qfDaQU879MkYYHWbq1ZfbAvCj51UT1ABNpPKu9sBDZqpPmbiY5gU784iK9ozZbALUiuq5j8yLgABRgd7883Wojc",
  "key23": "2w6txFUnmu3JCcmmY3nuu3Y5vPK4uhxx4n3BvRjVBZJAPcJAnguPqbp8FbgWoPD13a6X2i3K5Gv2u7VK5FqE97cL",
  "key24": "3h4KUh8toTP63nQNy1p1ExVjxySdEtq2rNB1Y8QLiDcJpZZ71S83jKsDQinvPuZ8fRXrejqpJaNtp6AwwtDAXB4n",
  "key25": "5m5LHSjFYJ7injzudye6td64jRds7EPw1ct7NQEjH6tnnk1usZroAZrE7Vp8yCVzdUp4TsdBykESm38frMyzafs7",
  "key26": "2RcQ1LdySFAo6BiQwSv9iMyxL7KB1c2VK18i99igU7PejK25ZfwELwte9E6DcewgonwqeGjCYpq9XBV8aygwJ8BM",
  "key27": "51cTQd3cB9Sw1yNuJvenVib4U6P2Hm2JPFDKy3L5oXJTYeTym8Uo8nB6eYERfZAw8nFy8gF2v1gaHcJtPNwHuxnW",
  "key28": "3T3EYgCBX9kSt4GQFfUf6cx33v5pN7MnG6GBbkyXRq4157stS4mY7tdPXS5dGZHHEqyuiiK53gjPt586uAz37n9b",
  "key29": "3GC2QVj4BEfPT9RhYRArd2dvdf46korD1rDppucxmJaCcAaL6fZyfD9KsnGRjjT3kDj7KXShAf5JWuagKoA7uXVL",
  "key30": "4nLqThkaSekibog6XpGdRbGegzt3fgmPDdqijYcpC1cVUvTgGRE3gtjXRa6QkpCprKtWP1v9mZriSvJNNnx1thaj",
  "key31": "62DaWpLZW2MMSyAixYNJq4McHCuG6MkpALUyRALEuWcKQa1ht36Dq3DGNpVBN5yxSQKF39bsKS9s9efRDcywzrhg",
  "key32": "3PTZnyS3H5ne96i9XhvLhVRgDMCya4mfUhzRvTwT3EZcMhGYsDWdjmTnr7TBfBCQ8C8GJYMenNmA1CHz19ebnJBB",
  "key33": "NY99wXhnwSLp6uRJaMQzkCNiShoLGYYssG2ww3K6CPCgNuEkVBeZpbLQW9AmVcApJFPN4x2Q5pd6wCyZtj5Zdo6",
  "key34": "F3Yf1Eh5L9DCEXhSLpwHgYd98HrxguX7QCmhnsfmj8yDHEosXbaKQEo2Misfveiw5iJynbrbGDcBKdSHQbKpL7e",
  "key35": "2scT2GR7cGR37Ua127YspTw42REZmsB8xZVfJ2v3EZSzgF2sxUjPFSAzipcdkcvfuhFVdz5sKn67jKhCHRDvVVpz",
  "key36": "4w5oBS7VveRWjcxSA4dNPZw1CErvuKUBhPj21z53Wt5rNLgxe2vwmhtDD7N8oWuYgsuH3JNBfgGsE26rnuvEKi5H",
  "key37": "Dfx96q6SzCTswJaH6EGZCtApTUvMsx4EhNvc28aLzvVpqVBcGP4hi7QtKoD1fcXpCybmWACDRiuuKfyuyAfSqYs",
  "key38": "7diQ3hYVTB9fy7v6b9UNEJ2eoGh2y1cX18qaYBeka2RixZS61hAGxGPVHEqLYi3qTwHFepMTvv1xN9JbY56St4h",
  "key39": "4uxYovuk1JBsnjdAGTv6fNgqmuhR3jm5YfYWMLCHDNe4LPHSDX2X5nf5fX5SQXVn5zgWDqsAi5WLkP8QcLL7txPC",
  "key40": "4Jub8V6nvrWg2t1wbPAD1h58MXFiNPLURybr6UV4mLNBpQftQjfZVqRrTbm2YcmeFPN179uSWcKfSQocuBSNddLV",
  "key41": "33B5afEkLgVb2szizAsHEi55jtwejbETxY88rr8LqnXxxfBTu4csoxvmXhB5h1VwCxTAxjJa4CEeh4PKh1tWtjQz",
  "key42": "xpvNnjTesbxcnNSwC3uSkyuvdV81JdiLyzr5K6y29VGVy45QE5QzWRguMzWFQsNovmJZyKjYoHEFmfUAHRk5Roz",
  "key43": "5rXVjnKKonCGVG8r4AYShEBq7WQUKzLnEP6bCwT6gvWNySR1MXA4buAuCVHTcxFBZkM4Wpw11kRL2LMFmHZ27Xsx",
  "key44": "48LxKFigp3umBKwVy2kWWCSo8Ne7tf37F4hnmo5xwR9gg1unU2xQCnuGbjhhZnVv4u5S7JWpJGjmrjGSnu6t8svX",
  "key45": "4vQD2A1MV32zUGaYBG3zMXs18GetcJSKzw643tR9yAhXxmox7UNbhzpnCW6ov5FuDE3P3HrLbKAssGD5T1mk3Ekh"
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

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
    "Ue975wYnvky52cBZ15cUSr4ES3Lif1vzST4z5v9kyDSUQXfdpVtXuYCh4E6EfsrhowGsykH683maxFHyxvKzKzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L4HR5qtQd3FQEahjkB3opoCpD91NZJz9xmaEF2DJZLGLnRzqYLnhv3LwKvDMnYFEJMFmucgC5d6n9mZRNmfkkQ8",
  "key1": "ZBduLSsRMtvcAbDhSxm73ZaXL8nGzYRz4y9eQxyebGhPquA7UbsVuScygy9c6n4Jn8cgnYTK1pJcZg5pbgEw3Es",
  "key2": "4jQwqw84KuSv4H1xu5yi3pJbBfDMsjn4e3du6eyCiXvUMq2nhav2qxbkHebSNWE7MwZFjV6qTeGpYykUCu91d6PU",
  "key3": "3ywbWaYVvvhYJ7g6mLUiSmJeaen9XinUebQ4sAQRmxqB8ngXWaoKYSjLbhEsuscvdUdtCFG3oQ11tzNZ2WF9btTL",
  "key4": "42EPST3ttmcKPe2CC96M4MgPmzuk7izSfJvBPA1G8wfmR6ttJyiRBywsbZCCtcr9aJsMmhVjwja5mYkQwMX54gBK",
  "key5": "5nLdBEowQ5qrQ3g4h2qRRiTLG9nWNNdcsBs6LzX4CV2nbpRJnxyfNs2n8xLBBatwZevUQWdNrTFaUwXJyaaBBwp2",
  "key6": "3hg2KidmPWL3LeNabbvz7iMFDQBvzPyCrw22SYV4yxhTozY7QfcRpZ9miotg9jtwjeiNEGxUMM7GEBjBsGeHvC3g",
  "key7": "3NrwoJMWBu2ZniqRh9mYmi8t3XRGDe3NdphethpUycCGsd3nXovq4CuncLrLnv1FJ5pYcLQGiVk9qo375VAw5puB",
  "key8": "4WDQkRBktS7p3pATimxzaSrbiEKmyGDAjcXtTEFkBx3dJTN1UetZnwhXGnmHVNnfpGLPtZQEtzNZaC9JYjHHLVwN",
  "key9": "4DuCK4ZUAABrgMK5eV4s7eixJZKbn288iwF2eQYNAAyLYGV9EyVPLX1wzDwtWmopN6UYnnZpAQDTeefupBrert9g",
  "key10": "38ca7BqFPDQCStkd1W8dNaVGDALCd6b6eisxp2QQpaCnsb8RrpTKQZCLyixa9CbdsQpNQWpzDQ1fkKiH3BYYXCQp",
  "key11": "tkzwjWRm2tbk9YCQZCjEkzCsTY6D1Mj8TmcjEezQKb9jCwxABQH63iUN9vXHHfugftNvGYZw3KBio3VxvqsBxbh",
  "key12": "2AaZ7DYsUcr5NVX8efssTRoUXPo1g4VRGomVU6P6NGfYTUEEYPXqjW6nsGvbxU5WAjH1CJk3FcrQVtiVHh4x6xi1",
  "key13": "5x6KbK244G4X4bErav7pQ9J7SxfE7m5rsM4w9X1ftqgXvWsovub8VnG7BHfLFBaQ3Jh8hKKGohE4oUZW6MLtL25i",
  "key14": "5HLZ7XJxpJKRhjwUYE5pPa67MNtx3Y573fcecW6KsvsudAhg3W6AB2LjY6cq7ygieNnbVMUHVEiXFA2in9zHC6GT",
  "key15": "3e7CyDiheCxMdpxJ4FLLK8CH9mYuWUCFzNmNxQAemb7447gZYBAPicJNNP8CUmpbYuN5sV65iywJdnWoYJg3QzvS",
  "key16": "4MR9Eins7y7u6hpQTujwaDcy5S8DuKruoYNdpTUC8tmkoHzhbkdRMY6eMYnVfnmYbMvp1ZoHraXX3rswm8PYh5WE",
  "key17": "55zx1446J114btEW8riDHHFLjNtxLNb9oYooS8wwoAtdG3RZ8dGG5KeGmJbkqvvs3u4jTDt1vpTT1gnWfGeUz7Gr",
  "key18": "2c9fKFXoNN1iZHYL8Muikep7g68Pi9wGjx6scEQ5UmmkhgQkLe7g8xc9qoh6oRsdoMemeUFpAyXqfWTEpE1hZ2BM",
  "key19": "41Td6sXvCieGSZHjHSsqmk9YM16EGmSEnyPpJcGJdS92qqzUpmV2f69FriUpCEut6tFrM1BWPHbHW3ma7vYWVFYD",
  "key20": "4e2cGX7QctR3oarp2GkSoRYY3xW41Axf1JFcXHLjU1ACCngtnsmqBgwX8ZWmq55RPPwVMuTae1Bg9Wn97ucx1UF8",
  "key21": "2dS2LE6JsrDdUw5f7EwP1yWy6XrTae6vRYeqEcKbevnnSS4tATRU4pBP9gQvZ3Ynj2bi96TV1WKj5DFm4rJFc9W3",
  "key22": "5FvsvHYKzkenBkqkky3yiiE9nhBLHFKe3tzXm1foXr9Lr4qbeeyjZvgbw5m3rNS3hCKy32YtWkJR7qGb5uH5s4RD",
  "key23": "2SyckuarP9or5eSoKmrF2necKGNKanAjS1X9YH1SMy2Y91FbBwhaLgV8Z25VzeoV2x14u4WbbVTFmB1eNzj8xmMp",
  "key24": "5b9Hh2nduFHTWngujCUrJ7h41WhNojfaHd5GWdDbgXbTau4cJxu2vqgDVFvkuh6rjPaV9jyC6N5x6xmc3qW5AAtH",
  "key25": "4yfLojjfrVj5uphjoTGMdVuJ6gtZV3f22RkzaaXdXPsWmnMnjsZSoGxSSwHzByVgf84qv24X7kDGBUzjTCdSZ9vi",
  "key26": "56iUrFfgiDBB821pP5JWFqqqVJ2Gmtw2GS6ks7P8qumS2m3R86JCkMkW1TC8Toiic5xitoBzfwSnV59XpjjNcmCV",
  "key27": "3F8xLbMC3jFNrtde9mMmjD7deYVrVBE2W4JeQLqGcU2RFQn1T3pAaY8Jw85QwMyWiaxzw1uSWupEnhYgfewExABa",
  "key28": "66feFhEMTRgk6iRgADv9NUgektuhypHA7Yrxh2cDs5qLaeLeirWQGkf5iNswzVN2mkp74afAQQZSbSzt31kdkqq8",
  "key29": "3AUGf921k1mrMGZnhoRSX8Ve4jQUCysPEEEHCS829BVWH9PbG5v6wh4qPJ1wx8T5sRZ3WCHFT3mz62mz2MtiUYEf",
  "key30": "242wL4Hpqsfawuya4W8qHyntLkE4iMczRHQkevLmbqMMZ4rkM1Rdjttr7fCufELiaqieFUgLmrhYeAZrHLGqsnPZ",
  "key31": "yTi9MXNdqETBPu6iGa8TMhuyt7J3aYmTE7d1zLnc812qYsqM8b3Jb8dvYT6DpSDYr33LA9rJy5q817dJPBaqzr2",
  "key32": "qRMvjYMtczCrD6iPfG5462cyLPv1q5hEq5CZ5t9uezZzPFiCzdyrjcGseZ4vAVyUuvnCCKhbZQt6FWnUSZpnR44",
  "key33": "35nAqTeYa7yYEzCG1LQrY9ccjq7VybjQT5G81SFGR4eLBAXfoqQiJaHhQr3kHTad7m63o44u9rY7kMESvrTvzSFv",
  "key34": "3Wqe1n8cMX5K2WCCTTSn86wjvJXdAiESUq6npH584KBhyDRaeCWX9orsBGNqVZaJczKFSZxY615pZQzFZX3hsDYS",
  "key35": "54jAvG87W6SSQjz7o9Kp9trMoVBq96KYzQgpdxC95xtESaoUFBVy7KuHRYeWJGyx2R4zqNQ9xGKviLRKBD3K4VyV",
  "key36": "AtJR17JXQ5qoNSUnjbR3uM8gkR12Hq3cZUNRXfdnic8kGaNgcP9iErMjAeUpjt67FZnv8GVSu45dd2FhSstkiEV",
  "key37": "4cUbT7r9Mf2MAYfgByNeBLPuJEcvGgd2sfvmyCSVaaUYsVmQv26K1LFuUuJKCdZZjGmuZ8zbfniniw5v2mivp2yh",
  "key38": "5AC8hQ1s8eRc1BQymQDyMt4gyHreczjqTBVS14i7Dj2i9ogKtMeLosPVrBnkBMiZcNDMPWwNa6frrcwgcAfrsu2",
  "key39": "2j43XTPFfciizNAq1qy865t3kPQfSdHTgNb9sVUPAHwv86uEawYKLNJHh56PhCod167yoMmRjvRjTW8HJ6KkAfzQ",
  "key40": "2miZTtB6C3LPqsxTeDdp8G2P8sfLtZhCVsueERYgP1opcz5vH3HTJN2vTDGuLXe7DdUjkot1prozR4uven2Rtab7",
  "key41": "2Lgjdt4HY4uF6HkVJTyiTbYYbCosi1vuEsfZi3pJjK8snpdsQkBvPopNRRWMhfNkB9JkDaTFZyTxoajMJBF6ppU7",
  "key42": "5svAcDJ4iBhYqFjFNZfzA8rKob2TBAda4BJj8s4svn5mMte6BzEqiPhpzSW7jsvTorGoNPFRH8RytCLbbLuphZ1k",
  "key43": "xp9ajwW1gja8yJNxo5bYaaqEfYwnUFhhFfvDH58QhpSn3mWXc62ieW3qjpb79Z1vNCebZzVSSD5s4HeMbPm6z1n",
  "key44": "Ev1S4NcoZgez5HJEziybLhff4MWqUAxEkTejk4dsPWDqfPRdmru3FmYqA8HqnQZ14BXRtzyaUzqknaBNEmaY8gE",
  "key45": "2VtcpAcbc3V8BuefQBwvqAKCKgW5mJePnHAHo6dMfPHkAGNiV1DyXQaK2xfZyvTSSzjp896hwAj31vrcZKPfsJfy",
  "key46": "4mN6WMdvxUb3uUcjucXyah7EHytxHJ4Ge99Bo5BCL89D9i3fy41nywpCNoY3ci8oYvFR3G6yyJvAKSVek8H6dob1"
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

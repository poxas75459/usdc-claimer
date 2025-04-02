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
    "2WWnp9Gv9Ctj5Ky3SPQgYwHxDwwerS7Ea6Qch6Rq2zXqzDVW14gpeKNhdAwQ6dAPcKSEix1Bpw57Z9NP5Zqf4xre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCT8wxjrbsZRVC1qMwMrdbq21wrrpEDQDqwM55pmm4cGGNgnZdU2gCTsQ4WdXN6HjXiKCyLhsb8tvz9QanXRFDp",
  "key1": "5SRVm9iocRAfMfQ45TWSfEoexZM1mihstvMqSMKKkU2PD3ErBMznGaG6oymGXU7YG2N2fZnCkaGRpmg99J7Vn13B",
  "key2": "2ZWjeMP3gpARvLBj828HWmzrL24xrhYKWJGqUfRyxYdxU5B49ZnJe77S34YwZupHvYcRjYuzoBYnMUeVKmdPFYmU",
  "key3": "5v5y64pxWk3hQYxSwH5sxBp1qmskLbsw7RtsRz9pQ9xtT78Mnc6KXyBvMocEo1iGPQcnmbeCytYkmpnfuHjZDS1n",
  "key4": "oRbeJZWBGwxRAq9nCz4H4xSoJXTPF9bPYH5uuf5Cp3pCc9kBCLFJ8HWorGr53dZ2WDmQVJ2gk6wTNuGKfBDZygD",
  "key5": "4vUWmojC1iYD1HKHLPkS3136iS4VbZX75o7viW7LRib8gAKNjsb3QopgjNscEdVNC36QcKGU6QFGEwiEL41dwk9y",
  "key6": "24RYxovFJNfrnUiVosWvFH3DXnBDQZRau734thAKHqyWfHSZQN4PGLFrsbRbo1PSnxX36KqHG2X41emax38QsiKU",
  "key7": "2rmBWKX8TtnpyBXamLHN5Zqcp8nGqeiHpCzDJCuZtJFLTFoKLr4y8Yz9ngnCbudCzB4e6mGdznzPokUouvMe1GHQ",
  "key8": "27qvzSsUqufx6WwEdVfF4KmCMKq7yjMtmsX8EEzok1eCHneddaDQ9aoBxiYNwFJyEn3HVQHjMJumfNsLUKZQGw7Y",
  "key9": "4Ni61STPpnmizmX3mK4PtjywtETCZVuTEDTDjhGJbc9rtTTnMNpH8hMBxgKiZCJksRWuuWLZNXiGgHeV9f7TmfQM",
  "key10": "3cw3eV8yJ2gSPjxX1mKcyb8hkZcGQWpiXKwzedrEMgxotGoXSMWeXDaQKYUxyTh3HCFDRorf72vWg5M9eEE7RCZL",
  "key11": "5mv1qxs5NUtWM8qjZRNQ8oKYBx4bDbd9fkLMMAwhX2Ay49BWBngiFVfEudyLE14Fmxkqb6KNKDseZqpC5rYHHEQh",
  "key12": "Ld1oGHWzouni7cRznuuH7zdNnA2UPebxFS5EFMNNcWAbTix6oMSYQXE78GaWa3kV7oAWczkL2mtc16tQ3figvfg",
  "key13": "8fLXPW1VbTdx7eajbxqpo6U58FnARSwFugzPzWDCWXXqyxhp2bZH2Tx1jG2hRp3PkzkkTHwKVzgkX4BpG6hZiAx",
  "key14": "4Dox5aqKQDeZ5T7Ao6WKALsfHA2EFCwtkUGvAB3xwkaLrGRzRL9p2hssFW2WrLHJDiNirkxBMphDJmauwM5XMd1L",
  "key15": "3tGNNtY1yriF3ABmyjdCkmVPbYF7cSQEExHovrcf3LUsZdetgkFiwQjoBecHXZ6nqS15SsXQpTrMCned2Sf6EUE2",
  "key16": "5SU1EayTbzL8VPM6cST4qCS8w5DShn5ujcwpwnxDfcDiPcwn4jALdDiLVdk57myMNhzEGt7D1uCjFwjYWxCVh4W3",
  "key17": "LAJbu8Skk4bejkSRXbT2ezJ8wRcAzgdKwST5zrXMdY2byQiuNYtj5h2JTmTjAmzuE8TXr8P1xDQuEcnANWCq5fr",
  "key18": "5ujmqyiDW8tfFDu6fgDRPgK33tkj6XdmK76NwRgUJTP28jkXMEZf4d5dmboW7UUy3vgoTTVHmd5x1Fg48iKRRysv",
  "key19": "5rJ6DiosckY9DD7V1GV9ECurTjpFFCxKqJFNpwHjXHnsp4iUzHwh6Yck5twJaCCnKwrenvt7doLHx8oMVc4YF8ro",
  "key20": "61gy4eRfN5upFHtQTQxwPM978GySkShgWSKUNg32kDgpF8S8bQ8whDHvpeeoPZWFbwwNjp94jp2rtwBqziKyFTT9",
  "key21": "2sgVzbpdrGaTGPBzioXYJTmV6kf33aXxrXGwuSAwznr2hZMXH9hJkJDi2m4LFA3Nwufx8s7c6eMrJGjPPgfpTAg7",
  "key22": "59CVy62xTpkkacrMArPAtJ6kePDn7ke63SR9QyN2RzvWdsZ6CsRocyFGMZzSKCCv7PPgq7zymaC4MsJ6W63wjsNs",
  "key23": "3nJ4EQg49fUAC2ZTgLQUCdtwaPXbxeZb39ct9X6zwEGUuAKhAgWDcjrKWs9muxEd3m4yKLx32uDnJihyj5vjZtMV",
  "key24": "3wT2UvYZTq3nM9rz7MioU7PVCtFUhH4VqDUSS9anErk826uwTBpynN52Q2RceAC4VBLPTYPsurnQdUpeoy4rm48t",
  "key25": "5sgoxzsFaLMqU1Vg9PYF2CtQFCoD3CvqVFudXZd342akGc66515rXcVNyjFGZyYiHW3TKomNqFdB6aKKeHf8LWJN",
  "key26": "5nrMz7KdGKdGbN2G9JESCAvAsssBRepjDfbFMkJnS8D4gYyp91pfjE9q1Qcy4Ubfqgi11ZQ4DfzGKHvCVvFfRnCh",
  "key27": "24tba69uezyYpLrxCASDbPXzB7qCy5YVJtXz937nzaPBHK7mwkGTHbATDnbCN8ZXQegeNhAWMk3LisUsqHf8NYvo",
  "key28": "tmP7czzsgki55F87t655V46s8xe3aLYRsC1fntdTHdXR9o3xgqqwo4pu1D61adFbPJ4qoAeTH5HqUR97ZQ1UPHe",
  "key29": "5W4B9jjPZ3LRmQvPvgaccooeGVqgsDcZYZLxCx5uvN6ztmwQpkRtxuKCqJ9nABeZoKHES6GbxPMx8UWbg3AYTuKU",
  "key30": "2mhwXAifuAVfgFtJTDMrBKMyJvZjqoCCD2Pu18pN7ccLSDNwEnB9eQL1QVwyKTJkSWQDkKub1zjwJ12JiHVjC77o",
  "key31": "3tihDsUBQ7zEai8wMd4oh8w4WzRhf2LyXvptkh9QDbYdZ61egMJfnVNMpPD2SexReS1FGUJiBA9gZARufmsb11Mt",
  "key32": "4z2jw3a9sxD9tGvpZBsYL2JtMWxk7doj7wSAsbWRBHoPJVier6yuK5GssFML8CHgrWbqmCP2Kmk6b3aEBWdDoA8E",
  "key33": "2tphLnofiNjUit8VYoEnfa8KMfbDBNbt2RdTvvfCrSgfYTs6WPmtGBnJYTapjiQVGa3pJxVg6RMSUnEnGwGM3SS7",
  "key34": "2GKbsMRhL21KCNvQM8bJnsvK3i2EFtNZhya7ZabLMdqd9a3tCQaCuhAKRpKKVSoYMaZBEKt2oLKptZtF2wbUkzWz",
  "key35": "59ESyM9k8NZxDagmokLmFodd3pCpDaWW1jmUAC9d4Ecz44WLxZYLZ3fRDEA9K4hvAmixS9kWTVRNeJBQAd5yZXtn",
  "key36": "4Q7RBAAQsJnWuQce9k1rtxezq65C9hihEZpiRM5RKJGJjNVoXQwhtsWi5K4bM4TsNoJNAJjrcTVS62qWs4agiCU2",
  "key37": "4XT11aQkYJVVEhcJZoieJ88rmvqHDMSsS5L3FooXjpnJoUcQ2fEb4rZtzrJr2kmjS4q3qy7KkDbpHMrHvAhLyFec",
  "key38": "2ECfA3SoRpzmqi7qD48kRBEnEtZKswv4XarqXHGLzPj3ykiTo6HCmuwM3GL2SFx4MoMfjJsvDs74fxf44gdbJryh",
  "key39": "26UZ1wxz8eohpCgvsuciqennubehC1KNYPGB6mLRojVaYN4gYyEBTsNEgh5SYAUBmqPvKfmv6MCCCry5jP6vb5Vw",
  "key40": "4uumN1N2kinAFoNvppWgG6S2KLBLRATPWNjRFT6m5wMzNsM8QQoby4yyiMTdwuv2Qa4YVSBKYTJJKhRnNB37SV9Y",
  "key41": "5vMMCUfDFaRE8HbKNdbdTeLaXbQp2vGcKVKHpHLbQ3xbUKCzuHbjEhkgMiiQzUW3PHS1YJywQEBcebrWo756JjhD"
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

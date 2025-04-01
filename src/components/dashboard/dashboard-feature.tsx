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
    "4umhXHCvJ8DHcJVBtdU8NzvP7aKTSQFgQhzqmaTJh2C9aY2ucEbt9NhYmgdqk2gYWLtw3N6eHsY4ZTEtaotKJAke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xwEsF6GMrwK1qZtwXRTCDBw29Y6k8Qfy2yaEd3zyqt1ryduJgKa39APPgUEpw1hGDxPiXBVr4oBC16WVPbor3pG",
  "key1": "3BNWQpHwP2ubttyaNHiKCAwK9E8dADAHXSNgqGjWNTZdcvF3z8jkrjhqfWJy1xyQXj7j3rGdNk8bdPnWPwwafVNj",
  "key2": "3nEnauakSL6b3CFEFQiP5jdyxeTr1BcHrkC7KeLAdtUR4twLCoo2xNZqNXJsimMFDKsfgJ1s5H7URe1TWTtwaWxm",
  "key3": "5XyVD5JiQ4CH39eXYTL1fSWweyq7QHdLg268YjU9L7CxDENkzex37N6t6M8xJysKycvk8RRLrceufaFjEz2oPmpP",
  "key4": "448Ekq6HQD3dW1nExZ75fRmmtoR8G75VCh6oVLHVbFLBMAxT4LLRqqTY6gYBkRZ377ZhvzFGL584tGpuyHu5YVHu",
  "key5": "4KghbHmknTvr4etn8JJq1ApbDyvjaqYD91VqFJquiyPz7u9VhDLmeK39qa9RUzYX4d96tZWiyE9nKS7o6UZ29EgN",
  "key6": "282yEi9zdTtt9GKzrzUGw91YvhUCMrTmK5tCyC3GN5YGm1MMFHAXUnByw1QwYWm2rY7pqb6CtyWTBmWzxpDFCR2T",
  "key7": "353Xrrm4QwuN9jsgaqMV3pNJrPFVxertL99vZ7fSAuLVL8xCs2AbJ9dwEWtk3Z7wg52YsTG5fYNMyxpfanAWzNib",
  "key8": "2o1MeoaEzM82HcxpatgzjszRrNY9s2qrUXS3st9SNjt3p3LbSFDL7ZP9uW2RstVwdXve2D2zsHvXrwNCiYp5jEqW",
  "key9": "2i4v9qaTNhB5SfBJmAcp2bhn6bfotfM2zrJM4k3aRiyF3nx2WHQB6JrTL2eUAzUjHBxpAsmzEYJWx9r9jGuSFcKm",
  "key10": "J4RoqVF7kkCWrVPjTcVRc7xFNSGbLiDvMjqrahM3XtkS9YQh2T9VEowJfcqB38ZD1i9o3SDp6SHdfdMTJqespgw",
  "key11": "3596BGnGf6GikTbabJFUjLWURT6dBnXnvQubPEehPhrQDvyvxKpbP6m2mDWekwiTrbCbUQAyT7NvJWDp1c6Am2f4",
  "key12": "2aGbJHYUHNnAyVFm9EMiRVd19DeEau7aXumQUB1t3G9BidbFcZy1KFkAKGKbGyM3btCkbgaiUv7yPWPNfipLjVHG",
  "key13": "51qnsrX7bTm4AAzvTaL4bqKcCFjzqDS4oowx5uKdoFUJuo7cuBgMGV8nAfqzkeuacvKGQFm9AdB45xaaYbPDjvvE",
  "key14": "4eaMtAhJSaB1JRBdAmbXf7UF34vNGTaVex2gFhYjDRqoWG2Bb2hWpXeaz35UZVRPHEFGNXdK3r8ztH4eAEemmceg",
  "key15": "2oP2d2U3bJ4robH5kBfkvHjH3yiQRCGJEXG9Qe62Pf32oFMyCHAHGab7rask1k4fXHT4KsRs6wfHXs5TqprZ5BSF",
  "key16": "3WGyU41J5XakYizMDGAYjxmBzwvisB8jRgVC6tUwqNM3RvTKLKWtYWFfn9Gh8wChwVq33apruHtmqTTDYAkKTFP4",
  "key17": "Qji2kS398CZ9htvvp3Z4tZs3rtovy8qi4XugC1cK8MgdSGVe4argifrktF1mHGXprJDF3SaTyyKEAT6AMDaZQ5o",
  "key18": "kUJZH3iZ9uFMFEpUtbNzuUr9W9HecVeamoGoBkGG2guaJ4pa7jGcoTiwH7yr5Y9cb1avH2fjk7Fcw6rTryk24b7",
  "key19": "4MUXkUTC1yifUxcoAeXugXycFFrpPpdp2VBA4YqjxfzSok2udRySFcKGZaLKtxFiaDESYCqou17TTBhEtje7CvPM",
  "key20": "4ZbAeGEv1YknGJFCJap83UJmVMfHBB28Ks6Qi9WfBxLmPDpPwaU7ZUxej9EWEagPwjzaXyyfuiC7d6THyDXU3hi4",
  "key21": "3WPuyBdUvTGPMRqbTR5kFmQesKtTdEhvbrypzZGfr2hShwh6XcZ3M3EQxzmiEaT3ohBD4HygBFsifi2kBSyA96ti",
  "key22": "3dDf52cuvHa44miqXGCnhBPEnEZ6LULVcZEVHoeAYKEz8fni9m1GtAMEytbyWUkWrjNLUugNpndh6yQfTFMRTMxg",
  "key23": "3isQ8skCUbxWhtAdK11zfNYX1px3MWd9TdUWT4TgvXnM2SPY18QTGb1Ax1yKex8MLfw7jvmX38D2R1UW2bxwF3eH",
  "key24": "4fKAbM5KE6VtH5SBGYTqwCuWcrZkiGVXYMsyPxbPx4bDWNewxxAjiURmJtPyac7Mp3XuypaGirPZmPNaoYWGWmyM",
  "key25": "4azafefn9UVxpUFNvwQEoCwxJA14mEds4s4gFsgcBEwiQQfhE43XpeaZaYW28X49sH7EwW9QwdXmxpREGF1NmMKg",
  "key26": "65p6nbM7Sh8kRNo8XduEPjAiYFhPBUF3HCN1tMsqZTncoLiC5vDnTES6K4Kg88rC7UHSQLJJx5WoEYpfK1pUQQjC",
  "key27": "PVxTER4Sykt6hsP9SpjhGMdLqepBwc3gK6r1ZXKPsCpUSfoTgtX4iqAF1wa6JBRGYZUv6KhRaijzN43nASATXN7",
  "key28": "AQDQAqAsf7D5kwFxY7RVAM7wTbEqoofeKpLjYBDezSsnZqqa2SGHKtiJJ4mY5mfhmmwU3kHxhEx4MiBhxeSVfBE",
  "key29": "53BPGzkhow6QPP7U9v7zt3KJVkz4oL1A677NHjdCRV1DxP9AE9icrwmTHU68i938T38DfTeLXKY1J4GMu9kMpxAf",
  "key30": "mfNkT4ZVXbEgp4WnkPXoT3GDXrrRnpws9TkoWFnWdrbSFZWoXF9HDSyGLtcnJyHK9n8SHwQqKdC6i3cYjxPWu6g",
  "key31": "5b517dPQZ1UdUodkL7RuuGTeWg6WJRZcMzYeXfWqrGK1S4hJYG1Zgsqpq1MXbiJSGcn3EYvxhSVbHKw8YZ9a93zH",
  "key32": "4rd64yt6V66k2tU6DAVcuFXpv1SGeXg9ZfkwCKVXGZ9Ne6NWRSWEEsntpUgVjFvtxJp56tYDrM1mue2jsHJNgjtm",
  "key33": "2gNDGWQU6ExboiTgdu3sem55NCCTBaDohiKiLmWq7zT5doNgFvXRBFcbyy6BKjPSMw29rjG8Wi5CUefohJur1yj1",
  "key34": "3tStBkXESngTbP6eSRK4wqZh12tquCLcPjSozctS77gm54td7WSeJS64vth72u2owzy3CKXiqysorEo8watfdmdi",
  "key35": "2KjtWTa9kukkmojhzu93XEhYkyPtZrMfcRRa6iDctVuGwo66WKkd6KobiXbURvvF9chaC1QqVgZPgkVfAjZEsYER",
  "key36": "2JDUfr8YdmeTx8i6sb1otJkt4YvHscG3WhNb4Fxnp9DXdDMYZ4VqW1H9AWwgRKVBPEKXmQavLQkJGqkXXq6XmFmh",
  "key37": "3rivpTSmKjbkh8pvgnPLNvLztcPjQpFGHXF8hmDHh3Nem7igKMifDjDaFkUUHFUdj64H3gcd76RcZ6rbRhez6fNB",
  "key38": "4Spjc19mpw9o8Fb7r78EabqmPZu83MsGpmZ5vh8ocyXoWodve1Sb4hh7ULCtLGbmDzGV8NR9MFuE5fohxCcTsMmb",
  "key39": "63JQcReupsE9WSYzfNd4Njpu1tZNToKi51FX2KGKUVsMhhSnwwQP4bzbRzqWExcvG5TEhQL4ychUpZLRVqKEgLBv",
  "key40": "4SivvKifXZb9JfkTimwFecDdsQL4DKTtrLvEikf5GLiyFfzAwsVzNm4szUFH1RP35DuPH7sLXFD4jKTkqXWsYEtN",
  "key41": "arFMGSuE32NsbzS8bZFXYesZPb8ybSxKEqJGNNtXbT8svV2MM96MuDgdGUGh5aDGi8F7JXgieDpubvUhPSJwPqJ",
  "key42": "63etykDWU8Tz83vwypeakfUaXEbdTjrxEU8eRK8V5hKHHdYJZCNsqzAexR4VWBAexQQrYzktvWSs4Bwxr94bqfWz",
  "key43": "5Z28qBYmmXtnaYcRT8L816BzLJww3W3BVafLkt8TeYHi6JBm1X5D834GR5dm3YdU2BqkXmk8T2WEjLiFNnLMwiDK"
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

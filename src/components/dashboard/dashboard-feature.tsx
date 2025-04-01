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
    "2qjQoGGo4c8oVEqNL2z4xgNBWHzmkZoZF1Bn6sJX1fS8hp7BAKDDq2DKvfUPdfCjPc6Zhjuk1HQJyTbTudWeMX4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J3xsHDNTbaR9g3kf8qMSAKYko9Qv9rqQwR5zjL22fCKPsy3TcZL9NPoLYZjVLnTBS6QmKsYvCeA3qMvwe1NL9Wn",
  "key1": "4apecQVzcvykVbfc64k8xA6c5jQaybn2anTyVNdcMGAfUE1UkDCPVA7bgoz7omCPe4DQU1dZECXv19P6bbmVegKB",
  "key2": "DT4KrPbXKXUjxoS9LoBSZLAqgPj5JXmrWCEpB1ycDcpEkHmFtiPE3mZRTvYnPcjTR8GJPEqSsALcVC6X63dfPjZ",
  "key3": "5W6FbDsiYhzzhafm57WEFBWuefVEHmvDjQmKXqyT5GHj8vVVseCB7PhpV4r5Yy696u4scq4L4gMqeD3DrEMdaQ6a",
  "key4": "2TmPYLKEKk28DwG3pZTH6xyitL9V4UZZaATP4qbV3mWanhM2G23diWDwz8SuHyRV3B5NWZHLFWzLn8Ac2i8K6ZbF",
  "key5": "2PiWmkbUok3hANhJ8nfP3y3xLR2bFTGUVeZEA2JvW2Zw6KamAqhq4MW3xvnAEDPYz2vvB2MvymGE9doPrxaXcDSL",
  "key6": "3BcrTLUxB9pPeuSVBhGQSmWw2zzRefdT4iwXymgEr7py5RGqbzohwdcLcSHAx4dvTYQP8iD78gVsRTaJK9ss3Nqr",
  "key7": "mmcqBivzUkogv3zKyerB1w2z9aTygFp87gpLBhW3MBTQd38fDrYx7Jb6vK4Lcrhk1Pydjk2e7pkRL2uDKR4kCuH",
  "key8": "592KQ3D1WsPDMMJoYXfzn3epvE7zYvkBsqVQcy6mWF8sTpbRxpgxgtVBA3E9vg7NQA5m7VpiLfDieANngsetfVfr",
  "key9": "BcpfJEzumMaUcFuxcakcGW9oozHwpFUWMMDVEkBL7Ao2DSqsFZ2o1t3YFJhWW12jmuRyqxACXrGMaqCeqSyV6Ab",
  "key10": "RFyR4DD2c8zmrpZX4u3UVQ8uC7o5yBPStpJqZNuTVaiaSs2hL9zxEheyem8aKLhhfZ8r2JUPsckAX1HmwXaQi2U",
  "key11": "4PFYsRrfBGhiSaG7moL6a46agqVbdQf7TwVj5MEJYmi2qmL379s4nmzkpoh1evQfvWUrZUeLDPiFuCk4QkYnfa5b",
  "key12": "5Nbidc5xkwg6bm9maMNd53xuFU2S7x2EZLJGmbwcBDem1Y7s3L8Ef8jSifZz9QTLsU3XXFVn3UDGt19NfYhCK1Wf",
  "key13": "48PXmcVnVHPKSjyjfYxCprqFXyEcyqBeAw65Yc2oTLe4dNAsQDdKhStGghnMerHNFjQ38cCnq5wBrC4Qw5jtRtwM",
  "key14": "3pwB5TZV7C51B4YMz84akp7mgD9jPdtzfHdso5ky7sZ2duVp8SKjnysiauGhuayqvCYq6wjFXCK1TQ9n36uRHGez",
  "key15": "3Lnrfd4xJzSgZBnJaxnzArMH9HHhyaJdZ1RaYYAywtA312mGFvQCRkaivLrCKbBV7hsM6mK4WcvwX6RFQifUPSB4",
  "key16": "3QGQBLyY33S5gdh8BfSx9k7N6qDBqMgDLVvs5fpxVq7eP7DtyEQys1hQ79Fu4E8t17tynQZAjzz8Cz3f21d9cjV8",
  "key17": "4QYByXhaHz5Mfr27CAmqb4Rdo1CwsV8UHx2yBXfpt7vDi7JyhNWohsAnLKFyz5kx8QC8G5Nu4jU557T2AYHQ7HdD",
  "key18": "5nSsASkvSFqAfewUmuj7iVMuPiHotRhhUt3pXKGF8Urko9ReKPsjK5stUx6nm7rXL1UwF9VcT5i65XURA4cYbXkU",
  "key19": "8GSPnxM2ndXWk6JF8k2fJmTz9fkh58XAFUWLTQMdmiP9yS4FrpCMMCZ7mvqf9JsVeXDw5PhX9MM5hRNtkKfSVbG",
  "key20": "2Rf2ysfQSpTpAiu1D8SfjECpE6YSorf3wciNcBZ6qPKUUukCHHxpD2QetiaU4ZqJH4ikvNRzxf269sAY4LwjndcM",
  "key21": "tUXGYRWwYciUVpz25QNVPPgCSRHw9F28hLNM5kqQcnYQyaW8H1k96F1VS1RRmgaevZiT3myPxyiGqkpFn8m5sr7",
  "key22": "37iWeeyVaVd8feVdaZWFcedztQdhgo3tAgD6pjm2TBJruiC4hMHZeEy16Yv8UXVdCpAuQ7gJBcmuhdf6PPiSSQn7",
  "key23": "4MfnekMH5WYbAG3Hj9mwcXR4agcJaFXtzoz3SEfz2d1qkzR9CAoQA8U56cxEUUA2SoiMnmDKMbazwL9WweHcAJq2",
  "key24": "3istqLv18tAWPoFVHCnPRKquGMMdrzLP7Ypwk5EWDSJucXMRdZJJuZ8jWiNwayNwwrY42jnHRKQEchPTdGDg2UEP",
  "key25": "KBwNidXLrxCT7TKbbtqu7CTDY9jUmMo4i4iQoRhHAqZAitMfr4v8AC1Zh589XSpJ2kiDFatMMhxhEngxRAMdMad",
  "key26": "5MMYwR5LFpQWBMGJCCPw8UK4fWJ3uQiG8jCijoCuJ1GuZLc5HUvXW75A4ah3L4FXSYwbLEBbyaVRR4VohkwBcJnm",
  "key27": "4tKH82dngFuFfWCPjUVdcJTJVhFscSoBNB1XonespRtL2GxHAcxtyhdHgGHMxBoYqTubrFvcrC7nbqWf2WNsLpJ2",
  "key28": "4q5SAw3TjGajTi2jma1jd6y6jUX5aAUsCeL86j4nyHdmh43ucyNhwJREyRLt2omrfgo1wK3bUfzL7gP1b5zRdYkU",
  "key29": "5J61BuaxAW2k8RcJvuH3qQKp9NvDHuQyd15W7hWUWeN24GhNTX9cxwnBdaqBxCjmUXEABBUM5U6PtukDgFCkKC9T",
  "key30": "WoNrEHohaiAyvS8Hv2nBtqQp5EzuySk9dUeKHkcp2CGdZcaUpNAGo8TT8SDBAUxku35rcyauQuSXgWUn8HPBAcH",
  "key31": "4ZZTS1NpbgLFWsa4cMkGCw4A6D247u6wLa4Kqze8hoQzak1oks5v8HoZR8sUoQxLM2mLbhUJK7cKpAh3TGLzVc6m",
  "key32": "38Mt8ndrYhuRmoRRCbyQC93SuxisTW9z7J2uw8tkzLtQXuCL8WLZCKcqJvTBuEccjqG8SgraLquhxLScXdefoNk8",
  "key33": "5v8Ej2DFBQtpkmoodUrf5aTP2J7whCLS58aceJEaX98N51cTuQaQirZaUzRKa9SZ2AB9aTeBAeCo5ohdUaoA4Lwg"
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

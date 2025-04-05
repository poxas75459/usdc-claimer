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
    "PP234kahhvsbSAQtPHrT7HJXmnUn4iPaSktoH7w5sGq3QMDhNajHN79BWNqckYWsKv9p5zzYtGejHXRZLuB8upg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62V1bX3Brbj6AbbzysjfYQDejTrQVkRJ3aPJVPw6yPAxjhuuey69TLFwUfNASexCSBf5c4NrXgpTMFMnutRyESr9",
  "key1": "38apsXF6bf7jq296iqANWDrGqhyXZeeicSWVsfJQvqrSrbUPmyAoq6F5bfHhkub3V97D36TWDECyqrxmcHLBYtSQ",
  "key2": "3yjChtwATtiYu54biPoN3KKCQWvLCaGS1TWFeLbAnuD98wCgzXhXa483akQpmw8jV9NUG2fx49FizgnT1C2RZ6ET",
  "key3": "3KQavC1EEsnGt4UH2bTV3kHrBoXoGr6mYVJEZNfZnB6fsqPGxDiBrLc2t9tr1tPw1ZjD64F1sw9Pq3iQeaNGi9B6",
  "key4": "2TBpufVWET7d4WX2nChf5Bs9DRDo3aHZ64rP1hAQWViictrPHx2A5o2HpdtZNkf75wGnuahkLCAuUPNmgTcQRNTD",
  "key5": "5avzS6LTb51Lw46QFJRZKoMb2vfBAPW3CTx6UqwKU1iDxnY7EAd28jZJZntgtbQ3KRkv1aFJi8JC3J3ZVKnUPLdb",
  "key6": "4pjKhcQRPFz3YcFomimmr4jyiFhLZ7uEbctHsgwpuU5uCsQGKwKiqtJhVD1tMAdS3QykcqdNjMi4rTwLVfogfEu4",
  "key7": "5TM2reW2yoL38CEYSFBCouhkPNzigwdsmQWVa6mPJ1i7TCRKA58xmaQucfH4y8CcDSmCNfHUHufHWMnd9P3JWb61",
  "key8": "51fAP96iAuqjwidyEC84u4L9GaPMv7rxNQjPB2vUBATebiZ8XS2yqpnRaKbLthFGWJhRpLS1F66QqE3eiSk2d7P5",
  "key9": "4FW4Ht2H2YsViTW4imvrH5UdjzYSRsXXfPkE2Ta6H97b5uXijFxuhQxxJBMhS5VP5HfogorMdWvt1cuAEXX755mL",
  "key10": "5mTWpwNG182MLB7AHc9eydnSB6yrYMyr4d3qrMiuf9jNDbYNYimAXxJw98m6AvDxBEqqjK28t3ZcwsLwPHL3SBpe",
  "key11": "2pfuo6m8cSgV3YUpDjjpyDz6E3TXTm3afUMA4Y4bKbQ5LUbEVjmpuREVWqLcyzSa63k1vVhzbxNyKE4EjQJLiVNY",
  "key12": "2t3njzjR1onABKxmHSxbXCJGcPiE88QHhHoaDZcUU5WoeZUBGWDAf5X7kJqQ3tYxYReSeX44CQP7wxUxMwSyP8qn",
  "key13": "4ZoMZkPFNzpWbiFFjge7PieuzguKM4qD4Sgi1qShixAFWR6eRqrt8a1sbKkSNsbE2XkGZQf2HhUjuXRb5JB8GUUy",
  "key14": "zDSkKUgrcLseidx4ehdAHE6kGiWeMUVDWe7No2SmbM9XSaQyeozCmN77N9U6VUmFZk7ATJW5ZCJv5R57sg5sxtr",
  "key15": "4BdFYcQ1Jr6qGYHp7EthUkM5hHejJsfHNxz1BUGYBkd5gRQdVv3gsCLimV5Qc1d4iYKAVW4UVD22eebFNQNVkUoV",
  "key16": "LcfuhQwcZCmKAnuRv2QMa3k8cKYK1b9P3xnSqL6jfctf85ETTPcYFVc9v2WW3bQ8nckW1NWYVpPgUdzvGWPScGn",
  "key17": "4xRJsM1aSCnvQ19o4NfPzCutyxQCnofiU18d3LC9oKBV2qeimhZGWE6AfLgjX8zFxpSmDmkm1ATSnCbv5Rh45uzM",
  "key18": "45u13BBVRd2mQPChi6xNHhGfnf2LferAEcR3v3hpmNpxj4hc7wjKUyk4tpaZcLmNNJqoxXdtYWr61ty2ktCN2SHM",
  "key19": "27GS7dnsPK8C95MsAqkJduCaHUrsDQpcfRb3qP619iTTEqCVYWUFg6XmNg6C9qJwQRgabDATqGbNp6MDRcycjgzb",
  "key20": "4yCqcf5xZozanUxissyWXkigh2q92y81YwZKEMQcCkEku7KqH3HWKSPqM2aukmHSwUgTesyjEZyJMTa8D3hF64Um",
  "key21": "3EwBa64jis4M2cWVsYMXkq8TwPxiGVyhpBoSxymQgFzpBtqxdEefD41yq59wqniJRXT66CrPtasgQqRyQT1PjA6r",
  "key22": "4ES6EzjBRPaJFNr6ESsLfbF96ew3cL4M6Dx25B26nRZjhqywVifuNzrtS2bFTfQ9AFkovGGxkb5nKvHEry9gTWZR",
  "key23": "5VyAUfwfuJh7SAHBkqQU6QZx47eeLoJNWps6NhSieoapEVrMDW27kto3kVksXTsQPuSx3RYp9UyydSbiP7366aZN",
  "key24": "3qTjpaixYe6dw5k2RWvSwAbhoaTLNH4PzbQowvF6kuY7beYDqRwKKLTLGtC2nAWbRXPZUTJmi12SrYiqMZpWwBUX",
  "key25": "5PCWwUifhmLXPsWbKwaK2WZJhUjyjuHTvgdguDi44ekjeVsq6e64wnRSEbTzCzchajY3mQNsgR4WX8hyt8Rd9E59",
  "key26": "WgdxxZZWtUoLpZpyRi8aUVmaLzuSPGLsp3yRi19dGWUiZarn3Am9mY7vNdRXRmVimGXV9W2miFHQqX3T6rwaMrb",
  "key27": "2tCdToxQrDBPivwCSSxxroHAdmbLzzdBm4c9AnM3tRuUvxKBbG3NCgFSCcf1dDBJnCgLgBxDaYo7Po1Qu7M8xy1b",
  "key28": "4GVEYEM5qqHyVMDkS1mcGQrWJcPFCjtnvx7fuAeXc8RVpNBE5h2zzJuFSvdYsFnbJeEK65u5B2thyAgUd4M3ZSen",
  "key29": "5PSBWScfMXoiXLBMjAFaJjNUjA4yufBceZPeR3UV6ZufYPK69rr3BHGc1jTFr3YM73oXctSZ9N4bLsbmuH7EcZTq",
  "key30": "LWTsvMoBwWPHrytw5tRp1Gu5sPzGhsdJgYRf4srFxDBGxNrNc7j3hUn9vB2Q9pGXKkA3ohcZzFxpP6rjfSPD6Kh",
  "key31": "46EgKtj1pD2A6xRsyBUbn5ZVapWTafhocKTYmwZxRwcyF3a3HzYhRtkBdnFcDoG38ijh7YneH34ntnikFqHprjGu",
  "key32": "4Xv8i3fRGdzQLpqYWvNJ6amH1WSVz23kBwzRxiQAzhBAKmU9V5qJEyeai6EGTQCvtv7N7BYCnUzwmU2jiaqg2mmq",
  "key33": "2JpVkyA5g8yxaRngLqesoPDkkFEnSrp1sYjDQErtpqEPL36NfB6saeF1HhF5R4NmGeznbkNQmXpVwf6eimR7XA3E",
  "key34": "2uCmbWrqKVoFphJYjkZTDZEBmpGyjmmbfMnvNN1XhpP5LYVJYppDPqeZ5ugu6ypwiNd7RxKM246fNeDMym2Ua2Vb",
  "key35": "5h2H2wvSYHtUtffnLACcZo5VmWL9btGvEZCZqAthDrmrxY99VYJQkaYiJhsRLdbXUgHZbpm8yfv1JxebL1qPp9MW",
  "key36": "uEQAhFC4ca8HfThWi1uXiwUgHT4t9ZdbTtgVQGSnMdv1BAKd8HymjSdXfDST4sYAp9buvV5MPqiZ7s2R5f83Dza",
  "key37": "29npjFkXBVBHs93TgPWGZRf7amUtpLKDvascJHjdiaQpSKmYPVWWp5h3s262qKk99JsZcVq5vMqmKUsEc58CAjkF"
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

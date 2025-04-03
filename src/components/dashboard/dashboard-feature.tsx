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
    "3G6X9eTZfHUd4jTd1VFwgg99dyNnLGRofa7RS4jv5u8e88tLHsXhC6ReqJ9LANYdDXNeB3wPEabybS2dXp73HpoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jqgMrYjL1J9QQ39c6s8BKQ9fhwiLKzoKftkgi6QpzBdGU6x2y3cZDUYpqSEqune2nA9XD1pwUGz1GgBLpCUeEhL",
  "key1": "5pY5wkHunfjhXf4We7SJycBfGkVfK4LHp1X5owL3HDm2kqgXZNRXJQbkew69saGW4K5MBdahhTLpyKf42hGGLiZY",
  "key2": "C2pz3zapvRFCqNjxHurK4FxKqBbdrEzxsAMMPkqyDBveU3sMd45DuHRPjRJqkW34hB2cFiWwtmJE97TaUzTcdT6",
  "key3": "31feLps9d7ECWaK5bU9F9JpJKnEzXBABeJRF1X4aGH15kUG8Gq6mioPePSqdKcFT9W8MXZbunfpUDzf6jFmZztr9",
  "key4": "uDukUQdDEmee9m4CYv4D4rzFn2BZwamZxLmdMyqaBVaHPwDqVcyNBmrxAEktYbvhabiPqFmYB4h88M3PtYL1rtr",
  "key5": "2AWSKDsWiCiAdgjzq1zhmpkfYk3hE4U68r8NaqagLDeS18u6tFQiWcgELW3JiEkrbXfvejbbGPzGu81wS3jGW9ym",
  "key6": "4k5yuBJGfsLhqgwvYiPiY5pTgASWqNXi6KoAf7xABS55SWKGLbA2XhC2eSs1djAgXPixeWEMySbV65TwKjMRKRCJ",
  "key7": "Qa1io6SHdNUwWfPh35jMWbeyXM748djWk3abmjNVM1cTr2RPTkxe4SCuoNSqR8udhbzmHUEhy9yzooLdonhXD1N",
  "key8": "5MX9xxwj8PHNfvYNjpRxF65kBRCTJMEMhuczdmwjnzfoVnCGtcFAm6QnxAbR5wQ4eYNgw6tk9uurGsoMYxiiMqVT",
  "key9": "5WxLHkhD4471JE5xRW4EHm9yrYod5CL9Ja7kn9XZJxzuwPKFtk3RmErzd6sa2s33K5EV4U764PrF26665iJNSFHy",
  "key10": "3CkjVTngAYsFaVAJMDudzepvYhhbgabKDCe95pni6TPo9PXFyjnEUQNwtZ9u6KgRcaNW1PbRhmHfWYk2gCShdnwx",
  "key11": "4aF29VNpR97tVeec7GDsgfGhMWAUKRGUiKtqeBGYvpSZg3cLL2xpw9HZJ1F5MYPUUUtpjTXUyi3Jmq4M5iKj5CuR",
  "key12": "4Kp44qHgptjCTnBdwyG9HTFb9FVPmupSaodV8GSBPVZPAJPmsJuHSLMXo4p1mVp2v4NwCVgU4iew4aroLroyZxvw",
  "key13": "3gZovTYeHfALKyoKG9WENe4fiED8fpmLqBejcD7pxpPsdzPgXAB67rLuktuoH6hrhqh8PvAN7H4NoSFGYfma8ou1",
  "key14": "4CXyDrYQqMZB7uS1wrgJdFPPQ8V1A6wkFo6xzPND836ENwqafigre4p5q854vXa6sCqdQ3D9MGELNRm36KZs5zhD",
  "key15": "4wQHxPhXUATkp91XuacgRYuSuxk74E7yTFLPYidPxRuFMZvZdgMSaj6px8VxMJFxpvoddin35bK32ZYZ9XpXTcqC",
  "key16": "nwJ3Gvcw3atbwxSjCBXk1PB753fQk7s5oKwUi8cPTMBmxWAFPukWByVeXbcvQ5zBBy9GyQM6yyDdZhcbxNUWqNX",
  "key17": "4qnR3rtuNqJb2Sda6SaVp7mWBAxdWz2otGBCfjstEw5m5Enh96ipRqoUDkp5kdfshacVbKqdZBRLzpDZQLDLcr3d",
  "key18": "3oS8WJR36SGASrKkEXWcZoZxiKdrV8T8gU6FCd655anuf4S5cYuiJ6jpZHxeub2x1yZVh2SZsptrMGmW2qy538W3",
  "key19": "2dAnMrfx8ryDeG3WkqkNsybeaSmMv6Qx3hqMUBnfJagJMC3ctZjE8ZMnssL2SdiXWHvpWzeCXK8zwbyg4fZ9BdZy",
  "key20": "3LDH7A8Pe4uBk5y47bX6eNJq6oGW2uEAVf1B1pw1qKAJZSk5FDSug1JsoZR8teesmMo6N9VBmJUkzqd1yVCQinvB",
  "key21": "3neRrA6MBNBnEzJ21i6xYPEZpJUJ3mxbVNwvfMcX31446b6Zvv2vdJsL5FMi2VtG9R7Ly7Utcp2GumQ8TUJ9KTPW",
  "key22": "4zWfXFDgV4H1JBhRzxYpRjR1FMdjeTKQ9xBqcfbKTppKM4VnQhhJmRLY8jEFJon6QbzvV8D3HYLQqX8KwCRZkEBt",
  "key23": "5ZS6HdfijvonZwmffiBoWSoXTQwVuejrKdRDsm1feNHEJ5by6cRTkJwDWcm82YLUV8cznA4eqXtbmFCRcm5gAzfh",
  "key24": "iogccCw4Di53WRpDgj2e8FiSZbnKApNfi16dGSG7QS18Xr2d1Us8Ls5ujtCvTinZzyzM8qPBDCkKdV7ASn82SC6",
  "key25": "29P95xNe5FHQVR8sTEyUQLsSYXYhrWDCrkZVCLiyoxk5AJPZcGGUi4rofU6eq7vXoXLNfrNgkLHSKBPiev2qyR1V",
  "key26": "wvzTTibhdn4Mx5VmupUnzzmDqh9V4qPe9gswYkEdCy5fxV637qjPQPBfH6amoFM9JHFx41satKDoRLhq7Zn9Ecd",
  "key27": "3JgQNmz5Cq8LxWzGqZAtUcxVMEgDXEoTRaQomBwm1vQ8LCfcbpZ7yD6KvhiTVEbeghnw4nKcJetvMSsUckott4ft",
  "key28": "5HN963giGWuNMwkAC4Pca4jNmmmoP3FSZy7G7j28omQGTrEvn3NE9vgS9WsN7ZQ8Y6anwrjbBTCJT1BycY9t9Q2f",
  "key29": "3PeUyii2WXH35QVDXRiu38mAzVQqpJ2eJhcSUTr2ADXVfnxUgAAPd5RUHXTa9NbFWNLtApTpQYUVgoYiVRrFzhqY",
  "key30": "3ZnXDDjnRaL9tWyh4LHrey5sPZCgi8JpxcTFzhYbdjyiddNhNHPJmHVEpUQZYAUVftToxzED5zuAVkn2m2Lk5SK1"
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

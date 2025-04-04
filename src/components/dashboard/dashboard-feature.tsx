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
    "2yLeDTQ4Ri257ZLSkxay2UBfmeqFJQy3kerq76x7ETa5qggACcEtkypJfARps3g4ZV3BATSkPwCvC9db6j9odtuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pAmPT5X63AtrTyjhWHWzQ866s2kBWMCQrTcryJtjkT3tW94HwKWxMrFxZNFfgHVcid9maz6EX2M96vv7aJmd9yU",
  "key1": "5gH7fsuFNFFf5qktUyhKdwREPYXQykKpnHCng24fLdmreLHWQF6hsjZ9thXDd2qMaKN27AVtPJkAG5gt2AevWVsx",
  "key2": "5h17RwwUdmHAztdM9w3TGozpNSyh6V5NZ91e8hWv9wCtwqS79AczdQB1FJ6JJFKpM3efwTfscxPQzf93qqLNwjg8",
  "key3": "2EbKJPyC3a7EELU6rpNfckNe4RPgum5jDmxKwCNBPAvpmjAjmQK3tEhg31gf5fy8M4oKGv4G748trXtvRGakudAW",
  "key4": "5gDu8WRQ8Xy3rfuAFfkjyXABQ6KLCdbD7DEcA7dy6qPWdV5NZLU9xFiu1D7urac4to8gQngDug5EgXUWS9j14uLU",
  "key5": "5qUFr964ibwECG4PPwemQtz6bbfUnqXwQY64DhdAegwYQyNLSG4SY2zgyiZcjEgz9zHobTV4CMa2KdyxXQo3gKZ6",
  "key6": "2PFMo4VrFpQJQtK8PCK1i8FxYCd8WafBLX9xi56vNLzGxgM7XYKrdDedfmXmgdwmCoNriPTdefjCwoPPK2oRrfoz",
  "key7": "5ZbstUuMYa45NdqpD2gpT597SSS1wLCD3mPuCiwwMcqjsJNq65HaLhEWcizrvJC2HpCZgSLEoHchsGoEuHHwgtAk",
  "key8": "6oVQfnk9ex6pq1tpTuV3jnknZzVBxnS7sstvvUza6CsADQd45t7mqCn6x5YY41snKAhfKX97VH7xVEq7qVPL8jH",
  "key9": "2gcTCrHFdXVG61pRJmwqzePYdjYUD8VipxUMNEeKfUnaSm4ZpWrg5YZZLyUFBXVkuo7mBJJrUb3aqUxFErvVY2F9",
  "key10": "2CsfnTZezPpfwSUmfcqrhJqS77w5H5DxfytKGTgbkY4q6xdFGEbVYRXmAGWD6AYAgZqnEg5zMP1gSaQznBZfhiBx",
  "key11": "5MkQ95pfehN96B8R7yC8uScGyoszyxYFXnQ4BPRnoitu5eEw2pxgLqf3JmCgzNFN17cda67jq2622zKwzJNW9VQA",
  "key12": "Xk5qjqFsUXmNYJSFntFNX1GjfQBbPDXtXFj3wZdZJt78MWBrx2hsHJFzEyaeRUe2NFFoqjmVJeWHJLknNKpqd91",
  "key13": "4mkkpHhvm1gXiM7rJYCvypbmS2gbrTzvwEyMjxV6WsGzXA7Vpk4wsTtGswqYo2PdMCnYAcuaw37sjzxqtmSfECV9",
  "key14": "B33wa2SVTrW9D1gvZBqC1JTKb8e1mPYN3uioPo56Yvf2VsFCPE1xsGUnnG66mYFnMXLtyzzpQqrXY5uYog7DpL7",
  "key15": "2mvyKK9r44k4sWKrHjfPjoSWeLUeVsqoYjpeuckFkoqTsMqFyRYVYNhkGdnmTWpaw3KqSXxrRqMnJMaWyH5t5Xh8",
  "key16": "5cyubUF4sjr9MSTaTvmzWouF1CbTKWihYtE2SEzxjgCzcAcVB2Uv5AWtx1xqZSriUcikQLFjN7kgCZn2rYj9qqk",
  "key17": "2SzW4yPdNzyygDgUkAbeUDey3T1EGnvpeqUvG44LnJBR76NRhrsibBS62tfXWphpcbdeDW3KNsN3f9kA3qbCJnxz",
  "key18": "3WkW8cRgNy9Ta4xrJBAFP4RjWA1jbTTmeVPzCnBemoN6C2DUbzex2DzXw8qhCmsBZC5jjZEm3qZweYwo9c2scydb",
  "key19": "2H9JsV1zRDiqu3h8UyiAsP9PzneMC2yLaBsKdDEvMQs9voFmsb4h5ABuKmx7qyCETJHHpB8MZ3keRhcDCQvrfTPj",
  "key20": "3vmqNYRsb7hsqyAsMauuQWwZZWiy4SY9J1bN1y3ZfnNb822cuZ6HxSWhQT98PjtUEe3GUMRnbDQzR2zviMp9E5uh",
  "key21": "3h691ddVU7oX8E4Ds6rhai3uMCxEoRjcptKmnZr7ZR5kNs2GxoKHy1z1nkXoV6XRQRHiCAmZYxgrMtkPcBB9w1ba",
  "key22": "3ezGrU2a6Y3X2R63CsghtYCDX1inh494tgvP2KyYqLLaTZxCXXhBaPs92KLbxHGGhqM5U85wcp2ZkB966ubabaQ9",
  "key23": "6CB9aQiDG2zMecGi5YveHjgfDpmf6kbFZAwUuE8XocCJdikY2DJAUXXuqQqKYkibFmhVm1aBdyKtYDbn4okKwtE",
  "key24": "2uqH8QeRSZenAuxDzJA9kjvKXfyRZLeAH7Pb2BWZTQJdBp4Df1c5A69wtNmokGMZ9PBy2F3nAv66vcPi3Kwe8K6D",
  "key25": "4FpphKRNwPUwyLxdiJMaoifzQo85JY6ZN86oL4jCmKhfPHsWorZpRiHP1D4SSg76tSYSiCJkrWmpkadRiZnJpa2G",
  "key26": "7wBR6WQxEGioqo9BjZSEEHQAAEU2g91SGamhcWy2B8zHstbJQGckLYfuZ5vhZ18hsPwNbjWHGJRb5fmCerjGmXn",
  "key27": "5CY4PdikhV7xdckyvhhRwGmbAWCyuPe9Z7Z2QHgB9ZGSmf17tTFntyMHEkGQVNTNT1Eq2TBS6sdJLcjQiZ4HYnrX",
  "key28": "3oPTtDEUXRKc8g6MmfAcE8TtwnN4Hj3oa7pdux6EAArqZmnSNhwbnjf6gvyWb2NaR5Qr5ymLgk1oBX6VX8TvK7Zo",
  "key29": "3qcqKhxatDUzYjkQX6yHkUxSK93pnfBEWWEkwu3dXzmCM1qtorzwxTdwCrtanmvfsoWQLA3pa3FLyd8Q6cP2rzD9",
  "key30": "3VwhUYgvtzfANQ9N8SoRDeUvy7eVkUGpjbHTKcxaHGT6soD4V8BVf6heJUyHAqzcxoee3qaxxL83i2MrLVf8pmdH",
  "key31": "4ZhezmR2d7pp4pw3XBTAXQ69T8ZqYhbLXPtuJukqBnXjMf1GYQYAC8xTbUmppkF1Sc6Kfr32MrSLwCTwbwUN4XGy",
  "key32": "5R3pNj2cT9dXZHtTpH6SqrdYEGgjXtLTgbuYGDfgoRmFC7cPpV2DvVaBNQATpZUxh8ekuxmoM7v1yTpeqWrC8GQ9",
  "key33": "VDsywBADK8wYjSiJbBwB1yhxEUJesqNL95X3PuCudDCVS24e24igD7UWQWRytXxebPjj1KMezdXFhrtE3nRyuoF",
  "key34": "2HiCj8ciTesvtSgJTxBeHEkkBseCf6hMTXDbFTMdcpURdcr9YsQbrJX1mvoZDHLuNoQbZTbH4AjecT926PNk4zGE",
  "key35": "5p36HqH48FL8u89PogdPwSpJtJwwwqjkZi1s7yLnHrwZsh47Qt13wDrDUJBcuNFM3kVhSStdY2uLMLkFLaWbafJr",
  "key36": "2teGb4VHyK22XntkguPAZjtjqgmXUjeexRE5WV2CPAsvcEyoYqKkGh9pYoQGLzZgyExPrVkgDBCyLkR6hv9kNMjk",
  "key37": "2877pv6oiN1MNxZo3VM2621ZHTHLVPixiQiSSzspAUuxpK15yUSDzZqJwZmVkXRHjKbJqthdT5AFwRQoYL5jGnqn",
  "key38": "uG3Se4wCSkNvtAYKvs6SLWqmiN2x1VEYx5zqMjXgEU77U3USSXCCqZKEyj5ULbYC6wjZcGzpCrCZKhKjZWbGC5t",
  "key39": "QDxXE8dCCmedUbJZ3safSSuU4UaHeZ9GRxRJPQ95ZCp6PmTKjQpsJfxBnM8UWfEwGHPMoskNjFVZkdvDV3iA6cW",
  "key40": "2fofDqe987mkL6uZUbzMeoEojDXzPFKbxLB3yLx5r4S4gEu4xa82mjriPL9JLZ29ipRvWDdUXk9Jmy8FRWurx43a",
  "key41": "hcjbXydAAcYu5L29TUMLRCPTZbkVGNkB42C8uo9t3S6w2yhSDEZK8P4VhpY6fo5XABR9iL2CcL6KtYDnY1hyByX",
  "key42": "3xYZbyJGiLuzty5qC4q3WMvnXRAhsbN2eDwWPRAjYGhQdxbaHnZeh9iy4fbW18YH1HoRaVpzJTqaMTikg2rM4ukN",
  "key43": "5ub3sb5Lr1mRscmNorUqDrtZyfKP9dRC6gZTTAkLXNzdbAJDoSqGsu96BFmb8VVpmfYtNGi22ZQxqTgarwxiXarq",
  "key44": "4uKFhhFeKcaYZGvAnhgu34iruW7d3tN23DNmN2V4Rodf3cWNGAC5kKbphN7yDtGicTirJvCKr18UtTCh4enJ3iWg",
  "key45": "3NgKUXZ6R1cHHCKaj6Q527v4S2Ue6ZQYtUgAk2pdnap1NizEjRmF2QMpWrcWZ4GrwgcrP5vpoDpEvSCKq83GBA5M",
  "key46": "2ihYWzguoaTUDeYTwUZ999zbiD7axnMQr7VL4Ym4MDMLfEg5yRUMhBQStHvyQxrGudYESVeM2LkLji3S4CJMccNk"
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

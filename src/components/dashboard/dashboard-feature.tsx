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
    "4ZNuRr6KiBZSqFUoMr4gdDYm2QmS3YXjXCi1Ve59ad7Ym5kic4MsodZUbccgwuewabaZ5YhDEsE73hh3Hi5Z3Hwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ud7trjpsLqNqEaS4rKCuHy6nCeCokbYbUzb37WPgVjyqfHwpss4TVqBTHxp2GZggYuMW7AqXwRxPenu5Gw1xXU5",
  "key1": "5Dxw74reKQtd4zHT1b9p8xS1FpBXxP4mE1XJ1ZjtSRTSrmktcMXmt251RaJrR4XV5rKe2tafYLsuMKhyPEdGtSJm",
  "key2": "4aweAFmjyaQowf94T6a8jJ2HDUCzUHARbY3gFRsfCLmvu8j7JDc2ic9jEpzZTYX9SaC2YbvoVohKepZNFmh7rRfL",
  "key3": "4HrWe5XXStxYLEA7wShuST8Gs2JAEozQcka56pw9xaRnXahGWASRCquLh2YKv6KgCR6hs79XrB2LAvkVf6HGNiaP",
  "key4": "2hbNr7TJu5q1yiGnkPPrGxLxv3Zv3yhdrqtyyMTthHs4drTpbV3UceRTWmqXC1EcHNG8W8HfwU2kM3idKtfa7ipS",
  "key5": "3KpngDrWV2G26Q1fURLjPjpEVLXNJDAq7oskJ4a8BxMBkyj3GoNpv8pFu7Jmcw9V2rXg6Li5yg8tbEpR4DaQYeiL",
  "key6": "28YLWHPK2bacLAFECWZykjM2ryaCFHnnZYSXHXsraNvqPE6We1Vz8V68WFdWafUxfKvp8FvvJMagsnhY8r2hbHW6",
  "key7": "5XzCzin52bHXkf3wYR51G41M5WpRpMsqWJeaY3UzZCqkE1uHAM8PXwtbTdDDiAAkMQ7UeznZPDmHdeEcLpzQdDSB",
  "key8": "3jgMBGFCndus7MrF5Fdk2tNEhfxV9h5gLBLaTGyXsHPa8wJcfrtBgyCVfzV8gfo739Qn2fsqywnVKsDgT4rU6JSU",
  "key9": "2X2BX4Gwsf95hz17T1byBd7mm3bHJU8jwhHJZbKcaj9jSmezAdrg4hr8Sp7GFpRyDYQ1igjXUYriDk62KNEJoHKH",
  "key10": "4JQ2b2yHvBdsp6aYPgtjweiLGbHKZ9Egr5a5BhgKgLqfV2HrNVRFMfdHU9nLA3RohF1DRaU994JuxFs1QzUDUgHp",
  "key11": "2xhsESvYiPXUjC2tATnjhgQVPJj6Pn5hMH6i31iLrDpPippC6aCq4xmE54L1AzHCxaZUa9Gp3YiLg5KPf38FQRbF",
  "key12": "3K4WuUEKBorWMzTm6BTUqiS9N8Y8JP4qwy3Yhvqc9Grw6CLYxoqFifhKkYe8kNyWp5wzhtBXzAnmCBxYSJPEeDf5",
  "key13": "iiDDarZzBngDwpvi2TKR4t7hoTRTnfpNhvZU3xcbJogeRqJZuGxu3Xq1PekhrUSDmeoVp7YomYkWdGp7ERoFrwP",
  "key14": "WSSMNptfqdXDLsnR6BnFTbFUWnUXrpdaDEn5PshPWGDoZq1Djzv4asbbPqX1vdhcrKJL9BZ7DUVCed3boihC161",
  "key15": "2UjwALzXhkNQ452bPJuH11wzDcFD96Ckpfzb6TLYR4eiMsag7pHqGdmjdFHkoUjWw2Fvem2MhUm5gwZwCwx64Tg1",
  "key16": "4cr6eu1mzRdCz8ErDFMoWdhBD4e6J5XtMeTYSknH9HvSAB94ZY6zLYoHASZDbACUHtCqftwevbMqY2eQUZygNEB1",
  "key17": "49Y9YoYGmt571LevrJoqiNnwkbXZuf9CKeo3dsutUn8GjmAAXhK6L4haYgKMpBpnzwgLndt4kVh9snyLtc4e1E5S",
  "key18": "4vKryeCzRn61Z9p36NHZuiy5HPGr2LrmE4DX9hqX4pt4ZZpAsuJKW15gi13PDBVFee2HLyWvWwUREkLo3jApAkX2",
  "key19": "5jYUNihLGMq6sezSfmoSn1j5aBRtmzd6uZiF5nz7HQtEZgxiDyYAST4nKAk1AKvUiK65hu68mSUKijpoztQ4fMQy",
  "key20": "5H3HvXJf9wJjCpLcABoYTkib9NxpzASrwCZoAck9ku6JZkAKCtCRVerGZ7qX8NAkanuTAe7eRgJU5jzTr5dEh9fj",
  "key21": "2LkdQCBVD5NBkxi3Zqe1M4xoWotSA4vTV3i6UTxC43Gebbo7FaE1HC3jzEA1UajAwVpQgEs757yJgXvz9MSpgULX",
  "key22": "3dCyfVYYzQvU6LxKHynFMFFZKCGHvLabezjdTT41VdVqpWtPVq7Nzgjz22KDo5t4PFmbPvN16gkDYaH6seDRXFLU",
  "key23": "3XtvcQ94qDoGES3MevAvNYiBh3b3BFaFwHsCBXhamfTPCKKRGCLnBXxGT6bVEamjVgXqh9My214PywdgfKhtnwGD",
  "key24": "43Jo97SobaN9Gxmdk7s8PETJSUfgAuudiNSy7i6HYpPxwTMArxy3Mo3YZwLsqoJfRSBzPuGA38Dtbcq3p1TiJNvQ",
  "key25": "5eJvnFXRYJx4Azgmm9UFC36g4HaPfHMnzhbz7D345wKZ734r4mw7hE65ArNSrdDjHycyGpzSaXNGPErtis6uM8zw",
  "key26": "Bxm5csnERfAKgDCzjgz3RF4fPpcdRtpppQ6BsHwfbvkw2zn93PjcFKxJT6tewMDmgpkXPy4ECEcmoAkvW6D5cZ5",
  "key27": "3jMw7iiPNqdzPkB67deMz2btcEZGxrz2XTerYvYiq9y6tUQ3LH5LYPA1YEJMdHyLJMH2U42Ko3NVD9knrLJ3YLZ6",
  "key28": "29mZHdbkgZxsAzRY2BiaYP7qNRReVPe3uVJALjt7brRDhWaa4vqFQKequiWWqhX5MbPnyGfmqVkmtSUrEEaKhVFv",
  "key29": "5Y8d6RA3zbn1Fapv342dhgfFasv8iA21pZcJkZHKtb3tJkdE7kzZmwx38PnpG8zruECLpFqHC7xKHDMR6WhXj6hq",
  "key30": "bEXLZ6JzkJhjWUvYtwjZB6k8eHGmkz81NtHPUZJMBJngeD3iFBdHw9gLozGh7DxCSkZUMp3xXQhDBHD4mfhF7Ca",
  "key31": "8UazREoTFJKGQc4bvKAHSdSU1N1LDQ8wSEqUudqm5MwXydBQ4oSHmA9S2T2QuDVdY7fzsJMvSM7LKeXhnnuTi81",
  "key32": "yodex5u8NDk7LeUJRyPk9kqPxFb4eYtM45C3sueer8mNxo7BvzewWNb66V2HuNtsDfZYiWvkLNHhbArtK34gXkh",
  "key33": "3rmf59qUxEtLnPssbp2XmWJ5FBrUCpqvH82ZQoVRoUSF3EuXZXBqY7vYVZszYDGy7U3Ysm4qXaCAMuV5YXaubhVD",
  "key34": "5P54EhQimapV9WJ2WXSxAPrhXpPiVGDTKtmBFMF7Y5dT3GAtR66nd8MAZVFzSEMpmXsBp3Ffx8igyxHxD8VDPcuE"
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

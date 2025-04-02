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
    "2iDyaPDX6go7YtC1jTuettsZkoXgVgXMCMitend5W7Jnj69AmccrWz7Sv4hC6Lm6zNqTb7xt7ak7d8SnZYbMgekt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42MRMS8iiR94pajEqybjNva3RQWPybvb4Tvx8Qi9S2PMLxKs9HrzTTBnCZce6URsrrqFTkTLRBYpzDi4PdfTdC2m",
  "key1": "LMbRBKdDRGcoE4Y7rMDoutonzdei6uTKiqpW6qXrebx7vPXeS2BpgFcAuCLbkmFvkiAtkWRwpq3Zyff14EhvHiS",
  "key2": "5MpBt2AtxxuwJeEQnjxsH6oL9CPnHKj4a6SPkEaUpasgrmwEwFThyxeWFrt4CxpbeZBcCpEgn4ajVwvTGQtcYibX",
  "key3": "48uZvbqkhkKwEw5p4sZ5WHrs6civsrNoit5rarbkNi25J7BvArLcxTVbxSPVk32RKYksGGLS2Rrqkb4SUeHVBiLz",
  "key4": "2x9MQNLpfeX5Hd9NvdhqoZ17dpUzmy5HTWEJqqPey4WtJLzt8Px7mYfhLfHri6Yx2kqUhjuqTTo6tqcuH3hZzbGA",
  "key5": "3pvdcpM4Ae55cDjpbu5MWD5a9R6c4xtfh94HQ3WZNKSRikeCC6LrjvT155kFegKPtSb2BkvjtktcztkyHHeiaiYZ",
  "key6": "8H6FLp7TrwXqfFExkVness7TzDSP2gUMm5siaL44SS2Schu6oCR9srAUDva7237n9ZozbD3fwb5ugc48RPy5GmN",
  "key7": "3M7oHMX1wN4FouiZwfGqqxGSNWvgREg5XeKgmoEGfKiu9WhWFW4UQFATks6PMgqEHMxYss2KmAvTsFYNTZKZbTCi",
  "key8": "58JoAMMrJVnpgrx8nniYDK2T3MYUBbxHm8fwVeNFKHk4Gy1U4S5v51t57VD9XHS94mFfgvUm1goEx2BLuYBc5zgd",
  "key9": "45fUnNj3upBVHNa5peKFaWmn5Wgvz9eXiZRhGXuMdHhFDSWRbeszxeP7B9hD4vkHUYniRTRQ3z64V7nA3cToxXJD",
  "key10": "4wmG3FgHEjZ89VBcRhZjFD8a1MoxcMZr13aTTwH6Sqj45NgdDX1EDPkVMmFSFELdpLNUQdNrPWE46ewdZsx19hwx",
  "key11": "482S3fRY32hbi6rEXcMuzCPf5HQWu2Dkz7nqiZAytZ8ZwT2i7gHKDfnKgFHkwDwVLgwycY5wEMTfanRoZ2oA4SWY",
  "key12": "4ntDZvtjYvDzbV2n4MRMhRqFoFdtCvUbsuvzRzUWcuUv4tEGa8gQVnwEcGtLK6D8LdDa2NUcPFZgR1EssWd7XoXS",
  "key13": "F9SPdT12ZzPNAQBAkw4LcVt24tcPxtXX6VGeerPUtpTaRV6ifsr9vtndyB9uE4b1FzmMESdcnGEFrWwRSBjWYcQ",
  "key14": "35dxnX4Gt6rBzBVE8croezkMZbLtP1RqJWbqQdXsZquXbcPDP5EuKe1skKCMarQbkgoLfYBDuNyyFVG1Ya2AYLg2",
  "key15": "55gVQ8CSzuytwBDuCi7Wtj3Xf6LFzVNppjiYSQvzifGfxAAswLEVGNbQk7J5wjn9SvDAjy2P8LwVs1sBMVZem7ph",
  "key16": "2oxo1HkrJwYdbevRarwzor9JFrAWrYD2fJJVT1XzNj1iCTcYkLwBVrTUBzvc4tPZwAXXvYKRWwWdNnj3DW4TgCqs",
  "key17": "X4zoyLu8wagg9CQAy4zHHBYWRVyEQQk1s6o684D2aawvdd3UHZSMpVGLwPKATTzRaWqnFsjTr6CGjkA8FUNFj1z",
  "key18": "5bY9HNbxnF8j3dmuEZas2dzdEsvBths2Li8AJmbuuEBnETGyZZWcNBykthvLYK8kEKEPR7TM9ERMpS3ywYSYcv4v",
  "key19": "36YhrGjQuU7VDVuiwF5V7K2nkyZiGTbPbZUSL761mXG74Bm6tnea417CBgRGA5j7hvuRS1DUgmydwi74p1KPY1Fs",
  "key20": "2hgGgeJUUU48UikojFVHU2K824UEPLz4y8xXFrRFAzMMAyaVwRUXDf7vReY77f98r9zaGL1RkV89Cej6g2hY8fGx",
  "key21": "xT1MZoFMKh9h72GXLL2TkBF7RzVK6nGWD2PCHJBG4WVUog7imviiGBf4siXKvWyg5ksi8M9ink88wF9JnCeKc6r",
  "key22": "2yzB6CAAGJTwZxf2bMWKQEP5nr3YynyjScvGJV2soHZtLsitBQk1ubonZ9vygNbWD42awPzC71JvkjJS8YSTED7t",
  "key23": "5bd9D2DZTjqNaipf2H4zr8Mo1HsvF962NQ4Z9jb9P9Vwx7Y7Jvxpwk7yRPjnxt5teTbqcK2GNPxYo4HKK7YaDVTW",
  "key24": "qrWrCTqDj7kg9gmALSGw2vfwXQpF2E1gGGHFfPznhackTuDhyUKNRp8t4qPm6JHiEeoS4GmkwpEaBU7Z7NCE7hi",
  "key25": "uS8d3P2yPCJdVqPf6k71meWAfeyskpvTzXdhP3n7DXTdhWqr9BgdWmfXKp4WwZPf4SPhugtHdeVAwvL1roZ2qoE",
  "key26": "3hKf8XNL6fzD3hXBL3MaRCEYd6HHg4mpCHB5FcScxUQNz9biHWSqDKYRdT95HvxNgHXBF6FJ7Y8sL6pHELdx6nN",
  "key27": "SDu7YVWpNrUjEeCKhBuMSvV2EnxPzTF2T2pj36MNBDfUYDX2cfhURhXtqv641TPUXtRje2RCtsJS3p2gVNVQtEP"
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

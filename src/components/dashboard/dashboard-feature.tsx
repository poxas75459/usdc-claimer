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
    "49esYiZQTVLp7FY93hEBchMD69BUZjqTXtTRvoMym2DCYYtY8Bd21XfgnKEZdHqpN86Fe3t2pcedWqinQRgnAGGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7w1mXbepz3kFC8jYuRNogpzPmyBEEYyPf4pnpbrBtjzDMYA2qg33yoSXdACGwv915iK7CZyegyswkwxitwhCLuz",
  "key1": "3VqSthVkfJvDHTjESanzNQGrvY8CbR9kVtSe4H6BWeikWfu1FiJKfPPjLp7paXSQRB2MHr6pKjaxQf5bV4rQqwjg",
  "key2": "6373bsypFDv21nf8tLLMnRumkXL9fWGF2v3WQALgzi1Qwc1XJV6LFbs9FtnsqmVRRaSUvmQmqbMTeBSxk5GSSMoN",
  "key3": "4Gr1Jhs3bvu5UBTczmMCZ1ksqZbv6Ussoj5hwS3ArLxBqJq1eYeMd8GTKvPNtTAqhCY7P4BzhTiegs4Ve1Jgn7zd",
  "key4": "2TFHQiLsbyqBh4YjevDJoAkGZqRTzawxfxnQ3tnEEPz2wTxbtvpqx8XvmYjdCpnsU5FoosixQbz4cr6Vm9bVsS9n",
  "key5": "4P1RGuonzZDmWY9u4qrZQ4kypiqhwv4irZ7mEZbH1x85C38XGvsrsdsKdV74ZxCEE5bfzsPVMCaVRHnLeK2787Nd",
  "key6": "DzBJwkE1TDRwpR6r1dbgSDYZbBTKwc7ThPjDf2yuvZzzUKHyBXarXD9ZZ9MhCSzXMFFCj4sXTYiASLjdvEusiSz",
  "key7": "36SXGrSayCUWiTnLun26PyjDhzbbFTn7KzZLZ5vRB4peRmw2AUAP6C9iwMkYqnfMdg5AA6FoTy9JSiPSPFnYe7cd",
  "key8": "2fxP6JfK2EEUsSAgmzcjoy7fwhgkbkHCkfL4m53R11eiM3adQuLRYhk5sbUXdvd4AvZ1dKPYF1cLwzSiK5W7oEbz",
  "key9": "4WsLCLWeWBd2vmiLhp4BsTkHhVqCVGkjT2pgbrABDGXda4dPQzWiEwJSvgtSWx1KFs2GiThr7VMbqgrCGsc6Bmi4",
  "key10": "4uF9rLZVAdatDtfTk1LuDC8zSsvU1E4DBKe6tKWEMUne23yr1XaaHfpjD6whhXGVvkAYPcAgL9d6J4ydfsAeFJih",
  "key11": "23M8HNjGgKobHFAGccaMjq9GY7NMJymuPuoaiS3k3wH8RV5YpibcrH7TwSxDsYYkKWicUySK5rXipVX9CrPht4md",
  "key12": "5Pgfvmur69VPWUQFDB56C1h8ddvkZeXpnDSM9FEeA9H1qcHTTfNx31Ev2rxZMUbxu1UFqi7tHJd4Dv4YnRDgHJbD",
  "key13": "UhsWTsjtXAnkAmksnwn5qWDSu2FjUyhsBCiRkTERJkYknuqzvn7sCKhrt51tAmKavAANPg2EFKpabVtHxyyAZk2",
  "key14": "48RhgXZ4rYYS1nkyFrUcgje2tVV368gTDKYrVtNvHHE3L4QAcQcDYg5kQx793w787K4aL6WBK6zPZdy8YJtjc9Q2",
  "key15": "2oiWNX3bJLNutoAmvhPSnwWfj9vnttaFNNA277MYFVfSEoR81LKUy4NfjFzgnLmLfwBxTDFzGeBkH5aBgtqup593",
  "key16": "KKU4LJXQrsYcYYw78bpwdhYDckf4kQBnJQhrFii7dRn3Ebn99rTrTUEJ9jr6p7S9x3fB2fpDK67vkgQJ1cLL6Ae",
  "key17": "4vc9LXC32U7BuLPLx8VyWDod1Wsj4tQLkDhktu8AbUMa65aYGYAXEv3DSXsypevct25PS3QBm8t6jNsFydtW245e",
  "key18": "36TzMnkkMirC9d5wWcfzwq7fzYo1mrSzamBCD6MwDz2r7UyRn1yMQQi8AKwrD35SCdmNMKsGZZk1eQh9UDrNevD5",
  "key19": "5x7Wv3oBpLV6ScsCTjpvwC8b7cXKesWpS1LeMe9VJpGaM2EiMa2yatmQdCabx6U3Lr56yxgfJ5m2DQcwYWvsbFCJ",
  "key20": "2rjBgxPw2VC2mE2M8YwGeqvTDegEfi48xndXeiFznQ5j5yJpdEB3opGfhcZrzVpde22V2Yn26ieJNHbf4SuNgYRv",
  "key21": "5EN9A2EUX7A1hHvDDjiwkccrjauiyDuMhWCpWSkKiFyVBTn9xCG8Gq5A3iSmWE7Xnjh7mQrnTFy2u4p3iNFBecVP",
  "key22": "2LaDAVgJRxJHAw5HhJBA86mkyKCvkffuqgrp3KYQXcBLkK61no4r7yRcM8HXVARe8g6y8rSoLfw8N4eyAubvhr8Z",
  "key23": "5j5Uzs1Nc9Dtuhrd1edfVw7hyGVQeaPU9JExjMLp9yR8TKW94EaogrwV8eaebRfXo2V8qjDMn4WBx7tsLjfYRQEy",
  "key24": "5qEQZQFw1ggtRSU5Bp4NqyHzTSdmwiGReftHANX6xA7JDLEiqFSwDgs9smgDyZLD9BG3vL5SAinPZDduigGsKXrz",
  "key25": "4dz5tsteLhcEKxfqMzjy6LKYWmEnVhxDcYwZT97YoXoqHHsSvC6cTmtLg9EL3LzVusKY8YWPsPBgJAZX2D4q7Ucj",
  "key26": "62rn5XnofZ9DYLnnZzcNseSFXAjncRM5eaWiMtg1KCMHCVs5bhcm24XRQkKpHiiXNpfnLWsRwBJQBN8XCedPJ3K9",
  "key27": "2Nh185SYcNXqrrGbvED8BNzRhKmaQpCNw91w1CV6Vdr1PMRnhC7BoNai3n6BLeBFqNenEH469KT22iHY33VdSAJq",
  "key28": "5uvFRkoT4RAUiJ2riY6WfjMDo5L8Njbm7c8nQJ881iKsabGdVt7PhThmgDkZoGweEt9HJB3WCcnZkkmq7qpL5K1z",
  "key29": "3D16AQ2YwzAGRHjRbAdFBoBLLQEgcWxeqyGR7jB2ZbJi8NQqe9H42HPvpAaw2Sk91KzqVq7eVi2q8BunBhdp8Tgo",
  "key30": "2FYTXBWQ9joyGHW7V2yZjSMTBSewZw9UWzx16Yat9V3VnxZN87v5V231wFNKM2TD7kGQhqpXofLJZR7tDHLz3Ldz",
  "key31": "3yMfrWcaEmtJsRr7aAUwFo5ikGCD8BXUXAWBorcD2rcy7bqJXB9q2zXAcrKtCoesfDRgM5e54EdhNEWTAUYTeige"
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

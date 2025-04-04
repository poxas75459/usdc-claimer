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
    "5FaBRs24HuoYiBhY9CmPVem5RCmJpsobZLJk4FjrFam2LyBGdEM9PxWWFEdDkCiXUs7NqpVyxHCv69cPpLdMvFM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N5U9tw7kdjxziScxzU7ake6X8uNcyGv8Jr81jkxgvMRTRE9emKg8VjH14j4VhKjqDkLJb9enwbcApuU54pFXFCu",
  "key1": "sHDzB53UUtBqqZS77BjM9svKSV25o17bgB4yDL8km9XDSuDZpJU7oeXRCUfQiHogX1cMnDRmPhjhECMSx8ZCtAd",
  "key2": "3oTZjc3QMLBLo6oPTFeKfhUJ6B91T8y8yT46gMmKJ4ZoTXUcZRoeaRwKAzjAsmJSk7td3pzkxLrcyyS4kLZ59V33",
  "key3": "4sDJFuDVVas8Xu2xrPbJTJBMbD6cbkuqhtRCnZqDdUNNsFAjVpP6FPcRHZdWxQSNLZvR2oR7qp66axqSE5ykXrdr",
  "key4": "4VJR4a2eyrQ3P68Fg3bQuWVrdiaxcrMEyhNR4oV8xjxS1VDvviqUcvz8179RoJ2HqUDaGgwdrCdvsmCV4vc2HWuJ",
  "key5": "2VYcSmfXKkRR6mijXaKWWUToP1G7pd62SMwkVjvAufqKYJT2ZrxiLf3sXa2h3hBgSFHJKJ7N6A1ELvhCfStTtAEm",
  "key6": "2nqXaawJNTESEHrMC3TVLLNfgYJvurJiTp7QKkd5DYFNeqmTVDFg7j7wQkfEJRMyWZKBYaktNDzGEp8RyJ5tuiap",
  "key7": "e9WziRgJwvd4h3fNREWq7Sg8C5R2t31ma8KfMSaqEqLCog8dbtijwUZw3AauGMt3EL3APNpmxzj1dEhuVGd9Lem",
  "key8": "3KbS1y5n5sTZZh2oi7dBDPjKn2EdKsh1VmzZjMwEEpcrWc8krotB8AaZhVpaeTfUn1c5eM3fY6VpL7XxBoPENziR",
  "key9": "3F4chnLh7AYTZuFwySVSeKdWqfkN5cS6yAH55etEVCP2L6TpNw2nfnofSkQHJCw5HhTc7mF9zwqWweRZEjAfxdH9",
  "key10": "GEmGsD5vv82dCPa5P19Ke5KhrJpSf3c3uG7H5thDJxiAc94jFSztBQYfyN5MqJg2G4SnFvD2Cg7nmkDhNnBAUsj",
  "key11": "2hhAuMbDLYGUtZDLjsqBnnmW5QgR6KqHxRUwVXFizJH7VebWZv5uih1Yn6wPp2tn2zQVqEQ2QUPgcbs5hfV432Vh",
  "key12": "2xMrrwmDsmCDVKwcPM8mUjREk5DMCMjQ6WnhNSLbmPFxDBeHPhVnve1UmKUFWYjCt5mv5dnkLggCANkck3QRueZ8",
  "key13": "4bG8mTDRzqkgU3LSnsiYJZ635eQWY4QUL8oN9hyp4z67vj3qakZhBnNFsaz538byVt8JweqTu2JKbhNqfh636waQ",
  "key14": "2zfjbVfQMvoGwCjmnqv9EpRfVvjswdPpdv8iKAkgqSjwfwgfiVpZtYiNaJdERwiqsDvLDqd2VrHSRmJzRmZoSJHm",
  "key15": "3KFFHbQWmqg5kUnwVVW1W8s7fBZ8HEgM8JE7NcRRB9YomGrAsgRFa1XtnoMuoisA8UAE1VqNRpTMxh6KYTnbVyDP",
  "key16": "5hAm57XhzKQYPCVvVQNCC9hSfa2ZYAkbVb2mkNCGgszEHKa3eDHTaLmreDftbSQqsAWiycZTYtJs4PMNJNYQ9Eiw",
  "key17": "48EGQQgASNTbojuc1GheEnaZs2FoUbYbi9DPyG1UVkZFBVhZWzscUkub3Ry3p3iGtCBhE1hiXCrpkHTW4SCeGbJW",
  "key18": "5Ady2mWwe3aoh8NrCseFp7kVbaz8BNJkT118L3UQwVznEGcGB1ezDenFELnR4D8RbWkwZcQTTYZePcBp2NWwRp6Z",
  "key19": "5B5KEcTnDM4iGJ4qvjXT5JXjapeGv1AsqZSy5hmnWnYFGu766zhzi3DpvtwG294HL39PzRiAeje4aaBJwzUnKrk7",
  "key20": "5rqju7dtLkh8qwnazze3candTrjSYkcxgL7HM5bQDfcETYzudqGTspCAhVN1EBtMHaVACX6GkubkmKjTrMBhxJJR",
  "key21": "3EHKjkFWi66kbqrtTrAmMQejpeu5X48b94rngKR5PimyYGYX4CwrrhtP8vN782o3oP6cVZrY4GJoDUZCkbvzxgsD",
  "key22": "2QWmgCDWabFoabPdmRFdbi2zKeRVV2S9ZSGErPWjHTMfccrEDM9uoPzyeHXqdbzur59nksMT4xjb1qp939CYxi2r",
  "key23": "5j58c1BtJ6wFSaYRuFGjpHntEbUCkMicEJ9h7d4c7ND6Bc6kMK6DGbwToPKFimiVGuhzWs8Y9mYzHhrGNBhxiMJU",
  "key24": "4dvKzWrgJhKro8LG2ELjYXSXyVK3VcYRCWPqbABqJL45ihw2TAnCuXDx5k7f6FkMixwz2LpHPTwY3WPMniXBJWDP",
  "key25": "3MfFrjcGhf7DnPAgint3M3Ve8y42x85mK4YPLBbdJDXTxeorZic8t9kwReqrK3vDeA321R3f5rR4Y6EGYq4sRZus",
  "key26": "5ZfSWC7X1rAJzDhxKgfChXajd8QtoAXqnev6ndATUNuHS2PYpni2D5dvwkpER11bnfMzLiqrhWRqZL9pSaBM1Coi",
  "key27": "5Fou33yJmRewdK3Y8bG7JymPXzsK9aifVccXceepN9TGpzPqKYrmMgK1JdPxuR5eeZoqXuLXTn8ukcppTacd6jCL",
  "key28": "2SRPfnZzT2Z2rWKYNUomWtgfBEV83AkDbPZHHsknoME14M4deYwJqBAwkKVsrYdjL1xqiFzrJHQU53kF5S3izACf",
  "key29": "Rp8ei3NeLY8JPTTidapdPkP13SFWvN6KwrRhWLG9U4Azer4EDGvDPPgPutSiGjciReGG7kFQHMi8zPtGPQ3rrUJ"
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

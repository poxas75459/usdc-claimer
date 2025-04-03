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
    "pQZbqWRb9NfGw7xXC1GMNnvNZu96Rb2fSDmucHytFaq56R8mB6TMNC7nvehdwzRFypKALQf7PrC6aVgBxzVUYDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3cas3SG8eACBGZJv8oBw6xqyZR1Ys4Rwv1TdFmHTbTxKefU7weHztaShyV4mxWgWQLQ3VyYAcVY76BPGUxgPy1",
  "key1": "5zYmypSbvZNJ3LSFXkdjgrY1zjp46Mw5UnLLxjWJJreYVG55SYRU1eU6ra5JichY12R9kMMYfT6HtnvNCfMwfj7X",
  "key2": "3ChAEP8dfyxWorecCzn4E1eq5p5buSkmgkzTGTtYymsYGsti1QjM2JDMtELX5SKGpkUBEM9d1f8EyQFJxhC92Cq7",
  "key3": "BHcoAtisTYNkirpwcEdM5YhQqHZncVLMBgmahCwxSEVUNBKa3RH71zVaxDSrmAFdX8x9BWiB2q9RMFf51jFquPq",
  "key4": "3YDHWPULf9GQ1yaDFYJXqARZcdTr2cRGbuiPxGsf4n7qaMbLQxfgZ9ffcWa2VNNmRb2zG5CyV8BnXNHjMDcuXQvv",
  "key5": "3S5fBKPnPwsHxwVDuN3NGD76qHFBUVWmibMmXUp8otkWRKHQ6uUC2S4VhJjysd1FvB8hdr7y2LQaTQY3TkvEEnuE",
  "key6": "29mVvq6eY6Y8iucLUDpRYcG4qgHH576mHvEq4tQ6LsehmnGqYFSeKL7FCRD6fMv8QEyq72bNqEN2Y7HcVPH3EN62",
  "key7": "v9SFfzQFAFNgpK6FntYr3hUsi1JGuQG2fQVcoCgjbbjdwwGstdQm2ZPhDX4aaZW6VuUUkrvmTFEB7DmwbNryn1B",
  "key8": "62pHae4x8TfqLYozPqow6M1zZH7Df8RGemA594hwTTmZY8zxZ1Q5U2L8GFN7ofxx3AtCFrgDL5VEcJpsPxaDHbYJ",
  "key9": "4gLGDZq8fuKCFyWFtjDfwRzu6r2Ra3czbmq8SwXDakR3MSAW6f5BsDr6R7662zUN87iUAiBtt6HSPTUjtv9YCNHj",
  "key10": "66vZUVgoeBuPg2UVn8BUAoB2fh2VF9h22w6Nc6qggMmA9ViC3ZwRaU9XjXANsT5iiMV3tbhWoP4t4g55yvLy63T8",
  "key11": "3eRohFj1WxCtJ4CfLBtnyiU88X6Y7D3A2D7RQDtRSeA6zxT9hC94GzFBsYn7nAr2Pe9p2deT1gmCyD3KshEvUyDe",
  "key12": "47KFhNFE2LW8LTzgkAUpQtXuUyi5BZMjFdduShe2wbeyEHuX3jnPqCFFD2VU71MLngrfmcbkNJuj9YxyVocL743G",
  "key13": "37EvMakF1ebB9h4DiACsHigdzwjgLUoY9gBq3FJaZVDP1De543dnNnCmzNrHxxdpVLTPjY5hX9cfGReCU5nXvMpT",
  "key14": "5eQhuuEAv2t1HJgNRiqWvo7Dbi5dU18URsXEKznk81e7uvEvWDMB4fbMACA2KadKjz1Ey88chaP4jz7bTFFvV9Kb",
  "key15": "51zL4VFNVoREeYKczk1mCxpNu6yMdv831WVzDaEAvgzsLzFiznB65frJTGGDDZHVvdfgJEHCRo3aLGP2ETa36P8N",
  "key16": "5jUc8ra85LBMZp7ebhSdwAC8yEe4cAEs5Jotxk3cSCKTSPZWW1EYztE96F6pMAUNt5aMt319Wv8gPEznVTdeMKLr",
  "key17": "ve9ybsBK3zqWTEMmLH6voR5FAVgfNYU1iDkaVXffdH6kf94DrGGEQQSBERaJpGUB7NjHBGgtiRB6ivcT5ACJvqk",
  "key18": "3mTesh767mDg4n3FnMneeR99HWAXjGTUxFPLbvkNxGK2pKvv27aU55uAPvwzD9DHpJU5N5B7h4i8AuvPjXdVxSe4",
  "key19": "2QvPx5EE8fGy9eipqpLxW8USmhvtgY27vn22tnE8z3YMwFGs4KjD42eqgYEfeWWFs2TFtvCzZmA2UM2mVpqvPym1",
  "key20": "5XUjJEAecMgoL5cLuFZcmqfXqwo3rxrhTmj4xM5CG4QpBkrwP89DYqrvEY2yoTR7BXFMAm1yiZ3PV1BvGkgZ75GX",
  "key21": "27VyrFqsbGmAjMLN8ZfgvqFHokoDRHW6zsXk6CQMTBSkeXo2LoyghkyJCeL78CM6nJdQQfFWbWdyUvwWunKxCsuG",
  "key22": "KwU4FUoVBpyPHJ6Wxf8NsBLf4Xhon4yqdzniSAbX8t6kVj5SbVxrmpJgb1ucgRgySgAnpnkSiG6kYa33rGG3Trn",
  "key23": "qLTrvFPCBrWCpeZaYd4g7THQEnG66vZaJfa796TkvWBQKGbUsXNdkoXhf5dnVEUHimzDJXgn2NZzaKuRAEg2Qef",
  "key24": "4UTEvkPhcF5Dj8ghaQZt2tEo65Gkk5XUzgqad9ko4AGMvpxnVW3dfhUfCdS223iSf6ocCxaSiM9AVaxT7uvGxPbt",
  "key25": "3LjRqJdhh115k36wX1wL5G8DQpdpBLcHJEL3HGckjPKr6hf5SSaFd3F6Lfg5tmjE5s6xSEA7EboDt1uqeYxC4Sir",
  "key26": "5qeJ2nzEtr3n1KWgskopFRKsSL1F5mAApZtarpxkFY7WbAvMT1v84GqcnKpzeHQzKkvSeRGRGcBFkXLwX5tKbVkr",
  "key27": "36394TnMWGCqcMr1U55GTTBMdb6eksFX7FrzMTa45dcsvTTKEJ3TYqFBuAKjbdUUsU3DhSJkU5DN9KktTdArzCnG",
  "key28": "4dGDn1uwVicnJfGeRT8L7iorKgLrjsnC8Fpm41JoNxs2mjtUXVASw15fynMe4St8jZJVDLtKeQTaAVJU2uLj5zAj",
  "key29": "5oJEqAJvLPgR2G7DJtntwpG49uqMVBxPDtdXX3njWY7qkTVw5M54LjNqNmQV2nf3mT4KT33GSzVCW4kSZfHJUoWn",
  "key30": "3vfkGYFTcL7Rcz1XN12YidAGmsFTsNFxkiu9UveTghF9wA9XsbepZKjari7RY3XRX2RASyAMhamsSsYqseeLBHHB",
  "key31": "3FCTTGAYAP4d239ZKroc4fNiSwEzko6AvAPMAJ9ALSFoEYmHguQw3ZZjc1uAXNZDgUXc9MafCkJqJy7kwkEEnoK4",
  "key32": "38nHF3gpmfDpWwd1L8yitNUiaAGs34Sbe5MHN5EBG9nvigry1HD4XTD1KxDgka3X3JSYAWYcsir9uc9n7DWF5Xd"
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

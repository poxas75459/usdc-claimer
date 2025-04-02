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
    "3qjUiuLfjXnXvZ3Tz1YpJ8ijUd7t2bLTVdJVL7ij4pf4uhTFuM7bp4QGA3cpkPsv3JnnjjcizUp9QsQVUG5AoVyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhV17BSQBsaLHkGnff7hS3oidbWid7NAXNH3CeWEK5o3zPsxbM7QKBDjp6VZcqchhrrimG1rwWk48J1Ym8iGFoL",
  "key1": "4TaQFK1sJWUx7iG3poLv2qUUiZo5o272Rxt8sq2oYMFStrhwBjBJ7KxeFSfndhy8niun7hN9f4gtLGeoCj3jGYdH",
  "key2": "3tJF2UaS6uFJVoEvojGtSTFAkBZ77NatDTCMqHkaBuqUR1oeG7gwP8DsMQoCzYEddCWd7dmSQN3LJtQR4kRqoQpL",
  "key3": "a48szDgiKknCcHVa3ULcLCsXYEZTchedJ41mxukCKrruvYjv1vp1U1wxExVjpYqXjMC9dMsPJnYWETb2NKjTGZU",
  "key4": "qX7cvZTTcNEXmEyQomMK9hbQK2w9ZUeyRMkARnzoL7Hq7DRt1dzBZWX1SamT3KJAb7mYHqh3J4ABnc47KZvwD2W",
  "key5": "w3LgdXwEUbh1RUPjd7YSAaY9AWxmTd9eaNmNXwZuE6GRuiVeLCdEbf7YVjhmS8qdynxY3dJPBE28WwF69SSU2x8",
  "key6": "8gkDemNjVqAz3kpP9S2YZa3ziRB6MAWhKd5LFZG2aV7RhZVKwUkVucvboEPdA56zNerWm5Rn8S85wXn4NPHfhBv",
  "key7": "2LqMwaxkcRjEZ4K9nGXSkZyR4muBrgj44Pthou3jQHZkDu9KKvtY9aSKFcRnQCSc3gS2Bz5J2TPa6EFUCinUope5",
  "key8": "5Ua4EbF7HZq6NtdqgksbepAUmE9PzdKw7SC1dSaoptFCK9Uq5LHVouGJHx5aDKG4Et7UtmLaKCW5gVfTTn4FiXCe",
  "key9": "Qi7oPP7DG4i2Bn5jWDmuU7uz8ZiEnLnNpQj3qSGhek6MvzmF6Wv2TZYNYGNuaGTkE2sJNmVtNbJuMwAXXuEG3xA",
  "key10": "25hA2BRoZRHdkbjvycBSUWmvwudh6gpgH3Jeti8VL2XTQW5k1ynEPNSpwxzuPAUMcQB8rbmGBWo2x7rEpJHWxUTK",
  "key11": "2HXQrUJtWBGEk6td7xARtvDdtNSVKyxTaWwBzxEBSJx4i2ExegwqrK6g3B9qCc7fxbwSDSaEmFyUW7ftBPApsFgy",
  "key12": "3pnPJTF12X6XoB5ftb363GekJezG9VnT4WhFQFb5FWs6AD3jLukFc3Eu4crzGw3w6Wa3CCjvrUxTJjzAzL3UB5st",
  "key13": "3Q7DfjtucnXBRA3cXqFA1zjhCcwJQUGoDoqBk58JEnmuwDUCZFX8v4fXyMoLnMZV86dT4NVVu3z2rxaZmYk48pTf",
  "key14": "3AcpaSxTTSpgutX42FizvGzgAccqjsCQhX383E21jU18BXhKdYdFqogLgSc2JarkNE59UwXDcDyxA4uhcPZT9htj",
  "key15": "2YHbrKDqLeTFo4ocXJQuH16BqxZSG1fKQTtXMEWBuSsXDRWHjD4Be1z3o3gY4yoZ8uAYB8n4L3xhu7Udbbc9DGZF",
  "key16": "4Sa9w1WJamVyYomD4oywdopwi3qTFwqovD8JZxBsFPB66ni439DSnLUthQpMSMsgNnmN78XoeVjD8B3heVypiXkx",
  "key17": "3aRytmLJemZ3RBouF4cbH6vxwFZswFUfKipDsZYMsunvp8yPxk8vHpWCYysrtjhJFeBNesrfC9Dg1d5hxfY2TFHp",
  "key18": "aRsqRkERmLyJvmPtubNKJnQbxwqEt6YehbKGi5UDPRBerjZHMDvRTfTccbVQBeD3xshjcSbfaAFg5uKeBMzm2kW",
  "key19": "57NYesiSxTbG3Aen4xje3GsySre7B5CHSBjCc6EvzhJ6dSUH3wooKcysfpcxDnqJuqMX4R8sWw2PdzvS1HmC5W1W",
  "key20": "4LGW3DJDz6tEGurUCeWBDiojLZe6z2n9L18PEVTLA9VKTQp5iABq8jRRECKkLtQFzhkSR9zgY6SaW5JSqVN6LbXg",
  "key21": "3U7BRXRWxq8NWkS6kJYtZu82w6F9X3MTmPFL2UFKxHc6aefKdayk5TacFVSdZzUEVyZidzDGKYeDFDTF5mbydfED",
  "key22": "2kmtZaMGRA9rjGEmyzjXx183fveVpgoBXuMpKw1cvEwC1z6hyWQyfiDWzoVLnbZzHEoL1PSpxiLJGRSaianKCmQe",
  "key23": "4nvK82QTZKAqQSbZUKmjcwgYrw1Yp2iv2z2wMjdtqWYZDFRDY7g1iYHDwnQ6C3CUg8oEsxd7spP7di2iHx5nvFwy",
  "key24": "2N7PnKi2cnEHUa3QjP49Fgco9YPuR4pWPfMKP89D3eGpRYEmV3ztC8wcgyGbN8vECyiTL3mLoxWzE3UxL1LpGfEQ",
  "key25": "5hh98TtJ9aPhUPWeFBfXRKfW4FVkEuVeqxJa5fxgbdmFjPfrtfUb5ygb4fCc5DHuwZFhLmLLDvYVs3zPQVy8Johb",
  "key26": "mpJywfeLN35GKkUdMHwFPRLKnFcc9awa9iq1hxW23cx8cDF7AQig5VBgefTzgyJ9r7idNEdiZeP76NXXd1peGCM",
  "key27": "4TgoLrDpVePny3rTUd6ovdXGM79c7GGZJindGPpAsxtviV9XERJRMSUBneQ564M3xSjtK7iwinQitNXG1vQkFbhY",
  "key28": "5DAajZtyVDTyKSntEyTWttZmKbt7e8Qhwj5jsHpSMMNxNX4y69hPu2A38PCoH4joxgpaeDT8xQDy389KBMrExtJz"
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

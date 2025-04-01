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
    "4ymG1GnfPdwmsWzYMcQFbXifSh8MN8BcHJgF7qP9ZCjHuWNonEeXosoTkUebt1autHUAdQseKEgfG8cXcgRGcWQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4554y41R75uR8CQc8eLKUvJJ8g1CWkyWTeM6WQh9muPiSQttDTzzht3gHToLsHRbGxYUwtnzazZQGDXcmh2Edv1W",
  "key1": "238tLJddkBeRsoVntE2CkVBzqpdbfCjm9LmXU6StsvPpBq8W8wkZgHYvz5ADzLvEYLdVFUKCHCcgfTVg1v3wcYxF",
  "key2": "2u4hNrpidjdYCtseKdtPwNVQ7LRRCd54CwTbKM1XwvXER8P1rtxeAok6py24CMGovMaUSWcSsDNgiLCVGZWZPKxm",
  "key3": "5CCZQz43N8pFnknGv21S4jaVxKCYpiCefjSEQ9gxzWbWBSVJz3jZiGGRHfrgZToc9xWS6zQAX9gWaPLgf9zvwYbt",
  "key4": "3zYDamqwcMJ4uHX4oEVMHFtuYftFTymwz31cdhnNt9mEJdjBsvHmbS1Ltvs8YkHrBR31PVUMqaxrSpnW4pYUS5fZ",
  "key5": "3VdbxrYDGYnvyQsnPZ5K2J9PmF3XjVD3WcgHziwMgLKLn4XcnE1afXgaTEL6zhMv44Dv1B159yaSU9GtKgRCrsi6",
  "key6": "2XLDakBW3uWq6NCc6yHAs3evjAKzQuQ92c2zPXx4mbTKWWqmnQEvDxT8brJAduAuidk9yJ7e6HESoJR8Uv4xPpVX",
  "key7": "JsrL8r9Xz8VB7qeTuyDg8SvLJzSZpQxg27wSc5PagBtZjwmx2pxiqnhddEhZtNY27XDsahRjXyEUzfdPSRVxg9m",
  "key8": "267JiPqSu7p43HqzWcjbkNZovnHdpTxbzRMYFYQQ79M7dwSy5p3LRAYtcZBik9QNMWUeVgRVpvs5rn2GoTTEVSJb",
  "key9": "43xV5WgcRnz7mYg1TnX2TtRAb5hXLK5KXT9QTCGdzoxsA7ELGmE7kY2cquHHrBk2iDaY86Cj2YJKgu6AmBLGwzU1",
  "key10": "4xvDoNxRgyxDpb9mqCrCfKvckdfpExPVbWtKiRmWQ8ZRW4KqWWVG3mFioLxqbUJknDUJomnNBVVLF87mLsmD4C1u",
  "key11": "hXEeNawY4UQ1XU7kWiEfMcsuXcohFXwxZNnUDacLWoQuKWMmh2rzeFzyvsPUdhZhVkq63vNUHVA1keZc4iHSeHX",
  "key12": "4jZz7tSHJJXPt2XsBL5qGrK2R7nMytiPDDBgCP3PVa3862bZR7Q8uBbr5PjJ4g55vNYoe5juGsvCVUWvJUR1TR5u",
  "key13": "3eaSjkUiwFm4g48LPiDjkSHkQXmAjP7o1wUckGdfnDjxVsmyv6hmSSRY9debFYdirq1nKV2exKNVGVFFso1ZpnPo",
  "key14": "fhKcNx1JEQygXKtnn34onzDfrFSvQV6BhSviGarwZ5LSc6szjQ77dMHEZwa2qpp3Ut5U1n8iSoErGFPrwx5rEcd",
  "key15": "HYJHnSsT8QBp3Jdp9KY6shTSoGRWqtMv57khmVDWRvU2PtCV8rJTWr7nMSyGwEct1sFK3eZXNVLf9VUjroc2eVP",
  "key16": "4eP1qFGEh3ZZR9RVaUTMUVLmXCzgHRAvXRUEYtbNy4741pibgDYx9yUS2qenn2M9uKp1x6NTBgrvoR4D4xZpd24E",
  "key17": "3uB2QEnJESNYAZhjdm3793jLGNKxCYmXQ2oh1J9iDV24Y5PCSPoYH4mDpHSGU83KFXHRqoTFmGWL9Mn6GrsqLDRg",
  "key18": "2oe9PgQQJ2RQtDrJnNd2f4rABHgivk52Zx1JZqaRWEpf9coqvsYe74Rp8Vv9ZTKUgFBthJMrveFR4i3dQrKLtzmN",
  "key19": "5JJWvbDBn51RChgsGFsBhTj6ePM49KTPMprkRkjK87dqajxvfUzS5bbJJtwj3YcqXZeAnw3ecDo6R3Zs7Jc9MnHz",
  "key20": "2xDWGjCUtECx12uAuSyxEECM8prf8ja4PrhW5NKG8ne5iRQwr4QPH1G3iWkt9n83N73V2zaKmbLfi8yhQAV9hZem",
  "key21": "5m7HE64YZMZ6Q6v6XxYkAKG3dFhaPMgUXjEakF4aUgjXDNAFc6npTabcEqYAJMZSJnY7mRb5ArchwGZaXjejF9xc",
  "key22": "5a4EdefggpLMNWKxUA3zxWPTaRsw1gyYnpnr7zB3wV8ZmZwcXV7daF1jwTbEgv6wMh21inxJFtPrELjzsv8PJoSG",
  "key23": "5EPHdQwvqisD6PnB8oCpyfc2E5UvSQRA3BUXtQTbtJ3fHsHMSQDAyXX8qaHy6MVXGVUHgn5mp56YPtBvzwtNvzgG",
  "key24": "3xovCr4y1ofY1Fe83wPfcG3Dgju6sWicQbaEAWsLfJiZWj3QQsiaP3D4zMSTSvE7B7Uqe4f9JXjzHoB27NWoL828"
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

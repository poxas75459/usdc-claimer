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
    "5YDEWmi5zxot6UeLwNZNd6r9AitijkW1BBK1g9YdpvtHJbHdBKckhkTGGxUAYucAhgFPHZCdQdH46N9U5nnqL2b9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKbz9zWHmdqfPkQHHMAzasgYckd7ngP9wJDfQCK4C5iLHK14LZQ1yLYfAf4EoMArzUZNxYnPfLtNv6iSVymMY6y",
  "key1": "5XQZEVWVSD82d8tDzf3pNpRPdsXu4eBQSGvFJ42488w5fKTo17zpEcEdi7DuvDgneknZCfAGuUbAsXbw1d6QyYpZ",
  "key2": "5dbCCsmBKjf4U6RyL6gE3JNxy9T6B7jtSCiMvNKWa4amt6anUkSVQEAuEfKvpUXDd3MGaLEq5pSgqjNEEy63zLNB",
  "key3": "93RaSgLYp844AcEE8htW2gLANJt3GnbrBLYTqKAWeWLvFjx4DGXMpjx1SQFRaLTfAqUL9cWC1fYgg8dpuC1cYnG",
  "key4": "2vNAhM4pTDicnYyZEZd3ioksVNJ5wYCAkfKQxeQUe95yGVBHCMsZYELp4nYThrCUkUicXvubcbcxqUN4KWZyV6Jr",
  "key5": "53mFNnxYSfYmmfcmk33S1KW61QwnW8fV3ePQ6o3ipohK8PzUNQxZnbJQpP8BNzAJkW2BNkFkzEdTuyAycTDuFDR4",
  "key6": "2zh6RTAGrndDRWfwHtccjte5yF38cM8bERbGvUCJb2agZqZZhmkMmEKFFyAuud93t8ZNffMkXjQbYf2NUnbmv8kX",
  "key7": "2WURgc4tfi4hefSJR2wZHwL1ApcrrF2D13QBmcRr29rTETKJB7hdKR2FadGfcD6YfmsqHdcbog9bajvZdTHzhZDq",
  "key8": "Ut3gkfvJRBQzrNNhZcJpvAhFDATNdXecjYDtYy6o4bRP2753h2QegMJ7mam3xWN9q7KdLVTpUw3VDrptwzM1b1c",
  "key9": "3Q14HMz75ohE8RbLABWMVCe7hVfAm5xcpqBDAcRFiZR7baKPyqvb47Ut5PVTMSHNYS2NUDhp8ToZWSHqE6iBdZtg",
  "key10": "58TN1kwQsKnjJFoTsMG8MJJkhAx9WqFTWBKu3kWbZnYm4qHoCiLws7hvktmxgdFASRioWN8ohQo99UogBB1oeEma",
  "key11": "2nJCsqV2RsSE6C4FdnXn4rj9P3qWXyVJw5HWLR1gon6HDUNXDCvbuSQKUEEDmnUmsbhEpu8wx37zR5zoju492h1m",
  "key12": "4uLULAetRf1Fi9y13dJ4N32A9xsx8yphSFayLffAR9Fpb97GnyPKk8TpNghYhTJrG7Hz22j1M9mm7XZkGps91UEh",
  "key13": "5owhGTJwVCCXDtphkG9ThcZjdDAWGuCWnpNX9pkLZwfQzupsZPZarKWXochkRFxr8N2pj7D6Q8pdcvfpi1MzQ89p",
  "key14": "32AaVTBRQeosbTfReVKgNKStDtySsGXttxYLGNXNrkA9dNqYjixobhniEUMfQVNSQ19evB3PbFdWReSdNt4Saw3U",
  "key15": "4atShH3eEQbTDvtFF6tMkC4DRbWASbaWN7yAKeVqstM1miPLphZrkMgJakpWjTSSfsTaEuQuxKFzQCjirMkVG6jk",
  "key16": "CxGSRJsL3W2U1wzgCRgYvjVz4QQV24jgxbiFTrHygfu5W3ZpkEWVFQ5LZ87PoyxvvTU3mBnqiPwz9EUbLxSAuW3",
  "key17": "3Q2gLtQiDajLBsfaZYZXTKLQrUSjWxVHoFzjHS1G519ynrG9oRw1UDWd1YGfGExpcnJbTGdDZWovfknzfTvUihuE",
  "key18": "5gC6v5gGerLPfpyq37WsjuDqiwsr6kPMPSJVoBWu6y1qj2qXpThQBNrZRZXvAQxJgY5t85kbxyLSGYMgtuCyK2HE",
  "key19": "2i1Jc3Pb9FFm9biQ26TPL6suLYxhrw15WE9V3wQZaAnQgW8k6eJHZc9YETXPqkDHW5Khs9UqDCPy3LpSdZy9tM1Y",
  "key20": "ojyf9hPBPQar8y39E5fHwCLMiEScMmuAYSH8uCmTAFPWdWYunttBcA7zjZF3xTeWBUa92pP9dzmZpvDYLybvkRT",
  "key21": "5FhDxjkEuQmRDRAEnHQpmtQz1rM2Zmugzfak5ECXSLbdNRjua1W7DEo9VF2PZzqxUpZen54pHEJwWjje72iKfjAi",
  "key22": "4DZVYGwA6aQ6wyH8rq93rja4qDYutHj3HXgDQedCeV8tZHAbrZJfGfWsVWgxdFyto28kePydYBAbdf5Ag8eZ4Hgr",
  "key23": "DcCSCr5dyin3AUH2D3NgaSyWDmFRvJwSYTsRMtzC4eF44kit94nyjnULG1opPMPVC9bC8zxVsjp4QFJWxDNjNHN",
  "key24": "KggvCMpJDepim1NUxv74cPn32CYuhdrj4kNWHFRUYpDj6LmwkLoFf3pqzSR5ZSeVEKyjW1Jf725cnb7DsmpDi2Q",
  "key25": "NKXu4WzokB2qEm9XqCdLHC97sB3nQ9hBVk7MsMCQ4QkMY7SHfAL2WH2TPNESw2RRiNceqy5Pm8xshK9dgA7mRFG",
  "key26": "3wxCfWURCvVL9KCSXozPfY1wukQnLSRMauydsUoN7862zm4jhLYDbXAQnsg8ufasdGnhK1uvLeV3fhbWre63MTjU",
  "key27": "5kCmx1zkHYrNhxquyDvCbm8KnJxCGKj5kkvWKaSYeQHDbwdci2tyyYyRdxYzgioafUV1wphrsAV5qzTn6VU9h27Q",
  "key28": "5jR5yJiT6LgEiaAKUmTb9Zitq5NwsLHqoEKLx5Qsyn2ds3zcPyVLSyng5EWPouB6Wtioix3gsiuQavpc8S9iU39h",
  "key29": "66LpuQz1Fjet6xnNGYRHZQQKsR3ptjQg2LTfuYYmQneen8N6AqnazNh82B8adNt9j6t9YqZwTBgfZR9EhpD3ubor",
  "key30": "3CTH3UnYcBGgXRa1K3b2WC6wxS1KARdtVhFnsc6BNgUjZRu37kdrSbfqvAkbGJt1UEkaLg5afRyHz5hCU1eykroB",
  "key31": "5iDnChxcK8hwo3DvYQLa7JXrYrtyb7pYQbKMBw4cCwELZVWq7oY7ikuf3tbw8pYFXnKZUqf4ziMG2qVhNWZudKsY",
  "key32": "4Z1dhJ8YV1EpuKLhTZNM1L6oue4jsnQfTS9nBLH6o2yfe8aH3FZrcgcJfEuku3s2kCjAd5jVjytyAU1jLt4uULcD",
  "key33": "3P9KF28Bfd4QMDsbsM55EpgJzbk8FQuy8p4VckjmMj8wA3jNbb4Us4y3X4UjR2oy2HCHoMSstZ7nUzKRaefhd7wu",
  "key34": "2aaePKhjnYRuqB3VFzWpKmWfHWexTi37VUdG3j5WwevfCGKuP7DSnS3ZJjRG5P2WXLQ4dikTHtTwoaGag4YvFEWc",
  "key35": "33gb9DP1j2cHcMGKUW3gLbeWdedrTnbdULbgcgMxL3sKtoNVV8joqP5RH5sRzFg1B3nMuNm4enUD3oCyJHPQxaGu",
  "key36": "5qyez6e3GjZJSARDp1ndpGnpm9WbZ3Lu4JSvvGwyfAbheXFVw87AHnaeLSYeiq2Rzgi5L6UQ52L9oox3RnSnAeAw",
  "key37": "58TiCvT1jvwh4TaYG5to9NkVxJxQWVwm3xEdiobHYvsJGE2dZUd4ZLFWR9CFYnH1qp4Z7CxdWZjKMsWWoZKCE2hB",
  "key38": "3XbYu89yh7RRH2AoeeQSqAjGrDGazDDwj94jibTCrsYwM3Yh9CjeNmL5BGXKVWyy47oWUiiez2B7QamYeeUrCQzg",
  "key39": "5iKcZg1awi19drtpGwpR82JF1VMxArCnw2PygrXy7nZm19joKRZh8ysSYckmwsJ7JGcrpWemW6a9z6beY8WwWDLL",
  "key40": "643mJCemKkCoe9WkvcDnH8LbJEjFbb8CSHEtDuUDfN1PWbokdEB5o5pKWiKfV7EW8YUhomhzqpZPJb9EVDutiLbp",
  "key41": "2qiLnPPFGAJZWCgmEMymwGcCtQMcYALatpK1jRFb4uGSeXVCd2DPQwet7skyLpjX5QctapwdY62uTDsCHfBjf7TQ",
  "key42": "2gLxvmCSE5DeuGurBHece5zAsneT6T2XSANWG139ZtaRNXBMVDBSdpmDCqekjZKHXA3GsAsJScW3g35S7d8N5Fur",
  "key43": "56RkfHWvagNR2YKhuDUjT7ZxztE26gpE3Y5P6GpgU9cS9nDSVGguc1mvTbmGMekhsZMaLTFedh49RuQ2eipZLtXY",
  "key44": "3VsfavPAPHgKpbdAZQqhWMNyqpgB9gA8WRBeLBjPgbZ9XRttFagAPSU1XjYeRNKwPA5FjyuQ5W7WfLWSjSZ368dj",
  "key45": "EyfEogznQfwsUDgKd7vPK33RTcjRqJW2A4FFzbQJqqKFQDHji5H7MP1N5M48mKzBh2Fo4XsQK2yr8EF7yJXwVYW"
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

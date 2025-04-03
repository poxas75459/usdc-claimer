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
    "3UgnDH8bNbTKAUkzjpUMRrb6kpZXMeqZQiYvd3v8LhFxPzaL6vJeEXr98d8GLgTVMzhX5wFBu2QiuJ2j7RYSPRui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSJy9652hGBWqufJf6RZCs8FyWznxUqtFmecdWz5PwP27kaviWkP4i4uZiQs4cY1VPT5R4jcReXWNvHMyfdgJz7",
  "key1": "5hHKFUbHFEsr6E5UE6ySxPtfLg3pakfJUU9Xx5x4HrVp6kwTGpEXy6TUNbrArirc2pbJ8JUKXkxGrLhxRnD6twVT",
  "key2": "2dzKJ9ie8p7pSU5wY4KZgzYrCScJ1phJRtZdq9hRqBhReCtckbSKZ5HisuF62L763i2KWC5VuNSsyCmnyY2CFCZg",
  "key3": "454XuE5sLXcPtr5X2CKyama2TeMZu4hhxCErpQ5k39LYk8H8JoibW8HwEZc9rVx9RvBYkbi3JsnHhDKVRkjJ9DjC",
  "key4": "3LPBwsmJUNYXLhkQ5nam75ms3uzZ64H2hRhuESRy9ZKYPzoDXxtpUY4e39qcf7nJZ4N73iyp1T3nMKdBm5ofXYmM",
  "key5": "28HF437VCqqvL1cz4k8duFo1SWn5fR3DoybvRXZqPR2vyeG2bJM3dNLF5TPAGTSkpnf3VBr9SjW9h46M9ZsRM7P3",
  "key6": "4X9f1hQPiXPFnStdbFXWKEWqN4XfwsA6iuPsixmxqjhMQqU8skPFaz6dg7ShQ7UJGMgqF2pTLrhFLFrfF2qb4W8x",
  "key7": "4L8AiwW1pJEiCKnUv3PEsagnBnCBsj4uUYMTs8kzJqzxR9jV7ZvhtWBuVnjpisQALHofH5RNQ3Kqf2Tzsn42Phhs",
  "key8": "4kF6rnEKAfJXBQUxxGtMH6bVDMg6sygTekPdgyxLYLHXGBNPNJyWajCoAtiZqVgLBfGnuwfb97HxGpATBqSc35VV",
  "key9": "H6znPUYHh5MutqsKakeGBxARhtdg4P96PqjuXMY85M49M6PbFAfQKWWvSDqkXqbJ93uHbQejKE2urrsCZqhuUyX",
  "key10": "5H4vzvXRvDJg6FJEVdXQB9MwXAC8qR3Hrv4LmTmG6gJp7TJFuVZMLVnqr6NXZDAdrJQBZFHfgc2XFxVnjXzW6aWQ",
  "key11": "4P9PTxsfQ8yoZzidsWyr4WgFW41KyecSp4mTDnitAhGMQ5ZoEb6SESJwpy3xH9bM89tZ5S85cjED1LDmKRBohjHC",
  "key12": "55hSzsFZeCzWHsY4mEm6RSe5hr41jKc1czxc3zWtuWM7Wg8xWpSVhYvoMRy5qoEnqd7yg8P9o3GpvfVHiDcHzDRA",
  "key13": "5Y83xzX8AnPwFGJ3oFuoynuQc39kVfuy22cWUSxZCMdFgESACoBLeFwDSXyuGarpYJngu3WwsVLBxLv9cLZesdRc",
  "key14": "2QrfqdVGdcAVDMyNFJyFT8d5TgXsEZkAHDnvGQMPTRrUtWfkJHia7SpU89njkdrdYxukz3cVejod1JrJL36H4Yuh",
  "key15": "5AnYN3eGozdKzHvhoQvHXSNZuK4m6PbsVxNKt1FW94kstzVJEm9hwqiVZCHSGh5pNDsRYCJfviMBs1kboBXng7RC",
  "key16": "31vmnkbmyctoHTxXuceTTmWRGgTLwsJSF8K6vkrTpzN5U2tLJENesk1SNZTub7FjEXTBtheaGkXsnR48jj4dr48",
  "key17": "5EnYLVKWr5eyKXLceSFTyEzxxiMohDSyaNonzJi4TBYHjZxXDDywVMezVyjxAHZmVnSyDyMGJ4ArAWENgsnEHXzQ",
  "key18": "42DBwxHX1AvvGDUGvTCcqBZKyg1kuvc3Sa22cxMJN5qDjP7JzbvgDHBBKovs6ghLDQDFPot7QtN8ikFEDW1FtGaP",
  "key19": "5pAkMWDin4M6icPrLgc1VJYGXSXwSua6E8PngzqPPsx2bCR8Q2dFkY5Nx5PZ2L3q4R6D9o1tcaqCV86iGLWPxU2d",
  "key20": "5jHLtCYP2UZqHX5ULVsYV8cdt9Bi5mVZzKds61GpQCt3PuhxBadJFCuDieYAxWvqP4LLi5VRRgxEZnCruPQbkUwL",
  "key21": "4H4wHgwcpKCmWHz11wa4u4cJ6jnyHXocZphoE6XAasrU6tNTn7EY3KUcebb5QC9bvkY4XLccquT6vZGkdbWjHm3c",
  "key22": "iCZTNB9ZZEsu8YGz7XLDCdY6BR5VoqTpd6QQbyNwEe2ENmeBuAsVa5pzfRc4ittU6Roqr2bcrdEC1cayq8dQP2s",
  "key23": "5xxyEotVarK3yopLyxmEzWQG85kSCn5grpyP8C47X1DggFtZXJW2nMjK4KKKnRW4XWbhonWSrJrkJC4eqo2XEqNC",
  "key24": "sVia5iD5tnJBmc1CADX19bi6VLHXLw2Fz4dd7FoepARDNZm6sLLg6Uj8cFA734i3ZYLDF87KEvSuvuy3W9WWh5B"
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

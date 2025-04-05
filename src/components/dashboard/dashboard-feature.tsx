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
    "53Jkb5msCY9PfDb2HT3YViBtJKrw42sWHysMBNEncgYdEr34xyHcrobzY1sws528CHxRchQzYUmHeWnUmbkXs4Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tdyKdnoUH5Yx4sWZBoKjbZuANBW4KMEPRjYqgiT52ZehWLZSecGFUG5Z5RWFth49XTue7SMwD5Cems1kEks4vA",
  "key1": "3y7gqaDtd13Ehesswsi4KKtRv9yZbmxeqNacHRtPdRmztaoX1Nmv7YpJa5PSVKo3N2csAAHEYKcPMLXfbwwxuRtN",
  "key2": "3Na4mrkoqFTQ6PrTYeLbc5oGJ7nBt2FspcnQ55X4MZAQJ5VPdy8Qek2gvaKLpghXWykm4LnanEjibz4BFkg8jb7z",
  "key3": "2gfaNJqdzo3kMiWArMHU9x2xX9sXtUunaPfr8QwTKauBEPGGaPfHcBzdZudpjQv9Z7vX4schi1feyccpVdfpSsVd",
  "key4": "5Kx7HdGM9ZAjJ7WsQkPjnbvjDFK7BUtU4JiYybzv2k1HYvJR7FHwNVE9GMA3nnkVU7YuGXRnwLnJQipcwYa6Nh2T",
  "key5": "5E4dUiqgisA6fKLonFcUtKnPhE7AuK3ikwSh5CqGvmsMoFFwMgEXtfkAPG64Mbuyh831Ctwa5VSK7eSrpHJJipv4",
  "key6": "5KuS8vAg3LKeZ9tsQ4QnS3mkXbZS9CBrnmA5V1CFkA8xuhDwZc58QduwMujqoUb8owKSZhJRxPiVtoxYtKafUsso",
  "key7": "2n41SdfqveLUm4WmAXc6nLRMwKWshnWpqJyuS7PcCjx8qS7e7ss7ou6d6oALDMowpVeEYXr8Kq6sW7QppQ212BTU",
  "key8": "4H1djhTi2Z8QAiG9CaVeYRNHpeBWuVaAVtmiq4Vy2jWWwrUvRgE8T5FxgQbS4TaRMjWLUonfuWSNEVW8DZEXW4aU",
  "key9": "2mi2qfDqNwmirgTQwo6WVzqZuvcu7bAJGmQgtdMPQDSqe49SsnwP6SAHeN7AR9ZkjAzrRNPhZNXPUypnHkZBSGyY",
  "key10": "5aLxZwxvBxXts4AgfsguMGVESRdFcPgRCkXCpZQaPVcC5ikqMteemrTKefxBqqbSD1o3umaRXimhEdE9x6LVjMjc",
  "key11": "3LzPBBuFrXpdwHx5MWY9HDXaiXVgnwUFrYihf1rsLGfSEPg5zTSQTdNtJsaR7x1S16ZCurCsw6hVe37BVcsXNiw6",
  "key12": "295qeennwQ3P7ZSUCzU9Sb58bfm2T2gSiYE5FmD9rNCu6QexDFMykfdBugiyyrKtw5aJ9GqAtUyMq5XResUDTT7V",
  "key13": "5SusuWeoZk2uWP6jtAzfQNVfCMLQ95KDzCtGw3XtZpEZsXHCJ8YQgMLUQcKkac5GQoY7sx88NYNfUbBs8XLdoH7T",
  "key14": "4HBApSj4he27tWQdhky2ZDrgEHCWniD96EwonXAvwoHHuu1hBjAudGxqxM1pqxuMPbbH7vFMaingQNvWGjtjonuU",
  "key15": "5hEN5SfypZBbbxJxvAxgeeWsp5XQC5HBYWAkce6CvvpV9SJZvw2oLGtnCrqjLg1GekRqruFHYLCy4XAXHfJHM9Gi",
  "key16": "5xeWjeNdRUsKbgLCXG2rav8jPxjuqK9jvAZUUEAbDzjU9W9RKVYyfVzqfAuP9daHzNvdpCLqH97rAUGRvqTahire",
  "key17": "3BrsZWXAAFNYVdEJVp6GyZaoCiP8cXvenjkbK6aLGsXg1hTwp3PQfrnojxKM8Mcr8Mxhkraie2rtpfED43zwqRDT",
  "key18": "VARSAsRuexNnczNeEjstxWuTVhMvtitmi1hrj1Kr2G2fpjdtXoQQobpLkbT8PNUjRJHc4N2tE4Zttsn4z9cAKZc",
  "key19": "oW4b2FhgdxcXYBn9BMi6vYPXPuQrB1JSbFJ98Pbp5k4KqeMeJrtzqdPS1c8rzEUV5G3mBV8zvjqH6DFnPt8D939",
  "key20": "kEmwtk2UxtyQJVSvojHWro6ZipPx5CQouzqxEr5fE9oxcnHXk8NuTBXmBGMFGuMo6mdiLE7X7ZstbJdXp3Tjmpp",
  "key21": "3QR2nho1yS7cDcKv9F138YLXu8PwKn9a86quGoUuyYz2adBSrsadHGxXNXJ4FACM272j5W3GD1sGnjnaroTigDWV",
  "key22": "5Tp3VrKmtEaTBtJfyBqRP7E9wRUWjUV44rjAbwPi22yT9HKnDV4w6ijmgYFoM2QmhWjnnEx8KZJkFcmbEE7NQJgr",
  "key23": "2YpaEK4ZCngNe3oAJtoJwTBtPPu36thkcKXAYatGVbNFycc8s8shh8FkVkH1mBFd226d219QtyQFunysK4a6r3z",
  "key24": "5tgCwAZv529WGDye6c3FZRiuQ9oNVbac1EzENMGUahiLeKcDE6cY38NayEgYrrddaJLjUTDtrudigaMYLSmoiZWQ",
  "key25": "sBCgt2KnNb7rxJJBUUBDsgn8jGMRZMyTcZ7pJuk8FnUmM9B5aUAFVoNJfogQLx7LDXvEUXMLdQaJzDycWxa6bBk",
  "key26": "72VSWshS3UdW6mprKbPxjDAN1vn9mYA7EVQk8FuYSArpNcT3WVAG6tMGhRveCy5LCtj5mPi8WgPzW8kbKr8jVCE",
  "key27": "2cgqSZPyS364Eh9PEHJm8HYSSwqnTMpi5t31Q4uC5oU5ztnsLj2Yt2dpWpMayQfsoevt7vkie17pAidCgBwL6PS7",
  "key28": "3gVNwAVg3kwNXqyKuNjLBXoY1sXBXQUchwg4sQFSa3zD9dPYpSL8tr5y1q3WUTCVfCBkXqADYT9tpSPsa9RJcVYD",
  "key29": "4D4ak2xSBTqmk49g8YYCpePDJGAZYVwydKN8bhg8bXSvRXUHea9GbDTfTSdwak8EnRNfMcRBEhHbuJ7gQewrjqiW",
  "key30": "5jGEdhFYZEsfr1WMJFLry5mQ1JmZez29o7NskLhU9iMfh1aZhHMY3zsRYU5k7qfkQq7NKYcCve57UHiK74A7Hn4s",
  "key31": "4JCo9rvNEP1EohnKqe9aRcvJ638d4oMm9xg9bQNwTRkhjaVq58jhZnGDZGnhpw7a964toBDb9csUXD8WWkg1FHdQ",
  "key32": "3pJhNjKp32vM2byqnh4aiiM3dLNY4tVXERgzb3rt41A6GgEf7BsDsLUkb8DbbpZCWRjKwrsBtFxFrkSjf8nXgczU"
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

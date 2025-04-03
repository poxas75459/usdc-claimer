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
    "h2RQxm3yvFTCWrj5R4JcejcQdYzYbCf35eYr6p4Ps5ydGhskPWJduDF46zP3GekwgTdPwZ1FXiNg273yRreo8UM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R1jL2ZmxYBnCChHHcPVdBF1v7na41ZtpGCTqS8rS32EjcZMgujN3k9HNveVfPbt7iA6qz4xtFn5oAso9mLtbJgC",
  "key1": "27MJJYwPxZyvfehwS5Q3Gk88S3QqUCoqjTfU91x3t3JFGZRTmboFY49tVNV7nSfEnzY4QJtxmAZoTXXCGSUjL98J",
  "key2": "2GFH1LRos5jHgGXL1JsFNzr1HLUjvaN885KBgZSi7QQ2evPWxh44uHJiRnxGBDyMvEjVycg6G8G2uF8hV2B1VvZ7",
  "key3": "Ry1bmpL7Ap8MNv5CdJ6H1cCYUAD7AGdbg5RbxZefqDCfhX3mdHNBAjBs1uWQrqj2mcSXqxdvY5u6uxdhyQCp1B3",
  "key4": "35KoES6swu9gNCyqdS2h45yD7dS7SUwZHkBZuypiR4T7LZ7khr9g1Zf5VxJBXfFNEViPxCYKchax6hoj7nhxHEhP",
  "key5": "3khP3jBXXhMWnGkorxmN1Na1Aza1HmbuCzvsDChRKZDxTQibyVUJvgXyw5kAjjD1wgoK4ScSGBtTLZRsfUvrHPp8",
  "key6": "5ZTnQPF2vsKSegJRUM3J7b74S174vUQBVANwxAuh8mJPuoSPA8wmJyvD8TCewDt9JQa4eFQwGhzn5nJPK1fRFqAe",
  "key7": "62k6fu1zW9AQB3Tzt2PE1tSnWXwDAu4bunKANaLoZHg73oG5LtxEvyvVZPWzYYufKhkB8eRD23X6468PUWa4tUDm",
  "key8": "53PeqsCvsrPCymQWDCZUzLH4KzrAoFbovE9YjN4UZwe7vR8oRyCVeoJ5No9FyrMgy83LFRXwbkbsg7ZBbPLzrQrP",
  "key9": "2mNRBd3gwJB3WpoZb6WjBnPWE3NieUFSyPaZdiszm5oB2S2wdGHBUaVcBq7gYBK4xgQoNeKr3He83qTFKonxfwg8",
  "key10": "MizxVfDGgntDJETvrJPQcoQoWpd8aBAFzHYJzwjVDhPtV22Esx47AHMgDqqEiZ23L7bU15JLoGHaXTgAtareSGo",
  "key11": "3mzQnVdS4Kcz89Hts8W2SQVXbcYmKp3Q4sppKGb4o7TcHWxVB4nG9MEucjwKG9HjvkPvbWTvLLGwapqDp58ttVyN",
  "key12": "3WfagMb5PsrL2dd4p6VRz7833ahysr4YfWpUHbKbYfgiZ1wBe7xxqZ1LanP4C8M7ojTzDJWuxPjdNYDmCozbUMdr",
  "key13": "4oVHgSp6trvUh77DK6ZfuUEvMRP6mwAReBn14TYGKS2Yi4SVKjkG7sqaL2zMZR3DVPnV1ApapErB3SiB7B4Y39PH",
  "key14": "UynwzHhSyDXYudkgb4MpbxVNLqWp47YXXNqEYnuAfYQXBWpzR9qydkfsjoaGwGqVVjUJzYe8Mxr5oMvm32NDpM6",
  "key15": "PMjg5F6LWuDoLvtkxgG7XPzzSyN16VszXuqWajyL3zBqHLrLGLLQJJg5cbfCBmQ5qwBCaL4v1sFaFjFyyajRdJi",
  "key16": "62Ba88ugKuag5cqmvsDQwxDwVtuTMH4jWPwgWoarPDMK4YAfb68zYNhpQCow9riHri5skjA1e3HceAhA4P3t8m4c",
  "key17": "RNktEUGZRskGDJwp6oWqhAPLkmYYM5dVSqWYCUzQnWEvzZj6rxCd3FQ6XHwHUkYYjEcuFjxeNWPd2HnwXSgJpAj",
  "key18": "3NXyUabRnbGUY32WPij1pxP5siffrgjtdxAf5XfcqzgFNPwZUNDnRdrAkzLiwEqE1Vq9NbHghqkwwraXWounvjCx",
  "key19": "4WoUar6vbLNHq6aSksqHmqGMcenfgFSX2gBw7HYwE86a79kn1z6RiJnsDfTL1b9EBTVtRyVGkx6NVTPtKsHgURox",
  "key20": "8cYpkET65zXoVYDY7j9fV7pNmFBcgcpVYWzc6DJyKfx4xZpGfmZq3TUrh5RmhzomAKkpWwaKVwokKXT5ekXEApk",
  "key21": "3pKaZi1qT21xm6Tx4LF6fgU5ZYK9sYDduv6H494puyPwo2e4PTLPYGkDiv4EWe51a2iy91afbFAETbYsAPB8Jcqi",
  "key22": "LQRwFSWdUXLKjbj4J8FnsCG3cgkZ6Dksi7m9UuBFeTjwVKrYXWCzAfwtwQmP9yN5Q6rnkiGtvoh6yHm7eCT2zRv",
  "key23": "55VnD3ghkn2hU6TkBaQMR1iBadYU1XkgEH828dGs7onB221V6QTUuKp4Ns6T9N3ZcF41VthH9u1iMr63G6j4Gms2",
  "key24": "3NfSBSBqZASitc7MX1ecaB6FYcUZ9e2N7i6yRtfToPNVbgpvX12D3NiPVYkut9JzPm1KvXMqn95TLqaHtJ47yD5J",
  "key25": "35PVqcXpcG5vpqD6AnQNYfHr1sD5VAWM4QkmfFLuWAyEffvE5xpdCa6Xgim6bmMHxdzZPnT3pTANfPjXVxZ42FwU",
  "key26": "3nFY5YdbPSVBihPuBzvWHVm7sg3XkSiUsEg2A2jx6wxBXLd8dtXAhk36XNQtLg4t7snBLYYTgfbQx9YS8zi8ecyu",
  "key27": "MtR87TcnkNrWWFBQmWZXtTnkqjvWPDgsL1KqhjFYqm4kP7x8VqAPhgV4NDeUgLpzkEj7xch8sWf3MuuKcRQjWZ6",
  "key28": "4GkqcXaMNUt57LvYp17ictfEFHgAXXXBgcFionM5TckJp9U1NsKNZeQ3arBjvfya1Y4nQoxaZAa7PZkwgwdch8hm"
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

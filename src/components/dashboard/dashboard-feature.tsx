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
    "KEnkFtU765Tici6db3Do6RVVZxNUgE6WJUTXcTa4Gr4d1kbFd44gmayj7mHAYa3XFirR8gAkCQpD4WeJddV7r8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSbxiXAyQQoyoxFdyxcZe6Khd8WYN7pXyedNYSConAvWviA6p3oE4HjZpqcjdahWsKDA7WbUXLWYMdoyfXmnhu3",
  "key1": "4zVPDk4APsmLL9UNnY7rBWPW9BgFbd5vFzQeTF5HSEapu8bdSb4cxUjUTVyHdCkDcGzxwosdD3CRiq1uwyCZ5rPk",
  "key2": "2ZHQCtrsd1sUDHKBfuBywTEAupaKzXSd3ay9KtUykW4xcDEX8pEgXCiSQMuPJndT1WqB4SRje5vbhzBACU41urKT",
  "key3": "4CvkScPtK9KcccrQHUsgYiW2ApMihqLC3uLfiCWjjAm6YZp1YEsN6wARjiaYdk3CGnc3GWbU8cboHosDHUpBRkRD",
  "key4": "2oZbiporpXXoqwU2GbBNz6jXRi7jY17ztSCTWT6MF9CaWNgfv7jxUgtWXwku9JipQLqevS5HsTBGSUJ4xTdP6Uth",
  "key5": "5D51ZGXWnzH8HqB7eKByCxp7BxtTCXLejD1Ns1C2E2fphXgh1tnisKgd4GQubB8HThwZJpkaJ8RBDqRVkwk5ACUE",
  "key6": "8hEToY8xdQGWs4n2yes9i6qyDn9rZxzzcJQsZPJxBJvSPnSGpqjHFifcYrUPpf8KjBeLKSYVCZNXgFhPazAbkPE",
  "key7": "4raHiJ7ZUymUr9jEu78AwMeMiDpMMnmGKXuFsh4ey6RZ1nqRcSNzazkMN64JpNQ62zGnpCKp7EGtabb93E69pzXh",
  "key8": "fqibKcq6Ar9Qi8EfddDUrt5ARof8QFQv3Cwx1Vz41Xo5iQ9tr2bGUgaZqGdTTv4ZPw8DAbYPcXT9RCWucK7EzNK",
  "key9": "5WkTqmPeqxAVn5xLzbEhi5NPrxXmx6gvu9D6fZ46sp8YYXDVegEvfuQtZSkE6tM1eb1k38QtYsGEuFBKsqsXzpqz",
  "key10": "2taWBak8cTva5VHLuediHG66utYx4xZzSXZ9eK4kZq2FT2yWYPXPvptxreHJkCaqTVP9zQUpx1v54Tfr8ZhVLDVc",
  "key11": "5Sin92XUnZ11T3EKMjvTiUunBXG5XvGhskR53yASFzXzK2cnh2NKfhQV7KgzgchF5wQKkW5Dh4N5PsB9Ak8gTjNu",
  "key12": "3x73yWWvgrUgC8ZUh65GAEETy9RYx7i6YcTvfXZyHWzMgxp9aCSGjNAJLJduBGXR14cB8iUxHbTv8xKmX6opoSyL",
  "key13": "4t9SuyXHega5zCyK5mx8fvtRVQQZLDGJGsspYXArFgMVnM2qspFFFEybKwm75Au3g5P8WVpLRDfYDwhfNhi4Dx3C",
  "key14": "2EQ8BMPCnLAsRYpUFRfPTCSbocViVN9mYFVej8YSk1sta2UVFbFEDEV2kApxE12Yu7wdSbiSLbBCVRkeBULiZG9N",
  "key15": "CvgoY5YpqqSXM1BDrRHkkCRxJyRhyTE7tZGxcy63YHMiSHZPQwGNjtqxsJYZPUBLiLyZ8JWvwxThtCusQVBPzNQ",
  "key16": "34xAvbJd5q1a7MzJ5YERiW8fjvTUudmThdAQkGhcvCS7JJLqgjiSL1QLzaSk8HEYCL8VTTq1TTUX1BH6MdNLKALe",
  "key17": "5ZGEKWyf2ojgGdpdJzbyfTdzCdHfoCdqdzm2ehiuUo4xGUQB7rAe19HUqsjSru9yVLMLKV6dthCmh5jYLhZrZ43r",
  "key18": "4Lh4BSqD3nnYX88L7eobtTebmJ8ntUM8qgH88zAMxWN38Bs4TwxmfU7oXkBK2W9oaaKkWsGu8WG4cwqif1mefF1h",
  "key19": "3SjJGuBDeSR5d68ioR298zU3ntFB5zeqJ1uFSub3nfAYLGnP4ycLwyTLfTuHw39oWp2W8B91hazDcwnyZQaoG4uX",
  "key20": "4LHfPefzoCzgb9aMcVfzUNUACavWhaFcpx7XaVCWLCYZNGFwUYKMpxA1S1J2P8rvXswd3ZnmNvpWpCwkgV43hMHw",
  "key21": "55DzkhJrKcJHy8h9ZAmFr7Wx6A7vaBwVRafB7a2tdv3y1WCde8p3SajAnoGVMFQK9aL6X5gaP5aF2CbKDLTuYQ1V",
  "key22": "znRTiz7fBJrw5gJg61sTrDuRGbk1LrAwJVmcSG1tA22DPwyUF2BwYwKfep5CwEVi96dEtHWVY5yofTW9ETXzcGo",
  "key23": "eLZmhLf4SV8uFBLg3qEphBGoFR8Ek5wU99LAEUKWyyL1hrx4rfXwowMG5EaX85RLrTqwYBFAqVJtzh86nJKPaMs",
  "key24": "JjSJzp9ZU99Vc9uGkb8JNGbSHxZLRh3RrQJEdmiMXRDNEHC5zoxBNxtmXCiJtTyb4pTD9dFBr8hMcgka3Pvm5LK",
  "key25": "3rpoQuCJSw4eZm8UqJ689F3Zmor28F1eMxhz6Pe3dwE5X4DXU2rgYm2nJA3wfVwJxKQWXmxJDCoQqRfDjZNSjyYt",
  "key26": "xS4K99zvok9Eae31ddH79wKawDqqkcnJu2gGd1ukgTwkKyH2fDMYX6CzG9XP6W8RCnTeenAVxQdrHoRe8Asgva1",
  "key27": "4LsxFn5H7A3sthgVs2Wctcu1vufFk4h256rRy9gd1RbwwptgMvfaa4kERSiNU7MhUFS1Fb7s6ec4SU8D3TtG4ae2",
  "key28": "2ZG2KdwEjUMBzerxqXDu4JAsVWMRiRLPXyg7y4NWtiY8vRBLJmReXqk8wG5dZ2VKTQkuek1a9Z6HmmqE8s6McDbR",
  "key29": "4fvhLbPLLh51TJHqyZWKreQCESf7zJmWxjcUAZ6ekuMEvSjkozUcmHMDr6WpQSn1WEDWhR9BNDvxdgxJjU8N5hxQ",
  "key30": "4EKYjTnJRGV6L71EgTGEu3Aicgd9WHqsxRNBq6WkZt8dLoECsqhH6nAEVStowrGvK8MvEL8soGWMz8XBbQiKqXo9"
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

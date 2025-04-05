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
    "31dJ19PgVGjiT79qzn3eMNqoVbBDvEvu9sfca1fyxv2ZeP6a9cDi4cLLwcxPEz3Kw47ZQywUXLxGm3VhEwvCFdoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BaLPzzEYz6U6zGKViuUApuXi4vbVXhXtAVPErGgGnGiVinx5Ta2i6uyQcuWHCkeCqe9jbAKwxEaJpxRJQum8svk",
  "key1": "3jRvnWzHF7ori4KWYQbHtBacW77HDADafkV3x9LCenKKtxfZKGogQwR6AMTxx16zQARovUkA4tnpViWbnq9A4nwx",
  "key2": "2h2bbmTkALBk4Ro7y2H5XneLXTjk1XZf5yaRUNS1EUmispUDTTdTiYvuPs9XsmKXrUocyBY8Up1d4pp1EY46aDTC",
  "key3": "2qrRvoA19q7shEmTW2X4piTBatF8gwuQ42EELvPkqvvH3hmXt51NKnHGqwf3pKrWUz37bqwQWhAZPum4nGD64nUj",
  "key4": "4VUAG78U3hPxS2ava2Tnq2Qfeo3h1S6wcgn3JmxP7mzZ4FheEgV7rZdiBqVwCMCVazac67aajyBhDzwYLbHQQmcC",
  "key5": "2c3GcCUzo2A1xCNpXwv1b6L2EagsJNkYYH9hFUsZBaMSxLYp7k4obtCQxhYExaefyjYiHK7oo8Chhs9gnQHdt1PV",
  "key6": "5K1wuXTV44HfQBoyppANH4ChdWiBJNZ3CTm3qgFvVwZT48pdiybfwFYx9YTr3fr54irRRXwYf7yDjsWeXQfBmVM3",
  "key7": "3XzifLk7AQuzUP8iABpQuvkHvLeXFrzwrE9aXR2ZcKAkGteo4gNaccjZTGtE1rEGzkSXEocevoWu2R9xJ4sJyT3d",
  "key8": "61ceRDDqTYPXWgN9jgkYFYR4z4KL2w4du63ojAuXNAPDZiCoPVQKzoYXJtp3qhVXcvVdEnYBuwAhdHopgbcV54SS",
  "key9": "41keKxbkKcU9X5WPMUbBwygdL6GefXjDbjiBAjsUkUGp4oYyrU2nQh7AWooZ9b3yHS7PHti1y8s9K5JwJL1xJ7R",
  "key10": "54ErkVKhxHFv1r4rcpsyBkP2BVYKoFnMb8rakcDxucj9Tz29iTkEf1qZbrU7Xr5ARZdW7MjCdgZciYYE9wutiH9D",
  "key11": "2H9UiNCLHjK7fjp8ZGU8cdtYSAjW6xL9wAYrCqBpVE6xbjizeJboLZMWRFhxq3bQnen23qft74YnWxwdapWtMoYn",
  "key12": "5dwyPinJWHzYVcY92YeUkBs4NEDLj8AxX7kEhkBBfMAkfjALoxQej9V3YKsixHrG4Sg4btYbke2JE3MvhUGkrMnL",
  "key13": "zSYiAu52SUZnuFNFmua3phUb4qywmexC7uhDoTJ2iuoYnBm3WKy3pNL5vQutaq6avrDid4oQWQica8zR59MA185",
  "key14": "2AMoMR8pJCW6XjqoUr777WLrhcSWjrve7CY2fmW7M2W3XwXt7yprsg4dGqXFRRtkXa7j6ZVb7fbKdubZ2mDMXuWA",
  "key15": "31bncHjyxc53nusnu4GcdmKocEkbgmuy7pz6Th9S3c8YVxoXvtxtqNZx85osDLB4s2Q8ee57eJJPWTS4X9fymCb7",
  "key16": "4HYYwVENH7UcD1tmSrE9tQqqe6Van97sbDDVDt8HeeA8xGxT4UmeBJWv9TvBssfSkfsFRR39weJ4rGgyq2vTtHSE",
  "key17": "44nKN7zV1oRnbmBGWyu8Y8GBLSDdaa7Lt61WmfhmsHMX8TZGTtdFvt2SbiG4FX1NSS9JYQ1cq9Et9v7eYR3ardFv",
  "key18": "4SoZFuZVgezb6LjNrz8pfg8aEL695a6cRtDJDdfzNsz79YwD2cyxqA2Wn99tZTbjC3tRfSiJpaoUNDTQHggVfcSW",
  "key19": "5kFNupsrQzmzKUbbSVuxEkn513RGfHFGDEetShEiWLDjFbXCpMwvu4V7bRSNSjdYJHbJbuEcZ2vDBE5adBvA569w",
  "key20": "2xuDNYakQj8BaAhUNYtnnMKYEFz1ZWfzYLXHD7Yhb5oq1Vg4JKCmYFgUyuhPfEXWA4ZH6cu113kXBYP4sbS1eEVJ",
  "key21": "23bDuMNDqW15NpgSSgxW5YbEVSr2LSrz6xi9AWDej2yhNwHe45sdSJMfKWv44Bxk6wcYrH3hmaQNFiutYRmUoizV",
  "key22": "5m8jM9pUiMM8sfa6Xyeaf1y6MxxYZmxWbU7onwwqNaWZA9dXifnrvu3AkxYp1EkSmggv8vagwcr5RmQrhgcDAMKr",
  "key23": "38dZCPgX91Fw6XDQpFAsgBkfht2XpY2hMZUSFNfX1vpEsYi4DCMtt1pcDY18NctWXMxqsqxyvLzSa6foZouxCSXw",
  "key24": "4Afxwr7k9bES9ikkm1QjByECNxeuvAdH9N2Ycy6bXaVfk5UimZFsNpsY5NfbhHwjFFZztqHj7yVX28WJqyDvMWBX",
  "key25": "XpWBpqmwCZXWD7M9iWkgNT55zpkzRaiqEzPYnToWXvUtpbrgrfCda4mr2to4aasQ3cY1J9SpYgq9h9HjeBQSrzv",
  "key26": "4gwh246Eevu3WxDBaayjZw5hcpnJAH5Rvn1w9J77wFSvUbMJwmjcvbpRrNuFv9R3dpzKYbEavUwRCufDFLXdp5UR",
  "key27": "2NiSXWpp7c7wJPBQfUtxJsvmZgKkqRN98waJAwwm43CK36PVvwgtqdu68cW9gUJue1Wv7jQkkguewpAiPkEceZ9Q",
  "key28": "2S3je54jhCEq1E7awfrZW68DsSVq11MDsHkeDw6WQ8suKLy6JiWbiWHovkk7KrfUvMqzFVrJCQuxjkypvK4vM5ag",
  "key29": "4FLuQt7iVsgGS8J3HDaqk2yxf1uDEdCkNEdXCSaJBzvWK8WS6DrgLM8yRo3BeiHKiT46BhiQrfnoW6Uwwdb7of4C",
  "key30": "HAf1i2p6dVWUGgk55txu7X4eC4rKo3S6nnAgxpEXQKof5kt9WBAaxo53fmBjbyASbCxAL3QkGJwgXoxSpgkVPh4"
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

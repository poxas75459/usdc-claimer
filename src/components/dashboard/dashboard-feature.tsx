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
    "58N2roHazH5wvfiDZ4a4gk9b31CV7TgmSehyjRxZQ2EEd7fsBSy2viNsswunev9ww3ibWxReuZoNEbMtheAYeSiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6V4bVM1G5PmZNJKr7KaZ6Mm8w3pG5RSc8B4Tx3KBmCVB4enf1tqz12kTheZxbe3WYvdnAi5DM3EAu2Pd5yBsvkW",
  "key1": "4MsYKfGr1BCYjqwj1wuDicguxb1aaA3pU5XzvFmbpLn9fqMGpkfcYy42avPv8S1THzySwmpXBTgHihHRroKxqCk7",
  "key2": "VHGWpnys8YyNas5o6UWmaxpuuMAowQv3HFHDaLSLz8yjNbV3mySgHGYERBf7E7qwPEnGPjm3c466AjZp6gpMHdq",
  "key3": "28K2uwUPjNPMhJARGExQkNc2uLSwjXRNjsrMZ83F9wfvSQmUKcZAZqo86iN7fqZuQrufYHVchZWJo9p3KALL31L2",
  "key4": "2vkasTwbK7aFZqseCBC2Zxkph7PaRQz6EmpwKXSocSzjZWMDUXXABkVX6929We8adN73WcYkuojhGM3b4C6x5zNN",
  "key5": "47CK716yEvYw3CBngfuuUp11JgPBjZgy6btGA3YLDWtzqMXf2MZTHgbz93Egm5UVbfgkwBtBoaRFaha4MZyvcFTG",
  "key6": "H18rEFhcddFTEzRk9MAMKokP1KaSYEoHEyPtt5hrrPsefKPUnRmFuFTahdvVHezRL9GrJAFZMqM5tVoKkSkzKEr",
  "key7": "p9AdXAxxjj2WiDWQAuE7eUDHFiku9m3gRwHPG7dZytJeFA6yavAK3Jahr83sth6hhbmAtoGtrmRBSxLwHcZDhBy",
  "key8": "3DHjH2CNeuF4ighuc7WUsisqLW23YfpivHoe73nsyNvBhRbbhXzviywpnruKGepD2aXtDkQs5drTvsXPEg5qp1xv",
  "key9": "2xxJqLFWnTugEzqGcTSiM4ahkU9TqpxP17ewFivuiK38VQBcPJ3ruCygeYc7tJsVJyw6z6iAwW7gEPpKejDNDP4k",
  "key10": "5JeJcaKAzidEmgonCkxFM1eLAgKVJSQ9D48h3R2mnRNkFXAe21561h3iwmueEsnW1qkijzimVrhT5CLkwrtXvAG7",
  "key11": "2HmYeML1zEeCCAG9mHqXNpzRbRGWVhsN6SfaC9JGpvRDx6pDXtgyxwEiGbHihJoYQzfBrCiBrFjv4DGYyr2BvdEi",
  "key12": "3CyS2zw6EVD1qV4TmCqxopDJ6nNcng89Jw3bVCVBX3RvEJMHz5hSBe7CP9KVdXqbDhwsu91d4ChiCaY2WiCa4VvR",
  "key13": "TSydMjFgjRJb1XDVdcZuA747hpJDH8XuqKzTLcYbRZWyCFqZKKLgBX44bAz9qMcMbbHwpKYPQFg52fgsNBJwL5V",
  "key14": "2rSKijKyz62zZ19oCUuTFfVBkrTyy6T5GfBop2xZCxmdjLoQGaBxB8ceWXE4YVCSVJ7XnqF52Y2J48bSuCPXLfFb",
  "key15": "3fRLQXtKP7Gn971t81Y7pXfQzFtsU2vjCAcwohQtG7chdYdBwtLaDDFazaDf2FgpqasYjbFLw1NRWkhAm29dnmau",
  "key16": "4iqnELS4D5i4ELNAkUmYuDjkeL5Z3BytcsUwLt4QhKP7WAcMs7N4ESqngrWwRCc8S1S1hDL7A4oSQETNESembJtJ",
  "key17": "3hDvedkpdojw9xbFfD3tAiJrmErgyTY4dcCLpezvDYWg4MzjgNDJBey2RdydjrmKdtMdUKY7Fjjo79DbCTaRPfnv",
  "key18": "4YNvJbWEVxcyGsXzWs37Q4ytBYFdmS2XcFVfvBNR7fYgGNCNSZZQy15V1WBjdT6pjWUWezjYSFwvuhxHJeKzziah",
  "key19": "a3vnwGCN5vNndipSheK4Ctuoqb1yNr477FKgPymRrS5Ncm3SiLsdpBDoAw9JrRcYeXHUztZBktdje8awxBShpts",
  "key20": "2xwcUZCZA8pg12zCV5k9nbHrxiZMPMVEgGBZs3rWgCc2grwPLwLezwm9Hp2uymK96RPpLzZpGZKt8NJU5aNEiSvK",
  "key21": "2hxFEDmTck1gfmW962ARkKfARFG5vVMYimaCjHNg1BNwz7sk9ZhFU9yhmph8ahvwKnTqdrYGAxgG5HEX7KUw547Q",
  "key22": "65Etyh5qDqztz5gQ4c6E4VZYGgJPqsEEmsnqfUViUjWTvEz6ee1akfffNQPLc9GSqtiz2Y61SD5WWXpeCYCM9N2z",
  "key23": "5bWuJr8uhqzffWLFuYd52Had26tfXkhHV4v3PhhoUNVrpToi1kq3Wyqki3bMv3f6mAqV8JnrX8gJZmruVR6q7VhE",
  "key24": "2k7djRNjQvJv9Rc3bn3xwh5CG9KSrqJJh6cNThw26KKPoj4KoCVPdzMNfqwKpKQhUDFXZeRHNspbSn1HqsQSXX9g",
  "key25": "4P6GNw1reqarn4zDiYQNyt7fXzm9C1qkuyda9TPZ2QaRsHrGM8DQ7jJL73DynWTPExDgtmKfihBShmV6oqDEuSYB",
  "key26": "4UCuHprRS5DnzZ152RSnqbjYWjnUUxUNYvr8y412gX6LkRVUBL9Hhj4VofPUwhXWjPYsAhfZdF4puachRkTeg68P",
  "key27": "DWbRuQoMNBpJ6J9yTRg7CSUE8W6Th9cVWfy35dU9hA8LHo6Kgxx4dZ7DyD6pDPbCSdnytAWQV1v2nhiUwhNVe4N",
  "key28": "VNGZWACKoxXLoU9ZhXh3NFrqjZyH645gK9RCHjXVVR6GtvzTnNXi9bcQyDPCMA7k8iDCzpwbtgqmDptcNpCiSaH",
  "key29": "3hgEfNP4th6REtqwiqf3yNPnvHMLqU8Huo8iwSTbewckWjs9NUW5LHRQSfSEzRh6AA8xGwCXb3XdTcb5vL8MYAro",
  "key30": "2phnuBNtvFLCrJNJsxStmKxvcfcgpDHcST94Yx8dFuwDFiZHhm3FB9LBCAHfLh46PVepeAob3DJ9D7n9KnJXEnc6",
  "key31": "3rf7BCC72RCDmoT72W2se3GBweCJ8FaKe8snJ7JMu5xAZfaRADw8Frb7pVs6BABK4yCATS3y2hi4ifgeSuXGojdS",
  "key32": "25rJrEUr6MkCrATsrkcBqGT4oavS8gNoFfmLmS6ShB6cQYBbCs9Q4uRx88cMaSrrWgfYDYpAwjmVH8v1tbEPMLa2",
  "key33": "ny7diQ9ASzyxTwjFmvHV6bCpeQ32x7CHF4fjMqjAWjGvP3aNG6nvfosXGKC64gFuxXDv38mqzsKUHd5snQqBVxW",
  "key34": "2R3GwoUMpv7nzvvtUj7pAcdgMEuDjT2XYwmmGNHoExewHGn1BtQu7gNQQ4Nx28pHM1sDGc9n91ZoRVbq1H3gg3Vp",
  "key35": "57XjowQaCmCcnrmgWAghtUDWFq7DLXRBNN9wvUTjrEzwbtUdrfaZxytkYxhNLtgaXGg2MZGCFQ8JPHQUSdXRPAGk",
  "key36": "4SySpkpeNeLuVjFzaFsNAZwMtsCE6eRA9Gs7hnhD6T3cnjiCyinY3vLQQz8MW3vRLGXdF1q4wMvMduJCm8WWKz75",
  "key37": "3CfPwc6c71xRx3874jJ1jGeJh1DMY1VuiDBvVShNNXyDpXD8MqBGho8qrMnnriVgAQz82ChTUfqjyVfWGuavLviE"
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

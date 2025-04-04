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
    "5Y2Gw5ADd5qHJbBLxAxtitKVNnuV4CFMtEKyNmMN1zRhN9ZmNenpEV8oE77xtpAxnteToWrTf8kvDb1KpVRRZzYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GmtvLkMQW6EaYo1CQQXMg1S58AL1qovjcG1QQrMAL93SLVFXiGMzuThSq75dy57GBX9dxKgsKjhQKtCrpYCMaR4",
  "key1": "2kZ95wHf8n7LrNSk6gNMYJdmiYPfwYGZsAPJkWwzkCJLcX3GzbyJEWh92ikTb29Yj9iBnYQMnM5x71D8sJrZFsMQ",
  "key2": "3Uo6WX2nGwKFB64f57JXd1m6TGCGqFJ2U89fe88SgTaiE5kUqNZY87oBVXhUA8Ug4HzvbGmF6VHAtnYwAuyhRmUj",
  "key3": "4o6oZaBY4Je6bG4w9KSkbkBS1ERQUrnCyep4t5ua5VpTX86hrJ9fN7GNrpCa1ZMcFQsMxMTJnRooXzoTey8hJ7EJ",
  "key4": "5UQtwFSMRXpPBtoCb9MkhwGUEF3hjeFDiPo1uHPhpcZWWdsuHdjTjDzFP1NsVgM333ZP2ZDeD6BoFgwVhwqx2sLn",
  "key5": "4g4kXEhc7sijDmQwfM4C781NoGgk6iTgguvWNEeWp1KexZZJiwYHXtMzrR9fKCWusz7wVDq5EXUnL7mCg4Zfom1S",
  "key6": "KSEqwzf3rj3mKhqoqsHou9KeS8gSL7xTmQzmMYbtZ5VXngZc33DpMTmGN8SWie9muLBSRD99yb8wM1mohR7gkQH",
  "key7": "2cgdnoNmdn4ZPET8936fQqoopu2TAcMjSK7cUyCKnAdTt2p3cA3DsmzxK2kLobqnEvm2WhU99JsKMo55cf5B5r4F",
  "key8": "2xxUmGhHYVzYitMsyuBcVBtp12bzds1popWDVp5jQe6EPCDHyhdSC7TmBXbhRb4ooQpqQLwb7J3rXjFrHpjjUKu5",
  "key9": "5eZhMCwAwQoZLzyQe6yP2r31xA5b9Lipf5i2bBWFySoNaHNHHm2rV6dhCBZoCDuCVFHAngDdFb1qHsWfYbWEeNoK",
  "key10": "au1KjrsstuxVyj7bNtnTtz7KjTcWiSyZamA4WiYgyhraua8WhVx8STnnKntv6XEjWn1nEY66NnWr9KjheGJx9bf",
  "key11": "5KcWcca2s1qYfKem6aUdcQ76hHuW6iuGLG7bWPnruRuwpn7UFpEJ4qERFfTKp7s3hZhNnVXpcV59WW2SWv3GcucF",
  "key12": "43n2T9N2BXLovifeRdxdbEhK3ymgV161HQAEZMN6qozc7aYxRJdQd9PBv1ebXTxZS8i8GMho53Td9otJKKavy3rP",
  "key13": "4LT6sQBzXynosSSnmFauUAP1dQttAZf1zVgzjxDe65F8NPb8JJApfLY6TZGRQdEdq7kSCL6LGB9RjseLQWwCMxxv",
  "key14": "4w9SXnAJo3CZzGZM7h9vxL82W86BHif33VzqSzg2K2kfXxFttYN4nB7usrCTmisgwYY5q9vCWDYJNQSybodfZdtJ",
  "key15": "Dmsv1LeuZK245zM2uJXALWCeLckmoMsyGamv7NXw7cA49rJ6pdtuazyoDgyospcnHjBk41myV46p8mdceXd6NM4",
  "key16": "2jWtw2CmAhbdhcG42hLSpp16TvwYBbdGXQEuxc1NSgrdUPLzDs95FMbFSsgUuY822bdBe7zdJsSs7MucsNqrGdfj",
  "key17": "28tN5pHpg1BhU8xztf17mA3sJCwdzPqima5wRAQs1MhKbkSi3RrzzkBXssfRCmKtc4CGeRRDP9rvFPKHiQ9JfbRV",
  "key18": "3GwcXwkdqvqkUFycE2SFzvpUuTizjqBRefxW4JqvQzVoSoDTGVAh9neVdj5x1ReP3YyvEtxYxB3zYxoTPj4F7NFk",
  "key19": "2AP9uJ44Hn3Ndng8z427MVXp9S8TCb1js8rvAYS8gzabK2pf7VJ5PPfnUP8eycrzYpCod7JY1AM7TNy2CKdgGkgE",
  "key20": "5QZRaCDfmceXLCAFBgS7NfsBon9ZkRfkP8y6dvfxdpLdsGqXDzXiS5krMBAWZJdBa34oabS3f8Menmk7atZqH6jA",
  "key21": "2yNuXx2WaxUZPmouMMqjvsT5tTRtspR7pHbRLrerg6wc46bUnkCkQR4j1tKQAQohJ47nDq5tG8CsSS45ETcifC52",
  "key22": "5mmkM3xse5PQz7BLQHLacp5gvN3BZEUaQhRMjom7aPTHzqtNFYdsHxbtLewAKdRQyRzvNUibqrJc6UPGHbQSnMvD",
  "key23": "264Mtu8fWK4AHNuUgCuWUKDjPnppGtH3zVtkZMXuspLhimhsPXJYAEryVXfXrZPB7sVEGQBLntMt4ToWxWtYRhca",
  "key24": "4v8XfGyjVxQFEBDg4gqmTf1RbHDUjbyGrUNJweLBvJ8bBYfQPemLrbZ56Jkv5ZU7jFiXRbrjkL824FeAs3nLwqTE",
  "key25": "3uqXaf4ZUddFiWKQZWTRDxJXcGmbMhj72AyzXHVFdHrsqCywySwVhvGYhVxyMEZv66pXppxGhaLHVBTzCXwv7Myc",
  "key26": "2u4VRnT8NzSo8twcqwSAdA8qbWuU8WngUV7iqaSAErFBcnASLejTmwxHcSYVM6TMV2jgHE7eRwwoLxaka5dtsY53",
  "key27": "yNjiq1uVeJPsYDkTSLMWbwtzGmVTgYmeGsjUxJcqfKUnMSw7R1eNpjpiESC6eroHwqvi56c19yUH2ybSd2z9eSq",
  "key28": "5fdZhzM2WpRFt4YpKz14KMh7FKbeyJLvoEAxEL9JsadMx6VwVPidoBN27Lc2BWPF1adY6LjPRFgg8qi7KAVAWDot",
  "key29": "E9wTFasb5n2f4S3JNF1a2QRkJZPrwznb9xtjQkRJZ117AGfuxNLVxrjzXDPoS3hvLM6fd3KrQ7TVfdGgbAHddAH",
  "key30": "Tr74A9rK9c4PsNY9yC1AJ6fgBgSDenMFVZBrEUUoHGqthgkYdnadqfvPjVk8LSkRQUyHsFna4XXpGJ6vmQqo6Fw",
  "key31": "H1ccG8UnQRnTbWE3LcoVsuadh7ty4hFsNoTFCX7YzrAAzWmwhaZ6UAMEJohmoD7GnHxhpjAUtHN7yRbd9UBULZt",
  "key32": "25K2m9pw9CsQQ71rKiCxAtj7TuBTsPE5pknXoePMsVtkStHWSpByHnB94XXigiU7pxBj8Ru8zes6aSXEsSmtRSbx",
  "key33": "5eQBG87xXCbTBc7D28bQbYFjoMUR3LGqzgcok37gJdEZUaigeVSXyxmzEFZPkV1iexiLm6Pp2RmhyNKJiygF2v6h",
  "key34": "5v6e22YpTGQHGPzYdXEaV8FvvgNmQbF79P7j1pM2f8fdAyK885YExsKQyC4ydwnJ28Fkef1fBGWpgrauvY8cPDZo",
  "key35": "5Qk8s7ykcCJCpd1xdaFExTn5dvZLWN4qXjkswtF4nnTNQGdB8E13C8jJtL4VSiwdeeXtLGQKstcHC1RzEnVmZhBz"
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

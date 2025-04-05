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
    "2t9wifaRP1ZviqGcS3kWT1Ckv6CBdaFRotc4jhrJF82qXFZnJbxKZBnztuVVyGWegSGguSCeRK7M4zDv3WMiYTT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDuYiWBtkr3q8vCfVykwczZcCFcmMBZPrTjU5P6gi8qW4AAN8dcEP5TtdNAVYvDs5rNSRiiHnzZ4kGA4G1udmB1",
  "key1": "51RfZosonDkcZsAiYCRzwadT2GQcs69ArZ6cmduhwFGwa7erogbbh27rLKeEYY57DiGjZnbFzXoneTgs7AxXjSGK",
  "key2": "UxVVMX6LepJUhmiXR5HnTgSwue5ocxBK3cS24QeW33Gn2v3JNqHLM7QZMNHPv4yLyMCbp1ERkkaQxEJjiGxhHhE",
  "key3": "4XQT1jvgWudN7pWTyoj9NsYpi4A55j9oyCQN8tpZ1CR9kKJHiVuVX1kTfY51UDMQWdtNkczoayTwALmgbk9C3y1p",
  "key4": "43efwzFAZFMQvZebPVsZsm9Fhb6HKWJxayoEu3ezdKxwJ5B1HJDUSE3gptJ6wCwyBv1m2pgsYPidTtE3Vddq5yjs",
  "key5": "4Asyvcd6zQJeAJsUCkH1BcLGAJgo9JfiCs3sej7qjjs7bSQZRDrMP3qSm82oGAsZN1diC5bMJPmUVfd1NWFfK1Ct",
  "key6": "2LWpgtHzzZvyXg9tZ8ueJKBkZbbpLWcagmzs7feuW6kHAWrUmL1hZKXNrJdfbKb31fFkvhNCCJbX77p5vmgjFDdG",
  "key7": "4uekNtMZgBCXaiVZ8e51ZpM57GaiCSsa8ZwNRp7np4dF71icHzVK1oQtkuUsd82K7FKnnQvVrDmmNHTiA2GYsR64",
  "key8": "5S8bM9YXVuTUsda1D41vgst3s6dP9JBVEp7ZPA44iMUdJeCJ2pJ2EfRaRyzwEpzG1RBezKj4Us7uxw7rWPQBBD6v",
  "key9": "2v6SX5G5exj9FZt2Mr5XrakSw6pmX4RWMAwtum3rdUCVQMcuBpaSABWiYDQwLDPA38Pnw9x8cr6PwBSou8Wdk7um",
  "key10": "4YmuKmVgyxtSmSqR4onHQYYFwGGKPfnusjwGUFyR2cENge1hWKA4oME9sjMe8Z9mfPpqup3izXMQcQZ8DXVyNqqa",
  "key11": "65kK5ZgutLW5nuMshymiZTT8GGd7GVLxh6NQBT4qsMba3vRGHQQk3pYL2L99Kh7ArAFPgN4iWKGe2eNU5usoi7ER",
  "key12": "rJWbfQA1Y7syGg7FJXSeF8oHbY7npgNg2WRz4xcEE8b4evHtQ5LVQ5nVtaRBGCBJZQgeqzyTFHVYSjZoF5MFRJr",
  "key13": "4gZLgnA1nAN5NYYcz9d8BQVQ9XsaZfE3ZhFxJwy6aYJfTPP8LseXKD8WrmHRwKoj92TBqHVKYWHkDip7HvBxC7nL",
  "key14": "2PuYLkqD3nUGAqPSLNUygT1FmKXruM7ZmjUicsqogYghafY4GwVecYnFpNcGA5i3FaU4g9BfcyZia4rb9jps1RFv",
  "key15": "3ZrcdumcpmB2BAtbzV5uLQVWnGkPA8X2YCpvBXNkxWwNwRoYEKMt35YCh3vHwQMKTajkXR6XxY9ntb5MsNGyT9am",
  "key16": "3QLcHyvT8aHFnMqcxYsHrsjVE1KBShUPyM7Q44EKpY8pTUvpDpBLhWrRNtwbF42AYJBohWDZukpbw3dskAYMx5k3",
  "key17": "5hcFBXVnmYFawzSjVcPR34MkeynbDPjFn6zrcsvqKf7acbn91aznp78cmp61TCBGgbzDNwFLkBoZ56GWR8HPyg8h",
  "key18": "3qJbC1WAmw2afWmdb6EbmuA2MiPDDCAQomNJ6nXfxFA1todbC5Wpsttiowbs6mL3JQunX21EbBvuUgSRiVMJp86d",
  "key19": "5bJat3se9BuREqRAWDkyfHQW1qkcJ7uuLeSnxgBzkbvooYyS4rwBJTRSU7JnE6gmuxfWJAZMCsg2VDhLZYwxSL52",
  "key20": "4J9UAU5bHFDdzuBF5ia5TnbCJPg8cPW1xyba2Pxktusif6tyLxQuAZ2EiqtYhZfkX8f5DxoLi4NZUTLa588rKhaN",
  "key21": "2EqJ9NGpUZKi3DK33rbLkGbPWdtUBvRVWVm8c59ermMSS26ZpGJBwphA8ehdw8wx6V6i4gmxLkunUCErEhd1vahU",
  "key22": "2wCoXcRPS5S4pKJqjsEdA6s7vP54pUGh9NPgbAnekc1rNMFJrmu56jxBeTwaaReSA7W3xCQ8XQq3AowXvqB1SNHf",
  "key23": "2GRmtQvQx39JL7KAePfz9tsYCidzRtscxfW1qqtqWvHqgUuftUo4dAxR8L1McnniyL9vRir71XGVTyyDzPXBpAfE",
  "key24": "3nysXcbtBmvEYNFdV9S16XGFBDDi6hwDL1QUH3ifbxbynLZ239jNTNMk1QEUp42hMsQGoGKyVRmWXdpTurf1BzhL",
  "key25": "65m1erFkxEqKufKPFR3wqo3reAWUiudWF93eeRQRv9fQMVMzSeF9J21j2KNwoPLbffUkY2SDZP4keyhRNhmuYaSP",
  "key26": "269rDPprUJekmEYymuhQH6qHySowX6jvckjC7pZSGooRCh6XgWdLsPXxys9EL9wueHEVyNCKsN9xEcXcMR2x4C2P"
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

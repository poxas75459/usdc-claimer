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
    "3i8dMyzkBkHjC2PVRd4JZeeB3GzwovY2HayH8r5uAQK1vsmHcJ6sMjZc9Nw3Xh3c2HCPVXf6gT3DfYoKgvq9vdi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tc1DvNMuou4HFNqvT2dxQqLnBHvQVFhXwmnjfoy6i2bzfxzddqZsCR3oEvrzEskARJYvr2SQCbFjHkGhVg2TPm2",
  "key1": "5K74ZSDG4TDWWrApLAiaNFirKxuNgcug6Xr7HBRM92PEYj2n3xqx5tQpz1b9pMjDMfBDJDEYxumRgD1EDckeNxjm",
  "key2": "5oE7sZJvkCEHbaQsXp3BjjZ33tHbwR69xq2PiQm7EomqetpuMbpPxYj6EHCwWjJhFaHuE1gvFLfMXCBusMR2bQQn",
  "key3": "oTHDa8v1AXTd1C362enZeKNJQqQ3wBFnNAuiTNjMRcYdeajkaa8SfDmFN1f3xY4dBJLCXagjdWM4gJoYF9ZruRw",
  "key4": "4KNKqCaM61uAZsf7JdA8kejss1vo999qzRmMEC8h4ZuEvDWY6THJQFvq35dH2jFdPHjeQAxoVnUDoX9QVpxsKaKH",
  "key5": "4AB3LPos18N8x18qAKQ8TTktoWwgcA1EUHAaWYmVPvSqeDQdJYoawE2yuwztyzGSSZoYxJWAX68wMZGteno9Gwg4",
  "key6": "2kqXGKbukaCL6i29B4Eok9oxr5fQDa7CjXZLf2C8JbCRZ4abKApwsUGJR7GSgE9YRJJhCzv95siBXZsr86NEUDVT",
  "key7": "3vQiiZbTiCJgpzLw5g4Z7HgQxmLPobt6nHth4ZDLoJ2p1bPttNeMNnHPv2PHDMbJCiMyFYBGkCKs1ogeBP41eZAi",
  "key8": "5B9G22aZRm591RF5rAh5yaYUckYFQdGULeXRoQYAbVzmxuJoYrxhFQSTPTkojBuav4Wcf3VaCD1jynTrUWC4WRxu",
  "key9": "mCDobnp2pRz81f2upq791zPhkF732tAih6EETs5vwF8nKWtYiL9tFYXe9f4qNNRcZFW9vXRBmNEgFrP4rv6aaFA",
  "key10": "3uC2PNT3RfpmzcjoEuRMpwASdyUg9nZ4gVXeEuCU8zdRp5zysmkxNCNRZAhrpSjC78oLbybLFZuLq1SBhUMq6omc",
  "key11": "4f1kw4ev15DEz8WjXkrAsXD1emZzQB9y2HoeJVyVEVtM9ftACEHkvQRacaH4aKfvnRXuC1zETu3oz9TgpsvPYgmz",
  "key12": "4vE8KiZb7Tsy67geN85Uz7JXtrzNpVQBAEurS2kQjevtRsqqU63xMooMLZDvf14cTyg2bRLeCdMLNH9ndjSb1mDT",
  "key13": "2feqd9J1Th9GW7oiEogoyBi79Eb4truQbCSqYmecWByVhPgR6aPqrykE2WdCbFLzBk6agEQKGw9TBzqz2ENHGM3y",
  "key14": "eLz99BkWUTZFTFMVX75VLg8rV68oVTkDJiDV6skfgD6NFb32o4ni4HSGfdnvACXA5M5MtFr96DxPJ6vq4j3B4SE",
  "key15": "2eKYiqT3jCDJRcH3mGtByt8jHb48pK4X11oFeSXjRcDaxMwnHgQXCkWU5Fyds2bC7x8GBnN535suYQf4CvmGo7z3",
  "key16": "M4jtMuhoh2eckTcJDQwuULMCkKr2ZZk987LnLyGwgARVkzHji7fs8wPU8V8LRZMLAzbKNqXEmo8AoWrAg3Rz6ZU",
  "key17": "GJ1dXZTBHiMTLjzgFHqKDWpTZht9t8kNo7dsazYRBt4jE8Hvw1UWVf3WBM51y1wqJUWNkJEDrwLFdASE7wdpbhx",
  "key18": "zJ8rcEofxbFjqm7AiazgqPmnw1AwMYNzUHQCiALzbss2kszdAEqRNE6fJsjCh7S6EdaReCkCb8bs8oYG2BXosCQ",
  "key19": "3swHnDDQHjGHgMth7FHZB1y62LAx2Eag7GWynrMAVhSHAEewrGx6D5mbpBBVegZDhPDXZB1FQ5CxaYnscsHACphq",
  "key20": "v6JqWrVRxB4QXmydVbY6SMXksgjnBLTebE4rPptPmJjrz5KMWjfqZV1r4rvtad6crSuUPjJHTQLPRS4EsgiJZFU",
  "key21": "5UxSFewWzxsJzAJXyqF6hcUjAwe8edRWiASakqmNUoXjBKShf2o5bYRDQJx5ETCvAiJQbmu5LFGuZvnVSbHnDn8Q",
  "key22": "5QXmrB7ZdJSSZB1QTFsDDFytZuq6QAg2aqzW5kKY4ax1Hoq2CBiReaFjhnoFJSbsJDJNUQxMRc5Y8BRstK3WJ5dT",
  "key23": "5GhbEHXPeTgwYLjUx1wSo4CgbVi7nGMCk7Qr28BUngDnbtjALEcQPEKhhxq1imK1MsfSkLfGdcHJJ9SyUqYyfg3m",
  "key24": "EhVUv8rvfbAjkiYXdEBNc6nX1hhAuimyhRZWSTmjU6NKMo3cztXU86cARZrs7QbtQY2jQmEMWkss1DBDHtFhHDc",
  "key25": "4TkW8uGSpJLsnzAuZj6snDBjc7yoruLDMf4iJSzRxMpCmEzGXuaeCz9bCcHiyfwRSgsnRLDwqhd1wkJFN3hzNYVR",
  "key26": "KXwCWXVkLj5158E5uMUAzzjjEKf5ivXruyzU3bBh4m5wcSnvg3WSggGVXVwZzjbTySEECWZnc11pQWFDQXFjE6D",
  "key27": "3gaXvd2m6kf1onQ1TV4s1WgNE8wGtxWR5y5bjKTcvpqkbTEQrM4EnFkyiwU13BpiVCBpFT2Fd1FnqJgVRyD4tgkJ"
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

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
    "2BTLQ6u44kCLq8nE4nm6tm6QAbEsFyvuyLNp6vPJGo8Fc6AVoktr3pLCYrRUPyo1nEqzgiiwoDeXHZmuHohgtB5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46XmPnG2N9gVJ3XPuTKdVoUDYkChxTWyESmpwSiYfV35gwEozzKgCCFofkB8z9jMjU3uaWxPDiAuVKc9F2zLQtTg",
  "key1": "3xYkwpm6jtvKWshFrfeipyApagdCjUU8aX6qFtYpyMHvN2vYSgzeThMPF1EP6FAverHfHdJU4fd1hSVJ1vnwkfHg",
  "key2": "4NqEA2WyiHkAAJJPEVBsNmPAPDsze8PECRjQUigWic6jHG9PpUBdahxoMvsFBFdEznXVEW6WtmBdU8xoxpLj2Zje",
  "key3": "4cQMfnoXAjKyjeXNEDUo9NaGic3S52wuHtTtP5HxX2tueUwRegh9LX9XsLWHUEwwXKJxBzZ4Wp29mdgVHWbfPuQn",
  "key4": "2seTko3cwzTsHKXciiVt16nNB4bEt49PkC2a9yBfqhGwLWjeSFHgX3A9YfaRoVAA3bEVngBH9zgoU6VVtfYBgbXL",
  "key5": "2Qo138USgp7cXgLvNoKHL3Eg498FQu9mYyuoR8Fu97acb8hywdoqPd4xbrrxPKH2jLs7QYp9SELgJWEi1wacw23m",
  "key6": "3wgQyZx4tGRHXC3mtE3XFqGUZmMP1fJapXv1Md73HAhYZgBWDEWVhyixHbuJFaooKCQUtTNH7pnoS5RJHK4iaVTY",
  "key7": "59KcYA15DADJSsQFMC8p35snVUnKJMZrJTrbhwAtVAybs5YLE5VBADUpkvcohTPXhfkLenP79C7ty1WbxctiMYvy",
  "key8": "CbmG5SaM3zTDq56ak5QG6bvx85PvTQaCumjhzyW2QGCUTQ4ifKDiTnbMa4wzkgSGEVZ644dCb4zvTBPoozVWGoR",
  "key9": "fUC3J6WUoQSPznZhqMEFE7YEAvFNbPbQ6wXtuCt3TKfxsLsgcNdQANw2obJWak9d1wN9NDzt9EbwhLcDuuUxTxS",
  "key10": "4PazoqfLC1VAubVrNcAckBmKJ3guNk9xcvMmQbGkVUgqkbQEbFHok2upLHbS98NXQHSxy9VoavQ2b1xYYkrYgRoL",
  "key11": "5bwQiWTAkG2wcE8oFqfwkTsEWV9A9P3TivgLZnwcB6DrEN6ck1Cq4cWCHqfkhxYrEcLn86TRVpYSSdDMVTh9WBrv",
  "key12": "5Ahcbv3FzMBdq6usrkYqJh2bSPWLmSXo5VZfZXZ9Kx2CXrqGo1zTNA9qXaiZVHfSk2Y4krFkR71CQ1fJfAvGTHH5",
  "key13": "4ZaFT5Gs4hoogHwMYwcHB7skMYGr3xkhVz7mEhHCLTVTDTi8QV9ThapFYnjNigzVDGzvQnXr7VHjLTPDLBTEg4AV",
  "key14": "3vsp22bAEYZxahrvenGYgUbd5Xp1rq9n87VsQAa8vACf5ECtgHTU8WTXcw9oWtwKsKMxbSyZuJ1jF1N8ovpN8E7i",
  "key15": "38TwhfsqreXSPHh8dpE5pVQkhhXNGC4BWqKv3jnweKirViiCdEp5j1m41acqjuMMZUCQVySVbHHtrtmGrUHd2Xhe",
  "key16": "RMAp2i9kmx37oeur9sWd2hCugXpDZx68CCRey1U8JBv24vq5CSRWDgof8oDhC6wB8PcGu4J8WfbW7DMbfuS3wNR",
  "key17": "fcE2itbEwz5tZoGZpukiq9KCtFEQdQANYBD3UFU4iJSFDg4XSiDLJNF6YP5VSPTmsrjKiCJ2n5bvQSdj4i3had8",
  "key18": "cErCgrLReoecBUJZzDp7GN9VweUepXuijupBafDJibhRCLbErGwNWnBdkrksR3gP5E8uG7qBkvpCEgotz17K779",
  "key19": "tnhbbWoqgLrFi8ddVcGcZgJEZtdEaZ4JibWzFjibZTcjZqotyWvJ7LJS6M1gnEys51m4Wgrjcy4Pe4QTRGnVzpD",
  "key20": "7dbR2h25akYpPYiMHgY3NK3zq6zQm5mPSVLmwhRLbGfHtEJ2or8nvDpTh6k9ZFuKsMsqz4PPhxgfrVPwZhJ9B8J",
  "key21": "5TCPmPGrndsbbueTsSRhXebZ5A7WRTpYBwjv7WS7ak8mCF9VE3PU83FreaEwTpgp7yemwRTpFQMxRaq4Hkc21Wxw",
  "key22": "rY3WbX3jMydr7NBxa24kfdFfuCtLY4XicfCKFbUPEvWtcR6J2XzuQofrz5mJ8TipzXvrN4YCpR4GUUKPgYUF2Up",
  "key23": "535DSDtotFYEQny1BCYfMhiQHvpqKhj6T4NycmE6F1vcx72d7dj6WQjYkC9YPzYnF9TJubcbxfRm93oo52p67uRT",
  "key24": "2zjkhu9dj4tUwDBQAET7vHwkMaPRznjVbfuPhoKSARQUrC7hnLPAwEmwku8ugxRT2ciTkfWe5uiQgXKvZdMAJqRV",
  "key25": "4u5Lw16r23L62xtvs9uwpYSg8hiAmwK7ukoRxPYByMfHzZKpbgTysZj9PuMZAY45hhVdE4mg8sFovcVbitzs4kYZ",
  "key26": "F4yjTAV3fZE7tjHYufdgA2CyMKaEP3hjhEyCUZi7prZZKhvRE9ZyQAZ1pBPFXWKFoAQv2ktf5sK8djqfUeTiBeQ",
  "key27": "4DDY6hf4eQCr9z2PpJK5gQUU6GMjZ5XTKS7tEwgV169tZLAVUm8BYxTXKaX3ENHCnknJX3u5zDLLb1zycXyK67Wb",
  "key28": "dVnBAbWCiAHcG3hQAdksy2Z51NVw4mnQYdHmthVUb1ZG4kC5ckdk6BAMbRkNoAAkzLWgYj3AmLeSJvYgLYUPYJQ"
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

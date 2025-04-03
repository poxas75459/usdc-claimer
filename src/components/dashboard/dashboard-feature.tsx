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
    "2aqAnz9J4KQEy8iXEXzaAYJzkKxi4EBG3Kc8dj9FB3EUG6St3JWM7bMGvinDEu2rGbxx7GNgQvMeEvnZxLgxjTym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wvvnM4akv7qQMj1ULxc3RN4smn8hdjdKPFqp3wT8Zz7cDqE7MBfTYAy4cKFNXztYFZb36hA2RBPk9qQDbs3Sd3t",
  "key1": "WguEQF9ectUYwrbrycuesKe3xX1vxxw63HNPhCthM6spdi7KvvcuUzJp4rAKNbJV8VfsrvttjtxBuKhY2dtZQX8",
  "key2": "4yrm7YzsNRPP5gtJxDCWPArk6sPnJo1maNXC38ukvwy9rMXCGCYYem2KbQfgrS5BsZcEuMuS2nzkEC52r73dHzmj",
  "key3": "3CkJhtPpUABPVvvuWH18zmej22iTeHp3wcQtJqDYLhxCuTvtcJRVeaUF8VjdCsmZ7dXDxrb4ih78NLURAzXgyYG",
  "key4": "R7rDanNWM4hqM1dg9kN6r6bMhQdWiKjjUWrLRtoFJVzQxXAAHvNpDZatJkhyYNjjRmwW7SmW8xjKmQGph9eQigz",
  "key5": "55xEFi2sneakMTUa6uKCFj7ma6EGev517fxReoKAgPuNT1BFHU34wXgrTxbSaU57QgdT1AngwdtxLD2h955r78H9",
  "key6": "4f7tCtkC71VbNVAGe4mec9FFRM7ZoZDupFAcVA4MPZ8sMwbVhxpYYshW4y4zowH1UiEVSwjYpPNUczcjy2fiFgK3",
  "key7": "hUZMxj4FdwmbSBMQTcK6X4rV4YWu8cAsx3eSNg3XAm3aTkrnQ5WKc6M8yVd6X9ptMaG8agLciPW3ihtWmWAjkPe",
  "key8": "4njxtBiYotVN3hNj9CdiBz4EKW7GGVcoYsuiLmK9Rf8RvjWwM1QgenjVprqvMXFbKQLfc6jtYCdVDFEHu9qw9cj3",
  "key9": "5x6RKiYqZLSMLh89vueDsosfnuRRR9dqtSydRHGktbUUBGFCDn6XJc5Cn2yzy5Ez9SPkpLdQGsyzFcUMNykwUVvB",
  "key10": "5ctdB2XEMnhWTk1ZmL65sCze1N5q9SneqnDqjvBCs6Q39ybntG9bcfKFAWgUqutnM39RgKRqPvLiAcyfnmnFeXQu",
  "key11": "5StMiUuUNkXeeR28uTcfZzBDEkBnZWTrhTbHCV71FL7HU7sJQ21kmFmG1zk4kboRhjyBpk79dMXB6eTgRmh4jVYB",
  "key12": "2aia5KBtyQiaKXk4jC8KEvHenwTMkkL9FSi86comdyB2ysJiJW4zuwRG7ATCo3ZrWeQxjC7mrDcJ1agXeXL4Gzem",
  "key13": "21mdnHGNWXJTeD9MBBWpf1wr4d7vwu5YkewEV4bDhcs9r6S9J3DLbFEKgKp4RFo9zozavMet537NbqgBU1rK4xNW",
  "key14": "3iTYhNNWUDcKbPcXPCtfk2uA3chd8psiBpbp5kTCTmCXjhdU82vnR4kQS1GyNNCNpaFLp7yRF2GEFQz9J6n6f4J5",
  "key15": "4xRjvLLFk7abDpfLSqywmkdSoZziNDDCcKohAV5TXCDf7qMLcucrijPLFt5EdELdYCC76BY2WFCEFQobcZTSD64L",
  "key16": "5LLz4DoyZkdSgJbHDi81fSCbmww7BAaN8P77ANGRnHPaFJYzpn9nv2G9jo9naEvoGnWhtuqYF6fQSqtqMCgA1bSm",
  "key17": "VxwCHyv1z3dLA21dXRHaQDC9fwNztTsSuasZDr5be2yuxwUrqvziLL3TBhf673isJZ27H7DnFmxYyN61kxVqTex",
  "key18": "4JrExLmiLw4sV8qcG54ETiFpGfNwHvfAyuT1njMhFvtNZSu3w9ReLQ9owxPekiGPbZDPsq4TnEj1oDCe3SXihsad",
  "key19": "5kmBXR1TAitvvxPrRDHXd9uHCh2dXEAHcHTh9nzyo39Ht8vrr6qadzjvNc3KYyCV4z8fTvAAvyK2z9sHMnhEG6wW",
  "key20": "63D3Zzs4EChwALyc6BKxfEQYbiSTyJEDPSsE5oFfR5sgS1wSkTTb1NW63zubWzLyD7XTbzKGJ72gzZLtzqNnGNec",
  "key21": "4guYihAG8jv3TwCfp4HHGphxHvTQqQTx9BWRmVMFyPR6BMkaBHr7DwVaufkLCj8NyA33AZQQqcvieQbseqYVN3D7",
  "key22": "2vZ7fpMo8yA31Retb5dxMPLc9TTzpVuWR6ZxEdMHLe3VnosFyG1HB6Q4S2L6oC2dJVsbvSmwFc4WJNxbu54VBy4a",
  "key23": "2QV1EYjVzEQZKBCKYGYZWf5maydmzBX5qDHhEGoUNVox5YwjrfxiFRTyEdwJRXA78Eh5y7iMdtuxBWFrNk7mDC16",
  "key24": "5Bo6cWpy6GKU17UvFT1aJPCXgeCgGswkuvLKEo3iyV9cW1StZWVcpVN3xfLBY41yCRPXhr9aLDNhQVcvxk83V9mi",
  "key25": "55Uo8263V9cyL4YNkzEAkEAnuxS4Ya26TPZPDqpvnB8cqHxhsrHawBTUrwDbbrMBHuaJgstchv9DoweQuDcaw28r",
  "key26": "TXZAnavBHQFAfgYC3txMv5eweMBFZyWBaPDm2bCyY2yc6VUwSTqyLt8wcsmzjVy2vXjUuH2iPWGgrpSjP1vvBE9",
  "key27": "fFauQd5ZtDZuhphste793jvMm5YSKVQWffzs75joHZkbpuKAXETfNya9J83FQzSdt85aumjsPzzcayhDkcuU8Zt",
  "key28": "4mnvhQbuW2DwQL27gvuNT6nGcWcv9U4TVqACtn2KLCXGTv7mVCHZS6TMQg5pn4drVtSfrfrxEtiKZWnmu9rw8DYg",
  "key29": "4pGXtkFVqC97eaQigxSfp69gfJ7ShRRKSVnYgyB8ALAD45MKjKvdEuF8wM2cP2kZEqnyoPwejtP3mz4ca6h2UHtq",
  "key30": "22x8oVAdYXUmuVenM6o4sHPhcwo359wyZNAEZ1n6ZCEDMCJTCCBj5h99pZFxzg6dU47o4rybx3Mj9gcASVi11NvZ"
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

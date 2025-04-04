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
    "wQjJL6BRjbsjzF9gastwwjVcJkyVdYymPGaQ5kyRSea2jtX9uT4CJo7UZCcEaaqtYbBipwJnRLzNuSCdFJWr9TZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VxpN5cpW1TfbxH5UAbJ9ZQKZCv5e5kRX7aiYNdNfMtfSNrvDSzXmU6VuYhNpsGDTRbYFqDK9vZKg3Cecy8Grvf9",
  "key1": "2yogxotri9At8b2cne2j4gSUCka6u9GD4w7mgGj6cHw8geiR44ich5G1KFSo66suZ73tt9zbdW4e5zjQbstanBUN",
  "key2": "U2skGB9QYXfYCojYcqwtrAw6QzY5CbgXRorNv1vhUNuoN37EqE3BMYaVENuiVSFMcoVEJEYkurn2XtJ19vNBTH5",
  "key3": "4pfi8XP1dR5N6pTdag4fxsvMVkBJaai2kGk3tDGqTEi13qNzpmfkKj4U7GiqkfEMZdao2uzSwvovRnbDNCZVTv3b",
  "key4": "5gzX6AAQqt8DwLWY9uArMDoxuaiVgMbN97i22qrmvbM74zuKGFi3Mwm8yaKWigySW5WxWosEX4UPPqBaBixyaiQu",
  "key5": "4s41k92FoEQdoFWWL9n4S9TLW774VQD3HmByttwBN7Eg1QFYT2bj6AwUGATY4pXv5PxvyxZCDemPxeXPN8Yetq77",
  "key6": "4Job1FQbwKcJoAvponzWkx4qqedmXVeEGDyHMQHFTzSoQyUixUwGTniCdbgztZFxw6aoMmKDiLKGpMTA3FVroFcJ",
  "key7": "2war1peaiNqxk5gU7rXptTWMoSmbKEFWJ6fxuM7RwTE51ZM5ctA4BHCH2vmhuBF9vwTCwDFFBagvfqt7cG77AcVr",
  "key8": "52Kg7tu2P76vtWt9hii7mqNR6CVNQFqs3dP1RJ82nFLzfszxceVsEsHJPWUtN8eBdCz3vdauzB9KQD7jkjnax8UD",
  "key9": "2QJnBbU1zUqyoeZQrWfyPfXNRfR1RsKeCGJagEn1tETipKQuLhiGd8nWWguvYAuvbCHTmBoWTYha1swLYtJ3jeAT",
  "key10": "2q7FkDvKizBF1UG9jzo8v15f5VaHRHfH6kw7FaA8UjYzqS3E4Uq5C9unU1HtDWifXnXzCVixdfuWVQYebDPa5b8B",
  "key11": "2uwibgrYQ7KG8Yw8WA2xdAxbwL1PpQ3nN7Kr8DKXBEG2xnFBhehCEBEGTKEXXAteXXjCGdwBCnyyS7krJyfHq15S",
  "key12": "4Xg8DgSxnsk2ytV1kFyc96U8WcwpAtzox5xrdoVGpUjrVNc9GdvPDzKW1Tpf6Ke1VTbXy3PKbD18PQTYxovJHssq",
  "key13": "2wn4TQKo2bo8h5KBJk12Vz6r47dPnGaqupkQK14M66YFYh6SEvgjXC3dykEZDMxScZGHrdQypBqTojByvgtkswkv",
  "key14": "65posindWQqmgQcs9umBjJFQGKsrEWa2wwu2z1Nf15ymmARTLncHcyhvY3zst54vndWRHqFCZ51asdKPfGJhowvN",
  "key15": "3xbzdc7N5Ssm67uUmKfonjYHDtSncMViTt8JGG4zxTa2gPNaMsWgirmLwyojn9GotCAJbfRDxGsfQeq7hAUHa715",
  "key16": "4TkXc1js9pVGrEiDWMqBxS7CSMhR3njYkg2gqCcbPAsGgJrv9SCEUeuDsFffiJe3hWVH5pZrcUtsxiZ96YioVuJ7",
  "key17": "4NKeu3PTm3DvgdMveYsepctB1oWA6NxgqjWrPP4youz8sZYevfJr81KVdceSBWKXwFcSZgjwCEYxqe8dWMHjiFWN",
  "key18": "3CJkND4tnqWJV21pJU3YmgbzU4jPqY6L3Hy2XkUwoRJ4kPfqXB8ZL6tsj3uEj7chuu9BYspGzohuuC8kPBDACqRk",
  "key19": "2C8BnMT3bnF6fSX7qPu434e4YAV9piyTXAZwTQWDEnuzBpao7oc6ZyEXWw72b1WqF8pDFAmJWyJVbFS86PiARaYx",
  "key20": "4esgSVzGHnNZLcHGyJUShxwrfSczzNPCmy4tWVszEQGQsiw9awtu183WgW1cvEbWuhXxh2CJAiBesX5RBGpLkjqW",
  "key21": "4agzmx5sQFwvjL5TyAb7z23VMQy7wts4Qf1mCMQCH6W2sGuoWrmt4XneeEVi1tMbHgVk6EbQR8RdTDzCeGSTeU9W",
  "key22": "3HVmHzndwbN3xxhC1k7dWgnL144fKXzECYWdoMjfjSGCEJ1R52cd8gMgA9Ya3SMQvDqpYLqxPwG6BK66RmzmHgQi",
  "key23": "5nuoYxKTZcGM6zgeBAD47g2NWbkBfYU4KcDBx1iL2TRVg2aerMWknfxkabQSiW6353aKHf4kWsFokefRoEM7W2AS",
  "key24": "3nSg4D2aPQwTsD67YgooPaVT5cVWmyKTvp8tgqCo2QhwkoRkjxQt7zPW91zkR9d1aPGy7biMizZbzdevbVjGMJBk",
  "key25": "5v5PKrZMLVKYyh8g3e1TMyZPCfxm8B6cUcgq6MvbgKMQAs3e3WKqK5No53oUTp3NLgLdiv18oYnCHs4xsfBcbPXv",
  "key26": "5Pxfkx8w5y1XfA5TBzrJ5FaYDLgEqpSoXfP4tXMGHhiHUuHqrbSuC4EYLHSpyt9e3bBhJzof76XskZ4xfwR3qsrW",
  "key27": "mVsyRhK93Ku78RGTzZviq31X6DJxmZMedWCVnGE9GFP21s9QG16nUjhrwRmS94samxmSuoYoC1HENSGvZjE614t",
  "key28": "38LVhN7TdkHYBo8YvYkofaTusZ9tJDRzqaeUvneeLpxNGN8fkDcHdDFZic3YvbrFuSEcnA7RYRR1rLZaDSxSLEB4",
  "key29": "3KMN9u9Gso2QUJfYGA7kc7aBGHEWQqeAqGs9EAmYrGfCVsjUKPNo3xufzAzqeo9jzc77CrzHSVwjzkhkV3vCdwWA",
  "key30": "4J3zAgLBCg54e59tWDjgjyn76dNdXxo9euXHkBqEXkYXrU4itMSML3zp2YsviDoTuu9iTmbknzP2xU7XUrVau7zH",
  "key31": "61QYsis2qWzq2HSNH4Vu6TQgbS9oPN2hCszL9PLNeequy6mFPHpcMKh1xfWpWWFv9ydspyJCu5FBdWTh2vp1JC3a",
  "key32": "2PvTQWTTHjhqueVRCrhnyLjKhxouGrKJyWjBEDhmK7N9GQFp2kFZ2G4K4dNwtqMsAP1nUNnaRon2DwNGXa7cU2xm",
  "key33": "2xFiPrKgtSwqGT1cbiow2VpkXCHHKwLWdzAuPva4u7ULf4PAvxAsAsa6Nzyi5nDwYud5Nn7WrcCoFj39tpQWtFQ5",
  "key34": "31w7M8XWcAif633zkKumc5GuFQ56rFAczg89SVVCi4GGZK6Pxyh5tuEWM2Sq3n4C8nzV4URufezisqTtZQ2c4VY9",
  "key35": "5SVtPrMM4BZAJFMaA33JhPx6DZJ51XtRZza7r7i9B8Jezjss3bk7uKQW814yiwqAbT3QUUot5Kr56Rw5eNGgXaHy",
  "key36": "2dDLGBTd382k1VYuV6NVTkzrmpivsx84ufDQnPJP1wVZxmmSZfaJPkgfTtwdM1PqhHqz3sfZCkU3HcLb9xSXqJtK",
  "key37": "fTHuDaptCTZkuk2qdZCTv3uS9Nc1Gk6wnpeZG2JWGCCGgFf5DxZKMDmXD48nbPREtNeo62C782ppHwAChgxCFQA",
  "key38": "hsHmBwNCJUkGvG4tiRKfb7M7RusPjU2TKbVKwLv2Aj1jt6ycerdDDtjUxth3AUSuBjcnJDjT57nSWtHWMLCJXVM",
  "key39": "4wnhAVw6qYij4Es337ZUjEkd2tqvhPHn96VKbDsUxXBLrwbNmgHXT17weCCy7gxw5iUug262S5vcSYLrcQqqk5KN",
  "key40": "41oDFb1ZUAZ29mvmsGPMXLbmvymTLYdS6qT3x52681ZAiVtj4Dq7BAxuaAbgCJBMbxoUG7QoQEaaSkJ1fuKVqNrA",
  "key41": "574SQmzAojJzhCcfgBJH5dBEvZZKahc59xPTqgiJZdVpZEAUdWsKVHDu9qEXC66wEt9BdBpyVsfuoLL9RWNiWTqu"
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

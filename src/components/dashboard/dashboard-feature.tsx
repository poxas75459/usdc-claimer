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
    "5n1rZTEWf6rmpTAZiDnRLpn3fKpymNKyMJJ3PyenZX6RCHD6WG461WNb4gbF73irR2nJWQ5S8YHJDTr7zrZ5UdTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVRr1jgiVKvJ3Lg196kQkC2YEH8GuW7ZiMS9QqEz1sjYwmR2jRUgHfsoxKFjA7yA6e6CkyXWNEuq8xKP7iuy2im",
  "key1": "XcuC7RBvGNkUAKAScXrN5cpgWSitudG9pXejycb5dqqmCEAmNX8zqc9W2Wu6BRsRX4sVmMTExVDCm6v7svwEYkh",
  "key2": "sqxm81FHy4DEie3N42JFXELh4D1Sp6SFNmi31Qnowk6GwjGVsTvxNf6u48LWBJoRQTA6zx9zQtWmcY7rzwSdnPq",
  "key3": "wAR1QCCFsYC9j3hJX2u78APjtcLbADf2AiWugUB4CsVp7J9TaoxHd1tBr1AXegugaYWVr97KyxWiDBwxRaXKiNM",
  "key4": "6613KER2UowX9L7K6Jcifd3GdUTd9Pr7rYYtBUZAgchWKb5aNDCbk33HkTTrPDMKqGTucjjuN8SRodTdjmZyDkJ8",
  "key5": "2poUUuNw9KxzaQkfdghSWA6MjUcp4yCEQFERygXGBszEYuiXgMuWu8JhF471yFoGEdj67Y1bQesvT1WgXqyAqdkn",
  "key6": "3rXNNSFmziYa4p73DnPbzRd5Trmrsb3uUKjPaE3WufhT8ZqbzcYPeenHaquSmfNXRojfwFvLKj7Pu1Q8RU5gKumz",
  "key7": "b8TwDRytnzgKjqxqaHUYqnLFmwNbzWoRgqy7Gm3HZaDT8QF8g8GBfY9sgaZpT6rkeuAxBJuwwXkhBrX64oGhkaQ",
  "key8": "3p6iAUub37wZ6fTQcPy4vrxPWbitqKX1tDeWpQLExbXpQeXj6cXVj328vjzWpNohdoiCZR2rebEBZ2JqRgtk1VpV",
  "key9": "1Re9gtY4ZTWjGEqHV1YTxABiawN2JAWooKKkHZdbvYgLSjsT8nnyQoWSx3mMeKMwRxfeGFXWPrUtJcmyM7oVuJc",
  "key10": "4WPshUxG2tbS874uiBL6WX4fvCfUuBQd37a8Nc2gK251k45SX1j2gzY5GRzzUrV2DLm95ExEnZTcKWxSUD4tuGvV",
  "key11": "2bVQ4TrTBAEryNeerQ4zM5CbH8zAUAUfVgtBMhxgrp3eWbQkFyhaoMfMhgksDywebKtKuFwqD983AKnBdKMEAG3j",
  "key12": "26gWCtkmsfxBkZtKqYKA9LVy59eCw84rj7eYgfnHR3RYmm2SUoYsjfZVpDtBqce8Ba69ZwS9uf7FwiK1Mqik5xhy",
  "key13": "R6wcHAu9QR8V1Lv5RAYBWLxv6ZoimWHWpfhHU4o1mNzZHek7Y14K3Mg6htTUJRFBCyVtPNJ7YQkQmCxq5WYVSWU",
  "key14": "2icSBNRjDw3RsG6RpTYmmX7jMs9ZrLZwD4tBzpvveNjYagaGWf6pUHfyMBNUqaAM5HLMw3XabdwqycJ14WHtJtVw",
  "key15": "2AsWc6rawKmekfQHEXR3EBDBK1WKzqrd7VQCBgUf5TAhxuikheW8ztTsoGdgDKTrZfXx93YN18wbwdJPsdkVjkpy",
  "key16": "5qK1gB4UsRXfFbVDoNR9Ms7syh3Td4Wp2MvZvgtEeMkHBDznQM3ws7jQCwupiEkWUSg1dWgjoC4Z3XEhMFbSYf4z",
  "key17": "2wQUTXFh8tVsWkP3V9YrrfNaENwMGzcLJiV9xNuq8SDhcC4uuhxZJUMiRHuTKNT4jaizfVhvL3KijVw2oLpxJraE",
  "key18": "31FfHhmzt24SxGsJgdxQNJEcW98N5vVfUCA5K6FWDbkGPybHefqhXNDLcK7R9t4Pm5uK8WsC88vyUG5qxpB3BRCE",
  "key19": "2JPqnYzqwZq8Pd1NmtCoEATK7Uymzr6JgQwAoD6Vp3EM1qeyQkXNf3iUazbi5m641YJkxYyUguyo8HJ7x3FEFgq9",
  "key20": "28VkNEmeFj2W4a7qdfAsRcmwFmRdW7P6LfRVqWkSTBSy6t5F7Wf2gSRcNE2XpyKSgxJfnnvKLJKfyz26aSta82Vf",
  "key21": "33VFv8dcWorPxZBM4k3ejsbC4dMMe8no4g4mMzgMqVGF2dZEU4bo89ZMjunb1ZNGCvC5A64DMnPJxFWsW8j6K9LD",
  "key22": "4HZP3DGjQLAKve3XLByd3JkW129XoiQx5HSh8osF6J9LTSUxsDcGEwvjYo34apRJwFmhXY2kWhxBKwQ4qq1iwMKw",
  "key23": "4r3Fg2ggrCsjFFxkbmnLfoLHeZodgVveSYJQnQsQkijP7k6mNGXiTrVkHtefnvYvaH5rAbRBQVupo4JhmBNCf4Av",
  "key24": "2jcGbL92WbDdxmxvvVq7f145Dhhwrcx1rMexvXG5X1K2oumFspa34hXycaygHHN3e3id5GKU85zDnJTW7D9uM2a1",
  "key25": "4f5CXxRL3SuQSoaE6vR2qgW4y6xAqgyJhGss2nRMZjfiwKLap2YHbXzkxgmDTUycbzQHXknbaiJPTavEwAfFehy",
  "key26": "2kiEG1bWuXS2bEg973kYRzXFyHkg1oeHzM5EPZYjmrP694Hr7dnZAafNFChFKqCXt8CYjU5bgHdCcnJGaJKe4E8c",
  "key27": "3cbJVKd7B7rtwnr4uQL7H6kNsN5VWfEoL2pbUTeHSSgcnLFpxd7VtZFH7zzEkPmMVb6pkg8r5ogqtxum1zyuHodS",
  "key28": "GJfccXZf2RtsZ8bqgwGMnHhPoX1dqs8w7eZGD3Nh7dK4s48eaAF7euJoghPrzAXrsRqafYYrRyqJ9RxycXEQjG5",
  "key29": "4WwFrkmcaxYQ23vKNrH7rWizum6hYsSMYEnJpRxQtEGZUTyoEGnJ4NFvLpdAChfr9sQUcDh5D2HJjYqn2oXhhNcZ",
  "key30": "3ZihWyVFNQxpUpvkJwUe8D3PmpX5VrYea45ZFxpoWzLCDwkku1MmJf3Vu4azJnS4i8v1ifZVAUiJPModVpYLyaig",
  "key31": "3naezXEAcwsLRCv3VyNofFCAVV9jhneRakPZ4qgnYooNFap52FtGJgEb6UpjeqxQVbzzBoReBsgYeb3eFTaopNgk",
  "key32": "3xAsuwbiRF8X1FZvQtZfe6GDk55im1Hu83dCGDYJDJ8gHKAgxknXRfbrtJLf4mfRpbdU5UTGfNcs3qGMsTFUjCg6",
  "key33": "qavnsmQhTT3xBSbF6h3kkX7rDLQ8hZfEd9eo3EZc4KdejPREkid69gPNQYwNFJzZi4sRYEkcVGLxP6RaQYU25tt",
  "key34": "Qqdzcpf2XYGZ1mFAFnpMiznV8DYWUQJq5h4E5LWQwszXGGZGuAdcZgWTGrtTBpUgW3YrDfNNxaWh5K6uHuqg4eN"
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

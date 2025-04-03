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
    "5X6GabsZhcFWDzYePuig7LBVjSzVRD7g4DYpHM7jb5AcXvgWexyV7oHrz3jqvwtkiEAbdhMdJZMeSurvG4EsTEfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wzTQPo5R2u7SY4gK2Cm9m4wdx1aums1ZeraWzjNLbtmjbtAdHRT3bVMQWSt6RmDABLnuwJdBUy9iU5WM8WXPFP5",
  "key1": "37nW8wf4eYSBgMaVndSKhZLC1UeGys2uzBks5n6EtL1BbWUZjpjYFSw8x5M2ZCdGhfUJGGptgnaDgcxpw9Rq7DR4",
  "key2": "3zzmzSityst5KcBiW8tSpi3CgothR2VZEEJVL55DhPLwh81Ankxs2Z1CbY98Rroj6JhAsHPMmXSqLP82v6XSvoTt",
  "key3": "42CXx1VzHPHwsfnKp6rLW14uVc48inYFoUmsMz4yb9Pc9T46YcoaYAMxdQapTKsNbVFVydLFw2seCz7EPcjEx2VV",
  "key4": "5ztcgX9FwPsCk56hHyHf1ECag8Ex3UKHSyZR2wSuMpeUP8XMrC2ZLkwtF2SEeLKcV9WpTtLjTzYi7ALPLZCvvoxU",
  "key5": "2BYbp2GJWJrQ4ZzXs3bqERApDnVdR7jeQD7wXgcRJsu2zXH1U9xRuaK8Yxxm6ysM1oTFm4K7PuGUuNYWd45JGCZP",
  "key6": "3cmCDxyP7uVF1fszghxRCUMAHn4uEDk4Adgd4WkL3nJU3iKs7WR2abSsvRBryGiwcSPpxULhh5a7hWU77PMB9zbp",
  "key7": "3T1Wgnn2J2vGqohn5PCfnhrt8K68oNiJnhJXSP5LN2k4PADnKMnxcY8BEbPeBVKd9KHY4WsYXEDHuNPpbCYYp3Ce",
  "key8": "3zh4cRZaMLtxFhabScqWXvvT86iu8qBqPmTrxfTucs835SZTdrTxgPsfZ2wDYbsfW4eHov64YNuCUoMGAaAmrkJ5",
  "key9": "4WE6xCfXPrfyLERFTxTHStX6fVhr8gDgXfiY3uQSvkpgS9BbtBbWkX75kNzggK5aL9D8JVnhtDYsuHGCYKidK8Ro",
  "key10": "2P2YjEHCL5y7js3ayTTXHrsTts7f6hv6BuGqcyDh6s48n4vpVvn8TCJnpAMbbc6PdWh6xVnMzTWLMLd7musyHzPf",
  "key11": "5LyrWYvddzeeQkV2NzHyhvqVzR6Frn8awpttt7Treu62oJS6u1ZwGPyxgLpYAWTrj4d6x6JkBm9YqfuV9GZm8cZT",
  "key12": "e6CVMEHMf8BsrWKk5YdnnRqk4n4DSHbGrh6FJ1AmdH6iu3dxis8rqkGWWASNLB45ggBSEgKnZgMWhzwkDU3TQih",
  "key13": "3HavL136hxKip8dad7zM3Vujh8GMd3hLrt4oqYqTf6KCAFGgGK2y9PdVNC1vLeDaoYeErfV2E5ct91GnRQXnXsvC",
  "key14": "5ot538rMfzoFS5smJeAAKKbkHPg3Rwwvg4z7LJpwnEBUH6BaUdrekx91xzHXvZNT4FvNbWStoiWc9xrzPNdSGK2v",
  "key15": "4c4J5X7ve8srF7eunamvfHwTjK98VAFWoRpZ7mhMLh87NhCtqLHpGSD56jKfQsHyMEpLhD5aHefXWC66LFbhgqG2",
  "key16": "3r4ZCpqWFLk4DDzMw9dSxSehJxnBfpSfoq2HrYXb3fZgVjg9yLriJUbChMWP83iafageRVRGkpp6e2oCztmZ3MQw",
  "key17": "3hGcugKWKG2YC9zuiW9VBAuBoD8e9cSi6GukejSUxkztLqVsDRLnTAHUKWmVjZiXAZU3JfsWYegZoTdKTHZuq5DH",
  "key18": "29ZbFjEphB2w2LtEwSjY2GpQ6gXVbNDu88Lmw7e3U8iNhzw5RyNqf37RyvLSXvTmxD1SGgAcoUD14PCthJwDjX2e",
  "key19": "4NXjN1Km9ZQQhCCW2jzngGffMrvN76Se7jvTdmLNx1LrEj5X2cUAAJNU7BGuHPDmDjL8CwWcU7yiZNhrntjjMZXu",
  "key20": "53NxiKR2oy8DVrtRyuvMNrUJZFtcjaUiZdezDr7M6rHsCTjuBE9twoMWwRDZJXL6hngCPRrLDgmSxkmX3V3WGTCZ",
  "key21": "47tqK8B36vCsAk4hJU4sXkxG44hna41aR7DD3i5c655wPqVrQP9vZeZSea3GJfEqo3Xt7Jo7fUgfoshVrCkfinYB",
  "key22": "2ABir6U2ZdWPGVdUtjb1AeXquYNCGCYBn561Da2eTz8Q2tbg9w3EkvCNxiutgUUJeQogzvWmtsqpJ2hp3rbe3hRU",
  "key23": "23Bfs8yYN92c8Agvij4AZ87QtLYb33iTiHwAcjvAb8To5cb1PdDK8raB1CBhJnbyaYj2PGBVcxxVfyRtfgJAqKKc",
  "key24": "yByC2ruDDy34hwX6zNmk6JMebQArmFF9o2H7f9mwy3SBDBx3fD3s4rdL2KBxvXTRScP8e2at33CxjTcEHBqkUZo",
  "key25": "4zDLSkn5j9jPFwJh8ECvVVy8XmsAZ9gG2H4GJ1XHakFyLyWD5p6SYjCf2KedvghxAuEZ3RyudEbP7WvRCRxBkuF5",
  "key26": "3LyEkG898un11UCHLcqY3iK2XNJV31XvtqugJXUkuVEfuYZUgCUaqXgdZghP1KWWthF1WEFdpVpX96bLDevBP84q",
  "key27": "5FrgCMgwY3rqmFGhhFqcpgM4zE3j6SGoB13E7fh8LiPgwDa8DgFUjowScCcvna3MDDpCSbbBC68P8MFBFbMCgHgK",
  "key28": "3bPVqKw1gMHcKpV8YdyZe7gMJWPDcBSEvQaLy3tJSx8tnRztcjTw6TGk5EYK7qDwshrWKPtwnfd4k7KHjkiuTknb",
  "key29": "27kuPamA6KdYKvcpUKNvypag1v5wXs23wjwvTECHbDSEduRXf23mrT7KsmHNYjxchVe7VLZMBBpNVErGWXs3Zs2r",
  "key30": "6hirR8tvKr5jc4UKUgvTKafMqV5SMscVdCs1f4twjmJysBxG3gr1o91LgZfCpbrUQtCDDtoQLKCNDsUfaP653q4",
  "key31": "3fskLjAzKjiuHCbyCENZ4mBKLmZbFqejsUVPnV8poS24GCLS3VbMB11VJSiCvStuZGn4t89zpZAdtTxUQy9nTwPi",
  "key32": "4XNGLGXV3omoUrUMVHBwTh2E11TMyDUDTAuufzgT5VwTBRoeq123bEtfLU7ojLiBMRdTAsbmd2YE4F1eonEZaUfb",
  "key33": "3WsbfbystQbHxZVf5GPrSAy6rfDMKtLbRRfYtXUtLDxEm1v7vrcjviKBFAn9GzHWm3TLYcbD7kB8C4jkAdkucHrN",
  "key34": "2tXcHb5232pWc4VrYWrcRfaWwubVqTHgYQpJ4XZhEhJd927jwWSEk4sN66dGQLtX8om2tEN2jeKojM4bcGxpw8Em",
  "key35": "2kHRqPoEwJ7EWTxnJa4AiYyNCY2314ZiNCMjyCBTNMaKaWbYxnPuVwUcD8m6UCeEHVMovRxV7j1ZXnuVbvVF6TAa",
  "key36": "3XRTACMwVAFReHcg1oKw8w9MhJxJfDgDCvvkeh39tFYH7AoxdSDWtYiLc15vQUmUux2gRnphQwiWAywb4fYSmRFM",
  "key37": "2tYgZRgJYe8SwzCMNanT1pGz5tuNSAv6U2rx9y3NFy9xj4udD4jrCEBH3kC3Z2qtqdvrTJGQxnS1FVnTy9WNW3CR",
  "key38": "3u8D3YYtpUunHjBmjC4ry7A6aJehwZAqwMrsVW1RP8foU8favfKmfSzj1KC1fyujoNE61oS8XjBvMstwc2LV8tgv",
  "key39": "Wo5dMPnTzAQzYFj6er2FwnEHsaGrzpmVx2oKB1WrpnfAXGDozqTGy3hjw6CTiud7QpNajbtgQ47MM8u1s3UHTCC",
  "key40": "4mftJrpkivhyycE23cteoU2nc3cNi52m65XqrjHGoWQNyrEiWC6G7opatvnF2zR1nDnVWCfRcNNPD6vGfo8yHG24",
  "key41": "4C9S6EcNN1MnLYX9gYu92FTZDe1NDjKKM7VAMt8S2GhouiQgfsUC1pBzRpzovFw8ZSiWu5BH4kNeNf5VNT7quvAg",
  "key42": "oHdjSBT5Zk4jvwBkzotDu4eGqehadT3UX1PorMkWhL4jrFgNPf72jWh13rUoQ7ZAeJzYWNuZMw6pjF5M6RqwSY2",
  "key43": "2aicLLeA3rpG6aqpkPvEQ1ng6GH9jV2JV53t8d7FckSpheJZnWvnFZobUM2L9R4Ncquio9Gmm7SPe947nk1aHXPu"
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

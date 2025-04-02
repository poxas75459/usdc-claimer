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
    "WGiXV22WynTMH4Emr9LNQMRJeDcL8UCT41drsZn84jqRf19HYmGECViqqERan1eH7UxfsbnJVaufUr268Keyx62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67B5BPr6KzW9TnVVbhgEcvPBaD7MqEDTknmpK36DCFdSaKm85ioCkbmQwXNWMz5mrChiV43ctDd1En8vPiw3VFAz",
  "key1": "RHXCwuFbj5QPxm7k19nSbUunV34eqjRYJCfcaFAeFmiEBef9tyjvH9oXQGtZd2gpZahRqQtXAnMwwY7trsaXZiV",
  "key2": "wPwwkHLRiM3R5mCj6H4xF7E7362tV552rt6WuSddGFiYKNnmDJYyf23wBY9j9A7uykt2b3p8wuZjZFKq1h9ff9W",
  "key3": "5g4ka3H1tzrzExSRMFv6TwZNyFf8C2aKSuRFaLw9SwWnzX6ZoRhe2HC4y7cH3bBhbf6x7xdJPBfgjdPpjFEUMt7k",
  "key4": "3mrLGUYFjsBKznxWDu9wwCkHS2ndiEn3RFZvkko6AR7NThwbSxihoUdFSdMRF1UdXhyW8s5hXzFywmF8ZNHWMzzo",
  "key5": "4RNEikGv61W7Y2wi1qdzqVyUJ5PK4hhU4hHYonWXMNtqn8sWo511z3cFFyMA6E3jNQWSS4bCHYeHAaGii8apwjoA",
  "key6": "3QxSf9a7VavqG95Rt6oosW3K7gWkcRi1kQn9ptyfRRt44s1a9U3us1qV72yPbcRsEuF1mLoRQH3ZHtKiWuzzH6J6",
  "key7": "PGEHhgWo4BZm57JoMZygtF5QzEiZ5ynv276QbHnZ3wJTq68LcFayJj7a8d5GYVDyTbBcgoHNXFGjxUBdUJGvKjG",
  "key8": "23ipMtn2DzyPh51GSWu2QTbvddp3CtKqDWytJNNM6UvSyD2jLMTLTq8Hdk9WBwaKpkpsEEXqfoRbc8fNiZDzzkJK",
  "key9": "49BVMd3Qi1NafubHFnPLxvhcaFbjbwBk29VkRnHMssZUuMHymBbKB7xFyDKWAtRMX5UPLgxAKu8K5bEJjDPoi14z",
  "key10": "ksqAPY7Bd36fd4kYWQzebn2TfQAWhc2RgaX2o7SeroboH5DXi8GECMLgBUiPjfjbcpHRfze478LbNhGWzr6EeP1",
  "key11": "4iTXhoht5VTTjXdKNrmwStsxEo1bwKAYfutuerKvgYKkaP3W3oTXzz9Hvz6xFRoudjkw9jLoRsRkQ4yjn3JidbnM",
  "key12": "3igM2M3vUvrB8gJD4skSte6E5qpkRMXYdCHnWScXCbG8U8FCdtzJXxDiJ2j6JEPQSgqX79TUW8im1UdHs83yX56M",
  "key13": "3yfudDMNf3pGQx3hBtf3tF9WQMHy5uVj9Kw9traEXdPxKoQKJHrnmsnPmHNFvSHrJHQK7bnZAmSjmkoTXUjSSe4Q",
  "key14": "4EfL7LuJQfiBRRTSkbw4HNGp9W5voo31vtei8RdGi9YoZCR5Tfnf6fM1cpqtrZfzn7U7vWBmDV4cYCYiE666jR6d",
  "key15": "37DQTjjDAQSoCdsaqriamTPZpdKwamB1NPvEu9Z19PYRk4UZ4XuG3yMiFnPvrEHUaxbMNBzc3VvohGbgFhF8fofy",
  "key16": "3EitKpvCVKi8aY8w4kSEiTNctL7iND4ymMx3aBHBXVpWyzGbSXKpUR4zLEcHqs6BYd8WNwbHQzMs3GkbBDqyn2Rx",
  "key17": "381AYNcQo63kgpRqoctd9p9Vg7vma4cBZUzqJYGbYGVgoCE7eGPDVy7NjKPeut3mXF6BVFmSyFqsevAVibVYfEvy",
  "key18": "VEHbSNyW2d9nZVJJKWUzozj9uK2RL76EdnxPe9frCiFPS5XBAqm1UzkZYSjHm6pHXAF4oHEwrUSG8sLHtv4xLMi",
  "key19": "qQNoMyMUUq8wvX6Lfb8rEMDZUE7hryTnaMEavgmUSwFYKDSiUvpdkWb2DdWDKAf8mZzESQNarLtvXcH2ch34Kzn",
  "key20": "3YAsxLtxP4Z9a3asjQLJ6UD1nXgXzK3eayq4m4QbHkoTiNcPnkp56MSCtwUb3Po5Cmd3sU3xMvK3aC3kEH7WAogo",
  "key21": "3V3rwZYAXkHSDLfXj26pTvBN3X6LkF1TQ7kX1qbcD1RQChVfY49J2PyhxffFyWcN9r7m3m2JaCtGfK5D8zUsCu5H",
  "key22": "5Esjpr2GJmx3SB1AJiUcpnPddWvcoHZ1HfDNGyAzdUcnSi3k1ybPhQHYeYWMXEGDmsDYsFKpnvvrG4MnzPbdhYMX",
  "key23": "65BAT5UPgnVLRYrbmMx7GQ6a6xTeomdj1jXuopv2RyakSPn9b39ssyMAuQnhda9ECpKQmYwqtuKSydXdJhNBPEzN",
  "key24": "KeLznnaQBmhWjSsgRdkF3W9dBKVKsPodTLZC5S9JNgErg3xeTJb825K6BFYaWhTkra2zJDWpKwcJ8e38g4WGLCE",
  "key25": "4mgYjE2oPTbQYLUQ6Nh5r9SvwJiv3Qcq7qMMR8AqLsCXbM6xr6dmb29fgvxsjii9WqwLYVG1J1PmeXVoYpdL6hNh",
  "key26": "5Bw4vanH9LHLfCJ5y2zttyAaydzCMXLGTrLyyazRVNDdrPL9iywZwHyhpZBodF93jq8VD4FTjQPwBvSnNuV2gLqk",
  "key27": "tBRPKLGerYtzFGoesMnngxRrpY2ss8fi2EGG9Mn6Vne8HPBCYmXzaPuKQ6CEnuiAERjR8j3myNLufc4zwukfmLV",
  "key28": "p9y3upV6NL89Hgw9A6BTi5NkRrE7vHuGYdxQ3TriuckKyi2KrS7EvPQo7yCwDQWmaFDqjWqchySjuxQe877F1UX",
  "key29": "3Eg6e1nn4CLbmpTzMkGmbXf2JhTm6otz5FiWqGmnH1wmG47qBGM13bZQvX9uWfad5LUPK4143Sk2TyBsxGwDL83d",
  "key30": "kMjS6k7USCyuc4HoGfH9Jwhuy3wUx96GLzrn4zmGZmWKrVAGtQksE4H8Hj2RE2KnrLsKyw1zVeuJNnM5mNCXUPE",
  "key31": "p2N5fcWQoxuNsZtSdYiDxsDBACiWN3WKNyrFD1rdKbeGA7JwRk6DwZY7Ft2tJscQPzLxfsEUb1cFxzZ5d681zQp",
  "key32": "5XDjHST7dnCDMC1351F9ZjNkJC9gi2TYvFeJD5fhJxoDZ6BjW6WhuSW5fuFRpokxAHNPHFAoa8kRQVZjzdivB28F",
  "key33": "Zct1iHq8otHWoQH3Ph1U2C5p2KojEMHmW7j6f5m7rkzaMWzaeHGzrCc9AgzPiQSqTj7We8X6zaE11kTTJ2f9FpH",
  "key34": "5D68TxQshrcB2mTC8wPsY8AQRnnwhEumZ5bRQ43pGtorbyPwyo42k5Hmgpz662HGZEYraZWgroGwJFjfdvvfevBz",
  "key35": "3nSt4hcx9fBTsjd2gc7EefaQYuXPe86VtV3UVs5xDvBumCdMysVBkHZXJXNy5e7WnukkEsErGeah5qbPUkEaDWp2",
  "key36": "2PiZGKzvk5mrJbZAPYdr2tFHLoEFeTHsPxBPBHPJh9pwSagmMQz6acMw11SMwU4e7ujvMJRhQbKdWLfiF4qFSxup",
  "key37": "4EHqvrmukqBspBNPmL5kqN7zxmiVd2MM8r8LpAcU4Qid5yAormBnuRGZrdNmR3iqTrxnVwfsQhqjmCyt4qt7WGrz",
  "key38": "4vNBHAUdb4MZiCn5BSWxNsLcxymGyE8Y83MmrNFrQ9oM7q3FaHSi1P9iY7w16KvUKM5QSQG4V4f1WcjuMFPiYFcf",
  "key39": "jVaXs2cvQhsVxVU4ZBznHaxStCvQLxDZv92a8SKwgvrkJhPh5frfFya7yNGL9akjbFk8b8uCCJpQdC3ADkm1Xuw",
  "key40": "4nxmHSvgKvsPpv3RrTWp3A4a6TqgtHHXVjKfhNRc6tjJajvbPMKabaPRm53kMBKu9a9uaKVrHVup1mFwZqyivpKE",
  "key41": "56wSfHVbEa4LWumHupzmUjgSmGvXFv5p18Qv48cAoRGJcLj8yUFSiEn5hjub62zS5B641wS5jjGC6ZwmgiGE5Dmt",
  "key42": "2p48GLBPXxZDP4qQdEp7sizmkkzjRCsBKCH4tP19PB8E8b8MK3d9fHg5vzHFSiL9qt9CgwCSGoZeDQx7PR6VWhRN",
  "key43": "3JoFy7yLa87ZZSJb8SZ5yRCt8v9mB1LawB4JLbZ7ZTxr6jNddKUvMxLYApo6mZdpWWrpHwyd37wqMStYRD1yhJyB",
  "key44": "4vccgQ6YbwRV8HzZnwdDJNBEGSEa3KTLHLHGQoS7RY5786w1nk9kRBo3iCh6qoKiz4Mb83sHTT7GFuMVTcb7PpEL",
  "key45": "5yjFrbVeDzniUMX82QHyd1S7xLwcRpJeo5kLBcpGchQp5AcqB4XTymvFX2RqcpmXfwAeQt5SFpX57pSM9ENhGeUc",
  "key46": "xu5GBcWGnPHjnewi46N3ToywXFwc2fAE5QsHnFo53xN8TT5PwVToCKiA2EXZDPUPNM9eB91Lonf56BPrXhNHN7c"
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

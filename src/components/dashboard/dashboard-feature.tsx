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
    "2GB5JENz7AH5BdCX7B7w3U8XhKvZWGr1LJ9nd2RxdTsAnsVXfk9VShdi62RgDxFANrTK3qVNAnrXem2UqwjUbGei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHZsdXNrfGpWTmnsKjMcLiCcdDuJz3XoikpF4uorxvPqQgi68DdZWCg2oiuva7i238N5vxsXbmCJJPEKRXPMWhe",
  "key1": "5P32YhYqenX7V68AdfTMPLGTU4BvfdrAMYFFoKivX4zLA67fDKh3cTgWf5YKpRPqHhy7mKRmSTg6JVDgsDeeASwu",
  "key2": "61EMBSboRjpDCGp217ssAtFqgsguvPaALxuWasRTS8S2yEEdzvucGibJSmLcERbqxVDxZpcypJTkBann8gCWFDwK",
  "key3": "25oT8P46MVpTxEU7QRhZDNDCyZ1wCqMycSViH6Q66CUM22hWqfqrbgaaW8pFvXEX5jUFJSndHV3EQwMbed9oKtkT",
  "key4": "7wmgNepkU18Us5RUy5Q8nVbVtFtsKU56kz8LtjUeqS8wtXxMtPbdoUXcXmqxVG9tJBkXKvixzNaRDHnayRFWm73",
  "key5": "5KxXoYDkNBRBFpi7p6ECoRQZWJsv6SSpibZRKYdoyGni4QfP1hA3EV74LBMHkY47zASYme4CcAHDjsHjSrwqGHjy",
  "key6": "2WzQXNp54yGdg6bAzyDEpwgpZBKHiPPxWntRuGWqxoTtmx5KFoHak41P7xWccg16V6unumrAVeNcoE4xcT2ndsEn",
  "key7": "2U6ZWKTNPSxBLVLGD2bL3YHv9MbiQM56zVTtGTL7gfVBzgGU4n2e3zkxw8NcHYaGWwDraMxxfYfF39C49zjFAcLP",
  "key8": "4hKGwCojdjJq9Agm8nN5BUMJAM3CULuXrMsJBAbLqUpDibnZsC9M6cP1hg7ZdcxrFbeaiczRG2FbJiXjp7sN21Ex",
  "key9": "BJFSraHnh19iXgExneEjBicn1T5xFcPq2MbuhhTPRNgo69uuvSZKZBwTZrHYPQTYFJZZwL2sxy9mPxJqWCuLvMx",
  "key10": "4CDV77WTd5n1eEu7nWb8xN9qiiR3sh1W1fjLjjiAEJFxG92wRriXoQMcDp7DtEnGPo4t6o5B4oFsddrsvx7fp5yJ",
  "key11": "2nJRYWUDoab9Pmuu7ukRSbcYSU795R1RyQXqSXVQ6pju2rUMyUXxANL4fPd4uULQHT15Q95tjxU8zRnsB9s5xr5s",
  "key12": "3fycw9RqbsJusHQQNMoc78s8z7bEZK1FCnHp5LPeXEfSEKpfri7TWudTixrKxGi735qK3CKkz8qeGiFSr21Cm4XJ",
  "key13": "4RH7hTsdygLLpU5ZK4YMQKHJbdympDHNq7jqVPraaxZ31wMYLMamuLti4Ptdty5aj4V93HmnR9FRggLheYf1sdCf",
  "key14": "2hkLPNMrd8hf2PZg3gMc18LR7WTuvQcd63YFsV2o78iojEsZhjHCRzFDMPZcSNrX8pS4To4DjpJZdgHeyR3CAj8X",
  "key15": "5zexmheDZJysWZgW7L79mjBjNLto474fSoXB6o1uGQkdGuGTEQCBcABC1AbJXRDSYdt1taaETHDYB6y2vHRJpZqN",
  "key16": "3q1nYMgTyG7N8BMRyLaUkgreZ6Tn63arFSRqv9DCmPEXJiXGcyohYVXPq6VC18qkRjnemSJXLNvU9pVqAVZZaKHB",
  "key17": "VyMzWsamhEQMTjL3TWecFPiosugWY6WuXRNX9BnvD38r7y9b8D6bBb3e5JQTdXpYy76YRUtyQVKgnnUxcFbKbgS",
  "key18": "2pCZE4SGzKHQbZbCNcvxeB1Uxs2bFczR3fofTuKitnmA16Y7cY8cQxhLEqo3RE6vxZ5k6SpQHCiKxwBBATJ4yQgS",
  "key19": "3aBVzRBGqzGN91rTqoqMzmc6MZMoV6ZXZLdPkMKywR2EZSrb64rvkuDgLzjn2QPayRN6nHU7JkNNg4bVGFHrfHQ6",
  "key20": "52LAAJ4ZHRKd1kxbrxyq9cGoHQPPBVBaGBmd3n8N2BjkHYh7kdBDkgh9hFJSr5LMWABK5g5EJVu42ZxUkUupMkx8",
  "key21": "46toWSdy7wwugyaoNcxCTe5GRXktW87SLToHYvAakBnrtHznN5DCS46paZBoHHcyZsb73CdKdNkwPxSvEfdguNtH",
  "key22": "3FXM1xCb5cB7Niwo8PF5oSr1ku6ZXWWF38aupf7x7fwMbwamJBr1EjT7NLTLmrbgo7kufqfirAUdENUnxxC3UtPZ",
  "key23": "5z5jw5FjDanedzfy8g9cCkLAHg7YqY1wBoE3YtWfiE1dWwKNYRa8DJDTdp4cirQALJxRg5WtgNqMMXwrMWe4UZWk",
  "key24": "2TFJgxGSRFmMbzUYcfaF3jaRrR9EmoJc4BwwNiw9EPtt4tSRWmWP2yva1FtSZ9wVYaXfcjQUZjFxYb554DjxBN6M",
  "key25": "AehaQj6W1JCv6gkXFiHB217Ti1kwFvFs4KhUCQZcjKBLF1HzL2cVju9yJrmadTVwDzaitJ4KE9LThcG77XhUt3P",
  "key26": "5fz7U3ndMAcTtjkNa83PiTFedpYEU6h7S7BXdzXbvzuUzk7FKajLUP8podubm5vAVoN1CrkPg1G1s69r137UFaRA",
  "key27": "4CfmptjPUTrcUZVgN7Bi9bPXointmsgtmEMA7cF6YoTWsuK7iNsaCAk6okcSnaEJYX2d3avhunM2tBTRaqh4cR5o",
  "key28": "4Z1PdeqhYSpoDDkzFX4qPjSuupz5j6e4aC9uyfbmNFmU1zZfddVSAvDMjmdKWqDXjv4VdcYsNpmUo1dswXLgSwux",
  "key29": "5GPWf6LpFhRJ2v7HudizKTG9ddYRSbsvPgfhrj2JhRYN9zTZvi8WXg8Ksg3VFy915HyAHetmnoDBNKT4Pyo7ggy6",
  "key30": "2GdYUs8AkxEQouQub88jK3qe5EebpfS9n2xh5PrfpE5fq6nNuRWRU689Jew51UExxKSfDv6k1mCoEKYqPv2cjgTi",
  "key31": "5KmEeC6LKT57PDMSivcp8GjTwJ8HBC5Zt7AEcmUSyvmCet5f4NZFHM79rGFHByHXF5LBR3cLdWaqjSpsPGn8GYHP",
  "key32": "NN4EfF4jgTyiM7mJhZt8eEt3HYbR9GT7gDHPGjfZrEMbuGKgbtsqXdgVL6A4yTRPCxgcrqySLwjiEgXkG8YQEzL",
  "key33": "4AnMgYWfsY8eYXskK1FnMTHV2m8o1wZirxs4fUK1XQL6fgLdmPDm1hDRQ1fAXvPcochYLvm7DfpEBJpuzCqtNEqJ",
  "key34": "2RrvVj9hYpt35f4AQ1rnuwhf4soscW8v4YHbhV374FZ37zPsJSaXqj2FmgNy6HdM4d5Y6YUWoKd68CFUAmVzL6vq",
  "key35": "28oVsiW45KiEUG1go7AGrnSMkn1qUCxjkWZEf8HbKLen69UvB6WSBUKRefRRDLwQPhgoMBYVUmLCYp4jzP1WZQqD",
  "key36": "4jYMVZxLuJVDaxfYhRg6gozGtmEyH4y5M3WL26SE1cJiE1v8SyNBoHUsyp4HyhWxm3PEjAptjUvB8Dqt3u2ptZH4",
  "key37": "3R8nQGGbwqeLo7SjmRgm7CZyUrQ75umrbTGjdzTUsN6AU23AEyjuK51A3ukBbvkbbnikRtPM8wVYFd27KZvZzpvK",
  "key38": "4ah3qcfmFPWmxWzaUNkrgyGcMycxcEP9CCoFy2xefFkSRhHYMxZ91iSxsFBh3FWurBzQrbryen5Xrygsk23hfFff",
  "key39": "38dr4mAfVTHBq4gnc7AdxvJnRHiXcNQidX1wU33C9vZzNkt5dRapk4nmYoemogi75Gq6A2wtPwUHhiBZQSH1xV8P",
  "key40": "3VENFhkPUYFxKW6hSV6d9phyCRwXPX9YVu2eX2VjCRTf3GGThRA1sykfsA5Nq2ZjJrTaKUFPNUYr7oTYyJGbdrao",
  "key41": "2fXjHxo7e2JNHgBAnDR5g1H16xWh4rXxSVUzRE9naLbqArZAXr58mkgete9kbvYtCRBeJvFCfe6sekhYjA6qq2uL",
  "key42": "48HUs7dTnyFEB28YEYTUkjHLYFiR47H5p9WPfGyWkSBVLBrWzLwnKGXh4oZxwWa3z5ACs3zSMFza2m6m3BpnBswm"
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

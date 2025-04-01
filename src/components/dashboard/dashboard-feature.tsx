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
    "Wx1sPtkMYMKfr5TatVGjhCNT7mD7vHhtfVvhjYPQPJ9z2BvGP8xGZ7bfD644mLKRGLqsBrhHUFSXftf2xB3ciao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PqEAKDDFBWn1MgZTfnV6r9coJ9JyPDLnkevhQvFh6LBg3Y2yRkACCuYmkuUbWw3hUFGJ5BeN2b7k3yF47E1pFDn",
  "key1": "RbLv7cGLDZdWuTm6gs7vFzTFaAWdZU2N8taCQbMdDceEsYXurFSBGBKunF5MFyMSxEQqPQPDi8qWUdSaHvVXJLL",
  "key2": "4bcZ2LRPB5aito5LD4SUWneDp6LDJW5SNiGgTb3tgcREfLokzARDTUVKBss9pYLqZevWsRLA4VN2GgjMWjonSGNP",
  "key3": "41YWubhJjYtdfB6Q8WxQzz66MFLqBQF6Qf3o6QFDJJ9mXuQyKcTfrNUVMgYGgtXjEpD6iPtNfJyPc383NgbRk1NW",
  "key4": "5Eb8T8gzt4b6kaUa3aTxRMJe6YQaXGnD8ZQCtVDcvfLfDAP9gJe73CJs9yiwsvotPDQWZEUbndyQMTuh482coWoE",
  "key5": "2KWyS8Sergyd3JcdFDcwxWWC3rkGbX44ZSaG25Wrnv4JFavr5PTKZ3kaqYbFbLqjxiPD2uH88pu6ANbMQF4PtePH",
  "key6": "22XBfpswKdVXKXmcmWL1amP7wWbkwUo7dvPLK5thvkmwdNFcnzS7a1w9DdKsAMC4iqQzZpExBv4jGzPApLprVPAf",
  "key7": "21EnXTV8f9HDgd3RcYdQaXYVxUwDmFpYighmbw47XpZwNEP4CsiqLuiposLXWfPDKRLFJ6Nmi1nv77eEQniuAPVn",
  "key8": "5U7YEg5v3sj8BCdb4m4uUSLvKbKXUoq2G2QmJ5xyv8n1A8i73vTbYZGhVG9aG1ZLJdmKkPmYR6i99E19Up6E6ck5",
  "key9": "2MVYRcBBD36NSuRcqY8gGhRgMnbeJTD9y3HKKTLWburCCLYwSKaJ1hWyENWokERk7JVYZKyRa1A5VJSqyo69iDKq",
  "key10": "3ow7pmeGhcvyfXE8qh4y3iG7HKpGDRL5Z4rD15EUXRFksX3nyqbxPA5cdT87FsKNY7iAhoqsXrWXt4NquAsWzwUx",
  "key11": "2wcUcq5uW1w7AsUPTdbt4wwHFc24guPQfvZZQDUQK7gKy4vqomh5Rzj5xRXZtkCxF7Q7dLJeGBkq9EHDMjAtZnrf",
  "key12": "5cFPAPLxRrxhz598HnLTfjyAL7ePkcYHEiywRMBaqMwnkstrsuVjFdHFCdXz6PBU3SZEQrhixQBBhzwYx6dv5oD",
  "key13": "4qvjkpKGYmw87QEBxxN2S1XNBzGutRVQZdPMiqx6C85jEr3ZNGw2DPKb41QSfibGsqCett5RZLvgj5EbggzGsgeo",
  "key14": "3a6mouCvSniM9fDMSUHi7pYSupzUznf8DVdGJz3pWCkNkKdzGbQuncEtZizbdZnPd98Ht6pJJ72k15cdcBEUYUAZ",
  "key15": "5Rk4HxtDANUCACmuaqqMcN4bd1VCuumzjfYZsaL8JGZUsDesCBCqc6MHxnUnYmP68oASSVxyqeMVvt6gD5en1TVT",
  "key16": "3ybtRqQ1KVpNZfU3Ntwrsq2ffVnLjkyNkcy9CoZktU64YeEv2fUy4Nz929RjRHM7uDwAsHhyCGi3ftRCRzf1onE2",
  "key17": "2RWEXSNWdoy86xSwbp4HRfnbX791NPE254JHmehCMdzhit3V7DWkychoiYi8GaRgWT6jdDRuS6rb2e8QHMojufB2",
  "key18": "ScAfQfwq28uJiB4Wj5cdq4cro9sKZxSd1NvskSFVagAEZaTpTQxQnB1R4NiSZSALASm4WbMM3DoUanw8N7aQjBH",
  "key19": "4fLQo2MkXEUPqgeeDCALgTH1pgPw4oEweVSwkRfjefCbh8hdPjeAsPihibqaXMdJTZGqrncvaUCosisgkwqGESt5",
  "key20": "jcbFKXhkdzQfHHeqN2J2RbAoc2ADBQLMzEWdnp7mu6RTSPCGSgjTTpHyjwLKbKRZ2zoxRgGD4S79By6Zf2D5ofZ",
  "key21": "qsmwb5WiYnguDHexu8wgLYbm7hyheGFHKWFJfqkM88ebooWLd7tYe4b1jvHXexbz6dMgQjf9SmkJgH1fb7mXBqR",
  "key22": "rrvNVDVfuF5xApRVKon6b2iVqTW7C4EJguSmbHXWm21NpSJh6j2ZD8EsjJU52q1kbPR9ZepXisjg6C77kNpqnFC",
  "key23": "o3ymEwKHzzTqWsQL6ntJeNTWvHmn8oNRrpshJwtSeojuk3KkSTU63tcDmKZ6YYhzav5geXLppHMrNtx1sEeejDr",
  "key24": "5TnVvSrzPES5PKQ7UKXVtDJL4rN77qtMKw8U7fDjQjYNbV5jFCZDJpqGEK97NfJ3QC1zmTiNj2JhBSYLpGRF8wbE",
  "key25": "3HHaYTikerS7cZmM3ABaR1sNs7Dx8EzaqpFxWMbceTruZLrGTbDiJxAcVinrUwA1U2ikfBodfdKcpFdZDFQ1SiKc",
  "key26": "kXoFun6JGXnXDTNGHEjrkubZyK4EJWcjWctmpHxVpATc42zzM1o58nEKdi42G7tbcuEuSFBcUX78hCaNoPsAKGE",
  "key27": "29ggHvsTAvjqye4juH3eo2vd7HTbBZrUopwLqxedjauprrDNt3xKhziDj1XkCXvMtnaXgim4n5Ac8Go2BdPnNxsb",
  "key28": "5dmjD1bhqjUb2yRwf5xC9BsNQeZzte8jCS2ZPy61tKoE6C682TWqSLUGSDZTUP4PfyMBckfgWemcyQSoE7j6ezwM",
  "key29": "39vj7X6BM42ranVoyXhkxLwjpxWj4DXqeWpdKX9PY1PsQVxEZW1h7RTY8M23s7va9QWjgKgfRsnCH4Lrc5ENk3EE",
  "key30": "64FJHdVG5UTXoo2NckwLF3AVbbEX1ayAdHU1f8MveJ9ZQVb4MTY9o3aiGmjKfeNF43W7eMJx8LFjjdqRUwBHDGGy",
  "key31": "5L2gcWNqXunyrgJxFpRpGRvj8uHKabjv5R68w2tHz9nBra5aS9unWdAo5YaNJgzfobiqBcQuBxQFsB7seAsYa95f",
  "key32": "4uZfTu41PVahNKmich6jyq5xSHnY22zmnpSrh4J2GupLZHetvsJSyM3fou9s9yP9XL94VaLsM9ykBanFC9ZSgBNQ",
  "key33": "287cLryZ1CdEon6aJrtemWzgpQY5tkYwCpGGWagtGeuGGye8G2xTRohX4CeaNPLBNDeVHcKN4vYYmUr55DLAoum2",
  "key34": "ZLtSBMw4ATRGGHkQRkNQ1pvNtMyAdKp6HHGs5GZaA5kfK3sxXR7bpbYrM5cBHZEocL9fePKkcZqQWHso57be9ZU",
  "key35": "4Rs9GoZKc3RYUTiwnVVydjijWauUbupxbwvuUf3JTE4ZkuQkmv4cDBucahawvP693jiVpzewP67kCJ64XVA2d4S6",
  "key36": "2JoN4ADzjrAcZbMaFm3zaZhFMM2u9EM72QBkVpBt3bfzX4QwkaZvMZNybjMQKh96WAjQTt8LZcYouaXB78Kn99bT",
  "key37": "5Q6RdTmMq6qRcfPrE5MPBYWpcoaHpEUYoFeoFJpVHq63m4RDmnkDxSE83MJkgXsw9uk6i7S6wMPgGCkx1sWdkeWT",
  "key38": "3JXdJbrYit1mHFBSpiBUF3QtL1E2bmbVikD6Boj92YZiVYGWje38ZZPT1XyCcobF6JqruzE5diTWxzUTNQjqj8rh",
  "key39": "5jWuqLsUkYgWk5W7kQqLfKEE17Dbiz7T26YxVUZcsvxKabpSS6eFwEKD6PRf1w5pMwqLuvEvHd4mtFAcpGWQ2A5Z",
  "key40": "27Z6QcqAmUnMJaV7LpvVmNhTjku4zU8uqzLy6CRDheaEtFDxs4x8x5J6DahUAjTKPQhUhxvSAjMqwxnqGQtVAaad",
  "key41": "k9zbVjXBgeGP1CYG1hkKAbdi8d17xkfaWuA6tUo1pVJA4xqdeVDk782CQeXxNbn1ynQvALgxDpxivCfoxFtYuQF",
  "key42": "3qaQmjM7b7SkBiK56dmHKUQjRuLJfwqhKj9TWgqoZRrPQ1bwRRPBkDk5FHYPSxcVJunE8o17Sqf5n3jJnqXFM3RJ",
  "key43": "2NBRPwMAbX7EPKs26nrFaSYo3QpUa5FPe12C9qof12tNcRrDi1fq7yYzEaK93hyz1ARyQSzGbZhSUpEa44f3vR9t",
  "key44": "2rDa1TBknbX98NEBRVCEx1RZn4gcn2ZwDi9vkSgm9kyeseW3jDeuZKvywTQcE1Fk3qTwuRQTRNcfBVTQMyM3va69",
  "key45": "2xaSwwaVgSLfrc1igvCE2QsThyBncEx4H6aXAXqsF1ctxPq6DD7YkX63TG5aS5g9wEuMNykrKjR8hk58PxUpP93L",
  "key46": "4eQTn2HvJakmchZoLzriQ32FihXCftaMPuwVY6j1HAWpxuiHpnbWDC2u7xYN7UzUXrLuMRDuwr8ak6KYaxxX1F4r",
  "key47": "4xLZgtAmDVn3Go19bD7bDeKvk1TezP524EvMfzZPSsT7iBPRQYnxd2BQifXHJxzELJNz8ZSYeBppbFPgSSNRdLNL",
  "key48": "528T9YgABFNk8YWbMUVknhvpL9Rfhcq7awhngbboQ8Cy2b2va2XUCBbJyK5JNwYpWMo7EB6k6cF73s8na8ptvJLB",
  "key49": "5cWNcaz1HqefrWRvot5fCsxEgtWYm8GbBQLAkDm4TwNA2Du2hzNocwku9dWwBga8XCifent4864szjiPh7h4Q3ZS"
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

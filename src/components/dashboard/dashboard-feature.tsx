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
    "ePdnrXnLC4RoQAsvdvPcWAZK2bs4PYgQmdThAebSe6nZTLHT6aVM7R77ZaioSewFT36vgimeDViDdfAQQgDBKbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2amxdN2omGmVWP6xi6yrGXkUUTH4N4PK3CBWmTkbZCEs2WZrtmJddekxy9r4Kcaw8zHwogaHPA6hSukHn1iNJjfS",
  "key1": "62X4FcZzwHHbpfaozMkeCR2ghLcU1SGTUFYgEtZmc7rkMXenKjVYmooscWfc3kmPA1uVv1L9hLxpFTkMHGPHJz9X",
  "key2": "3kAzxjWHYkVqufzro4q9DdbTWVF7RtfbF7Pfss5yz36CaV1grS11D9dLLkGTwdXBYvG2BmmTwhVX4Jk9aNW7zwyN",
  "key3": "4P4umgsJFhFNTtPXcwve4UXWTJWkb4nDt7thcGupxbxAcX1Ayj6vGEwRbCw4F8noyBcvqn3doJTQRDHiU6VYsAoQ",
  "key4": "sGzEyMNGXP99Ty7nMefXX2zt3YU9ZvyvubqMB5pzye3JmW3N4T3TqrHC9uXJ37DS6QCTWWVEY2ovBezqDhKtxgp",
  "key5": "4LddBTdP77xqRnywSaHcCHRBQpJi7SEFCzke8WhBWdJ5p16N9t92tnWKM4JVasgtKPtJcD8qDTxBUvst6V2pktDX",
  "key6": "oTc2CgfF2c1RfZZQZif5tHgfw4rApGTTtSNrvcTfrshQ71sXFrYcZBmfES8HmRGGoEMrb3SQCzsgT2UzT1TUsEa",
  "key7": "2ZrDGVhNGRHb537AVXVhe2RzgoZuEtR5gF5ftKXhuydGqWPhvsdaG4VsRMY5MLWLKihBU9r2vwRne3DDLerfA5LH",
  "key8": "3Gy5uTZ8LhHP2p4vgbTRzBKT89NcAvsZL3D6nfGqvYLmmXVJjmM6JwLAjymjVgxE5nCZNcdFuzT69xHJ7gKi63Gv",
  "key9": "pTc4Z26a6MEJkaHMgV4JkBjCG57s61at59rUCjaYXrMxf8joj2Aqi5geWLfKkVetFR3EtmZb6wNHtBLWjrDxxXq",
  "key10": "4KfraDasLR3sVkFZTydzSBP4s19AxGrPjfjezwurf7wW9vEqeb1KFRWvVjmNitknPcvvStBj5gGeommkScAoMz9p",
  "key11": "41bqxB7sNUuHg2kEjr8avNNC7upiQZvt8UY5DPqDcU2D1TU4CtAyps2S8kfFjMfqxDM94vvbrYLmbhPp38naYurY",
  "key12": "5nGDM9gJ3wh4y7cryPQtkJ2PFdvoy3V916E7cwMvhZPMht77QLQj1APHVDaJTdDaVtLn4UCunVFutAs8Sb6MujEM",
  "key13": "28zU14jnkPzdmX6DgxsWUkqznyP6hj3exqX3ic4MCFrEXo1w3edkuSLUJB2V8fHBtMJd43UGTrKJSJjUPhuDF46C",
  "key14": "65cVqqFXAEV8FhJR4eZaYjCUDgeQa8S9BgB8bYobbowywaQya4Rwrn6QTeHfXB9cTwEta5JGGYmrMqJaUg63mJN",
  "key15": "5TGeSracmUyYnRL9QdzYeMfLTDxy5ptseip5cSjpCCAH3KVbWqY8Lg6qK2cNWhLyLhNBYdShy9Zj5P3aTacn4nps",
  "key16": "3oiZwF8QhahbbNuK691WTHVxwRcta2ZTncFuMH5j6eLPaeGLp3b2cqnhN1mg5Sf24F83hT6mqVxkmgpiegNZMSgg",
  "key17": "2nvMjkxLsZUyhKUs44wvUtxRE5FSiCV57EwJEAL8yyckcAtDEkDPhjqSYVR38EkwDU2zdrEPipcNREnHtQHDVJZc",
  "key18": "5aAAJEswHtuSuL5omWhK4peeSXLYnz5pbCsiphw6gDTYmFZCnXN58SA4Umx5bmGWAQ7vaKKb65kBUZ1aWPxKUe6c",
  "key19": "3ak7QS4ibzDXmctYHRusAtJyrZtApyAxqVFp1gebWVDN5aVDGMXaNQ2AMQFeeXb79bduVETWZ4vo8XsdTq9HnTX",
  "key20": "4XtfaifUjymf9Ly69avM68sB2QxLFNZeErEkGqxzKxy3VdueikkM9JDZ8ncf8KBGgvLqPqsEqtje5WEAvjVT43qt",
  "key21": "5ax4JHeGGQMqxqofXbeLKqVgaA4x9YEPkHPYM597CXj3mrMx2GrQJbp1sYNbM7qVuDvRjULAwmByJKvYxoqrF8WF",
  "key22": "5NRSfRDxDzV1tcw56TR1XMZJr4n3FCc8MuoWSG8cFMQbhijXzJFmPSV18CsCrX98h7AoDnsiJJGuf8yYkJuMVVWK",
  "key23": "5CUSTdJm7GU7ybgvj7H669FC9FiiaGbfyQsDkpUPpQzJU8vpAMuaMkGejHsXM4JkxE3VDX9tXkvLXcWn8RrgY2Xm",
  "key24": "4ymzTyXjHeyqqNhn12NHst1s3JAX9ReQahbrYnbZRu8iG3Q5pNNHFuVbSGCyvaeRFJPsJVfzY1hmhVU8VLfKY1Bd",
  "key25": "5ADdhMgF97Ew2NkM7xnuqXioZyRKSKGzcoQ7rUJtNTVtRgGQs3auQjh2vhZCkkHCdLGwb15WBnGexRgSBvtDLaYo",
  "key26": "5FGSfZcprsHPzzZiBuo3Ps2JPaMvPTq4VfBNfDip9hXTxEoqX9UFijLQYDofGvYFencYuGwuQzn6C4YkkUPNnMV6",
  "key27": "44mo1Wcn1fSNeazpv43C7ZXs4BvzK1GvEWERbJgbwnU4P3VP1SBBi4B8t6YYXS7iL1Jh3RhaxGDQch9yY3Nvk5Bh",
  "key28": "44VULd5hkRJbUo4ygRK253ZNuFqVDKzqpViZJ1khBhJh341DXvp3v2ToZq2frgLA6BcouvyFbiiTiS88LUqZ3LkS",
  "key29": "5KEXRTZwzHPQLwqTzmnTcoRuMWNz6oo42aCqedqy7cn3HZBQGvkUTdDYvQxCibUpMN6gkLpdWTA6DP56CpKuR9ae",
  "key30": "d98vU1oSxoQ8up1pbgcFypjGkMXDeW23aiyEV8nt63nMeugyp9rJmttSo5zB2SSnkXP671Rop1P5D88Xvz8ju5S",
  "key31": "4QHLW7Ya87CkPDR1JGBBLrMrEbN4MJttEuZyrvY8xFwQLrb1zjfgS4Lmb1dYg5engyhyiLf9Dq4GHihWeNYLFU7Z",
  "key32": "59ThtZyYGyZLTfkbijpNKfzYwhkEdU5xMqEdKMMxCoCvQHKYrzzYJKhagJE2cqnQ5mExBiAdQze8D8zg1rHLYmBf",
  "key33": "7ZUC7DZhGkQUqjV3Vc4qMGxLLhC6GMyK1WUhpJ9be9EbgLgRsuWmUMwRPGR9XoYWmhmRJUJ7sPKR53nLvPost6m",
  "key34": "Wb7jnFCYKxrdckHEFkUwVToFi2xLEakz1HEcUCjwkSVGj3rY5zNgmDUMSfNT8Qn5ZgdGtruU6udNT2aqjpWvrR7",
  "key35": "4Dgj6NyB4Z5kFHtKovcuPj8pGv1YQNPaVnCpWs1PWKPaopci4wadBPqKbFCoLoYqeHgeVb8Aymh4GCeFzXp66DWv",
  "key36": "2H1YrmfLmTfmaaz3GP233w6q2nT3MJvhzK72jxWnafhds4PsYJJ7DFqb1RaEPUpbmfggx7HftPKjp5wbLvTXBuLY",
  "key37": "94dAqfG1RhU9kXtsqA2GKTU5EZKuLGSoj4GYSkeazyMzJpHqzszyDx3K64azkcDKekCQwx8SPwDqq3g9zxXubgD",
  "key38": "2Wxsdie1AZ5QfNycAEA5yyvEimWTefpWSZnkDjeUGJ39otq4cbGvSf3mgUFZPVke39vKnwu36uy7acPYwKQmrXje",
  "key39": "49wuhbyqYmpoFDZZMF6bZCrgTPGwJeuPhyRbxW9MGZWJ6GW1GjdnLcSPu9bRZ48c7FezBxngmmPTGX5kykjgrbcG",
  "key40": "2mZsLfNobkSro4mPkU6CM2RgJnzSdKuZt4xiw44NA6ghTU4dt6AJG7MFVphdBnaRk7NqQRM5hUty4eA4DgZVH9Ns",
  "key41": "2LoY4T3JVikqowx1ZyKLQX4AgwaTwgctSzF8Qr812gpdVhau8HPpGy3oVGiNCoMCPZppbDHYoRfgLRmQV4ub85RW",
  "key42": "59dy7T5YtTZodhupnUh9p1vYp8BHLCSp8fRTbpYuwSN9htTYutcfrke11DoBJZC8JWFFU2JJTGeMcS5n8R6fph7u",
  "key43": "2itVsj5Wdd1Rn2H6qu8YDm1cZmdSWCFRmSGic7PD3VcoQXFA3n9kX8PSPPKX99D3MHUumDnSz5svDKbm91hx6Qp7",
  "key44": "5ymkWd2YLxumRMP5nbJRg4f9B2KyNbd7oTrmWW34dKrBEj8932XnJyuGfvE6jt72zcr4wUAzGyRG1wgUFvzTdYNt",
  "key45": "25NpDm9ZPoc4BpAYjBcW1UTVtzx2d4iTZ6gsvyd2wd3YvbzgpQnYoo9EazELMcBveoBf1G3F9fPCSNjp69enu1vp",
  "key46": "2hHtEVddLVzcVQdNmsBDppn75Etk11snUfQLjHkWuPSHjNcZ6RqzDcErMQUAXcQ5s3hvrVYwbpsT7iUS4n5Es3CB",
  "key47": "3wLG328fAuJTvyToJqUqodr7ay3QrRifNuYkKRbjUccBP76PHQAA7ojU4pyXyikwo2wSpuuQATH8aQMuzRehF9aR"
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

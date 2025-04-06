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
    "pUnwzF2twLbvn1HyLgj4kS1JdfieribYcKyxmuVVRriCqxGsbSpEJk3kLE9Yg9kyxkrECktaMk7xAMGtd31Qj17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oL7kHfRWajv4F7WmvVcbc6Piy3HLXG5tZHzDscoJCa5vxMjgkDcRyXcGTXGkoKWdZ5VncYGi7cxjC7PBeJNDZ8p",
  "key1": "4ktUebZ4CV9MMj7BCn6PBXivzPLTNd4HcbwTovD3AbEpASqRLp7cmRuGQTaTGpRfDPMqj7LnXU1MMgQZptQC4nsa",
  "key2": "2yJp4bgNEUgn2V38TSck3F6ME7o8SFtq1m6FeVMGs6kXbUUQuk1p8FVHhv8qAsRSDztKZXyUbV3aYTLYCAHhXW6K",
  "key3": "4xUqb7hhA2hjk8FVqBeYmhoKVaR1h8RehKnbyvSZTwyNAUSCJn6HH3KSPhtHHnWXaMkZWUFDU5WUsHCYULvQtRgh",
  "key4": "2fvPfLNgy7w6gSnkkyqswe2WKLB38QG5jDYPqXmgJhXh2KWsoEM8Zb4jUh9npesqCbXiKvFN3mU1er9vhLapb88",
  "key5": "48sHXB3cPACcdSMJgV6SKmHAW9xJgrQyQ9mwvA4TuKcDdnzF9oRHTayCttQYSbbQ6nWZ3nkuHZDdSLrevamfWpFu",
  "key6": "FbKxFVrZRjfVANWAqXHnu3VF5CuKMzMnN3RfKhCDbbZoRiHktwFjBqKKZ75ztHfnxG56AyYcp6mcowyZYCsq3Nv",
  "key7": "3qQTdpAxkfK3iC3Q3YbWEAhJvYmXbcD8VwYkxLthxxtYJ8gcDXfeutQSecyGEp3pVrBivG1eqHWXRJeAH5755iXy",
  "key8": "5yzdXSe9Rm5BV7VkoBUhSAqCqAefzxsnn25DNGKTnKtVfgJARHLWHYqT1WtnKTq7erXzSDKQMZwLKQyMFJi1b9zG",
  "key9": "3DmZFZHQuGcWMV8Xvd57wj3MXz1pkGt2rTDURvpsjwbqPSHbgNBM49eRTU3YkK3wLkyCxqdryiayz5DJXgbfv8ww",
  "key10": "v5PSuwxzeKLm7P5gqFSQBAC4uZmjYL5UJrEMkZX3hde8FXDnY6sHw7rBSq33gJ6pcgNCeTDKCTYkjQaLL2qURxT",
  "key11": "52FFYad46aX8Qr7CHnCFkFyveHCTQbB5GygfbjnWKEkAojwN6hsEqypk2Re9y6triifq1khKTv51v1daSGtKQ4ML",
  "key12": "3XASMCfhpoch7k2BzmVGCwQxyUxs8963pgyA7UjgQcQ2Arb3oyZL1y4XA3oQ4T2osnsZGfUA8yG5JcbaPq6GVev1",
  "key13": "z8ZP3ZCTKvCJfJ7sYf5qeg1z68n4NHPonb2sUBSnx25xL9XyJfLLpbFK6dD6kYjmDicoisnnANUhorsXXK1YyqY",
  "key14": "28PSzuCjZqhprJFm9VL6BJxbj3CoMP5Xu5zSUUfEQGwsh1yA6Er32rfTPitLx3gmMcq6Xfq4yWKrpL7D9eYApJfD",
  "key15": "49igoRK4f2SgQW81i6AoB2YYXEJTmYLk4m1Z6QNQ46waFjm5CFuYjCko4kd6rsN2Uc6kVcgiRrTpRuDnzpBayaKg",
  "key16": "2rfbKLvLwkrGtGRQTXAztiPeUCrr4dxQwRrBvY6ffjnrgw48eusSRY3fjH7QpoahvTkHiqjNQMP5chPwh3bCS9bu",
  "key17": "4hYr5kfCsyWLK7oz3N3UcuUCrJdFqbWMzeNz1vfFrPtfxxHgaqtWEMwWWjv8xiHw5ffTbWALPgnDP6AZawJGgZPS",
  "key18": "4YpuoD3KqHH3DufTvasRGhic4km344Y3CrETFxiZG8hnpjjc5URzfAi2nUoKmHRn3B3665G6PBeFyA53BVwuZnyB",
  "key19": "2yed4BQ6pBpS2Rj9JBpN2Z92FT1o1MH8M3CvhChjeKguGgRMY9zBPPVH9MSAQ2Jh7hRWBwQnDe4tnCyVGMQL2Agz",
  "key20": "2kpX11yqUHMjo18zh3yZG5sUcawwqZdemetKYF6er7o1HAruXogrob1ZYYUbENs4PVZhkt572K66grLpaFCVTmqX",
  "key21": "DWJXG7eXxu7GoL8aGiVRptZnRUmov4RscmXwLuWrqi2bDyoQbuBYh6RcTjSrzExtTjUqcWafdviwA2z259AbkXK",
  "key22": "2es5EvJJEfZPEPFcc4GyiHhKbDLB5iNFTbZvjJEcbJ5h8ht8o8KA9eSuV8FCAZN9rkcAyNh3oeDNVmzrf9mnrMS9",
  "key23": "4aDjJuVFfJZ6U6sbfGki9cakfYbcvFYfmZsd8pGrBiyCzZWssfdyH5uNJUbJeZHgoAtKPrP5EzbvgXxQZGK1bSUW",
  "key24": "3WUaLmMa6HbftdPSv9JxikRiY1gVM4ePikemQEhoKjxF9YKN7ePSzTD5qroNqoudxJQSuzLkT6VBnDAPLjCgTJ2n",
  "key25": "2CdUit9kk3wWTcU9WBRPBsDN9PL7ELAUJWvVSqWHCo2WQWzqxxmcxQKghRboaxCQJuYh6X4HUZPv4hcSeiong6Kt",
  "key26": "3p7HFNgRD9DKG9XMd4Rn24opCdv4TgR2eTb4xTxQu98hrrtonPjHaGmMG87qNUimSLkUUcwMcUX2cGEMLdzYap8r",
  "key27": "31vDXeiDKAMKMgS3UrBKbH3Fhd1xMXMuHubjFj9mSsUwfkwt2z7nzNfbuMfswdotqSiMiSGFyHutqnmGs3S6mUov",
  "key28": "tDbNkz19CvSyfbt2iqmtdJsxzcEvDMDdnPPwfiit5DZjFKDFZ4iPud2MuowfgbBuY8kbqM8WXfwfuBqTC52UTNy",
  "key29": "5LY8dW7MYaLuyyESRMSi5HHw4U7HiLVJwej6CsrVxRL3bWLU3fCANAZhfb4bR98SXK2vWZRMtcsUyfC74p2rD1nT",
  "key30": "2r1aJXiktZoQELiNHY48XtdCzcwSLmkd5zs7vtvuFFrWq6GbZHCJMbb5bHt9Q6wTtYEj5C6QVAfApjsxe7PGK9vs",
  "key31": "67qUceYizALxXajJvb8c5xeHJ4oMkQLRwpKVENFwoLaoovgid4d7qe53PB6p9rAkugPHGL96Y5TzN92iFfhUiEND",
  "key32": "4YFZWTavrmANShiELaEQBkmx4bUCR5Bkuohk1f6wCsHYmFiarj36Sto7sjihXwwN6rrYr1wjVhfeHVTrwR7ZjMTx",
  "key33": "2PzHF7KNz4xxdZnxd5qPzMLnbDqu3He2GU8m5duyj5LuDfCky6uEjxkqcyoNRfeKCPN5jf3HmUebDui6vouxw8X3",
  "key34": "2HRwcCbH5jHoMQ5aNRpzvEBwyWqtjj9wGmek4jnJiCHJCk9bey2EzkZCTFcWo5wJytBeg8ANKKuQpK6ybmDiHEAH",
  "key35": "2d6YWsLoeBMtMWRj3vcz7sapkeF3YJs7zdV2FkjhR572wnRRogReCNqQ2tSEQoE98YVfDv6KeCF58YBLaTKV4NWp",
  "key36": "3QZyhbTCpeAtnjo33qtZ37R19zsCVjjTU9BRx94SLAoeb6Nrk5BJLCptkkCzYucQuRZmpa6X8xdpmANtRZwxdJyg",
  "key37": "3Vww69xFARUryNqUhKP5g6ACJk9AxxmWvmjQsHY8Sz5qT8QLUwK154FonJb415y2d3YkcMVrXEV6irTFfFatZwRw"
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

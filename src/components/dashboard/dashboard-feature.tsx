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
    "2Qt9qPCskDS2hnXmaHVoPdAhuL4re9bvwm7dTpDgyRevfvQMH8uXXY7cfv1MSyGJGNRcjwQr4wgY7p6JpCpsLfLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UcmydPZirwLv184WKb9NQLP8zUczAGSZMbARKLj7ueju3UU1uoFh5tMGjAkVK3SiojP6vfQHi8fY8J2Qf6bvzmh",
  "key1": "2xGTuAzVyqKA81jwBxZkxL4kNLar5Qzba3HjirRntdjtP35LcpqGZGdh6kaGSEVw7kuyusqXW1mfBLWWyHEPVtm4",
  "key2": "437GnPH51U72nLngaRVjBjdg4dfjMCZ2DU9TrCrrGb5FGgY3qu8FAScrjRzCYS2v3Qe4qNJSn6GuFr2YMoM69Abf",
  "key3": "4AqbqBAWm8xQVaGcDrdrsoSUY7mURVQBbtsg8ooibesHW5favw4oEwVBVXQpkWrbgugRq5DQabpBqiaFsSZWe67A",
  "key4": "5MXXi1zBVuvwpbmzWn4q5wtiM3axKvaUbrq35ePw1462oDFggewAAsU5RKbnx9vqiZWcTeXbnZs4KjzKAjknxZT7",
  "key5": "3VxYMmrZiNCi8eeJAWoRNy55pui92x3Vj1Vo5BY57vzvamssyEcqhXifNVLTnqVk4bjVNhWQfhW2FY4CunB18a69",
  "key6": "3M8aYhGURLeeKbHaDP8d9kM6oihzWfria1TKXkUwv7nBCd8PbtiGjwhe9VfRav6pdLekVMzaDXfZduyrJmVgTjau",
  "key7": "58EPf1FNSpGURccy4h1bqPJKzcT2Co7fY35F5PobGhhQHamuB7qJ3j7mGJWDuEf18zuzD9KrXsvCmQdGiYbF7BN3",
  "key8": "HzMmMKXwKdzdQo6pA4SQjgpP37CLG8kT4t9bVaumSrAGgS7zDDqi913ADE1BEAQGyyvASv7TTn3KFZ3LuJnW7L8",
  "key9": "2JZ58iuCnNs194SgfgMZbM6Ti3sQp8vg8VBUZRfG3gkbk7jU5VURbWQdjF54fMz4HW8rhpkdvXnBM8ocffgsToaC",
  "key10": "4mw8KZJFPVwCpzmVnpF4AMLNT2X3CShMgrv6ybtot3F1RmmXnSAVxjrxiV43QSQvrjsSPzGDJH7ie7iiStyJmW5e",
  "key11": "4o6GYECCpPSrfZx1gGuahCEYfbKC8PoqWKdPLBo6qRUCnKYtTE6rszvMX86QBx4suCA2aBRk4m4z9YfQ9qRTMKVJ",
  "key12": "5RhVX6cG5bbtMyK2xULxRgRfVgsoKANUk19DKSHwfmXc6eM471uXPreSbnt6J4jkyZc2finG7R4FJUvx1mZSWewP",
  "key13": "3dWpmDXgLj5ALeP5q6RN4AV4uB2iMzpPKxPdypWcK8V46tPayVmSfbWs4zWvjYkQQyYM39jVGRLpSB1tDBFwrUhE",
  "key14": "3Fa2xd8oaDtxTgp2V621pbGsbZhAc3MUtN3tEVaF5f97YbgZuJo4LPrjwTnoFg2xU72DAfxjD4Ehk3FKVTXLEN5F",
  "key15": "39gP2oRjfJuH8CZXP33fYM2uj4wNQJv2iwMxasDBcM8Tpm7dpkTU23SNp13Q5Saap7N1VhjZjWQ6LYzi9E7Mnsec",
  "key16": "LdAKYSm4rCzpmNbEVHXSaRvCuqz9rzgbNrWYDoZyPra18xSyCqAAPagboH23XMj7JH4kzWp9KpjmRw69ZahQEh2",
  "key17": "2R6SNL9Erot2bDPFgUrX2LzemAurFmjGGbBRT8m1VuWN7ia7QVH5m8aKb1Bz4BFNrq5Utae6NMmfyw5YPYPDFxo5",
  "key18": "cGoaaXjLqgFa2djJsdow4yem1sfBjQaqfrxcM4r8bmmopg7vKXwjnZC5wv8wwu6hrQVEk7qp3vAj9cwEHbfZLcR",
  "key19": "3gRqTogUexNxquhUf1PnMj4iuuTYt4HmHMfBfbqF5rdiZg4bV5Z5ccJQnMg71T5k4noZdu3XnByXVhk5F3i2S8bY",
  "key20": "2tPDTBqZ9y1pySmxsEPecj8kf71ALfBH4AighE3RuG2emk5vojj9kfx8oZnJ2Tmd1cKKjBFYu9Lhwe9gUKiQjXXx",
  "key21": "3SJcrReRYmmGLWEoGRVp5FuDyKWmxxMpcZAdNDRidNB4Z1fPjps5ZtUhyJeqjEfDQJjHM6DYrabBeav2LwsNkPfn",
  "key22": "3ZBcSHnEr5fiDqxwFxVtLbbnh17LRG99CHe8PWXNcqHM48wKtDSthnFVxMAjcNrYTci1sQShgE38qfmWSPuxZyPJ",
  "key23": "41msnMUATBeSCVguabSnow1Yi1cFj8w9kiLyy4qnYx7bgB1qAYFTeoVpR5Uemr23VSAebxX5BikdYw2gLjsC5Dbt",
  "key24": "5DEARc4BoVfF6Z4Yern8m2PEKcoQurmDJAVWLk3JD8JiPLzpL4s7xokG6XDotC5otgvbMhsT9SLExn1DLtseYbma",
  "key25": "4gtNZsFibAfUHTRFYkK16zGUpL62sfeNBtdm7b3m938juFmjSMiuGFHnaFrxZGGXjfd2kTMqh6W5TGqvcE9vHihV",
  "key26": "8dQCJYydGbXsoDRNqkJjhAswdHxTwF6B6gwhi2SZVuD85GwW1bqWvYgkDMY3HnzLPKCLvZC38tz7UVvdamXqFTW",
  "key27": "5oBA3C62q87trNJriAxga5DUBVZnr11NJULwNxSTf91gu8cDpkhSKWToyD1F7rTMr4Yv1QDPLDnqUwgrEuKMjaVq",
  "key28": "5E6CpsKZKEDayNgDw9e1GDdpW5dMXTp8StsukrH9hVQyuwBi9c83GtYR2oo4ynTAUborRVAvaMaRzRswC6VbQQpb",
  "key29": "GgbVsiGoRbJzxSbLLTMm4jDRAf8B4NXUma54o7aGbsgJsmr4UUb79ePmynF21fuNHkye1GVPiMLuBTVvT1eARWW",
  "key30": "4TWExrz7qW3r4do2ZYeT9AWo8RCcfewgZKMSpifSQAKgNjrXnN913JTpTNCU5UgtFAS5ctZ7rUXhxqYfxkVzuEL4",
  "key31": "2Cy6ddQWHrnADoJwuo5LCJS4MNjouLNzqaZVEt9f1uqXpruHuL1vmufwNNAHXptTcknnu5wfMCxLMV3ujA8zNmJ8",
  "key32": "36G9SN9o39jEK7AKXCHhDKaA441W9dpP8sxDrGgqMbZ8CRdBgMnYZFg71zNUFV6XBMuse7qvQMu8QVc5GQ3eDF5p",
  "key33": "2pvifcsTGBFjv8KeYXBdgbtwAWrqY35r2VQrNFDhDKREX5T4hbpTdukCrWxqyE3RcGsK5FvxkJxWF9UftQHg7eZE",
  "key34": "64rWajgF4gDmHXxecKFhkqmaEYsdCT6s9kvBpkygA3VdUVAeMjfkByGkaCU9LdHrnhEqk3yPBegmzKrvKAz9TRts",
  "key35": "JvAutWot9HHvzVUgGGBPtdFPZwuHgsfkHCZzDmwBDj722rS9qN357t7YoyMYkafZp1W3tgRhisp7qQd7nxLqKce",
  "key36": "3qyA3hfY7iW3dWuncWuZggWvUCnixz4KV5UR1xKD4oEPFPXuQAYSqAQySbNgnFdYEwrj4JTvsHWZ7TepUNrd7LhE",
  "key37": "3aYe8zXAM2sqmNZLiB6dknBPQJeGSovBajoufW81em2vRgwSJUtsjS6jtHGTzVepySeps325cP1ev67D3ck2CWDY",
  "key38": "3RzBm9pxZnUZmKQgWu9rZasovdqcgBycAiCufcE2ESve9ywEuBYoboWw3MTk4NZKiVAkym29CzkPaiSBziSG9n4g",
  "key39": "LyEvyaJWU5i3rD2FfMLy3BS5MKXJdAwjM17bhdNfaPYQP1TwDR95sLCUumNf5b4x26P7yWEZdwuUJyb7iPJC4EJ",
  "key40": "3vpVvoaTgj4RmXmZJ8QrE86R69Yk88UBx4Hi49n2eonPQg2MHY9DbFuiwNUrFQRQCVuqPS82uvXS26UHEWb4Zajk",
  "key41": "LQrBSuUrESDaD2R5SiugZTgTuuPGUy12K9URdr8m28ZXNNuqfut9hyriatD3WdEwtZuD443mxNzEDcHhwb63vcx",
  "key42": "4BuJaBjXU6mJnWxUkZqkEYR3LJZ58CUmNzsrXmSLf72BB4SVGBwmifNosmFXxSrbYUHUy8xshWx7HXEwKNTX9VJm",
  "key43": "31wMjxnHgCJbvXds5tG1JJkcRzKv988g6aH39ZpJEB3R6GwWV5nkpzLJnFwwSqsfewxka29q5a3Uj1yFZfPJQ7en",
  "key44": "3EAZiziD8BEWWKtMZUc4RkAezdPqr9849eXfgHbmo9ZizMmK7zrgBhek2hWiaA4xZRQt1zpaSCksAmsktmAeM2X2",
  "key45": "btH1g8Mp75xhGFtT5L6JHM2B5uMoGZdLcEzkCX5sY5H3x1WkY23R1Xgw3zv58iggTZawyTTBfQc1FyGpZqR7c8z",
  "key46": "RXsgNYM9qh3KkJ32rBSt28PkyZo5tpKpXZbsj8n1Znd1Fjb32W6wWmiK1s3NeptsvKDNLKgoZapAgcjeX6b16um"
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

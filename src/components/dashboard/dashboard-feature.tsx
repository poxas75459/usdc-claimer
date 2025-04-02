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
    "3TGmKT8n357sRoHDf1isnhP9UTa8wRYTKkkz5oHuh4hzzJHDzg46HaeQSJHHFjCR3G4d7jyW4tuVDJUpZVHWhqRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g9a8ZoANK2tVTcVcEBc1i1DANw6FaF7HKtA3imKx6H4qRd6FwB1NhzQNcqYdT7DQU6NyUEutxLrBNS3EacYdBFo",
  "key1": "3LLpo5AKgQqE6cHtLGf821K9ae1CDXQtRQnBKjZAFEyCnMHX4raso75nKNwVWDMJwauut7MB45NHnQ3SGDz3aU3t",
  "key2": "46tzyrVtZBVuZT9eHWmHoA4wXghadFuFqCC9zM5epTiASyzoWFS4Wx7DkCGpNZnVoN6YPEFBX5HGPF3Y2Hd4FBcK",
  "key3": "5pL8UftbNnpPXNt6UrfYvDorZJVuJXfrDwyiakJiuWt9XaKXYv5MQp74SgxHNNAMwTobPhz8EWozejBmbGDx2ASo",
  "key4": "5juXqfDddpw9nSXyYRUAwhJm2jWayHnFxuYGzzcVAkyxpdwRKzcw4mftMZu9ShKXzqiJvQqJxvTc4qHBQsSjTaXj",
  "key5": "6231ByLX94wgzHRV9e3KgvtH7Jvcw89CM3hvpdWWn2Luw7ccG1PDGiZTBArZNhK5YrEP2WUFrhCi9CKPYSDs1vvD",
  "key6": "5ShtJKhJqNLhWATHCb8PRv17cxud8ws3f8LD2JrfyGHWeiRsYzEp9CznHwRAkDEbysWsJzudHQjY5L25SuuZ2bex",
  "key7": "5zuipTCqCjg4cYrfGhYBMfmtv5zMJ3CfDzgstPebQKULMdmCM5tuwMm6MPBcmVbB1FPpxaYpKf32fWkw6gh5zEPj",
  "key8": "5Dz8amoZ9jfR3jWVJV2AYM3mwPBoFj5krTPGXZwQtMW7LD4CE2h2eTg5wNNkikUwVMcpR4oCepKb572qWDdEpfRt",
  "key9": "5HE6WiLsBZrvdZ8jHLdSKapng7CesoED8vFvWR5ko5tBu4wMh8xy2DxhPs7SNCHU6V7VRAu7hLLxkMrY3sgzPbcW",
  "key10": "2NgxLbLdyCVDJksSSyLap7QH8fJn1SyqKnKgZvoAQTjNZvC5EiACgoCvdEcHhzgpZMbtSsqjpEnWpsBpHGWmhgwp",
  "key11": "ocrUXb1voMHGVy1Dgn3UfRFJVMv5imeVSHyneYgnG9FNpWCqvz4TLtzhqbirb6QhxJCtFHzk9G4a4MYL5KtrmWo",
  "key12": "3hm1mseCSeGysC5p57p1opqui6KECJEBH42GZSQHCYtZLV6tir4CMbRdQWkGbuSJta1q8Z6jmC6JNJEcoLNBHMmT",
  "key13": "tACX3ykVsApBXcToqQy6Vy8zYNLueDDnNsuDZmb5dvp53Ep87rkTsKcGC72pdCQf8dJqABg55DutCUfQp2GeS4F",
  "key14": "3PwDtBZte9Q58Wy4GhYihu6K3s4MgVcyEEaUtGPzjkyGxxhtC9zFWJS6rCB8ajWaSD2gWBtLWcq2e9bf8Hs9zGAp",
  "key15": "zpuptFgyzFuTYwYFNCzAL9euC3gCVLEoQz46Ynpj7zMH6v9WYwjPKfq7hdGCosnk8SXxMWY7UQtxpGjGScNFV5R",
  "key16": "61PJqgKESKuGhFa5v1eLC6BoG1EYVn4BJdyo23HfohBoULmPSERq8CyS2kuToV8UWCgYe47Hczqtqi67HyerzMfr",
  "key17": "57YhoXbdorzCEvCv1CDakVK15LGTXDzQ2Gkz4S7dvUFNYRNE2QVSWAC9YgDMq8UTgFEPpFvDryjxMoAUsPdp6GBr",
  "key18": "4W1DjRsvxsHgifFxwSJEsTZoeDEF7wLXQX3zioikdZYMD5sFAzHA8M9T4ALvQ17dn5Gp6ssFJWKrNimycYm2CKhQ",
  "key19": "5iWFYsuSDmwerjMyRSj3QKnpygprebtiBj16dWySumqJUQcg3t174ePtLeWPQDnfGL7Uhea9DGJfL9C24vrqZTdq",
  "key20": "2HZdoySccmrntorNqUJnReZWxJTeo75ReU27Em9QHgopAQyQw7XWRwa8nj5YmcTMa5aEnNTZzqBY4XeMu2dEKFVy",
  "key21": "52aXGCLpVLRb7gM45dJRWUN6za3ywUJ8GWQ83PVfo2GU5dsAnPWnkGJ19pNY81c2X2qUFGxFbhF6expYF39zL8ui",
  "key22": "4Gd5SxbEf3QemqgDBeMbTYeFqqoNWm2DWDqNHXPvcTURwFJfkuosvU7VSjLx9h1p64E9CGMi1kHQP7wmXB9QgPkK",
  "key23": "56gTNZNLXK1fAdmBr5LwaSnuhkyrxs6bnKqxWwrLDAaVZwH7mjLQqD1VHKjB54ssBA2xu5XF7J2a7CXn4m4ZPmDZ",
  "key24": "5WqcsqGyYwakxKvNhdLHgokFNwwLoNf1uenZyFGkQeu9QfoGDKdQdXatHRn1uAjXRBxzf5yRWnL6Y9hp3h9B2m3m",
  "key25": "4rECEULgAHidnKD4Z5fdErCNi5vCQMBubHwGsHkCFTSr6KDqGjG9DhdmRA7QbdoX2QKdVHu58wmyhuomuo7WqVYP",
  "key26": "4o9daorcKMtgo9g52x99MvcpNU3STTEkYnC8bqm156rGaTQLPej6NetJKJjy9SmGUvZ9hCoqb5kQAFodenJCDesK",
  "key27": "2gpMsrNNF5FBZukUwkQJLJd4kVxTSWDGFmE2THXvRhf9WM5n5Y2ovj6m4YUUdvr4v1GEsKsPshzqBBHc2czceSa9",
  "key28": "2Z6gWis7arDaLyxc4pwtZzPWu6edFA2ZPRU4gWzy5JkV1zgyDXh1CeG2QakwmxZUgRAQKgYK7EXQgasKGdunSBuM",
  "key29": "3zBFB1NKi4bpyZ5SsQktHDeGL31zA1UR8BuzVPMrxf2Gn9twE3hWzD4v9aSxsijCAff5JoCFheMeQ4DHSJutPYJd",
  "key30": "651yw6c5tSu28xYnC2sui3oGvTJToSCLxYyH5ao1kPCt4kXFLZ1cz5VHbgwEuqB4ukGiS5hzkb7wsoygyMEyDdaw",
  "key31": "5q9qfwG6z51mCyQCNDgQmmCMiuHngfWNBVSyc6woffQq2UVW4nqYK4NTt5M5dDu26bx6HzCLE2Za5ZPa8z86XnL7",
  "key32": "nh8q2CKk8iP4H4vVb5Kw4nYpbpzYw4FGo66cYWJRjxRfwwJCL854xr7GiaNNPjhbeMemZDSPHGSFiN2Vy9d8p7R",
  "key33": "3gwMSfMLo3qpYRXnbFpVcLkMHXmXTPcxFndPYNPH3xCToKFQJd7TAFt3vJAGMPotwipNb6mnC77uR7MrBCZrTJd1",
  "key34": "5LrYHvuRpnVoyfnVD3wZ3cLmi79CocaDXjhoFvZWkPTiiuCPysPQ1k988msHkK9PbnQvKYAx37RFFNgkWb3Mbxqy",
  "key35": "5cgC7rr93CjTTTYqTXnDBLP5GRgHYGW5CXsMT2C1PkmYe41XPDJLyQTm44DRvbQyVDuYoMQ1pXsy7CXXcxwbtuft",
  "key36": "2BSfx17dLMxAcVa6Pz7XPfXxYp2524PLV6WNrpwhnU7RWAxXam8xhRYxK24enhRwa8xZLvzkY4fkJ4t2WnssbQFK",
  "key37": "2Khaa4kn1uU38fYPyrKJB7guRrXYMtoxgXruQzkcbeyFaJ2Wsxagq7kbyhszN1wEN8bdjsg5dTqH5RgKcEuS4UUX",
  "key38": "3qvPVnqy5DzRCTgYLazPkLDRGHwxzWJZKK8wd763vcqofbJVYV5BbKFwKvtuPSXzQq34V2teKQLSabu3HXjfTF59",
  "key39": "4R99ur1U6ocQCpaqeWcKTQVXJAp8gohxHg1XnvcBKWsAvRFGWLvgFchMs7kEJDj1HfBTTen3CgLbnj6YFEmJq2LP",
  "key40": "65LnKqA4Lhcb74QQoikqvcPau2AKMqjWBvEQejpTEnSddj5STzqSRHfV1o5tjogCnkAYqSkggVEsBxnmYU3zjECs",
  "key41": "32kA5MZC5Zz7xuAx7up2ZxQJNUY7DZn3q3A5x5Q4vx5jHzZHn7FTRfDxyNV8pyEkPaqyvDgmCUEb6Vc7ZMARBEgK",
  "key42": "4j2igMBvZeKRCzbVsaGDWeseymVtpZXLVQQ3zDkTe3ZVUGa3EgYHhkWkABaF9UYy7651qYVeXYExnCxtH2YMcF7N",
  "key43": "4TpGAqFW1dKBrzr55d86qH5byLB6qeJWsTRyqHQQupQQh8qwo23oofN48V1nLXquEYi5GELKc5EmzwSSPa3UEYLa"
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

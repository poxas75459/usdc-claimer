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
    "3oEJCh2DWLx1SZnYp1jD95TMX7LcxoZA1Tjy5g9XsKXzTeP2et1PHdvrCNKwVYLtaSSkwWCmAWWiZEiLooaDPWxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39eZxLQf2mtynutfk5CBDfdVtzeZb73nXXxWQE4Qphw7FxfWZZa8eW7jsmPkuuUKLmLffkHWKtdJV6pjWQvnPUsQ",
  "key1": "2KyTjbzTS6gpLomDUfxvhc31vsj5ZRcxGBS8USVzXkTbowo92ayzZtXsKvWS1Sie78Nkei4gToE3KqKHGmbkPNo8",
  "key2": "NgmWQa5bhGy1hRDYci3wNk24c5utAyedMUjGDzY64ShB65XwqJQzYJ9bryabEDXa91tTUADxpr6JU3BhHeRJbYy",
  "key3": "4BTwbvRxng5MxnkYNGgXgwsC4SBPpEZ8rNjq3yWTTKoj7dh7W1jN7hQGYG8ZJcu2hHnZxsp7JNbT6Hzy9754gWsV",
  "key4": "fkXtY7rYujCRDu6UPGdaNUDSEiDFnAGGaeuQDQBGVzWXwXJ5nVYZk9bXXVhsXFzfqH1d5wyDUnsXtDYNGGd9cSF",
  "key5": "4MYTqxuME5f71Mk9MDW9vPyjQrg1xt58JU9N7YgH8WwSSgqY8BV9JQ4ohN2d9GQCzfWFYy8PnLeSKnPnvnGcfkwi",
  "key6": "4NeXc9Thr7KianZ2J9mMvJzMq4tUiEFQRbEdqF7rUm2nAX1Aoh8h9Lqteyjw8m1STLfbhAHNn1GcXZTXMAQf7u7g",
  "key7": "dtxbdzJ2Akxrw7LXVowp5sxHd9RGptxzTN2sHWUVoENrBidNWPcqvrKqMU1yCcSjeAwQpUV1E17tGpQtUquLosG",
  "key8": "2Wu3J1Qes8aZPSPmmC7z9W74iCfDP71XcA2g8TseTPy1p6eeNextintZVXZj7jjjUDHHqmw7sw6JmP4vz9SQDwXb",
  "key9": "5STwqvg9GCDTq3gtG2p5eH4ZMVZhq8p4svC4XYJS122ESQAzE7hv9GXHWeCz4MHasVfYBhnbWc7RALJnuaeCX8RW",
  "key10": "CKgS1hkj8ifA1h4HyZfeTNWSCMH8iUSWRVunTdejTJEnnrUvb1nniPNdUKSJraMXXL3UmfuQVNkDFDGDyyimhXa",
  "key11": "3h65Cy8BkxnwSMnyArGoGfQok5w2SZprZ5SRqdgbUWFFfQqhxEyfF4YQkDLfjUMyk5HySkX6WQoxpE2rTKep1Dfg",
  "key12": "DxKGczD7AbUZzaEfktkBbDtYCpYU9Ncu7W3iAUa1kPxZyNCkFZLBuuh4hn1AHn4xWKzwVxxbjmw3q94BwXzXvGG",
  "key13": "2ZN7APJZ82PJocKyHXZPEFdFVUZFLhv1Pu7K1MtajJcuNFwKDQnCkSwriW6xHtmkhCiGDAWCxv2jDX6vSzDpNsYD",
  "key14": "4yLQyWjknKrr5xLm5weaLtp1XBTuwLuBW8kMyXgygjwyu55aWwEy9AuHX6bB9tzzD9p6oKYH72FHNZK9C1WDKG4K",
  "key15": "5tjUCY7s9m3RiteoG9cwZeJTYqmRJ7oeiXxswiPaT76mPiZ5Vd5Mmy1y2RrEYwekti9RSnFfYCQyaZsCh6ZcrCAa",
  "key16": "sasXhFqMeDbgGmmA5iMBEeocP8N8hRHJXoRcWTJfKCt9kh9dnMrwaWqarKpgqycpYbrSciLxinkyk94qYtskzUU",
  "key17": "3mvLUHBEZCTVrRgMP23Nbi9UvQUqgihhpJQNQ4xMmoG9WgukCSixcqSNDk8E4KaTq74dEmvsxErHtXDEEB2WU9Em",
  "key18": "4wfmcgb3eTDGfzQex1pV11sviPKaqgGPzEsKzxVMwetyGEYxUmRoM9XvLuwhcDzwqsvU4NW5DHHqQcPSzKd3VAPf",
  "key19": "3e9qLAePZk2nCzjgXRwuVwXviMdFviQcMYhiT72Q3Q7MmNHPqHbv1S53mmUFJFvsedWvjb2e7xVwAi4FqnoSUf5Q",
  "key20": "625h8vTmJCuso2GmNKX6p8CULZoPJJH2SZLGvRCQCjhkVynrw9eGqqsfWhiDNceDUA1EiBK2Akxeoe6qXnbnq7vF",
  "key21": "5mhYoQ45GXQg5tMDVooztaxbdmZ87VYpUjTPA9iTAafxKu2ivbYP5AAQdKMvBU6uKsMfiDZmAaiEGrXnLN5hCe1x",
  "key22": "5Pw88P9Nt1FdFHYgvWw4DgxE8tLV5mHeN1xpZ91RaQM4cf5V8ra2HZybznCuQNbFpUR1UoP64jSUcqFwNsLZ6J2",
  "key23": "3yWbNNSq2TbxsvXPRU2wvVQCfzwEsynh378smMrUyT968PkegoX93Fm4WaWMrASVtq2oyYUTAd7EDSUueYCBzmWn",
  "key24": "5jydxkcKjt5NoDA4kwnf9pqzwsm5QyCaptaaiMiMcMVE15dC3vBenszKSJGJ134QW2R4CkbwoSWEwcN5KeyRm86Q",
  "key25": "EocF9g9KvUX5TJVmXgMQhUQK4QNbsAsm6ZcfgbA6HsbSuCvSyRL768uKNM1PtspqvEuXmgLaZW13Yk8iDcjgnr6",
  "key26": "4oBSbfgLgYeSyuquaF2JEmHGGJiRkRELxkbUjU4LaUEvF5nyQkri8sbC98x2BYEzA78FwhiB1EE1wXT9Pdn6VvDn",
  "key27": "3orThnLAq74rQq8FG3Wpr6SUgDfA6oRn9cHN6AJHDvpYhGYRAd29qpGH4ZMpvWVRofHWsXsaMrxWj63JrRJy6Vvh",
  "key28": "3otgVEZtAt4WJ7yZWDZUNVpwqq1E4C82Ghaj8kRo6ohbTTJtD9aCYMksdUzSi5uyvJcAE6DtVSxjZ1E7qy5YxJHf",
  "key29": "2wSyjpcueZz1gB8J5GW4doeCCraC8snq6cCjB2XZbpapLA7eWfmysTzvLSftGJiuZgAuoV7HUtQkVcyYFUuUFK9w",
  "key30": "QtTPyV6hxZkYsn6RUvU6APPcVBPzgzxuFwe5PQWJxkAhbUPKmLMBsPqQqSMg8Jskd2XgcaZeXHDKYLsTPyrdyLB",
  "key31": "3Ph6zoPMQcmhUvpXBETkjG58SCW1ET3ubE17v2XBk161nwyMr96JT6hwmEnch3aGPijbfLT5QW4G9tuzpGf7yD3o",
  "key32": "5Ju5UHnGWyjbcUkGiU4ztWz6CUqGDm49GhTtGVwTpjwkGCA5AxWqyTwTZxAA3PHbJq8KghujQ5swLgqTNKEdX6t4",
  "key33": "2NhkzxMknNyLgP68XXmiUQEcJn4pV9Zb7Z7kQW1YC9sUTUtHJxrPkby9TAshog8dMLPQrDJJ5zKY5Musfoi3NHwH",
  "key34": "Lw9HpCV2DekXQ32ozUEhAHdZPE1HqEhQMKcVoxcAVtBTp5oh2g28Q4EoLjBxqmndMLrLv2yp1tqK4poTeWa66cU",
  "key35": "n1GSTaHFbojaQxnuKHUZraHwbtpvDuYwSCHTgPNDdqnXYFy7VSUN8BCUGsCR2xjbZYyXVWN4tB81xopHu6RJ6e2",
  "key36": "235RU2podavRLzJuyBiWa4VVtbR51BhjVMRhR9Znr6McpTynukrWbs7vXPp7vJotvwPUkpV7GDD9Y9b3ftTiYR3A",
  "key37": "2YxiKPdQKpUPvXbhFcydipK9uGG6njPwVS2iN3WbJAZXbtuwy7CQ5j56Qb1k1FTaivZSceSmmupZhs8p1VX5v4sk",
  "key38": "4TFhV8qPBnGRpTsCCTsKECgTVjixLZpvnVBo9ZJz8M164pnYxc6EZCXev2GgVcJh4HiKbC4yg6BRDTkErK7DhGwb",
  "key39": "3gNFPiVnrejZkgKZWpi8iQwbaKBJ61qXtYmw2YgNrT9FY1AWth9HAzuBCnMEiptzJ7vW9wZ6Ax8nnbCADXpbJjSG",
  "key40": "3DbzGgzJdQeophg3fg5eVUCaBi5T1sGBqnmCK9cJt5Mkas1ZCGzpuVNgXFfnxqxubgaMcQZXNBW92HiNkpYRxrAF",
  "key41": "zKfRyGh4xazUTWczXDPn5qXALn8vYj4QEbG3ncyQRwMoYge7z9SJstet5xNBmg4w5jF9sVHJ3TM8bRYeTQkxUGt",
  "key42": "4i3xWXMbZaxg1KQKUbZDxd1RC2wQR86MMLKniP7j1H5oXHr5mxMJveNA519beyAf5uM5ekZfrnEgD8cbmFLMtEo8",
  "key43": "42fSNtY1ix8Zk2XwHgHvDnBaS3F8EWRCx7yJi2vuiv1uvSUAJNzp4urZ1tPLJQjf4FNbyMckeyBJmFr1r1GfR9bD",
  "key44": "34RjDygEMBzBJUxFnJFom8uJ4RaurFYVPVnjFb4ryNGfj73JwRWqzEuzHZitgybuV6D6kiDrJEZcQUUbd3edFygo",
  "key45": "4HYZwLxdo1Ri83iM2Vq49NdZ2hVm7ypN8uHweX3J17kYgLPNqfR5zX9Q3ZNFoQQJvqNgQ94mMd4GmWdzuXa6VwhQ",
  "key46": "4Z27siNX6RK2BP9Y7C8Y3EFk6ue8b1CrbF3ZioCrokhU5ycuHdVDai7Gkt19kzVbkHSakCpXmrfWXqp5A5TWV5Qi"
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

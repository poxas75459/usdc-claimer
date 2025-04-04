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
    "24nh45hvmAZzgS4cEHkUeKJrTdk4zZdunKRnrEeoqcJJQTjW7D3sisRzUfw1xCwcbVYS2UonwN6amsYS78wSZJKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m4XfLK6XgGUSfqLyP5QWQLAzkikXN5kf51gPsBMNggtXbQx4GSaz9SHjmdbL3RmxHnSaRfB7gndL7sFDQ2G6YLf",
  "key1": "5m9igdhkMWuLEnSfKQDt1BbbHviqHWEmwEFcxckt7wMC94fULuvRPNQnAsMku9fTCxooja7q3dRD3PPgQoB4onRq",
  "key2": "66WJyHTKe5o5hS5DTXfM9bLC2RyDPxz9JTtKBXhUc51aNPvwWqAEuvSXavYdAXZtnUNC2qpzPwMYnp5uAojxP5pH",
  "key3": "JxUTZkUXJw3NjRgJuMkQ3Jg3VhYsFu2hY1eNyqi8uETU5BPGBNuKTKteBysiCz5QTRMFbD3JuNMgzjQL9TC8xNs",
  "key4": "4RXhA4i9Qf5FSVmfyg5e2633psGm3XoYgCoxGXC6mdcEP7PySYhnJFQSooeWj4VEdqBrbbT8QnHRpcujbMGmWGie",
  "key5": "3nCHM4jy7qnTGCvgvrQAqLuXvm9CcPPnFhB7hxPwmGYpjoGAbdVFAdC5oapvj26xZdmy2ouCQLs4bdD7rZ8ywZfa",
  "key6": "4aP6cDUHuzTYkJVMT8ydT3WpT5uGacKGNCGiD4UVqUm6f74yhkJ6z23KXLxQQ3w13KWdRKe4GXhHQaqyr4TMCtZd",
  "key7": "2aa66EW43ZUvU6rQ183RYw9hVWpGgzVG1UEp8muyD4NFtc4EdHFu9MvnXByLcYkRRsbZLQ7KcCf1ePUazcUbbMSZ",
  "key8": "4zf67fot1qU5DtjmwDXsWm2qwkhXeJcRGLy7tga9Vx1dHMgeuL7c71ULMjV3knaQHp1zR2HFc8BzbYrLdKqdhPLb",
  "key9": "XnfkJAyQoeyYBc1YZczopVfyj5rAx2JvtfuxJer9tLgBWYx5mdbN9keaZeuF4GgB1wVidYsD9qdh7AmqN9gJ9CH",
  "key10": "5NYJy77uhoX7TLanSfP1VhJpaopaCDFH6BhED5WLnZ1twyEkB297dGM34FojGpHnvYZvwDSA6zqGbWRrCfa2z4hf",
  "key11": "22EWr65q8LoynoVyFjzdRnLFcuc2x4oYopTJdFPhpGSJBBPGYaKX38ZoEg1WEFCV6njUkonNXZNMHfgLoCRo6H8h",
  "key12": "4LS7fNKB92zXhXcEpePuUqcqNZ5aYfVzTiuRXaEtrarTTastVFB6cxwQjgBgKuKeXhqZQ1A3PnEXMejhwJPssAfC",
  "key13": "5WxFf5qzvmq2WhfkxrFLCx8ruzvqBQ3pm164Dh5sMADkF6Udwh3JPZ4GVMep5tetCkT2j94KHWtsALwb8iPKN7gf",
  "key14": "2EjRLfGQC62jWKfc9o4oDEYYrFHboBs37PtZxVeBKfSw353TwVonnmhcug2YEBLbQmsCBk9to8KUhiHNsvc9dANE",
  "key15": "4TF3dXiJCHuM6oGqq3b7F3YF13rx7m4kjCcz8cGYV5Zo3eEP5cmcB1zi9GrmjG4kdKdhZESUDhiMmSAUSfDepZ1M",
  "key16": "2dW9E78ALK1FJDED1dER54rZpjwGtR2rmG2ds9Z1RV6dDSLGK9rkjgFhR8C2wCZYTndfGr1Vhkgi9fkurLnULMFd",
  "key17": "46rKvaq529zPhWi7DbfToPTAqCUngXaPa44azBC6maYofSRdTUeCL55EmqgAJjWcV6Cq8Zmu3gYCVZ5q8bwCzvWP",
  "key18": "5FRvsji4Gi7tkPEF6FGjE3jrfPuCg8fgP2eVquG9xKbG5CQsxLj3bwiQat4Dc4dqKrK6zTH5mtBwtjTaezj3ocNv",
  "key19": "kEu42fGosnpB8r4FY2wa7ACY5Ru8gVMdsuLb9Eoc9iJpMkKui5xu8oYA8ZPAy1FYx2x8bGVWEVjime1HYGqfJvk",
  "key20": "5XxZMJ3jpc1rd81SjBynuaP45j5eN5miS5unkWSy7yLEXtaSNdZ9R2KT3hQqBAGNXkvaYFqc72Q77KtWzRdohM7G",
  "key21": "fXbRA7VVoVqTHSHywAc5moxNfbYK7CZed1m7wRc79MpzCxmuFkyS1ArfAyDjsExEa7yrgj3T1i224cWuBEAvEZE",
  "key22": "3iiQa6ezaPeFfhNE9jwcFuQdVju4C9N2quEfoy2Kq7sPCpYLkbEV21YJYiJMZLK6t9fp7ERseLNTb9YFMkUFwH51",
  "key23": "4V8LFr3EGA3Ejoiv7n6NTmTYPBMvSSFXABANWx6mhXjWm2hgNhTh8dNbyaFAebsriZ4MVobneXcc7DQMV3uw5T2R",
  "key24": "3jnt7ZqLPhgjC3JFMfQAwkDqvPomPBWVosevAZUMUz4oqwiwg2bSbBLwwo2kA6uiGxcHHwNXyygG9zX4Kcf1Ptzg",
  "key25": "45GTmjMwJo6pEWZnhwcRLsE1VLdeYLXbyygYN8KvuUuCtttNoBDwkakMH1fEXUU6FfXgcJf58BhDfH2zk9XrSHuH",
  "key26": "4qkjPFPA9SNAAda4YPAusEHPBLmrgj7rypMjFBXYVBHCx3sEPKJN2AfFmFo3qHK4UFeZkjmuR9LxCvRAGFU7sXLP",
  "key27": "28zbbxK7boAUXdCn3ZjtC4TQaUCsEV8feMeDk6vp6WTCwY8EWKdbntbmRXfszDaCFET77QLpcro99AQ4Moj8D1Ji",
  "key28": "4tkiAUpRMF56zUDnv4ptYLTD8zQmqbEiK8FCAbbKh3eusB2u6GsdSWMzkfzFRySdaz32Hi5ryf7r7jxfo9oAxybu",
  "key29": "2snkQXEJM8S8QBPMrP9276LUbd3t8uDSUqtecdJCB2w8UzQXTqucF2o1XHuanPW5PG48KoSYd1NKzxriihtv3WCz",
  "key30": "3Ua1p6q5iBJ89iFd7TFc5nmJLdXyU2PHUgXMCtdb5aVcLPzRwyBowqgeioQZ7eEApBkEkJ7LWxX6F3fozicTPV9",
  "key31": "3yu5BJXTy3kpXKLCYEJvmfArzMFEjHjvQmVB3UjokThMap22GZemVycZKNpHeQKrxc5ss5gPjqbEJpQgf6f9soGz",
  "key32": "DhJj5cwSH7HHHE1wqWWEUnwgySBbSfJLdPb9vV5gmLPmATYmAXvoAKZy1PQGRPDiFP8JtnwWw96ShKQPowmBSbn",
  "key33": "311r5SPtCKMSvCw5KQDLEdt7VBP1icqbMXq4FbNYwvRuUx6H5C7waj2aoR386SSvxo4s91BhgqA4x4eoCSZ6e7fU",
  "key34": "2p9xhpjfixiMSLALiQbFeMAfWszptsSSZmRQU6nd1pMKGm6qMwm7ZUzq2SaPsJyyZNb8agV5LufrZs963WXSyt9V"
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

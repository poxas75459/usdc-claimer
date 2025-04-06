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
    "4x8Q22J3vWy129hiJbitCPJEr2DZ61UEWmR5aJSiCGNhVkTzau5rZjRCPSym3xdsGLGbqhEmA9nbX1cSvHTrqLqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X37Sf9cdZVu7XYdswAfcFiaV172FUyg91AfAA81KwDRJntB13jqmUf7wRZsCZUxdLhqS2aMU3HzSwPtzafG9oBE",
  "key1": "2UwMwHQwg5kMeA56Jnix3ALQ9h1hC8GWbe94nDE9dPGZeBP4xgEcdybJMeL3auhy9UZrWXYvuUexmsr9KP9kChoX",
  "key2": "2pFqmvxxYrS9QFuGJxPagKDWuWbA2VoYFL4q3mw1zYfga3kYBvvpx99RKwfAaJJ8R1opNDvdMpDA8UKRp5RxHhaS",
  "key3": "4QFArF2e2hZ3Rgw5q8gH9vfBcAspq7Xg27oiveVtZVfE4cuaXcQcX5i9NT9UFK4iQps8EsVrfeQ3XvrUE5v9zZD2",
  "key4": "4bpnzTCm6LkbNLCWcXaybSdv6CAPEnTGjpkNwEggPUrFnQhBMJsVZoKcQHFEk1ztwA69gd47Cx1NPYjJaZu5Zb6e",
  "key5": "643aQLjGYa37YLc1WhUnx2pxzApezqW6CuQ4M3idYcR6y8GEpNWnRpzaveV163ryx9sHwSkY9TdRqoqhJUJqi3nW",
  "key6": "2ojRuTdxagUqRqTHZtWue7JrH4AvbPnnkvVzDHFG9ygt2CYSCHUXE2mwvRBHjfZGLkxgr95pNppu7tuUc3dbw7Gg",
  "key7": "7QXPyuMFi7s7mfuG3JN6HUzprKsr2BcaBELThE7MavenqMUef8Js25ysqTiUZFhwVaBVvatPL5tDubmFZ8H7US7",
  "key8": "2PUPzDbJVyJ5HdyJYSAadVAcJimod5UQDXDmn7pWAogDaEeDDf8zg5JYVhUpuWab5faZTac5PRjYyGko5u4SqByc",
  "key9": "xWskp63Ca4ttcHfmPUBDs3Yy3cYd5pzv9brzUH43trScSvwnXRE8uZUsoPuodTpwssWs2BcE5GD8NA94PNynNux",
  "key10": "55Rh3hTyUQZU6CTNURLMJk2ht3ruPgkFCRsoKCa9bxKvPYAvpBgbRMkpJA9Rab2uiW8u8fLkcFZ2j54LjS15fbCh",
  "key11": "2nK3JyQ6rF7A7eCgBo7jwkdPGvwnKwTB6uonkwuGwqVJH1XAgMhZ57yxxm7XNVGknnydzjssgasKfARajRVSpezD",
  "key12": "4EqszSYz3ViLXA6t9jc2w1YdKgFx1X1hDXP4qHrNGzoSisveQUDNqifa95bCfrmkur44mwSzWw7Jin2sxqDHGVBt",
  "key13": "u2MQ33SrNJvmh3t2MhgGif2NVfFvU6Ri1D8vsbrJy6AMUMt895vB5ipJ1XEa2X9rsBfzD2DNrnp28T5vUQtm79C",
  "key14": "2K5o6uqxiPHaWxcoxqrsazKNuESNu6jKfiqhTmqcpj5xrB4xSJuwQk4AxEUexSSHpXdY5n3sr18wayADLkd9zbQb",
  "key15": "5J87ysGGMToNGwZX9UXUdLxtng964wZX8TGpQk99ndo2YcD1KBeDX3D1a14SdCs5DjBhXGh6gybw5FtCi7842d5g",
  "key16": "2c5wFZ79CgLQzaWnMzPu5iYVLfYjJL3MrkBGVJFiAuWUZLdEj4mynYRJiBtkBZcXSneFWe6XZQ42i36VwBapcw9m",
  "key17": "49RngCGzJdddNPBNreySnxaXDGJnsZgeiy9uPmBnz2Cs13kq2wezt7HdurQjcDTGqBNXL99PG2FfLusedM4SVnxw",
  "key18": "4mKugB4epiUZhotCEPYwKuSxeFedwUZL7HW5UvEbCPqhdfj5EvNECPxFs3km6URoLZ2AP3mLRwzSfGg76cT7sGAN",
  "key19": "5iQuA6JAgDTecDpMJ3VZse1t3PZEjm8vuCBCh11AKAcUK1ecn2rhbzU82JsVNs2E4nMLcpQq1xe29ArJXVMayBCT",
  "key20": "3tx9qReNLH7g9XZRK24XaBgj78sXyCR367Vtsv59QNU4eZzLBQVmT493YmA5F5pfXyEhWXXoivZ63nALs1cACpZk",
  "key21": "39u7wKuaieYDRGjVfggwnYWwXfTAksLF3EuL5Eu1rk6EvVxoT5SW75zCVbfngAYuBEtdwQcXx24owrpXPYvdoVex",
  "key22": "4fTo9hvg1e88XXo7ZSw74fjxXnTnnLx6h3FkUbihgmFcP5VTGSKGS23FoTm3hiH86JvQ2YzdFqLfHT2SsKdiwepx",
  "key23": "3eRKEFVG7Cc9Yohjc33ZNp3Kv9VZikNL9pKTvHafLyg4WPjnxrnJu2uo4vaoHhyYfKapbikym8NmsWDjKDXycPBU",
  "key24": "4ACewM21Pbyzp24FxjpgbVW8s34DyK7PT2QFMRqbCbupJYiGGQAbuYcQPVQZ61eWYvjUoqNQVWvPi4QthwQwo8HB",
  "key25": "3eNbhUekAePgvYAL9Yv9GyZ8eWo3WyNQvuh3MBN44xyLSKxYt98hLYxaum7Lp45GSHMumzWWpx4PiF6XJiDRwCH1",
  "key26": "2E4XPyuZ9FE3xHC1J5kyVKRG5AYCRNSBvULda3RGTYU8x9tx7q9XPDPQ1TzvubPGd2FERCcDW6BwV7aG6A7P2T4N",
  "key27": "4onwgcRM5bw4kBarA9BSp724vzZZ6suSpy1MByecE1TkSvDKPtSgc4voYPjpkbXS1noPbb9te1sTo1mNxnC4VAoJ",
  "key28": "1aoWRC23gn3skCHZcXjcDTx1adLgUVnrQLkG2u48iCP3irGQTHcKjJuSbQzJR8VKPiqu2fTycWzz9Z5gPnjMK9t",
  "key29": "2UDm9WPaSJ1A4AG7iPycTDkh1zofptynaBjw2u46GKX42yzFTHrPuYMroUjaAURWwutHRV9DVPNRjt2Xu14uPvqF",
  "key30": "5sHfajbYSwzaDygcz7HeBfzRmVHq9Z1AX39r7zr1KYxr1nFq5CesKBrPMFmmrhs6qCL1jWxhgYXrsdDaEGHciqA4",
  "key31": "4zb8EmJx6gveyo3NSGbQuJwAuPkMW2HcjyVtH7dace71ed9CWz4neJ3aDw4cVmqfCJryX5AYb4CQufGQBoDrSWgm",
  "key32": "63VbiPJmxaiDu6txmsdGaiAvt8AowBkHXE1Cy2hyPj2jxhNdis7EvzXfHbqMUpDWM6p7ijdfQW29mdQpZQU3LBFC",
  "key33": "3vEfwAscF7ynf2JwPbZfNZtx2zPC9xTBWaP7MDztXjGZaTqi8bBjQ7pVRhzEC63QGRy5Jk6W2Gcq8uJTZReRBvr1",
  "key34": "3LC3qSNojpdrH6i6iiqDpq9kL19sHJaJj74mKTWaAvf9s6p2dDo1YYJF3FA9TW3DZ5kCFm2faejsZrFrjaA6wsVi",
  "key35": "5ZFdaPzRkvjHFc1hkb4hweD8dA6S28KiBTjfcYpk12xmSDNW8WDqCbdyiCgBZRZhowjfqvTWTcf74thStW2D8NVe",
  "key36": "CYmXprRe4x4rJjfCEbTpGjXyNmbqwmSNDtJhD7wyJTDAkeL4y3dKQ4nMkdgDkhXmQQwGiSzKasNAHERELQqMBbW",
  "key37": "2TAtoxQvFkjBsfPynzDvMzumH4vfAKJYsMTz5a3SEXaKYdnBnhvRhMo9gKjQ8g2pbvdNumnkTQcDYvHGM5cmR8EY",
  "key38": "qtu55XTydtouvRFj6PKZuotznyVjEqQWC7t9LEuXJLg6djbAYSkUvZrEARZBFB4zuUTaJpVAV6KnfFTV7r3FvRg",
  "key39": "2g12Gk7wEycjTj4aDkv1ti998AgZSogzrZdsVxQHcfP6heie2rreSqQdFzoUzK2GPcJRikT7FEeckALkGSGT6qri",
  "key40": "4JfujiEyhPWhwv5sWncKf3kJYXUW3a6EzPKd7cmavnGAfNpdW9qzDnxSzXHeCdMnj6XyH6jdPcexR6LcEZ5vF7gW",
  "key41": "5afFaqUhDqdRtBqaF17DBqyFyzvxKvf8YkjpVmaM2xQaLkvp9QXkDzjfPB1ZKCW6sCJ7Cd2Ry63WzzvPLoTfuFto",
  "key42": "5acq2oTH3rZEVAAyoDzShC8uV7sen8F31FGzBaPKq54P9gxbu8tPGXT9H46cQD1YjB2wKFLrhP9SGe5PZLcDd2VE",
  "key43": "5oHu1f2LV46zMPwTcEJe9vzyorrL5bfKfgjGSuqpC6pAgd1jC9SfYxMYGNiLNFzjDAQJ8qF77rAaepzpU7AEihra"
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

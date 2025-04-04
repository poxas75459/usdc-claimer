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
    "19thHX1Csy2qHcBdLnt5fxBosBgd9JVs29qGfWXo6aDWuxfNsz8VZPoezosT8qpvFhjVD3PHp6iskp1u64SwbMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nsfu8mFfcJ2n3zLA58nDAhMPWzwBDo4f7PGhGneqrdExFKve6dd2W3chwcTchAAahUJZPXj5gJmmxMDdRLMQaYB",
  "key1": "4o3eDmpRHhCrya3WUFbJ7cGncu8YC5JY2Qn615kPa5FQjkbUwHh5f414DdvHBH7QdkJPtuEPrrmGPQQy3pqaH9mF",
  "key2": "4Xt7nHB5EkJDeeSUXLdkGMWS4GsSBG1khJmaaN1HK62YX6YYqkK47WpaBSyKBkK45G327MZ1qLAqeWU6yyKEvtGC",
  "key3": "49jyT1gC41bvGdMiQRo9d3ZMKsGbVg5pZDoYdSkuE3iv8SDr2iBZjpCtWUkrdrSYikLS8Hqa4Xt3fSAkALKbjzKW",
  "key4": "2QeTC2RFZWvgsQ33PyKrp1NaHgbVdfJyn2MgCaBkTN5ci48smLGZ477XAeh627wfisrtp9XGH1o8v7rieEKDrZvb",
  "key5": "4q1US1CR1w9qHxSB7eoJxvpWSMgej4PsCSYnCyaJLfv7mRZudcKaP3qfEp1Vi9b9bQ6zjTkQ2kKFUo37kCHXe76c",
  "key6": "5gNiPCM68bAxVzcoMN9NvNKUURfV7bpdKfRxQ3aMuKFPWWNYYG5mA699tvrUCGaKA4ThfcnZ34HDPiucYkqfxeCR",
  "key7": "62SZC7cPMPRgAZLBGpKV2xjza1XaHMvk8NDctAy3o5oRcNQjrptrwQxy39TAyrcZ73RR5PF71n8qugTr951tTcRQ",
  "key8": "4cbDgFoQyTgZKHJQv6gGfwXeXYfHFeAe8Yb3Ndqe1p71AFQ2YLjsCeRJPkHHZPWrN63biRA21UTegpSUgZu8X8ZG",
  "key9": "5v4D9Tggjo1LmnhhmTCnrd8x7a6sJBNbwvspbRFAB3XgrCgtBVWNXzzpyy6EPHRCTip55sDiVnBxQMu41g8D98DX",
  "key10": "5rojfWaQFKHshV1J1qW9KygNLNZZv3iVG1og55LS4zgncNQY6mVAUUhSRTUGKUWLTP5zJd5twxFUYJvpr2d9gaPM",
  "key11": "5jBL5bQP62X1aSQCwCdBdjh8EpmpFuarx3KLco5uv4284oiVHHzX4xKKLQjjwm7gZuDKTrRLK74b78DFKNJ1tjBz",
  "key12": "32xgbQo1AnTLEMoPwnJKcswTy5EHTpx6Cef4t3WdQZTZppQ34eUQhQs1vjwUDXsQQ6kd51cPf2LhPCwC7yTzE9UM",
  "key13": "3fr8ys4138xom4WEe3dKEJx28GgzDSJviFCLHEmJuT49eggXgKyMEYS9mF5KiqHoRQkNQxsq4gW7ZEEz8ehVJFHw",
  "key14": "2w9scwQkXsTLUGsvypWdaWyvoUmsayu3QVziMT9qzLCPMDLYjESzvZudkwkqtD1jc15U1nZi46meT9qB4h5ZEL1X",
  "key15": "esLhC4cNuYDXqikeZGmstLfMuYdvxENWxWzRKAqMpKsp8aL3mS5qqiYwo4PPnPJyiLNYY2R1ny5EGFt5jZqFw8E",
  "key16": "2g1UeoMYKuZ3rdKWbTCetDXmv3VUdbEcWFVMoQbBuvtVyvub5YjSj54sAVRLekojdDvZQVsLwm6BpeN8WmQfo37u",
  "key17": "2QiG4zXg8FJM3mgsyM4DfVcMt1PB1h5EXV176EuCJPshGZ2oMWzsuVfnc63DSdyQhzkMfmiyURcapm3dnqsGJm9X",
  "key18": "TbcUaaukojZBkqnAXXa1jiJfzdphtKxQs5kRSZMBKDFrSkpN5mjRFsrQDQoAj4p6ZkriT37bnYZYJtNUc19zoGV",
  "key19": "pxx3ixDt1i7onLduSBBf8xCdrSQ4vWXvzUTmW7yPGnwi1Rtx2XFy2qVQXbsZtYzwzM86GnP3Fe6yJMKeZSYafTp",
  "key20": "4aWG8xwnsopBYVCj27ZQVuiX5iEJhs8AKprdbSZ4qeEQwELAD7F1D1CKApLFmxMVLbjqncMkjmt4x9uFmkodwNHX",
  "key21": "4iGb2pcjoJYqfWgJ9AZvC2o89TUN9grLteQrBvHHAfyCeMLBMnmALL1Pj5B3x1R5pdaP3cYT95taCmqsLsYGbdCZ",
  "key22": "2cGXhYaH37B1toNKBpw5npL4qAbYBBDcyUbZ3ufcqUu3wi6cjhg1Kw2mLrDFf7VTqmMSsXXqn8KBdQk11Hr6HYiz",
  "key23": "2d5aPo5rZ8jjve7eBMtQfNBULcLMyUNadHtaHTQ5VMcAZu3GsJTuXWHVcWYVh4ZU7YtvPp6xMrSjzMbUJSUte15y",
  "key24": "hca9dbK9SpVtjHnq2g7njAQrDqiVMgPrtbXEtbUv4X7VUERaojH2TbRY2VBVAkSzR5GWrSxNWy3uoUE3m1ybdf7",
  "key25": "2a1yu74zCbbB3Pu8kA32C1wNZzVzmWZSMumEEW8xxcEQpMw11phZSKhkkfc5MokJ9yXArumH2R9HfLoDc5jXfEVM",
  "key26": "4qeARJ28K2p3MMmEF6RZbAMxChGeNMd9HsKQrS42M44R8hmPTYa7rQKhgLhTw1FnyQDvjVrrDmsrcZ2mY7eEasue",
  "key27": "43PTueg3o6Vz7bAZpdcahexUet9NXET8C5EKnEsAYztEFk2CwgmeYxj5PM326EEifkAMaHqhfhYZLGquy6VNcUVH",
  "key28": "2ibitdHEc5NZQmsbXqGfFUJYynMAziMa28jSoRHGVh6tHGVnXozZw2hNuU9d4ijm8yE4jUfBou3hhuupWkQaeW6g",
  "key29": "2sZMzppvrayQazULwHGUsV5atKXx5LZMqJbQntHSYrwoh42DRce3s3tazu8PRTG72aJKmcKWF3NGQKMttWcWLQVG",
  "key30": "3F7SXm4pUnP2yLrUaQJeL4qnDy1yA2xyz4GPubx5QdndHiDs8se7xcW5fb47uKsUZBsnLwkymv9sK5kXdR5FdWVX",
  "key31": "2KCzi25mLVxTYq4aSKFCU2j8zW72tC1ffyC8cMYE5z82fjdJJkiXzgSh2nJESevLg1E9gzsQwcKo4mDZbVQ5rvi2",
  "key32": "Vrddb32hT9Wgu1fQ2dETZiHsDPRXpjPsMRQaipjX4FMDSJAWofuP3hg5qHvNwFjbx2SD5XKuSYDH9eSBhgPdYkZ",
  "key33": "2p1Gnm1su19Q18859SPVmwCHNxf379cssPFjinFk71batPN5UHp7QSbqGrRECzQ3tJHKS1frfceyvpCgXrfVT3j9",
  "key34": "5sBXnVWJE9hyMxTPCg133zvVCgMo7hRRnE7VwencGXfcG7ZjbpQxiwwY4LXE8EzScEeLa6dAh5oKEbUn2Qa6fgZ2",
  "key35": "3hFGisbpyW2JoiRaXZTokSCXi2rJPzESFcHhC1axdgqvWC8iNPDK98TKMSJABZUDT1ABHL912L8byfeHYZqrptHK",
  "key36": "55fusz2SrBDNP1TMiQinBWRBa2HqgoTS9sJrnFxr2SuRSPsrsNo4z9VYKyMDcgmLH95p6BzW3XJ3WABS2H4vMVMT",
  "key37": "74VRy88VmZpwZXsTasqmAnpbDNWqyyNPHiDxeo1HvtydLnA6AoeyWq3m3QknJ67xfCw95FySQZ3Bg45TPPYfg7N",
  "key38": "Mdoj7XZK6im3y9r8sz1kcT37TYR2vLnvk8ue8dbFnXH8rUkJ7BPiJTWA7uWnjRh52D1D6uMpMekDgviZDDvyToA",
  "key39": "32RAv2xGbYPgMchvk7kQMLLtSyXhQo2itsLNpUnVLJp1ERHFLQp9ETzGjXzZV79FjmbNRso6wfDhFUL3B5ESBYSQ",
  "key40": "5kRCPYHogbSawSrxNmhahZKbHCgHH42GN8cPFPaUjicw3fR2t3zCCQNQmF3ZEHK9GGk4a79uKLyNJtBqcSU3KSn5",
  "key41": "5PAhHfWuokTLJ6PaCYwPvBvkSxfaWCa2Wf6ntNrXi5jG73Dv7UaqFGNmAo2rZN57YHUA5gMUSqiCb4bpc6rUEvBh",
  "key42": "5JUNxbjLpWH3GMhSasb7t9FHuADqtEK5tPYghWd8UQvdxXXpKk8fAxfkGCUtVPJ5DgGAxy9vK9xL7ZohwhnGTBLM"
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

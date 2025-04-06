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
    "8QkadDEJi7b8TmD9YKesTWgytcPewTcDu8yCm9KsiLWKHrfuqv4ju3W8N1D21tPe9ybpKxiRVCB86aUGKJUUFx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VvqHvy7ZwrHve3RHot3BMWjVxJ9qaxHhqARjQfaorHneVowjJdP6h8eT5kYHpdKDCANmrboncoArKWcXs3MFxSU",
  "key1": "2Lv5kTwKQ2K2a5QqyRKWAh9pZqTuiH2tpXs6TdG88zbvz41SPURGcAtHdRiytzo8zcS91m6u9VSdzWpxCmLERpHc",
  "key2": "5XhrLcA7mFuBiJxQ8UQDm8JkU3pXNiGTNLVbggZi25KWJviZvL8q3XfXvFb6qcpbbu7ZdfekrdAfy1oEQ8Ab7Poz",
  "key3": "4tNCpd3nsNRL9w6DAG6EmNo9N8tuHYjw7qtb5VgcZMWuoJjrKrtJgrMc3hyZB7YaNbUV9CRfTjqoDdtzmtwQMJmK",
  "key4": "4TGWeRj1zCEvCU8wkWe5X7xiVDc7y9UVVftdaYhJ1DfDnUmbL2WNwHxmwTyFPCQzUK5qTtkeKifDucC1ETrTgLmZ",
  "key5": "m3SxGQod7AmtssYQbXVUt9HTVv9ujpH3GgpHwHkKC91GLGo5a31RFtFzgrrZiXYjBFisf7qVra3Muyvb1Er9c5b",
  "key6": "Z45LPjx543QKNNbZNzArq7vmhoCUatTSc4RqE9dPGgQphJL1gkgSnVLJH8qWQ1EV69VYMCGkKeyDsu7tjSXF67N",
  "key7": "4ssVh3iDQfCLCXRszmztAo9t8BsNm1kKAnuvgYKEYgQFqKAue9LjycQWF92Nm89tbve7pootX5Wby1KfiWMzTiNS",
  "key8": "49RthVMpi2Z7XYhCghBBpeKAptkTqL6DKrhht6eS9ndQU4VixhEjMstShyhjDqHTx1N2LobTXkvNrCJDbUhhHomw",
  "key9": "2KLaSzCxEiavRFN1wzquAmzzuwmVXg8XSKYuyGAZYtC7npAY5fbPWEeSiwWYdsfgYMFy4hreTZmGSegnNo5HSPfi",
  "key10": "3B18MVkFx7RWx97UK5sgoud79xtsmUxb6Lm8cenRo7C25VrfcgCh6nCxkGqXYSvhQzhanbENYkSg8WAy5akeAavB",
  "key11": "49gh5SAFqNpaZpJANU5uuwgpfGeVuKVzkfqSveg49ZJFGw27rw1qtdXxqUDCBhkXKgm5CFpmy27oEJhL5sx6XR4q",
  "key12": "3Vh8pDexrSThd22q3wJBreuM1qYjQ2hzu9UTcT1zACvyjAzMbXR9moD56bF4NH6Byr4vX7Kkc5LaeFWApve1okuo",
  "key13": "4pUQTHT2NYLsStbVY93MEtfbHDUQVGSMvsds6fYmgYm3gX2daKKggSBxrmtSUhqYinQpAvQ2o8mtbo3jmZLdkZGW",
  "key14": "2MmWsX2KmCaKB1DRFvBNWrs7M4tLWMfMZBa2ofKjJYAuttb9vrKqY5xTXr39vnoDLL8gb8GMAF22oh7niCahq9bU",
  "key15": "xSq68sSPuGdTV8mhp8pqMR1CDFqAuN7qrj2DG1RVpD4yBsoemhNu6gHr3UTWC7xeNZkQcesRpvncJ5Wiq2jz1Q1",
  "key16": "279fB8McVrNR6k2CV2ZSyWds8ta6emCqahES24SwpuU6cLGJ9aFrmZRvSGbn9TyxFKrEsUedvDkjZKanXtpvffJi",
  "key17": "4AxLo7upJcmTCU6fZDhn6hWMGmbxyYe5hJGngoaXabvJg6DqdCdMdK2CVJ6ACaGAHnrWpMJ4XMH9Lfa3vxQvFP4c",
  "key18": "5WxBBpihZ1PJUv2paekzny7YsDawaw8LQh1DP4WDJiARNMFK6LcaLaYjgbxzTA39zUdBvVDMc47DPRm5oi6JTYBz",
  "key19": "5xpNU23k5yE5WtfQvqrZB8fkEmavbquTubVdKVwvBrosk1KCJTenno2Li4q87KtezfSVGeVPuwgV4RcjCcfCLH7N",
  "key20": "36iEsMi6iEwjgpCvPiuAARSgvzoUfNH6zm5g2XNVg7ifGgofCugSTgU7YPwXc9TwyLcsQWYRF22NxSToiY5gxWZs",
  "key21": "3Ti7zyrnKM1HqwTYQ7vfjpf4a7i1DrbybHs93qS7R5gCPHmAEqctXNddEDEUHqd8PWiY9HsXgVhnqGRQJDqGzUcZ",
  "key22": "4eBN2pgNogUpTUJeKt948tJbTaLyqJs5Zpa4LnbVLfhY3uFXYV93cp7HPfmdduM2UxbnNe8gqTvoTsvig2349Baz",
  "key23": "5mjFuTW564Dz4zcHKF9atvBecyS6Q5FG3th1zyidgu4y3T6VWBshduzJwSFAvvqTDH4H5mVUXs81d9tT1F89EzF",
  "key24": "471e5FRydxrP8LWd4mvJYQ4x3tRQaEteRwceEY2yuhmoBy7BfZRDe6Tyzt6F9kTiGxNyCePqwHvNBQAjgEbxwLsA",
  "key25": "52hFA98dT4esps6Xx6SUYnq7KxoM9YSzRzW8E2saNMWfKWAFD86sCr9dHXrRaPmKQd2xo93oX33dW4J32dJPkqPL",
  "key26": "2rzheRj1DYjErhMzuQDSPdAuBG9vQ5mHBjYw4FcxauRWK8XHKwrUv1t2CKr7Z6rTNHdMHXmw2FEm6mo6ZUvJyc6L",
  "key27": "3QfjWZjNaetMy7PuDZSfFUk3KmMHbJfYJeapwZHRw6tanoXmqkHqPaJRgMN6cdiMtTviCVAtoAC1ZSCFsBMYoLrr",
  "key28": "2JDFQwjTvQY1VXVu17Xvh7iRFBXT8GcWffsk1JpReTZLmuqrqB5b985RdyGuhdaDo3M6vYdBp4rQjeg11fgQwQ7z",
  "key29": "4f8axRjE4Wu3k3d3WKB81Hku7Eb6Sdd76Wtp3NzGTfPDr97qKqqsagSFL5WSTPi4QveN7Rn3iQjRbhXrgLAA2jyy",
  "key30": "4Y9GJRJMoWZjztnJdBdFQTVzrdsLrK7FuGXKnpCYQoYAhuBy9Hfmx38X4YW5Q21BdNovSdz97RkwHAkMCXk6FiSm",
  "key31": "2pLPyqp3coipFDiq3oeYv5vrvwENXWLp8DoTAiLMqB6GNJxiSwbcjQXVTNJD9HBWqACbc7dJsSqLA9PBDsFEnkFm",
  "key32": "2bui5a158TLTJpFL3paHYniuP4Vaac7z81J6UKUui2SsYMTM87Edq6LQSrBvYDFtD6sJ1R4apqsKNST88tMSZ945",
  "key33": "6Qzi6F1AWb4dUdq114E1nTSTkjfJU5GAgHsuJ1NPtSsZutopbeE3kkS7SVVJ4cYaKCGAZ9enMQc4jFDjrxFEGNH",
  "key34": "3geNaagviBgcHBWJtnLHXo47mQtY7hBfEd6WDMDeQfhJhy9vrxbBiQVc8TiBKg9k8ZZJU6eFjznU7C1dmWRhBwQg",
  "key35": "62h1mtBxUERiKjzw4AUt1Pkg1zbybLegFbFBwBYP5DrFqt2bHLuwF37P2wMBDAnVYg7d6YfydS19gadCaNbJM1H5",
  "key36": "3G3EJd9hTPM8XpeG3M7XqYraUmfrZ882gznUPPDWqUtxnv5cBbvDEgMqotSZDHayY8GPSErFmChnK9uLVfyxi7i1",
  "key37": "3AwLBSTCoeSdyZJjRAsTx8PatV145iZPMd7LUg6jXYub62yyr8Vb3zjtfNsV7DwriYnqY6dpox1WFoXyCaib296H",
  "key38": "4o5Y5oVHVBMNrPutU9RJfNsbN8BYqd7NkQzGtRQ4kDmJ4tdbU3CK5g2KMngCRDnGAZPJb61A1oKV2cvHjwK2JZCX",
  "key39": "rXe6a2DR4tfzbGx5F6waAjsmVAJiECo1mjwBHVLjUB2WeAdXkpUPBAzrXWrU2oXrtPNBCQsLug7HLjpzR5McDu6",
  "key40": "iwJeUizyya3rVirfpRYv1zuQmJPARhDtDSFG9RXCn41JTsii8HV4eyNmHqN9DEp1LEgF4MF2qCoK2Cfra5De5WR",
  "key41": "2Ky6opZ9miKLQ3nD8oQCDKdcUKdYe9kmUy2crxDChbzPkyEhanJQ1HbX3Yr6ww2SDb6Dmku5YrWLm17r743FgnVn",
  "key42": "3pVNFeXaWLqGNL2BT9NHeitapLWdtu5cNMPznbE8pZHgccwzPjSQJkiJLGF9B3twrJJZz79dnHwy5Ftpu2DtAVUU",
  "key43": "4yeb4B8h4zndd9MVrkFAmra4cP7sovgwv1iyZ6Amid6Q6bgZHDRWKLxS1RJMDjhACn7GSEAXAhyWqxDz2py1aKQv",
  "key44": "5PoYem8BtxVi2vfkyRo5eGMDai4dJNXg8H99KNA2FyMDDbp4DtGuVS5QpWsm6DLZ7WPigtE1UnHbgFcjUWDcXiAL",
  "key45": "dHv2pUzbSXqyuaAVFf7yxj4X9XkjWSZ4kJ9hHdGePfUzDJF9HcxMVjjuGZzmsTwr31romPghHqdpL5TgTjjitbD",
  "key46": "5sV9FJVSgjMQAsGEiXc5Z66vmZNqGPxyh51aE2KKvxWJDdpCD2AtsbESeFYw1eNgD2AjEHNiLz4YN64zdRgHzoA4",
  "key47": "4M8hcwtKHSE74xdaTN23kx3y79r2zunhPXRDwDuuuUbBfz3DbqNVYQxr5aGyX78qNZMqYwgH8X3nFEMcHah28yYv"
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

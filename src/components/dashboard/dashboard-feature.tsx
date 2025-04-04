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
    "zjwHNLymYwfv8Nok6E4H8JcbvgitkfCpe3er27MSF2JjieB8HpMr25E5E9WPAd348iWsKUzMUwSRpwzYxjTXdAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvH3yKFExQCFsCGx54JnVBttEQVFVLZv5PxGyyyQh4n3vKorrqjG9eGGms4tcMMYj54zVBoSHFKzvFEJ9x569SZ",
  "key1": "3h6GGWvQAJY2VKuPAY1wpxQPgyef9okdhVZboGcNka3Js8GzKS1k7f5FC9V4gYdGudjFB8j7UmyS5MSfLL38Ud78",
  "key2": "56AskoNYFCKscEDs2EhF67WiXStBwFYf3YFYYjKqu5cMq3yu7B4rqPCCwcWmMzfLHWYY7SWTW3rHC2z2JCPoHB3n",
  "key3": "63EGjUfdMEd1SdFaSNuBNYGtHCVC7NX5KwrKCXiban9oNC3g9AsUMQETojtS3kMq8xpo4hYMD2PJigfEPS4Tk5Du",
  "key4": "Tet87pkjBh5dpdEBaGNuELKZS21Fa13d6mzZoaCiPBBgheSyBxQfopEAogZ2YwhJ2Fh6Fpm1CitFQ18VuZSzFit",
  "key5": "C9XwVdhb2PMoKh2CangjHzM62tpPKuzxeDcGsaf2rZWHnXrFxQpoYSAx5bpwVxwkr5PZxumVSbcYRRF5HPC4RXL",
  "key6": "oofpJ7zUaMRAVchh6mCZAW8GA6HPbVi8dd4AwXkNJ6a1bU7SFofhuNXCKUXHKcGjPDiv7YfZYZBMpSYtyVeua4c",
  "key7": "3RbJwMNNvfDQcaCPocbC9meZFNrikQnfZGn1CEkGgDZxzCasoAHBrAERnxqutCDjaKVRzjXCxPK6xXEyjvcAaKcu",
  "key8": "su599KGCsy9pPsW9sW1VkBJqr7qYhsH9fJbtnuyJgMuaEkxkR7XtMn1RszgJ5uZFGTg3tzPBRgFJx4uGXe3T3tz",
  "key9": "5XcqKt1m6W9Liw4FuHh5LgfQK5B88wtjsMJHv4K4tn95jM1ys2BCr6fzxy8qcyTF9dRZkNAzYvfyiVWehRVSWXhE",
  "key10": "59jCCJn8ESaACvs8ERsoHPmfpdQmS6Lw1YfPNF88GxXchgNHLVxV6iLSLw5u1kzB5eQiWsSNHxwHCg8h4VkiXt46",
  "key11": "2ehHYExbm9dPNXN4gXJFsoFy5m7K58KgrTh7e8GckhBnTTx3wJn2bAabJCXS2dLsKcQ6uK5EhaXmEWc5HFG1h1B7",
  "key12": "53W4GiaeEoE7mvuACyZnP3GvtEPiL6v1LsDhmwyzHaqQABS49AfDsstYmpb8L61KZY6BqZAqtAZuzqZ9a3TYbZRC",
  "key13": "3ERGYP4NR2dBnP5sHEhuYjHRB943dyC8B6JsifWBZeex7TSXXVQuWHTHpWkLKVQh8coduRyyckM3fzLN2365LsTY",
  "key14": "2rPRzT9rKZY63ZzCRPMvN6RUU1HJ4QvBmPKRdpBEw5Skmgj4WuTWXYD6AiV9vY8UPWfVXoKcvz1BXtNiSFHtAq1E",
  "key15": "21hgSMrfBaZdrqab9pSai27g5NnJPonxitm3nSsmM4a4zC6rCXmB9L3f3PpDx6bq3w7u8bg9jLKrRyjL8a1dZRiB",
  "key16": "3Uk6g5KMPuHoZDryL3xrcsb5T9TP24p9VzLtjrgTAUfrFz12YkJRSvis9cAf82DWS54yhxPkCUMgGxopnawn8acY",
  "key17": "2SkscbFTbwJGdYPtpqA5uoGT5mVWghTrRQYapX2MayHyUW6bTV6MYDboYBqzzZxB3kiEQxm3NpS1ZAXNBsfPqmnF",
  "key18": "4gbY7EWiLhf8YXUQ8HQzWXJBfKnzpX4s9FEBBg2vYDnJbgF86c1GXpTZv93fma1dm8YfeegHuJiF9ZEJvLXRxXpT",
  "key19": "W3eYGmbeXxuBZn8PVcqLPedJBQKW6xcjPFQxPviHYpnPXWDtxJywebkrnV8ZGe7r4btAE9ZiLBgX1EtRzqCuT2k",
  "key20": "5Fx1xRXqs6D216hMSyhmxxJSbG8QaNqPTSjBtA5nUbrTmiWW7zaUZNFgJhVsBqHfqLHuNaPEyj12ZQTLQoCbgc2P",
  "key21": "gNbBCbSuzhxPmPRVftoTFGKvEYokHcPXn8qZgRfTyrs34EhmuANjHfJcsDgKHhGHZ68XapvVruogmw6ZjwDfFGs",
  "key22": "653FhfuF4yCMahxe3eiYVScD63VNPeoVdvajJ3LEZBZ4s6dgoBw4dmNxgGCZs2Dgh58w6cFWYguSwsSMuWo5beGE",
  "key23": "5Xza4QxPLJ6DrTTxQv9Nwc2pYSDTZKsbBAPDhErH9NgpoxwhEKKxJ4Pf6fJSqRKEiFV9m6cELuuYJkFDPUgd6p4s",
  "key24": "3D3N9mBAQSE2k2qdGAfy9BEnJeya8YUgnF7tg5gKWmgNKEYowoMkjpeby6gWwEHZpbEdEJ4uuFvzXszW8TE3K8Ey",
  "key25": "4N5BW3ip8u8AVsTcEvtwAgna2hE9TLJjVj4FPXVKvaFRj1DFZkYsRHzYRsaAUiHh7nvz93wLWLmQ25Txb248FH2Z",
  "key26": "3vNEpzF67JNTNPXit3UtQKhRqTezJAbRBEpjXgeGNmKLa5JJbPFVrAHreWK3NmCyhA2e4bT6ergh7ZpDkutCpCHu",
  "key27": "2nn4ZZzFoCKzzcLhBvbjdBAiR7xKXhb3UVZFufsMU4o5rZP24iniaDuy6oYi75mLAm9uzVNAwkAQzrfMF66Nqb8k",
  "key28": "b3gboaKYMA4Zguq16SeQ2Q13iRB9iNYJi3GiQ6WiTG8oZFbeQBYD4gtyFd2uCGMbS7f2w88Z63j7KdsosNqjReF",
  "key29": "23jxTKRZ8x3ru53ukYHapnbvDypSqUpsfptjKag3rWQDnAi9YyFzJ6ndbqrEzg4mDxNnDJu6SpTscEPLKLxwgazQ",
  "key30": "5XBKeeAMS2MYQ1vMSo2SJDLnys9oCNCq8tAiLU7atQK5Vddji5CWZwnAwNTv6SzY91sp8YrFDfr4sUcvV7Nu8UjY",
  "key31": "5wA7H4py6foAPJMN1gTwiP2GHSd96ttzPNZkTtSfy8gzjX5pmfSWpWUio9wwqvxDC6DyWKfscYLZGXjSZMCsfUpS",
  "key32": "3VCaDkhz57b9e3PQX928NbDVosD2QYgUBJgSBwsxDT4y71aALunDYnCfabRoKuTe1SMqFPGvcDk9d1HGtvaQX7AU",
  "key33": "3cUbY48envNeah2UvypCL9a4bAP7LGken1DNTAZ2YYsAETo6c97zpyMYm9J1qfwgLDq5JnPNveC8PvRqbH4WF7mj",
  "key34": "2uuUFQpB8EFHemdcEJuUwJVpzaXKUNPeK2SJuz4htmeN9d7BsnQzEe2yuDsooqh75mEExXoikmTktxw7YWKddRyL",
  "key35": "3wagWZ7ZYr8wbPnZ9oonmu55DwhnzHJueNf3tCXeG5EoUAX1DCQgriMPvmVUA5ABbMGRZngKzFphmDDksP97wAPP",
  "key36": "2rwVFJ2TCYA5QHVu1FnYArwCjGuPrp1wEmy1gN3nkFumgBFt1F87yF5z9PKE7DPS7LuHbZRxRTW2QgEnNBigEHd3",
  "key37": "2swdJjPnPW6F7AMpDqvbUKWDY3cCJXRtHB68ia66qiWRfwyGtEM4K7MKQTF5qMS8HA7hLNmQgQJFbYtPfMkBLjZg",
  "key38": "2Dmevve7PXPWfeuwo5bEdwcNojguj68yWWK4MhLnWPSmoBQYd6VbNsZ1hTbRW2HwpkkmaRXobj6n3ZwSoVA5bgQ2"
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

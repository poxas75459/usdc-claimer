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
    "3BvqgZC8Ln21kBnMRLe8RBy886rmXrXBDVq1Qdj65iW9qgro7mHWVXcNmzn7gTaxvC43bikju61sXRDXooHiZKUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaCuWTd9x6fGaac3bHdrBfrE9CWgQBBBTsUyDXWwFYhTUy3eDzaNwQQ3UucBbpQvuim5VvmSLzdm2JYgTgpnx4x",
  "key1": "5Y6Sr3ZexKKdLm24oj2vRrmf6ujnbeWrTrhYn694JQDGhGMnX6oJLv1sKDyiB4pTRZ5T9TiJuveMVK8i8pXMSTYf",
  "key2": "4kZoEAA6PPRJasQUnBdmsuPUPmGNy1mvg7jVCRn1KmYXDypwDVzYsup7RaNqJeFa8Z9KX68cGq8Ekcm3RdzhA7N1",
  "key3": "4Sn5knZoDQ95hGKotjgKEqpPpewX2SR7CAWEMPr2LbNULPxpVf5wBLxyRAtf7Ydt8LjUYeShMktP9c7YRXC87GzA",
  "key4": "3bYacoJwQM99Zh2NLsPm7aPUL9baJvyTaQ4VHGxvYoSFvdfL4AQNKSWFkWJV67kEGCkbiXxDiYXTLjCmiPGQxFsM",
  "key5": "CxXBdepd85VLnhzJZfTKqGVG6G5wiCcNm6td9HNYgToVsHxHHSpZZjeFToKXPrsucyWhGGzKgS6wDrNy8tLfFtb",
  "key6": "4GMcAzi4bDXeTaDz75nAkm34inWqrwaUkJHd1MjJopqt4tBHRPg19gdJae6pRb5GF4mqvhMu1xd8a5Z3NrSKoiZ4",
  "key7": "4WpgC6dHWxHUFBDdsXUwPAFZFtb8mYoEuTUSjuyTpGH4h8gveLtxHBGUwtSL5r9R6qY93xJaveRu2PMoiJ1AcHKF",
  "key8": "55wMdzUvyJzWK8KZv2TpEVtj5bh2VsoLUHxWGG3NuXjAEBCUkWgfgWPD5n8o25MsnqMum3S2NgZdr4k3D2befH5k",
  "key9": "27uYJWPYQhfs6YR1M1iaSPw2FK6r8GMNLEfun1qBn2kb73VhynaDVeeGJ3eJQ13oHwo1MG5vyrTzSEaBzXWSihx5",
  "key10": "4iEDoQRdHoaBSzRJEJFYvFeV8vjZpzHX3W3b8NRZQ5TXZK8E9XdD3JmKrXaxcaqLhumuy3gbKCg1QTV9vUtZ86o6",
  "key11": "2rs89DrF6w3MPD9vn1p9vryYeWRBUEzBy7Tkw2Xbp6qccVXHXM7xEHRBVWqEte7cyEpicnzM93zkse3zQJLEoAuA",
  "key12": "2KoR6Z1sPeixdL6aigZWi8iPuphiDwEChCs6zzXFgxNP3NdfnXhHzD2TiTDbxV8kuZege3EhcVhE7RHTUELHE911",
  "key13": "32XfGbDsmCkBypmB6j8bTyPGzZe1SMJFHv4UPSuZwNovLTGK92mPQtx6BmExYszrNrwi45z9yxmz4XbkWSyBJuRa",
  "key14": "4EY9MzFjsF1JsZakx22c1Z5v7t7cV2XThErKN1WT9reh4Md2W2CFjyacfWuUT49a7rx7xuVWLkK4mDLHFYt7GUzs",
  "key15": "2dTm89XWNQiyPUs6S6SWbwY3RBQjBKhjvC6Bzgsw5Di6z6ugUtXwwk4CoTfCjUPuvGwASB4AG8ono82vRthVCMM4",
  "key16": "6FFicumF9nW3hxmLySxz5yvkt2z3yHVX7LYfz61MbQqxzTfKBeecBxaUTyNvqvvZqVzCwnz2qWiaYVtKv3pfdJ4",
  "key17": "3CCiy8Lt3HXkxZDVD3G628WKAzEAmsFpFehkWVkFYn9Cdorg6q7mXeuBQ47MtzVd8vX8Cz6yNqp14u7cUxwc8mZG",
  "key18": "2WaC68CKEhEn7q96RBXdme8NRiatwccXYhCLvq5G4jtNTFLyCEeLxesvcPZLhg3q2ycQmqEhffUy2LLB55zhiiFY",
  "key19": "5M1gph6M8mFTmxynCuppdYkzwmXeJ5tzNycew8nkWHVFRADwsL7m8FuReQMwCC6S8biHFMPRsCQHmc1L8Ayx23mT",
  "key20": "3pptfStpoW6fZ5phuUmm1JdMMDJiSGqFNezSRFWmLafcrG4XqfskEjaXyjAiSfJ214tfMYEb8u8xScf619JjuHiS",
  "key21": "jGo3QjjfVYUaDJsqABJwsSeNTiTFDP7kpKfeZkCVJvGc9b2wt4vXv3VZBZb8pk54ekeAfLivexNGRdztooGey5B",
  "key22": "3AZpGKTgJYsAbBxxJDQqk279TMxVSiTqoKcuuKkQ3GDn3g3PwNyPFSASTKV7WKDS3tK1AVLzcCWv7n5AAgobyzj9",
  "key23": "fqT7U6u5QGuwMHt3jwDUwxvFWd5BiCz9afAELj7gkn2q1KMoHkYtjWmF3fx3gj7dPXXKFmFbKJW3Dt9rjiEKqWQ",
  "key24": "5GVexGgVVFfXPrm1Q43JGj8b3mkuFXKfHzoj7JtMFsoxYJPkBc4U1YzjYH7WMJDz9XyW5yAEfSKKz46c8WnCSGfv",
  "key25": "598xVEB33jAmuF5RNKbmeRXAqpd42DSRzm2iyLf4xkEKqqxKGVGGxNLwvcGe3zKBxU17tyHzyaDrQFswAefzfBmB",
  "key26": "5jjKwqogg95ngUmTrJgnhi2c5H17dCa8oVrbsu6dh9HVv8UFh6Cugkv6SW1tnp3MymZ2SyvRkBUED9Sx97kwxjzz",
  "key27": "3u1GLQo4dgNA9GnUGS66KEE7vNUbPv6A41ParggaN35SyN3TnivNvbjHzGWHYzoUkz3TNP1yqv4zvHVQExvp3MMF",
  "key28": "47xqznPuMcWDFpYPLZWJ1uVgW8yEUg6wxXKkHDjXCWDX4YmSKzW2Uz9547CYVx7BSSWaE3h38vMqg9PKVRyRW1uG",
  "key29": "56BhT4d4Z36JAXvBbAEfi7BCWnj7UA8BQSdQTnpk8SQmp5HeqXV2oGonKBepViBTJH6sTVJxvkCDvTQrHoy96PXk",
  "key30": "5fJDKsSoK25C4AogispdsLUcsubbaeWY17nq26uLLPWfWuSfpGPLpvAqCHZ4HGgpdE2AjqS6NnUtiZSyThLM6cHC",
  "key31": "2Az2LyvC3UXW6nVYUJQqjF7pATXZnBKY2if8TJSrALajwDE7gMJ22QPSsZJ8AKLUViqDjddRyMiayPrjaAHhqd5c",
  "key32": "5ko5ffGTdRBAysQYgx8sUcFJnarZHkGCyfFh6R1C7cUQoKU5ndYki1yeWdJDrtMS75g9FD9QZt6F1NWz2ppPXXdF",
  "key33": "5HLnxFLtySa1NGs3RJN54s3kwYZbW1EBknRfvequdcgRhbBVrXbXPM8UTehDU1DpYiL4eXL4HkgJggMuJZTxJM6J",
  "key34": "2TTq1Hx9iUperaHV6RRUvWQRt4jgnaNP3jLxFirVgt5xv3KMxQtXScn7i3ts4utp2VVebbCFyaudJjgdQEVrFhvU",
  "key35": "4SmcPSu49E3sR7UkyzkkxMCbX5Rq7XaK1vunYg3X1Gsehk3CKo4UJPHREz7EiGKJgfWcdtkK1DWi7StoUu9ADaP4",
  "key36": "3ftYsvTWedx3qiSaNJQMkAom1RUqqS2CX25qmd8yPKWHEUN3ct5QmAXDCSN7fbbj1CStAFacGcsFvq1AUWMtXZKd",
  "key37": "3cGYgM5H5MkWr6XvxXV4Goz9KQNHH7mSnUWR312xn8BsMoqJ3t24Tk5h992aaFtk637jP4qxwYnCRsds6eaFuA8C",
  "key38": "4qEx4wUnUeTjPEGctHZDifWXyfmo1m8mbgAP2dTJNYhkQ4etqMqx97EbxE6aTQPfpKgtN3vNw89w4oL2nB83MTRG",
  "key39": "2ssJWMbSrRdyx5pGWetGDKSaPHaTDYyhwNDZJNtgJsjchJZ9LVLiVX4MyzWA46FosizJPDqhgGfYSWP51aTDXvNP",
  "key40": "5NwADB8JqwmJwK6hV2rKWvrgnBBGFisLDgefTsNfS7pEJHLwgWQMTyVMQjd87GE6evjyFNEguxNBCvWv9eizVVDx",
  "key41": "4zFrTCmm3hpC6ryU4YXSq8NCXjUHQmC6ALehkAeRRvnXdE1kVThjuxGTjRqB18eccjLjnXPCZuRCio4bwdgwZuST",
  "key42": "4uXvzXyzm1uYUHUC4hMwzqhpZXVqQTRcbz3Lr9FHo2kuzfMAutMwf5MuhDE32DNUKf1Ua85HVJbgqCdA6Uy3vTj9",
  "key43": "3P7KtymeAq58A3Jskk43gzrjuBXrF8J1uDoEf9UYCBf4Khr6Y44ke8k53FVqBwCz87nZD5xFy5YMAdLAiRKXZmqs"
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

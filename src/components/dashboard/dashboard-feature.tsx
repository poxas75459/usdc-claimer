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
    "3h7yveMqeF3vWENzxD7WBrDaFPuHbJtoaLBhrmQCxz76wiKG2aVUNTcnU8gSTiqv7rg1Gog4aH3wgpq8JduW7Kv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rr16TXcmUxE3yevUCvPDaYK3tWNbKnmi88JfQTCpPJrZvnsGPpb7Tr2rn8YgQUbnr25XWngdcJu69FjUte3ikch",
  "key1": "5LBrwGCThX6SbdKEa8r8BaaxShRNJaJTE2J7GoMTHJ9RRADsrwZWHxwf9KJVp6abYABC6zpFRkoqjfDCs6e5F2En",
  "key2": "2waJgaEqix6ynZfLVyRvj2rjJ5vLaC8ZdczxCTZoVAp9VvCk1BmuoeqRnTA7Ts7Pp7LmeiKEGUn8o1yfHs3sJ529",
  "key3": "3uqchcjE1pmzuqkVw76EKGmvSDntmDwjQd7EtydXfsQ67dS7M9A7HTPu6LAy25rhmgXQfVyHPGihT93RX5thoZbo",
  "key4": "5ZoLRZHUE7LAg6F1EFjGSj9twknkvNjsqV3QTk8WHL9gW1PD4RdmJw1nY2eqM7AyZqjaikuJKtRHV4Rudi3MTAp5",
  "key5": "2R3zerZwM7QPGNGax25JdYyC7oyt9wY4vbjJdRas33Hk9nupXCJLpFFeVhz2DJUHys9Rj9TxQh2VYPsbsoXHaeTX",
  "key6": "MuER9vXrZC3eV3s6tvgYjgBBMofAF5XcYVhgzENvq71hmBH749iQwPTU12u8vcThCv276LcATxSD3oxf5AywVgs",
  "key7": "3mR11Y3xqCVMoYNFu31yfhE7YYPkeRVay2SCxpxnfZADECSizQT44A18CfKxSZdF16yfQgg6vygBwSiTZeoN5TDS",
  "key8": "2v1V2VNa1nb5gVVLcdQSHLKLBk8JCFbfFZdGb3xosNCDeZHvCzZ7GV7tPXbTVMDoWWRTZUtFw1HHiND5DqpVUiHm",
  "key9": "3oKJYMkSKZBpJXZpMozMELdcQZ1DmkhJYzLoztcjYE1XqZTQkJ3tDXHd8FR6f8XRw4sYD2v969HzGzVKb35dWXUN",
  "key10": "RDBdCEoXcFbmtrvcppRKtJnpvf6MPNR9Zqyj65udNtWYsydNkfCmzipKDwBEXQeP8YV28YWAKxs7svhjKYAKPaD",
  "key11": "3ALR76omKpqvWvwdCmmKc13fPHGdQK4YsAz6t4HpW9jCMPxJHsNp4xzvCAdpijcTghLCtXReeVtkRzuqL3Le3Pht",
  "key12": "BCTiM1AqTbxPkxSzo6QKb2RcQgU4sc9MG7MY35TRu2jzA6gNNogkKzxY6sjzkeKyFUu39wLt6ABxKZwrWhcsU1f",
  "key13": "62tpADVd9Qjwn4J9FhZCJJHTfmFoVxHPPL4bLkaxqh7D77p3qhdTS9d4AaMs1Suz9wrbHJGR6Vbt7w5rLsnvnCkY",
  "key14": "3G2AxB9T11LwZpBjEg4xSuP2oVvD2rPrfbM9yk1P2Jh3J1F9D956T3G84hHVxPAzwZaP7rxa2ehjfBYS2KWhjL1N",
  "key15": "3VRoLVqAV8tWPUev8c27bSro21vqePA3BENoxFET6ec1DwQVoDcz4hKa7WHQrv8Ghb3LcbqpXir3xRe8xKP9tw1k",
  "key16": "4gbNWMJSR6ox6uBHsQsd5wcyD9mDn1nJHn6KyLRr8cSpbkwGpPQffCvceLt2fqrQK8YkYFnfRmYfpDS88WvyfSNk",
  "key17": "v2ytgZuqpZDwAtXEiLgwK5BiKJogG24hN2eMbHV5fFbakqJPv5LvGShdYwKkGxsJJ8UQTkKbgKxQCBhTShsi3yL",
  "key18": "3CAZ5fT5A2MPeL6mDmSjJJxoEdWxReePTPq2viXuLYEiLFFfNEe9rWSxPmvKmCAVeFBfLM2oBzyzvZy8N7q3CvXn",
  "key19": "aHVJQekVJ5KdiJZRPvw31MSRsqXnZwjkyapJepNgq7LDBkULEi1Sy8bKoh6gX9hjeswPHGCPjYYqMqeauwQVA5j",
  "key20": "FmMpMiGpjHbN8yMbtrEg3RrjXGeayLsRKjz2oLAsBnizxDqQ6qiFkHXZ1TSeB4eLQHt6xt9K4bNjnP7kqUhtD8G",
  "key21": "3gk18St5BkvTaESHyCPTczFa6M1kTArDQ1t9PoXm1xxYhDP67Q11U9jU6hVaqj3oboeXATWjaK3dUNQYbWDTt4DD",
  "key22": "5hWQbVfgHNYniUJVyiePrAmgsxtncgkCD52xTcPL7QszVZwEGQ5Ra4eUjvwNFPjadFLcNnfCwgEDW7pdDxpAjKYY",
  "key23": "4WAiWqonDE7QPdT4z5yyUAjYf8Hazq8mQcpWzQE7H9ntspYGtTsQJXBk3YmpiEnAv1D98KgNCxKmVEmDNVu2tAsQ",
  "key24": "3eqWSdPyCZYANKstpeg21yaQFbrbtj6eP6h6feT3DrvxzLD62RrVNEKFPSGg2hfLinsTgPJYjyoCewM1fte9aCy4",
  "key25": "2yEWsLub76GDRUsc7defXAvvKXnGbdtK4D6cJCH3GK36f5UZav6nJK6R8XSDxsdT6iqqDVxKZQKJUqhQGCvz82Ne",
  "key26": "5jA7YeB8dDg1xnJ1hVxmzTCAYfdYAd2w3zdBQd2by8EC8BQNtUiKbCo1n63VHxsjVUZ9sA2BUokt8fLitwiuQrLy",
  "key27": "4XNEs6odzugkGjDawbG7Bj3nPbEBJocJEcvxvfum4NCrUpPyDVCguCMyt1rhCSq34nL5i6ofvB55WpbMgFCGiaSL",
  "key28": "jhmMWotGigk2bvdkugBsYnwCQTyaetrjGqsEhB6eEz12SSL6HFj766R4ppcHVG7FKuiDk53z3AyznjXLnh5RFPg",
  "key29": "BUBxBVy3NLLFULHX6n9QTmwfGwHyvbkQRS35Gkf21g1exeUHypqeEaqg7uETeHADe89rNnwL3zpf5DsR9yfWXLY",
  "key30": "3z4qiAiV4SAxMcJfTkrMfyJXqyUZgAEGWnPLAq8bXDqu8UGUEtPbVaTCAWaCdim7eEYt95ndWb3BPW4mjiUmnrnb",
  "key31": "42NDhTGJfcAhZYLm3yjfWuLsrjJMSrm1nxeDkohjV4mu78VeEXqspWVM3TUFwGedjaqzs7DbN1KJ7wDDVvp8XGdP",
  "key32": "4bsuAzSkJoLBYbqakenw4w8yZ9DRsu9ZCMwx8R4t1eo5HHAJmKb5qK357rzVCsQiviYoLFg2HRtxdhaetjKJB7aF",
  "key33": "fNzhFQMKjx5yxnmEqtzMoFW3LQzbTAcw4HKHatH2pWFfjpGQrmBi7toWQma6z6uXNgQbtXDUa1F7mS97GRcwxW1",
  "key34": "2CdXQ1ELAXy1CZgdj7qDe9nBott7GDysjpsvGDyrU1HphnuqTdX1VTQnESFLcfr82BYvMyjkwZdB2mx2UHL1oNVR",
  "key35": "pSFTBTbGR8qfQKkPNiVdFenV5b9zE38c6SPkdvFit8dXQcPv8ycEFjimehSHeDZfUtfTd1HtrwXgUw1TbCfATLv",
  "key36": "3exPuLeghqAddf6ratmtWDzbrHaD1Z3KDfRFkKJuUsKuBEkDhSQ66GWEA6Wtf5ejZnwW6KhmCXpsphBi3X24Ar9G",
  "key37": "fp1FbosCun5gnqTqst9ix12EdLmACFCinN6Ed144x43pqfXdxmY6qeAGQbJsn91o74V9AMLxC5Y49FaNY863eQD",
  "key38": "4ibBXcDT4vHJictwa8PM489WrsMuipQewTbLEsbk289cxB7kjwAqriuE3YR6GcWmzD3QFey78A21bzBzr7VYMRgJ",
  "key39": "234t47L8Us2XpkiJ448M5sCMv3PSJK68FKAQbjrHWSJvzvMUmq5JKtDFYAgK656ppWxjVpkzQX1H48aLoDQ2MYJA",
  "key40": "3GrkYtZ12nwe971jt9tCHXJwUGK7UnZJdQ7vGLsbJSP5YxfHqBoSnUMd5Cnbu28mM59MgKMfXorepbRGHnF4n7rq",
  "key41": "4CeonH4cUbGirmJRVuEyQeiP7a8TNK9LPfxL61u7dujMGBbtKixddNsbVx9yBC5rMe6hZaYpftePKUhNUJbdhmbx",
  "key42": "52SBJmGsfearsPsCUHcPtdwApJCcdvbmz76UKpA7ZJRKg3AxjLTf9w7nTahaMC3Xwh1FfZqy1WdiPco6dE5NrHAN",
  "key43": "5F8KbQDzGHinNwcfPnj66PrN2cmzSzzMU8hLENFB2WNWhmhJncc4VjrVy1fqF6tZqqwoqN9uCym9AWFHjkaU6veT",
  "key44": "2BpNQeJatur2wBRVGC7p23s2cp7oPy42xEmc9xDDDr2weLWohhNsJ7M7USWSbSNpKHWD1BntHjTLrx4PryFRJHzZ",
  "key45": "nJqbq8KQRYoJtxMfLuGBs8ZiksGF7vAnLUJhEpERwDZdL18xmZtqf3ve8UUximHn8E8cXor9TsijJkmLUsPA6PM",
  "key46": "2nXxGMzqZFj5URpQtKmB3SBjgSK2VPV65TCbntVTeCGrWTF7xLWDdn2tCxgTdL2zADxtEnHu7zt9muDMKgsrz2XM",
  "key47": "GuZEL8tdehv7TwmPP6C2kS1RxuoXRQx3nJxjNBNsfhh4LifzCEWmXKNz6brohATBVBPXBKfDN8aw5uPWFX9tXhM",
  "key48": "4s7zhgrwgUkDSP6BHUah6DNSPTtmqD4zJQdukbYYGYa8mDS1MQ2FLPRaaHmXKQ2dwvGX166f1FCKFbtvaWbcmE1F",
  "key49": "3qRM363JPsjcKCAiPqE1bJhjStDFSh6evcHCH8tkp98Wvu3da4pqFBgiKZ8d8ZWrsp7KSLcMzmETvCjLoFG1hcNa"
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

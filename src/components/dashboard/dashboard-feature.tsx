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
    "4MYBGV4hAyWtK8X8RFCrCemUvZrJ7wFoJ6sz4FS5Yj5W7LLVXm1Ao7dmkVEv75eUdaeVgTxdD5DgZAuNeoBXqgqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ja2AEmLVeM28LsHY2wM2kUyEaXgX8V89QJJsHL2iVxWAkvffQLmpv5KLCVbBB7Qjn98AkQ9pYXqfqfurPtx8end",
  "key1": "4U5F8zEVqcCDRR8BT4rmqq2xYyJxeHL1gvZ86VHuJBrPzhCDrUzpQy6a5Pefw5My5cXNBKB7FFP3d4uK4PhrQA9D",
  "key2": "4YDFs2h91iuXLduYGeFwZZAYakawogwMqXtij1gdvWgCaqU2K65JJ84VcpnSY4M4gZbVXT7i1qnZwEEAqvACYQ2u",
  "key3": "oXzk4H6WPeUhrUCvWJ85VNfHZonrEMYY8vzcb8aXVFw2muPkJNoAELRnw76eR9rYuTkdPManKDSbq8P2rzNe77n",
  "key4": "nt5v1AZmuC7yTxiaGkdHYh1xWUpyP4wNHZ2v4AeczLxbFeBKuyMF85nMSjaneCmFd5VnA4DiGxgUN7CxNMeJkx5",
  "key5": "FgFwth3jS9SPnp8rYAFrAQkNNknvDDWKVQesfgnf3cZbco3Zhtj79VwSdM3uC4LepEvyGH62U5WAYGd7KyjE9Y6",
  "key6": "25V8pZ9okEJBrZvb66QiPKXh8hadn455wTQygEUtcU3GZXtEU8bKKW7LBMUU8g2hg5gCZctJZFKQM1ADnEmqLmhg",
  "key7": "EiwyjXMMp1axtBKyHZ1WWfkjAVs5getaDMhULro7DSZu4dPcWkUBNpNu679rX3dZoax1cAMKMm6ABpwr3PGRYq6",
  "key8": "647Nad8mcsgquGtg7CcPDsQLeBre79zx4fu5gGLbtoUACvcBWmketyEHKYrCURQbyzd74H7GG5aR922ndPKx63WF",
  "key9": "41FFefAhbGt4uKV5jnZGZ299Q8CQSDUkFWBBKUxPpA82GfoPvH9mkADu1M5XkkUG5SiEfixQgvfjiK27452k5z6t",
  "key10": "3y9SUPuNfHenK7jpJqFf3BoaFQsrNcL5n2Zekub1FskGLNRmCAmzehhpg4siw49caSBLuxaYyxDdHmgHoDJqLEGa",
  "key11": "4kiP866hRUkoBQtdFtdhQpAiUPcbPXKzAd9882V5gtQDgRmwZ3WgnDXZUEF2tt26EUttVXYStDiZBYXxecKkSiMV",
  "key12": "44Pe5yanfDcGnNDozCo1dRiGkcfbAZF4XhVEmjMSGWpR7fSMebhgxg41fiYKV6aFkAPLS4AD1ArxzXMNwpGA11ST",
  "key13": "34dWBBp9jyFx4o47wesThbt32yayA1uPpN77LR17D6B3SmhxGkAU8Xtr9tbVWtfk68G55MujEAxaQ7Yv2LbEnKSU",
  "key14": "2kcNYe84zYCET1QqLEVNCf5x8o2GW2qztXpforuzQSbWJF9vzCDEQvAK2Adwpu2MkJj7XePgW317z8t8Rb82fXSr",
  "key15": "YosVjTDwJZrNsSLVnKK9jX3MBV2XGojgoruq91hHYUwWZyw2KAP4ULdmppbKmSQLkuHdTi1MzYpm48z2aHexScN",
  "key16": "cxAjL62vpwwQDbF95cS1CKz71CptSicnC8Nk4gM5jKauKkjcqEUobKFfgnApggc9FjaUB7uKt7wit4kpFESyfYB",
  "key17": "3Jmfa9nrqeS6cknQHCdWPwFxtQJsTNiQiuuvkHDPv41TpFK6QVv5TSQiNLMToFZCuvxnrrwTW9dPagJzPidEg2Uo",
  "key18": "3phqTHuiGeHH6yoT8Mn4EzwVqWz8JQRQyJjvNcyRkd23BBKhWxcRnVHL2XrSMCbQjKb6DmJZpv2WE4ZqQL3EJcbT",
  "key19": "4tqeg2PwTY3359zHC7cxtBGAbKuVzLx4ntNZSK8dQTbxpCVZiBCparYjvgjY9VX7GafybJLtDjgcm595SoFAuWQb",
  "key20": "6VpBQvgnmxsL1qaPc2r4iueKGWeALAEKwpbo6yhDRjFnaaDv9CeVAetEvgWjHJ2hwry9xhWVyuJN6cfQxYph2tj",
  "key21": "3gwW3t5bLDAbJF9gyJUNRoZFJVWp2yYvot2gMcQG7DqsSv3NbSXaGPPuhFC2vzFbe2d2JabwVasJKV7XvVESrCXn",
  "key22": "2jcZvPacfqNbkKhH9zBR2FeSKdwk7nDdrwkFiSiG47sFyP3w3bfTeKi4CfpoYDVNKP8cR8hcVRYKsNHMVA4K6Go4",
  "key23": "3Dft4X3oFxi34pBqmGcWSrD6TeLjWjUG53M2gVk9hvGHQKSrfrV73awj1cMbeuPDnXmpaRRTTewmSdopd4r9aGzs",
  "key24": "ioX8gKoaDi2V7Jxc7PvgrkZ3ZtCZkn3em4B1aSeRHTU67VJ8jQX57ptXnv62Ar1pb3NLKVAhSeMPRecTTACrC8h",
  "key25": "2gqWz1XPGTyuFFs8q4xHBiGLkJb9HNtg2WNhK84sZhyCnP2N6vE96kPdJSWxXDimTAexkd3RN8PhngLLc3YSR7y9",
  "key26": "3RfPLaPdxp6xhJk8f7vbeALNLFR6Vb8ZcChwfbBG4KHmik9mB6PKZ3J2kCSVAP4MV9U1kFqin5FacHa4tprvndmu",
  "key27": "2zR1w7m9ttLYomVR6KpLA5VZbJk9ySgbPyyBZRzajxwLweLZiap15EhDzbeqtyDCYH6TXACvqAtY9t8pKMdvAwRf",
  "key28": "65UoPcEs7REe53YhsXApjVWgf9wnTEzXpb1JMjfmkF8RWxKTN2BaYwPsp9m1jvyDtAwATHwGUb6UugcW3cEw4DCq",
  "key29": "1BecjxaQvLKS38hcUdZEH1ED3AZReqHsszAcKZfYKFbSvgWmakG9TkHUfKsqeUu5CpfpfTWmaCqWdCS7ginbCUf",
  "key30": "4FbWJyAGneX7rkne6U7Nu5nUR6HYexd8f2qS5nuKSJBPbeQFu7frEueNaVJ4eYf5q26ewZzkJqzYqtzNcUszKcfS",
  "key31": "5eJD8D7E6VNFZ2SBHDgyGK1AJwvDBC2R46sz1HZaW4dU5xfJ6oZXU6cq6RVyV7p9zJ6UjP3LN2VKhDUKZLs96i5S",
  "key32": "4P8Gs5iibTuCUDrV1qBtG1NgLaacs7rvCLYHWRB61zUUmezodHtVowHXHTUBM2qJtFGDtRDnWnAcpm3CAvtoq5qi",
  "key33": "2KFGMGzKAX4moL4EPojxkp9vFCwmqsWAvfQ3tVMCXWfEWZjUNDzn1aH7xmYrqWZdWP3ct7rseg7sX1spPzkx3GYU",
  "key34": "2wDBDH9fRGqzrP6s1LkUkDng8sGuUdHxjfXJpoPGZ6s1LMnC6CHt5AtEiqTx7x4U4ZbnTAz7zTKjreLxZZVZoXhz"
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

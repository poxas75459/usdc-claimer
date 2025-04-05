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
    "4aCyxFUCP54aVQDwgAAurZXVQn43Ejbz5Ea36PgkHTu3UuUFcr8YZUVvwhLuetJYDkT5PpA5RDF8z2kW1KhhdWsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dPToTfwwXq9MQnjopKWZxqGB5KVAyRAuKtCzPT8p5choKEK9ZVgLoRkCaTWVbDygjKirPB4UXhNNjG9eQzNt1P",
  "key1": "2ebjofEWU7H91kkeAx8WMvzi9M3Dz7NZfQuAzoqMHUACuzGJf4gSEWdsGXAwAsW1cHbFPz56FjGW5dAz3c2i5vcq",
  "key2": "48CwfTGGxyYNjm9HFBxtVxFRYuPLgzyrsvEBCDk2Dhoa5jGoD34ks2mznyUHV4Mu1dWjoqS5SUNbLEKUyKt6NiYq",
  "key3": "37GAssu2Y8b7YHsxhUJWcxfWfWn2a7N7PAy1wUb4WBZMuBE9cJcum78Xen7F5oHy2yL6eZfdLyhpCLoJjyMpNkb2",
  "key4": "3Z1Gp33XwH9B1Cdvwoh9nnSMVgV1CSLVTCoY91GqePYNrxQNDnmJjbyhPjkvvv33MMsPWQFBniAgJNwYjjQMtv1b",
  "key5": "2kXgKDK2RH2rpNcrsfVmspewkBF1BYHSgDAhhTwdrTkYdWvP1wSCx4UitghFRL6ScRsBxx75Fxh5zBpwzYQNQxfX",
  "key6": "vrrygQ2JQPz2npaToqtsavpGXfvdfiiLoruNsjgDab8N9WPTvzRFR9XPgGs5Ls2yjbQyR5C5KefKG5mkm3ccxr1",
  "key7": "4MSkvFkyGUNcqpyE7R8dDseP9KQvqMbDPZaw4hZB1bmC9k6UbPtjengYvdWwQQPQoNdCoMW5EVD6kAKNPVPsBaoF",
  "key8": "3w3sNmd31vXTBvMVuxiczC9bFHYwdh2EAb48PYP2T5yeuG8DMjVP389KCZUiYy7RFMczwxCWYoMYUUZdvFZ8vTFx",
  "key9": "jNWEKkgz1bFs2n36gf2MQ1HDRcb17pS7Huy8PQRQdnukNE4UxTyarKTWkPy3iQQGK1YbFs9ywmJf9mGuWWS2CuV",
  "key10": "9b6qe3XY6Ci28ocCPCeHyAgEQwm5frHuhUsgnkwZpXc7EPeYdCibzk5ELr8PB3yom4WjD9vA9SQwMjvRdjFpnKL",
  "key11": "3ZMWgBgVEKrv7e5JMnQ4jBdysdFag4tZb1nQUwnb4k9YAgAWk2cabWWGeGhXcsHQBD4oqEdcwtoVgu8iYHcwW62k",
  "key12": "2gWkzbPb1F9BqRAZxAMQR3mGWCUwm9HaJqmvYkAYPGENT9hYK9QJUkgE7D2h9iUkETKLVppCTnjYnXkvYRfebW9S",
  "key13": "2rNhVT9wkXW6gxEZqfyDWMM16PTVdxt4bA6NCYpGZcCFXHdrz96aP8Fp7eofLMCRgD51KSzDqhKD91hvx7Jno44a",
  "key14": "3KgqXfjo4Y8A17X75a9onZHyVwjs4zYoY1E5NywiU2p2Ea9VFP2Wtazp1XSSmWCEcRQ4iuym7SWKKJX2emn3YKJc",
  "key15": "3sezCH2HB3sGzPT4NQRoHQijzvB8MfxqoiGQkqtrQXnM4ymV8mMhUdbgLtMU4yauiMiZBdC6CtHyciosDGVdAfgM",
  "key16": "E52vh9pxSrfPaxsjw6CSUhX9trfacp98zdbk1iVJQoCegFjQa3dExFHg9WZKVTWaduxwVLhnzQSxwGgBmYGCujj",
  "key17": "TK8HewPTFMgLmaU6AdPKu2xgG6e7GTvxwzGexfCp5bFR8ZRQ3SZnAMAR4Ja4ScFRcW4iWUv5GS4UJsUP4FpQrY5",
  "key18": "5xtaekRGtAqCG1VhpxN6Ew8s9tG3m79NhQ6p96UCjF44LsyCu7MZtf3BdURzh9o8ykuqigF4bw6oDieFRDoStcCV",
  "key19": "24bThZoddWoYgbqrucj3RHJrraMrLHKx2wuHHAyEUDNtGxehAXHZ1BcUEbfxdDqAiDfgrfh15kPUiPDGq3LW8Hbq",
  "key20": "5a6Rypw8L5sRbxLsmU1RUkUhUEvrv4pELoBdDCiKcqTc5d2YwdReuHR7Xobt56HoF83YemN82pVUeUV4thjUnMsB",
  "key21": "5xmBunS1SQUXTBLyqYEb8GzaJKTu9qj2BgC5HuKqNxTP6vbTpZoko1vMbMM6HNQH1SKVj2ZPCYAtJYL3XsJs3Mkg",
  "key22": "5QjBH2meiZJ7wQxAeAPRPga6GutVzq9L6MQ9zuFfsPA1S2sboB6Tth1ZqvxgKrKz5K5iLR9PARAzDndPb5bUFeqB",
  "key23": "NKe4GpCtHTvohFbMbLBpyBWka5viRKpN3LVRRQhRp51PiHeHnivEs4uHq2G3kAENU2TTd6tJQHC2kYjZUfu5ZTq",
  "key24": "3kGGBY6z3gCdM6V88KFhWfwkozzLwEQ6GMf3kRYrszY66JjnZtzKRjqw4khgwkcc91SRscs3FD8MUGy88i4Gvv1W",
  "key25": "3PDfEKWPxJAcY9JJMMvNze8RcGeAD4VmmbFeJfs3m9e8iusz3ZQpGoaDpFLAUhYG8gpPsqtQ69JuECC1gcd3egrM",
  "key26": "2QnvKC2JXRge49K3bTR7dJf3uc2cBDt3v9ZRAFAaYfGhF7WWgzAUehbUCwPsue3Vy1Up6VBLR5SXRWZvzi7f5GoW",
  "key27": "268guPQMvDyfrrUSfRynddSgXG4x3ebrNXPT6f54hq3TivK5LRZ8KYFtvShxAQLF2vKbyao33rdC9qAQ4dLn7sCk",
  "key28": "UqtKuWt3vtM3rgokA9b6xeJE4kW55YukB6NMkbrTdMG4eJC6FHyGW2Xmnu8xeUd4QTcQkYYHGH4Ro1AfFn5wgo8",
  "key29": "WrzbNzU5PX3hT6UAEyMCsvxKPXVJhHwqrfLTe3oiWjq6F6sKnwGgosoVvYmGiJoiyQ9Lf8TDR9bJdkd75AmVQo4",
  "key30": "4rHbkcXtGrb1fpW3z8Qu6noKX3mcQafmtn1Ahqqi7mSUYaXeNb4Tfva8QUsRkJWo6ijsMVhA9p3KG8TdNMZiPMQi",
  "key31": "2Uy9mwF9RJWQkwoeXBNTcTfgTkNftgWpfoHz4dnh4qsoKah1jZWsQgfWugD8TkkKZHVHrbnGFxAi6wwQXsMyJWQT",
  "key32": "5otCHs537WhQPZLpCWxeppbyPBGVMazW3yavdk94zpYyKJ3ypfi2XSZCoZ4S4YbX2uDcVUhtXm8fMV41kkXxkhYH",
  "key33": "4wG1H9XjJKeLNQ3n46UpnvuEjnmNGpLY2GmKynB1pnwfCEuYeLfLDUcEnHGGSWeXDyKxyRiLuzhKbWNTPP257ue5",
  "key34": "2tGHEfApkmNQgj4Z1YqXjbnN3Uvs3rfYhmKdYk91ud7TogjgEnvqZeF4VovHAiEfvgjif2ac5vuQeVoKLbyVoHg6"
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

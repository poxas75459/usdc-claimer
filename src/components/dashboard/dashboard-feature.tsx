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
    "2d915YvT2ZNLB82FCV4Q7iSPoie4gTMmvSeAj3znrQJWhJPH8cCjoUaCYE36kgxvwJN6GaNHiTw8sB7NtRQHGidy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MVJHq2gNkX9N2udkbvb42xazU6z5RDM9mMymoW3RzKiyxrUQFwKuZzjxU6cqBaRwmFmW3uJ9Mga5T2QB6uXR8Ly",
  "key1": "2t8V6NunfEUkm7K8dpMkQj22xYiDFm1Nf1j9iFqiqKPT5d7Fbzhn8tds68FjGfT4EJ2HVSMoqntiucQ3ECp7jCJC",
  "key2": "fpaPMSrFTqj1jJCD8aQNT9LsFuo74mT4PJNDm8L3G5SEA4tinAzE9V7K2vv5x3aPweiNcqvCg4SKxgjYPyC7XSQ",
  "key3": "hXznghopCLHJK7D8c1hg73vvxSD3SqQZ4Ppt27yz5nuFJ3fwK8NbWt7v6uQNw1deakMcrmNecxLw6wAiGm2FMTm",
  "key4": "4YpSJYU2mqNhdmzYWmn7ch62jFxbbhBxtKM37bGeuBJcNUpmvHFxEhLooY8BPcTKi4ZPQz2eTCB1peJSTTPjXF9",
  "key5": "5wn4gAZDoMrjBjEcqyaUFGjbm88fP29phq8aoBz9npxVVcEQHhbmPFmu2WwwDx1rMBZRFqEsBv3r2yfUJRX6SyW4",
  "key6": "3icp4Nyvs9tRCpm6tE3LrQQ1GqDtBsGUjirANFF4U2n3vbRtUzvNhPafStDvgft1cRDD6tnkpdNuGywSyHSXBZXr",
  "key7": "63sdSyKvguupvbuBrniLacbgn8phNSTQ1GBWHCYzWtkRK26Ua9Vz7ot2zChJvhFsC9SNy6UMBtMciN22eFyGUC7Y",
  "key8": "U9KsgxJFfhf9QP4XRHE7apdrotxSWfVC87asNnuqcbLqEStrFRhMXfX8Yp9qEKbHSWKYmwNE3q5H8Hbob221Vnt",
  "key9": "2b2GDh1xhmGCRR15dm6kZf3VsdFNGCYJ82KRiafdaiQTm7VsxekEtcytyPNBD9hLtCoQ9Q4TPPL8n418WNfqifLU",
  "key10": "2qgtbdqMvu7n357FgiZEGeaXQTkeseaz8ujad7x452mCzgvpHxDWFLNeRvPHEYP3ztNHnGuN6txVjfxc5DEZvZVA",
  "key11": "J5iU36xkkGWLZEWjGPT9AnaypzUr3qPj2XRy5LW7n3gyAbkrKGJaSaHSjVnTXB17Hx8UAJMigtWFDxDzVr8Xy4S",
  "key12": "4FxUyd4cvfUn9zKdYNq775oNMxPDeC51YttVjhFDTNKLVSPLWV1Hd8Ft7QEdbVxhE29EZM5ZCucQdhfZzADn6u99",
  "key13": "3q8XwBtDWPha565SJa2bac2absXRV3kR8yuhgjr6bquNSYa8onHsG5oxLCedn3qt8HrRNpec3Yup6GVuLtrQXgCa",
  "key14": "2cjACYA7Crantc6WsExYhNiqrtp5vR5opZ1849smosininiT6DE9ToCGYxb3tHCVUBUsb3tQxqJitJmJU98u1q5g",
  "key15": "4NRzqjPvqgiSnvbRmNJCFshVCHmtGkw9yWRSEcRj1odG47LBhNAv2W3Bnmfkr8BsBw9FuFPahckHyAqQuqfFLXdY",
  "key16": "c8rfZL2LFBUp8Ny2FACTd3kdzZ21Y4JecYuLzkMjS684pGaA76Zt32qLwjfDp2CAtMNwFqXZGK6ziiWRVxKzc2i",
  "key17": "cGgKNskwCn6a5YmvFnL16DhHmEav9tfFZBu6sH3BhyFf1sxo9bBEmnY1xfq2vL5Y35A5PiJsuWSzqD6BZv9N6Ep",
  "key18": "55cFoiQ1UjeYbPHCwVpj36Ee9x4jpM8qRjQWfHg4M3yXdThagDnvRYczPxRUffRTMADcaySQxptfhocKE7MZ7LJK",
  "key19": "5Rw4Nb2EoF7kzWepTQjh6rGBohwGTVrWsyvgHsjyE7rrnz9t4GTXQHfB38dKM8FLDZTv273yAeBbxBH2chc3CMmR",
  "key20": "57y3GXGa4cKb8RmeL96EwMYtkNiJD2LCa83JYNMQE2Yi4Npx7RR9iv5YatJ78NqbcCh2BD5E3GNyrtKLLMqfxHWv",
  "key21": "3V7s3qNBk7Gty8btGwunmXDdM2j9SQQDpkuJNKV2qJhfEMS9AZeTDHT4sLBYj8zmwbcdLrencPMqFedGEM2Keyhq",
  "key22": "4gV31SkGUwBtGJJAxf3PDhEeHFJvELLWx3ePaqakNEUZAYH9jG9ETde69uJuDan39PzX9JXKgPwyQcnP21wh4NeW",
  "key23": "3ApAuUpqPQNxCN9LUwUxbGcVyXYBUZWYshHmNSY3VBVu8JQkyJkrhe1RgMrLv5mdLizYxe7dfJrq1pQBffZ6ygtA",
  "key24": "fBAyNDkHCYAaxt4dBnUC26A1jdGRgqQEiwNR7v9v8ZcvxRcLMVyDNJx54XqM6JXepwQMqmeB8NDgyrJjFM3Jg8N",
  "key25": "2UxwjLwS1dM4HfeZ6tchjXsEW61J7tyv6uu6GEXpVgfqXgstpA1KkSLcmevtBhWeSkefWuzA5Pv5eCcYXFGWvpGG",
  "key26": "2fhirRDr9TMdwHzUcLkcrpWpv5dhAEmhjVTEYr2rTJGWtPR4XRCffVHKnCHER7ny2xNZrLaAjHRgyWbH68ja3czq",
  "key27": "3wpWSDZbdWeU45SaSTH1XHB8eZU36WvVe9dtf3mbKDrBaHC35o2ZNoeNd5xfMTRdGeRgBE7oT8TVMWs1MRhb2Jun",
  "key28": "VH8VtYsP84WSJy2NrQEakByQEVxXQJaC89U5PXxUjprTrZbxPE6AKG5tq3Afqzc7Y4bWE9QtwGDQCnosdN22GDe"
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

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
    "4sZVfm8Pmn6xzHzEGs89x3nxgyarqFkxB1E1wcEkj8Kwe6wZhmuJeSW8Yqrabh3ri5XcAMoMh2PLhriLXYpqZDcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcJ3t6svzGwHzcjaMC2pvw9sZ9DAWNgL529FEWqNaceHNEvSWDQNAckaGedJvcoV2rrvyy6ZaPygoweJMjR1eeJ",
  "key1": "2xT5WGdTDwC34DxEm936udZQnmq88KZmVtNd3QAKUqqsYV9ZDrEy9MWGedBdBtScVnvomcSA1CzaaEWqUaL7UQcH",
  "key2": "224y5HZemuRMeZs1j8aLMZMyo4swmLnU55H6Sqq2jWxLCCiCEvaJyf4VWDCPXh8ZbPdnepsNQUB5Tn9cmZEroVcS",
  "key3": "2kEwUPS5Gux54MQPSZck5tTs1D3h3kiKyFMFTS916Fq8y8pH7H72fUSYWv1wQXnnYHRY7AXpqsAxcQpavP8Ekauz",
  "key4": "2nqcLJvskoPYzPzXexkj7qeKU97g9jPXNnuCxQCvkyrfB27jLjrwyD3fPnvy2jKCgssRbny7xERctrmaXLBCrKtG",
  "key5": "asiuBicypBUh3drS9V5Fo81ZnBvRvw9VvHs4TZ3HnqmuibCb2D2mW9CMuTEpB4PAtSsSvU7noiWU6VF1oFmFHiy",
  "key6": "3ZK95sussF5SDUNp4iZzugrir2FNZ397y9ShdQ88LfDM4PnVtAs9f6tpvMpwjWxnVKENjZ6Mp1Nrb9AG1JWsKLUU",
  "key7": "5KybEGdMpxumxu3XaAGALJMms8zaUd3XsbFCPYy9y1hJCSmcPXrhbFjqAHAZR27i6ofqjeEMiKcRcKXtruS4YG7X",
  "key8": "H7RwXzqmoGCWk8w17pZqDqrqNvo1BvKvgPnF9dezfo9u8GsHFWmDpPyqV6twzzqQVha3z6zc6ndqrxaLzSjn47r",
  "key9": "RDKNyUNwq789Zm496pvjdjUS32gBSotgQ3NjQ5hbR2tGYtG6UXhd2vi9hPMzuEoPMM2gdyPexpHmFipE9nLruAo",
  "key10": "4YPPzL88ChdGLqpiuk4BtsdQP4adkiHrVhxgq9DWLL5DocNsqJpaAcynwMzSGEJticamCWmPUMSwGGq6vrjSz1zB",
  "key11": "33rRdyDJbx4RzmBEEJvCVbgTGKETN8JU8aiKpzyEqcMegM7DrmXxvC7xVDsR3jcB91VKJHYmhpaeRSKJECdzqnWi",
  "key12": "5y1Lt8vkVewDxQD7AwfdvDKxSiNr3e1RKdzAkamxwHKCFCdVQbWJGFoKqcByjvBbzbA6uvnVoz9EwWYMAwQzys7C",
  "key13": "4p8DR5pkfRWnhFj4u8ur7eUYUPWHCKzUkKuGnCvfc6GdisTc6KzzP2r2Fk6z9rnK21Kov7tyAa6uh5aXTmhQ3q9h",
  "key14": "46kM8YVbVMHXt4aiVa11qe3xpnySjfG61adUqtWHc96aoXrbLE3KLgyZZfUk1zs98GJWsxMufQZBWZpWQzdHWbrN",
  "key15": "jGJ6R9fnKEWFDbhWV9hSoMJJqpBeAuzcUAgeFvguSFccbc1k3dZzk6eWi8HM9xdtgnwvsPQpJN9BDxWCyAC2kVp",
  "key16": "stzHqykQjEWthDBGFYfgb1rKLccgWqtDauJp1yoCuKXQjn13zF6Xmt1tWwDibJKpabNvVrWL5sf2sdkiWVgPxp8",
  "key17": "4ZmvZzaPu1JQCN5FoHLq2RwyTkYAifhbHoLXm2DHVSK35uoWw2SYkcGWVuXiMsNmrPq4NKSPLNcjqeiqDo4bCz7w",
  "key18": "43rZfu1VafD2rDNfNameds6QY9e9LgnsCEAAm9sYGz8E8LsMMg5CUQDEfJFjaTdS6B4hobqb6zygCtK7a4yjJPmZ",
  "key19": "3DDcZewzLjJ1S9Lmw7GouE7Aq5FV3RwZMKJn8QRZCbSHe5CDZSEj9HfJUYxPW3V5QE9fSLubHKCH8z3ujgqRWadU",
  "key20": "4dbHnwb9tx8G7g9XmomhAdXVvMHpQFoHmSXkjkcokveiyEYkQcA6JrdYF27LDiGAiXgSqSp2Ahgwf57s6ypcHFQ9",
  "key21": "3EJoBsaqc1ejNmMDd2EArqbNuWhn66JSKDAi42hrLMkctTJpJH17gsnS93uQu4pAXsSNfFkQQifrqBroizEhtArP",
  "key22": "5xSYyYvuF5FijucCP4SsArBcAcQbTezzfLVrKVjDwFHs9p6qia5GrwPjNxdUT3MAUB97RpiGXsdnjxg7P9Y9368w",
  "key23": "36ZKqcKftMbeFBW5XAHcDSGn8EJif4BRUgoCFeWRZRvDAzUaMxouCJcAQMCPDuQQQdXVuL95CTdK4aNfkURmJHKM",
  "key24": "3c57QLvkmtCrmRe5a5QjRWVbEmfcpZxXfL6fDaCBQRM1kBq4DmRiBCRCiRLiRdo4PYMEMDRZG4sKkDg9feS7UWBK",
  "key25": "4LdZKsBtTERtUCvZ1FkjdFVYm8WWmcfbjmfkUQsxJnVYVZRgVb5kziaQz9Z6d5qneN5bbCRKyrgCxuCTexyQTg9e",
  "key26": "5wK4PAMs5VDswbvke8BrwFaQ9F2j7tPxEC281FB6CmyEWiAQNvoAb2iATP5T2B1Btoj2EskYSJexYAh1WCKPP6yK",
  "key27": "28c86RgkVNvVa6gTMDLqyawLQ6SQk7pqQRKok8LarFFvPUT6xFZ8KG1yRuFMUvwFD183gm7JTi3you2J8uLFzkhN",
  "key28": "Gd6mQULoNr476b7eDiMc3nh7fncjBmcDSF6ZzXVzyCWkeB78uBttuCuFgMt8zDgDrhZdT9Q47TfnPMK6UnjQ9TZ",
  "key29": "4RMF2mQ5F99ZqUw6XzhHTbFiNd463RasWLGLqMRbGyJqxGzqFf2SBFEoe9c95o4qRsL5yjE5X4cdz9ip93ZTc3Mv",
  "key30": "3NVVR2bmzyibhEasn1ihtZXE9ymig9JwMnvGpXDbvrQy69RdMqUrWBphUR5qDDECDWDDgz6Smuaow5HMrq8W5TXW",
  "key31": "4411orvLkm23oc3pFnfkQL4ZBptZYWTW9JA3UdhGTsh2ASwisBE7D4kc2DB5AeooRHotkGzX7xhEFyDgMaUSwFPP"
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

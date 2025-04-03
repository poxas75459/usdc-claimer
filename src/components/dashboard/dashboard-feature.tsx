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
    "3XtUfvG4qEBUYjTL9GEiNsaaae7e6LQNpspGw5fmmCWocs1mGTEiY936P7yuuczTbawognfwsFBsGRrp4A1zsdWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222PZEwqr8AuTYwqsRrWECFzpQrb6b9Xa6pwFDZTYbyK1ocHcCCDiAxnxabDZfDgfZc3eQrT8Un2UCigqcgtaj8b",
  "key1": "dAQHJp68N2zPbTCN2A2fJ1qDCvhszHMRf95hYfntyzhdhyuEuw54LksMkJ9asNhrrEWxBkfwzYU4VEDDSnEPH4a",
  "key2": "2t6gAsC8isjUvh6pNrbHvKPYQoGYXErCAaAaqgiBVqBPPEakzr6u6zCFgrRBtEEvSvTBezdbG5XENYLDCYEdnjfF",
  "key3": "4vrhRh8zLYRwYzjw8RtxQMDPy1GxrEXorzSsEriqPEkWXDbsyCse63K9nMvSuqxoXR4bCa8nikxGQtm37uHQSjeS",
  "key4": "4YfGA2rS79DoHvbiEfYqEopJcWk7L7iKFv1JCTDcwFMrQXRRBJRHZUUmuZhbS1QjcMiD4dETBo3pisywEiopE7p8",
  "key5": "5UYVDS44jMdUknsZaryEC1hA45Zg6vdnaJZ37prDHw1jSPrNvMpgeEAtkzYrfZKP1Ekqx6bRMdFwHgJPZgApDjr1",
  "key6": "3RBeW8SmT9qT9Vs3bQVURwV1qqm1iG6HaaeuRajbjrQrX8NepU62ArceKpCerREu87ZWQeBXvg21vBpmMRAhjzrX",
  "key7": "3HuCXgWWYPVCeSHUbmULmsNs9vZS8y4AQjw7LnviapxVtmQPooJfFijixGTxPA67APjJ8NXtX2RBez3kFaFPuVeY",
  "key8": "2WugPTS3HSPDWLYvkFr2nqLZ281NfP9KAREC1gCqJufDkkdBPNvNyJBtqaMGQA9zdeNAf9j8TYirg1mjozNfZqJy",
  "key9": "CEeu5xcXBtbYCEqhkQhKvxCrhmd18s6ov6Bp34AXY7xvuZ3DwcPhCyuotK4DoNjReQRJEUsqu6Vi4nn2kkjHwgR",
  "key10": "2WM2KkYVQepqZvsxMUKxFyvbXtUek5gEXXTs2Ny2e2yiZgxHiK6HfubdkTWHSzT7DArHzao6jAEA3qBUxsELL6KE",
  "key11": "3B6rdQKnBzDy14QjD58YLMizhK3gimpWPb46iCNJy54VGCZabFhi6idfawkNsM1w5UNRjDynDrjjF6ib845GG2Kf",
  "key12": "3mhQeSPkWu9cfF2Wb8oZ5LeYLAU2am9stRqM3gFUbvtp4DFaU8gTyW5b8W636Es5vwMXFvXD9TBec357xyvh6a7k",
  "key13": "4tL3qpUS57KEaKbuWMZr8Zm56mi5RBRViWdF5d96rh1FNcZ2HSxUmg4knhzYdaedxM9VtHxj8xiXs1nwJu9J3eLd",
  "key14": "5reV7qMqg35rxUB11c6jRPTC6XwwWZPagDhNyo2vQoWwV7GRhCt23PRJooFBRHANqe64aueGKtHomy7LK8wJpgQh",
  "key15": "5dCGFeiDB7BFgdW7sgArc75HUeWAKsUYbQ7UAjfZyaPcRcLSEbJksbVBpN1XNGwecFSxPhF86BNkut1FSdp8LbZg",
  "key16": "2GXDKTSNZSskTz3iVGn9REQqk1C6DEyksa8fxbQDtYQvPPcBpAJiRcEeQEnZFpwd5NaFRZTGGENi1h36qWY3Fxw2",
  "key17": "LvpfaXgsr8hdBkmT6hyKh4Jom1NrmnMq7oQZGLqPodGfRxjiSpByedDC33EjvbPjaRiZTbCCcoUX5XQozSuMXT9",
  "key18": "t3HRzYzmfD5Y7D9fhvZoNxCUFN6BHhzGepk2vo5RCAk2hUhKUpzptx9bYTNkFV29HQdvCz7j1ayrs1r8AonwaHi",
  "key19": "7CVoFp6xCmjtLWrbTpqhQf2MnmpxQru4x8ryd938zrSaAzC4xutQh3LHqtXvEi5SYq5FjdRADwyeAtybz7XKCe6",
  "key20": "3u1XKJhzVdPABSkXXUzbUfLHq8mfZrjRA5iyR5aAYfc4a3b6fpJK35uQxzqVfpcpaZfkKRrdmbqtPt1SdBay5xFZ",
  "key21": "2NpkaQjPSBERQiUihH7jzVYjMDAPDwHnY5RYNKi2KDpo78EUedxVGd9w8m1Jj8QuXEBe3JyhprWnwGUfxUkfMr5k",
  "key22": "5esGMkEMfoKMFy8yGNsMDiiZaYMJ89bNXSGfDvdcadzq7SAqL82r7S4HUFWF8sVB8K3qheyAVzqDWCQsUvi5jspv",
  "key23": "3kWEYREzDW3MLYppuDLz4KaCL1LVZkiP4em1yW9oApLutLH8sNPiWf2Wmw4DnFv8tsBsVP6jtPkkBB4PX3feiMoY",
  "key24": "5FTznecyVhgHWrVd8fxxZqiT66qWQa56bgfxK47ey9MVdbVkxDw9pNS7SSJStYpP24iDMafDftWhHDbynryWacHJ",
  "key25": "4SKJFEU95WSdSTEbVGpvZeJYLChXaUXvUbeynTNXZnvRyLkT4M8tVAFbHJj8s3GjzVrdVK31oD2PJ9eVp5Z5Ftv2",
  "key26": "4Nb12ENntNH7xaX36KMwRF1ny2L8NkxuVEfjXbNGs7K5jnZK1T3dhLEWzTzuLKSAV9sr3g7jUGHQnymVdZb41jAY",
  "key27": "3CrvNZhZUBtgNJBAHhTky7o5FzhWzAy2kymbJ7FnC4AWNWqqB2MgYeoYjrcctQK74QzLHzQRervKwuzVZb2fJa6n",
  "key28": "3moSPyduNeEkTp1QJXeQw5KAkTa1ZFiYnvdNDcC3cQUSosU2Xtob9a2do49xTrLZ81H7h1JFqkfWRR3tJHw1eAQQ"
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

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
    "AHuWkMsUkqEpMkCFmAkZ93pyzTbFzXs3vysv9yxHsFyePohjKTSKVBJRAFyNSoRqXN49kQzU8EuFibRUsdvXzHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Ab8ARbGrVxv25zky7noNDcbbjA64ki2wfj2srmKtruXqRDUhXcfpXYZ62R4pKAEd6RUTfPBn7LMynFyfgMEc3z",
  "key1": "4HTySMUCy2JeVpxbwsRihWZgN9r3D9uiUv4iuVBNT6zbuhsSLXg7WpNhrbykR2uxHUwmG2paT7iargasaGAo8DMB",
  "key2": "4mnsieWKbhEdfcN6298NTYaEms9avhTbwTzdDvJUvj2GzSD1A79zHmDNSBdhQBoJd9Fd6fVfSR7GG4uc2tQpPG3K",
  "key3": "JQeUXNb4zUX1ehhGiVJKisgKFSeurv64aHqkS2vhZAQWebPzcSNB6vzqBS8TqXq2XJ4KM2eavrUmNuT5dMvczwz",
  "key4": "7weatv3GyPkeStbn4mFqnBtVByRpp1RX9Z3xKvadnfdPrZ2Jw5NufaUY74Y6RT7UTkuUQGtyhfvXih8LvHKgYKi",
  "key5": "u8TMjKwQZLP2vmpEaVkxLyyyHFeu2LLoMrN6xxYq8n3Zn761P6erBc9fis7zex6c75jxq5Lxm6QMGzYo5P7nRM2",
  "key6": "5pR9UKrBDzTTc5ts5x9GYV3riCrNqHt6DwN5rCBk8tnLeFuxq6yjtbYWGWz4Vo2WGnCrXsGyy6APbJ1SwJw17TDD",
  "key7": "5AV9wo3ZQrDru575qLrkn5Hbwzmv6UUR8i6vxtRWDz5ErzqM5R5ZMyE69zxiWgvLCCdax8t5HMkx46XgwysA78Vv",
  "key8": "3HfN3CyJREcTJVJS14EUoxCnxUxdrsMgJna6as28t2Vr5Qq5DGBGoAgfoepCAnPGn8zkRfbvf6NXbhbJbN7Av7uE",
  "key9": "61NeYPhhZMuoSnCyLdf1DRD3oF37gtd4BZgvZuaTjNktMh2vDE6uZKcsnq6cXPG3TnzpD5hyNurxWnE2zEUS6Ytz",
  "key10": "4xqj3jXsorTyVhBAphyPK6cNWFW9S8ReXAxc5q8EBV9EiyDPpfFMLc3HHohHB4f29Kwry3wLwfM7wqNRe49RH7Ke",
  "key11": "hCah1s28sy1Yo2mGPD6AXxiUB6ADo8VKE3vkQgZDEQ77CmrmGksooAyiQcGpQawezC65em2d8WkBnGvXLMBnDwz",
  "key12": "C6sjHadqWue6DZbcEuZMRAbUAgFiLMmDA1hvwGWAALfytvyYy9UAPDSXQvb57N2VYffpxRY1D8qKPbwMFNaqAmA",
  "key13": "2Zh3NFYkAYT2sQEZqx5KUb3xoC4y5jUBTjkpvihNgCWcCFFEcj4nbWPsi9dzSibMqAfRHnE89vG261kK3ARmWaz1",
  "key14": "3Xuwvk8V118MxegSRf6uTYkoUAzjZqUo7FVcYF6PZ4EdNM5T2HyuoPPiyMveCx5wQ8KMecEe31JVg3ZNbBgsu73C",
  "key15": "2pJSCGGZVgMnNpK3tix1fUkpSeBLsdZw4cM2qjcbSPyHKYW2i8GzymeNPN3h8DJB4FMMb7Kmx3TJe4NQBhhULGkF",
  "key16": "5ZXD57ejaehBiqy4P9vVdxMYP2ikZoVedZxcDP3EfVGtCvMF2WjFoVuAdKHPcNcMcchucAfmH4cuPU2rkVWDg4d3",
  "key17": "4yA46uqN1tNx897qsmywg3nxy21k32s52mkAWLpCwWfh17spjE9P49QyomzccmurhYHMbaNJ77dPAh6AtNKZaxhD",
  "key18": "47Jm2R5Vuohigrx7oC8diikHNGGMPewoSuLfhs84UXHHNKFTT9WjqQA6uiqVSqUWxQgsVLUYLhmeTrM2HVWr6KnC",
  "key19": "3gVfAysB269hQjtM98LfxeFsR447qjQ5Vs7BWz6xnkLgy6fTgDVxPsr2Z9MCR3XTFfFbseD3LPbaizSc2bAgERqR",
  "key20": "gABDr7DUY9EEKMC5vfNypSkQe7qRrgoFwGcLcusw6PRnK8fMmzVrwz3d7PWTUKCpjWLYav8sAdupxvJNqMyU8vp",
  "key21": "2iUbAovR4NSLJRE1QMJgjhYXLsc9PgmucuCq81mkrLsgE8UfcTWw6KkZdCoUkgoSN9PpRGQvukUQRQxii8KoMBLs",
  "key22": "B8wvkFqa3HEGNrs6AmRpj2B5MH4kzqos6RFfj4tkiWfMnDPPA6sSZVpAWjctH9iYPL4Ye7Hib6YE18nwEuMS2c8",
  "key23": "3m8CEbU2gGeamyitAsiKvxWJyHQdFf1kth4Dug8H2ZGWzGj4VdPrEjga2y633icxGUfkRtUeit6VxVQe2B8qbckS",
  "key24": "3L5dZR95g8MASHhaJFiWFvYgYg85GTvrWwEuVp7zYDBr17CYqQw5tA45DxxxVMtuEaorVAx7vQEKChNYDDFMnKkB"
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

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
    "3jZ5RnYquiHvDguPbfdLyQCp4eCzFc4AQHrSqiTAjkRCNuaR4onnUCasWgRpizQ8hU5mvfa1K48xLKFjhMmL1qkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwoopuT7kdXaoGn1DYBhfiA7CUhjon8cPS6Zdj8VGRtTkSSKtP5p4mvmr68qsS195Jem4pW1KmTHR6rtthKgtRt",
  "key1": "3MdgjpaHffpxv5igeEyJQkxxAUjP8s5DB9jBQHfEmVjy3CUjECRWz2VLhrGXBPt9YvC2FDYvJh9Lm81qC7rrbhbN",
  "key2": "VGJJiPEqEqL3FzxtVSCgj7XX9sFmb1jyZuBgcH2sMtkxfVnxZWLwzHjPgTy33PvEgAEfY8A3aWEr1vta1ck3wcr",
  "key3": "4caScXiSQ7dZE5M7M8o7SubTKXMbYhMRHvCGUKMQS76hswAYrtWNLGDttf33XzfBDTEZ8N6BN3AoJBHHk5QUBWGf",
  "key4": "2M3Jb73DFcW7RNDKCDtUKrVoEYebsQ66w7uUVZoQXjzCHsNjCbkWrhZZV6eH3nbDiSmEcWRscybNBaHoQVMxengM",
  "key5": "3eF5Cgkmr1MGqtC3g2FYhJq22PKbq2qzYMddGcoFnYVEUUU62r85tDkGUjFRDnME7YpTMXQAv9hXdXUSXPVTZZvk",
  "key6": "2gs8i6ZHhLJdmmk8nvQUJobhuoLcrTwzbNwELj9cHrrERVmEcdJ7CRXv2LtxbzaRJY7ZqMYpXAJPXC1THxY1rUiN",
  "key7": "36bP3qiG3shoN5bm8jqYJy8gCUN4TgcpSC8kZBTrAFBpWzTbXtkkvfYc84gyN8zDLZaTahtbriKPhrRKWeXJVS51",
  "key8": "2EuV2PrUmjgsXnpGazh5EfQgZQZf6j94wvSizQpt5xMDG8va62np2kfKMbQ5mWuUorAwBsbjwkAvvEfrvEZawbYK",
  "key9": "2Em4mSZeCWwuBCJcEWRBhDvc9mpYwJnXK1UXPq5Gjre4nGEukizpgeBsBJ1T2ZSrAdD1ExBg6odbDH69dA7dZ8TU",
  "key10": "5CWdEjZbxoxKAtScVtMX2P5ACmKQMAWeKZ43ZCngZ7XbXDj1wuzSFLXDVrwKPoTo4B2gBioPr9MwHjduPqtegxAn",
  "key11": "5KWPGH3zDtyKuFevonRcXJWyk1xDs9o7XPJ61YJxmjartaDb2LVgv9FyKtLnjK94EytCmzaHeUhkDkfdrCHtdvnR",
  "key12": "5gTSk3qsUvx7Qc5p1yKEm6CrkofEw7uihqCMvBi4StRUwvWUGxUyPefRtFQSP5FGhkVcJM1LVJFaZEJBCz7EF9NK",
  "key13": "2mUadKFmMMHU8VXHd6P5LMaEPN6NveyJ3EXhE2yzPNx4qsQV2zJDhZCG8awmZKqjkocbaCK53iQmdcgxmxrKswUv",
  "key14": "3j4tzgTC8sxAAzW8UdR2EbZT82Q2cf3aWBUgsuH5NbgYvbm5ZiBqqWRJrubGw1Xy7WUs44aovCZqAxjFq9tJfbGW",
  "key15": "2ajkgz9Nkj6eF4Bqhu5cEMCoNXjTY4td4p3BGF7iSZoCEiPp1VZVo4NHAqCX7C1uZ5PcQexn1y2acarUfLnMvKEa",
  "key16": "vQ7XrziDQux5C8cwKdrVjUEdPk88sVFvp79Rjm782xBoed1eedbR6eRtqKSdwtMLmYGvFfKb2b7q8nuD6QKhkmN",
  "key17": "3R5ty2J78wx1zchNMiuXatgmQv6hrkPeeqhAiBJ3FCz3wT3MGVzD38fJzeR15FH77YgpNYfz1DeiRkAtmo2ABwUE",
  "key18": "3dPN9iYWMHbueeWbEKsxYKjKNnEtTvycw3BtmBuFCJ8aaCvJbKo7BAs9UBVmCHyArEy7ZsKkB1FYaXoNoya62pm6",
  "key19": "2z1aem6RDC2Uvv75KRapbzNiqYEhK39nVf6EYomsP5qdoqpYGRBb7GgtEucMsJ3eN3mdwGzTqHibV2j78gnMW1To",
  "key20": "Xz1NpBconk5cZuB31QmY3QGhS1Hs5LbePxSJpXT8vgYjXca9Gc6gn4A17QzJKN4zJXTjsXGfCvhq2j1KZT2yAWx",
  "key21": "4NtAoGc1iRH5QFP2k5PRwrp6TaD28nS2LPE9auMhFce3KhZivhyQcmoG8H6f4PHARY4HXvEJf4VfQojPFy2d9kkW",
  "key22": "3MpQUSQDSdQEb1mgCkUfQQuzMUipWC1qNw6ChiWZF3NfbwoTwr1c8VoDPys4mhb2HUXmc1Fp31oxzqMDQ4tL5cWs",
  "key23": "2qmxAXtiaEk6bhiqCGzVGfUHEVWWNUibqQTS8594PZn4LAUhsZL47CDxh9sBsBMjHqnGJ9ntrxBLtUQXEPKikPnM",
  "key24": "4P2biC7q4Az8Fia6ncwdo65h1gHyAZqVmipWodXKyYKDi6kMy1CPP7oUstxQDzbDPcqhja1pPEWt13mypaBrGqJS",
  "key25": "4GVmYKp88idyeDNwoxectaVMQxEVUGjNoA7zLvtXHAbWKCEd5qakddyFhXsMkiWoLBrsdYmtyhic1bvjVvCo7Zpd",
  "key26": "ADSaKP37s97RJ5uEK1JMAFY6KaREs2oGy4xbZP9TdmAWVjxiX8jdcd55sVogwj8vgPecFq6NtgEjc3nGnGnnbPY",
  "key27": "LPoioGKJyTT8ttaRBFKgMP6qso8hApTBovrHh4rMQDzsoYTaQnN3RNomQRtdMUk5hAMcCraFTpDZnYdHJwyYSey",
  "key28": "4U5XM3DTi7PpskkFtjzrN2SuHDgGrpbSVUjjPjz6rxDWD7qQmaX3g9RMk7NiPAmGQUzEjTFXkFFYZnqWhswQYSTz",
  "key29": "3qadXkJp7Hxbu5yMAHsztXHyboNWAnbihkVjRNuoK5RYx747aRMeYie5eN7cVcCs1iSm6zbkynAV1ZWBoqdz7Fui",
  "key30": "5jAyRbk5Zzjm6LHJZPjeZ6VPivbT1JeQAWcfzHv5gugUVFwP91TFNnozWsAr23ZxtFtTbBwKbu2jSosX2xzRu4Qm"
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

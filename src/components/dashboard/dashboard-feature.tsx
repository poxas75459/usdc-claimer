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
    "TMcLHyDLNUPL6mi1Dz7dYifN9Xi8z5VMSwvRe3iWxDa6rBybffTXsKGYMWECykbxFkLWkfGCx9gZwis1ZDAvWwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LS98acJPBZLvpDX6yR34DjtzqsACwR72YrJxxztjKqBzC4FbD3XgiAKTryXcjLpzQyj2Rmxzo1zT7xYAXrVNozS",
  "key1": "2R5FAHuEEbMBGYgMzEyy9QqhPwfoqbn7Q77RAFto8i1gi3WMmX8BDLXGboA5v8TvnghSMEcysWEXSUefxPdmr55t",
  "key2": "5qauVizAxucNEMitLfyGc7h1dT3B6zLd4h2scqzbJC9XRS4WqK16wQGCJtUhmAhvpBV6Y5KZnHuU5nVWtoo5kh9G",
  "key3": "f1sb7nyP8XtcMvRnZRvLgsT4gC3FLsrZ1JmDdzNNS2HADbzqL8D6CYK4jQL9rB8iEuK9MjdvKNkXmsvwLoe93Xg",
  "key4": "PFsn5Ye453cmpix739xVMSyHwSDD2Fbb5v9Mc95m3cjHzsAKuKSZA5Libb6cbHbKomgQnzyn9Pe69Kq9Dyp9cwR",
  "key5": "5cgig6BYJp824uoE141HL6jimhN1yeyiKn4pGpzpSr99YqLB67NRJUHypqwkCMU45aKvtouAusANnxkoUtZwVYoR",
  "key6": "28zTnsT1Jz4hFyGadHAktQJzpS1EDUanHpRd8ptjvt2JvRj1Gfrdwd9LaUgHC6sr1B64RkjWLTcXR884My1ft7qe",
  "key7": "4bVFiXYgaCFpPcP7qW3y7hMfrfVPgc7GVK1vdDe9widfp5zmCLhFAXoBHLn3at9hkvQ3GCj6GHCJb7M6XZwJ4mkj",
  "key8": "5KLsa3YKn1qUeTCav7Vy7Lcb7B9qPAa8Yag1L5jvHjXWCs32ifyQg8P7ZRpNMRaNWV91ugcJHkoQVFnHvrgwnjYr",
  "key9": "446uxjvzCR9XnmqXL7R58RK2vm9q6tw8f6RmhkFuccZmTra7bw2V9y2aeGJpQ6PP3ydRGVVK6WXbFgje1DxEAC36",
  "key10": "GQnY5mgsLsQnWeyCpqReW7hajPZXVBK3vaKz5sWcBY3smgRHxt7TBE3KMy2oHgcVA3DWi3KiGffhyvzCvDEfwpj",
  "key11": "4n6YYkm39PYEv28URsvyoseA5XMq7FdwB8uG8ZYCetmzEakcDwKiF4kmAfFSMFyVeWt6sVsW9B1b4HEUdKxvdReP",
  "key12": "34PdRsG5ib32NRzcvcKmUGKsHpVFoZRdVppFFuEc9Cq6vMKFGDJEecP9Ufq2XSmQFEskyowWyQCzfAjpRT7hZtSd",
  "key13": "3yr6Gz5cHzLFMK5bRA4F6ZU7pzNyyVSjcDj2CFY8KyKPDVB3Cq8YWVQf9qc3WAktda9jKDLhvsoj7vcjuYmhSe1z",
  "key14": "39dzyzhACanYEkXFrDXJdqa7MBZfJKa9ueZ33nuu6wRJurEakBneAnbfWC2MVm3T1P87pmuiDAY4aXxvyxb24p7f",
  "key15": "2wAK3P8CEc2Vg4qBpjpkiQXR4A7DLZCk7nVBg4ANR6XYBkraMmuBq2uSqM8FFyaBMs2nUnWgoz6exjLaRBdvdwts",
  "key16": "4fCL7B73aLbf9jd3n8ecbxqoePbCWck2qqH88KsGGecKkmdPV5eiS5F1JVoK8yhkDjT6VGx5oFLczA2Mn179aaom",
  "key17": "2XJ7PfrMQGVuGdK7WpEzH1PfHGYPnwfGRMGeY4b8wPSZy9y5czGnwwS5izQV6DhQrzetztqYkejDxu7AZixsjaUk",
  "key18": "5Z1auEw8JSbZwZyaHYHA9H3eDLmLNoBv8L92o2EvmxfVa8y3RLLPf2YS5668VMHZ7kQmddV32eVcEH36gP2tqBNw",
  "key19": "fXvJkcJoP2AyeBWKHrCRtPc8xfxqAAvnoVpdYbXFixCyoFV2Qf84yb6FXFvKGLmr718hw8hBp4pT1MZ5qFBofXa",
  "key20": "4iQ2ciiyZmnQF8TYDu5DFjFCU8dZMzLAwhcdV2tvYYPpPJXTUCzG9sH2Zb1WiD4ZtVjNYxb17PoQgXGK4amZiVMw",
  "key21": "2hRxLpMwgSWCei1cMGsgjixiUcz2iwBQUVk8LexhFDbSf3yLw8G3wK7cZNdr7LE1Wyb79nzqYnXefSuhCn6twPQ5",
  "key22": "JFfZTJEEJhhALWxTPugCmkN3xxAdrAPfsvW6L1oURHpQT8GbAY8SZMz9P2YwwXqFkNd3pRYL4JKsyxqgymuAuuo",
  "key23": "2PKf7P4QVmJ3NLxhL8QQ5zensepLB36T9znpSNTHK1yi8ji9hAifeDRV3feYWZPUzgEUFBECoe4LpbP5txaBLyNG",
  "key24": "5qz2xte8nSwLBWLFS97Xs3a4NxEvFKVUnuwSoKAxYZx6ufsNYcnoL2kkTuNgqhTCSoHcRBrP2QG2ssLcKayXUTjU",
  "key25": "5GU33xBza5CXp4JpFEitHW1HtfC8n2Uwmi9RJgpcnT2sKm6ifZsXcEsw6oTpNzGRjcfuckRNvMMJ2QVpP4kbDcie",
  "key26": "5X9keFHm5wRBYyHLkSjyjDLP1YxwNruRahwhFaQqgQUSithacuRWcJT31b5pWh6RMMzdu6QDW1eaZGzUaqLEnrH5",
  "key27": "8g44Wj2c3MsHDRevyLkqBb6m8B7MoMJtnfWJxeg8RnP9t6VnySfZNN99Q1nhPns4KYoGCbNtbibwgwe1qJTHSPS",
  "key28": "4jmWqTyQQiG2SaTpj54QuTcnvrViZ6pwDbBkrMVxN6Yh1ReDh76HVWgdA5wCBToFrCFDfsR4d7upWwAfmzxPV6Qz",
  "key29": "4hECvdMLguEhQP19CdrmqDQKhCttJiaiEm4RCPtkcLQFfp5xiQUZFS1xXFWqbqT2bH4w7gLoW71WRa6LXkRLvARv",
  "key30": "24kS8CKjym3HfgM2VGU8YpX1z3Ki3KCqBoBBDQPpwr2E7PzL1p9bMVV9wQmyBjjfxgnbviCLKsv7zJVwFTmRr52Y",
  "key31": "5wMmMDrJRaGtUrJ23ZfMpTqjbyDvE3diWggLR3hQj5hjWxHgn7D1CrcLPUTL1TikjXEcfW6tknfXrhyrPSUyStst",
  "key32": "fZPk6cMPKvYYEKBSEWzY24nP2hdxHf6AjSGBoAB9azmnQxgdk5E9E21VvD6gmZKyx96Jm5PU62YDhh5CbG4GFyf",
  "key33": "EXjtg7p6Z36BqWnWHzT35Awk9zRmNZS2FASw1avtTb7bJxrS5AvF8AWNE3arFcsYvXGbynzgYhAK8Zwv6vmxQwT",
  "key34": "4QLr4dyXjBMaX5JyjffR1R2s9adq577WUXtG6a13qTpbCUAKMjKZCHmB4UcmECMAxK6qJckTGM1kSKVBdLPXRBjp",
  "key35": "35BFT3m1V2SpRVustDq3ez1koLqQdfqAwv8dLXkh58D3dF5unp5G6CVfaxJuug6R9okxP1PPsyB73idD8bWGgchn",
  "key36": "4D6CDbvLhgvHSezn4MGoWk6xewzCoaxe62z5PJJCwo67csmiwtvLEKnj2mUXFE6pPKR935T9WddVA7CaQpH182hW",
  "key37": "25j2UexjM4kMSYzuXhydY78pRW1WWJCEaCyff1v45EWAzNgQBuST7A6fNRP436uNrEZsoA3CdCuUfYB9zhYo4o7V",
  "key38": "47BQRqf3BcDqSNyWqriDQPLUTkX6esqUK13TsvTqnAYAeUMdz11nbT6Tbe4deecDay3UFgTFeS4n7yic6dfNuLad",
  "key39": "5vEJcLKtRwiBzNfV3xbmZ52hABQF1gh3XjpF3SW5CrsTgKU2BeSmDRE7AtMXbx7YgmpTmM84F9coBXuYpyeNDFyk",
  "key40": "3UXib54mdTeEgfCnPp5KQa6oAoE7CZ8CfswW3mN3HxBySpmsSjkjmEfn7kHZsyrSfdgtcFWfXjQSVtRsfqam4Ydn",
  "key41": "2eG6Vz8Tusg6zijtMVoDppk1TXjrHch6t9eBmgSYdakUraHPnCmsvg1y5t6J5mcZNG6TP9gZznb6mk9a7cWcWVeU"
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

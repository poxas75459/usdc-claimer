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
    "2JdDRDGJtambgju2ocmL8VhJZFeMY7VQWiWa4oHcNFc9s6taMH2kg9a4EejhvvgfvmnKtdN9uqrXAMNYrcDWJ3Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NYwC2fSS4ZM9Bvh3ixVmaBFus1cPhokRak4JBzmsd2srYLLoeXoY9EFmdF8q9LcGoKpbMQwSrwGbgqPPQhiG26j",
  "key1": "3dA1C2TBZDVgGdoXUm6hQ72MRwKMSN3LHBurhv6H6dXsjtriJPUXBG9Dw6Bzt72HRsZKDp1A3HHt9zcSoyneDNkd",
  "key2": "3ajpQBQaQfGDDuUhYLjThcPv95VhZKuqjcWYuKfxvvPVvWmzyWDfZjJPVLum7CSacKhJq1EsrAutqwu4RtioMWgf",
  "key3": "58TY1L3GTMWYU2HPKVwkkVuxi7VBzpnLdLg57QBxdi1D8v9LPFCEyHAADYgD5FA4wpGTC73pekCoxpuddS13USQw",
  "key4": "47bEq9eGpuGY3G6kfEyMVeu4BCgbyqqzYVtvBtDfnWutb6XV5wjEMLuXt5prUWBJLcFKpBZYXmbZmSLjuZFQq5o2",
  "key5": "PTjtEE1yuUHSwaCnnaR6Re3sCubNcRfHgBJ7JVUpw4Rcfzz2BomjiAHKGqEEXkvuMnuyXCek7DdHias2PocELuP",
  "key6": "52zt3qxo6GVDJArdDRdWWGkpu4G88LVR6NRfjs9ueMX9uCf2sKxBWLxxNd6DLoWGCJDJcfvinByfq1R6YdVQiitc",
  "key7": "4UVUxZxsr7yUE5yJw6qmXUm8SWDnuvvqvM5XBnZkNqK2W3uyMPHSQAt5K63WGWmRubVm88SsvbHK3GFLGt725Ji",
  "key8": "5DLuLR63PLVkbF5U34EAo8Qu711Qn7mQtGZoLGV2bFr2KuQEFPjyk5EEBNcFs4K3ggF17CpBZ2CivnWPo6e9LaVu",
  "key9": "5cknQTvTBMDnSbnEQ6ACkzHMhjRCsCTsFkcqScrHt24Hkxwjd4n88f17StitbZHWxvNwjLVEVXceC5sue7kZa4PL",
  "key10": "59HQvtgA8Ybpnuxjt1Y6tkZtgXFafWm1R7fDDRsHQ92rpdaMaBpr46cW2iJB18N7fdNNvtCw5qmC9GZyRtKGD7mj",
  "key11": "59kAvchcRyQcQV6XtmYTgqoqY4rmyg1CCFD6BdaPr37BaBjGKkxjVzaAVP1MaTqFVsoaGLkfZfLSAbpyhiGysmp",
  "key12": "5dWfQxfmRmFKKRdNraYjcY6SCpVZm5QMBt374QYMnQ3ZCKuU97a5hAFa9WMgHMnrrf4A5u9QWMzfCf6Aw2gK3CRA",
  "key13": "VAhP4e6sarCEKMux7bnwh6c6XHPWrdBRrUFYu3goXgjJxF6CevPkLP6tz85pBXy3GhiWvdtr33fRrap7jB7qV2u",
  "key14": "khvYS4CB1VXjDwSWPvz8izZhsVSdDzCfqSaYu9rQa2w5FGsiKxgT4kC9i7GQYRYRYcNL9KrYg37fTLDBvGRiord",
  "key15": "2WFBxUVP23Wn7KQDCXTnCPTotaZvAEGPvsnnNdmmDGqo4b9enMjCEevAdMbWLAuQ3vPZDHtbpCPfFmpqsiYUCbKk",
  "key16": "555w4Kn1jpoEjg1bF8PU1MsPJTympBMhLSrMcbiMsDNjzGA8UVfJCARMEoHWV958Tm8QuP9yrnhdqJE5JMsmbZ2i",
  "key17": "5pL2oKo15G6ux26NYaksxU4Fg3ameQVFdmjt6sDRaZw3RE5aocr5UoFogvSkVEHZ98ikkcQu2D7GAsA18xFSgqy1",
  "key18": "5Rx53gTCszFEL8rFSmVeThpEyZke5UkUdy2V4zBx4xha146YnvVetNaPXsNjZsh98MJkYCpLXPHxfjVf6zDjsQDD",
  "key19": "Ane2SPeNWvh6JwcdHUZf41t3JbJX41U4dbqnXLSzVRavqzFYLQJmf1XLsRgd8DShEZtsXkyiGNGMXJe56MNoM6L",
  "key20": "4cpvTw1bfs4UMr1GfSmSikrRpEZ3kC2526HwQbRjgSXeeijFc3impT2oCphekTxnoBdffdAejwnupo7mrq2ofi2v",
  "key21": "4CqUxx9USeQr9TruTDxAcUvM2DYLfmho38jMBaAprQVgJ7kzccvLjMdTTmk2KCL8XAsDGyouujZEUy1qxDr7vmja",
  "key22": "5iGRkCDeGkfosusi9Ek8s1NvLTCA7ECwqX4dLYLTPMYmvXVXQt68pX6vCqhQKwQWCNmvEuEWYFangntai4Dr7ajm",
  "key23": "3Br86Pe9FyA9RGcB1eB7sw6PMerhj3N9WqHQzFfw64oeijtWpJi9CdVVr5z3bsD9QLUbFJiEzpydN6gofrLrbcGv",
  "key24": "gsmzRxiFToBWuJjCGcJNfCAebJ88cXfnjW36edZBoDh2VVmVHYQJASsQWbtanNDAus2jtZEFbvYZsPPqPRnNuc5",
  "key25": "5rjKSX28XHrXCd3faLfnDbvrQNKnDEhe2uomUbSoCAgeq6n2XHZMFJXHAts5ZNoqKyLNWjJeEVkcnaKLgNLJdtsm",
  "key26": "p3jTBpq8NhhFVK6mczMbpmZaMjdY1ekH5maSkoa7HpB6X2gKUYQsjRsGq5PCBsY6ViinAALzZANwUYUDnorDqqV",
  "key27": "3M4uYyg89rLkZEvL6LW8MyRpFNkrg2GT4gHKj82BVMP8vmqTepswn1VHbWGP7YngG75QZVPsxUwEFYxw5uA1BDmZ",
  "key28": "dAUTVCxkuByep34LBwFu7pcVwNPF4eyabtSAvZKvqjkCG69gMDZ2TPk1ksZPsKkMmYsejHvUiBtSUBXjjUwvxHX",
  "key29": "5HPJxVwgUjCiDhK8xytZHvt1gTbEpNjWrBozE99X9ySVcGVfw1jhYEYf9M2BTNYE6Ct8z2DT4L1MjSKBSXUQSSp2",
  "key30": "3ncgUA6hR4Y5owJ6Pc8mxyXxYAbNRKX8RXRuLWDLrFhmLVB8vV56h6KMR5DaonYGknKZxVJxSzhvRwABkUMNd934",
  "key31": "34FPR8TCrtmehN9JNgfYA4DZUWe3Vg5vWkh7RSBMq4ka9mjagdDwkEGDPD1NDjL6B8L3g6eJk7bRvouuCFvdk2BJ",
  "key32": "3u4kKbuSgS6qhweAjFbE62qFgTExbfNfYXVsp4mXQWmB2EW6Z7cEBRiYuWtDeVo46hxBFptstVoJWCHbrYKqFn9Y",
  "key33": "5ajaydgGEpduZbYRfpRcdNGAy9G8or7VR7oPF4vGaB2g6YKk5cdRKXi8B4g63teLyRBis4dNGQb56JLMPniaLrmN",
  "key34": "4rDoJvv8apzhLUXBEMD6A3UuZ1PkRYxefEBQ3Ni3eaEtcBgqUS92EAp4kA7TP1X6qAk7ZBJPW244xPyTNmTXYDwU",
  "key35": "4vYypzWUeCnEFQ3nBtsUaDy7HQ7cKrGz3pgSNQ8iGfeNDWESxo2hr3n72cLaqN2SaqJJshBodGCUcsNjfEnp13nv",
  "key36": "63UKJPDekZhVfG9qjCNfkYjRwA3AbUxPDJ5vNd7B5neTGj1v3gEhSazNnyEUZvUvUb7tuHp19uexiNUQ2pruvRLH",
  "key37": "5sDyRFrfAEP4WsdUdS4hvnyvHVyMyum3LmRPNkTdKphRLzprMFh9rKe7RiyGoehgHXuayzF5bDQ4ntfHuMP7biSC",
  "key38": "38T7ZLjWbAhV23zsPNLHJdzNkfNVUNBXwpJP6hGiwAn6zfTVTU55UZdFxFsTVYXW4E4EUBWRKQSo7QKCYrVMxDxd",
  "key39": "3LsJ279C7iDsbUnT3ZscT41ZAH7GyjuDWk1hthPYEZBaRgdrDQDzBvN9NqifZumyzHPL2weAzsAfR6fTie3hUvHQ",
  "key40": "36A9UiU6PbYXNt8nAwNAsoWCMyaNt79TkKD9VGkm6yxQHBw644raHimLpDNgwyRQvNnw6aaYeBDnteYKcZAUfYRk",
  "key41": "61zu9BDiWSwRZyH4zj5KcV7TzWsaQ2KhrQWGw9dCTy96tdTvJnrnLJ7LSK84DiJwexqosFPdZqqWBkWeb4KENxbK",
  "key42": "57imyUEFHexqCUZRQqv9ptpbZWrJAJL7mmh1VEA22skwBDPgwgCoKiNixbJbGp5bisZUpF1vu7Hy16XxyqnT7UWZ",
  "key43": "2rQDs6j5VMuDvYLN3oddeKW7sYQbSa6M6uxPEoDkno6pEc4KSd2X8MLowVNuLxHNobVqBNTtVCsU2hBj4nY11j3f",
  "key44": "4CgnFh1F3jKDh7mmVAq3x5zpBobnecowyaHKcBZHRZjoj9F3Jc1t9QwF5v3b17exHazMboHwhA1AthU5fmEdTYAP",
  "key45": "3VM2iVzTSQfWwuAAzJs6yFr2LFhYt1k87WWXHychkzyrbUqiJQPHPgQSspAH5zhkSYDfVZYtKYCvCVqKQmGvZZjD"
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

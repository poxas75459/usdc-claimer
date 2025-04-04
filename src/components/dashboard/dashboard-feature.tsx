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
    "cikx9RZe4tBeaRgbSdysk42Sj2KRxVHZLEirAVMB3XzVrEM8qjPEDRmWNAbjKQzXX91LKd2AMKy9rt2pqziTims"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjktKr46wHrS4dhEdpxfohZYf6qYkK4bibWLSHTpW9qnedsEZTER99RZzHQ9GrumEJ6FYKW1wyx5UAecam1CRbe",
  "key1": "5iz17MHC4odupUC4fjgec6N4G1sBy2g46hVGC8YFdiioqQZTYPQiRKFVbyFxEJVCquqpPkhHXKwVTyZptH62mRd6",
  "key2": "2pjLg5hGDrPjjmEJHYY5eUiFte3o8jZ13YSdSAWch725Tyxa2Xn3JNw24FnK3NgUTBdpfCE5t4zEvCoHg9cUhpSh",
  "key3": "3egZkGuFGKJNjPRiFdb1E3v96E4ZpcfjPBvSzNsXQKFk4cyDRQTZWHihzDxDFarWzHsKAm1453qpGRLq1hgCwL8f",
  "key4": "4as3e3ZWrHt7UWb2LJWnFESyUeuYGqHZCT2S8bq2MZJDhVZ8dJop7kFkLgu2jNjXu61pTfZdj4tcpVuLpR6aRJHR",
  "key5": "4LqabCDG4NrhmroxBaRJK8FNvtoFcKS3jvLvjRHXUP7b26KCAxLsSDYtvuBEip1V1P4kTsz5QxAg7hY4wZFJhjpB",
  "key6": "257jo1UksdokXH8PgrqryWEHdpfU36EfsGePDkzfuv4U4nUBrg5homDqdEVHRNbvMcLFLiNzLZsXS3KmhCkgs5zi",
  "key7": "2yPHh7YwumUohgjXkmc7NskEJBkjTDrbs2q2xeEM6aVeZ5PvjXWHejv1VLC7iLpLTdHRRapGR2xYRrZFSo4XD6fv",
  "key8": "XeNMx18LnSLWYAHC1VCynV5VsGR2hPnTFwe5UHuzTGLdo7kXRPeYnJGZ8SnDLiAz47i8o61SJL9JkkZtNU23ZJj",
  "key9": "grGH2B5wRwGYBLmA6zXJtQswZHQPvaBXTCFVdJJ67RiPV3NZDtfQFxY5RLEvf2p8deoNFwpdtjBvV8BGM1si3b3",
  "key10": "49NGjqNUfVDwz7MWpzS1PCfz3ckvboyhjoSKS69xAszLAyjdxZPXgYahVusH4UoAiatGVrVR1Xi8PaPshcLmYnTs",
  "key11": "5aMZquJX6MsLoSbfUDMiVk4UJ7EqHiC19FDwgroL5sg7bgSFeN7VFcxQ97BmLugTMXwT27VgHXncB7afsJaBe1Dp",
  "key12": "5qZVGxSEgJFpcY8DMu1NddANWC19mXSntieqdb8NMv7pYijMRJK9aEWfFeCgRv71dGJNrfYKpJ9uCvc5oK7BFXDj",
  "key13": "2GnWyXcqdDoU5abJuGpmECnW26KELnXidoq6PYMgyhzoatUqxWPrzF49NgBC8wxdNh2936tKY1EDuHrmpnoZvV29",
  "key14": "wUjVo19U4zTgaGjYKwxmL82VzuxGAVAiRNp1yavZ1ZnRAaUNWoUYGwwixGenJg5tpougVNCxccicB1bzgpPHksi",
  "key15": "4c5wjPMJ8UvmNJkCLLt93aSsSrFsqBLGkJi76ri8k1gXDcPMAbbvZctTHeD5PGUr2iYY1Vy1VixzaUgmxFEmdPMp",
  "key16": "4Y19i7hDoybV61GVxvp9UxcgDuuWESp1cprvKPQh2WCHVTicZfbewp7jXbT8nDeogv5xfqvR5KpMGJLvpi3YcuiV",
  "key17": "4ZGKnhHN6LG8krm2VHWmEuz7tGkwZRWdupaNPRHyqCtatrkbHKYBdYjUQogpxDvBxfVRtxeAw9G5ko4AQrbe97LG",
  "key18": "4SorhdBe5Aqz43jye1oF3SdUq1pnin3JSVKRdo7bSt8vuDiepZiRFrbradci7Cr4HTBLxAZHBSKx6mCYBfvsNkmb",
  "key19": "5ExoXVxTqJo3BwydbHRnEEHMzFtKhereLzPMN7c8EoKPvtxYPF6myPZiWcFzedvTDeJ1Ghk3NXejyxP5K4ud9z9N",
  "key20": "2XZqNk8WXi9SsQ7WVsCc6TUbBMqAn6oX1VNdwUXhmbzuteuKgWGRQYj9tg37o6PdDD26JF6b1duPAt6ZAtyHJzEx",
  "key21": "4ayGrhhj22wbHEq4f4pH872TQdyUZZ97a8JW6PPLCvgimfQB3Wtb4c1w6umeJCX3gHkPpG5DAXBKkC5KrW1E5539",
  "key22": "39uK7ybVgtkBW5beT7unaipFKouoFKB5yHXHUiCgVcCgbEqWtZ65xb4M9tauFzNWJXtVV5YokDQHHMxE3i9NbFLR",
  "key23": "5HpUEhWFYDyTV25fUBgZfZQGFfqi5NruRiTgrzyKW6YLuZVn8ckcDoiRkXwW2FxBYSXLqcExrSXnNmE6bxm6g32P",
  "key24": "65dmF2Ceqc1kJDrQbBfJLNHBE7ZJDiafnXLhfjSTaJBRYUpnRji3rBxq4ksC9pmvQNfQvQ9sNiFsomXUrWxgVBSn",
  "key25": "5xgxx6Jzv6Bjw9EDcDZ7qYDVJhZik3anEu8a2XWt3zPXGh14LwQFQfSDpTagbxrSreWKhGihhm1ozwXtmnPVevg9",
  "key26": "ZrSvRefLJfH7TFhE7p35r9uBteskG4N6zrcCxwU9kKa6eZs4TJu7Xo4RdFTCphZvFyGGG6K2jFCgj1nYnG9U2Hd",
  "key27": "5Vb8mFaTvx8nUVEqNXww35PppbFk2LvMKLFGD9zzRRHkdxJypidkQePP74ZoT3Zdb67pTE3SXwT5e1f1hzYhrmy4",
  "key28": "3PVundQp5da3MSxK9bAjfzLo8sb14dFuCjVKhruzKJtQP17dxiew4ZQiKpPACMqn7eMvYtXmizsM5KsD4n85nYiM",
  "key29": "4ER1zUg44mwooWtxdC452M1Gz7oKpjUvtUY91rwrrU2D9XN7mjv7K5Z23ZRSnKHAXRwuF1UTZi1Y6PFN1x7rE3LU",
  "key30": "4pvFuTrdYxF74RnX2Vdkpp6Moz1ZZbMHPByWu2VPJvtVVKaDPts9SmVoPirajgnGaMXAzjyhX8wzem3K85Vwy1jV",
  "key31": "5QUBpAfB8GWtw1BxHpveWkV59qmiB8zDqLFiakTb5M6pssmBCRaARHfWVXqKQqBgVnZmosJCJump79ehhir2EZ9x",
  "key32": "5eVYTc41qrjKpzVFQXw1ht6ptC4z1dFJXYLZZHYcUkRxZYSQ5opMgXJVr1Mdjb1ctrxFnctGEqWHYfQ6rCStnNTh",
  "key33": "4D3m2THJ7dQgLTZH5FeN1eAphMgm4VgjSKuWJw6t6wZqwb6KvE6gUDQ1wcbXHPvTWznPXMzAYBbaX7aEYnX8QUAX",
  "key34": "5Wi5hqnLSXxLPUnLqV6HjM82VXUzC4TFfXiDArzu3ahpciuq6HFgg4pHfTkmpSf735tvFeHNiAXTxDqk5S7GPG1T",
  "key35": "4Ni1fSUu8Mr5kz3BRUQfapr42vgTde9wpYKAejPhr8ZjrMJ5Tz22ScWtPVjpQg677sSpVFLbq3Gn6ErykKVnpRDE",
  "key36": "4mv1GRVuhZyeXVnfCqS4mrRsdo4GB5x6QcRsgMs6gsgEeHTpXK7k2kxeaDZ1d4kQXgCMr9oJEiPQAubqDa9wuBCa",
  "key37": "3G8HuZ5VPzRwquZhfzuJJBtbJzCAACPSmVTxKnFNTwNC1bGbxbsc38VmKNBpAJQCXLUKH2BRLeexv4Y1vgr4zMB1",
  "key38": "5h6ahgrVZjfVvxvvULrDS9xpuQEERSvqft5aEAm4yE2pmd4A8nT3EYcQeFHvNPxp3N8JM3vsEoV9F4UpqWp6YSFG",
  "key39": "n2rDmiL9tXqgJ5jRqZrGVz7JjYNmUwbWjWiBtNmpQVcJcdzybRhUZFpYUKiLr5Md6KoCeumgRVrC5haNzsZdRRR",
  "key40": "2MUSDCXgQQpQBfD9K6iHYL677eUYhF828yPPTjvswzSSGKgu4u25ZsGZ5voT3Q3vzQnSaeBRgePKPxceUaXxdbsj",
  "key41": "4PFpNSsqkksB7kYUveSK1mpxuy4e4Wde54wmLadNftNezEiRyqqwNJMRFMXanHu3rDGUCAjPhxqyDYTxJvNDyayZ",
  "key42": "5XEjXX3etaeCLUeTCLm2pUzCN3gqs9SjFAKd8q53WyNiMkoPG28gxR7eh9rCsHFRxRz7zqvAJEzVVyFzKw5R4yrT",
  "key43": "NNjy3Q9rgYYAcDFc48dY9Ui3gzqgtcUPWG6iTD8SUpWzQk1hS4djy5EvXqF2CKYUeJ54wJviHcPvKbR5a96nxMo",
  "key44": "3vHQqUoz8LtKAdviyiBuTjn2ptVeTTH43MaTA3T1RpvZB1MoxQXzQosCRbMgSvJaetyqtwf72Qz3cjmcu9C4PW75",
  "key45": "55bPAdsNvL7D2v2PXLMCPVQCye1KPRf7FRRkH8VC1YN3ZZTiRFjRquXgyi7yGxsgJLphdHvsx5hTR33QxM7r9hs2",
  "key46": "4Z4WCgHX93HgFkMzTgpsq3wXX1CJqUyseXCJKsy3vXED51SpdRxTZYxbde6GbCneByaUMHPgTTW2WHgRUWme9qdL",
  "key47": "2Yk8StXZ5BMe5p5SPw3Ni5LoT7sJ5WE5ivp535ptF3vnDv3P4VCkFgbWZgFKM8yQapt1rMYorbmEhFHEMxjXm2LB",
  "key48": "3eAQerq9sq1XgAW9HbHTsuP3myYsb3ZFSeLFXaPz33VqFZBeRwnNFeVxbYwV2t4r8dUoSgwQXnhn2kKmk1qaC1JC"
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

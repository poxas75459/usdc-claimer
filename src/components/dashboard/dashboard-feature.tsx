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
    "2rgv6LpQiCrXBXAcjyQQaPDNG8X25y2Mh3U2CAEvNbmYhygXpWY2npPT36pKg9z49jCCm5RqoZx4WkRig1mP7FAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edSJF4DkSVd9v6E5vGbBNqwt6RBNg3q8r37e3TfWsmvn3CX2CrByKCYn2tbHPM9aWQSCXR3MQju6sWwJVENhUJT",
  "key1": "2SPRaKL7kCLeNh7ETbCexTwJvw1VUhwdsjya39i5g1KrhFuBmFvnkD5KstafyayW14xkZMvKpAVcGR9nL87uTAeR",
  "key2": "3RMfuMu4h24RQ9DmvKb7zuxdDwekigsaJexsi28MhBRj7a6siF25u8NesQkjKg9UCn5AANpzGtT5zzRF2qc1XvXf",
  "key3": "2WzEXGu68Z2PY8zBhHiWu9dpX9f3KCoBJMbNCFjNaeZAKPqPBLDFS6W5iMGXrnqkqtgcA5FWQkHs2smUbzyX1x42",
  "key4": "SW5BmfdeoxP9anssQ2mFATSbW9CAXGPiWpLpWJnMZKmFGg1Z8RoFyn2H7hsYvvQKFsKMQAy5xqennNSHxjPZpZ6",
  "key5": "5C6GQ6wcS48oToXSNVyLQ6dZSWiPQ5EhizmR3u4CNFBgcGhwsPBkvkAGta1wQxCZ9wsK4WskGioMoUB9TM5Gtkwo",
  "key6": "2L5sFFJneJEm1RNWTgyAfqqFnby7KZqxucJaD2imbRqdjaw73mRS3T837hC7GoCpJ6x2owcwABLdiMgRfma9rc8e",
  "key7": "5zSS7GnUYRUaExeJjUwtXWTRNktRa6GpziCwaSnmsRCJfpC9o6Vx7oxDR12b38jCjNLiz7R1RX385gEDSoU9mBe4",
  "key8": "4VphMdfUiNaLr7gaiS2Df6ZLgFZ1ETuwURZV7kapYZzAQNc6DhGpDtM4UJSpAFeM2t7H2kjcuPqboVfnp76DP1Lg",
  "key9": "2EqnfxyQpTkeQQpGCRK8kzqGovbD5yPLao7hGfJictC53aqDczZthtKBGp9cqdLXpKDufUMRZHWp3pZ3GGpWtQVQ",
  "key10": "4bmSULkNCQ5He1K1k8ZvXyUE5277mtQZKt1FX1vEj3LYJWuaH1qRRrZq5ePuMxFosY2kX2y4Dd4dKisyHTaoHR3V",
  "key11": "31nkSYxxrCeoabJh8VwdBoeQcqCrgCwADHoEGsPS2QjnFpSwM8sVtJB3pjCcQaNUsFoPEpQj65LABPhVmpTqdiKt",
  "key12": "3mRokM9YgKqRattaBXSGULtopGvF9fVQQXuw5HY2XfuNyHC4QMhMbyh9pimGTKyW4kxmviJWezM6EsDBRUWH5rgM",
  "key13": "46veYqEPkqHbVR5is7ZaNA8Xc1htSv9zRqfepKLmKJBmXWQwWrY6UJ9vn2o8kVJvme2nZvxxNpXWCyxAGNbX737D",
  "key14": "2GrAK74nmggqXXz1PseTW3MvEcGTJWsDx9XstzC9PcFBex3fqm9YXbfeLd6tpKqFy2Z2qy5XoM5pN2tUhWLDjmtF",
  "key15": "TfvcsSPcPNKu8tybebYpmf8VX5JEspuQqTuVWCuq8YyT6gvyDGVGnpTLdv3rEsYfTYzjGY8RjyfUsdkRaNi29NW",
  "key16": "48xe6dtdAiSSYcFGY18SrxR23sVtSdXx3MLWfh2iH4orDQKfpsnTxSUV7NqyjRruYVPHUXZHX58SkBSr4ke4jW8S",
  "key17": "3knd4Ch42ipEbqf5fjeLwoAQHxMsgTB6vdbtqTg4eBigzY6QUZGFtFRP7kPLAaxHFPjZfzor5uk2PHvC3LpGB7uD",
  "key18": "51CEq6AFf5qd8X273moTMxcCmVx7tLqD6Cka6DE7HiT5cZSrSYNALjYMxE4wqV9vHBi4s2F9fTjX2uhAzqgERiZo",
  "key19": "2mXgXR2sWnYS1fhTwqsiYPPRrQWk3LNK15BmMx2hK4dtiXCnU5ytkbnD2zUAJJXc7HmUSiXn587MPhPCi2pxyouj",
  "key20": "4yHUXFCcLbA8uvgbMT7b4x3SCqH7e58SbDXFs1Zq1WoDEXxwnFqEnSXZxMyZu6TUmVAguiyueiN1zTavkWTMZtzm",
  "key21": "yQnqJeaWw8GqnnQGWjjLskCqVJoB5A37vgAswwgaZ7fmgsiRaov9ZCPzTpLgedYcNtQBuTQ2g1NG9WbbZgXiM6b",
  "key22": "3XK9uBMddzkD14rsoeiWbQR949TqHXfLEX5bno9zjNsvKw25yx8Kg3VtqvdZ87e5VpCzZVwf9dFKoWEZNq7TokSi",
  "key23": "5H2SCJGriEdHYW4xCweScR6rwPEwqwSh3sXA1PtKDKiemeFALrmDBAeNdarfzMGiQFdRBgktmaNxQjCLitUs1TAC",
  "key24": "5BAzuKc6fpnJph496oZ9nEYWSDRpE9mSkqJH6jWaCLfFY2GMctE8A1wMgoSgih2bUZdA7J3XbVDuFV3PiNnVRo77"
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

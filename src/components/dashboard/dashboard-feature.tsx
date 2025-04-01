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
    "4Gdsr2e2xQkmrqypZccdckjKpR2yBd5VmBQofSeKEfmjsfKJo6m5AM1xLs4pYbQxar2LENAveJBSC3vBz1s93bXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whVyWgHw64aqC6EFcMHXcgbVQJCW4VVnpzVeHTpYg2qBBwwXNJ9yPFCwygC3rAgbLjFH3utRkEkfnyPt7iZz1Br",
  "key1": "2RDTSbViyRMxAdPm7vsbZ7iPPH9Fjg5eWtUmas6v9MVvn5sTxYtChP9F5DZWt6UMLneVjTTux7xZLYjj5aADj3bi",
  "key2": "5EXhMkdnX5y2v7nseKcH51zd22NrXK3x41KR9epR2xtyqB9FSx6dpFQEhXCdRGT9UrhkPpq5fBJdGwdSvYmiwiMC",
  "key3": "ncxyqM8gWxSVj8GQtrFWD3UjBPjU23GwPLUybtyh6kTdkfU8ij2KnbEbgcQFsYk7PEdgJ1VtAeetXMCCqbyiFVX",
  "key4": "xV4mkh9jYNeQnieVvbZ5AhriZHhdVChri7X7tbqowV8zb9f2KDFGMB5UYCi5L2StLvVAs6stgqSVHiVdRC3ewn7",
  "key5": "2QH1pxAp9X2hooxiAJWy89KVowMvZjAEfbawbNai3xHigE9e58o29DtrdRNDY6hX13H81fxMKw5so6ATucqLAXcg",
  "key6": "35c6yiHQLpPJeghXVnQx9Uig3XEdJqwMAsiJfQGeZNXj36A5QzcLKwwNfmcxGpQDGUB7vxnPnWuF3Jg9FwuYFudE",
  "key7": "3ibKUhkbLvwPMLeJ5Dic6XtyYrpxZkdYbUCXqsso3ibzA9p2Qgey4L2EwdVm2meUE3h55bTtDRyyhxAv39jK4zAv",
  "key8": "tUxHv8afatr3vPMzjgCT4dKyzGsy78dgoLWjJ5o63mSbPAkdksohAMKDPACY5KFwXxhXn3kgdSfapppA1feiDtR",
  "key9": "kY4n4iXrBNL3rh7gJZTYcvqGpPiT2o9eHmw8RQ75c8NCkWVF128NeWhiuDfPHfA5DN6foJhegrbTg18UeGuc5qA",
  "key10": "5yUwFavmYx3xrgpGYzfgA8PnWYQoRf7jTEaRzq4s6tV4c3AqEdkejNm4DzMtJwcqAmV57ArJqGYcYaZDwYuA24sS",
  "key11": "2KZbPKj4J4DStUMuDzk6YwuJji3HBoDAJ172gJfxJG82WJN3xPeeoRT8dWfDhFwBUxibP7VJS9iHhAfyhhJtSH4g",
  "key12": "3hadVDYbZ8nCqyqmwmbBDiu9zbWsChoPCdXAk47FL1RXSk2oY9Pxc4sqUdocLRmTQuHWBkt8aGfKpfSmzjyNojmy",
  "key13": "7m6Fs9xrq6dPPC4PKMxRLM412ebcaGMFref33FLvmYHe9MxMMpKzT6DEoSQB9voKwPSY28YGTcqbuPir4oEsokd",
  "key14": "5LnaKcX4QFThjrk7nzQRQHBpLqnLkKJufBkhAuDhjSRWyktyqU9nMAcJNoQZKGygnt2tPoT9Wt6wG2AcUADwyBDy",
  "key15": "4WwUbn1jGTXmi2hVHDts46G9HtrwA1CVRcany3auU8PfYWHVqjQmCYH7dtR3UvRy6BJ7KSECtTUeNW9cbi5rRS9G",
  "key16": "4tA3hihNuet5g1ZEViqhYgr6tmNCiWLg4AfNrSN4qPYJNsYXZ5gELMKBPQpBRkDAy9RoYStLMpC8pkVWEBwvB5LF",
  "key17": "WqbtaRzG8hrMbxKHfurfebLjLfsXYtkMdRwy6xmrkDsPUEik3pyuFW9QrHYX1LAK2Sv1TPh2N4f1gTumEqMc3P9",
  "key18": "2XFo6y9hJmbVEKNo5frTjD2y8WJf5EwbEfNhHe97eccnBbjKo5V2s52Lup4QAx3vhU3eFSABxav4yipvAUqNyWSM",
  "key19": "4Nx8RkQewevoJf2DfH8yZJJwXSC84CiDZ7UQ6CrTZLQ6aMZvNEfph9jKSi7JY9ijALgzzV2wXqHn4APqW3naMibu",
  "key20": "WgWrE9nnanhDHBxJT8F3HxXsZguJ6tbYWBmpd5RcspvR6wRyjmRSSH3rNU6VG6u2eKEiLQKaETvbRXMREME2iCd",
  "key21": "323MCpDsvZjcG1qnzyzd7UhL72PGLmtPU6hysAqFrU1zkJNNW5qEpBS67ce3XYp2GKHXyZofpYM67EmtH3R2TWEs",
  "key22": "2VGRXZXAwnu9mcDxRXUPxpp8avG4BUT3p8nPUAuZqgc7tMgib5opJ55rRdpVu7DrdDaaQENChbAMNPR83fX9zMMg",
  "key23": "5Tk7KV9M6vTb7LReWXN8wia42aurKuEwixmvJCUbbnSwEvNTxCJkb4VrjB6h7HdU7ryKxZke1CrAf2c4RFdYaguj",
  "key24": "3Xa2vpN4TPyVeR1s7HfYjfmMWNMJGtc3QuVCDrcnon7ekSqAvQrHeKWCvwPLghxsQbRV7iC2khGzkzktazRreDL6"
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

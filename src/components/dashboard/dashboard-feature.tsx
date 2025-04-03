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
    "47Xa2wF2UP9VFe6f15brPymhoshkFfZP3bSP4Q6CLVkVQ2Td2iMMv45nHKx2MthVQht15u3s3FxDfZHV4YxLKXJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yf9tocm815rFG5mcwi7tMKTpgdDSfWfLJUnXvj5bAfkiK59zmpnuCKFbftKFBw8NgxR15UN1oVrWnv1k9mMdQdB",
  "key1": "4tgHMfL9xvk97tVUisRcD2rC9djzAuvUqxeqEwQTJs1ANLRn6SGZtxUJGyutkDpULX6gChFs8wBwZsuwZYa4wyma",
  "key2": "4QKHuiF2svp3JvbrguVKHMEZAEZL9qeddF1pD9KSc9E2sypF6dvebQUwhzVzEuUvxAg35QKg4etq7pU7T3BFdLEV",
  "key3": "4CGRP5cpTuBn48thTdCFNgMAtkf85FnuWUD5cDzmZKtA3TvqonLB1M8kBs3pKucAVfWqCbfyEgApPJVVZZAxnxU6",
  "key4": "3AjpY2CoDKXHYfEsyjLRgJG3Xjp19WMixPFuDELgNT45TAoJdA2dQqArHseiB8jwEhxVj5dq7AA4DtvUg6uPkapG",
  "key5": "5W1E7gtnYjeWFkTvart8gWhLj5NLQVN1YnYUWCSn45bjf2RvxJVa4iiaLAbed2BbKqvahgwEWq4DF5mLvvVhrhCR",
  "key6": "5iwzC9ru5nwxnRBQa241giq3v7KnfBKyrrLoq6Zd6vWXhHLSa3tQnkYoX3kQ1ztcBYAApb7bvmPn2yR9xnceLmqe",
  "key7": "4zXqo4HGTrBq6uDkT6wNE9v1Bpb46hF9s4e4w89geaumWYBwTonF54oZcPzUjG3AcoA6nU7zP4g5nyt5CXEw9az1",
  "key8": "1J4Ft8LXF2CSEKNPZeCKzE3HJSPimGrxAP9H47ivAHjD4SciL3b6eobR95NNkzTnPiGbDuKJsEadHTJsvLV6wXg",
  "key9": "49iayMF4xR2spt1SegVrGLbdvNYPUBaF7CkKwJBHGKQNXoyP35pxwEYjaF5prB8UJ5DvfQcJBJiME3Wr3YnAf4F1",
  "key10": "2HXLqodgL3uTZ7aN2qrkzqieZDibZS9kVBjMi4zViRnFgCzg6zSU4MVkGTmpKsiLsUkLPdRHN4inQrWBjeT84HMk",
  "key11": "4c5emX4VGL6GUeqj4T1xjaY8Z8KLF1W2qXoYyYbxQkx8d52qWQ6kgpNPvxx5Va5ppEt2NoUQDh9MNGcgKo2uEW6Y",
  "key12": "32G66v4QpNhjexU6tq3jCLYthQJ6rbKZdYQtFRSdjZZze5ApoWbXR2CcyCPkmw472ct4h5MyvnmdqULudhGBpZpf",
  "key13": "4qzZieW61aZAvUDsTsudKQNEpRdLajy3rue5noqCHCYp2UisfbnHfKxZEv6MPbt8fL3n8PbbaXwFUEMPW3YLvxkq",
  "key14": "gyPPPaNuZuf1waT4Z4BcifiFXxZc9sKKa3ebyjbArfgLDLKBEg8e172bnRD3ZVZA7btLZBwXKk9sTsnJSn9o318",
  "key15": "48YxQyF6EqQVjAQTfeGhdAERxWxcxLqgZdfcTt7ipdPJLCSgtv6Gvw3YjWGeVFuDVHdx3iMAuqZtso14ccKV5rAp",
  "key16": "qinAF5ynTrGT73rLJgHRbvLHL7NCxWTsFTJuTeJCZVN6GXJme6Lk8t6KfHNfbZvHLa2jFCua7BksYF1eN3LCPob",
  "key17": "5t9hACdeVEURCuCrsgdDDKuz4cGQ2784fZTom1o1sJQBfKdoc2JfKqQJ3ppAQvZLhzVp8PgYHCRYWoQaRn6gGTbV",
  "key18": "2h1AnBuLiiKmJAYFDGQmUHRaS6qbsJBUPjvbPgq7y3utdyBdeofpa6scNHXhNk3EDyGkF9Kx4e8n4WfWeoZnyYN8",
  "key19": "6WsSkGjKiQzSyXe8tL1mPAM8Xu2fbGyr34koxLSLvrjFDoCejnE14NBmEp9aujPwhE7wQkDUN51XbkMZ5gSesFU",
  "key20": "44Vt4o91cm9x3LY4E5ud7NnPBiUGbiieCFxo2WgVmUcv3kPjcYXxniCY68ANLr7PxKMfXt6L3ZJ45dLbQyotqNjQ",
  "key21": "2B4JkamTSCcgQg8tphjp3XrmeeYaShWMHT6bRua5dqKCxq3893K6pSPW6jVPbk3KxkWhzUdYnggFY3g94iePh9Js",
  "key22": "PNv8nMruzy5HsEG6SFgGeasDAeAwnaH8Kw8iX38gtdf39xZg7wDBaSYSuowdVjY5E6Aje7usb9ao5oj7W3Fxfgz",
  "key23": "31NhXyN71PubwSTCqkFjTCTDT7Upf9yxqCUwtTHxVYQEXmjGx9MM2pvQz7aL2ci5XvLFPasceE7kYTdnWZrm6EVX",
  "key24": "3JReHdDrmjSMGxvsFUCUue5e1R349WxgdJtGsW6mUsdfkXUFwadhM8wVKu5G8ycbbcKrtC1muWPGP5rmfUJbwdqY",
  "key25": "4m8r7KbiEKFSqkz7kWaeHqyDNVFYNJ2Kw9b2g4KdpSZ5VFpNc5yhi5z5LZj1WH3EzfdyZGTAoc11NM3B4eEzRSsn",
  "key26": "3rVRG4mBDHcKAXvUYW2V3JzSXQZgMT7fd6kn4xczxWvcrQ5bK4spkb9aVUfx56fKeZmmRvnURZUMwyjVNxPc8PFN",
  "key27": "36wzm24j5BBu5j2hUVDTy964AJeGSTEHV1VBv4LY4AkyNCNypH6H1mxXti1UUMdA2pvyr1m6aNEWXcNcTAsHXNqF",
  "key28": "2uFMGLFZear4QccxxgwYcrrGGoiW6LwCmm5Bu4ZJw5g57Tqcd8cNVzYZbFh9pMfp1SgpPHQGcuDqdLK67aNfdoyP",
  "key29": "2tGAqtnhEWWnbVzCUpXJzA1ABBBmvZGNJvmCeHV3nc92rpWUapPoLaQXXgifzY8ZWHPqavVS1pQZCSPx1b9gXRSr"
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

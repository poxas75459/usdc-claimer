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
    "3HKxQ8weQkE5G2XnAuRXMLQTCRPuE3GLJ4UMGUV4VeSdAyeSxHaaPfKsP9oC5vP7Minu5jYKThzgL7JFugdqRwzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VRKpVQyRJE2ctEYdBGQfiKRXANxYZgewwVQm2Emc1FzTsbmTnBxmLAeZC3457SJYdF1sFLCKvB16b4BqnMKiTvZ",
  "key1": "Krf4yPMVWZc8FW7i94h9GXHAiQDscoCTBsG8oitAFotGXFndP5yD7dd75gHDnrNZjDVDYotJRqdLSDq15VXMZoR",
  "key2": "5hRzzxEhYKr6zQDHnNn7RA7CaTtMH4JvjU6qSALRU2ixAriFgMteYVbnKi27cDC83iX7awpVq4P5gTnqsZ6sBEbR",
  "key3": "4D7K5a1r9GtdyzousTwT7RRkJMYZUhBkDYjxpX79De4VYSLjUvS5KFM9PdbqVvyEC8WJVPEbyBKDsQTeTQkgWNeR",
  "key4": "5hTdRsU6i48Kw8T8GcXNJ3AmakrAH92p9iEirhxeE74L5afmP3YQXkgf6bHCXCkySF2muD519yXajaySfELvNv5n",
  "key5": "64YVHVcpJ4ZvzffaPMGQCGwciYH575vf1D7iGsBz5ejw95efpNQM5poEANRf2wafZPA6D7oLTMHaYeDvdDMFC1bz",
  "key6": "4KCXQV9PnizZpGJdPjXyk8kAT81R78FgN79iVivsWUBbqXcC1avYZGxdX2Ur8rU3zE45xYbbSah3zH6TFbeVVzes",
  "key7": "44mySVN7G7vvcbWWtBJXa2SAH34i1L5QYz4SmV17AXcKiEeKP4FASzgGrh9ZqePnkoHwTw3o3Apv3PJwA5KXsWMY",
  "key8": "GdXoKsdsvUpdNWmPy4i7Lno7CTjqd6F7keScC48kKV4GaVBvkmG3P8jJKKrjEUqtGPEF5RzDdgdk4cp3RCGyk5J",
  "key9": "2C2ofqY1HsV6g32fMXUd3aLjrLEcnWb41WHRTE2rYzgh13VxzdbTpQWNjjtHjmy2UmdvARKbAA1FXktX2i4vGbNh",
  "key10": "2uSmfrdtwh4zu17dCxLWNvg7VdwhRTjP3dc8nAgXwJ7krqSzffxFFubpRfaA3xgBWk1JdqsLk8htwJXx2gxNCMkb",
  "key11": "ppT2tyLceVMcgUSof4D2Qud1Kzr7Xu3nQE6kngSM5ScexiztHnzm5c3QfBU16B59LBoNJD7DvnALVdXpaKHzMdM",
  "key12": "58YcmEkGQKy6YzkmmjXKzdWrVZD2dywoAo71wRj9nxrxJoCZ3ASXry5krS2Qcx179xSHLv1LqSmwbnVHSxQNhB84",
  "key13": "82fSgPaiLkYb1HjgvWpJozkfeSpi6GZbNbhFwoq8QV8ALTMzi4bT4NsuDiDdgBsC5EAwYENRUh9GSGjZdvanrpN",
  "key14": "3SRmPR9ANeDki7tJXHmnFaBmya63E1qkyQun9baCFC7uaTpNLPYEJ4pbTn4eiwUyrLqZNq9GfxA5Zi9rG2ZMydkH",
  "key15": "2JJmi692KmRHyRSez8JmJuB9oN7NrQEsSHc6GKwXHf4qtHAzok22rjdiZUdPJEmGdUd2t6WVBHtBJMEMwqnQkAxf",
  "key16": "3TH8fYgvfuUJySuSohx6GzAqZtFESwKSaog6iDFNX2ooytHC81M1vTF4PnJuWvQk1qfPwxMEZEMx1Z8unZw8ojgg",
  "key17": "a36cCxBWbberhiRPoTS5sQJtPpA3ckVfKff3nUz2ba2GXXjUxBqCEC4AtTfzmjVAJLfjqjSBdeSNtVzMj4C6JwP",
  "key18": "5X179mzXkm2k2Ga6HEqYrScJ6oa36LvuseaKisLomyisSrM7LPXSvdfghdTqFLjfuT5syKifpsbpp1jHqE7iTbpW",
  "key19": "4zj5ggg6ytFT6NPoHjTUcDTKQ81Ze2m1VzGwQZcmv3wzrBjKb1Ut8WMcg7vJVjX1ef4eq6sxteVvmbLTNUZJR2hL",
  "key20": "2C5ERGGFUQV1BGoghVtZZDWVouwi2pWSEEPFrzuL2qWhqd1ZTioj6fz9rCy7KGsXmK1vLUmv5kmRmWqCusHGsDSR",
  "key21": "4Z5ZjXHJb39gHttjkDhVFHpJQ9cwcGJfLhESJ3WmC63aYtTPgHjNZZmQ4KZqSAgYMTrGMST82BqceUcr7Y8JX9Z4",
  "key22": "5sPWJ1MWXGwuevKgDhA1XvK7YRbucE8fGvHgaK4UxYqNNKD7fmgKuhYJeqLtyyRZkfGwd7kPYHyn3JPjU9zb6NyN",
  "key23": "2iS4Wo81n3tWnhK45nSEVhbm7gm8w2TpG5165YXqyC9ba5xwCYFZ8cya5J8caM5vBzLoztduxzxmztLE8Rn6LWhv",
  "key24": "3fQX9to2FqFnFZTYuy1yDnyuUYiSN9acvYBJzcJnnSuvc2x1Rr2we5F5PV57jj3NqnmL8b87eEkTTpAunictN3ci",
  "key25": "3WcXp6Ek61i2mXEsRRXk4shMfUfnTAmSpzy4UPQGxKvDzrtUSahgPa1JyYAkqcDcQZNxSnSsZaR8cqgj8xvpgPV6",
  "key26": "r8Fk9ZdoJ4Ts1UG8nYF7i7fATqPeBS7wyUWzQVmoZG2xTqD5cwjeJtyp7EKGEGcWUA6ot3vwoAx2XNWZYyP5THb",
  "key27": "HGH8Xta1BTkgfLVQFpeefmVpjrn45E88u2HhDuRRgJ4V4bEvChEk6zFrU9LxDfjNzaKiJRbY25WXcriJwJD2CU6",
  "key28": "67BB11FBmWxtFM5y1B52WLu9XYEHMBw2ep1DeuCrrGhAgkc9eSwzbtphwhuUUNzrfSJ4i5N6vZkg6bgA3wz191B5",
  "key29": "4NupSdE4zojgMVdf9iXkR5tB5ZJJuzXzCaF7xWDKyMFNuDGCTSGZYX5dqetmsfbhjKMkZWCcX7LQBxyGqyBK8bmw",
  "key30": "2Aw2KeDHHqBdLia6bcnTMnmm2d6J3ivV3FNcd8N2u7NWB4H2SyfXKZ8RohWvwfruJqUCLaQRVt72sFGU2v5x2kTz",
  "key31": "5Ws9HxwCPdAuCqhAfLqX3W62LdZLAN34Qfs9NEhJ75bpntbVHjKm97u7W8S1L69HuMCoN484r33cqhztLPxCfdLh",
  "key32": "4zA9hnEtKFhdBdm6eUTc1iV2oVqS13RUtBW3yFdvKyndsdLwTytCHAiSK7dW8zQEKmjiMHWM5LR6zebW3wRwC9Zb",
  "key33": "5VAZzWMvtfy6FhZq9Sqy1mfTmWRUPYv37hxaDhTXxxmh1sQgK3wCUPsJu4WM4zV1L4sxDSMGuooe2rUanv5jyrHS",
  "key34": "WHeTLQXF1WCAAfRDSBZiTwj9TuyG1HySXRdJhssKoiP3ExHYNEnhBBDYvrQZLVB1E3jK9zLVEBthEJtiH6QKFaq"
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

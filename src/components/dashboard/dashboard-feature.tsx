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
    "2rKBKXtPaPpGgz8PnCC1yqe9DuDMeZsnPyoxJ9eRzgzMdvxgGdZGjaagQUDc4k1McdQ1JyAA4rnDJHLCkkMAcRff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fZrFotJVU2CEvXCc1ig7zatNYmtMckXuKqkxheNkaX8o2VHY2z6YjLgxBzVeqpW4J4tyZLnZ6aLMUdA9xzDxQv",
  "key1": "5gYqyNd3tjvSedPouS8JAf9DAQ6vgKBAHqPv8P9kMvze4KWZ3rB4gEfyy55hRtTW2DhraNzAVYofiRcguBF8MCwi",
  "key2": "4BuzUYj3nR28YmGLfwue3kVt8Vmi7gApgNNTAKnt3HtHCkznSzH38iwHULxobz8iNJrk8P1V2svqQdih4mB7nujQ",
  "key3": "4Z4VCMiTua4BRMYy68oNCzqUt9DAzH7QuQG9R2mk7mkJNNMpyKij437E7dHSkCKYwfyB2rphcW7oUAJA5xz4SDC1",
  "key4": "5u3ZtgPHn2P5oqndnqiVG9FjjHZQtJaXMUwgd53dtPz5u2y8fCYswvvasoJCMddTQeuA2Q9hrdk9noWP5ujxWY6M",
  "key5": "3S8Y9D4RjLfKd8AN8ETxjLYE8yMt1jp8ntX4fnjDtF4j2m6M3eu8YwnFcE1WURAdaHZu6nB5WS6ZFh4ug5BjyjV5",
  "key6": "3eCBF9MBaMd1kmhvGHSTX1jp1YFgmkQiD13EQDPitTxELABfhYohFq2GwyckK7n95ZrpSWuTaoDaBa6drRmAMyb7",
  "key7": "5ouThcyFKCnC1EGk2SfEjwXHaWqHc9EEM9tSUZFERnakNZhxGUnppsFRZAx9B8s2vQoHgiZXbbN9aSmRxX8R3ht5",
  "key8": "4RmgtZRxSLRwH5kMerVn8J86YNAe7mtVUWGGJTGZRRGfFegc2P19irWwaR7UrSh8ypPdNjHextGmACc6MRmRwjPc",
  "key9": "2eNFqDiM5y6BMQJdLwYwL7fDiNkutjyBNewVp5KKtmEcvhagao8M6iGTs6cvCPJZNQYoXUcEFG3f2LRVRAM84h6Z",
  "key10": "7mzubnjwAD21yJTfTQviGXcoW2xifFV5uQXzdPLYfE62z4L4SNviL1is8qbSx4SB2JbDFtWsHPp9P17iskHav25",
  "key11": "2phQPLW9NsKuoad4QpEJFm3YGrGqCPxHg1oQgQf9nQg4HbeA6i2LbWbG95wLteeDoSndVqHaphD167njBEpGcnLS",
  "key12": "2xTiinzMLwb7g86L1Hb4eVYsEdHboNmrn2pRW6ktuzJpuwm56AKFLVuRFGnCMwpvPJcW1Vr4RePjcAjLuBvSRn9W",
  "key13": "1T77XVeKv393HNzPfVqYC1eEsBnppFrtyw5QPqswB8w8W1fqETgzTHZkUuNhfNB3DhW47peYfJSgfUbLnf9bkcr",
  "key14": "2sXapGD5BY2Ho4q2AitMZ1X2SDwH19uegmAUoVa2tCDy2G8xe4mNeaUb6GWL9QoEnTEPE9WYt6Kr7NzAnDwTVTaQ",
  "key15": "3wtsRSdQEddsFKoxmTWEvjP1LzSycwbAqZt2KDkCpvkZ87pMF8PzF8t7Qntx3NQzV8hn38cXQm9uCEoL3sX2VaUJ",
  "key16": "4bzmrZagroF8ryzNEu85E5cPKmKLQH8Tz3EetxrgFNxKv6nBL8123MGKUqvbQTeNsSRybDfcyvzVYFDmUxhMuDUK",
  "key17": "61eYpZopc42gFpjAgJepNLLsDQ3fbb6B4u5WtXR9NYv8zviazQZseCJKqX4bCwVZYGCea3EUiMyqR3JYSSJjD5Vx",
  "key18": "2sHPUB9P86aFcc3qCemcq9ahkBqznVpg36VQs9hdPAwVrkxLdNRfzieJCVW4R7oCzyxx9KXSwh4BwsmzAee2YH3J",
  "key19": "4dWUFzCNZRvSppjKANms44SG5QbZqm51nxv1UX5ph9VqEWN1RzYpZz2fnmAVirWwtXWorjv9R7YMSRnp4C9y3KoN",
  "key20": "bKU7ie3gbRXXzsWSgDpHjCPJBMmn3ai7cYDio3ekZCX3oe38ZcZVeuxQ13qRdha5LUg8vP74mXFmjoCxfGJ51fk",
  "key21": "4zYVrHo65EfV8WdeYqU5GsEv6zK1xKGrdVJXq9jcj3eRBjJm88Suu9tJRdPbVxf6EKZAjE2nhnzi3u9cDLLAd4B8",
  "key22": "2qxk87QVdksRvbajavegAj2ieQpcGT4YdkChrZuKtbbYGUrMdkhFTKUsnXMtA9HDgKJVX8eqmj4yDq6F9LcXyen9",
  "key23": "4iUXySVCCVihKZ7mkmsx5iFY5WGuyXLnSJKJ5ZjwJ27ZoHoetzPJX2HXYhv95YUe2XbXcD2HQDxn58FnzkbChNJ3",
  "key24": "5iCY39nBkifiWyFw4zzR8UjnwoU9rpENLFuAGBTNKgPEe61ChRVSADPEtH4HHNNTFnQUWcBUfRcxTFjzQSAMjCCQ",
  "key25": "5PCwmty9Juz3UH7w4zgsG52mHQPn8mBKVGp9cyd8VNq3qzWHrBcntHvTScgPpmoFXRVKLqUcWxH3LfGnkHYRCRr2",
  "key26": "2SHG8NCdG6vXzzHfEcyjjL9vFodPVmVYayd7q44zbXp7CmHLwBvn6Dtp1xstsJg4qcnNTdFdWNBTZYKy1nj5Vz29",
  "key27": "3jqDm5ZKER1tNcR414FaM5Gf7UzkcZyatUksBbTdVH3bEVta9CtP8csPtzhsUqAUgz9NAMETcDi7yQa7U79KVh43",
  "key28": "RLXs9hQvorEFxKYS8Kf3eBoE2FaeN1FUWZ2boZCDYiKLNdkVUEu62pMJwvoYWkNCuKLgSLy8jMGokLoj3NHfhxH",
  "key29": "dXWJNGL42xuyi9vAYWxBiRJaH9ugYwyf2KygKqaBpUaPxfTVssSe7i3KiPdvMEbBhPKQv7RPdyhFjSP1hW6V9zv",
  "key30": "3LgmTyggLS6QTRqBd4ecxes8VZCePtW3ZipibeKQ3UP8i5xcVnZSVtppztgJwRcoEHR8seu4Cyeq8vL6pNEBc4XS",
  "key31": "5SjNPeSdzpsEs9yw1Q7bzF218CxRvzgsCCL6WFg5axJ1b9S9WZWQHJAdajTiXj37m9MdPKvZMBeYBfs2omGd3ApW",
  "key32": "2SMFaaf2z6UTXEQfhrMPK1z9ehR4LpUJJ6qzJmgzRd5MmAfpMfFnEea72w35W3RVuCdeF6K6svjNgFSpCqNvCwRv",
  "key33": "2w4SsUZdQLqbbjwUJW2HXc6Ni38NtaevftWhqQ5xuM1upCKELL16mKWtUzRHTppct8js5HvzqPMamo9xMNtCvUvK",
  "key34": "4pD96ejSCQEpAC5VEJCa4VgezDRsidm63ovAXJfqMuZVUtri48dgMys3bs3wafPMHFm1K7Bzsejtr4HcPdQzEGz8",
  "key35": "52nsvp1v9FH71d3c1U2VNf1VUucFNHZJA41jhwBxaYTXhMB4xUtza8JBGqBaZEtS6PH6sz8We6tfSLypRaduVKvk",
  "key36": "2UhcwbW8ZNeEYw7y5aRUDMrvHEdjZ85n8MWvVhCX2GbKmtKvcFXWmT7yR6uTNCPffMu5RnWtTwbbDJ2bzMSEswyR",
  "key37": "2ZC7jNZVDf7DzVyWNTUZ2uLfbhXbYuDd7zhVmQPUNmtXu137UrzcfqYLkgvv2ccUtzXUouNsVDjJAFs4rUW1J4XU",
  "key38": "ixLKRrwqcgkuXfD5nF7gE6Cpf33UxqT4AfxSTPNRBPzNmXPNmTuhPd5yoSY5bVbGzPZfw5TtFTCKPKA5ZwkbREy",
  "key39": "469jZ9H17DWkd58f86fSncFeqjLjQ1BvFKSs5QYt7BMgKknqdUw8CDu2DWUKLG524th3h1TGN9PohJNfG9C9sfqT",
  "key40": "5pkDXR4PaFnJXKTJ69Ho8KC7FrdxSDAr5nTxmBDb7i2LVKGMGFk9dwgKzXrcBPStFxmGFkfzUW8ZfnvmAPJnKuYd",
  "key41": "3THfsecU35BpNSk8YeagYjtGtSg7FAhFnPKB4X9yTAErE6uBXTyp4VesHGwhL5GXHvtgBkj2jU2F7EsBBfwZp7WZ",
  "key42": "2jYUZTacWHdV1Q7hLeNnCM6PjCVaF4Jx9ftaSp8gAG55n1zo9wFRhzYBAtfi4MwUdv8hJfaUDPoid1KgcVm3JwrX",
  "key43": "2gNdVuFyuWrZAw5bbbn8Tio82NvBzRwCGjuV3apYCi1KmP5hTbXvApPmgNcgkxnaLgfgLKkWzR3J4mcgGrF5os7r",
  "key44": "5gfz4yd6UrAYbhUuhfPbKufp1wp2kZfq55eSDDnFPng3PWK6dNTXMzENPXyd4PUmgorDdgoacMnhyN1L9Q33zk3u",
  "key45": "3m2HBahoYuUKGv2tqNNxYLRyNf2u4oNQSuuWY14uqvVCamYfp5BShY1N4us5B6BMw28GBZRg52HXFc9nXP1bjFuY"
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

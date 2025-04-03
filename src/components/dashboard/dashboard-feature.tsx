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
    "3fQFDEvQJk7zNoEnGpaM77iRdPaMDqTCUSaVmygQAZkEXoN9bNfBoETKGtF4W1FEXsZbpy223R4Q4UowVHeZqkkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JsfnRsaKqABrpngp8o2nHQnBqc1qD5Eh8yHYmgvvyvEGBULSFBdUyRz7qqx5pErzkc1VQtEkLo31Vjoy9XcRQ4z",
  "key1": "2Sjyvsqqu4MWcJWyuSPrYc1DdvTAgKpx2Y2NuGzMsd7UPVtSZb6WHYLhzJWEP95i29x2fz4DU3nGaSx7ZXXVCbrW",
  "key2": "2iLyyz13hwXB44RQjjrB18oVLiBMSqoVhKYpxHABRPKAQhyRB89ispKry66LuEZfMcYPCgmow8D6WQ5mMkaEd1EW",
  "key3": "65MQs8WCeUpw2SPnRo5MFnSC2tvrfmJ5SHqZ2N7rTRSz72xoDt1zSJWCkgyMzW5RFLgg6QRZ9owNymN9JGhLk8SV",
  "key4": "4xvFDmtJDaCT7V29sScPW1iuT6erTajP2CZWxb6zYn2mEAMViAzKhg91iuCp6mWJJnSUkGJy7QCA2Nq8TR7FpEg4",
  "key5": "3HUdwNx9pv3bSDxBYRur6itCgJ1MPyozquoR6MNK5Vh2inojfvgbzEhfNjDZdFn4nmYmNz9K9aeHMPtjdYqemEqT",
  "key6": "5sii7UuoSr6Jd5bMF7cDny1rgeTYGXPnRo9ZVRFUqZ2iaWRqZsc36oxp4beobMbkbmLXDsK6wwbhrKzPLHAFLDhc",
  "key7": "4yNNJF8vrT18wQMmJNnR8adND2JkKeXDwsCKVeKzUZDVBHWN2orBJL5Z3wbCYsrGMJ791cnZTVHKMuRwb2K2c88J",
  "key8": "3ioXKBjAduxvcC5d1HhpokC21HUaZhLgLMpypU1Xd58hSWHkXnaboax8X8TJyqAYvkS18iRFtMMMGE7K47rrdZdw",
  "key9": "9TufAcGZ2pnSeL1NMcGo6cUMz3cbNTfDRAbn7McJqkfDGTN7AxTYSAK9Fbc8Ko5u31T7PqBxwxr6FSPj5pUN4CH",
  "key10": "Us3HA4vEwPJUv3NkYr8j8NoJcirWh5CK4qJcAwBQ4jh9a7e8wMkRugcSqLAdkSEhVzFbCEqZWTe5PNHXepioAoi",
  "key11": "5yEKcBAuXSKznpyXicTYENTMiR4bp9txHMeT9dKz7daTxsvTnpyM1vowtQqQ5TnJmwW8f1kiz1wN2TsW1s5rw7Cm",
  "key12": "udXcqXZUjSQdxNVgfRv4aqjsCmM9GxeTH6mZUMyTfQbVxGqhMcAeSHDWAsHg6YNNPCun3tSTLNgU2vL1xLSFc3h",
  "key13": "hE7ByqcNzheCE51w2uy5erXhpw1PiYmzDHwmoanWCW8Gadf19MwN6t4ZBZHYkyYbrdCY9rx4tTVnWAQC7Vuas4h",
  "key14": "5gdLg9QTEYarjogryT6A8Ldv3Emmp62ZKDv5LCkvEjmiujMBnXr2rJw6sNHiwmJeCeHUCS1CAYmf8ARqbouNAjAh",
  "key15": "64kRqgUPYfe83SYPj2YtUrMECVjD7MgyDMxtehb2b99JCxTkEYc4L6WQphbkwTzqH5oPauiU82soJhRQce1pwnqi",
  "key16": "784J2dJGSJPrfEbgsWCA1iFsyPQadULLDQgYDU4T82ix5pTxxhheBBf8jmgziz76NGuPBuM9Ba8PHc1b7FHfdP1",
  "key17": "4bwUMUDy5BwC5A5x2gyxyzGNtjts2prphzHsTp4FW4pc8C7AH2xA2q6au3X89Uherw2reNTsPp27BQ7S6DFiXpPh",
  "key18": "2xWdWLV7Bf74zEv4Xs2PWZcHcAkTN8fwoxUBQz4Tfocc3GyS3KfjJ1GGV7GksfcYaZ9Nt2WLUNuNgmNGN4Zeb5MT",
  "key19": "RLTNvy3tr2R8f6xUeZgqpSTM2hgDNhyrBJ8jFoBW5K8wKdahSYYYWCuq6FTZ5yUtHW8avXgqctpwuuWjTwvcsEP",
  "key20": "W7qqJy7BCjrHafVJwtWoPEMUZ5nsWo3cFyXi9LM34wkVbyoCafBLBwnRTrSyAULa1bgWxNS1geZREE9wx2h1e5v",
  "key21": "3s7YzhK2K7TMPdZcmdLhmNtp31UnTc3JEEphRbjFKYvFy2Bu2fuYh8ZbWs4YfVihjViZcvzFnsH6VPBvYvVQdmCk",
  "key22": "5DnDkaRpuKu19t4HhPnC5KHGNpe9wNM9PEA9XnuT7tUmqteH9VdMKazFFD5676pFwKrT4mNCHyUHRuJqarofAvdq",
  "key23": "4EyUczQPgZ5W9cY2nwBtWyZaJsGjvD8vCuvLbh5fJFmv6ngD9ewiVHG1sxAQsxMUah1o77SWFQiezQpQXBYSUYTV",
  "key24": "5L1KYATYNxHqbiG3TdUccFJ4pxXHd7BMVKxgmgaE7y5cVHUEEjywXshscsGKvH1uTvhVhfZvhKGEboT3B62WXnhS"
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

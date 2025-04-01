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
    "MeoSV95H5LFsNvDvmicAcQ95bioVyN6sbgY3S7ivujCVmG6KLSPhLtUe21phue8tm5suZLLHQcFmyhFSSAeGvWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfC7A5PznMCJgc1iYuwukYn7gAByLmN7Z1RkFMP2ZeRcQpDaBxSkf3kweY3dgPrRVyrbxEeHJncKiu6NaQSj2pZ",
  "key1": "48EqimFLC3ZkoNkDCKdD9VoAjQFdMtcxjMnDrpk3Mds4Hj2xxHoMesqGp5b918eLwSUj6Vq6eQDohq3swQDDVGwu",
  "key2": "5yNvwTQX7Dx9BR1ckG74GRPsr8U9yzwjda9S4ur8x6CrmY5vPdJtztBFZCKdKGLV3xyEqD1MRncc3TzoLRqFoh5f",
  "key3": "yPvgcHh1AySnnL8ww8R3ZtQFXxGQqeHPDoQf3ed8qkHUKBvTy7KunAjHfBgVmUThtwosWjzLXqRziKfqeqvppe3",
  "key4": "3E2haGMn6XR6d7pDZjxB7XputDZoGoZKnxyEmF9gDPneLef9naxVHEGcrcVJHNFook4GF8uwb5kBmxzD7WX59tf",
  "key5": "431qoLqhzF9jZoDwyGDVuASVmUDEzeD84PkFeqwR2rDCjKrVbEToB9XyoQnhhKAi23BEtzeEbhgy6nifQCAFk5ZH",
  "key6": "5MnxwR89ps5kqMuueSzZMBVKMHoiyPcS3vTHAT28JTSa2KyWVVMccFzHcqFshgKZek5xMTWtqHX31P8VnnCCpg1w",
  "key7": "3WniwzXrCRdVqrCK4vTv6DZjVuXjWmHAHUNXgZqXWKwysHydvfqwsoS38VhB4UFJUKs5T9Fyx32CA4ZVLZBaTK55",
  "key8": "5MZ4HBFSJEQS7GS2Wdc2P4mCUUt5Vgrak22m5AEhtxUS97wYrC25TJ2qwmKPgBxrrWzEht1NsXY2MHbbiixT65Kg",
  "key9": "3x4Aptb1Hw1TyNq6zRZwUqeieSea6vZVh4rUHowDBATzyNBYCiMgJRmJmkMixzTAXS8GnMTTu3JdEe5k1ascxmAL",
  "key10": "2ZXXyZYd5yXZmtNaGTGEAXxKbc9cfJH9vrfRHZgQ5uDwvKtCqfgx91ifZ42maVn5rjF4Ddhr4siRQXZcYCcACCCo",
  "key11": "3kbXMAfiaQPqShCPgXsFye7WZ9f5zJLFoTPehfLJvHxHk51T6GDUW7fouKM4yfdB8r8gHxWCgMHWGodLPGBFWFYR",
  "key12": "5u9eX1ooy37PU2RWtWWrDwL8fBHvM8WCcND792evEnniMp9jp9GbdMVqe4giGe2wvgGBCdF6whN9aDaChza6iz1y",
  "key13": "59ssaXwCXtktXQPMsVNCrfk9NGzuZN6XJG7ZmJeZ8cxKQ3PNZ8px1o2moj9SpWeoFCfwPpeAHdDaLEAuAjK8d9Ju",
  "key14": "2WVH4TDnoas1vSJx4A5TCmmGyF6zg7Cdm54okeCBKi68h4XRBEYr8n9q9PiYqL4rJHxp65P6Vfk99j4LeZrVkcaY",
  "key15": "59npxE6LWYQ4wY3AghFGYH1xdZwy3X9AkfCPBXQoshSCdJkRcDKjFX1KumBRxBx67QXtcSd6WUyqRw2wwjxTsZDR",
  "key16": "66QwDENkcm6k9pC7jEykadShRZ8rsXA2gYyTvedYoYZ7KcHhFDtvxZU7po9offrxEa4vtcoiqnB5kFWHLPa4yQX4",
  "key17": "5BJznTrREa6S5CqM4pm2J5DEohdNDw88mPVgmwdbhUyAdsLyUNKcbDqcT6dWgJPjTpYyRovrfvd6trEHbJ6H6r1w",
  "key18": "36biw5n7jkjnSae38hSqSczvWjJXBiV8hV5rpXqXegGoYFRi6d13PutEP3Vo8QeAw2CTfwhWo1vntPFY9s857K2u",
  "key19": "5MKA2WDwFRBm3tFotvSWbnuiUCr4YjwF5eoy7tBaZd8VSxX6Y5JRNBitJmkuSkaqiEKBrLPQGZphzCjzi1RUbVvt",
  "key20": "XyGXWjnKuRJU5eGnJSbm5r2xY9kBQtLVUaAhTSWDopazCLKH2iJNjvheB8N7NLiz67mSkXJk2KHC3UTPvwiQkFr",
  "key21": "2VKVhC2EApCX5wbh997DrMbTv8xyqCSCi7QuazTJ4FCKcZ2ecvuNwFzADAEB6UmfDF11vAyzZGvhA3XFoQncMVvb",
  "key22": "1EpEpzFMdgfvzJQwhbTXNy8WsjdmvXrAL1aHsQhavicU7nyK5rCTjTnQoK2CG9VcqhLjJ56cUfCeMe5bk1Wk3LY",
  "key23": "63R7U3fNvS5Qm1awh2MAwosf5cgdtUXX13NsjEZFXdXfJk1xAUEnafx5fEjoPBai1K2xxbwgPJrYY7bHdvcinixW",
  "key24": "5k1GSrt9rydyVdDuq6dBdnDcxXEskHFKqnPMnXB45Ez22awE7VqmvaHAjPpVfo6Ticg1RkAUcL65SzU1SJSn8qGv",
  "key25": "41qdhC444yeowajzUJdgyy2ZrqAvNBxm9WHKdD7jraDurtxZf3TTp91aY3ksGQr39rEQmAXZvWUQtDFoWQZYSPCi",
  "key26": "9xN5tj9pmfBk9t8PSi39EXynJiwivJaxRbBJWt9Wjzp2AJEbax8Abz6BP6NPjvqNWbdjivgZScpYPZxBrSQPGSq"
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

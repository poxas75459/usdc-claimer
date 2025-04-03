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
    "4mMGMHzEqdcMcUADqMc2v7WvYYNiDdFqvSB6Re3DS2ifN4aqPGJuANYTRXbqkYTt8YF7fscYvwCnYjhjtznYoo4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZNXd2zponWCd9MdeoXbMyK5VKcyozEKrrESU6JoHPzR7JU9DjN2nRWvn5Zo4VzT2yACso7T8zgU5wtQKrKVLaG",
  "key1": "5Yd6DAz6yUJaLEHdf1Kkg2hWPn1SY8ojMWGG5sjbqjnKt6wx9U9RrRwZGZmSfuFYmEaFh1kQkAxW7ro6Xn7Qy1ez",
  "key2": "2dWvEoteFdJ2znc7g2JpktVd3RWfK72GXza3PAEBT33v8fGLxVF5rjsfpqqp6PoXxMK2ADKqYbBPN8uNcXNy3UzW",
  "key3": "nusNHKDiEwhGfC9z9on9Fuq286KCBhXhAguuzYKuivEKDnkGhqta3gRF7EZ5zQyVxnxEYbZTp7t91QRF4Q2AfmG",
  "key4": "2rfg42U1LYWQDuHTRFskYd2TWr4UmWYxmekfRgLt5JUp758wTAc4XXUtwftK9bUeEpbQRwPLxKqzY9STNRq9UZpD",
  "key5": "5Q7gqCQvtxRyuXDxe23h7BDNoMNDiJLH8X3KKNkFEULcsXqXRo8a3E7hV2QN5MJR1giH42zaTFJqk7TLjarEoqXw",
  "key6": "2RinWBf1FB8LLvqRCH9fcicjKyLsgoqMkomjwZm2Sj5HiBGXyWXaM8ijsWf7e1gQpb9HqhsVTmczZeTxiPzHHP1j",
  "key7": "4NJ1iXKg9LqWR9vdA8vYXe2JUkiBtMKjo6vMFEqYs21eQC1iQLryS2hiZ1j1ZYg56Lpq7eNWNcUXDDvRzRth8Pkv",
  "key8": "4MzwLVsvx3VVjTDjhsY8fCnDKpS64EGz7BVhjSksoTrRbsegwB47gMciz5Dt3w8rH68UznQXvCAPdf7TwF7sUgSC",
  "key9": "2U4FTcgg6rTKfRQouEg1JBu51ZAtFb9FNygd9dDmF7J3cMF4qfkrYZ2AunkJfTiH3nSugJVi3Sz8SNxTXGHNSZQX",
  "key10": "kPLk2MhxqfFTQLf9EyAygeaTPqAPvPiW27RqasxUefNviEPzWoWBJ5ZWLFcwEfEQoQ4n1TfYBU87HYcofVBUorL",
  "key11": "zWXWrqecVvMaEEiJGhNhZNqQVCXijF47GUomuVj4EiSHYTYeoj5YCRDqz4ytChbbsKFzPYXxY14RVWgAazgppUV",
  "key12": "3Rz1jP2VszTSgExPjtGY7Fm9YEK1zGRp7WEDvt4JjxWLZYRAeekBSQDibuezGbUuCUb1EYJ3dSdYsB26wLm9Kvsr",
  "key13": "5qSPfTe5d1rBUe6wew2ouzBhgxZ13FTgNmS74r39F3pzL4gQpr2DxpJ8NmoXs4ZdDY7TLhSKoMnrStNNoYSDzXJx",
  "key14": "25GbyTptTudoHZhWqvvDqwcgkCACqCFSq1zziyqHxnaNipVM94CtTLxLCRpwRYk2FMANsFb17jJJ5Jvgp9LaKTUf",
  "key15": "4CatUzYgVXDMeWc545Bo4aeThuWdmpdouTKGHVUQtJjDmvFgmP5oKrAM3fmEevNdq7VtW6EoGqpwuhSSuA1LW2bP",
  "key16": "5j6BhYWeLL21HdKMYKAWMMNVZxyUVf9oaJE3GAXiAqtU7UpeV9TpSKfttSdGSMk2MCUzVnmszqshPfTfzZvtFXuE",
  "key17": "57v78R3zqGmFvrrJW63w5JdUnQgvAdP6dTbbx3ya3n982LB6yBhXVeT84srKodjhSwYeyKUSMzvNCzBXz6MkXV5o",
  "key18": "5i7VdR7afwieBkYr4LcanNjpUQe6SnNVnWpNiKHEDtAV9TgrCuyMSWVFmYTAXFPGTNQbH7wcU3eJoes3i5pA1w8Y",
  "key19": "3KWq3Ny9tc14bBP7f41WzaX2Mz6sxxVrtxyXDvqVUoAVUAsFHoDasbGSTB3XaRzawUGstv18SvVwXe71pr22BwVC",
  "key20": "58acLo4k99oC95cyTFpaMvboaKmTxwDfvG5L8N3j3nQQtyiAwZtEFcn8WmSeVR8gAz1yeU5opNZwxFinqc9MCF7p",
  "key21": "4mWEgaaSFPkEuwtpePMdz6jefKaxhUUcCcyfVevbVkmaL2CDCSqEzeVT22xFBdPbjUjG6nCH5Ud1mK6aJcjNuqPo",
  "key22": "46a7vFxe7YtL7knieX1uNkAgGhCW3DXa3SDFWfrJ8smoTNbfomkfPoVxcBvRX6MqPU8sCUv2MYwHWVrfPA3Ccu8b",
  "key23": "2imyhHvbpEDEG6qqQcKNbjQaQJyBiDipAsNypj2j3RG8bNiaACfWwYDUgpsBNZ4QSeTTXnKG2aiZP55wt8KMQfvH",
  "key24": "DNAvV8WCU5haMZZZqDiLR717ZHNZV2YDSRk72789XgDqnEY9TGRXiSsTZYje7pccqpDZuB7jk633WcEiqCqHvKs",
  "key25": "2SSXbj8HvTtuCzYQBPSpGReRZcCADb6X8J4RBXmzjRsKFhb2Fr4vBX8YoRukhQGfQu2GgnAwNXdeADyyt4XCiAp4",
  "key26": "2pmMf6R7oQz235NwCJ4RohszFqc3RxAq4u5PY61a9z5BqgUsiQbAZrDN3aDq98mb3rsX8tG9Hjviz6HbyUfE3Nwc",
  "key27": "2snktcsZdEwCnpNnYPYKcsePrrKaVnuCG7Fgt4QvZr188wxwPw5LixbmYRycombnFujBPx12n7AVqoQ3KS4q29hJ"
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

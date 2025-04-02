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
    "47sYTxS9V4XbTEvrfqmKuSwMCzLVoSKPcLQhZ1B5yANdwmzSyi3dici7nsCsfmJZoY7LqyAUDqN9aP73R2ZjWnYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85kARi9fnuSPsh4HrJM8sZEtYnjobw1fTTuWZoM2y7uxj6m33Pb5V4i4FY7Xogpq9BPiHfvDxWnKmZ8iUeQQmMU",
  "key1": "3xy5bb2RYDE1vP5wJ6Hn9vx6uLwh3aBGe4HQRw47Xn3v5v3a7akMbburqYTymHgXem2457rrmwoA6YC9uj6Rthyi",
  "key2": "2kuw3FsvyFZEn7f6MTuLCe1WHr4fcNmkHNGRRZdhM88wuo7Z6cC9JzihhXekTuuD5Vdv2UzqApJ5GjY31qr23cHp",
  "key3": "5xRd7bCuU5c7sJ2Piy3V1n7sTqrn7VnyD5q7TEJY4U41BRCfG9U4ASDf7rpZCQGDj7j2nqVZiB4aezWbRk9jSBKi",
  "key4": "5vyLqCBCz5AXobaEVeFHexcRrM3ammpzhBYDwXznCet6LKVFFAH5KAAq6arGpB8NTpHXDtRGjnXTPMCeS9SEJCm",
  "key5": "2UjDmxNJtDCFX2K8okttGZSj9ZwYBx5dt8VwE8HuyikHbgMay14YDrH1o9Xwvk47rZ9eyYKY4wNjw5zWV4WFsAf5",
  "key6": "3smhkYVfbm2nXSondFRjcE7KaY53CWKDpSAdLqKvm34TivEjTe7AM13QCoLp6BtARNAtFn7sb3F7vtetFzPRLDLb",
  "key7": "36UjhfoGsABCL8md2P57Kon7qdTYA7AbHsJTbq9vAWiRBRRSndWMAhiVdLRuBYP7NxoYEcN92ipb99wW3ZkN7o6t",
  "key8": "3uBWqDpA6E9tskXZrU5EM7Ya1C2Fxm4ivRGFBezNMre7dHUCQKMNkDF5KDHmTAEsCUoks2zbXaxPHprdf8KFeWbT",
  "key9": "ZAeFRZtKPwgBF9XHWZbdzHqmuTBPdnJ8P8vNdg8A6VrZv5gKMsWgaJFuCj7nXukQCjThXQM1KxhJAMDm4mVi5ZM",
  "key10": "5Rx4GdJcTf2BewgggQNQyHci7LhgsFVvQkiM8yMMTx9TXr6MT6pWmuXdzaSoRVFGwzwEYt9zBVURtvVfCygs22cE",
  "key11": "3ska1kA7SennJaCARHDsYfGoZDsb2pUBxM1TtDDqnow6E7DQNFqAm7gEbiaQYhjrGPndTcGM6R6yjFHjCVWWCggS",
  "key12": "2xgZhrMyTHbPuUHYkBr5zQmvkL4tMpQ7GMZ9jKLr4ToGHTXqgnuXx5oW2azt8SgEP3jDio54gR4uuiuZCttC2QHN",
  "key13": "3wAdxaFm9svXt27KBzGePeuFbiR9iHT97uFps6GHLA1dwcdeTXfoKTEhJUFy3cwc1mPQxLiYXtU8QLKS6cLThjkv",
  "key14": "bb3hiG6sWVVsDy9c61Sv42KzF1cpJkp4fWJPw4wngGnpSG64QvRXtVsm7g5EezHtkgkTayWkejNbBkqGEgnyoxu",
  "key15": "4JPQvsELguJgCSnXYbr85zn5aCnnaf5bCEz68MMm1p6L5TUVjzcUTpEoQ32b19Bf1pHLcJfuT4R6baP93jcDQa2Q",
  "key16": "5TxbKLwfYRrczpfe8rgxMBJY6bC8WDMbq2CSq4Am7uDFTxGBEZt1fRdC9BpJYpf8jfyDgPoZ2yCtjmyxt2VBrGxs",
  "key17": "593cVhvMevNvNskyqi9riV9ay8L3VaHPQ9bHLogFXrdWqxynv4jjW2GLCGiHxHhCyNQgPG8JkEueyC1gYxprqfq1",
  "key18": "2SdUED7u6nN3woiECvZ7iboBFwpebjspUt9seE3pUmdgTvV9jbyPiTRHXQwQRucUa4KLNnAiM7VTMRpakNudJxbK",
  "key19": "6TXWENGtYT5ESRECRPARniUM1YeN12KEoLBW2sFFzuFm5rLKXjjHeXU2Ud36T45MwooFcswZsJ4BghMUs7AhV3F",
  "key20": "2bMp6zb3Kvy9LvpMF3Ni9GvZNSpYZGtoCv69bhH1mqLEYUgCMydP37jt2UniRP1UX8kz2a1jVD87KPnGStvKQSmE",
  "key21": "2JRSGLTjXVpqg99Grzaq2hVYvkeACBWrd6XQFsAmQ5JuJqfe4RzPSj3gYRczps2UpBcdAJrDEXGBk5WDjZ55vWRg",
  "key22": "3d26Rc8uEwNwpfxGNKzvRNaAHgmddFMNn7FSmc2drLaNUqQNrapEbf56Do3qFdZQWfyEmjhCDFf5RqPiKYHswAkZ",
  "key23": "4UFqSQ3qUEuoC3Scx4zrQ3df6A5gdfmoWqVPWwuXiKkUhKjc3AEcHKrtMLuhn1j32e42CJTPGVnEadjGr5Zb88Te",
  "key24": "54ezWBPj2RGaMrrt9RiEHck2cetJJ6zbWiJSgiG67jDq1mMyWccR91zgASath6CYb3EG2bqnCLyNxQvpoPc85fRb",
  "key25": "2h1Fz8gy4MMnh1pVbJywfLosFhrxFMmCPzm1utT6bH7rAxqvQLvhK8FCyzZDkr6RaxMZ3v4RRFomNW5mkHQZJUAS",
  "key26": "3SnGumpnMLFuwq8gtKEoMsbombt94uKzF7wocNpyHYHRM1NRUCxXCvSdsbUQsnGw9v8YGsqRPmQYCfJ5GUEKDPxk",
  "key27": "eHkHp7B52dqPetfaFjTuqasrB6sHTcJmsS2CtGuGrvYX4yzApQkmtFQtZG4zotGwneRYPru6B7BxV1iBrqBxRM5",
  "key28": "2dENAS4gdEf824UdaM7F3rTBNKSoJTGj7kYWqVE6TxPwMErmsoiuvcMDJKzrRGWbUXr1PT13MWQfWffUapYV27aN",
  "key29": "4VN4kF11cXiJ8LUZYs1eKAqKdBKxspp1S4RwbLJd4JamjsZmaAq92B936WbhqGVdFDXmsKzqpvtT8TL84AoJMryD",
  "key30": "RxzCPAYFpxWjoUzz8qGHK6X2Nku7jBGCNd633p7bTc2fXCjrPKyqajvGiFDy8D2KGqXs64wr1gRvtg6FyEWsKm5",
  "key31": "38PdZ71gmT89yyGuLAFVT6RXvzoPUun1BrkmTCwMtTG3H3o3xekCGX1uXfuv4LjcxeeGbZN3n2LuaURCKJE72xqi",
  "key32": "52SYSFew9nYX2YnbzqqgZ4y5GP4xUJkK7cdHkDC1bc1uzmuQskH5PeUphN5BJtBYydhwtjUahAxKK2eKtjc9HP7L",
  "key33": "MPUePqPTCkSbgtcWny655qMT3J5VAktmVDsHXDwWxbnYZxiJTDEf5sXQ5oYvHu7adN3NKVusZ2KJKXe3aRqnHVL"
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

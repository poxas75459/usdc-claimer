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
    "2qQx9wztnM3SbAd2Rd9j3W7DvdvccU8NikChT9sH78zJVWEhPxguau1Qe6GoynCgofstUScyUMrtBVTjVcdvmRAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36hqjXgxYHmmUBfdoFrgU6XGZHK7PBYF1WAF5bUANAHqCEkvuC6z6kuXdNcxDQyjZK7b7fxaZwRxRD8rNxaGfoJr",
  "key1": "3813xyiNKQF5Z1qHSHR7YCfgZXwDtNavWM4TDnQPhXYGtiLZ75P1C1YcwrsbiwJhifufc33zCyJZqvWYV9GyvEY",
  "key2": "3nti8ynaGJRK378jPTmgqPJaqDwn66TZca8zZ7hgnE1hbmm58Cridzc8ZGEHRNzKHepNqZAaHM1oX5ARP18jAFLQ",
  "key3": "36hD2FoEZn5RxKVjudHa5BFkRDiEkPodd7ZmhWxP2JGz2zQr8AYzJpDsrLUdxizXHumBNfKWMzJVhE1YTACtJ2Dy",
  "key4": "47UwSHhLmv4vULJtKF24FLMzR32mhVMSE9tWLyWG63qyrCvH5sFWPkS64dJWbYDs3wfGy4CCvLyhwuDHTgERmm1N",
  "key5": "Vm85XWuPixfy9qjDJ2yhZdXToa293jpzccFh62z67dMUfah1EwFZSc3Txden5eunE5Y1qELfQc1wDkSNk7cvh6X",
  "key6": "KNzct6kQgyHXKb12wBbMpp6hm2tHifTWRojT8tJ5m9XdxxsmSu4LtZN59Z54uufirmEe9pbpUAdRMkGdmkh2wMk",
  "key7": "4YFWyoJXPJYzxKRs8FBXbKMrr9xvEjccoHy1fCq83irUVZHXvGrBRxvkNjV1AmiungMGdp2ciG1UoUcQJbjrR9jY",
  "key8": "2yMgPgPb5mJU9PHUTo1K8bCL7nQAKwZGLXyweSQGkMNTiLqibpri1DhnuQwXE2Q56Ec5JcQ2yy3XndtTEB8Rh176",
  "key9": "5yx5LQermon18JhnYpnNJ6EbDED66mPmdEKGm68ScB4A2VKHqsyKWik1eZkJDphip7HCnMuh929851g88z47ppRR",
  "key10": "5ymo3xtDwcGiDHxZeTJbxKqu1TfzxMa7tCQwcPbJksjxyur5RCajbuNP6db9iTQ3bvT4RkVFbv77b8Ak6r9TVMDX",
  "key11": "5WW9ww9Erpk8L6VTEjGgdiQScskDPuAyQujVQnfzuF5KRmwyU2zSsiaqrRiJuEQL2F1qQubXccziazQyBPjxZRid",
  "key12": "4Vy9dg3ofynESpXBvAYdUkTKxHvcpRnmM2tbmZF59CpahRpARwxfF3x98DH6T6iLq543GR83HWLprvr1cUCvb4fW",
  "key13": "2eDWAgi7Vazcd57XKxHuwuS7HCuztqJ6gNXgdC92KCDTpPbLv5898pkpKZvugfrmfhxMKEAtjsuJ3rMpEKsQKebY",
  "key14": "5wuPoeK7NDa23UXGtwafSxU1e1s3XEapXB3MKDKbZ6HNoT9Lkntn1cm6xoz3XMNFfA19vMhhV8QF22vnSnBC2Uyo",
  "key15": "3HLZ8W1ARTFiRUj3P3q7zCeJV5QKCgN2LuoQYxnAcaeYz1tzrGVEQXu2fwRL354H2dU9RCDProUdsmBqLv4pXmyt",
  "key16": "41XxxWZPRrETuWGBaWSyGwXqCCxnJwjKetumYut5daHfKemu6SJD4iiLgc1LiK956HHYGzt45fBupCXWGgb3JXPc",
  "key17": "5cEQkehuowBNBLFjr93TPg9VUzWgG6dmhPopDNfwZTezPqGEW5j7T5WMxuZBJpsmjWo1FE17sxx6ebjsVss5BnkA",
  "key18": "4dbZDgiLaVnpvG5Xok5oTEYR5wf5MV5tYRDz1Rczrr1WXKmUD8vdB4gcXt33hPiEvWg7WymZiWUe6MNnyp5jfW43",
  "key19": "2qzgdUNcmeNiGx4CyFftPfhEjdxDcSixf5356ijUXJh54Bzqjj68dmPQRxNmsmTjviCbw6nHwMfGN984zDE56G8u",
  "key20": "4HWbwdMzBtZygbpKCp3f31sujLGEeUFsTdA4TzBdWcbQ8dZyRPLEQT9WLV3ySkvefu6wiyMTjrHAFEEfgZu31n8Y",
  "key21": "5yJory6zff5Waq3hugWVNsGmZZ5bvgbJnHYNJwFq4gPTXKkNSpzndeh4xAESX8kPG15gfr7pPoauTJEFyAgFCK1D",
  "key22": "jjbFsATbE4CEEn1F5opKmkBuarv5o4zWUm8PvsTtsXdSGfvQZDQo5gwvHdQnSphZQAiU4PdK1aGkyi7jw4h4sPY",
  "key23": "4uEBWvwoDXonmqyUwpoJsxfkGjn6Pi1GyASp1Vgi2oD6LEy9EjBJ4ymgj4S7pjZ6o5kABEpzmudU89bz8A8gT6Kd",
  "key24": "345x8RYeiMXFjFtZtoe9VjumscqHFQE9Lano92PwgxSCHyNK6QH9dL9rMKtjrDcA17fNj1N1YQhHJfSVErNP3LCK",
  "key25": "m6339jQX2dURBFnaLaKoB5rcdyzziw9T72tF2JPvGS7hcvang7SYtUPVCRjF61kzat4VNV6Z68SiBjFh45odzrG",
  "key26": "5oXLxpmU5Z4pyrEyomos1pnNEvvY24g8X8yEEDFW4EwGzccGfTxYkaQBG47emziPt7vHjuM1ZzZmLLwKpicwqTUv",
  "key27": "5S2SifyZbMuHvWHVTyXxzjBgRwV47DiwPwAJUQWY3qiYJqiYmWh8REtbPUHuUfUoqwoe87XtEYjDN7RnxZUYM7G7",
  "key28": "fQ4j4TCEtDTuYr1L4hgPno4New6uoBqCjBFyZZBr7n4ZeWsdPBZzpCBdDeE8EMW3BDpBV7ErjTbhSPH72w9nwBz",
  "key29": "WE3uQCi8La8rBw7JJ1GTQzGxKAAGcY8wMB6f5DgSL1AorzxB4qyJFzWFWRzXVhnA5WEeEXjfxLBvT689aWxWsBn",
  "key30": "4AN3xPqj1HRVbZ6V77fuL7E6bFMFSpAxWoZsgSnYPeRiknVa1AV8kbYLiuSYeCZmufDGUXdURTKhroxmHLaHgMCe",
  "key31": "3Z5XqQ997W1UExQCis4zLpgo9S1cU2A8WsHhdqFvSLer1AcRHf56dX7ZA8h2PLt8NijGg6HKEzKWpf74cwkDW83o",
  "key32": "51iKrdCnsCarnr5egW91Uyq4CTjEav6ZPehtJMUQRMaGqzmb74hkJsdRc1SbAL8TUAcLdjs5BFyC96yyU6pamF7E",
  "key33": "WQSn4NfE6VR5dGcAtRi4MVgUg9MZV3XeRfaWAKHVGFgXhpBJyfHYgTfUtbHQJ1BG9kR34VnGXEu64tkWoKaWfFS",
  "key34": "4DE2cKnHGN7UYRPn68nayLvS8fndAAq7EtXMKR1QkeFHcodoNE6a7LL759qHbbRK1qDRAWAkUW8gZ7uu8YZiP6tm",
  "key35": "3ktwixskpY6nmvwteuPmKjSHPqL1MJrXAoNd3wYuWQo6eDDpmbMxTgevyfha5ndLmuBTH8fL3QGUantMYUTpW1wA",
  "key36": "2exXamaMZ5fPxv7SZ2LVpXqkAKUBWcq7mR5zBNgyD5HrVKJtDNqpnGhU2WbNooGuBAHVLdzEqNEtKhj5m13BdbYb",
  "key37": "5K21ih2TzYEYxtVicyC5T5QwP6rDdF4z6djYzruv3bTv7Lf6ndkLPvVXEj8gHrdS149ETpvyisM46LguAiPdSxwc",
  "key38": "3LsYr9ZsPq5QxLT8cKFuKgXf8tawAJgD2GJvH6CeRBFgzPQudTohvootZESCGz7Pn1puA6YNaDHuowdUVqnH1asc",
  "key39": "2GpwfuCo44PvMPA1JgDQVru39WgaAdLzWwhbvQLccP3KAwW8yhBzukPkhn5ioHVGbZrCwaYUbQtngfzDjmWSVnKK",
  "key40": "ZtDD3dneiL6JAXoQe5BxpvohowT9MFygYMiDwCdrD47Hxtkg8MEkP5U94TvCHa5946ArbJBgEjqdmSY11M1PjFj",
  "key41": "2ZhkmQ1YRWTGrqmx6mxfwSNNaPe7jq14DLgM4fLFJ792cStyugXCjqpRL66ScboLfpfwFcRatkXrLKVWYMxE4THN",
  "key42": "4ymUFbCX4ZnhpgW8sGh37gmByNU3TLZkZWVRVzxoeSQRuA844xrtsdvjVnwGMjGBKb6GyX5yRhbp396HM6TyBKWm",
  "key43": "3CvVGrkvih9HJojWXFedFazeAG2wAR3rUqT4p9uGoyvWRePEXicMSTPqfmW5Mkiw3xQhai5xjb6zDS3m4jeXoaZR"
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

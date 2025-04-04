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
    "sM7EDUfEcWQJL7JVeuLbRAaLPdRTx3HJmLtcXAFC23X4ug2GKyFBLjCKVFzTJHR1L8tcp88UpmyFQB8XQdZiwCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QpkQeBV7n58dhP1Z5aPbcuBxiNfcFPYidYEECGhMU2tW7CwWroQVtaJ4A1CaM6CnvyW1wNPAZKYLF1Vp5XkjGAV",
  "key1": "3GsLP5ZSUVNj3RjoTNcuwL88q77WLZV9wHgFcbXuGe7yF1xzHaQaCMAi8Jmoi8GsmxqZK4tMHBC6vc4ay2ntZqi6",
  "key2": "3yxcVFVf6U23ceHvmppQk7QEWL5Hw45mX1bxX2PwywS5ieDoETYtYcvoscQ7Ycgu4czR8gKzTaLVq1MKj5VVxhWd",
  "key3": "4m1BS1P5HWinXytCbcdX26vAg4vzhoE8n9jayyAwXhtZwukcFhrkoJ1MGx9Uu9NdwevGxNW9Dd4JtMsdnoy2p3q8",
  "key4": "2nnAAia3TgmCkP9MaAf2pQgfWXnEwwvYEurjVgK7XZPeXKXfEWRfJprcRdT9DwfGMLD6UeLXx8qeDQMh8hEnJ24a",
  "key5": "3yuWkgWohbfewB4HQG2Z2BAjPdcMHK8S6sQyhpPJtncT2Mx8xvYuVZVh2dkYbpG499cB386BxNuLj1cMHNRCqoPB",
  "key6": "27zAcifKrdVXgGqJceTDLCnF3Phg64i67b3V577MoGUFSpNYm491JwmpgV4RkTPDDVyCQJmWXGLCR6qLXZXGAjmM",
  "key7": "4KUjFqv9XC6WftYASpcFU639PvSJigGe1JRbZt5YCRdSsWtBsPH9o8LjxQEWypUrVWUcYwjxJcasq1aoZMKerh2d",
  "key8": "4x63ufKUzHhPu3aRYqEQaBj5QNk4GMWa11ToQPkgz7hTwo53xzGury7CyFF9n5JcADGyVZ4syyKZo5QUES3uYb82",
  "key9": "5cSBfj3ucmnVhKNpybUYNkVsnvTxptKvV3Wh3SK9AS1rBh5BfpeN1Vw2HMUCDf5wh3EKZKenXC1Mx93MXikSfyQn",
  "key10": "2PaDUCm3mkArHrgdP7Wujm33d3n8aTYvU5GwcB8tRoppF1N1Fgkt7gvLmra8YFQGtC5NjuyXN8EBQe4BEvcp4vmS",
  "key11": "66kYeaGHbzVciXxJtL28iU5FKYaoRCcN2NZupHQEMhi4RvXGXcqiKJ5fNQ5Mxczzz6GeXzbfJwWT5NkHa6mMs5Xd",
  "key12": "5mRhof6cbnQV6RoAXb6wMA322xpu4GUbm7oEvbfPPTrvC3Amb9yRYDhsCPGJaUYeCRhoVu9tCr4Mzd25Kbva87a8",
  "key13": "3buuMW3SAXDddP4URtgbexzQ4mtcX7cfqv1PszUDob26PppjsVdx3UGpMyT1MgZ9nSe342pjCWX2AsKbjGexAdqF",
  "key14": "5LfrNge4cDZiL7DFc6cacRS6CP3k1CTEcdPrm4kzDhALZxSGdJdg9BdrYeaXk4UXHMhmDuGzawquJCXRLJj3mxfG",
  "key15": "2VmRdNiQpwiyFqg1tCqLJttq43jJ6tWafYZ557ScZ6feRrsS8Z4aWedAeh2ofRnvc5S7FFawGuGvQh8fkscQYqPJ",
  "key16": "2SZmZ4Z81KKiBJcUjvUPr4N3u7THhPfew3MNkb5YEWEgDVPBNXnyzikgP8x1xgxU198BUT1Yzw2bxBAhQW8iUt4C",
  "key17": "3fqbQ7Ph2vMFhrdneCSyFP31spMB9iyXtk5MhpQn1oewRGtW6P3cu5NwfmqVMrsGwyhNLzh2QXaXp5MnWZKKs71d",
  "key18": "3PBy4LNrFNCfXxaui2tKwEjYdt7SiimegFMqxeta8RmwxxT6jdMEBWp9wP5c71RqxQ1V7qvCSAt9Uw1iZvbvdxDS",
  "key19": "4eRQdSbvbSmch2Y5nedQcJs5ZAmVKoufGzZEVWkkAcVt9AmfrR21cuSitu16JCMZjpPsLS6MJS1gptrSKz1Z9LB1",
  "key20": "61V3prWFmBf9qfBWx1qp1ckybBY2yHT23zu1XzgaTrLASwGPhMkP5LrvpWnEtApJG2mfP89QeTdGiDhKexiJBunr",
  "key21": "3oV8i7ZbTQWhiE6QBQCJPVLhPj1yA2DvWZgUiLpobgeYpEroM8bT5BvKpefG1LZtPSzbLwxcTDHDdYTK4aCtYvVW",
  "key22": "4RTFWbskRv49axY5mJS9ZzkCwGCTFu4DU6xfRNX8SqNomiyt9knrjru5N4bEVPnPPCJR9Py4CTTojpQh4SiQ3aen",
  "key23": "445KxGjWVnaBx8EvbJjcneVu5cpzLWd3M3g5cDFXKTee9SyDY2fDmw1hX3EfGbYdbpJWWE793EFNfjfnG95SFxeb",
  "key24": "3WxxP8ZdFMTTfLTCxZq5LUV5SZCjGAtAMvwjqHTTMTyVkXmdRYL3j8xbzjCzFsadd63fC3HSRDTJ9Ya2iekwudti",
  "key25": "26jXhgHryc6GZSMhWZdDdSa9NbYc7fhz9Zn9k7D6e4Lz1ovNKBKfRaAcCkkS2C4Y3uZS3nDPbSmhdKewTYVkYDWe",
  "key26": "5dqGAJuxuaNgj4pouP3ZWy2wiFFS5UVmYptxYPt9Q5uXniSpGsCzZgUvS5sRUHCNRh9Lvx7iuQJSUaUVLUGQSKod",
  "key27": "4RhGTpgAPNSsj53azK6Qi45yuQ8Zn6X9NktA2y9Y32tCcGVJ6wJ7S2FHn5svTUMirVxfsqFP2CoP9iYwuFBzuCLC",
  "key28": "2sLC7wR6St9tyfN96JgDwR1hBdXSvmz6hxVxnE49wWoziSBbU8rHZj37X3cQZd7YSoyw7R69xHHAtvRW2iaf5QG7",
  "key29": "4N87LDnuRiEpNiWqyJcgzGxUuEAxTLcbsaETDpmBQrVaavGFN2FpiAPedqYDYRY7mEcWxNLmV6foaG7iNjeoWxrp",
  "key30": "2Fe5W7L9wcri2XWXK6YpNn95MdiCmJpUS8LpzYRuuU4rPEywmBAu3We4JBzyNBxSEQjm85xrvm5MNdzeE8rNAuTr",
  "key31": "3cEB1WPWM33bZ1wBj2pVTTC3eAGBstMVuY2vMfjf8usaFuJJYDDfHfY2vMyyeXKj9wdqLyyzWpxWeEQhCZKWUX2K",
  "key32": "4JwRQcyH6d4t527azPQCCdiW9nevctJVCgNmHP4U5eqHGka4bZmWgKYU5PJFv7p9rDja1CsFZ1JLujWiysGBjxkT",
  "key33": "4wDPXuhPXiu1HS34GKva1amHSyxNXULtWeZtGD9hbubpKTUbJNbLbNDL8qdwLTXRdxJ1SihkEW1yQ14hkyGjEvvW",
  "key34": "viUUbgVtC8EUdsbJ8ios5ZSjR4NVHPXa67xRxKAHNRqfsoHwQA5fNaXFrJpXBU64CbsEptssjyTCwE1WuyYB7rD",
  "key35": "8bZHVseNR76RNbwUVfnw7u3ATkHXJDpzCVrivaqwRKvXvppMNgqKGfvfMqMBuE8a5ddDXBTgSBqE5yRKk3tShZN",
  "key36": "4bQtuRpBeKFUXuV4WSmZqSJteCXRM5ToGQSjYjNtLVne1Zk6HC5C2UAJC5SYwywysh7tvJM4vbjVoCCZGPfz1ZGt",
  "key37": "JvZ8htWos2Lnx4DHNGEWnG8myiqz63GxninmvHt27KX6VUnuqvvpwHxLHuYSTRV1xuo6DcsP6t1wb4UsPwh8NqL",
  "key38": "vFjiACS1WdHWUhBjBtutZxcHrzDa6gPWn9oY2U8xkbBqAmtHvYTw3BgJWoFS5Eo9dxNQJEh5Cap5fLjvmzn2kve",
  "key39": "4JRKihTtkpYv8qK8o5XyDCQy84CAbBrSJ8QhyZkEQMhZxgWfCvRQyW235w5UbEqYbo6cW8yzHKqrFEmB9UuhHpBU",
  "key40": "5WEPwn8XQqZUmW19b4FQNeX1YccMDe17CHhSWp3d7pxhpgqN7RxnnJGNWxCxBzAr5vvZAerZRQwaudn1wMykmczV",
  "key41": "QJWPfFuCGa1ShD3pZSs4zsseQproW1XReL4nhC48KeEYDYr2kPHjHK6LM823jCwBaZk3CQWz4KmNVVBYohoWAQD",
  "key42": "4kTyXdh9D4Z2SrNuuJ8gMzBbwCUwMXcVe6X9WSMrWMEXpE5roFqfuEL4SR5fWM1GBvPFro3HwqGF8UDKejyp7waw",
  "key43": "66sma6PjGu8Wc5iFcR4gT9C3hjsushFxRBTeyuN9ZxMbF6PyB7a1Bvodr5M7wpXhvPfGPHN4JmaMG9YtjfXfgjZK"
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

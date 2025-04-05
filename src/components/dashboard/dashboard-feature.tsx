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
    "2ZWAQahXBnYdL3z8GfLo5aHGS8PNHUioYTqXKqyEj431JQhiUWpqt29Vt61MhzngqRuNBgty1Kiw4Npb1PtWbfPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVXxmhmo63bR7vUuxLb4UoAFBKPjTqm7nawaYgzBDgQvCiUY9opmTpnEc8qaSm9EXUxCHHxTYHDnHbscYxBsRUt",
  "key1": "ybT1Gs6HUSLW7Tx25RNN1qYuGPfbiucvXL6CSCzpz7ojaXBiasaCtTk5Erwjkw8hisXbXpF2uEGxtaVz96L1HWe",
  "key2": "4FL8bY52fxdNM912gUmk6iRaApKvzVj33k6n6QYiiCuiFt1T6bqS5UN8HdsJ1xVpa7uabwhnFTUsTZ4FdeaCZxKX",
  "key3": "2SEjwksP4BNtrFQf8HzYWSt63ieE3zpW4xCj1ArY66UQatWy66aBrMnRy3ByoHoSV8GrYSuQVEG4dfutBw2coMQM",
  "key4": "4WkopKTq5susP4Ti2Uy5SKaNgNAb5gjVViSPfzpjrBKozrqA8sJS25Q1EkbEb9aDP4Wtqf3arzsmFpiKu4TVBEdn",
  "key5": "3jLJZsqSrxnjYcdjmzAyJ9sKMRZLSArDN7zYCca7bLqfxajCsqFuqPiNX5tfxaQqNV5BmZXGbAjS7LSRDo5d3btp",
  "key6": "2WVYP3c9HnDEaJeGcX9hnzhxYr619dxaja7x9cZrurkyBaJJHvKFX68WgLNXuDWHbxCMC2u6oghRYfPULid3Xz2b",
  "key7": "5aPmTMxhVS94Fmc2aQPr2Yn9qLBoATvmcmjudf7JvEz2iFz62nKjSHkf3KybyT3nKEAwPatzxfxMsDxRz8S5Zkp",
  "key8": "5iYxtHvFiMkw2TwpJt1Wy8BFfPD4Y4vCCSQhgURLCKAPpWzh238HjTWyd8Ss7B4om1VfpxZaANtHaQvXeEnDVRKi",
  "key9": "3mdPS1cQ1J9F482qJ2JSHK4GQTHKFokrProWbsorDrrHuhtgGJ4sscWyd2R51fkYDvtBi3XttwwJvhTbY6VbjWd2",
  "key10": "2KRYQqwZsGokv4V4mQJB9dsA8TzabwnraUvb5e734hW6mnxkK2m94yfi83fxTZ9yXZHYh5BxXojnkk73Xka6Em1p",
  "key11": "5R3XHGe4FdWoFHwLQScR57nMESARHK3nbKocQm7aU9pVWn2RnCjtQkvzmAoNmxNURY9DM2MNzKAgrxCxJYNLSLTf",
  "key12": "2taDg28MJKjk2s5W8wt2QD3rTEMeKEFRf6sKMgZwC6kVtUgmYVpNpqYDxaqRmZuqdsat1eA92AkAsSWrKVHJCz6f",
  "key13": "2wAxXLZruMRDMuTSf7cGY7rWYfu8qykhnJt6TkLUDGNnVN1BXe2iYUqfVdxBjhXLQG4uwVtD8jvV5rFWSZid6hZn",
  "key14": "5hQ5UyP2rfiqkAW2Sj77wMtKtsZZzHf9XshkhLryPNJmeJNfXEAyTwEk4vDoZKFdu3sR35kkec4V21NHFkXH4Gb",
  "key15": "2RqVf7SPg4j6hoedyB2sqvr2rkZSXRHvrj4jLjgX5xMMofPfMC77NXu4Mg74fiEbT49pHhtsdiLntne5EX1Gn9BS",
  "key16": "2fH9GR5A61gVSD8Fwx8ehpri2NpeLneLqbcWh9BWTBN1TbEwrsgBzCXgZexaViFbdRdKWzMe4Dh6CukMkrfVmhBx",
  "key17": "5ZTMUY7vx9GGCChKrwAeWpvxiZNgrxNGrhCcWK2jfA941cFuj5bGdFrXqg7gXFNLv3u6obwRckQLCaXoHvGrR8XU",
  "key18": "4dPPjnpRPuCya446EQPqn3HKB3sfQYE3irgXpfpG4rH4m6vzr589HUPRJx9fAWDM3DxPnqtqbn8Tczg4vTBwkTPN",
  "key19": "2LqSTewHasoCbVSSXo7qoSX9juLDBFjG34DeXDWcK9e1syqiM7ppSBw8CNJ8JrEwEo2v8Saecnoi8s3L462pnskx",
  "key20": "2QGP7VnZws1uwqy5C8LaXSii2haVYyG3y66KHM7yXxtPuyyY89u3vnGHWFJQJw5FkKEjv8gVyA6g3nXMQ45XcTYV",
  "key21": "23GemMD43kMMLFWP5jo1BjTgXQq8QnhkgCzxdCG6arFgYuF6dnreAoyZkb9PiWmaX1zJL7asVdAV5SwYdqSTPkCM",
  "key22": "2QKybG6dtZPnSLS3eMFad89HLcazTWEUMZzJhKjK34k4DzVxzrHesijo9RWFHVGp7fLDgVUpNBynepNjbgR5begG",
  "key23": "2u5okRKmugdhVH2hBrqvY41XjhDenk69qhzyihobWh2X5dxWXdpzeiRoqQf8cBM7BBYmzuWveD1MYBC4jmeAgT9j",
  "key24": "45Q9ssU3mAzzcqUgWLJ5zf2nYhsaycVvDZtbrxDssmnmm5DKgU1sU3ktu4kfvdsJsnxnPLoLp8Xsy8cBD2mKwUCV",
  "key25": "2cvAzpC1Nmt2E25y7AxMFqSGi4L8Mny4udhT8R6UKKfsJr7NVPVu2z8P2nnwtRy5PyT3gp9xsRAgeeH4WcwEFqrv",
  "key26": "5eauEiVofKbqJRdyWukprTYp7KmESYALrT7bxCdjDW29dff1HPR6J7M4iZULfMrYjysA9fm2NCaWVYR774op8Eyc",
  "key27": "3DthQpbrGnMsZ2CLJurms8cELwQEbT6pYtaZoXcfe8pYUnUaXTqQPyTEbFS1LWomq3knGd7MackBmXSrmKmzBX73",
  "key28": "4Ci5B9LRRKqMiNLNgPFa2thvjcDHKuR5vXqx4dYjBrYoXG7eFwFg1kLwVYCPGR27UvYAnhZJpqcUGJ1iB7QvF8xu",
  "key29": "3nLCSaWpRg5pD3dw7svEcg1WMMu7qBDY8LVs8SL7xWTRa5JjA8381c8cKL3VFB3MQgrMuuF321MBvREQ1zbKGRn6",
  "key30": "2jTXzUXbtjoCJs7GncxXjLC8ppbx3JjFV3DJ2HRzF8Mx6EJwnjNPyKM5iJPmiLuYN5mgtvkCDrApBnbxh6a3QEPW",
  "key31": "2TBie3BPM39XHdQXeQJfYvEWNj8B8d42XerrQ1zS2GzgpFoYhbk5E7RtsQBRAt3GYnVqzof4GixeVtwdHN8BaABU",
  "key32": "52WmMayoN7cBUvuBxiS64NdjojptJ9woE5QTJCyhzfofBJVjvG6hgAG5oqmbrorf9UtzvaQHpWcXWBtL5Ravm2fb",
  "key33": "3LWcbd28dzhUdcBnEQKz1QkpfkyFJGRNZACXE9KxxN2cHdbP9n4PhN3QcjPw9HUA5gwf8vqqT88yu31EVW7mi8E9",
  "key34": "4MHih9srBBspABb6XsDVYNmrAvSucNq7HhFLBdqgwM7kMSVicMk5bEhfoCXYmNpa8meqsjU6e3GqpvMgiwohZ54L"
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

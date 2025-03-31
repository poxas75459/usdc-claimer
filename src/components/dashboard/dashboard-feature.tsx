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
    "5vwVq6JVn6U1RcSSmp2w6b1Vo5Y1HvcgpBFsjM3Qzv7xjXjQNoXNTUtiLpWYtnt8E76cUCu5R3mTjQh61tXHDsia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dBscmjgTN8TbziKkJEwkcXKNSWKXSq7Dj3zVFcCAMRfkVU8befqVDLoVXDgFxW2i934HeA74gjRyYEhBt3ybTLm",
  "key1": "24db2chMd4rc4tTcNorCm4zrU7MeGcaiAX3fiewguupEyaRAnJGkuxqgEzVyvqbRBtSByWFJXbvKu8oiVsox6v46",
  "key2": "44K4sQ7qLjr3Pi1q99s58WjhhGbwBcKD9hinR3CViUdqt7aibVGVa1JiB9UHaHH52PjHb2wZ8hH2MH7CgQvVWv57",
  "key3": "4Xf7kNRKWU9XUnsesJMXfvrBtZH9dWfRknNbCJPgLqK8ddaNGKwxnNvnQCYJhsa6xmbGRfckEThq8777t8xqpCn2",
  "key4": "wmJiWdXzpbnkYQ79PdBEBUo84mEq12YQLWo71MSUUsALGoAQUnujzDhEaStUsDZQ8vPZps7GuX6RsHG2M8v3Vvh",
  "key5": "jKeMkVU2soivgNL3bC7fyKE9Ga1UkpfAaamSA1ePNcpcS8FUxRDUjWNoCy9fPAQ7ecgx6KeHRYFZ9WfFoDoyJ2b",
  "key6": "4gT8gD525QRoSK7y7HjiRDmxg2V1tSNvohFiMn7f9LDRR9eKHH3jpXJsQsX2C9FQAzXu5JmprkChiQEfX55QbqP4",
  "key7": "2M1zMgB4BaukHTzN5VYw2ERyYjv31jt57Q4YoB6M4gT8ksirG1kytzgRuHkEW3YiuTcdcbsk2BLToLCMnJJjF5nq",
  "key8": "5DTNgVuubrYPiWc6oKDo5t4WkTBMGGHkLdVMVpgrERpTYJ6iKbbp8cAb146aQHux95P6iKKbk8VwirJ1bxYGV5Qh",
  "key9": "4vXU9s4dDNHg2qqyvkEsVLmLv7QmFfqU2f9NHXaqPdmkPsjRbNMx6GPp5tnH4bxSHQSjhh16BSivb5ik9JPquZKz",
  "key10": "3jqnKc44RBmAzf9qG1dFapSFqE4AGj3Ry6xMUECHX5Hg8J2cSAVxdScrrn8PR8HV7GcByqC39b6723Bs1v3Vjqov",
  "key11": "3t8RndyrjwHueHugN2jD332DcssRa6Rt7vZ8r3dUSYprHHMm3ajn42FEFwXuWAmEeoC5WLKNuk2SaWVsFoG57TLs",
  "key12": "JBYKPBAPTMWksKKx9muiHHLewp31mPESzLoW2Q2vye4PHLN57Mmrrf8rzfbWKMo9vddSDh9UzKxbhUHayGUv6NH",
  "key13": "3PffULTNfZC9AsMPMGNkDmzMwbwukCPFi5BiLMWLCsQCdYBJNr4r75WhN4ZNkPszNTU6d7g1Lu14UZ9e6CV77C21",
  "key14": "5wYsSP42KYY2tXDSjyqNPBNNbKeTZVhWNnS7K2FxfSLT3LWPBCX64BD4J2wEiUgjVuo77RNnBGXXZsjPZaiNX5Yh",
  "key15": "59WfWxAs4cU69facZXeeJwobT6jqgwfEWvkHAVXwJJba2hG4967F8pbGd53DpHXW9mnceuSRQ6arwC7SkkPpPfio",
  "key16": "5qUob4UX5Kiu3WM6Aiz15HPMwoHaUjh5QAcYJTdrCZQ3Yn7K8LjFKGTMrpLV9ioTpvXjZZ5DNcBAhmWuntScUrMN",
  "key17": "43qge9yBBYZ9sgwi4qVVQ4nKTUBbFJNSV3zcGYew3o3tZ2VPdAWgoPKNMDoBt9eAcZUXr3o8R9Gn84UfsxP5bK1K",
  "key18": "4aQUabRbZcYcfpHgB1B692pJZpj4oHo6kv73JWY7Y9a3SVKYRCnCTitP8Ld8JtUa87KrAFckbVjdJ28ByXuyHfsF",
  "key19": "Z3ndpUH4ag8F4M1sVqtppdxAeWaxwBVkW2xw2G3sHAXABsDeZqV1E2Lv18VmDEEMFfjyP8zDpTvpbsDxqE9kiEK",
  "key20": "67MACQj3GhY4moSdGGv7P7uWG9tQ1fYBqwCJi3vEQGoTWxEs2ZUVDjb37pov59aLNXmbRo9RxqouTdkBceLD6eLb",
  "key21": "5wLrMBg7sL32ZaP7ixSBaqwtAVoJnGthbaL63ZqRMiPJPrZyCQcae14CPyfYaJmqWD4C9yrpK3WBGgARLMpUaed5",
  "key22": "4TVMkSm8qTiDnGxob3Q65D82ARgsQ3HEdZvAzeyHThRPQ6puz3hev6xhraXKqJquhiMjdznMGY79U4wjgFNX1PC3",
  "key23": "5NR2PKSSRNJcwrHtghpUoBU8oNWmUJMrCSAjuCk3aEoXJn817Bn6ktQsRzyxrjFMRuc5rqDUeK8nPsiezqSX5GPn",
  "key24": "4hEomuqgKb1QSK1LU42nm15A8J6biCJKzEYyKnVTRpx834ADQ3PPukZuSAPWwMe7LZQ3njePskYAKjX8QrpJVqU9",
  "key25": "4FbthEpkhcr9iSqnHD98s31R3oWr4sGk1VbwQwZ63aMea1mmHi6duwNGvbUT9WopzXVqDjqqFvkUzLQvjHE11j8J",
  "key26": "33PN4C4yTEUN73DjdszyE2Esysi6wXEN9Z1kUZ472qin3Z4MudCN7yQcPKLRCuoRADC68hngw9XXiAbNjaAikEgT",
  "key27": "4PDwSdjLqq9CsCcJ3z1oWT9aqZAx2wHyVWNs2cF2ka3CroJDJr4XYVntbdTUJzSN1yKyzdkntd9nCrE7vvgobYEm",
  "key28": "4vdRGwPPAT2MqcSmLupAuLnoWmopqpiiqf7fLhqkNsQxXbkcCvJj8mQE2S4Tfta2i87yfD6u7q7r9wDTo6dEL9fx",
  "key29": "4jPBPRatwQ5rECGFfgvpKK7oRLnM2RFD5ucry1dmrtgjQRhKwGsMyhPA4A6X8nykUV2yjyC6RrhLaVBuGs51miip",
  "key30": "4mmXsRipVjNYtAM67QqnqvWoVJcTFDmXGNLCrhSnsdHU6nmZVp1nCjvG3ZXiWwy9FiohgCZ4nbzS6BKFDNUnVZHE",
  "key31": "4zwXYG3cyB4DEYtx4Bi5CXUPmCtt4bY7mytLgcWxPaujgdY5WexeZct2JJ68LEz4Vf4VPSLwXr33y8o5MaFKyWBP",
  "key32": "5teKF3Kac3wzDP2DcMqw1B2QZrvKDTdqtBYVntSM4KMvjM5y1xf7KXxgG6iv6yj58yC3i7ZV1KU1UV5VoECjXeDC",
  "key33": "3CEWh275ZtoGtWbFP1NKnGA1bQB8nvhW15M9DdhP8Ap5e5vEdJZFZSvSvRWzVtgZ9fatbWKchu6HGCp8MYSoNB8B",
  "key34": "3jNtCLxxGtFCBCNAkrHXBt1tejXWdXs12xVHs6nvuo2sKuQLAarF3hYhUJz9XyH1sDa3Z2No5iqHBzD22RSKeHiR",
  "key35": "2b3Tape4ot35DwJfpeSGggvevf1M7fZFJypF6LKvvzqypQHMX6xYKANbBihi8kTxFRznDkcUndgES4p3d5WC2QzP",
  "key36": "8Q7fo1nnoVtm48scMs7XPKJ55pWh52yXqMTLBreDqTCFoFZFENzZ5Zt2ic8wc8RZi5AfAC41XTcmHXib2h5HSXm",
  "key37": "2R7S95dYRxKJHeP82U6MfmqiVSmxV1t6Ls6CTFVJ7Y5KLUGg5JJXe95vGig9Bx8zuHAtb6LNyHg5jU7LqZersVMK",
  "key38": "e5xEaDKD6sfFeEBnBB3L767myy15aHjtCyTrXJEM5gdUEJWXhoNrfxp6jUP8cx5x8iCHiTwrb9kFZHjGygawCEv",
  "key39": "3MfFzs6tCJM2T5j144oqwgQs6RLvzpqURgoZwzobDW3Yeb8BYSnvX9pA5h1t2v7NmCEau369mMV3zqrPdEd4u7oE",
  "key40": "4qsFvgtaZQrxQSNzZvv3nsJjaUMNwwL3XS9NZrijodVo8YeobaHwHe1JuhN7vsusuz5MDx7yQkVUHAHqZwkh5dwz",
  "key41": "36n1nbM3km6j8GfyLBRJAxxkhLvMtkREVQzSpuSF1NTm1WctCPcmpdSLvUAya7jpmfMm6QdGWQNj3gfBBftPxXdE",
  "key42": "4DUmgQR5vr78wfqQFQC4vmdHXh89wnZftKYTdWmTHoxXwpXZbfXBbV5E5GwESJHmhcaW2kb8LDxqsmBHdPscdKW8",
  "key43": "2QSgqV9eXGQwb8xXepKQGDmzVNrf73Ahf7Dq3PgAByVT1VudVvjgbNresmSiscxPr5ftHJEpvGtpBLjBxaRq2or7",
  "key44": "3d3GN37eGpa1QHNMBhHQmHegcSmpNuxZyXqAT7d1i5RsbzRKeeWxs6x22uzbByqEk383TCWzBnbJt5B7DNt6TiZb",
  "key45": "2UVQcKwGsDQDYHCka7BBjTJr58PmVdsAouB3D6Bf8Mz6K72gLWasDRbUyvyRnFgjFaT2DoU1tLaanvjXmmBDe7rF"
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

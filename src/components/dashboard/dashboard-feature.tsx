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
    "HpL1LfZ4KTw6GhG5ugckauS2ZjTvqycbrKNnNx8MXAtS56GwQ57oacNazCi89oJMei69UvF1EiLx2jwh8CiqLd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WAYcXEvw6MGUxk874hmFi4Ro6WFiPkYUn8v57M68iLKy4XnSuv9mjs8Dg69hWGx5RauUyXgjee5SyxP2imZemh",
  "key1": "4pc8rkp9fCcyFDzpPk11WVKfWEVVMsFqWz82okBQCJP15NFJmP6gxJxSZK5F7x2LZD9yd9bQ2zrkp5uBHstY55BT",
  "key2": "4Brbuh8hnz3czAzK4BYkozyUuC9fkuaKEKxz8eSdMdGPah2FtAA4i4Mp8zCEUpUKosQVRU24LEbGJLCrJtXRPpPy",
  "key3": "5H5VoZHkD8Wj7iZjjTwxcEPDAcy4xtofevn6QzbSQWjJEJjZkxoDuxYjZzbcF5KmFH6vb1YnqJj3yGJpinsPPuAp",
  "key4": "2jvJGG82V7BBY2zLmV9wwdSumH18jz6rSewLk7aU6qg8H1Pdx7yxSUwhfpF7SEZxzn922uRWVGCAn6fZ9B5WjBJ7",
  "key5": "2x5JjdhwcxpQ55FBKjR6aJopYxXymZo4hSxmMi3u6ifc1qjcDRRB4NRbijSfQcfkpMRNomFEeiWNKdcZVV6JrxJv",
  "key6": "3yem3oTg9c2WhqBXyHLQGCd7iscbsWLiyJgzqx7HmTDKZGGoU6y24JNZo2yCL6sVPyXKF3oGegZxXXhx9z2Vz2j8",
  "key7": "21vWcJg8vfzr5Y5qSRSY4nScg97EMvGGUduE6pw9A81BaAH6Ef5hFfz8SNpiWg9vvmLsKaaMruf2JAqb7uHdBuaY",
  "key8": "2vcbMqyUkKxQEahc6Q2fjBhqtj2LgpDtY8bgC9c9iZbS5TQcHALUY9mEnFaVoGBY8qtz9kZsoKNhjFmhabGjeRac",
  "key9": "bjHyNP9n7hgL5CgDtryRFA2EgGt5iDwdmge2dhjgZNA3XLyNPbMNx3Wcv2BdN2JRLuyrUeKJhdx3Fjm2yY8svid",
  "key10": "3ZuzGPWfP2BxxA6KuVhxVVuWoCTwpcntGZXhyVQYUFix1K7XqZ9UEEg5sACJTrqd8sVBWBbkgNh5nhJ1mqWG3MAv",
  "key11": "5pNHdepS5PzhU18sv7Xtn8Skx4UJ8PrA5uYLUVYpwS43WY1quFGSiHqjoVD15tZbZhP6A1d4A4yUGFwhrDiH6QEV",
  "key12": "Nj95hjhJKWmfnVrqxBDn3quQgA4oZ24B4aWqMAM8UW2YgE76RZZA1EVb3dbPEBaGtt66iGgWubXFHtUucFgKwq8",
  "key13": "551t4AQqqyJiG2tCmTdoAX3V3UaNtkbfZyfLmxoFnfcX2dBRqfHWLQwuDnxLnvPKtyUAoyFoNu44SFnxLBZbsmVd",
  "key14": "2EHfuJx1YX3orkDfsgZP3i72dBNhEgWNgBprRWTt4Ar3WBiKdjurLm9bRxQHYFZJzsENsWMrnZYcHAGr8gmYFDci",
  "key15": "2emRd68JKS6RVDQTVMyEJXN3yomvr16A8yke1uJmHNis31AVSDGqkqRcJEQHmTpPxCT9m598UNztW5w7RF5RyfrS",
  "key16": "2tepw9e5H4RGNY2EQHynxVdFMkeoHuib9FLMzpazsKygifG5N5EVfPhb44gFDdzyXPFXvNDFk1swrxHMNnR9Vs5o",
  "key17": "5ovJjScGTSgSusqjpfRNdSVJYH6mDkKvxAp5UBeJu2rtGuGjvqVe57jacNZVgSLU8N6XmiyYkcQcZjo2GyM8TL7d",
  "key18": "4cd76GBeJWCGaJgHxWZYhgSnpg3cYBps9RcD5qHL3A2iZyuuBah378JRnxMeozBar9QbYqty2wEfDPo6cLJH5H2X",
  "key19": "5HjStJs7zv8G7SRBV6FusyG3eR3LJuwQJknF27Y6NCmjoD5ZsmP3VaBmTh2AVsTqJQPezyD6MZdAWbWRyYB9YuY5",
  "key20": "mQE2TxUNAA3T9Esp2ENfKoZiEZawWmRW6vV2PAiTg6jhv1unASXyRgeasb1z1xnK7cyDaerVZq6m2L1vCRgUXy7",
  "key21": "23VXaU9AuJy69yU26xvT2rLJS4ewELpDwRQ6CwUqFgYmLsBhHYabvoJfyQLRNDg9XghFwMQ7TDrsYw7QeyWHzdfK",
  "key22": "3SFJqPwFpgy9fLbtsrjtM5YZEkwHUkUicn6QoLt2ri9Ms64Qbap5pvkcFzP1KtZSCwMPkq5cp7gTw8rYaGjdk6Xz",
  "key23": "5gVXKbLySr2fDQix5P18oi9FyeDniuj97yov7ptABLqGWF4o2fgC7Y4BYxXwzWEawrW95PZ23NaX1GAPw9B8eL3B",
  "key24": "3Ksq8Pg6VDcrTyF2u3qPqPVvuFq68XWpQWYGXDGHsbC2ydNpKekCnP949UfAeKfGt1E9K2Cw2eF6Uw2iVwbUs7kd",
  "key25": "67mTXPNexyUpN29PPk4LZqWmZz6zSxgrwvjsuyoTQfbS55Vv2ETCCcCjAF3tM5cFyRpMPJortSpwJk9m6ZiRZY1K",
  "key26": "JZ2s8APL9mKJ8uE6H8W45XrRRun5H16Mdy8dbdcV4UKWE1BrabLVnWp8XdEz4Jmfuzn5zcwVaoJRa2UCWdDa3Hn",
  "key27": "Xy4awSnser7SUytQoGpJDPy4ANNCAZVyPXBtzDYA2PEVCWSNpgDnAehbc8ryCwpcK5jyXFsKYwmLM65mvXTEGEu",
  "key28": "5FiNnxv5N8bQQJFPijZtCFzg585EwErDkLYUPpsD76ij2DWnbA74ycJDdsggFB2UMn14tVKr7J3s4ZX5siDPEXoZ",
  "key29": "4LZYqx8Vv4fBSgAQMzENmWYcJWqcZGVf4eA423gjed9jrcqf58SZJ9Xcgi96ytv8kv1TnWK97gVUAjQkN3NacVSB",
  "key30": "5uvj7oE6JJhPXE5ohnC4jLPfj8nWKKJoeCaXHjo3CTBeucU56TfVHh9kMqWYDehmVoqkSXHSic8mqSNV4ZMjxM5q",
  "key31": "4UYsxmEF7Ybx4icvQdD6UzdYozPjXzPXaugjo6my6T4iZFd4r6Tyy1i2MxCb7AJaVeTqi5kR5btWS1Ro1ksGB925",
  "key32": "3Q9aqid57pbhnWDKxfehD9avsq9Cbijx1KWfGt5ScYvVzTkfnH2imLyfLH8gh89sh6tLNAiAcRku5MGrgisaJjLX",
  "key33": "43L68Mdr9LqitLCy1RQbj9SLdL4JFzr1jPx6277mUAkKuV4KFx3QhZcinfLtXJ2e7J3CFfnYyZbw2SpPYDXkzx8M",
  "key34": "5HGVkreCL8JS7tHKa1KUzKJiDjF1zcJXd6LFcEAG8oP8pRmwmCht6q3bJLrZQW3mACqMoRCsiK9qoVCFEJSoHMoV",
  "key35": "4NcGFsKyRD1kEAFALiB1ijRxz2wtx5aNG98etTHFgdWNrekGebqok1KtBRuorXEoeW7Cne4W4dLBUDrg1kYLWHh9",
  "key36": "5WCzDZdtu2RquFiqK5Lo6NSF51hanQdLKvjAdThnAvLDV4NusWoaPScMRedeqcEvqUn3xpSzkkVGjv6EKcD1Yuu9",
  "key37": "2JmGSs93AN6RFHedn1cNnBQ4iDip11U3nQi14M3vcCiaAdQ59VJABUcgzsv44uWEVeaPeoh4MD17e7MkL4dAhED6",
  "key38": "4nww16ZoFEmxSpDG8tzyMjLpJzGouo9cooAkistvhUzL1tDnw2Ug8B68zxEwPrMCALZcy7u6EvR8hDpk9Z7esEkn",
  "key39": "2Dtk5Eczwn12Te4cWzwzwCX6YkDqncTxcADWJpmWUDBMASwjPkccQmNHWZfrpvPv8agHLbr8EaA13ozdwBF1PFCt",
  "key40": "2bm1ow6BytT7iuANbGQpZo2i97J7nriVajRUh3x6jjRMkgtWzZjBmzRbHZfutBTidhL3H2sNLKBzVHExnN9K9zzq",
  "key41": "4RdPQRifqwuuHfFchrdcBwNsixYEMuh4kg2pQmpUfAm86xrpxP7A1LPu2uapQN7RwR43yCi3ruvPejRCTZqmN9Qe",
  "key42": "4HN24W69X3Fs3EaUACPvuGFXHrDaFk8qBKfJXLd1wHzMFWppiMy6dxRxAz9eQ4G1BeSRN2FZdHkUjbqMUdzyrTAw",
  "key43": "uvp6TUv9Prf3wsyAiers3tSQjn9efqpPt6KqXgrEvATxQqbEhW8sfbDuyg5cUdW85oqrAFLpew4ViFBK6Z5SMuX",
  "key44": "5VMPX3kKiA33DSz1vtxWys6HsavVzUjHtrz9zR6qTKeXQVQeCN8XiMdTJyLBDA8y3zyQs3zN5nppqi4De3yRcgnM"
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

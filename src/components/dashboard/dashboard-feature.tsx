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
    "591NX5h8d9wtVzNGuBYeH4dJTaS5oNFShHV3iDZAvxY7PburTyWbxQezYGPviqAd1TAuyXnvmtjGFDfUtERSNPb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKrFSFzoMQBAbztFtTaBVH5srPPd7SJnP6kwqtnzScsQDvE9drv5pQCBmhuqGyBYu9br4Vui7PNh5cvy7UZiFN2",
  "key1": "3C3MkFVdR2qBrU7ye1vBN2wPGkQuXVQ9584jtxBkxyw2i59P9sfLnm64rbMPZX6NBxD3J74sZgf53PhJFFCpsNMx",
  "key2": "2TqrUf8QihNxAvK3b25GataohETo6anYaV3EoPAfCgKPiQ8Lg6DkmEJn3LijkDxTmGw1Q7kCxKPaaJo4S8qHvMfm",
  "key3": "55PdfiT3atJo6xjJ3tHtmrFJYCxMaHcKWmuFtBGVsktigfMvRutkaZRDwZoGLxCvqjDfe2Lya4HXezTnmU2GAfBj",
  "key4": "4Mu687x59AjjVWWXs4xVDnp1EKWiNgXCaocW1qh6KnS3yKKKyyof9NYdcjcADMTkAaV9enrPMDrM3kkTe5BVUoiG",
  "key5": "C8cNWWvyLVLTQgbe7AujNrkk2FeJkswGjdKWg6dmGHjBNZqqK2nVdDi3kEs8jyfwbjty43xrGNPLAEvdjjzafqD",
  "key6": "2hxegGbpq5XsTNh81v1jhLm1YC2zrwTwtAwpQ2bxGNBBbFEEyrVfhMH5ApBmmLbuWmGnYjuC3hyt3N3fFkn6Dm8Y",
  "key7": "3Ke43RX7kRHHEP2mAcEvujvKfKrV8XN83MwLB1rfpDHx4YYSgpEiEKe2i6XU8eDgzKSeMbKMpqkVhR6hWA92x4WY",
  "key8": "3PRmz7GfcANbuGN5mMT6FEaVRbWPcfHuSHtbc35amF2QUckyK8TnTcqMnhAVGDm6xUGXdguEw65TTKnXifqQs6Gq",
  "key9": "363PgcvkVQGjMdiGwpQkffEEqYwfQa5WUvayS37qMgtsGfD3PZYXmdoCpDH5DJ5za7nNd5toELswSuTjXkRAsFvi",
  "key10": "347sS3PuZwbeQirT2G429AVpBWcnHqVHtei7hHbWkqjFdUuFJAuVq3jKqtTK44XuJN4pYJmVwfBuCjGBPXmpocZ",
  "key11": "5BqvcqpQKMkw1vTj4npzhi6GNGkjEU9KtYDzx9TmSmJnnwC7hRhA7HPJFkcc1sZ9xCReoTQxtpuXkuMU7TDGRxXz",
  "key12": "4GSugELGmjVn2x82ToM9wMkdQ6wVqxyeCruTMZeaKrq1Ac3oTvYtnXfVtwwBSh8cxoiRS2m2w3QsYZCQyq2PyUbk",
  "key13": "37eD2umnPttZHrYBFmdLx2A97H4QVEviC1Eur4diDdmZYKaSfFnQZFszQ76HYvz22JWLz3hrijH5eiaYYdvqMvzz",
  "key14": "2gZBzTdW9GYGmPYKXL6NR6NHddMomUsCTjAryrisvLHvJZq3Vhv5euDcd1tyvoTPWYAnoVnHXi1xaJ8QZ1YUNGu9",
  "key15": "3RoNCK5ehwbt8oLDUQcMQ564BZbjPaM5FJ92ebnrsU4hzqkhZUxS8YUzYNXdXdRzwshQNRqoTcSdA2eV6QfgQtss",
  "key16": "2iVsyVwZXAN2pBQDDeRR3YnuLNuUK63foDgNpAeCJ2ZeRQqjtc61Wn2YV5BGtJoZ7KmrnKwvZaxwALQgCXqq8AuC",
  "key17": "3vPe9pCkvNYeHT5gEnZMnx5wBAGDfb74Q4GSuAGtHWuicZ53yinpHfWRNnjBqNEh7UpYvBGMfnZzsaPTY8F61n9m",
  "key18": "iQB7xNPusgjcJ5VsH5vZJyTp1N8YT4nmc6DYYEQUbVR4mBvJpS3Hrpa5u5dEXCHsJStotKDvABki9YnmgFHbtRX",
  "key19": "54xTSqhsb87Gfo4d6hJBV3rqr7HQ1s5uTTQYfwhknMqGGx3qMBDhRXbwveovAbPrPxjTkQSC8iKtM7MNCB3Zq6oY",
  "key20": "3zaqfxKRXwj8WMKhNQgkgfwUcxEL3BMyY3DpQuCjy6E92rjaa1FGTGY2LMZbXi3SXDHfUJbBe7kc8nQyHX2m2tBm",
  "key21": "2hkeZbLzN9XVLXSZsgBnUaEevs3DAKDZ4bZ8ssUy77qEE1pvkAwTwQxNzQUWhsfscwumDsssNHQXLekkf8tBNCGq",
  "key22": "4c1DfNxeTp7WMiYarmJ2wvkqie1iZBCeSnG9DRiiXncxzqWUqZdUXYNbh8wNCJ9obcmvQPwQ1SwT7qjgBJKC4tjM",
  "key23": "3H96g5aCXefXbLgif5fvvWnYgXF2iXpzzfGkRTD4M61UjjTTrY6V3v3ZwLMnN9XKDRRCNLRn9zq1Eo74qMpfiJW",
  "key24": "5ffDFLjSD8rZsmPwRTR8pi22immxHWwNpVv2uuHsupsxmnw3WE9nhoaFV2cTDjYDsYECEQAtEgf1tA8JMdtBzUh5",
  "key25": "2U2Jd9XpkxHecA3cnyepvWVnCGyAoDzwgRaCzpboVUJoxv3ggALaEWJdVxJv4qNEyzd5DWYvo9iCZcVV8ttFgFVK",
  "key26": "2FA5zsAUzzki4YYkDaAy76atbPCeak5SQfzMdNEWbSCrS88AzwWdPkRwCszDtQij6s9Cnk9Jn76md5eYdt1sfiu1",
  "key27": "5Sd42xh5vjVsKDHNmjAcC5pd6CoJVoooH1gQSLyX7PiS3JbyqxdTe1258zUpdXgGEqdGownyJENvk1wFS5NaLzR1",
  "key28": "6ZujD3yTGkAv3QSxqjdPMRcnuqVxQ4tnQWjk4iyRqW9GE6Lg94nyw5UZUbjrk6AfSuKNburbQc49HCJ6U4yf4bS",
  "key29": "4Bmkk9W27q8eXzkeZHwLziNFgA8gS4dBVEoi6Mkf8ZL5hgLDQy3DrSKY2mdWL3gQQ7EYFNEtahUwdBhmtQfK9JRB",
  "key30": "2nXsdM2Ew8cXoFEVYZfKYT5Vj3b479w9vmbiLTUHd2TLbr146FXrYFnF6Z6h83BjmTpk6Cmme9BfqnbJ3Si3NyqQ",
  "key31": "2oYpCAm5WHb5fnWMoAM1ocaqp3tJJTHTyU8vZPvRC9cEyqbUcaz7FadycFejQUNFUMdqpnkQ6hjH4SF7NvMRRHFY",
  "key32": "vyk3ssVn4wtxgG3gMGbqjRpDB2LvCdKzuiuAtmdLqN7Umi94FZchyxEQSraVNKe3cVsftH7A2Kgg7s5PUcRkpbB",
  "key33": "2GXhYWG9LMZc9LCH1yaWJrGi5fTmUwzZCh2EvvcMe1Qr8bbkgWVjZqMjiXCCTr8rYSDqLBPLbf24TWrT5aGFsQ38",
  "key34": "3jeK8pFupJaLo8qtdU45brEtpVHujdUwMtVLKok3Bh7YPuUd7nAE99q1iwucWc3ZE9m6Tv3wyqXnKzpjbD4HsJ4d",
  "key35": "5pYHS9FF3dWQrrD2VWocc7Hp4cqHaC6GGiTSpQh81CBtSsV8cnbmwjJnPEAnYY7GYqU7dZ4hBAmjL5bAZpkrYCo4",
  "key36": "5LHubmKo9BygP4p5zbd5XNGRifP8g4FqJoZ5EkVzN2FgPpdmLWQU1zE7XjrQv3uAq1XRXH4ZM1o4R8queXoueBQW",
  "key37": "Qvo8RKGN7bxPnEWFSbQ8bmWJ61idGQMACvKQZ69FrhzXaamqSXJ8wKChMqrKEarN85uHT56HPXdW7nhbwZjCBGg",
  "key38": "2wGuXpA64pRQC8BGfvPXSVBzfZ4mZ757fkRFenBQZqBgom9LjPMmz4FMWpmRWQazGCBuQ8TSP4uLzPk6UD9pFHqU",
  "key39": "LYqukKWx9dgV3a55qg26Ao9YJ45ouVBudCaTrJnivLRNjxx2TgQ5WCTCq2kaEv2RBbwzMGdPs5SPUQ1cZKkwvYV",
  "key40": "5JGLxxCP2HVXTLK9dX7qvSGN9Cai7xRZvyeCNnYce1d1MC8W1rYramRpCdU6F5Pn8UpBiiNPFNDc2LBRtustcQ2S",
  "key41": "JKddyMAvESAzufMdQsRAtgFWsFDHh7ru3mRxX2QEkJEM5PYu7KX1ni44SjGAaC74Kts8zAgNnXq39qejSWoMnxa",
  "key42": "2eDkGtwKkM8C8Em4x5q8HVqhj3jzhYTMSJ17T6mNJr2CV17h1JRqx4MS2yma2cDJ9Pd5sXkLBunEBybZpBaQV5Ly",
  "key43": "2xrWuUVhteFPNSMSUcRNiecaJBkfV5c279k7yBVuGKExqc8L3F39itaji1EYA3HT7TgjUQ8KXWGdxYqtpdmYysVq",
  "key44": "5U638ATQEPndQS9HfgLPgL4PMzeKmQWgFcHwxvihuDTHnnV5eceSUsfv2NUdkUGuQ3PMRG3MxSKL8LVnngXBSrfd",
  "key45": "VrM8mhVRwhQmHd35cdTm6AdBYKxnkHX7McSo3JrjPqQ4eTwjo5nekYdr23gqMd6NPrkdHPUU13Ajb6qU1BkgBw6"
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

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
    "3tRfS1unTmmKvzSAuDXvqrmHBGAyC5cNQ8oyRxmggPefa2hAv2NRAqxp7Vn3JdNVsripPcdw4TrFZ7sSBYf4Vyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJSKshdDitNTTMHhBRGDytGCGA8dw2jgy7hQu3yqmsrZ1ZLr6u2FUBkSsDNwJU7zWL5JGSNC9ptkJ5wJcRCi4Gm",
  "key1": "2ULTTFwXpSFuLbd1feZBcrSULD9JUrKj2cuR4mmtwMfP7C3X9YGMqWDpkDuU4M9ktPrBhnKZrv46aCnFq15XhXrQ",
  "key2": "4LPubRCL7PdpmQKQkQNybba27MxwmfuAtzvPkromsASLYKFYxPtdtvDaY3BcfnYycWdGnPzbWHg3ibPRcCuFkLSC",
  "key3": "64Kd1k4d19E8oQBwqroW9NujaS8ZvbFjs47stjfuxp1jjdudtDfgELGeRg5onoNg8NeLz6SkhVpoc7EYatHgmzeU",
  "key4": "67mYt9ckAZsSQP41pBzXGd8cvvFyor9hNYacNLdyHeAtJ927dZStcZGoHgd7FGgx5k6caeRnfvvLVjgqWHk7fXt6",
  "key5": "3SPPqQ9y9pjyGX4TmeyPQJumjhiuUzs2SfDB5S4crqZ7WoRtGYXWaKnQVwy8kwUczxFA7a5MuB6re1D5ZeXTUf12",
  "key6": "4PydW3TovV1x3531joYodeezWH1y4NL3Ztstp4J4vsctVCGxYzWQJqfDnhvPPcsFDS7bfen35oWrGX9GJ3JnhEhe",
  "key7": "2GNdKeKSvKwhA2gBSZ3fQQyyLV13b3cQBaE2i5uxW58gdtodyfuvHGr6gCs6AbT6msjNo1S29xYMMJiNQUyE9Mdh",
  "key8": "5jzp6Q4uyBedjGYXhVJB3WcGEizpPonugcd7nrG8euGcG8fLiNyyxRx5UUMiP1GmpGX56ib2BbxdVGeix4Km2T4Z",
  "key9": "4DDrtvbreK5qiXyS48DVG3tP5keQoXdjZgDRQYg1UZE7s1YXMWaAzh5cBcsGbnrUTHt7ZifqfdCp3Z1LuUEsbaRS",
  "key10": "4eTLbGFbgjoEbdGkJV1ftiVhMfPYDuuzpKBmE4LiktmEaVvo9j5onoo6K44na1XBw9y85Hjcm4xTC9AcbtvjdYSC",
  "key11": "2DZaE86jqcPiFtTFmDWXBfRiXhKBrWfMPSpMfm2kUbXA9YxZkRaXGa7e19i3YeEzQRhxuzPhC1bur5cpf6B9C9Qe",
  "key12": "56H3H3QsKGpprdDq3PTYeDyD31rFgTj3mZSvQdxp3qiX74at1gzQfwrUHQNYtAk4Ja8udFbmZNBx6a1Aj4v6WAfZ",
  "key13": "22tRhtg6TpoGFJWjsvYdmrgg5qgDeVrUQ8VPVh52RSFV9fekAX6mB7yVaN2dEKNR3C25vSgVAti8EgntnJchMPvb",
  "key14": "ZkDBjSiQDZMYG2PnSjL67pXxu5sBkQAcUNWz1NJyTfwxdtM7pUrazeVvEgDK7STz3dCfQDecPp61kcfbP6vLrvz",
  "key15": "3kJeZC4s8by1jmEDax66zwvk2HVKS6AZbBRkX8HV3GY3ZuYd7ADayQZPhVNmU8Rwm3mZ4urQC98APheUJXcJicUh",
  "key16": "67GyfbCmAd5TTDiwCBKzXVB56xngheNGS2J9AkpTjvojD3v7DwCiLirmehNngrTTGGBKW52kwRZMFQy7ibvG99nP",
  "key17": "4dbghrtKhwApnsUvMXVYaFqKT56GVb8ZPdiYksphgtoA7MCde7Pdmpm9iABVihNJQcjx7So24PaMs1LsExrGknTh",
  "key18": "UG3bRwqU4ZepPVhBXyF83RjPA1GdP6A9Dn2CWf4kiJcLab9xHjFfDYXZpYU6PxKn6LgzdfrgoVRiRVQa56mLp4D",
  "key19": "2zNnqUM5ZgGhB1vdbb55FLfditftUTQX7XsxT8dCxXFSPUuqhaUHP1NUXyNqpj7crh8s9kwuoFXYAAGjTQqbacoy",
  "key20": "3PYPkVdneQFpXKAwU6WWe4Z8QXjgA9aS1FFKroPRbYdz8uBXRxJ1TmfSjHkPGev2QjnxZhGadd1guK9yugwHaDix",
  "key21": "4ESdWcoDJfpgrxJ2T5naJb3FpBdfLZBeJce4hXY19TBNhTNRskQbdssCCF8h1qPFN2uCFoSdvRmkddDnFLAt1Fx1",
  "key22": "64oTEcZaAMSgbubGq3TomZxyjpfuFP69oBjvZHW8waQfAgwheASVLsNcTorYHdRZAGgTafHfVDSm3Cjv8W4M3cXc",
  "key23": "2dP7ws5pcsKWL2fqb7gSZoRjjj3NQ5J7YjE9vZ2yqTqUqfmxBZC3whU8KskZJvQ3aSDEAbnYVmb4q938gRnt69cE",
  "key24": "4XntNVCTWYvVr3TLSgqVShcijAt2xn3kMxq4YFLivhk6jdxXf1DYXHASVYnDJtZ9u5Heb7d95uzQRRBAFB2a63Gb",
  "key25": "aa1TedX5aZH9Zfpu2xWNCWBK7f6tVtmEed2cNQ2FemReXYqT3yc5iRmbm7SUSMEQGiifwzjg8289mcmU1K562xg",
  "key26": "ENB1DJ8FaNFP5JqkXDmJStMkJv68FCRYbDJw1i5mHX6MLkpqpQgAi8jwuU7MpxCKiJwLHW31DNgnodzrdAkVi9v",
  "key27": "2P11nQryvyge4UUNDnsNYn6xRCGSYyZ2dDBrCQS5pSU53u3MgWxw6WM99y3yo6u668Nxp291QBKr7wVeykd2fDMy",
  "key28": "5Q3VMmRuRxv3BrMLojoSDaxjahyFD5uEpHQW3NUNiv1vsQ4JVLA7prJ8upNy8gsoBXoHYWScHx5bD8QpwkE7jE1g",
  "key29": "QVJxmfKCHvcFgZcZR8oJ2Z6YnP7ntHu1hkvmgqnnrf1zuCqokYJPg8NvYyo9o8UWHYrETRVXCxVi7DyeM4q5A9F",
  "key30": "4L7gDtBi2SLi5k9MYSMePAonhBzT9kbcbJo1ATJ7jSyytQmk6kfm89XdrQTiKfvS668hmwJLV47NQfzpNbRRwG7a",
  "key31": "558oFTSsujhwF2dh72LxTxwFYELhxkgCmTmxbVdiTJL8siV4fxW8fz7bUpENo74KZyFpqQxBuc1yUGPSCbdmxtrq",
  "key32": "4WR2qoxFWL3iVLS3RkQ2ZA18PuN6RiCUgbzSswm4PzMHVwoZumEF6qaKot4Z8VrWQAzUpR2vDZjkueWBEZ33bVUV",
  "key33": "3jK1Ceg6ibp6CeHYtAmS8f7m8AHamrKbhVRmtYmeokQjfRCLXXCtofQnL8731cgpmsTtQvNz5zxivz8Bt9yRBjVy",
  "key34": "5d41R6Tp9ywdsRCVSvP5hG3t8M5DaUSZy3y357T3QethRTH2s7oqifbxg3QKRJsBoSpYJtmVoHJyMBtZrYP2TZMz",
  "key35": "3nDtu2RyGnvSM8uPYpxbmKsF5iUvQ3k7sMzbcHhS219ARtmpGeiNUGkfBhv3umW2Ku4KRz5D99DKUyAvDhKTKXGk",
  "key36": "5eMcQK8bGcvmgxQ2cHVNj1xpTPgz9xzXApsnkFauvUvUuaH8AJeohGsKaiJvd2jSYNszeSrmsfsPqckSNLhTpirw",
  "key37": "33TYFjM1vBTEbjjQ95Cp7LwqunaEME1xfZ4gSRm3somSVeqU77kQCkfMz71tmS8UqQScdCwgmFzmG1N9X5aSpsq9",
  "key38": "wAeCJ7kdcFEtSmQrHFpxMQMCBbmFZowKUbGLwvJ3mCZBF25iLMYzocM6LcxTKSsYMbvHthRFVXtQoV7taFcCsJx",
  "key39": "5UmpDvKxU47fxB1gt4nEDr9YzACVPf36jCH27r2Sm56bSJ8yDsEHmYVWgj5ojCC3bxmm1QPiXosdeE1qsxF878sp",
  "key40": "42ArjGDPZpLRJ3hmai7bMdTG7oihGmwo38REhGUNksmHeq79KBHDeudyynWfWrv7AGKEZuGksBbwqt25ryH4AQc",
  "key41": "bF9M6Zj5LEK196RJqvV1AmQyegm9WLw8ctvAuf3YfmzJkdh8CgdibarCR5NK4z7pMQ2uCSpMtriuP34P5wuno9G",
  "key42": "3aqRsrmKPRCnSK5arvf2Vazi4qfQysty8qU7wiz3ZYYJfh6rHFx3ymQRtEy9Zwp5JHYapuVtyC1X74dfWDXAyBJE",
  "key43": "5c1PUMTxAwBLs93Zv9JJ1w1UFfdtJA3XZ26WQFLd1wwGv5UDN6cLz9JKzLxFqYgyifidU8LjniY3dQiUfbYtqzNU",
  "key44": "4R7SMnCQv514eShcKZQrgVhbKyEa8dsfQRnQ5o2aJd3CpXAkPitLhNdeQjaM5vhtMtW6j3p1a5i6L4vCLBZga6vX",
  "key45": "3RYCJmW9nFZtgyMYz53uux99tBJFqugAU6XdkWY6GSQX3LWSmoQDmVxStqnQYTBvv28i9jBQZU2TracKS2hos5EL"
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

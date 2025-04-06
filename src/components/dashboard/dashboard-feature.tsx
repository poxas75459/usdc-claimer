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
    "5LUGfpi1dXNiV1D6xSVcSwpQA2mS7rsD9jqavgUmSovtyJtofmtKchWqWHs7rwmBULt79UXEfpAjp6cPeKWAqJpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2vmGHNH1ywDUPeSTGu9VVvvqFyzCXVoNcXBpNAGvGhK2eYoukYFrP5PzgNBA7n1JGjEFZFs11iHsJJnQLxL7zq",
  "key1": "62DwzRXQCQ2vfoJXpr1va7ar5pUwt1WevSTd14eALyEt3F5PAe9foGQQL1S3BkiQFPUp21sXidURH4vTS2t9dFHa",
  "key2": "23nHLhdQ9GaWwDaakiw5Pihq1eCHzVc2roCxs2qtjWRJRXyMRBngFoqKrUCM6cghyw4TYBxkaZv6w8UiVKmq5DvU",
  "key3": "2girivevZ26hGGbis72prGQyiwBYmxFBQyHZmDXnXGUq38f6m7jPwneBWF7bzpPkphNES6FbMoKKwWj9nyMsLWpr",
  "key4": "2Kp3Di19mG9APo6sjBfpfhx9rKrfibUuE7jMMeBvfXLMg7Yw7GU4SRFc7CQ1feVzYzuDNcgZV7PtoPwidQgMRizp",
  "key5": "4mAcwmyxgxYMEACmzXdiEbV4HpvC6MVVZfJxR6yWZFX457qj2X2aw48St8R3wcSYC7xgp5u86AG3Pp7psXxLTuZv",
  "key6": "5fQmR7Nn6xD43pz6JSJdYD4WGdT1k1U6xbTGnWwbBkadhLYz3yCTekkBGDEQiEHyLeP4gNwYGcZLCNx5RLXSWesp",
  "key7": "92BmphUXpwDG9HruPXAPd4nZu9rhJbLYURpnxjussBWKUR6tStjx3pZShZ9MSizyAbsiG2i2mHTQLfZshL3f79J",
  "key8": "5iCsqnbZv5csqskwaZMk6DqQbCMiy1ASLtiFba329RmMfaXbLX2iuwMhKQ6VRGpegtQ4vKHftnsjhEvsDKUwgGBB",
  "key9": "49ZmJjAVFycQGqYqvMt8QeEYPzDEQ7iKqfwx9haE7JMux522MUiRZWBGqoJWkpsf1NmKReHK9Tm6eSbeG2p4FhGp",
  "key10": "65PU3D2fYLaoJnvnUeEg4tuYiwhwawnLjpEmhmvNHCfQ3crxaR8qxxad5uLLZJtpxV8eevcZTQFkBaQDpWny46nd",
  "key11": "5Nhwy8vxFZERSVkms8ir6yUnitMidECcRSQAM31VRfcT5SUfJBwRmNtPHaj8mMYswUQ39oRvMUYp72z8QJoL41UX",
  "key12": "4CPoYCCsN8kQ1dxNARWa1Vs8v3pk2NNRp7hZipJBpRZfhsHiv5G3ccJrxEZXJz4UKQGn4XNPhr3LT86uWLviAHKB",
  "key13": "2DxcsxD8Ck7p7eFqNi8Wogh2h7SsjX4BoZoN2yofY2o12Ph2dwYCAzPULLS6FYk1eFGumpMfjcVQYPfs8QMoC5fo",
  "key14": "2n3Z6paDgdxxiyzRdCvNSU4cGd6p6BkzRHz9BGhiinNZue4kgPUhKGZVfH9jwKAmkjUPftshCD6RsWXXaGxi6tvL",
  "key15": "2Zs3WdkZj6ezzimb9bNBk8qheQfEJ6zKgYvni1cfnahWPMEpwuZQ2dotsW5BpsXBAiNYMQnRkifPXNrqMkaPSeys",
  "key16": "5EuHa71vv7GxdkwsU2uuEuJkaNG1xTxa65jP9KbLnREGQCLMEq8JNL8aReqTKngAYSNeuFHxzpC7KwZ9K7jwtBLm",
  "key17": "3nC7JgJp1z3fWwr7mBJaDiUQncoXf7sjDcuN99HCzRvk9zD6ZsjHc9iUp6fukr9VDmwAp1ehc9HU63Hy7NLsty1D",
  "key18": "HfPS3VQ2GzjWCxnjTFfpccXC9MFXT37ye2owXdp7EVLWG6cuM5azieqsYwzZ8tAUCztACicVFeKZq5mdQatfzBa",
  "key19": "2sMk76wY8EUSKxY826hjq1pTv3nNDDCsH13siaeBPc9Ft2SYh8XV4FXS6yjy6r7SjC9B4JqwMX87e3Yax7yE8pPE",
  "key20": "4G83i9T3drY3YG4nN5sEst6ii24nykHpAF8sDJUKxGnLuuBSsdgdKPwC7oHTPvPWHDCJbriD7JcGpDk579nuseJ8",
  "key21": "4qUpwdkAkQMiz69X8sgj52Zd6KchE9HTbcb6ACEegiwPuBZYat8yKocfyLKubPVMvZPgpZHF6RdLCXUcCvouoTnx",
  "key22": "3n93xgjwMpi4uJLB4jtzQg4NX3x6PhoKKNRarZVvVHePecAUEiLt1MgXT1jABN7JXaUgpLixwzHGzZ8rjZWzVdzY",
  "key23": "4HxgRWMSRExhY8iNkWxEyBb6hTXmhK63bjSeKCQBLSgp2262bvju2fXs2psb68eeatME2e7kpgbGbRLCt1cccdVG",
  "key24": "31TgXYria5nD1kZtGbmNEk78pAFYFSRsyZCMApkwqYNQ4TgkYziQhxv3FnCYGXYLUV2jM4RE75ddoEP2eDjNnGpL",
  "key25": "9DH7PDjkuCXbc568NcQbW9gFeJSgCp4b9AJeTfZLv6wfmG7SXirKJ5Tsiz9WQA379JzYAF8KWCtX5sid71nDHQ8",
  "key26": "5RZu6u29dizsh34wFf5yozPnWxNzNBNMPadXEbhk7NrKmmb5kfQrw1aMZ9uJYw9mVBk9UjkMDiSx5CiHU9YXd2uK",
  "key27": "3hmWCi38euwWGFQhfR8yaKbEPjRw4dAo4CZNzoCEjiBKXS1Qm1krftfbkvntyVy2S8QAVjbBj9mr97tY2iXfwA2d",
  "key28": "4MdaH56bTCt35h6yrqF5bzZYsgei5k7nDcvCNeLTsiwWXJYqEpvdaTXo9XD1wFn6oztG2uVzuC8Jha93HfdmD5RD",
  "key29": "Z6CEzFLYPVAytCuPxJFZpp4h9AB2QKVaUJqmudwnBfTyou5PG3zUo1nraiJQSN6te2avXoAVYEsB3iqeNn6fcde",
  "key30": "5RK9gxwuDRDXmaVaw46ge17mr8fEmLwphM7XVzbLmsQFShqVEqXqVKsWVNQw8Xt5EudemXvLDk9XXQznB8vV4o44",
  "key31": "22pNhdpfy26XrpvoACtAHQGXP7PFMhPyrC64vWdQUCHnbP6FXPr5FuQ137QFuN4RK3PxQFSRgVWwwbHjMiFSpqMs",
  "key32": "aoBnJXUJJiWhup3cf4Z7q6vfDa98VydkPZrJzKAyUNhVXBUvseVGDGnc9Ux8ME1tbhGwU9xjnMgbqQVqc6yeg6h",
  "key33": "rcnThrFAUTHSBVTc16Y7wsf8irg65wYcsEoqZt8c7FojgTveZcAEM72SmVncmoAeq4DN8TxxfsaU8HuzP4gmRtq",
  "key34": "4w93xebyHp8hwFzdtyRgZDKiFdeKVqna63qCDxmWW1DLtPno31Sn77joWPQg1jFr8uiqJXxsg3sFn779bb712qEC",
  "key35": "2E265z9VT6t6SmbhGCMFkbkpSA8q2Y6CxKzKLcbKRS9y3bgcUtfYEmN2fiQJaPTt4ujgkUxWy9VnRBLnegTXEK59",
  "key36": "3CJuq6z86LDkg8HbTTJfiQDt1EC5Eeh5YceryeWMSVMKguHVBwVx87JtKQ7gDnCr9gCVztGRwU6x9ifMPaGPSD6q",
  "key37": "5eqLDQFNF7BRGsvX3BYGj1mCBcvKLeF3H8J4QdtwTckpdHZra1cUgfuUEPC8HzUmJVkN9KJPHGANtgyz9WfpG3yM",
  "key38": "4KNgtADeJgV4ufWyrKTLSo1zbn5DUWsFHsASY2w61oWREydYbsmU6G8wetvTHs8eKpTWU4zHhoyQcgci4hem2ERK",
  "key39": "5f7cbK61J2Xktg4XvXeZDk3DqrHT2fKLMbqUZpcSG483BVGR6fPogzmdMZCArm6ZEeRXNhx2GvWLDCyJvjeo2Mmo",
  "key40": "2RuYbjsXmM7Y2BzH1okuJeEQtyBVz17gCsq6QBsu4dXJkpBWTyQM6jnei4xkxMfbgqtgTxK3DHH3V1dLZrbKycqu",
  "key41": "4R7JNF86K7uqbcCTqD82zEQbZmBGKqjYgvb7ZMPussSLFv3kfC268PeXJeBBxnbrfHPRFzA5qyaCw8mihDfxe5ru",
  "key42": "2zTTH7dkaKtuApKkkAL25K4zkkco53PcpPG6112GQiJotsz4wPqjUSsEqnfisVAxa8NRJy2yFiha2CUz6dkqH1iy"
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

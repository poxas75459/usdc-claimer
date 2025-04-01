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
    "51VxVf8MYqsArrJQPoVZwhQqDZaxfsbbmCQZe7djkS1JDL2abGLPafrajBcPZzd59fcnAvvtNZMM9huB9u21Xwjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DrEHz9KVuy7TbdjiAHskQ7JCbVPyn9391ArLVAUzWqh3mtQEZLAQ7e462GzJpvmwXLafa3mMsJSAcMpTCbxHSGo",
  "key1": "3q1TTiCJ7DRiepnP7HqEyJRGqWTU66GH5kYyYWR5QHM74Wy6XGafnx3u8WL9r4M5zKJrHoRtUfW6ZDbQ18JE4y3j",
  "key2": "5pea4rbRyHiUpes4Beo7j71grPHBGWmRuLbYtULUYzdcDsqVXRbhxaXarWP2GyF5J9CacepYtwRxEKugEcnDvsi1",
  "key3": "4bsB2z1yGLmX7sNe68bTSPPp4jBLff6MiRyL9gdb5aJvPhvLg1zffw4uqEdGwwy8KwCAxBGoXLX2bDBS4PtWnRmM",
  "key4": "48fVZRnTTKEm91jZcpHTR4Vyi52XXQirb6QhfgroSZSfkYWPgU5Qv9wCoY4Pbr2Bfa9LN1ErY45QjxYs9SaFi7vf",
  "key5": "4PvtdKr2oSxvLQ1vnGvfc9i6E9ZPAHvStYdoZh8Fpp2pecdgc4bLbhjLC5UioXdjt3Wg4WqhBCvk1AUWibzXhLs",
  "key6": "5MbFUFHrENF2X3JVLRBmpxEVNMF5NPx6X8u3VRxKR8Vthp1HKmsrzmT3HhNAJTdTonZGpLXFSxJmkyc93MtB5gJv",
  "key7": "3P8mHezcSqwvXigKDiR3nmfY4CNYtA9oDwP74fJ2XDSUAbpXqHB1wJFPNnedGEmCnG6wBgxthuypPqCsK9XvYAFj",
  "key8": "yxeKUjfPnsUFdeAnWYJgjk9y6ejHSxMQrnUvzSH3fV3VDGYfVAtiqLX4QV9mPFz2pVvXb4s5zpQHB2MkLsQDB2t",
  "key9": "3UuBpoNHFvLvCNEcCtnPUA7sTrWznRD1rRpdWVEUpSDU5vC9cN9Uio8bniLwbhkE9bo4eiZveXiYyYwRHHEwkbXr",
  "key10": "4EkYcy1chMWyyamjGE6MHAAyXcPG1JyxLDbYA3WYuZURUityhcsnTX9JCFLqYDmmCGZCn9jZUDyib3UHDtLdBnak",
  "key11": "616WGmRrEUN5izYdrfbHk9Gmy64HD6d3LUKPf1eUwTycYZs4GcAmh56ncPUEeTLpT447sxeav4oWA4LTKT5dn1kd",
  "key12": "3NARaiS8sLepf8J8f24JhgwUivp7cMXL6F29rZxxxYKzUaruXeKtoxPWByGVdjtzH2YzhGkMASTFMSqs8vCHz2Sb",
  "key13": "2TVS9aqWKWs9mMzBorM7ioXjBehY4ZcxmfkK2y4tTDXhzBJtHhHmfGgYxDbfztMqVVKorHYF1er8ALA3aer5F4Sa",
  "key14": "4afesXgHosziKxiBPPBJpM9m91kq3EhAonYPL6pfYdetHcmdwZ53zZyy71bgXRsafurZStbv59kQHXGDrcDY7UvE",
  "key15": "2ujcjTPMufYBWPTasSJcvfGsaCyZ8gFGguDqyJEFwf9CK6TunpQeQPVrm6oafRWJLDXBNJJ1yRJEJyMvwMQGnysb",
  "key16": "WfA95nP98PfacTEryGjs2iPkuN1wwdTX8vSKoj84WaJgAidyCTVPLAJAQDrai6kKAdGwqNyHKq1kek2FKi97MVd",
  "key17": "5ULXPjj3rioQCMC2mMkn9vHnfLdoMbQPoMNJbJSyJwJFA7MXCJozZ8tfZWx8YRqbWVy68MFtc74utRXkNCZ7k5TG",
  "key18": "4jc2JXQv3LBTgsoPhpC6BsKTaSJpNbugiBVeKBojtJWz1LsZUZN2Pe5h4HjVVTZoGPvkrK6YUH7cK38k85qT3zUm",
  "key19": "gzf7kSdbzj3BfnLkUesgvtWHJXj1FwkwAX42Z3nkERGHhwp2prJhYpdpXoiQuUhy6tNuMFiZq89fki9qzzVJsP4",
  "key20": "3wThNtLz7yysAQpK52jmrSpWdpxhiWyeJzmc7zxf41iajx112jvubiGrJ6hBhaGnSJva9rE7UomFrcsvFVy8H5N7",
  "key21": "3CpUihbjzSzaDCRwaduB1pAZcZxky126cm1RzYMQsLQ7NkJckJDJQKrYi4CXZ2YcAGpAiUgFqktJU2MuaQfpreKy",
  "key22": "tLfVCha7U1noe5NNZQKZRbYywy8h52QZjfw5cBM29vgjxrAMmE3bqznd66tk7peXGqZTtqc2Yuqd9KRuhGMqfge",
  "key23": "4YmULtEySFp62zGeiRMNiaFYuNomKBS4CNEveAo7YAPEHCQvhjymkvAhBMbofE6Y2QhbX8utQiDZqXaJjcasmvMk",
  "key24": "5nG5ikY25dymkVQUKd5GLbNRHL6zyHC6zQ9UUjm8DgWktrKYX49rubQoJrDLDviUDzvGJS6ocMSc1u1KZ3qU69W4",
  "key25": "4FLAWpgwgiMFZC8uoC2NHH8cK877MuN89awxubxi9mVxDT9hGu223skeYXG3r6qRHRDBzh9yMkBMTJdinkSEK3e6",
  "key26": "4zZREqJN59Hnt9cvtCQNH5912r9ahH7RAqcKzUiwHFygqnJFdSxKxsKgoL4iHo1t9SL8eDBrzNQJs4msCcBaFpJP",
  "key27": "7sft4k9pXbWJkRgXG8YgaAJm7xJNBfT5y6GEffk5yXLzoJSGvgqf4xDqybiWeq1tWfv92Cn7hDYvmBYiDHUhX2c",
  "key28": "3TZBekoJX63QCFUZTgpKDHrnE8omeG4FGAm96Tsc9UiGJuTWefM5y95tGMX5rXKgZniRFgYPb1Du4G1Pyffjq8h5",
  "key29": "5sfPDNBytDHimgE79sxzD5pqzmQjx5C4jNNqtDGrkH3Afi7CxmC8Ccmss4C4q9o2hTamsrVKDz7uyCKEhLqBNq4H",
  "key30": "4Vz6Ye92dFKEkVA3NTiSe65YooFWL2TRED2Z13fxZVjqFh6XXBmpyWAPRwnCCAvu4noTphQHSBdAsZJdGpgqkhyX",
  "key31": "3xQ4CN79tUGSEfoKTRZmNvENChMa9sDh1qPmsZzdLBBpcMfutwBJXHbxDY7umfZ29t9wAtSFdxdQJcGTkyPfBcf2",
  "key32": "4ZCfk6aqMoiKeToXG9tUnwftmjPYjNDwsnKce4a3sMGZSJasJqvCnU94PUibGZqDV3SjxzgFJxhD3PfYFcDn66Pj",
  "key33": "3FauYfUNTEvprKpoWCTgD6JLS9wKNXt747EaeV2vFxK7Kb86MVLnhw5tWDq9FrRqCTJ277dntzHYs73XWLQu4NGi",
  "key34": "4DJRgAnVP9cXGPUP83bLR192XwttBWMkdSXXuatBqDsabDkA86Eu9ZC1e96Mxc9fpxkXfhP94TpGix2drYbhHn1N",
  "key35": "4Cx7vedwMas1EXTDUj7qvurb5QP3uDaEfufcUe3WYrj2f15db9aLnTD9DBAczutFb4P4w1s549aFdXivCf91qdRS",
  "key36": "iXkPPyLmR6bzW3MkmutymugpGvmpHDg5VRSUP1XFQMHUC1V5Vjrmk3UgranMATevNwiTE4Cbgzcmd2V2yi2ez7N",
  "key37": "2jqNZEyKhosZUef5JjhZvmeevyNupNQxGxSJPwRztiges8dh1Yf7LfmRsduuXzh6puMd4Q4KwxsJ4V9Su4fdwqss",
  "key38": "2vmAqgtm4nLnC438tcFXCxyo24zQJqynG6iNjJRG9EbAevrobwgjBs3xfZcgUD1WaokAbThEUzD3voTzuTp5dDYv"
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

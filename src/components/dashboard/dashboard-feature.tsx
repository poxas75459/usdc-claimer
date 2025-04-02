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
    "56Ws3EvFiGWzud8H627wSrti6PCq8Q3w3PJqEXVLU8Eqnajc36RG8A8zt6kfnw1dguEgJJQ3bonrBZc9siPLyt2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oa14Qn14sgeNW8FK4h8BQwLYCHZ9Fx26ajk2Emr9nY3i9VdycYCew4dMB9zCtp8q3JvpdV9j175vwNqWTXyBMVL",
  "key1": "LgVmR8B4PtXyzLY5DK8oaDz8h4NWXrJoKANzkdn9y2VU18HHSu34uD859VJTVmQuEEMAf7u7QXGTgEsA8CAYoQD",
  "key2": "2MeH9b4vbnLXj6NyndBtLhRBZTfsG88xGt7cfN25BYvsbTJhW1fY6W9gxH9eYhTpqbmTUWEvokXWWHXW1do2CwUC",
  "key3": "4t2JfPD5geoLdjkznn7CK8kVVVbkshD4b2kcnycVJuLk1bPcSSSZwFt1EM3tLynney6QceSMwNauHQvSB4fXD6QK",
  "key4": "4SxKvizCzvxXvGANuDc1q3x5siCCLai7vcotPKoVLRwxBuMD6fURnuX3znA9Mipo4C3vYuKTLZDEnjm7qAiEfRxQ",
  "key5": "4V5sU5FxPkvYGbjqGMGP4HauUBkpN2Ps2U9J6wSVvL9huYGtzPCWVpoQ9GbVvmG2gaYBed4e5L5vCz2ze8bG3oHz",
  "key6": "4HggaeKHNdXdzHTj1LVBukZKrovFPEsqJsd35AgVX5i7WHpFeBtHtGZbiHAv64SvZf49deWYhj5GhJcMfLFQqZSF",
  "key7": "35JKjMUw6XWs3Bzv3H14teLd57KMLxTiaEfnZByPsdJaf5w7axhBTeAb95FNLCZBxUoPWQtXPvJS6Ld2Sa4W6rsk",
  "key8": "3BNdQA6GQMjYVRyoM4hNP7XyCKR1gTzfDoNgZJz6qR93kRmPprkfcmJ9PWHgxwyeHwJb3JNMH6oVbNT4Zcaiy5Rs",
  "key9": "49T6QB88GVtZGdXsWix2bwpkEzK18YF8nwBfMZh7G32dNn3PxoFxV7HtMqtr4uxMvqFmhhA9913uhivWKC9qbJqd",
  "key10": "4Vdchqpu6Wz9P56wp1YG5pEnv6YzrTE4JFCscLd3QCT4WV6HyvAeYfK2Z3d9RTErRu7AMYEmGJR71mYhctg2ztVd",
  "key11": "rGBaL9uHxCBpyuKYx3ntY6VdfoofMvx331rrpXEKk8RJztGUcP1QAwpMUjkfErNCebSaP97PsHu277GzuKzxJxN",
  "key12": "2AtpY4M13JbFVnGjF1CAz8FZNKatcdxTmcFUeoHDwue8PBuiG9sFYyiMqdCchSmK6jNiYcHTxN7gKA7BsvBLuzjN",
  "key13": "5cKTuHq8URKpt26DNtDp8v94vLpYFeKq5r3rSiB49UaqUP2pu1BgXRPAcJBoF7AYu5Ei1mL3tiUZxUXgRcdxxHDq",
  "key14": "2dGHJ791AnarRfwsNKsvwG2r6dRST2xLE5LzLcxJDqY7rZvsKdnBcTsAfX99D5gqiTttExYxcjcLLvKPEPzMS2Hd",
  "key15": "AgfheQJudYWtnarsgyA5rUUq3Ff4fWefN2WuszR5fcTzzxJXhPSEnGZWuPUj4Qb2DuDR3QbKAUeAbbGy3wDdcEx",
  "key16": "2mvpyAsDQcJcApUmn53QGiknMSXe8yWfyM1y1gUHwCcK5dqeurBKps7LxjcN8uXEaJyaLNiDze4bKvtsXGRqYGJ6",
  "key17": "2JmHKaL1VvDz4jibBXi126UH7dsFGd9iF7nkhezEoEPXVrtpVsPCs48nbyCCu5WiXGwZR9mWw6akTeU4nCQ7CyWJ",
  "key18": "3ycekQd6e5teqNP1nREBCrLr8ovDTHTiYPXwfpFba1A687Lc5PsdugYTwdaHiJ2ktDEtEVi3ckQpaFsJ77EjPhUV",
  "key19": "2KCnrmjVLoZNTSfZ25x3gyQ2SCBsVXuJ6rBrxoE38qHMooW93XXthpqbyGAMuaREnPs77tRW3FTRmtQ8hE4vtHtf",
  "key20": "44AAPfSaKZqbTkvLQYNsRaVJDFq2jnoRbmsVhN1b25SiNrnxorapCvCq6edh15mVJp3s1UnYKx1HKFpzVY1Wb9jQ",
  "key21": "4BvEJXCebd6F7WXEjU3Tt9Ud8V1EF6PsmW1gTacwmJ41YTwPHvWARsWRYbX51PQP3y86nHUbdAuWNd4WSrKxpzc2",
  "key22": "23gkoaFCHrxS6gPYRwAAsnkLfGbbK5kGcjnsJrBMJJ3bqXTRuDEUqatWReoNRGGDqKpNe3omNobUbEVGdjEQULju",
  "key23": "5j5K434FEMEkMgreb9QUQYLKBQFXaz4XTXsN8gTFkmbhQ4MSXoEoUFKpzYFuiD6y4cei8qNay4SYNGYgoQdZF8if",
  "key24": "PDzSQxW66BvmCrugN6937Cs2fhr3iBJXJVaWH3c8nizDr9PhaWNt4sBu7a9THbftH18rEZv8XpUSZ616QMP6WR2",
  "key25": "4BpzUqKauQaUkALdumCEKDz5n9sQqhEizLFiMzb2gvGzY7aV1b6fuCAx345rXZynrRuMR3taVQ6o3gYjVmY3d1Ga",
  "key26": "5LAE2AbQ6Jua4Mh34xWnZfds2qPiE3ihcx4DHrGsbiyzxJYvBut9BCPYzeVuhc83pER9DfvPxPn1wnZE25HScFAA",
  "key27": "2i1R8vTSrF5rgJ1z2RNLCpHj7w2Tk5m7g7a8XWWza1tFui83uQb2vGqtRbGjuZhbFg9cubpg7zCU5cp2SowtmVow",
  "key28": "3yBt2CPGW4aAapSNuH82RPYnCu2yMLAPeouYzvyJoSG6jcH2hGSPhxaqkkBRNSd23zmcNzzxMXqrWwxkKRLdb1xB",
  "key29": "26DHHTRZ4rymTirjEouKQcgevysEBXyMJUHUQfzwtwCcGiJaoerpsd2VWeew5aqecY8NKHnmhpP3DrcMDVS8RSor",
  "key30": "prGBxEDYQcA3NLL5Ksa4ShtfNSed75mSRgYAbdcxYJYZYHArQdbUgffQVfHsep6nZGVvJYjc8uWANd6eg36qkjc",
  "key31": "3uhku5xE7847EPv1fPPCDRJZqHTboStJBjRXfhMFqQunuHuosWYYHevhspsETS87XXKtUeAqEC3VWJYuEVVPLv15",
  "key32": "45zNXzmqoG84qPjUzASZpqHitQ8yavQTHFsZW4wBTxRKTdYpc25c9DW9uni2DpNjsYaA8ct2NtzfrtEoiQKtxXWB",
  "key33": "5pCYc7ZX3ibULqHrf6sbnt2P4PDa8RxLES3soP4YavXxoHKfMvyJXYXwc2eVg4xokBeW8bcvFyiVUkdeM5Ntpg9G",
  "key34": "VJRMQzU8s3BJ6MMNr2etFLwtUsUmH5UbD5vJsq7EgJAkbwobexwLr8yJgmMTnwqKuqAoGG8zVuFbC712QzXZujy",
  "key35": "52iaABohWGRtLHP2w7Y4fhHbGfw6kihnmgLkA5e5fGosqoHCPKhiJXEaorixsTzLGc3VSsEz55WaopEXZm98MfW3",
  "key36": "46PpRBZ7ubXHYfnYskyiraUdqi5dTRwCLrBwx37EzooFT4Q5fhALNeHoXN5t2wfExjrhgCrVYjXvEaKjjjUPY7AD",
  "key37": "tWhyeW7pyRJYgPwbg4gLPbBhemMMPyMo8HRe5nq9euvY6JfZZvsh6BjumrL8SxqhT1ZfNo5Vf54F1GfAUb8XUGJ",
  "key38": "zurmhvaERGCrzNQLBg5EGr5q7jfMDKXneCZ4QHLSFnvD4KJeWwLubBjTiXAppKnM62ro9F2Q9N1D54tWaB6Jwk7",
  "key39": "5DTSMfw1q8JzyDSaNpoUChoHsBH4uHyLGY9JAasvkt2rc1KF6bZrV8dD5eYdpiwURX8aSGJw9iFh3AMF7mTScgb4",
  "key40": "2hp8mKPMcuf41JHbHcQwBt5oEvkQjbn5gwGpNVfhtfVG814j4WDjsLq4zeW2Z23B67Mh3Ziu2wUV3ubDczJYTDCg",
  "key41": "2CUoD9pc3ZwudBoqmXkfiEPaGriSpaC1x8GPdFuDYwyitw6EqFLWi3t3JWyKYyHJ4KTgwxonGr9zgehCYCPenNmB",
  "key42": "2pqFvrYQ4yiu6FXEmL23yf4MxGLr1gEnieGLd5XHHVt6y9QosDoXnmtKsx98hgCvdxW57xgCGqw5hxXARS77NkAU",
  "key43": "5vZ3oKFnczkTztBhNtBrosGeBs4QVu3Nr9UYdWAKsup4WZw1fbm9PEjkKDRrnEUUAkqHxNNNDdK8qoCgzXqZXXNB",
  "key44": "4Y19ztgonwR9HXYLBLBTb5L1fdLAn8vVTLVg9FjHjd7y7w7a5rzTUzfu5NgqjqZmP2Z7n9kH7uDoY1wPvJjsyeFK"
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

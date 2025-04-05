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
    "3jVVNafGvNZdrbtd2t9D35jJy8RmSCcBcW7hvfaoE1kyNxKUxf7h423WE4pcSz4GKP5CjyHnHNYZo1aAu7F9hrQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p5g2d2KGpcmwHKbCP33ETo6uw1bkB5F32CXABmPbqzr6miCYYNLnAAt1Ld9hq5SsPnLZK9JhyW2HeL9ee1ubayb",
  "key1": "62ycqPD81iASxqV3rWQd8TcknHq4MJ2XQvsfQBfD4iRgJjQcwGeiKQjSgTybjvMGqLvK8v3qBPuNBDAfqgJ2LRBK",
  "key2": "SmU2auwyRtk3x9ycEjWGvXDHPHXFTxs7fMVae5v81pZ219GehUTWXtcK8zbV2xq9guxocL84yMWSt3MpGuQSCXB",
  "key3": "4HSehpnX22fgWdYLvPYUhiC6aD59zZYgKK7TYbYS5LkQXFNS49SSSzJhgZSjmoU5uUHtFtTLLxmaufTHoxK3eUxG",
  "key4": "4TGuYSgbgUrT9xYw46Nq2rxyCLz4QTMpSXVeUWkfkU2xd9aZcaWg2Da4pj9SVhLxFipR2Bf7Fozoe6UhKeoz7qua",
  "key5": "53PbrMQusGs9pCyH2QuBa7f4aCS2NQ69GJnNDmWiLMMRwfVbXuUSwe9CCrg2zySVDsaWUiG2SU8TXtdEqa1LMLeh",
  "key6": "Qewoe5HHvTyTaKuBRFQt1bfXhwiJ6Xpg9Gvo6cbrmeJVLhfgoWKpFLBhrJyBS7EQDaZCA2ZPF8q58TtLu9YG2bu",
  "key7": "4TLkq17uhC5NYLHeXNPXsBsBPDerzuQ3qCxkT6EJc4CMhikUNCXA8ZoJvSK4WJS3PGLVyBTGTXxB2bjoLhrcNwsg",
  "key8": "va7X8g6e63a3vdAquPqrEm6oezvZrAKHGXHRucSyJ1qdYvfUGq6H2Dyhe1kdT3dWRtBDzFBJomdW4pY6hQQGypF",
  "key9": "2b1RjU2ajyPP9DWx4nBgPoPSfsjfqriqCkMAB2FT1xDo9DaAWswnH9q8EdaKVZsDwA9dEH8HTnfiVrqpwHaYMi3q",
  "key10": "2wnctdJLkxKoo9RK5YdsYQ928V8r682qYjKvujKjjpjdxNZidi1ch22464FT8RW8Re6TRdiBX75zGdAmdzizNFTL",
  "key11": "5FnAqvQX1PUmynuncoChXo8hDoX69kCBmoeb7dMFM9rnEhZ61tjTnAVssgaH9E1AW9KW4QjEW2pWc57JzRou3H9R",
  "key12": "4ycUv4ZPUNWuf97rkfNoUPrXSzadmf6mDTxXa7Y3Bpf4wBp6owdcCsjRoFEiP8gZHDD2q6TgYsG4rePDoFHWeVDB",
  "key13": "3dXfe6LZ9ppg8tPjHSt7U39pmQkDWMK8gj7mfntEEjkX8Wbu3t5tXoddxWzBLvUpHkrggVBwsrbWXtW3EEUvJPN7",
  "key14": "xmBWPbYB2feD9n2PZJ9VMujyNvjCcVnprXZRFp7qexJ211hA3RsYeoFvDPWtMLC7BGUYVK8RdBAgruYL8ayAgLd",
  "key15": "UMQafjFEwQtUYH9Qdvnt1SRXwX3aLofBFvQockpRzVbZQL66e9QZZtVXMxnorecyMgCgZUbfpY2oZFbX7skg1W2",
  "key16": "2mX73fScu5pqHtVpd2Pi5JTuc3HPhFmPnpvFhksJhPYawLnMwqwHjSF3LCyWRKQ86UXjz9vA8Q8LBhbSGEGiRpwX",
  "key17": "3yhcPsbNujpb9MNHtcfms75rXRPGDMEtaciFGYzaMSYGZcHmeaaGcEa4f96fThVh26gtMxBHKdVeFPRBuXUok4s3",
  "key18": "3jy39rsX1uYQ7pnruMPvoizg2Yw3h6KboNJGscxN9kNYYVdVHFVa5EawFgzLbgBKyZmKxYcfutYzoMpytZ8qnEEf",
  "key19": "4zK8vF9bsrwwcRJgmMfDV3qBGJcR1RZocC5qp324QharnMruExtyASXW6yiW9w2pdcAGgwANnGWxoougohdoM1V1",
  "key20": "38RTcLgyGvbV3kc9f67yM8hDjbdTzx4AJHvYbbS5wcwEUGoLx8iH35z4527CnvE93F5Tx5kRThGatt7YHCPomsMy",
  "key21": "3UKpDRqLJx6c4MqqhDdAj1rwACECreYkhCCYNLm6Mb57bfUNnSScacZUj7KYg3CkPo4yxaRVcwFEhtZzTd4XExRr",
  "key22": "2kzoe5wPatSgwCmwqhZWPPCSi54GVLsQAHrtKzchD76kjJy8FQQhRtQmpb1gq7FnttLQHk3EjnJ691P7MPJZEmLL",
  "key23": "3DKaC18TqRJ3x95gf6Pm3kAFmm2Btr11hpJzLURDfcZfocQLThoCWVYx1uqpquMSr99UGmY3ivbJdqaBRkrGoBKY",
  "key24": "qUzA7MntTr49k9V3xk9quL15DgvFaKM676aQueekeaJYD949gaCvDPwEDXhHquWUS5uBvdfoGp3wnt79VBxPVqG",
  "key25": "46fUewvvfjSCaSw5jNRHHrDuULMj11eZaEu5obw7F1LSodSGMv92Y7AR4Tcd9xAbbW1FHbYVf2uXx3S5gVRjP8x8",
  "key26": "2NF9NypiPANac19YvsM4QTRbdyCSsPQxacETxT2NZVnQs3LU9xuBucJsUxMpbjmnjxGCAXXYrot9L5Kjf6hEgdz7",
  "key27": "3Y2Et8GSAzorq9e5o7FqSCqqZnoacKjX2TT7aKdeAFbqm7tPUit2bXZEP56g9fqW4DG3EJxQQWdre8XXSm9KC28",
  "key28": "3xsCJ6Gcnt18ruRKykwBVUMXCrnLaYcaJNUscft81oWcaHdK5cAG7AnrTwyDGAnFkond4aPGNK4GGSoTzVY1Jcqb",
  "key29": "3h5LXbB8LhczJNrtJYSErwx9rMc4eu3NkdU1MQYpr96DoDX2u1qSqvcH75PmNgZCFW4EBKas816y1kkCWJ5FeyiY",
  "key30": "3uvPiHNf1zDeTFKgPQBwM1FGAHmg3caiwSniHyRg9stuC5nBjEvv77dfipQwv1xmqunvpg92xqNwuqPk4yFkjrtn",
  "key31": "35jLDCfPFppMJer2DWYVd8KSZG2nvBQ3YXSqw6oUr4Kq7MwLYHfFsVmN6nzxoVZ9j732ncCNRwkwgsdubkG82hoF",
  "key32": "xeufca4sJesyUgPahEtAjRU6MMYNrsndS6F27sBv8YQkorixm3NbBhvTp42GSNHKUhNL5VfCSqQ1vKgU6aWHNNj",
  "key33": "2VAk3SSZWLVLBj8nJFvLboeYzsCZ54gsPzUYLg4Eh5rLUgNskf2hyMC46gQonPaDgTKFxvJWfL1JsqwpEnHivkfQ",
  "key34": "5Lp3QuyuZ7oCcnBMe3ckSUzBLAHLep2wonwCRmLRtjWbXanebgJR2sQp3DontakxxXRSJYzq3jDYPjJExQXJieZ",
  "key35": "4xw3vGbqy4C9gbd6i6hrRmVsBtNQQSYuG5BnKy7PtUZ9To38aqpffi6rotzSJHMHNK9vGmibuyCrd4dLkHzaRpbE",
  "key36": "4zgwEj5zR3LRLJRF2iyMpv8SqSkKxGgmnhAJarnk6LRm9dEcU198mGixmAngERTfiKrKiJSzyMcQQdS1rv5e1Y6m",
  "key37": "tWavwD7DwfDLKHLzsLrcYe41EM1Esa1MVeibom6caxCTXd9uzPLqVy6xDL4bLm5hMZjcfpyv4CY2JStMrEWbUGk",
  "key38": "2dXqFBpTS9oTnhDHarMyQTewywme3usataDn43jVdR2ovNKGZDSyKeCqghpRRRiG6Fn8vWPSECiGqQZb3qqfXrwb",
  "key39": "TVV4FufPa2CovMEh4wSLojUYMW4tCbhDGaCgoMT6SMRNcanHtQ65qPtQ6SPg8FdwhPFGe4so5Xq8fEZjfCWTJNr",
  "key40": "43T8gA7N11AVkxwKDsWo7taF4DZGFhYL7pKJ5vq2FVYuGXW3gRbUmpmHUKKedfvvCP3zYCVzTqHoR77YEPcTmkkB",
  "key41": "2s2SQkZ5WUWgkdULQfP3iJ2y4KN7cRcrDuVJ9WSRKa71cNaF7cBWeyypFbBUmgJ6SpFR9N3soQjSUTnZ2r6241ak",
  "key42": "3ttecHUivv4pg7S9gBkjynVHYbmtqAFJ2nnGNK33rfZRAvFQQSNupCzPiQv888bTztV9nkB2swL2Lwb49ubdtTfk",
  "key43": "58uxRqsrKUi2AyGfaMrxM5Y9mwrbmse2zUF64WKf7DJo9Vc2m2Pe2KJE4Eigdnu7UEN1Rkxh7ZYqCHVpEMGCJ7Lk",
  "key44": "2BxcyLFQvJRR1snLAaKpoNBtrzbkATFvi8bBQkQxXXi549stY2WEyteWK51fRkioytyH69PJgTWR3LervHfBZwrr",
  "key45": "61JYx6iFePcPUFGAc5XEQMUF3FcWrA9MyTyLaRrB8DzdmCWHjBcptb2rF9x7crRTv6YzzXkT7XPf896CWaMhi3Du",
  "key46": "2FREBXC9hKsy4cx4r92YPnJB8br21F545s85w7szPEjUF46X8bEMXPxJfRV8WZE8tfKSZA8mGeKey1rcghTxLJkz",
  "key47": "2ebf2Ptj6xuJYWCYXB1q3aCBJuin5GjdrVRc7kGTiZLTw2ZjXvoigtGJgjSH6cbcDWWVBRDx5BwwsYBKz89ZVXpK"
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

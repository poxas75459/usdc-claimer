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
    "46ky7BsjhpbuA7G2vstuBdZDc6qHs3H5uMAJ7ykHPkK1UCa24rmpcyWCDpaPL2cfwXYDMLrMKFgxbgvRg2XG1sfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faKkWuc26KK6pMgff23yFyV3DgGe3MnBQ6FLeJ5NqPY5vu2vctt6gEHBBGUA2qcZdgdeoBBoGmK2dRqHncprtS2",
  "key1": "4BaBrkSEQUsnNrtFsYuQiUdWMT92FDDA7jEAts98Tdpn3QkxBCFnb53rXMJEureSCG8azi4yNZTxpKfUPVghbZo1",
  "key2": "31j784NKHhL4pcvFh1sSHVZsffQ4ejP5skxLyrg3xyjSQSQCVN1G93hXMemj55dnEcETG8d2ccsQwCVMhUgotgGb",
  "key3": "V5vXNcZvDeaUEvWermx46t59JMArKF1HjdQLWbNngcefyYJdthy72X9ZHTwBT24o65M2wHwYawoNZtZA75ZCmvD",
  "key4": "4AYtwC1GxJxtKEkwP9v7G3Ac9UW2znrxijZs29pKZXnTvfZR3zt8CNDBwq5XJ8uaeJRb8PVK4NJTmoqqGUcsar8U",
  "key5": "4gbrt8dAj4Qq3XpcfKCgmN5fxNATCwxd32zgt12pomHEEhLQYf3ftvd7Yzy7RAc8crrdoiDjitSMMff9UdCDUC9L",
  "key6": "56LBzyqAGuBApquFRRACdRZRshXML5jX2QJLfSjdmunrkTaqRAYVJEmZTm1rTx9BLCuJt3fp9zNS98ZAvmmE69nq",
  "key7": "4kUbeEk2CdjV2dBuY5kw2pcvqTxA88xnWZ6EFjUaiSpupU6wjhjvJQ2XF9FYx6uxPsXNxUDDPaa7MpuZqV6ngMA1",
  "key8": "4awyfFsiGcmcbNcY8bvMYH1UceBoHD2VcNduAR4TvzsHop1nEXx3x3p3tgfEcFLiUSyr7nh8cMEGnj5ZgX8wakjN",
  "key9": "VR1NRMrVVp52pjhXZryuxUbMbinaTgUSQicUeo6N5uoD8aNKdYuTxr8cQdPfdJ6u2kqjugdG4oM6xxhLd362nni",
  "key10": "35k4nTwcdXg8ePg2BiNGp7kXn6QmuPViYQBhGnLw2Na1NGbRriVhgVAhF49KEu7PkKuTpED8dtqZavip7DeM5RjP",
  "key11": "29ByjSr7iusj1Q4RDSV9rW3w1JBxjAd32RMs7YETgVuVYLZhcWGTs8GDX8VWVdAy4WcL1HudLo8Gc1uh5XkaifvF",
  "key12": "1HSC9vo68vTbNFmXxvvG3rF2saoz2LninWriLtdJ85dYBKjCSA5T8Rqe7z6BL5XM6CUmoEiAEtiDF7BiwqGbgeN",
  "key13": "u5P5bny61sUmVn89im9qL2cAz5pFHiVyyXeqg7xst6VVx5af44bmzDkwhruRN6hJuYGCvLe2CMpHqqrrmiA4R8E",
  "key14": "3JCNRtW1jHa2sHqqCPmgw4hPCsakN4i9XehvBf2oN5qhaesPnTRim4q7t8HZ9AgrTN7eECmRFfX42qo4ZCvn26vt",
  "key15": "5gwx9RBgPoWZT2e8MZo9CY3TcjnAwWgMmHq6RAonFGjeaPxeo8AcP7LPWvPFh7ztXCpd7SfkZ7XZ8NHFYMXYAvcT",
  "key16": "5e54U4j5dxnoiCokcsVkZsrcEeeFgD84S45X99P5bChhYx7qpgQkf4hq7gQbkqGFMSq4XVfRBrC1yWfNhb2xHMBy",
  "key17": "3d1JceHUL28M3mvV8Y14dZAYNNw4UFQzRhYPeGgJDAYdwHF3LAEHB1AwtySYzQ4XEYfBzyUKVbuvojphAFBNNkEF",
  "key18": "2bD1h1Baise5QkWvBe7WF53fDbunmTRud5PKVUXsJ1UFQwAPWCncpNXVfXkAuRYuv4AUcvafCFgxFi7VPNmh7HoS",
  "key19": "7iyat3Fxwfwmwg88kdiTYaxUcCPWvr7SQhhDvS31qJmSyjDBgfPy5buJyUqVfefzvne7RkVkTdmLegFQxtvaYVX",
  "key20": "2PJJW3Ab595QP96ErZF4pTBRjd8pJDgK3wL6KPnaUw3Wtj5CNUihHmWk6kpDCsJatqS9PuUTLTAGQGxZvxBm9DXz",
  "key21": "4q2ABdTJm4V832J6idQejzYoucnyprkMZxy4e9jLHsxezBg6cdQGuW2tYctfuECL5JtLr95igxpXp2pG42cTX7hQ",
  "key22": "P3axM7e5jBtHt2pjYuAYzeUZ7Qo6GUzGNPnviZ8p72nwA954qNRb9H6qpqrvvoRNFGRrCDokmrPKG5wFBnErKjG",
  "key23": "3v1CN6QT9wWfHFtgsUNSd9sMzvvReHzF3j6SuGeDGsXGN8Hp9fazEuvho4ydPrH69oegMJuKGKofRpqBLHA1aZPJ",
  "key24": "Z5tRJuhxdyCcEZnRUxHfK2NtABNQfQ1NTJyMDKwFta4suaCrSQ4yz7an7KTowDMrF1tto5wHafkWZ7S9fXuqv1x",
  "key25": "4gigSj7kATzoptC1o3KEMGyKLV4w5tLFLQwA2f1uwxB8xmfciDRe7DVC58Pkpp9GztWZkRDBn9FQzbwcAYcY3gUm",
  "key26": "5ZiPc738xASnJ4yCYbjdKd9s3udxuy9XB8kQwULos8uxKjfazHcYgkFEpZkSkimkmE1awPa2VnMzDZjMJyfCt7cT",
  "key27": "5yi9N2bfUp1wQ9mdVkqen2GXbKd43f8Y1B1wSML3f7ePsoXvugzD2wC6Z1BsX3DXz9kk1VziJcLEt2K4V68RZaDB",
  "key28": "AKKx5axVGg3cQa2i6enbTCykpoUHPXGcR82XvKu21YfWRVsHuYX1YBfB6bKE4on4SgV1sbBSjiPZE8gNErM1JLQ",
  "key29": "dZLFURr1gnfhKSAzYcqjh7hFqLn3WstER3djRz4Pih8MUKECm6oJNH9fRvCwSxUgkmBopzj6K1G6seWMvejpjZA",
  "key30": "2QvDHA6K1zQdZdoAXQAdL5MHapiY3ABGbxDVTiG3MqpMnRpaXpst8VhzYd5MVHUWCsdFZZmKYRFYzh8u4dvavckw",
  "key31": "4eAgJHz6XBWxj3bpcnyCPeoKykJtBuvrwanJWRLUfRaAv7AumL3bDDJvwmE9yZ8S2gemTLnqTitFoMAafCnCAFQo",
  "key32": "2R7JeG9uESs2evTSMmHDjyDokfb2xT66AGUhCAD3JG52V5cs1P4gq9xEtdgHaDCdwcz33SEoX9xW7FgCvTzCF7fr",
  "key33": "4nTdk1GKcBpG12M9Y9K1pA5LBMhSzQCwf22J4Bo32cprbknWT6bi4mRVsA5QNURAHCDQXibszwRWmBiRVQteftVA",
  "key34": "HmTj9ecmMeRUwbpSDMVweLJqj8LE3BBvNFDWtiBEvxJvqR7pDdoSgLC2nzxVMCXJF1XHsMexr1UyJei8vrRaDgn",
  "key35": "3nUYPjq7sv67e3eFtP27Q9AF6ZizoLPepTwCW9gAjUJ2twTKd3SmRSb1U7qEZcUhQGVUXYr2CcKb6ch5vDJkR2cy",
  "key36": "3UEESXd1UqrYRVDjYoPVzbkBSij4RLGKoVFrf4swcrXhqZQ5vNLqy9Kss7oBhe3EzaLezi9919tc258LKBSmsRKt",
  "key37": "4JxBPpiL2CUzj1edMCx8PEVEedGXJxkiaSLFdoki4G6gU4s2QJuRY6QZ3NHV1uXkR1ADiL2eAwYem6sHGpeJ7PSX"
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
